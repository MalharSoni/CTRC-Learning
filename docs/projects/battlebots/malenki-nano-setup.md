# Malenki Nano Setup & Wiring

The **Malenki Nano** is the brain of your combat robot. It's an all-in-one control board that combines a radio receiver, two brushed motor ESCs (for driving), and one brushless ESC (for your weapon) on a single tiny PCB. One board does everything — no separate receiver, no separate ESCs, no extra wiring.

This guide covers what the Malenki Nano does, how to wire it, how to bind it to your transmitter, and — critically — how to set up failsafe so your weapon doesn't become a runaway hazard.

---

## What Is the Malenki Nano?

The Malenki Nano is designed specifically for small combat robots. Here's what's packed onto this tiny board:

| Feature | Specification |
|---------|--------------|
| **Radio receiver** | Built-in, compatible with common transmitter protocols |
| **Brushed ESC x2** | For two drive motors (N20s) — forward, reverse, and speed control |
| **Brushless ESC x1** | For one weapon motor — speed control for your spinner |
| **Input voltage** | 1S-2S LiPo (3.7V-8.4V) |
| **Size** | Approximately 30mm x 20mm |
| **Weight** | ~5g |

### Why It's Perfect for This Project

In larger combat robots, you'd need separate components: a receiver, two ESCs for drive, one ESC for the weapon, and all the wiring between them. The Malenki Nano eliminates all that complexity:

- **Fewer parts** = less weight
- **Less wiring** = fewer failure points
- **Smaller footprint** = easier to fit in a 500g robot
- **Designed for combat** = handles vibration and impacts

!!! example "📷 Photo Needed"
    Malenki Nano top-down with labeled pins: Power In, Motor A, Motor B, Brushless Out, Bind

---

## Reference Video

For a video walkthrough of the Malenki Nano setup process, watch the **MakerMuse BattleBot tutorial** on YouTube. It covers the full wiring and binding process visually, which is extremely helpful if this is your first time working with RC electronics.

---

## Wiring Diagram

Here's how everything connects to the Malenki Nano:

```
                    ┌─────────────────────┐
                    │    MALENKI NANO      │
                    │                      │
 LiPo Battery ────►│ PWR IN    MOTOR A ──►│────► N20 Motor (Left)
                    │                      │
                    │           MOTOR B ──►│────► N20 Motor (Right)
                    │                      │
                    │        BRUSHLESS ──► │────► Weapon Motor
                    │                      │
                    └─────────────────────┘
```

### Connection Details

| Nano Port | Connects To | Wire Type | Notes |
|-----------|------------|-----------|-------|
| **Power Input (+/-)** | LiPo battery | Battery lead / JST connector | Observe polarity! Red = +, Black = - |
| **Motor A (+/-)** | Left N20 drive motor | 28-30 AWG wire | If motor spins wrong way, swap the two wires |
| **Motor B (+/-)** | Right N20 drive motor | 28-30 AWG wire | Same as Motor A |
| **Brushless Output** | Weapon brushless motor | 3-phase wires | Three wires — order determines spin direction |

### Power Wiring

1. Determine your LiPo battery connector type (JST, XT30, bare leads)
2. Connect the **positive (+)** battery wire to the Nano power input **positive**
3. Connect the **negative (-)** battery wire to the Nano power input **negative**
4. Double-check polarity before plugging in — **reverse polarity will destroy the board**

!!! example "📐 Diagram Needed"
    Correct polarity (red to +, black to -) vs reversed (X mark) — NEVER reverse

!!! danger "Check Polarity Twice"
    Reversing the battery polarity (connecting + to - and - to +) will permanently destroy the Malenki Nano. There is no protection circuit. Check your wiring TWICE before connecting the battery for the first time.

### Drive Motor Wiring

1. Solder two wires (28-30 AWG) to each N20 motor's terminals
2. Connect the left motor's wires to **Motor A** output on the Nano
3. Connect the right motor's wires to **Motor B** output on the Nano
4. Don't worry about polarity yet — if a motor spins the wrong direction, just swap its two wires

### Weapon Motor Wiring

1. The brushless weapon motor has **three phase wires** (usually labeled A, B, C)
2. Connect these three wires to the Nano's **brushless output** (three pads/pins)
3. The order of the three wires determines spin direction — if the weapon spins the wrong way, swap any two of the three wires

!!! example "📐 Diagram Needed"
    Wiring diagram: LiPo→Nano, Motor A→left N20, Motor B→right N20, Brushless→weapon, wire colors marked

---

## Channel Mapping

The Malenki Nano maps radio channels to motor outputs:

| Radio Channel | Function | Control |
|--------------|----------|---------|
| **CH1** | Drive — left/right mixing | Right stick horizontal (typically) |
| **CH2** | Drive — forward/back mixing | Right stick vertical (typically) |
| **CH3** | Weapon speed | Left stick vertical or a switch/dial |

