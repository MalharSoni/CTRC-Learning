# Module 2.4: PID Tuning

PID is what separates robots that sort of work from robots that work consistently. In this module, you'll learn what PID is, why it matters, and how to tune LemLib's PID controllers so your robot drives straight and turns to exact angles.

---

## What Is PID?

PID stands for **Proportional, Integral, Derivative** — three components that work together to move your robot to a target position smoothly and accurately.

### The Problem PID Solves

Without PID, if you tell a robot to drive 24 inches forward, one of two things happens:

1. **Too little power:** The robot moves slowly and stops short of the target
2. **Too much power:** The robot blasts past the target and overshoots

PID dynamically adjusts motor power based on how far the robot is from its target. Far away = lots of power. Getting close = ease off. Past the target = reverse a little.

### The Analogy

!!! info "PID Is Like Parking a Car"
    Imagine pulling into a parking spot:

    - **Far from the spot:** You drive at normal speed (Proportional)
    - **Getting close:** You slow down so you don't overshoot (Derivative)
    - **Stopped just short:** You creep forward slowly to close the gap (Integral)

    That's PID in a nutshell. Each term handles a different phase of reaching your target.

!!! example "📐 Diagram Needed"
    Car approaching parking spot: far away (fast, P), getting close (slowing, D), last inch (creeping, I)

---

## The Three Terms

### P — Proportional

**"How far am I from the target?"**

The P term applies power proportional to the error (distance from target). Large error = large power. Small error = small power.

```
Power = kP × error
```

- **kP too low:** Robot moves sluggishly, may never reach target
- **kP too high:** Robot overshoots the target, oscillates back and forth
- **kP just right:** Robot approaches target quickly but may still overshoot slightly

!!! example "📐 Diagram Needed"
    Graph: position vs time with P-only — undershoot (kP low), oscillation (kP high), correct (kP good)

!!! tip "P Alone Is Rarely Enough"
    Pure proportional control usually causes oscillation — the robot overshoots, corrects, overshoots again, corrects again. That's where D comes in.

### D — Derivative

**"How fast am I approaching the target?"**

The D term applies a braking force proportional to the rate of change of the error. If the error is decreasing quickly (robot moving fast toward target), D slows it down to prevent overshoot.

```
Power = kP × error - kD × rate_of_change
```

- **kD too low:** Doesn't prevent overshoot — oscillation continues
- **kD too high:** Robot approaches target extremely slowly, feels sluggish
- **kD just right:** Robot approaches target smoothly, minimal overshoot

!!! example "📐 Diagram Needed"
    Graph: P+D control — kD too low (oscillates), too high (sluggish), just right (smooth)

### I — Integral

**"Have I been stuck short of the target?"**

The I term accumulates error over time. If the robot is consistently a small amount short of the target (steady-state error), the I term builds up power to close that last gap.

```
Power = kP × error + kI × accumulated_error - kD × rate_of_change
```

- **kI too low:** Small steady-state error persists (robot stops 1 inch short)
- **kI too high:** Power builds up and causes overshoot or oscillation
- **kI just right:** Slowly eliminates steady-state error without causing instability

!!! warning "I Is Dangerous"
    The Integral term is the most likely to cause problems. For most VEX applications, **kI should be 0 or very small**. Only add I if you have a persistent steady-state error that P and D can't fix.

---

## PID in LemLib

LemLib has two separate PID controllers:

| Controller | What It Controls | When It's Used |
|-----------|-----------------|---------------|
| **Lateral** | Forward/backward movement | Driving to a point, moving straight |
| **Angular** | Rotation/turning | Turning to a heading, facing a point |

Both are configured in the chassis constructor (you already set default values in Module 2.2). Now we'll tune them.

!!! example "📐 Diagram Needed"
    Top-down robot: lateral PID (forward/back arrow) vs angular PID (rotation arc arrow)

### The Configuration Structure

```cpp
lemlib::ControllerSettings lateral_controller(
    kP,              // Proportional gain
    kI,              // Integral gain
    kD,              // Derivative gain
    anti_windup,     // Anti-windup (limits I accumulation)
    small_error,     // Small error range (inches)
    small_timeout,   // Time to settle in small error range (ms)
    large_error,     // Large error range (inches)
    large_timeout,   // Time to settle in large error range (ms)
    slew             // Maximum power change per update (acceleration limit)
);
```

---

## Tuning Process

### Step 1: Tune Lateral PID (Straight Driving)

**Goal:** Robot drives exactly 24 inches forward (6 tiles on the field, roughly 2 field tiles).

#### Start with P Only

1. Set **kI = 0** and **kD = 0**
2. Start with a low kP value (e.g., **kP = 5**)
3. Add a test movement to your autonomous function:

```cpp
void autonomous() {
    chassis.moveToPoint(0, 24, 5000); // Move 24 inches forward, 5-second timeout
}
```

4. Upload and run autonomous
5. Measure how far the robot actually traveled

#### P Tuning Table

| Observation | Adjustment |
|------------|------------|
| Robot barely moves or stops way short | Increase kP (try 2x) |
| Robot reaches target but slowly | kP is close — increase by 10-20% |
| Robot overshoots and comes back | kP is too high — decrease by 30-50% |
| Robot oscillates back and forth | kP is way too high — cut in half |

!!! example "Activity: Tune Lateral P"
    **Target:** Robot drives 24 inches forward and stops.

    1. Start with `kP = 5`
    2. Run autonomous, measure distance traveled
    3. Adjust kP based on the table above
    4. Repeat until the robot reaches approximately 24 inches (within 2-3 inches)
    5. Record your final P value

    **Expected range for most drivetrains:** kP = 5–15

