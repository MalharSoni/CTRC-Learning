# Module 2.5: Autonomous Routing

The autonomous period is your robot's chance to score points without any human input. In this module, you'll learn LemLib's coordinate system, odometry basics, and how to code a multi-step autonomous routine that drives your robot through a sequence of waypoints.

---

## Why Autonomous Matters

In VEX competition, every match starts with a **15-second autonomous period**. During this time, robots run pre-programmed routines — no driver input allowed. Teams that have reliable autonomous routines score first and gain a strategic advantage for the rest of the match.

!!! info "Autonomous Wins Matches"
    Many competitive matches are decided by 2–5 points. A good autonomous routine can score 5–15 points in 15 seconds. Teams with no autonomous routine start every match behind.

---

## The Coordinate System

LemLib uses a **Cartesian coordinate system** (X, Y) with headings measured in degrees.

### Axes

```
            +Y (forward)
             ↑
             |
             |
  -X ←———— (0,0) ————→ +X
             |
             |
             ↓
            -Y (backward)
```

- **(0, 0)** is wherever the robot starts (or wherever you set the initial position)
- **+X** is to the right
- **+Y** is forward
- **Heading 0°** is facing up (+Y direction)
- **Heading 90°** is facing right (+X direction)
- **Heading 180°** is facing down (-Y direction)
- **Heading 270°** is facing left (-X direction)

!!! example "📐 Diagram Needed"
    LemLib coordinates: X/Y axes, +X right, +Y forward, heading 0°=up, 90°=right as compass rose

### Units

| Measurement | Unit |
|-------------|------|
| X, Y position | Inches |
| Heading | Degrees (0–360) |

!!! tip "Field Reference"
    A VEX competition field is 144 inches x 144 inches (12 feet x 12 feet). Each field tile is 24 inches x 24 inches. Knowing this helps you plan coordinates for your autonomous routine.

!!! example "📐 Diagram Needed"
    VEX field (144x144 in) with 24-inch tile grid overlay, example coordinates at key positions

---

## Odometry: How the Robot Knows Where It Is

**Odometry** is the process of tracking the robot's position by measuring wheel rotations and heading changes over time.

### How It Works

1. **Motor encoders** measure how far each side of the drivetrain has traveled
2. The **Inertial Sensor (IMU)** measures the robot's heading (which direction it's facing)
3. LemLib combines this data to calculate the robot's (X, Y) position on the field
4. This position updates continuously — many times per second

!!! example "📐 Diagram Needed"
    Odometry: motor encoders (distance) + IMU (heading) → position calculator → (X, Y, heading)

### Setting the Starting Position

At the beginning of autonomous, tell LemLib where the robot is starting:

```cpp
void autonomous() {
    // Set starting position: X=0, Y=0, heading=0°
    chassis.setPose(0, 0, 0);

    // Now all movements are relative to this starting position
}
```

!!! warning "Consistent Starting Position"
    The quality of your autonomous routine depends entirely on the robot starting in the exact same position and orientation every time. Use field markings, tape, or alignment jigs to position the robot consistently.

---

## LemLib Movement Commands

### moveToPoint

Drives the robot to a specific (X, Y) coordinate.

```cpp
// Drive to the point (0, 24) — 24 inches forward
chassis.moveToPoint(0, 24, 5000);
//                   X   Y  timeout(ms)
```

The robot will calculate the path from its current position to the target and drive there using your tuned PID controllers.

### turnToHeading

Turns the robot to face a specific heading (absolute, not relative).

```cpp
// Turn to face 90° (facing right)
chassis.turnToHeading(90, 3000);
//                    heading  timeout(ms)
```

### turnToPoint

Turns the robot to face toward a specific (X, Y) coordinate.

```cpp
// Turn to face the point (24, 24)
chassis.turnToPoint(24, 24, 3000);
```

### moveToPose

Drives to a position AND faces a specific heading when it arrives. This is the most versatile command.

```cpp
// Drive to (24, 24) and arrive facing 90°
chassis.moveToPose(24, 24, 90, 5000);
//                  X   Y  heading  timeout
```

### Timeout Parameter

Every movement command has a **timeout** in milliseconds. If the robot hasn't reached the target within this time, it gives up and moves to the next command. This prevents your robot from getting stuck forever on one step.

| Timeout | Use Case |
|---------|---------|
| 2000–3000 ms | Short movements and turns |
| 4000–5000 ms | Medium movements |
| 6000–8000 ms | Long drives across the field |

!!! tip "Set Reasonable Timeouts"
    Too short and the robot won't finish movements. Too long and the robot wastes time if it gets stuck. Start with generous timeouts and tighten them once your routine is reliable.

---

## Building a Multi-Step Routine

### Example: Three-Step Autonomous

```cpp
void autonomous() {
    // Set starting position
    chassis.setPose(0, 0, 0);

    // Step 1: Drive forward 24 inches
    chassis.moveToPoint(0, 24, 4000);

    // Step 2: Turn to face right (90°)
    chassis.turnToHeading(90, 3000);

    // Step 3: Drive forward 24 inches (now moving in the +X direction)
    chassis.moveToPoint(24, 24, 4000);
}
```

**What this does:**

1. Robot starts at (0, 0) facing forward
2. Drives straight forward to (0, 24)
3. Turns 90 degrees to the right
4. Drives to (24, 24)

The robot traces an **L-shaped path**.

!!! example "📐 Diagram Needed"
    L-shaped path: start (0,0) → straight to (0,24) → turn → straight to (24,24), coordinates labeled

