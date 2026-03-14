# Malenki Nano Complete Wiring Diagram

```
                    MALENKI NANO ESC
        ┌────────────────────────────────────┐
        │                                    │
        │  ┌──────────┐      ┌──────────┐  │
        │  │  Motor   │      │  Motor   │  │
        │  │ Driver 1 │      │ Driver 2 │  │
        │  └──────────┘      └──────────┘  │
        │                                    │
        │       RX        ARM       LED      │
        │       ○○        ○○        ○○       │
        └───────┬┬────────┬┬────────┬┬───────┘
                ││        ││        ││
                ││        ││        └┴─── Optional LED indicator
                ││        ││
                ││        └┴───── Arming switch (optional)
                ││
                └┴───── Receiver signal wires


RECEIVER CONNECTION (3-wire servo cable):
┌─────────────────────────────────────────────┐
│  FROM RECEIVER    →    TO MALENKI NANO      │
├─────────────────────────────────────────────┤
│  Ch1 Signal (white) →  RX Pin 1 (Signal)    │
│  Ch2 Signal (white) →  RX Pin 2 (Signal)    │
│  Ground (black)     →  RX Pin 3 (Ground)    │
│  5V+ (red)          →  RX Pin 4 (5V)        │
└─────────────────────────────────────────────┘


MOTOR CONNECTIONS:
┌─────────────────────────────────────────────┐
│  LEFT DRIVE MOTORS:                         │
│  ○ M1+  ──── Red wire from left motor       │
│  ○ M1-  ──── Black wire from left motor     │
│                                             │
│  RIGHT DRIVE MOTORS:                        │
│  ○ M2+  ──── Red wire from right motor      │
│  ○ M2-  ──── Black wire from right motor    │
└─────────────────────────────────────────────┘


BATTERY CONNECTION:
┌─────────────────────────────────────────────┐
│  2S LiPo Battery (7.4V)                     │
│                                             │
│  BAT+  ──── Red wire from battery           │
│  BAT-  ──── Black wire from battery         │
│                                             │
│  ⚠️  POLARITY CRITICAL!                     │
│  Reverse polarity = INSTANT DAMAGE          │
└─────────────────────────────────────────────┘


COMPLETE SYSTEM OVERVIEW:

     ┌─────────┐
     │ Battery │ (2S LiPo 7.4V)
     └────┬────┘
          │ (BAT+/BAT-)
          ▼
    ┌──────────────┐
    │  MALENKI     │◄──── Receiver signal
    │  NANO ESC    │      (Ch1, Ch2, GND, 5V)
    └──┬────────┬──┘
       │        │
       ▼        ▼
    [M1+/M1-][M2+/M2-]
       │        │
       ▼        ▼
    Left     Right
    Motors   Motors
```

**Color Code Standard:**
- **Red** = Positive (+)
- **Black** = Negative (-)
- **White/Yellow** = Signal

**Common Mistake:**
Reversing motor polarity won't damage anything, but robot will drive backwards!
Solution: Swap the + and - wires on that motor.
