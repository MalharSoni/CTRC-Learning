# Glossary

Definitions of technical terms used in the BattleBots curriculum, organized by category.

---

## Robot Weight Classes

**Beetleweight**
A 1lb (500g) weight class combat robot. The weight class covered in this curriculum. Also called "beetle" or "1lb class."

**Antweight**
A smaller 1oz (28g) weight class, also called "ant" class. Extremely tiny robots.

**Heavyweight**
The largest weight class seen on TV (BattleBots show) - 250 lbs (113 kg). These are the massive robots you see destroying each other on television.

---

## Robot Types & Archetypes

**Spinner**
Any robot with a weapon that rotates at high speed to deliver kinetic energy impacts. Includes vertical spinners and horizontal spinners.

**Vertical Spinner**
A robot with a weapon that rotates in the vertical plane (perpendicular to the ground). Examples: drums, eggbeaters, large vertical discs. The weapon spins like a circular saw.

**Horizontal Spinner**
A robot with a weapon that rotates in the horizontal plane (parallel to the ground). Examples: midcutters, undercutters. The weapon spins like a helicopter blade.

**Drum Spinner**
A vertical spinner with a wide, low-diameter cylindrical weapon covering the front. The entire drum is the weapon, with teeth or impactors around its circumference.

**Eggbeater / Beater Bar**
A vertical spinner using a rectangular or cross-shaped bar mounted on a horizontal axle. Spins vertically like a kitchen mixer attachment.

**Disc Spinner / Large Vert**
A vertical spinner with a large-diameter disc or blade weapon. Like a circular saw scaled up.

**Midcutter**
A horizontal spinner with the blade mounted between the top and bottom of the chassis at mid-height.

**Undercutter**
A horizontal spinner with the blade mounted below the chassis, just above the ground. Attacks opponents from underneath.

**Wedge**
A robot with an angled front surface designed to get under opponents. Can be passive (no active weapon) or combined with a spinner.

**Lifter**
A robot with an arm or scoop that lifts opponents. Not allowed in this competition (spinners only).

**Flipper**
A robot with a pneumatic or spring-loaded arm that flips opponents. Not allowed in this competition.

**Hammer / Axe**
A robot with a swinging weapon that pounds down on opponents. Not allowed in this competition.

---

## Weapon Physics & Design

**Kinetic Energy (KE)**
The energy stored in a moving or spinning object. For spinners, calculated as KE = ½Iω². Measured in Joules. Higher KE = harder hits.

**Moment of Inertia (I)**
A measure of how mass is distributed in a spinning object. Mass farther from the spin axis = higher moment of inertia = more energy storage. Measured in kg·m².

**Angular Velocity (ω)**
How fast something spins. Measured in radians per second. Related to RPM (rotations per minute): ω = RPM × (2π/60).

**RPM (Rotations Per Minute)**
How many complete spins per minute. Brushless weapon motors spin at 5,000-20,000 RPM typically.

**Bite**
The distance a weapon tooth travels forward into the opponent between successive hits. Affected by closing speed, weapon RPM, and number of teeth. Measured in millimeters.
- Too little bite = skimming/grinding
- Too much bite = digging in too deep, potential stall
- Good bite = cutting in effectively

**Tip Speed**
The linear speed of the weapon's edge. Calculated as: tip speed = RPM × circumference. Faster tip speed = harder hits.

**Center of Mass (COM)**
The point where all of an object's mass is balanced. For weapons, the COM must be exactly on the spin axis to prevent vibration.

**Gyroscopic Effect**
The tendency of a spinning object to resist changes in orientation. Large, fast-spinning weapons create strong gyroscopic effects that make robots harder to steer.

**Recoil**
When a spinner hits an opponent, Newton's third law means the spinner robot also experiences a force pushing it backward or sideways. Horizontal spinners suffer more recoil than vertical spinners.

**Spin-Up Time**
How long it takes a weapon to reach full speed from a standstill. Heavy weapons = longer spin-up time.

---

## Mechanical Terms

**D-Shaft**
A cylindrical shaft with one flat side (D-shaped cross-section). The N20 motors have 3mm D-shafts. The flat prevents wheels from spinning freely on the shaft.

**Set Screw**
A small screw that goes through a wheel hub or coupling to clamp onto a shaft. Usually tightened against the flat of a D-shaft.

**Press-Fit**
A tight friction fit between two parts where one part is pressed into the other without screws or glue. The motor-to-pocket fit is typically press-fit.

**Clearance**
The minimum gap between two parts to prevent them from touching. Weapon clearance = minimum gap between spinning weapon and chassis (should be 2mm+).

**Bearing**
A mechanical component that allows smooth rotation. Weapons spin on bearings. Better bearings = smoother spin, less friction.

**Shaft Collar**
A ring that clamps onto a shaft to prevent lateral movement. Used to keep weapons positioned correctly on their axles.

**Friction Fit**
Similar to press-fit - parts held together by friction rather than mechanical fasteners.

**Ground Clearance**
The distance from the bottom of the robot to the ground. Lower ground clearance = better ground game (easier to get under opponents).

