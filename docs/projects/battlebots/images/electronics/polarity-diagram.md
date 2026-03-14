# Battery Polarity Diagram - CRITICAL SAFETY

```
✅ CORRECT POLARITY:

    Battery               Malenki Nano
    ┌─────────┐           ┌──────────┐
    │   2S    │           │          │
    │  LiPo   │  Red  ──→ │ BAT+     │
    │  7.4V   │           │          │
    │         │  Black ──→│ BAT-     │
    └─────────┘           │          │
                          └──────────┘

    Result: ESC powers on normally
    Status: ✓ SAFE


❌ REVERSED POLARITY:

    Battery               Malenki Nano
    ┌─────────┐           ┌──────────┐
    │   2S    │           │          │
    │  LiPo   │  Red  ──→ │ BAT-     │  ⚠️ WRONG!
    │  7.4V   │           │          │
    │         │  Black ──→│ BAT+     │  ⚠️ WRONG!
    └─────────┘           │          │
                          └──────────┘

    Result: 💥 INSTANT DAMAGE
    Status: ✗ ESC DESTROYED


🔍 HOW TO CHECK POLARITY:

1. BATTERY CONNECTOR:
   ┌─────────┐
   │  ○   ○  │
   │ Red Black│  ← Standard XT30 connector
   └─────────┘

2. MALENKI NANO PADS:
   Look for + and - symbols printed on PCB

3. USE MULTIMETER:
   - Set to DC voltage
   - Red probe → suspected positive
   - Black probe → suspected negative
   - Should read ~7.4V (not -7.4V)


🛡️ PROTECTION TIP:

Mark your connectors with colored tape:
- Red tape on positive wire
- Black tape on negative wire
- Label with "+" and "-" symbols

**NEVER ASSUME POLARITY**
Always verify with multimeter before first connection!
```

**Reality Check:**
Most beetleweight builders destroy at least one ESC during their learning process.
DON'T be that person - check twice, connect once!
