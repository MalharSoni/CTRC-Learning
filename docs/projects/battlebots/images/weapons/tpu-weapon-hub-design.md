# TPU Weapon Hub Design Guide

## Cross-Section View

```
              Weapon (press-fit or keyed)
                      ↓
          ┌───────────────────────┐
          │                       │
          │   ╱╲  Hex Socket  ╱╲  │ ← TPU Hub (flexible)
          │  ╱  ╲           ╱  ╲ │   Material: TPU 95A
          │ ╱    ╲─────────╱    ╲│   Wall: 3-4mm thick
          │╱                     ╱
          ├──────────●───────────┤ ← Set screw (M3, locks to motor shaft)
          │╲         ↑          ╱│
          │ ╲    Threaded     ╱ │   Print: 100% infill
          │  ╲   M3 hole    ╱  │
          │   ╲            ╱   │
          └────╲──────────╱────┘
                ╲        ╱
                 ╲──────╱
                     │
                Motor Shaft
                (3mm typical)


DIMENSIONS (Example for N20 motor):
┌─────────────────────────────────┐
│  Outer Diameter: 20-25mm        │
│  Inner Diameter: 3mm (shaft)    │
│  Height: 10-15mm                │
│  Wall Thickness: 3-4mm          │
│  Hex Socket: 8-12mm across flats│
└─────────────────────────────────┘
```

---

## Top View - Keyed Connection Options

### Option A: Hexagon Socket (Most Common)

```
          Weapon sits on hub
                 ↓
     ┌─────────────────────┐
     │                     │
     │      ╔═══════╗      │ ← Hex cutout (prevents weapon slip)
     │      ║       ║      │   Weapon has matching hex boss
     │      ║   ●   ║      │ ← Center hole for motor shaft
     │      ║       ║      │
     │      ╚═══════╝      │
     │                     │
     └─────────────────────┘
          TPU Hub Body
         (Circular outer)


     Typical hex sizes:
     - Antweight (150g): 8mm across flats
     - Beetleweight (3lb): 10-12mm across flats
```

### Option B: D-Profile / Flat Cutout

```
     ┌─────────────────────┐
     │                     │
     │      ╔═══╗          │ ← D-shaped cutout
     │      ║   ─          │   One flat prevents rotation
     │      ║   ●          │   Simpler to model than hex
     │      ║   ─          │
     │      ╚═══╝          │
     │                     │
     └─────────────────────┘
```

### Option 3: Square Socket

```
     ┌─────────────────────┐
     │                     │
     │      ┌───────┐      │ ← Square cutout
     │      │       │      │   Good for square weapon bosses
     │      │   ●   │      │
     │      │       │      │
     │      └───────┘      │
     │                     │
     └─────────────────────┘
```

---

## Assembly Sequence

```
STEP 1: Install hub on motor
    ┌──────┐
    │ Hub  │
    │  ●───┼─── Set screw (tighten with hex key)
    └──┬───┘
       │
    ───┴─── Motor shaft


STEP 2: Add weapon on top
    ┌────────────┐
    │   Weapon   │ ← Hex boss fits into hub socket
    ├────────────┤
    │    Hub     │
    │     ●──────┼─── Set screw (already tightened)
    └────┬───────┘
         │
    ─────┴──── Motor


STEP 3: (Optional) Add top retaining screw
    ┌────────────┐
    │   Weapon   │
    │      ●─────┼─── Small screw through weapon into hub
    ├────────────┤   (Prevents weapon from lifting off)
    │    Hub     │
    └────┬───────┘
         │
    ─────┴──── Motor
```

---

## Why Use TPU for Weapon Hubs?

### Shock Absorption Comparison

```
RIGID HUB (Aluminum):
    Impact → Weapon → Rigid Hub → FULL FORCE → Motor Gearbox
                                                     ↓
                                              GEARS STRIP ❌


TPU HUB (Flexible):
    Impact → Weapon → TPU Hub → ABSORBS 30-50% → Motor Gearbox
                         ↓
                    Flexes & dissipates
                    energy as deformation
                                              GEARS SURVIVE ✅
```

### Weapon Slip Protection

```
NORMAL HIT (manageable):
    Weapon ──── Locked to hub ──── Spins motor
            (TPU transmits torque)


HUGE HIT (would break motor):
    Weapon ──╳─ Slips on hub ──── Motor protected
            (TPU deforms, weapon
             temporarily decouples)
                    ↓
            Weapon freewheels for 0.1s,
            then re-engages when TPU
            returns to shape
```

---

