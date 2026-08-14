# Good Company

## System Map v0.1

**Status:** Companion to Product Brief v0.1 and Build Plan v0.1

**Purpose:** Show how stories, simulations, governed work, execution, evidence, and learning share one underlying system.

---

# 1. Reading This Map

This document separates:

- **Current V0.1 implementation:** behavior confirmed in the repository now.
- **V0.1 build target:** behavior required by the Build Plan.
- **Product direction:** the broader Good Company and Good Company Studios architecture.

Planned services and product layers are not claims of implemented capability.

---

# 2. Top-Level System Map

~~~mermaid
flowchart TD
    H["Human Owner"]

    subgraph Surfaces["Product and Media Surfaces"]
        Story["Company Story"]
        Case["Company Case"]
        Room["Company Room"]
        Builder["Company Builder"]
        Studios["Good Company Studios"]
    end

    subgraph Engines["Four Product Engines"]
        Narrative["Narrative Simulation Engine"]
        Expertise["Expertise Translation Engine"]
        Ensemble["Ensemble Work Engine"]
        EvidenceLearning["Evidence and Learning Engine"]
    end

    CPE["Cognitive Product Engineering Workflow"]
    Governance["DGT Governance and Authority"]
    Objects["Canonical Good Company Objects"]
    Runtime["Colleague Execution Layer"]
    Router["Model Router"]
    Models["Replaceable Models and Tools"]

    H --> Story
    H --> Case
    H --> Room
    H --> Builder
    H --> Studios

    Story --> Narrative
    Case --> Narrative
    Studios --> Narrative
    Builder --> Expertise
    Room --> Ensemble

    Narrative <--> Objects
    Expertise <--> Objects
    Ensemble <--> Objects
    EvidenceLearning <--> Objects

    Narrative --> EvidenceLearning
    Expertise --> EvidenceLearning
    Ensemble --> EvidenceLearning

    Objects --> CPE
    CPE --> Governance
    Governance --> Runtime
    Runtime --> Router
    Router --> Models
~~~

The story, case, and live Room are different renderings and interaction modes over the same governed object model.

---

# 3. Product Stack

~~~text
Good Company
Human-facing product and world
↓
Cognitive Product Engineering
Method for allocating thinking and responsibility
↓
DGT Operating Standard
Digital + Governed + Trustworthy
↓
Skills
Reusable intellectual and operational procedures
↓
Colleagues
Specialized identities that wield skills
↓
Teams
Humans and digital colleagues assembled around work
↓
Rooms
Persistent environments for evidence, decisions, and action
↓
Outcomes
What happened after a decision or execution
↓
Company Learning
What knowledge, behavior, or capability should change
~~~

---

# 4. The Four Engines

## 4.1 Expertise Translation Engine

Turns human expertise into governed AI capability.

It defines:

- Role purpose.
- Excellent judgment.
- Trusted evidence.
- Skills and procedures.
- Tools.
- Permissions.
- Escalation rules.
- Failure recognition.
- Evaluation criteria.

Primary product surface: **Company Builder**

## 4.2 Ensemble Work Engine

Brings the right humans and colleagues into work at the right time.

It manages:

- Team composition.
- Responsibility.
- Workflow state.
- Handoffs.
- Evidence requirements.
- Independent review.
- Human approval.
- Execution boundaries.

Primary product surface: **Company Room**

## 4.3 Evidence and Learning Engine

Connects work to what the Company should believe and do in the future.

It manages:

- Evidence.
- Claims.
- Confidence.
- Unknowns.
- Contradictions.
- Decisions.
- Predictions.
- Outcomes.
- Corrections.
- Company Knowledge.
- Colleague evaluations.

Primary product surfaces: **Room, Outcome Review, Learning Review**

## 4.4 Narrative Simulation Engine

Converts governed work into stories, cases, simulations, and learning experiences.

It consumes the same underlying objects used by live work:

- Human problem.
- Colleagues and responsibilities.
- Skills.
- Evidence and claims.
- Assumptions and unknowns.
- Decisions and authority.
- Events and actions.
- Outcomes and corrections.

It can render:

- A short clip.
- A full episode.
- An interactive case.
- A guided walkthrough.
- A training case.
- A Room template.
- A facilitator version.
- An evaluation.
- An organizational learning artifact.

Primary product surfaces: **Company Story, Company Case, Good Company Studios**

---

# 5. Canonical Object Model

~~~mermaid
flowchart LR
    Company["Company"] --> Colleague["Colleague"]
    Company --> Knowledge["Company Knowledge"]
    Human["Human Owner"] --> Team["Team"]
    Colleague --> Team
    Colleague --> Skill["Skill"]
    Team --> Work["Work"]
    Work --> Room["Room"]
    Room --> Intent["Intent"]
    Room --> Evidence["Evidence"]
    Evidence --> Claim["Claim"]
    Claim --> Confidence["Confidence"]
    Room --> Unknown["Unknown"]
    Room --> Decision["Decision"]
    Decision --> Approval["Human Approval"]
    Approval --> Artifact["Artifact / Build Plan"]
    Artifact --> Review["Review"]
    Review --> Outcome["Outcome"]
    Outcome --> Correction["Correction"]
    Correction --> Knowledge
    Scenario["Scenario"] --> Case["Case"]
    Scenario --> Room
    Scenario --> Story["Story Rendering"]
    Case --> Observation["Observation"]
    Observation --> Experiment["Experiment"]
