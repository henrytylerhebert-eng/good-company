# Good Company V0.1 System Contract

## Source of truth

The `Room` object is the local execution record. Presentation elements derive from it. Browser local storage is the V0.1 persistence mechanism and is not a production knowledge store.

## Core states

- `frame`
- `evidence`
- `decide`
- `learn`

## Decision states

- `build`
- `research`
- `hold`
- `reject`
- `reframe`

## Evidence types

- `source`
- `observation`
- `assumption`

## Authority rules

- No colleague may set `approved`.
- Human approval requires an explicit decision selection.
- Learning records require an approved decision and a written outcome.
- Recommendations remain distinguishable from decisions.

## Deferred

Authentication, multi-user rooms, remote databases, model calls, retrieval infrastructure, external actions, connectors, and organization-wide canonical knowledge.
