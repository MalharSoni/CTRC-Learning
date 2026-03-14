# Quick Start: Phase 2 Manual Tasks

**Goal:** Complete the remaining 16 photo/screenshot tasks to fully enhance the BattleBots curriculum.

**Time Required:** 6-8 hours total (can be split across multiple people)

**Reference:** See `MANUAL_TASKS_REQUIRED.md` for detailed step-by-step instructions.

---

## Priority Task List

### 🔴 CRITICAL (1 hour) - Do First

**Safety Photos - Required for safe robot operation:**

- [ ] LiPo in fireproof bag photo (20 min)
  - Source: Take photo or use supplier product photo
  - File: `safety/lipo-fireproof-bag.jpg`

- [ ] Healthy vs puffy battery comparison (30 min)
  - Source: Create diagram or find CC image
  - File: `safety/battery-health-comparison.jpg`

- [ ] Weapon lock examples (30 min)
  - Source: Create diagram or photograph actual locks
  - File: `safety/weapon-lock-examples.jpg`

---

### 🟡 HIGH PRIORITY (3.5 hours) - Visual Learning Enhancement

**Robot Archetype Photos (1.5 hours):**

- [ ] Drum spinner (15 min)
  - Source: https://www.thingiverse.com/thing:7001396
  - File: `archetypes/drum-spinner-example.jpg`

- [ ] Undercutter (15 min)
  - Source: https://www.thingiverse.com/thing:5202939
  - File: `archetypes/undercutter-example.jpg`

- [ ] Vertical disc spinner (15 min)
  - Source: https://www.instructables.com/DIY-Easy-3D-Printed-Vertical-Spinner-Combat-Robot/
  - File: `archetypes/vertical-disc-example.jpg`

- [ ] Horizontal bar (15 min)
  - Source: https://repeat-robotics.com/product-category/beetle/
  - File: `archetypes/horizontal-bar-example.jpg`

- [ ] Midcutter (20 min)
  - Source: Repeat Robotics or aaronbot3000 blog
  - File: `archetypes/midcutter-example.jpg`

**CAD Workflow Screenshots (2 hours):**

**Prerequisite:** Create free Onshape account at https://www.onshape.com/

- [ ] Bounding box sketch (20 min)
  - Create: 152.4mm × 152.4mm rectangle on Top plane
  - File: `cad/bounding-box-sketch.png`

- [ ] Chassis 3D view (25 min)
  - Create: Simple extruded chassis with motor pockets
  - File: `cad/chassis-3d-view.png`

- [ ] Chassis sketch with dimensions (15 min)
  - Add: Dimensions to chassis sketch
  - File: `cad/chassis-sketch-dimensions.png`

- [ ] Mass properties dialog (5 min)
  - Click: Mass properties icon
  - File: `cad/mass-properties-dialog.png`
  - **Note:** File already exists, just rename: `onshape-mass-properties-overview-*.png`

- [ ] Assembly top view with bounding box (30 min)
  - Create: Assembly with bounding box overlay
  - File: `cad/assembly-top-view-bounding-box.png`

---

### 🟢 MEDIUM PRIORITY (1 hour) - Component Identification

**Component Photos:**

- [ ] N20 motor close-up (30 min)
  - **Option A:** Extract from PDF: https://www.handsontec.com/dataspecs/GA12-N20.pdf
  - **Option B:** Take photo of actual motor
  - File: `motors/n20-motor-photo.jpg`

- [ ] Malenki Nano labeled photo (30 min)
  - Source: Malenki.com or FingerTech Robotics
  - Add labels in image editor
  - File: `electronics/malenki-nano-labeled.jpg`

---

### ⚪ OPTIONAL (1 hour) - Enhancement

**Failsafe Test Visual:**

- [ ] Failsafe test GIF/video (1 hour)
  - **Option A:** Use text description (already provided)
  - **Option B:** Create animated GIF
  - **Option C:** Record actual test video
  - File: `safety/failsafe-test-demo.gif` or `.mp4`

---

## Fast Track: Minimum Viable Phase 2

**If you only have 2 hours, do these 8 tasks:**

1. ✅ LiPo fireproof bag photo (20 min)
2. ✅ Battery health comparison (30 min)
3. ✅ Drum spinner photo (15 min)
4. ✅ Undercutter photo (15 min)
5. ✅ Bounding box screenshot (20 min)
6. ✅ Mass properties screenshot - **already exists, just rename** (5 min)
7. ✅ Chassis 3D view (25 min)
8. ✅ Weapon lock diagram (30 min)

