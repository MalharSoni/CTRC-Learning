# Design Handbook

The **Design Handbook** is a reference guide for VEX V5 robot design principles. Unlike the Learning Course (which is sequential and exercise-based), the handbook is organized by topic for quick lookup. Use it as a companion to the course or as a standalone reference.

---

## How to Use This Handbook

- **During the Learning Course** — Reference handbook pages for deeper explanations of topics covered in exercises
- **During design season** — Look up specifications, design guidelines, and best practices
- **During build** — Check manufacturing considerations and material properties
- **For design reviews** — Use the checklists and guidelines to evaluate your designs

---

## Sections

### :material-cube-outline: [Structure](structure/index.md)
The physical framework of your robot — frame types, materials, joining methods, and structural analysis basics.

Topics include:

- Frame materials (aluminum tube, channel, extrusion)
- Joining methods (rivets, bolts, welding, adhesive)
- Structural concepts (box construction, triangulation, gusseting)
- Bellypan design
- Bumper mounting

### :material-cog-transfer: [Power Transmission](power-transmission/index.md)
How to transfer power from motors to mechanisms — gears, belts, chains, motors, and gearboxes.

Topics include:

- Motor specifications and selection
- Gear types and gear ratios
- Belt systems (HTD, GT2)
- Chain systems (#25, #35)
- Gearbox types (planetary, spur, worm)
- Shaft and bearing selection

### :material-robot-industrial: [Mechanisms](mechanisms/index.md)
Common VEX mechanism types, their design principles, and how to choose between them.

Topics include:

- Intakes (roller, pneumatic, passive)
- Shooters (flywheel, catapult, puncher)
- Elevators (cascade, continuous, screw-driven)
- Arms (single-joint, multi-joint, virtual four-bar)
- Climbers (hook, winch, elevator, telescoping)
- Swerve drive modules

---

## Design Principles

These principles apply to every aspect of VEX V5 robot design:

### 1. Simplicity
The simplest mechanism that meets the requirements is almost always the best. Complexity adds weight, failure modes, and build time. Before adding a feature, ask: "Does this directly help us win matches?"

### 2. Robustness
Your robot will be hit, dropped, and subjected to forces you didn't plan for. Design with safety margins. Use proven materials and methods. Test under realistic conditions.

### 3. Serviceability
Parts will break at competition. Design so that critical components can be replaced quickly — ideally in under 10 minutes between matches. Avoid designs where replacing one part requires disassembling half the robot.

### 4. Manufacturability
A brilliant design that your team can't build is worthless. Design within your team's capabilities — tools, skills, and time. If you don't have a CNC router, don't design parts that require one.

### 5. Weight Consciousness
Every robot has a weight limit. Every mechanism has a weight budget. Track weight throughout the design process, not just at the end. The best designs achieve their goals with the minimum possible weight.

!!! tip "The 80/20 Rule"
    80% of your robot's performance comes from 20% of its features. Identify the features that matter most for winning matches and invest your time and weight there. Don't spend 40 hours designing a feature that earns 2 match points when you could spend that time improving a feature worth 20 points.

---

## Quick Reference

| Topic | Page |
|-------|------|
| Common bolt sizes for VEX | [Structure](structure/index.md) |
| Motor specs (NEO, Falcon, etc.) | [Power Transmission](power-transmission/index.md) |
| Belt sizing calculator | [Power Transmission](power-transmission/index.md) |
| Mechanism selection guide | [Mechanisms](mechanisms/index.md) |
| Material properties | [Structure](structure/index.md) |
