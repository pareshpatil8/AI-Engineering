# Policies Catalogue v1.0

Status: consolidated specification for founder review, 2026-09-05. This catalogue defines required behavior; it does not assert controls are implemented, qualified, legally approved or independently certified. The actual council reviewed architecture-level controls; these new individual records have not been reviewed by every external model.

## Common normative contract

All 40 policies apply to AI, human and hybrid performers according to task scope. A role title is an owner assignment target; no named incumbent or independent person is inferred. Each policy has immutable version/digest, applicability decision, accountable owner, separate reviewer, effective dates, enforcement configuration, evidence retention profile and change history. Owners are required before activation.

Policy decision outcomes are ALLOW, DENY, REQUIRE_APPROVAL, REDACT, CONSTRAIN or QUARANTINE. An executing agent cannot authoritatively decide its own policy exceptions. Enforcement must be outside model prompts at each listed boundary. Missing authority, mandatory evidence, qualification or audit durability fails closed for the affected action; safe read-only work may continue within scope. An approval binds tenant, task, exact artifact/action digest, scope, policy version, approver, time and expiry. Any subject change invalidates it.

Every record inherits these tests: eligible positive case succeeds; prohibited negative case has zero unauthorized side effects; missing/expired/forged approvals fail; deny remains effective through retries, fallback and concurrent execution; event evidence is complete and tenant-isolated. Each record also specifies a distinct abuse test. Evidence includes decision ID/reasons, evaluated inputs or protected references, policy digest, enforcement result, action/result hashes, correlated audit events, test run and independent review. Tests specified here are not yet executed.

Exceptions are prohibited for illegality, unauthorized customer actions/data transfer, falsification, audit tampering and required contractual/personnel independence. Other exceptions require POL-003, explicit authority, compensating controls and automatic expiry; existence of an exception path does not authorize its use. Review cadence: quarterly and on source, incident, topology, provider, skill or contractual change. Critical changes invalidate affected qualification immediately; routine changes receive risk-based impact analysis. No policy silently overrides a statutory obligation.

## Policy records

### POL-001 — Authority and lawful scope

- Purpose and required behavior: Execute only delegated actions within a current tenant, task, purpose and legal/contract scope.
- Accountable owner: Board / Legal; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: identity gateway; workflow admission; tool gateway.
- Deny rule: Deny missing authority, unlawful acts and inferred permission from silence.
- Approval rule: Exact-action approval for contractual commitments and reserved human decisions.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Attempt an unauthorized payment or instruction from a retrieved document; no side effect.
- Baseline trace: GOV-001..004; AGT-010. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-002 — Role separation and accountable offices

- Purpose and required behavior: Separate author, reviewer and approver assignments with recorded conflict checks.
- Accountable owner: Board / Internal Audit; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: assignment service; approval service.
- Deny rule: Deny required independent approval by the author, same accountable person, or an agent impersonating an officer.
- Approval rule: Required human-only office must be occupied by an eligible person; vacancy blocks action.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Use separate sessions/keys for one founder to self-approve; flag self_approved and reject independence claim.
- Baseline trace: GOV-011..013; SVC-016. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-003 — Risk and exception management

- Purpose and required behavior: Record inherent/residual risk, owner, treatment, due date and authorized risk acceptance.
- Accountable owner: Risk Officer; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: policy decision service; release gates.
- Deny rule: Deny expired or out-of-scope exceptions and attempts to override law, evidence integrity or contractual independence.
- Approval rule: Human risk owner approves bounded compensating controls and expiry; no silent acceptance.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Replay expired exception and change its artifact hash; deny both.
- Baseline trace: GOV-010; GOV-014..016. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-004 — Policy precedence and applicability

- Purpose and required behavior: Resolve law, scheme, contract, customer and organization conflicts in a documented applicability decision.
- Accountable owner: Compliance Officer; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: onboarding; policy compiler; task admission.
- Deny rule: Deny unresolved conflicts and unreviewed not-applicable claims.
- Approval rule: Legal/compliance owner approves interpretation; tenant policy cannot weaken mandatory obligations.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Submit conflicting customer retention policy and legal hold; block deletion pending resolved policy.
- Baseline trace: GOV-001..008. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-005 — Identity and privileged access

