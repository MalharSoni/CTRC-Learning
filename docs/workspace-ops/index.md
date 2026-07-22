# V5 Workspace Reset — Clean-Up, Inventory & Team Parts Management

**A start-to-finish operating plan for the CTRC build space.**

This playbook turns a cluttered shared workshop into a run-like-a-warehouse operation:
a **secured back-room stockroom** that no student can free-pool from, **per-team stations**
with color-coded tools, and a **BOM → issue → kit → team-bin** workflow so every part is
tracked from the shelf to the robot.

It borrows directly from how real warehouses, factory tool cribs, and pit crews run — **5S**,
**ABC counting**, **kanban replenishment**, **kitting**, **shadow boards**, and **tool-crib
issuing** — and maps each one to VEX V5 and BattleBots parts.

!!! abstract "How this playbook is organized"
    - **This page** — the vision, the framework, and the full phased roadmap (start → finish).
    - **[Digital Systems](digital-systems.md)** — software decision matrix, the inventory data model, QR/barcode workflow, and the Onshape-BOM tie-in.
    - **[Budget & Shopping List](budget-and-shopping-list.md)** — three cost tiers with real products, suppliers, and DIY (3D-printed) options.
    - **[Roles, Safety & Sustaining](roles-safety-sustain.md)** — who owns what (RACI), LiPo/PPE/lock safety, cycle counting, KPIs, and how to keep it clean.
    - **[Templates](templates/index.md)** — ready-to-use inventory sheet, BOM request, pick list, check-out log, part-numbering & location scheme, color key, and runbooks.

---

## 1. The vision in one picture

You described three things: **(a)** everything inventoried, **(b)** parts locked in a back
room students can't freely raid, and **(c)** each team gets exactly the parts on their BOM,
in their own bin, with their own color-coded tools. That's a **two-zone stockroom model** with
a **controlled issue window** in between — the same shape as a factory tool crib.

```
        FRONT — BUILD FLOOR (students work here)                 BACK — STOCKROOM (adults only)
 ┌───────────────────────────────────────────────┐        ┌──────────────────────────────────┐
 │  TEAM 1        TEAM 2        TEAM 3   ...       │        │  Bulk reserve stock on shelves   │
 │ ┌───────┐    ┌───────┐    ┌───────┐            │        │  organized by category + address │
 │ │ table │    │ table │    │ table │            │        │  STR · MOT · WHL · ELE · PNE ·   │
 │ │ +bin  │    │ +bin  │    │ +bin  │            │        │  HW · CON · BB                   │
 │ └───────┘    └───────┘    └───────┘            │        │                                  │
 │  🟥 tools    🟦 tools    🟩 tools   (per-team   │        │  A-items locked/serialized       │
 │             color-coded             color)     │        │  (V5 brains, batteries, radios)  │
 │                                                │        │                                  │
 │  Line-side kanban bins (screws, zip ties,      │        └──────────────┬───────────────────┘
 │  rubber bands) — refilled FROM the back room   │                       │
 └────────────────────────┬───────────────────────┘          ISSUE WINDOW │  (the only way
                          │                                                │   parts cross)
                          └──────────────  BOM request ───────────────────┘
                                          Pick → Kit → Issue → log
```

**The rule that makes it work:** *parts only move from back to front against an approved BOM,
and every movement is logged.* Students pull from **their own bin** and from **line-side
consumable bins**, never from the back-room shelves.

---

## 2. The framework (and the real-world source of each idea)

You don't have to invent a system — you can lift proven ones. Here's the toolkit this plan is
built from, and where each comes from.

