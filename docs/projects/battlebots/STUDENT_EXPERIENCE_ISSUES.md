# Student Experience Issues

**Date:** March 13, 2026
**Agent:** Agent 4 - Student Experience & Workflow Validation
**Purpose:** Document all confusion points, gaps, and UX issues identified during student journey walkthrough

---

## Critical Issues (Student Cannot Proceed)

### Issue 1: Unclear Teacher vs Student Boundaries
**Location:** Index.md, All modules
**Problem:** Student sees phases 7-9 (Malenki Nano, Assembly, Testing) but these are partially or fully teacher-executed. The index says "9 modules" but students don't execute all of them.
**Impact:** Student doesn't know when to hand off to teacher, tries to do electronics themselves, or waits unnecessarily
**Fix:** Add clear "Student Module" and "Teacher Module" badges at the top of each page

### Issue 2: No Handoff Instructions
**Location:** Between Module 6 (3D Printing) and Module 7 (Malenki Nano)
**Problem:** Student finishes printing, then... what? No explicit "give your parts to teacher for printing" or "what happens next"
**Impact:** Student confused about workflow, timeline expectations unclear
**Fix:** Create explicit checkpoint/handoff pages

### Issue 3: Missing Prerequisites Check
**Location:** Index.md
**Problem:** Says "Basic Onshape CAD skills" but doesn't define what "basic" means or provide a self-assessment
**Impact:** Students start CAD module unprepared, get frustrated
**Fix:** Add specific prerequisite checklist with skills needed

### Issue 4: No Time Expectations for Printing
**Location:** 3D Printing Guide
**Problem:** Student exports STLs, then waits for teacher to print. How long does this take? Days? Weeks?
**Impact:** Student doesn't know when to follow up or plan their schedule
**Fix:** Add realistic timeline for print queue and turnaround

---

## High Issues (Student Likely to Make Mistakes)

### Issue 5: Weight Budget Not Applied in Practice
**Location:** Weapon Design, CAD Your Bot
**Problem:** Weight budget is discussed theoretically but no step-by-step guide for "what to do when you're 50g over"
**Impact:** Student designs overweight robot, has to redo work
**Fix:** Add weight troubleshooting flowchart and iteration checklist

### Issue 6: Onshape Material Properties Not Explained
**Location:** CAD Your Bot, Step 9
**Problem:** Tells student to "Set material properties" with density values but doesn't show HOW in Onshape UI
**Impact:** Student skips this step, weight calculation is wrong
**Fix:** Add screenshot or detailed steps for setting material properties in Onshape

### Issue 7: Bounding Box Check Too Late
**Location:** CAD Your Bot, Step 9
**Problem:** Student checks if design fits at the END of CAD process, after modeling everything
**Impact:** Robot is too big, student has to resize/redo entire design
**Fix:** Move bounding box check earlier, add checkpoints during modeling

### Issue 8: No Guidance on Which Robot Type to Choose
**Location:** Robot Archetypes
**Problem:** Presents 5+ robot types with pros/cons but no decision framework for beginners
**Impact:** Student chooses the "coolest" looking type instead of most beginner-friendly
**Fix:** Add decision tree or explicit recommendation for first-time builders

### Issue 9: CAD Assembly Not Explained
**Location:** CAD Your Bot, Step 4
**Problem:** Mentions "create an Assembly" but doesn't explain what that is or how to do it
**Impact:** Student lost if they haven't used Onshape assemblies before
**Fix:** Add beginner-friendly assembly instructions or link to tutorial

### Issue 10: Print Orientation Unclear Without Visuals
**Location:** 3D Printing Guide
**Problem:** Text explanation of layer orientation is good but hard to visualize without more examples
**Impact:** Student orients parts incorrectly, they break on first hit
**Fix:** Add more orientation examples with photos/diagrams for each part type

---

## Medium Issues (Student May Be Confused)

### Issue 11: D-Shaft Concept Not Defined Early
**Location:** Drivetrain Design
**Problem:** Mentions "D-shaft" multiple times before explaining what it is
**Impact:** Student doesn't understand why wheel hub needs special shape
**Fix:** Define D-shaft on first use, add to glossary