**Wheelbase**
The distance between the left and right drive wheels. Wider wheelbase = more stable turning.

---

## Materials & 3D Printing

**PLA+ (Polylactic Acid Plus)**
An improved version of standard PLA 3D printing filament. Rigid, easy to print, but brittle on hard impacts. Good for structural parts. Density: ~1.24 g/cm³.

**TPU (Thermoplastic Polyurethane)**
A flexible 3D printing filament. Absorbs impacts instead of cracking. Good for armor, weapon hubs, bumpers. Harder to print than PLA+. Density: ~1.21 g/cm³.

**PETG (Polyethylene Terephthalate Glycol)**
A 3D printing filament that's tougher than PLA+ but stiffer than TPU. Bends before breaking. Good for parts needing balance of strength and flexibility. Density: ~1.27 g/cm³.

**Layer Lines**
The visible lines between each printed layer in 3D printing. Layer adhesion (between layers) is the weakest point in printed parts.

**Infill**
The internal structure of a 3D printed part. Expressed as a percentage (0% = hollow, 100% = solid). Higher infill = stronger and heavier. Typical: 40-60% for structure, 80-100% for weapons.

**Perimeter / Wall**
The outer shell of a 3D printed part. More perimeters = stronger part. Typical: 4-5 perimeters for combat robot parts.

**Orientation**
How a part is positioned on the print bed. Critical for strength - layers should be perpendicular to impact forces, not parallel.

**Support Material**
Temporary printed structure used to hold up overhanging features. Removed after printing. Parts designed to minimize supports print faster and stronger.

**Warping**
When a printed part curls or lifts off the build plate during printing, usually due to uneven cooling. Fixed with heated bed, adhesion aids, or print adjustments.

---

## CAD (Computer-Aided Design)

**CAD**
Computer-Aided Design - using software (like Onshape) to design parts in 3D before building them physically.

**Onshape**
The cloud-based CAD software used in this curriculum. Free for students and works in a web browser.

**Part Studio**
The workspace in Onshape where you design individual parts. Think of it as a workshop where you make pieces.

**Assembly**
The workspace in Onshape where you put multiple parts together to see how they fit. Like assembling the final robot.

**Sketch**
A 2D drawing on a plane that defines the shape you want to create. Sketches are extruded or revolved to create 3D parts.

**Extrude**
Taking a 2D sketch and pulling it out to create a 3D shape. Most common CAD operation.

**Revolve**
Taking a 2D sketch and spinning it around an axis to create a cylindrical or circular 3D shape. Used for wheels, drums, discs.

**Mate / Constraint**
A relationship between parts in an assembly that positions them correctly (e.g., "wheel rotates on motor shaft").

**Mass Properties**
A CAD tool that calculates the weight, center of mass, and moment of inertia of a part or assembly. Essential for checking robot weight and weapon balance.

**STL (STereoLithography)**
A 3D file format used for 3D printing. Converts your CAD model into a format the printer can understand (triangular mesh).

**Bounding Box**
A rectangular boundary that defines the maximum allowed size. For this project: 6" × 6" footprint.

**Tolerance**
Extra space added to holes or pockets to ensure parts fit together. Example: motor pocket should be 0.2mm larger than motor body for press-fit.

---

## Electronics

**ESC (Electronic Speed Controller)**
A device that controls how fast a motor spins based on signals from the radio receiver. The Malenki Nano has two brushed ESCs (for drive) and one brushless ESC (for weapon).

**Brushed Motor**
A type of DC motor with internal brushes that transfer current to the rotating armature. The N20 drive motors are brushed. Simpler and cheaper than brushless, but less efficient.

**Brushless Motor**
A type of DC motor without brushes, using electronic commutation. More efficient and spins faster than brushed motors. Used for weapon motors. Requires a brushless ESC.

**LiPo (Lithium Polymer) Battery**
A type of rechargeable battery with high energy density. Used in RC vehicles and combat robots. Can be dangerous if damaged, overcharged, or punctured.

**Cell**
A single unit in a battery. LiPo cells have nominal voltage of 3.7V (fully charged: 4.2V). A "1S" battery has 1 cell (3.7V), a "2S" battery has 2 cells in series (7.4V).

**Balance Charger**
A specialized charger for LiPo batteries that charges each cell individually to the correct voltage. Required for safe LiPo charging.

**Storage Voltage**
The safe long-term storage voltage for LiPo batteries: 3.8V per cell. Batteries left fully charged or fully discharged degrade faster.

**Polarity**
The positive (+) and negative (-) orientation of electrical connections. Reversing polarity can destroy electronics. Red = positive, Black = negative.

**Malenki Nano**
An all-in-one control board for small combat robots, combining receiver + 2x brushed ESCs + 1x brushless ESC on a single PCB.

---

## Radio Control

**Transmitter**
The handheld controller the driver uses to control the robot. Has sticks, switches, and dials that send radio signals to the receiver.

**Receiver**
The component on the robot that receives radio signals from the transmitter and converts them to motor commands. Built into the Malenki Nano.

