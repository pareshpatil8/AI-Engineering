# Provider-Neutral Role Model v1.0

Document ID: AICOE-ROLE-MODEL-001. Date: 2026-09-05. Status: requirements baseline prepared for owner acceptance; not runtime-qualified or staffed by this document. Scope: the complete requested company and single external MVP.

## 1. Purpose and authority

This contract defines how a company position can be performed by an AI agent, a human, or a hybrid team. The role describes the business work and its accountability; the assignment describes who performs that work. A skill is a reusable procedure, a capability package groups related procedures, and a permission is a separately issued authorization. None substitutes for another.

The 267 existing role IDs are preserved as the reference organization. They are neither a staffing requirement nor a claim that every company needs every position. Tenants select, alias, specialize and add positions within this contract. The 95 package IDs remain taxonomy and eligibility references, not a fixed atomic-skill count. Historical 578-item inventory entries are source candidates only.

The original matrix is the source inventory: [Role and Skill Matrix v0.1](../requirements/AI_Engineering_COE_Role_Skill_Matrix_v0.1.md). Use the [Corrected Role Matrix v1.0](Role_Matrix_v1.0.md) and [machine-readable eligibility mapping](Role_Skill_Mapping_v1.0.json) for current rows. This document supersedes the original matrix's ambiguous independence language, duplicate-role boundaries and erroneous owner-role references. No title grants a natural person, model or agent statutory office or credentials. The eligibility mapping is a projection of the inventory, not a populated set of all mandatory role-contract fields or tenant assignments described below.

## 2. Role contract schema

Each released role contract shall contain the following typed fields. An empty mandatory field prevents assignment; `not_applicable` requires a recorded reason. References resolve to immutable versions and content hashes.

| Field | Required content and validation |
|---|---|
| `role_id`, `version`, `name`, `aliases` | Stable unique role ID; semantic version; canonical title; aliases resolve to this ID and do not create permissions. |
| `purpose`, `outcomes`, `responsibilities` | Bounded business purpose; measurable deliverables; explicit tasks and non-goals. |
| `band`, `support_tier`, `function` | B0/E1/H2/M3/S4/P5/A6 career band; L1/L2/L3 operational tier only where applicable; organizational function. Seniority is not an authorization level. |
| `reporting`, `decision_rights` | Accountable owner and escalation relationship; each decision maps responsible, accountable, consulted, informed, recommender, reviewer and approver duties. |
| `assignment_modes` | Any of `human`, `agent`, `hybrid`; each responsibility declares permitted performer modes and conditions. |
| `accountability_constraints` | Human office requirements, competence/credential requirements, external independence requirements and applicability source; unresolved applicability blocks the affected duty. |
| `core_packages`, `conditional_packages` | Eligible package references, with deterministic task selection predicates for conditional packages. No automatic loading of entire packages. |
| `eligible_skills`, `forbidden_skills` | Explicit atomic-skill references or typed selectors; prohibition/conflict rationale; dependency requirements. |
| `mandatory_policies`, `standards_rules` | Mandatory policy versions and applicability predicates for standards/profiles; conflicts require adjudication before execution. |
| `authority_template` | Maximum eligible tool/actions/data classes/environments/purposes/spend/risk; actual authority requires a task-specific grant. |
| `review_obligations` | Required reviewer role, competence, independence class, evidence and approval gate for each output category. |
| `incompatibilities` | SOD-001–012 and additional task/tenant/customer conflicts; assessment considers actor lineage and accountable principals. |
| `inputs`, `outputs`, `evidence` | Schemas, source/freshness requirements, acceptance criteria, provenance and retention references. |
| `stopping_rules`, `escalations` | Missing authority/evidence, uncertainty, budget exhaustion, human vacancy, conflict and incident destinations. |
| `qualification` | Required scenario suite, supported execution tuples, thresholds, expiry/review triggers and revocation behavior. |
| `owners` | Named business, technical and risk owners and eligible independent reviewer; role labels alone do not fill a vacancy. |
| `lifecycle`, `sources` | Proposed/reviewed/approved/qualified/deprecated/withdrawn states; decisions, source records, review date, change history and replacement links. |

## 3. Assignment and execution envelope

An assignment references one active role contract per task, a performer identity, accountable principal, tenant, project, objective, environment, data classification, customer authorization, task-specific authority grant, selected skills, applicable controls, technology profile, model/harness versions, budgets, lease and expiry. Compatible additional roles may be declared, but their combined permissions are re-evaluated; permissions are never obtained by merely unioning role grants.

The decision sequence is: validate task and tenant → establish role eligibility and performer competence → check incompatibility and authority → select minimum relevant skills and dependencies → resolve policies and standards → verify the exact composition qualification → issue bounded execution grant → enforce each tool action → review outputs and evidence → close or escalate.

