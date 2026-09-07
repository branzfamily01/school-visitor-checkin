# School Visitor Check-in Decisions

## 2026-09-07 — Astra–Sol governance
Status: Adopted for repository governance

Astra is Chief Architect for root privacy/identity/sync decisions; Sol is Main Operator; Codex implements approved changes.

## Existing approved architecture — Local roster PII
Status: Maintain

Real-name roster data remains local to reception devices and is not published or sent through the current synchronization service.

## Existing approved architecture — Anonymous synchronization
Status: Maintain

Cross-device synchronization shares anonymous identity/attendance state and operational metadata, not roster names/readings/school identity.

## Existing approved behavior — Offline continuity
Status: Maintain

Reception can continue locally during connectivity loss with later synchronization; staff must be warned of temporary cross-device staleness/double-check-in risk.

## Product relationship — Guardian Tap
Status: Maintain separation

`guardian-tap-checkin` remains a simplified specialized flow rather than being automatically merged into this general reception engine.

## Change control
Use Maintain / Modify / Retire / Hold for major proposals. Major changes require explicit user acceptance.
