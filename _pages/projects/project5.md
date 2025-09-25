---
title: "Robot Turret Project"
layout: single
permalink: /projects/project5/
toc: true
toc_sticky: true
classes: .anetenna_tracker
header:
  overlay_image: /assets/images/robot_turret/rob1.png  
  overlay_filter: 0.5  # Opacity of black overlay (0 to 1)
  actions:  # Optional call-to-action buttons
    - label: "Github documentation"
      url: "https://github.com/sophondroplet/Robot_turret_project"
---


# Project demonstration 

Frist succefful Turret iteration built with simple cardboard materials and hot glue, with minial 3D printed parts:

{% include video id="qHOV_zwnFaQ" provider="youtube" %}

{% include figure image_path="/assets/images/robot_turret/rob2.jpg" alt="Image description" caption="Image of final Turret hardware with fully 3D printed Components" %}

# Project Overview

**Timeline:** December 10 2023 - January 12 2025 (~2 months)

This project involved designing and building a fully functional autonomous robot turret from the ground up, serving as an educational demonstration for primary school students. The turret represented a significant leap in technical complexity, integrating mechanical design, electrical engineering, and software programming into a cohesive robotic system.

The turret featured autonomous targeting capabilities using computer vision, a projectile launching mechanism inspired by Nerf blasters, and multi-axis movement for precise aiming. This project served as an introduction to integrated robotics systems, bridging the gap between simple mechanical projects and advanced autonomous machines. The successful completion demonstrated effective collaboration between mechanical and software engineering domains while providing an engaging educational tool for STEM outreach.

# Technical Development & Engineering Implementation

## System Architecture & Integration

**Hardware-Software Integration Framework**
- Implemented Arduino NANO microcontroller as the central processing unit for real-time control systems
- Developed power distribution network supporting multiple voltage requirements (5V for logic, 12V for motors)


**Multi-Domain System Engineering**
- Integrated mechanical systems (projectile mechanism, articulation) with electronic control systems
- Synchronized sensor input (webcam, limit switches) with actuator output (DC motors, servos)

## Mechanical Engineering & Kinematics

**Projectile Launching Mechanism**
- Designed modular enclosure allowing for maintenance and component replacement
- Reverse-engineered Nerf blaster flywheel systems for high-velocity projectile propulsion
- Designed and 3D-printed dual flywheel assembly with precise alignment tolerances
- Implemented piston-style pusher mechanism converting rotational to linear motion
- Optimized flywheel mass and motor selection for maximum kinetic energy transfer

**Robotic Arm Kinematics**
- Developed 3-degree-of-freedom articulation system 
- Designed rigid 3D-printed frame capable of supporting dynamic loads
- Implemented screw-and-nut fastening system for maintainability and structural integrity
- Calculated torque requirements for servo motors based on moment arm calculations

## Electrical Systems & Power Management

**Advanced Circuit Design**
- Designed and manually soldered PCB-level circuit incorporating MOSFET transistors for DC motor control
- Implemented buck converter voltage regulation for stable 5V and 3.3V power rails
- Incorporated flyback diodes for inductive load protection from voltage spikes
- Utilized current-limiting resistors for LED indicators and sensor interfaces

**Safety & Power Distribution**
- Engineered grounded 3-pin power supply system with fault protection
- Implemented fusing and current monitoring for high-power motor circuits
- Designed modular wiring harness with polarized connectors for error-proof assembly
- Established proper grounding schemes to minimize electrical noise in sensor circuits

## Control Systems & Automation

**Sensor Integration & Data Processing**
- Implemented limit switch homing sequence for positional calibration
- Integrated laser pointer for targeting verification and alignment

## Manufacturing & Prototyping

**Advanced Digital Fabrication**
- Mastered CAD software for designing complex mechanical assemblies with moving parts (SketchUp)
- Optimized 3D printing parameters for structural strength and dimensional accuracy
- Implemented design-for-manufacturing principles reducing part count and assembly time
- Developed iterative prototyping methodology with functional testing at each stage

**Precision Assembly Techniques**
- Utilized power tools for precise drilling and fastening operations
- Implemented soldering techniques for reliable electrical connections
- Applied thread-locking compounds for vibration-resistant fasteners
- Developed alignment jigs and fixtures for accurate component placement
