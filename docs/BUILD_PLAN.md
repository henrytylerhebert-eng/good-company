# Good Company

## Build Plan v0.1

**Status:** Ready for Implementation  
**Primary Objective:** Build the smallest functional Good Company product capable of running **Validation Cohort 01** and producing trustworthy product evidence.  
**Reference Architecture:** Good Company v0.4  
**Validation System:** Good Company Validation Protocol v0.1  
**Reference Case:** *The Dashboard Nobody Needed*

---

# 1. Build Objective

V0.1 should prove that Good Company can take a real, ambiguous product problem and move a user through:

**Intent → Cognitive Framing → Evidence → Challenge → Human Decision → Build Plan → Handoff → Outcome → Learning**

while allowing us to independently test:

1. The value of ordinary AI assistance.
2. The value of Cognitive Product Engineering.
3. The incremental value of the Good Company character and ensemble experience.

The product should not attempt to prove the entire long-term vision.

It should prove the core operating behavior.

---

# 2. V0.1 Product Question

> **Does Good Company materially improve the quality of product decisions and implementation readiness compared with a normal AI-assisted workflow?**

Secondary question:

> **Does representing responsibilities through recognizable colleagues improve comprehension, appropriate trust, and user engagement beyond the same CPE workflow using professional role labels?**

---

# 3. The Three Experimental Arms

The product must support three modes using the same underlying case and evaluation system.

## Arm A — Baseline

Normal AI-assisted product workflow.

The user interacts with one general assistant.

No explicit CPE architecture.

No characters.

No specialist responsibility model.

---

## Arm B — CPE

Uses the full Cognitive Product Engineering workflow.

Professional role labels appear:

- Cognitive Product Architect
- Evidence Analyst
- Independent Critic
- Systems Architect
- Builder
- Coordinator

No names, personalities, portraits, or ensemble narrative.

---

## Arm C — Good Company

Uses the identical CPE workflow.

Responsibilities are represented through:

- Mira
- Echo
- Rook
- Atlas
- Forge
- Nexus

Character identity may affect presentation and communication style.

It must not alter:

- Evidence standards.
- Authority.
- Workflow.
- Permissions.
- Decision rules.
- Evaluation criteria.

This separation is essential to valid testing.

---

# 4. V0.1 User Journey

## Step 1 — Start New Work

Primary CTA:

# What are you trying to make happen?

User enters the raw request.

The system stores the original request unchanged.

This becomes the baseline comparison artifact.

---

# Step 2 — Establish Human Owner

The user is shown as:

# You

**Human Owner & Decision Authority**

The system confirms that consequential decisions remain with the user.

---

# Step 3 — Problem Framing

In Good Company mode:

**Mira enters the Room.**

In CPE mode:

**Cognitive Product Architect**

Outputs:

- Intent.
- Desired progress.
- User/human context.
- Primary cognitive task.
- Decision required.
- Initial assumptions.
- Success conditions.
- Prohibited assumptions.

User reviews and approves or edits.

---

# Step 4 — Evidence

Good Company:

**Echo joins.**

CPE:

**Evidence Analyst**

The system separates:

- Evidence.
- Claims.
- Assumptions.
- Unknowns.
- Contradictions.

The user may:

- Add evidence.
- Attach sources.
- Mark something as known.
- Mark something as assumption.
- Request more research.

---

# Step 5 — Independent Challenge

Good Company:

**Rook joins.**

CPE:

**Independent Critic**

Rook identifies:

- Most consequential unsupported assumption.
- Scope risk.
- Cognitive burden.
- Failure modes.
- Automation risk.
- Strongest counterargument.

Rook may recommend:

- Build.
- Research.
- Hold.
- Reject.
- Reframe.

Rook cannot approve the decision.

---

# Step 6 — Decision Board

The user sees:

## Decision

What needs to be decided?

## Recommendation

Current recommendation.

## Evidence

Supporting evidence.

## Confidence

Strong / Moderate / Weak / Conflicting / Insufficient.