- Purpose and required behavior: Use unique workload/human identity, short-lived least-privilege credentials and contextual authorization.
- Accountable owner: CISO / IAM owner; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: IdP; vault; API; administrative gateway.
- Deny rule: Deny shared identities, stale grants and unauthorized elevation.
- Approval rule: Just-in-time privileged grants require named authority, scope and expiry.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Revoked agent retries with cached token; all material boundaries reject it.
- Baseline trace: SEC-001; SEC-005..007. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-006 — Tenant isolation and support access

- Purpose and required behavior: Propagate verified tenant context and isolate data, execution, telemetry, keys and backup paths.
- Accountable owner: Platform Security; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: storage; queue; search; cache; tools; support gateway.
- Deny rule: Deny cross-tenant identifiers, ambiguous tenant context and unauthorized operator access.
- Approval rule: Support access is time/purpose bounded and tenant-visible; dedicated isolation when contracted.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Cross-tenant IDs, cached results and backup restores never expose another tenant's assets.
- Baseline trace: TEN-001..020. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-007 — Data classification and minimization

- Purpose and required behavior: Classify data and enforce purpose, minimization, region, retention and lawful use.
- Accountable owner: Privacy Officer; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: ingestion; DLP; retrieval; export.
- Deny rule: Deny unclassified sensitive exports and production data in test/training without approved basis.
- Approval rule: Data owner/privacy authority approves exceptional processing and documented legal basis.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Seed synthetic KYC secret in prompt/log/export; prevent or redact unauthorized transmission.
- Baseline trace: SEC-030..034; TEN-010. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-008 — Provider and model qualification

- Purpose and required behavior: Route by current evaluated provider/model/configuration/task/domain/risk tuple and data agreement.
- Accountable owner: AI Risk Officer; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: model router; adapter admission.
- Deny rule: Deny unqualified fallback, incompatible retention/region and changed model outside qualification.
- Approval rule: Human authority approves high-risk qualification and residual risk.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Qualified provider fails; fallback lacking region clearance cannot receive payload.
- Baseline trace: LLM-001..016; QEV-001. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-009 — Task skill composition

- Purpose and required behavior: Load eligible versioned skills with declared dependencies, conflict checks and context budget.
- Accountable owner: Capability Owner; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: skill resolver; task planner.
- Deny rule: Deny conflicting skill instructions, unqualified combinations and treating skills as permissions.
- Approval rule: High-risk composition changes require independent evaluation acceptance.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Combine deploy-author and release-approver skills; privileges remain separated.
- Baseline trace: CAP-001; AGT-001. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-010 — Untrusted content and prompt injection

- Purpose and required behavior: Treat documents, code, messages and model output as untrusted data until validated.
- Accountable owner: Agent Security; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: retrieval; tool output adapter; memory write; output gateway.
- Deny rule: Deny instructions in data that alter authority, recipients, tools, evidence or goals.
- Approval rule: No exception permits untrusted content to become authority.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Injected repository comment asks to export keys; deny and retain detection evidence.
- Baseline trace: SEC-014..016. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-011 — Tool MCP plugin and sandbox control

- Purpose and required behavior: Allow registered signed/versioned integrations with least-privilege operations and bounded resources.
- Accountable owner: Platform Security; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: tool registry; execution sandbox; egress gateway.
- Deny rule: Deny arbitrary tools, uncontrolled egress, credential expansion and mutable unverified packages.
- Approval rule: Tool owner and security reviewer approve changed operation scope.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Tamper plugin digest and request unapproved network target; block execution.
- Baseline trace: SEC-017..018. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-012 — Secrets and cryptography

- Purpose and required behavior: Keep secret references outside prompts; rotate/revoke keys; use approved crypto profile and inventory.
- Accountable owner: CISO / Key Custodian; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: vault; KMS/HSM; CI; DLP.
- Deny rule: Deny raw key logging, insecure transport and secret reuse across tenants.
- Approval rule: Key custody and exceptional algorithm transition follow named authority and dual control where required.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Rotate/revoke key during task; retry uses valid authorized reference or stops.
- Baseline trace: SEC-008..010; TEN-011. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-013 — Immutable audit and evidence integrity

