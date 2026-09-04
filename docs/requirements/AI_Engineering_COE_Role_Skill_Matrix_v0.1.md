# AI Engineering COE — Provider-Neutral Role and Skill Matrix

**Document ID:** AICOE-ROLE-SKILL-MATRIX  
**Version:** 0.1  
**Date:** 4 September 2026  
**Status:** DRAFT FOR OWNER REVIEW  
**Reference organization:** India-regulated banking, payments, AI, tokenization, engineering, assurance, and managed-services company

## 1. How to read this matrix

This is a reference enterprise catalogue, not a requirement to run one agent for every row. A deployed organization may combine compatible roles, instantiate several agents for one role, or staff a role with a human, AI agent, or hybrid team. Segregation-of-duties rules may prohibit particular combinations.

Every role automatically receives the universal control profile U0:

- provider-neutral role and authority contract;
- task/tenant/environment identity;
- least privilege and tool allowlisting;
- human approval and escalation rules;
- uncertainty, abstention, and fail-closed behavior;
- evidence, provenance, audit, security, privacy, and safe-use policies;
- task-relevant standards and customer overlays;
- performance evaluation and incident reporting.

“Core packages” are routinely eligible for the role. “Conditional packages” are resolved at task time. Neither column means that every listed skill is loaded into every prompt. The composition engine must load only evaluated, relevant capabilities within the role's authority and context budget.

Career bands:

| Band | Meaning |
| --- | --- |
| B0 | Board, owner, or independent governance body |
| E1 | C-suite or enterprise accountable executive |
| H2 | Function, business, product, or domain head |
| M3 | Manager, lead, or accountable service owner |
| S4 | Principal or senior specialist |
| P5 | Practitioner, engineer, analyst, or professional |
| A6 | Associate, junior professional, operator, or trainee |

Support tiers L1/L2/L3 are operational tiers and are not career bands.

### 1.1 Matrix inventory

This draft defines **267 unique provider-neutral roles**, **95 reusable capability packages**, **12 mandatory segregation-of-duties patterns**, and **15 matrix acceptance requirements**. These are reference contracts and mappings—not 267 permanently running agents and not 95 monolithic prompt files.

## 2. Skill/capability package catalogue

These packages will later be decomposed into atomic skills, deterministic tools, policies, standards, workflows, gates, and human controls. The package count is not the target skill count.

