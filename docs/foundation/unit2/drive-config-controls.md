# Module 2.2: Drive Config & Controls

Time to make your robot move. In this module, you'll configure your drivetrain in LemLib, set up driver controls, and drive your robot for the first time.

---

## Configuring the Drivetrain

LemLib needs to know the physical properties of your drivetrain: which motor ports, what gear ratio, and what wheel size.

### Motor Port Assignment

First, determine which ports your motors are plugged into on the V5 Brain. Each port is numbered 1–21.

!!! tip "Labeling Ports"
    Label each motor cable with tape near the Brain connection. Write the port number and which motor it is (e.g., "Port 1 - Left Front"). This saves debugging time when wires get pulled.

### LemLib Chassis Configuration

In `src/main.cpp`, add the drivetrain configuration. Here's a standard 4-motor tank drive setup:

```cpp
#include "main.h"
#include "lemlib/api.hpp"

// Motor groups — negative port number means reversed direction
pros::MotorGroup left_motors({-1, -2});   // Ports 1, 2 (reversed)
pros::MotorGroup right_motors({3, 4});    // Ports 3, 4

// Drivetrain configuration
lemlib::Drivetrain drivetrain(
    &left_motors,    // Left motor group
    &right_motors,   // Right motor group
    12.5,            // Track width (distance between left and right wheels, in inches)
    3.25,            // Wheel diameter (inches)
    360,             // Drivetrain RPM (motor RPM * external gear ratio)
    2                // Chase power (leave at 2 for now)
);
```

!!! warning "Motor Direction"
    Motors on the **left side** of the robot typically need to be **reversed** (negative port number) because they're mounted as a mirror image of the right side. If your robot spins in circles instead of driving straight, one side's motors are reversed incorrectly.

!!! example "📐 Diagram Needed"
    Left and right motors viewed from rear — arrows showing spin direction, why left is reversed

### How to Determine Values

| Parameter | How to Measure |
|-----------|---------------|
| **Port numbers** | Check the V5 Brain's device menu — it shows which port each motor is on |
| **Track width** | Measure the center-to-center distance between left and right wheels (inches) |
| **Wheel diameter** | Check the wheel product — 2.75", 3.25", or 4" are standard VEX sizes |
| **Drivetrain RPM** | Motor cartridge RPM multiplied by your external gear ratio |

!!! example "📷 Photo Needed"
    V5 Brain Devices screen showing connected motors with port numbers

!!! example "📐 Diagram Needed"
    Top-down drivetrain with dimension line between wheel centers, labeled in inches

### RPM Calculation Example

| Cartridge | External Ratio | Calculation | Drivetrain RPM |
|-----------|---------------|-------------|---------------|
| Green (200) | 36t driving, 60t driven (1:1.67) | 200 / 1.67 | ~120 RPM |
| Green (200) | 48t driving, 36t driven (1.33:1) | 200 * 1.33 | ~267 RPM |
| Green (200) | 60t driving, 36t driven (1.67:1) | 200 * 1.67 | ~333 RPM |
| Blue (600) | 36t driving, 60t driven (1:1.67) | 600 / 1.67 | ~360 RPM |

---

## Sensors for Odometry

LemLib uses sensors to track the robot's position. For now, configure the **Inertial Sensor** (IMU) you mounted in Unit 1:

```cpp
// Inertial sensor on port 10
pros::Imu imu(10);

// Odometry sensors — using IMU for heading
lemlib::OdomSensors sensors(
    nullptr, // No vertical tracking wheel (using motor encoders)
    nullptr, // No second vertical tracking wheel
    nullptr, // No horizontal tracking wheel
    nullptr, // No second horizontal tracking wheel
    &imu     // Inertial sensor
);
```

### Full Chassis Object

Combine everything into the LemLib chassis object:

```cpp
// PID controllers (we'll tune these in Module 2.4 — use defaults for now)
lemlib::ControllerSettings lateral_controller(
    10,   // kP
    0,    // kI
    3,    // kD
    3,    // anti-windup
    1,    // small error range (inches)
    100,  // small error timeout (ms)
    3,    // large error range (inches)
    500,  // large error timeout (ms)
    20    // slew rate
);

lemlib::ControllerSettings angular_controller(
    2,    // kP
    0,    // kI
    10,   // kD
    3,    // anti-windup
    1,    // small error range (degrees)
    100,  // small error timeout (ms)
    3,    // large error range (degrees)
    500,  // large error timeout (ms)
    0     // slew rate (0 = disabled)
);

// Create the chassis
lemlib::Chassis chassis(
    drivetrain,
    lateral_controller,
    angular_controller,
    sensors
);
```

---

## Tank Drive vs. Arcade Drive

There are two main ways to map controller sticks to wheel movement.

### Tank Drive

Each joystick controls one side of the robot:

- **Left stick up/down** = left wheels forward/backward
- **Right stick up/down** = right wheels forward/backward

