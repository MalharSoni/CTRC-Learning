# BattleBots Curriculum Style Guide

**Version:** 1.0
**Last Updated:** March 13, 2026
**Purpose:** Ensure consistency in voice, tone, terminology, and formatting across all curriculum content

---

## Voice & Tone

### Voice Characteristics

**Voice:** Enthusiastic educator and experienced builder
**Tone:** Encouraging but realistic about challenges
**Perspective:** Second person ("you"), direct address

The curriculum voice is someone who:
- Has built many robots and learned from mistakes
- Genuinely wants students to succeed
- Respects student intelligence and capability
- Is honest about difficulty without being discouraging
- Shares practical wisdom from real experience

### What to Do

**Use active voice:**
- ✅ "Design your chassis with reinforced corners"
- ❌ "The chassis should be designed with reinforced corners"

**Be encouraging:**
- ✅ "This step is challenging, but you can do it. Take your time and double-check measurements."
- ❌ "This is easy, just do it quickly."

**Be honest about difficulty:**
- ✅ "Balancing your weapon is critical and may take several iterations. Check the center of mass, adjust the geometry, and check again."
- ❌ "Balancing is super hard and most beginners fail at this."

**Use real examples:**
- ✅ "When Team 839X built their first robot, they discovered this exact problem."
- ❌ "In theory, this should work."

**Address students directly:**
- ✅ "You need to check clearance at every rotation angle"
- ❌ "Students should check clearance at every rotation angle"

### What Not to Do

**Don't use passive voice:**
- ❌ "The weapon should be rotated manually in order to observe whether sufficient clearance exists"
- ✅ "Spin the weapon by hand. Watch for any contact with the chassis."

**Don't oversimplify:**
- ❌ "Just design a box chassis and you'll be fine!"
- ✅ "Start with a rectangular chassis for simplicity, but add internal ribs for strength."

**Don't talk down to students:**
- ❌ "Even a beginner can do this simple step"
- ✅ "This step requires patience and precision"

**Don't use unnecessary jargon:**
- ❌ "Ensure the kinematic chain maintains proper tolerances"
- ✅ "Make sure your drivetrain parts fit together with minimal wobble"

### Tone Examples by Scenario

#### Explaining Complex Concepts
**Good:**
> "Your weapon needs to be balanced — the center of mass should sit exactly on the rotation axis. If it's off-center, the weapon will vibrate violently and destroy itself (and possibly your motor). Check this in Onshape using mass properties. If the center of mass is more than 1mm off-axis, redesign your weapon geometry."

**Too casual:**
> "Make sure your weapon doesn't wobble like crazy! Just check the mass props thing in Onshape and you're good to go."

**Too formal:**
> "It is critical to ensure that the rotational weapon component's center of mass is positioned such that it coincides precisely with the axis of rotation, as deviation from this condition will result in deleterious vibrational effects."

#### Encouraging Through Difficulty
**Good:**
> "Weapon balancing is challenging but critical. Check your center of mass in Onshape — it needs to be within 1mm of the rotation axis. If it's off, adjust your weapon geometry and check again. It may take a few iterations to get right, and that's completely normal."

**Too discouraging:**
> "Balancing weapons is extremely difficult and most beginners get this wrong. You'll probably have to redesign multiple times."

**Too dismissive:**
> "Balancing is easy if you just follow the steps."

#### Safety Warnings
**Good:**
> "Never power on your weapon outside the arena. A 500g weapon spinning at 10,000 RPM can cause serious injury — lacerations, broken bones, or eye damage. Always place your robot in the sealed arena before removing the weapon lock."

**Too casual:**
> "Don't turn on the weapon outside the box or you might get hurt."

**Too alarmist:**
> "WARNING: WEAPON WILL DEFINITELY CAUSE SEVERE INJURY OR DEATH IF POWERED OUTSIDE ARENA."

---

## Writing Style

### Sentence Length & Structure

**Mix sentence lengths for readability:**
- Short sentences (5-10 words) for impact and emphasis
- Medium sentences (15-20 words) for explanation
- Avoid long complex sentences (>25 words)

**Good example:**
> "Your chassis needs internal ribs. These prevent the walls from flexing under impact. Add at least two ribs running front-to-back."

**Bad example:**
> "The chassis structure requires internal reinforcement members commonly referred to as ribs which serve the purpose of preventing the wall structures from experiencing excessive flexion when subjected to impact forces during combat."

### Paragraph Length

**Body paragraphs:** 2-4 sentences
**Single-sentence paragraphs:** Use for emphasis or key points

**Good example:**
> "Your N20 motors have a D-shaped shaft. This prevents the wheel from spinning freely on the motor shaft — the flat side locks it in place.
>
> Press the wheel onto the shaft firmly. You should feel resistance, but don't force it so hard that you bend the motor shaft."

### Lists

