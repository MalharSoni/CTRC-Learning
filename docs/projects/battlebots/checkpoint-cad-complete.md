# Checkpoint: CAD Design Complete

You've completed your robot design in Onshape. Before moving forward to 3D printing, verify your design meets all requirements and is ready for manufacturing.

---

## What You've Accomplished

- [x] Created a complete robot design in Onshape
- [x] Modeled chassis with motor pockets, battery compartment, and electronics mount
- [x] Designed and balanced your weapon
- [x] Positioned drive motors and wheels in an assembly
- [x] Verified fit within 6"x6" bounding box
- [x] Checked total weight using Onshape mass properties

---

## Design Verification Checklist

Before exporting STL files, verify your design meets these requirements:

### Size Constraints

- [ ] Entire robot fits within 6"x6" footprint when viewed from top
- [ ] No parts extend beyond bounding box (check wheels especially)
- [ ] Bounding box sketch is visible in your Part Studio for reference

### Weight Requirements

- [ ] Total mass in Onshape is 470-530g (allows 20-30g for wires/screws/glue)
- [ ] Material densities are set correctly (PLA+ = 1.24 g/cm³, TPU = 1.21 g/cm³, PETG = 1.27 g/cm³)
- [ ] Weight distribution is balanced (weapon ~20-30%, chassis ~20-30%, drivetrain ~20-30%, electronics ~16-24%)

### Weapon Design

- [ ] Weapon center of mass is on the spin axis (balanced)
- [ ] Weapon has 2mm+ clearance from all chassis parts when spinning
- [ ] Weapon teeth/impactors are at least 5mm thick at impact points
- [ ] TPU weapon hub is modeled for shock absorption

### Drivetrain

- [ ] Two N20 motors positioned symmetrically
- [ ] Motor pockets are correctly sized (12mm x 10mm x 25mm with 0.2mm tolerance)
- [ ] Wheels have D-shaft hubs (3mm with flat) matching motor shafts
- [ ] Wheels are 25-35mm diameter
- [ ] Ground clearance allows front wedge to get under opponents

### Electronics & Battery

- [ ] Malenki Nano mount platform sized to PCB (~30mm x 20mm)
- [ ] Battery compartment has 2mm clearance on all sides
- [ ] Battery is positioned low and centered for optimal center of gravity
- [ ] Wire routing paths are clear (away from weapon)

### Structural Integrity

- [ ] Chassis walls are at least 2-3mm thick
- [ ] Motor mounts are reinforced (ribs or thicker walls)
- [ ] No thin sections that will break on first impact
- [ ] All screw holes are sized correctly for fasteners

---

## Export Preparation

### STL File Naming

Use clear, descriptive names for all exported files:

- `Chassis.stl`
- `Weapon-Drum.stl` (or `Weapon-Bar.stl`, `Weapon-Disc.stl`)
- `Weapon-Hub-TPU.stl`
- `Wheel-Left.stl` and `Wheel-Right.stl` (or just `Wheel.stl` if identical)
- `Armor-Panel-Front.stl` (if applicable)
- Any other printable parts

### Export Settings

When exporting each STL file:

1. Right-click part → Export
2. Choose **STL** format
3. Set units to **Millimeters**
4. Use **fine resolution** for curved surfaces (0.01mm tolerance)
5. Verify file size is reasonable (not corrupted)

### Orientation Notes

Create a simple document listing recommended print orientation for each part:

| Part | Orientation | Reason |
|------|-------------|--------|
| Chassis | Open side up | Horizontal impact forces |
| Weapon | Flat on bed | Layers perpendicular to edge impacts |
| Wheels | Hub side down | Axle hole vertical through layers |
| Weapon hub (TPU) | Flat | Uniform layer distribution |

---

## Teacher Handoff

### What to Give Your Teacher

1. **Onshape Document Link** (share with view/comment access)
2. **All STL Files** (in a clearly labeled folder)
3. **Orientation Notes** (table above or simple text file)
4. **Material Assignments**:
   - Chassis: PLA+ at 40-60% infill
   - Weapon: PLA+ at 80-100% infill
   - Weapon Hub: TPU 95A
   - Wheels: PLA+ or TPU
   - Armor (if any): TPU or PETG

### What Happens Next

Your teacher will:

1. Review your design for safety and printability
2. Load STL files into slicer software
3. Apply optimized print settings for combat robots
4. Schedule printing (chassis first, then weapon, then smaller parts)
5. Monitor prints and handle any issues
6. Notify you when parts are complete for assembly

**Estimated print time for all parts:** 8-16 hours total (varies by design complexity)

**While parts are printing:** Review the [Chassis Assembly](assembly-and-wiring.md) module to prepare for the build phase.

---

## Common Design Review Issues

If your teacher finds issues during review, these are the most common:

| Issue | Fix |
|-------|-----|
| Over weight (>550g) | Reduce wall thickness, hollow out more, reduce infill (model solid, print hollow) |
| Under weight (<450g) | Add armor panels, increase weapon mass, thicken structural elements |
| Weapon unbalanced | Adjust geometry so center of mass is exactly on spin axis |
| Motor pockets too tight | Add 0.2mm tolerance (pocket should be 12.2mm x 10.2mm for N20) |
| Thin walls (<2mm) | Thicken vulnerable areas, add ribs for reinforcement |
| No weapon clearance | Increase gap between weapon and chassis to 2mm minimum |

---

## Next Phase

Once your teacher approves the design and starts printing:

**Phase 6b (Teacher):** 3D Printing Execution (8-16 hours print time)

**Phase 7 (You):** [Chassis Assembly](assembly-and-wiring.md) — You'll assemble the printed parts into a complete mechanical chassis
