# Power Transmission

Power transmission is the system of components that transfer energy from motors to mechanisms. This handbook page covers motors, gears, belts, chains, shafts, bearings, and gearboxes — everything you need to get your robot moving.

---

![Power Transmission](../../img/handbook/power-transmission.svg)

## Motors

### Common FRC Motors

| Motor | Stall Torque | Free Speed | Power | Weight | Notes |
|-------|-------------|-----------|-------|--------|-------|
| **REV NEO** | 3.28 N-m | 5,676 RPM | 406 W | 0.94 lb | Most popular brushless motor |
| **REV NEO 550** | 0.97 N-m | 11,000 RPM | 279 W | 0.31 lb | Compact, high speed |
| **CTRE Falcon 500** | 4.69 N-m | 6,380 RPM | 783 W | 1.10 lb | Integrated controller |
| **CTRE Kraken X60** | 7.09 N-m | 6,000 RPM | 1110 W | 1.29 lb | High power |
| **CIM** | 2.41 N-m | 5,330 RPM | 337 W | 2.82 lb | Legacy, still legal |
| **775pro** | 0.71 N-m | 18,730 RPM | 347 W | 0.80 lb | Very high speed |

### Motor Selection Guidelines

- **Drivetrain:** NEO, Falcon, or Kraken (high torque, moderate speed)
- **Intake rollers:** NEO 550 (light, high speed)
- **Arm/elevator:** NEO or Kraken (high torque)
- **Shooter flywheel:** NEO or Falcon (high power, fast recovery)
- **Deploy mechanisms:** NEO 550 (light, sufficient torque with gearbox)

!!! tip "Use Brushless Motors"
    Brushless motors (NEO, Falcon, Kraken) are more efficient, more powerful, and more reliable than brushed motors (CIM, 775pro). Unless you have a specific reason, default to brushless.

---

## Gears

### Gear Types Used in FRC

**Spur Gears** — Straight-cut teeth, the most common type. Used in custom gearboxes and gear reductions.

**Bevel Gears** — Teeth on a cone shape, used to change the axis of rotation by 90°.

**Worm Gears** — A screw-like gear meshing with a standard gear. Very high ratios, inherently non-back-drivable.

**Planetary Gears** — Compact gear sets that achieve high ratios in a small package. Used in MAXPlanetary, VersaPlanetary, and other COTS gearboxes.

### Gear Specifications

The most important specification is **Diametral Pitch (DP)** — the number of teeth per inch of pitch diameter:

```
Pitch Diameter = Tooth Count / Diametral Pitch
```

| DP | Tooth Size | Typical Use |
|----|-----------|------------|
| **20 DP** | Standard | Most FRC gearboxes, spur gears |
| **32 DP** | Smaller | Lighter-duty applications |

### Center-to-Center Distance

```
C-C = (Teeth₁ + Teeth₂) / (2 × DP)
```

Example: 12T and 60T gears at 20 DP:
```
C-C = (12 + 60) / (2 × 20) = 72/40 = 1.800"
```

---

## Belts

### HTD Belt Specifications

| Parameter | Common Values |
|-----------|--------------|
| Tooth pitch | 5mm (standard FRC) |
| Belt width | 9mm (light duty), 15mm (standard) |
| Material | Neoprene with fiberglass cord |

### Pulley Sizing

```
Pitch Diameter = (Tooth Count × Pitch) / π
```

Common pulley sizes: 18T, 24T, 30T, 36T, 48T, 60T

### Belt Length Selection
Belt lengths come in standard sizes (e.g., 200mm, 225mm, 250mm, 300mm, etc.). You must choose a center-to-center distance that corresponds to a standard belt length. Use a belt calculator.

!!! warning "Belts Can't Be Cut to Length"
    Unlike chain, HTD belts come in fixed lengths. You must design your center-to-center distance to match an available belt length. Plan this before finalizing your design.

---

## Chain

### Chain Specifications

| Chain | Pitch | Tensile Strength | Weight | Typical Use |
|-------|-------|-----------------|--------|------------|
| **#25** | 0.250" | 875 lbs | Light | Most FRC applications |
| **#35** | 0.375" | 2,100 lbs | Medium | Heavy-duty, drivetrain |