**Use numbered lists for:**
- Sequential steps in a process
- Ordered priorities
- Procedures that must follow a specific order

**Use bulleted lists for:**
- Options or choices
- Features or characteristics
- Non-sequential items

**Use checklists for:**
- Success criteria
- Prerequisites
- Verification steps

**Examples:**

Sequential (numbered):
```markdown
1. Open Onshape and create a new Part Studio
2. Sketch a rectangle 150mm × 120mm
3. Extrude the rectangle 3mm
```

Non-sequential (bullets):
```markdown
- Drum spinners have wide attack area
- Vertical discs have kinetic energy advantage
- Undercutters get beneath opponent armor
```

Success criteria (checklist):
```markdown
- [ ] Weapon spins freely without touching chassis
- [ ] Robot weighs between 450g and 550g
- [ ] All screws are tight
```

---

## Terminology Standards

### Primary Terms (Always Use These)

Use the **first option** consistently. Avoid variants unless specifically needed.

| Use This | Not These |
|----------|-----------|
| Robot | bot, machine, build, creation |
| Chassis | frame (except for aluminum frames) |
| Weapon | blade (except bar blades specifically) |
| Motor | actuator (unless distinguishing from servos) |
| N20 motor | N20 gearmotor, micro motor, small motor |
| Beetleweight | 1lb class (except when explaining) |
| Combat robotics | robot combat, battlebots (lowercase) |
| LiPo battery | battery, LiPo, cell |
| Weapon lock | lock, safety lock |
| Press-fit | press fit, friction fit |
| D-shaft | D-shaped shaft, flat shaft |

### Terms to Define on First Use

When introducing these terms, provide a clear definition:

**Bite:**
> "Bite is the depth your weapon cuts into the opponent (typically 10-15mm for beetleweights)."

**Clearance:**
> "Clearance is the gap between moving parts. Your weapon needs at least 2mm clearance from the chassis everywhere."

**Press-fit:**
> "Press-fit means the part is pushed firmly into place and held by friction — no glue or screws needed."

**Bounding box:**
> "The bounding box is the maximum size your robot can be. For beetleweights, this is 6 inches × 6 inches × 6 inches."

**Infill:**
> "Infill is the internal structure of a 3D printed part. More infill = stronger but heavier."

**Mass properties:**
> "Mass properties show the weight and center of mass of your CAD model. Use this to check if your design is balanced and under the weight limit."

### Abbreviations & Acronyms

**Always spell out on first use:**
- CAD (Computer-Aided Design)
- STL (Standard Tessellation Language)
- TPU (Thermoplastic Polyurethane)
- PLA (Polylactic Acid)
- ESC (Electronic Speed Controller)

**After first use, abbreviation is fine:**
> "Export your chassis as an STL file. Make sure the STL resolution is set to Fine."

### Safety Terminology

**Always use complete, specific terms for safety:**

| Use This | Not This |
|----------|----------|
| LiPo battery | battery, LiPo, cell |
| Weapon lock | lock, safety lock |
| Failsafe | fail-safe, fail safe |
| Sealed arena | arena, test box |

---

## Formatting Standards

### Headings

**H1 (`#`):** Module title only (one per page)
```markdown
# Module 3: Weapon Design
```

**H2 (`##`):** Major sections
```markdown
## Understanding Weapon Physics
```

**H3 (`###`):** Subsections
```markdown
### Calculating Bite
```

**Rules:**
- Never skip heading levels (no H1 → H3)
- Capitalize first word and proper nouns only
- Use sentence case, not Title Case

**Good:**
```markdown
# Module 5: CAD your bot
## Creating the chassis
### Adding internal ribs
```

**Bad:**
```markdown
# Module 5: CAD Your Bot
#### Adding Internal Ribs (skipped H2 and H3)
```

### Emphasis

**Bold (`**text**`):** Important terms, warnings, key concepts
> "Your weapon must have at least **2mm clearance** from the chassis at all rotation angles."

**Italic (`*text*`):** Emphasis, tool names in captions
> "Click *File* → *Export* to save your STL."

**Code (`` `text` ``):** File names, commands, specific values
> "Save your file as `chassis-bottom-v1.stl`."

**ALL CAPS:** Only for acronyms (CAD, STL, TPU)
Never for emphasis or shouting.

### Lists

**Numbered lists:**
```markdown
1. First step
2. Second step
3. Third step
```

**Bulleted lists:**
```markdown
- Option one
- Option two
- Option three
```

**Checklist format:**
```markdown
- [ ] Requirement one
- [ ] Requirement two
- [x] Completed requirement
```

**Rules:**
- Use `-` for bullets (not `*` or `+`)
- Indent sub-items with 2 spaces
- Add blank line before and after list
- Capitalize first word of each item
- Use periods if items are complete sentences

### Admonitions

