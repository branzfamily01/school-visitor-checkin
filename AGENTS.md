# AGENTS.md — School Visitor Check-in

## Governance
- Astra: Chief Architect for privacy/identity/sync/source-of-truth architecture.
- Sol: Main Operator for routine reception flow, lookup/QR/UI, analysis, docs, Codex tasks and review.
- Codex: Repository Implementer.

## Read first
- `README.md`
- `docs/REQUIREMENTS.md`
- `docs/MASTER_ARCHITECTURE.md`
- `docs/DECISIONS.md`
- `docs/PROJECT_STATE.md`

## Privacy invariants
- Never commit real attendee rosters or attendance PII.
- Current sync must not receive names/readings/school identity.
- Preserve local/offline reception capability unless an approved architecture replaces it safely.
- QR payloads should contain the minimum required identity data; do not place unnecessary PII in QR codes.
- Shared-device cleanup must remain explicit and backup-aware.

## Relationship to Guardian Tap
Do not automatically merge `guardian-tap-checkin` into this repository. It is a deliberately simpler guardian self-check-in flow.

## Escalation
Do not independently move roster PII server-side, change the anonymous sync privacy boundary, replace the source-of-truth model, or redesign cross-event identity. Report to Sol for Astra escalation.

## Change control
Use Maintain / Modify / Retire / Hold for major proposals. Major changes require explicit user acceptance.

## Verification
Test actual reception flows including import, search/number lookup, check-in/cancel, offline behavior as applicable, sync/reconnect, export/backup and cleanup. Inspect the complete diff and report anything not verified.