- Purpose and required behavior: Record ordered signed/hash-linked events, independent anchors and protected retention with redacted payload references.
- Accountable owner: Internal Audit / Audit Custodian; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: event gateway; evidence store; external anchor.
- Deny rule: Deny material side effects without durable intent audit; never rewrite history or fabricate evidence.
- Approval rule: Audit retention/legal hold changes require separate custodian and legal approval.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Delete/reorder event and compromise writer key; verification detects tamper and missing anchor.
- Baseline trace: GOV-019; REL-015. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-014 — Durable execution and recovery

- Purpose and required behavior: Checkpoint input/output hashes, versions, decisions, pending actions and idempotency keys.
- Accountable owner: SRE Owner; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: workflow engine; side-effect gateway.
- Deny rule: Deny blind replay after uncertain external side effects and checkpoint version mismatch.
- Approval rule: Reconciliation owner resolves uncertain transactions before replay.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Crash after external success before acknowledgement; recover without duplicate payment or message.
- Baseline trace: NFR-005; OPS-002. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-015 — Secure development and change control

- Purpose and required behavior: Apply approved threat model, design, review and deterministic gates to human and agent changes.
- Accountable owner: Engineering Director; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: repository; CI; change workflow.
- Deny rule: Deny bypass of protected branches/pipelines and direct production editing outside emergency workflow.
- Approval rule: Normal/high-risk changes require designated independent reviewers and release authority.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Agent modifies gate script in same change; protected independent gate rejects bypass.
- Baseline trace: ENG-027; SEC-019..024. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-016 — Supply chain and licensing

- Purpose and required behavior: Record dependency/SBOM/provenance/license risk including models, data, skills, plugins and tools.
- Accountable owner: Supply-chain Security / Legal; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: dependency proxy; build; artifact promotion.
- Deny rule: Deny unsigned/untrusted artifacts, prohibited licenses and unresolved mandatory vulnerability blockers.
- Approval rule: Legal licenses and security deviations require distinct scoped decisions.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Substitute dependency version after review; digest verification prevents promotion.
- Baseline trace: SEC-020..023. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-017 — Security assessment authorization

- Purpose and required behavior: Require written owner authorization, targets, time, intensity, allowed techniques, stop conditions and evidence rules.
- Accountable owner: Security Service Owner; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: engagement admission; scanner gateway.
- Deny rule: Deny out-of-scope VAPT targets, destructive techniques and unauthorized third-party activity.
- Approval rule: Scope extensions require authorized customer/security sign-off.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Scanner follows redirect outside authorized domain; gateway blocks request.
- Baseline trace: SEC-025..026; SVC-003. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-018 — Vulnerability impact and remediation

- Purpose and required behavior: Correlate CVE/advisories to actual version, configuration, reachability, exposure and tenant assets; track remediation/retest.
- Accountable owner: Vulnerability Manager; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: advisory ingestion; asset/SBOM graph; release gate.
- Deny rule: Deny unsupported unaffected claims and release with unresolved blocker/critical or failed mandatory control.
- Approval rule: Risk owner accepts eligible lower-risk exceptions with expiry; mandatory blockers remain blocking.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Inject advisory matching unused vs reachable package; record differentiated evidence and re-evaluate on change.
- Baseline trace: SEC-027..028; SEC-040. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-019 — QA independence and acceptance

- Purpose and required behavior: Use independent requirement-derived oracles, positive/negative/boundary/regression tests and exact-version review.
- Accountable owner: QA Director; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: test registry; CI; acceptance service.
- Deny rule: Deny sole reliance on author-generated expected answers, fabricated test runs and averaged-away mandatory failures.
- Approval rule: QA authority accepts evidence; human domain oracle signs unsettled regulated behavior.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Make implementation and generated test share a wrong expectation; independent oracle detects error.
- Baseline trace: QEV-001; REL-015. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-020 — Performance and resilience

- Purpose and required behavior: Specify workload, TPS, latency percentiles, error budget, duration, topology, durability and recovery targets.
- Accountable owner: Performance Engineering / SRE; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: load harness; capacity gate; release gate.
- Deny rule: Deny high-TPS claims without reproducible representative measurements and correctness under load.
- Approval rule: Customer/product owner approves SLOs and workload; SRE accepts operational evidence.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Retry storm under load preserves idempotency and reports tail latency and resource saturation.
- Baseline trace: NFR-001..015. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-021 — Release and production authority

