# AI-led company — brainstorming and multidisciplinary review

**Document ID:** AICOE-REVIEW-001

**Version/date:** 0.1 / 5 September 2026

**Status:** REVIEW DRAFT — not requirements approval, implementation authorization, or regulatory assurance

**Scope:** The owner's complete single-release MVP; internal development waves are permitted.

**Review method:** Codex analysis through CEO/commercial, engineering, security and QA lenses; a separately executed, read-only Claude review is recorded in the companion review. These are AI-assisted reviews, not sign-offs by appointed officers or qualified external assessors.

## 1. Honest verdict

The proposed company is practically possible as a **governed, AI-led delivery organization**, with reusable capabilities, enforceable controls, measurable outputs and accountable humans. It is not credible as a large collection of prompts that makes arbitrary models behave like expert employees with guaranteed accuracy.

The existing documents are a strong breadth-first foundation. They already understand independent review, dynamic skill selection, human authority, evidence, tenant isolation, provider adapters and controlled learning. The missing step is turning these intentions into precise contracts, test oracles, supported configurations and executable enforcement. More files or more role names alone will not close that gap.

My recommendation is to retain the full external MVP scope and use a reusable assurance/control layer around existing orchestration and execution frameworks. Establish one canonical source of truth for roles, skills, policies, standards, tools, workflows, evaluations and evidence. Treat Paperclip and other harnesses as replaceable integrations, not as the definition of the company or the sole security boundary.

Two limits need to remain explicit:

- “Any LLM” can mean an extensible, provider-neutral contract. It cannot mean every model is qualified for every task, that every client supports the same features, or that outcomes are identical.
- A bank-connected, externally accepted production service in two weeks remains the owner's desired benchmark. No customer, bank, scheme, acceptance scope, onboarding slot or delivery measurement currently supports that promise. Do not silently replace it with an internal prototype, but do not sell it as established capability either.

**Readiness judgment:** suitable for structured requirements finalization; not yet an evidence-backed authorization for unrestricted autonomous operation or bulk production of the entire catalogue. This review does not start implementation.

## 2. Evidence and authority

### 2.1 Artifacts reviewed

| Reference | Artifact | What it actually supplies |
| --- | --- | --- |
| BASE | `docs/requirements/AI_Engineering_COE_MVP_Requirements_Baseline_v0.1.md` | 545 numbered requirements, broad functional/nonfunctional scope and governance principles |
| MATRIX | `docs/requirements/AI_Engineering_COE_Role_Skill_Matrix_v0.1.md` | 267 unique role IDs, 95 capability packages, 12 segregation patterns and 15 matrix requirements; not an atomic skill catalogue |
| LEGACY | `temp/AI_Engineering_CoE_578_Item_Disposition_Register_v0.2.md` | 578 historical candidate IDs and suggested realizations; discovery/reconciliation input, not proof that 578 skills are necessary |
| PC-REQ | `docs/paperclip/AI_Engineering_COE_Paperclip_Company_Requirements_v1.0.md` | Artifact-factory execution contract, gates, exact-byte evidence and four runtime projections |
| PC-ROLE | `docs/paperclip/AI_Engineering_COE_Paperclip_Role_Mapping_v1.0.md` | Human Board plus 12 initial agent positions, provider lanes and author-disjoint review boundaries |
| PC-RUN | `docs/paperclip/AI_Engineering_COE_Paperclip_Runbook_v1.0.md` | Operational setup and verification instructions; reviewed as documentation, not executed |

The source snapshots are identified in [the provenance record](AI_Agent_Company_Review_Provenance_v0.1.md). Existing documents have been preserved. Proposed amendments are in [the numbered amendment register](AI_Agent_Company_Requirements_Amendments_v0.1.md).

### 2.2 Confirmed intent versus unresolved claims

**Owner-stated direction:** AI-led company; agents research leads and the founder personally connects/converts; no customer yet; complete scope in one external MVP; India first; multitenancy from day one; self-hosted/private/public/hybrid deployment; AI/human/hybrid role contracts; engineering, security, QA, operations and commercial services; banking/payments/AI/tokenization; provider/harness neutrality; feedback-driven improvement; agents perform development work subject to necessary human decisions.

