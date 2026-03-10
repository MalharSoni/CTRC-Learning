# Module 3.4: VEX Parts & Mates

**You know how to model parts from scratch. Now it is time to work with real VEX components.** This module teaches you to import parts from the VEX V5 Parts Library, assemble them using mates, and build functional mechanisms in CAD — starting with a 4-bar linkage and ending with a full drivetrain.

---

## Learning Objectives

By the end of this module, you will be able to:

- Find and label the CTRC V5 Parts Library in Onshape
- Import VEX parts into your own assemblies
- Use Fastened, Revolute, and Tangent mates
- Build a 4-bar linkage assembly with proper mates
- Apply gear relations for non-1:1 gear ratios
- Use the Replicate feature to efficiently place repeated components like screws

---

## VEX Part Library Setup

Before you can assemble anything, you need access to the parts. The CTRC V5 Parts Library contains every standard VEX V5 component — C-channels, gears, screws, motors, wheels, and more.

### Step-by-Step: Finding and Labeling the Library

1. **Open Onshape** and sign in with your CT account
2. **Click the search bar** at the top of the dashboard
3. **Search for** `CTRC V5 Parts Library` (or search for the public VEX V5 library if the team library is unavailable)

!!! example "🖥️ Screenshot Needed"
    Onshape search bar with 'CTRC V5 Parts Library' results showing

4. **Open the document** to verify it contains the parts you need — you should see folders organized by part type (Structure, Motion, Hardware, Electronics)

!!! example "🖥️ Screenshot Needed"
    Parts library document folders: Structure, Motion, Hardware, Electronics
5. **Label it for quick access:**
    - Click the **three-dot menu** (⋮) next to the document name
    - Select **Add Label**
    - Create or select a label like `Parts Library` or `VEX V5`
6. **Verify:** return to your dashboard, click **Labels** in the left sidebar, and confirm the library appears under your new label

!!! tip "Label It Once, Find It Forever"
    You will be importing from this library dozens of times throughout the program. Labeling it now saves you from searching for it every single time. Treat it like bookmarking your most-visited website.

### Importing Parts Into Your Assembly

1. Open your assembly document
2. Click the **Insert** button in the toolbar
3. In the Insert dialog, search for the part name (e.g., "2x25 C-Channel" or "36T Gear")
4. Select the part from the CTRC V5 Parts Library
5. Click to place it in your assembly
6. The part appears at the origin — you will position it using mates

!!! example "🖥️ Screenshot Needed"
    Insert dialog searching for a part (e.g., C-Channel) from parts library

!!! info "Part Studios vs Assemblies"
    - **Part Studio** = where you design individual parts from scratch
    - **Assembly** = where you bring multiple parts together and define how they connect and move

    You have been working in Part Studios so far. Starting now, you will work primarily in Assemblies.

!!! example "🖥️ Screenshot Needed"
    Bottom tab bar: Part Studio tabs vs Assembly tabs highlighted

---

## Lesson 6: Mates

Open **Lesson 6** in Classes > V5 CT Education.

Mates define how parts connect to each other — whether they are bolted together, can rotate around a pivot, or touch along a surface.

### Mate Types

| Mate Type | Degrees of Freedom | Real-World Example |
|-----------|-------------------|-------------------|
| **Fastened** | 0 (locked in place) | Bolted bracket, screwed plate |
| **Revolute** | 1 (rotation around axis) | Wheel on axle, arm on pivot |
| **Slider** | 1 (linear translation) | Drawer on rails, piston in cylinder |
| **Planar** | 3 (slide and rotate on plane) | Book on table |
| **Cylindrical** | 2 (rotate + slide along axis) | Nut on bolt |
| **Ball** | 3 (rotate in any direction) | Ball joint, shoulder joint |
| **Tangent** | Contact along surfaces | Gear teeth touching, ball on ground |

For this module, focus on **Fastened**, **Revolute**, and **Tangent** — these cover 90% of VEX assemblies.

!!! example "📐 Diagram Needed"
    3 mate types: Fastened (locked), Revolute (rotates), Tangent (touching) with motion arrows

### Building a VEX 4-Bar Linkage

Follow the Lesson 6 tutorial to build a 4-bar linkage. This is a classic mechanism used in VEX for lifts and arms.

**Assembly Order:**

1. Insert the **base C-channel** — Fastened mate to the origin (this anchors your assembly)

!!! example "🖥️ Screenshot Needed"
    First C-channel fastened to origin — mate dialog with origin selected

2. Insert the **two side links** — Revolute mate at the pivot points

!!! example "🖥️ Screenshot Needed"
    Revolute mate at pivot point showing mate connectors and rotation axis
3. Insert the **top bar** — Revolute mate at both connection points
4. Test motion — right-click the assembly and select **Animate** to watch the 4-bar move

