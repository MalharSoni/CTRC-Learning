# Manual Tasks Required to Complete Visual Assets

This document lists all visual assets that require human action to complete. These cannot be automated due to licensing restrictions, account requirements, or need for actual CAD work.

**Total Manual Tasks: 18**
**Estimated Time: 4-6 hours**

---

## Category 1: Robot Archetype Photos (Priority: CRITICAL)

**Time Required: 1.5 hours**

### Task 1.1: Drum Spinner Photo
**Source:** https://www.thingiverse.com/thing:7001396
**File to create:** `/docs/projects/battlebots/images/archetypes/drum-spinner-example.jpg`

**Steps:**
1. Visit Thingiverse URL
2. Accept cookies/login if needed
3. Find image gallery (click on main image)
4. Download best photo showing drum weapon clearly
5. Save as `drum-spinner-example.jpg` in `/archetypes/` folder
6. Resize to max 1200px width
7. Add to attribution.md:
   ```
   **Drum Spinner Example**
   - Source: AlexKorvin on Thingiverse
   - License: Creative Commons (verify on page)
   - URL: https://www.thingiverse.com/thing:7001396
   ```

### Task 1.2: Undercutter Photo
**Source:** https://www.thingiverse.com/thing:5202939
**File to create:** `/docs/projects/battlebots/images/archetypes/undercutter-example.jpg`

**Steps:**
1. Visit Thingiverse URL
2. Download photo showing undercutter blade clearly (view from side showing low blade position)
3. Save as `undercutter-example.jpg`
4. Resize to max 1200px width
5. Add to attribution.md:
   ```
   **Undercutter Example**
   - Source: Lord_Toby on Thingiverse
   - License: CC BY-NC-SA 4.0
   - URL: https://www.thingiverse.com/thing:5202939
   ```

### Task 1.3: Vertical Disc Spinner Photo
**Source:** https://www.instructables.com/DIY-Easy-3D-Printed-Vertical-Spinner-Combat-Robot/
**File to create:** `/docs/projects/battlebots/images/archetypes/vertical-disc-example.jpg`

**Steps:**
1. Visit Instructables URL
2. Find photo showing vertical disc weapon (disc oriented vertically, not horizontally)
3. Download image
4. Save as `vertical-disc-example.jpg`
5. Add attribution to attribution.md

### Task 1.4: Horizontal Bar / Eggbeater Photo
**Source:** https://repeat-robotics.com/product-category/beetle/
**File to create:** `/docs/projects/battlebots/images/archetypes/horizontal-bar-example.jpg`

**Steps:**
1. Visit Repeat Robotics beetle category
2. Find "Beater Bar" or "AR600 Hubmotor" product
3. Right-click product image
4. Save image (add `https:` to URL if needed)
5. Save as `horizontal-bar-example.jpg`
6. Add attribution:
   ```
   **Horizontal Bar Example**
   - Source: Repeat Robotics product photo
   - URL: https://repeat-robotics.com/
   - Used with permission for educational purposes
   ```

### Task 1.5: Midcutter Photo
**Source:** https://repeat-robotics.com/product-category/beetle/ OR https://blog.aaronbot3000.com/
**File to create:** `/docs/projects/battlebots/images/archetypes/midcutter-example.jpg`

**Steps:**
1. Try Repeat Robotics first (easier licensing)
2. Look for product showing blade mounted horizontally at mid-height
3. Alternative: Visit aaronbot3000 blog and find "Dinner Time" robot
4. Download photo
5. Save as `midcutter-example.jpg`
6. Add attribution

---

## Category 2: CAD Screenshots from Onshape (Priority: HIGH)

**Time Required: 2 hours**

**Prerequisite:** Create free Onshape account at https://www.onshape.com/

### Task 2.1: Bounding Box Sketch Screenshot
**File to create:** `/docs/projects/battlebots/images/cad/bounding-box-sketch.png`

**Steps:**
1. Log into Onshape
2. Create new Part Studio
3. Create sketch on Top plane
4. Draw rectangle: 152.4mm × 152.4mm (6" × 6")
5. Add dimensions to show size
6. Take screenshot showing:
   - Sketch with dimensions visible
   - Feature tree on left showing "Sketch 1"
   - Clean, zoomed view
