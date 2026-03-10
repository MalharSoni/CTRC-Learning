# Module 5.1: Robot Integration

**A pile of mechanisms is not a robot.** Integration is the process of combining your drivetrain, intake, slider, wedge, electronics, and wiring into a single machine that works reliably as a unified system. This module covers the practical details that separate a collection of parts from a competition-ready robot.

---

## Learning Objectives

By the end of this module, you will be able to:

- Attach multiple mechanisms to one drivetrain without interference
- Plan and execute V5 Brain port assignments
- Route and manage cables cleanly
- Manage robot weight and balance
- Complete a pre-competition robot checklist

---

## Attaching Multiple Mechanisms

Your robot from Units 1 and 4 likely has a drivetrain with a wedge, intake, and linear slider. Getting them all on one robot without conflicts is the first challenge.

!!! example "📷 Photo Needed"
    Robot with wedge, intake, and slider all mounted, showing coexistence

### Interference Checklist

Before mounting a new mechanism, check:

| Check | How to Verify |
|-------|--------------|
| **Physical clearance** | Move every mechanism to its full range of motion. Do any parts collide? |
| **Screw head interference** | Are screw heads on one mechanism catching on parts of another? |
| **Cable clearance** | Will wires get pinched, pulled, or cut by moving mechanisms? |
| **Shared mounting points** | Are two mechanisms trying to use the same holes? |
| **Weight distribution** | Will adding this mechanism make the robot tip or become unbalanced? |

### Mounting Priority

When conflicts arise, prioritize in this order:

1. **Drivetrain** — the foundation, never compromise it
2. **Primary scoring mechanism** — the one that earns the most points (usually intake)
3. **Secondary mechanism** — the one that supplements scoring (slider, arm)
4. **Defensive mechanism** — wedge or plow (can be simplified if space is tight)

!!! tip "If It Doesn't Fit, Redesign — Don't Force"
    Forcing a mechanism into a space where it does not fit leads to bent metal, stripped screws, and unreliable performance. If two mechanisms conflict, go back to CAD and redesign the mounting. Thirty minutes in Onshape is better than two hours of fighting with pliers.

---

## V5 Brain Port Assignment

The V5 Brain has **21 Smart Ports**. Plan your assignments before plugging anything in.

### Recommended Port Layout

| Port Range | Assignment | Rationale |
|------------|-----------|-----------|
| **1-4** | Drivetrain motors (left side) | Grouped for easy identification |
| **5-8** | Drivetrain motors (right side) | Grouped for easy identification |
| **9-12** | Mechanism motors (intake, slider) | Central ports for mechanisms |
| **13-16** | Sensors (inertial, rotation, distance) | Keep sensor ports together |
| **17-20** | Additional mechanisms or pneumatics | Reserve for expansion |
| **21** | Inertial sensor (convention) | Many teams use port 21 for IMU |

!!! example "📷 Photo Needed"
    V5 Brain with labeled port assignments matching the recommended layout

### Port Assignment Table

Create a physical label or document that maps every port:

```
Port 1:  Left front drive motor
Port 2:  Left rear drive motor
Port 3:  (unused)
Port 4:  (unused)
Port 5:  Right front drive motor (reversed)
Port 6:  Right rear drive motor (reversed)
Port 7:  (unused)
Port 8:  (unused)
Port 9:  Intake motor
Port 10: Linear slider motor (if motorized)
Port 11: (unused)
Port 12: (unused)
Port 13: Rotation sensor (intake)
Port 14: (unused)
Port 15: (unused)
Port 16: Distance sensor (front)
Port 17-20: (reserved)
Port 21: Inertial sensor
```

!!! info "Label Your Ports"
    Write the port number on a small piece of tape and wrap it around each cable near the Brain end. When a cable comes unplugged during a match (and it will), you need to know instantly where it goes. Do not rely on memory.

!!! example "📷 Photo Needed"
    Tape labels on cables near Brain connector for easy identification

---

## Cable Routing Best Practices

Bad wiring is the number one cause of robot failures at competitions. A loose cable can disable your entire robot at the worst possible moment.

### The Rules of Cable Management

