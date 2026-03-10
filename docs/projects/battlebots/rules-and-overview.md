# Rules & Overview

Before you design anything, you need to know the rules. This page covers everything about the CTRC in-house BattleBots competition format, weight and size limits, allowed weapon types, safety requirements, and how matches work.

Read this entire page. Every rule exists for a reason.

---

## Robot Specifications

### Weight Limit

| Parameter | Limit |
|-----------|-------|
| **Target weight** | ~500g (approximately 1.1 lbs) |
| **Enforcement** | Flexible for in-house competition |

The 500g target is a guideline, not a hard cutoff. For our in-house competition, we allow some flexibility — but robots significantly over this weight will be asked to shed grams. The closer you are to 500g, the more competitive your design.

!!! tip "Weight Budget Matters"
    Every gram you put into armor is a gram you can't put into your weapon. Every gram in your weapon is a gram you can't put into your drivetrain. Managing your weight budget is the single most important design skill in combat robotics.

### Size Limit

| Parameter | Limit |
|-----------|-------|
| **Maximum footprint** | 6" x 6" (152mm x 152mm) |
| **Height** | No specific limit, but keep it reasonable |

Your robot must fit within a 6" x 6" square when viewed from above. There is no height restriction, but taller robots have a higher center of gravity and are easier to flip — so keep it low.

---

## Allowed Weapon Types

This competition is **spinners only**. We want hits, sparks, and carnage.

| Weapon Type | Allowed? |
|-------------|----------|
| **Vertical spinners** (drums, eggbeaters, discs) | :material-check: Yes |
| **Horizontal spinners** (midcutters, undercutters, bars) | :material-check: Yes |
| **Lifters** | :material-close: No |
| **Wedge-only (no active weapon)** | :material-close: No |
| **Flippers** | :material-close: No |
| **Hammers / axes** | :material-close: No |
| **Flame / liquid / electrical weapons** | :material-close: No |
| **Entanglement devices** | :material-close: No |

!!! info "Why Spinners Only?"
    Spinners teach you the most about energy storage, balance, motor selection, and the consequences of design tradeoffs. They're also the most exciting to watch. Every robot in the arena will have a spinning weapon — that's what makes the fights interesting.

---

## Safety Requirements

### Weapon Lock Mechanism

Every robot **must** have a physical weapon lock — a pin, clip, or bracket that prevents the weapon from spinning when outside the arena. This is not optional.

- The weapon lock must be easy to insert and remove
- It must reliably prevent the weapon from moving
- Design it into your CAD model — don't add it as an afterthought


!!! example "📷 Photo Needed"
    Physical weapon lock (pin/clip/bracket) installed on a combat robot


### LiPo Battery Safety

- Batteries must be charged using a proper LiPo balance charger
- Always charge in a **fireproof LiPo bag**, never unattended
- Store batteries at storage voltage (3.8V per cell) when not in use
- If a battery is **puffy, dented, or damaged**, stop using it immediately and notify a mentor
- Never puncture, crush, or short-circuit a LiPo battery

!!! danger "SPINNING WEAPONS MUST NEVER BE POWERED ON OUTSIDE THE ARENA"
    No exceptions. No "quick tests." No "just checking if it works." If your weapon is spinning and it's not inside the enclosed arena or test box, you will be disqualified and may be removed from the competition. This rule protects you and everyone around you.

### Failsafe

Your Malenki Nano must be configured with a proper failsafe so that if the radio signal is lost, the weapon motor stops immediately. See the [Malenki Nano Setup](malenki-nano-setup.md) module for instructions.

---

## Arena

All fights take place in the **CTRC in-house arena** — an enclosed fighting space designed to contain debris from spinner impacts. The arena has:

- Polycarbonate walls to contain flying parts
- A closing lid/door for full enclosure during fights
- A flat fighting surface

Robots are placed in the arena by hand before the lid is closed. Drivers operate from outside the arena.

---

## Match Format

### Match Structure

| Parameter | Value |
|-----------|-------|
| **Match duration** | 2 minutes |
| **KO countout** | 10 seconds |
| **Format** | Head-to-head, single elimination or round robin (announced before event) |

### How Matches Work

1. Both drivers confirm their robots are ready
2. Robots are placed in the arena, weapon locks are removed
3. Arena is sealed
4. Referee calls "3... 2... 1... FIGHT!"
5. Drivers control their robots for up to 2 minutes
6. Match ends when time expires or a KO occurs

### Knockout (KO)

If a robot is unable to show **controlled translational movement** (driving forward, backward, or turning), the referee begins a **10-second countdown**. If the robot cannot move by the end of the count, it loses by KO.

- A robot spinning in place but not driving is NOT showing controlled movement
- A robot inverted (flipped over) that can still drive is NOT knocked out
- A robot whose weapon stopped but can still drive is NOT knocked out

### Judges' Decision

If both robots survive the full 2 minutes, judges score the match based on three criteria:

| Criteria | Weight | What It Means |
|----------|--------|---------------|
| **Damage** | 5 points | Visible damage inflicted on the opponent — dents, cracks, removed parts, disabled systems |
| **Aggression** | 3 points | Actively attacking the opponent, initiating contact, weapon-first driving |
| **Control** | 3 points | Dictating the fight — positioning, pushing, cornering, strategic driving |

The robot with the higher total score wins the judges' decision.

!!! tip "How to Win"
    The best strategy is simple: hit them hard, hit them often, and don't let them hit you. Damage scores the most points. A robot that deals massive damage will almost always win the decision.

---

## Tournament Conduct

- **Sportsmanship** is mandatory. Respect your opponents, the referees, and the arena
- **No intentional damage outside the arena** — don't swing your robot at people or property
- **Repair time** between matches will be announced (typically 5-10 minutes)
- **Late arrivals** to a scheduled match result in a forfeit
- **Mentor override** — mentors can disqualify any robot they deem unsafe at any time

---

## Pre-Fight Checklist

Before every match, confirm:

- [ ] Battery is charged
- [ ] Weapon lock is installed (remove only when robot is in sealed arena)
- [ ] Failsafe is working (tested before the event)
- [ ] All fasteners are tight
- [ ] Robot is at or near the weight limit
- [ ] Radio transmitter has fresh batteries
- [ ] You know which direction your robot drives (test before the event!)

---

## Next Step

Now that you know the rules, learn about the different **[Robot Archetypes](robot-archetypes.md)** you can build.
