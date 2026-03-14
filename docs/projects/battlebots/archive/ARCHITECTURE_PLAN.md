# BattleBots Curriculum Architecture Plan

**Date:** March 12, 2026
**Purpose:** Design improved content structure, visual asset strategy, and student experience flow

---

## Current State Assessment

### What Works Well ✅

1. **Content Structure**
   - Logical progression from rules → design → CAD → fabrication → assembly
   - Clear separation of student-executed vs teacher-executed tasks
   - Comprehensive coverage of physics, safety, and engineering principles

2. **Module Organization**
   - 9 well-defined modules with clear objectives
   - Consistent heading structure and formatting
   - Good use of admonitions (warnings, tips, examples)

3. **Technical Depth**
   - Appropriate level for high school students
   - Real engineering principles (moment of inertia, bite, weight budgets)
   - Balances theory with practical application

4. **Safety Integration**
   - Safety concepts woven throughout, not just one module
   - Clear "why" explanations for every rule
   - Appropriate emphasis on LiPo and spinning weapon hazards

### What Needs Improvement 🔧

1. **Visual Density**
   - Text-heavy sections lack visual breaks
   - Complex concepts explained without diagrams
   - Student workflow steps not visually demonstrated

2. **Navigation Experience**
   - Inconsistent messaging about which modules students access
   - Teacher content referenced but not accessible
   - No clear "student path" vs "teacher path" distinction

3. **Learning Progression**
   - Some modules assume prior knowledge not covered
   - Cross-references between modules could be stronger
   - Success criteria not explicit in every module

4. **Asset Organization**
   - Images scattered across source types (photos, screenshots, diagrams)
   - No consistent visual style
   - Missing integration of interactive elements

---

## Proposed Architecture Improvements

### 1. Content Restructuring

#### Create Two Distinct Paths

**Student Path (Primary):**
```
projects/battlebots/student/
  ├── index.md (Student landing page)
  ├── 01-rules-and-overview.md
  ├── 02-robot-archetypes.md
  ├── 03-weapon-design.md
  ├── 04-drivetrain-design.md
  ├── 05-cad-your-bot.md
  ├── 06-3d-printing-guide.md
  ├── 07-chassis-assembly.md
  └── teacher-handoff.md (What happens next)
```

**Teacher Path (Reference):**
```
projects/battlebots/teacher/
  ├── index.md (Teacher landing page)
  ├── electronics-setup.md (Malenki Nano)
  ├── safety-testing.md
  ├── arena-management.md
  ├── competition-judging.md
  └── troubleshooting.md
```

**Why This Works:**
- Clear separation eliminates confusion
- Students never see teacher content in navigation
- Teachers have dedicated resources for their workflow
- Allows independent updates to each path

**Alternative (Simpler):** Keep current structure but add explicit path markers in each module:
```markdown
!!! info "Student Module"
    This module is completed by students. Teacher assistance available for questions.

!!! info "Teacher Module"
    This module is completed by teachers/mentors. Students receive completed electronics.
```

**Recommendation:** Use the simpler alternative (path markers) - less file reorganization, clearer immediate fix.

---

### 2. Visual Asset Strategy

#### Categorize Visual Needs

**Category 1: Reference Photos**
- Purpose: Show real hardware, real robots, real results
- Examples: Robot archetypes, N20 motors, weapon locks
- Source: Existing projects, product photos, community submissions
- Style: Natural lighting, high resolution, clear subject focus

**Category 2: Process Photos**
- Purpose: Demonstrate assembly steps, techniques, procedures
- Examples: Motor installation, armor attachment, safety procedures
- Source: Create custom (photograph CTRC robots during builds)
- Style: Consistent lighting, hands visible doing the action, multiple angles

**Category 3: Technical Diagrams**
- Purpose: Explain physics, show forces, illustrate concepts
- Examples: Bite calculation, mass distribution, layer orientation
- Source: Create custom (vector diagrams)
- Style: Clean lines, limited colors, clear labels, isometric or 2D views

**Category 4: CAD Screenshots**
- Purpose: Guide students through Onshape workflow
- Examples: Bounding box sketch, mass properties, assembly views
- Source: Create custom (screenshot Onshape)
- Style: Onshape UI visible, feature tree expanded, relevant tools highlighted

**Category 5: Flowcharts/Sequences**
- Purpose: Show procedures, decision trees, workflows
- Examples: Power-on sequence, failsafe test, design review checklist
- Source: Create custom (Mermaid diagrams or vector graphics)
- Style: Simple shapes, directional arrows, numbered steps

