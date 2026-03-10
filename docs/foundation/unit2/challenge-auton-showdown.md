# Challenge: Auton Showdown

**No driver. No controller. Just code.** The Auton Showdown is an autonomous time trial where your robot must navigate a set course entirely on its own. This challenge tests the quality of your PID tuning, the accuracy of your autonomous routing, and the reliability of your odometry.

---

## Objective

Program your robot to autonomously drive a set course. **Fastest accurate completion wins.**

---

## The Course

```
                    [POINT B]
                    (24, 36)
                       ↑
                       |
                       | 12 inches
                       |
   [START] ——————→ [POINT A] ——————→ [FINISH]
   (0, 0)          (24, 24)          (48, 24)
                                      STOP
```

!!! example "📐 Diagram Needed"
    Auton Showdown course: START (0,0) → Point A (24,24) → Point B (24,36) → FINISH (48,24)

### Course Waypoints

| Waypoint | Coordinates | Action |
|----------|-------------|--------|
| **START** | (0, 0) facing 0° | Robot starts here |
| **Point A** | (24, 24) | Drive from start to Point A |
| **Point B** | (24, 36) | Drive from Point A to Point B |
| **FINISH** | (48, 24) | Drive from Point B to Finish and stop |

### Physical Setup

- Tape markers on the field at each waypoint
- Cones placed at Point A and Point B as visual references (the robot must pass within 6 inches of each cone without hitting it)
- Finish line marked with tape

!!! example "📷 Photo Needed"
    Physical course: tape markers at waypoints, cones at Point A and B, finish line

!!! info "Course Customization"
    Your mentor may adjust the waypoint coordinates based on available space. The course layout will be announced before the challenge, giving you time to program and test.

---

## Rules

| Rule | Details |
|------|---------|
| **Control** | Fully autonomous — no driver input after pressing the start button |
| **Starting** | Robot must start from the designated start position and heading |
| **Timing** | Starts when the program begins. Stops when the robot is stationary at the finish (or timeout). |
| **Cone proximity** | Robot must pass within **6 inches** of each waypoint cone. Missing a waypoint = penalty. |
| **Cone contact** | Hitting a cone = **+3 second** penalty |
| **Waypoint skip** | Missing a waypoint entirely (passing more than 6 inches away) = **+10 second** penalty |
| **Finish accuracy** | Robot must stop within **6 inches** of the finish mark. Outside 6 inches = **+5 seconds**. |
| **Timeout** | If the robot has not reached the finish within **30 seconds**, the run ends. |
| **Attempts** | **3 attempts** — best score counts |
| **Tuning** | You may modify code and re-upload between attempts |

!!! example "📐 Diagram Needed"
    6-inch proximity rule: cone with 6-inch radius circle, robot path inside (pass) vs outside (penalty)

---

## Scoring

**Final Time = Raw Time + Penalties**

| Event | Penalty |
|-------|---------|
| Hit a waypoint cone | +3 seconds |
| Missed a waypoint (> 6 inches away) | +10 seconds |
| Finish position > 6 inches from mark | +5 seconds |
| Did not reach finish (timeout) | 30 seconds + all applicable penalties |

### Example Scoring

| Run | Raw Time | Cone Hits | Missed WP | Finish Off | Final Score |
|-----|---------|:---------:|:---------:|:----------:|-------------|
| Attempt 1 | 12.3s | 0 | 1 | No | **22.3s** |
| Attempt 2 | 14.1s | 1 | 0 | No | **17.1s** |
| Attempt 3 | 11.8s | 0 | 0 | No | **11.8s** (best) |

!!! tip "Accuracy Beats Speed"
    The penalty for missing a waypoint (10 seconds) is massive. A slower but accurate run almost always beats a fast but sloppy one. Tune your PID for accuracy first, speed second.

---

## What This Tests

| Skill | How It's Tested |
|-------|----------------|
| **PID tuning** (2.4) | Does the robot drive the right distances and turn the right angles? |
| **Autonomous routing** (2.5) | Are the movement commands correct? Do the coordinates match the physical course? |
| **Odometry accuracy** | Does the robot's internal position tracking match reality? |
| **Sensor calibration** | Is the IMU calibrated? Does heading tracking stay accurate? |
| **Consistency** | Can you get similar results across 3 attempts? |

---

## Preparation

### Step 1: Measure the Course

Before writing code:

1. Walk the physical course
2. Verify the tape marker positions match the announced coordinates
3. Note any landmarks or alignment aids
4. Identify where you'll position the robot at the start

### Step 2: Write the Code

Convert the waypoints to LemLib movement commands:

```cpp
void autonomous() {
    chassis.setPose(0, 0, 0); // Start position

    // Drive to Point A
    chassis.moveToPoint(24, 24, 6000);

    // Drive to Point B
    chassis.moveToPoint(24, 36, 4000);

    // Drive to Finish
    chassis.moveToPoint(48, 24, 6000);
}
```