| Package | Capability area | Representative reusable skills and non-skill controls |
| --- | --- | --- |
| G01 | Strategy and operating model | Define vision, strategy, value model, operating model, OKRs, portfolio choices, business case, decision record. |
| G02 | Board and corporate governance | Board packs, governance calendar, delegations, committees, conflicts, policy approval, accountable decisions. |
| G03 | Enterprise risk and compliance | Risk taxonomy, assessment, control mapping, obligations, exceptions, residual-risk evidence, compliance monitoring. |
| G04 | Legal, privacy, and regulatory interpretation | Legal issue spotting, applicability, contract/privacy review, regulatory-change impact; human legal decisions. |
| G05 | Audit, evidence, and assurance | Evidence design, traceability, control tests, sampling, findings, remediation, independent review, audit packs. |
| G06 | Finance, procurement, and vendor governance | Budget, forecast, unit economics, procurement, outsourcing, vendor risk, contracts, invoices, financial controls. |
| G07 | Workforce, ethics, and competence | Workforce planning, role design, hiring support, learning, competence, performance, conduct, workplace policy. |
| A01 | Role, authority, and segregation | Role contracts, RACI/decision rights, delegation, least privilege, incompatibility and segregation checks. |
| A02 | Planning and decomposition | Goal-linked planning, estimation, dependency mapping, task decomposition, assignment, prioritization. |
| A03 | Multi-agent collaboration | Context handoff, work leases, parallel coordination, conflict resolution, consensus with dissent, integration. |
| A04 | Human-in-loop and escalation | Approval request, preview, risk summary, exception, blocker escalation, fallback, appeal. |
| A05 | Context and memory | Context selection, redaction, provenance, summarization, durable memory, expiry, contamination prevention. |
| A06 | Agent evaluation and observability | Role scenarios, activation tests, behavior evals, runtime comparison, agent telemetry, performance review. |
| A07 | Controlled learning | Feedback analysis, root-cause analysis, change proposal, experiment, regression, canary, rollback. |
| A08 | Agent safety and security | Injection defense, tool safety, authority boundary, data loss prevention, sandboxing, kill switch, incident response. |
| P01 | Product discovery and research | Problem framing, user/stakeholder research, market/competitor research, opportunity analysis, service blueprint. |
| P02 | Product strategy and management | Vision, strategy, outcomes, roadmap, prioritization, pricing, lifecycle, portfolio and product reviews. |
| P03 | Business analysis and requirements | Elicitation, process/rule/data modeling, stories/use cases, NFRs, acceptance, traceability, impact/change. |
| P04 | Delivery and programme management | Release/sprint planning, dependency/risk, status, benefits, governance, RAID, stakeholder communication. |
| P05 | UX, UI, and service design | Information architecture, journeys, prototypes, interaction/visual design, design system, usability. |
| P06 | Content, documentation, and localization | UX content, technical writing, regulated disclosures, knowledge articles, localization and terminology. |
| P07 | Accessibility engineering | Accessible design, WCAG/application mapping, assistive technology, audit, remediation and conformance evidence. |
| R01 | Enterprise architecture | Capability/business/application/data/technology architecture, principles, standards, roadmaps, portfolio conformance. |
| R02 | Solution and technical architecture | Drivers, context, domains, modules/services, APIs, deployment, decisions, HLD/LLD, conformance. |
| R03 | Security and privacy architecture | Threat model, trust boundaries, zero trust, IAM, cryptography, data protection, abuse cases and controls. |
| R04 | Data architecture | Data domains, models, contracts, lineage, storage, quality, retention, analytics and migration. |
| R05 | Integration and messaging architecture | API/event/file patterns, ISO semantics, schema governance, routing, reliability, reconciliation. |
| R06 | Cloud and platform architecture | Landing zones, multi-tenancy, containers, orchestration, networks, observability, resilience, deployment topology. |
| R07 | AI and agent architecture | AI use-case architecture, RAG, model/tool orchestration, guardrails, memory, evaluation and human oversight. |
| R08 | Performance and resilience architecture | Capacity, scalability, HA, DR, queueing, caching, consistency, failure modes, performance budgets. |
| E01 | Java and Spring engineering | Java domain logic, Spring services, security, data, transactions, messaging, concurrency, resilience and tests. |
| E02 | Angular engineering | Angular architecture, components, state, forms, HTTP, security, accessibility, performance and tests. |
| E03 | Oracle and PL/SQL engineering | Secure SQL/PLSQL, schema, packages, transactions, bulk operations, indexing, partitioning, migration and tuning. |
| E04 | API engineering | OpenAPI, REST/gRPC/GraphQL profiles, validation, authn/authz, idempotency, errors, versioning and contract tests. |
| E05 | Event and message engineering | Kafka, MQ, Artemis, schemas, ordering, delivery, retry/DLQ, replay, backpressure, security and DR. |
| E06 | DevOps and CI/CD | Source workflows, pipelines, build, test, scan, sign, promote, deploy, rollback and developer experience. |
| E07 | Infrastructure and platform engineering | IaC, cloud/on-prem, containers, Kubernetes/OpenShift, networks, secrets, policy, autoscaling and operations. |
| E08 | Database engineering and administration | Database design, security, backup, recovery, HA, capacity, performance, patching, monitoring and support. |
| E09 | Mobile and channel engineering | Mobile/PWA, secure storage, device/channel integration, offline sync, release and mobile testing. |
| E10 | Enterprise integration engineering | Camel/ESB, SOAP/REST, SFTP/files, partner integration, transformation, routing and reconciliation. |
| D01 | Data governance and quality | Ownership, classification, catalog, contracts, lineage, quality, privacy, retention and access. |
| D02 | Data engineering and analytics | Ingestion, batch/stream, transformation, warehouse/lakehouse, BI, controls, observability and reconciliation. |
| D03 | Data science and model development | Problem formulation, exploration, features, training, experiments, metrics, explainability and model cards. |
| D04 | MLOps and AI platform | Feature/model/prompt registries, pipelines, deployment, monitoring, drift, rollback and cost. |
| D05 | Independent model validation | Conceptual soundness, data, performance, robustness, bias, explainability, monitoring and challenge. |
| D06 | GenAI, RAG, and conversational AI | Prompt/context design, retrieval, grounding, agents, speech, evaluation, content safety and handoff. |
| D07 | Responsible AI and model risk | AI inventory, impact/risk, ISO/NIST/RBI mapping, fairness, transparency, human oversight and governance. |
| Q01 | Functional quality engineering | Strategy, scenarios, positive/negative/boundary/state tests, defects, regression and evidence. |
| Q02 | UI automation | Selenium/Playwright design, fixtures, selectors, waits, parallelism, trace, flake control and CI. |
| Q03 | API and contract testing | Schema/contract, auth, negative, compatibility, idempotency, concurrency, fuzz and integration tests. |
| Q04 | Performance testing | JMeter/equivalent workloads, correlation, pacing, load, stress, spike, endurance, failover and reporting. |
| Q05 | Performance engineering | Capacity models, profiling, JVM/database/client tuning, bottleneck removal and before/after evidence. |
| Q06 | Accessibility testing | Automated, keyboard, screen reader, zoom/reflow, contrast, semantics, mobile and document tests. |
| Q07 | Security testing | SAST/SCA/DAST, secrets, API, fuzz, container/IaC, VAPT, abuse and adversarial tests. |
| Q08 | UAT and business acceptance | Business scenarios, production-like data/process, user acceptance, traceability and sign-off. |
| Q09 | Quality governance and review | Quality policy, review, metrics, audit, release recommendation, defect prevention and test assurance. |
| S01 | Security governance and cyber risk | ISMS, policy, risk, controls, metrics, exceptions, regulatory mapping and assurance. |
| S02 | SSDLC and application security | Secure requirements/design/coding, threat model, code review, pipeline gates and developer guidance. |
| S03 | VAPT and offensive assurance | Authorized scope, reconnaissance, validation, exploitation bounds, evidence, reporting and retest. |
| S04 | Cloud, container, and infrastructure security | Cloud/IaC/container/Kubernetes/network configuration, posture, runtime and incident controls. |
| S05 | IAM, PAM, PKI, and cryptography | Identity lifecycle, federation, authorization, privileged access, keys, certificates, HSM and crypto agility. |
| S06 | SOC, detection, and incident response | Logging, SIEM, detections, triage, investigation, containment, recovery, forensics and post-incident review. |
| S07 | Threat intelligence and vulnerability management | Advisories, asset/SBOM impact, prioritization, patching, exposure, hunting and remediation. |
| S08 | Privacy engineering | DPIA, privacy requirements, minimization, consent, rights, tokenization, retention and breach response. |
| S09 | AI and agent security | Model/agent threat modeling, injection, poisoning, extraction, tool abuse, memory, red team and guardrails. |
| S10 | Software supply-chain security | SBOM, provenance, signing, dependency/license risk, build integrity, releases and third parties. |
| B01 | Core banking and financial accounting | Accounts, balances, postings, interest/fees, limits, customer/product, EOD, accounting and controls. |
| B02 | Payments and UPI | Payment lifecycle, UPI actors/flows, authorization, limits, risk, disputes, settlement and NPCI controls. |
| B03 | ISO 20022 | Repository, messages, schemas, BAH, code sets, usage variants, mapping, validation and testing. |
| B04 | SWIFT | FIN/ISO messages, interfaces, CSP, approvals, screening, transmission, reconciliation and investigation. |
| B05 | Fraud and mule-risk management | Signals, rules/models, graph/behavior, alert/action, cases, feedback, loss and friction measurement. |
| B06 | AML, sanctions, and financial crime | KYC/CDD risk, monitoring, PEP/sanctions, cases, investigation, reporting evidence and confidentiality. |
| B07 | KYC and identity tokenization | Identification/verification, CKYCR, beneficial owners, refresh, consent, data-vault tokens and reusable KYC. |
| B08 | Cheque and document clearing | Image quality, extraction, risk indicators, duplicate/signature, clearing, returns and exceptions. |
| B09 | Asset tokenization and digital assets | Legal classification, issuance, custody, transfer, smart contracts, settlement, lifecycle and reconciliation. |
| B10 | Clearing, settlement, disputes, and reconciliation | Clearing files/messages, settlement, control totals, breaks, adjustments, disputes and audit. |
| O01 | SRE and observability | SLOs, telemetry, alerting, capacity, toil, reliability, error budgets and service reviews. |
| O02 | IT service management | Service catalogue, incident, problem, change, request, configuration, knowledge and SLA. |
| O03 | Production support | L1/L2/L3 triage, diagnostics, safe remediation, data/message repair, escalation and handoff. |
| O04 | Customer support and success | Omnichannel cases, knowledge, identity, complaints, escalation, quality, adoption and outcomes. |
| O05 | Voice operations | Speech, disclosure, consent, identity, scripts, language, recording, opt-out, escalation and quality. |
| O06 | BCM and disaster recovery | BIA, continuity strategy, RTO/RPO, DR plans, exercises, crisis and reconciliation. |
| O07 | FinOps and capacity economics | Usage allocation, budgets, forecasting, unit cost, optimization, chargeback and anomaly detection. |
| O08 | Release and configuration management | Release evidence, versions, change calendar, environment/configuration, deployment, rollback and revocation. |
| C01 | Sales and solution consulting | Discovery, qualification, solution fit, demonstrations, value, risk and handoff. |
| C02 | Bid, contract, and commercial governance | RFP, proposal, estimates, commitments, terms, scope, pricing, approvals and obligations. |
| C03 | Account and customer success | Onboarding, adoption, service review, satisfaction, renewal, escalation and value realization. |
| C04 | Managed and professional services | Service design, SOW, authorization, delivery, evidence, acceptance, SLA, margin and independence. |
| C05 | Marketing, partnerships, and ecosystem | Positioning, content, campaigns, partner due diligence, marketplace, brand and regulated claims. |
| T01 | Tenancy, identity, and entitlement platform | Tenant lifecycle, federation, RBAC/ABAC, isolation, entitlements, keys and support access. |
| T02 | Capability registry and projections | Canonical schemas, catalog, dependencies, overlays, packaging, Codex/Claude/Gemini/Paperclip projection. |
| T03 | MCP, tools, plugins, webhooks, and adapters | Contracts, discovery, auth, policy, schemas, sandbox, lifecycle, compatibility and observability. |
| T04 | Policy and workflow platform | Policy decisions/enforcement, durable states, approvals, retries, timers, compensation and escalation. |
| T05 | Evidence, evaluation, and release integrity | Lineage, hashes, graders, baselines, findings, independent review, release manifests and verification. |
| T06 | Model gateway and routing | Provider/model registry, routing, privacy, data residency, fallback, usage, cost and conformance. |

## 3. Corporate, governance, finance, legal, risk, and commercial roles

