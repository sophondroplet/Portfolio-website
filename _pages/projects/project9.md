---
title: "Fixed-Wing to VTOL Conversion"
layout: single
permalink: /projects/project9/
toc: true
toc_sticky: true
header:
  overlay_image: /assets/images/vtol_conversion/vtol_conversion_thumbnail.png
  overlay_filter: 0.5
  actions:
    - label: "GitHub" # Placeholder, user can provide URL later
      url: "#"

galleryVTOLCAD:
  - url: /assets/images/vtol_conversion/vtol_conversion_thumbnail.png
    image_path: /assets/images/vtol_conversion/vtol_conversion_thumbnail.png
    alt: "VTOL Conversion CAD"
    title: "Valiant Upgrade CAD"
---

# Project Overview

**Timeline:** Latest work (ongoing)

This project focuses on modifying a standard fixed-wing RC plane into a VTOL (Vertical Take-Off and Landing) aircraft. The conversion involves designing and integrating custom VTOL bars, new motor mounts, and a new powertrain. The flight control system will be upgraded with a Pixhawk to enable autonomous VTOL capabilities.

# Technologies & Skills Demonstrated

- **Mechanical Design & CAD:** Designing custom VTOL bars, motor mounts, and structural modifications to integrate VTOL functionality into an existing fixed-wing airframe.
- **Aircraft Conversion & Integration:** Adapting an existing RC plane for new propulsion and control systems.
- **Flight Control Systems:** Integrating and configuring a Pixhawk flight controller for VTOL operation.
- **Powertrain Design:** Selecting and implementing new motors and power systems suitable for VTOL.

# Project Development

## Mechanical Design and Fabrication (Completed)

The initial phase involved the mechanical design of the VTOL conversion components. This included:

- **VTOL Bars:** Custom bars designed to attach to the existing wing structure, providing mounting points for the vertical thrust motors.
- **Motor Mounts:** Redesigned motor mounts to accommodate the new VTOL propulsion system.
- **Structural Reinforcement:** Modifications to the airframe to handle the new stress loads from vertical thrust.

{% include gallery id="galleryVTOLCAD" layout="half" caption="Initial CAD design of the VTOL conversion components." %}

## Electronics and Flight Control (Work in Progress)

This phase focuses on the integration of the electronics and the Pixhawk flight controller.

- **Pixhawk Integration:** Setup and configuration of the Pixhawk for VTOL flight modes and transitions.
- **New Powertrain:** Installation of new motors, ESCs, and propellers for vertical lift and forward flight.
- **Wiring and Sensors:** Integration of all necessary sensors and wiring for the Pixhawk.

# Challenges & Solutions (Planned)

- **Weight and Balance:** Ensuring the converted aircraft maintains proper center of gravity and overall weight suitable for VTOL flight.
- **Aerodynamic Stability:** Analyzing and mitigating potential aerodynamic instabilities during transition phases between vertical and horizontal flight.
- **Flight Control Tuning:** Calibrating and tuning the Pixhawk for smooth and stable VTOL and fixed-wing flight characteristics.

# Future Improvements (Planned)

- **Autonomous Flight Modes:** Implementing advanced autonomous missions for VTOL operations.
- **Payload Integration:** Designing a modular system for various payloads.
- **Real-time Telemetry:** Setting up comprehensive telemetry for flight monitoring and data logging.
