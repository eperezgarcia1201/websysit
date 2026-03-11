# Baseline Report (Landing + Access Slice)

Date: 2026-03-11  
Scope: `frontend/platform` plus new migrated feature scope `frontend/src/features/landing`.

## Inventory
- Existing production shell: `frontend/platform/PlatformApp.tsx` routes cloud hierarchy/network/sync flows.
- Existing cloud feature pages are large and mixed (example: `frontend/src/pages/CloudStores.tsx`).
- Existing styling is global in `frontend/src/styles/app.css`.

## High-Risk Areas (Ranked)
1. Route changes in `frontend/platform/PlatformApp.tsx` can break cloud entry points.
2. Global CSS side effects from `frontend/src/styles/app.css`.
3. Presentation-layer networking drift in future migrations.

## Contract Snapshot
- Cloud entry path preserved: `/cloud/platform/hierarchy`.
- Cloud network path preserved: `/cloud/platform/network`.
- Cloud sync path preserved: `/cloud/platform/sync`.
- Existing back-office redirect preserved: `/back-office` -> `/cloud/platform/hierarchy`.

## Baseline Build Status
- Frontend dependency install: pass (`npm ci --script-shell=/bin/sh`).
- Backend dependency install: pass (`npm ci --script-shell=/bin/sh`).
- Note: local environment requires `--script-shell=/bin/sh` for npm commands.

## Validation Commands
1. `npm run build:frontend` (workspace root)
2. `npm run build:backend` (workspace root)
3. `npm run check:lines && npm run check:no-direct-fetch` (workspace root)
