# Module 1.4: Drivetrain Build

This is where everything comes together. In this module, you'll design and build a **complete competition drivetrain** from scratch, applying every skill from Modules 1.1–1.3. By the end, you'll have a rolling, geared, electronics-mounted robot chassis ready for programming.

---

## Build Requirements

Your drivetrain must meet all of the following requirements:

| Requirement | Details |
|-------------|---------|
| **Motors** | Exactly 2x 11W V5 Smart Motors driving the wheels |
| **Frame** | Structurally rigid — no wobble when tested |
| **Bracing** | At least one diagonal brace or boxed rail |
| **Wheels** | 4 or 6 wheels, appropriate type for your design |
| **Gear Ratio** | Must include an external gear ratio (not just motor cartridge) |
| **Roll Straight** | Robot rolls in a straight line when pushed with motors disengaged |
| **Electronics** | V5 Brain, Battery, Radio, and Inertial Sensor mounted and wired |
| **Documentation** | EDP (Engineering Design Process) writeup |

!!! warning "No Shortcuts"
    "Just motor cartridge" does not satisfy the gear ratio requirement. You must have gears meshing externally on the robot. This proves you understand gear ratios in practice, not just in theory.

---

## Planning Your Drivetrain

Before you pick up a single part, answer these design questions:

### 1. What wheel type and size?

| Choice | Tradeoff |
|--------|---------|
| **4" wheels** | Faster (larger wheel = more distance per rotation), less torque at ground |
| **3.25" wheels** | Balanced speed and torque |
| **2.75" wheels** | More torque at ground, slower top speed, lower center of gravity |
| **Omni wheels** | Easy turning, can be pushed sideways |
| **Traction wheels** | Maximum grip, harder to turn (use with omni wheels for hybrid setups) |

### 2. What gear ratio?

Think about your goal:

| Goal | Ratio Direction | Example |
|------|----------------|---------|
| Fast robot (for racing/time trials) | Speed up | Green cart + 60t:36t external = 333 RPM |
| Balanced robot (general competition) | Slight speed | Green cart + 48t:36t external = 267 RPM |
| Pushing robot (defense/heavy loads) | Torque up | Green cart + 36t:60t external = 120 RPM |

### 3. How many wheels?

| Configuration | Pros | Cons |
|--------------|------|------|
| **4-wheel** | Simple, fewer parts, lighter | Less traction, can high-center |
| **6-wheel** | More traction, stable, won't high-center | More parts, more friction sources |

### 4. What's your frame geometry?

Sketch your drivetrain on paper before building. Include:

- Top-down view with dimensions (in holes)
- Wheel positions
- Motor positions
- Gear train layout
- Brain/Battery mounting location

!!! tip "Sketch First"
    Spending 15 minutes sketching saves hours of rebuilding. Decide your dimensions, gear placement, and electronics locations before you cut or assemble anything.

!!! example "📷 Photo Needed"
    Hand-drawn drivetrain sketch: top-down view with dimensions, wheel/motor/gear positions, electronics location

---

## Build Process

### Step 1: Frame Rails

Build two parallel rails that will support the wheels and motors.

1. Select your C-Channels for the rails (typically 25- or 30-hole long)
2. **Box them** if using 2-wide C-Channels (see Module 1.2 boxing technique)
3. Verify both rails are identical in length and hole pattern

!!! tip "Symmetry Is Everything"
    Your two rails must be mirror images of each other. If the left rail has a motor at hole 5 and a wheel at hole 20, the right rail must match. Asymmetry causes the robot to drive crooked.

!!! example "📷 Photo Needed"
    Two completed parallel boxed C-Channel rails, symmetrical and identical

### Step 2: Cross Bracing

Connect the two rails with cross members to create a rigid rectangular frame.

1. Cut cross C-Channels to the desired drivetrain width
2. Attach at front, rear, and at least one middle position
3. Use 2+ screws at every joint, spaced apart
4. **Test for wobble** — hold one rail and push the other

!!! example "📷 Photo Needed"
    Cross members attached between rails at front, rear, and middle with multiple screws per joint

### Step 3: Wheels and Axles

Mount your wheels on axles supported by bearings in the rails.

1. Press bearings into every hole where an axle passes through
2. Slide axles through bearings
3. Mount wheels with proper spacing (controlled play — ~1mm gap from rail)
4. Lock axle position with shaft collars

!!! example "📷 Photo Needed"
    Wheel mounting: bearings in holes, axle through, wheel with spacers, shaft collars locking

### Step 4: Gear Train

Install your external gear ratio.

1. Mount the motor with the driving gear on the motor output shaft
2. Mount the driven gear on the wheel axle
3. Ensure gears mesh properly — teeth should interlock smoothly
4. Test: spin the motor shaft by hand — the wheel should turn with the correct ratio
5. Check for gear skipping — if teeth skip, adjust the center-to-center distance

!!! example "📷 Photo Needed"
    Gear ratio installed: motor driving gear meshing with wheel axle driven gear

!!! warning "Gear Mesh Distance"
    Gears must be at the correct center-to-center distance. Too close = binding and excessive friction. Too far = teeth skipping under load. The correct distance is when teeth interlock with slight play — you can feel a tiny bit of wiggle but teeth don't disengage.

!!! example "📐 Diagram Needed"
    Gear mesh: too close (binding) vs correct (slight play) vs too far (skipping)

### Step 5: The Roll Test

Before mounting electronics, verify your mechanical build:

1. **Disengage motors** (remove cartridges or disconnect motor shafts)
2. Place robot on a flat surface
3. Push it forward firmly
4. It should **roll straight for several feet** without veering left or right
5. Wheels should spin freely for **3+ seconds** after the push stops

!!! example "🎬 GIF/Video Needed"
    Roll test: robot pushed on flat surface, rolls straight with wheels spinning freely

| Result | Diagnosis |
|--------|-----------|
| Rolls straight, spins long | You're good — proceed to electronics |
| Veers left or right | One side has more friction — check bearings, spacing, gear mesh |
| Stops quickly | High friction everywhere — check all rotating assemblies |
| Makes grinding noise | Something is rubbing — find it by spinning each axle individually |

### Step 6: Electronics Mounting

Mount all V5 electronics securely to your chassis.

#### V5 Brain

- Mount centrally on top of the chassis for easy access
- Use the included mounting holes or zip-tie to cross members
- Screen should face up or toward the driver for visibility
- Ensure USB port is accessible for programming

!!! example "📷 Photo Needed"
    V5 Brain mounted centrally on chassis, screen up, USB accessible

#### V5 Battery

- Mount low and centered for best weight distribution
- Secure with the battery strap or zip ties — it must not shift during driving
- Position so the cable reaches the Brain easily
- Battery should be removable for charging without disassembling the robot

!!! example "📷 Photo Needed"
    V5 Battery mounted low and centered, secured with strap, cable to Brain

#### V5 Radio

- Mount on top of the Brain or on a high point of the chassis
- The radio communicates with the controller — higher is generally better
- Don't bury it inside the chassis where metal blocks the signal

#### Inertial Sensor (IMU)

- Mount as close to the **center of the robot** as possible
- Mount flat (parallel to the ground)
- Secure rigidly — any vibration or wobble causes drift in readings
- This sensor is critical for autonomous driving (Unit 2)

!!! example "📷 Photo Needed"
    Inertial sensor mounted flat at robot center, rigid and level

!!! tip "Wire Management"
    Route motor wires and sensor cables neatly. Use zip ties to secure cables to the frame. Loose wires get caught in gears, pinched by moving parts, and disconnected during matches. Clean wiring is not cosmetic — it's functional.

!!! example "📷 Photo Needed"
    Good vs bad wiring: messy loose wires vs neatly zip-tied and routed

### Step 7: Wiring

1. Connect both drive motors to the V5 Brain using smart cables
2. Connect the Inertial Sensor
3. Connect the Radio
4. Plug in the Battery
5. Power on — verify the Brain detects all connected devices

!!! example "📐 Diagram Needed"
    V5 Brain connections: 2 drive motors, inertial sensor, radio, battery — labeled ports

---

## Engineering Design Process (EDP) Documentation

!!! info "Why Documentation?"
    In VEX competition, the **Engineering Notebook** is judged. Teams that document their design process can win Design Awards and qualify for championships even without winning matches. Start building this habit now.

### What to Document

For your drivetrain build, write up the following:

| Section | Content |
|---------|---------|
| **Problem Statement** | What are the requirements for the drivetrain? |
| **Brainstorm** | What design options did you consider? (wheel type, ratio, frame) |
| **Decision Matrix** | Why did you choose your final design? What tradeoffs did you make? |
| **Build Log** | Step-by-step notes on what you built, in what order |
| **Testing** | Roll test results, free-spin times, issues discovered |
| **Iteration** | What did you change after testing? What improved? |

### Decision Matrix Example

| Criteria (weight) | 4-wheel Omni | 6-wheel Mixed | 4-wheel Traction |
|-------------------|:---:|:---:|:---:|
| Turning ease (3) | 9 | 7 | 4 |
| Pushing power (2) | 4 | 7 | 8 |
| Build simplicity (2) | 8 | 5 | 7 |
| Speed (1) | 7 | 6 | 6 |
| **Weighted Total** | **56** | **50** | **47** |

!!! tip "Take Photos"
    Photograph your drivetrain at each stage of construction. Before and after fixing problems. Close-ups of gear trains and wiring. These photos are invaluable for your engineering notebook.

---

## Final Checklist

Before declaring your drivetrain complete, verify every item:

- [ ] Frame is rigid — no wobble in any direction
- [ ] Bracing is present — at least one diagonal or boxed section
- [ ] All rotating axles use bearings
- [ ] Controlled play on all wheels and gears (~1mm gap)
- [ ] External gear ratio is installed and functioning
- [ ] Robot rolls straight when pushed (motors disengaged)
- [ ] All wheels spin freely for 3+ seconds
- [ ] V5 Brain is mounted and accessible
- [ ] Battery is mounted low, centered, and removable
- [ ] Radio is mounted and unobstructed
- [ ] Inertial sensor is centered, flat, and rigid
- [ ] All wires are routed and zip-tied
- [ ] Brain powers on and detects all devices
- [ ] EDP documentation is complete with sketches and photos

!!! example "📷 Photo Needed"
    Completed drivetrain from 4 angles: front, side, top, and 3/4 view

---

## Key Takeaways

- [x] Plan before you build — sketch dimensions and layouts on paper
- [x] Symmetry between left and right sides is critical for driving straight
- [x] The roll test reveals friction problems before you add motors
- [x] Electronics placement affects balance, signal quality, and sensor accuracy
- [x] Wire management prevents mechanical failures during competition
- [x] Document everything — it's a competition requirement, not busywork

**Next up:** Time to prove your skills. [Free Spin Challenge](challenge-free-spin.md) and [Obstacle Course Time Trial](challenge-time-trial.md) await.