## Unknowns

Unresolved issues.

## Challenge

Strongest opposing position.

## Options

Build / Research / Hold / Reject / Reframe.

## Authority

# This decision is yours.

The user chooses.

The decision is recorded.

---

# Step 7 — System Design

If approved to proceed:

Good Company:

**Atlas enters.**

CPE:

**Systems Architect**

Atlas creates:

- System boundaries.
- Core entities.
- States.
- User flow.
- Human/AI responsibilities.
- Permissions.
- Failure states.
- Recovery paths.
- Acceptance criteria.
- Build scope.

---

# Step 8 — Implementation Handoff

Good Company:

**Forge enters.**

CPE:

**Builder**

Forge produces an implementation-ready handoff containing:

- Approved problem.
- Required features.
- Explicit exclusions.
- Data requirements.
- Workflow.
- Acceptance criteria.
- Cognitive acceptance criteria.
- Technical acceptance criteria.
- Assumptions that must not be silently changed.
- Escalation rules.

This should be exportable as Markdown and JSON.

---

# Step 9 — Review

The system runs:

## Cognitive Review

Does the proposed build support the intended human task?

## Evidence Review

Are material recommendations supported?

## Critic Review

Do major assumptions or failure modes remain?

## Technical Review

Is the Build Plan internally consistent and implementation-ready?

The Human Owner receives a final approval state.

---

# Step 10 — Outcome Capture

After implementation or use, the user can return and record:

- Expected outcome.
- Observed outcome.
- Evidence.
- Unexpected behavior.
- Failures.
- User feedback.
- Technical findings.

---

# Step 11 — Learning

Echo / Evidence & Learning evaluates:

- What was supported.
- What was weakened.
- What was contradicted.
- What remains unknown.
- What should become Company Knowledge.
- What should remain only a candidate learning.

Human approval is required for consequential canonical updates.

---

# 5. Core Screens

V0.1 should include only the screens required to execute and evaluate this workflow.

## 5.1 Home

Shows:

- Start New Work.
- Active Rooms.
- Decisions requiring approval.
- Recent outcomes.
- Validation mode.

---

## 5.2 New Work

Contains:

- Raw request.
- Project title.
- Experimental arm.
- Human Owner.

---

## 5.3 The Room

Primary workspace.

Layout:

```text
-------------------------------------------------------
| Evidence / Context | Current Work | Team / Ownership |
|                    |              |                  |
| Sources            | Brief        | Mira             |
| Claims             | Decision     | Echo             |
| Unknowns           | Build Plan   | Rook             |
| History            | Artifact     | Atlas            |
|                    |              | Forge            |
-------------------------------------------------------
| State | Next Action | Approval Required | Handoff     |
-------------------------------------------------------
```

---

## 5.4 Decision Board

Dedicated structured decision interface.

---

## 5.5 Build Plan

Inspectable and exportable implementation contract.

---

## 5.6 Outcome Review

Expected vs observed results.

---

## 5.7 Learning Review

Candidate knowledge updates and corrections.

---

## 5.8 Validation Summary

Internal/research view.

Shows metrics across experimental arms.

---

# 6. Required V0.1 Objects

Implement:

- Company
- Human
- Colleague
- Skill
- Team
- Work
- Room
- Intent
- Evidence
- Claim
- Confidence
- Unknown
- Decision
- Approval
- Artifact
- Review
- Outcome
- Correction
- Company Knowledge
- Scenario
- Case
- Learning Objective
- Debrief
- Experiment
- Observation

Other architecture objects may remain simplified.

---

# 7. Required State Machine

```text
INTAKE
↓
FRAMING
↓
EVIDENCE
↓
CHALLENGE
↓
DECISION READY
↓
HUMAN DECISION
```

Human Decision branches:

```text
RESEARCH → EVIDENCE

REFRAME → FRAMING

HOLD → PAUSED

REJECT → CLOSED

BUILD → ARCHITECTURE
```

Then:

