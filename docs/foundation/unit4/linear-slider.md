# Module 4.3: Linear Slider

**Sometimes you need to reach farther than your robot is wide.** A linear slider extends and retracts on rails, letting you push, rake, or deploy mechanisms beyond your robot's footprint. In this module, you will design and build a linear slider "ball rake" that deploys on a one-time release mechanism.

---

## Learning Objectives

By the end of this module, you will be able to:

- Understand linear motion concepts (rails, bearings, travel distance)
- Design a linear slider mechanism in Onshape CAD
- Build a functional slider using VEX linear slide rails
- Implement a one-time release deployment mechanism
- Test and tune slider travel and deployment

---

## What Is a Linear Slider?

A linear slider is a mechanism that moves in a straight line — forward and back, up and down, or side to side. Unlike rotational mechanisms (arms, 4-bars), a slider provides pure linear translation.

!!! example "📷 Photo Needed"
    Completed linear slider with ball rake on drivetrain

### Key Components

| Component | Purpose |
|-----------|---------|
| **Rails** | Guide tracks that define the direction of motion |
| **Carriage** | The moving platform that rides on the rails |
| **Bearings/bushings** | Reduce friction between the carriage and rails |
| **End stops** | Limit the travel distance at both ends |
| **Deployment mechanism** | Releases the slider from its stowed position |
| **Ball rake** | The end effector — a bar or plate that sweeps game objects |

!!! example "📐 Diagram Needed"
    Slider components labeled: rails, carriage, bearings, end stops, deployment mechanism, rake

### Linear vs Rotational Motion

| | Linear Slider | Rotational Arm |
|---|---|---|
| **Motion path** | Straight line | Arc |
| **Reach** | Consistent height at all extensions | Height changes with angle |
| **Complexity** | Moderate (rails, bearings) | Simple (single pivot) |
| **Force direction** | Constant along travel axis | Changes with angle |
| **Best for** | Pushing/sweeping at consistent height | Lifting and placing |

---

## CAD Activity: Linear Slider Ball Rake

Open **Lesson 12: Linear Slider** in Classes > V5 CT Education.

### Design Steps

1. **Open your drivetrain assembly** with existing mechanisms
2. **Determine slider position** — front or side of the robot, depending on game strategy
3. **Insert linear slide rails** from the VEX library — these are the guide tracks
4. **Design the carriage** — a plate or C-channel that rides on the rails
5. **Add a Slider mate** between the carriage and the rails
6. **Mount the ball rake** — a flat bar or angled plate on the front of the carriage
7. **Design the deployment mechanism** — a pin, latch, or rubber band release
8. **Set travel limits** — the carriage should not slide off the rails
9. **Animate** to verify smooth linear motion

!!! example "🖥️ Screenshot Needed"
    Linear slider in Onshape with slider mate and travel limits visible

### Design Parameters

| Parameter | Guideline |
|-----------|-----------|
| **Travel distance** | 6-12 inches typical for VEX competitions |
| **Rail length** | Travel distance + carriage length + 2 inches for end stops |
| **Carriage width** | Match the rail spacing — too wide = binding, too narrow = wobble |
| **Rake height** | Slightly above the game object resting height |
| **Deployment force** | Rubber bands — enough to deploy quickly but not violently |

---

## Linear Motion Concepts

### Rails

Rails define the path of motion. In VEX, you can use:

- **VEX linear slide kit** — purpose-built rails with low-friction surfaces
- **C-channel as rails** — budget option, use standoffs as bearing surfaces
- **Drawer slides** — if rules allow non-VEX parts (check your competition rules)

### Bearings and Friction

The carriage must slide smoothly on the rails with minimal friction. Options:

| Bearing Type | Pros | Cons |
|-------------|------|------|
| **Delrin bushings** | Low friction, durable | Requires precise sizing |
| **Roller bearings on rails** | Very smooth | Complex to mount |
| **Nylon spacers on screws** | Simple, available | Moderate friction |
| **PTFE tape on contact surfaces** | Cheap, easy | Wears out, needs replacement |

!!! tip "Free-Spin Applies to Sliders Too"
    Hold the rails at an angle. The carriage should slide freely under gravity. If it sticks, binds, or hesitates, you have too much friction. Fix it before adding any deployment force.

