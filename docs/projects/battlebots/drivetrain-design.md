# Drivetrain Design (N20 Motors)

Your drivetrain is how your robot moves around the arena. A combat robot that can't drive effectively can't land hits, can't dodge, and can't win. In this competition, we use **N20 3V 300RPM brushed DC motors** — small, affordable, and perfectly suited for 500g class robots.

---

## Learning Objectives

By completing this module, you will be able to:

- Identify the key specifications of N20 3V 300RPM motors
- Design a 2WD skid-steer layout with proper motor placement
- Size wheels appropriately (25-35mm diameter) for torque and speed balance
- Create motor mounts that secure motors without crushing them
- Design wheel hubs with D-shaft connections to prevent slipping
- Allocate weight budget (100-150g) for the complete drivetrain

---

## Time Required

1-2 hours

---

## N20 Motor Specifications

The N20 is a micro geared motor widely used in small combat robots, educational robotics, and hobby projects. The "N20" refers to the motor housing size (20mm long body).

| Specification | Value |
|--------------|-------|
| **Motor type** | Brushed DC with integrated metal gearbox |
| **Rated voltage** | 3V |
| **No-load speed** | ~300 RPM (at 3V) |
| **Shaft diameter** | 3mm (D-shaft) |
| **Weight** | ~10-12g per motor |
| **Size** | 12mm x 10mm x 25mm (body + gearbox) |

### Why N20 Motors?

- **Integrated gearbox**: The planetary gearbox is built into the motor, so you don't need external gears. The motor outputs usable torque directly.
- **Small and light**: Two N20 motors weigh about 20-24g total — leaving more weight budget for your weapon.
- **3V operation**: Runs well from a single LiPo cell or can be powered from the Malenki Nano's regulated output.
- **300 RPM output**: Fast enough for an agile 500g robot with properly sized wheels.

!!! example "📷 Photo Needed"
    N20 3V 300RPM motor close-up: gearbox, body, terminals, D-shaft visible

!!! warning "N20 Motors Are Fragile"
    The internal gearbox uses tiny metal gears. Dropping the motor, over-tightening mounts, or subjecting it to severe impact shock can strip the gears. Handle them carefully, mount them securely but gently, and accept that you may need to replace one after a hard fight.

---

## Drive Layout

### 2WD (Two-Wheel Drive)

The standard layout for 500g class combat robots is **2WD** — one N20 motor per side, controlling one wheel each.

```
    [Front / Weapon End]

    ┌──────────────────┐
    │                  │
    │    ┌──────┐      │
    │    │ Nano │      │
    │    └──────┘      │
    │                  │
  ◯ │  [Motor L]  [Motor R] │ ◯
    │                  │
    └──────────────────┘

    ◯ = Wheel
```

**Advantages of 2WD:**

- Simplest layout — fewer parts, less weight, less to break
- **Skid steering**: turning left and right is done by running the two motors at different speeds (or opposite directions)
- Easy to wire to the Malenki Nano (CH1/CH2 drive channels)

### Motor Placement

Where you mount your drive motors affects handling:

| Placement | Behavior | Best For |
|-----------|----------|----------|
| **Rear-mounted** | Rear wheels drive, front skids/slides. Good straight-line stability. | Vertical spinners (weapon at front) |
| **Center-mounted** | Pivots around the center. Very agile, can spin in place. | Horizontal spinners, general use |
| **Front-mounted** | Front wheels drive, rear drags. Less common. | Undercutters (weapon at rear) |

For most designs, **rear-mounted** is the best starting point. Your weapon is at the front, your wheels are at the back, and your robot drives weapon-first into opponents.

---

## Wheel Options

### 3D Printed Wheels

The simplest option — design and print your own wheels in Onshape.

**Design guidelines:**

- **Diameter**: 25-35mm (larger = faster top speed, smaller = more torque)
- **Width**: 10-15mm for good traction
- **Hub**: D-shaped hole matching the N20 3mm D-shaft (or use a set screw)
- **Tread**: Add a groove pattern or wrap with rubber band / silicone tubing for grip
- **Material**: PLA+ for rigidity, or TPU for grip (TPU wheels absorb impacts too)

### Tyler Wheels

"Tyler wheels" are a popular option in the small combat robot community — pre-made wheels designed for N20 motors. If available, they save you design time and offer proven performance.

### Silicone Tire Wrapping

For maximum traction, wrap your wheels with silicone tubing or rubber O-rings:

1. Design your wheel with a groove/channel around the circumference
2. Stretch silicone tubing or O-rings into the groove
3. The silicone grips the arena floor much better than bare plastic

!!! tip "Traction Wins Fights"
    A robot with good traction can push opponents, control positioning, and drive weapon-first consistently. Invest in good wheels and grippy tires — they make a bigger difference than most builders expect.

---

## Sizing Within the Footprint

Your entire robot must fit within a **6" x 6" (152mm x 152mm)** footprint. Here's how to allocate space for the drivetrain:

| Component | Typical Space |
|-----------|--------------|
| **N20 motor body** | 25mm long x 12mm wide per motor |
| **Wheel** | 25-35mm diameter, 10-15mm wide |
| **Motor mount** | 5-10mm additional around motor |
| **Total per side** | ~35-50mm deep from the chassis edge |

**Layout tip:** Position your motors so the wheels are at or near the chassis edge. This maximizes the wheelbase (distance between left and right wheels) and improves stability.

---

## Weight Budget for Drivetrain

Target **100-150g** for your complete drivetrain, including:

