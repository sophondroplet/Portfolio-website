---
layout: resume
title: "Resume - Lek Man"
permalink: /resume/
---

# Lek Man
<div class="contact">
La Jolla, CA | +1 (619) 953-8320 | manmanleklek@gmail.com | <a href="https://lekman.info">lekman.info</a> | <a href="https://github.com/sophondroplet">github.com/sophondroplet</a>
</div>

## Summary
Aerospace Engineering student at UC San Diego focused on UAVs, mechatronics, robotics, and autonomous flight systems. Hands-on builder across full hardware and software stacks: CAD, composite and mechanical fabrication, embedded firmware, control tuning, avionics integration, and flight-test execution. 

## Education
<div class="role-line"><strong>University of California, San Diego</strong><span class="meta">La Jolla, CA | 2024-Present</span></div>
<p>B.S. Aerospace Engineering, GPA: 3.4</p>

<div class="role-line"><strong>Christian Alliance International School</strong><span class="meta">Hong Kong | 2018-2024</span></div>
<p>High School GPA: 3.75</p>

## Technical Skills
<ul class="compact">
  <li><strong>Programming:</strong> Python, C/C++, C, JavaScript, MATLAB</li>
  <li><strong>Embedded Systems:</strong> ESP32, STM32, Arduino, Raspberry Pi, I2C/UART/CAN, UDP telemetry links</li>
  <li><strong>Flight/Controls:</strong> ArduPilot, Betaflight, ELRS, PID tuning, FOC motor control, sensor calibration, HIL testing</li>
  <li><strong>CAD/Hardware:</strong> Onshape, Fusion 360, SketchUp, SolidWorks (basic), carbon-fiber/composite layup, 3D printing, laser cutting, soldering</li>
  <li><strong>Tools:</strong> Git/GitHub, OpenCV, VESC toolchain, Altium (basic PCB design)</li>
</ul>

## Projects

<div class="role-line"><strong>Autonomous Antenna Tracker</strong><span class="meta">2025</span></div>
<ul>
  <li>Built a dual-axis long-range tracking system to maintain aircraft-ground link alignment using live GPS telemetry and onboard heading estimation.</li>
  <li>Developed ESP32 firmware for real-time pointing control, integrating GPS and magnetometer data over I2C and telemetry channels.</li>
  <li>Improved heading and pointing accuracy with a Python ellipsoid-fit magnetometer calibration pipeline.</li>
</ul>

<div class="role-line"><strong>2-Axis Camera Gimbal</strong><span class="meta">2025</span></div>
<ul>
  <li>Developed STM32-based ESC firmware using FOC + PID closed-loop control with encoder feedback for precision stabilization.</li>
  <li>Integrated IMU sensing, CAN communication, and vibration-isolated mechanical structures for robust onboard imaging during UAV motion.</li>
</ul>

<div class="role-line"><strong>Autonomous Quadcopter Flight Test Platform</strong><span class="meta">Jun 2025-Present</span></div>
<ul>
  <li>Designed and built a complete 10-inch UAV from first principles: carbon-fiber frame architecture, custom landing gear, and dedicated mounts for gimbal and Jetson-class onboard compute.</li>
  <li>Engineered full 8S propulsion and powertrain stack (motors, ESCs, power distribution, and wiring harness), then performed full avionics integration and electrical validation.</li>
  <li>Executed end-to-end ArduPilot bring-up including sensor setup, frame/actuator mapping, failsafe configuration, PID tuning, and autonomous guided takeoff validation.</li>
  <li>Used the platform as a repeatable flight-test asset for integration debug and subsystem verification prior to competition-focused deployment.</li>
</ul>

<div class="role-line"><strong>CNC Drawing Machine</strong><span class="meta">Portfolio Project</span></div>
<ul>
  <li>Built an Arduino GRBL-based pen plotter with a custom Python/OpenCV image-to-G-code pipeline for automated vector drawing.</li>
  <li>Designed motion subsystem with microstepped steppers and precision rails; tuned firmware and kinematics for drawing repeatability.</li>
</ul>

<div class="role-line"><strong>Ball-Balancing Robot</strong><span class="meta">Portfolio Project</span></div>
<ul>
  <li>Built a dual-axis balancing platform using Raspberry Pi + OpenCV visual tracking and Python PID loops for real-time stabilization.</li>
  <li>Integrated servo actuation, frame prototyping, and CV feedback to close the loop between perception and motion control.</li>
