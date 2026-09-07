# School Visitor Check-in Project State

Snapshot: 2026-09-07

## Current baseline
- General reception application for school events.
- Supports Meguro festival classifications plus generic Excel column mapping.
- Local roster persistence, attendance history, CSV/JSON backup/export and cleanup flow exist.
- Anonymous multi-device synchronization with offline queueing exists.
- Real roster PII is intentionally excluded from the sync service.

## Governance work
This snapshot adds architecture/governance documents only. Reception runtime, roster data and synchronization behavior are not changed.

## Immediate next work
1. Run Astra review using `docs/ASTRA_REVIEW_PACKAGE.md`.
2. Design any registration-number → QR flow as a bounded feature inside the existing privacy boundary.
3. Keep number-unknown attendees on an explicit fallback route.
4. Test reception flows on touch PC/iPad-like layouts before event use.
5. Any sync/privacy architecture change requires explicit review before implementation.
