# Digital Systems — Software, Data Model & QR Workflow

The physical reset needs a digital brain: one source of truth for **what you have, where it
lives, and who has it**. This page helps you pick software, shows the data model, and connects
it to the tools you already teach (Onshape, GitHub, QR codes).

!!! tip "Golden rule"
    **Pick the simplest tool your team will actually keep updated.** A perfect database nobody
    maintains is worse than a spreadsheet everyone trusts. Start light; graduate only when volume
    forces it.

---

## 1. Software decision matrix

| Tier | Tool | Cost | Best at | Watch out for |
|---|---|---|---|---|
| **0 — Start here** | **Google Sheets / Excel** | Free | Instant start, everyone knows it, Google Forms for BOM intake, QR links to rows | No real "transactions"; easy to fat-finger; concurrency at scale |
| **1 — Recommended** | **[Sortly](https://www.sortly.com/)** | Freemium (nonprofit/edu discounts) | Visual, mobile, **built-in QR/barcode scanning**, low-stock alerts, folders per zone/team, photos | Item caps on free tier; less relational (BOMs are manual) |
| **1 — Alt** | **[Airtable](https://airtable.com/)** | Freemium | **Relational** (Parts ↔ BOMs ↔ Teams ↔ Locations), forms for BOM intake, automations, QR fields | More setup; you design the schema |
| **2 — Graduate to** | **[InvenTree](https://inventree.org/)** (open-source, self-host) | Free (host it) | **Purpose-built**: Parts, Stock Locations, **BOMs**, and **Build Orders** (= kitting a team's BOM), supplier links, full transaction log | Needs a host (a Raspberry Pi works) & an admin; steeper setup |
| **2 — Asset add-on** | **[Snipe-IT](https://snipeitapp.com/)** (open-source) | Free (host it) | **Serialized asset check-in/out** for A-items (V5 brains, batteries, laptops, radios) | Not for bulk consumables — pair it with one of the above |
| **Niche** | **[Grocy](https://grocy.info/)** / **[PartsBox](https://partsbox.com/)** | Free / Freemium | Grocy: excellent **min/max + barcode** for consumables. PartsBox: electronics-parts focused | Single-purpose; only if that purpose is your pain |

### The recommended path for CTRC

```
   NOW                         SOON                             LATER (optional)
┌───────────────┐          ┌──────────────────┐            ┌───────────────────────┐
│ Google Sheets │  ──────► │ Sortly (or       │  ────────► │ InvenTree for full    │
│ run the blitz │  outgrow │ Airtable if you  │  when BOM  │ BOM/Build-Order flow  │
│ on this       │  the     │ want relational  │  volume &  │ + Snipe-IT for        │
│               │  sheet   │ BOMs)            │  parts     │ serialized A-items    │
└───────────────┘          └──────────────────┘  justify   └───────────────────────┘
```

- **Do the blitz on Google Sheets.** You need to type parts *as you count*; a shared sheet is the fastest possible start, and the [inventory template](templates/inventory-master.csv) is ready to paste in.
- **Move to Sortly once labeled.** Its phone-based QR scanning is the single biggest quality-of-life upgrade for a physical space — scan a bin, see/update the record. Airtable instead if you want the BOM↔Parts relationships modeled properly.
- **Graduate to InvenTree** only if/when the BOM-and-kitting volume makes the manual approach painful. Its **Build Order** feature literally *is* "consume these parts from stock to fulfill this BOM" — the exact workflow in the master plan.

!!! note "Whatever you pick, keep the CSV export"
    Keep the master data as CSV in this repo (or Google Drive) as a vendor-neutral backup. Tools
    change; your inventory shouldn't be trapped in one.

---

## 2. The inventory data model

Every tool above stores the same core fields. Here's the schema (columns in the
[inventory-master template](templates/inventory-master.csv)):

| Field | Example | Why it exists |
|---|---|---|
| **Part #** (your SKU) | `HW-SCR-032-050` | Your internal, human-readable ID — see [scheme](templates/part-numbering-and-bin-locations.md) |
| **Name** | `Screw, 8-32 × ½", Torx` | What a human calls it |
| **Category** | `HW` | STR/MOT/WHL/ELE/PNE/HW/CON/BB/TOOL |
| **Vendor PN** | `276-2xxx` (VEX) / McMaster # | Reorder without guessing; VEX already has part numbers — reuse them |
| **ABC** | `C` | Drives how tightly you count it |
| **Home location** | `BK-A-3-02` | The addressed bin it belongs in |
| **Qty on hand** | `~600` | Current count (exact for A/B, estimate for C) |
| **Min** | `200` | Reorder trigger |
| **Max** | `1000` | Target stock (don't over-buy) |
| **Owner** | `Club` / `Team 3` | Club-owned vs team-owned |
| **Serial / Asset tag** | `V5B-014` | A-items only; individual identity |
| **Photo** | (image) | Poka-yoke; label & search |
| **Notes** | `Reorder in packs of 100` | Anything else |

**For serialized A-items**, add a companion "asset log": `Asset tag · Serial · Type · Status
(in stock / issued / repair / retired) · Held by · Cycles/health · Last checked`. This is where
Snipe-IT shines, but a second sheet tab works fine to start.

---

## 3. QR / barcode workflow

QR codes are the bridge between the physical bin and the digital record. You don't need special
hardware — a phone camera works.

**Three kinds of labels:**

1. **Location labels** — one per addressed shelf/bin (`BK-A-3-02`). QR encodes the location; scanning shows everything that lives there.
2. **Part/bin labels** — name + your part # + a QR that opens that part's record (to check or adjust quantity). Add a **photo** on the label.
3. **Asset tags** — A-items; QR opens the check-out record (who has it, its health log).

**How to generate them:**

- **In Sortly/InvenTree/Snipe-IT:** built-in — the app generates and prints QR/barcodes tied to each record. Easiest.
- **On Sheets:** put a formula-generated QR image in a column. A common pattern is an `IMAGE()` cell pointing at a free QR endpoint, or a QR add-on. The QR target is the URL of that row/record (or a Google Form pre-filled to adjust it).
- **Printing:** a **Brother P-touch** or **Dymo** label printer for durable on-demand labels, or **Avery** sheet labels run through a normal printer for a big first batch. Laminate or use poly labels near solvents/oil.

!!! example "Industry example — scan-to-transact"
    In a real warehouse nobody types SKUs — they **scan**. The scan *is* the transaction: scan
    bin, scan part, enter qty, done. Replicating even a light version of this (phone scan → update
    record) is what keeps the database honest, because updating is faster than not updating.

!!! tip "Make the issue window a scan station"
    Put a tablet or a cheap phone at the issue window. Kitting a BOM = scan each part as it goes
    into the team tote; the scan decrements stock and logs "issued to Team N." No separate
    data-entry step, no drift between the shelf and the sheet.

---

## 4. From CAD to cart — Onshape BOM export {#from-cad-to-cart-onshape-bom-export}

This is the highest-leverage tie-in to what you already teach. In real engineering, the **CAD
model produces the Bill of Materials**, and that BOM drives purchasing and the pick list. Your
teams already build assemblies in Onshape (Unit 3) — so their **BOM already exists in their CAD**.

**The workflow:**

```
Onshape Assembly ──► Bill of Materials tab ──► Export (CSV/Excel) ──► Team BOM request ──► Kitting
   (Unit 3 skill)      (auto-generated)          (one click)          (your template)      (pick list)
```

1. In their Onshape assembly, teams open the **Bill of Materials** panel (Onshape auto-generates it from the parts in the assembly).
2. They **add a "Quantity" and part-number column** and map each line to your internal part # (or the VEX PN).
3. They **export the BOM** (CSV/Excel) and submit it as their [BOM request](templates/team-bom-request.csv) — or paste it into the intake form.
4. You review, approve, and it becomes a **pick list**.

!!! success "Why this is worth the effort"
    - It teaches a genuine industry skill: **eBOM (engineering BOM) → mBOM → pick list**, exactly how hardware companies work.
    - It kills the "I think we need some motors?" vagueness — the BOM is derived from a real design.
    - It makes your reset *reinforce* the curriculum instead of competing with it. Consider adding a short lesson: "Export your BOM and request parts."

!!! note "Keep it optional-but-encouraged"
    Younger teams can still use the plain [BOM request template](templates/team-bom-request.csv).
    The Onshape export is the "graduated" path for teams far enough into Unit 3 to have a real
    assembly.

---

## 5. Putting it together — the digital happy path

```
 Team designs in Onshape ─► exports BOM ─► submits via Form/CSV
        │
        ▼
 Lead reviews in the sheet/app ─► approves ─► generates pick list (sorted by BK location)
        │
        ▼
 Picker scans parts into team tote at the issue window ─► stock auto-decrements, logged "→ Team N"
        │
        ▼
 Weekly: cycle-count a slice + check min/max ─► reorder list ─► restock ─► FIFO date-label
```

Every arrow is a place the data updates itself if you let the **scan/log be the action**, not a
chore you do afterward. That's the difference between a database that rots and one that stays
true.