```text
ARCHITECTURE
↓
IMPLEMENTATION HANDOFF
↓
REVIEW
↓
APPROVED OUTPUT
↓
OBSERVE OUTCOME
↓
LEARNING REVIEW
↓
KNOWLEDGE UPDATE
↓
CLOSED
```

---

# 8. Evidence Model

Every material claim should support:

```text
Claim
↓
Evidence
↓
Source
↓
Evidence Quality
↓
Confidence
↓
Missing Evidence
↓
Contradictory Evidence
↓
Verification Status
```

Critical rule:

> **Failure to retrieve evidence must be represented as inability to observe, not as evidence of absence.**

---

# 9. Human Authority Model

V0.1 must enforce:

## AI may

- Ask.
- Organize.
- Retrieve.
- Analyze.
- Compare.
- Recommend.
- Draft.
- Challenge.
- Produce implementation contracts.

## Human must approve

- Material assumptions.
- Build / Hold / Reject / Research / Reframe decisions.
- Consequential scope changes.
- External irreversible action.
- Final output.
- Consequential learning updates.

No character may approve its own consequential work.

---

# 10. Character Layer

The Good Company arm adds:

- Character name.
- Portrait/avatar.
- Accent color.
- Role description.
- Core question.
- Communication style.
- Character entrance.
- Relationship cues.

Example:

> **Rook joined the Room.**  
> One assumption could materially change the decision.

Character presentation must not alter the underlying CPE output contract.

---

# 11. Character Comprehension Experiment

At completion of the framing/decision flow, ask:

### Who was responsible for defining the human problem?

### Who was responsible for evidence?

### Who challenged assumptions?

### Who could approve the decision?

### Who would design the system?

### Who would implement?

### Who should be involved next?

Record:

- Accuracy.
- Time to answer.
- User confidence.

Compare CPE vs Good Company.

---

# 12. Character Value Question

After a Good Company session:

> If the names, portraits and personalities were replaced with professional role labels, would the workflow be easier, harder, or unchanged to understand?

Follow with:

> Why?

Treat this as qualitative evidence.

Not proof.

---

# 13. Validation Cohort 01

## Size

5–10 real product decisions.

## Participant Type

Prefer:

- Founder.
- Product leader.
- Operator.
- AI-heavy builder.
- Innovation leader.

Participants should have a real build they are considering now.

Avoid purely hypothetical tasks where possible.

---

# 14. Cohort Procedure

For every case:

## Before Good Company

Capture:

- Raw original request.
- Expected feature set.
- Current assumptions.
- Intended architecture if known.
- Expected outcome.
- Confidence.
- Intended next action.

Freeze this artifact.

---

## Run Assigned Experimental Arm

Use:

- baseline
- cpe
- cpe_character

Where possible, distribute multiple cases across all three arms.

---

## After Session

Capture:

- Final problem definition.
- Features removed.
- Features added.
- Features changed.
- Architectural changes.
- Assumptions surfaced.
- Evidence gaps.
- Decision.
- User comprehension.
- Confidence.
- Intended next action.
- Build Plan quality.

---

## After Implementation

Capture:

- Clarification required.
- Scope drift.
- Rework.
- Acceptance criteria passed.
- Failure states.
- Outcome.
- User feedback.

---

## Return Behavior

Observe whether user voluntarily brings another project.

---

# 15. Core Validation Metrics

## Problem Definition Change

Did the understanding of the problem materially change?

---

## Assumptions Surfaced

Number and severity of consequential assumptions identified.

---

## Scope Impact

Features:

- Removed.
- Added.
- Changed.

---

## Architecture Impact

Did the system design materially change?

---

## Decision Impact

Did the user's chosen action change?

---

## Evidence Traceability

Can material recommendations be traced to evidence?

---

## Human Comprehension

Can the user explain:

- What is being built.
- Why.
- What remains uncertain.
- Who owns the decision.

---

## Implementation Readiness

Can an implementation agent proceed without significant clarification?

---

## Rework

How much implementation must be redone because of misunderstood scope or assumptions?