**Total:** 2 hours, 40 minutes

**Impact:** Covers critical safety, most popular robot archetype, and CAD workflow basics.

---

## Workflow Tips

### Batch Processing

**Group tasks by tool/source:**

1. **Thingiverse Session (45 min):**
   - Log in once
   - Download: Drum spinner + Undercutter photos
   - Verify CC licenses
   - Add to attribution.md

2. **Onshape Session (1.5 hours):**
   - Create account
   - Build simple chassis
   - Take all 5 screenshots
   - No attribution needed (user-created)

3. **Product Photo Session (30 min):**
   - Visit Repeat Robotics site
   - Download: Horizontal bar photo
   - Note attribution requirements

4. **DIY Photo Session (1 hour):**
   - Set up lighting
   - Photograph: LiPo bag, weapon locks
   - Create: Battery comparison diagram

---

## File Naming Convention

**Always use descriptive names:**

```
Good:
- drum-spinner-example.jpg
- lipo-fireproof-bag.jpg
- chassis-3d-view.png

Bad:
- image1.jpg
- photo.png
- screenshot-2026-03-13.png
```

---

## After Completing Tasks

### 1. Add to Attribution.md

For each photo/screenshot, add entry to `attribution.md`:

```markdown
#### filename.jpg
**Source:** [URL or "User-created"]
**License:** [CC type or "Educational use with permission"]
**Description:** [What it shows]
**Usage:** [Which module]
**Attribution:** [Required credit line]
```

### 2. Integrate into Markdown

Replace placeholder notes with actual images:

```markdown
![Alt text describing the image](../images/category/filename.jpg)
*Caption explaining what students should observe*
```

### 3. Test

- View in `mkdocs serve`
- Check image loads correctly
- Verify mobile responsive
- Confirm alt text is descriptive

### 4. Update AGENT_2_REPORT.md

Mark tasks as complete in the manual tasks section.

---

## Collaboration

**Multiple people working in parallel:**

**Person A: Archetype Photos (1.5 hours)**
- Downloads all 5 robot archetype photos
- Updates attribution.md
- Integrates into robot-archetypes.md

**Person B: CAD Screenshots (2 hours)**
- Creates Onshape account
- Takes all 5 CAD workflow screenshots
- Integrates into cad-your-bot.md

**Person C: Safety Photos (1 hour)**
- Takes/sources all 4 safety photos
- Updates testing-and-safety.md
- Updates rules-and-overview.md

**Person D: Component Photos (1 hour)**
- Sources N20 motor photo
- Sources/creates Malenki Nano labeled photo
- Updates drivetrain-design.md and malenki-nano-setup.md

**Total parallel time:** 2 hours (if 4 people work simultaneously)

---

## Quality Checklist

Before marking a task complete:

- [ ] Image is web-optimized (max 1200px width, <500KB)
- [ ] Filename is descriptive (no generic names)
- [ ] Image is saved to correct directory
- [ ] Attribution added to attribution.md
- [ ] Placeholder replaced in markdown file
- [ ] Alt text is descriptive and helpful
- [ ] Caption explains what to observe
- [ ] Image loads correctly in browser

---

## Resources

**Reference Documents:**
- `MANUAL_TASKS_REQUIRED.md` - Detailed step-by-step instructions
- `AGENT_2_REPORT.md` - Full completion report
- `IMAGE_SOURCES.md` - All source URLs and licenses
- `attribution.md` - Current attribution status

**Source URLs:**
- Thingiverse: https://www.thingiverse.com/
- Instructables: https://www.instructables.com/
- Repeat Robotics: https://repeat-robotics.com/
- Onshape: https://www.onshape.com/
- N20 Datasheet: https://www.handsontec.com/dataspecs/GA12-N20.pdf

---

## Questions?

**See `MANUAL_TASKS_REQUIRED.md` for:**
- Detailed step-by-step instructions
- Alternative approaches for each task
- Troubleshooting tips
- Licensing requirements

**Not sure which task to do first?**
Follow the priority order above (Critical → High → Medium → Optional)

**Can't find a good photo?**
All tasks have multiple source options documented in MANUAL_TASKS_REQUIRED.md

**Need help with CAD?**
Onshape has free tutorials at https://learn.onshape.com/

---

*Quick Start Guide*
*Created: March 13, 2026*
*For: Phase 2 Manual Task Completion*