</ul>

<div class="role-line"><strong>Autonomous Robot Turret</strong><span class="meta">Portfolio Project</span></div>
<ul>
  <li>Developed a vision-guided 3-DOF mechatronic turret integrating embedded control, custom motor-driver electronics, and safety logic.</li>
  <li>Implemented modular software and hardware architecture for reliable targeting demonstrations and STEM outreach use.</li>
</ul>

## Experience
<div class="role-line"><strong>UAV Systems Integration Engineer, Triton Unmanned Aerial Systems (UCSD)</strong><span class="meta">Sep 2024-Present</span></div>
<ul>
  <li><strong>Role progression:</strong> started as cross-functional mechanical/electrical/software contributor; expanded into aircraft-level systems integration ownership across the flight stack.</li>
  <li>Designed and integrated mission-critical UAV subsystems including powertrain architecture, avionics layout, and integration interfaces between propulsion, sensing, and control.</li>
  <li>Configured and debugged ArduPilot and Betaflight environments across fixed-wing and quad platforms, including calibration, mode logic, failsafes, and control-loop tuning.</li>
  <li>Developed and integrated firmware for supporting systems (antenna tracker, gimbal-adjacent modules) and improved reliability through iterative bench and field validation.</li>
  <li>Implemented computer-vision-assisted localization workflows, including image-offset to GPS coordinate estimation for mission support tooling.</li>
  <li>Designed an IMU breakout PCB (ICM-40690 class sensor integration) and incorporated hardware-in-the-loop style validation during subsystem bring-up.</li>
  <li>Performed composite airframe fabrication (fiberglass/carbon-fiber layup), designed and fabricated custom structural and vibration-isolated mounts, and supported rapid mechanical iteration.</li>
  <li>Coordinated preflight checks and test-flight execution workflows, driving integration closure from lab bring-up to takeoff-ready aircraft.</li>
  <li>Contributed to SUAS mission outcomes (Top 25% team placement; top 20% mission demonstration score among 81 teams).</li>
</ul>

<div class="role-line"><strong>Founder & President, Mechanical Engineering Club</strong><span class="meta">Sep 2022-Jun 2024</span></div>
<ul>
  <li>Grew club to 20+ active members; organized engineering events and cross-team build projects.</li>
  <li>Secured funding, managed planning/execution, and mentored younger students in hands-on builds.</li>
</ul>

<div class="role-line"><strong>Member, Existential Robotics Laboratory (UC San Diego)</strong><span class="meta">2025-Present</span></div>
<ul>
  <li>Contribute to research prototyping with hands-on mechatronic integration, experimental setup, and iterative validation workflows.</li>
  <li>Support cross-disciplinary robotics development spanning mechanical assemblies, embedded electronics, and system-level testing.</li>
</ul>

<div class="role-line"><strong>Engineering Intern, CYC Motors</strong><span class="meta">Jul 2023-Aug 2023</span></div>
<ul>
  <li>Assembled and soldered BLDC motor testing stands for controlled performance and durability evaluation.</li>
  <li>Executed test campaigns with VESC tooling, collected and analyzed motor data, and provided engineering feedback for product optimization.</li>
  <li>Supported IQC/OQC quality-control workflows and authored SOP documentation to improve test consistency and onboarding.</li>
</ul>

<div class="role-line"><strong>Student Presenter, ACAMIS Technology Conference</strong><span class="meta">Mar 2023</span></div>
<ul>
  <li>Delivered a student technical presentation on technology-enabled learning to educators and school administrators.</li>
</ul>

<div class="role-line"><strong>Main Designer, Greendeck VR Competition Team</strong><span class="meta">2021-2022</span></div>
<ul>
  <li>Co-designed an interactive 3D VR green-deck model in a 4-student team, using Unity and SketchUp workflows.</li>
  <li>Won overall championship among participating schools.</li>
</ul>

## Awards
<ul class="compact">
  <li>SUAS 2025: Top 25% placement (UC San Diego team).</li>
  <li>Cayley Contest 2022: Top 25% globally, school grade champion.</li>
  <li>Greendeck VR Competition 2021-2022: Champion.</li>
</ul>
