# Proposed Model Council Synthesis v0.1

Status: **PROPOSED FOR FOUNDER REVIEW — NOT AN APPROVED DESIGN OR FROZEN BASELINE**

Council session: `MC-2026-09-05-001`

## Executive verdict

The company is practical as an **AI-led, human-accountable, governance-first software and services company**. It is not practical as a fully autonomous regulated-company substitute in which models hold legal, fiduciary, audit, security, privacy, payment, or release authority.

The durable product is not a collection of hundreds of prompts. It is a provider-neutral assurance and operating control plane that composes versioned role contracts, task-scoped skills, policies, standards, deterministic tools, evidence, qualified model adapters, and human gates. Customer products and QA/security/operations services run as separately qualified modules on that common plane.

The founder's complete MVP scope may remain one external release scope, but that does not make it one build step or a two-week deliverable. Internal build, validation, and exercise sequences must be explicit. Every released capability must be labelled as in release scope, validated, exercised, enabled, and supported. Unvalidated high-risk capabilities cannot execute.

## Recommended architecture approach

Three approaches were considered:

| Approach | Advantage | Principal problem |
|---|---|---|
| Harness-centric skill repository | Fastest start; uses Paperclip, Gstack, ECC, or another harness directly | Harness and model coupling; weak independent authority and audit semantics |
| **Independent governance/control plane with adapters** | Provider/harness neutrality, enforceable policy, consistent evidence, multi-tenant operation | More bootstrap work; requires carefully frozen contracts |
| Fully custom autonomous-company operating system | Maximum control and potential IP | Highest cost and complexity; delays proof and revenue |

**Council recommendation: the second approach.** Use existing harnesses as replaceable execution substrates. Keep company authority, identity, policy, evidence, qualification, audit, tenancy, recovery, cost, and decision state outside them.

```text
Humans / customers / external assessors
                 |
          authority gates
                 |
   Governance and assurance control plane
 identity | roles | policy | registry | qualification
 workflow | evidence | audit | risk | tenancy | cost
                 |
    canonical task/result/event/decision contracts
                 |
 Harness / LLM / MCP / tool / language-pack adapters
                 |
 tenant-isolated execution and customer/service modules
                 |
 deterministic product, CI, security, QA and operations systems
```

## Model-council and reasoning module

The reasoning module must not request, store, or expose hidden model chain-of-thought. It stores a structured decision record:

- question, scope, risk tier, deadline and budget;
- frozen input/evidence hashes;
- independently generated opinions;
- claim type: fact, inference, assumption, recommendation, uncertainty, dissent;
- cited evidence and evidence quality;
- proposed tests or falsifiers;
- conflicts and the applicable adjudication rule;
- deterministic results and named human/domain decisions;
- final decision, authority, expiry and residual risk.

Council routing is:

```text
intent -> tenant -> risk -> role contract -> authority check
       -> minimum task-scoped skills/policies/standards/tools
       -> qualified provider/model/adapter candidates
       -> independent author/reviewer allocation
       -> deterministic gates -> council only for ambiguity
       -> human/domain gate where required -> signed result/evidence
```

No brand has a permanent council office. Initial opinions should be independent and, where useful, blinded. Models exchange claims and evidence rather than hidden reasoning. Majority vote never authorizes an action. Conflicts resolve through deterministic oracles, current authoritative sources, qualified domain experts, or designated human authorities.

## Agent skill composition

An agent may and normally should have multiple skills, but not every skill. Each role contract has:

- small core capabilities required whenever that role is assumed;
- conditional skills resolved from the task, technology/language pack, risk and lifecycle state;
- forbidden or conflicting skills/authorities;
- tool/data/tenant/environment permissions separate from skill possession;
- maximum active context and conflict-resolution rules;
- required reviewer and evidence obligations.

This reduces context dilution, contradictory instructions, cost, attack surface, and accidental authority. Broad capability packages are taxonomy; atomic executable skills must still be authored, tested, versioned, and composed.

## Governance decisions recommended for freeze

