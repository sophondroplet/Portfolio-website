---
title: "CNC pen plotter"
layout: single
permalink: /projects/project3/
toc: true
toc_sticky: true
classes: .anetenna_tracker
header:
  overlay_image: /assets/images/CNC_drawing_machine/CNC1.jpg  
  overlay_filter: 0.5  # Opacity of black overlay (0 to 1)
#   actions:  # Optional call-to-action buttons
#     - label: "Github documentation"
#       url: "https://github.com/sophondroplet/Camera_gimbal_project"

galleryCAD:
  - url: /assets/images/CNC_drawing_machine/CNCCAD1.png
    image_path: /assets/images/CNC_drawing_machine/CNCCAD1.png
    alt: "placeholder image 1"
    title: "Image 1 title caption"
  - url: /assets/images/CNC_drawing_machine/CNCCAD2.png
    image_path: /assets/images/CNC_drawing_machine/CNCCAD2.png
    alt: "placeholder image 2"
    title: "Image 2 title caption"
  - url: /assets/images/CNC_drawing_machine/CNCCAD3.png
    image_path: /assets/images/CNC_drawing_machine/CNCCAD3.png
    alt: "placeholder image 3"
    title: "Image 3 title caption"
  - url: /assets/images/CNC_drawing_machine/CNCCAD4.png
    image_path: /assets/images/CNC_drawing_machine/CNCCAD4.png
    alt: "placeholder image 4"
    title: "Image 4 title caption"
  - url: /assets/images/CNC_drawing_machine/CNCCAD5.png
    image_path: /assets/images/CNC_drawing_machine/CNCCAD5.png
    alt: "placeholder image 5"
    title: "Image 5 title caption"

galleryPCB:
  - url: /assets/images/camera_gimbal/cagPCB1.png
    image_path: /assets/images/camera_gimbal/cagPCB1.png
    alt: "placeholder image 1"
    title: "Image 1 title caption"
  - url: /assets/images/camera_gimbal/cagPCB2.jpg
    image_path: /assets/images/camera_gimbal/cagPCB2.jpg
    alt: "placeholder image 2"
    title: "Image 2 title caption"
  - url: /assets/images/camera_gimbal/cagPCB3.png
    image_path: /assets/images/camera_gimbal/cagPCB3.png
    alt: "placeholder image 3"
    title: "Image 3 title caption"
  - url: /assets/images/camera_gimbal/cagPCB4.png
    image_path: /assets/images/camera_gimbal/cagPCB4.png
    alt: "placeholder image 4"
    title: "Image 4 title caption"
  - url: /assets/images/camera_gimbal/cagPCB5.png
    image_path: /assets/images/camera_gimbal/cagPCB5.png
    alt: "placeholder image 5"
    title: "Image 5 title caption"
  - url: /assets/images/camera_gimbal/cagPCB6.png
    image_path: /assets/images/camera_gimbal/cagPCB6.png
    alt: "placeholder image 3"
    title: "Image 3 title caption"
  - url: /assets/images/camera_gimbal/cagPCB7.png
    image_path: /assets/images/camera_gimbal/cagPCB7.png
    alt: "placeholder image 4"
    title: "Image 4 title caption"
  - url: /assets/images/camera_gimbal/cagPCB8.png
    image_path: /assets/images/camera_gimbal/cagPCB8.png
    alt: "placeholder image 5"
    title: "Image 5 title caption"


galleryBO:
  - url: /assets/images/camera_gimbal/cagBO1.jpg
    image_path: /assets/images/camera_gimbal/cagBO1.jpg
    alt: "placeholder image 1"
    title: "Image 1 title caption"
  - url: /assets/images/camera_gimbal/cagBO2.jpg
    image_path: /assets/images/camera_gimbal/cagBO2.jpg
    alt: "placeholder image 2"
    title: "Image 2 title caption"
  - url: /assets/images/camera_gimbal/cagBO3.jpg
    image_path: /assets/images/camera_gimbal/cagBO3.jpg
    alt: "placeholder image 3"
    title: "Image 3 title caption"
  - url: /assets/images/camera_gimbal/cagBO4.jpg
    image_path: /assets/images/camera_gimbal/cagBO4.jpg
    alt: "placeholder image 4"
    title: "Image 4 title caption"
---
# Project Demonstration

{% include video id="WfFg5C5nrPg" provider="youtube" %}

{% include figure image_path="/assets/images/CNC_drawing_machine/CNC1.jpg" alt="CNC drawing machine in operation" caption="Fully assembled CNC drawing machine executing a complex vector drawing" %}

# Project Overview

**Timeline:** June 23 2024 - July 26 2024 (~1 month)

This project involved designing and building a fully functional CNC drawing machine from scratch, capable of converting digital images into precise physical line art drawings. The machine combines mechanical engineering, electronics, and software development to create an automated system that bridges the digital and physical worlds.

The core system utilizes an Arduino Uno with GRBL firmware to control stepper motors that precisely maneuver a writing instrument across a two-axis plotting surface. What makes this project particularly challenging is the integration of multiple technical domains - from mechanical design and fabrication to electrical systems and software pipeline development. The machine demonstrates impressive precision in reproducing complex vector artwork with consistent line quality and accuracy.

Beyond the hardware implementation, I developed a complete software workflow that transforms standard images into machine-executable instructions, handling everything from image processing and vectorization to G-code optimization specifically tailored for pen plotting operations.

# Technologies & Skills Demonstrated

**Hardware Engineering & Mechanical Design**
- Designed and modeled all structural components using CAD software, optimizing for both structural rigidity and compact form factor
- Engineered a custom frame geometry that maximizes the usable drawing area while maintaining minimal footprint
- Fabricated components through FDM 3D printing with precise tolerances for smooth linear motion systems
- Sourced and integrated precision-ground steel rods and linear bearings to ensure minimal friction and backlash
- Implemented GT2 timing belts and pulleys for precise positional control without slippage

**Electrical Systems & Motion Control**
- Configured bipolar stepper motors with 1/16 microstepping drivers to achieve sub-millimeter positioning accuracy
- Implemented a CNC shield stackable architecture for clean signal distribution and modular expandability
- Integrated TMC2208 stepper drivers operating in UART mode for ultra-quiet operation and advanced features like stealthChop2 and spreadCycle
- Implemented end-stop switches for homing sequence and travel limit protection

**Software Pipeline & G-code Processing**
- Developed a multi-stage image processing workflow: raster image → line art conversion → vectorization → G-code generation → machine execution
- Created Python automation scripts utilizing OpenCV and scikit-image for sophisticated edge detection and line extraction
- Leveraged U-Net based neural network models for high-quality image-to-lineart conversion with preserved detail
- Implemented Inkscape's command-line interface for batch vectorization of processed images
- Customized Lightburn G-code output through post-processing scripts to adapt laser cutting commands for pen plotting kinematics

**Firmware & Machine Control**
- Flashed and configured GRBL 1.1h firmware with custom parameters for pen plotter-specific behavior
- Implemented Z-axis control for pen up/down movements with adjustable pressure and speed parameters
- Configured acceleration and jerk settings to balance drawing speed against mechanical vibration and precision
- Integrated open-source pen plotter control software for real-time G-code streaming and machine monitoring

## Project Pictures

{% include gallery id="galleryCAD" layout="half" caption="CAD screen of CNC pen plotter design in Fusion360 (I used this Fusion prior to learning Onshape)" %}