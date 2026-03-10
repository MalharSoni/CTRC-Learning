# Module 4.2: Intakes

**A wedge pushes things. An intake grabs things.** The top roller intake is one of the most versatile and commonly used mechanisms in VEX robotics. It uses spinning rollers to pull game objects into your robot, hold them, and score them. This module teaches you to design, tune, and troubleshoot an intake with the right compression and zero deadzone.

---

## Learning Objectives

By the end of this module, you will be able to:

- Design a top roller intake in Onshape CAD
- Understand compression and calculate it for your game object
- Identify and eliminate deadzone in an intake
- Free-spin test a mechanism before adding a motor
- Build, power, and tune an intake on your drivetrain

---

## What Is a Top Roller Intake?

A top roller intake uses one or more spinning rollers mounted above the path of the game object. As the robot drives forward, the rollers spin inward and pull the object into the robot. Think of it like a conveyor belt — but instead of a belt, you use individual rollers.

!!! example "📷 Photo Needed"
    Completed top roller intake on drivetrain: rollers, arms, gearing, motor visible

### Key Components

| Component | Purpose |
|-----------|---------|
| **Roller** | Spinning cylinder (flex wheels, rubber rollers) that contacts the game object |
| **Roller axle** | Shaft the roller is mounted on |
| **Intake arms** | C-channels that hold the roller axles in position |
| **Motor** | Powers the roller rotation |
| **Gearing** | Transfers motor power to the roller at the correct speed |
| **Compression zone** | The gap between the roller and the floor/backplate that squeezes the game object |

!!! example "📐 Diagram Needed"
    Intake components labeled: roller, axle, arms, motor, gearing, compression zone

---

## CAD Activity: Top Roller Intake

Open **Lesson 13: Top Roller Intake** in Classes > V5 CT Education.

### Design Steps

1. **Open your drivetrain assembly** with the wedge from Module 4.1
2. **Determine intake position** — typically at the front of the robot, above or replacing the wedge
3. **Insert intake arm C-channels** — two parallel channels, one on each side
4. **Add roller axles** with revolute mates
5. **Mount flex wheels or rollers** on the axles
6. **Add gearing** — motor gear to roller gear with appropriate ratio
7. **Position the rollers** so the compression zone is correct for your game object
8. **Animate** to verify rollers spin in the correct direction (inward, toward the robot)

!!! example "🖥️ Screenshot Needed"
    Intake assembly in Onshape showing rollers, gearing, correct positioning

---

## Compression

**Compression is the most important parameter of any intake.** It determines how firmly the rollers grip the game object as it passes through.

### The Formula

```
Compression = Game Object Size - Intake Gap
```

Where:
- **Game Object Size** = the diameter or height of the object being intaked
- **Intake Gap** = the distance between the roller surface and the floor/backplate

!!! example "📐 Diagram Needed"
    Game object size vs intake gap with compression zone highlighted

### Example Calculation

For a standard VEX ball:
```
Ball diameter:  3.28 inches
Intake gap:     2.85 inches
Compression:    3.28 - 2.85 = 0.43 inches
```

### Compression Guidelines