~~~

Required Build Plan objects:

- Company.
- Human.
- Colleague.
- Skill.
- Team.
- Work.
- Room.
- Intent.
- Evidence.
- Claim.
- Confidence.
- Unknown.
- Decision.
- Approval.
- Artifact.
- Review.
- Outcome.
- Correction.
- Company Knowledge.
- Scenario.
- Case.
- Learning Objective.
- Debrief.
- Experiment.
- Observation.

The current application simplifies this model into one local Room execution record.

---

# 6. Scenario Anatomy

A scenario begins as a structured object, not a video script.

~~~mermaid
flowchart TD
    Situation["Human Situation"] --> Progress["Desired Progress"]
    Progress --> Request["Initial Request"]
    Request --> Cast["Characters and Responsibilities"]
    Cast --> Available["Available Evidence"]
    Available --> Hidden["Hidden Evidence"]
    Hidden --> Assumptions["Assumptions"]
    Assumptions --> Unknowns["Unknowns"]
    Unknowns --> Stakes["Stakes"]
    Stakes --> Events["Triggering Events"]
    Events --> Decisions["Decision Points"]
    Decisions --> Authority["Authority Boundaries"]
    Authority --> Actions["Possible Actions"]
    Actions --> Consequences["Consequences"]
    Consequences --> Outcome["Observed Outcome"]
    Outcome --> Debrief["Debrief"]
    Debrief --> Transfer["Transfer to the User's Work"]
~~~

The canonical scenario should include:

- Stable object identifiers.
- The untouched initial request.
- Cast and responsibility contracts.
- Public and hidden evidence.
- Claims and confidence.
- Assumptions and unknowns.
- Decision options.
- Authority and approval rules.
- Branch conditions.
- Consequences.
- Predicted and observed outcomes.
- Corrections.
- Learning objectives and debrief.

---

# 7. One Scenario, Multiple Experiences

~~~mermaid
flowchart LR
    Scenario["Canonical Scenario"]
    Scenario --> Clip["60-second Clip"]
    Scenario --> Episode["5–10 Minute Episode"]
    Scenario --> Interactive["Interactive Case"]
    Scenario --> BuildAlong["Build-along"]
    Scenario --> Template["Room Template"]
    Scenario --> Facilitator["Facilitator Version"]
    Scenario --> Evaluation["Evaluation Version"]
    Scenario --> Debrief["Debrief"]
~~~

| Rendering | Function |
|---|---|
| 60-second clip | Spark curiosity. |
| 5–10 minute episode | Demonstrate the full reasoning pattern. |
| Interactive case | Let the user make decisions. |
| Build-along | Teach the method step by step. |
| Room template | Transfer the method to real work. |
| Facilitator version | Support teams and classrooms. |
| Evaluation version | Test a colleague or human learner. |
| Debrief | Capture lessons, outcomes, and transfer. |

The same Mira, evidence rules, authority boundaries, and decision model must apply across renderings.

---

# 8. Governed Work State

## Current repository implementation

The current local-first Room exposes four states:

~~~text
frame → evidence → decide → learn
~~~

Its confirmed decision options are:

~~~text
build | research | hold | reject | reframe
~~~

## V0.1 build target

~~~mermaid
stateDiagram-v2
    [*] --> Intake
    Intake --> Framing
    Framing --> Evidence
    Evidence --> Challenge
    Challenge --> DecisionReady
    DecisionReady --> HumanDecision

    HumanDecision --> Evidence: Research
    HumanDecision --> Framing: Reframe
    HumanDecision --> Paused: Hold
    HumanDecision --> Closed: Reject
    HumanDecision --> Architecture: Build

    Architecture --> ImplementationHandoff
    ImplementationHandoff --> Review
    Review --> ApprovedOutput
    ApprovedOutput --> ObserveOutcome
    ObserveOutcome --> LearningReview
    LearningReview --> KnowledgeUpdate
    KnowledgeUpdate --> Closed
~~~

The expanded state machine is a build target, not a description of the current four-state UI.

---

# 9. Responsibility and Authority

~~~mermaid
sequenceDiagram
    participant H as Human Owner
    participant N as Nexus
    participant M as Mira
    participant E as Echo
    participant R as Rook
    participant A as Atlas
    participant F as Forge

    H->>N: Submit raw request
    N->>M: Route framing
    M->>H: Present intent and assumptions
    H-->>M: Approve or edit framing
    M->>E: Request evidence review
    E->>R: Surface claims and unknowns
    R->>H: Present challenge and options
    H-->>N: Make consequential decision
    N->>A: Route approved scope
    A->>H: Present architecture and tradeoffs
    H-->>A: Approve build contract
    A->>F: Hand off approved Build Plan
    F->>H: Return implementation for review
    H-->>E: Record observed outcome
    E->>H: Propose corrective learning
    H-->>E: Approve or reject knowledge update
