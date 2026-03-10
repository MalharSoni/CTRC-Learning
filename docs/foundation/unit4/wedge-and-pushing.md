# Module 4.1: Wedge & Pushing

**The simplest mechanism is often the most effective.** A well-designed wedge turns your drivetrain into a pushing machine — getting under opponents, controlling field position, and dominating Sumo matches. This module teaches you to design and build a 2-bar wedge with proper leverage, screw joints, and pushing strategy.

---

## Learning Objectives

By the end of this module, you will be able to:

- Understand leverage and pivot point mechanics
- Design a 2-bar wedge in Onshape CAD
- Use screw joints for controlled rotation
- Build and attach a wedge to your drivetrain
- Apply pushing strategy concepts (center of gravity, traction, wedge angle)

---

## What Is a 2-Bar Wedge?

A 2-bar wedge is a hinged plate that sits at the front of your robot, angled low to the ground. When you drive into another robot, the wedge slides under them, lifting their wheels off the ground and giving you control.

!!! example "📷 Photo Needed"
    Completed 2-bar wedge attached to front of drivetrain, resting angle visible

### Key Components

| Component | Purpose |
|-----------|---------|
| **Wedge plate** | The angled surface that contacts the opponent or field |
| **Pivot bar** | Connects the wedge to the drivetrain frame, allows rotation |
| **Screw joints** | The pivot points that allow the wedge to angle up and down |
| **Hard stops** | Limit how far the wedge can rotate (prevents over-extension) |
| **Bracing** | Keeps the wedge rigid under impact loads |

!!! example "📐 Diagram Needed"
    Wedge components labeled: wedge plate, pivot bar, screw joints, hard stops, bracing

### Why 2-Bar?

The "2-bar" refers to the two structural bars (the wedge plate and the mounting bar on the drivetrain). This is the simplest linkage type — one degree of freedom, easy to build, easy to control. More complex wedge systems exist, but the 2-bar is the best starting point.

---

## CAD Activity: Design Your Wedge

Open **Lesson 10: 2-Bar Wedge** in Classes > V5 CT Education.

### Design Steps

1. **Open your drivetrain assembly** from Unit 3
2. **Identify the mounting points** — where will the wedge attach to the front of the frame?
3. **Insert C-channel** for the wedge plate — typically a 1x25 or 2x25 flat bar
4. **Add a Revolute mate** at the pivot point (this is where the screw joint will be)
5. **Set rotation limits** — the wedge should angle from about 5 degrees below horizontal to 30 degrees above
6. **Add bracing** — cross-supports to prevent the wedge from bending laterally
7. **Animate** the assembly to verify the wedge moves correctly and does not collide with the drivetrain

!!! example "🖥️ Screenshot Needed"
    Wedge assembly in Onshape with revolute mate and rotation limits

### Design Considerations

| Parameter | Target | Why |
|-----------|--------|-----|
| **Wedge angle** | 15-25 degrees from ground | Too steep = opponent drives over you. Too flat = no lifting force |
| **Ground clearance** | 1-2mm at tip | Close enough to get under opponents, but not dragging |
| **Width** | Full robot width or wider | Wider wedge = harder for opponents to drive around |
| **Material** | Steel flat bar or doubled aluminum | Must withstand repeated impacts |
| **Pivot height** | As low as possible | Lower pivot = better leverage for getting under opponents |

!!! example "📷 Photo Needed"
    Correct wedge angle (15-25°) vs too steep vs too flat, side by side

---

## Screw Joints

A **screw joint** is a connection where a shoulder screw acts as the axle and the parts rotate around it. This is the standard pivot mechanism in VEX robotics.

### Anatomy of a Screw Joint

```
Screw head → Spacer → Rotating part → Spacer → Bearing → Fixed part → Nylock nut
```

!!! example "📐 Diagram Needed"
    Screw joint stack: screw head → spacer → rotating part → spacer → bearing → frame → nylock