### Adding Mechanism Control

You can combine movement commands with mechanism commands:

```cpp
void autonomous() {
    chassis.setPose(0, 0, 0);

    // Drive to the object
    chassis.moveToPoint(0, 24, 4000);

    // Lower the shovel
    shovel_motor.move_absolute(-45, 100);
    pros::delay(500); // Wait for shovel to lower

    // Drive forward to scoop the object
    chassis.moveToPoint(0, 30, 2000);

    // Lift the shovel
    shovel_motor.move_absolute(90, 100);
    pros::delay(500); // Wait for shovel to lift

    // Turn toward scoring zone
    chassis.turnToHeading(180, 3000);

    // Drive to scoring zone
    chassis.moveToPoint(0, 0, 5000);

    // Lower shovel to release object
    shovel_motor.move_absolute(0, 100);
}
```

---

## Testing and Iterating

### The Testing Loop

1. **Write** your autonomous routine
2. **Upload** to the robot
3. **Position** the robot at the exact starting location
4. **Run** autonomous
5. **Observe** — where did the robot go vs. where should it have gone?
6. **Measure** — how far off was each waypoint?
7. **Adjust** — modify coordinates, timeouts, or PID values
8. **Repeat**

!!! warning "Safety During Autonomous Testing"
    The robot moves on its own during autonomous. **Always stand clear.** Never reach for the robot while autonomous is running. If you need to stop it, press the stop button on the Brain or turn off the controller.

### Common Issues and Fixes

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Robot doesn't move | `autonomous()` function is empty or not called | Verify code is in `autonomous()`, run in auton mode |
| Robot drives the wrong distance | PID not tuned (Module 2.4) | Re-tune lateral PID |
| Robot turns the wrong amount | Angular PID not tuned | Re-tune angular PID |
| Robot goes to wrong position | Wrong X/Y coordinates | Check coordinate math, verify starting position |
| Robot times out mid-movement | Timeout too short, or robot is stuck | Increase timeout, check for mechanical issues |
| Routine is inconsistent (different every run) | Starting position varies, battery level changes | Use alignment markers, charge battery, check for mechanical slop |

### Debugging with the Brain Screen

You can print the robot's current position to the Brain's LCD screen for debugging:

```cpp
void initialize() {
    chassis.calibrate();
    pros::lcd::initialize();

    // Print position to screen continuously
    pros::Task screen_task([&]() {
        while (true) {
            lemlib::Pose pose = chassis.getPose();
            pros::lcd::print(0, "X: %.1f", pose.x);
            pros::lcd::print(1, "Y: %.1f", pose.y);
            pros::lcd::print(2, "Heading: %.1f", pose.theta);
            pros::delay(50);
        }
    });
}
```

This lets you see exactly where the robot thinks it is during autonomous, which makes debugging much easier.

!!! example "📷 Photo Needed"
    V5 Brain screen showing LCD with X, Y, Heading values during autonomous

!!! tip "Use the Screen"
    The Brain screen is your best debugging tool. Print everything — position, heading, motor velocities, sensor values. When something goes wrong, the screen data tells you why.

---

## Planning Your Autonomous

### Step 1: Map the Course

Before writing code, sketch the path on paper:

1. Draw the field or course layout
2. Mark the starting position as (0, 0)
3. Mark each waypoint with its (X, Y) coordinates
4. Note the heading at each waypoint
5. Note any mechanism actions at each waypoint

### Step 2: Convert to Code

Turn your sketch into movement commands:

```
Sketch:
  Start (0, 0) → Point A (0, 24) → Turn right → Point B (24, 24)

Code:
  chassis.setPose(0, 0, 0);
  chassis.moveToPoint(0, 24, 4000);
  chassis.turnToHeading(90, 3000);
  chassis.moveToPoint(24, 24, 4000);
```

### Step 3: Test Each Step Individually

Don't test the full routine at once. Test step by step:

1. Test Step 1 alone — does the robot reach Point A?
2. Add Step 2 — does the turn reach the correct heading?
3. Add Step 3 — does the robot reach Point B?

!!! example "Activity: Code a 3-Step Autonomous"
    **Target:** Program your robot to drive the following path:

    1. Start at (0, 0) facing forward
    2. Drive forward 36 inches to (0, 36)
    3. Turn right to face 90 degrees
    4. Drive 24 inches to (24, 36)
    5. Stop and hold position

    **Test criteria:**

    - Place tape markers at (0, 36) and (24, 36)
    - The robot should end within 3 inches of the final marker
    - The robot should face within 5 degrees of 90 degrees
    - Run 3 times — results should be consistent

---

## Key Takeaways

- [x] LemLib uses a Cartesian coordinate system with X (right), Y (forward), heading in degrees
- [x] Odometry tracks position using motor encoders and the Inertial Sensor
- [x] `moveToPoint()` drives to X, Y coordinates using tuned PID
- [x] `turnToHeading()` rotates to an absolute heading
- [x] Always set the starting pose with `chassis.setPose()` at the beginning of autonomous
- [x] Test incrementally — one step at a time, not the full routine
- [x] Consistent starting position is critical for repeatable autonomous
- [x] Use the Brain LCD screen to debug position tracking

**Next up:** Time to prove your skills in the challenges. [Pickup Relay](challenge-pickup-relay.md) tests your driver controls and mechanism, and [Auton Showdown](challenge-auton-showdown.md) tests your autonomous routing.
