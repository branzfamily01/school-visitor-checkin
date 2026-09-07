# School Visitor Check-in Requirements

Status: current approved baseline, 2026-09-07

## Purpose
A fast, privacy-conscious school-event reception app that imports attendee lists locally, supports name/registration-number lookup, records attendance, and remains usable under real reception pressure.

## Core reception requirements
- Fast search by surname and registration number, including the established normalized lookup behaviors.
- Support event/day/category separation and an all-category fallback during congestion.
- One-tap check-in, timestamp, checked-in status, cancel/revert, out-of-list registration and export/backup.
- Continue operating during network interruption where the current offline design allows it.
- Provide a separate fallback flow for attendees who do not know their registration number.
- QR-based flows may be added when they improve reception speed, but they must not expose unnecessary personal data in the QR itself.

## Privacy
- Real-name roster files are never committed to GitHub/GitHub Pages/ZIP.
- Roster data is loaded locally on reception devices.
- Multi-device sync sends only the minimum anonymous synchronization data required by the current design, not names/readings/school identity.
- Shared devices need a deliberate data-clearing workflow after verified backup.

## UX
- Large touch targets and obvious state for teacher/student reception staff.
- iPad/touch-PC use should be practical.
- Network failure must not collapse the entire reception flow; show sync limitations clearly.

## Governance
Astra owns identity/privacy model, sync architecture, durable storage and cross-event generalization. Sol owns routine reception flow, UI, QR/search improvements and Codex specifications. Codex implements scoped changes.
