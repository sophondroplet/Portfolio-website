---
title: "RoboCar (Autonomous self-driving platform)"
layout: single
permalink: /projects/project8/
toc: true
toc_sticky: true
header:
  overlay_image: /assets/images/robot_turret/rob2.jpg
  overlay_filter: 0.5
  actions:
    - label: "GitHub - GPS laps"
      url: "https://github.com/sophondroplet/ROBOCAR_GPS_laps"
    - label: "GitHub - CV laps"
      url: "https://github.com/sophondroplet/RoboCAR_CV_laps"
---

# Final project demonstration

CV autonomous laps:
{% include video id="mQCXCg_K420" provider="youtube" %}

GPS laps tuning:
{% include video id="4Pa3FypHcv0" provider="youtube" %}

# Project Overview

**Timeline:** January 2025 - February 27, 2026 (ongoing)

RoboCar is an autonomous self-driving robot car project built on the Donkeycar framework. The platform was developed in two parallel tracks: computer-vision-based autonomous laps and GPS-guided laps. The work focused on practical autonomy integration, hardware/software interfacing, and robust tuning in real track conditions.

# Technologies & Skills Demonstrated

- **Autonomous Driving Frameworks**
  - Built and tuned pipelines with the Donkeycar stack for real-time autonomous control.
  - Configured CV-based inference loop for lap execution.

- **Computer Vision and ML Deployment**
  - Collected and prepared driving datasets for model training/inference.
  - Tuned autonomous behavior for repeatable CV-guided laps.

- **GPS Navigation and Control**
  - Implemented and tuned GPS-guided lap routines.
  - Evaluated trajectory consistency and refined control parameters iteratively.

- **Embedded and Radio Integration**
  - Configured an Arduino bridge to expose ELRS radio controls as joystick inputs to the Raspberry Pi.
  - Verified end-to-end control handoff between manual and autonomous operation modes.

# Project Development

## CV autonomous lap stack

The CV branch focused on closed-loop autonomous driving from onboard vision, with iterative data collection, model updates, and behavior refinement for smoother laps.

{% include video id="mQCXCg_K420" provider="youtube" %}

## GPS-guided lap stack

The GPS branch focused on repeatable lap behavior under waypoint/position guidance and continuous tuning of control parameters.

{% include video id="4Pa3FypHcv0" provider="youtube" %}

## RC-to-compute bridge integration

A custom Arduino bridge was configured so ELRS radio input appears as a joystick interface on the Raspberry Pi, enabling practical control-mode switching and safer testing workflows.

# Challenges + Solutions

- **Challenge: Stability and consistency in autonomous laps**
  - Solution: repeated track testing and parameter tuning across both CV and GPS pipelines.

- **Challenge: Hardware/software interfacing for remote control bridge**
  - Solution: custom Arduino bridging and interface validation so ELRS data was consistently exposed to the host compute stack.

- **Challenge: Keeping development moving across two autonomy approaches**
  - Solution: maintained separate repositories and workflows for GPS and CV modes while sharing test learnings.

# Future Improvements

- Add detailed telemetry logging and replay tooling for faster root-cause analysis.
- Integrate stronger failure recovery behavior for edge cases during autonomous runs.
- Publish a unified documentation repo with hardware wiring, configs, and tuning recipes.