Role work can be split: an AI acting in the CEO role may draft strategy, analyze unit economics and allocate approved work; the named executive retains reserved business decisions. The same pattern applies to CISO, CFO, legal, compliance and other offices. Human work is also subject to authority, evidence, conflicts and review. An agent must never label its output as a human signature, legal opinion, statutory filing approval or independent professional certification.

## 4. Independence and reserved decisions

Three independence classes are distinct:

| Class | What it demonstrates | What does not satisfy it |
|---|---|---|
| Execution separation | Separate workload identities, isolated context, provenance and reviewer allocation without authorship conflict. | A renamed copy of the author session or a reviewer inheriting author conclusions as an oracle. |
| Model diversity | Independent initial outputs from distinct qualified model configurations; dissent and evidence preserved. | Multiple agents using the same underlying model being counted as multiple provider opinions. |
| Organizational/professional independence | Different eligible accountable people or organizations where the obligation requires it; conflicts and reporting relationships assessed. | Different keys, sessions, model providers or titles controlled by one accountable person. |

All SOD-001–012 conflicts in the original matrix remain mandatory at their applicable gates: author/reviewer, developer/release approver, operator/auditor, vulnerability assessor/closure authority, model builder/validator, policy author/approver, access requester/approver, runtime/audit administrator, procurement/payment authority, seller/claims approver, financial-crime rule author/material-case disposition, and incident actor/post-incident assessor.

The adopted company governance policy reserves final production authorization, material financial/customer-case dispositions, mandatory policy changes, material customer-data exports, key-management approvals and legally accountable decisions to authorized humans. Automated execution under a previously approved bounded rule is separately defined and tested; it does not create a new discretionary authority. Models can score, explain, recommend, gather evidence and escalate fraud, AML, KYC and cheque cases within an approved use case.

A vacant required office blocks the affected decision. Any permitted self-approval remains visibly `self_approved`; it never satisfies a non-overridable independence requirement. Approval binds the action, artifact hash, environment, tenant, scope and expiry. Material changes invalidate it. Review capacity is a scheduling resource, not an assumed infinite supply.

## 5. Corrected owner-role references

These references replace section 10 of the old matrix where they conflict. Other source row identities are retained.

| Owner role or function | Canonical reference |
|---|---|
| CEO / CTO / CISO | R-EXE-001 / R-EXE-011 / R-EXE-015 |
| Enterprise / technical architect | R-ARC-002 / R-ARC-004 |
| Security officer / SSDLC engineer | R-SEC-002 / R-SEC-005 |
| VAPT lead / tester | R-SEC-007 / R-SEC-008 |
| Cybersecurity risk assessor | R-GOV-008 |
| Java developer / senior Java engineer | R-ENG-005 / R-ENG-006 |
| Angular developer / senior front-end engineer | R-ENG-007 / R-ENG-008 |
| PL/SQL developer | R-ENG-009 |
| DevOps engineer / lead | R-ENG-016 / R-ENG-017 |
| Enterprise integration engineer | R-ENG-014; this is not the DevOps role. |
| Java / Angular / database / integration reviewer | R-ENG-023 / R-ENG-024 / R-ENG-025 / R-ENG-026 |
| Business analysis | R-BA-001–R-BA-005 |
| Product management | R-PRD-001–R-PRD-005 |
| Software development | Relevant R-ENG-001–R-ENG-026 roles plus product, architecture, design, security, QA and operations counterparts; this is a workflow, not one universal role. |
| Functional QA | R-QA-001–R-QA-004 and R-QA-014 |
| Selenium / Playwright automation | R-QA-005 / R-QA-006 |
| API/contract testing | R-QA-007 |
| JMeter/performance testing / performance engineering | R-QA-008 / R-QA-009 |
| Accessibility engineering | R-DSN-007 |
| Accessibility testing / assurance lead | R-DSN-008 or R-QA-010 according to boundary below / R-QA-011 |
| UX / UI design | R-DSN-004 / R-DSN-005 |
| Content / technical writing / regulated content / localization | R-CNT-001 / R-CNT-002 / R-CNT-003 / R-CNT-004 |
| Production support L1/L2/L3 | R-OPS-008 / R-OPS-009 / R-OPS-010 |
| Customer support L1/L2/L3 / voice | R-CS-002 / R-CS-003 / R-CS-004 / R-CS-005 |
| Independent evaluation and evidence | R-PLT-011, subject to independence and competence checks. |

