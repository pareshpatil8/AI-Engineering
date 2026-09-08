# Company architecture and governance framework v1.0

Document ID: AICOE-FINAL-GOV. Date: 2026-09-05.

Status: **Finalized requirements specification for implementation planning.** This consolidates the recorded council reviews under the owner's instruction to produce final artifacts. It is not evidence of implemented controls, owner adoption of operational delegations, professional assurance, certification, or runtime qualification. Previous models reviewed earlier inputs; they have not reviewed this new version. Operational adoption must record the accountable people, delegations, applicable contracts and evidence; no filename or agent can manufacture that authority.

## 1. Architecture decision and full release scope

The company shall use an independent governance and assurance control plane with replaceable model, harness and tool adapters. Paperclip, Gstack, ECC and future harnesses are execution integrations; company identity, authority, policy, tenancy, evidence and lifecycle state remain under the control plane. This is the final architecture direction for requirements planning.

The full single external MVP retains the artifact factory, company operating platform, product and software-service delivery, cybersecurity services, QA services, production operations, customer support and voice capabilities, and the regulated banking/payment AI and tokenization capabilities requested by the owner. Internal development waves sequence dependencies without reducing this release scope. India is the first jurisdiction. Self-hosted, private-cloud and public-cloud deployments remain in scope, with supported configurations explicitly enumerated and separately tested. Any additional offline/air-gapped commitment needs a declared profile; model availability must match that profile.

```text
Owner / customer / accountable officers / external reviewers
                         |
Identity + authority + tenant + policy + approval gates
                         |
Governance control plane and versioned registries
Workflow | task ledger | evidence | audit | qualification | cost
                         |
Canonical task/result/event/decision contracts
                         |
Harness / model / MCP / tool / language-profile adapters
                         |
Tenant-isolated workers and service modules
                         |
Deterministic product, CI/CD, security, QA and operations systems
```

| Module boundary | Responsibilities | Required separation |
| --- | --- | --- |
| Artifact factory | Author, review, evaluate, publish and retire roles, skills, policies and standards mappings | Author cannot alter hidden evaluations or issue their own independent approval |
| Governance plane | Identity, policy decisions, authority, qualifications, evidence, audit, workflow and budgets | Executing workers cannot grant privileges or rewrite governing records |
| Commercial/company operations | Lead research, founder handoff, proposals, contracts, delivery, finance, people and supplier operations | Research is distinct from authorization to contact, contract, spend or certify |
| Product engineering | Java, Angular, PL/SQL and extensible qualified technology profiles; SDLC and release | Product runtime and source are isolated from company administration |
| Cybersecurity service | Authorized SAST, DAST, SCA/SBOM, VAPT, API testing, advisory impact and remediation verification | Customer authorization, target/window limits and separate finding closure |
| QA service | Functional, automation, performance, accessibility, test design, evidence and reporting | Independent oracles and controlled test data; author cannot redefine pass criteria |
| Production/support service | Monitoring, incident response, approved remediation, support and voice workflows | Environment-scoped permissions, escalation and bounded customer commitments |
| Banking/payment and AI modules | ISO 20022/SWIFT profiles, fraud/AML, customer assistance, cheque processing, KYC/asset tokenization | Use-case applicability, deterministic money integrity, model validation and action authority |

## 2. Normative requirements and acceptance contracts

Every requirement below is normative for the specification. Acceptance evidence remains to be produced during implementation. Role names identify accountable functions; appointments and conflict checks are operational records. All gates must have a scoped owner, independent reviewer where required, test oracle, artifact/dependency hashes, supported profile and evidence retention rule before execution qualification.

### Authority and organizational governance

