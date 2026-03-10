# Module 3.5: Render & Present

**A great design that nobody can see is a wasted design.** Render Studio transforms your gray CAD model into a photorealistic image with materials, lighting, and backgrounds. This module teaches you to render your drivetrain and present it like a professional engineer.

---

## Learning Objectives

By the end of this module, you will be able to:

- Open and configure Render Studio in Onshape
- Apply materials (metal, plastic, rubber) to parts
- Set up lighting and camera angles
- Export high-resolution rendered images
- Take effective screenshots for documentation
- Present your design with clarity and confidence

---

## Lesson 9: Render Studio

Open **Lesson 9** in Classes > V5 CT Education.

### Accessing Render Studio

1. Open your completed drivetrain assembly
2. Click the **Render Studio** tab at the bottom of the screen (next to your Assembly tabs)
3. If you do not see Render Studio, right-click the tab bar and select **Add Render Studio**

!!! example "🖥️ Screenshot Needed"
    Render Studio tab highlighted in bottom tab bar

### The Render Studio Interface

| Panel | What It Controls |
|-------|-----------------|
| **Scene** | Background environment, floor, shadows |
| **Camera** | Position, angle, field of view, depth of field |
| **Appearances** | Material and color assignments for each part |
| **Lighting** | Environment light intensity, additional light sources |
| **Render** | Output resolution, quality, and export |

!!! example "🖥️ Screenshot Needed"
    Render Studio: Scene, Camera, Appearances, Lighting, Render panels

---

## Setting Up Your Render

### Step 1: Apply Materials

1. Click the **Appearances** panel
2. Select a part or group of parts in the viewport
3. Choose a material from the library:

| Part Type | Recommended Material |
|-----------|---------------------|
| C-channels, plates | Brushed aluminum or anodized aluminum |
| Gears | Steel or dark gray plastic |
| Wheels | Black rubber |
| Screws, hardware | Chrome or stainless steel |
| V5 Brain | Default plastic (or custom green) |
| Motors | Dark plastic with silver accents |

!!! example "🖥️ Screenshot Needed"
    Appearances panel with part selected, material library (aluminum, rubber, chrome)

!!! tip "Color-Code Your Subsystems"
    Use different aluminum colors for different subsystems — silver for the drivetrain frame, blue for the intake, red for the lift. This makes your render easier to read and helps during design reviews when pointing out specific subsystems.

!!! example "🖥️ Screenshot Needed"
    Drivetrain with materials: aluminum channels, rubber wheels, chrome screws

### Step 2: Configure the Scene

1. Choose a **background environment** — studio (clean white), outdoor, or custom
2. Enable **floor shadow** for grounding — this makes the robot look like it is sitting on a real surface
3. Adjust **environment rotation** to get the best lighting angle on your robot

### Step 3: Set the Camera

1. **Orbit to the angle** you want — isometric (3/4 view) is the standard for design presentations
2. Adjust **field of view**:
    - Lower FOV (30-40) = more telephoto, less distortion, professional look
    - Higher FOV (60+) = wider view, more context, but can look distorted
3. Optionally enable **depth of field** for a blurred background effect (subtle looks best)

### Step 4: Render and Export

1. Click **Render** in the render panel
2. Select resolution:
    - **1920x1080** for presentations and documentation
    - **3840x2160** (4K) for posters or print
3. Set quality to **High** (Low is for quick previews only)
4. Wait for the render to complete (may take 30 seconds to a few minutes)
5. Click **Download** to save the image

!!! example "🖥️ Screenshot Needed"
    Final polished 1920x1080 render of completed drivetrain — hero image

---

## Screenshots for Documentation

Not every image needs to be a full render. For engineering notebooks and quick documentation, screenshots are faster and often more useful.

### Effective Screenshot Techniques

| Purpose | Camera Angle | Background | What to Show |
|---------|-------------|------------|-------------|
| Overall design | Isometric (3/4 view) | Clean white | Full robot, all subsystems visible |
| Mechanism detail | Close-up, straight-on | Transparent or white | Single mechanism, gears visible |
| Assembly instructions | Step-by-step, same angle | White | Progressive build stages |
| Dimension callouts | Orthographic (front/side/top) | White | Key measurements annotated |

### Screenshot Workflow

1. Hide parts you do not want visible (right-click > Hide)
2. Set the view angle
3. Use **View > Screenshot** or your operating system's screenshot tool
4. Annotate in a separate tool if adding dimensions or callouts

!!! info "Render vs Screenshot — When to Use Which"
    - **Renders** are for presentations, competition boards, and anything the public sees. They look polished and professional.
    - **Screenshots** are for engineering notebooks, team documentation, and build guides. They are fast and informational.

    Do not waste time rendering images that will only be seen by your team during a build meeting. Save renders for when polish matters.

---

## Presenting Your Design

Designing a robot is only half the job. At competitions, you will present your design to judges, alliance partners, and teammates. Here is how to do it well.

### Structure Your Presentation

1. **The Problem** — What does the game require? What challenges did you identify?
2. **The Design** — What did you build and why? Show your render/screenshots.
3. **Key Decisions** — Why did you choose this gear ratio? This material? This linkage type?
4. **Testing Results** — What worked? What did you iterate on?
5. **Next Steps** — What would you improve with more time?

### Presentation Tips

| Do | Do Not |
|----|--------|
| Speak to the image on screen — point out specific features | Read a script word for word |
| Explain **why**, not just **what** | List features without context |
| Show before/after when you iterated | Only show the final version |
| Admit what did not work and how you fixed it | Pretend everything was perfect |
| Keep it under 3 minutes | Ramble without structure |

!!! tip "The 30-Second Elevator Pitch"
    Practice describing your entire robot design in 30 seconds. If you can explain the key decisions and trade-offs in half a minute, you truly understand your design. If you cannot, you need to think more deeply about why you made the choices you did.

---

## Activity: Render Your Drivetrain

1. Open your completed drivetrain assembly from Lessons 6-8
2. Apply appropriate materials to all visible parts
3. Set up a studio environment with floor shadows
4. Position the camera at an isometric angle
5. Render at 1920x1080 resolution, High quality
6. Export and save the image
7. Take 2-3 additional screenshots from different angles for documentation
8. Prepare a 2-minute presentation covering:
    - Your drivetrain design and gear ratio
    - One decision you made and why
    - One thing you would change

---

## Key Takeaways

1. **Renders communicate professionalism** — a well-rendered design earns credibility with judges and partners
2. **Materials make models readable** — color-coding subsystems helps everyone understand your robot at a glance
3. **Screenshots are for speed, renders are for polish** — use the right tool for the audience
4. **Presenting is a skill** — practice explaining your design decisions, not just listing features

---

## Challenges

You have completed all 5 modules in Unit 3. Time to prove your skills:

- **[3D Print Keychain](challenge-3d-print-keychain.md)** — Design and print your own custom keychain
- **[CAD Battle](challenge-cad-battle.md)** — Race to model a mystery object
- **[CAD vs Real](challenge-cad-vs-real.md)** — Build the same mechanism in CAD and physically
