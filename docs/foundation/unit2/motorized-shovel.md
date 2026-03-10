# Module 2.3: Motorized Shovel

A drivetrain that can only drive is not a robot — it's a remote-control car. In this module, you'll build a simple motorized shovel mechanism, wire it to the Brain, and program controller buttons to operate it. This prepares you for the Pickup Relay challenge.

---

## The Shovel Mechanism

The shovel (or scoop) is a simple rotating mechanism attached to the front of your robot. It pivots up and down to pick up and carry objects.

### Design Requirements

| Requirement | Details |
|-------------|---------|
| **Motor** | 1x 11W motor (red cartridge recommended — high torque for lifting) |
| **Range of motion** | ~90° pivot (from ground level to carrying position) |
| **Mounting** | Attached to the front of your drivetrain frame |
| **Scoop surface** | Wide enough to capture a bean bag or small ball |

!!! example "📷 Photo Needed"
    Completed shovel mechanism on drivetrain: motor, C-channel arm, scoop plate visible

### Build Tips

!!! tip "Keep It Simple"
    This is your first mechanism. Don't over-engineer it. A C-Channel arm with a flat scoop plate, driven by one motor, is all you need. You can always improve it later.

**Basic construction:**

1. Mount the motor to the front of your drivetrain frame
2. Attach a C-Channel arm to the motor output shaft
3. Attach a flat plate or bent metal piece to the end of the arm as the scoop
4. Ensure the arm can rotate from ground level to at least 45° above horizontal
5. Add a rubber band or two for gravity assist (helps the motor lift against the weight)

!!! example "📐 Diagram Needed"
    Side view: shovel at ground level (dotted) and carrying position (solid), arc arrow showing pivot

!!! warning "Motor Placement"
    Mount the motor so that the scoop hangs **below the axle** at rest (gravity pulls it down). This way, lifting is working against gravity, and lowering is assisted by gravity. The motor only needs to work hard in one direction.

!!! example "📷 Photo Needed"
    11W motor mounted to front of frame, output shaft connected to C-channel arm

---

## Wiring the Motor

1. Connect the shovel motor to an available port on the V5 Brain (e.g., port 5)
2. Note the port number — you'll need it in code
3. Run the cable neatly along the frame and secure with zip ties

!!! tip "Cable Routing for Moving Parts"
    When routing cables to mechanisms that move, leave enough slack for the full range of motion. Secure the cable so it can't get caught in gears or pinched by the mechanism. Test the full motion range before zip-tying the final routing.

---

## Programming the Motor

### Define the Motor

Add the shovel motor definition near the top of `main.cpp`, with your other motor definitions:

```cpp
// Shovel motor on port 5
pros::Motor shovel_motor(5);
```

If the motor spins the wrong direction, use a negative port number:

```cpp
pros::Motor shovel_motor(-5); // Reversed direction
```

---

## Button Mapping

The V5 Controller has multiple buttons available for mechanism control:

### Available Buttons

| Button Group | Buttons | Typical Use |
|-------------|---------|------------|
| **Shoulder buttons** | `L1`, `L2`, `R1`, `R2` | Primary mechanism control (most accessible) |
| **D-pad** | `UP`, `DOWN`, `LEFT`, `RIGHT` | Secondary controls, presets |
| **Face buttons** | `A`, `B`, `X`, `Y` | Additional functions |

!!! example "📐 Diagram Needed"
    V5 controller with all buttons labeled: L1/L2, R1/R2, D-pad, A/B/X/Y, joysticks

### Reading Button State

```cpp
// Returns true if button is currently pressed
controller.get_digital(pros::E_CONTROLLER_DIGITAL_R1)

// Returns true only on the frame the button is first pressed (rising edge)
controller.get_digital_new_press(pros::E_CONTROLLER_DIGITAL_R1)
```

---

## Control Modes: Hold vs. Toggle

There are two common patterns for mechanism control. Choose the one that fits best.

### Hold Mode

The mechanism moves **only while the button is held down**. Release the button and it stops.

```cpp
void opcontrol() {
    pros::Controller controller(pros::E_CONTROLLER_MASTER);

    while (true) {
        // Drive code (from Module 2.2)
        int throttle = controller.get_analog(pros::E_CONTROLLER_ANALOG_LEFT_Y);
        int turn = controller.get_analog(pros::E_CONTROLLER_ANALOG_RIGHT_X);
        chassis.arcade(throttle, turn);

        // Shovel control — HOLD MODE
        if (controller.get_digital(pros::E_CONTROLLER_DIGITAL_R1)) {
            shovel_motor.move(127);   // Lift up at full speed
        } else if (controller.get_digital(pros::E_CONTROLLER_DIGITAL_R2)) {
            shovel_motor.move(-127);  // Lower down at full speed
        } else {
            shovel_motor.move(0);     // Stop when no button pressed
        }

        pros::delay(25);
    }
}
```

| Pros | Cons |
|------|------|
| Intuitive — press and hold | Requires constant button pressure |
| Immediate stop on release | Ties up a finger during operation |
| Easy to control speed (use partial values) | Can be tiring during long matches |

