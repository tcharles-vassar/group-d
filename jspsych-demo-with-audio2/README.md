# Eye tracking calibration timelines

A set of jsPsych timelines for calibrating and validating eye tracking at the start of an experiment.

# Getting Started

1. Download the code in this repository and add it to your experiment folder. 
2. Add the following to `<head>` section of your experiment, to load the necessary scripts:

```html
<script src="jspsych-6.3.1/jspsych.js"></script>
<script src="jspsych-6.3.1/plugins/jspsych-fullscreen.js"></script>
<script src="jspsych-6.3.1/plugins/jspsych-html-button-response.js"></script>
<script src="jspsych-6.3.1/plugins/jspsych-webgazer-init-camera.js"></script>
<script src="jspsych-6.3.1/plugins/jspsych-webgazer-calibrate.js"></script>
<script src="jspsych-6.3.1/plugins/jspsych-webgazer-validate.js"></script>
<script src="js/webgazer.js"></script>
<script src="jspsych-6.3.1/extensions/jspsych-ext-webgazer.js"></script>
<script src="calibration-config.js"></script>
<script src="initial-calibration-timeline.js"></script>
<script src="calibration-booster-timeline.js"></script>

<link rel="stylesheet" href="jspsych-6.3.1/css/jspsych.css">
<style>
  .jspsych-content {
    max-width: 100%;
  }
</style>
```

3. Edit `calibration-config.js` to customize the calibration and validation for your experiment.
4. Insert the relevant timeline(s) in your experiment.

For the initial calibration:

```js
timeline.push(initial_calibration_timeline);
```

For any booster calibration/validation runs:

```js
timeline.push(calibration_booster_timeline);
```