| Compression | Result |
|-------------|--------|
| **Too low** (< 0.2") | Object slips through without being gripped, inconsistent intake |
| **Good** (0.3" - 0.5") | Object is firmly gripped and pulled through reliably |
| **Too high** (> 0.6") | Object gets stuck, motor stalls, rollers deform, mechanism jams |

!!! example "📷 Photo Needed"
    Ball pulled through with ideal compression — smooth intake action

!!! warning "More Compression Is Not Better"
    Students often assume that squeezing harder means better grip. Past a certain point, excess compression causes the motor to stall, the flex wheels to deform permanently, and the game object to get stuck. Find the sweet spot through testing.

---

## Deadzone

**Deadzone is the gap in your intake where the game object has no contact with any roller.** During this gap, the object stops moving and the intake flow breaks.

### What Causes Deadzone

- Rollers spaced too far apart
- Gap between the intake entry and the first roller
- Gap between the last roller and the scoring position
- Roller diameter too small for the spacing

!!! example "📐 Diagram Needed"
    Gap between rollers where object loses contact — the deadzone concept

### How to Identify Deadzone

1. Manually push a game object through the intake (motor off)
2. Watch for any point where the object stops being pulled
3. If there is a gap where the object just sits — that is a deadzone
4. Mark the location and measure the gap

### How to Fix Deadzone

| Fix | When to Use |
|-----|-------------|
| **Add another roller** | Large gap between existing rollers |
| **Use larger diameter rollers** | Rollers are too small to bridge the gap |
| **Reposition rollers closer** | Spacing is adjustable in the mounting |
| **Add a ramp or guide** | Object needs to be directed from one roller to the next |
| **Use a continuous belt/chain** | Multiple small rollers are impractical |

---

## Free-Spin Test

Before attaching any motor, every mechanism must pass the free-spin test.

### How to Free-Spin Test

1. Assemble the intake fully — all rollers, axles, gears, and bearings in place
2. **Do not attach the motor**
3. Spin each roller by hand
4. Each roller should spin **freely for at least 3 full rotations** after a flick
5. Spin the entire gear train — all connected rollers should spin smoothly together

### What Free-Spin Reveals

| Observation | Diagnosis |
|-------------|-----------|
| Roller barely spins | Axle binding — check bearing alignment, spacers, nut tightness |
| Roller spins but gear train does not | Gears not meshing properly — check center-to-center distance |
| Grinding noise | Metal-on-metal contact — add spacers, check for interference |
| Uneven spinning | Bent axle or misaligned bearings — straighten or replace |

!!! example "🎬 GIF/Video Needed"
    Hand flicking roller — spins freely for 3+ rotations

!!! tip "If It Does Not Free-Spin, It Will Not Work With a Motor"
    A motor does not fix friction — it fights friction and loses. A motor that is constantly fighting friction will overheat, draw excess current, and eventually burn out. Fix the friction first, then add power. This is the single most important rule of mechanism building.

---

## Build Instructions

Once your coach approves your CAD model:

### Step 1: Build the Intake Frame
1. Cut or select intake arm C-channels
2. Mount them to your drivetrain frame
3. Verify they are parallel and properly spaced

### Step 2: Install Rollers
1. Press flex wheels or rubber rollers onto axles
2. Insert axles into the intake arms with bearings
3. Add spacers to eliminate lateral play
4. Free-spin test each roller individually

### Step 3: Add Gearing
1. Install gears on each roller axle
2. Mesh the gears together (check center-to-center distance)
3. Free-spin test the entire gear train

### Step 4: Power the Intake
1. Mount the motor to the intake frame
2. Connect the motor gear to the gear train
3. Wire the motor to the V5 Brain
4. Test at low speed first — verify rollers spin the correct direction (inward)

### Step 5: Tune
1. Place a game object in front of the intake
2. Drive forward slowly — does the object get intaked?
3. If not, check: compression, deadzone, roller direction, motor speed
4. Iterate until the intake reliably pulls in game objects 9 out of 10 times

---

## Activity: Tune Your Intake

After building, run these tuning tests:

| Test | Pass Criteria |
|------|--------------|
| **Single object intake** | Object is pulled in on first contact, 9/10 attempts |
| **Moving intake** | Object is intaked while robot is driving forward at half speed |
| **Continuous flow** | Feed 3 objects in sequence — no jams, no stalls |
| **Reverse** | Motor reversed, object is ejected cleanly |

---

## Key Takeaways

1. **Compression is king** — calculate it, build it, test it, tune it
2. **Deadzone kills flow** — identify and eliminate every gap in contact
3. **Free-spin before motor** — if it does not spin freely by hand, a motor will not save it
4. **Iterate on the field** — the best intake is tuned through testing, not just designed in CAD

---

## Next Up

**[Module 4.3: Linear Slider](linear-slider.md)** — build a mechanism that extends and retracts for reaching objectives.
