# Weapon Design

Your weapon is the heart of your combat robot. A well-designed spinner stores enough energy to send opponents flying, survives repeated impacts, and doesn't tear your own robot apart in the process.

This page covers the physics of spinning weapons, how to design for maximum effectiveness, and the engineering tradeoffs you'll need to make.

---

## Learning Objectives

By completing this module, you will be able to:

- Explain how kinetic energy in spinning weapons is calculated (KE = ½Iω²)
- Define "bite" and explain why it matters for weapon effectiveness
- Check weapon balance using Onshape mass properties
- Choose appropriate materials for weapons (PLA+, PETG, TPU for hub)
- Allocate weight budget between weapon, chassis, drivetrain, and electronics

---

## Time Required

1-2 hours

---

## Spinner Physics

### Kinetic Energy

The energy stored in a spinning weapon is governed by this equation:

$$
KE = \frac{1}{2} I \omega^2
$$

Where:

- **KE** = kinetic energy (Joules) — how hard you hit
- **I** = moment of inertia (kg·m²) — determined by mass and how far that mass is from the spin axis
- **&omega;** = angular velocity (radians/second) — how fast it spins

**Key insight:** Energy scales with the **square** of speed. Doubling your weapon's RPM gives you **4x** the energy. This is why brushless motors (which spin very fast) are used for weapons.

### Moment of Inertia

The moment of inertia depends on the **mass distribution** of your weapon. Mass that is farther from the center of rotation contributes more to energy storage.

| Weapon Shape | Moment of Inertia | Energy Storage |
|-------------|-------------------|----------------|
| Solid disc | Moderate | Moderate |
| Ring / shell | High | High |
| Bar / blade | Moderate-High | Moderate-High |
| Drum | Moderate | Moderate |

**Practical implication:** A weapon with more mass at the edges (like a ring or bar tips) stores more energy than one with mass at the center (like a solid disc), for the same total weight.

??? info "Mass Distribution Comparison"

    **How mass placement affects energy storage:**

    ```
    SOLID DISC              RING                    BAR
    (Low MOI)               (High MOI)              (Highest MOI)

        ████                 ████                    ████
      ████████             ██    ██                  ██
     ██████████           ██  ○  ██                  ██
     ██████████           ██      ██                 ██
      ████████             ██    ██                  ██
        ████                 ████                    ████

    Mass centered          Mass at edges           Mass at extremes
    near axis              of disc                 (furthest from axis)

    MOI = LOW              MOI = MEDIUM            MOI = HIGH
    Easy to spin up        Moderate spin-up        Slow spin-up
    Less stored energy     Good energy storage     Maximum energy storage
    ```

    **Moment of Inertia (MOI) Formula:** MOI = m × r²

    Where: m = mass, r = distance from rotation axis

    **Design Trade-off:**

    - **Solid Disc**: Spins up fast, less kinetic energy per hit
    - **Ring**: Balanced approach, most common for beginners
    - **Bar**: Maximum damage per hit, but requires powerful motor

    **For Beetleweight Bots:** Most successful designs use a thin ring or bar configuration to maximize energy storage while keeping the weapon lightweight.

---

## Bite

**Bite** is the distance the weapon's impactor travels forward into the opponent between successive hits. It determines how deeply your weapon cuts into the target.

$$
\text{Bite} = \frac{\text{Closing speed (robot + opponent)}}{\text{Weapon RPM}} \times \frac{1}{\text{Number of teeth}}
$$

### Why Bite Matters

- **Too little bite** (many teeth, high RPM): The weapon skims across the surface, acting more like a grinder. Lots of sparks, but shallow damage.
- **Too much bite** (few teeth, low RPM): The weapon digs in deep but can stall on impact or rip itself out of the opponent violently.
- **Good bite** (balanced): The weapon cuts in, delivers energy, and ejects the opponent.