| Component | Typical Weight |
|-----------|---------------|
| 2x N20 motors | 20-24g |
| 2x Wheels | 10-20g |
| 2x Motor mounts | 5-15g |
| Wiring/connectors | 5-10g |
| **Total** | **40-70g** |

This is one of the lighter subsystems. The remaining weight budget (up to 150g) gives you room for a **skid plate**, **front wedge**, or **additional structural support** — all of which improve your ground game and durability.

---

## Motor Mounts

Your motor mounts are critical — they must hold the N20 motors securely without crushing them.

### 3D Printed Motor Mounts

Design guidelines:

- **Friction fit / press fit**: Design the mount hole 0.1-0.2mm smaller than the motor body. The motor presses in and is held by friction.
- **Clamping**: Design a two-piece clamp with screws. More secure, but heavier.
- **Integrated**: Build the motor mount directly into the chassis wall. Simplest and lightest.

**Orientation:** Mount the motor so the shaft points outward through the chassis wall, directly to the wheel. This is the simplest and most reliable setup.

!!! warning "Don't Over-Tighten"
    If using a clamping mount, do NOT over-tighten the screws. The N20 motor body is soft metal — crushing it will strip the internal gears or damage the motor. Snug is enough. If the motor slips during a fight, add a small piece of grip tape or a drop of CA glue to the mount surface.

---

## Direct Drive

For 500g class robots, **direct drive** is the standard approach:

- The N20 motor shaft connects **directly** to the wheel
- No external gears, belts, or chains
- The motor's built-in gearbox provides all the gear reduction you need

This is the simplest, lightest, and most reliable drivetrain setup. Don't overcomplicate it.

### Shaft Connection

The N20 has a **3mm D-shaft** — a round shaft with one flat side. Your wheel hub must match this shape:

- **D-shaft hole**: Design a 3mm hole with a flat matching the D-shaft. The flat prevents the wheel from spinning freely on the shaft.
- **Set screw**: Add a set screw hole perpendicular to the shaft for extra security
- **Glue**: In a pinch, a drop of CA (super glue) on the shaft before pressing the wheel on works — but makes future disassembly harder

??? info "D-Shaft Interface Diagram"

    **How the N20 motor shaft connects to your wheel:**

    ```
    FRONT VIEW (looking at shaft end):

         Standard Round Shaft        D-Shaft (N20 Motor)
         ┌──────────────┐           ┌──────────────┐
         │              │           │              │
         │      ○○      │           │    ○○        │
         │              │           │   ╱  ╲       │
         │              │           │  │    │      │
         └──────────────┘           └──│────│──────┘
                                       Flat
         Spins freely in hole       edge


    SIDE VIEW (shaft profile):

    Round Shaft:
        ═══════════════════
        (No flat - just circular)

    D-Shaft:
        ═══════════════════
               ▬▬▬▬▬▬
        (Flat machined on one side)


    WHY D-SHAFT?

    Without flat (round):         With flat (D-shaft):
    ┌────────┐                   ┌────────┐
    │  Wheel │ spins on          │  Wheel │ locks to
    │   ○○   │ shaft             │   ○╱   │ shaft
    └────────┘                   └────────┘
      Slips!                       Grips!


    3D PRINTED WHEEL SOCKET:

    Top View:                    Cross-Section:
    ┌────────────┐              ┌────────────┐
    │     ○╱     │              │    ╱╲      │
    │    /  \    │              │   /  \     │
    │   |    |   │              │  |    |    │
    │    \  /    │              │   \  /     │
    │     ○╱     │              │    ╲/      │
    └────────────┘              └────────────┘
      D-shaped                   Flat edge matches
      pocket                     motor shaft flat
    ```

    **N20 MOTOR SHAFT SPECIFICATIONS:**

    - Diameter: 3.0mm
    - Flat width: 2.5mm (D-cut depth)
    - Shaft length: 9mm
    - Material: Steel

    **CAD DESIGN TIP:**

    When modeling wheel socket in Onshape:

    1. Sketch circle: 3.0mm diameter
    2. Sketch rectangle across circle (width: 3.0mm, height: 0.5mm cut depth)
    3. Extrude pocket: 4mm deep
    4. Add 0.1mm clearance for easy fit

    Result: Wheel locks onto shaft, no slipping!

    !!! tip "Common 3D Printing Issue"
        If D-pocket prints too tight, use 3.1mm diameter instead of 3.0mm for easier assembly.

---

## Drivetrain Design Checklist

Before finalizing your drivetrain design:

- [ ] Two N20 motors positioned symmetrically
- [ ] Wheels sized appropriately (25-35mm diameter)
- [ ] Motor mounts secure but not crushing
- [ ] Wheels have grip (texture, silicone, or rubber)
- [ ] Everything fits within the 6" x 6" footprint
- [ ] Weight is under 150g for the complete drivetrain
- [ ] Shaft connection is secure (D-shaft + set screw or glue)
- [ ] Ground clearance allows front wedge to get under opponents

---

## Success Criteria

You are ready to move on when you can:

- [ ] State the N20 motor specifications (3V, 300RPM, 3mm D-shaft)
- [ ] Complete the Drivetrain Design Checklist above
- [ ] Sketch your motor placement (rear, center, or front mounted)
- [ ] Design wheels with correct D-shaft hubs (3mm with flat)
- [ ] Estimate total drivetrain weight and confirm it's under 150g
- [ ] Explain why direct drive (no external gears) is preferred for this weight class

---

## Next Step

With your weapon concept and drivetrain layout planned, it's time to **[CAD Your Bot](cad-your-bot.md)** in Onshape and bring the full design together.
