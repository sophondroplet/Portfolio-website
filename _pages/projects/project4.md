---
title: "Quadcopter projects"
layout: single
permalink: /projects/project4/
toc: true
toc_sticky: true
classes: .anetenna_tracker
header:
  overlay_image: /assets/images/drones/DROhori.jpg  
  overlay_filter: 0.5  
#   actions:  # Optional call-to-action buttons
#     - label: "Github documentation"
#       url: "https://github.com/sophondroplet/Camera_gimbal_project"

gallery5in2:
  - url: /assets/images/drones/DRO9.jpg
    image_path: /assets/images/drones/DRO9.jpg
    alt: "placeholder image 1"
    title: "Image 1 title caption"
  - url: /assets/images/drones/DRO10.jpg
    image_path: /assets/images/drones/DRO10.jpg
    alt: "placeholder image 2"
    title: "Image 2 title caption"
  - url: /assets/images/drones/DRO6.jpg
    image_path: /assets/images/drones/DRO6.jpg
    alt: "placeholder image 3"
    title: "Image 3 title caption"
 

gallery5in1:
  - url: /assets/images/drones/DRO2.jpg
    image_path: /assets/images/drones/DRO2.jpg
    alt: "placeholder image 2"
    title: "Image 2 title caption"
  - url: /assets/images/drones/DRO3.jpg
    image_path: /assets/images/drones/DRO3.jpg
    alt: "placeholder image 3"
    title: "Image 3 title caption"
  - url: /assets/images/drones/DRO4.jpg
    image_path: /assets/images/drones/DRO4.jpg
    alt: "placeholder image 4"
    title: "Image 4 title caption"
  - url: /assets/images/drones/DRO5.jpg
    image_path: /assets/images/drones/DRO5.jpg
    alt: "placeholder image 5"
    title: "Image 5 title caption"
  - url: /assets/images/drones/DRO7.jpg
    image_path: /assets/images/drones/DRO7.jpg
    alt: "placeholder image 4"
    title: "Image 4 title caption"
  - url: /assets/images/drones/DRO8.jpg
    image_path: /assets/images/drones/DRO8.jpg
    alt: "placeholder image 5"
    title: "Image 5 title caption"

---

# Project demonstration/failures 

Successful Quadcopter flight with version two of my quadcopter design:

{% include video id="8WnoJY42awI" provider="youtube" %}

{% include figure image_path="/assets/images/drones/DRO5.jpg" alt="Image description" caption="Image of the first quadcopter I've built!" %}

# Project Overview

**Timeline:** September 2024 - Present (~1.5 years ongoing)

This ongoing quadcopter development project represents a comprehensive journey through autonomous aerial systems design, from initial prototyping to advanced feature integration. The project showcases an iterative development approach where each build incorporates lessons learned from previous versions, demonstrating continuous improvement in both design methodology and technical implementation.

The collection spans multiple aircraft configurations, beginning with a proof-of-concept 3D-printed frame that identified critical design constraints, progressing to a professional-grade carbon fiber racing drone, and currently expanding into long-range FPV systems with advanced autonomy capabilities. Each iteration addresses specific engineering challenges including structural integrity, power system optimization, flight controller tuning, and sensor integration.

# Technical Development & Engineering Iterations

## First Generation: 3D-Printed Prototype (5-inch)

{% include gallery id="gallery5in1" layout="half" caption="Images of the first quadcopter design" %}

Multiple failed test flights forced me to reconsider using a different frame material, software configurations, and replacement of low-quality escs and motors:

{% include video id="YvkCSGXwtvQ" provider="youtube" %}
{% include video id="Nuv66NU3WCw" provider="youtube" %}

**Design Philosophy & Lessons Learned**
- Implemented rapid prototyping approach using FDM 3D printing with PLA filament to validate component layout and mechanical design
- Identified critical stiffness requirements for quadcopter frames through structural analysis of failed components
- Discovered limitations of repurposed fixed-wing ESCs for multirotor applications, highlighting the importance of specialized motor control hardware
- Established baseline electrical system requirements including current handling, noise isolation, and power distribution

**Electronics Integration**
- Configured SpeedyBee F405 flight controller running Betaflight firmware with custom mixer settings
- Implemented ExpressLRS (ELRS) protocol for robust long-range radio control link
- Developed wiring harnesses with appropriate filtering to mitigate electromagnetic interference
- Established sensor calibration procedures for IMU alignment and radio channel mapping

