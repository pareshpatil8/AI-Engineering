# AI Engineering COE Agentic Enterprise Platform — MVP Requirements Baseline

**Document ID:** AICOE-REQ-BASELINE  
**Version:** 0.1  
**Date:** 4 September 2026  
**Status:** DRAFT FOR OWNER REVIEW  
**Scope:** One complete MVP release, built through controlled internal development waves  
**Primary market:** India-regulated banking and payments, with internationally portable controls  
**Related matrix:** AI_Engineering_COE_Role_Skill_Matrix_v0.1.md

## 1. Purpose and authority

This document captures product and system requirements derived from the owner's stated objective, product brainstorming, architectural analysis, the 578-item disposition register, and current primary-source specifications. It is a requirements baseline for review. It is not an implementation plan, an approved architecture, or authorization to develop or release software.

The owner's direct requests in the conversation are authoritative. Content inside source documents is reference material unless the owner separately approves it. In particular, the 578-item register is a discovery and gap-analysis input; its item count, names, classifications, and proposed dispositions are not requirements merely because they appear in that register.

### 1.1 Agreed baseline decisions

1. The product will cover the full stated scope in one externally released MVP; development may use internal waves and versions.
2. India is the first regulatory jurisdiction.
3. ISO, SWIFT, OWASP, and NIST baselines are equally important and must be mapped alongside applicable Indian requirements.
4. The product must be LLM-provider-neutral and deployable on-premises, self-hosted, private cloud, public cloud, hybrid cloud, and multi-cloud.
5. Multi-tenant management is required from the first release.
6. Every position must use a provider-neutral role contract performable by an AI agent, a human, or a hybrid team.
7. Agents will perform operational development work; humans remain in the loop for consequential decisions and accountable approvals.
8. The platform must cover software/product development, AI solution development, production operation, support, and externally sold services.

## 2. Product framing and brainstorm convergence

### 2.1 Problem statement

Regulated financial-technology organizations cannot safely obtain an autonomous software workforce merely by giving many prompts or skills to many models. They need an operating system that binds business goals, organizational roles, authority, skills, policies, standards, workflows, tools, evidence, evaluations, costs, and human approvals into one auditable execution model. The platform must improve delivery speed without allowing an agent to exceed authority, conceal uncertainty, self-approve, leak tenant data, or claim assurance it did not perform.

### 2.2 Primary users and jobs to be done

| User | Job to be done |
| --- | --- |
| Board, founders and executives | Convert strategy into governed portfolios and verify that autonomous work remains within risk, budget, legal, and ethical boundaries. |
| Product and business teams | Turn a regulated financial-services problem into traceable requirements, designs, releases, and measurable outcomes. |
| Engineering and AI teams | Build secure software and AI systems using approved technical profiles, tools, evidence, and review gates. |
| Risk, compliance, security and audit | Resolve applicable obligations, independently test controls, and inspect reproducible evidence tied to exact versions. |
| Operations and support | Operate, observe, recover, support, and improve production services without unsafe autonomous actions. |
| Bank or payment-company customer | Consume isolated engineering, QA, cybersecurity, AI-assurance, or support services with contractual scope and evidence. |
| Platform administrator | Configure tenants, runtimes, models, policies, entitlements, integrations, budgets, and deployment topology. |
| Agent author and evaluator | Create, validate, compare, version, release, and retire portable role and capability artifacts. |

### 2.3 Explored product approaches

| Approach | Strength | Fatal weakness if used alone |
| --- | --- | --- |
| Skills-first library | Fast to author and easy to demonstrate. | Confuses advice with enforceable control and creates an ungovernable catalogue. |
| Role-first digital company | Closely resembles how Paperclip and organizations assign work. | Roles become large prompts and duplicate capabilities unless skills are modular. |
| Workflow-first factory | Makes lifecycle, handoffs, and approvals explicit. | Cannot supply deep professional expertise by itself. |
| Policy-first control plane | Strongest authority, audit, and fail-closed foundation. | Can become bureaucracy that produces no useful products. |
| Service-first modules | Aligns directly with commercial cybersecurity, QA, engineering, and AI services. | Creates silos and duplicated governance across services. |
| Canonical-artifact compiler | Best route to Codex, Claude, Gemini, Paperclip, MCP, and future portability. | A lowest-common-denominator schema can erase runtime-specific strengths. |
| Minimal-skill/dynamic-knowledge model | Reduces catalogue size by retrieving current standards and procedures just in time. | Retrieval alone lacks repeatable operational procedure and predictable evaluation. |

**Recommended convergence:** a governed capability platform combining provider-neutral role contracts, a canonical capability and artifact registry, dynamic skill composition, policy enforcement, durable workflows, deterministic tools, an evidence/evaluation plane, runtime-specific projections, and independently deployable commercial-service modules. Runtime projections may exploit vendor features, but canonical meaning and acceptance criteria remain portable.

### 2.4 Strongest argument against the product

The scope could produce a large library and control bureaucracy before proving that agents deliver reliable business outcomes. Correlated model errors could appear as consensus, agent-generated tests could validate agent-generated mistakes, and the organization could confuse artifact quantity with assurance. The requirements therefore mandate golden vertical slices, independent and cross-model review, real runtime evidence, exact-version traceability, outcome metrics, progressive internal waves, and a single release only after integrated acceptance.

## 3. Requirement conventions

All requirements in Sections 4–24 are MVP requirements unless explicitly identified as conditional. “Shall” is mandatory. “Should” is a recommendation requiring a recorded decision if omitted.

| Verification code | Meaning |
| --- | --- |
| INS | Inspect an artifact, configuration, mapping, record, or evidence package. |
| TEST | Execute a deterministic, automated, statistical, security, or adversarial test. |
| DEMO | Demonstrate the requirement on a supported runtime or deployment topology. |
| ANALYSIS | Perform a documented analysis, simulation, model, or scenario exercise. |
| IREV | Obtain an author-disjoint independent review. |
| HAPP | Obtain approval from a named accountable human or organization. |

Each requirement must ultimately record priority, owner, reviewer, source, rationale, acceptance criteria, verification evidence, dependencies, risk classification, implementation version, and release status. Compliance is established by evidence, not by assertion.

### 3.1 Requirement inventory

This draft contains **545 unique MVP requirements**. The count is an outcome of first-principles analysis, not a target derived from the 578-item register.

| Prefix | Requirement area | Count |
| --- | --- | ---: |
| BR | Business and product | 15 |
| SCP | Scope and domains | 20 |
| ORG | Organization and role contracts | 20 |
| CAP | Capabilities, skills, policies, standards, workflows, and tools | 25 |
| AGT | Agent composition and execution | 30 |
| GOV | Governance, policy, and regulatory control | 20 |
| STD | Standards baseline | 15 |
| PLT | Platform and application | 30 |
| LLM | LLM and runtime portability | 25 |
| COL | Codex–Claude division and collation | 20 |
| TEN | Multi-tenancy and deployment | 20 |
| SEC | Security, privacy, and supply chain | 40 |
| DAT | Data, knowledge, and evidence | 20 |
| AIG | AI, ML, GenAI, and model risk | 35 |
| BNK | Banking, payments, financial crime, and tokenization | 40 |
| ENG | Product and software engineering | 30 |
| QEV | Quality engineering and evaluation | 35 |
| NFR | Non-functional characteristics | 25 |
| OPS | Production operations and support | 25 |
| SVC | Commercial service modules | 20 |
| FBK | Feedback and controlled evolution | 15 |
| REL | Artifact lifecycle and MVP release | 20 |
|  | **Total** | **545** |

## 4. Business and product requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| BR-001 | The product shall operate as a governed agentic enterprise platform for creating, securing, testing, releasing, operating, supporting, and improving software and AI products. | DEMO, INS |
| BR-002 | The MVP shall include the entire approved scope in one external release, while permitting internal development waves, integration candidates, and release candidates. | INS, HAPP |
| BR-003 | The platform shall support internal delivery and externally sold services without sharing customer data, context, evidence, or intellectual property across tenants. | TEST, IREV |
| BR-004 | Each unit of work shall trace to an organizational goal, approved product or service outcome, accountable owner, budget, risk profile, and acceptance criteria. | TEST, INS |
| BR-005 | The platform shall measure outcome quality, first-pass acceptance, escaped defects, rework, cycle time, cost, latency, safety, control compliance, and customer satisfaction. | DEMO, INS |
| BR-006 | The platform shall never represent “agent-generated,” “file created,” “scan executed,” or “review started” as business completion. | TEST, IREV |
| BR-007 | Completion shall require the defined functional, non-functional, security, regulatory, independent-review, runtime, evidence, and human-approval gates. | TEST, INS |
| BR-008 | The platform shall support agent-performed operational work with human intervention limited to requested collaboration, exception handling, and decisions requiring accountable authority. | DEMO, HAPP |
| BR-009 | The platform shall enable a role to be performed by an AI agent, human, or hybrid team without changing the role's business meaning or authority boundary. | DEMO, TEST |
| BR-010 | The platform shall enable capabilities to be packaged and commercialized individually, including cybersecurity, QA, performance, accessibility, engineering, AI assurance, and support services. | DEMO, INS |
| BR-011 | Commercial services shall have customer-specific scope, authorization, SLA, evidence, pricing/metering, data-handling, liability, and acceptance boundaries. | INS, HAPP |
| BR-012 | The platform shall support regulated clients that prohibit source code, data, prompts, or evidence from leaving their controlled environment. | DEMO, IREV |
| BR-013 | The platform shall support portfolio-level governance across multiple products, customers, environments, and delivery teams. | DEMO |
| BR-014 | The MVP shall expose honest maturity and verification status for each role, capability, runtime projection, service, and domain pack. | TEST, INS |
| BR-015 | No claim of “highest accuracy,” “secure,” “compliant,” “autonomous,” or “provider-neutral” shall be published without defined metrics, scope, limitations, and retained evidence. | IREV, HAPP |

## 5. Scope and domain requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| SCP-001 | The scope shall include corporate governance, strategy, finance, legal, compliance, risk, audit, workforce, sales, delivery, engineering, operations, and customer service roles needed by the reference company. | INS |
| SCP-002 | The scope shall include product discovery, product management, business analysis, UX, content, accessibility, architecture, development, testing, release, production, and support lifecycles. | INS, DEMO |
| SCP-003 | The scope shall include Java and Spring, Angular, Oracle and PL/SQL, APIs, event streaming, messaging, containers, Kubernetes/OpenShift-class platforms, CI/CD, and cloud infrastructure profiles. | INS, DEMO |
| SCP-004 | The technology model shall be extensible through versioned Language/Technology Specification Profiles (LTSPs) rather than embedding one language or framework into universal skills. | TEST, INS |
| SCP-005 | The scope shall include high-volume banking, payment, clearing, settlement, reconciliation, disputes, fraud, AML, KYC, sanctions, customer service, and regulatory evidence capabilities. | DEMO, INS |
| SCP-006 | The scope shall include UPI ecosystem integration and operations subject to the customer's authorized NPCI role, specifications, certification obligations, and current circulars. | INS, HAPP |
| SCP-007 | The scope shall include ISO 20022 data semantics, message definitions, usage variants, validation, mapping, transformation, routing, testing, reconciliation, and version governance. | TEST, DEMO |
| SCP-008 | The scope shall include SWIFT message lifecycle, connectivity boundaries, CSP controls, four-eyes operation, screening, reconciliation, investigation, and audit evidence where contractually authorized. | TEST, IREV |
| SCP-009 | The scope shall include fraud detection, mule-account analysis, transaction anomaly detection, case prioritization, investigator assistance, and feedback-driven model improvement. | TEST, IREV |
| SCP-010 | The scope shall include AML transaction monitoring, customer-risk scoring, sanctions and PEP screening, alert triage, case investigation support, suspicious-activity evidence preparation, and human filing decisions. | TEST, HAPP |
| SCP-011 | The scope shall include AI customer-support and voice-agent capabilities with identity verification, consent, disclosure, language support, handoff, recording controls, complaint handling, and prohibited-action boundaries. | TEST, IREV |
| SCP-012 | The scope shall include cheque-image ingestion, image-quality assessment, field extraction, signature and alteration risk indicators, duplicate detection, clearing workflow, exception handling, and human decision rules. | TEST, HAPP |
| SCP-013 | KYC tokenization shall cover reversible or irreversible surrogate tokenization of regulated identity data; blockchain, verifiable-credential, or reusable-KYC representations shall be separate approved profiles. | INS, TEST |
| SCP-014 | Asset tokenization shall cover legal-rights modeling, asset eligibility, issuance, custody, transfer restrictions, ownership register, lifecycle events, settlement, corporate actions, reconciliation, and regulatory gates. | ANALYSIS, HAPP |
| SCP-015 | The platform shall not assume that a technically implemented token represents a legally valid asset, security, deposit, currency, or ownership claim. | TEST, HAPP |
| SCP-016 | The scope shall include conventional predictive ML, generative AI, agentic AI, document AI, speech AI, retrieval-augmented generation, and human-assisted decision systems. | INS, DEMO |
| SCP-017 | The scope shall include greenfield development, modernization, migration, integration, maintenance, incident remediation, and decommissioning. | DEMO |
| SCP-018 | The scope shall include internal use, customer-hosted use, managed service, professional service, and reusable product offerings. | DEMO, INS |
| SCP-019 | Scope completeness shall be derived from business jobs, lifecycle obligations, risks, roles, standards, domain models, and service contracts—not from a predetermined number of skills. | INS, IREV |
| SCP-020 | The 578-item register shall be reconciled only after the first-principles catalogue exists, with every source item marked covered, partially covered, duplicated, rejected, reclassified, or newly required. | TEST, INS |

