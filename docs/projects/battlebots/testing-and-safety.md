# Testing & Safety

!!! warning "Teacher Module"
    This module is for **teachers only**. Teachers conduct all safety testing and verify robots are competition-ready.

Your robot is assembled. Before it enters the arena, you must test every system and verify every safety measure. This page covers LiPo battery safety, the mandatory power-on/power-off procedure, drive and weapon testing, and the pre-fight checklist.

**Read this entire page. Every rule here exists because someone got hurt when it wasn't followed.**

---

## Learning Objectives

By completing this module, you will be able to:

- Explain and enforce LiPo battery safety (charging, storage, damage detection)
- Execute the correct power-on and power-off sequences for combat robots
- Test drive systems for correct direction, speed, and control
- Test weapon systems safely (in arena/test box, with weapon lock, with failsafe verified)
- Conduct failsafe tests before every event
- Complete the pre-fight checklist for all safety, mechanical, and operational items
- Handle emergency situations (runaway robot, battery damage, injury)

---

## Time Required

1-2 hours (initial testing per robot, plus pre-event checks)

---

## LiPo Battery Safety

LiPo (Lithium Polymer) batteries store a lot of energy in a small package — which is why they're great for combat robots. But that same energy density makes them dangerous when mishandled. A damaged or improperly charged LiPo can **catch fire or explode**.

### Charging Rules

| Rule | Details |
|------|---------|
| **Use a LiPo balance charger** | Only charge with a charger designed for LiPo batteries. Never use a phone charger, USB port, or random DC adapter. |
| **Always use a fireproof bag** | Place the battery inside a LiPo-safe bag during charging. Every time. No exceptions. |
| **Never charge unattended** | Stay in the room while your battery is charging. If you need to leave, unplug it. |
| **Charge on a non-flammable surface** | Concrete floor, metal tray, or ceramic tile. Not on carpet, wood desks, or near paper. |
| **Use the correct settings** | Set your charger to the correct cell count (1S or 2S) and charge rate (usually 1C). |

!!! example "📷 Photo Needed"
    LiPo in fireproof bag connected to balance charger on non-flammable surface

### Storage Rules

| Rule | Details |
|------|---------|
| **Store at storage voltage** | 3.8V per cell. Most balance chargers have a "storage" mode. Use it. |
| **Store in a fireproof bag** | Always. Even when not charging. |
| **Store at room temperature** | Don't leave batteries in hot cars, direct sunlight, or freezing conditions. |
| **Don't leave fully charged** | A fully charged LiPo left sitting for weeks degrades faster and is more volatile. Storage charge it. |

### Usage Rules

| Rule | Details |
|------|---------|
| **Never over-discharge** | Don't run the battery below 3.3V per cell under load. Use a voltage alarm buzzer on the battery, or monitor with a multimeter between fights. |
| **Inspect before every use** | Look for puffing, dents, punctures, or damaged wires. |
| **If puffy, STOP** | A puffy/swollen battery is damaged and can catch fire. Stop using it immediately. Place it in a fireproof bag and notify a mentor. |
| **If hot, STOP** | A battery that's warm after normal use is okay. A battery that's HOT is not. Let it cool completely before charging. |
| **Never puncture or crush** | If the arena fight damages your battery, do NOT continue using it. |

!!! example "📷 Photo Needed"
    Healthy LiPo vs puffy/swollen battery side by side

!!! danger "What to Do If a LiPo Catches Fire"
    1. Do NOT use water — LiPo fires are chemical fires
    2. Use a Class D fire extinguisher or sand to smother the flames
    3. If the fire is small, place the battery in a metal container or on concrete and let it burn out
    4. Evacuate the area — LiPo fires produce toxic fumes
    5. Call for help immediately
    6. Tell a mentor

---

## Power-On / Power-Off Procedure

This procedure must be followed **every single time** you power on your robot. The order matters. Skipping steps or doing them out of order creates dangerous situations.

### Power-On Sequence (Before Testing or Fighting)

Follow this exact order:

| Step | Action | Why |
|------|--------|-----|
| 1 | **Turn on the transmitter** | Ensures the radio signal is broadcasting before the robot listens for it |
| 2 | **Place the transmitter aside** (sticks centered) | Prevents accidental stick input while you handle the robot |
| 3 | **Place the robot in the test area or arena** | Robot should already be in a safe location before power |
| 4 | **Connect the battery / turn the robot ON** | Robot powers up and connects to the transmitter signal |
| 5 | **Remove the weapon lock** | Only after the robot is in the arena and powered on |
| 6 | **Close/seal the arena** | Enclose the robot before any weapon testing |
| 7 | **Pick up the transmitter and test** | Now you can drive and spin up the weapon |

??? info "Power-On Sequence Flowchart"

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

    !!! danger "CRITICAL RULE"
        **ALWAYS** power transmitter ON before connecting robot battery.
        If receiver powers on first, weapon may activate unexpectedly!