??? info "Bite Calculation Diagram"

    **Understanding how deep your weapon cuts:**

    ```
                        WEAPON DISC ROTATION
                             ↓
            ═══════════════════════════════════
            ║                                 ║
            ║    ┌─────────────────────────┐ ║
            ║    │  Tooth 1        Tooth 2 │ ║  ← Weapon disc with 2 teeth
            ║    │     ▲              ▲    │ ║
            ║    └─────┼──────────────┼────┘ ║
            ║          │              │      ║
            ║          │←─ Spacing ──→│      ║
            ║                                 ║
            ╚═══════════════════════════════════

                        BITE GEOMETRY
                             ↓
                     ┌──────────────┐
                     │    TOOTH     │
                     └───┬──────────┘
                         │
                         │ ← Bite depth
                         │
            ═════════════╧═════════════  ← Opponent armor
            ─────────────→
            Forward travel distance
    ```

    **BITE FORMULA:**
    Bite (mm) = (Forward Travel × 360°) / (Tooth Spacing Angle)

    Where:

    - Forward Travel = Robot's drive speed × contact time
    - Tooth Spacing Angle = 360° / Number of Teeth

    **EXAMPLE CALCULATION:**

    - 2-tooth weapon → 180° spacing
    - Robot moves 5mm forward during hit
    - Bite = (5mm × 360°) / 180° = 10mm

    **GOOD BITE RANGE:**

    - Minimum: 3mm (can grab armor)
    - Optimal: 5-10mm (solid hit)
    - Too much: >15mm (weapon bogs down)

    **Key Insight:** More teeth = less bite depth. For beetleweight bots, 2-4 teeth is optimal for good bite without excessive drag.

### Bite Design Guidelines for 500g Robots

| Parameter | Recommendation |
|-----------|---------------|
| **Number of teeth/impactors** | 1-2 for bars, 2-4 for drums |
| **Tooth height** | 3-8mm above the weapon body |
| **Tooth shape** | Angled ramp (not a blunt wall) for better engagement |

!!! tip "A well-designed weapon that's lighter will beat a heavy weapon that vibrates and breaks."
    Focus on balance and bite before you focus on raw mass. A perfectly balanced 50g weapon spinning at high RPM will outperform a 100g weapon that wobbles and self-destructs.

---

## Energy Storage vs. Spin-Up Time

There's a fundamental tradeoff between how much energy your weapon stores and how fast it gets there.

- **Heavier weapons** store more energy but spin up slower
- **Lighter weapons** reach full speed quickly but store less energy
- **Larger diameter** weapons store more energy (mass farther from center) but have more gyroscopic effects

For a 500g robot, your weapon will likely be **30-80g** depending on your design. Here's a rough guide:

| Weapon Weight | Spin-Up Time | Energy Storage | Best For |
|--------------|-------------|----------------|----------|
| 30-40g | Fast (1-2 sec) | Lower | Eggbeaters, small bars |
| 40-60g | Medium (2-3 sec) | Medium | Drums, mid-size bars |
| 60-80g | Slow (3-5 sec) | High | Large discs, heavy bars |

---

## Weapon Balance

An unbalanced weapon vibrates. Vibration wastes energy, shakes your robot apart, wears out bearings, and reduces weapon life. **Balance your weapon.**

### How to Check Balance in CAD

1. In Onshape, select your weapon part
2. Right-click → **Mass properties**
3. Check the **center of mass** — it should be exactly on the spin axis
4. If it's off-center, adjust the geometry until it's centered

!!! example "🖥️ Screenshot Needed"
    Onshape Mass Properties dialog showing center of mass on weapon part

### How to Check Balance Physically

1. Mount your weapon on a shaft or axle
2. Hold the shaft horizontal with two fingers
3. Let the weapon hang freely — if it always rotates to the same position, it's unbalanced
4. Add or remove material until it stays in any position

!!! warning "Vibration Destroys Robots"
    An unbalanced weapon at high RPM will shake your entire robot violently. This can crack 3D printed parts, loosen wiring, disconnect batteries, and destroy bearings — all before you even fight anyone. Always balance your weapon.

---

## Material Selection

### 3D Printed Weapons (PLA+)

For a 500g class robot, 3D printed weapons are common and effective. PLA+ can handle the energy levels involved if designed correctly.

