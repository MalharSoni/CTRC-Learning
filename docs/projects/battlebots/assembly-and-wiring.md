# Assembly & Wiring

You have your printed parts, your motors, your Malenki Nano, your battery, and your weapon. Now it's time to put it all together. This guide walks you through the full assembly process step by step.

Take your time. A robot assembled carefully fights better than one thrown together in a rush.

---

## Before You Start

Gather everything on a clean, well-lit workspace:

### Parts Checklist

| Component | Quantity | Status |
|-----------|----------|--------|
| 3D printed chassis | 1 | Cleaned, supports removed |
| 3D printed weapon (blade/drum) | 1 | Balanced, verified |
| 3D printed wheels | 2 | Hub fits motor shaft |
| 3D printed weapon hub (TPU) | 1 | Fits weapon motor shaft |
| 3D printed armor panels (if applicable) | As designed | |
| N20 3V 300RPM motors | 2 | Tested, working |
| Brushless weapon motor | 1 | Tested, working |
| Malenki Nano | 1 | Bound to transmitter, failsafe set |
| LiPo battery | 1 | Fully charged |
| Weapon lock mechanism | 1 | Pin, clip, or bracket |
| Wires (28-30 AWG) | Assorted | Pre-cut to length |
| Velcro strips | As needed | For Nano and battery |
| Screws / fasteners | As designed | |
| Zip ties | Several | For wire management |
| Heat shrink tubing | Assorted sizes | For solder joints |

### Tools Needed

- Soldering iron + solder
- Wire strippers
- Flush cutters / side cutters
- Small Phillips and hex screwdrivers
- CA glue (super glue)
- Tweezers
- Multimeter (for checking connections)
- Scale (for final weight check)

---

## Step 1: Install N20 Drive Motors

1. Take your chassis and identify the left and right motor pockets
2. Orient each N20 motor so the shaft exits through the chassis wall toward the wheel position
3. **Press-fit** the motor into the pocket — it should be snug but not forced
4. If the fit is too loose, add a thin wrap of tape around the motor body or a drop of CA glue
5. If the fit is too tight, lightly sand the pocket with fine sandpaper
6. Verify: the motor shaft spins freely and extends past the chassis wall

!!! example "📷 Photo Needed"
    N20 motor press-fit into 3D printed chassis motor pocket

!!! warning "Don't Force It"
    If the motor won't go in, do NOT hammer it or use pliers. You'll damage the internal gears. Sand the pocket wider or reprint with 0.1mm more tolerance.

---

## Step 2: Attach Wheels

1. Slide each wheel onto the N20 motor D-shaft
2. The D-flat on the shaft should align with the D-flat in the wheel hub
3. Push the wheel on until it's seated against the chassis wall (leave ~0.5mm gap to avoid rubbing)
4. If using a set screw, tighten it gently against the flat of the D-shaft
5. Test: spin each wheel by hand — it should spin freely without wobbling

!!! example "📷 Photo Needed"
    Wheel on N20 D-shaft showing D-flat alignment

### If the Wheel Slips on the Shaft

- Add a drop of CA glue between the shaft and hub (let it set fully before testing)
- Or wrap a small piece of tape around the shaft before pressing the wheel on
- Or re-print the wheel with a tighter hub hole (reduce by 0.1mm)

---

## Step 3: Mount the Malenki Nano

1. Position the Malenki Nano in its designated mounting area inside the chassis
2. **Velcro method** (recommended): Stick a small piece of adhesive velcro on the Nano's bottom and a matching piece on the chassis platform. Press together firmly.
3. **Printed mount method**: If you designed clip-in tabs or screw posts, secure the Nano using those features
4. Ensure the Nano is:
    - Away from the weapon motor (to avoid interference)
    - Accessible for future debugging (you may need to re-solder or re-bind)
    - Oriented so wire routing is clean

---

## Step 4: Mount the Brushless Weapon Motor

1. Position the weapon motor in its mount at the front of the chassis
2. Secure using screws through the motor's mounting holes into the chassis (or printed clamp)
3. Verify the motor shaft is accessible and clear of obstructions
4. The motor should be firmly mounted — it will experience significant forces during weapon impacts

!!! tip "Thread-Locking"
    Weapon motor mounting screws can vibrate loose during fights. If you have thread-locking compound (blue Loctite), use a small amount on the screws. Alternatively, add a drop of CA glue to each screw head after tightening.

---

## Step 5: Attach the Weapon

1. Slide the **TPU weapon hub** onto the weapon motor shaft
2. Secure the hub to the shaft (set screw, press fit, or D-shaft engagement)
3. Attach the **weapon** (blade/drum/bar) to the hub
4. The weapon should be secured to the hub via screws, press fit, or keyed interface
5. Spin the weapon by hand — it should spin smoothly without wobbling or rubbing on anything

!!! example "📷 Photo Needed"
    TPU weapon hub on motor shaft with weapon attached

### Checking Weapon Clearance

- Spin the weapon a full 360 degrees by hand
- Watch for contact with the chassis, wires, or any other component
- There should be at least **2mm clearance** between the weapon and everything else
- If the weapon rubs, adjust the mounting or modify the chassis