1. Role, skill, tool, policy, standard, workflow, model, authority, and human office remain distinct artifact types with unique namespaces.
2. An independent control plane owns identity, policy decisions, authority, registries, qualification, evidence, audit, tenancy, recovery, and cost controls.
3. Task/Result/Event/Decision envelopes and their mandatory hash, tenant, actor, role, model/version, policy, correlation, causation and idempotency fields are canonical and versioned.
4. Policy is enforced outside prompts at every state-changing boundary; missing or expired authority/evidence fails closed.
5. Models/providers/harnesses are replaceable adapters. Eligibility is established only by current, task-specific qualification evidence.
6. AI can recommend, generate, test, triage, and score within approved limits; it cannot hold legal authority or make final payment authorization, sanctions/KYC/AML disposition, production-release, policy-change, key-management, or customer-data-export decisions.
7. Human-only and independent offices are explicit. Vacancy blocks relevant actions. Self-approval is permanently marked and may not be represented as independent review. Non-overridable prohibitions are defined separately from break-glass recovery.
8. Events are append-only, signed and hash linked, with external periodic anchoring, retention, privacy redaction/tokenization, and verification. Log administrators cannot silently rewrite business events.
9. A shared management plane may serve tenants, but execution, secrets, data, evidence and support access are isolated according to a declared deployment profile and tested continuously.
10. Skills, policies and standards change only by proposal, evidence, independent review, approval, versioned release, canary, monitoring and rollback. Agent experience is evidence input, never direct self-modification authority.
11. Every capability carries separate release-scope, validated, exercised, enabled, and supported states. Claims are generated only from those states.
12. The process follows CMMI-like managed, defined, measured and optimizing practices, but maturity claims require real performance baselines, statistical management, causal analysis, governance evidence and any required formal appraisal.

## Testability model

| Artifact | Minimum test families |
|---|---|
| Role contract | schema, authority boundaries, conflicts, SoD scenarios, tenant/data/tool access, evidence duties |
| Skill | with/without baseline, positive/negative scenarios, injection resistance, deterministic artifact checks, regression and cost/latency |
| Policy | policy-as-code unit tests, deny/permit matrix, mutation tests, fail-closed tests, break-glass and non-overridable cases |
| Standard | control-to-source traceability, edition/effective-date checks, applicability, evidence schema, exception expiry |
| Composition | pairwise/risk-based combinations, conflicting instruction tests, context-budget tests, reviewer independence |
| Model adapter | protocol conformance, semantic task suite, tool-call safety, structured-output validation, timeout/retry/idempotency |
| Council | blinded independence, dissent retention, evidence citation, oracle escalation, no-majority-authority, replay |
| Tenancy | identity/claim propagation, row/object/secret isolation, cross-tenant negative tests, support access and telemetry policy |
| Audit/recovery | hash/signature verification, tamper detection, external-anchor verification, replay, duplicate side effects, outage recovery |
| Product release | functional, contract, integration, accessibility, SAST/DAST/SCA/SBOM, performance/endurance, resilience, observability, rollback |

No coverage percentage alone is a release gate. Thresholds must derive from risk, change impact, mutation strength, critical paths, performance SLOs, and defect history.

## Two-week ISO 20022 microservice verdict

The bounded target is **possible but not established as feasible yet**. Multiple agents can compress coding, test generation, documentation, IaC and first-pass analysis. They do not compress an undefined message profile, external review availability, security remediation, performance endurance time, merge convergence, production access, or human release authority.

The 14-day clock should start only when a Day-0 readiness contract passes. Required examples include a frozen ISO 20022 usage profile and state machine; named topology and SLOs; ready CI/CD and deterministic schema/contract oracles; tenant/security architecture; reusable service skeleton; independent domain/security/release reviewers; test data; deployment credentials/KMS; evidence templates; and no unresolved critical design decision.

Run a 48-hour production-intent slice before making the schedule commitment. It must use the intended repository, harness, controls, CI, topology and reviewers, and measure:

- accepted backlog throughput rather than lines of code;
- rework and reopened findings;
- merge/review conflict rate;
- deterministic gate pass/fail and false-positive rates;
- elapsed performance/security test time;
- founder and external-reviewer minutes;
- token/tool/infrastructure cost;
- audit completeness and recovery;
- forecasted calendar reserve through day 14.

The experiment result, not council confidence, sets the commitment. A practical go gate is zero unresolved blocker/critical issues, all mandatory invariants passing, no independence violation, stable deployment/recovery, independently reviewed critical paths, and a forecast that completes remediation/retest before day 14 with explicit reserve.

## 24-month company outlook

USD 10–50M must name the metric. The council's honest position is:

- **USD 10–50M recognized revenue or ARR in 24 months:** not a defensible operating plan; USD 50M is not credible from zero customers.
- **USD 10M enterprise value:** possible as a stretch if productized recurring revenue, reusable IP, external references and reduced founder dependence are demonstrated.
- **USD 50M enterprise value:** an outlier requiring exceptional growth, an anchor customer/partner, and likely external capital; it should not be the base plan.

