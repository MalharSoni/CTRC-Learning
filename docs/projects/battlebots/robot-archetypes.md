# Robot Archetypes

Before you start designing, you need to decide **what kind of robot you're building**. In this competition, every robot must have a spinning weapon — but there are very different ways to spin things at your opponents.

This page covers the two main categories allowed: **vertical spinners** and **horizontal spinners**, along with their subtypes, strengths, weaknesses, and design considerations.

---

## Vertical Spinners

A vertical spinner has a weapon that rotates in the **vertical plane** — think of a circular saw or a front-loading washing machine. The weapon spins perpendicular to the ground and hits opponents with an upward (or downward) strike.

Vertical spinners are the most popular archetype in combat robotics at every weight class because they combine devastating hits with the ability to brace against the floor.

### Drum Spinners

A **drum spinner** is a wide, low-diameter cylinder that covers the front of the robot. The entire drum is the weapon — teeth or impactors are mounted around its circumference.

**How it works:** The drum spins at high RPM. When an opponent drives into it (or you drive into them), the teeth catch and fling them upward.

**Advantages:**

- Wide attack area — hard for opponents to avoid
- The drum itself acts as frontal armor
- Low center of gravity when weapon is at the front
- Generous "bite" (the depth each tooth cuts per rotation)

**Disadvantages:**

- Lower reach compared to a large disc
- Requires precise bearing mounts to spin smoothly
- Heavy for its energy storage compared to other designs

!!! example "📷 Photo Needed"
    Real drum spinner combat robot (beetle/antweight) showing drum weapon

### Eggbeater / Beater Bar

An **eggbeater** (also called a beater bar) uses a rectangular or cross-shaped bar mounted on a horizontal axle. It spins vertically like a kitchen mixer attachment.

**How it works:** The bar spins and the tips strike opponents. The asymmetric shape gives each hit strong "bite" — the distance the weapon tip travels between impacts.

**Advantages:**

- Excellent bite — each hit digs in deep
- Good balance of weight and energy storage
- Simpler to manufacture than a drum (often a single bar)
- Easy to balance

**Disadvantages:**

- Narrower attack area than a drum
- Less frontal protection
- Bar can bend on hard impacts

!!! example "📷 Photo Needed"
    Real eggbeater combat robot showing bar weapon

### Large-Diameter Vertical Disc

A **large vert** uses a big disc or blade spinning vertically. Think of a circular saw blade scaled up. The disc is usually mounted at the front of the robot.

**How it works:** The large diameter means the edge of the disc is moving very fast, even at moderate RPM. Bigger radius = more tip speed = harder hits.

**Advantages:**

- Extreme reach — can hit opponents before they hit you
- Massive kinetic energy from the large radius
- Spectacular hits that send opponents flying

**Disadvantages:**

- Heavy — a large disc eats into your weight budget
- Gyroscopic effects make the robot harder to steer
- More complex weapon mounting
- Exposed disc can be damaged from the side

!!! example "📷 Photo Needed"
    Vertical disc spinner showing large disc weapon

---

## Horizontal Spinners

A horizontal spinner has a weapon that rotates in the **horizontal plane** — parallel to the ground. Think of a helicopter blade or a spinning bar at waist height. These robots hit with sweeping lateral strikes.

Horizontal spinners are feared for their massive area of attack and devastating energy, but they come with a significant drawback: **recoil**.

### Midcutters

A **midcutter** has the spinning blade mounted **between** the top and bottom of the chassis. The blade sits at mid-height, typically on a central shaft.

**How it works:** The bar or disc spins horizontally. When it contacts an opponent, it delivers a side-sweeping hit at the opponent's midsection.

**Advantages:**

- Maximum reach — the blade extends beyond the chassis on all sides
- Hits at mid-height where armor is often weakest
- Large area of attack (360 degrees if bar extends both ways)

**Disadvantages:**

- Recoil — every hit sends YOU flying too (Newton's third law)
- The blade is exposed and can be damaged
- Hard to control after a big hit (you spin away from the impact)
- Gyroscopic effects resist turning

!!! example "📷 Photo Needed"
    Horizontal midcutter showing exposed horizontal blade

### Undercutters

An **undercutter** has the spinning blade mounted **below** the chassis. The blade sits just above the ground, spinning underneath the robot's body.

**How it works:** The low-mounted blade pokes under opponents and hits them from below, getting under their armor and attacking wheels, electronics, and structural members.

**Advantages:**

- Gets under opponents — attacks where they're least protected
- Hard for opponents to get under YOU (your weapon is in the way)
- The chassis sits on top, protecting electronics
- Very effective against wedge-fronted opponents

**Disadvantages:**

- Ground clearance is critical — too high and you miss, too low and you scrape
- Same recoil problems as all horizontal spinners
- Blade can catch on arena floor imperfections
- Complex mounting (weapon must be below the chassis)

!!! example "📷 Photo Needed"
    Undercutter combat robot showing low-mounted horizontal blade

---

## The Ground Game

Even in a spinners-only competition, **getting under your opponent matters**. A lot.

### Why Ground Game Wins Fights

When two spinners collide head-on, the robot that's **lower** usually wins the exchange. Here's why:

1. **Deflection angle**: If your front wedge gets under their weapon, their hits glance upward instead of biting into your chassis
2. **Weapon engagement**: If you're under them, YOUR weapon hits their underside — which is usually unarmored
3. **Control**: The lower robot can push and steer the higher robot, dictating the fight

### Simple Wedge Front

You don't need a fancy lifter mechanism. A simple **angled front surface** — a wedge — is enough to deflect hits and get under opponents.

Design tips for your wedge:

- **Angle**: 15-30 degrees from horizontal works well
- **Material**: Hardened PLA+ or a TPU skirt that absorbs hits
- **Ground clearance**: As close to zero as possible without scraping
- **Width**: Cover the full front of your robot

!!! tip "The Formula for Victory"
    The best combat robots at every weight class combine a devastating spinner with an effective ground game. Don't just focus on making your weapon hit hard — focus on making sure YOUR weapon hits them before THEIR weapon hits you. That means getting under them.

---

## Choosing Your Archetype

Consider these factors when choosing:

| Factor | Vertical Spinners | Horizontal Spinners |
|--------|-------------------|---------------------|
| **Ease of build** | Moderate | Moderate-Hard |
| **Hit power** | High | Very High |
| **Control after hits** | Good (brace against floor) | Poor (recoil) |
| **Ground game** | Easy to add a wedge | Harder (weapon is in the way) |
| **Durability** | Weapon can act as armor | Weapon is exposed |
| **Wow factor** | Opponents go flying upward | Huge horizontal impacts |

!!! info "First-Time Builder Recommendation"
    If this is your first combat robot, consider a **drum spinner** or **eggbeater**. They're the most forgiving designs — the weapon doubles as frontal armor, they have good ground game potential, and they're less affected by recoil than horizontal spinners.

---

## Next Step

Now that you know what kind of robot you want to build, dive into **[Weapon Design](weapon-design.md)** to learn the physics and engineering behind effective spinners.
