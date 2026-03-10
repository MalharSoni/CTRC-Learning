# Module 1.3: Gear Ratios & Friction

Gear ratios let you customize your robot's speed and torque without changing motors. Friction management determines how much of your motor's power actually reaches the wheels. Master both, and your drivetrain will outperform robots with the same hardware.

---

## Gear Ratios

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

!!! example "Activity: Build Three Gear Ratios"
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

## Friction

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

## Screw Joints

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

!!! example "Activity: Screw Joint Free Spin Challenge"
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

## Applying It All: Drivetrain Friction

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

## Key Takeaways

- [x] Gear ratios trade speed for torque — you can't increase both
- [x] Small driving → large driven = more torque, less speed
- [x] Large driving → small driven = more speed, less torque
- [x] Axial friction from components rubbing surfaces is the biggest energy thief
- [x] Controlled play (~1mm gap) prevents binding without causing wobble
- [x] Screw joints using shoulder screws provide ultra-low-friction rotation
- [x] Always test with the disengage test — if it doesn't roll freely, fix it

**Next up:** [Module 1.4: Drivetrain Build](drivetrain-build.md) — put it all together and build your competition drivetrain.