### Travel Distance

- **Too short** = mechanism does not reach the game objects effectively
- **Too long** = increased weight, more flex, higher chance of binding
- **Measure your need** — how far past the robot frame do you need to reach?

---

## One-Time Release Deployment

The ball rake slider uses a **one-time release mechanism** — it deploys once at the start of a match (or on a specific trigger) and stays deployed for the rest of the match.

### How It Works

1. **Stowed position**: The carriage is held retracted by a pin or latch
2. **Trigger**: A servo, pneumatic, or manual release pulls the pin
3. **Deployment**: Rubber bands or a spring pull the carriage to the extended position
4. **Lock**: End stops prevent the carriage from retracting

!!! example "📐 Diagram Needed"
    4-step one-time release: stowed → trigger → deployment → locked

### Release Mechanism Options

| Mechanism | Complexity | Reliability |
|-----------|-----------|-------------|
| **Pin and string** | Low — pull string to release | High — simple mechanics |
| **Servo latch** | Medium — programmatic trigger | High — precise timing control |
| **Rubber band breakaway** | Low — force threshold release | Medium — inconsistent threshold |
| **Pneumatic pin** | Medium — air-powered | Very high — fast and consistent |

### Rubber Band Deployment

For the Foundation Program, use rubber bands for deployment force:

1. Attach rubber bands from the carriage to the robot frame
2. When the carriage is retracted, the bands are stretched
3. When released, the bands pull the carriage forward to the deployed position
4. Use 2-4 rubber bands — test to find the right amount of force

!!! example "📷 Photo Needed"
    Rubber bands stretched from carriage to frame in stowed position

!!! warning "Rubber Band Safety"
    When testing deployment, keep your face and hands clear of the deployment path. A carriage under rubber band tension deploys fast and hard. Always deploy away from people, and never hold the carriage with your fingers when testing the release.

---

!!! example "🎬 GIF/Video Needed"
    One-time release deploying: pin pulled, carriage snaps forward

## Build Instructions

Once your coach approves your CAD model:

### Step 1: Mount the Rails
1. Attach linear slide rails to your drivetrain frame
2. Rails must be parallel — misalignment causes binding
3. Verify rails are secure and do not flex under load

### Step 2: Build the Carriage
1. Assemble the carriage plate with bearing surfaces
2. Test-fit on the rails before adding the ball rake
3. Check for binding at all positions along the travel

### Step 3: Add the Ball Rake
1. Mount the rake bar or plate to the front of the carriage
2. Verify it does not drag on the field surface
3. Check that it is wide enough to sweep game objects effectively

### Step 4: Install the Release Mechanism
1. Install the retaining pin or latch
2. Attach rubber bands from carriage to frame
3. Retract the carriage and engage the latch
4. Test deployment — it should be clean and complete

### Step 5: Test and Tune
1. Deploy the mechanism 10 times — it should work reliably every time
2. Drive the robot with the slider deployed — check for wobble or drag
3. Sweep game objects with the ball rake — verify effective contact

---

## Testing Checklist

| Test | Pass Criteria |
|------|--------------|
| **Free slide** | Carriage slides full travel under gravity on tilted rails |
| **Deployment** | Carriage deploys fully and consistently, 10/10 attempts |
| **Driving with deployment** | Robot drives normally with slider deployed, no dragging |
| **Ball sweep** | Rake contacts and moves game objects effectively |
| **Durability** | No loosening or binding after 20 deployment cycles |

---

## Key Takeaways

1. **Linear motion is different from rotational** — sliders provide consistent reach at constant height
2. **Rail alignment is critical** — parallel, straight rails prevent binding
3. **Free-slide before deployment** — if the carriage does not slide freely, rubber bands will not fix it
4. **One-time release is simple and reliable** — do not over-engineer the deployment mechanism
5. **Test deployment safety** — rubber band energy is real, keep hands and faces clear

---

## Challenges

You have completed all 3 modules in Unit 4. Time to compete:

- **[Sumo Bots](challenge-sumo-bots.md)** — push your opponent off the field
- **[Sack Attack](challenge-sack-attack.md)** — intake as many bean bags as possible
- **[Ball Sweep](challenge-ball-sweep.md)** — sweep balls to the opponent's side
