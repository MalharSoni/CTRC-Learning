# Module 3.3: Advanced Features

**Flat surfaces are easy. Curved surfaces are where CAD gets interesting.** The Wrap feature lets you apply sketches, logos, and text onto any surface — flat, cylindrical, or spherical. This module teaches you three different wrapping techniques and puts them to the test with a creative challenge.

---

## Learning Objectives

By the end of this module, you will be able to:

- Use the Wrap feature to emboss or deboss on flat surfaces
- Wrap sketches onto cylindrical (curved) surfaces
- Wrap sketches onto spherical surfaces
- Combine multiple features to create complex, detailed parts
- Complete Challenge 1 in the V5 CT Education class

---

## Lesson 5: Wrap Feature

Open **Lesson 5** in Classes > V5 CT Education.

### What Is Wrap?

The Wrap feature takes a 2D sketch and projects it onto a 3D surface, then adds or removes material along that surface. Think of it like applying a sticker to a curved object — except the sticker becomes part of the object itself.

!!! example "🖥️ Screenshot Needed"
    Wrap feature highlighted in feature toolbar

### Wrap vs Extrude

| Feature | Best For | Surface Type |
|---------|---------|--------------|
| **Extrude** | Adding/removing material in a straight line | Flat surfaces only |
| **Wrap** | Adding/removing material that follows a surface contour | Flat, curved, or spherical |

If you try to extrude text onto a cylinder, it will cut straight through at weird angles. Wrap follows the curvature of the surface, giving you a clean result every time.

!!! example "🖥️ Screenshot Needed"
    Extrude through cylinder (wrong, cuts straight) vs Wrap (correct, follows curve)

---

## Walkthrough 1: Flat Surface Wrap

The simplest use of Wrap — applying a sketch to a flat face.

### Steps

1. Create a box (sketch rectangle, extrude)
2. Start a new sketch on the **top face** of the box
3. Draw or type the content you want to wrap (text, logo, pattern)
4. Exit the sketch
5. Select **Wrap** from the feature toolbar
6. Choose your sketch as the source
7. Select the top face as the target surface
8. Set the wrap type:
    - **Add** — raises the sketch out of the surface (emboss)
    - **Remove** — cuts the sketch into the surface (deboss)
9. Set the depth (0.5–1mm works well for detail work)

!!! example "🖥️ Screenshot Needed"
    Flat wrap: box with sketch → Wrap dialog → embossed result

!!! example "🖥️ Screenshot Needed"
    Wrap dialog: Add (emboss) vs Remove (deboss) options with depth setting

!!! info "When to Use Wrap on Flat Surfaces"
    You might wonder why not just use Extrude for flat surfaces. The answer: Wrap handles complex sketch geometry (especially imported SVGs and text with curves) more reliably than Extrude-Add on certain face configurations. If Extrude gives you trouble with text on a face, try Wrap instead.

---

## Walkthrough 2: Curved Surface Wrap

Wrapping onto a cylinder — like adding a label to a can.

### Steps

1. Create a cylinder (sketch circle, extrude)
2. Start a new sketch on the **Front plane** (not on the cylinder face)
3. Draw your content — text, shapes, logos
4. Position the sketch so it overlaps where you want the wrap to appear on the cylinder
5. Exit the sketch
6. Select **Wrap**
7. Choose your sketch as the source
8. Select the **curved face of the cylinder** as the target surface
9. The sketch will bend to follow the curvature automatically
10. Set Add or Remove and specify depth

!!! example "🖥️ Screenshot Needed"
    Curved wrap on cylinder: sketch on Front plane → wrapped result

### Common Issues

| Problem | Fix |
|---------|-----|
| Wrap fails with error | Make sure your sketch does not extend beyond the edges of the target face |
| Text appears mirrored | Check which side of the plane your sketch is on — flip if needed |
| Depth looks wrong | For curved surfaces, smaller depths (0.3–0.5mm) look better than large ones |

---

## Walkthrough 3: Sphere Wrap

The most advanced wrap — applying a sketch to a spherical surface.

### Steps

1. Create a sphere (sketch circle on Front plane, use **Revolve** feature to spin it 360 degrees around a center axis)
2. Start a new sketch on the **Front plane**
3. Draw your content — keep it simple for spheres (a star, initials, simple logo)
4. Position the sketch so it overlaps the sphere where you want the wrap
5. Exit the sketch
6. Select **Wrap**
7. Choose your sketch as the source
8. Select the **spherical face** as the target
9. Set depth and wrap type

!!! example "🖥️ Screenshot Needed"
    Sphere wrap: Revolve sphere → sketch on Front plane → wrapped result

!!! warning "Sphere Wrap Limitations"
    Wrapping onto a sphere distorts your sketch geometry — straight lines become curved, and shapes near the edges stretch more than shapes near the center. Keep your wrap content small relative to the sphere size and centered on the nearest point of the sphere for best results.

---

## Feature Combinations

The real power of CAD comes from combining features. Here are some patterns you should practice:

### Embossed Logo on a Curved Handle
1. Extrude a grip shape
2. Add fillets for ergonomics
3. Wrap a logo onto the curved surface
4. Add material with Wrap-Add for a raised logo

### Engraved Serial Number on a Flat Plate
1. Extrude a plate
2. Chamfer the edges
3. Wrap text with Wrap-Remove for engraved numbering

### Textured Sphere
1. Create a sphere with Revolve
2. Wrap a pattern (grid, dots, lines) onto the surface
3. Use Wrap-Remove for a textured golf-ball effect

---

## Challenge 1: Tennis Racquet and Ball

Navigate to **Classes > V5 CT Education > Challenge 1**.

### Objective

Design a tennis racquet and ball, both featuring wrapped logos.

### Requirements

- **Tennis racquet** with a handle, frame, and string pattern
- **Tennis ball** (sphere) with a logo or text wrapped onto its surface
- At least **one flat wrap** and **one curved/spherical wrap** must be used
- Both objects should be in the same document but can be separate Part Studios

!!! example "🖥️ Screenshot Needed"
    Example completed tennis racquet and ball with wrapped logos

### Judging Criteria

| Criteria | Weight |
|----------|--------|
| Correct use of Wrap feature | 30% |
| Geometric accuracy (does it look like a racquet and ball?) | 25% |
| Clean modeling (no errors, no extra features) | 20% |
| Creative logo/text design | 15% |
| Fully constrained sketches | 10% |

### Tips

- Start with the ball — it is simpler and builds confidence for the racquet
- For the racquet strings, use a sketch pattern of lines, then Wrap-Remove them from the racquet head
- The handle is a great place to practice the curved surface wrap
- Keep your logos simple — complex SVGs often cause Wrap to fail on curved surfaces

---

## Key Takeaways

1. **Wrap follows surface contour** — unlike Extrude, which cuts in a straight line
2. **Three surface types** — flat, curved, and spherical all work with Wrap
3. **Keep it simple on curves** — complex geometry distorts more on curved/spherical surfaces
4. **Combine features** — the best designs use Extrude, Fillet, Chamfer, and Wrap together

---

## Next Up

**[Module 3.4: VEX Parts & Mates](vex-parts-and-mates.md)** — import real VEX parts and learn to assemble them with proper mates and gear relations.
