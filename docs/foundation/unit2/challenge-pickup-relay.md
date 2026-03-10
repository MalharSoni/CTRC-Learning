# Challenge: Pickup Relay

**Your first full-robot challenge.** The Pickup Relay tests everything from Unit 2 — driver controls, button mapping, and mechanism function — in a timed competition to pick up objects and deliver them to a scoring zone.

---

## Objective

Pick up **3 objects** with your motorized shovel and place them in the scoring zone. **Fastest completion time wins.**

---

## Field Setup

```
+--------------------------------------------------+
|                                                    |
|                  [SCORING ZONE]                    |
|              (24" x 24" taped square)              |
|                                                    |
|                                                    |
|                                                    |
|          (3)                                       |
|           ○           Bean bags or balls           |
|                       placed at marked positions   |
|     (2)                                            |
|      ○                                             |
|                                                    |
|  (1)                                               |
|   ○                                                |
|                                                    |
|  [START]                                           |
+--------------------------------------------------+
```

!!! example "📐 Diagram Needed"
    Pickup Relay field: scoring zone (24x24 shaded square), 3 objects at marked positions, start zone

### Object Placement

- **3 objects** (bean bags, tennis balls, or VEX game elements) are placed at marked positions on the field
- Positions are marked with tape — same positions for every competitor
- Objects are spaced at least **24 inches apart**
- The scoring zone is at the far end of the field

!!! info "Object Choice"
    Your mentor will choose the objects based on what's available. Bean bags are easiest (they don't roll). Tennis balls are harder (they roll off the shovel). Game elements add realism.

!!! example "📷 Photo Needed"
    Real Pickup Relay field: tape on floor marking scoring zone, 3 bean bags at positions

---

## Rules

| Rule | Details |
|------|---------|
| **Control** | Driver control only — one driver, one controller |
| **Mechanism** | Must use the motorized shovel to pick up objects (no ramming them into the zone) |
| **One at a time** | Only one object may be carried at a time (pick up, deliver, return for next) |
| **Scoring** | Object must be **fully inside** the scoring zone (no part hanging over the tape line) |
| **Dropped objects** | If an object falls off the shovel, the driver must re-pick it with the mechanism (no touching with hands) |
| **Robot contact** | Driver may not touch the robot once the run starts |
| **Timing** | Clock starts on "GO" signal. Clock stops when the third object is fully in the scoring zone. |
| **Attempts** | Best of 2 attempts counts as your score |
| **DNF** | If all 3 objects are not scored within **3 minutes**, the run is a DNF |

!!! warning "Hands Off"
    Once the timer starts, you cannot touch the robot or the objects. If the robot flips over or gets stuck, your run is over (DNF). Build a stable drivetrain and drive carefully.

---

## Scoring

**Final Time = Completion Time**

There are no penalties — either the object is in the zone or it isn't. The only metric is how fast you complete the task.

### Scoring Breakdown

| Outcome | Score |
|---------|-------|
| All 3 objects in zone | Completion time recorded |
| 2 objects in zone (time expired) | DNF — ranked below all completions |
| 1 or 0 objects | DNF — ranked by objects scored, then time |

---

## What This Tests

| Skill | How It's Tested |
|-------|----------------|
| **Drive controls** (2.2) | Can you navigate to objects quickly and accurately? |
| **Button mapping** (2.3) | Can you operate the shovel while driving? |
| **Mechanism function** (2.3) | Does the shovel pick up and hold objects reliably? |
| **Brake mode** (2.3) | Does the shovel hold position while driving? |
| **Driving skill** | Smooth driving, no wasted movements, good spatial awareness |

---

## Strategy Tips

!!! tip "Optimize Your Route"
    Plan the order you pick up objects before the timer starts. Usually, nearest-first is best — but sometimes picking up a far object first avoids backtracking.

!!! example "🎬 GIF/Video Needed"
    Robot pickup: approach bean bag → lower shovel → scoop → lift → drive away

!!! tip "Slow Down for Pickups"
    The shovel approach is where most time is lost. Drive fast between objects, but slow down and be precise when scooping. A missed pickup costs more time than a slower approach.

!!! tip "Practice the Release"
    Dropping the object in the scoring zone cleanly is a skill. Practice lowering the shovel smoothly — don't slam it down, which can bounce the object out of the zone.

!!! tip "Pre-Position the Shovel"
    Lower the shovel to ground level as you're driving toward the object, not after you arrive. This saves 1–2 seconds per pickup.

### Common Mistakes

| Mistake | Consequence | Prevention |
|---------|------------|------------|
| Driving too fast at the object | Object gets pushed away instead of scooped | Approach slowly for the last 6 inches |
| Lifting shovel too quickly | Object slides off the back | Lift smoothly, not jerky |
| Not lowering shovel enough | Shovel slides over the object | Make sure the scoop edge is below the object |
| Oversteering near objects | Miss the object entirely | Use small stick movements for fine positioning |
| Forgetting to lower shovel in the scoring zone | Driving around with the object, wasting time | Practice the release sequence until it's automatic |

---

## Head-to-Head Bracket

### Qualifying

All competitors complete their 2 attempts. The best time from each competitor is their qualifying score.

### Bracket

Top qualifiers are seeded into a **single-elimination bracket**:

- Bracket matches are run simultaneously (2 parallel courses if space allows) or back-to-back
- Lower final time advances
- Third-place match for the losers of the semifinals

---

## Practice Routine

!!! example "Pre-Challenge Practice"
    Before the challenge, run through this practice routine at least 3 times:

    **Round 1: Mechanism only (no driving)**

    1. Place an object directly in front of the robot
    2. Lower shovel, scoop, lift, lower, release
    3. Repeat 5 times until the motion feels natural

    **Round 2: Drive + mechanism (one object)**

    1. Place one object 36 inches away
    2. Drive to it, pick it up, deliver to a target spot
    3. Time yourself — aim for under 15 seconds

    **Round 3: Full run (three objects)**

    1. Set up the full course
    2. Run the complete challenge
    3. Record your time
    4. Identify your slowest section — practice that specifically

---

## Post-Challenge Reflection

After the challenge, document in your engineering notebook:

1. **What was your best time?** Break it down — how long did each pickup take?
2. **What went wrong?** Dropped objects? Missed pickups? Slow driving?
3. **What went right?** What felt smooth and consistent?
4. **What would you change** about your shovel design for better pickup reliability?
5. **How did the winning team do it differently?** What can you learn from their approach?

---

## Key Takeaways

- [x] The Pickup Relay is a combined test of driving, button mapping, and mechanism reliability
- [x] Route planning matters — think about object order before starting
- [x] Smooth, controlled movements beat fast, jerky ones
- [x] Practice the pickup-carry-release cycle until it's muscle memory
- [x] Reliable mechanisms win over fast but inconsistent ones
- [x] Every second lost to a missed pickup is harder to make up than just driving slower

**Next challenge:** [Auton Showdown](challenge-auton-showdown.md) — can your robot drive itself?
