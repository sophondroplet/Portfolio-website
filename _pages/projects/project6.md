---
title: "Ball balancing robot"
layout: single
permalink: /projects/project6/
toc: true
toc_sticky: true
classes: .anetenna_tracker
header:
  overlay_image: /assets/images/Ball_balancing_robot/BBRhori.png  
  overlay_filter: 0.5  # Opacity of black overlay (0 to 1)
  actions:  # Optional call-to-action buttons
    - label: "Github documentation"
      url: "https://github.com/sophondroplet/Ball_balancing_robot_project"

galleryCAD:
  - url: /assets/images/Ball_balancing_robot/BBR6.png
    image_path: /assets/images/Ball_balancing_robot/BBR6.png
    alt: "placeholder image 1"
    title: "Image 1 title caption"
  - url: /assets/images/Ball_balancing_robot/BBR7.png
    image_path: /assets/images/Ball_balancing_robot/BBR7.png
    alt: "placeholder image 1"
    title: "Image 1 title caption"
  - url: /assets/images/Ball_balancing_robot/BBR2.png
    image_path: /assets/images/Ball_balancing_robot/BBR2.png
    alt: "placeholder image 2"
    title: "Image 2 title caption"
  - url: /assets/images/Ball_balancing_robot/BBR3.png
    image_path: /assets/images/Ball_balancing_robot/BBR3.png
    alt: "placeholder image 3"
    title: "Image 3 title caption"
  - url: /assets/images/Ball_balancing_robot/BBR4.png
    image_path: /assets/images/Ball_balancing_robot/BBR4.png
    alt: "placeholder image 4"
    title: "Image 4 title caption"
  - url: /assets/images/Ball_balancing_robot/BBR5.png
    image_path: /assets/images/Ball_balancing_robot/BBR5.png
    alt: "placeholder image 5"
    title: "Image 5 title caption"
---


# Project demonstration 

{% include video id="t_Y95xRcqN8" provider="youtube" %}

{% include figure image_path="/assets/images/Ball_balancing_robot/BBR1.jpg" alt="Image description" caption="Image of the completed Ball balancing robot" %}

# Project Overview

**Timeline:** July 2 2025 - July 18 2025 (~3 weeks)

This project involved designing and implementing a ball-balancing robot capable of maintaining a rolling ball at the platform’s center through real-time feedback control. A Raspberry Pi 4 equipped with a computer vision camera continuously detects the ball’s position, providing input data for precise motion regulation.

The system employs high-torque MG9666 servos to tilt the platform in three axes, compensating for ball displacement. The inverse kinamatics and PID control algorithm calculates corrective actions from the camera feed, dynamically adjusting servo positions to minimize error. The integration of vision-based sensing, inverse kinematics, closed-loop control, and mechatronic actuation demonstrates the application of control theory and embedded computing in a practical robotics system.

# Technologies & Skills Demonstrated  

- **Mechanical Design**  
  - **Platform Mechanics:** Three DoF tilting platform (Can theoratically make the ball jump by changing the height of the platform) designed for stable and responsive ball movement control  
  - **Prototyping:** Structural frame assembly, servo mounting optimization, and mechanical balancing considerations  

- **Embedded Systems & Control**  
  - **Computing Platform:** Raspberry Pi 4 handling real-time computer vision and control algorithms  
  - **Computer Vision:** OpenCV-based ball tracking with centroid detection and position estimation  
  - **Control Theory:** PID implementation for dynamic error correction, stability tuning, and real-time feedback control  
  - **Kinematics & Dynamics:** Derived and manually constructed inverse kinematics equations for the platform, validated and solved using MATLAB  


- **Electronics & Hardware**  
  - **Actuation:** MG9666 high-torque servos integrated for dual-axis tilt adjustments  
  - **System Integration:** Camera–servo feedback loop, servo control via PWM, and power management for stable operation  

- **Software & Programming**  
  - **Languages & Libraries:** Python with OpenCV, NumPy, and PID libraries  
  - **Algorithm Development:** Real-time data acquisition, error computation, and corrective action loop  
  - **Debugging & Optimization:** Servo response calibration, control loop stability testing, and performance tuning  

## CAD pictures
{% include gallery id="galleryCAD" layout="half" caption="CAD screenshots of the robot from several angles" %}