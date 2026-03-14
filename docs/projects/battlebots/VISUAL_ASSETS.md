# Visual Assets Guide

**Version:** 2.0
**Last Updated:** March 13, 2026
**Purpose:** Comprehensive guide to visual assets in BattleBots curriculum

---

## Table of Contents

1. [Asset Inventory](#asset-inventory)
2. [Sourcing Guidelines](#sourcing-guidelines)
3. [Image Specifications](#image-specifications)
4. [Integration Process](#integration-process)
5. [Attribution Requirements](#attribution-requirements)
6. [Missing Assets](#missing-assets)

---

## Asset Inventory

### Complete Visual Asset List (37 total)

#### ✅ Implemented (10 assets)

| Asset | Type | Location | Module | Status |
|-------|------|----------|--------|--------|
| hole-orientation-comparison.jpg | Diagram | `images/printing/` | 3D Printing | ✅ Live |
| frame-assembly.jpg | Photo | `images/assembly/` | Assembly | ✅ Live |
| motor-mounts-shaping.jpg | Photo | `images/assembly/` | Assembly | ✅ Live |
| armor-plates-cutting.jpg | Photo | `images/assembly/` | Assembly | ✅ Live |
| side-bumpers-assembly.jpg | Photo | `images/assembly/` | Assembly | ✅ Live |
| wedge-installation.jpg | Photo | `images/assembly/` | Assembly | ✅ Live |
| weapon-motor-mount.jpg | Photo | `images/assembly/` | Assembly | ✅ Live |
| weapon-blade-assembly.jpg | Photo | `images/assembly/` | Assembly | ✅ Live |
| shaft-collars-installation.jpg | Photo | `images/assembly/` | Assembly | ✅ Live |
| onshape-mass-properties-overview.png | Screenshot | `images/cad/` | CAD Your Bot | ⚠️ Exists but not integrated |

---

#### 🔴 Missing (27 assets)

**Robot Archetypes (5 missing):**
- Drum spinner example photo → `images/archetypes/`
- Eggbeater/beater bar photo → `images/archetypes/`
- Vertical disc spinner photo → `images/archetypes/`
- Horizontal midcutter photo → `images/archetypes/`
- Undercutter photo → `images/archetypes/`

**Weapon Design (3 missing):**
- Mass distribution diagram (disc vs ring vs bar) → `images/weapons/`
- Bite diagram (tooth spacing and forward travel) → `images/weapons/`
- Onshape mass properties screenshot (for weapon balance) → `images/weapons/`

**Drivetrain Design (2 missing):**
- N20 motor close-up photo → `images/motors/`
- D-shaft wheel hub diagram → `images/motors/`

**CAD Your Bot (5 missing):**
- Bounding box sketch screenshot → `images/cad/`
- Extruded chassis screenshot → `images/cad/`
- Chassis sketch with motor pockets screenshot → `images/cad/`
- Assembly mass properties screenshot (exists but not integrated) → `images/cad/`
- Completed assembly top view with bounding box → `images/cad/`

**Malenki Nano Setup (4 missing, teacher module):**
- Malenki Nano labeled photo → `images/electronics/`
- Polarity diagram (correct vs reversed) → `images/electronics/`
- Complete wiring diagram → `images/electronics/`
- Failsafe test photo → `images/electronics/`

**Rules & Overview (1 missing):**
- Weapon lock mechanism photo → `images/safety/`

**Testing & Safety (6 missing, teacher module):**
- LiPo in fireproof bag photo → `images/safety/`
- Healthy vs puffy battery comparison → `images/safety/`
- Power-on sequence flowchart → `images/safety/`
- Power-off sequence flowchart → `images/safety/`
- Robot in sealed arena photo → `images/safety/`
- Failsafe test GIF/video → `images/safety/`

---

### Asset Purpose Breakdown

**By Category:**
- **Process Photos (9):** Show assembly steps, techniques, hardware handling
- **Technical Diagrams (8):** Explain physics, forces, wiring, procedures
- **CAD Screenshots (6):** Guide students through Onshape workflow
- **Reference Photos (11):** Show real hardware, robots, examples
- **Safety Visuals (3):** Demonstrate safety procedures and equipment

**By Module:**
| Module | Total Assets | Implemented | Missing |
|--------|--------------|-------------|---------|
| Rules & Overview | 1 | 0 | 1 |
| Robot Archetypes | 5 | 0 | 5 |
| Weapon Design | 3 | 0 | 3 |
| Drivetrain Design | 2 | 0 | 2 |
| CAD Your Bot | 6 | 1 | 5 |
| 3D Printing Guide | 1 | 1 | 0 |
| Assembly & Wiring | 8 | 8 | 0 |
| Malenki Nano Setup | 4 | 0 | 4 |
| Testing & Safety | 7 | 0 | 7 |
| **TOTAL** | **37** | **10** | **27** |

---

## Sourcing Guidelines

### Where to Find Images

#### 1. Reference Photos (Robot Examples)

**Thingiverse:**
- Search: "beetleweight combat robot", "antweight combat robot"
- Filter: Creative Commons licenses
- Download: High-res renders and build photos
- Example sources documented in [attribution.md](images/attribution.md)

**Instructables:**
- Search: "combat robot", "battle bot", "beetleweight"
- License: Educational use permitted (platform terms)
- Focus on: Complete build guides with process photos
- Already sourced: Naked Singularity, Unskinny Bot

**Team Websites:**
- Team Monsoon (UK): https://www.teammonsoon.co.uk/
- Team Small Robots: https://teamsmallrobots.com/
- aaronbot3000 Blog: https://blog.aaronbot3000.com/
- Alex Hattori Portfolio: https://www.alex-hattori.com/

**Product Photos:**
- Repeat Robotics: https://repeat-robotics.com/ (weapon parts, motors)
- ITG RESA: https://itgresa.com/ (hubmotors, components)
- Verify: Contact vendor for educational use permission

---

#### 2. Technical Diagrams (Create Original)

**Recommended Tools:**
- **Figma:** Web-based, collaborative, free
- **Excalidraw:** Simple, quick sketches
- **Inkscape:** Professional SVG editor (free)
- **PowerPoint/Keynote:** For simple diagrams

**Design Principles:**
- Maximum 4 colors per diagram
- Use color palette from [QUALITY_STANDARDS.md](QUALITY_STANDARDS.md)
- Export as SVG (preferred) or PNG at 2x resolution
- Follow accessibility guidelines (no color-only information)

**Diagrams Needed:**
1. Mass distribution (disc vs ring vs bar) — physics concept
2. Bite diagram (tooth spacing) — engineering calculation
3. D-shaft wheel hub — mechanical detail
4. Polarity diagram (correct vs reversed) — wiring safety
5. Complete wiring diagram — Malenki Nano connections
6. Power-on sequence flowchart — safety procedure
7. Power-off sequence flowchart — safety procedure

---

#### 3. CAD Screenshots (Create from Onshape)

**Process:**
1. Build reference design in Onshape (beetleweight example)
2. Follow curriculum CAD instructions step-by-step
3. Take screenshots at each major step
4. Annotate screenshots (red arrows, boxes) using:
   - **Annotate in Onshape:** Use drawing tools if available
   - **External tools:** Skitch, Snagit, Photoshop
5. Export as PNG (1400-1600px wide)
6. Optimize file size (<400 KB)

**Screenshots Needed:**
1. Bounding box sketch — first CAD step
2. Extruded chassis — basic 3D form
3. Chassis sketch with motor pockets — detailed features
4. Assembly mass properties — weight verification
5. Completed assembly top view with bounding box — final check

**Annotation Standards:**
- Red arrows: Point to specific feature (3px stroke)
- Red boxes: Highlight UI element (3px stroke, no fill)
- Text labels: White text with dark outline for visibility

---

#### 4. Hardware Photos (Shoot Original or Source)

**N20 Motor Close-Up:**
- **Option A:** Purchase N20 motor, photograph with macro lens
- **Option B:** Source from product page (GA12-N20 datasheet images)
- **Key Details to Show:** D-shaft, motor body, wiring tabs, gearbox

**Weapon Lock Photo:**
- Build example weapon lock mechanism (3D printed insert or pin)
- Photograph installed on sample weapon
- Show: Lock installed vs removed

**LiPo Safety Photos:**
- **Fireproof bag:** LiPo battery in charging bag
- **Healthy vs puffy:** Two batteries side-by-side comparison
- **Safety:** Use damaged battery safely (discharge first), do NOT puncture

**Arena Photo:**
- Photograph CTRC arena (plexiglass enclosure)
- Show: Robot inside, lid closed, clear walls
- Include: Scale reference (show 6" × 6" fighting area)

---

### Licensing Requirements by Source Type

| Source Type | License | Attribution Required | Educational Use OK | Notes |
|-------------|---------|---------------------|-------------------|-------|
| Thingiverse (CC-BY) | Creative Commons BY | ✅ Yes | ✅ Yes | Attribute in caption |
| Thingiverse (CC-BY-SA) | CC BY-SA | ✅ Yes | ✅ Yes | ShareAlike if modified |
| Thingiverse (CC-BY-NC-SA) | CC BY-NC-SA | ✅ Yes | ✅ Yes (non-commercial) | CTRC qualifies |
| Instructables | Platform Terms | ✅ Yes | ✅ Yes | Link to original project |
| Servo Magazine | Fair Use | ✅ Yes | ✅ Yes | Cite article title, publication |
| Team Websites | Contact for Permission | ✅ Yes | ⚠️ Request permission | Email team for courtesy |
| Product Photos | Contact Vendor | ✅ Yes | ⚠️ Request permission | Repeat Robotics, ITG RESA |
| Original CTRC | CC BY-NC-SA 4.0 | ❌ No | ✅ Yes | Same license as curriculum |

---

## Image Specifications

### Technical Requirements by Image Type

#### Reference Photos
- **Format:** JPG
- **Resolution:** 800-1200px wide
- **File Size:** <200 KB
- **Quality:** 85% compression
- **Lighting:** Natural or soft studio light
- **Background:** Clean, uncluttered
- **Subject:** Sharp focus on key details

**Naming Convention:** `category-descriptive-name.jpg`
Example: `motor-n20-shaft-detail.jpg`

---

#### Process Photos
- **Format:** JPG
- **Resolution:** 800-1200px wide
- **File Size:** <250 KB
- **Lighting:** Consistent across photo series
- **Composition:** Hands visible performing action, critical details in focus
- **Series:** Same angle/perspective for sequential steps

**Naming Convention:** `assembly-action-description.jpg`
Example: `assembly-motor-press-fit.jpg`

---

#### Technical Diagrams
- **Format:** SVG (preferred) or PNG at 2x resolution
- **Colors:** Maximum 4 colors per diagram
- **Line Weight:** 2-3px for main elements
- **Text:** 14pt minimum, sans-serif font
- **Labels:** Clear, with leader lines
- **Export:** Crisp edges, no compression artifacts

**Color Palette (from QUALITY_STANDARDS.md):**
- Primary (instructional): #2563EB (blue)
- Success/correct: #10B981 (green)
- Warning/caution: #F59E0B (amber)
- Danger/incorrect: #EF4444 (red)
- Neutral/reference: #6B7280 (gray)
- Force arrows: #3B82F6 (blue)

**Naming Convention:** `diagram-concept-description.svg`
Example: `diagram-weapon-bite-calculation.svg`

---

#### CAD Screenshots
- **Format:** PNG
- **Resolution:** 1400-1600px wide
- **File Size:** <400 KB
- **Content:** Onshape UI visible (students can replicate)
- **Features:** Feature tree expanded, relevant panels open
- **Annotation:** Red arrows/boxes for emphasis

**Naming Convention:** `cad-step-description.png`
Example: `cad-chassis-sketch-pockets.png`

---

#### Flowcharts / Sequences
- **Format:** SVG (Mermaid) or PNG
- **Node Style:** Rounded rectangles
- **Text:** 12-14pt, readable font
- **Arrow Style:** Single direction, labeled
- **Layout:** Top-to-bottom flow

**Naming Convention:** `flowchart-procedure-name.svg`
Example: `flowchart-power-on-sequence.svg`

---

### Directory Structure

```
images/
  archetypes/       # Robot type examples (5 photos)
  assembly/         # Build process photos (8 photos) ✅ COMPLETE
  cad/              # Onshape screenshots (6 screenshots)
  electronics/      # Malenki Nano, wiring (4 diagrams/photos)
  motors/           # N20 motor reference (2 photos/diagrams)
  printing/         # 3D printing orientation (1 diagram) ✅ COMPLETE
  safety/           # Safety procedures, equipment (7 photos/diagrams)
  weapons/          # Weapon design diagrams (3 diagrams)
  attribution.md    # Complete attribution for all sources
```

**Rules:**
- Never put images in root `/images/` directory
- Create new subdirectory if category needed
- Keep subdirectories focused (one topic per folder)

---

## Integration Process

### Step-by-Step: Adding New Images to Curriculum

#### 1. Acquire or Create Image

**If Sourcing External Image:**
1. Locate image source (Thingiverse, Instructables, team site, vendor)
2. Verify license permits educational use
3. Download high-resolution version
4. Note source URL, author, license type, date accessed

**If Creating Original Image:**
1. Create diagram/screenshot following specifications above
2. Export in correct format (SVG for diagrams, PNG for screenshots)
3. Mark as "Original diagram by CTRC" in attribution

---

#### 2. Optimize Image

**For Photos (JPG):**
```bash
# Resize to max 1200px width, 85% quality
mogrify -resize 1200x -quality 85 image.jpg

# Check file size (should be <200 KB)
ls -lh image.jpg
```

**For Screenshots (PNG):**
```bash
# Resize if needed
mogrify -resize 1600x image.png

# Optimize PNG (use ImageOptim, TinyPNG, or pngquant)
pngquant --quality=65-80 image.png
```

**For Diagrams (SVG):**
- Export from design tool as optimized SVG
- Remove unnecessary metadata
- Test rendering in browser

---

#### 3. Name and Place File

**Naming Rules:**
- All lowercase
- Hyphens only (no underscores or spaces)
- Descriptive (action + subject)
- No timestamps or version numbers
- Extension indicates file type

**Examples:**
✅ `motor-n20-shaft-detail.jpg`
✅ `diagram-bite-calculation.svg`
✅ `cad-mass-properties-weapon.png`

❌ `IMG_1234.jpg` (not descriptive)
❌ `photo_march_12.jpg` (underscores, timestamp)
❌ `OnshapeScreenshot.png` (capitals)

**Place in Correct Directory:**
```bash
# Move to appropriate subdirectory
mv motor-n20-shaft-detail.jpg images/motors/
```

---

#### 4. Add Attribution

**Update `images/attribution.md`:**

```markdown
### [Image Name]
**Source:** [Website/Publication]
**Title:** [Original Title]
**Author:** [Creator Name]
**URL:** [Direct Link]
**License:** [License Type]
**Usage:** [Which Module]
**Date Accessed:** [YYYY-MM-DD]
**Attribution Required:** [Yes/No]
```

**Example:**
```markdown
### N20 Motor D-Shaft Detail
**Source:** GA12-N20 Motor Datasheet
**Title:** "GA12-N20 Geared Mini DC Motor"
**Author:** Handson Technology
**URL:** https://www.handsontec.com/dataspecs/GA12-N20.pdf
**License:** Technical documentation (educational use)
**Usage:** Module 4 (Drivetrain Design)
**Date Accessed:** 2026-03-12
**Attribution Required:** Yes — "GA12-N20 Motor Datasheet courtesy of Handson Technology"
```

---

#### 5. Integrate into Curriculum Markdown

**Standard Image Format:**
```markdown
![Descriptive alt text](images/category/filename.jpg)
*Caption explaining what to observe or learn.*
```

**With Attribution (for CC-licensed):**
```markdown
![Descriptive alt text](images/category/filename.jpg)
*Caption text. Photo by [Author Name], licensed under [License Type].*
```

**Alt Text Best Practices:**
- 15-25 words optimal
- Describe action, not just objects
- Include technical details relevant to learning
- No redundancy with caption

**Example:**
```markdown
![N20 motor being press-fit into 3D printed chassis pocket, showing D-shaft alignment with wheel hub slot](images/assembly/motor-installation.jpg)
*Position motor so D-shaft aligns with wheel hub slot. Press firmly but gently to avoid cracking pocket. Photo from "Naked Singularity" build guide via Instructables.*
```

---

#### 6. Test Integration

**Build Locally:**
```bash
mkdocs serve
```

**Check:**
- [ ] Image loads correctly
- [ ] Image scales appropriately on mobile
- [ ] Alt text visible if image fails to load
- [ ] Caption renders correctly
- [ ] Attribution present (if required)
- [ ] Link to source works (if included)

---

#### 7. Commit with Descriptive Message

```bash
git add images/motors/motor-n20-shaft-detail.jpg
git add images/attribution.md
git add docs/projects/battlebots/drivetrain-design.md
git commit -m "img: add N20 motor D-shaft detail photo to drivetrain module

Added reference photo showing N20 motor D-shaft for wheel hub alignment.

- Source: GA12-N20 datasheet (Handson Technology)
- License: Educational use
- Integrated in drivetrain-design.md line 27
- Attribution added to images/attribution.md"
```

---

## Attribution Requirements

### How to Properly Attribute Sources

#### Inline Attribution (in Image Caption)

**For Instructables Projects:**
```markdown
*Photo from "[Project Name]" build guide via Instructables (instructables.com)*
```

**For Creative Commons Images:**
```markdown
*[Description]. Photo by [Author], licensed under CC BY-SA 4.0. Source: [URL]*
```

**For Product Photos:**
```markdown
*Product photo courtesy of [Company Name] ([website.com])*
```

**For Fair Use (Servo Magazine):**
```markdown
*Diagram from Servo Magazine article "[Article Title]"*
```

**For Original CTRC Content:**
```markdown
*Original diagram by CTRC*
```
OR omit attribution (not required for own work)

---

#### Module Footer (for Multiple CC Images in One Module)

If module has 3+ CC-licensed images:

```markdown
---

## Image Credits

**Specific attributions:**
- Drum Spinner Example: AlexKorvin via Thingiverse, CC BY-SA 4.0
- Vertical Disc Spinner: Team Monsoon (teammonsoon.co.uk)
- Horizontal Bar: Repeat Robotics product photo (repeat-robotics.com)

See [complete attribution](images/attribution.md) for all sources.
```

---

#### Central Attribution File

**All images must be documented in `/images/attribution.md`**

Format:
- Source URL
- License type
- Author/creator name
- Date accessed
- Direct image URL (if applicable)
- Usage context (which module)
- Attribution requirement

---

## Missing Assets

### Priority 1: Critical for Student Learning (11 assets)

**Robot Archetypes (5):**
- Drum spinner example → Students can't visualize design option
- Eggbeater example → Key archetype missing
- Vertical disc spinner → Most common type, must show
- Midcutter example → Unique attack angle, needs visual
- Undercutter example → Different from vertical, must differentiate

**CAD Workflow (5):**
- Bounding box sketch → First critical step in CAD process
- Extruded chassis → Shows 3D modeling from 2D sketch
- Motor pockets sketch → Key feature students struggle with
- Assembly mass properties → Weight verification, used continuously
- Final assembly view → Success criteria visualization

**Safety (1):**
- Weapon lock photo → Critical safety concept, must be visual

---

### Priority 2: Enhances Learning (8 assets)

**Weapon Design Diagrams (3):**
- Mass distribution diagram → Physics concept clearer with visual
- Bite diagram → Calculation easier to understand with illustration
- Weapon balance screenshot → Reinforces mass properties usage

**Drivetrain (2):**
- N20 motor photo → Hardware identification, D-shaft visibility
- D-shaft hub diagram → Technical detail, dimensional reference

**Safety (3):**
- Power-on flowchart → Procedure visualization
- Power-off flowchart → Safety sequence clarity
- Arena photo → Shows context for safety rules

---

### Priority 3: Teacher Module Support (8 assets)

**Malenki Nano Setup (4):**
- Labeled board photo → Connector identification
- Polarity diagram → Prevents wiring errors
- Complete wiring diagram → Full system reference
- Failsafe test photo → Test procedure demonstration

**Testing & Safety (4):**
- LiPo in bag photo → Safe charging setup
- Healthy vs puffy battery → Damage identification
- Robot in arena photo → Competition context
- Failsafe test GIF → Animated procedure (optional)

---

### Sourcing Strategy by Priority

**Priority 1 (Critical):**
- Robot archetypes: Source from Thingiverse/Instructables (manual download required)
- CAD screenshots: Create in Onshape (4-6 hours to build reference design + capture)
- Weapon lock: Photograph CTRC example or build simple demo

**Priority 2 (Enhances):**
- Diagrams: Create in Figma/Excalidraw (2-3 hours total)
- N20 motor: Source from datasheet or purchase and photograph
- Flowcharts: Create using Mermaid or draw.io

**Priority 3 (Teacher Support):**
- Electronics photos: Photograph CTRC Malenki Nano setup
- Safety photos: Photograph CTRC equipment and procedures
- Diagrams: Create in design tool

---

## Next Steps

### Immediate Actions (Phase 2 Execution)

1. **Download Robot Archetype Photos** (Priority 1)
   - Visit Thingiverse, Instructables sources listed in [IMAGE_SOURCES.md](images/IMAGE_SOURCES.md)
   - Manually download 5 robot examples
   - Verify licenses, add to attribution.md
   - Integrate into robot-archetypes.md

2. **Create CAD Screenshots** (Priority 1)
   - Build reference beetleweight design in Onshape
   - Capture 5 workflow screenshots
   - Annotate with red arrows/boxes
   - Integrate into cad-your-bot.md

3. **Create Weapon Design Diagrams** (Priority 2)
   - Design 3 technical diagrams in Figma
   - Export as SVG
   - Integrate into weapon-design.md

4. **Source N20 Motor Photo** (Priority 2)
   - Extract from GA12-N20 datasheet or purchase/photograph
   - Add to drivetrain-design.md

5. **Create Safety Flowcharts** (Priority 2)
   - Design power-on/off sequences
   - Export as SVG or PNG
   - Add to testing-and-safety.md

---

### Maintenance Plan

**Annual Review (Before Competition Season):**
- [ ] Verify all external links still active
- [ ] Check if licenses changed
- [ ] Update images if sources updated
- [ ] Add new robot examples if better sources found
- [ ] Optimize file sizes if new compression tools available

**When Adding New Modules:**
- [ ] Identify visual needs (photos, diagrams, screenshots)
- [ ] Follow sourcing guidelines
- [ ] Maintain attribution standards
- [ ] Update this document with new asset inventory

---

**Document Version:** 2.0
**Last Updated:** March 13, 2026
**Next Review:** Before 2027 competition season