### Power-Off Sequence (After Testing or Fighting)

Reverse the order:

| Step | Action | Why |
|------|--------|-----|
| 1 | **Stop the weapon** (bring to 0% throttle) | Let the weapon spin down completely |
| 2 | **Wait for weapon to stop spinning** | Do NOT open the arena while the weapon is still moving |
| 3 | **Set transmitter aside** (sticks centered) | Prevents accidental input |
| 4 | **Open the arena** | Only after the weapon has fully stopped |
| 5 | **Install the weapon lock** | FIRST thing you do when you touch the robot |
| 6 | **Disconnect the battery / turn the robot OFF** | Now safe to handle |
| 7 | **Turn off the transmitter** | Last step — ensures the robot always has a signal while powered |

??? info "Power-Off Sequence Flowchart"

    ```
    ┌─────────────────────────────────────────────┐
    │  SAFE POWER-OFF PROCEDURE                   │
    └─────────────────────────────────────────────┘

        ┌────────────────────────────────┐
        │ 1. WEAPON FULLY STOPPED        │
        │    ✓ Wait for weapon to stop   │
        │    ✓ No spinning parts moving  │
        └──────────────┬─────────────────┘
                       │
                       ▼
        ┌────────────────────────────────┐
        │ 2. INSTALL WEAPON LOCK         │
        │    ✓ Insert pin/zip-tie        │
        │    ✓ Verify weapon cannot spin │
        └──────────────┬─────────────────┘
                       │
                       ▼
        ┌────────────────────────────────┐
        │ 3. DISCONNECT BATTERY          │
        │    ✓ Unplug main battery       │
        │    ✓ Robot has no power        │
        └──────────────┬─────────────────┘
                       │
                       ▼
        ┌────────────────────────────────┐
        │ 4. VERIFY NO POWER             │
        │    ✓ No lights on Malenki      │
        │    ✓ No sounds from motors     │
        └──────────────┬─────────────────┘
                       │
                       ▼
        ┌────────────────────────────────┐
        │ 5. TRANSMITTER OFF             │
        │    ✓ Turn off controller LAST  │
        │    ✓ Store safely              │
        └──────────────┬─────────────────┘
                       │
                       ▼
        ┌────────────────────────────────┐
        │ 6. WEAPON LOCK STAYS IN        │
        │    ✓ Lock remains installed    │
        │    ✓ Safe to handle robot      │
        └──────────────┬─────────────────┘
                       │
                       ▼
        ┌────────────────────────────────┐
        │ 7. STORE SAFELY                │
        │    ✓ Battery in fireproof bag  │
        │    ✓ Robot in secure location  │
        └────────────────────────────────┘
    ```

    !!! danger "CRITICAL RULE"
        **ALWAYS** disconnect battery before turning OFF transmitter.
        Reverse order from power-on sequence!

        **NEVER REMOVE WEAPON LOCK OUTSIDE ARENA**

!!! danger "NEVER Power On a Spinning Weapon Outside of an Enclosed Test Area"
    Even at 500g, a spinning weapon can cause serious injury — lacerations, broken fingers, eye damage. If the weapon is not inside the sealed arena or an enclosed test box, it must not be powered. No exceptions. No "quick tests." No "just checking."

---

## Drive Testing

Before weapon testing, verify your drivetrain works correctly.

### Drive Test Procedure

1. Follow the power-on sequence (in a safe test area, no weapon lock removed)
2. Push the drive stick **forward slightly** — both wheels should spin forward
3. Push **backward** — both wheels should spin backward
4. Push **left** — robot should turn left (left motor slow/reverse, right motor forward)
5. Push **right** — robot should turn right
6. Drive in a circle, a figure-8, and a straight line

### Common Drive Issues

| Problem | Cause | Fix |
|---------|-------|-----|
| Robot drives backward when you push forward | Motor wires swapped | Swap the two wires on that motor |
| Robot turns left when you push right | Left and right motors swapped | Swap Motor A and Motor B connections on the Nano |
| One wheel doesn't spin | Loose wire or dead motor | Check solder joints, test motor directly |
| Robot drives in an arc instead of straight | Motors running at different speeds | Trim on your transmitter, or one motor may be weaker |
| Robot is very slow | Low battery or wrong voltage setting | Check battery charge, verify motor voltage |

---

## Weapon Testing

**Weapon testing is ONLY done inside the sealed arena or an enclosed test box.** No exceptions.

### Weapon Test Procedure

1. Place robot in the arena, follow full power-on sequence
2. Remove weapon lock
3. Seal the arena
4. **Start at low throttle** — bring the weapon up to ~20% speed
5. Listen for vibration — a balanced weapon should sound smooth, not rattling
6. Gradually increase to full speed if everything sounds good
7. Run at full speed for 10-15 seconds to verify stability
8. Bring weapon back to 0% throttle
9. Follow full power-off sequence

