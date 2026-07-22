# Color-Coding Key

Color is a visual shortcut — but two overlapping color systems create chaos. The rule: **one
color axis for team ownership, a *different* attribute for category.** Post this key at the issue
window and each station.

---

## 1. Team colors = ownership & access

Assign each team a distinct color. It goes on the team's **bin, tools, and station label**. If a
🟥 red-team hex key is on the 🟦 blue table, everyone knows where it belongs.

| Team | Color | Applied to |
|---|---|---|
| Team 1 | 🟥 Red | Bin lid + tape band on tools + station sign |
| Team 2 | 🟦 Blue | Bin lid + tape band on tools + station sign |
| Team 3 | 🟩 Green | Bin lid + tape band on tools + station sign |
| Team 4 | 🟨 Yellow | Bin lid + tape band on tools + station sign |
| Team 5 | 🟧 Orange | … |
| Team 6 | 🟪 Purple | … |

*(Extend as needed. Pick colors that are obvious under shop lighting and distinct to
color-blind viewers — red/blue/green/yellow are safest; avoid red-vs-green as the only
distinction.)*

**How to apply team color cheaply:**

- Colored **electrical/gaffer tape** band around each tool handle.
- Colored **bin lids** or a colored dot sticker on each tote.
- **3D-print** team tools' holders / bins in the team color (you have printers).
- A colored **station sign** above each team table.

---

## 2. Category stripe = type (stockroom labels only)

Use color a *second* way only where it can't collide with team color: a **stripe on the
stockroom bin label**. This is for the back room, which has no team owner.

| Category | Stripe |
|---|---|
| `STR` Structure | Silver / grey |
| `MOT` Motion | Black |
| `WHL` Wheels | Brown |
| `ELE` Electronics | Blue stripe |
| `PNE` Pneumatics | White |
| `HW` Hardware | Red stripe |
| `CON` Consumables | Green stripe |
| `BB` BattleBots | Orange stripe |

!!! warning "Don't double-encode"
    Tools are colored by **team**. Stockroom labels are striped by **category**. Never color a
    tool by category *and* by team — you'll create a puzzle nobody can read. One object, one color
    meaning.

---

## 3. Kanban cards {#kanban-cards}

For line-side consumables (`LN-` zone), run a **two-bin kanban**. A simple card (or just the
empty bin itself) is the reorder signal.

**Card contents (laminate one per consumable, tape to the bin):**

```
┌──────────────────────────────────────────┐
│  KANBAN — 8-32 x 1/2" Screw               │
│  Part#: HW-SCR-032-050                     │
│  Home:  LN-05   Reserve: BK-E-1-02         │
│  Min: 200   Max: 1000                      │
│  WHEN THIS BIN IS EMPTY:                    │
│   1) Put empty bin on the REFILL SHELF      │
│   2) Slide the reserve bin forward          │
│   3) Stockroom Mgr refills from BK & logs   │
└──────────────────────────────────────────┘
```

!!! example "Industry example — the empty bin is the order"
    In Toyota's two-bin system there's no form and no counting: workers draw from bin 1; when it's
    empty, the empty bin *is* the signal to refill, and they switch to bin 2 meanwhile. Your empty
    line-side bin on the refill shelf is a reorder request nobody had to write down.

---

## 4. Status tags (optional andon)

A quick red/yellow/green flag makes bin and asset status visible across the room:

| Tag | Meaning |
|---|---|
| 🟢 Green | Stocked / tool present / battery healthy |
| 🟡 Yellow | Low — at/near min, reorder soon |
| 🔴 Red | Out / broken / battery retired-pending / do-not-use |

Clip these to bins, the shadow board, or the charging bays. At a glance from the doorway, red =
"go fix this now."