| Technique | Where it comes from | How we use it |
|---|---|---|
| **5S** (Sort, Set-in-order, Shine, Standardize, Sustain) | Toyota Production System / Lean | The backbone of the whole reset — Phases 1–7 below |
| **Red-tag purge** | 5S "Sort" | Quarantine questionable junk for 30 days before tossing |
| **ABC analysis** (Pareto 80/20) | Inventory management | Count expensive stuff exactly; manage screws by the bin, not the unit |
| **Cycle counting** | Warehouse/WMS practice | Count a rotating slice each week instead of one giant annual count |
| **SKU + bin-location addressing** | Amazon / WMS (`Zone-Rack-Shelf-Bin`) | Every part and every home has an address |
| **Tool crib / issue window** | Manufacturing stockrooms | The back room; parts *issued* against a BOM like a work order |
| **Kitting & pick lists** | Manufacturing & Amazon fulfillment | Turn a BOM into a picked kit handed to the team |
| **Kanban two-bin** | Toyota just-in-time | Line-side consumables auto-trigger a refill when a bin empties |
| **Min/Max & reorder point** | Inventory control | Never run out of 8-32 screws mid-season, never over-buy |
| **FIFO / FEFO** | Perishable logistics | Rotate CA glue, Loctite, batteries, filament by date |
| **Shadow boards + FOD control** | Aerospace & F1 pit crews | Tool silhouettes; a missing tool is instantly visible |
| **Asset tagging / CMMS-lite** | IT & facilities management | Serialize V5 brains, batteries, radios; log health & cycles |
| **Poka-yoke** (mistake-proofing) | Lean quality | Photo labels + foam cutouts so the wrong part won't fit the wrong home |
| **Gemba walk / daily reset** | Lean "Sustain" | 5-minute end-of-day reset; weekly 10-minute audit with a scoreboard |

!!! tip "The one mental model to keep"
    **Front of house is a store; back of house is a warehouse.** A store puts a *little* of
    everything within reach and restocks from the back. A warehouse holds the *bulk*, locked
    and addressed. Almost every decision below is just "which side does this belong on, and
    what's its address?"

---

## 3. The phased roadmap (start → finish)

Seven phases. Do Phase 0–2 as a concentrated **"5S blitz"** (one big weekend or a few sessions
with the space closed to normal building), then Phases 3–5 to stand up the systems, then 6–7 to
lock it in. Full timeline is in §4.

### Phase 0 — Prep (before you move a single screw)

Don't start sorting cold. An hour of prep saves a day of chaos.

- [ ] **Photograph the "before"** — every wall, shelf, table. You'll want it for the after/before and for grant applications.
- [ ] **Measure & sketch the space** — a rough floor plan with dimensions. Decide *now* where the back-room boundary is and how it locks.
- [ ] **Recruit a crew** — 4–8 people for the blitz. Assign a **Stockroom Lead** (see [roles](roles-safety-sustain.md)).
- [ ] **Freeze the space** — tell all teams: "parts freeze" for the blitz window. Everyone brings *their* loose parts to be inventoried; nothing leaves.
- [ ] **Gather supplies** — bins, totes, label printer/labels, colored tape, trash/recycling bins, red tags, gloves, folding tables for sorting. See the [shopping list](budget-and-shopping-list.md).
- [ ] **Stand up the inventory sheet** — copy the [inventory-master template](templates/inventory-master.csv) into Google Sheets (or Sortly). You want to be able to enter parts *as you count*, not after.
- [ ] **Stage a Red-Tag Holding Area** — one corner or a few labeled totes for "we're not sure yet."

!!! example "Industry example — the 5S blitz / 'kaizen event'"
    Manufacturers run a **kaizen blitz**: close a work cell for 1–3 days, throw the whole team
    at it, and transform it in one push rather than nibbling for months. A robotics room is
    perfect for this — pick an off-week and do it in one weekend while momentum is high.

### Phase 1 — Sort & purge (5S "Seiri")

Touch every single item once and make one decision: **Keep · Relocate · Repair · Recycle · Trash · Red-tag.**

1. **Empty and triage in waves** — do one shelf/zone at a time so the room never becomes an unrecoverable pile. Clear a shelf → sort its contents onto folding tables → the shelf is now clean staging.
2. **Sort into category buckets** (these become your stockroom categories):

    | Code | Category | VEX / BattleBots examples |
    |---|---|---|
    | **STR** | Structure | C-channels, angles, flat bars, plates, standoffs, gussets/brackets |
    | **MOT** | Motion | Shafts, bearings, spacers, collars, gears, sprockets, chain, pulleys, belts |
    | **WHL** | Wheels & traction | Omni, traction, mecanum, flex wheels, tread |
    | **ELE** | Electronics | V5 brains, smart motors, batteries, controllers, radios, sensors, smart cables |
    | **PNE** | Pneumatics | Cylinders, reservoirs, tubing, fittings, solenoids |
    | **HW** | Hardware | 8-32 screws (by length), nylocks, keps, washers, shaft collars |
    | **CON** | Consumables | Rubber bands, zip ties, tape, Loctite, grease, filament, CA glue |
    | **BB** | BattleBots | N20 motors, LiPos, ESCs, Malenki boards, TPU/PLA parts, magnets, M2/M3 hardware |
    | **TOOL** | Tools | Hex/allen keys, nut drivers, cutters, drills, calipers |

