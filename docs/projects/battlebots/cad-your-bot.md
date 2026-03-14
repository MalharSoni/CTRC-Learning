# CAD Your Bot in Onshape

This is where your robot goes from an idea to a real design. You'll use Onshape to model every part of your combat robot — chassis, weapon, drivetrain, electronics mounts, and armor. By the end, you'll have a complete 3D model ready to export for 3D printing.

---

## Learning Objectives

By completing this module, you will be able to:

- Create a bounding box sketch (6"x6") to constrain your design
- Model a unibody chassis with motor pockets, battery compartment, and electronics mount
- Design and mate drive wheels and weapon in an Onshape assembly
- Use Onshape mass properties to verify weight (~500g) and center of mass
- Export STL files with correct units and resolution for 3D printing
- Complete a design review checklist before printing

---

## Time Required

4-8 hours (varies widely based on CAD experience)

---

## Before You Start

Make sure you have:

- [x] Chosen your robot archetype ([Robot Archetypes](robot-archetypes.md))
- [x] Understood weapon design principles ([Weapon Design](weapon-design.md))
- [x] Planned your drivetrain layout ([Drivetrain Design](drivetrain-design.md))
- [x] An Onshape account with access to a Part Studio and Assembly

Have the rules page open for reference — you'll need to check the 6" x 6" footprint and ~500g weight limit constantly.

---

## Step 1: Create a New Document