1. **Every cable must be secured** — no free-hanging wires
2. **Cables must not cross moving parts** — the surest way to cut a wire
3. **Leave slack at connection points** — too tight and the cable pulls out during impacts
4. **Bundle parallel cables** — use zip ties to group cables running in the same direction
5. **Route along the frame** — cables should follow the structural members, not span open air

!!! example "📷 Photo Needed"
    Clean cable routing: zip-tied along frame, bundled, with service loops

!!! example "📷 Photo Needed"
    Bad cable routing: loose wires, cables crossing gears, no zip ties

### Cable Routing Tools

| Tool | Use |
|------|-----|
| **Zip ties** | Bundle cables, secure to frame (cut excess tail flush) |
| **Adhesive cable clips** | Stick to flat surfaces, guide cables along specific paths |
| **Wire loom / spiral wrap** | Protect cables in high-abrasion areas |
| **Velcro straps** | Reusable ties for cables you disconnect frequently |

### Danger Zones

These are the areas where cables are most likely to get damaged:

| Zone | Risk | Protection |
|------|------|-----------|
| Near spinning gears | Cable gets caught and shredded | Route behind guards, secure tightly |
| Across pivoting joints | Cable stretches and tears | Add a service loop (extra slack in a loop) |
| Near sharp metal edges | Cable insulation gets cut | Add edge protection or reroute |
| At the Brain connector | Repeated pulling loosens the plug | Secure cable to frame near the port |

---

## Weight Management

VEX robots have a weight limit (check current season rules). Even if you are under the limit, weight distribution affects performance.

### Weight Distribution Effects

| Distribution | Effect |
|-------------|--------|
| Front-heavy | Robot tips forward during stops, rear wheels lose traction |
| Rear-heavy | Intake struggles to grip, front wheels lift during acceleration |
| Top-heavy | Robot tips during turns, unstable on field elements |
| Balanced (center, low) | Best traction, most stable, easiest to drive |

### How to Balance

1. Place the battery in the center-bottom of the robot
2. Keep the Brain centered (or slightly rear)
3. If the robot tips in one direction, move heavy components opposite
4. Add counterweight as a last resort (every gram of counterweight is wasted capacity)

### Weight Reduction Strategies

If you are over the limit:

- Use aluminum instead of steel where strength allows
- Remove unnecessary bracing (keep only what is structurally required)
- Use fewer, larger screws instead of many small screws
- Shorten standoffs and C-channels to minimum required lengths
- Replace heavy components with lighter alternatives (smaller motor cartridges if torque allows)

---

## Final Robot Checklist

Before any competition match, run through this checklist:

### Structural

- [ ] All screws tightened (no loose hardware)
- [ ] No cracks in metal (especially at stress points)
- [ ] Mechanisms move through full range without interference
- [ ] Robot fits within size constraints (18" x 18" x 18")

### Electronics

- [ ] Battery fully charged
- [ ] All motor cables plugged into correct ports
- [ ] All sensor cables plugged into correct ports
- [ ] No loose connections (wiggle each cable to check)
- [ ] V5 Brain firmware up to date
- [ ] Radio plugged in and functional

### Wiring

- [ ] All cables zip-tied or clipped to frame
- [ ] No cables crossing moving parts
- [ ] Service loops at pivot points
- [ ] Port labels on all cables

### Mechanisms

- [ ] Drivetrain free-spins on all wheels
- [ ] Intake free-spins, correct compression verified
- [ ] Linear slider deploys and retracts smoothly
- [ ] Wedge pivots freely, returns to resting position

### Software

- [ ] Driver controls mapped correctly (all buttons tested)
- [ ] Autonomous routine loaded and tested
- [ ] Motor directions verified (no inverted motors)

!!! warning "Run This Checklist Before Every Match"
    Not just once — before every match. Things come loose from impacts, cables get pulled during handling, and batteries die between matches. A 2-minute checklist prevents a 0-point match.

---

## Key Takeaways

1. **Integration is harder than building** — plan for things to conflict and budget time to resolve
2. **Port assignments prevent confusion** — label everything, document everything
3. **Cable management prevents failures** — the best-designed robot fails if a wire comes loose
4. **Weight balance affects driving** — center the heavy stuff, keep it low
5. **The checklist is not optional** — run it every time, no exceptions

---

## Next Up

**[Module 5.2: Autonomous Strategy](autonomous-strategy.md)** — program your robot to score on its own.
