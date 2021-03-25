jsPsych.plugins['eye-track-image-sort'] = (function () {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('eye-track-image-sort', 'stimuli', 'image');

  plugin.info = {
    name: 'eye-track-image-sort',
    description: '',
    parameters: {
      images: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Images',
        default: undefined,
        array: true,
        description: 'items to be displayed.'
      },
      audio: {
        type: jsPsych.plugins.parameterType.AUDIO,
        pretty_name: 'Audio',
        default: undefined
      },
      image_height: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus height',
        default: 100,
        description: 'Height of items in pixels.'
      },
      image_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus width',
        default: 100,
        description: 'Width of items in pixels'
      },
      image_locations: {
        type: jsPsych.plugins.parameterType.INT,
        default: [
          [25,25],[75,25],[75,75],[25,75]
        ]
      },
      exit_key: {
        type: jsPsych.plugins.parameterType.KEY,
        default: ' '
      }
    }
  }

  plugin.trial = function (display_element, trial) {

    // create trial data store 
    var trial_data = {
      mouse_events: [],
      final_locations: []
    }

    // setup audio stimulus
    var context = jsPsych.pluginAPI.audioContext();
    var audio;
    var audio_done = false;

    jsPsych.pluginAPI.getAudioBuffer(trial.audio)
      .then(function (buffer) {
        if (context !== null) {
          audio = context.createBufferSource();
          audio.buffer = buffer;
          audio.connect(context.destination);
        } else {
          audio = buffer;
          audio.currentTime = 0;
        }
        startAudio();
      }).catch(function (err) {
        console.error(`Failed to load audio file "${trial.audio}". Try checking the file path. We recommend using the preload plugin to load audio files.`)
        console.error(err)
      });

    function startAudio(){
      trial_data.audio_start_time = Math.round(performance.now());
      audio.addEventListener('ended', function(){
        audio_done = true;
      });
      // start audio
      if (context !== null) {
        audio.start(context.currentTime);
      } else {
        audio.play();
      }
    }

    let html = '<div id="jspsych-free-sort-arena" class="jspsych-free-sort-arena" style="cursor: grab; width: 100vw; height: 100vh;">'

    for (var i = 0; i < trial.images.length; i++) {
      html += `<img src="${trial.images[i]}" class="jspsych-free-sort-draggable" data-src="${trial.images[i]}" data-locx="${trial.image_locations[i][0]}" data-locy="${trial.image_locations[i][1]}" draggable="false" id="jspsych-free-sort-draggable-${i}" style="position: absolute; width:${trial.image_width}px; height:${trial.image_height}px; top:${trial.image_locations[i][1]}%; left:${trial.image_locations[i][0]}%; transform:translate(-50%, -50%);"></img>`;
    }

    html += '</div>';

    display_element.innerHTML = html;

    // mouse interactions
    var is_dragging = false; // state variable to track what kind of mouse movements are happening

    // draggable items
    const draggables = display_element.querySelectorAll('.jspsych-free-sort-draggable');
    var topZ = 0;

    for (let i = 0; i < draggables.length; i++) {
      // add dragging events
      draggables[i].addEventListener('mousedown', function (event) {

        display_element.querySelector('#jspsych-free-sort-arena').style.cursor = "grabbing";

        let elem = event.currentTarget;
        elem.style.zIndex = ++topZ;

        is_dragging = true;

        trial_data.mouse_events.push(
          {type: 'click', object: event.target.dataset.src, t: performance.now() - start_time}
        )

        function move_event(e) {
          let clientX = e.clientX;
          let clientY = e.clientY;

          if(clientX < display_element.getBoundingClientRect().left + trial.image_width/2) {
            clientX = display_element.getBoundingClientRect().left + trial.image_width/2;
          }
          if(clientY < display_element.getBoundingClientRect().top + trial.image_height/2){
            clientY = display_element.getBoundingClientRect().top + trial.image_height/2;
          }

          if(clientX > display_element.getBoundingClientRect().right - trial.image_width/2){
            clientX = display_element.getBoundingClientRect().right - trial.image_width/2;
          }

          if(clientY > display_element.getBoundingClientRect().bottom- trial.image_height/2){
            clientY = display_element.getBoundingClientRect().bottom- trial.image_height/2;
          }

          let percentXY = convertPixelsToPercent(clientX, clientY);

          elem.style.top = percentXY.y + '%';
          elem.style.left = percentXY.x + '%';
        }

        function end_event(e) {
          document.removeEventListener('mousemove', move_event);

          is_dragging = false;

          // elem.style.top = elem.dataset.locy + '%';
          // elem.style.left = elem.dataset.locx + '%';

          //elem.style.zIndex = 0;

          display_element.querySelector('#jspsych-free-sort-arena').style.cursor = "grab";

          trial_data.mouse_events.push(
            {type: 'release', object: e.target.dataset.src, t: performance.now() - start_time}
          )

          document.removeEventListener('mouseup', end_event);
        }

        document.addEventListener('mousemove', move_event);

        document.addEventListener('mouseup', end_event);
      });

      // add tracking events
      var has_entered_image = false;
      draggables[i].addEventListener('mouseenter', function(event){
        has_entered_image = true;
        trial_data.mouse_events.push(
          {type: 'enter', object: event.target.dataset.src, t: performance.now() - start_time}
        )
      })

      draggables[i].addEventListener('mouseleave', function(event){
        trial_data.mouse_events.push(
          {type: 'exit', object: event.target.dataset.src, t: performance.now() - start_time}
        )
      })

      // add keyboard exit event
      jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: [trial.exit_key],
        rt_method: 'performance',
        persist: true,
        allow_held_key: false
      });

      function after_response(info){
        // don't do anything if the user hasn't moved the mouse over at least one image
        // this is a crude way of ensuring some kind of action on the part of the user
        if(has_entered_image && audio_done){
          end_trial();
        }
      }

      function end_trial(){

        for (let i = 0; i < draggables.length; i++) {
          trial_data.final_locations.push({
            src: draggables[i].dataset.src, x: draggables[i].style.left , y: draggables[i].style.top
          });
        }

        trial_data.screen_width = document.querySelector('#jspsych-free-sort-arena').getBoundingClientRect().width;
        trial_data.screen_height = document.querySelector('#jspsych-free-sort-arena').getBoundingClientRect().height;

        jsPsych.pluginAPI.cancelAllKeyboardResponses();

        display_element.innerHTML = '';

        jsPsych.finishTrial(trial_data);
      }

      var start_time = performance.now();
    }

    // mouse tracking
    // function trackMouse(e){
    //   let clientX = e.clientX;
    //   let clientY = e.clientY;

    //   // check for collisions with objects when not actively dragging one
    //   if(!is_dragging){
    //     for(var i=0; i<draggables.length; i++){
    //       if(isPointInBoundingRect(clientX, clientY, draggables[i])){
    //         console.log(`Mouse is over ${draggables[i].src}`);
    //       }
    //     }
    //   }
    // }
    //document.addEventListener('mousemove', trackMouse)
  };

  // helper collision checker
  // function isPointInBoundingRect(x,y,elem){
  //   var rect = elem.getBoundingClientRect();
  //   return x > rect.left && x < rect.right && y > rect.top && y < rect.bottom;
  // }

  function convertPixelsToPercent(x,y){
    var arena = document.querySelector('#jspsych-free-sort-arena').getBoundingClientRect();
    return {x: (x / arena.width)*100, y: (y / arena.height)*100}
  }

  return plugin;
})();
