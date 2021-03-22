
var booster_calibration_instructions_1 = {
  type: 'html-button-response',
  stimulus: `
    <p>We're going to take a moment to calibrate the eye tracker again.</p>
    <p>You'll see a series of dots appear on the screen. Look at each dot and click on it.</p>
  `,
  choices: ['Got it'],
}

var booster_calibration = {
  type: 'webgazer-calibrate',
  calibration_points: CALIBRATION_CONFIG.CALIBRATION_POINTS,
  repetitions_per_point: 3,
  randomize_calibration_order: true,
}

var booster_validation_instructions_1 = {
  type: 'html-button-response',
  stimulus: `
    <p>Now we'll measure the accuracy of the calibration.</p>
    <p>Keep your head still, and move your eyes to look at the dots.</p>
    <p style="font-weight: bold;">You do not need to click on the dots this time.</p>
  `,
  choices: ['Got it'],
  post_trial_gap: 1000
}

var booster_validation = {
  type: 'webgazer-validate',
  validation_points: CALIBRATION_CONFIG.VALIDATION_POINTS,
  validation_point_coordinates: 'percent',
  show_validation_data: false,
  roi_radius: CALIBRATION_CONFIG.ROI_TOLERANCE_PIXELS,
  time_to_saccade: 1000,
  validation_duration: 2000,
  data: {
    task: 'validate'
  }
}

var booster_calibrate_done = {
  type: 'html-button-response',
  stimulus: `
    <p>Great, we're done with calibration!</p>
    <p>Remember to keep your head still as you continue to the experiment.</p>
  `,
  choices: ['OK']
}

var calibration_booster_timeline = {
  timeline: [
    booster_calibration_instructions_1,
    booster_calibration,
    booster_validation_instructions_1,
    booster_validation,
    booster_calibrate_done
  ],
  data: {
    phase: 'boost-calibration'
  }
}

