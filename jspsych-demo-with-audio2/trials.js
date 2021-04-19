var practice_trials = [
  {
    audio: 'img/111_sentence1.mp3',
    images: ['img/fish.png', 'img/funnel.png', 'img/giraffe.png',
      'img/lollipop.png'], compatibility: 'practice'
  },

  {
    audio: 'img/110_sentence1.mp3',
    images: ['img/clip.png', 'img/elephant.png', 'img/pen.png',
      'img/whale.png'], compatibility: 'practice'
  },

  {
    audio: 'img/109_sentence1.mp3',
    images: ['img/bear.png', 'img/dolphin.png', 'img/fork.png',
      'img/microphone.png'], compatibility: 'practice'
  }
]

var trials1 = [
  /* Trial 1 */
  {
    audio: ['CriticalTrials/1stList/CTrial1/strike_the_bear_with_the_necklace.mp3'],
    images: ['<img id = "necklace" src = "CriticalTrials/1stList/CTrial1/necklace.png"></img>',
      '<img id = "necklace" src = "CriticalTrials/1stList/CTrial1/necklace.png"></img>',
      '<img id = "umbrella" src = "CriticalTrials/1stList/CTrial1/umbrella.png"></img>',
      '<img id = "elephant" src = "CriticalTrials/1stList/CTrial1/elephant_umbrella.png"></img>'],
    verb: 'strike', compatibility: 'instrument',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#necklace', '#umbrella', '#bear', '#elephant']
      }
    }
    ]
  },

  {
    audio: ['CriticalTrials/1stList/CTrial1/strike_the_elephant_with_the_umbrella.mp3'],
    images: ['<img id = "necklace" src = "CriticalTrials/1stList/CTrial1/necklace.png"></img>',
      '<img id = "umbrella" src = "CriticalTrials/1stList/CTrial1/umbrella.png"></img>',
      '<img id = "bear" src = "CriticalTrials/1stList/CTrial1/bear_necklace.png"></img>',
      '<img id = "elephant" src = "CriticalTrials/1stList/CTrial1/elephant_umbrella.png"></img>'],
    verb: 'strike', compatibility: 'instrument',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#necklace', '#umbrella', '#bear', '#elephant']
      }
    }
    ]
  },

  /* Trial 2 */
  {
    audio: ['CriticalTrials/1stList/CTrial2/whack_the_ladybug_with_the_fan.mp3'],
    images: ['<img id = "cow" src = "CriticalTrials/1stList/CTrial2/cow_pencil.png"></img>',
      '<img id = "pencil" src = "CriticalTrials/1stList/CTrial2/pencil.png"></img>',
      '<img id = "fan" src = "CriticalTrials/1stList/CTrial2/fan.pn"></img>',
      '<img id = "ladybug" src = "CriticalTrials/1stList/CTrial2/ladybug_fan.png"></img>'],
    verb: 'whack', compatibility: 'instrument',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#cow', '#pencil', '#fan', '#ladybug']
      }
    }
    ]
  },

  {
    audio: ['CriticalTrials/1stList/CTrial2/whack_the_cow_with_the_pencil.mp3'],
    images: ['<img id = "cow" src = "CriticalTrials/1stList/CTrial2/cow_pencil.png"></img>',
      '<img id = "pencil" src = "CriticalTrials/1stList/CTrial2/pencil.png"></img>',
      '<img id = "fan" src = "CriticalTrials/1stList/CTrial2/fan.png"><img/>',
      '<img id = "ladybug" src = "CriticalTrials/1stList/CTrial2/ladybug_fan.png"></img>'],
    verb: 'whack', compatibility: 'instrument',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#cow', '#pencil', '#fan', '#ladybug']
      }
    }
    ]
  },

  /* Trial 3 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial3/hit_the_mouse_with_the_cup.mp3'],
    images: ['<img id = "cup" src = "CriticalTrials/1stList/CTrial3/cup.png"></img>',
      '<img id = "mouse" src = "CriticalTrials/1stList/CTrial3/mouse_cup.png"></img>',
      '<img id = "frog" src = "CriticalTrials/1stList/CTrial3/frog_tube.png"></img>',
      '<img id = "tube" src = "CriticalTrials/1stList/CTrial3/tube.png"></img>'],
    verb: 'hit', compatibility: 'instrument',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#cup', '#mouse', '#frog', '#tube']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial3/hit_the_frog_with_the_tube.mp3'],
    images: ['<img id = "cup" src = "CriticalTrials/1stList/CTrial3/cup.png"></img>',
      '<img id = "mouse" src = "CriticalTrials/1stList/CTrial3/mouse_cup.png"></img>',
      '<img id = "frog" src = "CriticalTrials/1stList/CTrial3/frog_tube.png"></img>',
      '<img id = "tube" src = CriticalTrials/1stList/CTrial3/tube.png"></img>'],
    verb: 'hit', compatibility: 'instrument',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#cup', '#mouse', '#frog', '#tube']
      }
    }
    ]
  },

  /* Trial 4 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial4/rub_the_butterfly_with_the_violin.mp3'],
    images: ['<img id = "butterfly" src = "CriticalTrials/1stList/CTrial4/butterfly_violin.png"></img>',
      '<img id = "violin" src = "CriticalTrials/1stList/CTrial4/violin.png"></img>',
      '<img id = "crayon" src = "CriticalTrials/1stList/CTrial4/crayon.png"></img>',
      '<img id = "panda" src = "CriticalTrials/1stList/CTrial4/panda_crayon.png"></img>'],
    verb: 'rub', compatibility: 'instrument',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#butterfly', '#violin', '#crayon', '#panda']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial4/rub_the_panda_with_the_crayon.mp3'],
    images: ['<img id = "butterfly" src = "CriticalTrials/1stList/CTrial4/butterfly_violin.png"></img>',
      '<img id = "violin" src = "CriticalTrials/1stList/CTrial4/violin.png"></img>',
      '<img id = "crayon" src = "CriticalTrials/1stList/CTrial4/crayon.png"></img>',
      '<img id = "panda" src = "CriticalTrials/1stList/CTrial4/panda_crayon.png"></img>'],
    verb: 'rub', compatibility: 'instrument',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#butterfly', '#violin', '#crayon', '#panda']
      }
    }
    ]
  },

  /* Trial 5 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial5/poke_the_pig_with_the_violin.mp3'],
    images: ['<img id = "bunny" src = "CriticalTrials/1stList/CTrial5/bunny_spoon.png"></img>',
      '<img id = "violin" src = "CriticalTrials/1stList/CTrial5/violin.png"></img>',
      '<img id = "pig" src = "CriticalTrials/1stList/CTrial5/pig_violin.png"></img>',
      '<img id = "spoon" src = "CriticalTrials/1stList/CTrial5/spoon.png"></img>'],
    verb: 'poke', compatibility: 'instrument',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#bunny', '#violin', '#pig', '#spoon']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial5/poke_the_bunny_with_the_spoon.mp3'],
    images: ['<img id = "bunny" src = "CriticalTrials/1stList/CTrial5/bunny_spoon.png"></img>',
      '<img id = "violin" src = "CriticalTrials/1stList/CTrial5/violin.png"></img>',
      '<img id = "pig" src = "CriticalTrials/1stList/CTrial5/pig_violin.png"></img>',
      '<img id = "spoon" src = "CriticalTrials/1stList/CTrial5/spoon.png"></img>'],
    verb: 'poke', compatibility: 'instrument',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#bunny', '#violin', '#pig', '#spoon']
      }
    }
    ]
  },

  /* Trial 6 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial6/bop_the_panda_with_the_spoon.mp3'],
    images: ['<img id = "elephant" src = "CriticalTrials/1stList/CTrial6/elephant_napkin.png"></img>',
      '<img id = "panda" src = "CriticalTrials/1stList/CTrial6/panda_spoon.png"></img>',
      '<img id = "napkin" src = "CriticalTrials/1stList/CTrial6/napkin.png"></img>',
      '<img id = "spoon" src = "CriticalTrials/1stList/CTrial6/spoon.png"></img>'],
    verb: 'bop', compatibility: 'instrument',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#elephant', '#panda', '#napkin', '#spoon']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial6/bop_the_elephant_with_the_napkin.mp3'],
    images: ['<img id = "elephant" src = "CriticalTrials/1stList/CTrial6/elephant_napkin.png"></img>',
      '<img id = "panda" src = "CriticalTrials/1stList/CTrial6/panda_spoon.png"></img>',
      '<img id = "napkin" src = "CriticalTrials/1stList/CTrial6/napkin.png"></img>',
      '<img id = "spoon" src = "CriticalTrials/1stList/CTrial6/spoon.png"></img>'],
    verb: 'bop', compatibility: 'instrument',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#elephant', '#panda', '#napkin', '#spoon']
      }
    }
    ]
  },

  /* Trial 7 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial7/smack_the_dog_with_the_hat.mp3'],
    images: ['<img id = "hat" src = "CriticalTrials/1stList/CTrial7/hat.png"></img>',
      '<img id = "flute" src = "CriticalTrials/1stList/CTrial7/flute.png"></img>',
      '<img id = "dog" src = "CriticalTrials/1stList/CTrial7/dog_hat.png"></img>',
      '<img id = "leopard" src = "CriticalTrials/1stList/CTrial7/leopard_flute.png"></img>'],
    verb: 'smack', compatibility: 'instrument',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#hat', '#flute', '#dog', '#leopard']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial7/smack_the_leopard_with_the_flute.mp3'],
    images: ['<img id = "hat" src = "CriticalTrials/1stList/CTrial7/hat.png"></img>',
      '<img id = "flute" src = "CriticalTrials/1stList/CTrial7/flute.png"></img>',
      '<img id = "dog" src = "CriticalTrials/1stList/CTrial7/dog_hat.png"></img>',
      '<img id = "leopard" src = "CriticalTrials/1stList/CTrial7/leopard_flute.png"></img>'],
    verb: 'smack', compatibility: 'instrument',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#hat', '#flute', '#dog', '#leopard']
      }
    }
    ]
  },

  /* Trial 8 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial8/clean_the_turtle_with_the_leaf.mp3'],
    images: ['<img id = "dog" src = "CriticalTrials/1stList/CTrial8/dog_violin.png"></img>',
      '<img id = "violin" src = "CriticalTrials/1stList/CTrial8/violin.png"></img>',
      '<img id = "turtle" src = "CriticalTrials/1stList/CTrial8/turtle_leaf.png"></img>',
      '<img id = "leaf" src = "CriticalTrials/1stList/CTrial8/leaf.png"></img>'],
    verb: 'clean', compatibility: 'instrument',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#dog', '#violin', '#turtle', '#leaf']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial8/clean_the_dog_with_the_violin.mp3'],
    images: ['<img id = "dog" src = "CriticalTrials/1stList/CTrial8/dog_violin.png"></img>',
      '<img id = "violin" src = "CriticalTrials/1stList/CTrial8/violin.png"></img>',
      '<img id = "turtle" src = "CriticalTrials/1stList/CTrial8/turtle_leaf.png"></img>',
      '<img id = "leaf" src = "CriticalTrials/1stList/CTrial8/leaf.png"></img>'],
    verb: 'clean', compatibility: 'instrument',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#dog', '#violin', '#turtle', '#leaf']
      }
    }
    ]
  },

  /* Trial 9 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial9/tease_the_leopard_with_the_crayon.mp3'],
    images: ['<img id = "crayon" src = "CriticalTrials/1stList/CTrial9/crayon.png"></img>',
      '<img id = "dog" src = "CriticalTrials/1stList/CTrial9/dog_lollipop.png"></img>',
      '<img id = "lollipop" src = "CriticalTrials/1stList/CTrial9/leopard_crayon.png"></img>',
      '<img id = "leopard" src = "CriticalTrials/1stList/CTrial9/lollipop.png"></img>'],
    verb: 'tease', compatibility: 'instrument',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#crayon', '#dog', '#lollipop', '#leopard']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial9/tease_the_dog_with_the_lolipop.mp3'],
    images: ['<img id = "crayon" src = "CriticalTrials/1stList/CTrial9/crayon.png"></img>',
      '<img id = "dog" src = "CriticalTrials/1stList/CTrial9/dog_lollipop.png"></img>',
      '<img id = "leopard" src = "CriticalTrials/1stList/CTrial9/leopard_crayon.png"></img>',
      '<img id = "lollipop" src = "CriticalTrials/1stList/CTrial9/lollipop.png"></img>'],
    verb: 'tease', compatibility: 'instrument',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#crayon', '#dog', '#leopard', '#lollipop']
      }
    }
    ]
  },

  /* Trial 10 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial10/feed_the_duckling_with_the_book.mp3'],
    images: ['<img id = "book" src = "CriticalTrials/1stList/CTrial10/book.png"></img>',
      '<img id = "zebra" src = "CriticalTrials/1stList/CTrial10/zebra_lollipop.png"></img>',
      '<img id = "duckling" src = "CriticalTrials/1stList/CTrial10/duckling_book.png"></img>',
      '<img id = "lollipop" src = "CriticalTrials/1stList/CTrial10/lollipop.png"></img>'],
    verb: 'feed', compatibility: 'equibiased',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#book', '#zebra', '#duckling', '#lollipop']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial10/feed_the_zebra_with_the_lollipop.mp3'],
    images: [
      '<img id = "book" src = "CriticalTrials/1stList/CTrial10/book.png"></img>',
      '<img id = "zebra" src = "CriticalTrials/1stList/CTrial10/zebra_lollipop.png"></img>',
      '<img id = "duckling" src = "CriticalTrials/1stList/CTrial10/duckling_book.png"></img>',
      '<img id = "lollipop" src = "CriticalTrials/1stList/CTrial10/lollipop.png"></img>'],
    verb: 'feed', compatibility: 'equibiased',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#book', '#zebra', '#duckling', '#elollipop']
      }
    }
    ]
  },

  /* Trial 11 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial11/scuff_the_pig_with_the_flower.mp3'],
    images: ['<img id = "chicken" src = "CriticalTrials/1stList/CTrial11/chicken_cup.png"></img>',
      '<img id = "pig" src = "CriticalTrials/1stList/CTrial11/pig_flower.png"></img>',
      '<img id = "cup" src = "CriticalTrials/1stList/1stList/CTrial11/cup.png"></img>',
      '<img id = "flower" src = "CriticalTrials/1stList/CTrial11/flower.png"></img>'],
    verb: 'scuff', compatibility: 'equibiased',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#chicken', '#pig', '#cup', '#flower']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial11/scuff_the_chicken_the_cup.mp3'],
    images: ['<img id = "chicken" src = "CriticalTrials/1stList/CTrial11/chicken_cup.png"></img>',
      '<img id = "pig" src = "CriticalTrials/1stList/CTrial11/pig_flower.png"></img>',
      '<img id = "cup" src = "CriticalTrials/1stList/CTrial11/cup.png"></img>',
      '<img id = "flower" src = "CriticalTrials/1stList/CTrial11/flower.png"></img>'],
    verb: 'scuff', compatibility: 'equibiased',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#chicken', '#pig', '#cup', '#flower']
      }
    }
    ]
  },

  /* Trial 12 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial12/pinch_the_leopard_with_the_hat.mp3'],
    images: ['<img id = "hat" src = "CriticalTrials/1stList/CTrial12/hat.png"></img>',
      '<img id = "leopard" src = "CriticalTrials/1stList/CTrial12/leopard_hat.png"></img>',
      '<img id = "panda" src = "CriticalTrials/1stList/CTrial12/panda_toothbrush.png"></img>',
      '<img id = "toothbrush" src = "CriticalTrials/1stList/CTrial12/toothbrush.png"></img>'],
    verb: 'pinch', compatibility: 'equibiased',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#hat', '#leopard', '#panda', '#toothbrush']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial12/pinch_the_panda_with_the_toothbrush.mp3'],
    images: [
      '<img id = "hat" src = "CriticalTrials/1stList/CTrial12/hat.png"></img>',
      '<img id = "leopard" src = "CriticalTrials/1stList/CTrial12/leopard_hat.png"></img>',
      '<img id = "panda" src = "CriticalTrials/1stList/CTrial12/panda_toothbrush.png"></img>',
      '<img id = "toothbrush" src = "CriticalTrials/1stList/CTrial12/toothbrush.png"></img>'],
    verb: 'pinch', compatibility: 'equibiased',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#hat', '#leopard', '#panda', '#toothbrush']
      }
    }
    ]
  },

  /* Trial 13 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial13/knock_on_the_frog_with_the_sponge.mp3'],
    images: ['<img id = "bunny" src = "CriticalTrials/1stList/CTrial13/bunny_feather.png"></img>',
      '<img id = "feather" src = "CriticalTrials/1stList/CTrial13/feather.png"></img>',
      '<img id = "sponge" src = "CriticalTrials/1stList/CTrial13/sponge.png"></img>',
      '<img id = "frog" src = "CriticalTrials/1stList/CTrial13/frog_sponge.png"></img>'],
    verb: 'knockon', compatibility: 'equibiased',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#bunny', '#feather', '#sponge', '#frog']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial13/knock_on_the_bunny_with_the_feather.mp3'],
    images: ['<img id = "bunny" src = "CriticalTrials/1stList/CTrial13/bunny_feather.png"></img>',
      '<img id = "feather" src = "CriticalTrials/1stList/CTrial13/feather.png"></img>',
      '<img id = "sponge" src = "CriticalTrials/1stList/CTrial13/sponge.png"></img>',
      '<img id = "frog" src = "CriticalTrials/1stList/CTrial13/frog_sponge.png"></img>'],
    verb: 'knockon', compatibility: 'equibiased',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#bunny', '#feather', '#sponge', '#frog']
      }
    }
    ]
  },

  /* Trial 14 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial14/pat_the_dog_with_the_flower.mp3'],
    images: ['<img id = "dog" src = "CriticalTrials/1stList/CTrial14/dog_flower.png"></img>',
      '<img id = "flower" src = "CriticalTrials/1stList/CTrial14/flower.png"></img>',
      '<img id = "leopard" src = "CriticalTrials/1stList/CTrial14/leopard_pencil.png"></img>',
      '<img id = "pencil" src = "CriticalTrials/1stList/CTrial14/pencil.png"></img>'],
    verb: 'pat', compatibility: 'equibiased',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#dog', '#flower', '#leopard', '#pencil']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial14/pat_the_leopard_with_the_pencil.mp3'],
    images: ['<img id = "dog" src = "CriticalTrials/1stList/CTrial14/dog_flower.png"></img>',
      '<img id = "flower" src = "CriticalTrials/1stList/CTrial14/flower.png"></img>',
      '<img id = "leopard" src = "CriticalTrials/1stList/CTrial14/leopard_pencil.png"></img>',
      '<img id = "pencil" src = "CriticalTrials/1stList/CTrial14/pencil.png"></img>'],
    verb: 'pat', compatibility: 'equibiased',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#dog', '#flower', '#leopard', '#pencil']
      }
    }
    ]
  },

  /* Trial 15 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial15/locate_the_penguin_with_the_tube.mp3'],
    images: ['<img id = "camel" src = "CriticalTrials/1stList/CTrial15/camel_straw.png"></img>',
      '<img id = "straw" src = "CriticalTrials/1stList/CTrial15/straw.png"></img>',
      '<img id = "penguin" src = "CriticalTrials/1stList/CTrial15/penguin_tube.png"></img>',
      '<img id = "tube" src = "CriticalTrials/1stList/CTrial15/tube.png"></img>'],
    verb: 'locate', compatibility: 'equibiased',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#camel', '#straw', '#penguin', '#tube']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial15/locate_the_camel_with_the_straw.mp3'],
    images: ['<img id = "camel" src = "CriticalTrials/1stList/CTrial15/camel_straw.png"></img>',
      '<img id = "straw" src = "CriticalTrials/1stList/CTrial15/straw.png"></img>',
      '<img id = "penguin" src = "CriticalTrials/1stList/CTrial15/penguin_tube.png"></img>',
      '<img id = "tube" src = "CriticalTrials/1stList/CTrial15/tube.png"></img>'],
    verb: 'locate', compatibility: 'equibiased',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#camel', '#straw', '#penguin', '#tube']
      }
    }
    ]
  },


  /* Trial 16 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial16/feel_the_leopard_with_the_pen.mp3'],
    images: ['<img id = "candle" src = "CriticalTrials/1stList/CTrial16/candle.png"></img>',
      '<img id = "leopard" src = "CriticalTrials/1stList/CTrial16/leopard_pen.png"></img>',
      '<img id = "bear" src = "CriticalTrials/1stList/CTrial16/bear_candle.png"></img>',
      '<img id = "pen" src = "CriticalTrials/1stList/CTrial16/pen.png"></img>'],
    verb: 'feel', compatibility: 'equibiased',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#candle', '#leopard', '#bear', '#pen']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial16/feel_the_bear_with_the_candle.mp3'],
    images: [
      '<img id = "candle" src = "CriticalTrials/1stList/CTrial16/candle.png"></img>',
      '<img id = "leopard" src = "CriticalTrials/1stList/CTrial16/leopard_pen.png"></img>',
      '<img id = "bear" src = "CriticalTrials/1stList/CTrial16/bear_candle.png"></img>',
      '<img id = "pen" src = "CriticalTrials/1stList/CTrial16/pen.png"></img>'],
    verb: 'feel', compatibility: 'equibiased',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#candle', '#leopard', '#bear', '#pen']
      }
    }
    ]
  },

  /* Trial 17 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial17/spot_the_lion_with_the_straw.mp3'],
    images: ['<img id = "pencil" src = "CriticalTrials/1stList/CTrial17/pencil.png"></img>',
      '<img id = "bird" src = "CriticalTrials/1stList/CTrial17/bird_pencil.png"></img>',
      '<img id = "lion" src = "CriticalTrials/1stList/CTrial17/lion_straw.png"></img>',
      '<img id = "straw" src = "CriticalTrials/1stList/CTrial17/straw.png"></img>'],
    verb: 'spot', compatibility: 'equibiased',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#pencil', '#bird', '#lion', '#straw']
      }
    }
    ]
  },


  {
    audio: [
      'CriticalTrials/1stList/CTrial17/spot_the_bird_with_the_pencil.mp3'],
    images: [
      '<img id = "pencil" src = "CriticalTrials/1stList/CTrial17/pencil.png"></img>',
      '<img id = "bird" src = "CriticalTrials/1stList/CTrial17/bird_pencil.png"></img>',
      '<img id = "lion" src = "CriticalTrials/1stList/CTrial17/lion_straw.png"></img>',
      '<img id = "straw" src = "CriticalTrials/1stList/CTrial17/straw.png"></img>'],
    verb: 'spot', compatibility: 'equibiased',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#pencil', '#bird', '#lion', '#straw']
      }
    }
    ]
  },


  /* Trial 18 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial18/point_to_the_penguin_with_the_leaf.mp3'],
    images: ['<img id = "fish" src = "CriticalTrials/1stList/CTrial18/fish_funnel.png"></img>',
      '<img id = "funnel" src = "CriticalTrials/1stList/CTrial18/funnel.png"></img>',
      '<img id = "penguin" src = "CriticalTrials/1stList/CTrial18/penguin_leaf.png"></img>',
      '<img id = "leaf" src = "CriticalTrials/1stList/CTrial18/leaf.png"></img>'],
    verb: 'point', compatibility: 'equibiased',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#fish', '#funnel', '#penguin', '#leaf']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial18/point_to_the_fish_with_the_funnel.mp3'],
    images: ['<img id = "fish" src = "CriticalTrials/1stList/CTrial18/fish_funnel.png"></img>',
      '<img id = "funnel" src = "CriticalTrials/1stList/CTrial18/funnel.png"></img>',
      '<img id = "penguin" src = "CriticalTrials/1stList/CTrial18/penguin_leaf.png"></img>',
      '<img id = "leaf" src = "CriticalTrials/1stList/CTrial18/leaf.png"></img>'],
    verb: 'point', compatibility: 'equibiased',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#fish', '#funnel', '#penguin', '#leaf']
      }
    }
    ]
  },

  /* Trial 19 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial19/pet_the_lion_with_the_tongs.mp3'],
    images: ['<img id = "dolphin" src = "CriticalTrials/1stList/CTrial19/dolphin_sponge.png"></img>',
      '<img id = "sponge" src = "CriticalTrials/1stList/CTrial19/sponge.png"></img>',
      '<img id = "lion" src = "CriticalTrials/1stList/CTrial19/lion_tongs.png"></img>',
      '<img id = "tongs" src = "CriticalTrials/1stList/CTrial19/tongs.png"></img>'],
    verb: 'pet', compatibility: 'modifier',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#dolphin', '#sponge', '#lion', '#tongs']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial19/pet_the_dolphin_with_the_sponge.mp3'],
    images: ['<img id = "dolphin" src = "CriticalTrials/1stList/CTrial19/dolphin_sponge.png"></img>',
      '<img id = "sponge" src = "CriticalTrials/1stList/CTrial19/sponge.png"></img>',
      '<img id = "lion" src = "CriticalTrials/1stList/CTrial19/lion_tongs.png"></img>',
      '<img id = "tongs" src = "CriticalTrials/1stList/CTrial19/tongs.png"></img>'],
    verb: 'pet', compatibility: 'modifier',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#dolphin', '#sponge', '#lion', '#tongs']
      }
    }
    ]
  },

  /* Trial 20 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial20/look_at_the_chicken_with_the_leaf.mp3'],
    images: ['<img id = "chicken" src = "CriticalTrials/1stList/CTrial20/chicken_leaf.png"></img>',
      '<img id = "leaf" src = "CriticalTrials/1stList/CTrial20/leaf.png"></img>',
      '<img id = "horse" src = "CriticalTrials/1stList/CTrial20/horse_spoon.png"></img>',
      '<img id = "spoon" src = "CriticalTrials/1stList/CTrial20/spoon.png"></img>'],
    verb: 'look', compatibility: 'modifier',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#chicken', '#leaf', '#horse', '#spoon']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial20/look_at_the_horse_with_the_spoon.mp3'],
    images: ['<img id = "chicken" src = "CriticalTrials/1stList/CTrial20/chicken_leaf.png"></img>',
      '<img id = "leaf" src = "CriticalTrials/1stList/CTrial20/leaf.png"></img>',
      '<img id = "horse" src = "CriticalTrials/1stList/CTrial20/horse_spoon.png"></img>',
      '<img id = "spoon" src = "CriticalTrials/1stList/CTrial20/spoon.png"></img>'],
    verb: 'look', compatibility: 'modifier',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#chicken', '#leaf', '#horse', '#spoon']
      }
    }
    ]
  },

  /* Trial 21 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial21/squeeze_the_bunny_with_the_hat.mp3'],
    images: ['<img id = "bunny" src = "CriticalTrials/1stList/CTrial21/bunny_hat.png"></img>',
      '<img id = "hat" src = "CriticalTrials/1stList/CTrial21/hat.png"></img>',
      '<img id = "zebra" src = "CriticalTrials/1stList/CTrial21/zebra_microphone.png"></img>',
      '<img id = "microphone" src = "CriticalTrials/1stList/CTrial21/microphone.png"></img>'],
    verb: 'squeeze', compatibility: 'modifier',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#bunny', '#hat', '#zebra', '#microphone']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial21/squeeze_the_zebra_with_the_microphone.mp3'],
    images: ['<img id = "bunny" src = "CriticalTrials/1stList/CTrial21/bunny_hat.png"></img>',
      '<img id = "hat" src = "CriticalTrials/1stList/CTrial21/hat.png"></img>',
      '<img id = "zebra" src = "CriticalTrials/1stList/CTrial21/zebra_microphone.png"></img>',
      '<img id = "microphone" src = "CriticalTrials/1stList/CTrial21/microphone.png"></img>'],
    verb: 'squeeze', compatibility: 'modifier',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#bunny', '#hat', '#zebra', '#microphone']
      }
    }
    ]
  },


  /* Trial 22 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial22/pick_out_the_ladybug_with_a_straw.mp3'],
    images: ['<img id = "duckling" src = "CriticalTrials/1stList/CTrial22/duckling_net.png"></img>',
      '<img id = "net" src = "CriticalTrials/1stList/CTrial22/net.png"></img>',
      '<img id = "ladybug" src = "CriticalTrials/1stList/CTrial22/ladybug_straw.png"></img>',
      '<img id = "straw" src = "CriticalTrials/1stList/CTrial22/straw.png"></img>'],
    verb: 'pickout', compatibility: 'modifier',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#duckling', '#net', '#ladybug', '#straw']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial22/pickout_the_duckling_with_the_net.mp3'],
    images: ['<img id = "duckling" src = "CriticalTrials/1stList/CTrial22/duckling_net.png"></img>',
      '<img id = "net" src = "CriticalTrials/1stList/CTrial22/net.png"></img>',
      '<img id = "ladybug" src = "CriticalTrials/1stList/CTrial22/ladybug_straw.png"></img>',
      '<img id = "straw" src = "CriticalTrials/1stList/CTrial22/straw.png"></img>'],
    verb: 'pickout', compatibility: 'modifier',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#duckling', '#net', '#ladybug', '#straw']
      }
    }
    ]
  },

  /* Trial 23 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial23/cuddle_the_whale_with_the_pen.mp3'],
    images: ['<img id = "dolphin" src = "CriticalTrials/1stList/CTrial23/dolphin_microphone.png"></img>',
      '<img id = "microphone" src = "CriticalTrials/1stList/CTrial23/microphone.png"></img>',
      '<img id = "whale" src = "CriticalTrials/1stList/CTrial23/whale_pen.png"></img>',
      '<img id = "pen" src = "CriticalTrials/1stList/CTrial23/pen.png"></img>'],
    verb: 'cuddle', compatibility: 'modifier',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#dolphin', '#microphone', '#whale', '#pen']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial23/cuddle_dolphin_with_the_microphone.mp3'],
    images: ['<img id = "dolphin" src = "CriticalTrials/1stList/CTrial23/dolphin_microphone.png"></img>',
      '<img id = "microphone" src = "CriticalTrials/1stList/CTrial23/microphone.png"></img>',
      '<img id = "whale" src = "CriticalTrials/1stList/CTrial23/whale_pen.png"></img>',
      '<img id = "pen" src = "CriticalTrials/1stList/CTrial23/pen.png"></img>'],
    verb: 'cuddle', compatibility: 'modifier',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#dolphin', '#microphone', '#whale', '#pen']
      }
    }
    ]
  },

  /* Trial 24 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial24/find_the_bird_with_the_mitten.mp3'],
    images: ['<img id = "bird" src = "CriticalTrials/1stList/CTrial24/bird_mitten.png"></img>',
      '<img id = "mitten" src = "CriticalTrials/1stList/CTrial24/mitten.png"></img>',
      '<img id = "lion" src = "CriticalTrials/1stList/CTrial24/lion_towel.png"></img>',
      '<img id = "towel" src = "CriticalTrials/1stList/CTrial24/towel.png"></img>'],
    verb: 'find', compatibility: 'modifier',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#bird', '#mitten', '#lion', '#towel']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial24/find_the_lion_with_the_towel.mp3'],
    images: ['<img id = "bird" src = "CriticalTrials/1stList/CTrial24/bird_mitten.png"></img>',
      '<img id = "mitten" src = "CriticalTrials/1stList/CTrial24/mitten.png"></img>',
      '<img id = "lion" src = "CriticalTrials/1stList/CTrial24/lion_towel.png"></img>',
      '<img id = "towel" src = "CriticalTrials/1stList/CTrial24/towel.png"></img>'],
    verb: 'find', compatibility: 'modifier',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#bird', '#mitten', '#lion', '#towel']
      }
    }
    ]
  },


  /* Trial 25 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial25/hug_the_panda_with_the_umbrella.mp3'],
    images: ['<img id = "giraffe" src = "CriticalTrials/1stList/CTrial25/giraffe_partyhat.png"></img>',
      '<img id = "partyhat" src = "CriticalTrials/1stList/CTrial25/partyhat.png"></img>',
      '<img id = "panda" src = "CriticalTrials/1stList/CTrial25/panda_umbrella.png"></img>',
      '<img id = "umbrella" src = "CriticalTrials/1stList/CTrial25/umbrella.png"></img>'],
    verb: 'hug', compatibility: 'modifier',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#giraffe', '#partyhat', '#panda', '#umbrella']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial25/hug_the_giraffe_with_the_partyhat.mp3'],
    images: ['<img id = "giraffe" src = "CriticalTrials/1stList/CTrial25/giraffe_partyhat.png"></img>',
      '<img id = "partyhat" src = "CriticalTrials/1stList/CTrial25/partyhat.png"></img>',
      '<img id = "panda" src = "CriticalTrials/1stList/CTrial25/panda_umbrella.png"></img>',
      '<img id = "umbrella" src = "CriticalTrials/1stList/CTrial25/umbrella.png"></img>'],
    verb: 'hug', compatibility: 'modifier',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#giraffe', '#partyhat', '#panda', '#umbrella']
      }
    }
    ]
  },


  /* Trial 26 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial26/select_the_squirrel_with_the_partyhat.mp3'],
    images: ['<img id = "squirrel" src = "CriticalTrials/1stList/CTrial26/squirrel_partyhat.png"></img>',
      '<img id = "partyhat" src = "CriticalTrials/1stList/CTrial26/partyhat.png"></img>',
      '<img id = "zebra" src = "CriticalTrials/1stList/CTrial26/zebra_towel.png"></img>',
      '<img id = "towel" src = "CriticalTrials/1stList/CTrial26/towel.png"></img>'],
    verb: 'select', compatibility: 'modifier',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#squirrel', '#partyhat', '#zebra', '#towel']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial26/select_the_zebra_with_a_towel.mp3'],
    images: ['<img id = "squirrel" src = "CriticalTrials/1stList/CTrial26/squirrel_partyhat.png"></img>',
      '<img id = "partyhat" src = "CriticalTrials/1stList/CTrial26/partyhat.png"></img>',
      '<img id = "zebra" src = "CriticalTrials/1stList/CTrial26/zebra_towel.png"></img>',
      '<img id = "towel" src = "CriticalTrials/1stList/CTrial26/towel.png"></img>'],
    verb: 'select', compatibility: 'modifier',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#squirrel', '#partyhat', '#zebra', '#towel']
      }
    }
    ]
  },

  /* Trial 27 */
  {
    audio: [
      'CriticalTrials/1stList/CTrial27/choose_the_cow_with_the_barrette.mp3'],
    images: ['<img id = "cow" src = "CriticalTrials/1stList/CTrial27/cow_barrette.png"></img>',
      '<img id = "barette" src = "CriticalTrials/1stList/CTrial27/barrette.png"></img>',
      '<img id = "squirrel" src = "CriticalTrials/1stList/CTrial27/squirrel_pen.png"></img>',
      '<img id = "pen" src = "CriticalTrials/1stList/CTrial27/pen.png"></img>'],
    verb: 'choose', compatibility: 'modifier',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#cow', '#barette', '#squirrel', '#pen']
      }
    }
    ]
  },

  {
    audio: [
      'CriticalTrials/1stList/CTrial27/choose_the_squirrel_with_the_pen.mp3'],
    images: ['<img id = "cow" src = "CriticalTrials/1stList/CTrial27/cow_barrette.png"></img>',
      '<img id = "barrette" src = "CriticalTrials/1stList/CTrial27/barrette.png"></img>',
      '<img id = "squirrel" src = "CriticalTrials/1stList/CTrial27/squirrel_pen.png"></img>',
      '<img id = "pen" src = "CriticalTrials/1stList/CTrial27/pen.png"></img>'],
    verb: 'choose', compatibility: 'modifier',
    extensions: [{
      type: 'webgazer',
      params: {
        targets: ['#cow', '#barrette', '#squirrel', '#pen']
      }
    }
    ]
  },

  /*Filler Trials */

  {
    audio: 'img/135_sentence1.mp3',
    images: ['img/butterfly.png',
      'img/frog_shell.png',
      'img/shell.png',
      'img/towel.png'],
    compatibility: 'filler'
  },

  {
    audio: 'img/134_sentence1.mp3',
    images: ['img/camel.png',
      'img/fish.png',
      'img/flag.png',
      'img/hat.png'],
    compatibility: 'filler'
  },

  {
    audio: 'img/133_sentence1.mp3',
    images: ['img/bird.png', 'img/chicken.png', 'img/mitten.png',
      'img/net.png'], compatibility: 'filler'
  },

  {
    audio: 'img/132_sentence1.mp3',
    images: ['img/net.png', 'img/duckling.png', 'img/giraffe.png',
      'img/umbrella.png'], compatibility: 'filler'
  },

  {
    audio: 'img/131_sentence1.mp3',
    images: ['img/net.png', 'img/cup.png', 'img/dolphin.png',
      'img/frog.png'], compatibility: 'filler'
  },

  {
    audio: 'img/130_sentence1.mp3',
    images: ['img/dog_funnel.png', 'img/fork.png', 'img/funnel.png',
      'img/panda.png'], compatibility: 'filler'
  },

  {
    audio: 'img/129_sentence1.mp3',
    images: ['img/bear.png', 'img/cow.png', 'img/flute.png',
      'img/stick.png'], compatibility: 'filler'
  },

  {
    audio: 'img/128_sentence1.mp3',
    images: ['img/camel.png', 'img/flute.png', 'img/hat.png',
      'img/whale.png'], compatibility: 'filler'
  },

  {
    audio: 'img/127_sentence1.mp3',
    images: ['img/butterfly.png', 'img/fork.png', 'img/towel.png',
      'img/hippo.png'], compatibility: 'filler'
  },

  {
    audio: 'img/126_sentence1.mp3',
    images: ['img/brush.png', 'img/bunny.png', 'img/camel.png',
      'img/tube.png'], compatibility: 'filler'
  },

  {
    audio: 'img/125_sentence1.mp3',
    images: ['img/clip.png', 'img/stick.png', 'img/elephant.png',
      'img/zebra.png'], compatibility: 'filler'
  },

  {
    audio: 'img/124_sentence1.mp3',
    images: ['img/zebra.png', 'img/leaf.png', 'img/penguin.png',
      'img/train.png'], compatibility: 'filler'
  },

  {
    audio: 'img/123_sentence1.mp3',
    images: ['img/book.png', 'img/flute.png', 'img/whale.png',
      'img/zebra.png'], compatibility: 'filler'
  },

  {
    audio: 'img/122_sentence1.mp3',
    images: ['img/bird.png', 'img/flower.png', 'img/toy.png',
      'img/turtle.png'], compatibility: 'filler'
  },

  {
    audio: 'img/121_sentence1.mp3',
    images: ['img/tube.png', 'img/turtle.png', 'img/mouse.png',
      'img/partyhat.png'], compatibility: 'filler'
  },

  {
    audio: 'img/120_sentence1.mp3',
    images: ['img/bear.png', 'img/stick.png', 'img/pen.png',
      'img/squirrel.png'], compatibility: 'filler'
  },

  {
    audio: 'img/119_sentence1.mp3',
    images: ['img/chopsticks.png', 'img/hippo.png', 'img/squirrel.png',
      'img/sponge.png'], compatibility: 'filler'
  },

  {
    audio: 'img/118_sentence1.mp3',
    images: ['img/net.png', 'img/ladybug_net.png', 'img/pig.png',
      'img/straw.png'], compatibility: 'filler'
  },

  {
    audio: 'img/117_sentence1.mp3',
    images: ['img/bird.png', 'img/fork.png', 'img/panda.png',
      'img/pencil.png'], compatibility: 'filler'
  },

  {
    audio: 'img/116_sentence1.mp3',
    images: ['img/panda.png', 'img/towel.png', 'img/leopard.png',
      'img/lollipop.png'], compatibility: 'filler'
  },

  {
    audio: 'img/115_sentence1.mp3',
    images: ['img/panda.png', 'img/fan.png', 'img/lion.png',
      'img/napkin.png'], compatibility: 'filler'
  },

  {
    audio: 'img/114_sentence1.mp3',
    images: ['img/chicken.png', 'img/funnel.png', 'img/leaf.png',
      'img/leopard_funnel.png'], compatibility: 'filler'
  },

  {
    audio: 'img/113_sentence1.mp3',
    images: ['img/fan.png', 'img/turtle.png', 'img/horse.png',
      'img/toothbrush.png'], compatibility: 'filler'
  },

  {
    audio: 'img/112_sentence1.mp3',
    images: ['img/book.png', 'img/hippo.png', 'img/penguin.png',
      'img/straw.png'], compatibility: 'filler'
  }
]