## 6. Organization and role-contract requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| ORG-001 | Every role shall have a stable provider-neutral identifier, purpose, outcomes, responsibilities, reporting relationship, authority, limitations, and accountability type. | TEST, INS |
| ORG-002 | Every role shall declare whether it may be staffed by an AI agent, human, or hybrid team and which responsibilities require a human office holder. | TEST, HAPP |
| ORG-003 | Role contracts shall be distinct from individual agent prompts, model configurations, skills, tools, policies, and credentials. | TEST, INS |
| ORG-004 | Role contracts shall map eligible core capabilities, conditional capabilities, prohibited capabilities, required policies, standards, tools, evidence, and reviewers. | TEST |
| ORG-005 | The role model shall support board/owner, executive, head/director, manager/lead, principal/senior specialist, practitioner, associate/operator, and trainee bands. | DEMO |
| ORG-006 | Career bands shall be distinct from operational support tiers such as L1, L2, and L3 support. | TEST, INS |
| ORG-007 | The organization shall support solid-line reporting, functional reporting, temporary project assignment, service-team assignment, and independent-assurance relationships. | DEMO |
| ORG-008 | Each role shall declare decision rights using accountable, responsible, consulted, informed, recommender, reviewer, and approver semantics. | TEST |
| ORG-009 | Financial, regulatory, security-risk, legal, employment, production-release, and customer-contract authority shall require named human accountability unless applicable authority explicitly permits automation. | TEST, HAPP |
| ORG-010 | No agent shall approve its own work, close findings on its own work, or impersonate a human approver. | TEST, IREV |
| ORG-011 | Conflicting duties shall be detected before assignment, including author/reviewer, developer/release approver, operator/auditor, and model developer/model validator conflicts. | TEST |
| ORG-012 | Temporary delegation shall be purpose-bound, time-bound, revocable, recorded, and no broader than the delegator's authority. | TEST, INS |
| ORG-013 | Role inheritance shall permit organization, domain, technology, project, customer, and environment overlays without silently weakening a parent restriction. | TEST |
| ORG-014 | Role aliases shall map company-specific job titles to canonical roles without duplicating skill definitions. | TEST |
| ORG-015 | A single person or agent may hold multiple compatible roles, but the platform shall evaluate combined authority and segregation-of-duties conflicts. | TEST, IREV |
| ORG-016 | A role's performance shall be evaluated against outcomes, process compliance, evidence quality, safety, cost, and escalation behavior—not only output fluency. | TEST, INS |
| ORG-017 | Role creation, modification, suspension, and retirement shall follow a versioned approval workflow. | TEST |
| ORG-018 | The role catalogue shall include every role named by the owner and the additional roles listed in the related role-skill matrix. | TEST, INS |
| ORG-019 | Customer tenants may enable, disable, alias, or specialize roles within approved boundaries while preserving mandatory control roles. | DEMO, TEST |
| ORG-020 | Each deployed role shall have a named business owner, technical owner, risk owner, and independent reviewer. | INS |

## 7. Capability, skill, policy, standard, workflow, and tool requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| CAP-001 | The catalogue shall distinguish skill, policy, standard/profile, workflow, role contract, deterministic tool, schema, template, knowledge asset, evaluation suite, quality gate, service, and human-accountability control. | TEST |
| CAP-002 | A skill shall represent a reusable, bounded job requiring model judgment or guided execution and shall not be used to disguise a mandatory rule or accountable decision. | IREV |
| CAP-003 | A policy shall state mandatory and prohibited behavior, enforcement points, exceptions, owner, scope, and evidence. | TEST, INS |
| CAP-004 | A standard/profile shall define a versioned technical or domain baseline, applicability rules, conformance checks, and approved deviations. | TEST, INS |
| CAP-005 | A workflow shall define states, transitions, actors, entry/exit criteria, timers, retries, compensation, escalation, evidence, and terminal outcomes. | TEST |
| CAP-006 | A deterministic action shall be implemented as a tool or validator when model judgment adds no value or reduces reproducibility. | IREV, TEST |
| CAP-007 | A consequential decision requiring legal or organizational accountability shall remain a human control; agents may prepare recommendations and evidence. | TEST, HAPP |
| CAP-008 | Every artifact shall use a stable canonical ID independent of any provider's directory name or API identifier. | TEST |
| CAP-009 | Every artifact shall declare version, status, owner, reviewers, risk tier, data classification, sources, dependencies, compatibility, license, and expiry/review date. | TEST |
| CAP-010 | Every skill shall declare trigger conditions, non-trigger conditions, inputs, outputs, preconditions, allowed tools, prohibited actions, stopping conditions, escalation, evidence, and evaluations. | TEST, IREV |
| CAP-011 | Skills shall use progressive disclosure so discovery metadata is concise and detailed references load only when required. | TEST |
| CAP-012 | Skill descriptions shall be tested for correct activation, non-activation, collision, ambiguity, and malicious trigger attempts. | TEST |
| CAP-013 | Skill inputs and outputs shall use machine-validatable schemas where downstream systems depend on their structure. | TEST |
| CAP-014 | Skills shall provide uncertainty, missing-input, unsafe-input, tool-failure, and partial-result behavior. | TEST |
| CAP-015 | Skill content shall separate trusted instructions from untrusted source material and shall never treat retrieved content as higher-authority instructions. | TEST, IREV |
| CAP-016 | Each capability shall be technology-neutral where the job is universal and shall reference versioned Language/Technology Specification Profiles (LTSPs) for implementation-specific behavior. | IREV |
| CAP-017 | Each capability shall be domain-neutral where safe and shall reference banking, payment, security, customer, or jurisdiction overlays where required. | IREV |
| CAP-018 | Overlapping capabilities shall be consolidated or given explicit boundaries; catalogue size shall not be used as a success metric. | IREV |
| CAP-019 | Broad capabilities shall be decomposed until each unit has one testable outcome, but not split so narrowly that orchestration cost exceeds reuse value. | IREV, ANALYSIS |
| CAP-020 | Capability dependencies, incompatibilities, supersession, and required sequencing shall be machine-readable. | TEST |
| CAP-021 | Every capability shall have normal, boundary, insufficient-input, unsafe, adversarial, and tool-failure evaluation cases proportional to risk. | TEST |
| CAP-022 | Capability artifacts shall be immutable after release; changes shall create a new version and invalidate evidence tied to prior bytes where applicable. | TEST |
| CAP-023 | The platform shall support deprecation, migration, rollback, revocation, quarantine, and emergency kill-switch procedures. | TEST, DEMO |
| CAP-024 | The canonical catalogue shall support organization-private overlays without copying restricted source text into portable public artifacts. | TEST, IREV |
| CAP-025 | A first-principles gap analysis shall compare the approved catalogue to the 578-item register and document all coverage decisions without preserving the old count. | INS, IREV |

## 8. Agent composition and execution requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| AGT-001 | An executable agent profile shall compose a role contract, assigned objective, authority, capability eligibility, selected task skills, policies, standards, tools, memory scope, budgets, runtime, and evaluation thresholds. | TEST |
| AGT-002 | Agents may possess multiple skills, but eligibility shall not mean that all skills are loaded into every task context. | TEST |
| AGT-003 | Each role shall have a small evaluated core capability set and dynamically selected task capabilities based on intent, risk, dependencies, context budget, permissions, and environment. | TEST, DEMO |
| AGT-004 | The platform shall not impose an arbitrary universal skill-count limit; each role-skill combination shall be bounded by measured discovery cost, context cost, collision rate, activation accuracy, tool authority, and task performance. | ANALYSIS, TEST |
| AGT-005 | Unused skill instructions and resources shall remain outside the active context unless the runtime requires otherwise. | TEST |
| AGT-006 | The resolver shall detect conflicting instructions, policies, skill versions, tools, and output schemas before execution and fail closed on unresolved high-risk conflicts. | TEST |
| AGT-007 | Mandatory policies shall apply even when the responsible skill is not loaded or the model ignores the skill. | TEST, IREV |
| AGT-008 | Tool authorization shall be enforced outside the model prompt using identity, tenant, role, task, environment, data, time, and approval context. | TEST, IREV |
| AGT-009 | Agents shall receive least-privilege, time-bound credentials and shall not receive raw long-lived secrets in prompts or logs. | TEST |
| AGT-010 | Every agent action shall carry tenant, project, task, role, agent, model, runtime, policy, tool, approval, and correlation identity. | TEST |
| AGT-011 | Agents shall plan, decompose, assign, execute, review, escalate, and hand off work through recorded state transitions rather than unverifiable conversational claims. | DEMO, TEST |
| AGT-012 | Delegated work shall include objective, context, source authority, assumptions, constraints, allowed paths, forbidden actions, expected outputs, evidence, and acceptance tests. | TEST |
| AGT-013 | Parallel work shall use disjoint write scopes or controlled merge ownership and shall detect conflicting leases. | TEST, DEMO |
| AGT-014 | Agent communication shall use typed task, result, finding, approval-request, escalation, and handoff contracts. | TEST |
| AGT-015 | Agents shall explicitly distinguish fact, inference, assumption, recommendation, uncertainty, and decision. | TEST |
| AGT-016 | Agents shall abstain and escalate when authority, safety, source validity, data classification, or acceptance criteria are insufficient. | TEST |
| AGT-017 | The platform shall detect loops, stalls, repeated failures, goal drift, unbounded delegation, token exhaustion, and excessive cost. | TEST |
| AGT-018 | Operators shall be able to pause, resume, redirect, isolate, terminate, and revoke an agent without waiting for model cooperation. | DEMO, TEST |
| AGT-019 | Recovery shall resume from durable state and verified artifacts rather than relying solely on conversational memory. | TEST, DEMO |
| AGT-020 | Agent memory shall be purpose-bound, provenance-aware, tenant-isolated, encrypted, versioned, validated, expirable, correctable, and auditable. | TEST, IREV |
| AGT-021 | Untrusted observations shall not become durable memory without validation and provenance. | TEST |
| AGT-022 | Agents shall not learn new policy or silently modify released skills directly from experience; experience shall create reviewable change proposals. | TEST |
| AGT-023 | Agent prompts, skills, policies, tools, models, datasets, retrieval indexes, and runtime settings shall be independently versioned and traceable in each run. | TEST |
| AGT-024 | High-risk work shall use independent challenge, reviewer diversity, or cross-model review to reduce correlated failure. | TEST, IREV |
| AGT-025 | Multiple agreeing agents shall not be treated as proof unless their independence, evidence, and evaluation method are established. | TEST, IREV |
| AGT-026 | Agent autonomy shall be assigned per action using risk, reversibility, blast radius, data sensitivity, customer impact, and legal authority. | TEST |
| AGT-027 | Consequential actions shall use preview, approval, idempotency, bounded execution, confirmation, monitoring, and rollback where technically possible. | TEST, DEMO |
| AGT-028 | Agent-created code, policy, test, evidence, or release material shall disclose its authoring and review provenance. | TEST |
| AGT-029 | Production agents shall have stricter tools, network, data, memory, and change permissions than development agents. | TEST, IREV |
| AGT-030 | An agent shall be deployable on another supported provider only after its exact role-capability projection passes that provider/runtime conformance suite. | TEST, DEMO |

