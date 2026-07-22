# Roles, Safety & Sustaining

The systems in the [master plan](index.md) only work if someone owns them, the space is safe for
minors, and the room stays organized past week one. This page covers **who does what**, the
**safety** must-haves, and the **rituals & metrics** that make it stick.

---

## 1. Roles & responsibilities (RACI)

Name owners. "Everyone keeps it clean" is how nothing stays clean. These are also genuine,
resume-worthy leadership roles for students.

| Role | Who | Owns | Notes |
|---|---|---|---|
| **Warehouse Lead / Quartermaster** | You (mentor) | The whole system; approves BOMs; holds back-room keys | The single accountable owner |
| **Student Stockroom Manager** | A senior student | Runs the issue window, kitting, cycle counts; keeps the sheet honest | Real leadership; rotate/mentor a successor |
| **Parts Captain (per team)** | One student per team | Submits the team's BOM, keeps the team bin & tools organized, returns A-items | The single point of contact per team |
| **Safety Officer** | A trained student/mentor | Charging station, PPE, battery inspection, SDS binder | Can be combined with Stockroom Manager in a small club |

**RACI for the core workflows:**

| Activity | Warehouse Lead | Stockroom Mgr | Parts Captain | Team members |
|---|---|---|---|---|
| Approve a BOM | **A/R** | C | R (submits) | I |
| Kit & issue parts | A | **R** | C | I |
| Log a check-out/return | A | **R** | R | I |
| Daily reset | A | C | **R** | **R** |
| Weekly audit & cycle count | **A** | **R** | C | I |
| Reorder low stock | **A/R** | R | I | I |

*(R = Responsible, A = Accountable, C = Consulted, I = Informed.)*

!!! tip "Turn ownership into a title"
    "Stockroom Manager" and "Parts Captain" look great on a student's résumé/college app and give
    them real responsibility. Make the roles official — a badge, a mention at meetings, a line in
    the team roster. Ownership people are *proud* of is ownership that lasts.

---

## 2. Safety

This is a space used by minors, with lithium batteries, sharp tools, and chemicals. Safety isn't
a section to skim — it's a gating requirement.

### Battery safety {#battery-safety}

VEX V5 uses **Li-ion smart batteries**; BattleBots use **LiPo** packs. Both can vent, swell, or
catch fire if damaged, overcharged, or shorted.

!!! danger "Battery rules"
    - **Store & charge in fire-safe containers** — LiPo-safe bags at minimum; a steel box or vented cabinet is better. Never charge on a wooden bench unattended.
    - **Supervised charging only**, at a single designated station with **per-bay timers**. No overnight charging without a fire-safe cabinet.
    - **Inspect on every check-in.** Swollen / puffed / hot / damaged packs are removed **immediately** and taken to proper e-waste/battery disposal — never trashed, never used "one more time."
    - **Serialize packs and log cycles/health** (A-item asset log). Retire packs on age/cycles *before* they fail in a match.
    - **Keep a fire extinguisher** rated for the space nearby (ABC; Class-D for lithium fires) and make sure students know where it is.

### General shop safety