```cpp
void opcontrol() {
    pros::Controller controller(pros::E_CONTROLLER_MASTER);

    while (true) {
        int left = controller.get_analog(pros::E_CONTROLLER_ANALOG_LEFT_Y);
        int right = controller.get_analog(pros::E_CONTROLLER_ANALOG_RIGHT_Y);

        chassis.tank(left, right);

        pros::delay(25);
    }
}
```

| Pros | Cons |
|------|------|
| Intuitive for beginners | Driving straight requires equal stick pressure |
| Fine-grained control of each side | Harder to make smooth curves |
| Easy to spin in place | Two-handed operation required |

!!! example "📐 Diagram Needed"
    V5 controller: Tank (both sticks = left/right wheels) vs Arcade (left stick throttle, right stick turn)

### Arcade Drive

One joystick controls both forward/backward and turning:

- **Left stick up/down** = forward/backward
- **Left stick left/right** = turning (or use right stick for "split arcade")

```cpp
void opcontrol() {
    pros::Controller controller(pros::E_CONTROLLER_MASTER);

    while (true) {
        int throttle = controller.get_analog(pros::E_CONTROLLER_ANALOG_LEFT_Y);
        int turn = controller.get_analog(pros::E_CONTROLLER_ANALOG_RIGHT_X);

        chassis.arcade(throttle, turn);

        pros::delay(25);
    }
}
```

| Pros | Cons |
|------|------|
| One stick for driving | Less individual wheel control |
| Easy to drive straight (just push forward) | Turning sensitivity takes tuning |
| Frees up one hand for buttons | Can feel less responsive for some drivers |

!!! example "📐 Diagram Needed"
    V5 controller with left stick Y-axis = Throttle, right stick X-axis = Turn labeled

!!! tip "Split Arcade Is the Most Popular"
    Most competitive teams use **split arcade**: left stick Y for throttle, right stick X for turning. This gives the best of both worlds — easy straight driving with one stick, and a free right hand for mechanism buttons.

---

## Initialize Function

Add calibration to your `initialize()` function:

```cpp
void initialize() {
    chassis.calibrate(); // Calibrate IMU — robot must be still during this
    pros::lcd::initialize(); // Enable the Brain LCD screen (optional, useful for debugging)
}
```

!!! warning "Calibration Requires Stillness"
    When `chassis.calibrate()` runs, the Inertial Sensor calibrates its gyroscope. The robot **must be completely still** for 2–3 seconds during this process. Moving the robot during calibration causes inaccurate heading data.

---

## Your First Drive Test

### Preparation

1. Save your code (`Ctrl+S`)
2. Compile and upload (`PROS: Upload`)
3. **Place the robot on blocks** (wheels off the ground)
4. Turn on the V5 Controller and pair it with the Brain
5. Run your program

### On-Blocks Test

With the robot on blocks:

1. Push the left stick forward — left wheels should spin forward
2. Push the right stick forward — right wheels should spin forward
3. If a side spins backward, reverse its motor port numbers (add or remove the minus sign)
4. Push both sticks forward — all wheels should spin in the same direction

!!! example "📷 Photo Needed"
    Robot propped on blocks with wheels spinning freely for safe testing

### Floor Test

Once the on-blocks test passes:

1. Place the robot on the floor
2. Clear the area around you
3. Drive forward — the robot should move in a straight line
4. Turn — the robot should rotate smoothly
5. Drive backward — it should reverse straight

!!! warning "First Floor Test Safety"
    - Clear the area of people and obstacles
    - Start with gentle stick movements — don't slam full throttle
    - Be ready to pull sticks to neutral if something goes wrong
    - Have someone ready to grab the robot if it behaves unexpectedly

### Troubleshooting First Drive

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Robot spins in circles | One side reversed | Flip the sign on that side's port numbers |
| Robot drives backward when pushing forward | Both sides reversed | Flip signs on all motor ports |
| One side is weaker | Motor not plugged in, bad cable, or wrong port number | Check Brain device menu, check cables |
| Robot veers left/right | Mechanical friction (not code) | Fix from Unit 1, or check that RPM config matches reality |
| Nothing happens | Program not running, controller not paired | Check Brain screen, re-pair controller |

---

## Key Takeaways

- [x] LemLib needs motor ports, track width, wheel diameter, and RPM to configure your drivetrain
- [x] Negative port numbers reverse motor direction — left side usually needs reversal
- [x] Tank drive = two sticks, one per side. Arcade drive = one stick for throttle + turn.
- [x] Always test on blocks before the floor
- [x] The `pros::delay(25)` in the loop is mandatory — without it, the code hogs the CPU
- [x] Calibrate the IMU in `initialize()` and keep the robot still during calibration

**Next up:** [Module 2.3: Motorized Shovel](motorized-shovel.md) — add a mechanism and learn button mapping.