---

## Outcome Quality

Did the resulting product better achieve the intended outcome?

---

## Return Behavior

Did the user return with another consequential build?

---

# 16. Primary Success Signals

V0.1 becomes more credible if repeated cases demonstrate:

- Material assumptions surfaced before implementation.
- Meaningful feature reduction or change.
- Improved build-contract clarity.
- Lower clarification burden during implementation.
- Better comprehension.
- Traceable decisions.
- Improved recovery from errors.
- Return behavior.

---

# 17. Character-Layer Success Signals

The Good Company interface becomes more credible if:

- Users remember responsibilities more accurately.
- Users know who should be brought in next.
- Users distinguish recommendation from authority.
- Users understand limitations.
- Users demonstrate better trust calibration.
- Users prefer the character experience for future work.
- Return behavior increases without reduced decision quality.

---

# 18. Failure Signals

Challenge CPE if:

- It rarely changes decisions.
- It adds substantial time without reducing rework.
- Outputs remain too abstract for coding agents.
- Evidence requirements create excessive burden.
- Users prefer ordinary AI assistance.

Challenge the character layer if:

- Character identity distracts.
- Users confuse personality with authority.
- Role-label comprehension performs equally or better.
- Professional credibility drops.
- Characters increase false trust.
- Users remember characters but not responsibilities.

---

# 19. Kill Criteria

## Stop Good Company character development if

Repeated evidence shows the character layer creates no meaningful comprehension, adoption, or retention benefit.

CPE may continue without it.

---

## Change CPE if

The framework increases process burden without materially improving decisions.

---

## Narrow the market if

Only one user segment demonstrates repeated value.

---

## Expand investment if

Users:

- Return with additional projects.
- Embed Good Company before implementation.
- Share outputs internally.
- Show measurable decision/build improvements.
- Request persistent Company capability.

---

# 20. Story → Case → Room Test

Use:

# The Dashboard Nobody Needed

Track:

## Story View

Did the participant understand the pattern?

## Case Entry

Did they choose to participate?

## Case Completion

Did they complete a meaningful decision?

## Transfer

Did they identify a similar problem?

## Real Room

Did they bring real work into Good Company?

The key metric is:

# Case → Real Room Transfer

Not video views.

---

# 21. Reference Case Requirements

*The Dashboard Nobody Needed* should exercise:

- Intent framing.
- Human cognitive task.
- Evidence.
- Unsupported assumptions.
- Productive disagreement.
- Human decision.
- Reframe.
- Build Plan.
- Acceptance criteria.
- Outcome.
- Correction.
- Company Knowledge update.

This becomes the reference implementation for every major object.

---

# 22. Technical Architecture

Recommended logical services:

```text
Frontend
    ↓
Good Company API
    ↓
Work / Room Service
    ↓
CPE Workflow Engine
    ↓
Nexus Coordination
    ↓
Colleague Execution Layer
    ↓
Model Router
```

Supporting services:

```text
Evidence Store
Decision Store
Knowledge Store
Artifact Store
Evaluation Service
Experiment / Analytics Store
```

Models should remain replaceable.

---

# 23. Model Router

The product must not equate:

**Colleague = Model**

Instead:

```text
Colleague
↓
Skill
↓
Execution Requirements
↓
Model Router
↓
Selected Model / Tool
```

This preserves model independence.

---

# 24. Audit Trail

Every consequential event should record:

- Actor.
- Action.
- Object.
- Prior state.
- New state.
- Evidence.
- Authority.
- Timestamp.
- Experiment arm.

This is required for:

- DGT.
- Validation.
- Debugging.
- Learning.
- Future organizational use.

---

# 25. Analytics Events

Minimum events:

```text
work_created
arm_assigned
framing_started
framing_approved
evidence_added
claim_created
unknown_created
critic_review_completed
decision_presented
decision_approved
decision_reframed
build_plan_generated
build_plan_exported
review_completed
outcome_recorded
learning_proposed
learning_approved
story_viewed
case_started
case_completed
room_transfer_started
real_work_submitted
second_project_started
```