#### Visual Asset Matrix

| Module | Photos | Diagrams | Screenshots | Flowcharts | Total |
|--------|--------|----------|-------------|------------|-------|
| Rules & Overview | 1 (weapon lock) | 0 | 0 | 0 | 1 |
| Robot Archetypes | 5 (examples) | 0 | 0 | 0 | 5 |
| Weapon Design | 1 (TPU hub) | 3 (physics) | 1 (balance) | 0 | 5 |
| Drivetrain Design | 1 (N20 motor) | 1 (D-shaft) | 0 | 0 | 2 |
| CAD Your Bot | 0 | 0 | 5 (workflow) | 0 | 5 |
| 3D Printing | 0 | 1 (exists) | 0 | 0 | 1 |
| Chassis Assembly | 8 (exist) | 0 | 0 | 0 | 8 |
| **Student Total** | **16** | **5** | **6** | **0** | **27** |
| | | | | | |
| Malenki Nano | 2 | 2 (wiring) | 0 | 0 | 4 |
| Testing & Safety | 2 (LiPo) | 0 | 0 | 2 (sequences) | 4 |
| **Teacher Total** | **4** | **2** | **0** | **2** | **8** |
| | | | | | |
| **Grand Total** | **20** | **7** | **6** | **2** | **35** |

**Note:** 2 missing from audit count (37 vs 35) because onshape screenshot exists and can be used twice.

---

### 3. Image Sourcing Strategy

#### Priority Tiers

**Tier 1: Critical for Student Understanding (Ship Blockers)**
1. Robot archetype photos (5) - Students can't choose design without seeing options
2. CAD workflow screenshots (5) - Guides entire design phase
3. Print orientation diagram (1) - ✅ EXISTS, already integrated

**Tier 2: Safety Critical (Compliance Required)**
1. Weapon lock photo (1) - Required safety hardware
2. LiPo safety photos (2) - Critical safety procedures
3. Failsafe test flowchart (1) - Most important safety concept

**Tier 3: Enhances Learning (High Value)**
1. Weapon design diagrams (3) - Makes physics concepts clear
2. Assembly photos (8) - ✅ EXIST, already integrated
3. N20 motor photo (1) - Hardware identification

**Tier 4: Nice to Have (Polish)**
1. Malenki Nano wiring diagrams (2) - Teacher modules
2. Testing procedure flowcharts (2) - Teacher modules
3. D-shaft diagram (1) - Technical detail

#### Sourcing Approach by Tier

**Tier 1: Robot Archetypes**
- **Option A:** Use attribution.md sources (Thingiverse, Instructables, Team Monsoon)
  - Verify licenses allow educational use ✅
  - Download high-res versions
  - Add proper attribution in captions
  - Time: 2 hours

- **Option B:** Source from combat robotics communities
  - Contact builders on Reddit r/battlebots
  - Request permission for educational use
  - Higher quality, more relevant examples
  - Time: 1 week (waiting for responses)

- **Recommendation:** Use Option A (sources already identified and vetted in attribution.md)

**Tier 1: CAD Screenshots**
- Create reference robot in Onshape
- Follow exact steps from "CAD Your Bot" module
- Screenshot at each major milestone
- Annotate with arrows/callouts in image editor
- Time: 3 hours

**Tier 2: Safety Photos**
- Photograph CTRC equipment/procedures
  - Weapon lock on actual robot
  - LiPo in fireproof bag with charger
  - Healthy vs puffy battery comparison
- Controlled environment, good lighting
- Time: 2 hours + equipment access

**Tier 3: Technical Diagrams**
- Create vector diagrams in Figma or Illustrator
- Use CTRC color scheme (if defined)
- Export as SVG for crisp rendering
- Time: 4 hours (all diagrams)

**Tier 4: Flowcharts**
- Use Mermaid diagram syntax (rendered by MkDocs)
- Or create in Figma and export as SVG
- Time: 2 hours

---

### 4. Visual Style Guide

#### Design Principles

1. **Clarity Over Beauty**
   - Every visual must teach something specific
   - No decorative images that don't add information
   - If a photo doesn't show critical details, reshoot it

2. **Consistency**
   - Same lighting setup for all process photos
   - Same annotation style for all diagrams
   - Same Onshape theme for all CAD screenshots

3. **Accessibility**
   - High contrast for diagrams
   - No color-only information (use shapes/patterns too)
   - Descriptive alt text for every image

#### Technical Specifications

**Photos:**
- Format: JPG (for photos with gradients)
- Max width: 1200px (resize larger images)
- Quality: 85% (good balance of size/quality)
- File naming: `descriptive-name-no-timestamps.jpg`

