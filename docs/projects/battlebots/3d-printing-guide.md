# 3D Printing Guide

Your CAD model is done — now it's time to turn those STL files into real, physical parts. 3D printing is one of the most powerful tools in small combat robotics: you can design a part in the morning, print it in the afternoon, and test it in the arena by evening. When it breaks, you print another one.

This guide covers material selection, print settings, orientation strategy, and common issues for combat robot parts.

---

## Learning Objectives

By completing this module, you will be able to:

- Choose appropriate materials for each part (PLA+ for structure, TPU for armor/hubs, PETG for balance)
- Explain why print orientation affects part strength (layer lines and impact direction)
- Orient parts correctly to maximize strength against expected forces
- Identify and troubleshoot common print issues (warping, stringing, poor adhesion)
- Estimate print times and plan printing schedules
- Prepare STL files for teacher handoff with correct orientation notes

---

## Time Required

1-2 hours (reading and preparation; actual print time is 8-16 hours total for all parts)

---

## Materials for Combat Robots

Not all 3D printing filaments are created equal. For a combat robot, you need materials that can survive impacts, vibration, and the occasional direct hit from a spinning weapon. Here are the three materials you'll use.

### PLA+ (Polylactic Acid Plus)

**Best for:** Chassis, structural frames, motor mounts, weapons

| Property | Rating |
|----------|--------|
| **Rigidity** | High |
| **Impact resistance** | Moderate |
| **Print difficulty** | Easy |
| **Cost** | Low |
| **Temperature resistance** | Low (softens at ~60°C) |

PLA+ is the workhorse material. It's easy to print, dimensionally accurate, and rigid. The "+" variants (eSUN PLA+, Polymaker PLA Pro, etc.) add toughness compared to standard PLA.

**How it fails:** PLA+ cracks and shatters on hard impacts rather than deforming. Think of it like glass — strong until it breaks, then it breaks dramatically. This is fine for structural parts because you can print replacements quickly.

### TPU 95A (Thermoplastic Polyurethane)

**Best for:** Armor panels, weapon hubs, bumpers, wheel treads

| Property | Rating |
|----------|--------|
| **Rigidity** | Low (flexible) |
| **Impact resistance** | Very High |
| **Print difficulty** | Hard |
| **Cost** | Moderate |
| **Temperature resistance** | Moderate |

TPU is a flexible filament that absorbs impacts instead of cracking. It bends, stretches, and bounces back. This makes it ideal for parts that take direct hits — armor panels, weapon hubs (to protect the motor), and bumpers.

**How it fails:** TPU doesn't shatter — it tears or stretches permanently when pushed beyond its limits. It also deforms under sustained load, so it's bad for structural components that need to stay rigid.

!!! warning "TPU is Harder to Print"
    TPU requires slower print speeds (20-30mm/s), a direct drive extruder works best (Bowden tubes struggle with flexible filament), and retraction settings need careful tuning. If you've never printed TPU before, do a test print first.

### PETG (Polyethylene Terephthalate Glycol)

**Best for:** Parts that need a balance of strength and toughness

| Property | Rating |
|----------|--------|
| **Rigidity** | Moderate-High |
| **Impact resistance** | High |
| **Print difficulty** | Moderate |
| **Cost** | Low-Moderate |
| **Temperature resistance** | Moderate (~80°C) |

PETG sits between PLA+ and TPU. It's stiffer than TPU but tougher than PLA+. It bends before breaking, which can be an advantage in combat — a PETG part might survive a hit that would shatter PLA+.

**How it fails:** PETG deforms and bends rather than cracking cleanly. Deformed parts may not fit together properly after a fight.

---

## Recommended Material Assignments

| Part | Material | Why |
|------|----------|-----|
| **Chassis / frame** | PLA+ | Rigid, dimensionally accurate |
| **Weapon (blade/drum)** | PLA+ at 80-100% infill | Maximum rigidity and mass |
| **Weapon hub** | TPU 95A | Absorbs impact shock, protects motor |
| **Armor panels** | TPU 95A or PETG | Survives direct hits without shattering |
| **Motor mounts** | PLA+ | Needs precise dimensions |
| **Wheels** | PLA+ or TPU | PLA+ for rigidity, TPU for grip |
| **Wedge / front plow** | PETG or TPU | Takes repeated frontal impacts |
| **Battery tray** | PLA+ | Structural, needs precise fit |

---

## Print Settings

### PLA+ Settings (Structural Parts)

| Setting | Value | Notes |
|---------|-------|-------|
| **Layer height** | 0.2mm | Good balance of strength and speed |
| **Infill** | 40-60% | For chassis and mounts |
| **Infill pattern** | Gyroid or Grid | Gyroid is strongest in all directions |
| **Wall perimeters** | 4+ | This is the most important strength setting |
| **Top/bottom layers** | 5+ | Prevents puncture from above/below |
| **Print speed** | 50-60mm/s | Standard for PLA+ |
| **Nozzle temp** | 210-220°C | Check your filament's recommendation |
| **Bed temp** | 60°C | Standard for PLA+ |

!!! note "Print Settings"
    Teacher will provide optimized slicer profiles for all materials. Focus on understanding layer orientation principles below.

### PLA+ Settings (Weapon — Maximum Strength)

| Setting | Value | Notes |
|---------|-------|-------|
| **Layer height** | 0.2mm | |
| **Infill** | 80-100% | Maximum mass and rigidity |
| **Infill pattern** | Rectilinear / Grid | Dense and strong |
| **Wall perimeters** | 5+ | Maximum shell strength |
| **Top/bottom layers** | 6+ | |
| **Print speed** | 40-50mm/s | Slower for better adhesion |

!!! note "Print Settings"
    Teacher will provide optimized weapon slicer profiles. Your focus: export STLs and understand orientation.