## 9. Governance, policy, standards, and regulatory requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| GOV-001 | The platform shall maintain a versioned hierarchy of law, regulation, network/scheme rules, contracts, approved organization policies, customer policies, standards, profiles, and guidance. | TEST, INS |
| GOV-002 | Applicable law, regulation, and contract shall take precedence; other conflicts shall be resolved through documented applicability, stricter-control analysis, legal/compliance review, and approved exception—not silent ordering. | TEST, HAPP |
| GOV-003 | Every control shall record source version, exact reference, jurisdiction, applicability, objective, implementation, evidence, test, owner, reviewer, exception path, and review date. | TEST |
| GOV-004 | The platform shall distinguish mandatory obligation, organizational requirement, contractual requirement, recommended practice, and informative guidance. | TEST |
| GOV-005 | Regulatory and standards content shall be version-pinned before implementation and monitored for amendments, supersession, withdrawal, and effective dates. | TEST, INS |
| GOV-006 | Restricted or licensed standards shall be referenced lawfully and shall not be copied into prompts, skills, datasets, or public artifacts beyond permitted use. | IREV, HAPP |
| GOV-007 | Control applicability shall be resolved per legal entity, regulated-entity type, product, service, data, geography, technology, deployment, customer, and environment. | TEST |
| GOV-008 | “Not applicable” decisions shall require rationale, evidence, reviewer identity, expiry, and human approval proportional to risk. | TEST, HAPP |
| GOV-009 | Policy enforcement shall occur at relevant identity, API, workflow, tool, data, deployment, and release points—not only as natural-language instructions. | TEST, IREV |
| GOV-010 | Policy exceptions shall be time-bound, scope-bound, compensating-control-bound, risk-assessed, approved, monitored, and automatically expire. | TEST, HAPP |
| GOV-011 | The platform shall support maker-checker, four-eyes, segregation-of-duties, quorum, and named-authority approval patterns. | TEST, DEMO |
| GOV-012 | Decisions and approvals shall be cryptographically or otherwise strongly bound to the exact subject, evidence, version, scope, and approver identity. | TEST, IREV |
| GOV-013 | A technical reviewer may recommend compliance or security clearance but shall not impersonate a regulator, auditor, CISO, board, customer, or legally accountable officer. | TEST |
| GOV-014 | The platform shall maintain enterprise risk, product risk, model risk, cyber risk, privacy risk, third-party risk, operational risk, fraud risk, financial-crime risk, and delivery risk registers. | DEMO, INS |
| GOV-015 | Risks shall record inherent risk, controls, residual risk, evidence, owner, treatment, due date, indicators, acceptance authority, and review cadence. | TEST |
| GOV-016 | Human acceptance of residual risk shall never be inferred from silence, an agent response, or successful technical tests. | TEST, HAPP |
| GOV-017 | The platform shall support internal audit independence, evidence sampling, issue tracking, remediation, retest, and closure by authorized roles. | TEST, IREV |
| GOV-018 | Governance metrics shall cover control effectiveness, exceptions, overdue remediation, policy drift, evidence freshness, unresolved conflicts, and approval latency. | DEMO |
| GOV-019 | The platform shall retain a complete decision record for material architecture, model, data, security, release, and regulatory decisions. | TEST, INS |
| GOV-020 | The control library shall support crosswalks so one piece of evidence may satisfy multiple requirements without asserting equivalence where objectives differ. | TEST, IREV |

### 9.1 Required baseline families

| ID | Requirement | Verification |
| --- | --- | --- |
| STD-001 | The India baseline shall evaluate applicable RBI directions, including IT governance/risk/controls/assurance, digital payment security, cyber resilience, outsourcing, KYC/AML, fraud, and regulated-entity-specific obligations. | INS, HAPP |
| STD-002 | The India baseline shall evaluate applicable NPCI UPI procedural guidelines, operating/risk rules, certifications, circulars, participant obligations, data-use rules, disputes, and current product requirements. | INS, HAPP |
| STD-003 | The India baseline shall evaluate the DPDP Act 2023, DPDP Rules 2025 and their phased effective dates, CERT-In directions, Information Technology law, PMLA, FIU-IND obligations, and TRAI commercial-communication requirements. | INS, HAPP |
| STD-004 | Applicable SEBI, IRDAI, UIDAI, CKYCR/CERSAI, GST, accounting, consumer-protection, evidence, and sector rules shall be activated by product and customer profile. | INS, HAPP |
| STD-005 | The AI baseline shall include RBI's FREE-AI framework/report and subsequent binding directions when applicable. | INS, HAPP |
| STD-006 | The ISO baseline shall include, as applicable, ISO/IEC 27001, 27017, 27018, 27701, 42001, 23894, 25010, 20000-1, 22301, 12207, 29119, and related current standards. | INS |
| STD-007 | The financial messaging baseline shall use the current ISO 20022 repository, message definitions, code sets, usage guidelines/variants, change requests, and community-specific implementation rules. | TEST, INS |
| STD-008 | The SWIFT baseline shall use the current Customer Security Controls Framework, Customer Security Programme policy, independent-assessment rules, message/usage rules, and customer architecture type. | INS, IREV |
| STD-009 | The NIST baseline shall include CSF 2.0, AI RMF and applicable profiles, SSDF including AI profiles, SP 800-53, zero-trust, identity, cryptography, incident, privacy, and supply-chain guidance as applicable. | INS |
| STD-010 | The OWASP baseline shall include ASVS 5.0.0 or successor, MASVS, API Security Top 10, Web Top 10, SAMM, Cheat Sheets, GenAI/LLM and agentic-security guidance, and relevant testing guides. | INS |
| STD-011 | PCI DSS and related PCI standards shall apply wherever cardholder data, sensitive authentication data, PIN, or card environments enter scope. | INS, HAPP |
| STD-012 | FATF guidance and applicable Indian AML/CFT law shall inform financial-crime capabilities without substituting agent judgment for regulated reporting authority. | INS, HAPP |
| STD-013 | Accessibility profiles shall include current applicable WCAG and Indian accessibility requirements for web, mobile, documents, support, and assisted channels. | TEST, INS |
| STD-014 | Software-supply-chain profiles shall include SBOM, provenance, signing, dependency risk, build integrity, and secure development requirements. | TEST, IREV |
| STD-015 | Standards mappings shall use version-qualified identifiers and shall be revalidated when source versions change. | TEST |

## 10. Platform and application requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| PLT-001 | The product shall expose a web UI, governed APIs, event interfaces, administrative CLI or equivalent automation interface, and machine-readable export/import. | DEMO, TEST |
| PLT-002 | The product shall provide registries for tenants, organizations, people, agents, roles, capabilities, skills, policies, standards, workflows, tools, models, datasets, prompts, evaluations, evidence, risks, findings, approvals, and releases. | DEMO, TEST |
| PLT-003 | The product shall provide a goal and portfolio hierarchy from enterprise objective through portfolio, product/service, initiative, release, work item, task, and evidence. | DEMO, TEST |
| PLT-004 | The product shall provide an organizational graph with reporting, assignment, delegation, reviewer-independence, and authority relationships. | DEMO, TEST |
| PLT-005 | The product shall provide a capability resolver that selects eligible task skills and applicable controls from role, task, tenant, domain, technology, data, environment, and risk context. | TEST |
| PLT-006 | The product shall provide a policy decision and enforcement capability with explainable allow, deny, require-approval, redact, constrain, and quarantine outcomes. | TEST, IREV |
| PLT-007 | The product shall provide durable workflow orchestration for long-running, resumable, multi-agent, human-in-loop, timer, retry, compensation, and escalation processes. | TEST, DEMO |
| PLT-008 | The product shall provide model and runtime routing based on certified capability, risk, data boundary, latency, quality, cost, availability, and tenant policy. | TEST, DEMO |
| PLT-009 | The product shall provide tool, MCP, API, webhook, plugin, repository, CI/CD, ticketing, communication, observability, and data-source integration management. | DEMO, TEST |
| PLT-010 | The product shall provide an evidence ledger linking requirements, controls, work, inputs, outputs, tests, findings, approvals, and released versions. | TEST, IREV |
| PLT-011 | The product shall provide evaluation management for datasets, fixtures, graders, baselines, models, runs, thresholds, regressions, and adjudication. | DEMO, TEST |
| PLT-012 | The product shall provide source-provenance, license, confidentiality, integrity, freshness, and permitted-use metadata. | TEST |
| PLT-013 | The product shall provide review workspaces that freeze review subjects and prevent authors from altering reviewed bytes without invalidating review. | TEST |
| PLT-014 | The product shall provide findings management with severity, evidence, affected scope, owner, remediation, SLA, retest, closure authority, and exact-version binding. | TEST |
| PLT-015 | The product shall provide release management with manifests, signatures, SBOMs, evidence, compatibility, approvals, installation status, rollback, and revocation. | TEST, DEMO |
| PLT-016 | The product shall provide dashboards for outcome, quality, security, compliance, agent performance, workflow, cost, capacity, SLO, customer, and release health. | DEMO |
| PLT-017 | The product shall provide full-text and structured search without allowing search results to bypass tenant, classification, purpose, or authorization controls. | TEST |
| PLT-018 | The product shall provide notification, approval inbox, escalation, and subscription mechanisms with configurable channels and delivery evidence. | DEMO, TEST |
| PLT-019 | The product shall provide versioned templates for common artifacts while detecting shallow template substitution and requiring domain-specific content. | TEST, IREV |
| PLT-020 | The product shall provide import of the 578-item register and other catalogues as untrusted source inventories, not as automatically approved capabilities. | TEST |
| PLT-021 | The product shall provide an administrative comparison of canonical artifacts and each runtime-specific projection. | DEMO, TEST |
| PLT-022 | The product shall provide customer-facing portals for service scope, evidence exchange, findings, remediation, approvals, SLA, usage, and reports. | DEMO, TEST |
| PLT-023 | The product shall expose independently deployable modules through stable contracts while sharing common identity, policy, evidence, tenancy, and observability services. | TEST, DEMO |
| PLT-024 | Module failure shall be isolated so a non-critical service does not corrupt governance, evidence, approval, or tenant boundaries. | TEST |
| PLT-025 | The product shall support feature flags, tenant entitlements, compatibility negotiation, and controlled rollout without allowing flags to bypass mandatory controls. | TEST |
| PLT-026 | Administrative actions shall support preview, impact analysis, maker-checker approval, audit, rollback, and break-glass controls. | TEST, DEMO |
| PLT-027 | The product shall support machine-readable configuration and policy-as-code without making all governance dependent on one policy language or vendor. | TEST |
| PLT-028 | The product shall provide localization and accessibility for the administrative and customer interfaces. | TEST, IREV |
| PLT-029 | The product shall support Indian languages required by configured customer and service profiles, including text and speech where applicable. | TEST |
| PLT-030 | The product shall support data export, tenant offboarding, legal hold, retention, deletion, portability, and verified destruction. | TEST, HAPP |

## 11. LLM, skill-runtime, and protocol portability requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| LLM-001 | Canonical role, capability, policy, workflow, evaluation, and evidence semantics shall not depend on a single LLM vendor, model, agent SDK, prompt format, or hosted service. | INS, TEST |
| LLM-002 | Provider and harness adapters shall translate canonical artifacts into the documented contracts of Codex/OpenAI, Claude/Anthropic, Gemini, Kimi, nominated GLM/ZLM-class or other frontline models, Paperclip, and future runtimes. | DEMO, TEST |
| LLM-003 | A runtime without native Agent Skills support shall be supported through a controlled harness loader that supplies equivalent instructions, resources, tools, and policies where technically possible. | DEMO, TEST |
| LLM-004 | Runtime projection shall preserve canonical objectives, authority, prohibitions, input/output contracts, evidence, and evaluation semantics while allowing documented runtime-specific optimization. | TEST, IREV |
| LLM-005 | Unsupported semantics shall be declared as compatibility gaps and shall not be silently dropped during projection. | TEST |
| LLM-006 | Every provider, model, version, runtime, reasoning configuration, tool configuration, and projection version shall be certified separately for each approved risk tier. | TEST |
| LLM-007 | Structural compatibility shall not be represented as behavioral or runtime compatibility. | TEST, IREV |
| LLM-008 | Provider changes, model aliases, deprecations, context changes, tool changes, safety behavior, and pricing changes shall trigger impact analysis and appropriate re-evaluation. | TEST |
| LLM-009 | The platform shall maintain a provider capability matrix covering modalities, context, structured output, tools, MCP, code execution, network, files, skills, agents, streaming, batch, data retention, residency, and security controls. | INS, TEST |
| LLM-010 | Model selection shall be policy-controlled and based on task evaluation, not reputation, benchmark marketing, or model agreement. | TEST, IREV |
| LLM-011 | The platform shall support commercial hosted models, private endpoints, sovereign services, and approved self-hosted/open-weight models. | DEMO |
| LLM-012 | Tenant policy shall be able to restrict providers, regions, models, tools, data classes, retention behavior, and cross-border processing. | TEST |
| LLM-013 | Prompts shall use provider-neutral intent and contracts where possible; provider-specific prompt tuning shall live in versioned projections. | INS, TEST |
| LLM-014 | The platform shall normalize tool calls, errors, citations, usage, latency, safety outcomes, and evidence without hiding provider-specific details. | TEST |
| LLM-015 | The platform shall detect and handle truncation, context overflow, refusal, safety interruption, malformed structured output, tool mismatch, rate limit, timeout, and provider outage. | TEST |
| LLM-016 | Fallback between providers shall require compatible certification, data-policy permission, explicit provenance, and no reduction of mandatory controls. | TEST, IREV |
| LLM-017 | The platform shall support side-by-side and blind comparative evaluations across providers using the same cases, data, tools, budgets, and graders where feasible. | TEST |
| LLM-018 | Evaluation shall distinguish model quality, skill quality, tool quality, retrieval quality, workflow quality, and harness quality. | TEST, ANALYSIS |
| LLM-019 | No model output shall directly authorize a consequential action merely because the model reports high confidence. | TEST |
| LLM-020 | The canonical format shall track the Agent Skills specification where useful but shall not force non-skill artifacts into SKILL.md. | TEST, IREV |
| LLM-021 | MCP support shall be version-negotiated and shall implement authenticated, authorized, schema-validated, observable, rate-limited, and tenant-bound tools/resources. | TEST, IREV |
| LLM-022 | MCP servers and clients shall be treated as supply-chain and trust-boundary components subject to allowlisting, provenance, least privilege, prompt-injection controls, and revocation. | TEST, IREV |
| LLM-023 | Webhooks shall be authenticated, integrity-protected, replay-resistant, idempotent, retry-safe, rate-limited, and auditable. | TEST |
| LLM-024 | Plugins and extensions shall declare permissions, dependencies, data access, network access, code execution, update channel, signature, and compatibility. | TEST |
| LLM-025 | The platform shall expose a stable internal capability API so changes in vendor-native skill features do not require rewriting business capabilities. | TEST, DEMO |