**Diagrams:**
- Format: SVG (vector, scales perfectly)
- Fallback: PNG at 2x resolution for complex diagrams
- Color palette: Limited (3-4 colors max)
- Line weight: 2-3px for clarity

**Screenshots:**
- Format: PNG (preserves UI sharpness)
- Max width: 1600px (Onshape needs detail)
- Annotations: Red arrows/boxes, 3px stroke
- Crop: Remove unnecessary UI chrome

**Flowcharts:**
- Format: SVG (Mermaid) or PNG (Figma)
- Node style: Rounded rectangles, 12-14pt text
- Arrow style: Single direction, clear labels
- Layout: Top-to-bottom flow (matches reading direction)

#### Annotation Standards

**For CAD Screenshots:**
```
→ Red arrow pointing to feature
□ Red box highlighting UI element
"Feature Name" - label with line pointing to object
```

**For Process Photos:**
```
① Numbered circles for sequence
✓ Green checkmarks for correct technique
✗ Red X for incorrect technique
```

**For Diagrams:**
```
Clear labels with leader lines
Force arrows in blue
Dimension lines in gray
Critical elements in red/orange
```

---

### 5. Student Experience Flow

#### Current Student Journey

```
Entry → Rules → Archetypes → Weapon → Drivetrain → CAD → Print → Assembly → ???
```

**Gap:** Student doesn't know what happens after assembly. Teacher takes over, but no handoff explanation.

#### Improved Student Journey

```
Entry →
  Rules (30 min) →
  Archetypes (45 min - visualize options) →
  Weapon (1-2 hrs - physics + tradeoffs) →
  Drivetrain (1-2 hrs - N20 specs + layout) →
  CAD (4-8 hrs - design in Onshape) →
    ↓ CHECKPOINT: Design Review with Mentor
  Print Guide (learn orientation, teacher prints) →
  Assembly (2-3 hrs - mechanical build) →
    ↓ CHECKPOINT: Mechanical Complete
  HANDOFF TO TEACHER (clear transition) →
    Teacher: Electronics, Wiring, Safety Testing →
    ↓ CHECKPOINT: Robot Functional
  COMPETE! (fight in arena)
    ↓
  ITERATE (repair, upgrade, fight again)
```

#### Add Checkpoint Pages

Create three new mini-modules:

**checkpoint-design-review.md**
- What mentor checks (weight, balance, feasibility)
- Common issues caught at this stage
- How to prepare for review meeting
- What happens if design needs changes

**checkpoint-mechanical-complete.md**
- Final mechanical checklist
- What to photograph before handoff
- What teacher will add next
- Expected timeline to competition

**checkpoint-ready-to-fight.md**
- Pre-fight inspection checklist
- Driver controls refresher
- Strategy tips
- Post-fight repair expectations

**Why:** Makes the workflow transparent, sets expectations, reduces student confusion about "what happens next?"

---

### 6. Module Enhancement Patterns

#### Add to Every Module

**1. Learning Objectives (Top)**
```markdown
## What You'll Learn

By the end of this module, you will be able to:

- [ ] Objective 1 (specific, measurable)
- [ ] Objective 2
- [ ] Objective 3
```

**2. Prerequisites (Top)**
```markdown
## Before You Start

You must complete:
- [x] Module X
- [x] Module Y

You should have:
- [ ] Tool/material/knowledge
```

**3. Success Criteria (Bottom)**
```markdown
## How You Know You're Done

✅ You can demonstrate/explain/show:
1. Specific outcome
2. Specific outcome
3. Specific outcome

✅ Your design/build/system has:
- Measurable quality 1
- Measurable quality 2
```

**4. Common Mistakes (Throughout)**
```markdown
!!! warning "Common Mistake: [Specific Error]"
    Students often [do incorrect thing].

    **Why it's wrong:** [Explanation]
    **How to avoid:** [Correct approach]
    **How to fix:** [If already done wrong]
```

**5. Time Estimates (Top)**
```markdown
⏱️ **Estimated Time:** 2-4 hours
- Reading/Planning: 30 min
- Active Work: 1.5-3 hours
- Review/Iteration: 30 min
```

#### Module-Specific Enhancements

**Robot Archetypes:**
- Add comparison table (vertical vs horizontal spinners)
- Add "Choose Your Archetype" decision tree
- Add "Pro Tip from Builders" callouts for each type

**Weapon Design:**
- Add worked example calculations
- Add "Design Challenge" exercises
- Add weapon design calculator (interactive?)