// var trials1 = [
//  {audio: 'Audio/Audio/Critical_trials/strike_the_elephant_with_the_umbrella.mp3', images: ['img/elephant_umbrella.png','img/fan.png','img/umbrella.png','img/pencil.png']},
//  {audio: 'Audio/Audio/Critical_trials/bop_the_elephant_with_the_napkin.mp3', images: ['img/elephant_napkin.png','img/fan.png','img/napkin.png','img/pencil.png']}
// ]

var trials2 = [
  /* Trial 1 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial1/strike_the_bear_with_the_umbrella.mp3'],
    images: ['<img id = "bearumbrella" src = "CriticalTrials/2ndList/CTrial1/bear_umbrella.png"></img>',
      '<img id = "umbrella" src = "CriticalTrials/2ndList/CTrial1/umbrella.png"></img>',
      '<img id = "necklace" src = "CriticalTrials/2ndList/CTrial1/necklace.png"></img>',
      '<img id = "elephantnecklace" src = "CriticalTrials/2ndList/CTrial1/elephant_necklace.png"></img>'],
    verb: 'strike', compatibility: 'instrument'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial1/strike_the_elephant_with_the_necklace.mp3'],
    images: ['CriticalTrials/2ndList/CTrial1/bear_umbrella.png',
      'CriticalTrials/2ndList/CTrial1/umbrella.png',
      'CriticalTrials/2ndList/CTrial1/necklace.png',
      'CriticalTrials/2ndList/CTrial1/elephant_necklace.png'],
    verb: 'strike', compatibility: 'instrument'
  },

  /* Trial 2 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial2/wack_the_cow_with_the_fan.mp3'],
    images: ['<img id = "cowfan" src = "CriticalTrials/2ndList/CTrial2/cow_fan.png"></img>',
      '<img id = "pencil" src = "CriticalTrials/2ndList/CTrial2/pencil.png"></img>',
      '<img id = "fan" src = "CriticalTrials/2ndList/CTrial2/fan.png"></img>',
      '<img id = "ladybugpencil" src = "CriticalTrials/2ndList/CTrial2/ladybug_pencil.png"></img>'],
    verb: 'whack', compatibility: 'instrument'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial2/wack_the_ladybug_with_the_pencil.mp3'],
    images: ['CriticalTrials/2ndList/CTrial2/cow_fan.png',
      'CriticalTrials/2ndList/CTrial2/pencil.png',
      'CriticalTrials/2ndList/CTrial2/fan.png',
      'CriticalTrials/2ndList/CTrial2/ladybug_pencil.png'],
    verb: 'whack', compatibility: 'instrument'
  },

  /* Trial 3 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial3/hit_the_frog_with_the_cup.mp3'],
    images: ['<img id = "cup" src = "CriticalTrials/2ndList/CTrial3/cup.png"> </img>',
      '<img id = "mousetube" src = "CriticalTrials/2ndList/CTrial3/mouse_tube.png"></img>',
      '<img id = "frogcup" src = "CriticalTrials/2ndList/CTrial3/frog_cup.png"></img>',
      '<img id = "tube" src = "CriticalTrials/2ndList/CTrial3/tube.png"></img>'],
    verb: 'hit', compatibility: 'instrument'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial3/hit_the_mouse_with_the_tube.mp3'],
    images: ['CriticalTrials/2ndList/CTrial3/cup.png',
      'CriticalTrials/2ndList/CTrial3/mouse_tube.png',
      'CriticalTrials/2ndList/CTrial3/frog_cup.png',
      'CriticalTrials/2ndList/CTrial3/tube.png'],
    verb: 'hit', compatibility: 'instrument'
  },

  /* Trial 4 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial4/rub_the_butterfly_with_the_crayon.mp3'],
    images: ['<img id = "butterflycrayon" src = "CriticalTrials/2ndList/CTrial4/butterfly_crayon.png"></img>',
      '<img id = "violin" src = "CriticalTrials/2ndList/CTrial4/violin.png"></img>',
      '<img id = "crayon" src = "CriticalTrials/2ndList/CTrial4/crayon.png"></img>',
      '<img id = "pandaviolin" src = "CriticalTrials/2ndList/CTrial4/panda_violin.png"></img>'],
    verb: 'rub', compatibility: 'instrument'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial4/rub_the_panda_with_the_violin.mp3'],
    images: ['CriticalTrials/2ndList/CTrial4/butterfly_crayon.png',
      'CriticalTrials/2ndList/CTrial4/violin.png',
      'CriticalTrials/2ndList/CTrial4/crayon.png',
      'CriticalTrials/2ndList/CTrial4/panda_violin.png'],
    verb: 'rub', compatibility: 'instrument'
  },


  /* Trial 5 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial5/poke_the_pig_with_the_spoon.mp3'],
    images: ['<img id = "bunnyviolin" src = "CriticalTrials/2ndList/CTrial5/bunny_violin.png"></img>',
      '<img id = "spoon" src = "CriticalTrials/2ndList/CTrial5/spoon.png"></img>',
      '<img id = "pigspoon" src = "CriticalTrials/2ndList/CTrial5/pig_spoon.png"></img>',
      '<img id = "violin" src = "CriticalTrials/2ndList/CTrial5/violin.png"></img>'],
    verb: 'poke', compatibility: 'instrument'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial5/poke_the_bunny_with_the_violin.mp3'],
    images: ['CriticalTrials/2ndList/CTrial5/bunny_violin.png',
      'CriticalTrials/2ndList/CTrial5/spoon.png',
      'CriticalTrials/2ndList/CTrial5/pig_spoon.png',
      'CriticalTrials/2ndList/CTrial5/violin.png'],
    verb: 'poke', compatibility: 'instrument'
  },

  /* Trial 6 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial6/bop_the_panda_with_the_napkin.mp3'],
    images: ['<img id = "elephantspoon" src = "CriticalTrials/2ndList/CTrial6/elephant_spoon.png"></img>',
      '<img id = "napkin" src = "CriticalTrials/2ndList/CTrial6/napkin.png"></img>',
      '<img id = "pandanapkin" src = "CriticalTrials/2ndList/CTrial6/panda_napkin.png"></img>',
      '<img id = "spoon" src = "CriticalTrials/2ndList/CTrial6/spoon.png"></img>'],
    verb: 'bop', compatibility: 'instrument'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial6/bop_the_elephant_with_the_spoon.mp3'],
    images: ['CriticalTrials/2ndList/CTrial6/elephant_spoon.png',
      'CriticalTrials/2ndList/CTrial6/napkin.png',
      'CriticalTrials/2ndList/CTrial6/panda_napkin.png',
      'CriticalTrials/2ndList/CTrial6/spoon.png'],
    verb: 'bop', compatibility: 'instrument'
  },

  /* Trial 7 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial7/smack_the_dog_with_the_flute.mp3'],
    images: ['<img id = "dogflute" src = "CriticalTrials/2ndList/CTrial7/dog_flute.png"></img>',
      '<img id = "hat" src = "CriticalTrials/2ndList/CTrial7/hat.png"></img>',
      '<img id = "flute" src = "CriticalTrials/2ndList/CTrial7/flute.png"></img>',
      '<img id = "leopardhat" src = "CriticalTrials/2ndList/CTrial7/leopard_hat.png></img>'],
    verb: 'smack', compatibility: 'instrument'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial7/smack_the_leopard_with_the_hat.mp3'],
    images: ['CriticalTrials/2ndList/CTrial7/dog_flute.png',
      'CriticalTrials/2ndList/CTrial7/hat.png',
      'CriticalTrials/2ndList/CTrial7/flute.png',
      'CriticalTrials/2ndList/CTrial7/leopard_hat.png'],
    verb: 'smack', compatibility: 'instrument'
  },

  /* Trial 8 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial8/clean_the_turtle_with_the_violin.mp3'],
    images: ['<img id = "dogleaf" src = "CriticalTrials/2ndList/CTrial8/dog_leaf.png"></img>',
      '<img id = "violin" src = "CriticalTrials/2ndList/CTrial8/violin.png"></img>',
      '<img id = "turtleviolin" src = "CriticalTrials/2ndList/CTrial8/turtle_violin.png"></img>',
      '<img id = "leaf" src = "CriticalTrials/2ndList/CTrial8/leaf.png"></img>'],
    verb: 'clean', compatibility: 'instrument'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial8/clean_the_dog_with_the_leaf.mp3'],
    images: ['CriticalTrials/2ndList/CTrial8/dog_leaf.png',
      'CriticalTrials/2ndList/CTrial8/violin.png',
      'CriticalTrials/2ndList/CTrial8/turtle_violin.png',
      'CriticalTrials/2ndList/CTrial8/leaf.png'],
    verb: 'clean', compatibility: 'instrument'
  },

  /* Trial 9 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial9/tease_the_leopard_with_the_lollipop.mp3'],
    images: ['<img id = "dogcrayon" src = "CriticalTrials/2ndList/CTrial9/dog_crayon.png"></img>',
      '<img id = "lollipop" src = "CriticalTrials/2ndList/CTrial9/lollipop.png"></img>',
      '<img id = "leopardlollipop" src = "CriticalTrials/2ndList/CTrial9/leopard_lollipop.png"></img>',
      '<img id = "crayon" src = "CriticalTrials/2ndList/CTrial9/crayon.png"></img>'],
    verb: 'tease', compatibility: 'instrument'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial9/tease_the_dog_with_the_crayon.mp3'],
    images: ['CriticalTrials/2ndList/CTrial9/dog_crayon.png',
      'CriticalTrials/2ndList/CTrial9/lollipop.png',
      'CriticalTrials/2ndList/CTrial9/leopard_lollipop.png',
      'CriticalTrials/2ndList/CTrial9/crayon.png'],
    verb: 'tease', compatibility: 'instrument'
  },


  /* Trial 10 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial10/feed_the_zebra_with_the_book.mp3'],
    images: ['<img id = "ducklinglollipop" src = "CriticalTrials/2ndList/CTrial10/duckling_lollipop.png"></img>',
      '<img id = "book" src = "CriticalTrials/2ndList/CTrial10/book.png"></img>',
      '<img id = "zebrabook" src = "CriticalTrials/2ndList/CTrial10/zebra_book.png"></img>',
      '<img id = "lollipop" src = "CriticalTrials/2ndList/CTrial10/lollipop.png"></img>'],
    verb: 'feed', compatibility: 'equibiased'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial10/feed_the_duckling_with_the_lollipop.mp3'],
    images: ['CriticalTrials/2ndList/CTrial10/duckling_lollipop.png',
      'CriticalTrials/2ndList/CTrial10/book.png',
      'CriticalTrials/2ndList/CTrial10/zebra_book.png',
      'CriticalTrials/2ndList/CTrial10/lollipop.png'],
    verb: 'feed', compatibility: 'equibiased'
  },

  /* Trial 11 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial11/scuff_the_pig_with_the_cup.mp3'],
    images: ['<img id = "chickenflower" src = "CriticalTrials/2ndList/CTrial11/chicken_flower.png"></img>',
      '<img id = "cup" src = "CriticalTrials/2ndList/CTrial11/cup.png"></img>',
      '<img id = "pigcup" src = "CriticalTrials/2ndList/CTrial11/pig_cup.png"></img>',
      '<img id = "flower" src = "CriticalTrials/2ndList/CTrial11/flower.png"></img>'],
    verb: 'scuff', compatibility: 'equibiased'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial11/scuff_the_chicken_with_the_flower.mp3'],
    images: ['CriticalTrials/2ndList/CTrial11/chicken_flower.png',
      'CriticalTrials/2ndList/CTrial11/cup.png',
      'CriticalTrials/2ndList/CTrial11/pig_cup.png',
      'CriticalTrials/2ndList/CTrial11/flower.png'],
    verb: 'scuff', compatibility: 'equibiased'
  },

  /* Trial 12 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial12/pinch_the_panda_with_the_hat.mp3'],
    images: ['<img id = "leopardtoothbrush" src = "CriticalTrials/2ndList/CTrial12/leopard_toothbrush.png"></img>',
      '<img id = "hat" src = "CriticalTrials/2ndList/CTrial12/hat.png"></img>',
      '<img id = "pandahat" src = "CriticalTrials/2ndList/CTrial12/panda_hat.png"></img>',
      '<img id = "toothbrush" src = "CriticalTrials/2ndList/CTrial12/toothbrush.png"></img>'],
    verb: 'pinch', compatibility: 'equibiased'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial12/pinch_the_leopard_with_the_toothbrush.mp3'],
    images: ['CriticalTrials/2ndList/CTrial12/leopard_toothbrush.png',
      'CriticalTrials/2ndList/CTrial12/hat.png',
      'CriticalTrials/2ndList/CTrial12/panda_hat.png',
      'CriticalTrials/2ndList/CTrial12/toothbrush.png'],
    verb: 'pinch', compatibility: 'equibiased'
  },

  /* Trial 13 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial13/knock_on_the_bunny_with_the_sponge.mp3'],
    images: ['<img id = "bunnysponge" src = "CriticalTrials/2ndList/CTrial13/bunny_sponge.png"></img>',
      '<img id = "feather" src = "CriticalTrials/2ndList/CTrial13/feather.png"></img>',
      '<img id = "sponge" src = "CriticalTrials/2ndList/CTrial13/sponge.png"></img>',
      '<img id = "frogfeather" src = "CriticalTrials/2ndList/CTrial13/frog_feather.png"></img>'],
    verb: 'knockon', compatibility: 'equibiased'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial13/knock_on_the_frog_with_the_feather.mp3'],
    images: ['CriticalTrials/2ndList/CTrial13/bunny_sponge.png',
      'CriticalTrials/2ndList/CTrial13/feather.png',
      'CriticalTrials/2ndList/CTrial13/sponge.png',
      'CriticalTrials/2ndList/CTrial13/frog_feather.png'],
    verb: 'knockon', compatibility: 'equibiased'
  },

  /* Trial 14 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial14/pat_the_leopard_with_the_flower.mp3'],
    images: ['<img id = "dogpencil" src = "CriticalTrials/2ndList/CTrial14/dog_pencil.png"></img>',
      '<img id = "flower" src = "CriticalTrials/2ndList/CTrial14/flower.png"></img>',
      '<img id = "leopardflower" src = "CriticalTrials/2ndList/CTrial14/leopard_flower.png"></img>',
      '<img id = "pencil" src = "CriticalTrials/2ndList/CTrial14/pencil.png"></img>'],
    verb: 'pat', compatibility: 'equibiased'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial14/pat_the_dog_with_the_pencil.mp3'],
    images: ['CriticalTrials/2ndList/CTrial14/dog_pencil.png',
      'CriticalTrials/2ndList/CTrial14/flower.png',
      'CriticalTrials/2ndList/CTrial14/leopard_flower.png',
      'CriticalTrials/2ndList/CTrial14/pencil.png'],
    verb: 'pat', compatibility: 'equibiased'
  },

  /* Trial 15 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial15/locate_the_camel_with_the_tube.mp3'],
    images: ['<img id = "cameltube" src = "CriticalTrials/2ndList/CTrial15/camel_tube.png"></img>',
      '<img id = "straw" src = "CriticalTrials/2ndList/CTrial15/straw.png"></img>',
      '<img id = "penguinstraw" src = "CriticalTrials/2ndList/CTrial15/penguin_straw.png"></img>',
      '<img id = "tube" src = "CriticalTrials/2ndList/CTrial15/tube.png"></img>'],
    verb: 'locate', compatibility: 'equibiased'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial15/locate_the_penguin_with_the_straw.mp3'],
    images: ['CriticalTrials/2ndList/CTrial15/camel_tube.png',
      'CriticalTrials/2ndList/CTrial15/straw.png',
      'CriticalTrials/2ndList/CTrial15/penguin_straw.png',
      'CriticalTrials/2ndList/CTrial15/tube.png'],
    verb: 'locate', compatibility: 'equibiased'
  },

  /* Trial 16 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial16/feel_the_bear_with_the_pen.mp3'],
    images: ['<img id = "bearpen" src = "CriticalTrials/2ndList/CTrial16/bear_pen.png"></img>',
      '<img id = "candle" src = "CriticalTrials/2ndList/CTrial16/candle.png"></img>',
      '<img id = "leopardcandle" src = "CriticalTrials/2ndList/CTrial16/leopard_candle.png"></img>',
      '<img id = "pen" src = "CriticalTrials/2ndList/CTrial16/pen.png"></img>'],
    verb: 'feel', compatibility: 'equibiased'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial16/feel_the_leopard_with_the_candle.mp3'],
    images: ['CriticalTrials/2ndList/CTrial16/bear_pen.png',
      'CriticalTrials/2ndList/CTrial16/candle.png',
      'CriticalTrials/2ndList/CTrial16/leopard_candle.png',
      'CriticalTrials/2ndList/CTrial16/pen.png'],
    verb: 'feel', compatibility: 'equibiased'
  },

  /* Trial 17 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial17/spot_the_bird_with_the_straw.mp3'],
    images: ['<img id = "bridstraw" src = "CriticalTrials/2ndList/CTrial17/bird_straw.png"></img>',
      '<img id = "pencil" src = "CriticalTrials/2ndList/CTrial17/pencil.png"></img>',
      '<img id = "lionpencil" src = "CriticalTrials/2ndList/CTrial17/lion_pencil.png"></img>',
      '<img id = "straw" src = "CriticalTrials/2ndList/CTrial17/straw.png"></img>'],
    verb: 'spot', compatibility: 'equibiased'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial17/spot_the_lion_with_the_pencil.mp3'],
    images: ['CriticalTrials/2ndList/CTrial17/bird_straw.png',
      'CriticalTrials/2ndList/CTrial17/pencil.png',
      'CriticalTrials/2ndList/CTrial17/lion_pencil.png',
      'CriticalTrials/2ndList/CTrial17/straw.png'],
    verb: 'spot', compatibility: 'equibiased'
  },


  /* Trial 18 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial18/point_to_the_penguin_with_the_funnel.mp3'],
    images: ['<img id = "fishleaf" src = "CriticalTrials/2ndList/CTrial18/fish_leaf.png"></img>',
      '<img id = "funnel" src = "CriticalTrials/2ndList/CTrial18/funnel.png"></img>',
      '<img id = "penguinfunnel" src = "CriticalTrials/2ndList/CTrial18/penguin_funnel.png"></img>',
      '<img id = "leaf" src = "CriticalTrials/2ndList/CTrial18/leaf.png"></img>'],
    verb: 'point', compatibility: 'equibiased'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial18/point_to_the_fish_with_the_leaf.mp3'],
    images: ['CriticalTrials/2ndList/CTrial18/fish_leaf.png',
      'CriticalTrials/2ndList/CTrial18/funnel.png',
      'CriticalTrials/2ndList/CTrial18/penguin_funnel.png',
      'CriticalTrials/2ndList/CTrial18/leaf.png'],
    verb: 'point', compatibility: 'equibiased'
  },

  /* Trial 19 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial19/pet_the_lion_with_the_sponge.mp3'],
    images: ['<img id = "dolphintongs" src = "CriticalTrials/2ndList/CTrial19/dolphin_tongs.png"></img>',
      '<img id = "sponge" src = "CriticalTrials/2ndList/CTrial19/sponge.png"></img>',
      '<img id = "lionsponge" src = "CriticalTrials/2ndList/CTrial19/lion_sponge.png"></img>',
      '<img id = "tongs" src = "CriticalTrials/2ndList/CTrial19/tongs.png"></img>'],
    verb: 'pet', compatibility: 'modifier'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial19/pet_the_dolphin_with_the_tongs.mp3'],
    images: ['CriticalTrials/2ndList/CTrial19/dolphin_tongs.png',
      'CriticalTrials/2ndList/CTrial19/sponge.png',
      'CriticalTrials/2ndList/CTrial19/lion_sponge.png',
      'CriticalTrials/2ndList/CTrial19/tongs.png'],
    verb: 'pet', compatibility: 'modifier'
  },

  /* Trial 20 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial20/look_at_the_chicken_with_the_spoon.mp3'],
    images: ['<img id = "chickenspoon" src = "CriticalTrials/2ndList/CTrial20/chicken_spoon.png"></img>',
      '<img id = "leaf" src = "CriticalTrials/2ndList/CTrial20/leaf.png"></img>',
      '<img id = "horseleaf" src = "CriticalTrials/2ndList/CTrial20/horse_leaf.png"></img>',
      '<img id = "spoon" src = "CriticalTrials/2ndList/CTrial20/spoon.png"></img>'],
    verb: 'look', compatibility: 'modifier'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial20/look_at_horse_with_the_leaf.mp3'],
    images: ['CriticalTrials/2ndList/CTrial20/chicken_spoon.png',
      'CriticalTrials/2ndList/CTrial20/leaf.png',
      'CriticalTrials/2ndList/CTrial20/horse_leaf.png',
      'CriticalTrials/2ndList/CTrial20/spoon.png'],
    verb: 'look', compatibility: 'modifier'
  },

  /* Trial 21 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial21/squeeze_zebra_with_the_hat.mp3'],
    images: ['<img id = "bunnymicrophone" src = "CriticalTrials/2ndList/CTrial21/bunny_microphone.png"></img>',
      '<img id = "hat" src = "CriticalTrials/2ndList/CTrial21/hat.png"></img>',
      '<img id = "zebrahat" src = "CriticalTrials/2ndList/CTrial21/zebra_hat.png"></img>',
      '<img id = "microphone" src = "CriticalTrials/2ndList/CTrial21/microphone.png"></img>'],
    verb: 'squeeze', compatibility: 'modifier'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial21/squeeze_the_bunny_with_the_microphone.mp3'],
    images: ['CriticalTrials/2ndList/CTrial21/bunny_microphone.png',
      'CriticalTrials/2ndList/CTrial21/hat.png',
      'CriticalTrials/2ndList/CTrial21/zebra_hat.png',
      'CriticalTrials/2ndList/CTrial21/microphone.png'],
    verb: 'squeeze', compatibility: 'modifier'
  },


  /* Trial 22 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial22/pick_out_the_duckling_with_a_straw.mp3'],
    images: ['<img id = "ducklingstraw" src = "CriticalTrials/2ndList/CTrial22/duckling_straw.png></img>',
      '<img id = "net" src = "CriticalTrials/2ndList/CTrial22/net.png"></img>',
      '<img id = "ladybugnet" src = "CriticalTrials/2ndList/CTrial22/ladybug_net.png"></img>',
      '<img id = "straw" src = "CriticalTrials/2ndList/CTrial22/straw.png"></img>'],
    verb: 'pickout', compatibility: 'modifier'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial22/pickout_the_ladybug_with_the_net.mp3'],
    images: ['CriticalTrials/2ndList/CTrial22/duckling_straw.png',
      'CriticalTrials/2ndList/CTrial22/net.png',
      'CriticalTrials/2ndList/CTrial22/ladybug_net.png',
      'CriticalTrials/2ndList/CTrial22/straw.png'],
    verb: 'pickout', compatibility: 'modifier'
  },


  /* Trial 23 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial23/cuddle_the_dolphin_with_the_pen.mp3'],
    images: ['<img id = "dolphinpen" src = "CriticalTrials/2ndList/CTrial23/dolphin_pen.png"></img>',
      '<img id = "microphone" src = "CriticalTrials/2ndList/CTrial23/microphone.png"></img>',
      '<img id = "whalemicrophone" src = "CriticalTrials/2ndList/CTrial23/whale_microphone.png"></img>',
      '<img id = "pen" src = "CriticalTrials/2ndList/CTrial23/pen.png"></img>'],
    verb: 'cuddle', compatibility: 'modifier'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial23/cuddle_the_whale_with_the_microphone.mp3'],
    images: ['CriticalTrials/2ndList/CTrial23/dolphin_pen.png',
      'CriticalTrials/2ndList/CTrial23/microphone.png',
      'CriticalTrials/2ndList/CTrial23/whale_microphone.png',
      'CriticalTrials/2ndList/CTrial23/pen.png'],
    verb: 'cuddle', compatibility: 'modifier'
  },


  /* Trial 24 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial24/find_the_bird_with_the_towel.mp3'],
    images: ['<img id = "birdtowel" src = "CriticalTrials/2ndList/CTrial24/bird_towel.png"></img>',
      '<img id = "mitten" src = "CriticalTrials/2ndList/CTrial24/mitten.png"></img>',
      '<img id = "lionmitten" src = "CriticalTrials/2ndList/CTrial24/lion_mitten.png"></img>',
      '<img id = "towel" src = "CriticalTrials/2ndList/CTrial24/towel.png"></img>'],
    verb: 'find', compatibility: 'modifier'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial24/find_the_lion_with_the_mitten.mp3'],
    images: ['CriticalTrials/2ndList/CTrial24/bird_towel.png',
      'CriticalTrials/2ndList/CTrial24/mitten.png',
      'CriticalTrials/2ndList/CTrial24/lion_mitten.png',
      'CriticalTrials/2ndList/CTrial24/towel.png'],
    verb: 'find', compatibility: 'modifier'
  },


  /* Trial 25 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial25/hug_the_giraffe_with_the_umbrella.mp3'],
    images: ['<img id = "giraffeumbrella" src = "CriticalTrials/2ndList/CTrial25/giraffe_umbrella.png"></img>',
      '<img id = "partyhat" src = "CriticalTrials/2ndList/CTrial25/partyhat.png"></img>',
      '<img id = "pandapartyhat" src = "CriticalTrials/2ndList/CTrial25/panda_partyhat.png"></img>',
      '<img id = "umbrella" src = "CriticalTrials/2ndList/CTrial25/umbrella.png"></img>'],
    verb: 'hug', compatibility: 'modifier'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial25/hug_the_panda_with_the_partyhat.mp3'],
    images: ['CriticalTrials/2ndList/CTrial25/giraffe_umbrella.png',
      'CriticalTrials/2ndList/CTrial25/partyhat.png',
      'CriticalTrials/2ndList/CTrial25/panda_partyhat.png',
      'CriticalTrials/2ndList/CTrial25/umbrella.png'],
    verb: 'hug', compatibility: 'modifier'
  },

  /* Trial 26 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial26/select_the_zebra_with_the_partyhat.mp3'],
    images: ['<img id = "squirreltowel" src = "CriticalTrials/2ndList/CTrial26/squirrel_towel.png"></img>',
      '<img id = "partyhat" src = "CriticalTrials/2ndList/CTrial26/partyhat.png"></img>',
      '<img id = "zebrapartyhat" src = "CriticalTrials/2ndList/CTrial26/zebra_partyhat.png"></img>',
      '<img id = "towel" src = "CriticalTrials/2ndList/CTrial26/towel.png"></img>'],
    verb: 'select', compatibility: 'modifier'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial26/select_the_squirrel_with_the_towel.mp3'],
    images: ['CriticalTrials/2ndList/CTrial26/squirrel_towel.png',
      'CriticalTrials/2ndList/CTrial26/partyhat.png',
      'CriticalTrials/2ndList/CTrial26/zebra_partyhat.png',
      'CriticalTrials/2ndList/CTrial26/towel.png'],
    verb: 'select', compatibility: 'modifier'
  },

  /* Trial 27 */
  {
    audio: [
      'CriticalTrials/2ndList/CTrial27/choose_the_cow_with_the_pen.mp3'],
    images: ['<img id = "cowpen" src = "CriticalTrials/2ndList/CTrial27/cow_pen.png"></img>',
      '<img id = "barrette" src = "CriticalTrials/2ndList/CTrial27/barrette.png"></img>',
      '<img id = "squirrelbarrette" src = "CriticalTrials/2ndList/CTrial27/squirrel_barrette.png"></img>',
      '<img id = "pen" src = "CriticalTrials/2ndList/CTrial27/pen.png"></img>'],
    verb: 'choose', compatibility: 'modifier'
  },

  {
    audio: [
      'CriticalTrials/2ndList/CTrial27/choose_the_squirrel_with_the_barrette.mp3'],
    images: ['CriticalTrials/2ndList/CTrial27/cow_pen.png',
      'CriticalTrials/2ndList/CTrial27/barrette.png',
      'CriticalTrials/2ndList/CTrial27/squirrel_barrette.png',
      'CriticalTrials/2ndList/CTrial27/pen.png'],
    verb: 'choose', compatibility: 'modifier'
  },

  /* Filler trials */

  {
    audio: 'img/135_sentence1.mp3',
    images: ['img/butterfly.png',
      'img/frog_shell.png',
      'img/shell.png',
      'img/towel.png'],
    compatibility: 'filler'
  },

  {
    audio: 'img/134_sentence1.mp3',
    images: ['img/camel.png',
      'img/fish.png',
      'img/flag.png',
      'img/hat.png'],
    compatibility: 'filler'
  },

  {
    audio: 'img/133_sentence1.mp3',
    images: ['img/bird.png', 'img/chicken.png', 'img/mitten.png',
      'img/net.png'], compatibility: 'filler'
  },

  {
    audio: 'img/132_sentence1.mp3',
    images: ['img/net.png', 'img/duckling.png', 'img/giraffe.png',
      'img/umbrella.png'], compatibility: 'filler'
  },

  {
    audio: 'img/131_sentence1.mp3',
    images: ['img/net.png', 'img/cup.png', 'img/dolphin.png',
      'img/frog.png'], compatibility: 'filler'
  },

  {
    audio: 'img/130_sentence1.mp3',
    images: ['img/dog_funnel.png', 'img/fork.png', 'img/funnel.png',
      'img/panda.png'], compatibility: 'filler'
  },

  {
    audio: 'img/129_sentence1.mp3',
    images: ['img/bear.png', 'img/cow.png', 'img/flute.png',
      'img/stick.png'], compatibility: 'filler'
  },

  {
    audio: 'img/128_sentence1.mp3',
    images: ['img/camel.png', 'img/flute.png', 'img/hat.png',
      'img/whale.png'], compatibility: 'filler'
  },

  {
    audio: 'img/127_sentence1.mp3',
    images: ['img/butterfly.png', 'img/fork.png', 'img/towel.png',
      'img/hippo.png'], compatibility: 'filler'
  },

  {
    audio: 'img/126_sentence1.mp3',
    images: ['img/brush.png', 'img/bunny.png', 'img/camel.png',
      'img/tube.png'], compatibility: 'filler'
  },

  {
    audio: 'img/125_sentence1.mp3',
    images: ['img/clip.png', 'img/stick.png', 'img/elephant.png',
      'img/zebra.png'], compatibility: 'filler'
  },

  {
    audio: 'img/124_sentence1.mp3',
    images: ['img/zebra.png', 'img/leaf.png', 'img/penguin.png',
      'img/train.png'], compatibility: 'filler'
  },

  {
    audio: 'img/123_sentence1.mp3',
    images: ['img/book.png', 'img/flute.png', 'img/whale.png',
      'img/zebra.png'], compatibility: 'filler'
  },

  {
    audio: 'img/122_sentence1.mp3',
    images: ['img/bird.png', 'img/flower.png', 'img/toy.png',
      'img/turtle.png'], compatibility: 'filler'
  },

  {
    audio: 'img/121_sentence1.mp3',
    images: ['img/tube.png', 'img/turtle.png', 'img/mouse.png',
      'img/partyhat.png'], compatibility: 'filler'
  },

  {
    audio: 'img/120_sentence1.mp3',
    images: ['img/bear.png', 'img/stick.png', 'img/pen.png',
      'img/squirrel.png'], compatibility: 'filler'
  },

  {
    audio: 'img/119_sentence1.mp3',
    images: ['img/chopsticks.png', 'img/hippo.png', 'img/squirrel.png',
      'img/sponge.png'], compatibility: 'filler'
  },

  {
    audio: 'img/118_sentence1.mp3',
    images: ['img/net.png', 'img/ladybug_net.png', 'img/pig.png',
      'img/straw.png'], compatibility: 'filler'
  },

  {
    audio: 'img/117_sentence1.mp3',
    images: ['img/bird.png', 'img/fork.png', 'img/panda.png',
      'img/pencil.png'], compatibility: 'filler'
  },

  {
    audio: 'img/116_sentence1.mp3',
    images: ['img/panda.png', 'img/towel.png', 'img/leopard.png',
      'img/lollipop.png'], compatibility: 'filler'
  },

  {
    audio: 'img/115_sentence1.mp3',
    images: ['img/panda.png', 'img/fan.png', 'img/lion.png',
      'img/napkin.png'], compatibility: 'filler'
  },

  {
    audio: 'img/114_sentence1.mp3',
    images: ['img/chicken.png', 'img/funnel.png', 'img/leaf.png',
      'img/leopard_funnel.png'], compatibility: 'filler'
  },

  {
    audio: 'img/113_sentence1.mp3',
    images: ['img/fan.png', 'img/turtle.png', 'img/horse.png',
      'img/toothbrush.png'], compatibility: 'filler'
  },

  {
    audio: 'img/112_sentence1.mp3',
    images: ['img/book.png', 'img/hippo.png', 'img/penguin.png',
      'img/straw.png'], compatibility: 'filler'
  }
]


/* var trials2 = [
   {verb_type: 'modified', compatibility_type: 'instrument', audio: 'Audio/Audio/Critical_trials/strike_the_elephant_with_the_umbrella.mp3', images: ['img/elephant_umbrella.png','img/fan.png','img/umbrella.png','img/pencil.png']},
   {audio: 'Audio/Audio/Critical_trials/bop_the_elephant_with_the_napkin.mp3', images: ['img/elephant_napkin.png','img/fan.png','img/napkin.png','img/pencil.png']}
 ]*/