| Material | Pros | Cons |
|----------|------|------|
| **PLA+** | Easy to print, rigid, cheap | Brittle on big impacts, can shatter |
| **PETG** | Tougher than PLA, some flex | Harder to print precisely |
| **TPU** | Very impact resistant | Too flexible for weapon teeth |

**Recommendation:** Print weapons in **PLA+ at high infill (80-100%)** with **4+ wall perimeters**. If the weapon breaks, print another one — that's the advantage of 3D printing.

### Metal Weapons

If you have access to metal cutting tools or a laser cutter:

- **Aluminum** — lightweight, strong, easy to cut
- **Steel** — very hard, holds up to repeated impacts, but heavy
- **Hardened tool steel** — ideal for impactors/teeth if available

For most CTRC students, 3D printed weapons are the way to go. Save metal for the teeth/impactors if you want extra durability.

---

## Minimum Thickness

Your weapon needs to survive repeated impacts. Here are minimum thickness guidelines for 3D printed PLA+ weapons:

| Weapon Type | Minimum Thickness | Notes |
|-------------|-------------------|-------|
| Disc/blade | 6mm | Thicker near the hub |
| Bar | 8mm | Width provides strength |
| Drum walls | 3-4mm | With internal ribs |
| Teeth/impactors | 5mm+ | Thickest point of impact |

---

## TPU Weapon Hub

The **weapon hub** connects your weapon to the motor shaft. This is a critical component — it transfers all the motor's torque to the weapon, and it absorbs all the impact shock from hits.

### Why TPU?

A rigid hub (PLA+) transfers impact shock directly to the motor shaft and bearings. Over time (or after one big hit), this can:

- Strip the motor shaft set screw
- Crack the motor mount
- Destroy motor bearings
- Snap the shaft

A **TPU (flexible) hub** acts as a shock absorber. It deforms slightly on impact, cushioning the motor from the worst of the forces.

### Hub Design Guidelines

- Print in **TPU 95A** (the most common flexible filament)
- **Wall thickness**: 3-4mm minimum
- **Set screw or press-fit** to motor shaft
- **Keyed or hex connection** to weapon (so the weapon doesn't slip)
- Test fitment before final assembly — TPU dimensions can be slightly off

!!! example "📷 Photo Needed"
    TPU weapon hub close-up: flexible material, set screw hole, keyed connection

---

## Weight Budget

Your weapon is one part of a ~500g system. Here's a typical weight budget breakdown:

| Component | Weight Range | % of Total |
|-----------|-------------|------------|
| **Chassis/frame** | 100-150g | 20-30% |
| **Drivetrain** (motors, wheels) | 100-150g | 20-30% |
| **Weapon** (blade + hub + motor) | 100-150g | 20-30% |
| **Electronics** (Nano, battery, wires) | 80-120g | 16-24% |
| **Armor/extras** | 20-50g | 4-10% |

The tradeoff is real:

- More weapon weight = harder hits, but slower and less protected
- More armor weight = survives longer, but hits softer
- More drivetrain weight = faster and more agile, but less everything else

!!! info "Design for Your Strategy"
    If you want to be a knockout machine, invest in weapon weight. If you want to survive to a judges' decision, invest in armor and drivetrain. If you want control, invest in drivetrain. There's no single right answer — it depends on how you want to fight.

---

## Success Criteria

You are ready to move on when you can:

- [ ] Calculate or estimate kinetic energy for a weapon given mass, radius, and RPM
- [ ] Explain why doubling RPM gives 4x the energy (quadratic relationship)
- [ ] Define "bite" in your own words and why it affects weapon performance
- [ ] Check center of mass in Onshape mass properties to verify weapon balance
- [ ] Choose materials for your weapon (PLA+ for blade, TPU for hub)
- [ ] Estimate weapon weight and allocate remaining weight to other systems

---

## Next Step

Now that you understand weapon physics, move on to **[Drivetrain Design](drivetrain-design.md)** to learn about N20 motors and how to make your robot move.
