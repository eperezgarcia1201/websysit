# Feature Refactor Card: landing-access

## Scope
Files:
- `frontend/platform/PlatformApp.tsx`
- `frontend/platform/main.tsx`
- `frontend/src/features/landing/**`
- `tools/guardrails/**`
- `package.json` (workspace root)

Risks:
- Route regressions for cloud portal paths.
- UI conflicts from shared global CSS.

Dependencies:
- `bootstrap` in frontend package.
- Existing cloud pages (`CloudStores`, `CloudStoreNetwork`, `CloudStoreSync`).

## Contracts to Freeze
Endpoints:
- No backend endpoint changes in this slice.

Request/response shapes:
- No backend payload shape changes in this slice.

UI behavior expectations:
- `/cloud/platform/hierarchy` remains accessible for WebsysPOS flow.
- New `/` landing and `/login` software selection flow.

## Planned Extractions
Domain:
- Software catalog model (`softwareCatalog.ts`).

Application:
- Product read use-case (`getSoftwareProducts.ts`).
- Login input validation (`validateLoginCredentials.ts`).

Infrastructure:
- Launch target resolution (`resolveSoftwareLaunchTarget.ts`).

Presentation:
- Landing page + login/select pages + software product card.

## Tests
Unit:
- Guardrail checks and input validation behavior (manual in this slice).

Integration:
- Route flow: `/` -> `/login` -> `/cloud/platform/hierarchy`.

API compatibility:
- Not applicable (no API contracts changed).

Regression:
- Cloud routes still render existing cloud pages.

## Validation Commands
1. `npm run build:frontend`
2. `npm run build:backend`
3. `npm run check:lines && npm run check:no-direct-fetch`

## Done Criteria
- [x] No API break
- [x] No behavior break
- [x] Tests green
- [x] Build/typecheck green
- [x] Guardrails green