| Role ID | Band | Provider-neutral role | Core packages | Conditional packages | Required boundary or independent counterpart |
| --- | --- | --- | --- | --- | --- |
| R-GOV-001 | B0 | Board Chair / Owner Representative | G01, G02, G03, G05 | G04, G06, D07 | Human office holder; cannot delegate fiduciary or statutory accountability to an agent. |
| R-GOV-002 | B0 | Independent Board Director | G02, G03, G05 | S01, D07, O06 | Independent challenge; no operational ownership of reviewed work. |
| R-GOV-003 | B0 | Board Risk Committee Member | G02, G03, G05 | S01, D07, B05, B06 | Human risk appetite and residual-risk authority. |
| R-GOV-004 | B0 | Board IT / Digital Committee Member | G02, R01, S01, O06 | R06, R07, D07 | Independent oversight of technology and AI strategy. |
| R-EXE-001 | E1 | Chief Executive Officer | G01, G02, G03, G06, A02 | P02, C01, C03, D07 | Human accountable executive; board reviews strategy/performance. |
| R-EXE-002 | E1 | Chief of Staff | G01, A02, A03, P04 | G02, G05, C03 | Cannot substitute for CEO/board approvals. |
| R-EXE-003 | E1 | Chief Operating Officer | G01, P04, O01, O02, C04 | O03, O04, O06, B10 | Independent risk/compliance and audit review. |
| R-EXE-004 | E1 | Chief Financial Officer | G01, G06, G03, O07 | B01, B10, C02 | Human financial statements, treasury, tax, and material-spend authority. |
| R-EXE-005 | E1 | Chief Risk Officer | G03, G05, S01, D07 | B05, B06, O06 | Independent from revenue/delivery; board risk oversight. |
| R-EXE-006 | E1 | Chief Compliance Officer | G03, G04, G05, B06 | B02, B04, B07, D07 | Human regulatory interpretation, reporting, and compliance accountability. |
| R-EXE-007 | E1 | Chief Legal Officer / General Counsel | G04, G02, C02 | G03, G06, S08, B09 | Human legal advice, privilege, contract, and legal-position authority. |
| R-EXE-008 | E1 | Data Protection Officer | G04, S08, G05, D01 | D07, B07, D06 | Statutory independence and direct escalation where applicable. |
| R-EXE-009 | E1 | Chief Human Resources Officer | G07, G01, G04 | D07, G06, P06 | Human employment, disciplinary, compensation, and workplace decisions. |
| R-EXE-010 | E1 | Chief Information Officer | G01, R01, R06, O02, O07 | S01, O06, T01 | Independent CISO/risk and audit challenge. |
| R-EXE-011 | E1 | Chief Technology Officer | G01, R01, R02, E06, E07 | R07, R08, T02, T03, T06 | Independent architecture, security, quality, and operational review. |
| R-EXE-012 | E1 | Chief Product Officer | G01, P01, P02, P03, P04 | P05, C03, B02-B09 | Independent risk/compliance and customer validation. |
| R-EXE-013 | E1 | Chief Data Officer | G01, D01, R04, D02 | D03, D04, S08 | Independent privacy, security, and model-risk review. |
| R-EXE-014 | E1 | Chief AI Officer | G01, R07, D07, D04 | D03, D05, D06, S09 | Independent model validation, risk, compliance, and board oversight. |
| R-EXE-015 | E1 | Chief Information Security Officer | S01, R03, S02, S06, G03 | S03-S10, O06 | Human cyber-risk authority; independent of engineering delivery. |
| R-EXE-016 | E1 | Chief Architect | R01, R02, R04, R05, R06 | R03, R07, R08, B01-B10 | Architecture board and independent domain/security review. |
| R-EXE-017 | E1 | Chief Audit Executive | G05, G02, G03 | S01, D07, G06 | Organizationally independent; reports to board/audit committee. |
| R-EXE-018 | E1 | Chief Commercial / Revenue Officer | C01, C02, C03, G01 | C04, C05, O07 | Legal, finance, risk, and delivery approve commitments. |
| R-EXE-019 | E1 | Chief Customer Officer | C03, O04, P01, P06 | O05, C04, B02 | Compliance/privacy oversight for customer treatment. |
| R-GOV-005 | H2 | Enterprise Risk Head | G03, G05 | S01, O06, D07 | CRO accountability and independent control-owner challenge. |
| R-GOV-006 | H2 | Regulatory Compliance Head | G03, G04, G05 | B02, B04, B06, B07 | Human regulator engagement and filing authority. |
| R-GOV-007 | H2 | Operational Risk Manager | G03, O02, O06 | B01, B10, C04 | Independent from process owner being assessed. |
| R-GOV-008 | S4 | Cybersecurity Risk Assessor | G03, S01, G05, R03 | S02-S10, T01-T06 | Must not approve own controls; CISO/risk owner accepts risk. |
| R-GOV-009 | S4 | Third-Party / Outsourcing Risk Assessor | G03, G06, G05 | S01, S10, T06, C04 | Independent procurement, legal, security, and business-owner review. |
| R-GOV-010 | S4 | Internal Auditor | G05, G03 | S01, D07, G06, O02 | Cannot audit activities the role recently operated or authored. |
| R-GOV-011 | P5 | Control Testing Specialist | G05, G03 | S01-S10, D07 | Separate control owner and finding closure authority. |
| R-GOV-012 | P5 | Policy and Standards Manager | G03, G04, G05 | S01, D07, T04 | Human policy owner approves mandatory rules. |
| R-GOV-013 | P5 | Regulatory Change Analyst | G04, G03, G05 | B02-B09, S01, D07 | Qualified legal/compliance interpretation and owner approval. |
| R-LEG-001 | S4 | Banking and Technology Legal Counsel | G04, C02, G03 | S08, B02-B09, D07 | Human legal advice and contract authority. |
| R-LEG-002 | P5 | Contract and Commercial Counsel | G04, C02, G06 | C04, S08, S10 | Human contract approval. |
| R-LEG-003 | P5 | Privacy Counsel / Privacy Specialist | G04, S08, D01 | B07, D06, O05 | DPO/legal accountability and independent DPIA review. |
| R-FIN-001 | H2 | Finance Controller | G06, G05, B01 | B10, O07 | CFO approval and audit independence. |
| R-FIN-002 | P5 | Financial Planning and Analysis Analyst | G06, G01, O07 | C04, T06 | Finance owner validates assumptions. |
| R-FIN-003 | P5 | Accounts Payable / Receivable Specialist | G06, B01 | C02, C04 | Maker-checker and human payment authority. |
| R-FIN-004 | S4 | FinOps Lead | O07, G06, O01 | T06, E07, C04 | Finance and platform owners approve budgets/commitments. |
| R-VND-001 | H2 | Procurement and Vendor Management Head | G06, G03, C02 | S10, C04, T06 | Legal, security, privacy, finance, and business owner approval. |
| R-VND-002 | P5 | Vendor / License Analyst | G06, G05 | S10, O07 | Procurement and legal approval. |
| R-HR-001 | H2 | Workforce and Organization Design Head | G07, A01, G01 | A06, D07 | Human employment and organization authority. |
| R-HR-002 | P5 | Talent Acquisition Specialist | G07, P06 | A06 | Human final hiring decision and bias review. |
| R-HR-003 | P5 | Learning and Competence Manager | G07, A06, A07 | T02, D07 | Function owners validate competence standards. |
| R-HR-004 | P5 | Employee Relations / Ethics Officer | G07, G04, G03 | D07 | Human confidential case and disciplinary authority. |
| R-COM-001 | H2 | Sales Head | C01, C02, G01 | C03, C04, C05 | Finance/legal/risk/delivery approve commitments. |
| R-COM-002 | P5 | Account Executive | C01, C02, C03 | C04, B02-B09 | No unapproved security, compliance, performance, or AI claims. |
| R-COM-003 | S4 | Solution Consultant / Presales Architect | C01, R02, P03 | R03-R08, E01-E10, B01-B10 | Delivery, security, domain, and commercial review. |
| R-COM-004 | P5 | Bid / Proposal Manager | C02, P04, P06 | C01, C04, G06 | Legal, finance, security, delivery, and executive approval. |
| R-COM-005 | H2 | Customer Success Head | C03, O04, P01 | C04, O02, B02 | Contract, privacy, and operational boundaries. |
| R-COM-006 | P5 | Customer Success Manager | C03, O04, P06 | C04, P01 | Cannot promise unapproved product, SLA, or remediation. |
| R-COM-007 | H2 | Marketing and Brand Head | C05, P06, P02 | D06, O05 | Legal/compliance approve regulated and AI claims. |
| R-COM-008 | P5 | Partnership / Alliance Manager | C05, G06, C02 | T03, T06, C04 | Vendor, security, legal, privacy, and commercial review. |

## 4. Product, business analysis, design, documentation, programme, and architecture roles

