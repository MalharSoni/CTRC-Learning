# BattleBots Curriculum Guide

**Version:** 2.0
**Last Updated:** March 13, 2026
**Maintainer:** CTRC Learning Team

---

## Table of Contents

1. [Overview](#overview)
2. [Student Workflow](#student-workflow)
3. [Teacher Workflow](#teacher-workflow)
4. [Module Structure](#module-structure)
5. [Learning Outcomes](#learning-outcomes)
6. [Equipment & Materials](#equipment--materials)
7. [Safety Requirements](#safety-requirements)
8. [Assessment & Success Criteria](#assessment--success-criteria)
9. [Troubleshooting](#troubleshooting)
10. [Competition Day](#competition-day)

---

## Overview

### What is the BattleBots Project?

The BattleBots project challenges students to design, build, and fight a **~500g combat robot** with spinning weapons. This is the CTRC in-house competition where students apply CAD skills, 3D printing knowledge, and engineering principles to create a machine built for competition.

**Goal:** Build a radio-controlled combat robot that:
- Fits within a 6" × 6" footprint
- Weighs approximately 500 grams
- Features a spinning weapon (vertical or horizontal)
- Competes in the CTRC arena against other student robots

**Engineering Process:** This project covers design, CAD, fabrication, wiring, testing, and competition.

---

### Curriculum Scope

**Weight Class:** Beetleweight (~500g / ~1.1 lbs)
**Competition Format:** CTRC in-house BattleBots tournament
**Student Skill Level:** Intermediate (requires Foundation Unit 1 completion)
**Total Project Duration:** 14-25 hours (10-19 hours student work + 4-6 hours teacher work)

**Educational Approach:**
- Student-driven design and CAD work
- Teacher-supervised electronics and safety testing
- Clear handoff points between student and teacher phases
- Emphasis on real-world engineering constraints

---

### Prerequisites

Before starting this project, students must have completed:

**Required:**
- ✅ V5 Foundation Unit 1 (Drivetrain Mastery) — minimum requirement
- ✅ Basic Onshape CAD skills (sketching, part modeling, assemblies)
- ✅ Familiarity with 3D printing (or willingness to learn fast)

**Recommended:**
- Foundation Unit 3 (Onshape CAD) — makes design phase significantly smoother
- Basic understanding of physics (forces, energy, mass)

---

## Student Workflow

### 8-Step Student Path

These are the modules students complete independently or with peer collaboration:

| Phase | Module | Duration | Type | Deliverable |
|-------|--------|----------|------|-------------|
| **1** | [Rules & Overview](rules-and-overview.md) | 30 min | Reading | Understanding of competition rules |
| **2** | [Robot Archetypes](robot-archetypes.md) | 45 min | Research | Selected robot design strategy |
| **3** | [Weapon Design](weapon-design.md) | 1-2 hours | Design | Weapon concept with physics calculations |
| **4** | [Drivetrain Design](drivetrain-design.md) | 1-2 hours | Design | Motor selection and wheel sizing |
| **5** | [CAD Your Bot](cad-your-bot.md) | 4-8 hours | CAD Modeling | Complete Onshape assembly with mass verification |
| **6** | [3D Printing Guide](3d-printing-guide.md) | 1-2 hours | Reading | STL files exported, print orientation notes |
| **7** | [Chassis Assembly](assembly-and-wiring.md) | 2-3 hours | Mechanical Build | Fully assembled chassis (no electronics) |
| **8** | **Competition Prep** | 1 hour | Practice | Driver practice, strategy planning |

**Total Student Time:** 10-19 hours

---

### Student Handoff Points

#### Handoff 1: After Phase 5 (CAD Complete)

**What Student Does:**
1. Export all parts as STL files from Onshape
2. Document print orientation notes (which parts need supports, which need vertical orientation)
3. Submit STL files + notes to teacher

**What Teacher Does:**
1. Review STLs for printability
2. Slice files with optimized settings (layer height, infill, perimeters)
3. Print all parts (12-24 hour print time typically)
4. Return printed parts to student

---

#### Handoff 2: After Phase 7 (Mechanical Assembly Complete)

**What Student Does:**
1. Complete full mechanical assembly (frame, motors press-fit, weapon mounted)
2. Verify robot fits within 6" × 6" bounding box
3. Document any mechanical issues encountered
4. Submit assembled chassis to teacher

**What Teacher Does:**
1. Install and configure Malenki Nano control board
2. Wire all motors and battery connector
3. Bind receiver to student's transmitter
4. Conduct failsafe testing
5. Verify weapon lock mechanism
6. Return competition-ready robot to student

---

### Student Success Criteria

Students successfully complete the project when they can demonstrate:

**Design Competency:**
- [ ] Explain design tradeoffs made (weapon vs armor vs speed)
- [ ] Justify weapon type choice based on archetype research
- [ ] Show physics calculations for weapon energy and bite

**CAD Proficiency:**
- [ ] Navigate Onshape assembly efficiently
- [ ] Use mass properties tool to verify weight budget
- [ ] Export STL files with correct orientation

**Mechanical Skills:**
- [ ] Press-fit N20 motors without cracking pockets
- [ ] Balance weapon on axle
- [ ] Assemble chassis square and stable

**Competition Readiness:**
- [ ] Drive robot smoothly in all directions
- [ ] Understand weapon safety protocols (lock, power-on sequence)
- [ ] Articulate match strategy

---

## Teacher Workflow

### Teacher Responsibilities Overview

Teachers handle three critical phases:

| Phase | Module | Responsibility | Duration |
|-------|--------|----------------|----------|
| **6b** | 3D Printing (Execution) | Print all student parts with optimized settings | 12-24 hours (print time) + 1 hour (slicing/setup) |
| **8** | [Malenki Nano Setup](malenki-nano-setup.md) | Install electronics, wire motors, configure receiver | 2-3 hours per robot |
| **9** | [Testing & Safety](testing-and-safety.md) | Failsafe tests, safety verification, weapon lock check | 1-2 hours per robot |

**Total Teacher Time per Robot:** 4-6 hours (excluding print time)

**Why Teacher-Only?**
- **Safety:** LiPo batteries, brushless motors, and weapon systems require expertise
- **Complexity:** Malenki Nano wiring has many failure modes (polarity, binding, ESC calibration)
- **Liability:** Spinning weapons present injury risk if improperly configured
- **Efficiency:** Teacher can wire 5 robots faster than 5 students learning from scratch

---

### Teacher Module Summaries

#### Phase 6b: 3D Printing (Execution)

**Input:** Student STL files + orientation notes
**Output:** Printed parts ready for assembly

**Key Teacher Actions:**
1. Review STLs in slicer (check for errors, verify dimensions)
2. Set optimized print settings:
   - **Chassis/frame:** PLA+, 0.2mm layer height, 30% gyroid infill, 4 perimeters
   - **Weapon:** PETG or PLA+, 0.15mm layer height, 50% infill, maximize strength
   - **Armor/wedge:** TPU, 0.3mm layer height, 10% infill, flexible impact absorption
3. Orient parts correctly (reference 3D Printing Guide module)
4. Print, inspect for defects, reprint if necessary

**Common Issues:**
- Warping on large chassis plates → use brim or raft
- Weak motor pockets → print vertically for layer strength
- Weapon imbalance → verify solid infill, no voids

---

#### Phase 8: Malenki Nano Setup

**Input:** Assembled chassis from student
**Output:** Fully wired, tested robot

**Key Teacher Actions:**
1. Mount Malenki Nano on chassis (double-sided foam tape)
2. Wire drive motors (check polarity!)
3. Wire weapon motor (brushless ESC to weapon motor)
4. Install battery connector (XT30 or XT60)
5. Bind receiver to student's transmitter
6. Calibrate ESCs if needed
7. Test all functions (drive forward/back/turn, weapon spin up)

**Critical Safety Checks:**
- [ ] Correct motor polarity (forward = forward, not backward)
- [ ] Weapon lock installed and functional
- [ ] Failsafe configured (robot stops when transmitter turns off)
- [ ] Battery connector secure (no shorts possible)

**Time Estimate:** 2-3 hours per robot (first robot takes longer, subsequent faster)

---

#### Phase 9: Testing & Safety

**Input:** Wired robot from Phase 8
**Output:** Competition-certified robot

**Key Teacher Actions:**
1. **Failsafe Test:** Turn off transmitter while robot powered on → verify all motors stop
2. **Polarity Test:** Command forward → verify robot drives forward
3. **Weapon Lock Test:** Verify weapon lock physically prevents weapon from spinning
4. **LiPo Safety Briefing:** Teach student safe charging, storage, disposal procedures
5. **Arena Rules Briefing:** Review power-on sequence, weapon lock protocol, match procedures

**Pass Criteria:**
- [ ] Failsafe works reliably (3 successful tests)
- [ ] All motor directions correct
- [ ] Weapon lock functional
- [ ] Student can demonstrate safe power-on sequence
- [ ] Robot fits in 6" × 6" × 6" bounding box
- [ ] Robot weighs 450-550g (±50g tolerance)

**If Robot Fails:**
- Diagnose issue (wiring, binding, ESC calibration)
- Fix and retest
- Do NOT certify robot until all safety checks pass

---

## Module Structure

### Standard Module Format

Every module follows this consistent structure:

#### 1. Title (H1)
Example: `# Module 3: Weapon Design`

#### 2. Role Marker (Admonition)
Indicates who completes the module:
```markdown
!!! info "Student Module"
    This module is completed by you.
```
OR
```markdown
!!! warning "Teacher Module"
    This module is teacher-supervised only.
```

#### 3. Introduction (1-2 paragraphs)
What this module covers and why it matters.

#### 4. Learning Objectives (3-5 bullet points)
Example:
```markdown
## What You'll Learn
- [ ] Calculate weapon kinetic energy
- [ ] Determine optimal tooth spacing
- [ ] Design weapon for manufacturability
```

#### 5. Prerequisites
What must be completed before starting this module.

#### 6. Main Content (H2/H3 headings)
Structured instructional content with:
- Step-by-step procedures
- Visual aids (photos, diagrams, screenshots)
- Technical specifications
- Design guidance

#### 7. Common Mistakes (2-3 callouts minimum)
Example:
```markdown
!!! warning "Common Mistake: Weapon Too Heavy"
    Students often design massive weapons that exceed weight budget.
    Fix: Use mass properties tool continuously during design.
```

#### 8. Success Criteria (Checklist)
Example:
```markdown
## How You Know You're Done
✅ You can demonstrate:
- Weapon spins freely on axle
- Mass properties show weapon at 200-250g
- Onshape assembly passes interference check
```

#### 9. Next Step (Link to next module)
Example:
```markdown
## Next Step
Continue to [Module 5: CAD Your Bot](cad-your-bot.md).
```

---

### Optional Module Sections

Some modules also include:
- **Estimated Time:** Duration guidance
- **Tools/Materials Needed:** Required equipment
- **Reference Resources:** External learning materials
- **Glossary of Terms:** Technical vocabulary definitions

---

## Learning Outcomes

### By completing the BattleBots project, students will be able to:

#### Engineering Design
- Design a complete robot system under strict weight and size constraints
- Make engineering tradeoffs between weapon power, armor, and drivetrain
- Iterate on designs based on testing feedback
- Document design decisions with technical justification

#### CAD & Manufacturing
- CAD a full robot assembly in Onshape with proper mass analysis
- Use mass properties tool to verify weight budget throughout design
- Export STL files with correct orientation for 3D printing
- Understand layer orientation principles for structural strength

#### Materials & Fabrication
- Select appropriate materials (PLA+, TPU, PETG) for different robot components
- 3D print structural and functional parts with optimized settings
- Understand material properties (rigidity, flexibility, impact resistance)

#### Mechanical Assembly
- Press-fit motors without cracking printed pockets
- Assemble chassis with proper alignment and squareness
- Balance spinning weapons on axles
- Diagnose and fix mechanical issues (binding, misalignment)

#### Electronics & Safety (Teacher-Guided)
- Understand Malenki Nano wiring and configuration
- Recognize correct motor polarity
- Demonstrate safe LiPo battery handling
- Follow strict safety protocols for spinning weapons
- Set up and test failsafe systems

#### Competition & Strategy
- Drive robot effectively in 6-axis control (translation + rotation + weapon)
- Develop match strategy based on opponent analysis
- Adapt driving technique to robot archetype (spinner, wedge, control)
- Handle pressure of live competition

---

## Equipment & Materials

### Per-Student Bill of Materials

#### Electronics
| Component | Qty | Cost (approx) | Source |
|-----------|-----|---------------|--------|
| Malenki Nano control board | 1 | $45 | Repeat Robotics |
| N20 3V 300RPM motors | 2 | $8 | Amazon, AliExpress |
| Brushless weapon motor | 1 | $15 | HobbyKing, AliExpress |
| LiPo battery (2S 300-500mAh) | 1 | $10 | HobbyKing |
| Radio transmitter/receiver | 1 | $30 | (shared, already owned) |
| Battery connector (XT30) | 1 | $2 | Amazon |
| **Electronics Subtotal** | | **~$110** | |

#### Hardware & Fasteners
| Component | Qty | Cost (approx) | Source |
|-----------|-----|---------------|--------|
| M3 screws (assorted) | 20 | $5 | Hardware store |
| Weapon axle (3mm shaft) | 1 | $3 | Hardware store |
| Set screws for weapon | 2 | $1 | Hardware store |
| Wheels (30-40mm diameter) | 4 | $8 | 3D printed or purchased |
| **Hardware Subtotal** | | **~$17** | |

#### 3D Printing Materials
| Material | Usage | Cost (approx) | Notes |
|----------|-------|---------------|-------|
| PLA+ (1kg spool) | Chassis, frame | $25 | Shared across multiple students |
| TPU (250g) | Armor, wedge | $10 | Flexible, impact-resistant |
| PETG (250g) | Weapon, high-stress parts | $8 | Optional, PLA+ often sufficient |
| **Printing Subtotal** | | **~$10/student** | (Prorated from shared spools) |

#### Tools (Shared, One-Time Purchase)
| Tool | Cost (approx) | Notes |
|------|---------------|-------|
| Soldering iron + solder | $30 | For wiring |
| Wire strippers | $10 | |
| Small screwdriver set | $15 | |
| Digital scale (500g capacity) | $15 | For weight verification |
| Calipers | $20 | For measuring parts |
| Hot glue gun | $10 | For securing wiring |
| **Tools Total** | **~$100** | One-time investment |

#### Safety Equipment (Shared)
| Item | Cost (approx) | Notes |
|------|---------------|-------|
| Safety glasses | $5/student | Required during assembly and competition |
| Fireproof LiPo charging bag | $15 | One per charging station |
| LiPo voltage checker | $8 | Monitor battery health |
| Arena (plexiglass enclosure) | $200 | DIY construction |
| **Safety Total** | **~$230** | One-time investment |

---

### Total Cost Estimate

**Per Student:** ~$137 (electronics + hardware + printing materials)
**One-Time Shared Equipment:** ~$330 (tools + safety equipment + arena)

**For a class of 10 students:**
- Student materials: 10 × $137 = $1,370
- Shared equipment: $330
- **Total:** ~$1,700

---

## Safety Requirements

### Critical Safety Protocols

#### 1. LiPo Battery Safety

**Storage:**
- Store LiPo batteries in fireproof bags when not in use
- Never leave batteries unattended while charging
- Charge in open area away from flammable materials
- Use LiPo-compatible charger with balance charging

**Handling:**
- Inspect battery before each use (check for puffing, damage, bent connector)
- Never use puffy or damaged batteries
- Dispose of damaged batteries properly (discharge to 0V, recycle at battery recycling center)

**Warning Signs:**
- **Puffy battery:** Swollen appearance = gas buildup = DANGER
- **Hot battery after use:** Normal, let cool before charging
- **Battery hot during charging:** STOP CHARGING, disconnect immediately

---

#### 2. Spinning Weapon Safety

**Weapon Lock Requirements:**
- Every robot MUST have a weapon lock mechanism
- Lock must physically prevent weapon from spinning
- Lock must be easy to install/remove without tools
- Lock must be painted bright color (red/orange) for visibility

**Power-On Sequence (STRICT):**
1. Verify weapon lock is installed
2. Power on robot
3. Test drive motors (verify failsafe works)
4. Place robot in sealed arena
5. Remove weapon lock
6. Test weapon spin-up in arena

**Power-Off Sequence:**
1. Let weapon spin down completely
2. Install weapon lock
3. Power off robot
4. Remove from arena

**NEVER:**
- ❌ Power on weapon outside arena
- ❌ Remove weapon lock outside arena
- ❌ Touch spinning weapon (even if moving slowly)
- ❌ Bypass weapon lock "just to test quickly"

---

#### 3. Failsafe Testing

**What is a Failsafe?**
If radio signal is lost (transmitter turns off, battery dies, interference), robot must STOP all motors immediately.

**How to Test:**
1. Power on robot (weapon lock installed)
2. Power on transmitter
3. Verify robot responds to controls
4. **Turn off transmitter while robot is powered on**
5. **Verify all motors stop immediately (within 1 second)**
6. Power transmitter back on
7. Verify robot responds to controls again
8. **Repeat 3 times to confirm consistency**

**Pass Criteria:**
- All motors stop within 1 second of transmitter power-off
- Test passes 3 times in a row
- Robot does NOT continue driving or spinning weapon after signal loss

**If Failsafe Test Fails:**
- DO NOT compete with robot
- Teacher must reconfigure receiver failsafe settings
- Retest until passes

---

#### 4. Personal Protective Equipment (PPE)

**Required During Assembly:**
- Safety glasses when using tools (cutting, drilling, press-fitting motors)

**Required During Competition:**
- Safety glasses for all participants and spectators
- Closed-toe shoes
- Long pants recommended (no shorts)

**Arena Requirements:**
- Sealed plexiglass or polycarbonate enclosure
- Minimum 2' × 2' fighting area
- Walls minimum 12" tall
- Lid secured during matches
- Clear visibility for driver and judge

---

## Assessment & Success Criteria

### How to Evaluate Student Progress

#### Formative Assessment (During Project)

**Module 2-4: Design Phase**
- Student can articulate robot archetype choice with technical justification
- Physics calculations shown (weapon energy, bite, gear ratio)
- Design tradeoffs documented (weight budget allocation)

**Module 5: CAD Phase**
- Onshape assembly shows all parts properly mated
- Mass properties verify robot within weight limit (450-550g)
- No interference detected in assembly
- STL files export correctly

**Module 6-7: Fabrication Phase**
- Parts orient correctly for 3D printing
- Mechanical assembly shows care (no cracked pockets, square chassis)
- Student troubleshoots issues independently (motor binding, misalignment)

---

#### Summative Assessment (Final Evaluation)

**Technical Documentation (20 points):**
- [ ] Design justification written (archetype, weapon type, tradeoffs) (10 pts)
- [ ] Physics calculations documented (5 pts)
- [ ] Onshape assembly complete with mass properties (5 pts)

**Mechanical Execution (30 points):**
- [ ] Robot fits within 6" × 6" × 6" bounding box (5 pts)
- [ ] Robot weighs 450-550g (5 pts)
- [ ] Mechanical assembly quality (no broken parts, good fit) (10 pts)
- [ ] Weapon spins freely, balanced (10 pts)

**Safety Competency (20 points):**
- [ ] Demonstrates weapon lock installation (5 pts)
- [ ] Recites power-on sequence correctly (5 pts)
- [ ] Explains failsafe purpose and function (5 pts)
- [ ] Handles LiPo battery safely (5 pts)

**Competition Performance (30 points):**
- [ ] Robot drives effectively (smooth, responsive) (10 pts)
- [ ] Weapon functions during match (10 pts)
- [ ] Sportsmanship and strategy demonstrated (10 pts)

**Total:** 100 points

**Grading Scale:**
- 90-100: Excellent (A) — Robot competitive, documentation thorough
- 80-89: Proficient (B) — Robot functional, minor issues
- 70-79: Developing (C) — Robot completed but significant flaws
- 60-69: Needs Improvement (D) — Robot incomplete or unsafe
- Below 60: Incomplete (F) — Did not finish project

---

#### Alternative Assessment: Portfolio

For students who prefer documentation over competition:

**Portfolio Contents:**
1. Design journal (sketches, iteration notes, decision log)
2. Onshape assembly with annotated views
3. Mass properties analysis with weight budget breakdown
4. Build log (photos of assembly process, challenges encountered)
5. Lessons learned reflection (what worked, what didn't, what to improve)

**Assessed on:**
- Depth of technical documentation
- Quality of CAD work
- Evidence of iteration and problem-solving
- Reflection quality

---

## Troubleshooting

### Common Issues & Solutions

#### CAD Phase

**Issue:** Robot exceeds 500g weight limit in Onshape
- **Cause:** Weapon or armor too heavy
- **Fix:** Use mass properties to identify heaviest parts, reduce thickness or switch to lighter material (TPU instead of PLA+)

**Issue:** Parts interfere in assembly (red X in Onshape)
- **Cause:** Overlapping geometry
- **Fix:** Use Section View to identify interference location, adjust part dimensions or mate offsets

**Issue:** Weapon won't mate to axle
- **Cause:** Hole diameter incorrect or axle length wrong
- **Fix:** Measure actual axle diameter with calipers, update CAD hole to match (3mm typical)

---

#### 3D Printing Phase

**Issue:** Chassis warps during printing
- **Cause:** Large flat part, poor bed adhesion
- **Fix:** Add brim (5-10mm), increase bed temperature, ensure bed level

**Issue:** Motor pockets crack when press-fitting motors
- **Cause:** Pocket printed horizontally (weak layer lines)
- **Fix:** Reprint pocket vertically so layer lines perpendicular to force

**Issue:** Weapon has voids or gaps
- **Cause:** Insufficient infill or wall thickness
- **Fix:** Increase infill to 50-80%, use 4+ perimeters, verify solid infill setting

---

#### Assembly Phase

**Issue:** Motors won't press-fit into pockets
- **Cause:** Pocket too small, dimensional shrinkage during print
- **Fix:** Gently file pocket opening, or design pocket 0.2mm larger in CAD

**Issue:** Weapon wobbles on axle
- **Cause:** Axle hole too large, weapon not balanced
- **Fix:** Use tighter fit (3.0mm hole for 3mm axle), add set screw to secure weapon, balance weapon by adding/removing material

**Issue:** Chassis not square, wheels don't touch ground evenly
- **Cause:** Parts assembled crooked
- **Fix:** Disassemble, verify mating surfaces flat, reassemble with attention to alignment

---

#### Electronics Phase (Teacher)

**Issue:** Motors spin but wrong direction
- **Cause:** Motor polarity reversed
- **Fix:** Swap motor wires (red ↔ black)

**Issue:** Weapon motor doesn't spin
- **Cause:** ESC not calibrated, motor wires incorrect, ESC not powered
- **Fix:** Check all connections, calibrate brushless ESC, verify battery voltage

**Issue:** Failsafe doesn't work
- **Cause:** Receiver failsafe not configured
- **Fix:** Enter receiver failsafe programming mode, set all channels to stop position, save

**Issue:** Robot doesn't respond to transmitter
- **Cause:** Receiver not bound to transmitter
- **Fix:** Enter binding mode on receiver, bind to transmitter following manufacturer instructions

---

#### Competition Phase

**Issue:** Robot drives sluggishly
- **Cause:** Low battery voltage, motor binding, wheels slipping
- **Fix:** Charge battery, check for mechanical binding, clean wheels

**Issue:** Weapon spins slowly or stalls
- **Cause:** Weapon too heavy, motor underpowered, weapon hitting chassis
- **Fix:** Reduce weapon mass, ensure clearance between weapon and chassis, upgrade weapon motor

**Issue:** Robot flips over when weapon spins up
- **Cause:** Weapon too powerful, robot too light, center of mass too high
- **Fix:** Add weight low in chassis, reduce weapon power, redesign with lower profile

---

## Competition Day

### Competition Format

**Match Structure:**
- 3-minute matches
- 1v1 battles in sealed arena
- Best of 3 rounds (optional, or single elimination)

**Winning Conditions:**
1. **Knockout (KO):** Opponent immobilized for 10 seconds
2. **Judge Decision:** If both robots functional after 3 minutes, judge awards win based on aggression, damage, control

---

### Pre-Match Checklist

**For Students (Pre-Pit):**
- [ ] Robot fully assembled
- [ ] Battery charged (verify voltage >7.4V for 2S)
- [ ] Weapon lock installed
- [ ] Wheels clean, no debris
- [ ] All screws tight

**For Teacher (Safety Inspection):**
- [ ] Robot fits in 6" × 6" × 6" box
- [ ] Robot weighs 450-550g
- [ ] Failsafe test passes
- [ ] Weapon lock functional
- [ ] Battery secure
- [ ] No sharp edges that could damage arena

---

### Match Procedure

1. **Placement:** Both robots placed in arena with weapon locks installed
2. **Power On:** Drivers power on transmitters, then robots
3. **Ready Check:** Judge verifies both robots respond to controls
4. **Lock Removal:** Judge confirms arena sealed, signals drivers to remove weapon locks
5. **Countdown:** "3... 2... 1... Fight!"
6. **Match:** 3 minutes of combat
7. **Match End:** Judge signals stop, drivers power off robots
8. **Lock Installation:** Drivers install weapon locks before opening arena
9. **Retrieval:** Robots removed from arena

---

### Sportsmanship Expectations

**Required:**
- Shake hands before and after match
- Congratulate opponent
- Offer to help repair opponent's robot if damaged

**Prohibited:**
- Trash talking or unsportsmanlike conduct
- Intentionally dangerous driving (targeting opponent's driver, ramming arena walls)
- Tampering with opponent's robot

**Spirit of Competition:**
- Everyone's first robot will have issues
- Mechanical failures are learning opportunities
- Winning is less important than learning and improving

---

### Post-Competition Debrief

**Student Reflection Questions:**
1. What worked well with your robot design?
2. What would you change in a redesign?
3. What surprised you during matches?
4. What did you learn from your opponent's designs?
5. What technical skills improved most during this project?

**Teacher Feedback Areas:**
- Design process quality
- Technical problem-solving
- Safety adherence
- Sportsmanship
- Iteration and improvement mindset

---

## Conclusion

The BattleBots curriculum provides a comprehensive, safety-focused pathway for students to design and compete with combat robots. By clearly separating student-driven design work from teacher-supervised electronics and safety, the curriculum balances hands-on learning with responsible risk management.

**Key Success Factors:**
- Clear handoff points between student and teacher phases
- Emphasis on safety protocols and failsafe testing
- Realistic weight and size constraints driving engineering tradeoffs
- Competition environment motivating iteration and improvement

**Next Steps:**
- Review [VISUAL_ASSETS.md](VISUAL_ASSETS.md) for image integration guidance
- See [MAINTENANCE.md](MAINTENANCE.md) for curriculum update procedures
- Check [LICENSE_COMPLIANCE.md](LICENSE_COMPLIANCE.md) for content usage policies

---

**Document Version:** 2.0
**Last Updated:** March 13, 2026
**Next Review:** Before 2027 competition season