!!! warning "Shop safety checklist"
    - **PPE station** — safety glasses required at every cut, drill, print, and solder station. Post the rule.
    - **Sharps & blades** — hobby knives, cutters, and the bar cutter are controlled; store blades safely; count them at reset.
    - **Power-tool lock-out** — band saw, bar cutter, and anything dangerous are **locked or disabled when no trained mentor is present**. This is exactly why the back room is adult-access.
    - **Chemicals** — CA glue, Loctite, solder flux, lubricants get an **SDS binder** and proper ventilation for soldering/gluing. CA glue + cotton (some gloves/clothes) can react — store and use carefully.
    - **Clear egress** — aisles and exits stay clear (that's also 5S "Shine"). No totes blocking a fire exit.
    - **First aid** — a stocked, clearly located kit; know who's first-aid trained.

!!! example "Industry example — FOD & tool accountability as safety"
    Aviation counts every tool before closing up an engine, because a loose wrench is a
    catastrophe. In your shop the stakes are lower, but the habit is the same: shadow boards +
    end-of-day counts mean a snapped-off blade or a missing hex key gets found *before* it ends up
    in a gearbox, underfoot, or in a battery bay.

---

## 3. Sustaining — keep it clean past week one

"Sustain" (the 5th S) is the one everyone skips and the reason most reorganizations quietly rot.
Build small, boring rituals and make them visible.

### Daily reset (5 minutes, every session)

End every build session with a reset — the full checklist is in the
[daily reset runbook](templates/daily-reset-weekly-audit.md):

- Every tool home; every shadow-board silhouette filled.
- Team bins closed and on their station; line-side kanban bins topped up.
- Floor and aisles clear; trash/recycling emptied.
- Any A-item borrowed today is logged/returned; anything low flagged on the Shortage Board.

### Weekly audit (10 minutes)

- Walk the **5S checklist** ([template](templates/daily-reset-weekly-audit.md)) — Sort/Set/Shine/Standardize/Sustain, scored.
- **Cycle count a slice** (see below) so the database stays true without a giant annual count.
- Post the **scoreboard** — cleanest station, best BOM accuracy, tools-returned streak.

### Cycle counting (rolling, low-effort)

Instead of one dreaded wall-to-wall count, count a rotating slice continuously:

| Tier | Count frequency |
|---|---|
| **A** (brains, batteries, radios) | Monthly (they're few and valuable) |
| **B** (motors, sensors, wheels, gears) | Quarterly |
| **C** (screws, spacers, zip ties) | By exception — only when a min/max flag trips or a bin looks off |

Each week, count whatever's due. The data stays accurate, the effort stays tiny.

!!! example "Industry example — the gemba walk"
    Lean leaders walk the floor daily and *look*, trusting visual cues to surface problems. Your
    version: stand in the doorway at end-of-day. If you can instantly see "green team left tools
    out, the zip-tie bin is empty, and a battery's still on the charger," your visual systems work.
    If you have to open drawers to find issues, tighten the labels and shadow boards until you
    don't.

---

## 4. Gamify it (so the kids *want* to)

The reliable way to sustain a student space is to make the right behavior the winning behavior.

- **5S Cup** — weekly points per team for: station passed reset, tools all returned, BOM submitted on time & accurate, no red-tag junk accumulating. Trophy/bragging rights.
- **Streaks** — "cleanest station" streak counter on the whiteboard; teams protect a streak.
- **BOM accuracy score** — did the issued kit match what they actually used? High accuracy = points (and it trains real estimation).
- **Onboarding quest** — new members earn a "warehouse license" by passing a quick quiz on the zone map, the color code, and how to submit a BOM. Ties into the [educator's guide](../educators-guide/index.md).

---

## 5. KPIs — is it actually working?

A handful of numbers tell you if the system is healthy. Track them on the weekly audit.

| Metric | Target | What a bad number means |
|---|---|---|
| **Inventory accuracy** (counted vs. system) | >95% for A/B | People pull without logging → tighten the issue window |
| **Stockouts per month** (needed a part, had none) | Trending to ~0 | Min levels too low, or reorders too slow |
| **BOM fulfillment time** (submit → kit ready) | < 1 session | Pick lists not sorted by location, or intake unclear |
| **Tools returned at daily reset** | 100% | Shadow boards missing, or no reset ritual |
| **Red-tag area cleared** | Every 30 days | Purge discipline slipping |
| **Battery packs retired on schedule** | Per health log | Safety risk building up |

!!! success "What 'done' looks like"
    A new student walks in, reads the labels, finds `BK-A-3-02`, submits a BOM, and gets their
    kit — with zero tribal knowledge. You glance from the doorway and see the room is home. The
    numbers above stay green with 15 minutes of ritual a session. That's a warehouse, not a
    workshop — and it took systems, not heroics.