| ID | Requirement | Acceptance obligation |
| --- | --- | --- |
| FGOV-001 | Maintain a version/hash-bound authority and supersession ledger for requirements, policies, decisions and operational delegations. Resolve applicable binding obligations and contracts before company policy; agents cannot override governing constraints. Conflicts requiring interpretation route to the accountable authority. | Conflicting versions, forged approval labels and ambiguous source IDs cannot authorize an action. |
| FGOV-002 | Represent role mandate, proficiency level, staffing position, actor identity, capability eligibility and permission grant separately. AI, human and hybrid assignments use the same role contract while preserving human-only offices. | One actor may perform compatible roles; incompatible self-review and impersonated professional status are denied. |
| FGOV-003 | Required organizational independence must resolve to real, qualified, non-conflicted people or authorized external assessors when the obligation requires it. Model diversity, separate sessions or keys do not meet this requirement. | A vacant office or the same person behind multiple identities blocks the relevant independent gate. |
| FGOV-004 | Delegate bounded low-risk work through explicit action/tenant/environment/time/budget scopes. Reserve legal commitments, required independent sign-offs, sensitive exports, production changes and final regulated dispositions to the authority required by the applicable policy. | A delegated workflow proceeds without unnecessary per-step approval; escalation triggers and absent/expired delegations fail closed. |
| FGOV-005 | Record self-approval truthfully wherever permitted; propagate its provenance into dependent evidence. Prohibit overrides of illegal activity, falsified evidence, contractual independence, unauthorized access or removal of required audit. | Separate-key self-approval is detectable; prohibited overrides remain denied even for the founder. |
| FGOV-006 | Separate skills, policies, standards, controls, tools, workflows and qualification records into typed namespaces. A skill provides instructions and never confers permission. | Wrong-type references, dangling IDs and a skill requesting elevated credentials fail validation/authorization. |

### Enforced control plane and canonical interfaces

| ID | Requirement | Acceptance obligation |
| --- | --- | --- |
| FGOV-007 | Evaluate policy outside the executing model and enforce at tool gateway, secrets, data access, workflow transition, artifact publication and deployment boundaries. Decisions are permit, deny, require approval or require evidence, with reason and obligation IDs. | Prompt changes, direct adapter calls and misleading tool metadata cannot bypass enforcement. |
| FGOV-008 | Bind approvals to tenant, actor, action, candidate and dependency closure, target environment, conditions, expiry and use limits. Re-evaluate immediately before the side effect. | Replay, changed candidate/dependency, revoked role and expired authority are rejected. |
| FGOV-009 | Version canonical Task, Result, Event and Decision schemas and negotiate supported versions. Mandatory common fields include ID/type/version, tenant/project, actor/assumed role, correlation/causation, timestamp, payload/evidence hashes and applicable policy versions. | Old/unsupported schemas, malformed payloads and forged tenant/actor fields fail conformance tests. |
| FGOV-010 | Task contracts additionally carry objective, acceptance criteria, dependencies, permissions, resource budget, deadline, idempotency key and required qualifications. Results carry status, produced artifact hashes, tests, uncertainty, unresolved findings and next authorized state. | Incomplete work cannot report completion; model narrative cannot substitute for objective gate evidence. |
| FGOV-011 | Registries maintain immutable released versions, lifecycle states, owners, licenses/source rights, dependencies and change history. Generated harness/role projections reference canonical records. | A projection drift or mutable released artifact is detected; dependency change invalidates affected evidence. |
| FGOV-012 | MCP/API discovery, read and execution permissions are distinct. Authenticate and authorize each invocation; constrain egress, arguments, data volume, tool versions and resource consumption. | Forged identity, cross-tenant requests, expired scan windows, injection and unsafe execution arguments fail negative tests. |

### Routing, reasoning and model qualification

Route each request through authenticated tenant and intent classification, risk and role resolution, authorization, minimal skill dependency closure, compatible qualified provider selection, independent reviewer allocation, deterministic validation, ambiguity review and required human decision, then a signed result. Routing records must explain inclusions, exclusions and fallback choices.

| ID | Requirement | Acceptance obligation |
| --- | --- | --- |
| FGOV-013 | Select models by evidence for the task/domain/risk class; never permanently reserve CEO, security or reviewer roles for a brand. | Candidate selection is reproducible from qualification and policy records; brand preference cannot bypass required capabilities. |
| FGOV-014 | Qualify the provider/model identifier, configuration, prompt/skill composition, harness/adapter, tools, policy, language profile and environment tuple with expiry and change triggers. Silent/unpinnable provider updates trigger defined monitoring and requalification. | Parsing compatibility alone cannot pass behavior qualification; unsupported tuples cannot inherit a different tuple's pass. |
| FGOV-015 | Compose core and conditional skills within an evaluated context budget and conflict graph. Load dependencies progressively; record selected versions and prohibited combinations. | Wrong-skill activation, contradictory instructions, unauthorized self-review and context dilution are tested. No arbitrary universal maximum skill count is imposed. |
| FGOV-016 | Council review starts from frozen inputs with independently produced opinions. Store claims, cited evidence, assumptions, uncertainty, dissent, proposed falsifiers and adjudication; do not request hidden chain-of-thought. | A decision can be replayed to its evidence; missing or fabricated citations and lost dissent are detected. |
| FGOV-017 | Council majority never creates authority or overrides deterministic failure. Resolve disagreement using an independent oracle, authoritative source or qualified human/domain decision. | A unanimous unsafe recommendation remains blocked; same-model runs are not misreported as independent providers. |
| FGOV-018 | Rate limits, budget exhaustion and provider outages use bounded retries, backoff, checkpointing and only policy-qualified fallback. | No unavailable model is fabricated; no quota wait is marked completion; fallback cannot export prohibited data. |