#### Add D

Once P gets the robot close to the target:

1. Keep your tuned kP value
2. Start with **kD = kP × 0.3** (rough starting point)
3. Run the same 24-inch test
4. Observe overshoot behavior

| Observation | Adjustment |
|------------|------------|
| Still overshooting | Increase kD by 25% |
| Robot slows down too early, stops short | Decrease kD by 25% |
| Robot approaches smoothly, minimal overshoot | You're close — fine-tune |
| Robot vibrates/chatters near target | kD is way too high — cut in half |

!!! example "Activity: Tune Lateral D"
    1. Start with `kD = kP × 0.3`
    2. Run the 24-inch test
    3. Adjust based on overshoot behavior
    4. Goal: Robot drives 24 inches, decelerates smoothly, stops within 1 inch of target

#### Add I (Only If Needed)

If the robot consistently stops 0.5–1 inch short of the target after tuning P and D:

1. Start with **kI = kP × 0.01** (very small)
2. Set **anti_windup = 3** (limits how much I can accumulate)
3. Run the test
4. If the steady-state error is eliminated, you're done
5. If not, slowly increase kI

!!! warning "I Tuning Patience"
    Most LemLib users set kI to 0 and get excellent results. Only add I if you have a measurable, consistent shortfall that P and D cannot resolve. Adding unnecessary I usually makes things worse.

---

### Step 2: Tune Angular PID (Turning)

**Goal:** Robot turns exactly 90 degrees and stops.

The process is identical, but for the angular controller.

```cpp
void autonomous() {
    chassis.turnToHeading(90, 5000); // Turn to 90° heading, 5-second timeout
}
```

#### Angular Tuning Guide

1. **Start with P only:** `kP = 2`, `kI = 0`, `kD = 0`
2. Run the 90-degree turn test
3. Measure the actual angle turned (use the Brain's IMU readout or measure on the field)
4. Tune P until the robot turns approximately 90 degrees
5. Add D to eliminate overshoot
6. Add I only if there's persistent steady-state error

| Observation | Adjustment |
|------------|------------|
| Robot turns only ~45° | Double kP |
| Robot turns ~85° and stops (steady-state error) | Increase kP slightly, or add small kI |
| Robot turns ~100° and comes back | kP is slightly high, add more kD |
| Robot spins in circles | kP is way too high — reduce to 1/4 value |

!!! example "Activity: Tune Angular PID"
    **Target:** Robot turns exactly 90 degrees from its starting heading.

    1. Mark the robot's starting position and heading on the floor with tape
    2. Run the turn command
    3. Measure the actual angle turned
    4. Adjust P, D, (I) following the same process as lateral tuning
    5. Goal: Robot turns 90° with less than 3° error

---

## Tuning Tips

!!! tip "Small Changes, Big Effects"
    When tuning PID, change one value at a time, and change it by small amounts (10-25%). Large jumps make it impossible to find the sweet spot.

!!! tip "Consistency Test"
    Run the same movement 5 times in a row. If the results are inconsistent (sometimes overshoots, sometimes undershoots), you likely have a mechanical problem (friction, loose parts, low battery) rather than a tuning problem.

!!! tip "Battery Level Matters"
    A fully charged battery delivers more power than a depleted one. Always tune with a **fully charged battery**, and re-test periodically as the battery drains. A well-tuned PID should handle moderate battery variation.

!!! tip "Document Your Values"
    Write down every set of PID values you test and the results. This prevents re-testing values you've already tried and helps you see the pattern of improvement.

### Tuning Log Template

| Attempt | kP | kI | kD | Target | Actual | Notes |
|---------|----|----|----|----|--------|-------|
| 1 | 5 | 0 | 0 | 24 in | 18 in | Way short, increase P |
| 2 | 10 | 0 | 0 | 24 in | 26 in | Slight overshoot, add D |
| 3 | 10 | 0 | 3 | 24 in | 24.5 in | Very close, good enough |

---

## Final PID Values

Once you've tuned both controllers, update your chassis configuration with the final values:

```cpp
lemlib::ControllerSettings lateral_controller(
    10,   // kP — your tuned value
    0,    // kI — probably 0
    3,    // kD — your tuned value
    3,    // anti-windup
    1,    // small error range (inches)
    100,  // small error timeout (ms)
    3,    // large error range (inches)
    500,  // large error timeout (ms)
    20    // slew
);

lemlib::ControllerSettings angular_controller(
    2,    // kP — your tuned value
    0,    // kI — probably 0
    10,   // kD — your tuned value
    3,    // anti-windup
    1,    // small error range (degrees)
    100,  // small error timeout (ms)
    3,    // large error range (degrees)
    500,  // large error timeout (ms)
    0     // slew
);
```

!!! warning "Save Your Values"
    Once you find good PID values, **write them down somewhere permanent** (engineering notebook, phone notes, comment in your code). Losing tuned PID values and having to re-tune from scratch is a painful waste of time.

---

## Key Takeaways

- [x] PID dynamically adjusts motor power based on distance from target
- [x] P (Proportional) — power based on error magnitude
- [x] D (Derivative) — braking based on approach speed
- [x] I (Integral) — correction for persistent small errors (use sparingly)
- [x] Tune in order: P first, then D, then I only if needed
- [x] Change one value at a time, in small increments
- [x] Test with a charged battery and consistent conditions
- [x] Lateral PID controls straight driving; Angular PID controls turning

**Next up:** [Module 2.5: Autonomous Routing](autonomous-routing.md) — use your tuned PID to make the robot drive itself.