**Format:**
```markdown
!!! type "Optional Title"
    Content goes here, indented 4 spaces.

    Multiple paragraphs are fine.
```

**Types:**

**!!! tip** — Helpful advice, pro tips, best practices
```markdown
!!! tip "Pro Tip"
    Take photos of your wiring before disconnecting anything. This makes reassembly much easier.
```

**!!! warning** — Common mistakes, cautions
```markdown
!!! warning "Common Mistake"
    Don't over-tighten M3 screws in 3D printed parts. The plastic will crack.
```

**!!! danger** — Safety critical information, immediate hazards
```markdown
!!! danger "Never Power Weapon Outside Arena"
    A spinning weapon can cause serious injury. Always test inside the sealed arena.
```

**!!! note** — Additional context or clarification
```markdown
!!! note
    Some motors use M2 screws instead of M3. Check your specific motor specifications.
```

**!!! success** — Checkpoints, completion markers
```markdown
!!! success "Checkpoint"
    Your chassis should now be 150mm × 120mm × 25mm and weigh approximately 100g.
```

**!!! info** — Background information, explanations
```markdown
!!! info "Why This Matters"
    Balanced weapons reduce vibration, which extends motor life and improves control.
```

### Tables

**Format:**
```markdown
| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Data     | Data     | Data     |
| Data     | Data     | Data     |
```

**Alignment:**
```markdown
| Left Aligned | Center Aligned | Right Aligned |
|:-------------|:--------------:|--------------:|
| Text         | Text           | 123           |
```

**Rules:**
- Always include header row
- Keep tables under 5 columns for mobile readability
- Use alignment (left for text, right for numbers)
- Keep cell content concise

**Example:**
```markdown
| Motor Type | RPM | Torque | Use Case |
|:-----------|----:|-------:|:---------|
| N20 300RPM | 300 | High   | Drivetrain |
| N20 1000RPM | 1000 | Low   | Weapons |
```

### Images

**Standard format:**
```markdown
![Descriptive alt text](path/to/image.jpg)
*Caption providing context or what to observe.*
```

**With specific sizing:**
```markdown
<figure markdown>
  ![Alt text](image.jpg){ width="100%" style="max-width: 800px" }
  <figcaption>Caption text</figcaption>
</figure>
```

**Rules:**
- Alt text: Describe what's shown (15-25 words)
- Caption: Explain what to learn or observe
- Always use relative paths
- Place images in `images/category/` subdirectories

**Good example:**
```markdown
![N20 motor showing D-shaft with flat side and mounting holes](../images/motors/n20-shaft-detail.jpg)
*The D-shaft has one flat side that locks into the wheel hub. Align this carefully during assembly.*
```

---

## Module Structure Template

Every module must follow this structure:

```markdown
# [Module Number]: [Module Title]

[Opening paragraph: What this module covers, why it matters, what students will build/learn]

---

## Before You Start

**Prerequisites:**
- [ ] [Prior module or knowledge required]
- [ ] [Tool or material needed]

**What You'll Learn:**
- [Learning objective 1]
- [Learning objective 2]
- [Learning objective 3]

**Time Required:** ~X hours

**Materials Needed:**
- [Item 1]
- [Item 2]

---

## [Main Section 1]

[Content with clear explanations, examples, and context]

### [Subsection 1.1]

[Detailed information, step-by-step instructions]

!!! tip "Pro Tip"
    [Helpful advice from experience]

### [Subsection 1.2]

[More content]

!!! warning "Common Mistake"
    [What students often do wrong and how to avoid it]

---

## [Main Section 2]

[Content continues]

### [Subsection 2.1]

[Content]

![Descriptive alt text](path/to/image.jpg)
*Caption explaining what to observe.*

---

## Common Mistakes

!!! warning "Mistake 1: [Specific Error]"
    [What happens and how to fix it]

!!! warning "Mistake 2: [Specific Error]"
    [What happens and how to fix it]

---

## Success Criteria

Before moving to the next module, verify:

- [ ] [Measurable requirement 1]
- [ ] [Measurable requirement 2]
- [ ] [Measurable requirement 3]

---

## Next Step

[Brief paragraph explaining what comes next and why]

Continue to [Module Name](link-to-module.md).
```

---

## Code & Technical Writing

### File Names

**Format:** `descriptive-name.extension`

**Rules:**
- All lowercase
- Hyphens only (no spaces or underscores)
- Descriptive and specific
- No version numbers or timestamps

**Good:**
- `chassis-bottom-plate.stl`
- `motor-mount-left.stl`
- `weapon-assembly.step`

**Bad:**
- `part3.stl` (not descriptive)
- `Chassis_Bottom.stl` (capitals and underscore)
- `chassis-v2-final-FINAL.stl` (version numbers)

### Technical Specifications