3. **Red-tag anything questionable** — broken, mystery, "might need someday." Attach a red tag (date + who tagged it) and move it to the holding area. **Rule: if nobody claims/uses it in 30 days, it leaves.** This defeats "keep everything just in case" without anyone having to win an argument on blitz day.
4. **Quarantine the dead** — stripped screws, cracked gears, swollen batteries, frayed cables. Swollen/puffed LiPo or V5 batteries go to **safe disposal immediately** (see [safety](roles-safety-sustain.md#battery-safety)).
5. **Separate club-owned vs team-owned** — if teams bought their own parts, tag those distinctly. They still get inventoried, but ownership is a field in the sheet.

!!! example "Industry example — the red-tag system"
    In 5S, you don't debate each item on the spot — you **red-tag** it and set a deadline. The
    holding area is visible, dated, and time-boxed. Items that age out get disposed. It converts
    "we might need this" from a feeling into a *test*.

### Phase 2 — Inventory & digitize (count once, label forever)

Now count the **Keep** pile into your system. The trap here is trying to count 4,000 screws
one at a time. **Don't** — use ABC.

**ABC tiers — how hard to count each thing:**

| Tier | What it is | How to count & track |
|---|---|---|
| **A** — high value / serialize | V5 brains, batteries, controllers, radios, 3D printers, chargers | **Individually**, with an asset tag & serial. Track condition, cycles, who has it. |
| **B** — count exactly | Smart motors, sensors, wheels, gears, pneumatics, high-strength parts | **Exact quantity** in the sheet; recount on a quarterly cycle. |
| **C** — manage by the bin | Screws, spacers, washers, zip ties, rubber bands | **Do not unit-count.** Fill a bin, set a "full = ~N" estimate, manage with **min/max + kanban**, not exact numbers. |

**For each item you keep, capture** (columns in the [inventory template](templates/inventory-master.csv)):
`Part# · Name · Category · VEX/Vendor PN · ABC · Home location · Qty · Min · Max · Owner · Photo · Notes`.

Then **label as you go**:

- **Every bin gets a label** with the part name, your part number, and a **QR code** that opens the sheet/app record. (Photo on the label = poka-yoke: the wrong part visibly doesn't match.)
- **Every location gets an address** — `Zone-Rack-Shelf-Bin`, e.g. `BK-A-3-02`. See the [part-numbering & locations scheme](templates/part-numbering-and-bin-locations.md).
- **A-items get an asset tag** with a unique serial and a check-out QR.

!!! example "Industry example — ABC analysis & cycle counting"
    Real stockrooms live by Pareto: ~20% of SKUs (the A-items) are ~80% of the value, so those
    get tight control; the ocean of cheap C-items is managed by *replenishment rules*, not
    headcounts. And nobody shuts the warehouse for a wall-to-wall count — they **cycle count** a
    rotating slice continuously. Your volunteers will thank you.

!!! tip "Speed trick for C-items — count by weight"
    A kitchen/postal scale turns "how many #8-32 x ½ screws are in here?" into a 3-second
    weigh-and-divide. Weigh 10, get per-unit weight, weigh the bin. Good enough for a min/max
    system — you only need to know "plenty / getting low / out."

### Phase 3 — Design the physical layout (give everything a home)

This is 5S "Set-in-order." Decide *where* each category lives before you refill anything.

**Back room (stockroom) — bulk & reserve, adults only:**

- Shelving by category, each shelf/rack **addressed** (`BK-A`, `BK-B`, …). Heaviest low, most-used at waist height ("golden zone").
- **A-items behind a lock** — a cabinet or the locked room itself. V5 brains/batteries/radios live here and are *issued*, never browsed.
- A small **kitting bench** by the issue window with the pick-list clipboard/tablet, empty kit totes, and the label printer.

**Front build floor — point-of-use & team stations:**

- **Per-team station**: table + a **lockable team bin/tote** (their issued parts) + their **color-coded tool kit** on a shadow board or in a foam-lined box.
- **Line-side kanban bins** for high-churn consumables (a few screw sizes, zip ties, rubber bands) that *every* team uses. These are the only "open" stock on the floor and are refilled from the back.
- **Charging station** — a single supervised spot for V5 and LiPo charging (see safety).
- **Tool board / crib** for shared big tools (drill, Dremel, bar cutter) with shadow outlines.

!!! example "Industry example — shadow boards & FOD control"
    Aviation and F1 pit crews use **shadow boards**: every tool has a painted silhouette, so a
    blank outline screams "a tool is missing" before a wrench ends up torn up in a gearbox
    (aviation calls loose-tool hazards *FOD* — foreign object debris). For a kids' shop this is
    gold: at end-of-day, any empty silhouette is a tool to hunt down *now*, not next week.

**Color coding — keep two systems from fighting each other:**

- **Team color = ownership/access.** Team 1 = 🟥 red, Team 2 = 🟦 blue, Team 3 = 🟩 green, etc. Applies to the team's **bin, tools, and station label**. A red hex key belongs to the red team; if it's on the blue table, it goes home.
- **Category color = type**, used only on **stockroom labels** (e.g., a colored stripe on the label: structure/motion/electronics/hardware). Don't color the tools by category *and* by team — pick **team color for tools**, **category stripe for stock labels**, and you'll never confuse the two.

See the full [color-coding key](templates/color-coding-key.md).

### Phase 4 — Stock the back room & set replenishment rules

Refill the addressed homes with the **Keep** stock, and set the rules that keep it stocked.

- **Put bulk in the back, a little up front.** The back room holds the reserve; line-side kanban bins hold a working quantity of the highest-churn items.
- **Set Min/Max for consumables & B-items.** *Min* = reorder trigger (e.g., "reorder 8-32 x ½ when below 200"); *Max* = how many to hold. Put these in the sheet. Set *min* high enough to survive the lead time of a VEX/McMaster order plus a safety buffer — spiking demand right before a competition is exactly when you can't afford a stockout.
- **Build the two-bin kanban** for line-side consumables: two bins per item, one in use, one reserve. When the front bin empties, it goes to the back-room refill spot (that's the signal) and the reserve slides forward. See the [kanban card](templates/color-coding-key.md#kanban-cards).
- **Date-label perishables (FIFO/FEFO).** CA glue, Loctite, epoxy, and filament degrade; batteries age. Write the received date on receipt and pull oldest first.

!!! example "Industry example — the two-bin kanban"
    Toyota's line-side parts use **two bins**: workers draw from bin 1; when it's empty, that
    empty bin *is* the reorder card and they switch to bin 2 while it's refilled. No counting, no
    forms — the empty container is the signal. It's the simplest reliable restock system ever
    invented, and it's perfect for zip ties and screws.

### Phase 5 — Stand up the BOM → issue → kit workflow

This is the heart of your plan: teams don't shop the shelves — they **request a BOM**, you
**kit it**, and they get **their** parts in **their** bin.

**The loop:**

```
1. Team CADs/plans      2. Team submits BOM      3. Lead reviews & approves
   their robot     ──►    (form/Onshape export) ──►   (quantities, budget, stock)
                                                              │
6. Consumption/returns  5. Issue to team bin     4. Picker kits the parts
   logged; bin is    ◄──   + log the movement  ◄──    (pick list → kit tote)
   theirs to use             (who/what/when)
```

1. **Team submits a BOM** using the [team BOM request template](templates/team-bom-request.csv) — or, even better, **exports it straight from their Onshape assembly** (see [digital systems → Onshape BOM](digital-systems.md#from-cad-to-cart-onshape-bom-export)). Real engineering works exactly this way: the CAD *is* the parts list.
2. **You review & approve** — check quantities are sane, parts are in stock, and it fits the team's budget/allocation. Approve, partially approve, or send back. This is your control point; nothing is issued without it.
3. **A picker turns the approved BOM into a pick list** ([template](templates/kitting-pick-list.csv)) — sorted by back-room location so the picker walks the shelves once, in order.
4. **Kit the parts** into a labeled tote/bag for that team. A-items (a brain, a battery) are **checked out** against the team, not permanently given.
5. **Issue at the window & log it** — every part that crosses front↔back is a logged transaction (out to team, or returned). The sheet/app quantity decrements automatically.
6. **The team owns their bin.** They build from it and from line-side consumables. At season end (or on a schedule) they **return** the reusable/A-items, which get inspected and restocked.

!!! example "Industry example — kitting & work-order issue"
    Factories don't let assemblers wander the stockroom. A **work order** drives a **pick list**;
    a picker pulls a **kit**; the kit is issued to the line and the stock is decremented. Your
    team's BOM *is* the work order. Kitting also naturally rations parts — a team gets what their
    design needs, not "as many motors as they can grab."

### Phase 6 — Access control, accountability & safety

Make "students can't free-pool from the back" real, and make the space safe for minors.

- **Physical access** — the back room/cabinet is **locked**; only the Lead and designated mentors hold keys/codes. Parts leave *only* through the issue window with a log entry.
- **Team-bin access** — each team's bin is theirs (optionally a cheap keyed/combo lock or just a clearly-labeled, color-coded, honor-system tote). Cross-team borrowing goes through the Lead, not peer-to-peer.
- **Check-out for shared A-items & tools** — a [check-out log](templates/tool-and-parts-checkout-log.csv) (paper clipboard or a QR-scan on a tablet): who took it, when, expected return. Shadow boards make un-returned tools obvious at reset.
- **Safety systems** — LiPo/V5-battery fire-safe storage & a supervised charging station, PPE (goggles) at cut/print stations, an SDS binder for chemicals, and lock-out of the dangerous power tools when no mentor is present. Details in [Roles, Safety & Sustaining](roles-safety-sustain.md).

!!! example "Industry example — the tool crib"
    Machine shops run a **tool crib**: a caged, attended room where tools and materials are
    *signed out* and *signed back in*. Accountability isn't about distrust — it's that a $400 V5
    brain or a shared bar-cutter is a shared asset, and "who has it right now" should always have
    an answer. Your issue window is a tool crib.

### Phase 7 — Standardize & sustain (the part everyone skips)

A clean room in week 1 is easy; a clean room in week 12 is the whole game. **Sustain** is 5S's
hardest S and where most reorganizations die.

- **Write it down** — one-page SOPs and photo standards posted at the point of use: "this is what a reset shelf looks like," "this is how you submit a BOM." A labeled photo *is* the standard.
- **Daily reset (5 min)** — end every session with a "everything home, every silhouette filled, line-side bins topped, floor clear" sweep. See the [daily reset runbook](templates/daily-reset-weekly-audit.md).
- **Weekly audit (10 min)** — a short 5S checklist walk + a slice of cycle counting. Post a **scoreboard** by team.
- **Assign owners** — a student **Quartermaster/Stockroom Manager** and a **Parts Captain per team**. Ownership is what makes it stick (and it's real, resume-worthy leadership for a student).
- **Gamify it for the kids** — a weekly "5S Cup," a cleanest-station streak, points for returning tools and accurate BOMs. Make the right behavior the fun/winning behavior.

!!! example "Industry example — Gemba walks & visual management"
    Lean leaders do a daily **gemba walk** — go to where the work happens and *look*, using
    visual cues (shadow boards, kanban, andon lights) that make problems obvious at a glance. If
    you can stand in the doorway and instantly see "blue team left two tools out and the zip-tie
    bin is empty," the system is working. If you have to open drawers to find problems, it isn't.

---

## 4. Suggested timeline

Scale to your calendar; this is a typical shape. The blitz is the heavy lift; everything after
is standing up systems and habits.

| When | Phase | Effort |
|---|---|---|
| **Week 0** | Phase 0 — Prep: photos, floor plan, crew, supplies, freeze the space | 1 short session |
| **Blitz weekend** | Phases 1–2 — Sort/purge + inventory the Keep pile | 1–2 full days, all hands |
| **Week 1** | Phase 3 — Lay out zones, address shelves, build shadow boards, color-code | 2–3 sessions |
| **Week 2** | Phase 4 — Stock the back room, set min/max, build kanban | 1–2 sessions |
| **Week 2–3** | Phase 5 — Launch the BOM/kitting workflow; run one team through as a pilot | 1 session + pilot |
| **Week 3** | Phase 6 — Locks, check-out log, safety station live | 1 session |
| **Ongoing** | Phase 7 — Daily reset, weekly audit, cycle counting, scoreboard | 5–15 min/session |
| **Red-tag day** | ~30 days after blitz — clear the holding area | 1 hour |

!!! tip "Pilot with one team first"
    Before you roll the BOM workflow to everyone, run **one** team end-to-end: they submit a BOM,
    you kit it, issue it, log it. You'll find the rough edges (a missing part number, a confusing
    form field) with one team instead of six.

---

## 5. Pitfalls to avoid (learned the hard way)

!!! warning "The failure modes that kill workspace resets"
    - **Unit-counting C-items.** You will burn out counting washers. Use ABC + weigh-counting + min/max. "Enough / low / out" is all you need for cheap parts.
    - **A database nobody updates.** An inventory that isn't maintained is worse than none — people trust it and it's wrong. **Cycle count** and make *logging at the issue window* the only way parts move, so the data updates itself.
    - **Two teams, two color systems, total confusion.** One color axis for team ownership, a *different* attribute (a label stripe) for category. Don't double-encode.
    - **No owner.** "Everyone keeps it clean" means no one does. Name a Quartermaster and Parts Captains.
    - **Skipping Sustain.** The blitz is the fun part; the daily 5-minute reset is what matters. Budget for it and gamify it.
    - **Locking the back room but leaving a free-for-all up front.** If the line-side bins are unmanaged, you've just moved the mess. Kanban them.
    - **Hoarding by teams.** Kitting rations naturally, but watch for teams stockpiling "just in case." Returns at season end + issue logs surface it.
    - **Ignoring battery safety.** Puffed LiPo/V5 batteries are a fire risk. Have a safe-storage and disposal path *before* the blitz, because you'll find some.

---

## 6. Anything else you can do (high-leverage extras)

Beyond the core reset, these are worth doing when you have bandwidth:

- **Wire it to your existing curriculum.** Teams already learn Onshape here — teach them to **export a BOM from their assembly** and submit *that*. Now the reset reinforces a real engineering skill (eBOM → pick list) instead of being pure overhead. See [digital systems](digital-systems.md#from-cad-to-cart-onshape-bom-export).
- **3D-print your own bins.** You have printers — print a **Gridfinity** grid of modular bins sized for VEX screws, spacers, and gears. It's free, endlessly customizable, and a great student print project. Details in the [shopping list](budget-and-shopping-list.md#diy-3d-printed-storage).
- **Battery health logs.** V5 Li-ion and BattleBots LiPos degrade with cycles. Serialize each pack and log cycles/health so you retire packs *before* they fail in a match.
- **A "Shortage Board."** A visible whiteboard (or a channel) where anyone flags "we're low on X." Feeds your reorder list and surfaces demand you didn't predict.
- **Standardize starter kits.** Pre-kit a "new team starter tote" (a known parts list) so onboarding a new team is one pick, not a scramble.
- **End-of-season teardown & re-inventory.** Build a ritual: robots come apart, A-items return and get inspected, the sheet gets a full reconciliation. Start each season clean.
- **Grant/sponsor the infrastructure.** Shelving, bins, a label printer, and LiPo-safe storage are exactly the concrete, photographable asks sponsors and STEM grants love. Your "before" photos are the pitch.
- **Label the filament & consumables with open-date + material** so half-used spools and aging glue don't become mystery stock.
- **Put a laminated map of the space** (zone addresses) by the issue window so a new picker can find `BK-A-3-02` on day one.

---

## Next steps

1. Skim the **[Digital Systems](digital-systems.md)** page and pick your software tier (start: Google Sheets; grow into Sortly/Airtable; graduate to InvenTree).
2. Open the **[Budget & Shopping List](budget-and-shopping-list.md)** and choose a tier; order bins, labels, locks, and LiPo-safe storage.
3. Assign a **Quartermaster** and **Parts Captains** from **[Roles, Safety & Sustaining](roles-safety-sustain.md)**.
4. Copy the **[templates](templates/index.md)** into your Google Drive and schedule the **5S blitz**.

!!! success "The finish line"
    You'll know it worked when a new student can walk in, read the labels, find `BK-A-3-02`,
    submit a BOM, and get their kit — and when you can stand in the doorway at end-of-day and
    see, at a glance, that everything is home. That's a warehouse, not a workshop.