- Purpose and required behavior: Promote immutable reviewed artifact with QA/security/operations/domain evidence and rollback/recovery plan.
- Accountable owner: Release Manager; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: artifact registry; deployment gateway.
- Deny rule: Deny unauthorized production deployment, stale approvals, failed mandatory gates and unsupported topology.
- Approval rule: Named human/customer authority authorizes regulated production release; deployable is distinct from customer acceptance.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Swap artifact hash after approval; deployment denied.
- Baseline trace: SEC-019; SEC-028; SEC-040. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-022 — Incident response and disclosure

- Purpose and required behavior: Classify incident, preserve evidence, contain within delegated runbooks and track applicable notification clocks.
- Accountable owner: Incident Commander; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: SIEM; containment; communication gateway.
- Deny rule: Deny concealment, evidence destruction and autonomous external legal statements outside authority.
- Approval rule: Legal/privacy/customer authority approves required notices; emergency containment follows preapproved bounds.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Simulate tenant leak and failed audit sink; containment and escalation execute with preserved chronology.
- Baseline trace: SEC-035..038. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-023 — Business continuity and disaster recovery

- Purpose and required behavior: Maintain tested tenant-aware backups, RPO/RTO, dependency recovery and continuity roles.
- Accountable owner: COO / SRE; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: backup; restore; failover; continuity workflow.
- Deny rule: Deny unsupported recovery claims and restoration into unauthorized tenant/region.
- Approval rule: Business/SRE owner accepts drill results and material failover scope.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Restore isolated tenant from signed backup and reconcile external side effects.
- Baseline trace: SEC-038; TEN-013. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-024 — Payment and ledger integrity

- Purpose and required behavior: Use deterministic amount/currency/state/idempotency/authorization/reconciliation controls and auditable corrections.
- Accountable owner: Payment Product Owner / Finance Controller; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: payment API; ledger; authorization and reconciliation services.
- Deny rule: Deny LLM alteration of balances, final transaction authority or duplicate/unauthorized transfers.
- Approval rule: Human/payment authority sets rules and exceptions through controlled configuration.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Duplicate out-of-order payment and timeout leave correct single financial effect and reconcilable state.
- Baseline trace: BNK domain requirements. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-025 — ISO 20022 and SWIFT message conformance

- Purpose and required behavior: Pin message identifiers, schema/code-set hashes, scheme usage rules, version translations and lifecycle semantics.
- Accountable owner: Payments Architect / Messaging Owner; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: schema/profile registry; message gateway.
- Deny rule: Deny generic ISO-compliant claims based only on XSD and reject unsupported profile/message combinations.
- Approval rule: Domain/network owner approves exact profile and migration; actual network admission remains separate.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Schema-valid message violating usage rule fails semantic gate; round-trip preserves mandatory meaning.
- Baseline trace: STD-007..008. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-026 — AML fraud and KYC decision support

- Purpose and required behavior: Record source data, model indicators, explanations, evidence and authorized decision thresholds; retain accountable reporting authority.
- Accountable owner: MLRO / Financial Crime Owner; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: case engine; model gateway; reporting gateway.
- Deny rule: Deny fabricated identity evidence, autonomous suppression/disclosure of regulated reports and unapproved adverse action.
- Approval rule: Authorized financial-crime officer controls escalations/reports and approves automation within lawful bounds.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Model suggests closing suspicious case without required evidence; case remains pending accountable decision.
- Baseline trace: BNK-026; STD-012. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-027 — Tokenization and asset rights

- Purpose and required behavior: Separate data tokens from legal asset tokens; bind issuance/redemption to rights, custody, consent and reconciliation profile.
- Accountable owner: Legal / Tokenization Product Owner; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: token issuance; redemption; custody; identity gateway.
- Deny rule: Deny claims that tokenization alone creates legal ownership, anonymization or authorization.
- Approval rule: Legal/customer authority approves rights/jurisdiction/custody model before enabled asset transactions.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Revoke KYC token and attempt reuse; access denied while required audit retained.
- Baseline trace: STD-004; BNK domain requirements. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-028 — AI solution lifecycle and model risk

