var practice_trials = [
  {
    audio: 'img/111_sentence1.mp3',
    images: [
      'img/fish.png',
      'img/funnel.png',
      'img/giraffe.png',
      'img/lollipop.png'
    ],
    compatibility: 'practice'
  },

  {
    audio: 'img/110_sentence1.mp3',
    images: [
      'img/clip.png',
      'img/elephant.png',
      'img/pen.png',
      'img/whale.png'
    ],
    compatibility: 'practice'
  },

  {
    audio: 'img/109_sentence1.mp3',
    images: [
      'img/bear.png',
      'img/dolphin.png',
      'img/fork.png',
      'img/microphone.png'
    ],
    compatibility: 'practice'
  }
]

var trials1 = [
  /* Trial 1 */
  {
    audio: 'CriticalTrials/1stList/CTrial1/strike_the_bear_with_the_necklace.mp3',
    images: [
      "CriticalTrials/1stList/CTrial1/bear_necklace.png",
      "CriticalTrials/1stList/CTrial1/necklace.png",
      "CriticalTrials/1stList/CTrial1/umbrella.png",
      "CriticalTrials/1stList/CTrial1/elephant_umbrella.png"
    ],
    verb: 'strike',
    compatibility: 'instrument',
    target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1',
  },

  {
    audio: 'CriticalTrials/1stList/CTrial1/strike_the_elephant_with_the_umbrella.mp3',
    images: ['CriticalTrials/1stList/CTrial1/necklace.png',
      'CriticalTrials/1stList/CTrial1/umbrella.png',
      'CriticalTrials/1stList/CTrial1/bear_necklace.png',
      'CriticalTrials/1stList/CTrial1/elephant_umbrella.png'],
    verb: 'strike', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-3',
    target_object: '#jspsych-free-sort-draggable-2'
  },

  /* Trial 2 */
  {
    audio: 'CriticalTrials/1stList/CTrial2/whack_the_ladybug_with_the_fan.mp3',
    images: ['CriticalTrials/1stList/CTrial2/cow_pencil.png',
      'CriticalTrials/1stList/CTrial2/pencil.png',
      'CriticalTrials/1stList/CTrial2/fan.png',
      'CriticalTrials/1stList/CTrial2/ladybug_fan.png'],
    verb: 'whack', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-3',
    target_object: '#jspsych-free-sort-draggable-2'
  },

  {
    audio: 'CriticalTrials/1stList/CTrial2/whack_the_cow_with_the_pencil.mp3',
    images: ['CriticalTrials/1stList/CTrial2/cow_pencil.png',
      'CriticalTrials/1stList/CTrial2/pencil.png',
      'CriticalTrials/1stList/CTrial2/fan.png',
      'CriticalTrials/1stList/CTrial2/ladybug_fan.png'],
    verb: 'whack', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1'
  },

  /* Trial 3 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial3/hit_the_mouse_with_the_cup.mp3',
    images: ['CriticalTrials/1stList/CTrial3/cup.png',
      'CriticalTrials/1stList/CTrial3/mouse_cup.png',
      'CriticalTrials/1stList/CTrial3/frog_tube.png',
      'CriticalTrials/1stList/CTrial3/tube.png'],
    verb: 'hit', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-1',
    target_object: '#jspsych-free-sort-draggable-0'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial3/hit_the_frog_with_the_tube.mp3',
    images: ['CriticalTrials/1stList/CTrial3/cup.png',
      'CriticalTrials/1stList/CTrial3/mouse_cup.png',
      'CriticalTrials/1stList/CTrial3/frog_tube.png',
      'CriticalTrials/1stList/CTrial3/tube.png'],
    verb: 'hit', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  /* Trial 4 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial4/rub_the_butterfly_with_the_violin.mp3',
    images: ['CriticalTrials/1stList/CTrial4/crayon.png',
      'CriticalTrials/1stList/CTrial4/butterfly_violin.png',
      'CriticalTrials/1stList/CTrial4/violin.png',
      'CriticalTrials/1stList/CTrial4/panda_crayon.png'],
    verb: 'rub', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-1',
    target_object: '#jspsych-free-sort-draggable-2'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial4/rub_the_panda_with_the_crayon.mp3',
    images: ['CriticalTrials/1stList/CTrial4/butterfly_violin.png',
      'CriticalTrials/1stList/CTrial4/violin.png',
      'CriticalTrials/1stList/CTrial4/crayon.png',
      'CriticalTrials/1stList/CTrial4/panda_crayon.png'],
    verb: 'rub', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-3',
    target_object: '#jspsych-free-sort-draggable-2'
  },

  /* Trial 5 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial5/poke_the_pig_with_the_violin.mp3',
    images: ['CriticalTrials/1stList/CTrial5/bunny_spoon.png',
      'CriticalTrials/1stList/CTrial5/spoon.png',
      'CriticalTrials/1stList/CTrial5/pig_violin.png',
      'CriticalTrials/1stList/CTrial5/violin.png'],
    verb: 'poke', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial5/poke_the_bunny_with_the_spoon.mp3',
    images: ['CriticalTrials/1stList/CTrial5/bunny_spoon.png',
      'CriticalTrials/1stList/CTrial5/violin.png',
      'CriticalTrials/1stList/CTrial5/pig_violin.png',
      'CriticalTrials/1stList/CTrial5/spoon.png'],
    verb: 'poke', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  /* Trial 6 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial6/bop_the_panda_with_the_spoon.mp3',
    images: ['CriticalTrials/1stList/CTrial6/elephant_napkin.png',
      'CriticalTrials/1stList/CTrial6/napkin.png',
      'CriticalTrials/1stList/CTrial6/panda_spoon.png',
      'CriticalTrials/1stList/CTrial6/spoon.png'],
    verb: 'bop', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial6/bop_the_elephant_with_the_napkin.mp3',
    images: ['CriticalTrials/1stList/CTrial6/elephant_napkin.png',
      'CriticalTrials/1stList/CTrial6/panda_spoon.png',
      'CriticalTrials/1stList/CTrial6/napkin.png',
      'CriticalTrials/1stList/CTrial6/spoon.png'],
    verb: 'bop', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-2'
  },

  /* Trial 7 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial7/smack_the_dog_with_the_hat.mp3',
    images: ['CriticalTrials/1stList/CTrial7/dog_hat.png',
      'CriticalTrials/1stList/CTrial7/hat.png',
      'CriticalTrials/1stList/CTrial7/flute.png',
      'CriticalTrials/1stList/CTrial7/leopard_flute.png'],
    verb: 'smack', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial7/smack_the_leopard_with_the_flute.mp3',
    images: ['CriticalTrials/1stList/CTrial7/hat.png',
      'CriticalTrials/1stList/CTrial7/flute.png',
      'CriticalTrials/1stList/CTrial7/dog_hat.png',
      'CriticalTrials/1stList/CTrial7/leopard_flute.png'],
    verb: 'smack', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-3',
    target_object: '#jspsych-free-sort-draggable-1'
  },

  /* Trial 8 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial8/clean_the_turtle_with_the_leaf.mp3',
    images: ['CriticalTrials/1stList/CTrial8/dog_violin.png',
      'CriticalTrials/1stList/CTrial8/violin.png',
      'CriticalTrials/1stList/CTrial8/turtle_leaf.png',
      'CriticalTrials/1stList/CTrial8/leaf.png'],
    verb: 'clean', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial8/clean_the_dog_with_the_violin.mp3',
    images: ['CriticalTrials/1stList/CTrial8/dog_violin.png',
      'CriticalTrials/1stList/CTrial8/violin.png',
      'CriticalTrials/1stList/CTrial8/turtle_leaf.png',
      'CriticalTrials/1stList/CTrial8/leaf.png'],
    verb: 'clean', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1'
  },

  /* Trial 9 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial9/tease_the_leopard_with_the_crayon.mp3',
    images: ['CriticalTrials/1stList/CTrial9/dog_lollipop.png',
      'CriticalTrials/1stList/CTrial9/lollipop.png',
      'CriticalTrials/1stList/CTrial9/leopard_crayon.png',
      'CriticalTrials/1stList/CTrial9/crayon.png'],
    verb: 'tease', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial9/tease_the_dog_with_the_lolipop.mp3',
    images: ['CriticalTrials/1stList/CTrial9/crayon.png',
      'CriticalTrials/1stList/CTrial9/dog_lollipop.png',
      'CriticalTrials/1stList/CTrial9/leopard_crayon.png',
      'CriticalTrials/1stList/CTrial9/lollipop.png'],
    verb: 'tease', compatibility: 'instrument', target_animal: '#jspsych-free-sort-draggable-1',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  /* Trial 10 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial10/feed_the_duckling_with_the_book.mp3',
    images: ['CriticalTrials/1stList/CTrial10/duckling_book.png',
      'CriticalTrials/1stList/CTrial10/book.png',
      'CriticalTrials/1stList/CTrial10/zebra_lollipop.png',
      'CriticalTrials/1stList/CTrial10/lollipop.png'],
    verb: 'feed', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial10/feed_the_zebra_with_the_lollipop.mp3',
    images: [
      'CriticalTrials/1stList/CTrial10/book.png',
      'CriticalTrials/1stList/CTrial10/zebra_lollipop.png',
      'CriticalTrials/1stList/CTrial10/duckling_book.png',
      'CriticalTrials/1stList/CTrial10/lollipop.png'],
    verb: 'feed', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-1',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  /* Trial 11 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial11/scuff_the_pig_with_the_flower.mp3',
    images: ['CriticalTrials/1stList/CTrial11/chicken_cup.png',
      'CriticalTrials/1stList/CTrial11/cup.png',
      'CriticalTrials/1stList/CTrial11/pig_flower.png',
      'CriticalTrials/1stList/CTrial11/flower.png'],
    verb: 'scuff', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial11/scuff_the_chicken_the_cup.mp3',
    images: ['CriticalTrials/1stList/CTrial11/chicken_cup.png',
      'CriticalTrials/1stList/CTrial11/pig_flower.png',
      'CriticalTrials/1stList/CTrial11/cup.png',
      'CriticalTrials/1stList/CTrial11/flower.png'],
    verb: 'scuff', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-2'
  },

  /* Trial 12 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial12/pinch_the_leopard_with_the_hat.mp3',
    images: ['CriticalTrials/1stList/CTrial12/leopard_hat.png',
      'CriticalTrials/1stList/CTrial12/hat.png',
      'CriticalTrials/1stList/CTrial12/panda_toothbrush.png',
      'CriticalTrials/1stList/CTrial12/toothbrush.png'],
    verb: 'pinch', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial12/pinch_the_panda_with_the_toothbrush.mp3',
    images: [
      'CriticalTrials/1stList/CTrial12/hat.png',
      'CriticalTrials/1stList/CTrial12/leopard_hat.png',
      'CriticalTrials/1stList/CTrial12/panda_toothbrush.png',
      'CriticalTrials/1stList/CTrial12/toothbrush.png'],
    verb: 'pinch', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  /* Trial 13 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial13/knock_on_the_frog_with_the_sponge.mp3',
    images: ['CriticalTrials/1stList/CTrial13/bunny_feather.png',
      'CriticalTrials/1stList/CTrial13/feather.png',
      'CriticalTrials/1stList/CTrial13/sponge.png',
      'CriticalTrials/1stList/CTrial13/frog_sponge.png'],
    verb: 'knockon', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-3',
    target_object: '#jspsych-free-sort-draggable-2'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial13/knock_on_the_bunny_with_the_feather.mp3',
    images: ['CriticalTrials/1stList/CTrial13/bunny_feather.png',
      'CriticalTrials/1stList/CTrial13/feather.png',
      'CriticalTrials/1stList/CTrial13/sponge.png',
      'CriticalTrials/1stList/CTrial13/frog_sponge.png'],
    verb: 'knockon', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1'
  },

  /* Trial 14 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial14/pat_the_dog_with_the_flower.mp3',
    images: ['CriticalTrials/1stList/CTrial14/dog_flower.png',
      'CriticalTrials/1stList/CTrial14/flower.png',
      'CriticalTrials/1stList/CTrial14/leopard_pencil.png',
      'CriticalTrials/1stList/CTrial14/pencil.png'],
    verb: 'pat', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial14/pat_the_leopard_with_the_pencil.mp3',
    images: ['CriticalTrials/1stList/CTrial14/dog_flower.png',
      'CriticalTrials/1stList/CTrial14/flower.png',
      'CriticalTrials/1stList/CTrial14/leopard_pencil.png',
      'CriticalTrials/1stList/CTrial14/pencil.png'],
    verb: 'pat', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  /* Trial 15 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial15/locate_the_penguin_with_the_tube.mp3',
    images: ['CriticalTrials/1stList/CTrial15/camel_straw.png',
      'CriticalTrials/1stList/CTrial15/straw.png',
      'CriticalTrials/1stList/CTrial15/penguin_tube.png',
      'CriticalTrials/1stList/CTrial15/tube.png'],
    verb: 'locate', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial15/locate_the_camel_with_the_straw.mp3',
    images: ['CriticalTrials/1stList/CTrial15/camel_straw.png',
      'CriticalTrials/1stList/CTrial15/straw.png',
      'CriticalTrials/1stList/CTrial15/penguin_tube.png',
      'CriticalTrials/1stList/CTrial15/tube.png'],
    verb: 'locate', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1'
  },


  /* Trial 16 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial16/feel_the_leopard_with_the_pen.mp3',
    images: ['CriticalTrials/1stList/CTrial16/bear_candle.png',
      'CriticalTrials/1stList/CTrial16/candle.png',
      'CriticalTrials/1stList/CTrial16/leopard_pen.png',
      'CriticalTrials/1stList/CTrial16/pen.png'],
    verb: 'feel', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial16/feel_the_bear_with_the_candle.mp3',
    images: [
      'CriticalTrials/1stList/CTrial16/candle.png',
      'CriticalTrials/1stList/CTrial16/leopard_pen.png',
      'CriticalTrials/1stList/CTrial16/bear_candle.png',
      'CriticalTrials/1stList/CTrial16/pen.png'],
    verb: 'feel', compatibility: 'equibiased',
    target_animal: '#jspsych-free-sort-draggable-2', target_object: '#jspsych-free-sort-draggable-0'
  },

  /* Trial 17 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial17/spot_the_lion_with_the_straw.mp3',
    images: ['CriticalTrials/1stList/CTrial17/bird_pencil.png',
      'CriticalTrials/1stList/CTrial17/pencil.png',
      'CriticalTrials/1stList/CTrial17/straw.png',
      'CriticalTrials/1stList/CTrial17/lion_straw.png'
    ],
    verb: 'spot', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-3',
    target_object: '#jspsych-free-sort-draggable-2'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial17/spot_the_bird_with_the_pencil.mp3',
    images: [
      'CriticalTrials/1stList/CTrial17/pencil.png',
      'CriticalTrials/1stList/CTrial17/bird_pencil.png',
      'CriticalTrials/1stList/CTrial17/lion_straw.png',
      'CriticalTrials/1stList/CTrial17/straw.png'],
    verb: 'spot', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-1',
    target_object: '#jspsych-free-sort-draggable-0'
  },


  /* Trial 18 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial18/point_to_the_penguin_with_the_leaf.mp3',
    images: ['CriticalTrials/1stList/CTrial18/fish_funnel.png',
      'CriticalTrials/1stList/CTrial18/funnel.png',
      'CriticalTrials/1stList/CTrial18/penguin_leaf.png',
      'CriticalTrials/1stList/CTrial18/leaf.png'],
    verb: 'point', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial18/point_to_the_fish_with_the_funnel.mp3',
    images: ['CriticalTrials/1stList/CTrial18/fish_funnel.png',
      'CriticalTrials/1stList/CTrial18/funnel.png',
      'CriticalTrials/1stList/CTrial18/penguin_leaf.png',
      'CriticalTrials/1stList/CTrial18/leaf.png'],
    verb: 'point', compatibility: 'equibiased', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1'
  },

  /* Trial 19 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial19/pet_the_lion_with_the_tongs.mp3',
    images: ['CriticalTrials/1stList/CTrial19/dolphin_sponge.png',
      'CriticalTrials/1stList/CTrial19/sponge.png',
      'CriticalTrials/1stList/CTrial19/lion_tongs.png',
      'CriticalTrials/1stList/CTrial19/tongs.png'],
    verb: 'pet', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial19/pet_the_dolphin_with_the_sponge.mp3',
    images: ['CriticalTrials/1stList/CTrial19/lion_tongs.png',
      'CriticalTrials/1stList/CTrial19/sponge.png',
      'CriticalTrials/1stList/CTrial19/dolphin_sponge.png',
      'CriticalTrials/1stList/CTrial19/tongs.png'],
    verb: 'pet', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-1'
  },

  /* Trial 20 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial20/look_at_the_chicken_with_the_leaf.mp3',
    images: ['CriticalTrials/1stList/CTrial20/chicken_leaf.png',
      'CriticalTrials/1stList/CTrial20/leaf.png',
      'CriticalTrials/1stList/CTrial20/horse_spoon.png',
      'CriticalTrials/1stList/CTrial20/spoon.png'],
    verb: 'look', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial20/look_at_the_horse_with_the_spoon.mp3',
    images: ['CriticalTrials/1stList/CTrial20/chicken_leaf.png',
      'CriticalTrials/1stList/CTrial20/spoon.png',
      'CriticalTrials/1stList/CTrial20/horse_spoon.png',
      'CriticalTrials/1stList/CTrial20/leaf.png'],
    verb: 'look', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-1'
  },

  /* Trial 21 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial21/squeeze_the_bunny_with_the_hat.mp3',
    images: ['CriticalTrials/1stList/CTrial21/bunny_hat.png',
      'CriticalTrials/1stList/CTrial21/hat.png',
      'CriticalTrials/1stList/CTrial21/zebra_microphone.png',
      'CriticalTrials/1stList/CTrial21/microphone.png'],
    verb: 'squeeze', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial21/squeeze_the_zebra_with_the_microphone.mp3',
    images: ['CriticalTrials/1stList/CTrial21/bunny_hat.png',
      'CriticalTrials/1stList/CTrial21/hat.png',
      'CriticalTrials/1stList/CTrial21/zebra_microphone.png',
      'CriticalTrials/1stList/CTrial21/microphone.png'],
    verb: 'squeeze', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
  },


  /* Trial 22 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial22/pick_out_the_ladybug_with_a_straw.mp3',
    images: ['CriticalTrials/1stList/CTrial22/duckling_net.png',
      'CriticalTrials/1stList/CTrial22/net.png',
      'CriticalTrials/1stList/CTrial22/ladybug_straw.png',
      'CriticalTrials/1stList/CTrial22/straw.png'],
    verb: 'pickout', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial22/pickout_the_duckling_with_the_net.mp3',
    images: ['CriticalTrials/1stList/CTrial22/duckling_net.png',
      'CriticalTrials/1stList/CTrial22/net.png',
      'CriticalTrials/1stList/CTrial22/ladybug_straw.png',
      'CriticalTrials/1stList/CTrial22/straw.png'],
    verb: 'pickout', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1'
  },

  /* Trial 23 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial23/cuddle_the_whale_with_the_pen.mp3',
    images: ['CriticalTrials/1stList/CTrial23/dolphin_microphone.png',
      'CriticalTrials/1stList/CTrial23/microphone.png',
      'CriticalTrials/1stList/CTrial23/whale_pen.png',
      'CriticalTrials/1stList/CTrial23/pen.png'],
    verb: 'cuddle', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial23/cuddle_dolphin_with_the_microphone.mp3',
    images: ['CriticalTrials/1stList/CTrial23/dolphin_microphone.png',
      'CriticalTrials/1stList/CTrial23/microphone.png',
      'CriticalTrials/1stList/CTrial23/whale_pen.png',
      'CriticalTrials/1stList/CTrial23/pen.png'],
    verb: 'cuddle', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1'
  },

  /* Trial 24 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial24/find_the_bird_with_the_mitten.mp3',
    images: ['CriticalTrials/1stList/CTrial24/bird_mitten.png',
      'CriticalTrials/1stList/CTrial24/mitten.png',
      'CriticalTrials/1stList/CTrial24/lion_towel.png',
      'CriticalTrials/1stList/CTrial24/towel.png'],
    verb: 'find', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial24/find_the_lion_with_the_towel.mp3',
    images: ['CriticalTrials/1stList/CTrial24/bird_mitten.png',
      'CriticalTrials/1stList/CTrial24/mitten.png',
      'CriticalTrials/1stList/CTrial24/lion_towel.png',
      'CriticalTrials/1stList/CTrial24/towel.png'],
    verb: 'find', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
  },


  /* Trial 25 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial25/hug_the_panda_with_the_umbrella.mp3',
    images: ['CriticalTrials/1stList/CTrial25/giraffe_partyhat.png',
      'CriticalTrials/1stList/CTrial25/partyhat.png',
      'CriticalTrials/1stList/CTrial25/panda_umbrella.png',
      'CriticalTrials/1stList/CTrial25/umbrella.png'],
    verb: 'hug', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial25/hug_the_giraffe_with_the_partyhat.mp3',
    images: ['CriticalTrials/1stList/CTrial25/giraffe_partyhat.png',
      'CriticalTrials/1stList/CTrial25/partyhat.png',
      'CriticalTrials/1stList/CTrial25/panda_umbrella.png',
      'CriticalTrials/1stList/CTrial25/umbrella.png'],
    verb: 'hug', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1'
  },


  /* Trial 26 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial26/select_the_squirrel_with_the_partyhat.mp3',
    images: ['CriticalTrials/1stList/CTrial26/squirrel_partyhat.png',
      'CriticalTrials/1stList/CTrial26/partyhat.png',
      'CriticalTrials/1stList/CTrial26/zebra_towel.png',
      'CriticalTrials/1stList/CTrial26/towel.png'],
    verb: 'select', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial26/select_the_zebra_with_a_towel.mp3',
    images: ['CriticalTrials/1stList/CTrial26/squirrel_partyhat.png',
      'CriticalTrials/1stList/CTrial26/partyhat.png',
      'CriticalTrials/1stList/CTrial26/zebra_towel.png',
      'CriticalTrials/1stList/CTrial26/towel.png'],
    verb: 'select', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
  },

  /* Trial 27 */
  {
    audio: 
      'CriticalTrials/1stList/CTrial27/choose_the_cow_with_the_barrette.mp3',
    images: ['CriticalTrials/1stList/CTrial27/cow_barrette.png',
      'CriticalTrials/1stList/CTrial27/barrette.png',
      'CriticalTrials/1stList/CTrial27/squirrel_pen.png',
      'CriticalTrials/1stList/CTrial27/pen.png'],
    verb: 'choose', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-0',
    target_object: '#jspsych-free-sort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/1stList/CTrial27/choose_the_squirrel_with_the_pen.mp3',
    images: ['CriticalTrials/1stList/CTrial27/cow_barrette.png',
      'CriticalTrials/1stList/CTrial27/barrette.png',
      'CriticalTrials/1stList/CTrial27/squirrel_pen.png',
      'CriticalTrials/1stList/CTrial27/pen.png'],
    verb: 'choose', compatibility: 'modifier', target_animal: '#jspsych-free-sort-draggable-2',
    target_object: '#jspsych-free-sort-draggable-3'
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
    audio: 
      'CriticalTrials/2ndList/CTrial1/strike_the_bear_with_the_umbrella.mp3',
    images: ['CriticalTrials/2ndList/CTrial1/bear_umbrella.png',
      'CriticalTrials/2ndList/CTrial1/umbrella.png',
      'CriticalTrials/2ndList/CTrial1/necklace.png',
      'CriticalTrials/2ndList/CTrial1/elephant_necklace.png'],
    verb: 'strike', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial1/strike_the_elephant_with_the_necklace.mp3',
    images: ['CriticalTrials/2ndList/CTrial1/bear_umbrella.png',
      'CriticalTrials/2ndList/CTrial1/umbrella.png',
      'CriticalTrials/2ndList/CTrial1/necklace.png',
      'CriticalTrials/2ndList/CTrial1/elephant_necklace.png'],
    verb: 'strike', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-3',
    target_object: '#jspsych-freesort-draggable-2'
  },

  /* Trial 2 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial2/wack_the_cow_with_the_fan.mp3',
    images: ['CriticalTrials/2ndList/CTrial2/cow_fan.png',
      'CriticalTrials/2ndList/CTrial2/pencil.png',
      'CriticalTrials/2ndList/CTrial2/ladybug_pencil.png',
      'CriticalTrials/2ndList/CTrial2/fan.png'
    ],
    verb: 'whack', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial2/wack_the_ladybug_with_the_pencil.mp3',
    images: ['CriticalTrials/2ndList/CTrial2/cow_fan.png',
      'CriticalTrials/2ndList/CTrial2/pencil.png',
      'CriticalTrials/2ndList/CTrial2/fan.png',
      'CriticalTrials/2ndList/CTrial2/ladybug_pencil.png'],
    verb: 'whack', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-3',
    target_object: '#jspsych-freesort-draggable-1'
  },

  /* Trial 3 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial3/hit_the_frog_with_the_cup.mp3',
    images: ['CriticalTrials/2ndList/CTrial3/cup.png',
      'CriticalTrials/2ndList/CTrial3/mouse_tube.png',
      'CriticalTrials/2ndList/CTrial3/frog_cup.png',
      'CriticalTrials/2ndList/CTrial3/tube.png'],
    verb: 'hit', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-0'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial3/hit_the_mouse_with_the_tube.mp3',
    images: ['CriticalTrials/2ndList/CTrial3/cup.png',
      'CriticalTrials/2ndList/CTrial3/frog_cup.png',
      'CriticalTrials/2ndList/CTrial3/mouse_tube.png',
      'CriticalTrials/2ndList/CTrial3/tube.png'],
    verb: 'hit', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-3'
  },

  /* Trial 4 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial4/rub_the_butterfly_with_the_crayon.mp3',
    images: ['CriticalTrials/2ndList/CTrial4/butterfly_crayon.png',
      'CriticalTrials/2ndList/CTrial4/violin.png',
      'CriticalTrials/2ndList/CTrial4/crayon.png',
      'CriticalTrials/2ndList/CTrial4/panda_violin.png'],
    verb: 'rub', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-2'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial4/rub_the_panda_with_the_violin.mp3',
    images: ['CriticalTrials/2ndList/CTrial4/butterfly_crayon.png',
      'CriticalTrials/2ndList/CTrial4/violin.png',
      'CriticalTrials/2ndList/CTrial4/crayon.png',
      'CriticalTrials/2ndList/CTrial4/panda_violin.png'],
    verb: 'rub', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-3',
    target_object: '#jspsych-freesort-draggable-1'
  },


  /* Trial 5 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial5/poke_the_pig_with_the_spoon.mp3',
    images: ['CriticalTrials/2ndList/CTrial5/bunny_violin.png',
      'CriticalTrials/2ndList/CTrial5/spoon.png',
      'CriticalTrials/2ndList/CTrial5/pig_spoon.png',
      'CriticalTrials/2ndList/CTrial5/violin.png'],
    verb: 'poke', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial5/poke_the_bunny_with_the_violin.mp3',
    images: ['CriticalTrials/2ndList/CTrial5/bunny_violin.png',
      'CriticalTrials/2ndList/CTrial5/spoon.png',
      'CriticalTrials/2ndList/CTrial5/pig_spoon.png',
      'CriticalTrials/2ndList/CTrial5/violin.png'],
    verb: 'poke', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  /* Trial 6 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial6/bop_the_panda_with_the_napkin.mp3',
    images: ['CriticalTrials/2ndList/CTrial6/elephant_spoon.png',
      'CriticalTrials/2ndList/CTrial6/napkin.png',
      'CriticalTrials/2ndList/CTrial6/panda_napkin.png',
      'CriticalTrials/2ndList/CTrial6/spoon.png'],
    verb: 'bop', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial6/bop_the_elephant_with_the_spoon.mp3',
    images: ['CriticalTrials/2ndList/CTrial6/elephant_spoon.png',
      'CriticalTrials/2ndList/CTrial6/napkin.png',
      'CriticalTrials/2ndList/CTrial6/panda_napkin.png',
      'CriticalTrials/2ndList/CTrial6/spoon.png'],
    verb: 'bop', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  /* Trial 7 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial7/smack_the_dog_with_the_flute.mp3',
    images: ['CriticalTrials/2ndList/CTrial7/dog_flute.png',
      'CriticalTrials/2ndList/CTrial7/hat.png',
      'CriticalTrials/2ndList/CTrial7/flute.png',
      'CriticalTrials/2ndList/CTrial7/leopard_hat.png'],
    verb: 'smack', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-2'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial7/smack_the_leopard_with_the_hat.mp3',
    images: ['CriticalTrials/2ndList/CTrial7/dog_flute.png',
      'CriticalTrials/2ndList/CTrial7/hat.png',
      'CriticalTrials/2ndList/CTrial7/flute.png',
      'CriticalTrials/2ndList/CTrial7/leopard_hat.png'],
    verb: 'smack', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-3',
    target_object: '#jspsych-freesort-draggable-1'
  },

  /* Trial 8 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial8/clean_the_turtle_with_the_violin.mp3',
    images: ['CriticalTrials/2ndList/CTrial8/dog_leaf.png',
      'CriticalTrials/2ndList/CTrial8/violin.png',
      'CriticalTrials/2ndList/CTrial8/turtle_violin.png',
      'CriticalTrials/2ndList/CTrial8/leaf.png'],
    verb: 'clean', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial8/clean_the_dog_with_the_leaf.mp3',
    images: ['CriticalTrials/2ndList/CTrial8/dog_leaf.png',
      'CriticalTrials/2ndList/CTrial8/violin.png',
      'CriticalTrials/2ndList/CTrial8/turtle_violin.png',
      'CriticalTrials/2ndList/CTrial8/leaf.png'],
    verb: 'clean', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  /* Trial 9 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial9/tease_the_leopard_with_the_lollipop.mp3',
    images: ['CriticalTrials/2ndList/CTrial9/dog_crayon.png',
      'CriticalTrials/2ndList/CTrial9/lollipop.png',
      'CriticalTrials/2ndList/CTrial9/leopard_lollipop.png',
      'CriticalTrials/2ndList/CTrial9/crayon.png'],
    verb: 'tease', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial9/tease_the_dog_with_the_crayon.mp3',
    images: ['CriticalTrials/2ndList/CTrial9/dog_crayon.png',
      'CriticalTrials/2ndList/CTrial9/lollipop.png',
      'CriticalTrials/2ndList/CTrial9/leopard_lollipop.png',
      'CriticalTrials/2ndList/CTrial9/crayon.png'],
    verb: 'tease', compatibility: 'instrument', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },


  /* Trial 10 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial10/feed_the_zebra_with_the_book.mp3',
    images: ['CriticalTrials/2ndList/CTrial10/duckling_lollipop.png',
      'CriticalTrials/2ndList/CTrial10/book.png',
      'CriticalTrials/2ndList/CTrial10/zebra_book.png',
      'CriticalTrials/2ndList/CTrial10/lollipop.png'],
    verb: 'feed', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial10/feed_the_duckling_with_the_lollipop.mp3',
    images: ['CriticalTrials/2ndList/CTrial10/duckling_lollipop.png',
      'CriticalTrials/2ndList/CTrial10/book.png',
      'CriticalTrials/2ndList/CTrial10/zebra_book.png',
      'CriticalTrials/2ndList/CTrial10/lollipop.png'],
    verb: 'feed', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  /* Trial 11 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial11/scuff_the_pig_with_the_cup.mp3',
    images: ['CriticalTrials/2ndList/CTrial11/chicken_flower.png',
      'CriticalTrials/2ndList/CTrial11/cup.png',
      'CriticalTrials/2ndList/CTrial11/pig_cup.png',
      'CriticalTrials/2ndList/CTrial11/flower.png'],
    verb: 'scuff', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial11/scuff_the_chicken_with_the_flower.mp3',
    images: ['CriticalTrials/2ndList/CTrial11/chicken_flower.png',
      'CriticalTrials/2ndList/CTrial11/cup.png',
      'CriticalTrials/2ndList/CTrial11/pig_cup.png',
      'CriticalTrials/2ndList/CTrial11/flower.png'],
    verb: 'scuff', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  /* Trial 12 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial12/pinch_the_panda_with_the_hat.mp3',
    images: ['CriticalTrials/2ndList/CTrial12/leopard_toothbrush.png',
      'CriticalTrials/2ndList/CTrial12/hat.png',
      'CriticalTrials/2ndList/CTrial12/panda_hat.png',
      'CriticalTrials/2ndList/CTrial12/toothbrush.png'],
    verb: 'pinch', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial12/pinch_the_leopard_with_the_toothbrush.mp3',
    images: ['CriticalTrials/2ndList/CTrial12/leopard_toothbrush.png',
      'CriticalTrials/2ndList/CTrial12/hat.png',
      'CriticalTrials/2ndList/CTrial12/panda_hat.png',
      'CriticalTrials/2ndList/CTrial12/toothbrush.png'],
    verb: 'pinch', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  /* Trial 13 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial13/knock_on_the_bunny_with_the_sponge.mp3',
    images: ['CriticalTrials/2ndList/CTrial13/bunny_sponge.png',
      'CriticalTrials/2ndList/CTrial13/feather.png',
      'CriticalTrials/2ndList/CTrial13/sponge.png',
      'CriticalTrials/2ndList/CTrial13/frog_feather.png'],
    verb: 'knockon', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-2'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial13/knock_on_the_frog_with_the_feather.mp3',
    images: ['CriticalTrials/2ndList/CTrial13/bunny_sponge.png',
      'CriticalTrials/2ndList/CTrial13/feather.png',
      'CriticalTrials/2ndList/CTrial13/sponge.png',
      'CriticalTrials/2ndList/CTrial13/frog_feather.png'],
    verb: 'knockon', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-3',
    target_object: '#jspsych-freesort-draggable-1'
  },

  /* Trial 14 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial14/pat_the_leopard_with_the_flower.mp3',
    images: ['CriticalTrials/2ndList/CTrial14/dog_pencil.png',
      'CriticalTrials/2ndList/CTrial14/flower.png',
      'CriticalTrials/2ndList/CTrial14/leopard_flower.png',
      'CriticalTrials/2ndList/CTrial14/pencil.png'],
    verb: 'pat', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial14/pat_the_dog_with_the_pencil.mp3',
    images: ['CriticalTrials/2ndList/CTrial14/dog_pencil.png',
      'CriticalTrials/2ndList/CTrial14/flower.png',
      'CriticalTrials/2ndList/CTrial14/leopard_flower.png',
      'CriticalTrials/2ndList/CTrial14/pencil.png'],
    verb: 'pat', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  /* Trial 15 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial15/locate_the_camel_with_the_tube.mp3',
    images: ['CriticalTrials/2ndList/CTrial15/camel_tube.png',
      'CriticalTrials/2ndList/CTrial15/straw.png',
      'CriticalTrials/2ndList/CTrial15/penguin_straw.png',
      'CriticalTrials/2ndList/CTrial15/tube.png'],
    verb: 'locate', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial15/locate_the_penguin_with_the_straw.mp3',
    images: ['CriticalTrials/2ndList/CTrial15/camel_tube.png',
      'CriticalTrials/2ndList/CTrial15/straw.png',
      'CriticalTrials/2ndList/CTrial15/penguin_straw.png',
      'CriticalTrials/2ndList/CTrial15/tube.png'],
    verb: 'locate', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
  },

  /* Trial 16 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial16/feel_the_bear_with_the_pen.mp3',
    images: ['CriticalTrials/2ndList/CTrial16/bear_pen.png',
      'CriticalTrials/2ndList/CTrial16/candle.png',
      'CriticalTrials/2ndList/CTrial16/leopard_candle.png',
      'CriticalTrials/2ndList/CTrial16/pen.png'],
    verb: 'feel', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial16/feel_the_leopard_with_the_candle.mp3',
    images: ['CriticalTrials/2ndList/CTrial16/bear_pen.png',
      'CriticalTrials/2ndList/CTrial16/candle.png',
      'CriticalTrials/2ndList/CTrial16/leopard_candle.png',
      'CriticalTrials/2ndList/CTrial16/pen.png'],
    verb: 'feel', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
  },

  /* Trial 17 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial17/spot_the_bird_with_the_straw.mp3',
    images: ['CriticalTrials/2ndList/CTrial17/bird_straw.png',
      'CriticalTrials/2ndList/CTrial17/pencil.png',
      'CriticalTrials/2ndList/CTrial17/lion_pencil.png',
      'CriticalTrials/2ndList/CTrial17/straw.png'],
    verb: 'spot', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial17/spot_the_lion_with_the_pencil.mp3',
    images: ['CriticalTrials/2ndList/CTrial17/bird_straw.png',
      'CriticalTrials/2ndList/CTrial17/pencil.png',
      'CriticalTrials/2ndList/CTrial17/lion_pencil.png',
      'CriticalTrials/2ndList/CTrial17/straw.png'],
    verb: 'spot', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
  },


  /* Trial 18 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial18/point_to_the_penguin_with_the_funnel.mp3',
    images: ['CriticalTrials/2ndList/CTrial18/fish_leaf.png',
      'CriticalTrials/2ndList/CTrial18/funnel.png',
      'CriticalTrials/2ndList/CTrial18/penguin_funnel.png',
      'CriticalTrials/2ndList/CTrial18/leaf.png'],
    verb: 'point', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial18/point_to_the_fish_with_the_leaf.mp3',
    images: ['CriticalTrials/2ndList/CTrial18/fish_leaf.png',
      'CriticalTrials/2ndList/CTrial18/funnel.png',
      'CriticalTrials/2ndList/CTrial18/penguin_funnel.png',
      'CriticalTrials/2ndList/CTrial18/leaf.png'],
    verb: 'point', compatibility: 'equibiased', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  /* Trial 19 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial19/pet_the_lion_with_the_sponge.mp3',
    images: ['CriticalTrials/2ndList/CTrial19/dolphin_tongs.png',
      'CriticalTrials/2ndList/CTrial19/tongs.png',
      'CriticalTrials/2ndList/CTrial19/lion_sponge.png',
      'CriticalTrials/2ndList/CTrial19/sponge.png'],
    verb: 'pet', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial19/pet_the_dolphin_with_the_tongs.mp3',
    images: ['CriticalTrials/2ndList/CTrial19/dolphin_tongs.png',
      'CriticalTrials/2ndList/CTrial19/sponge.png',
      'CriticalTrials/2ndList/CTrial19/lion_sponge.png',
      'CriticalTrials/2ndList/CTrial19/tongs.png'],
    verb: 'pet', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  /* Trial 20 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial20/look_at_the_chicken_with_the_spoon.mp3',
    images: ['CriticalTrials/2ndList/CTrial20/chicken_spoon.png',
      'CriticalTrials/2ndList/CTrial20/leaf.png',
      'CriticalTrials/2ndList/CTrial20/horse_leaf.png',
      'CriticalTrials/2ndList/CTrial20/spoon.png'],
    verb: 'look', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial20/look_at_horse_with_the_leaf.mp3',
    images: ['CriticalTrials/2ndList/CTrial20/chicken_spoon.png',
      'CriticalTrials/2ndList/CTrial20/leaf.png',
      'CriticalTrials/2ndList/CTrial20/horse_leaf.png',
      'CriticalTrials/2ndList/CTrial20/spoon.png'],
    verb: 'look', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
  },

  /* Trial 21 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial21/squeeze_zebra_with_the_hat.mp3',
    images: ['CriticalTrials/2ndList/CTrial21/bunny_microphone.png',
      'CriticalTrials/2ndList/CTrial21/hat.png',
      'CriticalTrials/2ndList/CTrial21/zebra_hat.png',
      'CriticalTrials/2ndList/CTrial21/microphone.png'],
    verb: 'squeeze', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial21/squeeze_the_bunny_with_the_microphone.mp3',
    images: ['CriticalTrials/2ndList/CTrial21/bunny_microphone.png',
      'CriticalTrials/2ndList/CTrial21/hat.png',
      'CriticalTrials/2ndList/CTrial21/zebra_hat.png',
      'CriticalTrials/2ndList/CTrial21/microphone.png'],
    verb: 'squeeze', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },


  /* Trial 22 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial22/pick_out_the_duckling_with_a_straw.mp3',
    images: ['CriticalTrials/2ndList/CTrial22/duckling_straw.png',
      'CriticalTrials/2ndList/CTrial22/net.png',
      'CriticalTrials/2ndList/CTrial22/ladybug_net.png',
      'CriticalTrials/2ndList/CTrial22/straw.png'],
    verb: 'pickout', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial22/pickout_the_ladybug_with_the_net.mp3',
    images: ['CriticalTrials/2ndList/CTrial22/duckling_straw.png',
      'CriticalTrials/2ndList/CTrial22/net.png',
      'CriticalTrials/2ndList/CTrial22/ladybug_net.png',
      'CriticalTrials/2ndList/CTrial22/straw.png'],
    verb: 'pickout', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
  },


  /* Trial 23 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial23/cuddle_the_dolphin_with_the_pen.mp3',
    images: ['CriticalTrials/2ndList/CTrial23/dolphin_pen.png',
      'CriticalTrials/2ndList/CTrial23/microphone.png',
      'CriticalTrials/2ndList/CTrial23/whale_microphone.png',
      'CriticalTrials/2ndList/CTrial23/pen.png'],
    verb: 'cuddle', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial23/cuddle_the_whale_with_the_microphone.mp3',
    images: ['CriticalTrials/2ndList/CTrial23/dolphin_pen.png',
      'CriticalTrials/2ndList/CTrial23/microphone.png',
      'CriticalTrials/2ndList/CTrial23/whale_microphone.png',
      'CriticalTrials/2ndList/CTrial23/pen.png'],
    verb: 'cuddle', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
  },


  /* Trial 24 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial24/find_the_bird_with_the_towel.mp3',
    images: ['CriticalTrials/2ndList/CTrial24/bird_towel.png',
      'CriticalTrials/2ndList/CTrial24/mitten.png',
      'CriticalTrials/2ndList/CTrial24/lion_mitten.png',
      'CriticalTrials/2ndList/CTrial24/towel.png'],
    verb: 'find', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial24/find_the_lion_with_the_mitten.mp3',
    images: ['CriticalTrials/2ndList/CTrial24/bird_towel.png',
      'CriticalTrials/2ndList/CTrial24/mitten.png',
      'CriticalTrials/2ndList/CTrial24/lion_mitten.png',
      'CriticalTrials/2ndList/CTrial24/towel.png'],
    verb: 'find', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
  },


  /* Trial 25 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial25/hug_the_giraffe_with_the_umbrella.mp3',
    images: ['CriticalTrials/2ndList/CTrial25/giraffe_umbrella.png',
      'CriticalTrials/2ndList/CTrial25/partyhat.png',
      'CriticalTrials/2ndList/CTrial25/panda_partyhat.png',
      'CriticalTrials/2ndList/CTrial25/umbrella.png'],
    verb: 'hug', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial25/hug_the_panda_with_the_partyhat.mp3',
    images: ['CriticalTrials/2ndList/CTrial25/giraffe_umbrella.png',
      'CriticalTrials/2ndList/CTrial25/partyhat.png',
      'CriticalTrials/2ndList/CTrial25/panda_partyhat.png',
      'CriticalTrials/2ndList/CTrial25/umbrella.png'],
    verb: 'hug', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
  },

  /* Trial 26 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial26/select_the_zebra_with_the_partyhat.mp3',
    images: ['CriticalTrials/2ndList/CTrial26/squirrel_towel.png',
      'CriticalTrials/2ndList/CTrial26/partyhat.png',
      'CriticalTrials/2ndList/CTrial26/towel.png',
      'CriticalTrials/2ndList/CTrial26/zebra_partyhat.png'
    ],
    verb: 'select', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-3',
    target_object: '#jspsych-freesort-draggable-1'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial26/select_the_squirrel_with_the_towel.mp3',
    images: ['CriticalTrials/2ndList/CTrial26/squirrel_towel.png',
      'CriticalTrials/2ndList/CTrial26/partyhat.png',
      'CriticalTrials/2ndList/CTrial26/zebra_partyhat.png',
      'CriticalTrials/2ndList/CTrial26/towel.png'],
    verb: 'select', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  /* Trial 27 */
  {
    audio: 
      'CriticalTrials/2ndList/CTrial27/choose_the_cow_with_the_pen.mp3',
    images: ['CriticalTrials/2ndList/CTrial27/cow_pen.png',
      'CriticalTrials/2ndList/CTrial27/barrette.png',
      'CriticalTrials/2ndList/CTrial27/squirrel_barrette.png',
      'CriticalTrials/2ndList/CTrial27/pen.png'],
    verb: 'choose', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-0',
    target_object: '#jspsych-freesort-draggable-3'
  },

  {
    audio: 
      'CriticalTrials/2ndList/CTrial27/choose_the_squirrel_with_the_barrette.mp3',
    images: ['CriticalTrials/2ndList/CTrial27/cow_pen.png',
      'CriticalTrials/2ndList/CTrial27/barrette.png',
      'CriticalTrials/2ndList/CTrial27/squirrel_barrette.png',
      'CriticalTrials/2ndList/CTrial27/pen.png'],
    verb: 'choose', compatibility: 'modifier', target_animal: '#jspsych-freesort-draggable-2',
    target_object: '#jspsych-freesort-draggable-1'
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