!!! example "🖥️ Screenshot Needed"
    Completed 4-bar linkage assembly with all pivot points visible

!!! example "🎬 GIF/Video Needed"
    4-bar linkage animated in Onshape, showing full range of motion

!!! warning "Always Fasten Your First Part"
    The first part in any assembly should be **Fastened to the origin**. If you skip this, your entire assembly will float freely in space, and every subsequent mate will be harder to define. Think of it as anchoring your building to the ground before constructing the walls.

### Mate Connector Tips

- **Mate connectors** are the points on a part where mates attach — usually hole centers, face centers, or edges
- You can create **custom mate connectors** by right-clicking a point and selecting "Create Mate Connector"
- **Implied mate connectors** appear automatically at hole centers and face centers — look for the green circles

!!! example "🖥️ Screenshot Needed"
    Implied mate connectors (green circles) at hole centers and face centers

- Always verify mate alignment — if parts appear rotated 90 degrees, you may need to flip the mate connector

---

## Lesson 7: Gear Relations

Open **Lesson 7** in Classes > V5 CT Education.

### What Are Gear Relations?

A gear relation tells Onshape that two rotating parts are connected by gears — when one turns, the other turns at the correct ratio. This is essential for modeling drivetrains, intakes, and any mechanism with geared power transfer.

### Setting Up a Gear Relation

1. Both gears must already have **Revolute mates** on their respective axles
2. Select **Gear Relation** from the mate relations menu
3. Choose the two revolute mates you want to connect
4. Enter the gear ratio:
    - For two meshing gears: ratio = driven teeth / driving teeth
    - Example: 60T driven by 36T = 60:36 = 5:3 ratio

!!! example "🖥️ Screenshot Needed"
    Gear Relation dialog with two revolute mates and ratio (60:36)

5. Set the direction (same or reverse — depends on whether gears mesh directly or through a chain/belt)

### Activity: Half a Drivetrain

Design one side of a drivetrain with a **non-1:1 gear ratio**:

1. Insert two C-channels for the drivetrain rails
2. Add a motor with a **36T gear** on the output
3. Add a driven axle with a **60T gear**
4. Add wheels to the driven axle
5. Apply a **gear relation** with the correct ratio
6. Animate to verify the wheels spin when the motor turns

!!! example "🖥️ Screenshot Needed"
    36T and 60T gears meshing in assembly with gear relation applied

!!! example "🖥️ Screenshot Needed"
    Half drivetrain: motor with 36T, driven axle with 60T, wheels attached

!!! tip "Check Your Ratio"
    Animate the assembly and count rotations. If the motor gear (36T) spins 5 times, the wheel gear (60T) should spin 3 times. If it does not match, your gear relation ratio is wrong.

---

## Lesson 8: Replicate

Open **Lesson 8** in Classes > V5 CT Education.

### What Is Replicate?

Replicate copies a group of parts and their mates to a new location defined by a pattern of mate connectors. It is the fastest way to add repeated hardware — screws, nuts, spacers — across an assembly.

### Why Replicate Matters

A single drivetrain rail might have 20+ screws. Inserting and mating each one individually would take hours. Replicate lets you:

1. Insert and mate **one screw** correctly
2. Select a **pattern of holes** where you want copies
3. Replicate — all screws appear, properly mated, in seconds

!!! example "🖥️ Screenshot Needed"
    Before (one screw) vs after (all screws replicated across holes)

### Activity: Complete Build-Ready Drivetrain

Using Replicate, finish your drivetrain assembly:

1. Start with the half-drivetrain from Lesson 7
2. Mirror or duplicate for the other side
3. Insert **one screw** with a Fastened mate into a mounting hole
4. Use **Replicate** to copy that screw to all remaining mounting holes
5. Add spacers, nuts, and standoffs as needed
6. Insert the V5 Brain, Battery, and Radio as reference parts

!!! example "🖥️ Screenshot Needed"
    Complete drivetrain assembly: both sides, hardware, brain, battery, radio

### Replicate Checklist

- [ ] Source screw is properly mated (Fastened, correct orientation)
- [ ] Target mate connectors are all selected (every hole that needs a screw)
- [ ] Replicated screws all appear in correct orientation
- [ ] No floating or misaligned hardware
- [ ] Assembly animates smoothly (wheels spin, no interference)

---

## Key Takeaways

1. **The Parts Library is your toolbox** — label it, know what is in it, import efficiently
2. **Fasten your first part to the origin** — every assembly needs an anchor
3. **Revolute mates = rotation** — use them for wheels, pivots, arms, and anything that spins
4. **Gear relations make assemblies realistic** — they enforce correct rotational relationships
5. **Replicate saves hours** — never manually mate 20 screws when Replicate can do it in seconds

---

## Next Up

**[Module 3.5: Render & Present](render-and-present.md)** — make your drivetrain look professional with renders and learn to present your design to the team.