| Role ID | Band | Provider-neutral role | Core packages | Conditional packages | Required boundary or independent counterpart |
| --- | --- | --- | --- | --- | --- |
| R-PRD-001 | H2 | Head / VP of Product | P01, P02, P03, P04 | P05-P07, B01-B10, D06 | CPO, risk, compliance, architecture, and customer challenge. |
| R-PRD-002 | M3 | Group Product Manager | P01, P02, P03, P04 | C03, B01-B10, D06 | Product head and independent business/risk review. |
| R-PRD-003 | P5 | Product Manager | P01, P02, P03, P04 | P05, C03, B01-B10, D06 | Product owner/accountable sponsor approves outcomes and scope. |
| R-PRD-004 | P5 | Product Owner | P03, P04, Q08 | P01, P02, B01-B10 | Cannot self-approve release quality, security, or risk. |
| R-PRD-005 | S4 | Product Strategy and Portfolio Analyst | P01, P02, G01 | G06, C01, C03 | Executive and finance review. |
| R-BA-001 | H2 | Business Analysis Head | P03, P04, Q09 | P01, B01-B10 | Product, domain, architecture, QA, and compliance review. |
| R-BA-002 | S4 | Lead Business Analyst | P03, P04, Q08 | P01, P05, B01-B10 | Independent requirement-quality reviewer. |
| R-BA-003 | P5 | Business Analyst | P03, Q08 | P01, P05, B01-B10 | Product owner and domain SME approve business meaning. |
| R-BA-004 | P5 | Business Process Analyst | P03, P05 | O02, B01-B10 | Process owner and risk/control owner review. |
| R-BA-005 | S4 | Business Rules / Decision Analyst | P03, T04 | B05, B06, D03, D07 | Rule owner, compliance, model-risk, and QA review. |
| R-PMO-001 | H2 | Portfolio / Programme Management Head | P04, G01, G03 | G06, C04 | Executive sponsor and independent risk review. |
| R-PMO-002 | M3 | Programme Manager | P04, A02, A03 | G03, C04, B01-B10 | Sponsor approves scope/budget; assurance validates status. |
| R-PMO-003 | M3 | Project Manager | P04, A02, A03 | G03, E01-E10, Q01-Q09 | No technical/security approval merely from schedule status. |
| R-PMO-004 | P5 | Scrum Master / Delivery Facilitator | P04, A03, A07 | Q09, O01 | Product/engineering owners retain accountability. |
| R-PMO-005 | P5 | PMO Analyst | P04, G05 | G03, G06 | Programme manager validates reports and evidence. |
| R-DSN-001 | H2 | Head of Design / Experience | P05, P06, P07, P01 | C03, O04 | Product, accessibility, compliance, and user validation. |
| R-DSN-002 | S4 | Service Designer | P01, P05, P06 | O04, C03, B01-B10 | Product and operational process-owner review. |
| R-DSN-003 | P5 | UX Researcher | P01, P05 | P07, S08 | Consent, privacy, sampling, and research-ethics review. |
| R-DSN-004 | P5 | UX Designer | P05, P01, P06 | P07, E02, E09 | Product, accessibility, and usability review. |
| R-DSN-005 | P5 | UI / Visual Designer | P05, P06 | P07, E02, E09 | Design-system and accessibility review. |
| R-DSN-006 | S4 | Design System Lead | P05, P07 | E02, E09, P06 | UI engineering and accessibility conformance review. |
| R-DSN-007 | S4 | Accessibility Engineer | P07, P05, Q06 | E02, E09, P06 | Independent accessibility tester/user validation. |
| R-DSN-008 | P5 | Accessibility Tester | Q06, P07, Q01 | E02, E09 | Must be independent of implementation for formal audit. |
| R-CNT-001 | P5 | UX Content Writer | P06, P05 | P07, G04, O04 | Product, legal/compliance, accessibility review. |
| R-CNT-002 | P5 | Technical Writer | P06, E01-E10 | O01-O08, T02-T05 | Technical owner, support, security, and accessibility review. |
| R-CNT-003 | P5 | Banking / Regulatory Content Specialist | P06, G04, B01-B10 | O04, D06 | Qualified compliance/legal and domain approval. |
| R-CNT-004 | P5 | Localization and Language Specialist | P06, P07 | O05, D06 | Native-language, compliance, and accessibility review. |
| R-CNT-005 | P5 | Knowledge Manager | P06, O02, O04 | A05, D06 | Source owner, support, privacy, and expiry review. |
| R-ARC-001 | H2 | Enterprise Architecture Head | R01, G01, G03 | R02-R08, B01-B10 | Architecture governance and executive approval. |
| R-ARC-002 | S4 | Enterprise Architect | R01, R02, G01 | R03-R08, B01-B10 | Independent domain, security, data, and platform review. |
| R-ARC-003 | S4 | Solution Architect | R02, R05, R06 | R03, R04, R07, R08, B01-B10 | Enterprise, security, data, operations, and domain conformance. |
| R-ARC-004 | S4 | Technical Architect | R02, R05, R06, R08 | E01-E10, R03, R04 | Separate implementation author and architecture reviewer where practical. |
| R-ARC-005 | S4 | Application Architect | R02, E01, E02, E04 | E03, E05, R03, R08 | Technical, security, data, and QA review. |
| R-ARC-006 | S4 | Integration Architect | R05, E04, E05, E10 | B02-B04, R03, R08 | Domain, security, data, and operations review. |
| R-ARC-007 | S4 | Data Architect | R04, D01, D02 | E03, D03-D06, B01-B10 | Privacy, security, domain, and DBA review. |
| R-ARC-008 | S4 | Security Architect | R03, S01, S02, S05 | S04, S09, B01-B10 | Independent AppSec/infrastructure validation and CISO governance. |
| R-ARC-009 | S4 | Cloud / Platform Architect | R06, E07, O01 | R03, R08, T01, T06 | Security, SRE, FinOps, and resilience review. |
| R-ARC-010 | S4 | AI / ML Solution Architect | R07, D03, D04, D06, D07 | S09, D05, B05-B09 | Independent model validation, security, privacy, and domain review. |
| R-ARC-011 | S4 | Performance / Resilience Architect | R08, Q05, O01, O06 | B01-B10, R06 | Independent performance test and business-capacity approval. |
| R-ARC-012 | S4 | Banking / Payments Domain Architect | B01, B02, B10, R02 | B03-B09, R05, R08 | Product, compliance, accounting, security, and scheme review. |
| R-ARC-013 | S4 | ISO 20022 Architect | B03, R05, P03 | B02, B04, B10 | Domain/message specialist and community-usage validation. |
| R-ARC-014 | S4 | SWIFT Architect | B04, R03, R05 | B03, B06, B10 | Certified/qualified SWIFT security and operations review. |
| R-ARC-015 | S4 | Asset Tokenization / DLT Architect | B09, R02, R03, R04 | G04, B06, B10, S05 | Legal, regulatory, custody, security, accounting, and risk approval. |

## 5. Software, data, AI, DevOps, and platform roles