**Unvalidated ambitions:** commercial demand, viable margins, reliably low human effort, highest accuracy, UPI/core-banking-scale performance, and the two-week bank-connected service. These require separate evidence, not more confident wording.

**Authority issue:** BASE and MATRIX say draft/owner review, while PC-REQ says “FINAL FOR PAPERCLIP EXECUTION” and promotes the inputs to mandatory execution requirements. A document label is not evidence of owner approval. Preserve any genuine approvals from other work, but reconcile their exact scope and source hashes before execution. This review neither cancels such approvals nor invents them.

Preserving all historical IDs for traceability is compatible with rejecting 578 as the target skill count. Making every historical capability name a mandatory implementation outcome is a different decision and needs explicit reconciliation with the owner's instruction. Many candidates can merge into one shared tool or split into several artifact types without losing their historical references.

## 3. Findings for engineering, security, QA and CEO review

Severity here means **requirements-finalization priority**, not a discovered production vulnerability: P1 must be resolved before the affected capability can be approved; P2 needs a defined resolution before its release qualification. No running product was audited.

| Finding | Priority / lens | Evidence and impact | Required disposition |
| --- | --- | --- | --- |
| REV-001 | P1 / Governance | BASE §28 and MATRIX §12 retain approval gates; PC-REQ §§2–3 labels them binding and requires 578 capability names. Conflicting authority can cause premature execution or scope inflation. | Create a signed/versioned decision ledger; distinguish historical reconciliation coverage from approved implementation outcomes. |
| REV-002 | P1 / Engineering | MATRIX §10 points Java to the Technical Lead, Angular to Senior Java, DevOps to Enterprise Integration, and reviewers to platform/cloud engineers. PC-ROLE position 7 inherits the Java/Angular mismatch. | Correct the crosswalk and add referential/type checks. See §4.1. |
| REV-003 | P1 / Engineering + QA | MATRIX §2 and MAT-003 explicitly defer decomposition; BASE CAP and QEV describe contracts and tests but the matrix does not instantiate them. | Define atomic outcome contracts and many-to-many mappings; do not treat 95 packages as 95 finished skills. |
| REV-004 | P1 / Engineering + Security | LEGACY `PAY-016 validate-iso20022-xsd`, `PAY-010 detect-duplicate-payment`, and `AGT-018 redact-agent-context` are proposed as skills. Correctness/security enforcement cannot depend on a model remembering prose. | Separate deterministic execution/enforcement from expert interpretation, diagnostics and exception handling. |
| REV-005 | P1 / Traceability | `AGT-001` exists in BASE as an executable-agent requirement and in LEGACY as a role-contract candidate. Bare IDs can join unrelated entities. | Use typed, document-qualified IDs; reject ambiguous imports and mappings. Preserve original IDs. |
| REV-006 | P1 / Security | TEN-016 prohibits any cross-tenant inference through timing/resource contention. This is an unbounded claim for shared infrastructure. Worktree separation in PC-REQ is not a process/credential/data security boundary. | Define a threat model, measurable isolation objectives and dedicated options; test authorization, shared resources, metadata and residual side channels separately. |
| REV-007 | P1 / Security + QA | PC-REQ G5–G8 and exact-byte evidence are valuable, but artifact bytes alone do not identify all runtime dependencies, policy overlays, model configuration, tenant context or test-oracle versions. | Bind attestations to the complete execution/qualification dependency set and protect evidence writers. A hash identifies content; it does not prove the content is correct. |
| REV-008 | P1 / QA | QEV-024/025/035 require statistics, protected tests and approved thresholds; NFR-001 requires SLOs. The reviewed package does not supply complete approved workload/threshold/fixture records for the proposed commercial reference case. | Instantiate acceptance profiles, hidden holdouts and deterministic financial oracles. Never report a specified test as a passed test. |
| REV-009 | P1 / QA + Architecture | MAT-008 and broad runtime/deployment gates can be read as an unbounded Cartesian product of roles, skills, models, harnesses and topologies. | Define supported configuration tuples and risk-based coverage rules. Qualify every advertised tuple; retain all business scope without promising all imaginable combinations. |
| REV-010 | P1 / CEO + Regulated delivery | No customer/partner evidence supports the two-week bank-connected production target. The word “certified” does not name an authority, message profile, network, deployment or assessment. | Maintain the target as an ambition; require a contract dependency and acceptance ledger before any promise. Distinguish internal readiness, client acceptance, network onboarding and independent assessment. |
| REV-011 | P1 / Commercial | BASE SVC and MATRIX C packages cover commercial services broadly, but the newly clarified lead-research → founder conversion → delivery model needs an explicit operating contract and economics. | Add lead provenance, qualification, founder handoff, bid/no-bid, pricing review, contractual scope, change control, acceptance, billing and support ownership. |
| REV-012 | P1 / Operations | PC-REQ §9 correctly defines durable continuation; subscriptions, machine sleep, absent human responders and provider outages still constrain service availability. | Distinguish a development workstation from an available service substrate. Define quotas, resumability, budget exhaustion, incident response and named human coverage. |
| REV-013 | P1 / Regulatory + Security | Equal importance of ISO, SWIFT, OWASP and NIST does not establish equal legal force or universal applicability. AI/human role portability does not confer a statutory appointment or network eligibility. | Create per-contract applicability profiles with qualified ownership, controlled/licensed sources, effective dates, evidence and accountable approvals. |
| REV-014 | P2 / Roles | Accessibility Tester and Release Manager appear under multiple IDs; Technical Writer receives E01–E10 as core eligibility. These may be intentional but scope/proficiency distinctions are not explicit. | Make aliases or separate mandates explicit, and express proficiency/context rather than assuming full expertise in every package. |
| REV-015 | P1 / Platform scope | PC-REQ §4 focuses on the artifact factory and projections. Those deliverables alone do not prove the full hosted, multitenant company/service platform in BASE. | Maintain separate but linked factory, company-platform and customer-service acceptance ledgers. Do not declare the entire MVP complete because the library is packaged. |
| REV-016 | P2 / Bootstrap | BASE §25/QEV-031 and PC-REQ §10 prohibit bulk authoring until a kernel/golden slice succeeds, but a kernel needs some initial role, policy and test definitions. | Specify a bounded seed set, bootstrap trust and promotion criteria; no blanket waiver of later assurance. |