### Tenancy, scale, deployment and recovery

| ID | Requirement | Acceptance obligation |
| --- | --- | --- |
| FGOV-019 | Multitenancy is present from the first baseline: authenticated tenant claims propagate through tasks, tools, storage, caches, search, logs, model context, backups and support operations. | Cross-tenant negative tests cover each surface, including background jobs and generated reports. |
| FGOV-020 | Define shared and dedicated isolation profiles against explicit threat models. Apply least privilege, tenant-scoped secrets/keys, egress controls, resource quotas and timed support access. | Noisy-neighbor and side-channel tests meet declared bounds; residual risks are recorded instead of claiming zero timing inference universally. |
| FGOV-021 | Scale stateless services/workers horizontally and bounded resources vertically; partition durable state and queues with tenant fairness, leases, fencing and backpressure. | Load, saturation, failover and starvation tests demonstrate the approved workload envelope without weakening integrity. |
| FGOV-022 | Qualify each advertised self-hosted/private/public-cloud deployment profile and declare cloud, database, network and model dependencies. PL/SQL is allowed behind explicit ports and parity/contract tests. | Unsupported portability claims fail release review; Oracle-specific logic is not silently presented as database-neutral. |
| FGOV-023 | Preserve durable task checkpoints, actor leases, candidate hashes, completed/pending steps, approvals, costs, external operation IDs and recovery cursors. | Crash, restart, sleep, network loss and quota recovery resume from a verified checkpoint without redoing completed irreversible effects. |
| FGOV-024 | Use idempotent business operations, transactional handoff/outbox or equivalent recovery controls, and reconciliation for unknown external outcomes. | Duplicate delivery, crash after commit and ambiguous timeout tests preserve business invariants; do not claim globally exactly-once message delivery. |
| FGOV-025 | Define recovery objectives, backup isolation, restoration tests, degraded states and required on-call coverage by service profile. | Recovery and data integrity are independently demonstrated; a single local computer is not advertised as continuous high availability. |

### Audit, evidence and dashboard

| ID | Requirement | Acceptance obligation |
| --- | --- | --- |
| FGOV-026 | Audit all material company events: identity/role changes, policy decisions, model/tool invocations, data/secret access metadata, artifacts, tests, approvals, denials, external effects, exceptions, incidents, billing and recovery. Record ordered per-stream sequence, source identity and correlation. | Reconcile expected boundary events against audit ingestion; dropped, duplicated, out-of-order or missing events produce visible integrity findings. |
| FGOV-027 | Protect append-only events with signatures/hash linking, independently protected retention and periodic external anchoring. Separate log administration from business authority and protect signing keys. | Tampering, truncation, fabricated sequence and anchor mismatch are detected. Hash chaining alone is not called immutable or complete. |
| FGOV-028 | Durably record authorization/intent before governed side effects and reconcile outcomes afterward. An unavailable required audit sink prevents new governed mutations; in-flight outcome ambiguity is explicitly recorded and recovered. | Simulated audit outage and commit/log races cannot produce a falsely complete audit trail. |
| FGOV-029 | Keep sensitive payloads outside immutable event bodies in separately access-controlled stores. Minimize event metadata; never log secrets. Use retention schedules and lawful deletion/crypto-erasure procedures while preserving permitted integrity metadata and deletion events. | Privacy export/deletion, key access and retention expiry tests verify behavior; hashing personal data is not assumed to anonymize it. |
| FGOV-030 | Evidence binds candidate/dependencies, fixtures/oracle/tool versions, model identity, execution environment, actor, timestamp, outcome and reviewer. Preserve failures and overrides. | Reusing stale evidence after a relevant change fails the impact rule; author cannot modify independent evidence. |
| FGOV-031 | Dashboard presents governance state, owners/vacancies, approvals, denied actions, risk, qualification, evidence gaps, audit health, tenants, tasks, incidents, cost, capacity and service SLOs with drilldown and freshness. | Values reconcile to underlying records; stale/unavailable sources remain visible, not green or zero. |
| FGOV-032 | Dashboard separates release scope, validated, exercised, enabled and supported status; forecasts from observations; money metrics from agent throughput; estimated from actual cost. | Inert scoped modules cannot make the whole MVP appear ready; revenue/ARR/bookings and valuation are never conflated. |