### Toggle Mode

Press a button once to start an action, press again (or a different button) to stop. The mechanism moves to a preset position and holds.

```cpp
void opcontrol() {
    pros::Controller controller(pros::E_CONTROLLER_MASTER);
    bool shovel_up = false;

    while (true) {
        // Drive code
        int throttle = controller.get_analog(pros::E_CONTROLLER_ANALOG_LEFT_Y);
        int turn = controller.get_analog(pros::E_CONTROLLER_ANALOG_RIGHT_X);
        chassis.arcade(throttle, turn);

        // Shovel control — TOGGLE MODE
        if (controller.get_digital_new_press(pros::E_CONTROLLER_DIGITAL_R1)) {
            shovel_up = !shovel_up; // Flip the state
        }

        if (shovel_up) {
            shovel_motor.move_absolute(90, 100); // Move to 90° at speed 100
        } else {
            shovel_motor.move_absolute(0, 100);  // Move to 0° at speed 100
        }

        pros::delay(25);
    }
}
```

| Pros | Cons |
|------|------|
| Press once, mechanism moves on its own | Less fine-grained control |
| Frees up your finger immediately | Needs position tuning (the 90° value) |
| Consistent positions every time | Slightly more complex code |

!!! example "📐 Diagram Needed"
    Hold mode (pressed=run, released=stop) vs Toggle mode (press=move, press again=move back)

!!! tip "Which Mode to Use?"
    For the shovel, **hold mode** is recommended for beginners — it's simpler to code and easier to understand. Switch to toggle mode once you're comfortable with the basics and want more precise control.

---

## Setting Motor Behavior

### Brake Mode

When you stop sending power to a motor, it can either coast (spin freely) or brake (resist movement):

```cpp
void initialize() {
    chassis.calibrate();

    // Set shovel motor to hold position when stopped
    shovel_motor.set_brake_mode(pros::E_MOTOR_BRAKE_HOLD);
}
```

| Brake Mode | Behavior | Best For |
|-----------|----------|---------|
| `COAST` | Motor spins freely when stopped | Flywheels, intakes |
| `BRAKE` | Motor resists movement when stopped | General mechanisms |
| `HOLD` | Motor actively holds its position when stopped | Arms, lifts, shovels |

!!! tip "Use HOLD for the Shovel"
    `BRAKE_HOLD` makes the motor actively resist being moved, which keeps the shovel at whatever position you leave it. Without this, gravity will pull the shovel down when you release the button.

---

## Testing Your Mechanism

### On-Blocks Test

1. Upload your code
2. With the robot on blocks, press R1 — the shovel should lift
3. Press R2 — the shovel should lower
4. Release both — the shovel should stop and hold position (if using HOLD brake mode)
5. Check motor direction — if it's backwards, negate the port number

### Floor Test

1. Place the robot on the floor with a bean bag or ball in front
2. Drive forward to the object
3. Lower the shovel to ground level
4. Drive forward to scoop the object
5. Lift the shovel to carry the object
6. Drive to a target area and lower to release

!!! example "Practice Drill"
    Set up 3 objects (bean bags, balls, or game elements) in a line. Practice the full cycle:

    1. Drive to object
    2. Lower shovel
    3. Scoop object
    4. Lift shovel
    5. Drive to scoring zone
    6. Lower shovel to release
    7. Back up, drive to next object

    **Goal:** Complete all 3 objects in under 60 seconds. This directly prepares you for the Pickup Relay challenge.

!!! example "🎬 GIF/Video Needed"
    Full pickup cycle: approach → lower shovel → scoop → lift → drive → release

---

## Debugging Common Issues

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Motor doesn't move | Wrong port number, cable unplugged | Check Brain device menu, check cable |
| Motor moves wrong direction | Port polarity | Negate the port number (add/remove minus sign) |
| Shovel falls when button released | Brake mode not set to HOLD | Add `set_brake_mode(pros::E_MOTOR_BRAKE_HOLD)` in `initialize()` |
| Motor stutters or stalls | Mechanism binding, too much load | Check mechanical build — is something jamming? Add rubber bands for assist. |
| Button does nothing | Wrong button constant in code | Double-check the `E_CONTROLLER_DIGITAL_` constant matches the physical button |
| Shovel moves on drive input | Code logic error — shovel code in wrong block | Make sure shovel code is separate from drive code, not inside an if-else |

---

## Key Takeaways

- [x] A single motor with a simple arm creates a functional pick-up mechanism
- [x] `get_digital()` reads current button state (for hold mode)
- [x] `get_digital_new_press()` detects button press edges (for toggle mode)
- [x] Brake mode HOLD keeps mechanisms in position when the motor stops
- [x] Hold mode is simpler; toggle mode gives preset positions
- [x] Always test on blocks first, then on the floor with real objects

**Next up:** [Module 2.4: PID Tuning](pid-tuning.md) — make your robot drive straight and turn accurately.