| Role ID | Band | Provider-neutral role | Core packages | Conditional packages | Required boundary or independent counterpart |
| --- | --- | --- | --- | --- | --- |
| R-ENG-001 | H2 | Head / VP of Engineering | R02, E01-E10, E06, P04 | R06-R08, O01, O07 | CTO, architecture, security, QA, and operations review. |
| R-ENG-002 | M3 | Engineering Manager | P04, E06, Q09, O01 | E01-E10, G07 | Independent technical, security, and quality reviewers. |
| R-ENG-003 | S4 | Principal / Staff Engineer | R02, E01-E10, Q09 | R03-R08, O01 | Architecture and author-disjoint code/security review. |
| R-ENG-004 | S4 | Technical Lead | R02, P04, Q09 | E01-E10, O01 | Cannot be sole reviewer of team's own high-risk changes. |
| R-ENG-005 | P5 | Java Developer | E01, Q01 | E04, E05, E03, S02, Q03, Q05 | Java reviewer, AppSec, QA, and architecture review. |
| R-ENG-006 | S4 | Senior Java / Spring Engineer | E01, E04, Q01, Q09 | E05, E03, S02, Q05 | Author-disjoint Java and security review. |
| R-ENG-007 | P5 | Angular Developer | E02, Q01, P07 | E04, Q02, Q06, S02 | Angular reviewer, accessibility, security, and UX review. |
| R-ENG-008 | S4 | Senior Angular / Front-End Engineer | E02, Q02, P07, Q09 | E04, Q06, S02, P05 | Author-disjoint front-end and accessibility review. |
| R-ENG-009 | P5 | PL/SQL Developer | E03, Q01 | E08, B01, B10, Q05, S02 | PL/SQL reviewer, DBA, AppSec, accounting/reconciliation review. |
| R-ENG-010 | S4 | Database Developer / Data Persistence Engineer | E03, E08, R04 | E01, D02, Q05 | DBA, data architect, security, and migration validation. |
| R-ENG-011 | P5 | API Developer | E04, Q03 | E01, E02, E10, S02 | API reviewer, AppSec, domain, and contract-test review. |
| R-ENG-012 | P5 | Kafka / Event-Streaming Engineer | E05, Q03 | E01, E10, R08, O01 | Messaging reviewer, SRE, security, and reconciliation review. |
| R-ENG-013 | P5 | MQ / Middleware Engineer | E05, E10, Q03 | B03, B04, O01 | Integration architect, security, operations, and domain review. |
| R-ENG-014 | P5 | Enterprise Integration / Camel Engineer | E10, E04, E05 | B02-B04, B10 | Integration, security, QA, and reconciliation review. |
| R-ENG-015 | P5 | Mobile / Channel Developer | E09, Q01, P07 | E04, S02, Q02, Q06 | Mobile security, accessibility, QA, and product review. |
| R-ENG-016 | P5 | DevOps Engineer | E06, E07, O08 | S04, S10, O01 | Platform security and release approver independent of change author. |
| R-ENG-017 | S4 | DevOps / Developer Experience Lead | E06, E07, O08, Q09 | S04, S10, O01, O07 | Security, SRE, release integrity, and FinOps review. |
| R-ENG-018 | P5 | Platform Engineer | E07, O01 | E06, S04, T01-T06 | Cloud/platform architect, security, SRE, and tenant-isolation review. |
| R-ENG-019 | P5 | Cloud Infrastructure Engineer | E07, R06, O01 | S04, O06, O07 | Cloud security, architecture, resilience, and FinOps review. |
| R-ENG-020 | P5 | Container / OpenShift / Kubernetes Engineer | E07, O01 | S04, E06, R08 | Container security and SRE review. |
| R-ENG-021 | P5 | Build and Configuration Engineer | E06, O08, S10 | T02, E07 | Release-integrity and supply-chain review. |
| R-ENG-022 | M3 | Release Manager | O08, P04, G05 | E06, O01, S10 | Human production authorization; independent release-integrity review. |
| R-ENG-023 | S4 | Code Reviewer — Java | Q09, E01, S02 | E04, E05, E03, Q05 | Must not review own code; domain/security escalation. |
| R-ENG-024 | S4 | Code Reviewer — Angular | Q09, E02, S02, P07 | Q02, Q06, P05 | Must not review own code; UX/accessibility escalation. |
| R-ENG-025 | S4 | Code Reviewer — PL/SQL / Database | Q09, E03, E08, S02 | B01, B10, Q05 | Must not review own code; DBA/accounting/security escalation. |
| R-ENG-026 | S4 | Code Reviewer — API / Integration | Q09, E04, E05, E10 | B02-B04, S02 | Must not review own code; contract/domain/security escalation. |
| R-DAT-001 | H2 | Head of Data and Analytics | D01, D02, R04, G01 | D03-D07, S08 | CDO, privacy, security, risk, and domain oversight. |
| R-DAT-002 | M3 | Data Product Manager | P02, P03, D01 | D02-D06, B01-B10 | Data owner, privacy, model-risk, and customer validation. |
| R-DAT-003 | P5 | Data Engineer | D02, D01, Q01 | E03, E05, D04, B10 | Data architect, security, QA, and reconciliation review. |
| R-DAT-004 | S4 | Lead Data Engineer | D02, R04, Q09 | D01, E03, E05, D04 | Independent data, security, and platform review. |
| R-DAT-005 | P5 | Data Analyst / BI Developer | D02, D01, P03 | B01-B10, P05 | Business/domain owner and data-quality review. |
| R-DAT-006 | P5 | Data Steward | D01, G03 | S08, B07, D07 | Data owner and privacy/compliance approval. |
| R-DAT-007 | P5 | Data Quality Engineer | D01, Q01 | D02, B10, D03 | Independent producer/consumer and domain validation. |
| R-DAT-008 | P5 | Database Administrator | E08, O01, O03 | E03, O06, S05 | Segregated production access; security and change approval. |
| R-AI-001 | H2 | Head of AI / ML Engineering | R07, D03, D04, D07 | D05, D06, S09, B05-B09 | CAIO, independent model risk, security, privacy, and domain review. |
| R-AI-002 | M3 | AI Product Manager | P01-P04, D07 | D03-D06, B05-B09 | Product, model-risk, compliance, and affected-user validation. |
| R-AI-003 | P5 | Data Scientist | D03, D01 | D04-D07, B05-B09 | Independent model validation, data, risk, and domain review. |
| R-AI-004 | P5 | Machine Learning Engineer | D03, D04, Q01 | D06, S09, E04, E07 | Model validator, security, platform, and QA review. |
| R-AI-005 | P5 | MLOps Engineer | D04, E06, E07, O01 | T06, S09, S10 | Model risk, platform security, SRE, and release review. |
| R-AI-006 | P5 | Prompt / Context Engineer | D06, A05, Q01 | T02, T03, S09 | Independent eval, security, domain, and content review. |
| R-AI-007 | P5 | RAG / Knowledge Engineer | D06, D01, A05 | D02, S08, S09, P06 | Retrieval eval, privacy, security, and source-owner review. |
| R-AI-008 | P5 | Conversational AI Engineer | D06, O04, O05 | B02, B07, P06, P07 | Safety, privacy, domain, voice, and customer-support review. |
| R-AI-009 | P5 | Speech / Voice AI Engineer | D06, O05 | P06, P07, S08, B02 | Language, privacy, telecom, accessibility, and safety review. |
| R-AI-010 | P5 | Document AI / Computer Vision Engineer | D03, D04, Q01 | B08, S08, D05 | Independent model validation, privacy, and cheque-domain review. |
| R-AI-011 | S4 | Responsible AI Lead | D07, G03, G04, G05 | D05, S08, S09, B05-B09 | Independent of model delivery; CAIO/risk/compliance oversight. |
| R-AI-012 | S4 | Model Risk Manager | D07, D05, G03, G05 | B05-B09, D06 | Independent from first-line model development. |
| R-AI-013 | S4 | Independent Model Validator | D05, D07, Q09 | D03-D06, B05-B09 | Cannot validate own model; human model-risk approval. |
| R-AI-014 | S4 | AI Security Engineer | S09, R03, Q07 | D03-D06, A08, T03, T06 | Independent security reviewer and CISO oversight. |
| R-AI-015 | P5 | AI Evaluation / Red-Team Engineer | A06, Q01, Q07, S09 | D05-D07, B05-B09 | Independent test-set/eval governance; cannot self-approve. |
| R-AI-016 | P5 | AI Data / Annotation Quality Specialist | D01, D03, Q01 | B05-B09, S08 | Data owner, privacy, domain, and model-validation review. |
| R-AI-017 | S4 | Agent / Harness Engineer | A02-A08, T02-T06 | E01-E07, S09 | Independent security, policy, evaluation, and runtime review. |
| R-AI-018 | S4 | Skill / Capability Engineer | T02, A06, A07 | P03, S09, T03-T05 | Separate capability reviewer, security reviewer, and runtime evaluator. |
| R-AI-019 | S4 | Runtime / LLM Adapter Engineer | T02, T03, T06, A06 | E04, E07, S09 | Cross-provider conformance and security review. |

## 6. Security, quality, performance, and assurance roles