## 12. Codex–Claude division and collation requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| COL-001 | Codex and Claude may share authoring, reviewing, evaluation, and remediation work, but neither provider shall be the canonical source of truth. | INS |
| COL-002 | Work shall be divided by stable artifact or requirement IDs with disjoint write scopes, declared dependencies, expected outputs, and acceptance tests. | TEST |
| COL-003 | A machine-readable allocation ledger shall record work item, author runtime/model, reviewer runtime/model, source hashes, template/schema versions, branch/worktree, lease, status, and evidence. | TEST |
| COL-004 | Parallel authors shall begin from the same approved canonical schema, terminology, source manifest, policy set, and style contract. | TEST |
| COL-005 | Collation shall occur through version control and deterministic validation/projection pipelines, not manual copy-and-paste between chat sessions. | DEMO, TEST |
| COL-006 | Authors shall not edit shared indexes, generated manifests, aggregate reports, or another author's scope during a parallel authoring wave. | TEST |
| COL-007 | One designated integration owner shall resolve schema-compliant merge conflicts and shall not waive failed tests. | TEST, IREV |
| COL-008 | High-risk artifacts authored by Codex should be reviewed using Claude or another independently configured runtime, and vice versa, in addition to deterministic checks. | TEST, IREV |
| COL-009 | Cross-provider review shall resolve applicable requirements independently rather than merely critique the author's checklist. | IREV |
| COL-010 | The platform shall detect superficial agreement, duplicated reasoning, shared-source blind spots, and correlated grader bias. | TEST, ANALYSIS |
| COL-011 | Reviewer findings shall bind to the exact artifact hash and shall remain open until the remediated hash is independently retested. | TEST |
| COL-012 | Provider-specific changes made during projection shall be diffed against canonical semantics and independently reviewed. | TEST, IREV |
| COL-013 | Each provider shall run its own conformance suite; passing on Codex shall not imply passing on Claude, Gemini, Paperclip, or another model. | TEST |
| COL-014 | Interactive subscriptions and unattended API/CLI execution shall be treated as distinct entitlements, costs, limits, and operating modes. | INS, HAPP |
| COL-015 | The platform shall support manual controlled exchange for early work and automated API/CLI adapters for scale without embedding personal credentials into artifacts. | DEMO, TEST |
| COL-016 | Usage limits, concurrency, cost, rate limits, and interrupted sessions shall be captured honestly and shall support resumable allocation. | TEST |
| COL-017 | No agent shall claim a delegated artifact was reviewed or tested unless the corresponding evidence was received and validated. | TEST |
| COL-018 | The collation process shall produce canonical manifests, unresolved-conflict reports, validation results, review status, runtime status, and release eligibility. | TEST |
| COL-019 | A golden cross-provider sample set shall be completed before scaling authoring to the full catalogue. | TEST, HAPP |
| COL-020 | Work allocation shall optimize for reviewer independence and domain competence, not an arbitrary 50/50 split between providers. | ANALYSIS, IREV |

## 13. Multi-tenancy and deployment requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| TEN-001 | Multi-tenant identity, administration, policy, metering, audit, and lifecycle management shall exist from the first MVP release. | DEMO, TEST |
| TEN-002 | Tenant data, prompts, memory, vectors, files, code, secrets, tools, models, evidence, logs, and backups shall be logically isolated and optionally physically isolated. | TEST, IREV |
| TEN-003 | The platform shall support a shared management/control plane with tenant-isolated execution and data planes. | DEMO, TEST |
| TEN-004 | A customer shall be able to deploy both control and execution planes fully within its own environment when required. | DEMO |
| TEN-005 | Supported topologies shall include on-premises, self-hosted, private cloud, public cloud, hybrid cloud, and multi-cloud. | DEMO |
| TEN-006 | Deployment descriptors shall be portable and shall isolate provider-specific infrastructure details behind approved profiles. | TEST |
| TEN-007 | Tenant isolation shall be tested for identifiers, authorization, storage, caches, queues, search, vectors, logs, metrics, tracing, backups, support access, and failure paths. | TEST, IREV |
| TEN-008 | Each tenant shall control allowed providers, models, regions, integrations, skills, policies, retention, data classes, budgets, and approval chains within mandatory global constraints. | DEMO, TEST |
| TEN-009 | Tenant-specific policy shall not weaken platform safety, legal obligations, contractual isolation, or operator security without an authorized exception. | TEST |
| TEN-010 | Data residency and cross-border transfer rules shall be enforceable per data class, customer, processing purpose, provider, and backup location. | TEST, HAPP |
| TEN-011 | Encryption keys shall support per-tenant separation, rotation, revocation, customer-managed keys, and HSM/KMS-backed protection where required. | TEST, IREV |
| TEN-012 | Tenant onboarding shall verify legal entity, contract, data classification, deployment, integrations, identity federation, controls, service scope, and acceptance criteria. | INS, HAPP |
| TEN-013 | Tenant offboarding shall support export, revocation, access termination, retention/legal hold, deletion, key destruction, and evidence of completion. | TEST, HAPP |
| TEN-014 | Service operators shall use approved, time-bound, purpose-bound support access with tenant visibility and audit. | TEST |
| TEN-015 | Break-glass access shall require strong authentication, reason, limited duration, monitoring, post-event review, and customer notification where required. | TEST, IREV |
| TEN-016 | No tenant shall infer another tenant's existence, identifiers, usage, models, vulnerabilities, costs, or operational state through APIs, errors, timing, or resource contention. | TEST |
| TEN-017 | Resource quotas and noisy-neighbor controls shall apply to compute, model usage, storage, concurrency, queues, network, and integrations. | TEST |
| TEN-018 | The platform shall support single-tenant premium isolation and regulated-environment deployment without creating a separate product fork. | DEMO |
| TEN-019 | Upgrades shall support compatibility checks, tenant rollout rings, canaries, rollback, and regulated change approvals. | TEST, DEMO |
| TEN-020 | Offline and restricted-network deployments shall support controlled updates, signed bundles, local models/tools, evidence export, and revocation lists. | DEMO, TEST |

## 14. Security, privacy, and supply-chain requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| SEC-001 | The platform shall use zero-trust principles: authenticate and authorize every human, agent, workload, tool, service, and data access using current context. | TEST, IREV |
| SEC-002 | Security controls shall use defense in depth and shall not rely solely on prompts, model refusals, network location, or user training. | IREV, TEST |
| SEC-003 | Threat modeling shall cover platform, tenant, product, AI/model, agent, skill, MCP/tool, software supply chain, insider, and commercial-service threats. | INS, IREV |
| SEC-004 | Threat models shall identify actors, assets, trust boundaries, entry points, abuse cases, threat scenarios, controls, residual risk, and tests. | TEST, IREV |
| SEC-005 | Identity shall use strong authentication, federation, workload identity, short-lived credentials, and phishing-resistant factors for privileged access where supported. | TEST |
| SEC-006 | Authorization shall combine role, attributes, relationship, purpose, tenant, task, data class, environment, risk, time, approval, and separation-of-duties context. | TEST |
| SEC-007 | Privileged access shall use just-in-time elevation, approval, session recording, command/action restriction, and periodic access review. | TEST, IREV |
| SEC-008 | Secrets shall be discovered, removed from source and prompts, stored in approved vaults, rotated, scoped, audited, and revoked on compromise or offboarding. | TEST |
| SEC-009 | Data shall be encrypted in transit and at rest using approved algorithms, protocols, key lengths, certificate lifecycles, and cryptographic agility. | TEST, IREV |
| SEC-010 | The platform shall maintain a cryptographic inventory and migration plan, including post-quantum readiness where customer or network profiles require it. | INS, ANALYSIS |
| SEC-011 | Input validation and output encoding shall be contextual, schema-aware, deny-by-default for unsafe structures, and applied at every trust boundary. | TEST |
| SEC-012 | APIs shall enforce object, property, function, tenant, and sensitive-business-flow authorization; authentication alone shall not grant data access. | TEST, IREV |
| SEC-013 | The platform shall protect against injection, command execution, SSRF, deserialization, traversal, request smuggling, mass assignment, insecure file handling, and unsafe downstream consumption. | TEST |
| SEC-014 | Agent security shall test direct and indirect prompt injection from users, documents, code, websites, APIs, tools, logs, images, messages, and retrieved knowledge. | TEST, IREV |
| SEC-015 | The system shall preserve instruction/data boundaries and reject attempts by untrusted content to alter authority, policy, tools, memory, reviewers, evidence, or goals. | TEST |
| SEC-016 | Model output shall be treated as untrusted until schema, policy, authorization, content, and downstream safety checks pass. | TEST |
| SEC-017 | Tools and MCP servers shall execute in constrained environments with allowlisted operations, filesystem/network boundaries, resource limits, and audit. | TEST, IREV |
| SEC-018 | High-risk code execution shall use sandboxing, disposable workspaces, egress restrictions, non-production credentials, and artifact scanning. | TEST |
| SEC-019 | Production changes shall be performed through approved delivery mechanisms and shall not permit an agent to bypass protected branches, pipelines, or deployment gates. | TEST |
| SEC-020 | Source and binary repositories shall enforce branch protection, signed provenance, review, immutable releases, and controlled artifact promotion. | TEST |
| SEC-021 | Every release shall generate and validate SBOMs for software, containers, models, datasets, skills, plugins, MCP servers, and relevant dependencies. | TEST |
| SEC-022 | Dependencies shall be subject to provenance, license, vulnerability, malware, typosquatting, maintainer, integrity, update, and transitive-risk analysis. | TEST, IREV |
| SEC-023 | Builds shall be reproducible or produce documented variance, isolated from developer environments, and protected against dependency confusion and build tampering. | TEST |
| SEC-024 | SAST, SCA, secret scanning, IaC scanning, container scanning, configuration scanning, API security testing, DAST, fuzzing, and manual review shall be risk-triggered and evidence-producing. | TEST |
| SEC-025 | VAPT and red-team activity shall require explicit written authorization, in-scope targets, time window, allowed techniques, data handling, rate/intensity, stop conditions, contacts, cleanup, and evidence protection. | INS, HAPP |
| SEC-026 | The platform shall prohibit unauthorized access, malware, credential theft, persistence, evasion, destructive exploitation, data theft, and concealment regardless of agent role. | TEST |
| SEC-027 | Findings shall use normalized severity plus business impact, exploitability, affected assets/tenants, evidence confidence, remediation, retest, and SLA. | TEST, IREV |
| SEC-028 | Release shall be blocked by unresolved blocker/critical findings and by any failed mandatory control regardless of a model's recommendation. | TEST |
| SEC-029 | Security evidence shall prefer reproducible commands, machine-readable reports, source references, traces, and signed artifacts over screenshots alone. | IREV |
| SEC-030 | Privacy engineering shall implement purpose limitation, data minimization, consent/notice, access control, retention, deletion, correction, portability, breach response, and rights handling as applicable. | TEST, HAPP |
| SEC-031 | Sensitive personal, KYC, biometric, financial, authentication, card, health, employee, confidential, and regulated data shall use explicit classifications and handling rules. | TEST |
| SEC-032 | Production data shall not be used in development, evaluation, model training, or demonstrations without approved legal basis, minimization, masking/tokenization, and environment controls. | TEST, HAPP |
| SEC-033 | The platform shall provide DLP for prompts, outputs, files, logs, tools, network egress, support sessions, and model-provider requests. | TEST, IREV |
| SEC-034 | Logs shall avoid prohibited sensitive content while retaining sufficient security, fraud, operational, and audit evidence. | TEST, IREV |
| SEC-035 | Security monitoring shall correlate identity, agent, model, tool, data, API, network, code, deployment, and tenant events and support rapid containment. | TEST, DEMO |
| SEC-036 | Incident response shall cover cyber incidents, privacy breaches, prompt injection, model compromise, data poisoning, supply-chain compromise, tenant leakage, fraudulent agent activity, and evidence tampering. | DEMO, TEST |
| SEC-037 | The platform shall support rapid revocation of users, agents, models, tools, skills, integrations, tokens, certificates, keys, and releases. | TEST, DEMO |
| SEC-038 | Backups and recovery copies shall preserve tenant isolation, encryption, integrity, retention, malware protection, and restore testing. | TEST |
| SEC-039 | Security controls shall be mapped to current applicable OWASP ASVS, API, MASVS and GenAI requirements plus NIST, ISO, RBI/ReBIT, NPCI, SWIFT, PCI, and customer controls. | INS, IREV |
| SEC-040 | An independent security reviewer shall validate high-risk artifacts and exact remediated versions before technical security clearance. | IREV |

