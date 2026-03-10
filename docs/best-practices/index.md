# Best Practices

This page covers best practices for VEX V5 CAD work — from file management and naming conventions to collaboration workflow and design review processes. Following these practices keeps your team organized and efficient.

---

## File Management

### Document Organization
Organize your Onshape documents by subsystem:

```
Team Documents/
├── 2025 Robot/
│   ├── 00 - Robot Layout          (master layout sketch)
│   ├── 01 - Drivetrain            (frame, bellypan, swerve mounting)
│   ├── 02 - Intake                (intake mechanism)
│   ├── 03 - Shooter               (shooter mechanism)
│   ├── 04 - Elevator              (elevator mechanism)
│   ├── 05 - Climber               (climber mechanism)
│   ├── 06 - Electronics           (electronics layout)
│   └── 07 - Full Robot Assembly   (final integration)
├── 2025 Practice Projects/
│   └── ...
└── Reference/
    └── ...
```

!!! tip "Number Your Documents"
    Prefixing documents with numbers (00, 01, 02...) keeps them sorted in a logical order. This is especially helpful when you have many documents for a single robot.

### Version Naming
Create named versions at important milestones:

- **"Design Review 1"** — Before the first team design review
- **"Approved for Manufacturing"** — After design is finalized
- **"As-Built"** — After manufacturing, reflecting any changes made during build
- **"Competition Ready"** — Final version going to competition
- **"Post-Competition Updates"** — Changes based on competition experience

### Tab Organization
Within each document, organize tabs logically:

```
Document: 02 - Intake
├── Tab 1: Layout Sketch      (Part Studio)
├── Tab 2: Intake Arm Parts   (Part Studio)
├── Tab 3: Feed Parts         (Part Studio)
├── Tab 4: Intake Assembly    (Assembly)
└── Tab 5: Intake Drawing     (Drawing)
```

---

## Naming Conventions

### Parts
Name every part descriptively. Never leave default names.

**Good names:**

- "Left Drive Side Plate"
- "Intake Pivot Shaft"
- "Elevator Stage 1 Rail - Left"
- "Shooter Hood Plate"

**Bad names:**

- "Part 1"
- "New Part"
- "Untitled"
- "asdfgh"

### Features
Name key features in the feature tree, especially:

- Sketch features that represent design intent ("Motor Mounting Pattern", "Bearing Bore")
- Extrude features that create significant geometry ("Base Plate", "Lightening Pockets")

!!! warning "Name As You Go"
    It's much easier to name parts and features as you create them than to go back and rename everything later. Make it a habit.

### Assemblies
Name mates with clear descriptions:

- "Motor to Plate - Fastened"
- "Arm Pivot - Revolute"
- "Elevator Stage 1 - Slider"

---

## Collaboration

### Working Simultaneously
Onshape supports real-time collaboration, but it works best with some ground rules:

- **One person per Part Studio at a time** — Multiple editors in the same Part Studio can cause conflicts
- **Different subsystems can be worked on simultaneously** — Two people can work on different documents or Part Studios without issues
- **Communicate** — Let your team know what you're working on to avoid stepping on each other

### Branches
Use branches for experimental designs:

1. Right-click the main workspace → **"Create branch"**
2. Name it descriptively ("intake-v2-wider-rollers")
3. Make your experimental changes on the branch
4. If it works, merge back to main; if not, delete the branch

### Design Reviews
Schedule regular design reviews where the team examines each subsystem:

- **Show the layout sketch** — Does the design intent make sense?
- **Walk through the mechanism** — How does it work? What's the range of motion?
- **Check for conflicts** — Does this subsystem interfere with others?
- **Verify against requirements** — Does it actually accomplish the game task?
- **Check manufacturability** — Can your team actually build this?

---

## CAD Hygiene

### Fully Constrain All Sketches
Every sketch should be fully constrained (all black, no blue). This is non-negotiable.

### Minimize Sketch Complexity
Each sketch should serve one clear purpose. If a sketch has 50 entities, consider splitting it into multiple simpler sketches.

### Use the Right Feature for the Job
- Use **Extrude** for uniform cross-section parts
- Use **Revolve** for rotationally symmetric parts
- Use **Pattern** instead of copying features manually
- Use **Mirror** for symmetric designs

### Keep Feature Trees Clean
- Name important features
- **Suppress** features you're not currently using (don't delete them — you might need them later)
- Group related features logically
- Avoid long chains of dependencies where possible

### Materials and Appearances
- Assign **materials** to all parts (aluminum 6061 is default for plates and tubes)
- Use **appearance colors** to visually distinguish parts:
    - Gray/silver for aluminum
    - Dark gray for steel
    - Blue for polycarbonate
    - Orange for COTS parts (motors, gearboxes)
    - Green for 3D printed parts

---

## Weight Management

Track your robot's weight throughout the design process:

1. Assign correct **materials** to all parts in Onshape
2. Use **Mass Properties** (right-click a part → Mass Properties) to check individual part weights
3. Use Assembly mass properties to check subsystem totals
4. Maintain a **weight budget spreadsheet**:

| Subsystem | Budget | Actual | Margin |
|-----------|--------|--------|--------|
| Drivetrain | 40 lbs | 38 lbs | +2 lbs |
| Intake | 10 lbs | 11 lbs | -1 lb |
| Shooter | 8 lbs | 7 lbs | +1 lb |
| Elevator | 15 lbs | 16 lbs | -1 lb |
| Electronics | 8 lbs | 8 lbs | 0 lbs |
| Bumpers | 12 lbs | 12 lbs | 0 lbs |
| **Total** | **93 lbs** | **92 lbs** | **+1 lb** |

!!! warning "Weigh Early, Weigh Often"
    Robots almost always end up heavier than designed. Track weight from the beginning of the design process and leave a margin (10-15% under the limit).

---

## Common Mistakes to Avoid

| Mistake | Why It's Bad | What to Do Instead |
|---------|-------------|-------------------|
| Skipping the layout sketch | Parts won't fit together | Always start with a layout |
| Under-constrained sketches | Geometry shifts unexpectedly | Fully constrain every sketch |
| Not using MKCAD | Wasting time modeling vendor parts | Use MKCAD for all COTS parts |
| Ignoring weight | Over weight limit at competition | Track weight from day one |
| Designing in isolation | Subsystems interfere with each other | Regular integration checks |
| No named versions | Can't go back to a known-good state | Version at every milestone |
| Unnamed parts | "Part 7" tells you nothing | Name every part immediately |
| Over-complexity | Can't build it in time, more failure modes | Simplify ruthlessly |
