# Robot Power-On Sequence Flowchart

```
┌─────────────────────────────────────────────┐
│  SAFE POWER-ON PROCEDURE                    │
└─────────────────────────────────────────────┘

    ┌────────────────────────────────┐
    │ 1. WEAPON LOCK INSTALLED       │
    │    ✓ Pin/zip-tie in place      │
    │    ✓ Weapon cannot spin        │
    └──────────────┬─────────────────┘
                   │
                   ▼
    ┌────────────────────────────────┐
    │ 2. TRANSMITTER ON              │
    │    ✓ Turn on controller FIRST  │
    │    ✓ Check for bind light      │
    └──────────────┬─────────────────┘
                   │
                   ▼
    ┌────────────────────────────────┐
    │ 3. VERIFY RECEIVER OFF         │
    │    ✓ Robot has no power yet    │
    │    ✓ Battery disconnected      │
    └──────────────┬─────────────────┘
                   │
                   ▼
    ┌────────────────────────────────┐
    │ 4. CONNECT BATTERY             │
    │    ✓ Plug in main battery      │
    │    ✓ Listen for Malenki beeps  │
    └──────────────┬─────────────────┘
                   │
                   ▼
    ┌────────────────────────────────┐
    │ 5. VERIFY FAILSAFE WORKS       │
    │    ✓ Turn transmitter OFF      │
    │    ✓ Weapon must NOT spin      │
    │    ✓ Turn transmitter back ON  │
    └──────────────┬─────────────────┘
                   │
                   ▼
    ┌────────────────────────────────┐
    │ 6. TEST CONTROLS               │
    │    ✓ Drive forward/reverse     │
    │    ✓ Verify steering works     │
    │    ✓ DO NOT activate weapon    │
    └──────────────┬─────────────────┘
                   │
                   ▼
    ┌────────────────────────────────┐
    │ 7. REMOVE WEAPON LOCK (ARENA)  │
    │    ⚠️  ONLY in sealed arena    │
    │    ⚠️  NEVER outside arena     │
    │    ✓ Now ready for combat      │
    └────────────────────────────────┘
```

**CRITICAL RULE:**
**ALWAYS** power transmitter ON before connecting robot battery.
If receiver powers on first, weapon may activate unexpectedly!