!!! example "📷 Photo Needed"
    Robot inside sealed arena during weapon testing, viewed through polycarbonate

### Weapon Test Red Flags

| Observation | What It Means | Action |
|------------|---------------|--------|
| Loud vibration/rattling | Weapon is unbalanced | Stop immediately, rebalance |
| Weapon wobbles visibly | Bent shaft or loose hub | Stop, inspect, fix before re-testing |
| Smell of burning | Motor overheating or wires rubbing | Stop immediately, inspect |
| Weapon touches chassis | Insufficient clearance | Stop, adjust mounting or clearance |
| Robot walks/moves from vibration | Severe imbalance | Stop, rebalance weapon |

---

## Failsafe Testing

Test failsafe **before every event**, not just once during setup.

### Failsafe Test Procedure

1. Power on the robot (full power-on sequence, inside arena)
2. Spin up the weapon to ~30% throttle
3. **Turn off the transmitter**
4. Observe:
    - Weapon should spin down and stop
    - Drive motors should not move
    - Nothing should activate or move
5. If anything keeps running: **the robot is UNSAFE.** Do not use it until failsafe is fixed.

!!! example "🎬 GIF/Video Needed"
    Failsafe test: weapon spinning → transmitter off → weapon stops

!!! warning "Test Failsafe Every Time"
    Failsafe settings can be lost if the Nano loses power during a fight, if you re-bind the transmitter, or if settings get corrupted. Test it before every event. It takes 30 seconds and it could prevent a serious injury.

---

## Pre-Fight Checklist

Run through this checklist before every match:

### Mechanical

- [ ] All screws and fasteners are tight
- [ ] Weapon spins freely (no rubbing or wobbling)
- [ ] Wheels spin freely and have good traction
- [ ] Armor panels are secure
- [ ] No loose parts rattling inside the chassis

### Electrical

- [ ] Battery is charged (check voltage with multimeter: 4.2V per cell = full)
- [ ] All wires are secured and away from the weapon path
- [ ] No exposed bare wire or solder joints
- [ ] Transmitter batteries are fresh/charged

### Safety

- [ ] Weapon lock is installed and functional
- [ ] Failsafe is verified (tested this session)
- [ ] Robot weight is within limit

### Operational

- [ ] Drive direction is correct (forward is weapon-first)
- [ ] Weapon spins up and down smoothly
- [ ] You know which switch/stick controls the weapon
- [ ] Transmitter is labeled with your name

---

## Emergency Procedures

### Robot Won't Stop

If you lose control and the robot won't respond to the transmitter:

1. **Turn off the transmitter** — failsafe should activate
2. **Wait** — do NOT reach into the arena
3. If the robot is still moving after 10 seconds, **disconnect the battery** (reach in ONLY when the weapon has stopped, or use a tool to pull the battery connector)

### Battery Damage During a Fight

If a fight results in a visibly damaged battery (dented, punctured, leaking):

1. **Do NOT touch the battery with bare hands**
2. Alert a mentor immediately
3. If the battery is smoking or swelling, evacuate the area
4. Place on a non-flammable surface if safe to do so

### Injury

If anyone is injured by a robot or component:

1. **Power off everything** — robot, transmitter
2. Apply first aid as appropriate
3. Notify a mentor or adult immediately
4. Do not resume competition until a mentor approves

---

## Safety Culture

Safety in combat robotics is not about following rules to avoid getting in trouble. It's about building habits that protect you and everyone around you. The best combat robotics teams in the world follow these same procedures — from 500g classroom bots to 250lb heavyweight competitors.

!!! tip "The Golden Rule of Combat Robotics"
    Treat every robot as if its weapon could spin up at any moment. Handle with respect. Never put your hand near a weapon unless the battery is disconnected and the weapon lock is installed.

---

## Success Criteria

Robot is competition-ready when you can:

- [ ] Complete the Pre-Fight Checklist (all items checked)
- [ ] Demonstrate correct power-on sequence (transmitter first, then robot)
- [ ] Demonstrate correct power-off sequence (weapon lock first, then power off)
- [ ] Show successful failsafe test (weapon stops when transmitter turns off)
- [ ] Verify battery is healthy (no puffing, correct voltage, no damage)
- [ ] Confirm robot weight is within limit
- [ ] Demonstrate drive control (forward, reverse, turn left, turn right)
- [ ] Demonstrate weapon control (spin up, spin down, controlled throttle)
- [ ] Brief student driver on controls and safety procedures

---

## You're Ready

Your robot is built, tested, and safe. You know the power-on procedure, the failsafe works, your weapon is balanced, and your battery is charged.

Now go fight.

Good luck in the arena. Build something that makes an impact — literally.
