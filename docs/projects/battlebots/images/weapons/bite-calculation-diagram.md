# Bite Calculation Diagram

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


BITE FORMULA:
Bite (mm) = (Forward Travel × 360°) / (Tooth Spacing Angle)

Where:
- Forward Travel = Robot's drive speed × contact time
- Tooth Spacing Angle = 360° / Number of Teeth


EXAMPLE CALCULATION:
- 2-tooth weapon → 180° spacing
- Robot moves 5mm forward during hit
- Bite = (5mm × 360°) / 180° = 10mm

GOOD BITE RANGE:
- Minimum: 3mm (can grab armor)
- Optimal: 5-10mm (solid hit)
- Too much: >15mm (weapon bogs down)
```

**Key Insight:**
More teeth = less bite depth. For beetleweight bots, 2-4 teeth is optimal for good bite without excessive drag.