| Role ID | Band | Provider-neutral role | Core packages | Conditional packages | Required boundary or independent counterpart |
| --- | --- | --- | --- | --- | --- |
| R-SEC-001 | H2 | Head of Cybersecurity / Deputy CISO | S01, R03, S06, G03 | S02-S10, O06 | CISO and independent audit/risk oversight. |
| R-SEC-002 | M3 | Information Security Officer | S01, G03, G05 | S02-S10, D07 | Business/control owners implement; independent audit tests. |
| R-SEC-003 | P5 | Security GRC Analyst | S01, G03, G05 | G04, S02-S10 | Control owner and independent auditor remain separate. |
| R-SEC-004 | S4 | SSDLC / Product Security Lead | S02, R03, Q07, S10 | E01-E10, S09 | Independent penetration/security validation. |
| R-SEC-005 | P5 | SSDLC Engineer | S02, Q07, E06 | E01-E10, S10 | AppSec lead and author-disjoint code/security review. |
| R-SEC-006 | P5 | Application Security Engineer | S02, Q07, R03 | E01-E05, E09-E10, S09 | Independent of feature author; CISO/product-security governance. |
| R-SEC-007 | S4 | VAPT Lead | S03, Q07, G05 | S02, S04, S09 | Written authorization; independent finding validation and customer owner. |
| R-SEC-008 | P5 | VAPT / Penetration Tester | S03, Q07 | E04, S04, S09 | Authorized scope only; cannot close own findings. |
| R-SEC-009 | S4 | Red-Team Lead | S03, S09, S06 | A08, S04, S05 | Rules of engagement, independent control team, executive authorization. |
| R-SEC-010 | P5 | Red-Team Operator | S03, S09 | S04, S05, S06 | Explicit authorization, stop conditions, evidence protection. |
| R-SEC-011 | M3 | SOC Manager / Blue-Team Lead | S06, S07, O02 | S04, S05, S09 | CISO oversight and independent detection validation. |
| R-SEC-012 | P5 | SOC Analyst / Security Analyst | S06, S07 | S04, S05, S09 | Tier escalation and incident commander authority. |
| R-SEC-013 | S4 | Detection Engineer / Threat Hunter | S06, S07, Q07 | S04, S05, S09 | Independent testing and controlled production deployment. |
| R-SEC-014 | P5 | Threat Intelligence Analyst | S07, G05 | B05, B06, S09 | Source validation, legal/privacy, and tenant isolation. |
| R-SEC-015 | M3 | Vulnerability Management Lead | S07, S10, G03 | S02-S04, T05 | Asset owners remediate; independent retest closes. |
| R-SEC-016 | P5 | Vulnerability Analyst | S07, S10 | S02-S04, B01-B10 | Tenant-scoped impact and validated evidence. |
| R-SEC-017 | S4 | IAM / PAM Architect | S05, R03, T01 | S04, G04 | Independent access review and system-owner approval. |
| R-SEC-018 | P5 | IAM / PAM Engineer | S05, T01 | E07, S04 | Maker-checker for privilege and production access. |
| R-SEC-019 | S4 | Cryptography / PKI / HSM Specialist | S05, R03 | B02-B04, B07, B09 | Independent key ceremony, crypto review, and accountable custodian. |
| R-SEC-020 | S4 | Cloud Security Architect | S04, R03, R06 | E07, T01, O06 | Independent cloud posture and penetration review. |
| R-SEC-021 | P5 | Cloud / Container Security Engineer | S04, Q07 | E07, E06, O01 | Platform owner implements; independent security validation. |
| R-SEC-022 | S4 | Software Supply-Chain Security Lead | S10, S02, E06 | T02, T03, E07 | Release-integrity and independent provenance review. |
| R-SEC-023 | P5 | Privacy Engineer | S08, D01, R03 | D06, B07, T01 | DPO/legal and independent privacy review. |
| R-SEC-024 | M3 | Cyber Incident Commander | S06, O02, G03 | O03, O04, G04 | Named human authority for material incident decisions/communications. |
| R-QA-001 | H2 | Head of Quality Engineering | Q01-Q09, G05 | E01-E10, D03-D06 | Independent from engineering delivery; release recommendation only. |
| R-QA-002 | M3 | QA / Test Manager | Q01, Q09, P04 | Q02-Q08, B01-B10 | Product owner accepts; release manager authorizes release. |
| R-QA-003 | S4 | QA Lead / Test Architect | Q01, Q09, P03 | Q02-Q08, R08 | Independent test design and environment/data governance. |
| R-QA-004 | P5 | Functional Tester | Q01, P03 | B01-B10, Q03 | Product/domain owner validates expected behavior. |
| R-QA-005 | P5 | Automation Engineer — Selenium | Q02, Q01, E02 | Q03, Q06, E09 | Automation/code review and independent functional validation. |
| R-QA-006 | P5 | Automation Engineer — Playwright | Q02, Q01, E02 | Q03, Q06, E09 | Automation/code review and independent functional validation. |
| R-QA-007 | P5 | API / Contract Test Engineer | Q03, Q01, E04 | E05, E10, S02 | API/domain/security and producer-consumer review. |
| R-QA-008 | P5 | Performance Tester — JMeter | Q04, Q01, O01 | B01-B10, E01-E08 | Performance engineer validates workload/results; owner approves targets. |
| R-QA-009 | S4 | Performance Engineer | Q05, R08, O01 | Q04, E01-E08, B01-B10 | Independent test execution/review and capacity-owner approval. |
| R-QA-010 | P5 | Accessibility Tester | Q06, P07, Q01 | E02, E09, P06 | Independent from implementation for conformance statement. |
| R-QA-011 | S4 | Accessibility QA Lead | Q06, P07, Q09 | P05, P06, E02, E09 | Qualified human/user review and product approval. |
| R-QA-012 | P5 | Security Test Automation Engineer | Q07, S02, E06 | S03, S04, S09 | AppSec/VAPT validates tool output and findings. |
| R-QA-013 | P5 | UAT Coordinator / Business Acceptance Tester | Q08, P03, P04 | B01-B10, O02 | Named business owner/customer acceptance. |
| R-QA-014 | S4 | Independent Quality Reviewer | Q09, G05 | Q01-Q08, E01-E10 | No authorship or delivery target conflict. |
| R-QA-015 | S4 | Test Environment and Data Manager | Q09, D01, E07 | S08, E08, Q04 | Security/privacy/data owner approvals. |

## 7. Banking, payments, financial-crime, and tokenization roles

| Role ID | Band | Provider-neutral role | Core packages | Conditional packages | Required boundary or independent counterpart |
| --- | --- | --- | --- | --- | --- |
| R-BNK-001 | H2 | Head of Banking and Payments Products | B01, B02, B10, P02 | B03-B09 | Compliance, risk, security, architecture, and customer oversight. |
| R-BNK-002 | S4 | Core Banking Subject-Matter Expert | B01, B10, P03 | E03, E04, B02 | Accounting, operations, product, and compliance review. |
| R-BNK-003 | S4 | Payments Product / Domain Lead | B02, B10, P02, P03 | B03, B04, B05 | Scheme, compliance, risk, accounting, security, and operations review. |
| R-BNK-004 | S4 | UPI Subject-Matter Expert | B02, P03, B10 | B05, B07, O04 | Authorized NPCI/current-circular interpretation and bank approval. |
| R-BNK-005 | P5 | UPI Operations Analyst | B02, B10, O03 | B05, O04 | Maker-checker, bank operations, and scheme escalation. |
| R-BNK-006 | S4 | ISO 20022 Message Specialist | B03, R05, Q03 | B02, B04, B10 | Usage-guideline/community and domain review. |
| R-BNK-007 | P5 | ISO 20022 Mapping / Validation Analyst | B03, Q03, P03 | E04, E10, B10 | Independent semantic and reconciliation review. |
| R-BNK-008 | S4 | SWIFT Security / Operations Lead | B04, S01, S05 | S06, B06, B10 | Qualified SWIFT/CSP independent assessment and human approvals. |
| R-BNK-009 | P5 | SWIFT Message Operations Specialist | B04, B10, O03 | B03, B06 | Four-eyes operation and segregated security administration. |
| R-BNK-010 | H2 | Fraud Risk / Prevention Head | B05, G03, D07 | B02, D03-D05, S06 | Human fraud policy and customer-treatment authority. |
| R-BNK-011 | P5 | Fraud Analyst / Investigator | B05, G05 | B02, D06, O04 | Case reviewer and authorized action/escalation. |
| R-BNK-012 | S4 | Fraud Data Scientist / Model Specialist | B05, D03, D04 | D05, B02, S09 | Independent model validation and fraud-operations review. |
| R-BNK-013 | H2 | AML / Financial Crime Head | B06, G03, G04, G05 | B05, B07, D07 | Human MLRO/compliance authority where applicable. |
| R-BNK-014 | P5 | AML Transaction-Monitoring Analyst | B06, G05 | B05, D06 | Investigator review and regulated escalation. |
| R-BNK-015 | P5 | AML Investigator / Case Officer | B06, G05, G04 | B05, B07 | Human reporting/disposition authority and confidentiality. |
| R-BNK-016 | P5 | Sanctions / PEP Screening Specialist | B06, G04, G05 | B03, B04 | Compliance/legal approval and list/version governance. |
| R-BNK-017 | H2 | KYC / Customer Due-Diligence Head | B07, B06, G04 | S08, D07 | Human KYC policy, exceptions, and regulatory accountability. |
| R-BNK-018 | P5 | KYC / CDD Analyst | B07, B06, G05 | D06, O04 | Reviewer/escalation for ambiguity, high risk, or exceptions. |
| R-BNK-019 | S4 | KYC Tokenization / Privacy Specialist | B07, S08, S05 | B09, D06, R04 | DPO/legal/security and identity-assurance review. |
| R-BNK-020 | H2 | Cheque Clearing Operations Head | B08, B10, O02 | D03-D05, O06 | Bank operations, risk, and human exception authority. |
| R-BNK-021 | P5 | Cheque Clearing / Return Analyst | B08, B10, O03 | D06 | Maker-checker and human exception/dispute handling. |
| R-BNK-022 | S4 | Cheque AI Validation Specialist | B08, D05, Q01 | D03, D04, S09 | Independent from model developer; operations/risk acceptance. |
| R-BNK-023 | H2 | Asset Tokenization Product Head | B09, P02, G04, G03 | B01, B06, B10 | Human legal/regulatory, custody, risk, and product authority. |
| R-BNK-024 | S4 | Digital Asset / Smart Contract Engineer | B09, E04, Q07 | S05, E05, B10 | Independent smart-contract security, legal, custody, and accounting review. |
| R-BNK-025 | S4 | Digital Asset Custody / Key Operations Lead | B09, S05, O02 | O06, B10 | Human key ceremony, four-eyes, risk, legal, and audit. |
| R-BNK-026 | S4 | Clearing and Settlement Specialist | B10, B02, B01 | B03, B04 | Accounting, scheme, treasury, and operations review. |
| R-BNK-027 | P5 | Reconciliation and Exceptions Analyst | B10, Q01, O03 | B01-B04 | Maker-checker and financial-control review. |
| R-BNK-028 | S4 | Financial Accounting / Product-Control SME | B01, B10, G06 | B02-B04, B09 | CFO/controller and audit oversight. |

## 8. Platform operations, production support, customer service, and external service roles

