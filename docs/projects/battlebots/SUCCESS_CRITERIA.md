# Success Criteria

Clear, measurable criteria for each major checkpoint in the BattleBots project. Use these checklists to verify you're ready to move forward.

---

## Checkpoint 1: Design Complete (End of Module 4)

**Timing:** Before starting CAD in Onshape

**You're ready to move forward when:**

- [ ] You can explain why you chose your robot archetype (drum, eggbeater, disc, horizontal spinner, undercutter)
- [ ] You can calculate your weapon's kinetic energy using KE = ½Iω²
- [ ] You understand what "bite" means and why it matters for your weapon design
- [ ] You've sketched your robot design on paper (top view, side view) showing weapon, drivetrain, and chassis
- [ ] You know where your N20 drive motors will be positioned
- [ ] You understand motor gear ratios and why 300 RPM motors are appropriate
- [ ] You can explain the weight budget tradeoff (weapon vs armor vs drivetrain)

### Self-Assessment Questions

**Can you answer these confidently?**

1. What kind of robot are you building? (archetype name)
2. Why did you choose that type over the others?
3. Will your weapon spin vertically or horizontally?
4. Where will your drive wheels be positioned? (rear, center, front)
5. What's the 6×6 inch rule and why does it matter?
6. What's the ~500g weight limit?

**If you can't answer all of these:** Review Modules 1-4 before starting CAD.

**Assessment method:** Explain your design concept to a mentor or teammate in 2-3 minutes. If they understand it, you're ready.

---

## Checkpoint 2: CAD Complete (End of Module 5)

**Timing:** After completing Onshape design, before exporting STLs

**You're ready to export when:**

### Design Requirements

- [ ] Robot total mass is 450-550g in Onshape mass properties
- [ ] Everything fits within 6"×6" (152×152mm) bounding box when viewed from top
- [ ] Weapon center of mass is exactly on the rotation axis (checked in mass properties)
- [ ] All parts have correct material assigned (PLA+ = 1.24 g/cm³, TPU = 1.21 g/cm³, PETG = 1.27 g/cm³)

### Mechanical Fitment

- [ ] N20 motor pockets are 12.2×10.2×25mm (motor size + 0.2mm tolerance)
- [ ] Motor shafts exit through chassis wall to wheel position
- [ ] Wheel hubs have D-shaped holes matching 3mm D-shaft
- [ ] Weapon has minimum 2mm clearance from ALL chassis parts (hand-spin check in assembly)
- [ ] Battery compartment fits your battery with 2mm clearance on all sides
- [ ] Malenki Nano mount fits the board dimensions (~30×20mm platform)

### Structural Integrity

- [ ] Chassis walls are minimum 2mm thick (3mm in impact zones)
- [ ] Weapon is minimum 6mm thick (discs/blades) or 8mm (bars)
- [ ] Motor mounts won't crush motors when assembled
- [ ] No parts have unsupported overhangs >45° (check printability)
- [ ] Internal ribs added to hollow chassis for rigidity

### Assembly Verification

- [ ] Assembly has all parts mated correctly (wheels spin, weapon spins)
- [ ] No parts interfere with each other (collision detection clean)
- [ ] All screw holes align between mating parts
- [ ] Parts can be assembled in the real world (no impossible assembly order)

**Assessment method:** Share Onshape assembly link with mentor for design review meeting (15-30 min).

### Design Review Checklist (Bring to Review Meeting)

| Item | Screenshot | Value |
|------|-----------|-------|
| Total mass | Mass properties dialog | 450-550g |
| Bounding box | Top view with 6×6 rectangle | All parts inside |
| Weapon balance | Weapon mass properties | COM on spin axis |
| Clearances | Weapon clearance check | 2mm+ gap |

**If design review fails:** Make corrections in CAD, schedule follow-up review. This is normal - most designs need iteration!

---

## Checkpoint 3: Print Files Ready (End of Module 6)

**Timing:** After understanding print orientation, before giving STLs to teacher

**You're ready to submit for printing when:**

### File Organization

- [ ] All STL files exported from Onshape (one file per part)
- [ ] Files named clearly and descriptively:
  - ✅ Good: `Chassis-Main.stl`, `Weapon-Drum.stl`, `Wheel-Left.stl`, `Armor-Front.stl`
  - ❌ Bad: `Part1.stl`, `Assembly.stl`, `untitled.stl`
- [ ] No duplicate or unnecessary files
- [ ] STL units are in millimeters (check export settings)

### Print Orientation Verification

For each part, you can explain why it should be printed in a specific orientation:

- [ ] **Chassis:** Open-side up (like a tray) - layers stack vertically for horizontal impact resistance
- [ ] **Weapon:** Flat on bed with widest face down - layers perpendicular to impact direction
- [ ] **Wheels:** Hub-side down (axle hole vertical) - rotational forces distributed across layers
- [ ] **Armor panels:** Flat on bed - impact hits face, layers are perpendicular
- [ ] **Motor mounts:** Holes running vertically through layers (strongest orientation per diagram in Module 6)

### Material Assignments Documented

