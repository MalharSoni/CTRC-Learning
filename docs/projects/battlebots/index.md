# BattleBots Project

Design, build, and fight a **~500g combat robot** with spinning weapons. This is the CTRC in-house BattleBots competition — your chance to turn CAD skills, 3D printing knowledge, and electrical wiring into a machine built for destruction.

---

## The Goal

Build a radio-controlled combat robot that fits within a 6" x 6" footprint, weighs approximately 500g, and features a spinning weapon (vertical or horizontal). Then fight it against your teammates' bots in the CTRC arena.

This project covers the **full engineering process**: design, CAD, fabrication, wiring, testing, and competition.

---

## What You'll Learn

By completing the BattleBots project, you will:

- [x] Design a complete robot system under strict weight and size constraints
- [x] Make engineering tradeoffs between weapon power, armor, and drivetrain
- [x] CAD a full robot in Onshape with proper mass analysis
- [x] 3D print structural and functional parts using PLA+, TPU, and PETG
- [x] Wire and configure a Malenki Nano all-in-one control board
- [x] Set up failsafes and follow strict safety protocols for spinning weapons
- [x] Test, iterate, and compete

---

## Prerequisites

Before starting this project, you must have completed:

- [x] **V5 Foundation Unit 1** (Drivetrain Mastery) — minimum requirement
- [x] Basic Onshape CAD skills (sketching, part modeling, assemblies)
- [x] Familiarity with 3D printing (or willingness to learn fast)

!!! tip "Recommended"
    Foundation Unit 3 (Onshape CAD) will make the design phase significantly smoother. If you haven't completed it, expect to spend extra time on the CAD step.

---

## Project Phases

| Phase | Module | Estimated Time |
|-------|--------|---------------|
| 1 | [Rules & Overview](rules-and-overview.md) | 30 min |
| 2 | [Robot Archetypes](robot-archetypes.md) | 45 min |
| 3 | [Weapon Design](weapon-design.md) | 1-2 hours |
| 4 | [Drivetrain (N20 Motors)](drivetrain-design.md) | 1-2 hours |
| 5 | [CAD Your Bot](cad-your-bot.md) | 4-8 hours |
| 6 | [3D Printing Guide](3d-printing-guide.md) | 2-4 hours (plus print time) |
| 7 | [Malenki Nano Setup](malenki-nano-setup.md) | 1-2 hours |
| 8 | [Assembly & Wiring](assembly-and-wiring.md) | 2-3 hours |
| 9 | [Testing & Safety](testing-and-safety.md) | 1-2 hours |
| **Total** | | **13-24 hours** |

---

## Key Components

| Component | Purpose | Notes |
|-----------|---------|-------|
| **N20 3V 300RPM motors** | Drive motors | Brushed DC with integrated gearbox |
| **Brushless motor** | Weapon motor | Powers the spinner |
| **Malenki Nano** | Control board | Receiver + 2x brushed ESC + 1x brushless ESC |
| **LiPo battery** | Power source | Requires safe handling procedures |
| **3D printed parts** | Chassis, armor, weapon | PLA+, TPU, PETG |
| **Radio transmitter** | Driver control | Binds to Malenki Nano receiver |

---

## Reference Resources

This project draws from the following community resources:

- **"Beetleweights for Dummies"** guide — comprehensive beetleweight building reference
- **Duke Combat Robotics wiki** — design principles and build guides
- **MakerMuse BattleBot tutorial** — Malenki Nano wiring and setup video

!!! warning "Safety First"
    Combat robots — even small ones — have spinning weapons that can cause serious injury. Every safety rule in this guide exists because someone got hurt when it wasn't followed. Read the [Testing & Safety](testing-and-safety.md) module before you power anything on.

---

## Ready?

Start with the **[Rules & Overview](rules-and-overview.md)** to understand what you're building within, then work through each module in order.

Good luck. Build something terrifying.