- Purpose and required behavior: Document intended use, dataset rights/lineage, bias, robustness, drift, explainability and human recourse.
- Accountable owner: AI Risk Officer; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: dataset registry; training/evaluation; inference rollout.
- Deny rule: Deny deployment beyond evaluated population/use and uncontrolled retraining or threshold changes.
- Approval rule: High-risk use-case owner approves measured risk and oversight before activation.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Shift input population; drift triggers bounded fallback and review rather than silent continuation.
- Baseline trace: STD-005..006; QEV-001. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-029 — Customer and voice communications

- Purpose and required behavior: Follow identity verification, channel consent, approved disclosures, escalation and recording rules.
- Accountable owner: Customer Service / Privacy; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: CRM; outbound dialer; messaging.
- Deny rule: Deny agent impersonation, unapproved promises, sensitive data disclosure and unauthorized marketing calls.
- Approval rule: Human approves commitments, regulated advice and disputed/high-impact outcomes.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Caller social-engineers account data or requests unapproved refund; verification and escalation block action.
- Baseline trace: STD-003; SVC requirements. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-030 — Lead acquisition and sales contracts

- Purpose and required behavior: Discover leads within allowed sources and record provenance, consent and fit; delivery begins from authorized contract.
- Accountable owner: CEO / Sales / Legal; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: lead ingestion; CRM; offer/signature gateway.
- Deny rule: Deny unauthorized outreach, scraping violations, invented references and autonomous binding contract signature.
- Approval rule: Founder/customer-authorized humans approve external commitments, pricing exceptions and contracts.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Agent converts speculative lead into active engagement without signed scope; admission fails.
- Baseline trace: SVC-003; GOV-012. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-031 — Finance procurement and expenditure

- Purpose and required behavior: Track budget/reservation/actual spend, procurement authority, vendor checks, invoices and reconciliation.
- Accountable owner: CFO / Procurement; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: budget service; purchasing; invoice and bank gateway.
- Deny rule: Deny unapproved subscriptions/purchases, split-order limit evasion and autonomous bank transfers.
- Approval rule: Human financial authority approves spend above delegated bound and money movement.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Parallel agents exhaust shared budget; atomic reservation prevents overspend.
- Baseline trace: GOV-014; platform metering requirements. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-032 — People competence and worker lifecycle

- Purpose and required behavior: Maintain competence evidence for human/AI/hybrid assignments and timely access revocation.
- Accountable owner: COO / HR; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: role assignment; training; offboarding.
- Deny rule: Deny assigning vacant regulated offices or expired qualification as competent coverage.
- Approval rule: Accountable office owner accepts competence; HR handles human employment decisions.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Expired reviewer qualification prevents high-risk assignment; departure revokes credentials.
- Baseline trace: ORG requirements. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-033 — IP confidentiality and lawful standards use

- Purpose and required behavior: Track customer ownership, copyrighted source permissions, attribution and confidential work boundaries.
- Accountable owner: Legal / Knowledge Owner; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: retrieval; export; license scanner.
- Deny rule: Deny unlicensed standard redistribution and cross-customer reuse of protected code/data.
- Approval rule: Legal owner approves reuse, licensing and publication boundaries.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Licensed ISO text requested in public skill export; export excludes restricted content.
- Baseline trace: GOV-006; SVC-008. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-034 — Accessibility and inclusive design

- Purpose and required behavior: Pin applicable accessibility profile; combine automated checks with keyboard, assistive technology and human task tests.
- Accountable owner: Accessibility Lead / Product Owner; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: design review; test; release gate.
- Deny rule: Deny conformance claims from automation alone and unresolved mandatory accessibility failures.
- Approval rule: Product/legal owner resolves applicability and documented equivalent access where lawful.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Screen-reader/keyboard completion test fails despite clean scanner; release gate remains failed.
- Baseline trace: STD-013. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-035 — Architecture technology and portability