## 15. Data, knowledge, and evidence requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| DAT-001 | The platform shall maintain an inventory and ownership record for operational data, analytical data, documents, prompts, model inputs/outputs, features, labels, datasets, knowledge sources, and evidence. | TEST, INS |
| DAT-002 | Every data asset shall declare classification, purpose, lawful basis, owner, steward, schema, quality rules, lineage, residency, retention, access, sharing, and disposal. | TEST |
| DAT-003 | Data contracts shall define producer, consumers, semantics, schema, quality, timeliness, compatibility, privacy, security, and failure behavior. | TEST |
| DAT-004 | Schema and semantic changes shall undergo impact analysis, compatibility testing, versioning, migration, rollback, and consumer notification. | TEST |
| DAT-005 | Data quality shall measure completeness, validity, accuracy, consistency, uniqueness, timeliness, representativeness, and reconciliation as applicable. | TEST |
| DAT-006 | Financial data pipelines shall preserve transaction identity, ordering requirements, amount/currency precision, time semantics, audit trail, and reconciliation. | TEST, IREV |
| DAT-007 | Derived features, risk scores, embeddings, summaries, and labels shall retain source lineage and reproducibility information. | TEST |
| DAT-008 | Knowledge ingestion shall validate provenance, integrity, license, classification, freshness, authority, duplication, and malicious content. | TEST |
| DAT-009 | Retrieval shall be tenant-, purpose-, role-, time-, and classification-aware and shall return source identity and freshness with results. | TEST |
| DAT-010 | Answers or decisions requiring authoritative evidence shall cite retrievable source passages or structured records and shall indicate unsupported inferences. | TEST |
| DAT-011 | Vector indexes, caches, feature stores, and model memories shall inherit access, retention, deletion, residency, and tenant boundaries from source data. | TEST |
| DAT-012 | Sensitive-data tokenization shall separate token vault, keys, mappings, authorized detokenization, audit, rotation, compromise response, and deletion. | TEST, IREV |
| DAT-013 | Test data shall be synthetic by default; masked production-derived data shall require documented necessity, approvals, and re-identification risk testing. | TEST, HAPP |
| DAT-014 | Evidence shall be append-only or tamper-evident, time-stamped, attributable, hash-bound, and linked to the exact subject and execution context. | TEST, IREV |
| DAT-015 | Evidence freshness and reuse rules shall prevent evidence from another version, tenant, environment, model, dataset, or control scope from being misapplied. | TEST |
| DAT-016 | Regulatory retention and legal-hold policies shall override ordinary deletion only through authorized, visible, and auditable rules. | TEST, HAPP |
| DAT-017 | Data export and reports shall be protected against spreadsheet injection, unsafe markup, hidden content, malformed files, and unauthorized fields. | TEST |
| DAT-018 | Data migrations shall include counts, hashes, control totals, reconciliation, exception handling, rollback, and independent validation. | TEST, IREV |
| DAT-019 | The platform shall detect data and knowledge drift and trigger revalidation of dependent models, skills, rules, and reports. | TEST |
| DAT-020 | No data asset shall be used for model training or improvement merely because it was available to an agent. | TEST, HAPP |

## 16. AI, ML, generative-AI, and model-risk requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| AIG-001 | Every AI use case shall have a documented business purpose, affected users, decision role, benefits, harms, alternatives, data, model, controls, owner, and exit criteria. | INS, IREV |
| AIG-002 | AI use cases shall be classified by customer impact, financial impact, legal effect, autonomy, explainability need, reversibility, data sensitivity, and systemic risk. | TEST, HAPP |
| AIG-003 | The platform shall distinguish decision support, recommendation, ranking, detection, automation, generation, conversation, and autonomous action. | TEST |
| AIG-004 | A human shall make or approve decisions producing significant legal, financial, regulatory, employment, eligibility, account-blocking, or suspicious-activity-reporting effects unless explicitly authorized otherwise. | TEST, HAPP |
| AIG-005 | Model development shall record dataset versions, features, labels, code, configuration, seeds, environment, training process, metrics, limitations, and reproducibility evidence. | TEST |
| AIG-006 | Model inventory shall include third-party, foundation, fine-tuned, embedded, rules-based, statistical, document, speech, fraud, AML, and agentic models. | TEST |
| AIG-007 | Model cards or equivalent records shall cover intended use, prohibited use, data, performance, subgroup analysis, limitations, security, privacy, explainability, monitoring, and approval status. | INS, IREV |
| AIG-008 | AI systems shall be evaluated for validity, reliability, safety, security, resilience, transparency, explainability, privacy, fairness, accountability, and human oversight proportional to risk. | TEST, IREV |
| AIG-009 | Evaluation datasets shall be representative, independently governed, versioned, access-controlled, contamination-checked, and separated from training data. | TEST |
| AIG-010 | Metrics and thresholds shall be use-case-specific and include uncertainty and confidence intervals where statistically meaningful. | ANALYSIS, IREV |
| AIG-011 | Fraud and AML models shall evaluate class imbalance, false-positive operational burden, false-negative risk, drift, delayed labels, adversarial behavior, and investigator outcomes. | TEST, IREV |
| AIG-012 | Customer-support and voice models shall evaluate factuality, identity verification, disclosure, privacy, harmful advice, escalation, language/dialect performance, latency, interruption, and complaint outcomes. | TEST, IREV |
| AIG-013 | Cheque/document models shall evaluate image quality, extraction accuracy, field-level confidence, alteration/duplicate detection, signature risk, human referral, and document-type variation. | TEST, IREV |
| AIG-014 | Generative AI shall use grounded sources for regulated or customer-specific answers and shall abstain when evidence is insufficient or stale. | TEST |
| AIG-015 | Retrieval-augmented systems shall test retrieval quality, authorization leakage, poisoned sources, conflicting sources, citation correctness, and answer faithfulness. | TEST |
| AIG-016 | Agentic systems shall test goal manipulation, prompt injection, tool misuse, authority escalation, memory poisoning, excessive agency, loop/stall, and unsafe handoffs. | TEST, IREV |
| AIG-017 | Models shall not autonomously modify their own approved weights, prompts, skills, policies, tools, datasets, or thresholds in production. | TEST |
| AIG-018 | Online learning or adaptive thresholds shall require a separately approved, bounded, monitored, reversible, and validated control profile. | TEST, HAPP |
| AIG-019 | Models and prompts shall be promoted through development, validation, staging, canary, and production states with independent model validation. | TEST, IREV |
| AIG-020 | Model validators shall be independent of model developers for high-risk use cases and shall have access to sufficient data, code, evidence, and challenge tools. | IREV |
| AIG-021 | Explainability shall be appropriate to the model, user, decision, and regulatory context and shall not invent causal explanations. | TEST, IREV |
| AIG-022 | Fairness analysis shall identify relevant groups, proxy risks, measurement limitations, disparate outcomes, mitigation, and monitoring consistent with lawful data use. | ANALYSIS, HAPP |
| AIG-023 | AI security shall cover model extraction, inversion, membership inference, evasion, poisoning, backdoors, adversarial examples, prompt injection, denial of service, and unsafe model supply chains. | TEST, IREV |
| AIG-024 | Third-party models shall undergo due diligence for terms, data use, retention, residency, security, availability, change controls, evaluation, and exit. | INS, HAPP |
| AIG-025 | Model routing, ensembles, agents, and fallback shall expose which model produced or influenced each material output. | TEST |
| AIG-026 | Production monitoring shall cover quality, drift, bias indicators, safety, security, latency, cost, tool failures, user overrides, appeals, and business outcomes. | TEST, DEMO |
| AIG-027 | Monitoring thresholds shall trigger warn, degrade, human-review, rollback, disable, quarantine, or incident workflows. | TEST |
| AIG-028 | The platform shall support champion/challenger tests without allowing an unapproved challenger to affect customers or production decisions. | TEST |
| AIG-029 | User feedback and corrections shall be protected against manipulation, poisoning, privacy breach, and majority-vote bias. | TEST, IREV |
| AIG-030 | Synthetic data shall be labeled, quality-checked, privacy-tested, bias-assessed, and prevented from obscuring real-world performance gaps. | TEST |
| AIG-031 | AI-generated code, tests, reports, conversations, decisions, and media shall retain provenance and disclosure appropriate to context. | TEST |
| AIG-032 | The platform shall implement the applicable NIST AI RMF, ISO/IEC 42001 and 23894, RBI FREE-AI, OWASP GenAI, and organization/customer AI-control mappings. | INS, IREV |
| AIG-033 | Every high-risk AI system shall have a documented kill switch, fallback operating procedure, incident plan, owner, and recovery test. | TEST, DEMO |
| AIG-034 | Customers and affected users shall have appropriate explanation, correction, complaint, appeal, and human-escalation mechanisms. | DEMO, HAPP |
| AIG-035 | AI systems shall be retired when purpose, legal basis, data quality, model support, performance, security, or control effectiveness falls below approved limits. | TEST, HAPP |