7. Save as `bounding-box-sketch.png`

### Task 2.2: Chassis 3D View Screenshot
**File to create:** `/docs/projects/battlebots/images/cad/chassis-3d-view.png`

**Steps:**
1. In same Part Studio, create simple chassis:
   - Extrude rectangle: 4mm thick
   - Add 2 circular pockets for motors (12mm diameter)
   - Add some ribs for strength
2. Switch to 3D view (not sketch mode)
3. Rotate to isometric view
4. Take screenshot showing 3D chassis
5. Save as `chassis-3d-view.png`

### Task 2.3: Chassis Sketch with Dimensions
**File to create:** `/docs/projects/battlebots/images/cad/chassis-sketch-dimensions.png`

**Steps:**
1. Edit the chassis sketch
2. Add dimensions:
   - Motor pocket diameter (12mm)
   - Motor pocket spacing
   - Chassis thickness
3. Take screenshot showing all dimensions
4. Save as `chassis-sketch-dimensions.png`

### Task 2.4: Mass Properties Dialog Screenshot
**File to create:** `/docs/projects/battlebots/images/cad/mass-properties-dialog.png`

**Steps:**
1. With chassis selected in Part Studio
2. Click "Mass properties" icon (looks like balance scale)
3. Dialog shows mass, center of mass, volume
4. Take screenshot of this dialog
5. Save as `mass-properties-dialog.png`

**NOTE:** There's already a file `onshape-mass-properties-overview-2026-03-12T23-37-24-035Z.png` in the `/cad/` folder. You can rename this to `mass-properties-dialog.png` and use it if it's suitable.

### Task 2.5: Assembly Top View with Bounding Box
**File to create:** `/docs/projects/battlebots/images/cad/assembly-top-view-bounding-box.png`

**Steps:**
1. Create new Assembly
2. Insert the chassis part
3. Add a sketch showing the 6"×6" bounding box overlaid on top view
4. Take screenshot showing:
   - Assembly top view
   - Bounding box outline visible
   - Robot fits within bounds
5. Save as `assembly-top-view-bounding-box.png`

---

## Category 3: N20 Motor Photo (Priority: MEDIUM)

**Time Required: 30 minutes**

### Task 3.1: N20 Motor Close-up Photo
**File to create:** `/docs/projects/battlebots/images/motors/n20-motor-photo.jpg`

**Option A: Extract from Datasheet**
1. Download PDF: https://www.handsontec.com/dataspecs/GA12-N20.pdf
2. Open in PDF reader
3. Find page with dimension drawing or motor photo
4. Take screenshot or extract image
5. Save as `n20-motor-photo.jpg`
6. Attribution: "GA12-N20 datasheet, Handson Technology"

**Option B: Take Your Own Photo**
1. If you have an N20 motor available, photograph it
2. Show D-shaft clearly
3. Include ruler for scale
4. Good lighting, clear focus
5. Save as `n20-motor-photo.jpg`

**Option C: Use Stock Photo**
1. Search "N20 motor" on Wikimedia Commons
2. Download CC-licensed image
3. Add proper attribution

---

## Category 4: LiPo Safety Photos (Priority: CRITICAL - Safety)

**Time Required: 1 hour**

### Task 4.1: LiPo in Fireproof Bag Photo
**File to create:** `/docs/projects/battlebots/images/safety/lipo-fireproof-bag.jpg`

**Option A: Take Your Own Photo**
1. Obtain LiPo fireproof bag (LiPo safe bag)
2. Place 2S battery inside
3. Photograph clearly showing:
   - Battery inside transparent bag
   - Bag is sealed/closed
   - Fireproof material visible
4. Save as `lipo-fireproof-bag.jpg`

**Option B: Use Supplier Photo**
1. Visit HobbyKing or similar RC supplier
2. Find LiPo safe bag product page
3. Download product photo
4. Add attribution: "Photo courtesy of [Supplier Name]"

### Task 4.2: Healthy vs Puffy Battery Photo
**File to create:** `/docs/projects/battlebots/images/safety/battery-health-comparison.jpg`

**Option A: Create Diagram**
1. Use image editor (Paint, GIMP, Photoshop)
2. Create side-by-side comparison:
   - Left: Flat, healthy battery (rectangle)
   - Right: Swollen, puffy battery (bulging sides)