| Role ID | Band | Provider-neutral role | Core packages | Conditional packages | Required boundary or independent counterpart |
| --- | --- | --- | --- | --- | --- |
| R-OPS-001 | H2 | Head of Reliability and Production Operations | O01, O02, O03, O06 | O07, O08, B01-B10 | CIO/COO accountability; independent security, risk, and service assurance. |
| R-OPS-002 | M3 | Site Reliability Engineering Manager | O01, O02, R08 | E07, O06, O07 | Service owner sets SLOs; change and incident controls remain enforced. |
| R-OPS-003 | S4 | Site Reliability Engineer | O01, E07, R08 | E01-E10, O02, O06 | Peer review and controlled production authority. |
| R-OPS-004 | P5 | Observability Engineer | O01, E07 | D02, S06, O07 | Telemetry privacy/security and service-owner review. |
| R-OPS-005 | M3 | Network Operations Centre Manager | O01, O02, O03 | S06, O06 | Incident commander and security escalation. |
| R-OPS-006 | A6 | NOC Operator | O01, O03 | S06, O02 | Runbook-bounded actions and tier escalation. |
| R-OPS-007 | M3 | Production Support Manager | O02, O03, P04 | B01-B10, O04 | Service owner, risk, security, and customer escalation. |
| R-OPS-008 | A6 | Production Support Engineer — L1 | O03, O02 | B01-B10, O04 | Read-first access, approved runbooks, L2 escalation; no unrestricted data change. |
| R-OPS-009 | P5 | Production Support Engineer — L2 | O03, O02, E01-E10 | B01-B10, S06 | Peer/maker-checker control for repair; L3/service-owner escalation. |
| R-OPS-010 | S4 | Production Support Engineer — L3 / Product Specialist | O03, E01-E10, O01 | B01-B10, S06 | Change/release control and author-disjoint review for production fixes. |
| R-OPS-011 | M3 | Major Incident Manager | O02, O01, S06 | O04, O06, P06 | Named human incident authority and independent post-incident review. |
| R-OPS-012 | S4 | Problem Manager | O02, A07, G05 | O01, O03, E01-E10 | Service/process owner accepts corrective and preventive actions. |
| R-OPS-013 | S4 | Change Manager | O02, O08, G03 | O06, S01 | Change authority and independent risk/control review. |
| R-OPS-014 | S4 | Release Manager | O08, E06, G05 | Q01-Q09, S10, O06 | Cannot waive failed quality/security gates; accountable release authority approves. |
| R-OPS-015 | P5 | Configuration and Asset Manager | O08, O02, D01 | S07, E07, G05 | Reconciliation and independent inventory/evidence review. |
| R-OPS-016 | S4 | Capacity and Availability Manager | O01, R08, O07 | Q04, Q05, O06 | Service owner approves targets and investment. |
| R-OPS-017 | S4 | Business Continuity Manager | O06, G03, O02 | B01-B10, S06 | Executive/business owner approves BIA, recovery priorities, and residual risk. |
| R-OPS-018 | S4 | Disaster Recovery Engineer | O06, E07, E08 | O01, B01-B10 | Independent exercise observer and business reconciliation/sign-off. |
| R-OPS-019 | P5 | Service Desk Analyst | O02, O04 | O03, O05 | Identity verification, privacy, knowledge limits, and escalation. |
| R-CS-001 | H2 | Head of Customer Support | O04, O02, C03 | O05, B01-B10 | Compliance, privacy, product, and service-quality oversight. |
| R-CS-002 | A6 | Customer Support Executive — L1 | O04, P06 | O05, B01-B10 | Script/knowledge-bounded response and specialist escalation. |
| R-CS-003 | P5 | Customer Support Specialist — L2 | O04, O02 | O03, B01-B10 | Customer identity, privacy, complaint, and product escalation controls. |
| R-CS-004 | S4 | Customer Support Escalation Specialist — L3 | O04, O03, B01-B10 | G04, B05-B08 | Product/risk/compliance authority for material outcomes. |
| R-CS-005 | A6 | Voice Caller / Voice Support Executive | O05, O04, P06 | D06, B02, B06, B07 | Approved purpose/script, identity, consent, opt-out, recording, and human escalation. |
| R-CS-006 | S4 | Voice Operations Designer / Supervisor | O05, D06, P06 | Q06, G04, B01-B08 | Compliance/privacy approval and independent call-quality review. |
| R-CS-007 | P5 | Customer Interaction Quality Analyst | O04, O05, Q09 | P06, G05 | Independent sampling; no self-scoring for formal assurance. |
| R-CS-008 | S4 | Complaint and Grievance Redressal Officer | O04, G04, G03 | B02, B07, P06 | Human statutory/regulatory authority and protected escalation. |
| R-CS-009 | P5 | Customer Knowledge Specialist | P06, O04, O02 | B01-B10, A05 | Source-owner approval, expiry, privacy, and regulated-content review. |
| R-SVC-001 | H2 | Managed Services Head | C04, O02, G03, G06 | O01-O08, B01-B10 | Customer contract, tenant isolation, delivery assurance, and executive oversight. |
| R-SVC-002 | M3 | Service Delivery Manager | C04, O02, C03 | O01-O08, B01-B10 | Customer service owner and independent SLA/evidence review. |
| R-SVC-003 | S4 | Professional Services Consultant | C04, P03, R02 | E01-E10, Q01-Q09, B01-B10 | SOW/tenant authorization, peer review, and customer acceptance. |
| R-SVC-004 | M3 | Cybersecurity Service Delivery Manager | C04, S01, G05 | S02-S10, O02 | Written customer authorization and assessor/implementer independence. |
| R-SVC-005 | S4 | External Application Security Assessor | S02, S03, Q07, C04 | S04, S09, S10 | Customer-authorized scope; cannot close own findings or reuse customer data. |
| R-SVC-006 | M3 | Quality Engineering Service Delivery Manager | C04, Q09, P04 | Q01-Q08, O02 | Customer acceptance and independent quality evidence. |
| R-SVC-007 | S4 | External QA / Test Consultant | C04, Q01, P03 | Q02-Q08, B01-B10 | Customer-authorized environment/data and independent result review. |
| R-SVC-008 | S4 | AI Assurance Service Lead | C04, D05, D07, G05 | S09, A06, B05-B08 | Independent of model builder; customer/model-risk approval. |
| R-SVC-009 | P5 | Service Evidence and SLA Analyst | G05, C04, O02 | O01, O07, T05 | Service owner/customer validation; immutable tenant-scoped evidence. |
| R-PLT-001 | H2 | Agentic Platform Product Head | P02, T01-T06, R07 | A01-A08, C04 | Executive, architecture, security, privacy, and tenant review. |
| R-PLT-002 | M3 | Platform Product Manager | P01-P04, T01-T06 | A01-A08, C03 | Product head and independent security/architecture review. |
| R-PLT-003 | M3 | Platform Operations Manager | T01, T03-T06, O01, O02 | E07, O06, O07 | Change, security, tenant, and evidence oversight. |
| R-PLT-004 | P5 | Tenant Administrator | T01, G05 | T03, T04 | Tenant-owner authority, least privilege, and independent access review. |
| R-PLT-005 | S4 | Platform Identity and Entitlement Administrator | T01, S05 | S04, G05 | Maker-checker; cannot approve own privileged access. |
| R-PLT-006 | S4 | Capability / Skill Library Curator | T02, A06, A07 | P06, T05 | Author-disjoint capability review, security evaluation, and release approval. |
| R-PLT-007 | S4 | Policy and Standards Administrator | T04, G03, G05 | G04, S01, D07 | Human policy/standard owner approves mandatory content. |
| R-PLT-008 | S4 | Workflow and Approval Administrator | T04, A01, A04 | O02, G05 | Cannot silently change approval authority; change/audit review. |
| R-PLT-009 | S4 | MCP, Tool, Plugin, and Webhook Administrator | T03, S09, S10 | E04-E07, G05 | Security approval, sandboxing, secret isolation, and kill switch. |
| R-PLT-010 | S4 | Model Gateway and Provider Administrator | T06, D04, S09 | O07, G06, D07 | Privacy/security/model-risk approval; no unilateral model promotion. |
| R-PLT-011 | S4 | Evaluation and Evidence Administrator | T05, A06, G05 | D05, Q09, S09 | Independent from evaluated authors/builders; protected baseline custody. |
| R-PLT-012 | S4 | Agent Runtime and Orchestration Operator | T02-T06, A03, O01 | A05-A08, E07 | Policy-enforced authority, tenant boundary, runtime kill switch, and incident escalation. |
| R-PLT-013 | S4 | Platform Security and Abuse Analyst | S09, S06, T03, T05 | A05-A08, S07 | Independent response authority and protected forensic evidence. |
| R-PLT-014 | P5 | Platform FinOps Analyst | O07, T06, G06 | O01, C04 | Finance/platform approval for budgets and routing changes. |

## 9. Role composition, assignment, and test rules

### 9.1 Can one agent have multiple skills?