## 17. Banking, payments, financial crime, and tokenization requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| BNK-001 | Every banking capability shall declare the regulated entities, customer roles, accounts, instruments, channels, schemes, currencies, jurisdictions, ledgers, settlement model, and authorities in scope. | INS, HAPP |
| BNK-002 | Payment processing shall preserve monetary precision, currency semantics, transaction identity, idempotency, ordering requirements, integrity, non-repudiation, reconciliation, and auditability. | TEST, IREV |
| BNK-003 | Transaction state machines shall define initiation, validation, authorization, posting, clearing, settlement, reversal, refund, return, dispute, reconciliation, exception, and terminal states as applicable. | TEST |
| BNK-004 | Duplicate, replay, delayed, lost, out-of-order, partial, retried, timed-out, and ambiguous transaction outcomes shall be explicitly handled and tested. | TEST |
| BNK-005 | Distributed transactions shall use approved consistency, reservation, saga, compensation, outbox/inbox, and reconciliation patterns appropriate to financial risk. | TEST, IREV |
| BNK-006 | Ledger-impacting actions shall provide balanced-entry or equivalent accounting controls, immutable audit trail, business date/value date, and repair through authorized adjustment rather than silent mutation. | TEST, IREV |
| BNK-007 | Maker-checker, limits, velocity, beneficiary controls, device/session risk, authentication, sanctions, fraud, and approval controls shall be evaluated before authorized transaction completion. | TEST |
| BNK-008 | Every high-volume payment product shall define workload model, peak and burst TPS, concurrency, payload, latency percentiles, availability, recovery, consistency, and degradation requirements. | ANALYSIS, HAPP |
| BNK-009 | Capacity claims shall be supported by production-representative performance, endurance, failover, recovery, and reconciliation evidence. | TEST, IREV |
| BNK-010 | The platform shall support 24x7x365 operation profiles with no untested single point of failure for critical payment paths. | TEST, DEMO |
| BNK-011 | UPI capabilities shall distinguish NPCI, PSP bank, remitter bank, beneficiary bank, TPAP, PPI, merchant, customer, service provider, and other authorized participant roles. | TEST, HAPP |
| BNK-012 | UPI flows shall use current authorized specifications and circulars for onboarding, authentication, transaction, mandate, complaint, dispute, reversal, reconciliation, settlement, limits, risk, certification, and data controls. | TEST, HAPP |
| BNK-013 | UPI customer and transaction data shall not be reused for unrelated AI, cross-selling, or model training without applicable authority, purpose, consent, and scheme permission. | TEST, HAPP |
| BNK-014 | ISO 20022 implementations shall pin message definition, business application header, code-set, schema, usage guideline/variant, market practice, and effective version. | TEST |
| BNK-015 | ISO 20022 validators shall perform structural, semantic, code-set, cross-field, business-rule, participant, duplicate, and market-practice checks and report precise failures. | TEST |
| BNK-016 | ISO 20022 transformations shall preserve meaning, document data loss or enrichment, provide field lineage, and support round-trip and golden-message tests. | TEST, IREV |
| BNK-017 | The platform shall support payment, cash-management, securities, trade-finance, card, FX, and other ISO 20022 domains activated by product profile. | DEMO |
| BNK-018 | SWIFT capabilities shall separate message creation, validation, repair, approval, transmission, acknowledgement, screening, reconciliation, investigation, and archival duties. | TEST |
| BNK-019 | SWIFT deployment shall resolve architecture type and applicable CSCF mandatory/advisory controls and shall retain independent-assessment evidence. | INS, IREV |
| BNK-020 | SWIFT message and interface access shall enforce least privilege, strong authentication, four-eyes controls, secure zones, integrity monitoring, anomaly detection, and incident response. | TEST, IREV |
| BNK-021 | Financial-message screening shall use current authorized sanctions/watchlists and shall record list version, matching method, threshold, disposition, reviewer, and evidence. | TEST, HAPP |
| BNK-022 | Fraud capabilities shall support real-time and batch signals, rules, models, graph/link analysis, device/channel behavior, velocity, beneficiary risk, mule indicators, and case feedback. | DEMO, TEST |
| BNK-023 | Fraud actions shall distinguish alert, step-up authentication, hold, decline, block, investigation, customer contact, and regulatory action with explicit human/automated authority. | TEST, HAPP |
| BNK-024 | Fraud evaluation shall measure monetary loss prevented, false positives, false negatives, customer friction, investigator effort, detection latency, and adversarial adaptation. | TEST, ANALYSIS |
| BNK-025 | AML capabilities shall support customer risk, transaction monitoring, sanctions/PEP, adverse media, network analysis, alert/case management, investigation, and evidence preparation. | DEMO, TEST |
| BNK-026 | Agents may assist suspicious-activity analysis but shall not autonomously file, suppress, or disclose regulated reports unless expressly authorized by applicable law and accountable policy. | TEST, HAPP |
| BNK-027 | KYC capabilities shall support identification, verification, CKYCR-related processes where applicable, beneficial ownership, risk classification, periodic update, monitoring, consent/notice, correction, and audit. | DEMO, HAPP |
| BNK-028 | KYC tokenization shall minimize exposure of identity data while preserving authorized detokenization, referential integrity, purpose controls, revocation, correction, retention, and evidentiary trace. | TEST, IREV |
| BNK-029 | Reusable-KYC or verifiable-credential solutions shall establish issuer, holder, verifier, trust registry, consent/presentation, revocation, selective disclosure, assurance level, and legal acceptance. | TEST, HAPP |
| BNK-030 | Cheque-clearing capabilities shall support image/record intake, quality, duplicate checks, field extraction, account/instrument validation, risk indicators, clearing, return reasons, reconciliation, archival, and exceptions. | DEMO, TEST |
| BNK-031 | AI indicators for signatures, alterations, counterfeit documents, or cheque fraud shall be advisory unless an approved policy authorizes automated treatment at the measured risk level. | TEST, HAPP |
| BNK-032 | Asset-tokenization capabilities shall not proceed beyond sandbox or approved environment without legal classification of the asset, token, issuer, holder rights, custody, transfer, settlement, tax, accounting, insolvency, and regulatory obligations. | HAPP, IREV |
| BNK-033 | Tokenized-asset ledgers shall reconcile on-chain and off-chain authoritative records and define which record prevails for each legal and operational purpose. | TEST, HAPP |
| BNK-034 | Smart contracts shall undergo requirements traceability, deterministic testing, invariant/property testing, formal analysis where justified, security review, key governance, upgrade controls, and emergency pause design. | TEST, IREV |
| BNK-035 | Private-key, wallet, custody, signing, recovery, transaction-approval, and HSM/MPC controls shall be risk-assessed and independently reviewed. | TEST, IREV |
| BNK-036 | Banking customer-support agents shall authenticate customers proportionately, mask data, avoid exposing security controls, and escalate disputes, fraud, vulnerability, hardship, complaint, or regulated advice cases. | TEST, IREV |
| BNK-037 | Voice agents shall disclose automated identity as required, capture consent, prevent voiceprint misuse, detect social engineering, support interruption, and transfer safely to humans. | TEST, HAPP |
| BNK-038 | Every financial flow shall produce control totals and reconciliation evidence across channel, service, queue, database, ledger, clearing, settlement, and reporting boundaries. | TEST |
| BNK-039 | Business continuity exercises shall cover participant outage, network outage, provider outage, data-center/cloud failure, database failover, queue backlog, cyberattack, corrupted data, and manual fallback. | DEMO, IREV |
| BNK-040 | Banking and payment domain outputs shall be reviewed by qualified domain roles in addition to technical reviewers. | IREV |

## 18. Product, architecture, software, and platform-engineering requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| ENG-001 | Product work shall progress through problem framing, discovery, value/risk hypothesis, outcomes, scope, requirements, design, implementation, verification, release, operation, and learning. | INS, DEMO |
| ENG-002 | Requirements shall be atomic, unambiguous, feasible, necessary, testable, prioritized, sourced, traceable, and independently reviewed. | TEST, IREV |
| ENG-003 | Business rules, data rules, decision tables, process models, user journeys, misuse cases, NFRs, and acceptance criteria shall be explicit rather than buried in prose. | INS, IREV |
| ENG-004 | Architecture shall trace business and quality drivers to context, domains, components, interfaces, deployment, data, security, operations, and decisions. | TEST, IREV |
| ENG-005 | Material architecture decisions shall record context, options, trade-offs, consequences, evidence, status, owner, and review trigger. | INS |
| ENG-006 | Systems shall use clear module/service boundaries, explicit contracts, dependency rules, ownership, and independently testable units. | TEST, IREV |
| ENG-007 | The engineering lifecycle shall use version-controlled source, protected changes, peer review, automated gates, artifact promotion, and environment separation. | TEST |
| ENG-008 | Developers and agents shall use isolated branches/worktrees or equivalent change scopes and shall preserve unrelated user changes. | TEST |
| ENG-009 | Changes shall be developed with risk-proportionate test-first or test-alongside practice and shall include regression tests for defects. | TEST, IREV |
| ENG-010 | Java/Spring profiles shall define supported versions, project structure, dependency management, domain design, API, validation, security, transactions, persistence, messaging, concurrency, resilience, observability, performance, and tests. | INS, TEST |
| ENG-011 | Java services shall use explicit transaction boundaries, safe concurrency, bounded resources, resilient integration, structured errors, secure configuration, and production observability. | TEST |
| ENG-012 | Angular profiles shall define supported versions, architecture, standalone components, state, forms, HTTP, routing, authentication integration, authorization UX, security, performance, accessibility, localization, and tests. | INS, TEST |
| ENG-013 | Client-side code shall not be treated as an authorization boundary and shall not store prohibited secrets or sensitive financial/KYC data. | TEST |
| ENG-014 | Oracle and PL/SQL profiles shall define schema design, secure SQL, packages, privileges, transactions, concurrency, indexing, partitioning, bulk operations, error handling, observability, migration, tuning, RAC/Data Guard, and tests. | INS, TEST |
| ENG-015 | Database changes shall be backward-compatible where required, versioned, reviewed, rehearsed on representative scale, reversible or repairable, and independently reconciled. | TEST, IREV |
| ENG-016 | API profiles shall define OpenAPI or equivalent contracts, versioning, compatibility, validation, authentication, authorization, idempotency, pagination, quotas, errors, audit, observability, and contract tests. | TEST |
| ENG-017 | Event and messaging profiles shall define AsyncAPI or equivalent contracts, schema evolution, partitioning/order, delivery semantics, deduplication, retry, DLQ, replay, backpressure, security, and DR. | TEST |
| ENG-018 | External integrations shall define trust, authentication, authorization, encryption, timeouts, retry, circuit breaking, idempotency, reconciliation, rate limits, data contracts, and support ownership. | TEST, IREV |
| ENG-019 | UI/UX work shall include user research, information architecture, journeys, service blueprints, responsive design, design system, error/empty states, accessible content, localization, and usability tests. | INS, TEST |
| ENG-020 | Accessibility shall be designed and tested throughout the lifecycle rather than deferred to a final audit. | TEST, IREV |
| ENG-021 | Infrastructure shall be declarative, reviewable, policy-checked, least-privilege, immutable where feasible, reproducible, observable, patchable, backed up, and recoverable. | TEST |
| ENG-022 | Container and orchestration profiles shall define trusted images, non-root execution, resource bounds, network policy, secrets, admission controls, runtime security, autoscaling, disruption budgets, and recovery. | TEST, IREV |
| ENG-023 | CI/CD shall produce signed, traceable, scanned, immutable artifacts and promote the same artifact across environments. | TEST |
| ENG-024 | Environment configuration shall be externalized, schema-validated, encrypted where sensitive, versioned, compared, drift-detected, and approved. | TEST |
| ENG-025 | Feature flags shall have owners, expiry, safe defaults, audit, tenant/environment scope, and removal plans. | TEST |
| ENG-026 | Documentation shall include user, operator, support, architecture, API, security, data, deployment, recovery, and troubleshooting content kept in version with the product. | INS, TEST |
| ENG-027 | Generated code and configuration shall pass the same standards, reviews, tests, security gates, and ownership requirements as human-authored material. | TEST, IREV |
| ENG-028 | Technology upgrades shall include compatibility, dependency, security, performance, migration, rollback, operational, and support analysis. | TEST, IREV |
| ENG-029 | Unsupported or end-of-life technology shall be blocked unless a time-bound, risk-accepted exception with compensating controls exists. | TEST, HAPP |
| ENG-030 | Every technology profile shall include a golden reference implementation and negative examples used for evaluation, not copied blindly into products. | TEST, IREV |

