# Templates & Runbooks

Ready-to-use files for the [workspace reset](../index.md). Copy the CSVs into Google Sheets (or
import into Sortly/Airtable/InvenTree) and print the runbooks for the wall.

!!! tip "How to use these"
    - **CSV files** — open in Google Sheets/Excel, or import into your inventory app. The header row is the schema; the example rows show the intended format — delete them once you start real data.
    - **Markdown runbooks** — print/laminate and post at the point of use (issue window, each station, the charging bench).

## Data & logs (CSV)

| File | Use | Who owns it |
|---|---|---|
| [`inventory-master.csv`](inventory-master.csv) | The single source of truth for every part, its home, and its stock levels | Stockroom Manager |
| [`team-bom-request.csv`](team-bom-request.csv) | A team's parts request (or exported from Onshape) | Parts Captain → Lead approves |
| [`kitting-pick-list.csv`](kitting-pick-list.csv) | An approved BOM turned into a location-sorted picking route | Stockroom Manager |
| [`tool-and-parts-checkout-log.csv`](tool-and-parts-checkout-log.csv) | Who has which A-item / shared tool, and when it's due back | Stockroom Manager |

## Reference & runbooks (Markdown)

| File | Use |
|---|---|
| [`part-numbering-and-bin-locations.md`](part-numbering-and-bin-locations.md) | The SKU scheme and the `Zone-Rack-Shelf-Bin` address system |
| [`color-coding-key.md`](color-coding-key.md) | Team colors, category stripes, and kanban cards |
| [`5s-blitz-runbook.md`](5s-blitz-runbook.md) | Hour-by-hour plan for the sort/purge/inventory blitz + red-tag |
| [`daily-reset-weekly-audit.md`](daily-reset-weekly-audit.md) | The 5-minute reset and the 10-minute weekly 5S audit checklists |