!!! tip "Consider Using moveToPose"
    For more precise arrivals, `moveToPose` lets you specify the heading at each waypoint:

    ```cpp
    chassis.moveToPose(24, 24, 45, 5000);  // Arrive at Point A facing 45°
    chassis.moveToPose(24, 36, 0, 4000);   // Arrive at Point B facing north
    chassis.moveToPose(48, 24, 90, 5000);  // Arrive at Finish facing east
    ```

### Step 3: Test and Iterate

!!! example "Testing Protocol"
    1. **Dry run on blocks:** Upload and run with the robot on blocks. Watch the motor movements — do they make sense?
    2. **Single-step test:** Comment out all but the first movement. Test just the drive to Point A. Is it accurate?
    3. **Two-step test:** Uncomment the second movement. Test through Point B.
    4. **Full course:** Run the complete routine. Measure accuracy at each waypoint.
    5. **Consistency test:** Run 3 times without changing code. Are results similar?

### Between Attempts

You have **5 minutes between attempts** to:

- Review what went wrong
- Adjust coordinates or timeouts in code
- Re-tune PID values if needed
- Re-upload the modified program
- Re-position the robot at the start

!!! warning "Don't Over-Adjust"
    If your first attempt was close but slightly off, make small adjustments. If you change too many things at once, you won't know what helped and what hurt. Change one value at a time.

---

## Strategy Tips

!!! tip "Tune Before the Challenge"
    PID tuning during the 5-minute break between attempts is stressful and rushed. Do your PID tuning in Module 2.4 and verify it works before challenge day. The challenge is for proving your tuning, not doing it.

!!! tip "Timeouts Are Your Safety Net"
    Set generous timeouts (5–6 seconds per movement). If a movement fails, the timeout prevents your robot from being stuck forever on one step. A completed-with-timeout run beats a stuck robot every time.

!!! tip "Watch Other Robots First"
    If the bracket allows, watch other teams' attempts before yours. See where robots commonly overshoot or undershoot. Learn from their mistakes.

!!! tip "Battery Consistency"
    Use a fully charged battery for every attempt. Battery voltage affects motor power, which affects how far the robot drives. A routine tuned on a full battery will undershoot on a depleted one.

---

## Debugging During the Challenge

If your first attempt goes poorly, use the 5-minute break to diagnose:

| Symptom | Likely Issue | Quick Fix |
|---------|-------------|-----------|
| Robot drives too far on every leg | Lateral kP too high, or wrong wheel size in config | Reduce kP by 10-15%, verify wheel diameter |
| Robot drives too short on every leg | Lateral kP too low, or wrong wheel size | Increase kP by 10-15%, verify wheel diameter |
| Turns are inaccurate | Angular PID not tuned, or IMU not calibrated | Check IMU calibration, adjust angular kP |
| First leg is perfect, later legs drift | Odometry accumulation error | Reduce the problem — test later legs in isolation |
| Completely wrong direction | Starting heading is wrong, or motor direction reversed | Check `setPose` heading, verify motor port signs |

---

## Post-Challenge Reflection

Document the following in your engineering notebook:

1. **Best time and penalties:** What was your final score?
2. **Consistency:** How different were your 3 attempts? What caused variation?
3. **Accuracy at each waypoint:** Which waypoint was hardest to hit? Why?
4. **Changes between attempts:** What did you adjust? Did it help?
5. **What would you do differently** with unlimited tuning time?
6. **Compare to other teams:** What did the winner do that you didn't?

---

## Looking Ahead

!!! info "This Is Just the Beginning"
    The Auton Showdown uses a simple 3-waypoint course. In actual VEX competition, autonomous routines involve:

    - 10–15 sequential movements
    - Mechanism actions (intake, score, clamp) at specific positions
    - Multiple path options depending on alliance color and strategy
    - Split-second timing optimization

    The skills you've built here — PID tuning, coordinate planning, iterative testing — scale directly to competition-level autonomous programming.

---

## Key Takeaways

- [x] Autonomous performance depends on PID tuning quality and coordinate accuracy
- [x] Accuracy is worth more than speed due to the penalty structure
- [x] Test incrementally — one waypoint at a time, then the full course
- [x] Consistent starting position is the foundation of reliable autonomous
- [x] Use the Brain screen to debug position tracking in real-time
- [x] Small adjustments between attempts — don't change everything at once
- [x] Battery level affects motor power — use a charged battery for every attempt

**Congratulations on completing Unit 2!** You now have a fully programmed robot with driver controls, a motorized mechanism, and autonomous capability. You're ready for **Unit 3: Onshape CAD** — where you'll learn to design before you build.