3. Label clearly: "GOOD" and "DANGER"
4. Save as `battery-health-comparison.jpg`

**Option B: Find CC-Licensed Image**
1. Search "swollen LiPo battery" on Wikimedia Commons
2. Download appropriate images
3. Create comparison in image editor
4. Add attribution

---

## Category 5: Weapon Lock Photo (Priority: HIGH)

**Time Required: 30 minutes**

### Task 5.1: Weapon Lock Mechanism Photo
**File to create:** `/docs/projects/battlebots/images/safety/weapon-lock-examples.jpg`

**Option A: Create Diagram**
1. Create simple illustration showing 3 lock types:
   - Pin lock: Drill bit / allen key through weapon shaft
   - Zip-tie lock: Plastic tie around weapon and chassis
   - Bracket lock: 3D printed part blocking weapon
2. Can be hand-drawn and photographed
3. Label each method
4. Save as `weapon-lock-examples.jpg`

**Option B: Take Photos of Actual Locks**
1. Set up simple weapon lock using drill bit
2. Photograph from multiple angles
3. Show how lock prevents weapon spinning
4. Annotate photo with arrows/labels
5. Save as `weapon-lock-examples.jpg`

---

## Category 6: Failsafe Test Visual (Priority: CRITICAL)

**Time Required: 1 hour**

### Task 6.1: Failsafe Test GIF/Video
**File to create:** `/docs/projects/battlebots/images/safety/failsafe-test-demo.gif` OR `.mp4`

**Option A: Placeholder Note**
Create text file explaining failsafe test process:
```
FAILSAFE TEST PROCEDURE:
1. Robot powered on, weapon locked
2. Transmitter ON - robot responds
3. Turn transmitter OFF
4. Robot must stop ALL movement
5. Weapon must NOT activate
6. Turn transmitter back ON
7. Robot responds again

✓ PASS: Robot stops when transmitter off
✗ FAIL: Do not use robot until fixed
```

**Option B: Create Animated GIF**
1. Use simple animation tool
2. Show transmitter ON → robot active
3. Show transmitter OFF → robot stops
4. Loop animation
5. Save as `failsafe-test-demo.gif`

**Option C: Record Actual Test** (requires robot)
1. Record short video of failsafe test
2. Show transmitter being turned off
3. Show robot stopping
4. Convert to GIF or keep as MP4
5. Add to documentation

---

## Category 7: Malenki Nano Hardware Photo (Priority: MEDIUM)

**Time Required: 30 minutes**

### Task 7.1: Malenki Nano Labeled Photo
**File to create:** `/docs/projects/battlebots/images/electronics/malenki-nano-labeled.jpg`

**Steps:**
1. Visit https://malenki.com or https://fingertechrobotics.com
2. Find Malenki Nano product page
3. Download product photo
4. Open in image editor
5. Add labels pointing to:
   - RX connector
   - Motor pads (M1+, M1-, M2+, M2-)
   - Battery pads (BAT+, BAT-)
   - ARM connector
6. Save as `malenki-nano-labeled.jpg`
7. Attribution: "Photo courtesy of Malenki/FingerTech Robotics"

---

## Summary Checklist

### Critical Priority (Ship-Blockers):
- [ ] 5 Robot archetype photos
- [ ] 2 LiPo safety photos
- [ ] 1 Weapon lock photo
- [ ] Failsafe test visual (can be text description)

### High Priority (Significantly Improves Quality):
- [ ] 5 CAD workflow screenshots
- [ ] 1 N20 motor photo

### Medium Priority (Polish):
- [ ] 1 Malenki Nano labeled photo

---

## Notes for Future Maintainers

- All text-based diagrams (flowcharts, wiring diagrams, D-shaft diagram) are already created as `.md` files
- These render well in MkDocs and are searchable
- Photos/screenshots listed above require human action due to:
  - Website login requirements (Thingiverse, Instructables)
  - Need for actual CAD work (Onshape screenshots)
  - Product photography rights (Repeat Robotics, Malenki)
  - Safety-critical accuracy (LiPo photos must be authentic)

**Estimated Total Time to Complete All Manual Tasks: 6-8 hours**

---

*Created: March 13, 2026*
*Last Updated: March 13, 2026*