R-ENG-004 remains Technical Lead. R-ENG-018 and R-ENG-019 remain Platform Engineer and Cloud Infrastructure Engineer; they are not canonical code reviewers. Area-specific reviews require the appropriate domain role and review qualification, not merely a senior title.

## 6. Overlapping role boundaries

| Existing ID | Clarified responsibility | Output and counterpart |
|---|---|---|
| R-DSN-007 Accessibility Engineer | Design and implement accessible experiences, components and remediation. | Implementation/design evidence; separate testing for formal assurance. |
| R-DSN-008 Accessibility Tester | Formative testing of journeys, prototypes and design systems before implementation; alias: Design Accessibility Tester. | Design findings and user-test evidence; cannot treat prototype testing as deployed conformance. |
| R-QA-010 Accessibility Tester | Test implemented builds, content and documents against the declared accessibility profile; alias: Implementation Accessibility Tester. | Build-bound manual/automated findings and retest evidence, separate from implementation authorship. |
| R-QA-011 Accessibility QA Lead | Define the assurance plan, coordinate qualified human/assistive-technology review and assess completeness. | Reviewed conformance evidence and recommendation; product/customer acceptance remains separate. |
| R-ENG-022 Release Manager | Coordinate engineering release assembly, dependency readiness and candidate delivery. | Candidate manifest and readiness package. |
| R-OPS-014 Release Manager | Coordinate operational promotion, change calendar, deployment and rollback readiness. | Operational readiness recommendation; neither release-manager title grants final production authority. |

These are contextual specializations sharing atomic skills. If a tenant combines compatible positions, it records the alias/assignment and retains the independent gates. Existing IDs are not deleted, reused or counted as new positions.

## 7. Role requirements and acceptance

| ID | Requirement | Acceptance evidence |
|---|---|---|
| RLM-001 | Preserve all source role IDs and validate every alias, package, skill, policy, standard and reviewer reference. | Unique-ID and referential-integrity report; mapping corrections above pass exact lookup. |
| RLM-002 | Require complete contracts and qualified task-specific assignments before execution. | Missing-field, expired-qualification and vacant-office negative cases reject activation. |
| RLM-003 | Separate skill eligibility from action authority and evaluate combined roles. | CMP-004–CMP-006 and CMP-009 pass for every high-risk assigned role. |
| RLM-004 | Support human, agent and hybrid work without changing role business meaning. | One representative assignment per mode and applicable role family; reserved duties remain blocked for agents. |
| RLM-005 | Retain organizational independence requirements across model or identity changes. | Same-principal/different-session attempts fail required independent gates. |
| RLM-006 | Resolve all owner-named roles to correct canonical rows and boundaries. | Exact-ID/title comparison and accessibility/release boundary scenarios. |
| RLM-007 | Attach positive, negative, boundary, ambiguous, adversarial, abstention and escalation scenarios to every enabled role. | Scenario inventory by role and current qualification tuple, with no unsupported enabled row. |
| RLM-008 | Preserve versioned role changes, impact analysis, qualification, revocation and migration. | Replay of previous assignments resolves historical versions; changed contract cannot inherit stale approval. |
| RLM-009 | Measure accepted outcomes, defects/rework, cost, latency, evidence and escalation quality. | Role scorecards reconcile to task/evidence events; output volume alone cannot determine competence. |
| RLM-010 | Make extensions reusable and bounded by mandatory company/customer controls. | Tenant alias/specialization cannot weaken authority or isolation; revoked role cannot be re-enabled under an alias. |

## 8. Review provenance and remaining execution work

This role model incorporates Claude's verified wrong-ID and duplicate-role findings, the council's qualification-based provider routing, and Claude/GLM's rejection of simulated organizational independence. Gemini's fixed-brand council and single-founder independence proposals are rejected for the reasons in the council synthesis. The earlier model reviews did not review this new document item by item. Their consideration does not establish a fresh four-model approval.

This is a requirements contract. Staffing, licensed/professional applicability decisions, populated role contracts and tenant assignments, skill-specific semantic acceptance and runtime scenario execution remain evidence obligations before activation. Package expansion into atomic IDs establishes referential mapping, not completeness of a role's business capabilities. The [atomic catalogue](Atomic_Skill_Catalogue_v1.0.md) and [domain acceptance profiles](Domain_Acceptance_Profiles_v1.0.md) require applicable outcome-specific oracles; a shared package criterion cannot substitute for a distinct skill's result contract. Reference architecture: [Company Architecture and Governance](Company_Architecture_and_Governance_v1.0.md), informed by the [council synthesis](../model-council/synthesis/Proposed_Council_Synthesis_v0.1.md). Test contract: [Skill Composition Test Specification](Skill_Composition_Test_Specification_v1.0.md).
