# School Visitor Check-in Master Architecture

Status: approved baseline consolidated by Sol; Astra architecture review pending
Last updated: 2026-09-07

## 1. Product role
This repository is the general school-event reception/check-in application. It supports richer roster lookup, categories, offline continuity, backup/export and anonymous multi-device synchronization.

`guardian-tap-checkin` is a separate simplified guardian self-check-in experience. Do not merge the two merely to reduce repository count.

## 2. Personal-data boundary
Real roster data is local to the reception device/browser. It is not committed or published. The synchronization layer stores only anonymous IDs and attendance state/metadata required for cross-device reconciliation.

## 3. Local/offline behavior
Local device state remains capable of reception during connectivity loss. Unsynced work is retained for later sync. The UI must clearly communicate that other devices may be temporarily stale during an outage.

## 4. Sync boundary
The current privacy design depends on synchronization not receiving names, readings or school names. Any proposal to send identifiable roster data server-side is a root privacy architecture change and requires Astra review.

## 5. Identity and QR
Registration numbers, normalized surname lookup and future QR flows are identification aids, not authorization secrets. QR payloads should use opaque/minimal identifiers where possible and avoid embedding unnecessary personal data.

## 6. Data lifecycle
Import → local operation → attendance recording → backup/export → verified cleanup on shared devices. Destructive cleanup is user-confirmed and happens only after backup expectations are clear.

## 7. Governance
- Astra: identity/privacy model, sync/source-of-truth architecture, cross-event canonical data model, server-side personal-data boundary.
- Sol: routine lookup/QR/UI/event-flow improvements, bounded sync behavior under existing privacy contracts, docs and Codex tasks.
- Codex: scoped implementation/tests.

## 8. Escalation
Astra review is required before changing the anonymous-sync privacy boundary, moving roster PII server-side, introducing a new authoritative backend, or redesigning the cross-event identity model.