Yes. A useful enterprise agent normally needs several capabilities, but “assigned to the agent” must not mean “inject every skill into every prompt.” The required model is:

1. assign one provider-neutral role contract and U0 controls;
2. declare a small, evaluated set of core package eligibility;
3. resolve only task-relevant conditional packages and standards at run time;
4. calculate combined permissions and segregation-of-duties conflicts before execution;
5. deny, split, or require independent/human approval when risk exceeds the role's authority;
6. load the minimum necessary context, tools, and data for the task;
7. retain exact evidence of the selected versions and resulting decisions.

There is no universal safe numeric limit on skills. The admissible limit is the largest evaluated combination that still passes activation precision/recall, instruction-collision, context, latency, cost, tool-authority, safety, and output-quality thresholds for the chosen model and task class. Mandatory policy must be enforced by the platform even when a model ignores or misunderstands prompt content.

### 9.2 Mandatory incompatibility controls

| Conflict ID | Combinations that must not be independently completed by the same execution identity | Required resolution |
| --- | --- | --- |
| SOD-001 | Artifact author and final independent reviewer/approver | Assign a separate identity with no authorship dependency. |
| SOD-002 | Developer and production-release approver | Separate release authority and preserve gate evidence. |
| SOD-003 | Control owner/operator and internal auditor | Independent audit reporting and sampling. |
| SOD-004 | Vulnerability discoverer/penetration tester and finding-closure authority | Independent validation/retest and risk-owner closure. |
| SOD-005 | Model developer/tuner and independent model validator | Separate validation data, criteria, evidence, and approval. |
| SOD-006 | Policy author/administrator and final policy approver | Named human policy owner and versioned approval. |
| SOD-007 | Privileged-access requester/administrator and approver/reviewer | Maker-checker and periodic independent recertification. |
| SOD-008 | Platform/runtime administrator and protected-audit-log administrator | Independently controlled evidence store and access review. |
| SOD-009 | Procurement/vendor assessor and final commercial/payment approver | Business, legal, risk, security, and finance approvals as applicable. |
| SOD-010 | Customer-facing seller and unilateral approver of regulated/security/performance claims | Evidence-backed legal, compliance, security, delivery, and finance approval. |
| SOD-011 | Fraud/AML/KYC model or rule author and sole disposition authority for material customer cases | Human accountable operations/compliance decision under approved policy. |
| SOD-012 | Incident actor/operator and sole post-incident assessor | Independent review with protected timelines and evidence. |

### 9.3 Agent, human, and hybrid assignment

| Assignment mode | Permitted use | Minimum control |
| --- | --- | --- |
| AI agent | Repeatable, bounded work within an evaluated role contract and explicit authority | U0, task-scoped identity, evidence, observability, stop conditions, escalation. |
| Human | Accountable decisions and work requiring human judgment, legal office, empathy, negotiation, or physical action | Identity, competence, documented decision, conflict controls, audit. |
| Hybrid team | AI drafts, analyses, or executes bounded actions while a human or independent agent reviews, approves, or handles exceptions | Explicit work split, no approval theatre, traceable handoff and evidence. |
| Multi-agent team | Several role contracts collaborate on decomposed tasks | Work ownership, context provenance, conflict detection, independent integration/review. |

An agent may hold multiple compatible role contracts for low-risk work. For high-impact work, the orchestration layer must instantiate independent execution identities even if the same underlying LLM provider is used. Provider diversity may strengthen independent challenge but does not by itself establish independence; data, prompts, evidence, authority, and evaluation must also be sufficiently separated.

## 10. Explicit coverage of the roles named by the owner

| Owner-provided role | Matrix role(s) |
| --- | --- |
| CEO | R-EXE-001 Chief Executive Officer |
| CTO | R-EXE-011 Chief Technology Officer |
| Enterprise architect | R-ARC-002 Enterprise Architect |
| Technical architect | R-ARC-004 Technical Architect |
| CISO | R-EXE-015 Chief Information Security Officer |
| Security officer | R-SEC-002 Information Security Officer |
| SSDLC engineer | R-SEC-005 SSDLC Engineer |
| VAPT | R-SEC-007 VAPT Lead; R-SEC-008 VAPT / Penetration Tester |
| Cybersecurity risk assessor | R-GOV-008 Cybersecurity Risk Assessor |
| DevOps | R-ENG-014 DevOps Engineer and related platform/release roles |
| PL/SQL developer | R-ENG-009 Oracle / PL/SQL Developer |
| Java developer | R-ENG-004 Java / Spring Developer |
| Angular developer | R-ENG-006 Angular Developer |
| Business analyst | R-BA-001 through R-BA-005 |
| Product manager / product management | R-PRD-001 through R-PRD-005 |
| Product development | R-ENG-001 through R-ENG-020, with product, design, architecture, security, QA, and operations counterparts |
| Reviewer in each area | Area-specific lead/reviewer plus R-QA-014, R-ENG-018/R-ENG-019, R-GOV-010/R-GOV-011, and R-PLT-011 |
| Functional quality assurance | R-QA-001 through R-QA-004 and R-QA-014 |
| Selenium automation engineer | R-QA-005 |
| Playwright automation engineer | R-QA-006 |
| JMeter / performance tester | R-QA-008 |
| Performance engineer | R-QA-009 |
| Accessibility engineer | R-DSN-007 |
| Accessibility tester | R-DSN-008 and R-QA-010/R-QA-011 |
| UI/UX designer | R-DSN-004 and R-DSN-005 |
| Content writer | R-CNT-001 and R-CNT-003/R-CNT-004 as applicable |
| Production support engineer | R-OPS-008 through R-OPS-010 |
| Customer support engineer/executive | R-CS-002 through R-CS-004 |
| Voice caller | R-CS-005 |

## 11. Matrix acceptance and maintenance requirements

| Matrix requirement ID | Requirement | Verification |
| --- | --- | --- |
| MAT-001 | Every instantiated position shall reference a versioned role ID, U0 version, core/conditional package versions, tenant, authority envelope, and assignment mode. | Schema test, trace inspection |
| MAT-002 | Every role shall be implementable by an AI agent, human, or hybrid team except where law, regulation, contract, physical action, or accountable governance requires a named human office holder. | Role audit, legal/compliance review |
| MAT-003 | Every package shall later decompose into atomic skills, policies, standards, tools, workflows, templates, evaluations, and evidence requirements as applicable. | Catalogue inspection, traceability |
| MAT-004 | Role-package mappings shall be many-to-many and reusable; no role shall require a duplicate private copy of a shared capability. | Schema and registry test |
| MAT-005 | Core package eligibility shall not automatically grant tool, data, tenant, environment, or approval authority. | Negative authorization tests |
| MAT-006 | Conditional packages shall be selected by a deterministic, inspectable policy using task intent, risk, dependencies, context budget, authority, model capability, and environment. | Decision-table and scenario tests |
| MAT-007 | The composition engine shall detect instruction conflict, redundant skills, incompatible standards, unsafe tool combinations, and segregation-of-duties conflicts before execution. | Conflict-injection tests |
| MAT-008 | Every role shall have positive, negative, boundary, adversarial, escalation, and abstention scenarios across supported model families and deployment modes. | Evaluation suite |
| MAT-009 | A role or skill combination shall be promoted only after threshold, variance, security, and independent-review criteria pass; approval shall be bound to exact artifact hashes. | Release-gate test, evidence review |
| MAT-010 | The matrix shall support tenant-specific extension without weakening non-overridable platform or regulatory controls. | Overlay and policy tests |
| MAT-011 | Role and package changes shall be versioned, impact-assessed, regression-tested, canaried where applicable, approved, and reversible. | Change and rollback drill |
| MAT-012 | Deprecated roles/packages shall retain compatibility metadata, migration guidance, expiry, and revocation behavior. | Lifecycle test |
| MAT-013 | Role quality shall be measured by task outcome, correctness, completeness, policy compliance, security, rework, cost, latency, reviewer agreement, escalation quality, and production feedback. | Metrics inspection |
| MAT-014 | Independent reviewers shall receive the requirement, standards, evidence, and candidate output without inheriting the author's hidden reasoning as authority. | Review protocol test |
| MAT-015 | The platform shall maintain bidirectional traceability from business outcomes to roles, packages, atomic capabilities, controls, evaluations, releases, executions, findings, and feedback. | Traceability audit |

## 12. Owner review gate

This matrix is a comprehensive starting catalogue, not a claim that the organization will hire or instantiate every role at once. Approval of this document confirms the role taxonomy, provider-neutral contract model, package architecture, dynamic composition rule, segregation boundaries, and owner-provided-role coverage. Atomic skill definitions and implementation planning begin only after this matrix and the companion requirements baseline are approved.