**Channel**
A separate control signal from transmitter to receiver. Typical setup: CH1 = steering, CH2 = throttle, CH3 = weapon.

**Binding**
The process of pairing a specific transmitter with a specific receiver so they communicate securely. Done once per robot.

**Failsafe**
A safety feature where the receiver sends a specific command (usually "stop all motors") if radio signal is lost. CRITICAL for weapon safety.

**Mixing**
Combining two control inputs (throttle and steering) to control two motors independently. The Malenki Nano does mixing internally for tank-style steering.

**Trim**
A small adjustment on the transmitter to correct for motors running at slightly different speeds. Helps robot drive straighter.

---

## Safety

**Weapon Lock**
A physical pin, clip, or bracket that prevents the weapon from spinning when outside the arena. MUST be installed whenever handling the robot outside the fighting enclosure.

**Failsafe**
(See Radio Control section) The safety system that stops all motors if signal is lost. Must be tested before every event.

**LiPo Bag / Fireproof Bag**
A flame-resistant bag used for charging and storing LiPo batteries. Contains battery fires and prevents spread.

**Puffy Battery**
A swollen/expanded LiPo battery, indicating internal damage. STOP using immediately - puffy batteries can catch fire.

**Power-On Procedure**
The specific sequence for safely starting a robot:
1. Transmitter ON
2. Robot positioned in arena
3. Robot ON
4. Weapon lock removed
5. Arena sealed

**Power-Off Procedure**
The specific sequence for safely stopping a robot (reverse of power-on):
1. Weapon stopped
2. Wait for spindown
3. Arena opened
4. Weapon lock installed
5. Robot OFF
6. Transmitter OFF

**KO (Knockout)**
When a robot can no longer show controlled translational movement (driving) for 10 seconds. Results in a loss.

**Controlled Translational Movement**
The ability to drive in a specific direction. Spinning in place doesn't count - robot must be able to move across the arena.

---

## Competition Terms

**Match**
A single fight between two robots. Lasts 2 minutes or until KO.

**Arena**
The enclosed fighting space with walls to contain debris and impacts.

**Judge's Decision**
If both robots survive the full 2 minutes, judges score based on Damage (5 pts), Aggression (3 pts), and Control (3 pts).

**Damage**
Visible harm inflicted on opponent: dents, cracks, removed parts, disabled systems. Highest-weighted scoring criterion (5 points).

**Aggression**
Actively attacking the opponent, initiating contact, weapon-first driving. Weighted at 3 points.

**Control**
Dictating the fight through positioning, pushing, cornering, and strategic driving. Weighted at 3 points.

**Pit Area**
The workspace where teams prepare robots between fights. Where repairs, battery changes, and adjustments happen.

**Repair Time**
Time allocated between matches to fix damage (typically 10-30 minutes depending on tournament format).

---

## Drivetrain

**N20 Motor**
A small brushed DC motor with integrated metal gearbox, sized 12×10×25mm. Used for drive motors in small combat robots. "N20" refers to the motor body size.

**Gear Ratio**
The relationship between motor shaft speed and output shaft speed. The N20 "300 RPM" motors have an internal gear ratio that outputs 300 RPM at 3V.

**Skid Steering / Tank Steering**
A drive system where left and right wheels are controlled independently. Turn by running one side faster/slower than the other, or in opposite directions.

**2WD (Two-Wheel Drive)**
A drive layout with one motor per side (two total), each controlling one wheel. Standard for beetleweight combat robots.

**Wheelbase**
(See Mechanical Terms)

**Traction**
The grip between wheels and the arena floor. Better traction = better pushing power and control. Improved with rubber/silicone treads.

---

## Manufacturing & Tools

**CA Glue (Cyanoacrylate / Super Glue)**
A fast-setting adhesive used for bonding parts, securing motors, and quick repairs. Bonds PLA+ very well.

**Thread Locker**
A liquid applied to screw threads that hardens to prevent screws from vibrating loose. Blue Loctite is removable, red is permanent.

**Solder / Soldering**
Joining electrical wires or components using melted metal (solder). Creates permanent, conductive electrical connections.

**Heat Shrink Tubing**
Plastic tubing that shrinks when heated, used to insulate soldered wire connections.

---

## Common Abbreviations

- **CAD:** Computer-Aided Design
- **STL:** STereoLithography (3D print file format)
- **PLA:** Polylactic Acid (3D print material)
- **TPU:** Thermoplastic Polyurethane (flexible 3D print material)
- **PETG:** Polyethylene Terephthalate Glycol (3D print material)
- **ESC:** Electronic Speed Controller
- **LiPo:** Lithium Polymer (battery type)
- **KE:** Kinetic Energy
- **RPM:** Rotations Per Minute
- **COM:** Center of Mass
- **KO:** Knockout
- **2WD:** Two-Wheel Drive

---

**Glossary Complete:** March 13, 2026

**How to Use This Glossary:**
When you encounter an unfamiliar term in the curriculum, use your browser's Find function (Ctrl+F or Cmd+F) to search this page. Terms are organized by category for easy reference.