**CAD Your Bot:**
- Add video walkthrough (Loom screen recording?)
- Add downloadable starter template
- Add common CAD mistakes gallery

**3D Printing:**
- Add printability checklist
- Add material selection flowchart
- Add "How to Read Layer Lines" visual guide

**Chassis Assembly:**
- Add tools required list (with photos)
- Add assembly time-lapse (if possible)
- Add "Assembly Tips from CTRC Students" quotes

---

### 7. Cross-Module Integration

#### Create Interconnections

**Bidirectional Links:**

In Weapon Design:
```markdown
!!! tip "Coming Up: CAD Integration"
    The balance check you learn here will be critical in the
    [CAD Your Bot](cad-your-bot.md#step-9-design-review-checks) module.
```

In CAD Your Bot:
```markdown
!!! info "Applying Physics Knowledge"
    Use the weight budget concept from [Weapon Design](weapon-design.md#weight-budget)
    to allocate mass in your CAD model.
```

**Concept Reinforcement:**

Introduce concept → Apply concept → Verify concept

Example: "Center of Mass"
1. Introduced: Weapon Design (physics)
2. Applied: CAD Your Bot (check mass properties)
3. Verified: Chassis Assembly (balance physical robot)

**Create Reference Cheat Sheet:**

`quick-reference.md`:
- Key dimensions (6x6", 500g, N20 specs)
- Key equations (KE, bite, gear ratio)
- Key procedures (power-on sequence, failsafe test)
- Troubleshooting quick-lookup table

---

### 8. Documentation Consolidation

#### Current Documentation Files (7)

```
attribution.md ✅ Keep
IMAGE_SOURCES.md → Merge into SOURCING_GUIDE.md
INTEGRATION_GUIDE.md → Merge into README.md
SOURCING_SUMMARY.md → Delete (redundant)
RESOURCE_ACQUISITION_REPORT.md → Archive (internal only)
MANUAL_DOWNLOAD_CHECKLIST.md → Merge into SOURCING_GUIDE.md
DOWNLOAD_CHECKLIST.md → Merge into SOURCING_GUIDE.md
QUICK_REFERENCE.md ✅ Keep
```

#### Proposed Documentation Structure (4 Files)

**1. README.md** (Teacher Quick Start)
```markdown
# BattleBots Curriculum - Teacher Guide

## Quick Start
- How to use this curriculum
- Student workflow overview
- Teacher responsibilities
- Time expectations

## Visual Assets
- All images are attributed
- See ATTRIBUTION.md for sources
- See SOURCING_GUIDE.md to add new images

## Customization
- How to adapt for your class
- How to add new modules
- How to update content
```

**2. ATTRIBUTION.md** (Legal Compliance)
```markdown
# Image Attribution and Sources

[Keep current comprehensive format]
```

**3. SOURCING_GUIDE.md** (Maintainer Reference)
```markdown
# Visual Asset Sourcing Guide

## How to Find Images
[Consolidate from IMAGE_SOURCES + MANUAL_DOWNLOAD_CHECKLIST]

## How to Add Images
[Consolidate from INTEGRATION_GUIDE]

## Quality Standards
[Technical specs, style guide]

## Download Checklist
[Consolidate both checklists]
```

**4. CHANGELOG.md** (Version History)
```markdown
# BattleBots Curriculum Changelog

## v2.0.0 (March 2026)
- Complete visual asset integration
- Student/teacher path separation
- [etc]

## v1.0.0 (March 2026)
- Initial curriculum release
- [etc]
```

---

### 9. Interactive Elements

#### Add Where Beneficial

**CAD Module:**
- Embed Onshape viewer (if possible)
- Link to shared Onshape template

**Weapon Design:**
- Kinetic energy calculator (JS widget?)
- Bite calculator (input: RPM, teeth, speed → output: bite)

**Weight Budget:**
- Interactive weight calculator
- Drag-drop component weights to see total

**Checklists:**
- Make checkboxes actually checkable (localStorage in browser)
- Print-friendly checklist versions

**Implementation:** Use MkDocs extensions or simple JavaScript embeds.

---

### 10. Mobile Optimization

#### Current Issues

- Tables overflow on small screens
- Images may be too large
- Navigation may be cramped
- Equations might not render well

#### Improvements

**Responsive Tables:**
```css
.table-wrap {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

table {
  min-width: 600px; /* Force scroll on mobile */
}
```

**Responsive Images:**
```markdown
<figure markdown>
  ![Description](image.jpg){ width="100%" style="max-width: 800px" }
  <figcaption>Caption text</figcaption>
</figure>
```

**Mobile-Friendly Navigation:**
- Ensure hamburger menu works
- Test on actual devices
- Consider progressive disclosure for long pages

**Equation Rendering:**
- Test MathJax on mobile
- Provide text equivalents for critical equations

---

## Architecture Decision Summary

### Recommended Changes

| Change | Priority | Effort | Impact |
|--------|----------|--------|--------|
| Add path markers (student/teacher) | CRITICAL | Low | High |
| Complete Tier 1 visuals (archetypes + CAD) | CRITICAL | Medium | High |
| Add checkpoint pages (3 handoffs) | HIGH | Low | Medium |
| Complete Tier 2 visuals (safety) | HIGH | Medium | High |
| Add learning objectives to modules | MEDIUM | Medium | Medium |
| Create visual style guide | MEDIUM | Low | Medium |
| Consolidate documentation files | MEDIUM | Low | Low |
| Add cross-module links | LOW | Medium | Medium |
| Add interactive elements | LOW | High | Medium |
| Mobile optimization | LOW | Medium | Medium |

### What NOT to Change

- ✅ Module order (it's logical)
- ✅ Content depth (appropriate for audience)
- ✅ Safety emphasis (comprehensive)
- ✅ File naming for modules (clear and consistent)
- ✅ Technical accuracy (well-researched)

---

## Implementation Roadmap

### Phase 1: Critical Path (Ship Blockers)
**Goal:** Make curriculum production-ready for student use

1. Add student/teacher path markers to all modules
2. Fix index.md to remove teacher phases from student view
3. Complete Tier 1 visuals (robot archetypes + CAD screenshots)
4. Add checkpoint handoff pages
5. Add alt text to all images

**Outcome:** Students can complete full workflow without confusion.

### Phase 2: Safety & Quality (Compliance)
**Goal:** Meet safety demonstration standards

1. Complete Tier 2 visuals (weapon lock, LiPo safety, failsafe)
2. Add safety procedure flowcharts
3. Add learning objectives and success criteria to modules
4. Test on mobile devices

**Outcome:** Safety concepts clearly demonstrated, accessible on all devices.

### Phase 3: Enhancement (Polish)
**Goal:** Elevate curriculum to exceptional quality

1. Complete Tier 3 visuals (weapon diagrams, N20 motor, process photos)
2. Add cross-module reference links
3. Create quick-reference cheat sheet
4. Consolidate documentation files
5. Implement visual style guide

**Outcome:** Professional-grade curriculum with cohesive visual identity.

### Phase 4: Innovation (Differentiation)
**Goal:** Add unique interactive features

1. Build interactive calculators (KE, bite, weight budget)
2. Add video walkthroughs for complex procedures
3. Create printable worksheets/handouts
4. Gather student feedback and iterate

**Outcome:** Industry-leading combat robotics curriculum.

---

## Success Metrics

### Completion Criteria

**Content:**
- [ ] All 35 visual assets integrated
- [ ] All modules have learning objectives
- [ ] All modules have success criteria
- [ ] Student/teacher paths clearly marked

**Quality:**
- [ ] Zero broken links
- [ ] All images have descriptive alt text
- [ ] All sources properly attributed
- [ ] Mobile-responsive on 3+ devices tested

**Usability:**
- [ ] Student can complete workflow without teacher clarification
- [ ] Teacher can identify their responsibilities clearly
- [ ] Handoff points explicitly marked
- [ ] Time estimates accurate (validated by 3+ students)

### Validation Process

1. **Peer Review:** Have 2 other teachers review curriculum
2. **Student Pilot:** Run 3 students through workflow, collect feedback
3. **Accessibility Check:** Use WAVE or similar tool
4. **Mobile Test:** Test on iPhone, Android, tablet
5. **Print Test:** Ensure print-friendly CSS works

---

## Conclusion

The BattleBots curriculum has a **solid foundation** but needs **architectural clarity** and **visual completeness** to be production-ready.

**Key Improvements:**
1. Explicitly separate student vs teacher content (path markers)
2. Complete visual asset integration (35 total, prioritized)
3. Add workflow checkpoints (handoff transparency)
4. Standardize module structure (objectives, prerequisites, success criteria)
5. Create cohesive visual style (guide + enforcement)

**Implementation:** Use 5-agent parallel team (see AGENT_TEAM_PLAN.md) to execute all improvements in coordinated sprint.

---

**Architecture Plan Completed:** March 12, 2026
**Next Document:** AGENT_TEAM_PLAN.md (execution strategy)
