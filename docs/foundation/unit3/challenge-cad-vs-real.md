# Challenge: CAD vs Real

**The moment of truth — does your design survive reality?** In this challenge, you will build the same mechanism twice: once in Onshape and once with real VEX parts. Then you compare them side by side. The gap between your CAD model and your physical build reveals exactly how well you understand design, tolerances, and real-world constraints.

---

## Objective

Build the same mechanism in both **Onshape CAD** and **physical VEX parts**. The team whose physical build most closely matches their CAD model wins.

---

## Format

| | Details |
|---|---|
| **Type** | Individual or pairs (coach's discretion) |
| **Duration** | 60–90 minutes total |
| **Phase 1** | CAD modeling (30 minutes) |
| **Phase 2** | Physical build (30-45 minutes) |
| **Phase 3** | Comparison and judging (15 minutes) |

---

## The Assignment

The coach assigns a **simple mechanism** that can be both CAD modeled and physically built within the time limit. Examples:

| Difficulty | Mechanism | Key Features |
|------------|-----------|-------------|
| **Easy** | Geared axle assembly | Two gears on axles, mounted in C-channels, specific ratio |
| **Medium** | 4-bar linkage | Four bars with revolute joints, specific bar lengths |
| **Hard** | Geared arm with mount | Arm on pivot, gear-driven, mounted to a base plate |

!!! info "Everyone Gets the Same Assignment"
    All students/pairs receive the same mechanism. This ensures fair comparison and creates interesting discussion about why different people interpreted the same design differently.

---

## Phase 1: CAD Model (30 minutes)

### Requirements

1. Create a new Onshape document named `CAD-vs-Real-[YourName]`
2. Use the **VEX V5 Parts Library** — import real VEX parts, do not model them from scratch
3. Assemble with proper mates (Fastened, Revolute as appropriate)
4. The mechanism must be fully defined — no floating parts
5. Take a **screenshot** of your completed CAD model from a 3/4 isometric view

### CAD Checklist

- [ ] All parts imported from the VEX library (not custom-modeled)
- [ ] First part fastened to origin
- [ ] All connections properly mated
- [ ] Mechanism moves correctly when animated (if it has moving parts)
- [ ] Screenshot saved for comparison
- [ ] Assembly is clean — no extra unused parts

### What to Document

Before moving to Phase 2, write down:

- Exact parts used (e.g., "2x 2x10 C-Channel, 4x 8-32 x 0.5" screws, 2x bearings")
- Key dimensions (distances between holes, axle positions)
- Gear ratio if applicable
- Any specific spacing (number of spacers, standoff lengths)

!!! tip "Your CAD Model Is Your Blueprint"
    Treat Phase 1 like creating a build guide. The more precise your CAD model, the easier Phase 2 will be. Students who rush through CAD always struggle more during the physical build.

---

## Phase 2: Physical Build (30-45 minutes)

### Requirements

1. Build the **exact mechanism** you modeled in Phase 1
2. Use the **same parts** you specified in your CAD model
3. Follow your CAD model as your build guide
4. When complete, place the physical build **next to your screen** showing the CAD model

### Build Tips

- Count holes carefully — the most common error is being off by one hole
- Measure spacing with calipers if needed
- If a part does not fit the way your CAD shows, you have found a gap between design and reality — note it
- Screw joints should be firm but allow rotation where the CAD has revolute mates
- Use nylock nuts where the CAD shows permanent connections

### What to Track

As you build, note every discrepancy between your CAD model and reality:

| Discrepancy Type | Example |
|-----------------|---------|
| **Part interference** | Two parts collide that did not collide in CAD |
| **Spacing issues** | Axle is too tight or too loose — spacer count was wrong |
| **Alignment problems** | Holes do not line up because of accumulated tolerance |
| **Missing hardware** | Forgot to include standoffs or spacers in the CAD model |
| **Functional failure** | Mechanism does not move smoothly despite looking correct |

!!! example "📷 Photo Needed"
    Physical build with callouts showing discrepancies: interference, spacing, misaligned holes

---

## Phase 3: Comparison and Judging (15 minutes)

### Side-by-Side Comparison

1. Place your physical build next to your laptop showing the CAD model

!!! example "📷 Photo Needed"
    Physical VEX build next to laptop showing matching CAD model

2. The coach and peers will walk around examining each pair
3. Be prepared to explain any differences between your CAD and physical build

### Judging Criteria

| Criteria | Points | What Judges Look For |
|----------|--------|---------------------|
| **Visual Match** | 30 | Does the physical build look like the CAD model from the same angle? |
| **Dimensional Match** | 25 | Are key dimensions the same? (hole spacing, axle positions, overall size) |
| **Part Match** | 20 | Same exact parts used in both? No substitutions? |
| **Functionality** | 15 | Does the physical mechanism move the same way the CAD animation shows? |
| **Documentation** | 10 | Did the student track and explain discrepancies? |

!!! info "Honesty Earns Points"
    The documentation score rewards students who honestly identified and explained the gaps between their CAD and physical build. Pretending everything is perfect when it clearly is not earns zero documentation points. The best engineers are the ones who can articulate what went wrong and why.

---

## What This Challenge Teaches

### The Design-Reality Gap

Every engineer encounters this gap. CAD models assume:

- **Perfect dimensions** — real parts have manufacturing tolerances
- **Zero friction** — real joints have friction that affects motion
- **Infinite rigidity** — real structures flex under load
- **Exact spacing** — real assemblies accumulate small errors across multiple connections

### Tolerance Stack-Up

When you stack 5 spacers, each with a 0.1mm tolerance, you could be off by up to 0.5mm total. In CAD, every spacer is exactly the nominal dimension. In reality, they vary slightly. This is called **tolerance stack-up**, and it is why experienced builders always check fit during assembly rather than trusting the drawing alone.

!!! example "📐 Diagram Needed"
    Tolerance stack-up: 5 spacers × 0.1mm tolerance = 0.5mm total error

### Iteration Is Not Failure

If your physical build does not match your CAD model, that is not a failure — it is a learning opportunity. The iteration cycle is:

1. **Design** in CAD
2. **Build** physically
3. **Compare** and identify gaps
4. **Update** the CAD model to match reality (or redesign to fix the issue)
5. **Repeat**

This cycle is how every competition robot is developed. Teams that iterate faster build better robots.

!!! example "📐 Diagram Needed"
    Design cycle: CAD → Build → Compare → Update → Repeat (circular)

---

## Discussion Questions

After judging, the coach will lead a group discussion:

1. What was the most common discrepancy across all teams?
2. Did anyone find something in the physical build that worked better than the CAD design? Why?
3. How would you change your CAD modeling approach next time to reduce the gap?
4. What VEX parts were hardest to model accurately? Why?
5. How does this experience change how you think about designing your competition robot?

---

## Awards

| Award | Given To |
|-------|----------|
| **Perfect Match** | Closest match between CAD and physical build |
| **Best Documentation** | Most thorough and honest gap analysis |
| **Most Improved** | Student whose second attempt (if time allows) improved the most |

---

## Return to Unit 3

**[Unit 3: Onshape CAD](index.md)** — review all modules and challenges.
