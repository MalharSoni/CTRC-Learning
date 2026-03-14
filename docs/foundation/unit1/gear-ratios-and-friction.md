# Module 1.3: Gear Ratios & Friction

<div class="lesson-metadata">
  <span class="badge badge-beginner">
    <i class="ph ph-gauge"></i>
    Beginner
  </span>
  <span class="badge badge-time">
    <i class="ph ph-clock"></i>
    60 minutes
  </span>
  <span class="badge badge-hands-on">
    <i class="ph ph-wrench"></i>
    Hands-on
  </span>
</div>

---

## Unit 1 Progress

<div class="lesson-timeline">
  <div class="timeline-container">
    <div class="timeline-item completed">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-title">Module 1.1: Safety & Common Parts</div>
        <div class="timeline-meta">Completed</div>
      </div>
    </div>
    <div class="timeline-item completed">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-title">Module 1.2: Structure & Bracing</div>
        <div class="timeline-meta">Completed</div>
      </div>
    </div>
    <div class="timeline-item current">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-title">Module 1.3: Gear Ratios & Friction</div>
        <div class="timeline-meta">In Progress</div>
      </div>
    </div>
    <div class="timeline-item upcoming">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="timeline-title">Module 1.4: Drivetrain Build</div>
        <div class="timeline-meta">Up Next</div>
      </div>
    </div>
  </div>
</div>

---

## Lesson Overview

Gear ratios let you customize your robot's speed and torque without changing motors. Friction management determines how much of your motor's power actually reaches the wheels. Master both, and your drivetrain will outperform robots with the same hardware.

### Learning Objectives

By the end of this lesson, you will be able to:

- [ ] Calculate gear ratios and predict their effect on speed and torque
- [ ] Choose the right gear ratio for different robot mechanisms
- [ ] Identify and eliminate axial friction in rotating assemblies
- [ ] Build assemblies with controlled play to minimize friction
- [ ] Construct ultra-low-friction screw joints using shoulder screws
- [ ] Diagnose and fix drivetrain friction issues

---

## Lesson: Gear Ratios

### The Basics

A gear ratio describes the relationship between two meshed gears:

- **Driving gear (input):** The gear connected to the motor
- **Driven gear (output):** The gear connected to the wheel or mechanism

The ratio is expressed as **driving teeth : driven teeth**.

```
Motor → [Driving Gear] → [Driven Gear] → Wheel
         (input)          (output)
```

!!! example "📐 Diagram Needed"
    Driving gear (small, motor) meshing with driven gear (large, wheel) — rotation arrows and labels

### Calculating the Ratio

$$\text{Gear Ratio} = \frac{\text{Driven Gear Teeth}}{\text{Driving Gear Teeth}}$$

| Driving Gear | Driven Gear | Ratio | Effect |
|-------------|-------------|-------|--------|
| 12 teeth | 36 teeth | 1:3 | **3x torque**, 1/3 speed |

!!! example "📷 Photo Needed"
    12t gear meshing with 36t gear on VEX frame, labeled '1:3 Torque'

| 36 teeth | 12 teeth | 3:1 | **3x speed**, 1/3 torque |

!!! example "📷 Photo Needed"
    36t gear meshing with 12t gear on VEX frame, labeled '3:1 Speed'

| 24 teeth | 24 teeth | 1:1 | No change — direct drive |
| 12 teeth | 60 teeth | 1:5 | **5x torque**, 1/5 speed |
| 60 teeth | 12 teeth | 5:1 | **5x speed**, 1/5 torque |

### Speed vs. Torque Tradeoff

!!! info "The Fundamental Rule"
    **You cannot increase both speed and torque.** Gears trade one for the other. Increasing torque always decreases speed by the same factor, and vice versa.

| You Want | You Need | Gear Setup | Real-World Example |
|----------|---------|------------|-------------------|
| **More torque** (pushing power) | Smaller driving → larger driven | 12t → 36t (1:3) | Climbing a hill in low gear |
| **More speed** (faster movement) | Larger driving → smaller driven | 36t → 12t (3:1) | Highway cruising in high gear |
| **Balanced** | Equal gears | 24t → 24t (1:1) | Flat road in mid gear |

### Compound Gear Ratios

You can chain multiple gear pairs to achieve ratios that a single pair can't. The total ratio is the product of each stage:

```
Stage 1: 12t → 36t = 1:3
Stage 2: 12t → 36t = 1:3

Total: 1:3 × 1:3 = 1:9 (9x torque, 1/9 speed)
```

!!! example "📐 Diagram Needed"
    Two-stage compound gear train: Stage 1 (12t→36t) + Stage 2 (12t→36t) = 1:9 total

!!! tip "Stacking with Motor Cartridges"
    Remember, the motor cartridge already sets an internal ratio. Your external gear ratio multiplies on top of it.

    **Example:** Green cartridge (200 RPM) + external 1:2 torque ratio = **100 RPM output with 2x torque**.

    This gives you the same RPM as a red cartridge but with different motor characteristics.

---