## 19. Quality engineering and evaluation requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| QEV-001 | Every product, service, role, capability, skill, policy, workflow, tool, model, and runtime projection shall have risk-proportionate acceptance criteria and verification evidence. | TEST, INS |
| QEV-002 | The test strategy shall cover unit, component, integration, contract, system, end-to-end, UAT, regression, exploratory, accessibility, performance, resilience, security, privacy, data, AI, and operational testing as applicable. | INS, IREV |
| QEV-003 | Tests shall trace to requirements, controls, risks, designs, defects, and released versions. | TEST |
| QEV-004 | Test independence shall be proportional to risk; authors shall not be the sole approvers of tests or results for their own high-risk work. | IREV |
| QEV-005 | Test data, environments, tools, dependencies, configurations, clocks, random seeds, and external stubs shall be versioned or otherwise reproducible. | TEST |
| QEV-006 | Functional testing shall include positive, negative, boundary, state-transition, permission, concurrency, recovery, and misuse scenarios. | TEST |
| QEV-007 | Automation shall use the appropriate layer; UI automation shall not replace cheaper and more reliable unit, API, component, or contract tests. | IREV, ANALYSIS |
| QEV-008 | Selenium and Playwright profiles shall define browser/device coverage, selectors, waits, isolation, fixtures, parallelism, traces, screenshots, accessibility integration, flake control, and secure credential handling. | TEST |
| QEV-009 | API test profiles shall cover contract, schema, authentication, authorization, idempotency, concurrency, rate limits, errors, compatibility, fuzzing, and business flows. | TEST |
| QEV-010 | JMeter or equivalent load-test profiles shall define workload, data, correlation, pacing, arrival model, warm-up, steady state, peak, burst, endurance, distributed generation, monitoring, and result validity. | TEST, IREV |
| QEV-011 | Performance tests shall measure service time, end-to-end latency percentiles, throughput, errors, saturation, queueing, resource use, cost, and downstream impact. | TEST |
| QEV-012 | Performance engineering shall include capacity models, profiling, bottleneck analysis, query/JVM/client tuning, architecture remediation, and verified before/after evidence. | TEST, ANALYSIS |
| QEV-013 | Resilience testing shall cover timeout, retry storms, dependency slowdown, partial outage, node/zone/region failure, queue backlog, network partition, database failover, and recovery. | TEST |
| QEV-014 | Chaos tests shall require safety bounds, non-production-first execution, monitoring, stop conditions, rollback, authorization, and customer-impact control. | TEST, HAPP |
| QEV-015 | Accessibility testing shall combine automated checks, keyboard testing, screen-reader/assistive-technology testing, zoom/reflow, contrast, focus, semantics, error handling, and user testing where justified. | TEST, IREV |
| QEV-016 | UX and content shall be tested for comprehension, task success, error recovery, language, accessibility, and regulated disclosure—not only visual consistency. | TEST |
| QEV-017 | Agent and skill evaluations shall include representative, difficult, ambiguous, missing-input, unauthorized, unsafe, prompt-injected, tool-failure, and adversarial cases. | TEST |
| QEV-018 | With-skill and without-skill or prior-version baselines shall be executed under comparable conditions to measure actual improvement. | TEST |
| QEV-019 | Skill activation evaluations shall measure precision, recall, collision, unnecessary activation, missed activation, and dependency selection. | TEST |
| QEV-020 | Skill-combination evaluations shall test common role bundles and high-risk interactions; individually passing skills shall not imply a passing composition. | TEST |
| QEV-021 | Deterministic assertions shall use deterministic graders; qualitative output shall use calibrated independent grading with adjudication. | TEST, IREV |
| QEV-022 | LLM graders shall be versioned, evaluated for bias and agreement, prevented from seeing irrelevant author identity, and supplemented by deterministic or human checks for critical claims. | TEST, IREV |
| QEV-023 | High-risk safety, authority, isolation, privacy, financial-integrity, and release-blocking invariants shall be must-pass rather than averaged into a composite score. | TEST |
| QEV-024 | Statistical evaluation shall report sample size, uncertainty, confidence interval or other justified reliability measure, class balance, and known limitations. | ANALYSIS, IREV |
| QEV-025 | Evaluation datasets shall be protected from training contamination and shall include hidden or independently controlled cases where appropriate. | TEST, IREV |
| QEV-026 | Defect leakage, rework, false acceptance, false rejection, flakiness, and evaluator disagreement shall be tracked and used to improve the system. | DEMO |
| QEV-027 | A failed evaluation shall produce a reproducible finding and shall not be converted to pass by changing a report without rerunning the affected case. | TEST |
| QEV-028 | Changed artifacts shall trigger dependency-aware test selection plus mandatory regression suites based on risk. | TEST |
| QEV-029 | Runtime verification shall exercise actual supported Codex, Claude, Gemini, Paperclip, MCP, and other declared environments within their real constraints. | DEMO, TEST |
| QEV-030 | Unavailable telemetry, cost, token, latency, or runtime evidence shall be reported as unavailable and never estimated as observed fact. | IREV |
| QEV-031 | Golden vertical slices shall prove end-to-end product, engineering, security, evaluation, release, operation, and support workflows before bulk catalogue authoring. | DEMO, HAPP |
| QEV-032 | Each commercial service shall have acceptance suites that prove customer isolation, authorized scope, evidence quality, report integrity, SLA measurement, and remediation workflow. | TEST, IREV |
| QEV-033 | Test tools themselves shall be versioned, secured, validated against known fixtures, and monitored for false positives/negatives. | TEST |
| QEV-034 | Representative final outputs shall receive human owner review before the corresponding capability is approved for release. | HAPP |
| QEV-035 | Evaluation thresholds shall be approved per risk and use case, with no unresolved blocker/critical defects and 100% pass on mandatory invariants. | TEST, HAPP |

## 20. Non-functional requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| NFR-001 | Each product and service shall define measurable SLOs for availability, latency, throughput, correctness, durability, recovery, support, and security. | INS, HAPP |
| NFR-002 | The platform shall scale horizontally by adding stateless or partition-aware instances and vertically within documented resource limits. | TEST, DEMO |
| NFR-003 | Stateful services shall define partitioning, replication, consistency, failover, backup, restore, and capacity limits. | INS, TEST |
| NFR-004 | The management plane shall remain operable when an individual tenant execution plane, model provider, tool, or integration is unavailable. | TEST |
| NFR-005 | Critical execution shall degrade safely: queue, defer, route to certified fallback, request human action, or fail closed according to policy. | TEST |
| NFR-006 | Load shedding, backpressure, quotas, circuit breakers, timeouts, retry budgets, and admission control shall prevent cascading failure. | TEST |
| NFR-007 | Financial operations shall not sacrifice integrity, authorization, or reconciliation to meet latency or availability targets. | TEST, IREV |
| NFR-008 | Capacity planning shall model model-token usage, agent concurrency, workflow state, database, queue, storage, vector search, integration, and evidence growth. | ANALYSIS |
| NFR-009 | Performance tests shall include normal, peak, burst, endurance, failover, recovery, noisy-neighbor, and degraded-dependency workloads. | TEST |
| NFR-010 | The platform shall support active-active, active-passive, regional, and customer-selected recovery profiles where technically and legally appropriate. | DEMO, TEST |
| NFR-011 | Recovery time and recovery point objectives shall be defined per service and verified through scheduled recovery exercises. | TEST, HAPP |
| NFR-012 | Recovery testing shall verify business reconciliation and evidence integrity, not only infrastructure startup. | TEST, IREV |
| NFR-013 | The platform shall provide metrics, logs, traces, events, audit records, profiles, and business telemetry with common correlation identifiers. | DEMO, TEST |
| NFR-014 | Observability shall cover human, agent, model, tool, workflow, policy, data, infrastructure, customer, cost, and business-outcome dimensions. | DEMO |
| NFR-015 | Sensitive telemetry shall be minimized, protected, tenant-isolated, access-controlled, retained, and deleted according to policy. | TEST |
| NFR-016 | Operational dashboards and alerts shall be actionable, severity-aware, deduplicated, owned, tested, and linked to runbooks. | DEMO, TEST |
| NFR-017 | The platform shall define maximum bounded execution time, retries, delegation depth, concurrency, token/cost budget, and output size per task profile. | TEST |
| NFR-018 | Resource consumption and cost shall be attributable by tenant, product, service, role, agent, model, tool, workflow, and work item. | TEST, DEMO |
| NFR-019 | Cost controls shall support budgets, forecasts, alerts, hard limits, approvals, chargeback/showback, and anomaly detection. | TEST |
| NFR-020 | The platform shall meet applicable accessibility, usability, localization, maintainability, portability, compatibility, safety, and security quality characteristics. | TEST, IREV |
| NFR-021 | Administrative and customer APIs shall use explicit compatibility, deprecation, pagination, rate-limit, and error contracts. | TEST |
| NFR-022 | Upgrades shall avoid tenant-wide downtime where required and shall preserve durable workflow and evidence integrity. | TEST, DEMO |
| NFR-023 | The product shall support controlled operation in disconnected or intermittently connected environments. | DEMO |
| NFR-024 | Vendor and model exit shall be rehearsed using export, replacement adapter, compatibility evaluation, and data deletion/retention evidence. | TEST, ANALYSIS |
| NFR-025 | Scalability and performance claims shall be published only for specified hardware, topology, configuration, workload, data, and measurement method. | IREV |

## 21. Production operations and support requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| OPS-001 | Every production service shall have owner, SLO, service catalogue entry, dependency map, dashboard, alerts, runbook, escalation, recovery, support tiers, and maintenance plan. | INS |
| OPS-002 | Changes shall use classified standard, normal, emergency, model, data, policy, skill, and infrastructure change workflows. | TEST |
| OPS-003 | Production deployment shall require approved evidence, separation of duties, maintenance/rollout plan, monitoring, rollback, and communication. | TEST, HAPP |
| OPS-004 | Automated rollback or disablement shall use verified health and safety criteria and shall not conceal financial reconciliation or data-integrity defects. | TEST |
| OPS-005 | Incident management shall support detection, triage, command, technical response, business response, regulatory/customer communication, evidence preservation, recovery, and post-incident learning. | DEMO, TEST |
| OPS-006 | Incident severity shall consider customer, financial, regulatory, data, security, availability, AI, tenant, and reputational impact. | TEST |
| OPS-007 | Agents may assist incident response but shall not send external regulatory, customer, legal, or public communications without authorized approval. | TEST, HAPP |
| OPS-008 | Problem management shall identify root and contributing causes, systemic conditions, control failures, corrective/preventive actions, owners, and effectiveness tests. | INS, IREV |
| OPS-009 | L1, L2, and L3 support shall have explicit diagnostic, data-access, remediation, escalation, and communication boundaries. | TEST |
| OPS-010 | Support agents shall protect customer identity and data, avoid unsupported commitments, and transfer high-risk or regulated cases to authorized humans. | TEST |
| OPS-011 | Customer conversations shall retain consent, disclosure, language, channel, identity, case, action, evidence, quality, and escalation metadata as permitted. | TEST |
| OPS-012 | Voice-calling operations shall apply applicable consent, preference, calling-time, identity, recording, disclosure, opt-out, complaint, and TRAI controls. | TEST, HAPP |
| OPS-013 | Knowledge articles and runbooks shall be versioned, reviewed, tested, access-controlled, and retired when stale. | TEST |
| OPS-014 | Production support tools shall use read-only defaults, scoped actions, preview, approvals, idempotency, and audit for consequential operations. | TEST |
| OPS-015 | Database, message, ledger, and financial-data repair shall require approved scripts/procedures, backups, maker-checker, control totals, and post-change reconciliation. | TEST, HAPP |
| OPS-016 | Vulnerability operations shall ingest trusted advisories, map affected assets/SBOMs, prioritize exploitability and business impact, remediate, retest, and report across all tenants without leaking tenant information. | TEST, IREV |
| OPS-017 | Security operations shall support detection engineering, triage, investigation, containment, eradication, recovery, threat hunting, intelligence, and lessons learned. | DEMO, TEST |
| OPS-018 | Fraud and AML operations shall preserve case confidentiality, investigator independence, customer-treatment rules, evidence, and regulatory timelines. | TEST, HAPP |
| OPS-019 | Operational tasks shall support shift handoff, follow-the-sun service, on-call, acknowledgement, escalation, and fatigue/automation-risk controls. | DEMO |
| OPS-020 | Business continuity shall include technology, people/agent, site/cloud, provider, telecommunications, data, vendor, and cyber scenarios plus manual procedures. | DEMO, IREV |
| OPS-021 | Disaster-recovery exercises shall record objectives, scenario, evidence, deviations, reconciliation, findings, actions, and approval. | TEST, HAPP |
| OPS-022 | Operational capacity and license/subscription limits shall be monitored before they interrupt critical work. | TEST |
| OPS-023 | Model, tool, or provider outages shall follow certified fallback or manual procedures and shall not silently change output authority or data location. | TEST |
| OPS-024 | Decommissioning shall revoke access, stop workflows, archive required evidence, export customer data, delete other data, destroy keys, remove integrations, and verify completion. | TEST, HAPP |
| OPS-025 | Production performance and support experience shall feed reviewed requirements and capability change proposals. | TEST |

## 22. Commercial service-module requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| SVC-001 | Cybersecurity, QA, performance, accessibility, engineering, AI assurance, data, and support modules shall be consumable internally and as separately contracted external services. | DEMO |
| SVC-002 | Every service shall have a versioned catalogue entry defining outcomes, exclusions, prerequisites, authorization, inputs, outputs, SLA, evidence, pricing/metering, data handling, dependencies, and acceptance. | TEST, INS |
| SVC-003 | Customer statements of work shall resolve conflicts among customer policy, platform policy, regulation, standards, and service methods before execution. | INS, HAPP |
| SVC-004 | Security testing as a service shall verify target ownership/authorization and enforce scope, timing, intensity, technique, data, evidence, cleanup, and stop conditions. | TEST, HAPP |
| SVC-005 | Vulnerability intelligence shall map trusted advisories and exploited-vulnerability signals to tenant-isolated inventories and produce tenant-specific impact reports. | TEST, IREV |
| SVC-006 | A provider operator shall not view a customer's source, vulnerabilities, KYC, transactions, or evidence unless the service and access approval require it. | TEST |
| SVC-007 | QA as a service shall support customer requirements, environments, data, functional, automation, API, performance, accessibility, security, defect, retest, and acceptance workflows. | DEMO, TEST |
| SVC-008 | Engineering as a service shall preserve customer repository ownership, coding/architecture standards, IP, branch protection, review, evidence, and handover requirements. | TEST, IREV |
| SVC-009 | AI assurance as a service shall support independent use-case risk, data/model validation, GenAI/agent red testing, bias/explainability, monitoring, and governance review. | DEMO, IREV |
| SVC-010 | Customer-support services shall support approved channels, languages, service levels, knowledge boundaries, identity verification, recording/consent, escalation, and quality monitoring. | DEMO, TEST |
| SVC-011 | Findings and reports shall distinguish observed evidence, reproduced evidence, inference, limitation, recommendation, customer decision, and unresolved risk. | IREV |
| SVC-012 | Service reports shall be generated from the evidence ledger and independently checked for accuracy, completeness, tenant scope, sensitive data, and unsupported claims. | TEST, IREV |
| SVC-013 | Service acceptance shall require customer-authorized sign-off and shall not be inferred from report delivery or lack of response. | HAPP |
| SVC-014 | Remediation services shall use separate authorization and shall not silently modify customer environments during an assessment engagement. | TEST, HAPP |
| SVC-015 | Service-provider conflicts of interest shall be disclosed, including when the platform tests or certifies systems it developed. | INS, HAPP |
| SVC-016 | Independent assurance claims shall require organizational and personnel independence appropriate to the governing standard or contract. | IREV, HAPP |
| SVC-017 | Tenant usage, model, tool, infrastructure, storage, support, and third-party costs shall be attributable for billing and margin analysis. | TEST |
| SVC-018 | Billing shall use approved meters, rate cards, taxes, credits, disputes, adjustments, invoices, audit, and customer-visible usage. | TEST, HAPP |
| SVC-019 | Service availability, backlog, turnaround, quality, rework, SLA, findings, customer satisfaction, and profitability shall be measurable without exposing another customer. | DEMO, TEST |
| SVC-020 | Each service module shall be deployable and operated independently while using the shared governed platform through stable interfaces. | DEMO, TEST |