**Always include units:**
- ✅ "500g" not "500"
- ✅ "10,000 RPM" not "10k RPM"
- ✅ "3mm thick" not "3 thick"

**Use consistent units:**
- Metric for dimensions: mm, cm
- Imperial for bounding box: 6" × 6"
- Metric for weight: grams (g)
- Both for speeds: "300 RPM (5 revolutions/second)"

**Ranges:**
- ✅ "450-550g" or "450g to 550g"
- ❌ "450~550g"

### Software Instructions

**Format UI elements:**
- Use bold for menus and buttons: Click **File** → **Export**
- Use italic for field names: Enter value in *Dimension* field
- Use code for exact commands: Type `extrude` in the command bar

**Include screenshots for:**
- Complex UI operations (Onshape features)
- Dialog boxes with multiple options
- Settings that are hard to describe in text

**Don't include screenshots for:**
- Simple menu navigation
- Single-button clicks
- Text entry

---

## Accessibility & Inclusivity

### Accessible Language

**Use clear, simple language:**
- Short sentences
- Common words where possible
- Technical terms defined on first use

**Avoid idioms and culturally-specific references:**
- ❌ "This is a slam dunk solution"
- ✅ "This solution works reliably"

### Color & Visual Information

**Never use color alone to convey information:**
- ❌ "Click the green button"
- ✅ "Click the **Start** button (green)"

**In diagrams:**
- Use shapes, patterns, and labels in addition to color
- Ensure 4.5:1 contrast ratio for text

### Alt Text

**Every image needs descriptive alt text:**
- Describe what's shown
- Include relevant details
- Keep under 125 characters when possible
- Don't start with "Image of..." or "Photo of..."

**Good:**
> `![N20 motor dimensional drawing showing gearbox, D-shaft, and mounting holes labeled](image.jpg)`

**Bad:**
> `![Motor](image.jpg)`

---

## Examples of Voice & Tone

### Scenario 1: Introducing a Complex Topic

**Good:**
> "Weapon design combines physics, engineering, and strategy. You'll calculate bite depth, choose between kinetic and potential energy, and design for durability. This module will guide you through each decision, but ultimately the design is yours. Let's start with the physics."

**Too casual:**
> "Weapons are super cool! You can make them spin really fast and smash stuff. Let's build one!"

**Too formal:**
> "This module presents the theoretical framework for kinetic weapon systems in combat robotics applications, including mathematical derivations of energy transfer equations."

### Scenario 2: Explaining Why Something Matters

**Good:**
> "Weapon clearance matters because even a tiny contact during spin-up will destroy your weapon. A 500g bar spinning at 10,000 RPM hitting your chassis generates enough force to shatter 3D printed plastic instantly. Check clearance at every angle before assembly."

**Too vague:**
> "Make sure your weapon has clearance because it's important."

**Too technical:**
> "Insufficient clearance between the rotational weapon component and chassis structure will result in contact forces exceeding the yield strength of the thermoplastic substrate, causing catastrophic failure."

### Scenario 3: Giving Step-by-Step Instructions

**Good:**
> "Press the wheel onto the motor shaft firmly. You should feel resistance. If the wheel slides on easily with no resistance, the press-fit is too loose and the wheel will slip during driving. If you can't push it on at all, don't force it — you'll bend the motor shaft."

**Too brief:**
> "Press wheel onto shaft."

**Too verbose:**
> "Using both hands, apply firm and consistent pressure to the wheel component while aligning the D-shaped shaft receptacle with the motor's D-shaft output, ensuring that the flat face of the shaft corresponds with the flat internal surface of the wheel mounting boss, until the wheel is fully seated against the motor gearbox face."

---

## Quality Checklist for Writers

Before submitting any content, verify:

**Voice & Tone:**
- [ ] Active voice used throughout
- [ ] Second person ("you") perspective
- [ ] Tone is encouraging but realistic
- [ ] No condescending language

**Writing Quality:**
- [ ] Sentences vary in length (mix short and medium)
- [ ] Paragraphs are 2-4 sentences
- [ ] No jargon without definitions
- [ ] Technical accuracy verified

**Terminology:**
- [ ] Consistent terms used (robot not bot, chassis not frame)
- [ ] All abbreviations spelled out on first use
- [ ] Safety terms are complete and specific

**Formatting:**
- [ ] Headings follow hierarchy (H1 → H2 → H3)
- [ ] Lists formatted correctly (numbered vs bulleted)
- [ ] Admonitions use correct types
- [ ] Images have alt text and captions

**Structure:**
- [ ] Module follows template structure
- [ ] Prerequisites listed
- [ ] Learning objectives clear
- [ ] Success criteria measurable
- [ ] Links to next module

---

**Style Guide Version:** 1.0
**Last Updated:** March 13, 2026
**Next Review:** Before 2027 competition season

This style guide is a living document. Suggest improvements by opening an issue or submitting a pull request.