## Lesson: Friction Management

Friction is the invisible enemy. Every point of contact between moving parts steals energy from your motors. A robot with poor friction management can lose **30–50% of its motor power** to heat and wasted energy.

### Types of Friction in VEX

#### Axial Friction

Axial friction occurs when a **rotating component is in constant contact with a stationary surface**. This is the most common and most damaging type.

**Common sources:**

| Source | What's Happening | Fix |
|--------|-----------------|-----|
| Gear pressed against C-Channel | Gear face rubbing on metal wall | Add spacer between gear and wall |
| Wheel rubbing on frame | Wheel face contacting drivetrain rail | Add spacer to create gap |
| Shaft collar grinding on bearing | Collar face pressing into bearing | Loosen collar, add tiny spacer |
| Stacked gears rubbing each other | Adjacent gears' faces in contact | Space them apart on the axle |

!!! example "📷 Photo Needed"
    Gear face pressed against C-Channel wall — the friction problem

!!! example "📷 Photo Needed"
    Spacer added between gear face and C-Channel wall — the fix

#### Radial Friction

Radial friction occurs when an **axle rubs against its mounting hole**. This is solved by using bearings (covered in Module 1.1).

---

### Controlled Play

!!! info "What Is Controlled Play?"
    **Controlled play** is a small, intentional gap (~1mm) between a rotating component and the surfaces next to it. This gap prevents binding while keeping the component positioned correctly.

**The spectrum:**

| Condition | Gap | Result |
|-----------|-----|--------|
| **Too tight** | 0mm | Binding, friction, motor strain, overheating |
| **Controlled play** | ~1mm | Free rotation, minimal wobble, low friction |
| **Too loose** | 3mm+ | Excessive wobble, gears skip teeth, misalignment |

!!! example "📐 Diagram Needed"
    Too tight (binding) vs controlled play (~1mm, correct) vs too loose (wobble)

### How to Achieve Controlled Play

1. Stack your components on the axle: bearing → spacer → gear → spacer → bearing
2. Slide the assembly until there's a tiny gap on each side
3. Lock position with shaft collars on the outside of the bearings
4. **Test:** spin the axle — it should rotate freely with no grinding sounds
5. **Check:** push the gear side-to-side — it should have barely perceptible movement

!!! example "📷 Photo Needed"
    Properly spaced axle: bearing → spacer → gear → spacer → bearing, shaft collars outside

!!! warning "The Tight = Good Myth"
    Beginners often crank everything down as tight as possible, thinking tight = secure. For **structural joints**, tight is correct. For **rotating assemblies**, tight = friction = wasted power. Learn to feel the difference.

---

## Lesson: Screw Joints

A **screw joint** is a technique where a shoulder screw acts as an axle for a rotating component. Instead of using a VEX axle through bearings, you use a shoulder screw through the component's bore.

### Why Screw Joints?

| Property | Axle in Bearings | Screw Joint |
|----------|-----------------|-------------|
| **Friction** | Low (with bearings) | Very low |
| **Precision** | Good | Excellent |
| **Compactness** | Requires bearing on both sides | Single-sided mounting |
| **Best for** | Drive axles (multiple wheels/gears) | Individual pivots, non-motor rotation |

### Building a Screw Joint

1. Take a **shoulder screw** (the smooth shoulder is the key)
2. Pass it through the C-Channel hole from outside
3. Slide your rotating component onto the smooth shoulder
4. Add spacers as needed for positioning
5. Thread a **nylock nut** on the end — tighten until the component spins freely but doesn't wobble excessively

!!! example "📷 Photo Needed"
    Screw joint close-up: shoulder screw, spacers, wheel/gear on smooth shoulder, nylock nut — all labeled

!!! example "📐 Diagram Needed"
    Cross-section of screw joint showing shoulder section where component rotates freely

!!! tip "The Nylock Sweet Spot"
    Tighten the nylock nut until it just touches the spacer stack, then back off about 1/8 turn. The component should spin freely. The nylock's nylon insert will hold the nut at this position permanently.

---

## Lesson: Drivetrain Friction Diagnosis

Your drivetrain is the most friction-critical assembly on the robot. Every wheel, every gear, every axle must spin freely.

### Drivetrain Friction Checklist

- [ ] Every axle passes through **bearings** (not bare metal holes)
- [ ] Every gear has **spacers** preventing contact with C-Channel walls
- [ ] Every wheel has **controlled play** (~1mm gap, not binding)
- [ ] Shaft collars are **positioned, not over-tightened** against bearings
- [ ] Gears mesh properly — teeth interlock without jamming or skipping
- [ ] With motors disengaged, wheels spin **freely for 3+ seconds** from a push

### The Disengage Test

!!! tip "Disengage Test"
    Remove the motor cartridge or disconnect the motor from the drivetrain. Push the robot across the floor. It should **roll freely for several feet** without veering. If it stops quickly, drags to one side, or makes grinding noises, you have a friction problem. Find it and fix it before moving on.

---

## Assignment

Complete these three hands-on activities to prove your understanding:

### Activity 1: Build Three Gear Ratios
**Time:** 25 minutes | **Format:** Individual

Build three separate gear assemblies (not on a drivetrain — just on a test frame):

1. **1:1 ratio** — same size gears. Spin the input and observe the output speed.
2. **1:3 ratio** — small driving, large driven. Feel the increased torque (resistance to stopping the output).
3. **5:1 ratio** — large driving, small driven. Notice the speed increase but easy-to-stop output.

**For each ratio, answer:**

- How fast does the output spin relative to the input?
- How hard is it to stop the output gear with your finger?
- When would this ratio be useful on a robot?

---

### Activity 2: Screw Joint Free Spin Challenge
**Time:** 15 minutes | **Format:** Individual

1. Build a small frame from C-Channel.
2. Mount a wheel on a **screw joint** (shoulder screw through the hub).
3. Add spacers so the wheel doesn't rub the frame.
4. Flick the wheel and time how long it spins.
5. **Target: 5+ seconds of free spin.**

**Compare to Module 1.1 results:** Is the screw joint assembly better or worse than your axle-and-bearing assembly? Why?

**Typical results:**

- Poorly built axle assembly: 1–3 seconds
- Well-built axle assembly: 4–6 seconds
- Well-built screw joint: 6–10+ seconds

---

### Activity 3: Friction Audit
**Time:** 20 minutes | **Format:** Pairs

If you've already started building a drivetrain (from Module 1.4 or earlier):

1. Go through the **Drivetrain Friction Checklist** above
2. Perform the **Disengage Test**
3. Identify and fix at least one friction source
4. Re-test and document the improvement

If you haven't built a drivetrain yet, skip this activity and return to it after Module 1.4.

---

## Knowledge Check

<div class="knowledge-check">

Answer these questions to verify your understanding:

!!! question "Question 1"
    If you have a 12-tooth driving gear and a 36-tooth driven gear, what is the gear ratio? What effect does this have on speed and torque?

    ??? success "Answer"
        **Ratio:** 1:3 (or just "3" as a multiplier on the driven side)

        **Effect:** 3x torque increase, 1/3 speed decrease

!!! question "Question 2"
    You need your robot to climb a steep ramp. Should you use a torque ratio (small → large) or speed ratio (large → small)?

    ??? success "Answer"
        **Torque ratio** (small driving → large driven)

        Climbing requires more pushing force (torque), not speed. A 1:3 or 1:5 torque ratio would work well.

!!! question "Question 3"
    What is axial friction, and how do you prevent it?

    ??? success "Answer"
        **Axial friction** occurs when a rotating component's face rubs against a stationary surface (like a gear face pressed against C-Channel).

        **Prevention:** Add spacers to create a small gap (~1mm) between the rotating component and the surface.

!!! question "Question 4"
    What is "controlled play" and why is it important?

    ??? success "Answer"
        **Controlled play** is a small intentional gap (~1mm) between a rotating component and adjacent surfaces.

        **Importance:** It prevents binding/friction while keeping the component aligned. Too tight = friction. Too loose = wobble and misalignment.

!!! question "Question 5"
    Your drivetrain fails the disengage test (doesn't roll freely when motors are removed). Name three possible causes.

    ??? success "Answer"
        Possible causes (any 3):

        1. Gears or wheels pressed against C-Channel (axial friction)
        2. Axles without bearings (radial friction)
        3. Shaft collars over-tightened against bearings
        4. Gears meshing too tightly or misaligned
        5. Wheels binding on frame

</div>

---

## Additional Resources

Want to go deeper? Check out these optional resources:

- **VEX Library:** [Gear Ratios Explained](https://kb.vex.com/) (official VEX Knowledge Base article)
- **Video:** [Compound Gear Trains](https://www.youtube.com/results?search_query=compound+gear+train+explained) (search for gear train tutorials)
- **Calculator:** [VEX Drivetrain Speed Calculator](https://www.vexforum.com/t/drivetrain-speed-calculator/) (VEX Forum tool)
- **Advanced:** [Efficiency Losses in Gear Trains](https://www.vexforum.com/) (VEX Forum discussion on real-world friction losses)

---

## Key Takeaways

<div class="key-takeaways">

- Gear ratios trade speed for torque — you can't increase both
- Small driving → large driven = more torque, less speed
- Large driving → small driven = more speed, less torque
- Axial friction from components rubbing surfaces is the biggest energy thief
- Controlled play (~1mm gap) prevents binding without causing wobble
- Screw joints using shoulder screws provide ultra-low-friction rotation
- Always test with the disengage test — if it doesn't roll freely, fix it

</div>

---

<div class="lesson-navigation">
  <a href="structure-and-bracing.md" class="nav-button prev">
    <span><i class="ph ph-arrow-left"></i> Previous: Structure & Bracing</span>
  </a>
  <a href="drivetrain-build.md" class="nav-button next">
    <span>Next: Drivetrain Build <i class="ph ph-arrow-right"></i></span>
  </a>
</div>
