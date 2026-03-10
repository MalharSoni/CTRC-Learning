# Challenge: Obstacle Course Time Trial

**Drive your creation through fire.** This challenge tests everything from Unit 1 — drivetrain quality, gear ratio selection, structural integrity, and driving skill — in a timed obstacle course with head-to-head elimination brackets.

---

## Objective

Navigate the obstacle course **fastest** without assistance. Your robot must complete the full course under driver control. Fastest time wins.

---

## Course Layout

The course is designed by your mentor and may be customized, but the standard layout includes these elements:

```
[START]
  │
  ├── Straight Sprint (6 ft)
  │
  ├── Slalom (weave through 4 cones, spaced 18" apart)
  │
  ├── Tight U-Turn (around a single cone)
  │
  ├── Ramp Up & Down (plywood ramp, ~15° incline)
  │
  ├── Narrow Corridor (robot width + 2" on each side)
  │
  ├── 90° Turns (two sharp right-angle turns)
  │
  └── Sprint to Finish (4 ft straight)
[FINISH]
```

!!! info "Course Customization"
    Your mentor may modify the course based on available space and materials. The elements above are guidelines — the actual course will be announced before the challenge begins. Walk the course before your first attempt.

!!! example "📐 Diagram Needed"
    Top-down obstacle course: start line → sprint → slalom cones → U-turn → ramp → corridor → finish

!!! example "📷 Photo Needed"
    Full obstacle course set up on floor showing all elements

---

## Rules

| Rule | Details |
|------|---------|
| **Robot** | Must be your completed drivetrain from Module 1.4 (with electronics and motors) |
| **Control** | Driver control only — one driver, one V5 controller |
| **Assistance** | No human help once the run starts. No pushing, repositioning, or touching the robot. |
| **Cone contact** | Touching a cone adds **+2 seconds** penalty per cone |
| **Knocked-over cone** | Knocking a cone over adds **+5 seconds** penalty |
| **Ramp failure** | If the robot cannot climb the ramp, it may bypass with a **+10 second** penalty |

!!! example "📷 Photo Needed"
    Plywood ramp obstacle (~15° incline) with robot approaching

!!! example "📷 Photo Needed"
    Robot climbing the ramp, testing structural integrity and torque
| **Course departure** | If the robot leaves the course boundary, the driver must drive it back to where it left — time continues running |
| **Timing** | Starts when the robot crosses the start line. Stops when any part of the robot crosses the finish line. |

---

## Scoring

**Final Time = Raw Time + Penalties**

| Penalty | Time Added |
|---------|-----------|
| Cone touched (still standing) | +2 seconds |
| Cone knocked over | +5 seconds |
| Ramp bypassed | +10 seconds |
| Did not finish (DNF) | No score for that attempt |

### Example Scoring

| Driver | Raw Time | Cones Touched | Cones Knocked | Ramp Bypass | Final Time |
|--------|---------|:---:|:---:|:---:|-----------|
| Team A | 28.4s | 1 | 0 | No | **30.4s** |
| Team B | 24.1s | 0 | 2 | No | **34.1s** |
| Team C | 32.7s | 0 | 0 | Yes | **42.7s** |

!!! tip "Clean Is Often Faster Than Fast"
    A clean run with no penalties frequently beats a reckless fast run. The penalty for a knocked cone (5s) is usually more than the time saved by cutting that corner.

---

## Head-to-Head Bracket

### Qualifying Round

Every team gets **2 timed runs** through the course. Your **best time** (including penalties) is your qualifying score.

### Bracket Tournament

The top qualifiers are seeded into a **single-elimination bracket**:

```
Quarterfinals (if 8+ teams):
  Seed 1 vs Seed 8
  Seed 2 vs Seed 7
  Seed 3 vs Seed 6
  Seed 4 vs Seed 5

Semifinals:
  Winner QF1 vs Winner QF4
  Winner QF2 vs Winner QF3

Finals:
  Winner SF1 vs Winner SF2
```

In bracket matches, **both robots run the course simultaneously** (if space allows two parallel courses) or back-to-back. Lower final time advances.

!!! info "Bracket Sizing"
    Bracket size depends on the number of teams. With fewer than 8 teams, the bracket starts at semifinals or finals. With 4 or fewer teams, it may be a round-robin format.

---

## What This Tests

| Skill (from Unit 1) | How It's Tested |
|---------------------|----------------|
| **Parts knowledge** (1.1) | Did you select the right wheel type for the course? |
| **Structural integrity** (1.2) | Does the robot hold together through impacts and ramp stress? |
| **Gear ratio** (1.3) | Is your ratio appropriate? Too slow = bad times. Too fast = loss of control. |
| **Friction management** (1.3) | Low-friction drivetrains accelerate faster and maintain speed |
| **Build quality** (1.4) | Straight-rolling robots are easier to drive than crooked ones |
| **Electronics mounting** (1.4) | Loose batteries or brains will shift during ramp climbs |

---

## Strategy Tips

!!! tip "Gear Ratio Choice Matters Here"
    - **Speed ratio (3:1 or faster):** Great for straights, but hard to control in tight turns and slaloms. Risk of overshooting.
    - **Torque ratio (1:3 or lower):** Easy to control, but slow on straights. Reliable on the ramp.
    - **Balanced ratio (around 1:1.5):** Usually the winning choice — fast enough on straights, controllable in turns.

!!! tip "Drive Practice"
    Before the challenge, spend at least 15 minutes **just driving**. Practice:

    - Driving in a straight line
    - Making smooth turns (not jerky corrections)
    - Stopping precisely where you want
    - Navigating tight spaces at controlled speed

    Most time-trial losses come from **poor driving**, not poor hardware.

!!! tip "Walk the Course"
    Before your first run, walk the entire course on foot. Note:

    - Where are the tight spots?
    - Where can you go full speed?
    - Where do you need to slow down?
    - What's the best approach angle for the ramp?

---

## Post-Challenge Reflection

After the challenge, answer these questions in your engineering notebook:

1. **What was your qualifying time?** Break it down — where did you gain or lose time?
2. **Did your gear ratio help or hurt you?** Would you change it for a re-run?
3. **Did anything break or come loose?** What does that tell you about your build quality?
4. **What would you do differently** if you could rebuild from scratch?
5. **What did the winning robot do differently** than yours? What can you learn from it?

---

## Key Takeaways

- [x] An obstacle course tests the complete drivetrain system, not just one skill
- [x] Gear ratio selection is a strategic decision with tradeoffs
- [x] Driving skill matters as much as build quality — practice driving
- [x] Clean runs beat fast-but-sloppy runs due to penalty structure
- [x] Post-challenge reflection is where the real learning happens
- [x] Head-to-head competition teaches you to perform under pressure

**Congratulations on completing Unit 1!** You now have a fully built, geared, electronics-mounted drivetrain. Next up: **[Unit 2: Programming](../unit2/index.md)** — time to make it move on its own.
