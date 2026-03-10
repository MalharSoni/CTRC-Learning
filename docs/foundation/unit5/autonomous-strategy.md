# Module 5.2: Autonomous Strategy

**The first 15 seconds of a match are the only seconds where your driving skill does not matter — only your code does.** A strong autonomous routine can win or lose a match before the driver even touches the controller. This module teaches you to analyze a game, design autonomous paths, and test until your routine is reliable.

---

## Learning Objectives

By the end of this module, you will be able to:

- Analyze a game's scoring objectives to prioritize autonomous actions
- Design autonomous routines that score points efficiently
- Use LemLib to create accurate movement paths
- Test and iterate autonomous routines to achieve high reliability
- Select between multiple autonomous routines based on match situation

---

## Step 1: Analyze the Game

Before writing a single line of autonomous code, you need to understand the game deeply. For the Foundation Championship, the games are **Sack Attack** and **Ball Sweep** from Unit 4.

### Game Analysis Questions

| Question | Why It Matters |
|----------|---------------|
| What scoring actions give the most points? | Prioritize high-value actions in your limited time |
| What can a robot do without an opponent interfering? | Autonomous has no defense — focus on uncontested actions |
| Where do game objects start? | Your path depends on starting positions |
| What is the fastest path to the first scoring action? | Every second counts — minimize travel time |
| What does your alliance partner's autonomous do? | Do not compete with your partner for the same objects |

### Sack Attack Autonomous Analysis

```
Scoring: 1 point per bean bag intaked and scored
Starting condition: Bean bags scattered across the field
No opponent interference during autonomous

Priority actions:
  1. Drive to nearest bean bag cluster (2-3 seconds)
  2. Intake 1-2 bean bags (3-4 seconds)
  3. Drive to scoring zone (3-4 seconds)
  4. Eject bean bags (1-2 seconds)
  5. Repeat if time allows (unlikely in 15 seconds)

Realistic autonomous goal: 1-2 bean bags scored
```

!!! example "📐 Diagram Needed"
    Autonomous path for Sack Attack: start → drive to cluster → intake → scoring zone → eject

### Ball Sweep Autonomous Analysis

```
Scoring: Fewer balls on your side at match end
Starting condition: Equal balls on each side
No opponent interference during autonomous

Priority actions:
  1. Drive forward to nearest ball cluster (2-3 seconds)
  2. Sweep/push balls across the center line (5-6 seconds)
  3. Return to favorable position for driver control (3-4 seconds)

Realistic autonomous goal: 3-5 balls swept to opponent's side
```

!!! example "📐 Diagram Needed"
    Autonomous path for Ball Sweep: start → drive forward → sweep balls → return

---

## Step 2: Design Your Autonomous Paths

### Path Planning Basics

An autonomous path is the sequence of movements your robot makes. Each movement is defined by:

- **Target position** (X, Y coordinates on the field)
- **Target heading** (which direction the robot faces)
- **Speed** (how fast to drive)
- **Actions** (run intake, deploy slider, etc.)

### Using LemLib for Paths

LemLib (from Unit 2) provides odometry-based movement. Your autonomous uses the same `chassis.moveTo()` and `chassis.turnTo()` commands you learned earlier.

```cpp
// Example: Sack Attack autonomous
void autonomous() {
    // Drive to the nearest bean bag cluster
    chassis.moveTo(24, 36, 90, 2000);  // x, y, heading, timeout

    // Start intake
    intake.spin(forward, 100, pct);

    // Drive through the bean bags to intake them
    chassis.moveTo(24, 48, 90, 2000);

    // Drive to scoring zone
    chassis.moveTo(60, 12, 180, 3000);

    // Eject
    intake.spin(reverse, 100, pct);
    wait(500, msec);
    intake.stop();
}
```

### Path Design Tips

1. **Minimize turns** — turning takes time and introduces error
2. **Use straight lines when possible** — they are faster and more accurate
3. **Slow down for precision** — reduce speed when approaching a scoring position
4. **Add timeouts** — if a movement gets stuck, the timeout prevents the robot from waiting forever
5. **Run mechanisms in parallel** — start the intake while driving, not after arriving

!!! tip "A Good Autonomous That Works 90% of the Time Beats a Perfect One That Works 50%"
    Reliability is more important than ambition. A routine that scores 1 bean bag every match is worth more than a routine that tries for 3 but fails half the time. Start simple, prove it works, then add complexity.

---

## Step 3: Test and Iterate

### The Testing Loop

```
Code It → Run It → Measure Error → Adjust → Repeat
```

