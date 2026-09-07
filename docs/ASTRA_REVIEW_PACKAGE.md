# ASTRA REVIEW PACKAGE — School Visitor Check-in

## Mode
ASTRA ARCHITECTURE REVIEW

## Current design
- Real roster PII stays local on reception devices.
- Anonymous multi-device sync sends attendance state/anonymous IDs, not names/readings/school identity.
- Local/offline reception continues during connectivity loss with later sync.
- Registration-number and surname lookup support fast reception.
- Simplified `guardian-tap-checkin` remains separate.

## Inspect
- `README.md`
- current sync code and local storage/data import paths
- manual and backup/delete flows
- `docs/REQUIREMENTS.md`
- `docs/MASTER_ARCHITECTURE.md`
- `docs/DECISIONS.md`
- `docs/PROJECT_STATE.md`
- `AGENTS.md`

## Questions for Astra
1. Is the anonymous sync identifier design sufficiently resistant to accidental PII leakage/collision across events?
2. What canonical cross-event data model gives reuse without centralizing unnecessary personal data?
3. What QR payload should be used for registration-number-driven check-in while preserving privacy and offline usefulness?
4. What reconciliation/double-check-in strategy is appropriate during network partitions?
5. Should local browser storage remain the event-time source of truth, or is a different durable model justified for future use?

## Required output
Classify deltas Maintain / Modify / Retire / Hold. Do not auto-adopt major changes. Return privacy/threat findings, target identity/sync architecture, migration implications, operational failure modes, docs to update and SOL HANDOFF.