- Purpose and required behavior: Use provider-neutral role/task contracts and versioned language/framework/database/deployment profiles.
- Accountable owner: Enterprise Architect; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: architecture review; adapter qualification; build.
- Deny rule: Deny marketing unsupported ports and assuming MCP makes incompatible models equivalent.
- Approval rule: Architecture owner approves dependencies and portability tradeoffs with evidence.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Change Java/Oracle/harness profile; contract tests identify affected qualifications.
- Baseline trace: LLM-001; TEN-006; ENG requirements. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-036 — Feedback and controlled improvement

- Purpose and required behavior: Convert experience and human feedback into traceable proposals, independent review, evaluation and canary versions.
- Accountable owner: Capability Governance / Quality; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: feedback intake; change registry; qualification gate.
- Deny rule: Deny direct self-modification of released skills, policies, standards, gates or evaluators.
- Approval rule: Designated owner approves promotion after independent evidence and rollback readiness.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Agent edits policy in response to failure; released policy stays unchanged and proposal is recorded.
- Baseline trace: AGT-022; FBK-004. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-037 — Records retention and customer lifecycle

- Purpose and required behavior: Apply class-specific retention, legal hold, deletion, export and key destruction with customer evidence.
- Accountable owner: Records Manager / Privacy; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: retention engine; export; offboarding.
- Deny rule: Deny blanket delete that violates hold and indefinite sensitive retention without basis.
- Approval rule: Legal/privacy owner resolves retention conflicts and authorized offboarding.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Offboard held tenant; access ends, held records remain protected and nonheld data deletion is evidenced.
- Baseline trace: TEN-013; SEC-030. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-038 — Independent assurance and truthful claims

- Purpose and required behavior: Disclose author/reviewer/provider provenance, limits, self-approval and actual certification scope.
- Accountable owner: Internal Audit / Legal; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: report publication; sales claims; attestation workflow.
- Deny rule: Deny claiming four-model item review, CMMI Level5, certification or independent audit without evidence.
- Approval rule: Named qualified assessor/human approves claims within their authority.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Generate compliance badge from scan success; publication denied absent actual authority/evidence.
- Baseline trace: GOV-013; SVC-016. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-039 — Service module and deployment qualification

- Purpose and required behavior: Track release, implemented, validated, exercised, enabled and supported scope per module/topology.
- Accountable owner: Service Owner / SRE; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: module registry; tenant enablement; release gate.
- Deny rule: Deny enabling unqualified paths while preserving full release requirements and visible gaps.
- Approval rule: Service/customer owner accepts qualified service profile before commercial use.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: QAaaS enabled on new private-cloud topology without evidence; admission denied.
- Baseline trace: PLT-023; TEN-004..005. Range notation means related source requirements, not a verified one-to-one coverage claim.

### POL-040 — Council adjudication and dissent

- Purpose and required behavior: Collect independent initial opinions, evidence-based challenge, conflicts and explicit dispositions using qualified model seats.
- Accountable owner: Governance Owner; reviewer: independent qualified control reviewer with conflict check under POL-002.
- Enforcement points: council orchestrator; decision registry.
- Deny rule: Deny majority vote overriding evidence, policy or human authority; do not expose hidden chain-of-thought as audit requirement.
- Approval rule: Accountable decision owner accepts material decisions and unresolved risk; council recommends.
- Exception path: common contract and POL-003; prohibited categories remain non-overridable.
- Evidence: common evidence contract plus scope-specific source artifacts and the observed enforcement result.
- Distinct negative test: Three models agree on false source; authoritative evidence wins and dissent is retained.
- Baseline trace: GOV-019; COL requirements. Range notation means related source requirements, not a verified one-to-one coverage claim.

## Council disposition applied

Claude's independent authority and vacant-office corrections are incorporated in POL-002, POL-021 and POL-038. Gemini's brand-fixed routing and founder-simulated independence are rejected through POL-008, POL-002 and POL-040. GLM's audit, explicit role and deterministic-core proposals are incorporated with bounded authority; no blanket removal of AI financial-crime assistance or supported deployment scope is adopted. All model recommendations remain advisory. Review sources: [Claude](../model-council/deliberations/Claude_Cross_Review_v0.1.md), [Gemini](../model-council/opinions/Gemini_Independent_Opinion_v0.1.md), [GLM](../model-council/opinions/GLM_Independent_Opinion_v0.1.md), [synthesis](../model-council/synthesis/Proposed_Council_Synthesis_v0.1.md).