The Nano handles **mixing internally** — it takes the CH1 (steering) and CH2 (throttle) inputs and automatically calculates the correct speed for the left and right motors. You don't need to configure mixing on your transmitter.

---

## Binding to Your Transmitter

Binding is the process of pairing your specific transmitter with the Malenki Nano's built-in receiver so they communicate on the same frequency.

### General Binding Procedure

1. **Turn off your transmitter** and the robot
2. Put the Malenki Nano into **bind mode** (method varies — check documentation for your specific Nano version: usually holding a button while powering on, or bridging a bind pad)
3. The Nano's LED will blink rapidly indicating it's in bind mode
4. Put your **transmitter into bind mode** (check your transmitter's manual — usually found in the settings menu)
5. Wait for the Nano's LED to change to a solid light — this indicates successful binding
6. Power cycle both the transmitter and the robot
7. Test: moving the sticks on the transmitter should now control the motors

!!! info "Binding Is One-Time"
    You only need to bind once. After binding, the Nano remembers your transmitter. It will automatically connect every time both are powered on.

---

## Failsafe Setup

Failsafe is the most critical safety setting on your robot. **If radio signal is lost, the failsafe determines what happens.** Without proper failsafe, a loss of signal could leave your weapon spinning at full speed with no way to stop it.

### What Failsafe Must Do

| Output | Failsafe State | Why |
|--------|----------------|-----|
| **Drive motors** | Stop (0% throttle) | Robot must not drive uncontrolled |
| **Weapon motor** | Stop (0% throttle) | **A runaway spinner is extremely dangerous** |

### How to Set Failsafe

The exact procedure depends on your Malenki Nano version and transmitter. The general process:

1. **Power on the transmitter**
2. **Power on the robot** (Nano connected to battery)
3. Confirm the Nano is connected (solid LED, motors respond to sticks)
4. **Set all sticks to neutral/zero position** (drive sticks centered, weapon control at zero)
5. **Activate failsafe recording** on the Nano (usually a button press or pad bridge — check your Nano's documentation)
6. The Nano records the current stick positions as the failsafe state
7. **Test failsafe**: turn off the transmitter while the robot is on. ALL motors should stop immediately.

!!! example "📐 Diagram Needed"
    Failsafe procedure: sticks centered → activate failsafe → verify (step by step)

!!! danger "Always Set Failsafe BEFORE Testing the Weapon"
    A runaway spinning weapon is extremely dangerous. Before you EVER power on the weapon motor, verify that failsafe is working. Turn off the transmitter and confirm the weapon stops. Do this every single time you make changes to the radio setup.

### Testing Failsafe

After setting failsafe, test it thoroughly:

1. Power on transmitter, then robot
2. Spin up the weapon to low speed inside the arena or test box
3. **Turn off the transmitter**
4. The weapon should spin down and stop
5. Drive motors should not move
6. If ANYTHING keeps running when the transmitter is off, **DO NOT USE THE ROBOT** until failsafe is fixed

!!! example "📷 Photo Needed"
    Failsafe test: weapon spinning → transmitter off → weapon stops

---

## Troubleshooting

| Problem | Likely Cause | Fix |
|---------|-------------|-----|
| Motors don't respond | Not bound | Re-bind transmitter to Nano |
| One motor spins wrong way | Wires swapped | Swap the two wires for that motor |
| Weapon spins wrong way | Phase wire order | Swap any two of the three brushless wires |
| No power at all | Dead battery or reversed polarity | Check battery voltage, check wiring |
| Intermittent connection | Loose solder joint | Re-solder all connections |
| Robot drives but weapon doesn't | CH3 not mapped or ESC not armed | Check channel mapping, check arming procedure |
| Failsafe doesn't work | Not recorded properly | Re-do the failsafe recording procedure |

---

## Wiring Best Practices

- **Keep wires short** — excess wire adds weight and can snag on moving parts
- **Route wires away from the weapon** — a loose wire near a spinning weapon will get shredded
- **Secure wires with tape or zip ties** — wires that flop around will come loose during fights
- **Solder, don't twist** — twisted wire connections will fail under vibration. Solder and heat-shrink every joint.
- **Use strain relief** — where wires connect to the Nano, leave a small loop of slack so a tug on the wire doesn't rip the solder pad off the board

!!! tip "Take Photos of Your Wiring"
    Before you close up the chassis, photograph your wiring from multiple angles. When something breaks in the arena and you need to re-wire quickly, these photos are invaluable.

---

## Next Step

Your electronics are set up and tested. Time to put it all together — head to **[Assembly & Wiring](assembly-and-wiring.md)** for the full build process.