### TPU 95A Settings

| Setting | Value | Notes |
|---------|-------|-------|
| **Layer height** | 0.2mm | |
| **Infill** | 40-60% | Depends on desired flexibility |
| **Wall perimeters** | 3-4 | |
| **Print speed** | 20-30mm/s | SLOW — TPU needs time |
| **Retraction** | Minimal or disabled | Flexible filament jams with heavy retraction |
| **Nozzle temp** | 220-235°C | Higher than PLA |
| **Bed temp** | 50-60°C | |

!!! note "Print Settings"
    Teacher will provide TPU slicer profiles. TPU is challenging to print - focus on correct part orientation.

---

## Print Orientation

**Layer orientation is the single most important decision after material choice.** 3D printed parts are weakest in the Z direction (between layers). A part that's strong when hit from the side might snap like a cracker when hit from the top.

### Understanding Layer Lines and Strength

When 3D printing, each layer bonds to the previous layer. This bond is the weakest point. Look at this comparison:

![3D printed parts comparison showing horizontal holes with visible layer lines at stress points versus vertical holes with solid material distribution - vertical orientation is significantly stronger](images/printing/hole-orientation-comparison.jpg)

**Key Principle:** Orient parts so that impact forces don't try to pull layers apart.

- **Red (BAD):** Horizontal holes have weak points where layer lines concentrate stress around the hole
- **Green (GOOD):** Vertical holes have solid lines of plastic surrounding them, distributing forces evenly

This is especially critical for motor mounts, weapon axles, and chassis stress points.

### Rules of Thumb

1. **Identify the primary impact direction** — which face will get hit?
2. **Orient layers perpendicular to the impact** — layers should be stacked in the direction of the force, not across it
3. **Never have layer lines parallel to the impact surface** — this is the weakest orientation

### Orientation Examples

| Part | Best Orientation | Why |
|------|-----------------|-----|
| **Weapon bar** | Flat on bed, widest face down | Impact is on the edges, layers stack through the thickness |
| **Chassis** | Open-side up (like a tray) | Forces are mostly horizontal, layers stack vertically |
| **Armor panel** | Flat on bed | Impact hits the face, layers are perpendicular to the hit |
| **Wheel** | Axle vertical (hub side down) | Rotational forces are distributed across layers |
| **Motor mounts** | Holes running vertically through layers | See diagram above - vertical holes are strongest |

!!! tip "Quick Check Before Printing"
    Before you slice a part, ask yourself: "If this part gets hit, which direction will the force come from?" Then orient the part so layers are stacked in that direction, not perpendicular to it.

---

## Common Print Issues

### Warping

**Symptom:** Corners of the print lift off the bed, part curves.

**Fix:**

- Use a heated bed (60°C for PLA+)
- Apply glue stick or hairspray to the bed
- Add a brim (5-10mm) in slicer settings
- Ensure no drafts near the printer

### Stringing

**Symptom:** Thin strings of filament between separate features.

**Fix:**

- Increase retraction distance (1-2mm for direct drive, 4-6mm for Bowden)
- Increase retraction speed
- Lower nozzle temperature by 5°C
- Note: Stringing is cosmetic — it doesn't affect strength. Clean it with a heat gun or knife.

### Poor Layer Adhesion

**Symptom:** Layers separate easily, part is weak between layers.

**Fix:**

- Increase nozzle temperature by 5-10°C
- Slow down print speed
- Increase flow rate slightly
- Ensure the nozzle isn't partially clogged

### Elephant's Foot

**Symptom:** First layer is squished wider than the rest of the part.

**Fix:**

- Increase Z offset slightly (nozzle is too close to bed)
- Reduce first layer flow rate
- Add a small chamfer to the bottom edge in your CAD model

---

## Test Before You Fight

!!! tip "Print a Test Piece First"
    Before you print your entire robot, print a small test piece in the same material and settings. Then try to break it.

    - Bend it — does it flex or snap?
    - Hit it with a hammer — does it crack or absorb the impact?
    - Twist it — do the layers delaminate?

    If it breaks too easily, increase wall perimeters, increase infill, or switch materials. It's much cheaper to learn this on a test piece than on your finished robot.

---

## Print Time Estimates

| Part | Approximate Print Time |
|------|----------------------|
| Chassis (unibody) | 3-6 hours |
| Weapon (drum/bar) | 1-3 hours |
| Wheels (x2) | 30-60 min each |
| Armor panels | 1-2 hours each |
| Weapon hub (TPU) | 30-60 min |
| **Total (all parts)** | **8-16 hours** |

Plan your print schedule. Start the longest prints (chassis) first, overnight if possible. Print smaller parts during the day when you can monitor them.

---

## Post-Processing

After printing:

1. **Remove supports** carefully (use flush cutters)
2. **Clean up stringing** with a heat gun or knife
3. **Test-fit all parts** before assembly — if holes are too tight, drill them out slightly. If too loose, add a layer of tape or print a tighter version
4. **Sand mating surfaces** if needed for better fit
5. **Label your parts** — write on them with a marker so you know what goes where

---

## Success Criteria

You are ready to move on when you can:

- [ ] Assign correct materials to each part (PLA+ for chassis, TPU for weapon hub, etc.)
- [ ] Explain why holes should be oriented vertically for maximum strength
- [ ] Orient your weapon for printing (flat on bed, layers perpendicular to impact)
- [ ] Estimate total print time for all parts (8-16 hours range)
- [ ] Hand off STL files to teacher with orientation recommendations
- [ ] Identify 3 common print issues and their fixes

---

## Next Step

Hand your STL files to your teacher for printing with optimized settings. While parts are printing, you can review the [Chassis Assembly](assembly-and-wiring.md) module to prepare for the build phase.