---

# 26. Experiment Record

Each Cohort 01 session must record:

```text
experiment:
  participant_id:
  work_id:
  arm:

  original_request:
  original_expected_scope:
  original_confidence:

  final_decision:
  final_scope:

  assumptions_surfaced:
  evidence_gaps:
  architecture_changes:

  comprehension:
  responsibility_comprehension:

  build_readiness:
  rework:

  outcome:
  return_behavior:

  qualitative_feedback:

  synthetic: false
```

No synthetic data may contribute to product conclusions.

---

# 27. Build Sequence

## Sprint 1 — Foundation

Build:

- Core data model.
- Company.
- Human Owner.
- Work.
- Room.
- Experiment assignment.
- Audit events.

---

## Sprint 2 — Cognitive Product Workflow

Build:

- Framing.
- Intent.
- Human Model.
- Cognitive Task.
- Claims.
- Unknowns.
- Evidence.

---

## Sprint 3 — Decision System

Build:

- Rook/Critic review.
- Decision Board.
- Build / Research / Hold / Reject / Reframe.
- Human approval.
- Decision history.

---

## Sprint 4 — Architecture & Handoff

Build:

- Atlas/System Architect output.
- Build Plan.
- Acceptance criteria.
- Forge/Builder handoff.
- Markdown/JSON export.

---

## Sprint 5 — Outcome & Learning

Build:

- Outcome capture.
- Correction.
- Candidate learning.
- Company Knowledge.
- Human learning approval.

---

## Sprint 6 — Experimental Arms

Implement:

- Baseline.
- CPE role-label version.
- Good Company character version.

Ensure the CPE logic remains identical between arms B and C.

---

## Sprint 7 — Reference Scenario

Integrate:

*The Dashboard Nobody Needed*

as:

- Story.
- Interactive Case.
- Room Template.
- Evaluation case.

---

## Sprint 8 — Validation Dashboard

Build:

- Cohort view.
- Case comparison.
- Arm comparison.
- PMF signals.
- Responsibility comprehension.
- Return behavior.

---

# 28. Deferred From V0.1

Do not build yet:

- Open character marketplace.
- Large custom Companies.
- Autonomous colleague creation.
- Advanced skill trees.
- XP systems.
- Team chemistry.
- Vertical healthcare workflows.
- Legal workflows.
- Public scenario marketplace.
- Automated story video generation.
- Complex memory.
- Broad tool execution.
- Full enterprise governance.
- Fine-tuning pipelines.

---

# 29. Definition of Done

V0.1 is complete when:

1. A participant can submit a real product idea.
2. The idea can move through the full governed workflow.
3. The Human Owner must explicitly approve consequential decisions.
4. Evidence and claims remain inspectable.
5. The system can produce a usable Build Plan.
6. The Build Plan can be exported.
7. Outcome and learning can be recorded.
8. The system supports all three experimental arms.
9. Character identity is isolated from underlying CPE logic.
10. The Dashboard Nobody Needed runs end-to-end.
11. Validation metrics are captured.
12. Real Cohort 01 sessions can be recorded without manual reconstruction.

---

# 30. Immediate Build Priority

The first technical milestone should not be the character interface.

It should be:

# A functional Room that can persist one complete governed decision.

Specifically:

```text
Raw Request
↓
Intent
↓
Assumptions
↓
Evidence
↓
Unknowns
↓
Critic Challenge
↓
Human Decision
↓
Build Plan
```

Once this is stable, add the visual ensemble layer.

This reduces the risk of designing an attractive Good Company experience before proving the operating system.

---

# 31. Final Build Principle

# Prove the engine.

Then:

# Prove the ensemble.

Then:

# Prove the story-to-work transfer.

Then:

# Build the Company.

The objective of V0.1 is not to demonstrate everything Good Company might eventually become.

The objective is to create enough of the real system that the market can begin telling us what Good Company deserves to become.