### Issue 12: No Visual Reference for N20 Motors
**Location:** Drivetrain Design
**Problem:** Entire drivetrain is designed around N20 motors but student has never seen one
**Impact:** Student can't visualize dimensions, doesn't understand motor orientation
**Fix:** Add photo of N20 motor (flagged in module, needs sourcing)

### Issue 13: Motor Pocket Dimensions Assumed
**Location:** CAD Your Bot, table on line 71
**Problem:** Says "12mm x 10mm x 25mm deep" but doesn't explain these are EXTERNAL dimensions, or where to add tolerance
**Impact:** Student makes pocket exact size, motor doesn't fit or falls out
**Fix:** Clarify "motor body dimensions" vs "pocket dimensions with tolerance"

### Issue 14: Failsafe Explanation Too Technical
**Location:** Malenki Nano Setup, Testing & Safety
**Problem:** Failsafe is THE most important safety feature but explanation assumes radio knowledge
**Impact:** Student doesn't understand WHY failsafe matters, skips setup
**Fix:** Add simple analogy ("like a car's emergency brake"), real-world failure scenario

### Issue 15: No Example of "Good" vs "Bad" Weapon Balance
**Location:** Weapon Design
**Problem:** Explains center of mass must be on spin axis but doesn't show what "off-center" looks like
**Impact:** Student thinks their slightly-off weapon is "close enough"
**Fix:** Add visual comparison of balanced vs unbalanced weapon in Onshape

### Issue 16: Wiring Diagram is ASCII Art
**Location:** Malenki Nano Setup
**Problem:** ASCII wiring diagram is hard to read, not to scale, doesn't show wire colors
**Impact:** Student confused about physical connections
**Fix:** Create actual wiring diagram (flagged in module, needs creation)

### Issue 17: Battery Connector Type Not Specified
**Location:** Malenki Nano Setup, Testing & Safety
**Problem:** Says "JST, XT30, or bare leads" but doesn't tell student which one they'll be using
**Impact:** Student doesn't know what to expect or prepare for
**Fix:** Add "check with teacher for your battery type" note

### Issue 18: No Progression Indicator
**Location:** All modules
**Problem:** Student doesn't know "I'm 50% done" or "this is the hardest part"
**Impact:** Demotivation, unclear effort allocation
**Fix:** Add progress indicators and time estimates to each module

---

## Minor Issues (Small Improvements)

### Issue 19: Jargon Not Defined Inline
**Location:** Multiple modules
**Examples:** "infill", "perimeters", "bearing mounts", "gyroscopic effects", "tip speed"
**Impact:** Student has to Google terms, loses flow
**Fix:** Add inline definitions or tooltip-style explanations

### Issue 20: No Link Between Physics and Practice
**Location:** Weapon Design
**Problem:** Kinetic energy equation shown but not connected to "why this matters for YOUR design"
**Impact:** Student sees it as math homework, not engineering tool
**Fix:** Add worked example: "Your 50g weapon at 10,000 RPM stores X joules, which is enough to..."

### Issue 21: Success Criteria Not Explicit
**Location:** All modules
**Problem:** Module says "design your weapon" but not "you're done when you can show..."
**Impact:** Student doesn't know when they've succeeded
**Fix:** Add "How You Know You're Done" section to every module

### Issue 22: No Troubleshooting for Common CAD Mistakes
**Location:** CAD Your Bot
**Problem:** Lists what to do but not what to do when things go wrong
**Impact:** Student stuck when Onshape sketch won't extrude or mates won't work
**Fix:** Add troubleshooting section for common Onshape errors

### Issue 23: Assembly Photos Show Different Robot Types
**Location:** Chassis Assembly
**Problem:** Photos show metal frame robots, curriculum is 3D printed
**Impact:** Student confused why their parts don't look like the photos
**Fix:** Add caption "Your 3D printed chassis follows the same principles" to each photo

### Issue 24: No Repair/Iteration Guidance
**Location:** Testing & Safety (end)
**Problem:** Says "now go fight" but doesn't prepare student for "what when it breaks"
**Impact:** Student thinks broken robot = failure, doesn't know repair is expected
**Fix:** Add "Post-Fight Repair & Iteration" mini-module

