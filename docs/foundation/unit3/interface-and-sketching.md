# Module 3.1: Interface & Sketching

**Before you can design a robot, you need to speak the language of CAD.** This module gets you set up in Onshape and teaches you the two most fundamental skills: navigating the 3D workspace and creating precise 2D sketches that form the foundation of every 3D model.

---

## Learning Objectives

By the end of this module, you will be able to:

- Sign into Onshape and navigate to the V5 CT Education class
- Orbit, pan, and zoom in the 3D workspace
- Create a new sketch on any standard plane
- Draw lines, rectangles, circles, and arcs
- Apply geometric constraints to control sketch geometry
- Add dimensions to fully define a sketch

---

## Step 1: Account Setup

You will use your **CT (Caution Tape) account** to sign into Onshape. Do not create a personal account — the team account gives you access to all shared documents and the class lesson system.

1. Go to [onshape.com](https://www.onshape.com) and click **Sign In**
2. Sign in with your CT account credentials (provided by your coach)
3. Once signed in, you should see your Onshape dashboard with Documents, Classes, and Teams in the left sidebar

!!! example "🖥️ Screenshot Needed"
    Onshape dashboard showing Documents, Classes, and Teams in left sidebar

!!! warning "Use Your CT Account"
    Do not sign up with a personal email. The CT account is linked to the team's education plan, which gives you access to the V5 CT Education lessons, shared parts libraries, and team documents. If you use a personal account, you will not have access to any of these resources.

---

## Step 2: Navigate to the Lesson System

All Foundation Program CAD lessons live inside the Onshape Classes system:

1. Click **Classes** in the left sidebar of your Onshape dashboard
2. Find and open **V5 CT Education**
3. You will see a list of lessons organized by number — Lesson 1 through Lesson 13+
4. Open **Lesson 1: Interface and Navigation**

!!! example "🖥️ Screenshot Needed"
    Classes view with V5 CT Education class and lesson list visible

---

## Lesson 1: Interface and Navigation

Watch the tutorial video in Lesson 1. It covers:

- **Feature toolbar** — the row of tools across the top (Sketch, Extrude, Fillet, etc.)

!!! example "🖥️ Screenshot Needed"
    Feature toolbar: Sketch, Extrude, Fillet, Chamfer, etc. labeled

- **Feature list** — the timeline on the left showing every operation you've performed

!!! example "🖥️ Screenshot Needed"
    Feature list panel showing operations timeline on the left
- **Graphics area** — the 3D viewport where your model lives
- **View controls** — orbit (right-click drag), pan (middle-click drag), zoom (scroll wheel)
- **Standard planes** — Top, Front, Right — the three default planes every document starts with

!!! example "🖥️ Screenshot Needed"
    Top, Front, and Right standard planes visible in 3D workspace

### Navigation Shortcuts

| Action | Mouse | Keyboard |
|--------|-------|----------|
| Orbit | Right-click + drag | — |
| Pan | Middle-click + drag | — |
| Zoom | Scroll wheel | — |
| Zoom to fit | — | `F` |
| Front view | — | `1` on numpad |
| Top view | — | `2` on numpad |
| Right view | — | `3` on numpad |
| Isometric view | — | `0` on numpad |

!!! tip "Get Comfortable Orbiting"
    Spend a few minutes just orbiting, panning, and zooming around the default cube or any sample part. Navigation should feel natural and automatic — you will be doing it thousands of times. If you are fighting the view controls, everything else will feel harder than it needs to be.

---

## Lesson 2: Sketching and Constraints

Open **Lesson 2: Sketching and Constraints** in Classes > V5 CT Education.

### What Is a Sketch?

A sketch is a 2D drawing on a flat plane. Every 3D feature in Onshape starts as a sketch. Think of it as the blueprint — you draw the cross-section shape, then later extrude it into 3D.

### Creating a Sketch

1. Click the **Sketch** tool in the feature toolbar
2. Select a plane (Top, Front, or Right) or any flat face on an existing part
3. You are now in sketch mode — the view flattens to look straight at your chosen plane

!!! example "🖥️ Screenshot Needed"
    Sketch mode active: view flattened to plane, sketch toolbar visible

### Drawing Tools

| Tool | What It Does | When to Use |
|------|-------------|-------------|
| **Line** | Draws straight line segments | Edges, outlines, angular shapes |
| **Rectangle** | Draws a rectangle by two corners | Plates, brackets, rectangular cutouts |
| **Center Rectangle** | Rectangle defined by center point | Symmetrical rectangular features |
| **Circle** | Circle defined by center and radius | Holes, shafts, rounded features |
| **Arc** | Curved line segment | Fillets, rounded corners, curved profiles |
| **Slot** | Elongated hole shape | Adjustment slots, sliding features |

!!! example "🖥️ Screenshot Needed"
    Sketch tools: Line, Rectangle, Center Rectangle, Circle, Arc, Slot

### Constraints — The Key to Good Sketches

Constraints are rules that control how sketch geometry behaves. When you add a constraint, Onshape enforces that rule even as you move things around. **A fully constrained sketch is a predictable sketch.**

| Constraint | What It Does | Icon |
|------------|-------------|------|
| **Coincident** | Forces two points to share the same location | Point on point |
| **Parallel** | Forces two lines to stay parallel | Two parallel lines |
| **Perpendicular** | Forces two lines to meet at 90 degrees | L-shape |
| **Equal** | Forces two lines or circles to have the same size | = sign |
| **Tangent** | Forces a line and arc to meet smoothly | Curved touch |
| **Horizontal** | Forces a line to be horizontal | H |
| **Vertical** | Forces a line to be vertical | V |
| **Midpoint** | Forces a point to the midpoint of a line | Point on center |
| **Concentric** | Forces two circles to share the same center | Nested circles |

!!! example "🖥️ Screenshot Needed"
    Constraints toolbar: Coincident, Parallel, Perpendicular, Equal, Tangent

### Dimensions

After applying geometric constraints, add **dimensions** to lock in exact sizes:

- Click the **Dimension** tool (or press `D`)
- Click a line to set its length
- Click two lines to set the distance between them
- Click an arc or circle to set its radius/diameter

!!! example "🖥️ Screenshot Needed"
    Dimension tool applying a measurement to a line with dialog box visible

!!! info "Blue vs Black Sketch Lines"
    - **Blue lines** = under-constrained (still free to move)
    - **Black lines** = fully constrained (locked in place)
    - **Red lines** = over-constrained (conflicting constraints — fix this immediately)

    Your goal is always **all black lines** before you exit the sketch.

!!! example "🖥️ Screenshot Needed"
    Blue (under-constrained), black (fully constrained), red (over-constrained) sketch lines

---

## Activity: Follow Along

Complete both Lesson 1 and Lesson 2 tutorials in the V5 CT Education class. For each lesson:

1. Watch the full video first without pausing
2. Watch it again, this time following along step by step in your own Onshape document
3. When finished, your sketch should be fully constrained (all black lines)

### Practice Challenge

After completing the lessons, create a new document and sketch the following on the **Top plane**:

- A rectangle that is exactly **4 inches wide** and **2 inches tall**
- A circle centered on the rectangle with a **0.5 inch diameter**
- All geometry fully constrained (no blue lines)

If you can do this without looking at the tutorial, you are ready for Module 3.2.

---

## Key Takeaways

1. **Onshape is browser-based** — no software to install, your work saves automatically
2. **Navigation must be muscle memory** — practice orbiting, panning, and zooming until it is effortless
3. **Sketches are the foundation** — every 3D feature starts as a 2D sketch
4. **Constraints control geometry** — use them to make your sketch predictable and robust
5. **Fully constrain every sketch** — all black lines, no blue, never red

---

## Next Up

**[Module 3.2: 3D Modeling & Printing](3d-modeling-and-printing.md)** — turn your 2D sketches into 3D parts, and design something you can 3D print and take home.