### Testing Protocol

!!! example "📷 Photo Needed"
    Field with tape marks at starting position, ready for autonomous testing

1. **Reset robot to exact starting position** every time (use tape marks on the field)
2. **Run the autonomous routine** from start to finish
3. **Record the result**: Did it score? Where did it end up? What went wrong?
4. **Measure the error**: How far off was the final position from the target?
5. **Adjust**: Modify coordinates, speeds, or timeouts based on the error
6. **Repeat** until the routine succeeds **9 out of 10 consecutive runs**

### Testing Log

Keep a written log of every test:

| Run | Scored? | End Position Error | Notes |
|-----|---------|-------------------|-------|
| 1 | No | 3" right of target | Drifted right on second movement |
| 2 | No | 2" right | Adjusted Y coordinate by -2" |
| 3 | Yes | 1" left | Close, may need minor adjustment |
| 4 | Yes | < 0.5" | Good run |
| 5 | Yes | < 0.5" | Consistent |

### Common Autonomous Issues

| Issue | Likely Cause | Fix |
|-------|-------------|-----|
| Robot drifts to one side | Unequal wheel friction, IMU calibration | Check wheels, recalibrate IMU, adjust heading |
| Robot overshoots target | Driving too fast, insufficient braking | Reduce speed near target, add explicit braking |
| Robot stops short of target | Timeout too short, wheels slipping | Increase timeout, check traction |
| Intake misses game object | Position error, object moved | Increase intake width, add tolerance to position |
| Routine works sometimes | Inconsistent starting position | Mark exact starting position, reset precisely |

---

## Step 4: Multiple Autonomous Routines

For the Foundation Championship, you may want different autonomous routines depending on:

- Which game is being played (Sack Attack vs Ball Sweep)
- Which starting position you are assigned (left vs right side)
- What your alliance partner's autonomous does

### Autonomous Selector

Program a simple selector on the V5 Brain screen:

```cpp
int autonSelection = 0;

void pre_auton() {
    // Use the Brain screen to select autonomous
    Brain.Screen.printAt(10, 30, "Select Autonomous:");
    Brain.Screen.printAt(10, 60, "1: Sack Attack - Left Start");
    Brain.Screen.printAt(10, 90, "2: Sack Attack - Right Start");
    Brain.Screen.printAt(10, 120, "3: Ball Sweep - Aggressive");
    Brain.Screen.printAt(10, 150, "4: Ball Sweep - Conservative");

    // Read selection from Brain buttons or touch screen
    // Store in autonSelection variable
}

void autonomous() {
    switch(autonSelection) {
        case 1: sackAttackLeft(); break;
        case 2: sackAttackRight(); break;
        case 3: ballSweepAggressive(); break;
        case 4: ballSweepConservative(); break;
        default: simpleForward(); break;
    }
}
```

!!! example "🖥️ Screenshot Needed"
    V5 Brain screen showing autonomous selector menu with 4 options

### When to Use Each Routine

| Situation | Recommended Routine |
|-----------|-------------------|
| Partner has no autonomous | Use your most aggressive routine — you need to score alone |
| Partner has a strong autonomous | Use a complementary routine — cover different field areas |
| You are unsure what will happen | Use a conservative routine — score 1 guaranteed point |
| You need to win this match | Use your most tested, reliable routine — no experiments |

---

## Autonomous Strategy for Alliance Play

In 2v2 matches, autonomous coordination with your alliance partner is critical.

### Pre-Match Communication

Before every match, discuss with your partner:

1. "What does your autonomous do?" — Know their path to avoid collisions
2. "Which side of the field do you cover?" — Divide the field
3. "Do you score any specific objects?" — Avoid targeting the same ones
4. "Where does your robot end up?" — Avoid blocking each other for driver control

### Collision Avoidance

!!! warning "Autonomous Alliance Collisions Are Preventable"
    If your robot and your partner's robot are both driving to the same game object during autonomous, they will collide. This wastes both teams' autonomous periods. Always coordinate starting positions and paths before the match.

---

## Key Takeaways

1. **Analyze before coding** — understand the game deeply before writing autonomous
2. **Simple and reliable beats complex and flaky** — prove each step works before adding the next
3. **Test 10 times minimum** — if it does not work 9/10, it is not ready
4. **Have multiple routines** — different situations need different strategies
5. **Coordinate with your partner** — autonomous collisions are embarrassing and preventable

---

## Next Up

**[Module 5.3: Match Strategy](match-strategy.md)** — learn to scout opponents, select alliance partners, and win matches with your brain, not just your robot.