## 3D Printing Guidelines

### Material Selection

```
TPU HARDNESS SCALE:
┌────────────────────────────────────────┐
│ 85A  - Very soft (too flexible)        │
│ 90A  - Soft (possible for light bots)  │
│ 95A  - IDEAL ★ (standard for weapons)  │
│ 98A  - Firm (still has flex)           │
│ 100A - Very firm (less shock absorption)│
└────────────────────────────────────────┘

Recommended: TPU 95A
  Brand examples:
  - NinjaFlex (SainSmart)
  - TPU 95A (eSun)
  - Filaflex 95A
```

### Print Orientation

```
❌ WRONG - Horizontal Print:        ✅ CORRECT - Vertical Print:

  ═══════════                         │ │ │ │
  ═══════════ ← Layer lines           │ │ │ │ ← Layer lines
  ═══════════   parallel to stress    │ │ │ │   perpendicular
  ═══════════                         │ │ │ │   to stress
     ╱──╲                             ╱───╲
    │ ●  │                           │  ●  │
     ╲──╱                             ╲───╱

  Weak! Layers can separate          Strong! Forces compress layers
```

### Slicer Settings

```
┌───────────────────────────────────────┐
│ Layer Height: 0.2mm                   │
│ Infill: 100% (no voids!)              │
│ Wall Lines: 3-4 (3-4mm total)         │
│ Print Speed: 20-30mm/s (slow!)        │
│ Retraction: 2-3mm (prevent stringing) │
│ Temperature: 220-235°C (material dep.)│
│ Bed: 50-60°C                          │
└───────────────────────────────────────┘
```

---

## Common Problems & Solutions

### Problem 1: Hub Too Tight on Motor Shaft

```
Issue: Can't push hub onto shaft

Solutions:
✓ Sand inner hole with fine sandpaper (320 grit)
✓ Slightly scale up inner diameter in CAD (+0.1mm)
✓ Use heat gun to warm TPU, install while warm
```

### Problem 2: Weapon Slips Too Easily

```
Issue: Weapon freewheels constantly

Solutions:
✓ Increase hex socket depth
✓ Add retaining screw through weapon into hub
✓ Use 98A TPU instead of 95A (firmer)
✓ Print with more walls (5-6 instead of 3-4)
```

### Problem 3: Hub Tears at Set Screw

```
Issue: TPU splits where set screw presses

Solutions:
✓ Use wider set screw (M4 instead of M3)
✓ Add metal washer between screw and TPU
✓ Use brass threaded insert for set screw hole
```

---

## Alternative: Hybrid Design (Advanced)

```
ALUMINUM HUB + O-RING SHOCK ABSORPTION:

    ┌────────────┐
    │   Weapon   │
    ├────────────┤
    │  Aluminum  │ ← Rigid hub (easy to machine)
    │    Hub     │
    ├────────────┤
    │ ○ ○ ○ ○ ○  │ ← O-rings (shock absorption)
    ├────────────┤
    │  Aluminum  │ ← Lower hub piece
    │   Collar   │
    └────┬───────┘
         │
    ─────┴──── Motor

Pros: Precise tolerances, replaceable o-rings
Cons: Heavier, requires machining skills
```

---

## Weight Comparison

```
┌──────────────────────────────────────┐
│ TPU Hub (3D printed):    5-15g       │
│ Aluminum Hub (machined): 15-30g      │
│ Hybrid (Al + O-rings):   20-35g      │
└──────────────────────────────────────┘

For antweight (500g total):
  TPU saves 10-20g vs. aluminum
  → Extra weight for armor or battery
```

---

## Design Checklist

✅ **Before Printing:**
- [ ] Hub outer diameter fits weapon inner diameter
- [ ] Hex socket matches weapon boss size
- [ ] Set screw hole is threaded (M3 typical)
- [ ] Wall thickness is 3-4mm minimum
- [ ] Inner hole fits motor shaft (test with calipers)
- [ ] Print orientation is vertical
- [ ] Slicer set to 100% infill

✅ **After Printing:**
- [ ] Test fit on motor shaft (should slide on with light force)
- [ ] Tighten set screw, verify hub doesn't slip
- [ ] Test fit weapon on hub (hex should engage)
- [ ] Check for layer separation or voids
- [ ] Verify weight is within budget

---

**Sources:**
- RobotCombatWiki: "3D Printing" section (TPU applications)
- Combat Robotics community practices
- Repeat Robotics weapon hub design principles

**License:** Educational use - diagrams created for CTRC Learning curriculum
