# Part Numbering & Bin-Location Scheme

Two addressing systems: one for **parts** (what a thing *is*) and one for **locations** (where it
*lives*). Keep them separate — a part has one internal number for life; it can move locations.

---

## 1. Internal part numbers (your SKU)

Format: **`CAT-SUB-####`** — a category prefix, an optional sub-type, and an identifier. Readable
at a glance, and it sorts nicely.

```
HW - SCR - 032 - 050
│    │     │     └── detail (length 0.500")
│    │     └──────── detail (thread 8-32)
│    └────────────── sub-type (SCRew)
└─────────────────── category (HardWare)
```

**Category prefixes:**

| Prefix | Category |
|---|---|
| `STR` | Structure (C-channel, angle, bar, plate, standoff, gusset) |
| `MOT` | Motion (shaft, bearing, spacer, collar, gear, sprocket, chain, pulley, belt) |
| `WHL` | Wheels & traction |
| `ELE` | Electronics (brain, motor, battery, controller, radio, sensor, cable) |
| `PNE` | Pneumatics |
| `HW` | Hardware / fasteners |
| `CON` | Consumables |
| `BB` | BattleBots-specific |
| `TOOL` | Tools |

!!! tip "Don't reinvent VEX's numbers — reference them"
    Your internal part # is the **human-readable shelf label**. The **VEX part number**
    (e.g. `276-xxxx`) goes in the *Vendor PN* column and is your source of truth for **reordering**.
    You get readability *and* copy-paste purchasing.

!!! note "Keep sub-details only where they help"
    For screws (where length/thread matter), encode them. For a V5 Brain, `ELE-BRN-001` is plenty —
    don't over-engineer codes for things you have one kind of.

---

## 2. Location addresses

Format: **`ZONE-RACK-SHELF-BIN`** — increasingly specific, left to right. Every label and every
inventory row references one of these.

```
BK - A - 3 - 02
│    │   │   └── bin/slot 02
│    │   └────── shelf 3 (counting up from the floor)
│    └────────── rack/unit A
└─────────────── zone: BacK room
```

**Zones:**

| Zone | Meaning |
|---|---|
| `BK` | **Back room** stockroom — bulk & reserve (adults only) |
| `BK-LOCK` | Locked cabinet inside the back room — A-items (brains, batteries, radios) |
| `LN` | **Line-side** point-of-use bins on the build floor (kanban consumables) |
| `T1`,`T2`,`T3`… | **Team stations** (e.g. `T3-DR1-B4` = Team 3, Drawer 1, Bin 4) |
| `TC` | Tool crib / shared tool board |
| `CH` | Charging & battery station (`CH-SAFE-1` = fire-safe storage) |
| `RT` | Red-tag holding area (temporary, during/after the blitz) |

**Conventions that prevent confusion:**

- **Shelves count up from the floor** (shelf 1 = bottom). Heaviest stock low.
- **Bins number left-to-right** as you face the rack.
- A part can list **two homes** if it's split (e.g. `LN-05 / BK-E-1-02` = working stock line-side, reserve in back).
- Print a **laminated zone map** and post it at the issue window so any new picker can navigate day one.

!!! example "Industry example — location addressing"
    Warehouses and Amazon fulfillment give every storage slot a unique address so a pick list can
    route a walker efficiently and any item is findable without tribal knowledge. Same idea here,
    just smaller: `BK-A-3-02` means one exact bin, and the pick list is sorted by address so the
    picker walks the shelves once, in order.
