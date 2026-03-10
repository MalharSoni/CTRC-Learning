# Module 3.2: 3D Modeling & Printing

**Sketches are just the beginning.** In this module, you will learn to turn 2D sketches into real 3D parts using the Extrude feature, then design a custom keychain that you will actually 3D print and take home.

---

## Learning Objectives

By the end of this module, you will be able to:

- Use the Extrude feature to create 3D geometry from a sketch
- Apply Extrude-Cut to remove material from a part
- Add fillets and chamfers to round or bevel edges
- Use the Text tool to add lettering to a part
- Design a part optimized for 3D printing
- Understand overhangs, supports, and wall thickness

---

## Lesson 3: Extrude Feature

Open **Lesson 3** in Classes > V5 CT Education.

### What Is Extrude?

Extrude takes a 2D sketch and pushes it into the third dimension. A rectangle becomes a box. A circle becomes a cylinder. A complex profile becomes a complex solid.

### Extrude Options

| Option | What It Does |
|--------|-------------|
| **New** | Creates a brand new solid body |
| **Add** | Adds material to an existing body |
| **Remove** | Cuts material away from an existing body |
| **Intersect** | Keeps only the overlapping volume |
| **Blind** | Extrudes a specific distance |
| **Up to face** | Extrudes until it hits a selected face |
| **Through all** | Extrudes through the entire part |
| **Symmetric** | Extrudes equally in both directions from the sketch plane |

!!! example "🖥️ Screenshot Needed"
    Extrude dialog: New/Add/Remove/Intersect options, Blind/Symmetric depth

### Activity: Follow the Tutorial, Then Make Your Own

1. Follow the Lesson 3 tutorial video exactly — build the sample part
2. When complete, start a **new document**
3. Design your own simple part using at least:
    - One sketch with full constraints
    - One **Add** extrude
    - One **Remove** extrude (a hole or cutout)

!!! example "🖥️ Screenshot Needed"
    Side-by-side: Extrude Add (adding material) vs Remove (cutting a hole)

!!! tip "Extrude Direction Matters"
    Pay attention to the arrow direction when extruding. You can flip it by clicking the arrow or entering a negative value. Getting the direction wrong is one of the most common beginner mistakes — and it is easy to miss if you are not looking at the model from the right angle.

---

## Lesson 4: Designing to 3D Print — Nametag Keychain

Open **Lesson 4** in Classes > V5 CT Education.

This is your first real design project. You will create a **Nametag Keychain** that will be 3D printed and is yours to keep.

!!! tip "This Keychain Is Yours to Keep"
    This is not just a learning exercise — you are designing a real, physical object that you will hold in your hand. Make it something you are proud of.

### Requirements

Your keychain must use **at least 3** of the following features (aim for all 5):

| Feature | What It Does | Example Use |
|---------|-------------|-------------|
| **Constraints** | Fully defined sketch geometry | Centering your name on the keychain |
| **Extrude-Cut** | Remove material | Keychain hole, decorative cutouts |
| **Text** | Add lettering | Your name or initials |
| **Fillet** | Round edges | Smooth corners so it is comfortable to hold |
| **Chamfer** | Bevel edges at an angle | Decorative edge treatment |

!!! example "🖥️ Screenshot Needed"
    Same edge with fillet (rounded) vs chamfer (beveled) applied

### Design Steps

1. Create a new sketch on the Top plane
2. Draw the outline shape of your keychain (rectangle, rounded rectangle, custom shape)
3. Add a circle for the keychain ring hole (at least 4mm diameter)
4. Extrude the base shape (3–5mm thick works well for 3D printing)
5. Add text using the **Text** tool — sketch your name on the top face

!!! example "🖥️ Screenshot Needed"
    Text tool typing on a part face, text sketch visible

6. Extrude the text either **up** (raised lettering) or **down** (engraved lettering)
7. Apply fillets to any sharp corners
8. Apply chamfers for style if desired

!!! example "🖥️ Screenshot Needed"
    Finished keychain in Onshape with text, fillets, and keychain hole

---

## Designing for 3D Printing

Not everything that looks good in CAD prints well. Here are the critical rules for designing parts that will actually print successfully.

### Wall Thickness

| Guideline | Minimum | Recommended |
|-----------|---------|-------------|
| Wall thickness | 0.8mm | 1.2mm+ |
| Feature detail | 0.4mm | 0.6mm+ |
| Text height | 5mm | 8mm+ |
| Text depth/raise | 0.5mm | 1mm+ |

!!! warning "Thin Walls Break"
    If your walls are thinner than 0.8mm, the 3D printer may not be able to print them at all, or they will snap off immediately. When in doubt, make it thicker.

### Overhangs and Supports

- **Overhangs** are surfaces that angle outward with nothing below them
- Angles less than **45 degrees from vertical** generally print fine without support
- Angles greater than 45 degrees need **support material**, which adds print time and leaves rough surfaces
- **Best practice:** design your part so it sits flat on the print bed with no overhangs

!!! example "📐 Diagram Needed"
    Overhang angles: under 45° (OK, no support) vs over 45° (needs support)

### Bridge Distance

- A **bridge** is a horizontal span between two supports
- Short bridges (under 10mm) print fine
- Long bridges sag — redesign to avoid them or add supports

### Orientation Matters

The direction your part sits on the print bed affects:

- **Strength** — parts are weakest between layers (Z-axis)
- **Surface quality** — the bottom face touching the bed is the smoothest
- **Overhang requirements** — rotating 90 degrees can eliminate overhangs entirely

---

## Activity: Design and Print Your Keychain

1. Complete Lesson 4 tutorial
2. Design your custom keychain using at least 3 of the 5 features listed above
3. Have your coach review the design for printability
4. Export as STL (right-click the Part > Export > STL)
5. Slice and print (your coach will help with slicer settings)

### Design Checklist

Before exporting, verify:

- [ ] Keychain hole is at least 4mm diameter
- [ ] Base thickness is 3–5mm
- [ ] No walls thinner than 1mm
- [ ] Text is large enough to read (8mm+ height recommended)
- [ ] No unsupported overhangs
- [ ] All sketches fully constrained
- [ ] Part sits flat on a surface (no rocking)

---

## Key Takeaways

1. **Extrude is the most-used feature in CAD** — master Add, Remove, and Symmetric modes
2. **Fillets and chamfers** turn rough designs into polished ones — use them generously
3. **3D printing has physical constraints** — wall thickness, overhangs, and orientation all matter
4. **Design with manufacturing in mind** — the best CAD model in the world is useless if it cannot be built

---

## Next Up

**[Module 3.3: Advanced Features](advanced-features.md)** — learn the Wrap feature to apply graphics and logos to curved surfaces.