- [ ] List of which parts print in which material:
  - PLA+ (structural): Chassis, weapon, wheels, motor mounts
  - TPU (flexible): Weapon hub, armor panels (optional), wheel treads
  - PETG (tough): Armor panels, front wedge

**Assessment method:** Submit folder of STL files + material notes to teacher. Teacher reviews for printability.

### What Happens Next

- Teacher adds files to print queue
- Print time: 8-16 hours total (2-5 days with queue time)
- You'll be notified when parts are ready for pickup

---

## Checkpoint 4: Mechanical Assembly Complete (End of Module 8)

**Timing:** After assembling chassis, motors, wheels, weapon - before handing to teacher

**You're ready for electronics when:**

### Drive System

- [ ] Both N20 drive motors installed securely (wiggle test - no movement)
- [ ] Motors don't rattle or spin in their pockets
- [ ] Motor shafts extend through chassis wall
- [ ] Both wheels attached to motor D-shafts (D-flats aligned)
- [ ] Wheels spin freely without wobbling
- [ ] Wheels have grip (textured surface, silicone o-ring, or rubber band)

### Weapon System (If Applicable)

- [ ] Weapon motor mounted securely (screw or clamp mount)
- [ ] TPU weapon hub installed on motor shaft
- [ ] Weapon attached to hub (screws, press-fit, or keyed connection)
- [ ] Weapon spins freely when rotated by hand
- [ ] Minimum 2mm clearance verified (hand-spin weapon, watch for contact points)
- [ ] Weapon is balanced (doesn't always rotate to same position when hung on shaft)

### Structural

- [ ] All chassis pieces assembled and screwed together
- [ ] Chassis is rigid (doesn't flex when hand pressure applied)
- [ ] No cracks, breaks, or failed prints
- [ ] Armor panels attached (if applicable)
- [ ] All screw heads flush or countersunk (nothing sticking out to catch on opponents)

### Weight & Dimensions

- [ ] Total weight on scale: 450-550g (without battery, without electronics)
- [ ] Robot fits in 6×6 inch area when measured
- [ ] Battery compartment is accessible for battery installation
- [ ] Space reserved for Malenki Nano

### Documentation

- [ ] Photos taken from multiple angles (front, back, top, sides)
- [ ] Photos of motor installation
- [ ] Photos of weapon clearance
- [ ] Notes on any modifications made during assembly

**Self-Check Procedure:**

1. **Wiggle test:** Try to move each motor with your fingers → Should not budge
2. **Spin test:** Spin each wheel → Should rotate smoothly, no wobble
3. **Flex test:** Press on chassis from sides and top → Should feel rigid
4. **Weapon clearance test:** Slowly hand-spin weapon → Watch for any contact points (should be 2mm+ gap everywhere)
5. **Shake test:** Gently shake robot → No rattling parts or loose screws

**Assessment method:** Self-check, then show to teacher. Teacher verifies before accepting for electronics installation.

### What Happens Next

- Hand completed mechanical chassis to teacher
- Teacher installs Malenki Nano, wiring, battery connector
- Electronics installation: 1-2 hours
- You'll be called back for safety testing and driver training

---

## Checkpoint 5: Electronics & Safety Verified (End of Module 9)

**Timing:** After teacher installs electronics, before competition

**You're ready to compete when:**

### Electrical Tests (Teacher-Led, Student Observes)

- [ ] **Battery test:** Voltage checked (4.2V per cell = fully charged), no puffing or damage
- [ ] **Connection test:** Malenki Nano LED lights up when battery connected
- [ ] **Transmitter binding test:** Robot LED changes when transmitter powered on (indicates connection)
- [ ] **Polarity test:** No sparks, smoke, or burning smell when battery first connected

### Drive System Tests (Student Performs with Supervision)

- [ ] **Forward test:** Push stick forward → both wheels spin forward
- [ ] **Backward test:** Push stick back → both wheels spin backward
- [ ] **Left turn test:** Push stick left → robot turns left correctly
- [ ] **Right turn test:** Push stick right → robot turns right correctly
- [ ] **Figure-8 test:** Can drive a figure-8 pattern smoothly

**If drive direction is wrong:** Teacher swaps motor wires, re-test. This is normal!

### Weapon System Tests (Teacher-Led in Sealed Arena)

- [ ] **Low-power test:** Weapon spins at 20% throttle smoothly (no vibration)
- [ ] **Full-power test:** Weapon spins at 100% throttle for 10+ seconds (sounds smooth, not rattling)
- [ ] **Vibration check:** Robot doesn't "walk" or shake excessively when weapon at full speed
- [ ] **Clearance check:** Weapon doesn't contact chassis at any point during spin

**If weapon vibrates badly:** Weapon is unbalanced. Stop, rebalance or reprint weapon. DO NOT PROCEED.

### Failsafe Test (CRITICAL - Teacher-Led)

- [ ] **Failsafe recording:** Sticks centered, failsafe button pressed (recorded on Malenki Nano)
- [ ] **Drive failsafe test:** Turn off transmitter while robot driving → motors stop immediately
- [ ] **Weapon failsafe test:** Turn off transmitter while weapon spinning → weapon stops spinning (may coast down, but actively stops)
- [ ] **Multiple test:** Failsafe tested 3 times successfully

**If failsafe doesn't work:** DO NOT USE ROBOT. Re-record failsafe, re-test. This is non-negotiable for safety.

### Safety Equipment & Procedures

- [ ] Weapon lock mechanism installed and functional (prevents weapon from spinning)
- [ ] Student can demonstrate correct power-on sequence:
  1. Transmitter ON
  2. Place robot in arena
  3. Robot ON (battery connected)
  4. Remove weapon lock
  5. Close arena
- [ ] Student can demonstrate correct power-off sequence:
  1. Stop weapon (0% throttle)
  2. Wait for weapon to stop spinning
  3. Open arena
  4. Install weapon lock
  5. Robot OFF (disconnect battery)
  6. Transmitter OFF
- [ ] Student knows which control is weapon, which is drive
- [ ] Student knows what to do if robot becomes uncontrollable (turn off transmitter)

### Pre-Fight Operational Checklist

- [ ] Battery fully charged (measured with multimeter: 4.2V per cell)
- [ ] Transmitter batteries fresh/charged
- [ ] All screws checked and tightened
- [ ] Robot weight verified (on competition scale if required)
- [ ] Weapon lock present and accessible
- [ ] Driver knows which direction is "forward" (weapon-first)

**Assessment method:** Teacher observes all tests, signs off on safety checklist. Student must demonstrate understanding of power-on procedure and safety rules.

**If any test fails:** Fix issue and re-test ALL tests (don't skip ones that passed before - verify again).

---

## Competition Day Final Check

**30 minutes before your first match:**

### Physical

- [ ] Battery charged to 4.2V per cell
- [ ] All screws tight (check every one)
- [ ] Weapon spins freely (hand-spin test)
- [ ] Wheels spin freely
- [ ] No cracks or damage from transport
- [ ] Weapon lock ready to use

### Electrical

- [ ] Transmitter batteries installed and fresh
- [ ] Failsafe tested THIS SESSION (turn off transmitter → robot stops)
- [ ] Drive controls tested (forward, back, left, right)
- [ ] Weapon control tested (spins up and down smoothly)

### Mental

- [ ] You know your controls (which stick is drive, which is weapon)
- [ ] You know your strategy (attack weapon-first, control positioning)
- [ ] You're excited and ready!

---

## Post-Fight Assessment

**After each fight:**

### Damage Check

- [ ] Chassis intact or cracked?
- [ ] Weapon intact or broken?
- [ ] Wheels intact or damaged?
- [ ] Motors still working?
- [ ] Wires still connected?
- [ ] Battery undamaged (no puffing, dents, punctures)?

### Repair Needs

| Damage Type | Fix Required | Time |
|-------------|-------------|------|
| Cracked chassis | CA glue OR print replacement | 5 min / 2-4 hours |
| Broken weapon | Print replacement + install | 1-3 hours print + 10 min install |
| Wheel damaged | Print replacement + install | 30 min print + 5 min install |
| Loose wire | Resolder connection | 5 min |
| Dead motor | Replace motor | 10 min |
| Damaged battery | Replace battery (teacher provides) | 2 min |

### Performance Review

**What worked:**
- What hits were most effective?
- What design features helped you win exchanges?

**What didn't work:**
- What broke first?
- What would you change for the next fight?

**Lessons learned:**
- Driving technique improvements
- Design improvements for Version 2

---

## Iteration Success Criteria (Version 2)

**After your first competition, you're ready to build Version 2 when:**

- [ ] You've identified what broke or failed on Version 1
- [ ] You've sketched improvements (more armor here, stronger weapon there, etc.)
- [ ] You understand WHY those parts failed (wrong material? too thin? bad orientation?)
- [ ] You have a plan for making Version 2 better
- [ ] You're excited to fight again!

**Common V2 improvements:**
- Reinforce areas that cracked
- Add armor where you took damage
- Increase weapon mass for harder hits
- Lower front wedge angle for better ground game
- Upgrade to metal weapon teeth
- Add wheel guards
- Improve weight distribution

---

## Summary: Checkpoint Progression

| Checkpoint | Module End | Pass Criteria | Result |
|-----------|-----------|---------------|--------|
| **1. Design Complete** | Module 4 | Can explain design choices, understand physics | → Proceed to CAD |
| **2. CAD Complete** | Module 5 | 450-550g, fits in 6×6, balanced weapon | → Export STLs |
| **3. Print Files Ready** | Module 6 | STLs organized, orientation understood | → Teacher prints |
| **4. Mechanical Complete** | Module 8 | Motors secure, weapon clears, weight good | → Teacher adds electronics |
| **5. Safety Verified** | Module 9 | Drive works, weapon works, failsafe works | → Ready to compete |

**Total checkpoints:** 5
**Total timeline:** 5 weeks from start to competition-ready

---

**Success Criteria Guide Complete:** March 13, 2026

**Remember:** Passing these checkpoints means you're building correctly. Failing a checkpoint means you're learning what to fix. Both are success!