### Issue 25: No "Common First-Time Mistakes" List
**Location:** Index or new page
**Problem:** Student will make predictable mistakes, no proactive warning
**Examples:** Forgetting weapon lock, over-tightening N20 mounts, printing weapon in wrong orientation
**Fix:** Create "Mistakes Everyone Makes (And How to Avoid Them)" page

---

## Prerequisite Knowledge Gaps

### Skills Students Should Have (But May Not)

1. **Onshape CAD:**
   - Creating and constraining sketches
   - Extruding sketches to create 3D parts
   - Creating assemblies and adding mates
   - Using mass properties tool
   - Exporting STL files

2. **3D Printing Concepts:**
   - What layer lines are
   - What infill means
   - Basic slicer software navigation (even if teacher runs it)

3. **Basic Physics:**
   - Force, mass, acceleration (F=ma)
   - Kinetic energy concept
   - Rotational motion (RPM, angular velocity)

4. **Electrical Basics:**
   - What polarity is (+ and -)
   - What a motor is and how it spins
   - What a battery does

5. **Mechanical Assembly:**
   - How to use screwdrivers
   - What "press-fit" means
   - How to read a checklist

### Terms That Need Glossary Definitions

**Robot Types:**
- Beetleweight, drum spinner, eggbeater, undercutter, vertical spinner, horizontal spinner

**Mechanical:**
- D-shaft, press-fit, clearance, bite, set screw, shaft collar, bounding box, center of mass, moment of inertia

**CAD:**
- Part Studio, Assembly, mate, extrude, revolve, mass properties, STL

**3D Printing:**
- Layer lines, infill, perimeter, orientation, support material, PLA+, TPU, PETG

**Electronics:**
- ESC, LiPo, polarity, failsafe, transmitter, receiver, binding, channel mapping

**Safety:**
- Weapon lock, failsafe, LiPo bag, storage voltage

---

## Missing Content

### Gaps in Current Curriculum

1. **No "What to Expect" Timeline**
   - Week 1: Design
   - Week 2: CAD
   - Week 3: Printing (waiting)
   - Week 4: Assembly
   - Week 5: Testing & competition

2. **No Decision Support for Design Choices**
   - "Should I use TPU or PETG for armor?" → Decision matrix needed
   - "How many teeth should my drum have?" → Calculator or guideline
   - "What wheel diameter?" → Tradeoff explanation

3. **No Post-Competition Content**
   - How to repair damage
   - How to iterate on design
   - What to improve for Robot v2

4. **No Collaboration Guidance**
   - Can students work in teams?
   - When should they ask for help vs figure it out?
   - How to do peer design reviews

5. **No Example Robot**
   - A complete reference design students can learn from
   - "Here's a simple drum spinner that works well for beginners"

---

## Positive Elements (Keep These)

1. Safety emphasis throughout - not just one module
2. Admonition boxes (warnings, tips, info) are well-used
3. Progressive complexity - starts simple, builds up
4. Real engineering principles, not dumbed down
5. Practical focus - "here's why this matters for YOUR robot"
6. Consistent structure across modules

---

## Recommendations Summary

### Immediate Fixes (High Impact, Low Effort)
1. Add "Student Module" / "Teacher Module" badges to all pages
2. Create handoff checkpoint pages
3. Add time estimates to every module
4. Add "Before You Start" and "How You Know You're Done" to every module
5. Create FAQ page

### Short-Term Improvements (High Impact, Medium Effort)
1. Add decision tree for robot archetype selection
2. Create weight troubleshooting flowchart
3. Add more CAD screenshots showing key steps
4. Create glossary of technical terms
5. Add worked examples for physics equations

### Long-Term Enhancements (High Impact, High Effort)
1. Create complete reference robot design
2. Record video walkthroughs for CAD and assembly
3. Build interactive calculators (KE, bite, weight budget)
4. Create post-competition iteration guide

---

**Analysis Complete:** March 13, 2026
**Next Step:** Begin adding scaffolding elements to modules
