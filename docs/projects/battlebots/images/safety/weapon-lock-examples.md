# Weapon Lock Examples

## Pin-Style Weapon Lock (Recommended)

```
TOP VIEW OF WEAPON:

     Weapon Pulley/Disc
          ___
         /   \
        |  O  |  ← Hole drilled through weapon
        |  |  |  ← Pin inserted (prevents rotation)
         \___/
           |
      Motor Shaft


SIDE VIEW WITH PIN INSTALLED:

     ┌─────────┐
     │ Weapon  │
     │    ●────┼─── Pin (3mm drill rod, painted bright orange)
     │ Pulley  │     Passes completely through weapon body
     └────┬────┘
          │
       Motor


ISOMETRIC VIEW:

         Orange Pin →  ━━━━━━━
                      ╱      ╱
         ┌───────────●───────┐
         │                   │
         │   Weapon Body     │
         │      ╱──╲         │
         └─────╱────╲────────┘
              ╱      ╲
             │  Motor │
             │  Shaft │
              ╲      ╱
               ╲────╱
```

**Materials:**
- 3mm drill rod or steel dowel pin
- Bright orange spray paint (high visibility)
- Optional: Lanyard attached to robot chassis

**How It Works:**
1. Drill a hole completely through the weapon pulley/disc (perpendicular to shaft)
2. When weapon needs to be locked, insert pin through hole
3. Pin prevents pulley from rotating around motor shaft
4. Remove pin before match (store in pocket or attach with lanyard)

**Advantages:**
- Simple to fabricate (one drilled hole)
- Extremely reliable
- Easy to insert/remove with one hand
- Meets competition safety requirements
- Cannot fall out accidentally

---

## Vice-Grip Method (Quick But Not Ideal)

```
            Mini vice-grip clamps
            onto weapon blade edge
                  ↓
     ┌───────────────────────┐
     │    ╔═══════╗         │
     │────╣ GRIP  ╠─────────│ ← Weapon Blade/Disc
     │    ╚═══════╝         │
     └───────────────────────┘

     SIDE VIEW:
                ┌─┐
                │ │ ← Vice-grip handle
                └─┘
             ╔═══════╗
     ────────╣ Jaws  ╠─────── ← Clamps onto edge
             ╚═══════╝
```

**Pros:**
- No modification to robot required
- Quick to apply

**Cons:**
- Competition officials may not accept (prefers dedicated devices)
- Can damage weapon edge if over-tightened
- Easy to forget or lose the vice-grip
- Takes two hands to install/remove

**Note:** This method is mentioned in builder guides but is discouraged at formal competitions. Use pin-style locks instead.

---

## Bracket-Style Lock (Advanced)

```
SIDE VIEW:

    Safety Bracket (bolts to chassis)
           ↓
         ┌───┐
         │   │
         │   ├────● ← Pin through bracket and weapon
         │   │    ↓
    ─────┴───┴────────────
    │                    │ ← Weapon Disc
    │         ●          │ ← Motor shaft (center)
    │                    │
    ──────────────────────

    Chassis Floor ────────────────
```

**Features:**
- Permanent bracket mounted to chassis
- Pin passes through both bracket and weapon
- Most secure option
- Common on larger weight classes

**Trade-offs:**
- Requires more CAD planning
- Adds slight weight (~5-10g)
- Best for robots with easily accessible weapon area

---

## Design Checklist

✅ **Safety Lock Must:**
- Physically prevent weapon rotation (not just electrical disable)
- Be clearly visible (bright orange, yellow, or red)
- Be easy to insert/remove with one hand
- Cannot fall out during robot transport
- Be present whenever robot is outside the arena
- Be removed before entering the arena

✅ **Recommended Pin Specifications:**
- Diameter: 3mm (1/8") minimum
- Material: Steel drill rod or hardened dowel pin
- Length: Weapon thickness + 20mm (extends past both sides)
- Color: Neon orange spray paint or heat-shrink tubing

---

**Source:** Based on NHRL (National Havoc Robot League) safety requirements and common builder practices documented in combat robotics community resources.

**License:** Educational use - diagrams created specifically for CTRC Learning curriculum.
