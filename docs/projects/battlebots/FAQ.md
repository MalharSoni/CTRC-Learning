# Frequently Asked Questions (FAQ)

Common questions from students building their first BattleBot, organized by topic.

---

## General Questions

### How long does this project take?

**Total timeline:** 5 weeks from start to competition
**Your active work:** 13-24 hours spread across those weeks
**Breakdown:**
- Week 1: Design and planning (3-4 hours)
- Week 2: CAD in Onshape (4-8 hours)
- Week 3: Waiting for prints (you're free this week!)
- Week 4: Mechanical assembly (2-3 hours)
- Week 5: Electronics, testing, competition (3-4 hours)

The biggest variable is CAD time - if you're comfortable with Onshape, it goes fast. If it's your first complex CAD project, budget extra time.

### Can I work with a partner?

Check with your teacher. Some classes allow teams of 2 students per robot (one does CAD, one does assembly, both do design together). Other classes require individual work.

If you're working solo, you can still get help from mentors and classmates during design reviews!

### What if I don't know how to use Onshape?

You need basic Onshape skills before starting Module 5 (CAD Your Bot). Required skills:
- Creating sketches with constraints
- Extruding sketches into 3D parts
- Creating assemblies and adding mates
- Using the mass properties tool

If you haven't done these before, complete Foundation Unit 3 (Onshape CAD) first, or work through Onshape's built-in tutorials (1-2 hours).

---

## Design Questions

### Which robot type should I choose?

**For your first BattleBot, we recommend a drum spinner.** Here's why:

| Robot Type | Difficulty | Why Choose? |
|-----------|-----------|-------------|
| **Drum Spinner** ⭐ | Easiest | Weapon doubles as armor, wide attack area, forgiving design |
| **Eggbeater** ⭐ | Easy | Good bite, simple to balance, effective hits |
| **Vertical Disc** ⭐⭐ | Medium | Spectacular hits but gyroscopic effects make driving harder |
| **Horizontal Spinner** ⭐⭐⭐ | Hard | Recoil problems, exposed weapon, hard to control |
| **Undercutter** ⭐⭐⭐ | Hard | Ground clearance critical, complex mounting |

Still not sure? Ask yourself:
- Do you want reliability or maximum carnage? → Reliability = Drum, Carnage = Horizontal spinner
- Is this your first combat robot ever? → Start with Drum or Eggbeater
- Do you want to learn gyroscopic effects? → Try a large vertical disc

### How do I know if my weapon will be effective?

Three key factors make a weapon effective:

1. **Kinetic energy:** Higher RPM = more energy (energy scales with RPM squared!)
2. **Bite:** Not too shallow (grinds), not too deep (stalls). Aim for 2-4 teeth/impactors.
3. **Balance:** Perfectly balanced = no vibration = weapon survives longer

Use Module 3 (Weapon Design) to calculate your weapon's energy and bite. If you're storing 5+ joules at full speed, you're in good shape for 500g class.

### My robot is over 500g in Onshape, what should I remove?

**Weight reduction checklist:**

1. **Thin the walls** (CAD → edit chassis → reduce wall thickness from 3mm to 2.5mm)
2. **Hollow out thick sections** (weapon, armor - remove internal material, keep outer shell)
3. **Reduce infill** (print at 40% instead of 60% - lighter but same outer shell)
4. **Shrink the weapon** (reduce diameter, thickness, or mass)
5. **Remove unnecessary features** (do you really need that decorative part?)
6. **Use lighter materials** (print some parts in TPU instead of PLA+)

**What NOT to remove:**
- Structural chassis walls (robot will break)
- Motor mounts (motors will fall out)
- Weapon hub (will fail catastrophically)

Aim for 480-500g in CAD. This leaves 20g for wires, screws, and glue.

### How do I check if everything fits in the 6×6 box?

In Onshape Assembly:

1. Switch to **Top view** (shortcut: click the top face of the view cube)
2. Your bounding box sketch should still be visible (6" × 6" rectangle)
3. Verify every part of your robot is inside the rectangle
4. Pay special attention to:
   - Wheels (often stick out past chassis)
   - Weapon (when at widest rotation)
   - Armor panels (can extend beyond main chassis)

If something sticks out, you have two options:
- Shrink that part (make wheels smaller, weapon narrower)
- Move it inward (relocate motors further from edge)

---

## CAD Questions

### What's the difference between a Part Studio and an Assembly?

**Part Studio:**
Where you design individual parts (chassis, weapon, wheels). Think of it like a workshop where you make pieces.

**Assembly:**
Where you put all the parts together to see the complete robot. Think of it like the final build.

**Typical workflow:**
Part Studio → design all parts → Assembly → put them together → check if they fit → back to Part Studio to fix issues

### How do I add material properties in Onshape?

1. In your Assembly, right-click on a part
2. Select **Assign material**
3. Choose a material from the library OR create custom material:
   - **PLA+:** Density = 1.24 g/cm³
   - **TPU:** Density = 1.21 g/cm³
   - **PETG:** Density = 1.27 g/cm³
4. Repeat for every part
5. Now click **Mass properties** (right-click on assembly) to see total weight

If you skip this, Onshape uses default material and your weight will be wrong!

### My sketch won't extrude / mate won't work / Onshape is broken!

**Common CAD troubleshooting:**

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Sketch won't extrude | Sketch isn't fully constrained or has gaps | Add dimensions and constraints until sketch is black (not blue) |
| Mate fails | Parts are too far apart or wrong mate type | Move parts closer, use Slider mate instead of Revolute for testing |
| Part disappears | Hidden or suppressed | Click the eye icon in feature tree to show |
| Can't find a part | In wrong Part Studio | Check tabs at bottom of screen |
| Everything is slow | Model too complex | Simplify geometry, reduce part count |

Still stuck? Take a screenshot and ask a mentor - CAD problems are easier to fix when someone can see your screen.

### Can I use a different CAD program?

Onshape is the standard for CTRC because it's free, cloud-based (works on any computer), and collaborative (mentors can see your design remotely).

If you're already proficient in Fusion 360, SolidWorks, or Inventor, check with your teacher. You'll still need to export STL files the same way.

### What if I need to change my design after it's approved?

Tell your teacher BEFORE you export new STLs. Small changes (thinner walls, different infill) are usually fine. Major changes (different weapon type, bigger chassis) need another design review.

---

## 3D Printing Questions

### What if my printed part breaks during assembly?

**This is normal!** 3D printed parts can be fragile, especially thin walls. Solutions:

1. **Print a replacement:** Give the STL to your teacher again (30 min - 2 hours print time)
2. **Glue it:** CA glue (super glue) can fix cracks if the part isn't load-bearing
3. **Redesign stronger:** Thicken walls, add ribs, change orientation, print at higher infill

Always print one spare of critical parts (weapon, wheels) before competition day.

### Can I print in different colors?

Yes! Color doesn't affect strength. Coordinate with your teacher on available filament colors.

**Pro tip:** Print armor in a bright color so it's easy to find pieces after they fly off in the arena.

### How long does printing take?

**Rough estimates:**

| Part | Size | Print Time |
|------|------|-----------|
| Chassis (unibody) | Large, hollow | 3-6 hours |
| Weapon (solid) | Medium, dense | 1-3 hours |
| Wheels (×2) | Small | 30-60 min each |
| Armor panels | Thin, flat | 1-2 hours |
| Weapon hub (TPU) | Small | 30-60 min |

**Total for full robot:** 8-16 hours print time

Your teacher may have multiple students printing, so add queue time (1-3 days typical).

### What if a part doesn't fit after printing?

**Common fit issues:**

| Problem | Cause | Fix |
|---------|-------|-----|
| Motor pocket too tight | Printed slightly oversized | Sand it wider with fine sandpaper OR reprint with 0.2mm larger pocket |
| Wheel hub too loose on shaft | Printed slightly undersized | Wrap shaft with tape OR add drop of CA glue OR reprint with 0.1mm smaller hole |
| Screws don't fit | Wrong screw size in CAD | Drill holes slightly larger OR reprint with correct screw size |
| Parts don't mate together | Dimensions off or warped print | Check CAD dimensions, check for warping, reprint if needed |

**Prevention:** Add 0.1-0.2mm tolerance to all friction-fit holes in CAD (motor pockets, shaft holes).

---

## Electronics Questions

### I don't understand electronics - can I still do this project?

**Yes!** Your teacher handles all electronics and wiring (Module 7: Malenki Nano Setup). You focus on mechanical design and assembly.

You DO need to understand:
- How to turn the robot on/off safely (transmitter first, then robot)
- What the weapon lock is and why it's mandatory
- What failsafe does (stops robot if signal lost)

That's it. Your teacher will show you everything else when they wire your robot.

### What's a failsafe and why does it matter?

**Simple explanation:** Failsafe is like an emergency brake for your robot.

**What it does:** If your radio transmitter loses signal (dead batteries, interference, turned off), the failsafe makes your robot STOP immediately - weapon stops spinning, wheels stop moving.

**Why it matters:** Without failsafe, a robot with lost signal could keep spinning its weapon at full speed with no way to stop it. This is extremely dangerous.

**What you need to know:** Your teacher will set up failsafe and test it. Before every competition, they'll test it again (turn off transmitter → robot stops). You'll see this happen and understand why it's critical.

### The weapon spins the wrong direction - is that bad?

Depends on your design:
- **Vertical spinner:** Direction doesn't matter much (hits are the same)
- **Horizontal spinner:** Direction matters a lot (midcutters usually spin so opponents are thrown sideways, not into you)

Your teacher can swap two of the three brushless motor wires to reverse direction. Easy fix.

---

## Assembly Questions

### The motor won't fit in the pocket, what do I do?

**Don't force it!** N20 motors have fragile internal gears. Forcing it will strip the gears.

**Fix:**
1. Check orientation - is the shaft pointing the right direction?
2. Test fit without force - does it slide in most of the way?
3. If too tight, gently sand the pocket wider with fine sandpaper (remove 0.1mm at a time)
4. If way too small, you may need to reprint with larger pocket dimensions

### My wheels are slipping on the motor shaft

The wheel hub has a D-shaped hole that should match the D-flat on the motor shaft.

**Fixes (in order of preference):**

1. **Check alignment:** Rotate the wheel on the shaft until D-flat aligns with D-flat
2. **Tighten set screw:** If your design has a set screw, tighten it against the flat of the shaft
3. **Add friction:** Wrap a small piece of tape around shaft before pressing wheel on
4. **Glue it:** Drop of CA glue between shaft and hub (permanent - makes future repairs harder)
5. **Reprint:** Reduce wheel hub hole size by 0.1mm in CAD and reprint

### How tight should I tighten screws?

**Rule:** Snug, not crushed.

- **PLA+ screws into PLA+:** Tighten until snug, then 1/4 turn more. Don't strip the threads.
- **Motor mount screws:** Just tight enough motor doesn't wiggle. **Don't crush the motor body!**
- **Weapon screws:** Snug + tiny drop of thread-locker or CA glue on screw head
- **Armor panel screws:** Just tight enough panel doesn't rattle

**If you strip a thread:** Stop immediately. Drill out the hole and use a larger screw, or add a nut on the back side.

---

## Competition Questions

### What happens if my robot gets damaged in a fight?

**Expected!** Combat robots take damage. That's the point.

**Typical damage:**
- Cracked chassis → repair with CA glue or print replacement
- Broken weapon → print spare, swap in 30 min
- Wheel knocked off → reattach or print new wheel
- Loose wire → resolder
- Battery damaged → replace (teacher provides)

**Repair time between matches:** Usually 10-30 minutes depending on damage. Bring spare parts!

### What should I bring to competition day?

**Repair Kit Checklist:**

| Item | Why |
|------|-----|
| Spare weapon | Weapons break - guaranteed |
| Spare wheels | Wheels get chewed up |
| CA glue (super glue) | Quick repairs |
| Small screwdrivers | Tighten everything between fights |
| Electrical tape | Secure loose wires |
| Zip ties | Temporary fixes |
| Charged spare battery | If your battery gets damaged |
| Assembly photos on phone | Reference for reassembly |
| Transmitter with fresh batteries | Don't run out of power! |

### How do I win?

**Judges score three criteria:**

1. **Damage (5 points):** Did you break their robot? Dents, cracks, parts flying off
2. **Aggression (3 points):** Did you attack consistently? Drive weapon-first, chase them down
3. **Control (3 points):** Did you control the fight? Push them around, corner them

**Winning strategy:**
Attack weapon-first, hit hard and often, control positioning. The robot that deals the most damage usually wins.

**But also:** A robot that survives is better than a robot that breaks itself. Balance aggression with durability.

### What if I lose all my fights?

**You still learned more than most people will in a year.**

Every fight teaches you:
- What breaks (fix it in v2)
- What works (do more of it)
- How to drive better
- How your opponents think

**The best combat robotics builders lose fights all the time.** They just keep iterating, improving, and fighting again.

Build Version 2. Make it better. Fight again.

---

## Safety Questions

### How dangerous is this really?

**With proper safety procedures: Very safe.**
**Without proper safety procedures: Very dangerous.**

The safety rules (weapon lock, failsafe, sealed arena, power-on procedure) exist because they work. Follow them exactly, every time.

**Injuries in combat robotics happen when:**
- Someone skips the weapon lock
- Someone tests a weapon outside the arena
- Someone reaches into the arena while a weapon is spinning
- Failsafe wasn't tested

**We've eliminated these risks by:**
- Mandatory weapon lock (physical pin prevents spinning)
- Mandatory failsafe testing (robot stops if signal lost)
- Sealed arena (debris can't escape)
- Strict power-on/off procedure (no one forgets a step)

Follow the rules → no injuries. Skip the rules → potential for serious harm. It's that simple.

### What if I'm scared of my own robot?

**Totally normal.** Spinning weapons ARE scary - that's why we respect them.

**How to build confidence:**
1. Start with low-power tests (20% weapon speed in sealed arena)
2. Watch your teacher handle your robot safely - see that the procedures work
3. Practice the power-on procedure until it's muscle memory
4. Trust the weapon lock - it physically cannot spin with the lock installed
5. Remember: you control when it turns on and off

You'll go from "this is terrifying" to "this is awesome" after your first successful test.

---

## Troubleshooting

### My robot is too heavy

See "My robot is over 500g in Onshape" above (weight reduction checklist).

### My robot won't drive straight

**Causes:**
- Motors running at different speeds (one motor weaker)
- Wheels different sizes or worn unevenly
- Weight not balanced left-right

**Fixes:**
- Use transmitter trim to compensate
- Replace weaker motor
- Check wheel diameters are identical
- Reposition battery to center weight

### My weapon hits the chassis when spinning

**Not enough clearance!** Weapon needs 2mm+ gap from ALL chassis parts.

**Fixes:**
1. Loosen weapon motor mount, adjust position, retighten
2. If weapon is warped or off-center, reprint it
3. If chassis walls are too close, trim with knife or file OR reprint chassis with larger weapon cutout

**Test:** Hand-spin weapon slowly, watch for contact points, fix those spots.

### My battery dies really fast

**Normal:** A 500g combat robot with spinner weapon drains batteries quickly (2-5 minutes of drive + weapon time)

**Not normal:** Battery dies in under 1 minute

**Check:**
- Is battery fully charged? (4.2V per cell)
- Is battery old/damaged? (replace if puffy or weak)
- Is weapon motor stalling? (friction, bad bearing - draws huge current)
- Are drive motors stalling? (wheels rubbing, gear stripped)

---

## Still Have Questions?

**Ask your teacher, mentor, or a classmate who's been through this before.**

Combat robotics has a steep learning curve, but everyone started where you are. Questions are how you learn.

**Good luck - build something terrifying!**