### 3.1 What should be retained

Retain provider-neutral roles; task-scoped skill selection; separate policy enforcement; typed artifact realizations; author-disjoint review; golden delivery slices; bidirectional traceability; deterministic financial invariants; model/use-case validation; tenant isolation; protected evidence; bounded retries; human risk authority; and versioned feedback proposals. These are already strengths, not new discoveries this review needs to replace.

PC-REQ adds useful gate sequencing, generated projections, repository ownership and durable recovery. Current Paperclip documentation describes enforced issue review/approval stages, including escalation, but it also documents one required approval per stage. **Inference:** any required dual control must be deliberately represented and tested; a list of participants is not proof of a quorum. [Paperclip execution policy](https://docs.paperclip.ing/guides/power/execution-policy/).

Paperclip's default isolated execution workspaces use Git worktrees. **Inference:** that helps avoid edit collisions, but does not establish hostile-tenant process, filesystem, network or credential isolation. [Paperclip execution workspaces](https://docs.paperclip.ing/guides/projects-workflow/workspaces/).

## 4. Roles, skills and authority

### 4.1 Verified crosswalk corrections — proposed, not silently applied

| Location | Current reference | Correct source-matrix reference / action |
| --- | --- | --- |
| MATRIX §10 Java developer | R-ENG-004 | R-ENG-005 Java Developer; R-ENG-006 Senior Java / Spring Engineer when seniority is intended |
| MATRIX §10 Angular developer | R-ENG-006 | R-ENG-007 Angular Developer; R-ENG-008 senior Angular counterpart |
| MATRIX §10 DevOps | R-ENG-014 | R-ENG-016 DevOps Engineer; R-ENG-017 lead counterpart |
| MATRIX §10 area reviewers | R-ENG-018 / R-ENG-019 | These are platform/cloud engineering roles. Use R-ENG-023–026 for the named Java, Angular, PL/SQL and API/integration reviewer contracts, plus relevant QA/security/governance reviewers. |
| PC-ROLE position 7 | R-ENG-004 + R-ENG-006 | Technical Lead + Senior Java does not map Angular. Add R-ENG-007 or R-ENG-008 according to the selected proficiency contract. |
| PC-ROLE position 11 | “R-OPS release role” | Resolve to an exact versioned role ID after Release Manager alias/scope decision. |
| MATRIX Accessibility Tester | R-DSN-008 and R-QA-010 | Decide one canonical role with aliases, or distinguish design assurance from delivery testing with explicit outputs. Preserve both historical IDs. |
| MATRIX Release Manager | R-ENG-022 and R-OPS-014 | Decide one canonical role with band variants, or define separate engineering-release and service-transition mandates. |

### 4.2 Can one agent have multiple skills?

Yes. Multiple skills are normal; unlimited simultaneous instructions and unlimited permissions are not. Separate these concepts:

| Concept | Meaning | Example |
| --- | --- | --- |
| Role contract | Responsibilities, outputs, competence and accountability boundaries | Java developer |
| Position / staffing binding | A role assignment in a particular company/project, with band and period | Payments team senior developer |
| Execution identity | The principal whose actions can be authorized and audited | Tenant A, task 42, author run 7 |
| Capability eligibility | What the role may be considered competent to use | API design, Java implementation, testing |
| Active skill set | Small task-relevant selection actually supplied for this run | Implement idempotent endpoint; write concurrency tests |
| Authority envelope | Permitted actions, data, environment, budget and expiry | Write feature worktree; use synthetic fixtures; no production access |
| Policy/control | A rule enforced regardless of what the agent requests | Cannot approve own release; cannot export customer data |

The same base model may execute different role contracts, but a new chat alone is insufficient segregation. Candidate authorship, credentials, storage access, review inputs and approval authority must be separated and tested. Shared or contaminated memories can compromise independent judgment.

Do not choose a universal “five skills per agent” limit. Evaluate retrieval precision, missing-skill rate, context occupancy, conflict rate, task success and cost. The scheduler should select an evaluated composition, load supporting references on demand, and abstain/escalate when the necessary qualification is missing.

### 4.3 How much skill depth is enough?

Decompose by repeatable outcome and test boundary, not employee title or an arbitrary count. A Java developer should reuse general requirements interpretation, secure API design, implementation, unit testing and evidence skills; language/toolchain-specific rules belong in a selected technology profile. A Java reviewer reuses some knowledge but has a distinct review output and prohibited authoring/approval actions.

For an idempotent payment API, for example:

- An analysis skill produces a scoped API and state-transition contract, including rejection/escalation conditions.
- An implementation skill consumes that contract and a Java profile and produces a patch plus developer evidence.
- Deterministic validators check schema, compilation, authorization and financial invariants.
- An independent review skill produces findings against frozen code and requirements, not an approval impersonating a human.
- A release workflow enforces the required decisions and evidence. It is not merely a skill telling an agent to be careful.

A candidate may be split if it has different authority or independent failure modes; candidates should merge if their only difference is a role label. Catalogue completion means all approved outcomes and controls are covered and tested, not that a competitor's file count has been exceeded.

### 4.4 Additional responsibilities to make explicit

These are **proposed specializations or mapping refinements**, not a demand for more permanent agents. Existing role IDs may own them if their contracts are extended.

| Responsibility | Existing candidate owner / packages | Required output and boundary |
| --- | --- | --- |
| Lead research and qualification | R-COM-002 / C01 | Source-linked lead dossier, fit/confidence, duplicate check, lawful channel and founder handoff; no invented prospect interest |
| Bid/no-bid and delivery feasibility | R-COM-003/004 with engineering, security, finance / C02, C04 | Feasibility, exclusions, dependency and acceptance record; no autonomous contractual commitment |
| CRM/revenue operations | R-COM-001/006 and R-FIN-003 / C01–C04, G06 | Controlled lead-to-contract-to-invoice state and approved handoffs; no unauthorized outreach or funds movement |
| Scheme/partner acceptance coordination | Banking/payment owner plus R-COM-008 / B02–B04 | Named counterpart, usage profile, onboarding dependencies, test evidence and external acceptance record |
| Standards/source custody | R-GOV-012/013 and R-PLT-007 / G04, T04 | Versioned applicability and licensing ledger; distinguish source text from approved derived rules |
| Evaluation-corpus and oracle custody | R-PLT-011 with domain validators / T05, Q09, D05 | Hidden data access control, independent expected results, grader calibration and change history |
| Runtime compatibility stewardship | R-PLT-009/010/012 / T03, T06 | Qualified runtime tuples, negative conformance evidence, deprecation and migration records |
| Customer evidence/IP handover | R-COM-006, R-PLT-011, service owner / C03, C04, T05 | Accepted deliverables, permitted evidence disclosure, export/deletion/retention and warranty/support handover |

CEO-to-associate bands remain useful, but proficiency, permitted supervision and evidence should vary by assignment. “All roles any company needs” is an extensible reference ontology, not a fixed universally mandatory legal org chart. Actual office holders depend on the entity, contracts and applicable obligations.

## 5. Architecture alternatives — full scope retained

These alternatives are recommendations for owner review, **not an approved implementation design**. All retain the stated single-release product/service scope.

| Approach | Description | Strength | Principal cost/risk |
| --- | --- | --- | --- |
| A — Harness-led federation | Canonical library plus existing harness controls; adapters coordinate separate tools and service modules. | Least bespoke platform code where existing controls genuinely suffice. | Governance/evidence fragments across integrations; qualification may reveal missing isolation or non-bypassable controls. |
| B — Reusable assurance/control layer with harness adapters | Own canonical registry, policy/authorization contracts, evaluation/evidence and service/tenant governance; reuse qualified orchestration and execution components. | Best fit for reusable services, provider neutrality and controlled portability. | Substantial security/platform engineering remains; boundary contracts must prevent duplicate authority or conflicting state. |
| C — Fully custom company harness | Build orchestration, scheduling, runtime management, governance, registry, UI and commercial modules together. | Maximum product-specific control. | Largest bespoke surface and maintenance burden before customer demand is proven. |

**Recommendation: B.** This is an architectural recommendation, not a scope reduction. Build only the missing control/assurance capabilities once; adopt existing components when their actual versions pass conformance. Do not assume Paperclip, ECC and gstack have equivalent responsibilities or assurances. Record exact project identities, versions and supported features in the adapter register.

The conceptual separation is:

```text
Founder / authorized humans + customer contracts
                       |
        Company workflow and service control plane
                       |
   Canonical registry — policy/authority — evidence/evaluations
                       |
           Qualified harness/provider/tool adapters
                       |
      Isolated tenant/project execution environments
                       |
       Customer products and separately sold services
```

The factory produces and qualifies reusable artifacts. The company platform assigns and governs work. Customer products have their own runtime architecture, SLOs and release authority. They are linked, but completion or availability of one does not prove the others.

### 5.1 MCP, plugins and model neutrality

The proposed application can expose scoped discovery, artifact retrieval and controlled workflow/tool operations through MCP, with equivalent internal APIs and installable offline packages. Discovery/read access and action execution need distinct authorization. Clients without native skills can receive a generated task-specific instruction package or use an adapter, provided their actual behavior is qualified.

Agent Skills defines a portable `SKILL.md` format and progressive loading. Its optional `allowed-tools` field is experimental and client-dependent; its reference validator checks format, not task competence. Therefore portable packaging is useful but is not proof of behavioral equivalence or enforcement. [Agent Skills specification](https://agentskills.io/specification).

MCP tool annotations are hints, not security guarantees. Authorization, sandboxing and network controls must remain outside model discretion. [MCP tool-annotation guidance](https://blog.modelcontextprotocol.io/posts/2026-03-16-tool-annotations/). The July 2026 protocol update also demonstrates why adapters must pin protocol behavior, migrate deliberately and rerun conformance rather than assume permanent compatibility. [MCP specification update](https://blog.modelcontextprotocol.io/posts/2026-07-28/).

Define support separately for: package parsing, discovery/activation, structured output, tools, durable interruption/resume, approval enforcement, isolation, evidence capture, data routing and task-quality thresholds. An adapter must fail safely if a required capability is absent. A qualified fallback must satisfy the same tenant, residency, contract and task-risk restrictions.

Treat the proposed language specification as an internal **Language and Technology Specification Profile (LTSP)**, not as a claim that a new public protocol exists and not as the Language Server Protocol. It should pin language/runtime/framework/tool versions, coding/security/testing rules, build/deployment interfaces and golden fixtures. Future technologies are extension points; every newly advertised technology needs its own qualification.

### 5.2 Scale and regulated products

Company throughput concerns concurrent tasks, tokens, queues, tool capacity, review capacity, evidence growth and human response. Payment throughput concerns transactions, state, correctness, latency, storage, partner dependencies and recovery. Benchmark them separately.

The proposed default should keep settlement, ledger posting, monetary arithmetic, authorization and idempotency in deterministic, tested services. AI fraud scores or document extraction can be separately bounded inputs with explicit fallback and decision authority. The Java/Angular stack alone does not establish high TPS; Angular is a customer/admin channel, not the payment-processing engine.

Before accepting any high-throughput claim, define message/profile mix, payload size, concurrent clients, sustained/peak arrival rates, percentile latency, error/rejection rates, hardware, partitioning, dependency behavior, durability, failover and reconciliation invariants. A load test against stubs is not a bank-network capacity certificate. Horizontal scaling is not unlimited, and more workers cannot remove serial dependencies or scarce provider quotas.

### 5.3 India-first assurance

Maintain an applicability ledger distinguishing law/regulatory direction, network rules, contracts, formal standards and voluntary guidance. Equal engineering attention does not mean identical legal force. RBI's IT-outsourcing directions apply to defined regulated entities and material arrangements; they preserve the regulated entity's Board/senior-management responsibility despite outsourcing. Application development/testing, cloud and managed security appear within the described activities, with scope qualifications and exclusions. This supports the need for contract-specific assessment, not a blanket claim that every software supplier is itself a regulated bank. [RBI IT-outsourcing directions](https://www.rbi.org.in/scripts/FS_Notification.aspx?Id=12486&Mode=0&fn=14).

SWIFT's applicable customer-security assessment is distinct from message validation or general software QA. Its guidance requires independence from first-line control operation. [SWIFT independent assessment](https://www.swift.com/myswift/customer-security-programme/perform-independent-assessment). Pin exact ISO 20022 messages and usage profiles from authoritative material; “ISO 20022” alone does not specify a complete payment product. [ISO 20022 message catalogue](https://www.iso20022.org/catalogue-messages).

Use OWASP agentic guidance to inform threat cases and control design, not as a certification claim. [OWASP Agentic Top 10](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/). NIST's GenAI profile supports structured AI risk management; its use is not automatic legal compliance or a product certification. [NIST AI 600-1](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf).

The final applicability exercise must also cover relevant RBI/payment-data obligations, NPCI/scheme rules, CERT-In, effective Indian privacy requirements, outsourcing, customer contracts and any controlled ReBIT material. Applicability and current effective provisions require qualified review; this memo is not a complete legal opinion. Tokenizing KYC data does not automatically anonymize it, and asset-token software does not itself establish legal title, custody rights or permission to issue/trade assets.

## 6. How the skills, policies and standards become testable

An effective skill has a measurable outcome, defined inputs/output schema, permitted tools, negative examples, escalation/abstention cases, dependencies, evidence and a scoring contract. Policies have decision-table tests and bypass tests. Standards/profile rules have traceable controls and appropriate automated checks or evidence-backed manual review. Workflows need state-transition, retry, authorization and recovery tests. Tool/schema validators need known-good and known-bad fixtures.

The following are **proposed acceptance scenarios**, not tests already run:

| Test family | Example | Required observable outcome |
| --- | --- | --- |
| Activation | Similar-sounding Java, JavaScript and Angular tasks; unrelated input | Correct qualified profile/skill selection; false activation and missed activation measured |
| Composition | Developer plus reviewer permissions requested in one task | Disallowed author/self-approval combination refused; allowed compatible skills remain usable |
| Prompt injection | Malicious instruction in a customer issue, source file, retrieved standard or MCP response | Untrusted content cannot alter authority or leak protected data; refusal/escalation recorded |
| Tenant boundary | Tenant A references B's artifact/evidence ID or reuses a cached lookup | No unauthorized disclosure/action; tenant-qualified caches and audit records |
| Approval integrity | Forged, expired, replayed or wrong-hash approval | Rejected before side effect; correct human identity and scope required |
| Financial correctness | Duplicate/replayed request, crash after posting, retry during failover | No unauthorized/double posting; state and reconciliation satisfy independently defined invariants |
| ISO conformance | Schema-valid but semantically invalid amount, party or status mapping | Semantic failure detected with source/profile explanation; XSD pass is not mistaken for full conformance |
| Provider change | Same frozen task on another supported model/runtime | Independent tuple qualification; no inferred pass from package compatibility |
| Resume/recovery | Provider interruption, worker death, lost acknowledgement | Durable recovery with bounded retry and no duplicate irreversible action |
| Feedback poisoning | Tenant-specific instruction or malicious feedback attempts global promotion | Proposal quarantined; provenance, independent review and regression before promotion |
| CVE impact | Advisory matches a transitive deployed dependency but applicability is uncertain | Affected/possibly affected/not affected/unknown with rationale and inventory freshness; uncertainty is not a clean bill of health |
| External QA/security service | Customer uploads an unrelated tenant target or exceeds approved scan window | Scope gate blocks execution; signed authorization and evidence handling govern permitted work |
| Accessibility/support | Keyboard/screen-reader workflow; failed voice authentication; low-confidence answer | Accessible task completion or escalation; no unsupported identity or transaction decision |
| Commercial completion | Deliverable generated but client acceptance missing | Remains pending acceptance; not converted to paid/completed service by an agent assertion |

For probabilistic outputs, compare with and without the skill on the same frozen tasks; use repeated runs, approved sample sizes, class-sensitive metrics, uncertainty and hidden holdouts. Reviewer agreement alone is insufficient: reviewers can share the same error. Use independent domain oracles for money movement and business rules, calibrated human adjudication where required, and deterministic checks wherever practical.

Mandatory safety/financial invariants must pass every applicable test case; finite test success is not a mathematical guarantee over all possible inputs. Thresholds for probabilistic quality, rework, latency and false acceptance must be approved per use case. Do not invent a single “99.9% accurate company” score.

## 7. Commercial modules and controlled learning

The same reusable engines can serve internal projects and outside clients if each module has its own contract, tenant boundary, authorized scope, input/output schema, metering, evidence, acceptance, retention, support and liability boundaries. Independence rules also apply when the company both builds and assures a product; commercial incentives must not grant the author power to certify their own work.

For vulnerability-impact services, the required flow is inventory/SBOM ingestion → advisory ingestion and freshness tracking → component/version resolution → deployment/exposure analysis → uncertainty-aware prioritization → approved remediation → independent retest. NVD is a useful source, but the design should accommodate vendor advisories and other approved feeds rather than make one feed the sole source of truth. Use provenance and confidence; never infer “not affected” from a missing match or failed feed update. Cross-tenant dashboards may show only explicitly authorized aggregates.

For QA as a service, distinguish test design, executable automation, environment setup, execution evidence, defect triage and acceptance authority. Selenium/Playwright/JMeter are tool profiles, not substitutes for a product-specific oracle or credible workload.

For fraud/AML/cheque/customer-support AI, define the precise decision being supported, labeled-data rights, error costs, drift monitoring, appeal/escalation and final action authority. Do not count a generic chatbot demonstration as evidence for financial-crime detection or cheque-clearing decisions.

Feedback must create a versioned change proposal. Classify it as task-local memory, tenant learning, shared skill improvement, policy change or standards update. Sanitize tenant data, retain permission/provenance, evaluate offline, obtain independent review and required human approvals, canary where applicable, and retain rollback. Neither success anecdotes nor an agent's own score may rewrite mandatory controls in production.

## 8. Codex and Claude collaboration

Both subscriptions can contribute through their supported execution paths. They share their respective account limits; more role identities do not create extra quota. Confirm permitted commercial/automation usage, data processing and billing terms for the selected arrangements before production commitments. No claim of unlimited or guaranteed subscription throughput is made here.

Use a shared version-controlled canonical repository and a single work ledger, not manual concatenation of two chats:

1. Freeze the requirement, artifact contract, acceptance tests and source versions for a work item.
2. Allocate an author a bounded path/worktree lease and explicit budget. Provider assignment is based on measured capability and availability, not a permanent assumption that one brand is always better.
3. Require structured outputs, dependency pins, tests and evidence; retain the exact candidate hash.
4. Give an author-disjoint reviewer read-only candidate access and independent expected outcomes. Route security and domain validation separately when required.
5. Resolve disagreements through reproducible tests, authoritative sources or an authorized adjudicator; no majority vote between models can establish a financial fact.
6. Merge once, regenerate runtime projections and revalidate impacted evidence. Later edits invalidate affected attestations.
7. Persist stopped work with its real next action. Resume after capacity returns; never convert a provider limit into “done.”

A practical division is Codex-heavy repository/tool/test work and Claude-heavy analytical/content work, with crossed review when qualified. This is a proposed starting assignment, not a claim of inherent model expertise. The same model can fill a different lane after qualification. Human governance, contracts, risk acceptance and any mandatory professional/external assessment remain with authorized people.

## 9. Requirements-finalization exit criteria

Do not restart the entire discovery interview. Review the concrete amendment register and resolve these bounded decisions:

- Reconcile document authority and approve outcome scope while retaining historical traceability without a fixed skill count.
- Choose the architecture direction; B is recommended, not yet approved by this memo.
- Approve the role/crosswalk corrections, alias policy and atomic contract schema.
- Define release-supported runtime/technology/deployment profiles and measurable acceptance records; unsupported combinations fail safely rather than pretend to work.
- Name human decision owners and fallback coverage, and record contract-specific standards/regulatory applicability.
- Define the two-week reference case precisely, including its external acceptance authority and prerequisites, without changing the owner's ambition.
- Complete the full MVP coverage ledger for the artifact factory, company platform and all commercial/domain modules.

Only then create the implementation plan. Internal waves should follow dependencies and proven review capacity, but the external release remains the full MVP requested by the owner. No code, skill bulk-generation, provider deployment, customer contact or production action was authorized or performed by this review.

## 10. Review status and limitations

Claude's independent result and its limitations are recorded in [the Claude review](AI_Agent_Company_Claude_Review_v0.1.md). AI review does not equal formal engineering, CISO, QA, CEO, customer or regulator sign-off.

A separate fresh-context Codex reviewer assessed this memo and the amendment register for completeness, consistency, clarity, scope and feasibility as review/finalization documents. It returned PASS with two precision refinements: whole-catalogue decomposition coverage must not be replaced by sampled demonstrations, and a contract definition alone cannot validate the two-week delivery target. Both were corrected in AC-008 and AMD-024/AC-024. A focused second pass confirmed both corrections, with no remaining findings from that focused check. Its initial subjective quality score was 9/10, not an assurance rating. It did not independently verify the Claude CLI event or public sources.

This documentation-quality result does not close REV-001–016 in the underlying baseline. Those findings remain subject to owner and functional review, approved amendments and later implementation/qualification evidence.

Current web references were checked on 5 September 2026. They support the limited claims beside their links, not a complete compliance mapping or proof of installed-runtime behavior. No performance benchmark, security test, actual adapter qualification, customer interview or commercial estimate was executed as part of this documentation review.
