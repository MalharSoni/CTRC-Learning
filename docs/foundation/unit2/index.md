# Unit 2: Programming

**A robot that can't be controlled is just a paperweight.** Unit 2 teaches you to program your V5 drivetrain using VSCode, PROS, and LemLib — the same tools used by top-tier VEX teams worldwide. By the end of this unit, you'll have driver controls, button-mapped mechanisms, tuned PID, and a working autonomous routine.

---

## Unit Overview

| | Details |
|---|---|
| **Modules** | 5 |
| **Field Challenges** | 2 |
| **Estimated Time** | 10–14 hours |
| **Prerequisite** | Completed Unit 1 drivetrain with mounted electronics |
| **Final Deliverable** | A robot with driver controls, a motorized mechanism, and autonomous capability |

---

## What You'll Learn

By the end of Unit 2, you will be able to:

- [x] Set up a PROS/LemLib development environment in VSCode
- [x] Configure and drive your robot with tank or arcade controls
- [x] Map controller buttons to mechanism motors
- [x] Tune PID controllers for straight driving and accurate turning
- [x] Program a multi-step autonomous routine using odometry
- [x] Debug and iterate on code using the V5 Brain terminal

---

## Why LemLib?

LemLib is an open-source library built on top of PROS that simplifies the hardest parts of VEX programming. It provides:

| Feature | What It Does | Why It Matters |
|---------|-------------|---------------|
| **Chassis configuration** | Define your drivetrain in a few lines | No manual motor setup boilerplate |
| **Drive modes** | Tank, arcade, curvature with one function call | Easy control scheme switching |
| **PID controllers** | Built-in tunable PID for lateral and angular movement | Accurate autonomous driving |
| **Odometry** | Tracks robot position on the field using sensors | Robot knows where it is during autonomous |
| **Motion profiling** | Smooth path following with acceleration control | Professional-quality autonomous routines |

!!! info "PROS vs. VEXcode"
    You may have seen VEXcode (the official VEX IDE). We use **PROS + LemLib** instead because:

    - PROS gives full C++ access with no restrictions
    - LemLib provides competition-tested algorithms
    - VSCode is a professional IDE you'll use in your career
    - Top competitive teams overwhelmingly use PROS

---

## Module Roadmap

| Module | Title | Key Skills |
|--------|-------|------------|
| **2.1** | [VSCode & LemLib Setup](vscode-lemlib-setup.md) | IDE installation, PROS extension, project creation, first upload |
| **2.2** | [Drive Config & Controls](drive-config-controls.md) | Motor ports, gear ratio config, tank/arcade drive, first drive test |
| **2.3** | [Motorized Shovel](motorized-shovel.md) | Adding a mechanism, button mapping, toggle vs hold |
| **2.4** | [PID Tuning](pid-tuning.md) | P, I, D concepts, lateral tuning, angular tuning |
| **2.5** | [Autonomous Routing](autonomous-routing.md) | Coordinate system, odometry, multi-step auton |

---

## Field Challenges

| Challenge | What It Tests |
|-----------|--------------|
| [Pickup Relay](challenge-pickup-relay.md) | Driver control, button mapping, mechanism function |
| [Auton Showdown](challenge-auton-showdown.md) | PID tuning quality, autonomous routing accuracy |

!!! warning "Challenge Prerequisite"
    You must have a working driver-controlled robot with a motorized mechanism before attempting the Pickup Relay. You must have a tuned autonomous routine before attempting the Auton Showdown.

---

## What You Need

### Hardware

- Completed Unit 1 drivetrain (with V5 Brain, Battery, Radio, Inertial Sensor)
- 1x additional 11W motor (for the shovel mechanism in Module 2.3)
- Metal and hardware for building the shovel mechanism
- USB-A to USB-C cable (for Brain connection)

### Software

- A computer (Windows, Mac, or Linux)
- Internet connection (for initial setup)
- VSCode (free) — installed in Module 2.1
- PROS extension for VSCode — installed in Module 2.1

---

## Tips for Success

!!! tip "Save Early, Save Often"
    Code disappears when you don't save. Use `Ctrl+S` (or `Cmd+S`) after every change. PROS projects are just files on your computer — back them up.

!!! tip "Read the Error Messages"
    When your code doesn't compile, the error message tells you exactly what's wrong and on which line. Read it carefully before asking for help. 90% of compilation errors are typos, missing semicolons, or mismatched brackets.

!!! tip "Test Incrementally"
    Don't write 50 lines of code and then upload. Write 5 lines, upload, test. Write 5 more, upload, test. Small changes are easy to debug. Large changes are a nightmare.

!!! warning "Robot Safety During Programming"
    Always have the robot **on blocks** (wheels off the ground) when testing new code for the first time. A bug in your drive code can send the robot flying off a table or into someone. Blocks first, floor second.

---

## Let's Get Started

Begin with **[Module 2.1: VSCode & LemLib Setup](vscode-lemlib-setup.md)** — you need the tools before you can write the code.
