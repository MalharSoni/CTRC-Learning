# Challenge: Ball Sweep

**Offense and defense at the same time.** Ball Sweep is a 1v1 match where the field is split in half and each side starts with equal balls. Your job: use your intake and linear slider to sweep balls to your opponent's side. When the buzzer sounds, the side with fewer balls wins.

---

## Objective

End the 60-second match with **fewer balls on your half** of the field than your opponent has on theirs.

---

## Format

| | Details |
|---|---|
| **Type** | 1v1 head-to-head |
| **Duration** | 60 seconds per match |
| **Matches** | Best of 3 rounds |
| **Tournament** | Single elimination or round robin (coach's discretion) |
| **Mechanisms Used** | Intake (Module 4.2) and/or Linear Slider (Module 4.3) |

---

## Field Setup

- **Field**: Standard VEX field or 8' x 8' taped area
- **Dividing line**: A clear center line splits the field in half (tape or barrier)
- **Balls**: Equal number on each side (8-12 per side, depending on availability)
- **Starting position**: Each robot starts in the far corner of their half, facing the center line

### Field Layout

!!! example "📐 Diagram Needed"
    Ball Sweep field: center line, equal balls each side, robot starting positions

!!! example "📷 Photo Needed"
    Field with center line dividing two halves, balls on each side

!!! info "Robots Can Cross the Line"
    There is no rule preventing you from crossing the center line. The line only defines which balls count on which side at the final buzzer. You can drive anywhere on the field.

---

## Rules

### Before the Match
1. Equal balls placed on each side (counted and verified by the coach)
2. Robots inspected — all mechanisms functional, battery charged
3. Robots placed in starting positions
4. Drivers ready with controllers

### During the Match
1. Coach signals **"3, 2, 1, Go!"** — 60 second timer starts
2. Robots may drive anywhere on the field
3. Use any mechanism (intake, linear slider, wedge, pushing) to move balls to the opponent's side
4. **No holding balls** — you may intake and eject, but you cannot trap balls inside your robot permanently
5. **No stacking balls on your robot** to remove them from play
6. Contact between robots is allowed (pushing, blocking) but not intentional damage
7. If a ball leaves the field entirely, it is removed from play (does not count for either side)

### At the Buzzer
1. Timer reaches 0:00 — **all robot movement must stop immediately**
2. Count the balls on each half of the field
3. Balls on the center line: if more than 50% is on one side, it counts for that side. If exactly on the line, it does not count for either side
4. **Fewer balls on your side = you win the round**

### Tie-Breaking
- If both sides have equal balls, the round is a draw
- If the match is tied 1-1 after best of 3, a sudden-death 30-second round is played

---

## Scoring

| Result | Round Outcome |
|--------|--------------|
| Fewer balls on your half | **You win the round** |
| More balls on your half | **You lose the round** |
| Equal balls on both halves | **Draw** |

### Example Match

```
Start:    Side A: 10 balls  |  Side B: 10 balls
End:      Side A: 7 balls   |  Side B: 12 balls  (1 left the field)

Winner: Robot A (7 < 12)
```

---

## Strategy Guide

### Offensive Strategies

| Strategy | Description | Risk Level |
|----------|-------------|------------|
| **Rapid sweep** | Drive across your half fast, sweeping balls forward with intake/slider | Low risk, consistent |
| **Ball barrage** | Intake multiple balls, drive to opponent's side, eject all at once | Medium risk, high reward |
| **Line push** | Push balls across the center line in groups using your wedge/front | Low risk, low per-ball effort |
| **Corner dump** | Sweep opponent's balls into their corners where they are hard to recover | Medium risk, wastes opponent's time |

### Defensive Strategies

| Strategy | Description | When to Use |
|----------|-------------|-------------|
| **Block the line** | Park on the center line to prevent opponent from sweeping balls across | When you are ahead with 20 seconds left |
| **Return fire** | Immediately sweep back any balls the opponent sends to your side | When opponent is using the barrage strategy |
| **Body block** | Use your robot to physically prevent the opponent from reaching balls on your side | When you have a pushing advantage |

!!! example "📷 Photo Needed"
    Two robots sweeping balls across center line
| **Disruption** | Push the opponent away from ball clusters, wasting their time | When your opponent's intake is faster than yours |

### Time Management

| Phase | Time | Focus |
|-------|------|-------|
| **Opening** | 0:00 - 0:20 | Sweep the easy balls closest to the center line |
| **Mid-game** | 0:20 - 0:45 | Aggressive offense — clear remaining balls from your side |
| **Endgame** | 0:45 - 1:00 | Defensive positioning OR one final push |

!!! tip "The Last 10 Seconds Matter Most"
    Balls swept in the last 10 seconds cannot be swept back. If you are holding balls in your intake, eject them on the opponent's side in the final moments. If you are ahead, play defense and block the center line.

---

## Mechanism Usage

### Intake for Ball Sweep
- Intake balls from your side, drive to center, eject onto opponent's side
- Reverse the intake motor to eject
- Faster intake = faster cycle time = more balls moved

### Linear Slider for Ball Sweep
- Deploy the ball rake to sweep multiple balls in a single pass
- The wider the rake, the more balls you sweep per pass
- Combine with forward driving for maximum coverage

### Wedge for Ball Sweep
- Use the wedge to bulldoze balls across the line
- Less precise than intake but moves multiple balls at once
- Best for the opening rush when balls are clustered

---

## Common Mistakes

| Mistake | Why It Loses | Fix |
|---------|-------------|-----|
| Focusing on only one ball at a time | Opponent sweeps 5 while you move 1 | Use sweeping motions, move groups |
| Never playing defense | Opponent sends back everything you sweep | Switch to defense in the last 15 seconds if ahead |
| Crossing the line and getting stuck | Waste time on opponent's side | Sweep from your side, minimize time across the line |
| Ignoring balls near the walls | Those balls count against you | Sweep wall balls early — they are harder to reach later |
| Getting into a pushing match | Both robots stuck in the middle while balls sit untouched | Disengage, go collect balls instead of fighting |

---

## Awards

| Award | Criteria |
|-------|---------|
| **Ball Sweep Champion** | Tournament winner |
| **Best Strategist** | Voted by peers — smartest use of offense and defense |
| **Most Balls Moved** | Highest total balls moved across all rounds (tracked by coaches) |
| **Comeback King/Queen** | Won a match after being behind in round 1 |

---

## Post-Challenge Discussion

1. Which mechanism was most effective for moving balls: intake, slider, or wedge?
2. When did defensive strategy make sense vs offensive? What was the turning point?
3. How did time pressure change your driving compared to practice?
4. What would you redesign for a second Ball Sweep tournament?
5. How does this challenge simulate real VEX competition match dynamics?

---

## Return to Unit 4

**[Unit 4: Mechanisms](index.md)** — review all modules and challenges.
