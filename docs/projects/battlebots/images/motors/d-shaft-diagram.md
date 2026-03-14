# N20 Motor D-Shaft Interface Diagram

```
FRONT VIEW (looking at shaft end):

     Standard Round Shaft        D-Shaft (N20 Motor)
     ┌──────────────┐           ┌──────────────┐
     │              │           │              │
     │      ○○      │           │    ○○        │
     │              │           │   ╱  ╲       │
     │              │           │  │    │      │
     └──────────────┘           └──│────│──────┘
                                   Flat
     Spins freely in hole       edge


SIDE VIEW (shaft profile):

Round Shaft:
    ═══════════════════
    (No flat - just circular)

D-Shaft:
    ═══════════════════
           ▬▬▬▬▬▬
    (Flat machined on one side)


WHY D-SHAFT?

Without flat (round):         With flat (D-shaft):
┌────────┐                   ┌────────┐
│  Wheel │ spins on          │  Wheel │ locks to
│   ○○   │ shaft             │   ○╱   │ shaft
└────────┘                   └────────┘
  Slips!                       Grips!


3D PRINTED WHEEL SOCKET:

Top View:                    Cross-Section:
┌────────────┐              ┌────────────┐
│     ○╱     │              │    ╱╲      │
│    /  \    │              │   /  \     │
│   |    |   │              │  |    |    │
│    \  /    │              │   \  /     │
│     ○╱     │              │    ╲/      │
└────────────┘              └────────────┘
  D-shaped                   Flat edge matches
  pocket                     motor shaft flat


N20 MOTOR SHAFT SPECIFICATIONS:
┌─────────────────────────────────────┐
│  Diameter:     3.0mm                │
│  Flat width:   2.5mm (D-cut depth)  │
│  Shaft length: 9mm                  │
│  Material:     Steel                │
└─────────────────────────────────────┘


CAD DESIGN TIP:

When modeling wheel socket in Onshape:
1. Sketch circle: 3.0mm diameter
2. Sketch rectangle across circle:
   - Width: 3.0mm
   - Height: 0.5mm (cut depth)
3. Extrude pocket: 4mm deep
4. Add 0.1mm clearance for easy fit

Result: Wheel locks onto shaft, no slipping!
```

**Common 3D Printing Issue:**
If D-pocket prints too tight, use 3.1mm diameter instead of 3.0mm for easier assembly.