## Second Generation: Carbon Fiber Performance Build (5-inch)

{% include gallery id="gallery5in2" layout="half" caption="CAD development process showing iterative design improvements and mechanical assembly details" %}

**Advanced Frame Engineering**
- Transitioned to carbon fiber composite construction for optimal stiffness-to-weight ratio
- Designed component mounting system with vibration damping for improved flight performance
- Implemented modular stack architecture for maintainability and component isolation
- Optimized center of gravity and mass distribution for enhanced flight characteristics

**High-Performance Powertrain**
- Upgraded to dedicated 4-in-1 ESC stack with BLHeli_32 firmware supporting DShot protocol
- Selected high-torque brushless motors with appropriate KV rating for 5-inch propeller efficiency
- Implemented capacitor filtering on power inputs for voltage spike suppression
- Configured battery connection systems with XT60 connectors capable of handling 100A+ bursts

**Flight Control & Tuning Methodology**
- Advanced Betaflight configuration including PID controller tuning for specific flight characteristics
- Implemented Blackbox logging system for detailed flight data analysis and performance optimization
- Developed systematic tuning workflow using frequency analysis to identify and resolve oscillations
- Configured multiple flight modes (Acro, Horizon, Angle) with custom rate profiles

## Third Generation: Long-Range FPV Platform (10-inch) (work in progress)

**Current Development Focus**
- Implementing ArduPilot firmware for advanced autonomous flight capabilities and mission planning
- Integrating 2-axis brushless gimbal system with camera stabilization for professional aerial imaging
- Configuring GPS navigation with sophisticated return-to-home failsafe protocols

**Advanced Autonomy Systems**
- Deploying ArduPilot's advanced flight modes including Auto, Guided, Loiter, and Follow Me
- Configuring Mission Planner for complex waypoint navigation with conditional commands
- Developing camera trigger systems synchronized with waypoint arrival for automated aerial photography
- Setting up telemetry radio systems for real-time mission monitoring and in-flight parameter adjustment

**Gimbal Integration & Stabilization**
- Designing custom gimbal mounting system with vibration isolation for smooth footage
- Implementing MAVLink protocol for communication between ArduPilot and gimbal controller
- Developing camera control systems for automated pan/tilt/roll during autonomous missions
- Integrating gimbal heading follow mode for natural camera movement during flight maneuvers

# Technical Skills & Engineering Competencies

**Aerodynamic Analysis & Propulsion Design**
- Performed thrust-to-weight ratio calculations for optimal motor/propeller selection
- Analyzed propeller efficiency curves across different throttle ranges
- Implemented electronic RPM filtering to maintain stability at various flight regimes
- Optimized battery cell configuration (4S-6S) for specific performance requirements

**Embedded Systems & Firmware Development**
- Mastered Betaflight configuration and customization for specific airframe characteristics
- Implemented UART serial protocols for peripheral device communication (GPS, VTX, telemetry)
- Developed custom mixer configurations for non-standard aircraft layouts
- Programmed failsafe behaviors and recovery procedures for various failure scenarios

**Power Systems Engineering**
- Designed battery management systems with voltage monitoring and low-voltage protection
- Calculated current requirements for peak thrust scenarios
- Implemented capacitor networks for ESC input filtering
- Optimized power distribution board layouts for minimal voltage drop

**Autonomous Systems Development**
- Configuring GPS-assisted flight modes including position hold and waypoint navigation
- Implementing sensor fusion algorithms for improved attitude estimation
- Developing safety protocols for autonomous operation including geofencing
- Integrating telemetry systems for real-time flight data monitoring

# Future Development Roadmap

- **Advanced Autonomy:** Integration of ArduPilot or iNAV firmware for enhanced autonomous capabilities
- **Computer Vision:** Implementation of object avoidance and tracking systems
- **Payload Systems:** Development of modular payload bays for specialized applications
- **Long-range Communications:** Integration of cellular or satellite backup communication links
- **Aerial Photography:** Gimbal stabilization systems for professional-grade imaging

{% include gallery id="galleryDrones" layout="third" caption="Evolution of quadcopter designs showing progressive improvements in engineering and construction" %}

## Pictures