### Building a Good Screw Joint

1. Use a **shoulder screw** (the smooth section acts as the axle)
2. Add **spacers** on both sides of the rotating part for lateral stability
3. Press-fit a **bearing** into the fixed part to reduce friction
4. Tighten the **nylock nut** until snug — the rotating part should spin freely
5. Test: the rotating part should swing under its own weight when tilted

!!! example "📷 Photo Needed"
    Real screw joint close-up: shoulder screw, spacers, bearing, nylock nut visible

!!! warning "Tightness Kills Screw Joints"
    The most common mistake is over-tightening the nut. A screw joint is not a structural bolt — it is a pivot. If you tighten it like a structural connection, the parts will not rotate. Tighten until the nylock nut just engages, then stop.

### Screw Joint Checklist

- [ ] Shoulder screw used (not a standard bolt)
- [ ] Bearing pressed into fixed part
- [ ] Spacers on both sides of rotating part
- [ ] Part rotates freely under its own weight
- [ ] No lateral wobble (side-to-side play)
- [ ] Nylock nut engaged but not over-tightened

---

## Build Instructions

Once your coach approves your CAD model:

### Step 1: Prepare the Wedge Plate
1. Select your C-channel or flat bar
2. Mark and drill any additional holes if needed
3. Deburr all cut edges (sharp metal = cut fingers)

### Step 2: Install Screw Joints
1. Identify the pivot holes on both the wedge and the drivetrain frame
2. Install shoulder screws with proper spacer and bearing stack
3. Test rotation — the wedge should swing freely

### Step 3: Add Hard Stops
1. Install standoffs or screw heads that limit the wedge rotation
2. The wedge should rest at your designed angle under gravity
3. It should not be able to rotate past horizontal (or it will dig into the field)

### Step 4: Add Bracing
1. Cross-brace the wedge if it flexes laterally
2. A triangle brace from the wedge to the frame adds rigidity without adding weight
3. Verify bracing does not interfere with wedge rotation

### Step 5: Test
1. Place the robot on a flat surface
2. Verify the wedge tip is 1-2mm off the ground
3. Push the robot forward into a wall — the wedge should deflect up, then return to resting position
4. Drive into another robot (gently) to test the getting-under action

---

## Pushing Strategy

A good wedge is only half the battle. Pushing strategy determines whether you win the match.

### Center of Gravity

- **Lower center of gravity = harder to push** — your robot resists tipping
- Add weight low on the robot (battery on the bottom, brain in the center)
- Avoid top-heavy configurations

### Wheel Traction

- **More traction = more pushing force** — but also slower turning
- Traction wheels grip the field mat better than omni wheels
- Consider a mix: traction wheels in the center, omni wheels for turning

### Wedge Angle and Approach

| Approach | Result |
|----------|--------|
| Hit head-on, straight | Best pushing force, wedge gets under cleanly |
| Hit at an angle | Opponent may slide off the wedge sideways |
| Hit from the side | Wedge is not in play, becomes a straight push |
| Get hit from behind | You lose — your wedge is on the wrong end |

!!! example "🎬 GIF/Video Needed"
    Wedge sliding under opponent robot, lifting their wheels off ground

!!! tip "Drive Into Them, Not Past Them"
    New drivers tend to drive too fast and overshoot. Approach at medium speed, make contact with the wedge, then accelerate to full power. The goal is to get under them and control the push, not to ram them and bounce off.

---

## Key Takeaways

1. **Simple mechanisms work** — a well-built wedge beats a poorly built complex mechanism
2. **Screw joints are the foundation** of all VEX pivot mechanisms — learn them well
3. **CAD before build** — your coach must approve the design before you touch metal
4. **Strategy matters** — the best wedge in the world loses if the driver cannot position it

---

## Next Up

**[Module 4.2: Intakes](intakes.md)** — build a mechanism that actively collects game objects.