### Sprocket Sizing

```
Pitch Diameter = Pitch / sin(180° / Tooth Count)
```

### Chain Length
Chain can be shortened or lengthened by adding/removing links. Use **half-links** for odd-number lengths or **offset links** for fine adjustment.

---

## Shafts

### Common Shaft Types

| Shaft | Size | Material | Use |
|-------|------|----------|-----|
| **1/2" Hex** | 0.500" across flats | Steel | Standard FRC shaft, power transmission |
| **3/8" Hex** | 0.375" across flats | Steel | Lighter applications, rollers |
| **1/2" Round** | 0.500" diameter | Steel | Dead axle pivots, guide shafts |
| **3/4" Round** | 0.750" diameter | Steel/Aluminum | Medium dead axle pivots |
| **1" Round** | 1.000" diameter | Steel/Aluminum | Heavy dead axle pivots |
| **Thunderhex** | 0.500" hex | Steel | 1/2" hex with journal ends for round bearings |

!!! tip "Thunderhex is the Best of Both Worlds"
    Thunderhex shaft has hex cross-section in the middle (for sprockets and gears) and round journal ends (for round bearings). This eliminates the need for hex bearings, which are less common and more expensive.

---

## Bearings

### Common FRC Bearings

| Bearing Type | Bore | OD | Use |
|-------------|------|-----|-----|
| Hex bearing | 1/2" hex | 1.125" | Hex shaft support |
| Round bearing | 1/2" round | 1.125" | Round shaft / Thunderhex journals |
| Round bearing | 3/4" round | 1.375" | Dead axle pivots |
| Round bearing | 1" round | Various | Large dead axle pivots |
| V-groove bearing | Various | Various | Elevator linear motion |

### Bearing Mounting

- **Press fit** — Bearing pressed into a precision hole (hole slightly smaller than bearing OD)
- **Snap ring** — Bearing sits in a counterbore, retained by a snap ring
- **Flanged bearing** — Bearing has a flange that sits against the plate surface
- **Clamping** — Bearing block clamps around the bearing

---

## Gearboxes (COTS)

### Popular FRC Gearboxes

| Gearbox | Type | Ratios Available | Motor Compatibility |
|---------|------|-----------------|-------------------|
| **MAXPlanetary** | Planetary | 3:1, 4:1, 5:1, 9:1 (stackable) | NEO, NEO 550 |
| **VersaPlanetary** | Planetary | 3:1, 4:1, 5:1, 7:1, 9:1, 10:1 (stackable) | Multiple |
| **UltraPlanetary** | Planetary | 3:1, 4:1, 5:1 (stackable) | NEO 550 |
| **Sport Gearboxes** | Spur | Various | CIM, NEO |

Planetary stages can be **stacked** to achieve higher ratios:

```
Total Ratio = Stage 1 × Stage 2 × Stage 3
Example: 5:1 × 5:1 × 4:1 = 100:1
```

!!! note "Don't Exceed 3 Planetary Stages"
    Each planetary stage adds friction and reduces efficiency. Three stages is the practical maximum. If you need more than ~100:1, add an external stage (belt, chain, or spur gears) after the gearbox.

---

## Gear Ratio Selection Guide

| Application | Typical Ratio | Priority |
|------------|--------------|---------|
| Swerve drive | 6:1 to 8:1 | Speed with adequate torque |
| Tank drive | 8:1 to 12:1 | Balance of speed and pushing |
| Intake rollers | 1:1 to 3:1 | Maximum speed |
| Shooter flywheel | 1:1 to 2:1 | Maximum speed |
| Arm pivot | 50:1 to 200:1 | Maximum torque |
| Elevator | 10:1 to 30:1 | Torque with reasonable speed |
| Wrist | 25:1 to 50:1 | Moderate torque |
| Climber | 30:1 to 80:1 | High torque |

Use a motor calculator (like ReCalc or the AMB Design Calculator) to verify that your chosen motor and ratio meet the torque and speed requirements for your specific application.
