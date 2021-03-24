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
      }
    }
  }

  plugin.trial = function (display_element, trial) {

    // create trial data store 
    var trial_data = {
    }

    // setup audio stimulus
    var context = jsPsych.pluginAPI.audioContext();
    var audio;

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

    for (let i = 0; i < draggables.length; i++) {
      // add dragging events
      draggables[i].addEventListener('mousedown', function (event) {

        display_element.querySelector('#jspsych-free-sort-arena').style.cursor = "grabbing";

        let elem = event.currentTarget;
        elem.style.zIndex = 10;

        is_dragging = true;

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

          elem.style.top = clientY + 'px';
          elem.style.left = clientX + 'px';
        }

        function end_event(e) {
          document.removeEventListener('mousemove', move_event);

          is_dragging = false;

          // elem.style.top = elem.dataset.locy + '%';
          // elem.style.left = elem.dataset.locx + '%';

          elem.style.zIndex = 0;

          display_element.querySelector('#jspsych-free-sort-arena').style.cursor = "grab";

          // moves.push({
          //   src: elem.dataset.src,
          //   x: elem.offsetLeft,
          //   y: elem.offsetTop
          // });
          document.removeEventListener('mouseup', end_event);
        }

        document.addEventListener('mousemove', move_event);

        document.addEventListener('mouseup', end_event);
      });

      // add tracking events
      draggables[i].addEventListener('mouseenter', function(event){
        console.log(`Mouse enters ${event.target.dataset.src}`)
      })

      draggables[i].addEventListener('mouseleave', function(event){
        console.log(`Mouse exits ${event.target.dataset.src}`)
      })
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

  return plugin;
})();