!!! example "📷 Photo Needed"
    2mm+ clearance between spinning weapon and chassis

---

## Step 6: Wire Everything

Follow the wiring diagram from the [Malenki Nano Setup](malenki-nano-setup.md) module.

### Wiring Order

Wire in this specific order to keep things organized:

1. **Drive motors first**: Solder wires from each N20 motor to the Nano's Motor A and Motor B outputs
2. **Weapon motor second**: Connect the three brushless phase wires from the weapon motor to the Nano's brushless output
3. **Battery last**: Prepare the battery connection but **do NOT plug it in yet**

### Wire Routing

- Route wires **along the chassis walls**, not across open space
- Keep wires **away from the weapon's path of rotation**
- Use **zip ties** every 20-30mm to secure wires to the chassis
- Leave a **service loop** (small slack) at each connection point for strain relief
- Cross-check: with the weapon spinning, would any wire get caught? If yes, re-route it.

!!! example "📷 Photo Needed"
    Wiring routed along chassis walls, zip-tied, away from weapon path

### Soldering Tips

- **Tin both surfaces** before joining (add solder to the wire and the pad separately, then join)
- Use **heat shrink tubing** on every solder joint — bare joints short-circuit
- Keep solder joints **small and clean** — big blobs add weight and can break loose
- Pull-test every joint after soldering — a gentle tug should not break it

---

## Step 7: Install the Battery

1. Place the LiPo battery into its compartment in the chassis
2. Secure with a **velcro strap** over the top, or a printed retaining clip
3. The battery must be held firmly — it should NOT move or rattle during driving
4. Connect the battery lead to the Nano's power input (**do NOT plug in yet** — save this for testing)
5. Ensure the battery connector is accessible for easy removal (you'll need to unplug for charging)

---

## Step 8: Install the Weapon Lock

Every robot must have a **physical weapon lock** — a mechanism that prevents the weapon from spinning when outside the arena.

### Common Weapon Lock Designs

- **Pin lock**: A pin or bolt that slides through the chassis and weapon, physically preventing rotation
- **Zip-tie lock**: A zip tie looped through the weapon and chassis (simple but effective)
- **Printed bracket**: A removable bracket that blocks weapon rotation

!!! example "📐 Diagram Needed"
    Three weapon lock designs: pin lock, zip-tie lock, printed bracket — cross-sections

### Weapon Lock Requirements

- Must be **easy to insert** from outside the robot (you add it before removing the robot from the arena)
- Must be **easy to remove** (you remove it after placing the robot in the arena, before the fight starts)
- Must **reliably prevent weapon rotation** — test it by trying to spin the weapon with the lock in place
- Should be **visible** — paint it bright red or orange so referees can confirm it's installed

---

## Step 9: Close Up and Add Armor

1. If your design has a top plate or lid, attach it now
2. Install any armor panels (TPU or PETG) on exposed sides
3. Secure armor with screws, clips, or press-fit tabs
4. Ensure all panels are firmly attached — loose armor becomes projectiles in the arena

!!! example "📷 Photo Needed"
    Fully assembled robot, top plate removed, all internal wiring visible

!!! example "📷 Photo Needed"
    Fully assembled robot with armor on, ready to fight

---

## Step 10: Final Weight Check

**Put your completed robot on a scale.**

| Result | Action |
|--------|--------|
| Under 450g | Consider adding armor or increasing weapon mass |
| 450-520g | You're in the sweet spot |
| 520-550g | Acceptable for in-house, but look for easy weight savings |
| Over 550g | You need to remove material — thinner walls, less infill on reprinted parts, or remove non-essential features |

---

## Assembly Tips

!!! tip "Take Photos at Each Step"
    Photograph your robot at every stage of assembly — motors installed, wiring completed, weapon mounted, closed up. When something breaks in the arena (and it will), these photos are your assembly manual for rapid repair.

!!! tip "Label Everything"
    Mark "L" and "R" on your motors, wheels, and wire pairs. Write "TOP" on your chassis. Label the battery positive wire. When you're frantically repairing between matches, labels save minutes.

!!! tip "Build a Repair Kit"
    For competition day, pack: spare N20 motors, spare weapon, spare wheels, CA glue, zip ties, electrical tape, soldering iron, solder, wire, screwdrivers, and your assembly photos. You will need at least some of these.

---

## Assembly Checklist

- [ ] N20 drive motors installed (left and right)
- [ ] Wheels attached and spinning freely
- [ ] Malenki Nano mounted securely
- [ ] Weapon motor mounted securely
- [ ] Weapon attached to motor via hub, spinning freely with 2mm+ clearance
- [ ] All wiring soldered, heat-shrunk, and zip-tied
- [ ] Wires routed away from weapon path
- [ ] Battery installed and secured
- [ ] Battery connector accessible for removal
- [ ] Weapon lock installed and functional
- [ ] Armor panels attached
- [ ] Total weight checked (~500g target)
- [ ] Photos taken of completed assembly

---

## Next Step

Your robot is built — but you're not done yet. Before you fight, you must test everything safely. Head to **[Testing & Safety](testing-and-safety.md)** for the testing protocol and safety procedures.