1. Open [Onshape](https://www.onshape.com) and sign in
2. Click **Create** → **Document**
3. Name it something meaningful: `CTRC-BattleBot-[YourName]`
4. You'll start with a blank Part Studio — this is where you'll model your parts

!!! tip "Naming Matters"
    Name your Part Studios, parts, and features clearly. When you have 30 features in the tree and something breaks, you'll thank yourself. Examples: `Chassis`, `Weapon-Drum`, `Motor-Mount-Left`, `Wedge-Front`.

---

## Step 2: Define the Bounding Box

Before you draw anything, establish your size constraint.

1. Create a new sketch on the **Top plane**
2. Draw a **6" x 6" rectangle** (152.4mm x 152.4mm) centered on the origin
3. This is your maximum footprint — your entire robot must fit inside this rectangle
4. Keep this sketch as a reference (name it `Bounding-Box`) — don't delete it

This bounding box is your constant sanity check. Every time you add a feature, make sure nothing sticks outside it.

!!! example "🖥️ Screenshot Needed"
    6x6 inch rectangle sketch on Top plane labeled Bounding-Box in Onshape

---

## Step 3: Design the Chassis

The chassis is the structural frame that holds everything together. For a 500g robot, the simplest approach is a **3D printed unibody** — a single printed piece that serves as the frame, motor mounts, and electronics tray.

### Unibody Design (Recommended for Beginners)

1. Sketch the chassis outline on the **Top plane** (inside your bounding box)
2. Include cutouts for:
    - N20 motor pockets (left and right sides, rear)
    - Weapon motor mount area (front center)
    - Battery compartment (center)
    - Malenki Nano mount area
3. **Extrude** the chassis to your desired height (typically 20-35mm)
4. Add **internal ribs** for strength (2-3mm thick walls with cross-bracing)
5. Hollow out the interior to save weight — you want walls, not a solid block

!!! example "🖥️ Screenshot Needed"
    Extruded chassis in 3D view showing internal ribs and hollowed interior

### Key Dimensions to Reference

| Feature | Dimension | Notes |
|---------|-----------|-------|
| N20 motor pocket | 12mm x 10mm x 25mm deep | Add 0.2mm tolerance for press fit |
| Wheel shaft hole | 3mm with D-flat | Through the chassis wall |
| Battery compartment | Sized to your LiPo | Add 2mm clearance on each side |
| Malenki Nano mount | ~30mm x 20mm platform | Check Nano dimensions |
| Wall thickness | 2-3mm minimum | Thicker near impact zones |

!!! example "🖥️ Screenshot Needed"
    Chassis sketch: motor pockets, battery compartment, Nano mount within bounding box

---

## Step 4: Place Drive Motors and Wheels

1. In your chassis sketch or a new sketch, position the two N20 motor pockets
2. Ensure they are **symmetrically placed** left-right
3. Mark the shaft exit holes through the chassis walls
4. Model the wheels as separate parts:
    - Create a new Part Studio or use the same one
    - Sketch wheel profile: diameter, width, hub with D-shaft hole
    - Add tread pattern (grooves, knurling) if desired
    - Extrude to create the wheel

### Checking Fitment

1. Create an **Assembly** in your document
2. Insert the chassis and wheels
3. Add **Revolute mates** for the wheels on the motor shaft axes
4. Verify: wheels spin freely, don't collide with the chassis, and are inside the bounding box

---

## Step 5: Design the Weapon Motor Mount

Your brushless weapon motor needs a secure mount that:

- Holds the motor firmly during high-speed spinning
- Withstands impact shock when the weapon hits something
- Allows the weapon shaft to spin freely

**Design approach:**

1. Determine your motor's mounting pattern (screw holes, body diameter)
2. Design a mounting plate or clamp integrated into the chassis
3. Add clearance for the motor wires to route to the Malenki Nano
4. If using a separate mount piece, design screw holes to attach it to the chassis

---

## Step 6: Design the Weapon

This is the fun part. Based on your chosen archetype, model your spinner weapon.

### For a Drum Spinner:
1. Sketch the drum cross-section (outer diameter, wall thickness)
2. Revolve to create the drum body
3. Add teeth/impactors around the circumference
4. Add a hub that connects to the motor shaft
5. Check balance: **Right-click → Mass properties → Center of mass** should be on the spin axis

### For an Eggbeater/Bar:
1. Sketch the bar profile
2. Extrude to bar width
3. Add a center hub with motor shaft hole
4. Ensure symmetry — both ends of the bar should be identical weight

### For a Disc:
1. Sketch the disc profile with teeth
2. Extrude to disc thickness (6mm+)
3. Add center hub
4. Remove material near the center to move mass outward (increases energy storage)

!!! warning "Always Check Balance"
    After designing your weapon, check the center of mass. If it's not exactly on the spin axis, your weapon is unbalanced. Adjust geometry, add or remove material, until the center of mass sits on the axis. This is not optional.

---

## Step 7: Add Malenki Nano Mount

The Malenki Nano needs a secure mounting location inside your chassis, protected from impacts.

1. Design a flat platform or tray sized to the Nano PCB
2. Add screw holes, pegs, or a raised lip to hold it in place
3. Alternatively, plan for velcro mounting (just a flat surface)
4. Position it centrally, away from the weapon motor
5. Leave clearance for wires to reach the motor outputs and battery input

---

## Step 8: Add Battery Compartment

Your LiPo battery needs a dedicated compartment:

1. Measure your battery (or find the dimensions from the spec sheet)
2. Design a compartment with 2mm clearance on all sides
3. Add a **velcro strap slot** or retaining clip to hold the battery down
4. Position the battery **low and centered** for optimal center of gravity
5. Ensure the battery can be removed easily for charging

---

## Step 9: Design Review Checks

Before you print anything, verify your design meets all requirements.

### Center of Mass Check

1. In your Assembly, select all parts
2. Check **Mass properties**
3. Center of mass should be:
    - **Low** (close to the ground) — prevents tipping
    - **Centered** left-right — ensures straight driving
    - **Slightly rear of center** (toward drive wheels) — ensures good traction

!!! example "🖥️ Screenshot Needed"
    Assembly mass properties showing center of mass location on full robot

### Weight Check

1. In the Assembly, check **Mass properties** for total weight
2. Onshape calculates mass based on material density
3. **Set material properties** for each part:
    - PLA+ density: ~1.24 g/cm³
    - TPU density: ~1.21 g/cm³
    - PETG density: ~1.27 g/cm³
4. Total should be near 500g (leave 20-30g margin for wires, screws, glue)

!!! tip "Iterating on Weight"
    If you're over weight: thin out walls, reduce infill (model solid but print at lower infill), remove unnecessary material, or shrink the overall design. If you're under weight: consider adding armor panels or increasing weapon mass.

### Bounding Box Check

1. View the assembly from the **Top view**
2. Verify everything fits within your 6" x 6" bounding box sketch
3. Pay attention to wheels — they often stick out past the chassis

!!! example "🖥️ Screenshot Needed"
    Completed assembly from Top view overlaid on 6x6 bounding box — everything fits

---

## Step 10: Design Review with Coach

Before printing, schedule a **design review with a mentor or coach**. Bring:

- Your Onshape Assembly (share the link)
- Your weight analysis
- Your material choices for each part
- Your questions or concerns

A mentor can spot issues you might miss — like a motor mount that's too thin, a weapon that's unbalanced, or a battery compartment that won't survive a hit.

---

## Step 11: Export STL Files

Once your design is approved:

1. Open each Part Studio containing parts to print
2. Right-click the part → **Export**
3. Choose **STL** format
4. Set units to **Millimeters**
5. Use fine resolution for curved surfaces
6. Save each part as a separate STL file
7. Name files clearly: `Chassis.stl`, `Weapon-Drum.stl`, `Wheel-Left.stl`, etc.

---

## CAD Checklist

- [ ] Bounding box sketch created (6" x 6")
- [ ] Chassis modeled with motor pockets, battery compartment, Nano mount
- [ ] Drive motors and wheels positioned and mated in assembly
- [ ] Weapon modeled, balanced (center of mass verified), and mated
- [ ] Weapon motor mount designed
- [ ] Battery compartment with retention method
- [ ] Malenki Nano mount with wire routing space
- [ ] Total weight checked (~500g target)
- [ ] Center of mass checked (low and centered)
- [ ] Everything fits within 6" x 6" footprint
- [ ] Design reviewed with mentor
- [ ] STL files exported for all printable parts

---

## Success Criteria

You are ready to move on when you can:

- [ ] Complete the CAD Checklist above (all items checked)
- [ ] Show that your assembly fits within the 6"x6" bounding box from top view
- [ ] Demonstrate mass properties showing total weight 470-530g
- [ ] Verify weapon center of mass is on the spin axis (balanced)
- [ ] Export all STL files with clear file names and correct units
- [ ] Pass design review with a mentor (if required)

---

## Next Step

Your design is done — time to make it real. Head to the **[3D Printing Guide](3d-printing-guide.md)** to learn how to turn your STL files into physical parts.