Because no authoritative market study was performed, adopt ranges as hypotheses:

| Month-24 metric | Operating/base hypothesis | Stretch hypothesis |
|---|---:|---:|
| Annual recognized revenue | USD 0.5–1.2M | USD 1.2–2.5M |
| Exit ARR | USD 0.3–0.8M | USD 0.8–1.5M |
| Cumulative bookings | USD 0.8–2M | USD 2–4M |
| Paying customers | 6–12 | 12–20 |
| Enterprise value | USD 3–8M | USD 8–15M |

The earlier CEO/CFO case of USD 2–4M annual revenue and USD 1–2M ARR should be retained as upside until customer interviews, paid pilots, pricing and conversion evidence support moving it into the operating plan.

## Two-year operating sights

- **Months 0–3:** reconcile authoritative requirements; freeze the control-plane contracts; complete primary-source regulatory research; conduct at least 20 buyer/problem interviews; secure design partners; run the 48-hour delivery experiment.
- **Months 4–6:** operate the first internally assured service slice; obtain paid diagnostic or QA/security engagements; contract external security/release independence; measure delivery margin, rework and founder review load.
- **Months 7–12:** productize the assurance packs and repeatable service offers; deliver referenceable engagements; qualify at least two provider paths where continuity matters; complete one bounded ISO 20022 production-deployable release with honest scope claims.
- **Months 13–18:** convert repeated service work into reusable platform modules and recurring evidence/monitoring subscriptions; add sales and accountable domain/security capacity; establish statistically usable delivery baselines.
- **Months 19–24:** pursue regulated platform pilots through a bank/PSP/fintech partner; reduce customer concentration and founder-in-the-loop minutes; expand only modules and deployment profiles that pass qualification; decide fundraising from measured unit economics rather than valuation aspiration.

## Principal advantages

- continuous, parallelizable production of code, tests, documents and evidence;
- reusable assurance assets across internal products and external services;
- provider/harness resilience if neutrality is tested rather than declared;
- auditable delivery can be a commercial differentiator in regulated markets;
- service revenue can validate and finance product IP.

## Principal disadvantages and existential risks

- the founder remains the review, sales and accountability bottleneck;
- organizational independence cannot be automated;
- requirements, skills and model combinations create an expensive recurring qualification program;
- broad simultaneous scope can delay customer evidence and revenue;
- unsourced compliance claims can create legal and reputational exposure;
- four deployment modes, multitenancy and PL/SQL increase test and portability burden;
- AI-produced volume can increase rework faster than review capacity;
- immutable logging conflicts with privacy unless event payload and retention design are careful;
- enterprise subscriptions are useful for authoring but are not a scalable production control plane or contractual SLA.

## Ten founder decisions before implementation planning

1. Approve the independent control-plane-with-adapters architecture, or select another approach.
2. Define the exact two-week ISO 20022 microservice profile and named production topology; confirm that the 48-hour readiness result can revise the schedule.
3. Approve the month-1-to-6 commercial wedge and its explicit capacity split with platform work.
4. Approve the independent-office policy, self-approval disclosure, non-overridable actions, and date/budget for external reviewers.
5. Approve the AI authority boundary, including the division between deterministic AML/KYC rules, AI risk scoring/advice, and final human/regulatory disposition.
6. Confirm that tokenization remains in full MVP release scope but is legally gated, inert and not advertised until authoritative applicability is established.
7. Select the authoritative requirement source and approve reconciliation of the 545 requirements, 267 roles, 95 packages and 578 historical candidates without turning any count into a delivery target.
8. Approve the gate-by-gate definition of done: oracle, threshold, reviewer, evidence, waiver and expiry.
9. Approve provider qualification depth, minimum continuity coverage by risk class, subscription/API strategy, and monthly qualification budget.
10. Approve the proposed 24-month operating targets and the evidence thresholds that promote a stretch scenario into the plan.

## Honest answer

The vision is ambitious but not excessive if treated as a multi-year company system whose complete MVP is built through controlled internal waves. It becomes unrealistic when autonomy is confused with authority, document count with readiness, model availability with delivery capacity, or a single two-week microservice target with the complete company platform. The control plane and assurance discipline can increase accuracy and reduce rework, but no skill catalogue can guarantee highest accuracy. Only measurable acceptance contracts, deterministic tests, qualified reviewers, runtime evidence, incident learning, and controlled updates can do that.