## 23. Experience, feedback, and controlled evolution requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| FBK-001 | The platform shall capture structured agent experience, human feedback, customer feedback, defects, incidents, overrides, appeals, evaluation failures, and outcome metrics. | DEMO, TEST |
| FBK-002 | Feedback shall retain source, consent/authority, tenant, context, artifact/model version, confidence, sensitivity, and outcome. | TEST |
| FBK-003 | Feedback shall be screened for privacy, confidentiality, manipulation, poisoning, retaliation, bias, duplication, and relevance before use. | TEST, IREV |
| FBK-004 | Experience shall create proposed changes to requirements, roles, skills, policies, standards, tools, workflows, prompts, data, models, or evaluations; it shall not alter released behavior directly. | TEST |
| FBK-005 | Proposed changes shall include evidence, expected benefit, affected scope, risk, dependencies, migration, tests, rollback, owner, and reviewer. | TEST |
| FBK-006 | Changes shall pass author-disjoint review, security analysis, regression evaluation, cross-runtime compatibility, canary, and approval proportional to risk. | TEST, IREV |
| FBK-007 | The platform shall measure whether a change improved target outcomes without unacceptable regression in safety, security, compliance, cost, latency, fairness, or usability. | TEST, ANALYSIS |
| FBK-008 | Repeated failures shall trigger root-cause analysis across model, prompt, skill, tool, data, retrieval, workflow, policy, role, and requirement layers. | ANALYSIS, IREV |
| FBK-009 | Human corrections shall not automatically become global truth; conflicting feedback shall use evidence and adjudication. | TEST |
| FBK-010 | Customer-specific learning shall remain tenant-isolated unless lawful, contractually permitted, de-identified where required, and explicitly approved for broader use. | TEST, HAPP |
| FBK-011 | The platform shall support controlled A/B or champion/challenger evaluation without exposing users to unapproved high-risk behavior. | TEST, HAPP |
| FBK-012 | Capability health shall include usage, activation quality, task success, rework, incidents, stale sources, compatibility, cost, and owner responsiveness. | DEMO |
| FBK-013 | Stale, harmful, redundant, unsupported, or consistently underperforming capabilities shall be corrected, deprecated, quarantined, or retired. | TEST, HAPP |
| FBK-014 | Change history shall preserve prior versions and their evidence for audit without making revoked content executable. | TEST |
| FBK-015 | Periodic governance review shall confirm that the platform remains aligned with company strategy, regulation, standards, customer needs, and available model/runtime capabilities. | HAPP, INS |

## 24. Artifact lifecycle, release, and MVP acceptance requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| REL-001 | Artifact lifecycle states shall distinguish proposed, requirements-approved, designed, prepared, structurally validated, security-tested, independently reviewed, evaluated, runtime-verified, human-approved, released, deprecated, revoked, and quarantined. | TEST |
| REL-002 | State transition shall require defined entry criteria, exit criteria, evidence, responsible role, reviewer/approver, and fail-closed behavior. | TEST |
| REL-003 | Evidence and approval shall bind to exact versions and relevant source, schema, dependency, model, tool, dataset, and runtime context. | TEST, IREV |
| REL-004 | Modification of an approved artifact shall invalidate affected downstream evidence and approval until impact analysis and required revalidation complete. | TEST |
| REL-005 | Release candidates shall be immutable, hash-manifested, signed, scanned, safely unpacked/reopened, and revalidated before promotion. | TEST |
| REL-006 | Runtime packages shall expose individual inspectable artifacts and shall not hide hundreds of capabilities in an opaque generated prompt or executable. | INS, IREV |
| REL-007 | Release notes shall list scope, versions, compatibility, migrations, known limitations, security status, unresolved accepted risks, evidence, and rollback/revocation. | INS, HAPP |
| REL-008 | Installation status shall be distinct from package creation, runtime verification, customer deployment, production approval, and release completion. | TEST |
| REL-009 | A release shall support rollback or safe forward repair with data, workflow, evidence, and compatibility protections. | TEST, DEMO |
| REL-010 | Emergency revocation shall prevent new activation, identify affected deployments/runs, notify owners, and provide replacement or containment guidance. | TEST, DEMO |
| REL-011 | Release integrity shall be independently verified by a role that did not author or package the release candidate. | IREV |
| REL-012 | The MVP shall not release until every approved scope item is implemented or explicitly proven inapplicable through owner-approved scope change. | TEST, HAPP |
| REL-013 | Every role in the approved reference catalogue shall have a validated role contract, capability mapping, authority test, reviewer mapping, and at least one representative scenario. | TEST, IREV |
| REL-014 | Every released skill/capability shall pass structural, activation, normal, boundary, unsafe, adversarial, combination, and supported-runtime evaluations proportional to risk. | TEST |
| REL-015 | Every mandatory policy/control shall have an enforcement point, negative test, evidence, exception path, and independent effectiveness review. | TEST, IREV |
| REL-016 | Every supported deployment topology shall pass installation, upgrade, isolation, security, backup, restore, observability, performance, and failure tests. | TEST, DEMO |
| REL-017 | Every claimed provider/runtime shall pass its conformance suite; untested providers shall be labeled structurally projectable, not runtime verified. | TEST |
| REL-018 | All golden domain paths—software delivery, fraud, AML, AI support/voice, cheque clearing, KYC tokenization, asset tokenization, ISO 20022, SWIFT, cybersecurity service, QA service, and production support—shall pass end-to-end acceptance. | TEST, HAPP |
| REL-019 | No unresolved blocker or critical defect, failed mandatory invariant, expired evidence, unresolved segregation conflict, or unapproved residual risk may remain at release. | TEST, HAPP |
| REL-020 | The final acceptance report shall state exact counts by artifact type and status and distinguish prepared, reviewed, security-cleared, evaluated, runtime-verified, human-approved, deployed, and released. | TEST, IREV |

## 25. Requirements architecture and development sequencing

The full MVP scope remains unchanged. The following are internal engineering increments that reduce integration risk; none is an externally reduced MVP:

1. Requirements and role/capability reconciliation.
2. Governed kernel: identity, role contracts, capability registry, policy, workflow, evidence, evaluation, tenancy, and audit.
3. Canonical schemas plus Codex–Claude author/reviewer collation and runtime projections.
4. Golden software-delivery path for a secure Java/Spring and Angular financial service.
5. Banking domain paths for UPI/payments, ISO 20022, SWIFT, fraud, AML, KYC, cheque clearing, and asset tokenization.
6. Commercial cybersecurity, QA, performance, accessibility, engineering, AI-assurance, and support service modules.
7. Deployment topology, scale, resilience, DR, operations, support, and integrated release qualification.
8. Full catalogue production, cross-runtime evaluation, final independent assurance, and single MVP release.

Bulk skill creation shall not start until the kernel, schemas, one representative role bundle, one cross-provider author/reviewer wave, and the first golden vertical slice pass their acceptance gates.

## 26. Source hierarchy and current reference baseline

The following hierarchy applies per tenant and product:

1. Applicable Indian law, regulator direction, court/order, scheme/network obligation, and executed contract.
2. Customer-approved organizational policy and risk decision, provided it does not violate level 1.
3. Applicable international management, engineering, security, AI, and domain standards.
4. Approved technology and runtime specifications.
5. Expert guidance and internal knowledge.
6. The 578-item register and other discovery inventories.

Primary sources checked for this draft include:

- [RBI Digital Payment Security Controls](https://systemhealth.rbi.org.in/Scripts/BS_ViewMasDirections.aspx_id%3D12032%283%29.html)
- [RBI IT Governance, Risk, Controls and Assurance Practices](https://systemhealth.rbi.org.in/Scripts/BS_ViewMasDirections.aspx_id%3D12562%283%29.html)
- [RBI KYC Amendment Directions 2025](https://www.rbi.org.in/scripts/NotificationUser.aspx/searchnew/searchnew/NotificationUser.aspx?Id=12866)
- [RBI FREE-AI reports index](https://m.rbi.org.in/Scripts/BS_ViewPublicationReport.aspx)
- [MeitY DPDP Rules 2025](https://www.meity.gov.in/documents/act-and-policies/digital-personal-data-protection-rules-2025-gDOxUjMtQWa?pageTitle=Digital-Personal-Data-Protection-Rules-2025%3B)
- [CERT-In Directions 2022](https://cert-in.org.in/PDF/CERT-In_Directions_70B_28.04.2022.pdf)
- [NPCI UPI circulars](https://www.npci.org.in/circulars/upi)
- [TRAI TCCCPR](https://trai.gov.in/tcccpr)
- [ISO 20022 repository](https://www.iso20022.org/standardsrepository)
- [SWIFT CSP document centre](https://www.swift.com/myswift/customer-security-programme-document-centre)
- [PCI DSS](https://www.pcisecuritystandards.org/standards/pci-dss/)
- [ISO/IEC 27001:2022](https://www.iso.org/standard/27001)
- [ISO/IEC 42001:2023](https://www.iso.org/standard/42001)
- [ISO/IEC 23894:2023](https://www.iso.org/cms/%20render/live/en/sites/isoorg/contents/data/standard/07/73/77304.html?browse=tc)
- [ISO/IEC 25010:2023](https://www.iso.org/standard/78176.html)
- [NIST CSF 2.0](https://www.nist.gov/publications/nist-cybersecurity-framework-csf-20)
- [NIST AI RMF](https://www.nist.gov/itl/ai-risk-management-framework)
- [NIST SSDF](https://csrc.nist.gov/projects/ssdf)
- [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/)
- [OWASP API Security](https://owasp.org/www-project-api-security/)
- [OWASP GenAI Security](https://genai.owasp.org/initiatives/top-10-for-llm-and-genai/)
- [Agent Skills specification](https://agentskills.io/specification)
- [OpenAI/Codex skill guidance](https://learn.chatgpt.com/docs/build-skills)
- [Anthropic Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
- [Gemini Agent Skills](https://geminicli.com/docs/cli/creating-skills/)
- [Model Context Protocol specification](https://modelcontextprotocol.io/specification)
- [Paperclip official repository](https://github.com/PaperclipAI/paperclip)

Before design or implementation, the standards register must pin the exact authoritative edition, effective date, licensed source location, applicability, and change-monitoring owner. This draft intentionally does not reproduce copyrighted or controlled standard text.

## 27. Explicit assumptions to review

1. “Private claude/on claude” was confirmed to mean private cloud/public cloud; Claude remains an LLM runtime option.
2. Agent-only development means agents perform operational work, while humans retain accountable approvals required by law, regulation, contract, employment authority, production authority, or risk governance.
3. Asset tokenization includes experimental or sandboxed implementation, but no token receives legal status without jurisdiction- and asset-specific approval.
4. KYC tokenization includes data-vault tokenization; reusable identity credentials or blockchain representations are separate profiles.
5. External services may assess and remediate customer systems only under separate explicit authorization.
6. “All company roles” means a comprehensive reference role catalogue plus optional domain and customer roles, not a claim that every organization must instantiate every role.
7. Role-to-skill mappings grant eligibility; the runtime loads only evaluated core and task-relevant skills.
8. Provider-neutral means portable canonical semantics and independently verified runtime projections, not identical model behavior.
9. Exact throughput, latency, availability, RTO/RPO, accuracy, fraud, AML, voice, and document-AI thresholds will be approved per product profile using representative evidence; no invented universal values are assumed.

## 28. Owner review and approval gate

This baseline and the related role-skill matrix must be reviewed for completeness, correctness, priority, authority, and scope. Requested changes will be incorporated and the requirement identifiers will remain stable; removed requirements will be marked withdrawn rather than silently reused. Architecture design and implementation planning begin only after explicit owner approval of the revised baseline.