~~~

Authority rules:

- Colleagues may recommend.
- Forge may execute approved, reversible scope.
- Nexus may coordinate but not grant authority.
- Rook may require that disagreement be surfaced but may not overrule the Human Owner.
- No colleague may approve its own consequential work.
- The Human Owner approves decisions, material scope changes, irreversible action, final output, and consequential knowledge updates.

---

# 10. Logical Service Map

~~~mermaid
flowchart TD
    Frontend["Frontend"]
    API["Good Company API"]
    RoomService["Work / Room Service"]
    CPE["CPE Workflow Engine"]
    Nexus["Nexus Coordination"]
    Execution["Colleague Execution Layer"]
    Router["Model Router"]

    Frontend --> API
    API --> RoomService
    RoomService --> CPE
    CPE --> Nexus
    Nexus --> Execution
    Execution --> Router

    RoomService --> EvidenceStore["Evidence Store"]
    RoomService --> DecisionStore["Decision Store"]
    RoomService --> ArtifactStore["Artifact Store"]
    CPE --> Evaluation["Evaluation Service"]
    CPE --> Experiment["Experiment / Analytics Store"]
    EvidenceStore --> KnowledgeStore["Knowledge Store"]
~~~

This is the recommended logical architecture from the Build Plan. The current repository does not implement these network services.

---

# 11. Persistence and Sources of Truth

## Current V0.1 implementation

- The Room object is the local execution record.
- Presentation derives from Room state.
- Browser local storage provides persistence.
- Evidence types are source, observation, and assumption.
- The application does not call an AI model.
- The application does not execute external work.
- Local storage is not a production Company Knowledge store.

## V0.1 build target

- Original request is immutable.
- Material claims link to inspectable evidence.
- Decisions and approvals are separate records.
- Outcomes link back to predictions and decisions.
- Learning updates retain provenance and human approval.
- Experiment records identify the assigned arm.
- Consequential events create an audit trail.

## Product direction

- Evidence Store.
- Decision Store.
- Knowledge Store.
- Artifact Store.
- Scenario Store.
- Evaluation Service.
- Experiment and Analytics Store.

---

# 12. Model Independence

The product must not equate a colleague with a model.

~~~mermaid
flowchart LR
    Colleague["Colleague Contract"] --> Skill["Skill"]
    Skill --> Requirements["Execution Requirements"]
    Requirements --> Router["Model Router"]
    Router --> Model["Selected Model"]
    Router --> Tool["Selected Tool"]
    Model --> Evaluation["Evaluation"]
    Tool --> Evaluation
    Evaluation --> History["Colleague Work History"]
~~~

The colleague’s role, authority, skills, evidence standards, evaluation, and history persist even when the selected model or tool changes.

---

# 13. Experimental Arm Isolation

~~~mermaid
flowchart TD
    Case["Canonical Work / Case"]
    Case --> Baseline["Baseline Renderer"]
    Case --> CPE["CPE Role-label Renderer"]
    Case --> Character["Good Company Character Renderer"]

    CPE --> Shared["Shared CPE Contracts and Decision Rules"]
    Character --> Shared
    Shared --> Evaluation["Common Evaluation System"]
    Baseline --> Evaluation
~~~

The CPE and Good Company arms share:

- Workflow.
- Evidence standards.
- Authority.
- Permissions.
- Decision rules.
- Evaluation criteria.

Only the presentation and identity layer may differ.

---

# 14. Audit and Analytics

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

Minimum transfer and validation events include:

~~~text
story_viewed
case_started
case_completed
room_transfer_started
real_work_submitted
work_created
arm_assigned
framing_approved
evidence_added
critic_review_completed
decision_presented
decision_approved
build_plan_generated
build_plan_exported
outcome_recorded
learning_proposed
learning_approved
second_project_started
~~~

Synthetic or fictional observations must be marked and excluded from product conclusions.

---

# 15. System Boundaries

## Confirmed current boundary

- One local Room.
- Six founding colleagues.
- Four primary workflow states.
- Explicit human approval.
- Local outcome and learning record.
- No authentication.
- No remote database.
- No model calls.
- No connectors or external actions.

## V0.1 build boundary

- One complete governed decision.
- Three experimental arms.
- One canonical reference scenario.
- Story → Case → Room transfer tracking.
- Build Plan export.
- Outcome and learning capture.
- Validation records that do not require manual reconstruction.

## Deferred

- Open colleague or scenario marketplaces.
- Autonomous colleague creation.
- Large organization-wide Companies.
- Broad external execution.
- Complex memory.
- Automated story-video generation.
- Full enterprise governance.
- Fine-tuning pipelines.

---

# 16. Companion Artifacts

- [Product Brief](./PRODUCT_BRIEF.md)
- [Build Plan](./BUILD_PLAN.md)
- [Product Contract](./PRODUCT_CONTRACT.md)
- [System Contract](./SYSTEM_CONTRACT.md)
- [Canonical Reference Case](../cases/dashboard-nobody-needed.case.json)