### Product safety, service governance and controlled learning

| ID | Requirement | Acceptance obligation |
| --- | --- | --- |
| FGOV-033 | Keep monetary authorization, precision, ledger posting, idempotency, reconciliation and transaction state invariants under deterministic controls. AI may advise or trigger bounded preauthorized workflows through these controls, never bypass them. | Independent financial oracles verify duplicate/replay/crash/failover and precision cases; model outage cannot change monetary truth. |
| FGOV-034 | Fraud, AML, cheque, customer-assistance and tokenization AI each require intended purpose, permitted data, error costs, independent labels, thresholds, explanation, drift monitoring, fallback and final-action authority. | Use-case false acceptance/rejection and abuse cases pass domain-specific gates; generic chatbot accuracy is insufficient. |
| FGOV-035 | Tokenized KYC/assets and regulated/network integrations remain full MVP scope, with exact legal, contractual and technical applicability established before enabled use. | Missing applicability or acceptance remains a release blocker where required by the agreed release outcome; an inert feature is not silently counted as delivered. |
| FGOV-036 | QA/security services enforce customer-approved target/data scope, scan windows, safe techniques, evidence/report rights, independent closure and tenant retention/exit. Advisory impact uses inventory and feed freshness plus deployed exposure. | Stale inventory/feed cannot yield a clean bill of health; ambiguous vulnerability matches remain unknown/possibly affected with reasons. |
| FGOV-037 | Lead generation uses permitted sources and records evidence of interest, provenance and founder handoff. Contracts, outreach, pricing commitments, invoicing and client acceptance follow their authorized workflow. | Fabricated leads, unauthorized sends and code completion cannot advance contract acceptance or payment status. |
| FGOV-038 | Feedback creates versioned change proposals with provenance, tenant reuse rights, impact analysis, independent tests/review, release authorization, staged deployment and rollback. | Poisoned/confidential feedback, acceptance weakening and failing regressions block promotion; agents cannot self-modify production policy. |
| FGOV-039 | Break-glass is scoped, time-bound, reasoned, recorded and reviewed with compensating controls and revocation. Non-overridable prohibitions remain active. | Emergency access expires; misuse alerts and follow-up evidence are mandatory; no fabricated independent sign-off is possible. |
| FGOV-040 | Measure accepted throughput, escaped defects, false acceptance, rework, human effort, cost, lead time and control effectiveness with stable denominators. Use controlled causal improvement and baselines. | CMMI-inspired practices are evidenced; no maturity-level certification claim is generated without the applicable appraisal. |

## 3. Release and qualification state machine

Artifact lifecycle: draft → reviewed → specification-final → operationally-adopted → qualified → enabled → deprecated/withdrawn. These are separate dimensions where appropriate: a finalized specification can be unimplemented; an implemented artifact can be unqualified. The original source versions remain available as history.

The release manifest shall enumerate every required outcome and supported profile. The whole MVP cannot release as complete while a required module, deployment profile, test, authority or external acceptance remains unresolved. A two-week bounded ISO 20022 product target means a production-deployable software release for a named profile; it does not automatically mean bank/scheme go-live. Entry prerequisites, independent review capacity and a measured production-intent trial determine the schedule. Previous council probabilities and financial scenarios are not acceptance thresholds.

## 4. Source precedence and traceability

This framework consolidates the architecture/governance decisions from [council synthesis](../model-council/synthesis/Proposed_Council_Synthesis_v0.1.md), [Claude cross-review](../model-council/deliberations/Claude_Cross_Review_v0.1.md), [Gemini opinion](../model-council/opinions/Gemini_Independent_Opinion_v0.1.md), [GLM opinion](../model-council/opinions/GLM_Independent_Opinion_v0.1.md) and [requirements amendments](../reviews/AI_Agent_Company_Requirements_Amendments_v0.1.md). Their adjudication is recorded in [Review Disposition](Review_Disposition_v1.0.md).

The 545-requirement baseline and other original source IDs are retained as source requirements; this document does not erase them or claim exhaustive semantic reconciliation. Where this framework explicitly corrects an earlier proposition, use the disposition as the planning decision. Unresolved source conflicts must be logged before dependent implementation. The companion catalogs define role, skill, policy and standards detail; their identifiers must not be guessed or joined by display title.
