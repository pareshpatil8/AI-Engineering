# Atomic Skill Catalogue v1.0

Status: authored outcome-contract catalogue for detailed review. Individual semantic acceptance, dependencies and outcome decomposition still require review before skill-specification freeze. Executable SKILL.md implementations and empirical qualification are future development deliverables. Existing LLM reviews informed the design, but did not review these new records individually. The companion JSON contains the current per-skill status and schema refinements.

## Shared schemas and mandatory behavior

SkillInput-v1 requires task_id, requirement_ids, acceptance_criteria, tenant_id, purpose, actor_id, role_assignment, resource_allowlist, data_class, risk, source_manifest, policy_versions, standard_profile_versions, technology_profile, qualified_tuple and budget. SkillResult-v1 requires skill_id/version, status (complete/partial/blocked/abstain), artifact URI/hash, source references, criterion-to-evidence links, tool receipts, limitations, unresolved findings, next_action and usage. No hidden chain-of-thought is requested.

All records inherit U0, input schema, output schema, tool restrictions, stop conditions, reviewer separation and test classes recorded in Atomic_Skills_v1.0.json. Dependency lists in that file identify skill dependencies, not mandatory policy/profile inputs. Candidate outputs cannot grant authority. Each domain oracle must be instantiated from the engagement acceptance criteria before implementation; semantic evaluation is currently unexecuted.

## G01 — Strategy and operating model

Domain scope: Define vision, strategy, value model, operating model, OKRs, portfolio choices, business case, decision record.

### SK-G01-01 — Frame strategic options

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Strategy and operating model; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Frame strategic options. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for frame strategic options; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G01-02 — Model a business case

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Strategy and operating model; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Model a business case. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for model a business case; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G01-03 — Draft measurable company objectives

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Strategy and operating model; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Draft measurable company objectives. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for draft measurable company objectives; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G01-04 — Analyze portfolio investment allocation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Strategy and operating model; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze portfolio investment allocation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze portfolio investment allocation; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## G02 — Board and corporate governance

Domain scope: Board packs, governance calendar, delegations, committees, conflicts, policy approval, accountable decisions.

### SK-G02-01 — Prepare a board decision pack

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Board and corporate governance; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a board decision pack. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a board decision pack; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G02-02 — Assess a conflict of interest

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Board and corporate governance; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess a conflict of interest. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess a conflict of interest; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G02-03 — Draft a delegation schedule

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Board and corporate governance; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Draft a delegation schedule. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for draft a delegation schedule; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G02-04 — Prepare corporate governance calendar

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Board and corporate governance; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare corporate governance calendar. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare corporate governance calendar; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## G03 — Enterprise risk and compliance

Domain scope: Risk taxonomy, assessment, control mapping, obligations, exceptions, residual-risk evidence, compliance monitoring.

### SK-G03-01 — Assess enterprise risk

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Enterprise risk and compliance; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess enterprise risk. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess enterprise risk; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G03-02 — Map an obligation to controls

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Enterprise risk and compliance; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Map an obligation to controls. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for map an obligation to controls; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G03-03 — Assess a residual-risk exception

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Enterprise risk and compliance; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess a residual-risk exception. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess a residual-risk exception; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## G04 — Legal, privacy, and regulatory interpretation

Domain scope: Legal issue spotting, applicability, contract/privacy review, regulatory-change impact; human legal decisions.

### SK-G04-01 — Analyze legal applicability

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Legal, privacy, and regulatory interpretation; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze legal applicability. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze legal applicability; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G04-02 — Review contract exposure

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Legal, privacy, and regulatory interpretation; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Review contract exposure. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for review contract exposure; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G04-03 — Assess a regulatory change

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Legal, privacy, and regulatory interpretation; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess a regulatory change. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess a regulatory change; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G04-04 — Assess intellectual-property licensing

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Legal, privacy, and regulatory interpretation; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess intellectual-property licensing. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess intellectual-property licensing; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G04-05 — Prepare a data-processing contract schedule

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Legal, privacy, and regulatory interpretation; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a data-processing contract schedule. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a data-processing contract schedule; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## G05 — Audit, evidence, and assurance

Domain scope: Evidence design, traceability, control tests, sampling, findings, remediation, independent review, audit packs.

### SK-G05-01 — Design an evidence sampling plan

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Audit, evidence, and assurance; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design an evidence sampling plan. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design an evidence sampling plan; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G05-02 — Assess control effectiveness

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Audit, evidence, and assurance; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess control effectiveness. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess control effectiveness; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G05-03 — Assemble an assurance finding

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Audit, evidence, and assurance; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Assemble an assurance finding. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assemble an assurance finding; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## G06 — Finance, procurement, and vendor governance

Domain scope: Budget, forecast, unit economics, procurement, outsourcing, vendor risk, contracts, invoices, financial controls.

### SK-G06-01 — Prepare a cash-flow forecast

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Finance, procurement, and vendor governance; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a cash-flow forecast. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a cash-flow forecast; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G06-02 — Assess supplier due diligence

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Finance, procurement, and vendor governance; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess supplier due diligence. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess supplier due diligence; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G06-03 — Reconcile an invoice discrepancy

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Finance, procurement, and vendor governance; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Reconcile an invoice discrepancy. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for reconcile an invoice discrepancy; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G06-04 — Prepare a tax reporting evidence pack

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Finance, procurement, and vendor governance; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a tax reporting evidence pack. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a tax reporting evidence pack; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G06-05 — Assess procurement bid comparisons

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Finance, procurement, and vendor governance; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess procurement bid comparisons. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess procurement bid comparisons; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## G07 — Workforce, ethics, and competence

Domain scope: Workforce planning, role design, hiring support, learning, competence, performance, conduct, workplace policy.

### SK-G07-01 — Define workforce competency needs

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Workforce, ethics, and competence; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Define workforce competency needs. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for define workforce competency needs; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G07-02 — Assess a competence portfolio

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Workforce, ethics, and competence; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess a competence portfolio. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess a competence portfolio; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G07-03 — Investigate a conduct concern

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Workforce, ethics, and competence; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Investigate a conduct concern. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for investigate a conduct concern; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-G07-04 — Prepare job-specific learning material

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Workforce, ethics, and competence; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare job-specific learning material. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare job-specific learning material; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## A01 — Role, authority, and segregation

Domain scope: Role contracts, RACI/decision rights, delegation, least privilege, incompatibility and segregation checks.

### SK-A01-01 — Draft a role authority contract

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Role, authority, and segregation; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Draft a role authority contract. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for draft a role authority contract; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A01-02 — Analyze a segregation conflict

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Role, authority, and segregation; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze a segregation conflict. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze a segregation conflict; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A01-03 — Prepare a delegation request

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Role, authority, and segregation; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a delegation request. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a delegation request; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## A02 — Planning and decomposition

Domain scope: Goal-linked planning, estimation, dependency mapping, task decomposition, assignment, prioritization.

### SK-A02-01 — Decompose an outcome into tasks

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Planning and decomposition; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Decompose an outcome into tasks. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for decompose an outcome into tasks; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A02-02 — Estimate a dependency critical path

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Planning and decomposition; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Estimate a dependency critical path. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for estimate a dependency critical path; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A02-03 — Prioritize a constrained backlog

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Planning and decomposition; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prioritize a constrained backlog. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prioritize a constrained backlog; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## A03 — Multi-agent collaboration

Domain scope: Context handoff, work leases, parallel coordination, conflict resolution, consensus with dissent, integration.

### SK-A03-01 — Prepare a context handoff

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Multi-agent collaboration; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a context handoff. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a context handoff; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A03-02 — Resolve competing implementation proposals

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Multi-agent collaboration; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Resolve competing implementation proposals. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for resolve competing implementation proposals; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A03-03 — Plan an integration sequence

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Multi-agent collaboration; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Plan an integration sequence. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for plan an integration sequence; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A03-04 — Analyze conflicting work leases

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Multi-agent collaboration; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze conflicting work leases. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze conflicting work leases; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## A04 — Human-in-loop and escalation

Domain scope: Approval request, preview, risk summary, exception, blocker escalation, fallback, appeal.

### SK-A04-01 — Prepare a human decision request

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Human-in-loop and escalation; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a human decision request. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a human decision request; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A04-02 — Classify an escalation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Human-in-loop and escalation; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Classify an escalation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for classify an escalation; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A04-03 — Prepare an appeal evidence pack

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Human-in-loop and escalation; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare an appeal evidence pack. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare an appeal evidence pack; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## A05 — Context and memory

Domain scope: Context selection, redaction, provenance, summarization, durable memory, expiry, contamination prevention.

### SK-A05-01 — Select task-relevant context

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Context and memory; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Select task-relevant context. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for select task-relevant context; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A05-02 — Produce a provenance-preserving summary

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Context and memory; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Produce a provenance-preserving summary. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for produce a provenance-preserving summary; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A05-03 — Assess a memory promotion proposal

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Context and memory; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess a memory promotion proposal. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess a memory promotion proposal; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A05-04 — Assess memory expiry and deletion

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Context and memory; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess memory expiry and deletion. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess memory expiry and deletion; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## A06 — Agent evaluation and observability

Domain scope: Role scenarios, activation tests, behavior evals, runtime comparison, agent telemetry, performance review.

### SK-A06-01 — Design a role evaluation scenario

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Agent evaluation and observability; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a role evaluation scenario. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a role evaluation scenario; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A06-02 — Analyze agent execution telemetry

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Agent evaluation and observability; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze agent execution telemetry. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze agent execution telemetry; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A06-03 — Compare qualified runtime outcomes

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Agent evaluation and observability; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Compare qualified runtime outcomes. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for compare qualified runtime outcomes; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A06-04 — Design a skill activation discrimination test

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Agent evaluation and observability; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a skill activation discrimination test. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a skill activation discrimination test; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## A07 — Controlled learning

Domain scope: Feedback analysis, root-cause analysis, change proposal, experiment, regression, canary, rollback.

### SK-A07-01 — Analyze recurring failure causes

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Controlled learning; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze recurring failure causes. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze recurring failure causes; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A07-02 — Design an improvement experiment

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Controlled learning; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design an improvement experiment. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design an improvement experiment; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A07-03 — Assess an improvement promotion

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Controlled learning; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess an improvement promotion. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess an improvement promotion; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A07-04 — Prepare a capability rollback proposal

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Controlled learning; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a capability rollback proposal. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a capability rollback proposal; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## A08 — Agent safety and security

Domain scope: Injection defense, tool safety, authority boundary, data loss prevention, sandboxing, kill switch, incident response.

### SK-A08-01 — Assess an injection attempt

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Agent safety and security; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess an injection attempt. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess an injection attempt; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A08-02 — Analyze a tool-action hazard

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Agent safety and security; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze a tool-action hazard. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze a tool-action hazard; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-A08-03 — Prepare an agent containment recommendation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Agent safety and security; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare an agent containment recommendation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare an agent containment recommendation; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## P01 — Product discovery and research

Domain scope: Problem framing, user/stakeholder research, market/competitor research, opportunity analysis, service blueprint.

### SK-P01-01 — Frame a customer research question

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Product discovery and research; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Frame a customer research question. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for frame a customer research question; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P01-02 — Synthesize customer interviews

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Product discovery and research; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Synthesize customer interviews. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for synthesize customer interviews; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P01-03 — Assess a market opportunity

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Product discovery and research; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess a market opportunity. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess a market opportunity; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P01-04 — Prepare a competitor evidence comparison

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Product discovery and research; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a competitor evidence comparison. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a competitor evidence comparison; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## P02 — Product strategy and management

Domain scope: Vision, strategy, outcomes, roadmap, prioritization, pricing, lifecycle, portfolio and product reviews.

### SK-P02-01 — Draft a product outcome strategy

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Product strategy and management; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Draft a product outcome strategy. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for draft a product outcome strategy; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P02-02 — Prioritize roadmap tradeoffs

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Product strategy and management; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prioritize roadmap tradeoffs. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prioritize roadmap tradeoffs; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P02-03 — Design a pricing experiment

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Product strategy and management; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a pricing experiment. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a pricing experiment; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## P03 — Business analysis and requirements

Domain scope: Elicitation, process/rule/data modeling, stories/use cases, NFRs, acceptance, traceability, impact/change.

### SK-P03-01 — Elicit acceptance requirements

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Business analysis and requirements; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Elicit acceptance requirements. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for elicit acceptance requirements; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P03-02 — Model a business rule

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Business analysis and requirements; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Model a business rule. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for model a business rule; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P03-03 — Analyze requirement change impact

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Business analysis and requirements; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze requirement change impact. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze requirement change impact; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P03-04 — Specify nonfunctional acceptance limits

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Business analysis and requirements; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Specify nonfunctional acceptance limits. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for specify nonfunctional acceptance limits; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P03-05 — Build a requirements traceability graph

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Business analysis and requirements; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Build a requirements traceability graph. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for build a requirements traceability graph; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## P04 — Delivery and programme management

Domain scope: Release/sprint planning, dependency/risk, status, benefits, governance, RAID, stakeholder communication.

### SK-P04-01 — Prepare a dependency-aware release forecast

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Delivery and programme management; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a dependency-aware release forecast. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a dependency-aware release forecast; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P04-02 — Analyze delivery variance

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Delivery and programme management; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze delivery variance. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze delivery variance; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P04-03 — Prepare a stakeholder status report

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Delivery and programme management; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a stakeholder status report. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a stakeholder status report; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## P05 — UX, UI, and service design

Domain scope: Information architecture, journeys, prototypes, interaction/visual design, design system, usability.

### SK-P05-01 — Design a user journey

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning UX, UI, and service design; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a user journey. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a user journey; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P05-02 — Specify an interaction prototype

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning UX, UI, and service design; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Specify an interaction prototype. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for specify an interaction prototype; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P05-03 — Review design-system conformance

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning UX, UI, and service design; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Review design-system conformance. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for review design-system conformance; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P05-04 — Design an information architecture

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning UX, UI, and service design; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design an information architecture. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design an information architecture; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## P06 — Content, documentation, and localization

Domain scope: UX content, technical writing, regulated disclosures, knowledge articles, localization and terminology.

### SK-P06-01 — Draft task-oriented technical content

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Content, documentation, and localization; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Draft task-oriented technical content. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for draft task-oriented technical content; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P06-02 — Review a regulated disclosure draft

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Content, documentation, and localization; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Review a regulated disclosure draft. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for review a regulated disclosure draft; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P06-03 — Prepare a localization glossary

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Content, documentation, and localization; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a localization glossary. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a localization glossary; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P06-04 — Draft an incident runbook

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Content, documentation, and localization; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Draft an incident runbook. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for draft an incident runbook; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P06-05 — Prepare a customer knowledge article

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Content, documentation, and localization; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a customer knowledge article. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a customer knowledge article; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## P07 — Accessibility engineering

Domain scope: Accessible design, WCAG/application mapping, assistive technology, audit, remediation and conformance evidence.

### SK-P07-01 — Specify accessible interaction behavior

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Accessibility engineering; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Specify accessible interaction behavior. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for specify accessible interaction behavior; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P07-02 — Design an accessibility remediation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Accessibility engineering; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design an accessibility remediation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design an accessibility remediation; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-P07-03 — Assess design accessibility evidence

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Accessibility engineering; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess design accessibility evidence. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess design accessibility evidence; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## R01 — Enterprise architecture

Domain scope: Capability/business/application/data/technology architecture, principles, standards, roadmaps, portfolio conformance.

### SK-R01-01 — Map enterprise capability dependencies

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Enterprise architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Map enterprise capability dependencies. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for map enterprise capability dependencies; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R01-02 — Assess application portfolio alignment

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Enterprise architecture; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess application portfolio alignment. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess application portfolio alignment; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R01-03 — Draft an architecture transition roadmap

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Enterprise architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Draft an architecture transition roadmap. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for draft an architecture transition roadmap; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## R02 — Solution and technical architecture

Domain scope: Drivers, context, domains, modules/services, APIs, deployment, decisions, HLD/LLD, conformance.

### SK-R02-01 — Draft a service boundary design

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Solution and technical architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Draft a service boundary design. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for draft a service boundary design; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R02-02 — Analyze an architecture tradeoff

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Solution and technical architecture; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze an architecture tradeoff. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze an architecture tradeoff; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R02-03 — Review implementation conformance

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Solution and technical architecture; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Review implementation conformance. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for review implementation conformance; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R02-04 — Specify a service data-consistency boundary

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Solution and technical architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Specify a service data-consistency boundary. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for specify a service data-consistency boundary; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## R03 — Security and privacy architecture

Domain scope: Threat model, trust boundaries, zero trust, IAM, cryptography, data protection, abuse cases and controls.

### SK-R03-01 — Model a system threat

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Security and privacy architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Model a system threat. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for model a system threat; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R03-02 — Design a trust-boundary control

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Security and privacy architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a trust-boundary control. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a trust-boundary control; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R03-03 — Assess privacy architecture tradeoffs

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Security and privacy architecture; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess privacy architecture tradeoffs. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess privacy architecture tradeoffs; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R03-04 — Design cryptographic key boundaries

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Security and privacy architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design cryptographic key boundaries. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design cryptographic key boundaries; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## R04 — Data architecture

Domain scope: Data domains, models, contracts, lineage, storage, quality, retention, analytics and migration.

### SK-R04-01 — Design a logical data model

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Data architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a logical data model. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a logical data model; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R04-02 — Specify a data contract

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Data architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Specify a data contract. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for specify a data contract; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R04-03 — Design a migration reconciliation strategy

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Data architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a migration reconciliation strategy. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a migration reconciliation strategy; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R04-04 — Design a retention and archival model

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Data architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a retention and archival model. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a retention and archival model; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## R05 — Integration and messaging architecture

Domain scope: API/event/file patterns, ISO semantics, schema governance, routing, reliability, reconciliation.

### SK-R05-01 — Design an integration contract

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Integration and messaging architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design an integration contract. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design an integration contract; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R05-02 — Select a message reliability pattern

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Integration and messaging architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Select a message reliability pattern. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for select a message reliability pattern; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R05-03 — Assess schema evolution compatibility

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Integration and messaging architecture; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess schema evolution compatibility. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess schema evolution compatibility; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## R06 — Cloud and platform architecture

Domain scope: Landing zones, multi-tenancy, containers, orchestration, networks, observability, resilience, deployment topology.

### SK-R06-01 — Design a deployment topology

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Cloud and platform architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a deployment topology. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a deployment topology; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R06-02 — Design tenant execution isolation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Cloud and platform architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design tenant execution isolation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design tenant execution isolation; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R06-03 — Assess infrastructure resilience tradeoffs

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Cloud and platform architecture; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess infrastructure resilience tradeoffs. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess infrastructure resilience tradeoffs; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## R07 — AI and agent architecture

Domain scope: AI use-case architecture, RAG, model/tool orchestration, guardrails, memory, evaluation and human oversight.

### SK-R07-01 — Design an AI use-case architecture

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning AI and agent architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design an AI use-case architecture. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design an ai use-case architecture; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R07-02 — Design retrieval grounding

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning AI and agent architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design retrieval grounding. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design retrieval grounding; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R07-03 — Specify a human oversight boundary

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning AI and agent architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Specify a human oversight boundary. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for specify a human oversight boundary; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R07-04 — Design agent memory isolation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning AI and agent architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design agent memory isolation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design agent memory isolation; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## R08 — Performance and resilience architecture

Domain scope: Capacity, scalability, HA, DR, queueing, caching, consistency, failure modes, performance budgets.

### SK-R08-01 — Model workload capacity

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Performance and resilience architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Model workload capacity. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for model workload capacity; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R08-02 — Design a failure-recovery strategy

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Performance and resilience architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a failure-recovery strategy. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a failure-recovery strategy; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R08-03 — Allocate latency and availability budgets

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Performance and resilience architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Allocate latency and availability budgets. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for allocate latency and availability budgets; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-R08-04 — Design a disaster-recovery failure model

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Performance and resilience architecture; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a disaster-recovery failure model. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a disaster-recovery failure model; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## E01 — Java and Spring engineering

Domain scope: Java domain logic, Spring services, security, data, transactions, messaging, concurrency, resilience and tests.

### SK-E01-01 — Implement a Java domain behavior

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Java and Spring engineering; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement a Java domain behavior. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement a java domain behavior; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E01-02 — Implement a Spring service adapter

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Java and Spring engineering; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement a Spring service adapter. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement a spring service adapter; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E01-03 — Diagnose a Java concurrency defect

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Java and Spring engineering; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Diagnose a Java concurrency defect. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for diagnose a java concurrency defect; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E01-04 — Implement a Java transaction boundary

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Java and Spring engineering; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement a Java transaction boundary. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement a java transaction boundary; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E01-05 — Implement a Java resilience policy

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Java and Spring engineering; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement a Java resilience policy. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement a java resilience policy; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## E02 — Angular engineering

Domain scope: Angular architecture, components, state, forms, HTTP, security, accessibility, performance and tests.

### SK-E02-01 — Implement an Angular interaction

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Angular engineering; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement an Angular interaction. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement an angular interaction; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E02-02 — Implement Angular state transitions

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Angular engineering; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement Angular state transitions. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement angular state transitions; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E02-03 — Diagnose Angular rendering overhead

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Angular engineering; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Diagnose Angular rendering overhead. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for diagnose angular rendering overhead; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E02-04 — Implement accessible Angular forms

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Angular engineering; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement accessible Angular forms. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement accessible angular forms; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## E03 — Oracle and PL/SQL engineering

Domain scope: Secure SQL/PLSQL, schema, packages, transactions, bulk operations, indexing, partitioning, migration and tuning.

### SK-E03-01 — Implement a PL/SQL operation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Oracle and PL/SQL engineering; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement a PL/SQL operation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement a pl/sql operation; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E03-02 — Design a SQL execution optimization

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Oracle and PL/SQL engineering; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a SQL execution optimization. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a sql execution optimization; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E03-03 — Prepare a database migration change

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Oracle and PL/SQL engineering; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a database migration change. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a database migration change; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E03-04 — Implement a PL/SQL bulk-processing behavior

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Oracle and PL/SQL engineering; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement a PL/SQL bulk-processing behavior. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement a pl/sql bulk-processing behavior; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E03-05 — Diagnose database locking contention

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Oracle and PL/SQL engineering; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Diagnose database locking contention. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for diagnose database locking contention; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## E04 — API engineering

Domain scope: OpenAPI, REST/gRPC/GraphQL profiles, validation, authn/authz, idempotency, errors, versioning and contract tests.

### SK-E04-01 — Implement an API contract

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning API engineering; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement an API contract. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement an api contract; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E04-02 — Design an API version transition

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning API engineering; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design an API version transition. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design an api version transition; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E04-03 — Diagnose an API authorization defect

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning API engineering; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Diagnose an API authorization defect. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for diagnose an api authorization defect; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E04-04 — Implement an API idempotency boundary

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning API engineering; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement an API idempotency boundary. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement an api idempotency boundary; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## E05 — Event and message engineering

Domain scope: Kafka, MQ, Artemis, schemas, ordering, delivery, retry/DLQ, replay, backpressure, security and DR.

### SK-E05-01 — Implement a reliable event handler

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Event and message engineering; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement a reliable event handler. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement a reliable event handler; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E05-02 — Design a replay and dead-letter repair

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Event and message engineering; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a replay and dead-letter repair. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a replay and dead-letter repair; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E05-03 — Diagnose message ordering failures

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Event and message engineering; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Diagnose message ordering failures. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for diagnose message ordering failures; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E05-04 — Implement an event outbox transition

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Event and message engineering; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement an event outbox transition. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement an event outbox transition; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## E06 — DevOps and CI/CD

Domain scope: Source workflows, pipelines, build, test, scan, sign, promote, deploy, rollback and developer experience.

### SK-E06-01 — Design a reproducible build pipeline

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning DevOps and CI/CD; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a reproducible build pipeline. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a reproducible build pipeline; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E06-02 — Prepare an artifact promotion configuration

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning DevOps and CI/CD; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare an artifact promotion configuration. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare an artifact promotion configuration; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E06-03 — Diagnose a pipeline failure

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning DevOps and CI/CD; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Diagnose a pipeline failure. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for diagnose a pipeline failure; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E06-04 — Prepare a signed SBOM generation step

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning DevOps and CI/CD; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a signed SBOM generation step. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a signed sbom generation step; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## E07 — Infrastructure and platform engineering

Domain scope: IaC, cloud/on-prem, containers, Kubernetes/OpenShift, networks, secrets, policy, autoscaling and operations.

### SK-E07-01 — Implement a declarative infrastructure change

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Infrastructure and platform engineering; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement a declarative infrastructure change. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement a declarative infrastructure change; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E07-02 — Design an autoscaling configuration

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Infrastructure and platform engineering; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design an autoscaling configuration. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design an autoscaling configuration; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E07-03 — Diagnose a network-policy failure

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Infrastructure and platform engineering; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Diagnose a network-policy failure. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for diagnose a network-policy failure; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E07-04 — Implement a secret-reference configuration

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Infrastructure and platform engineering; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement a secret-reference configuration. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement a secret-reference configuration; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## E08 — Database engineering and administration

Domain scope: Database design, security, backup, recovery, HA, capacity, performance, patching, monitoring and support.

### SK-E08-01 — Design a database recovery procedure

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Database engineering and administration; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a database recovery procedure. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a database recovery procedure; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E08-02 — Diagnose database saturation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Database engineering and administration; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Diagnose database saturation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for diagnose database saturation; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E08-03 — Prepare a database patch change

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Database engineering and administration; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a database patch change. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a database patch change; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E08-04 — Prepare a database failover exercise

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Database engineering and administration; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a database failover exercise. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a database failover exercise; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## E09 — Mobile and channel engineering

Domain scope: Mobile/PWA, secure storage, device/channel integration, offline sync, release and mobile testing.

### SK-E09-01 — Implement a mobile channel interaction

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Mobile and channel engineering; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement a mobile channel interaction. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement a mobile channel interaction; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E09-02 — Design an offline synchronization behavior

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Mobile and channel engineering; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design an offline synchronization behavior. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design an offline synchronization behavior; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E09-03 — Review mobile storage security

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Mobile and channel engineering; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Review mobile storage security. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for review mobile storage security; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## E10 — Enterprise integration engineering

Domain scope: Camel/ESB, SOAP/REST, SFTP/files, partner integration, transformation, routing and reconciliation.

### SK-E10-01 — Implement a partner message transformation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Enterprise integration engineering; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement a partner message transformation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement a partner message transformation; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E10-02 — Design a file-exchange workflow

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Enterprise integration engineering; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a file-exchange workflow. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a file-exchange workflow; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-E10-03 — Diagnose an enterprise integration failure

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Enterprise integration engineering; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Diagnose an enterprise integration failure. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for diagnose an enterprise integration failure; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## D01 — Data governance and quality

Domain scope: Ownership, classification, catalog, contracts, lineage, quality, privacy, retention and access.

### SK-D01-01 — Assess dataset classification

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Data governance and quality; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess dataset classification. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess dataset classification; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D01-02 — Define a data-quality rule

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Data governance and quality; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Define a data-quality rule. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for define a data-quality rule; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D01-03 — Analyze data lineage impact

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Data governance and quality; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze data lineage impact. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze data lineage impact; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D01-04 — Assess data retention exceptions

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Data governance and quality; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess data retention exceptions. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess data retention exceptions; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## D02 — Data engineering and analytics

Domain scope: Ingestion, batch/stream, transformation, warehouse/lakehouse, BI, controls, observability and reconciliation.

### SK-D02-01 — Implement a data transformation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Data engineering and analytics; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement a data transformation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement a data transformation; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D02-02 — Design a streaming aggregation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Data engineering and analytics; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a streaming aggregation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a streaming aggregation; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D02-03 — Diagnose a data reconciliation break

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Data engineering and analytics; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Diagnose a data reconciliation break. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for diagnose a data reconciliation break; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## D03 — Data science and model development

Domain scope: Problem formulation, exploration, features, training, experiments, metrics, explainability and model cards.

### SK-D03-01 — Formulate a model evaluation hypothesis

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Data science and model development; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Formulate a model evaluation hypothesis. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for formulate a model evaluation hypothesis; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D03-02 — Develop a reproducible model experiment

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Data science and model development; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Develop a reproducible model experiment. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for develop a reproducible model experiment; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D03-03 — Analyze model explanation evidence

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Data science and model development; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze model explanation evidence. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze model explanation evidence; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D03-04 — Analyze model calibration

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Data science and model development; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze model calibration. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze model calibration; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D03-05 — Assess model training data quality

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Data science and model development; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess model training data quality. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess model training data quality; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## D04 — MLOps and AI platform

Domain scope: Feature/model/prompt registries, pipelines, deployment, monitoring, drift, rollback and cost.

### SK-D04-01 — Design a model delivery pipeline

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning MLOps and AI platform; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a model delivery pipeline. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a model delivery pipeline; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D04-02 — Analyze model drift

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning MLOps and AI platform; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze model drift. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze model drift; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D04-03 — Prepare a model rollback package

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning MLOps and AI platform; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a model rollback package. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a model rollback package; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D04-04 — Prepare a model observability specification

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning MLOps and AI platform; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a model observability specification. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a model observability specification; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## D05 — Independent model validation

Domain scope: Conceptual soundness, data, performance, robustness, bias, explainability, monitoring and challenge.

### SK-D05-01 — Challenge model conceptual soundness

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Independent model validation; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Challenge model conceptual soundness. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for challenge model conceptual soundness; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D05-02 — Assess independent model performance

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Independent model validation; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess independent model performance. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess independent model performance; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D05-03 — Assess model robustness and fairness

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Independent model validation; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess model robustness and fairness. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess model robustness and fairness; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D05-04 — Assess model explainability limitations

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Independent model validation; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess model explainability limitations. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess model explainability limitations; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## D06 — GenAI, RAG, and conversational AI

Domain scope: Prompt/context design, retrieval, grounding, agents, speech, evaluation, content safety and handoff.

### SK-D06-01 — Design a grounded conversational response

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning GenAI, RAG, and conversational AI; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a grounded conversational response. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a grounded conversational response; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D06-02 — Design a retrieval improvement

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning GenAI, RAG, and conversational AI; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a retrieval improvement. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a retrieval improvement; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D06-03 — Evaluate a speech handoff interaction

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning GenAI, RAG, and conversational AI; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Evaluate a speech handoff interaction. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for evaluate a speech handoff interaction; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D06-04 — Evaluate retrieval grounding failures

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning GenAI, RAG, and conversational AI; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Evaluate retrieval grounding failures. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for evaluate retrieval grounding failures; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D06-05 — Design a voice-to-human escalation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning GenAI, RAG, and conversational AI; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a voice-to-human escalation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a voice-to-human escalation; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## D07 — Responsible AI and model risk

Domain scope: AI inventory, impact/risk, ISO/NIST/RBI mapping, fairness, transparency, human oversight and governance.

### SK-D07-01 — Assess an AI use-case impact

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Responsible AI and model risk; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess an AI use-case impact. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess an ai use-case impact; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D07-02 — Prepare a model-risk control mapping

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Responsible AI and model risk; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a model-risk control mapping. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a model-risk control mapping; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D07-03 — Review an AI transparency statement

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Responsible AI and model risk; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Review an AI transparency statement. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for review an ai transparency statement; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-D07-04 — Prepare an AI inventory record

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Responsible AI and model risk; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare an AI inventory record. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare an ai inventory record; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## Q01 — Functional quality engineering

Domain scope: Strategy, scenarios, positive/negative/boundary/state tests, defects, regression and evidence.

### SK-Q01-01 — Design functional acceptance scenarios

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Functional quality engineering; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design functional acceptance scenarios. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design functional acceptance scenarios; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q01-02 — Analyze a functional defect

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Functional quality engineering; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze a functional defect. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze a functional defect; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q01-03 — Assess regression scope

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Functional quality engineering; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess regression scope. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess regression scope; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q01-04 — Design financial invariant property tests

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Functional quality engineering; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design financial invariant property tests. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design financial invariant property tests; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## Q02 — UI automation

Domain scope: Selenium/Playwright design, fixtures, selectors, waits, parallelism, trace, flake control and CI.

### SK-Q02-01 — Implement a browser automation scenario

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning UI automation; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement a browser automation scenario. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement a browser automation scenario; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q02-02 — Diagnose a flaky UI test

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning UI automation; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Diagnose a flaky UI test. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for diagnose a flaky ui test; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q02-03 — Design parallel browser fixtures

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning UI automation; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design parallel browser fixtures. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design parallel browser fixtures; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q02-04 — Implement a Selenium interaction test

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning UI automation; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement a Selenium interaction test. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement a selenium interaction test; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q02-05 — Implement a Playwright trace fixture

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning UI automation; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement a Playwright trace fixture. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement a playwright trace fixture; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## Q03 — API and contract testing

Domain scope: Schema/contract, auth, negative, compatibility, idempotency, concurrency, fuzz and integration tests.

### SK-Q03-01 — Design API negative tests

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning API and contract testing; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design API negative tests. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design api negative tests; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q03-02 — Implement consumer contract tests

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning API and contract testing; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement consumer contract tests. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement consumer contract tests; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q03-03 — Analyze API concurrency evidence

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning API and contract testing; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze API concurrency evidence. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze api concurrency evidence; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q03-04 — Design API fuzzing cases

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning API and contract testing; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design API fuzzing cases. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design api fuzzing cases; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## Q04 — Performance testing

Domain scope: JMeter/equivalent workloads, correlation, pacing, load, stress, spike, endurance, failover and reporting.

### SK-Q04-01 — Design a workload arrival model

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Performance testing; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a workload arrival model. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a workload arrival model; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q04-02 — Implement a performance test script

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Performance testing; applicable policy/standard/profile versions.
- Output: candidate change plus verification evidence.
- Acceptance: The output directly resolves the requested outcome: Implement a performance test script. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.
- Procedure: Inspect the authorized inputs for implement a performance test script; enumerate missing information. Apply the selected domain and technology profile to produce the candidate change plus verification evidence. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q04-03 — Analyze endurance test results

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Performance testing; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze endurance test results. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze endurance test results; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q04-04 — Design a failover-under-load experiment

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Performance testing; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a failover-under-load experiment. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a failover-under-load experiment; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## Q05 — Performance engineering

Domain scope: Capacity models, profiling, JVM/database/client tuning, bottleneck removal and before/after evidence.

### SK-Q05-01 — Diagnose a resource bottleneck

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Performance engineering; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Diagnose a resource bottleneck. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for diagnose a resource bottleneck; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q05-02 — Design a performance remediation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Performance engineering; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a performance remediation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a performance remediation; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q05-03 — Assess before-and-after tuning evidence

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Performance engineering; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess before-and-after tuning evidence. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess before-and-after tuning evidence; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## Q06 — Accessibility testing

Domain scope: Automated, keyboard, screen reader, zoom/reflow, contrast, semantics, mobile and document tests.

### SK-Q06-01 — Design a keyboard accessibility test

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Accessibility testing; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a keyboard accessibility test. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a keyboard accessibility test; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q06-02 — Assess assistive-technology evidence

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Accessibility testing; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess assistive-technology evidence. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess assistive-technology evidence; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q06-03 — Report an accessibility failure

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Accessibility testing; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Report an accessibility failure. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for report an accessibility failure; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q06-04 — Assess zoom reflow and contrast evidence

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Accessibility testing; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess zoom reflow and contrast evidence. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess zoom reflow and contrast evidence; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## Q07 — Security testing

Domain scope: SAST/SCA/DAST, secrets, API, fuzz, container/IaC, VAPT, abuse and adversarial tests.

### SK-Q07-01 — Triage a static security finding

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Security testing; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Triage a static security finding. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for triage a static security finding; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q07-02 — Design a dynamic security test

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Security testing; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a dynamic security test. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a dynamic security test; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q07-03 — Assess a security remediation retest

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Security testing; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess a security remediation retest. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess a security remediation retest; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q07-04 — Assess secrets and IaC scan results

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Security testing; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess secrets and IaC scan results. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess secrets and iac scan results; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## Q08 — UAT and business acceptance

Domain scope: Business scenarios, production-like data/process, user acceptance, traceability and sign-off.

### SK-Q08-01 — Prepare business acceptance scenarios

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning UAT and business acceptance; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare business acceptance scenarios. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare business acceptance scenarios; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q08-02 — Analyze a UAT discrepancy

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning UAT and business acceptance; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze a UAT discrepancy. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze a uat discrepancy; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q08-03 — Assemble a business acceptance recommendation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning UAT and business acceptance; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Assemble a business acceptance recommendation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assemble a business acceptance recommendation; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## Q09 — Quality governance and review

Domain scope: Quality policy, review, metrics, audit, release recommendation, defect prevention and test assurance.

### SK-Q09-01 — Assess release quality evidence

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Quality governance and review; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess release quality evidence. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess release quality evidence; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q09-02 — Analyze escaped-defect causes

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Quality governance and review; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze escaped-defect causes. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze escaped-defect causes; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q09-03 — Review test-oracle independence

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Quality governance and review; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Review test-oracle independence. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for review test-oracle independence; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-Q09-04 — Assess test mutation effectiveness

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Quality governance and review; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess test mutation effectiveness. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess test mutation effectiveness; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## S01 — Security governance and cyber risk

Domain scope: ISMS, policy, risk, controls, metrics, exceptions, regulatory mapping and assurance.

### SK-S01-01 — Assess a cybersecurity risk

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Security governance and cyber risk; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess a cybersecurity risk. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess a cybersecurity risk; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S01-02 — Draft a security control exception

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Security governance and cyber risk; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Draft a security control exception. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for draft a security control exception; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S01-03 — Prepare an ISMS review pack

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Security governance and cyber risk; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare an ISMS review pack. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare an isms review pack; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## S02 — SSDLC and application security

Domain scope: Secure requirements/design/coding, threat model, code review, pipeline gates and developer guidance.

### SK-S02-01 — Derive secure implementation requirements

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning SSDLC and application security; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Derive secure implementation requirements. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for derive secure implementation requirements; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S02-02 — Review a code trust-boundary change

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning SSDLC and application security; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Review a code trust-boundary change. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for review a code trust-boundary change; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S02-03 — Assess SSDLC gate completeness

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning SSDLC and application security; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess SSDLC gate completeness. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess ssdlc gate completeness; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## S03 — VAPT and offensive assurance

Domain scope: Authorized scope, reconnaissance, validation, exploitation bounds, evidence, reporting and retest.

### SK-S03-01 — Prepare an authorized penetration-test plan

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning VAPT and offensive assurance; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare an authorized penetration-test plan. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare an authorized penetration-test plan; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S03-02 — Validate an in-scope vulnerability

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning VAPT and offensive assurance; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Validate an in-scope vulnerability. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for validate an in-scope vulnerability; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S03-03 — Draft an exploitation evidence report

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning VAPT and offensive assurance; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Draft an exploitation evidence report. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for draft an exploitation evidence report; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S03-04 — Assess penetration-test stop conditions

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning VAPT and offensive assurance; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess penetration-test stop conditions. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess penetration-test stop conditions; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## S04 — Cloud, container, and infrastructure security

Domain scope: Cloud/IaC/container/Kubernetes/network configuration, posture, runtime and incident controls.

### SK-S04-01 — Assess cloud configuration exposure

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Cloud, container, and infrastructure security; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess cloud configuration exposure. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess cloud configuration exposure; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S04-02 — Review container isolation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Cloud, container, and infrastructure security; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Review container isolation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for review container isolation; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S04-03 — Design infrastructure hardening

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Cloud, container, and infrastructure security; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design infrastructure hardening. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design infrastructure hardening; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## S05 — IAM, PAM, PKI, and cryptography

Domain scope: Identity lifecycle, federation, authorization, privileged access, keys, certificates, HSM and crypto agility.

### SK-S05-01 — Design an authorization model

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning IAM, PAM, PKI, and cryptography; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design an authorization model. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design an authorization model; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S05-02 — Prepare a key-rotation procedure

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning IAM, PAM, PKI, and cryptography; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a key-rotation procedure. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a key-rotation procedure; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S05-03 — Assess privileged access evidence

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning IAM, PAM, PKI, and cryptography; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess privileged access evidence. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess privileged access evidence; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S05-04 — Review certificate lifecycle risk

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning IAM, PAM, PKI, and cryptography; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Review certificate lifecycle risk. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for review certificate lifecycle risk; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## S06 — SOC, detection, and incident response

Domain scope: Logging, SIEM, detections, triage, investigation, containment, recovery, forensics and post-incident review.

### SK-S06-01 — Triage a detection alert

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning SOC, detection, and incident response; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Triage a detection alert. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for triage a detection alert; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S06-02 — Analyze an incident timeline

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning SOC, detection, and incident response; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze an incident timeline. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze an incident timeline; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S06-03 — Prepare a containment and recovery plan

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning SOC, detection, and incident response; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a containment and recovery plan. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a containment and recovery plan; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S06-04 — Design a detection rule

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning SOC, detection, and incident response; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a detection rule. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a detection rule; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S06-05 — Prepare a forensic evidence preservation plan

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning SOC, detection, and incident response; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a forensic evidence preservation plan. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a forensic evidence preservation plan; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## S07 — Threat intelligence and vulnerability management

Domain scope: Advisories, asset/SBOM impact, prioritization, patching, exposure, hunting and remediation.

### SK-S07-01 — Assess an advisory asset impact

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Threat intelligence and vulnerability management; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess an advisory asset impact. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess an advisory asset impact; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S07-02 — Prioritize vulnerability remediation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Threat intelligence and vulnerability management; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prioritize vulnerability remediation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prioritize vulnerability remediation; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S07-03 — Assess patch exception exposure

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Threat intelligence and vulnerability management; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess patch exception exposure. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess patch exception exposure; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S07-04 — Analyze vulnerability reachability

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Threat intelligence and vulnerability management; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze vulnerability reachability. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze vulnerability reachability; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S07-05 — Assess vendor advisory corroboration

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Threat intelligence and vulnerability management; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess vendor advisory corroboration. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess vendor advisory corroboration; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## S08 — Privacy engineering

Domain scope: DPIA, privacy requirements, minimization, consent, rights, tokenization, retention and breach response.

### SK-S08-01 — Prepare a privacy impact assessment

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Privacy engineering; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a privacy impact assessment. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a privacy impact assessment; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S08-02 — Design data minimization

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Privacy engineering; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design data minimization. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design data minimization; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S08-03 — Assess a privacy-rights request

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Privacy engineering; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess a privacy-rights request. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess a privacy-rights request; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S08-04 — Design privacy-preserving tokenization

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Privacy engineering; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design privacy-preserving tokenization. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design privacy-preserving tokenization; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## S09 — AI and agent security

Domain scope: Model/agent threat modeling, injection, poisoning, extraction, tool abuse, memory, red team and guardrails.

### SK-S09-01 — Design an agent adversarial scenario

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning AI and agent security; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design an agent adversarial scenario. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design an agent adversarial scenario; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S09-02 — Analyze retrieval poisoning exposure

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning AI and agent security; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze retrieval poisoning exposure. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze retrieval poisoning exposure; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S09-03 — Assess model extraction evidence

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning AI and agent security; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess model extraction evidence. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess model extraction evidence; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S09-04 — Assess agent memory contamination

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning AI and agent security; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess agent memory contamination. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess agent memory contamination; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S09-05 — Design tool-invocation misuse tests

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning AI and agent security; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design tool-invocation misuse tests. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design tool-invocation misuse tests; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## S10 — Software supply-chain security

Domain scope: SBOM, provenance, signing, dependency/license risk, build integrity, releases and third parties.

### SK-S10-01 — Assess dependency provenance

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Software supply-chain security; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess dependency provenance. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess dependency provenance; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S10-02 — Review a software supply-chain change

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Software supply-chain security; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Review a software supply-chain change. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for review a software supply-chain change; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S10-03 — Investigate an SBOM discrepancy

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Software supply-chain security; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Investigate an SBOM discrepancy. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for investigate an sbom discrepancy; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-S10-04 — Assess license compatibility

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Software supply-chain security; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess license compatibility. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess license compatibility; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## B01 — Core banking and financial accounting

Domain scope: Accounts, balances, postings, interest/fees, limits, customer/product, EOD, accounting and controls.

### SK-B01-01 — Specify a ledger posting invariant

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Core banking and financial accounting; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Specify a ledger posting invariant. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for specify a ledger posting invariant; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B01-02 — Design interest and fee test cases

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Core banking and financial accounting; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design interest and fee test cases. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design interest and fee test cases; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B01-03 — Analyze an accounting imbalance

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Core banking and financial accounting; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze an accounting imbalance. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze an accounting imbalance; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B01-04 — Specify end-of-day reconciliation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Core banking and financial accounting; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Specify end-of-day reconciliation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for specify end-of-day reconciliation; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B01-05 — Specify account interest accrual boundaries

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Core banking and financial accounting; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Specify account interest accrual boundaries. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for specify account interest accrual boundaries; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## B02 — Payments and UPI

Domain scope: Payment lifecycle, UPI actors/flows, authorization, limits, risk, disputes, settlement and NPCI controls.

### SK-B02-01 — Model a payment state transition

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Payments and UPI; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Model a payment state transition. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for model a payment state transition; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B02-02 — Specify duplicate and timeout handling

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Payments and UPI; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Specify duplicate and timeout handling. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for specify duplicate and timeout handling; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B02-03 — Analyze a payment dispute

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Payments and UPI; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze a payment dispute. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze a payment dispute; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B02-04 — Specify a payment reversal behavior

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Payments and UPI; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Specify a payment reversal behavior. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for specify a payment reversal behavior; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B02-05 — Assess UPI integration acceptance evidence

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Payments and UPI; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess UPI integration acceptance evidence. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess upi integration acceptance evidence; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## B03 — ISO 20022

Domain scope: Repository, messages, schemas, BAH, code sets, usage variants, mapping, validation and testing.

### SK-B03-01 — Select an ISO 20022 usage profile

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning ISO 20022; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Select an ISO 20022 usage profile. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for select an iso 20022 usage profile; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B03-02 — Specify a semantic message mapping

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning ISO 20022; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Specify a semantic message mapping. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for specify a semantic message mapping; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B03-03 — Analyze an ISO validation failure

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning ISO 20022; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze an ISO validation failure. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze an iso validation failure; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B03-04 — Specify ISO external code-set migration

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning ISO 20022; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Specify ISO external code-set migration. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for specify iso external code-set migration; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B03-05 — Design an ISO semantic golden-message corpus

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning ISO 20022; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design an ISO semantic golden-message corpus. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design an iso semantic golden-message corpus; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## B04 — SWIFT

Domain scope: FIN/ISO messages, interfaces, CSP, approvals, screening, transmission, reconciliation and investigation.

### SK-B04-01 — Specify a SWIFT message workflow

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning SWIFT; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Specify a SWIFT message workflow. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for specify a swift message workflow; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B04-02 — Assess SWIFT control applicability

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning SWIFT; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess SWIFT control applicability. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess swift control applicability; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B04-03 — Analyze a transmission reconciliation break

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning SWIFT; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze a transmission reconciliation break. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze a transmission reconciliation break; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B04-04 — Assess SWIFT acknowledgement ambiguity

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning SWIFT; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess SWIFT acknowledgement ambiguity. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess swift acknowledgement ambiguity; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## B05 — Fraud and mule-risk management

Domain scope: Signals, rules/models, graph/behavior, alert/action, cases, feedback, loss and friction measurement.

### SK-B05-01 — Design a fraud detection hypothesis

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Fraud and mule-risk management; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a fraud detection hypothesis. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a fraud detection hypothesis; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B05-02 — Analyze a suspected mule pattern

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Fraud and mule-risk management; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze a suspected mule pattern. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze a suspected mule pattern; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B05-03 — Assess fraud loss and friction tradeoffs

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Fraud and mule-risk management; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess fraud loss and friction tradeoffs. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess fraud loss and friction tradeoffs; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B05-04 — Assess fraud model drift

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Fraud and mule-risk management; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess fraud model drift. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess fraud model drift; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## B06 — AML, sanctions, and financial crime

Domain scope: KYC/CDD risk, monitoring, PEP/sanctions, cases, investigation, reporting evidence and confidentiality.

### SK-B06-01 — Analyze an AML alert evidence pack

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning AML, sanctions, and financial crime; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze an AML alert evidence pack. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze an aml alert evidence pack; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B06-02 — Assess a sanctions-match ambiguity

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning AML, sanctions, and financial crime; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess a sanctions-match ambiguity. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess a sanctions-match ambiguity; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B06-03 — Prepare confidential reporting evidence

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning AML, sanctions, and financial crime; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare confidential reporting evidence. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare confidential reporting evidence; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B06-04 — Prepare beneficial-owner risk evidence

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning AML, sanctions, and financial crime; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare beneficial-owner risk evidence. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare beneficial-owner risk evidence; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B06-05 — Review financial-crime detection rule changes

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning AML, sanctions, and financial crime; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Review financial-crime detection rule changes. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for review financial-crime detection rule changes; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## B07 — KYC and identity tokenization

Domain scope: Identification/verification, CKYCR, beneficial owners, refresh, consent, data-vault tokens and reusable KYC.

### SK-B07-01 — Design a KYC vault-token flow

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning KYC and identity tokenization; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a KYC vault-token flow. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a kyc vault-token flow; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B07-02 — Assess identity verification evidence

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning KYC and identity tokenization; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess identity verification evidence. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess identity verification evidence; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B07-03 — Analyze KYC refresh obligations

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning KYC and identity tokenization; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze KYC refresh obligations. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze kyc refresh obligations; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B07-04 — Assess KYC token revocation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning KYC and identity tokenization; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess KYC token revocation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess kyc token revocation; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## B08 — Cheque and document clearing

Domain scope: Image quality, extraction, risk indicators, duplicate/signature, clearing, returns and exceptions.

### SK-B08-01 — Assess cheque extraction uncertainty

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Cheque and document clearing; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess cheque extraction uncertainty. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess cheque extraction uncertainty; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B08-02 — Analyze a duplicate cheque indicator

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Cheque and document clearing; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze a duplicate cheque indicator. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze a duplicate cheque indicator; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B08-03 — Prepare a clearing exception recommendation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Cheque and document clearing; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a clearing exception recommendation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a clearing exception recommendation; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B08-04 — Assess cheque clearing return evidence

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Cheque and document clearing; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess cheque clearing return evidence. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess cheque clearing return evidence; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## B09 — Asset tokenization and digital assets

Domain scope: Legal classification, issuance, custody, transfer, smart contracts, settlement, lifecycle and reconciliation.

### SK-B09-01 — Assess asset-token lifecycle requirements

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Asset tokenization and digital assets; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess asset-token lifecycle requirements. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess asset-token lifecycle requirements; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B09-02 — Specify custody and transfer invariants

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Asset tokenization and digital assets; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Specify custody and transfer invariants. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for specify custody and transfer invariants; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B09-03 — Review smart-contract upgrade risk

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Asset tokenization and digital assets; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Review smart-contract upgrade risk. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for review smart-contract upgrade risk; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B09-04 — Design smart-contract invariant tests

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Asset tokenization and digital assets; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design smart-contract invariant tests. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design smart-contract invariant tests; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B09-05 — Assess token-to-asset reconciliation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Asset tokenization and digital assets; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess token-to-asset reconciliation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess token-to-asset reconciliation; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## B10 — Clearing, settlement, disputes, and reconciliation

Domain scope: Clearing files/messages, settlement, control totals, breaks, adjustments, disputes and audit.

### SK-B10-01 — Analyze a settlement reconciliation break

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Clearing, settlement, disputes, and reconciliation; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze a settlement reconciliation break. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze a settlement reconciliation break; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B10-02 — Specify a clearing control total

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Clearing, settlement, disputes, and reconciliation; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Specify a clearing control total. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for specify a clearing control total; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B10-03 — Prepare a dispute adjustment recommendation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Clearing, settlement, disputes, and reconciliation; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a dispute adjustment recommendation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a dispute adjustment recommendation; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-B10-04 — Assess delayed settlement recovery

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Clearing, settlement, disputes, and reconciliation; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess delayed settlement recovery. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess delayed settlement recovery; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## O01 — SRE and observability

Domain scope: SLOs, telemetry, alerting, capacity, toil, reliability, error budgets and service reviews.

### SK-O01-01 — Define a service-level objective

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning SRE and observability; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Define a service-level objective. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for define a service-level objective; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O01-02 — Diagnose an observability gap

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning SRE and observability; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Diagnose an observability gap. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for diagnose an observability gap; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O01-03 — Analyze an error-budget breach

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning SRE and observability; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze an error-budget breach. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze an error-budget breach; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O01-04 — Design a service alert rule

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning SRE and observability; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a service alert rule. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a service alert rule; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## O02 — IT service management

Domain scope: Service catalogue, incident, problem, change, request, configuration, knowledge and SLA.

### SK-O02-01 — Classify a service request

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning IT service management; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Classify a service request. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for classify a service request; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O02-02 — Analyze a recurring service problem

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning IT service management; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze a recurring service problem. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze a recurring service problem; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O02-03 — Prepare a service-change recommendation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning IT service management; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a service-change recommendation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a service-change recommendation; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## O03 — Production support

Domain scope: L1/L2/L3 triage, diagnostics, safe remediation, data/message repair, escalation and handoff.

### SK-O03-01 — Triage a production support case

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Production support; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Triage a production support case. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for triage a production support case; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O03-02 — Prepare a bounded repair proposal

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Production support; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a bounded repair proposal. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a bounded repair proposal; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O03-03 — Prepare an L1-to-L2 escalation handoff

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Production support; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare an L1-to-L2 escalation handoff. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare an l1-to-l2 escalation handoff; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O03-04 — Prepare an L2-to-L3 diagnostic handoff

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Production support; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare an L2-to-L3 diagnostic handoff. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare an l2-to-l3 diagnostic handoff; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## O04 — Customer support and success

Domain scope: Omnichannel cases, knowledge, identity, complaints, escalation, quality, adoption and outcomes.

### SK-O04-01 — Draft a grounded customer response

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Customer support and success; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Draft a grounded customer response. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for draft a grounded customer response; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O04-02 — Analyze a customer complaint

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Customer support and success; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze a customer complaint. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze a customer complaint; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O04-03 — Prepare an adoption intervention

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Customer support and success; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare an adoption intervention. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare an adoption intervention; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O04-04 — Prepare a customer grievance escalation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Customer support and success; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a customer grievance escalation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a customer grievance escalation; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## O05 — Voice operations

Domain scope: Speech, disclosure, consent, identity, scripts, language, recording, opt-out, escalation and quality.

### SK-O05-01 — Design a consent-aware voice script

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Voice operations; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a consent-aware voice script. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a consent-aware voice script; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O05-02 — Assess a caller identity challenge

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Voice operations; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess a caller identity challenge. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess a caller identity challenge; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O05-03 — Review a voice interaction quality sample

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Voice operations; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Review a voice interaction quality sample. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for review a voice interaction quality sample; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O05-04 — Assess multilingual speech uncertainty

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Voice operations; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess multilingual speech uncertainty. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess multilingual speech uncertainty; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## O06 — BCM and disaster recovery

Domain scope: BIA, continuity strategy, RTO/RPO, DR plans, exercises, crisis and reconciliation.

### SK-O06-01 — Analyze business continuity impact

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning BCM and disaster recovery; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze business continuity impact. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze business continuity impact; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O06-02 — Design a disaster-recovery exercise

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning BCM and disaster recovery; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a disaster-recovery exercise. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a disaster-recovery exercise; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O06-03 — Assess post-recovery reconciliation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning BCM and disaster recovery; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess post-recovery reconciliation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess post-recovery reconciliation; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O06-04 — Prepare a crisis communication draft

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning BCM and disaster recovery; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a crisis communication draft. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a crisis communication draft; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## O07 — FinOps and capacity economics

Domain scope: Usage allocation, budgets, forecasting, unit cost, optimization, chargeback and anomaly detection.

### SK-O07-01 — Analyze unit delivery cost

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning FinOps and capacity economics; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze unit delivery cost. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze unit delivery cost; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O07-02 — Forecast model and infrastructure demand

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning FinOps and capacity economics; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Forecast model and infrastructure demand. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for forecast model and infrastructure demand; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O07-03 — Recommend a capacity cost optimization

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning FinOps and capacity economics; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Recommend a capacity cost optimization. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for recommend a capacity cost optimization; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O07-04 — Assess quota exhaustion impact

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning FinOps and capacity economics; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess quota exhaustion impact. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess quota exhaustion impact; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## O08 — Release and configuration management

Domain scope: Release evidence, versions, change calendar, environment/configuration, deployment, rollback and revocation.

### SK-O08-01 — Assemble a release evidence manifest

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Release and configuration management; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Assemble a release evidence manifest. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assemble a release evidence manifest; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O08-02 — Assess configuration drift

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Release and configuration management; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess configuration drift. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess configuration drift; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O08-03 — Prepare rollback and revocation instructions

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Release and configuration management; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare rollback and revocation instructions. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare rollback and revocation instructions; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-O08-04 — Assess database migration release risk

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Release and configuration management; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess database migration release risk. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess database migration release risk; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## C01 — Sales and solution consulting

Domain scope: Discovery, qualification, solution fit, demonstrations, value, risk and handoff.

### SK-C01-01 — Assess a qualified lead

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Sales and solution consulting; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess a qualified lead. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess a qualified lead; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-C01-02 — Prepare a solution-fit demonstration

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Sales and solution consulting; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a solution-fit demonstration. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a solution-fit demonstration; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-C01-03 — Prepare a sales-to-delivery handoff

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Sales and solution consulting; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a sales-to-delivery handoff. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a sales-to-delivery handoff; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-C01-04 — Research authorized prospect sources

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Sales and solution consulting; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Research authorized prospect sources. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for research authorized prospect sources; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## C02 — Bid, contract, and commercial governance

Domain scope: RFP, proposal, estimates, commitments, terms, scope, pricing, approvals and obligations.

### SK-C02-01 — Draft a scoped service proposal

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Bid, contract, and commercial governance; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Draft a scoped service proposal. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for draft a scoped service proposal; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-C02-02 — Analyze a contract commitment

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Bid, contract, and commercial governance; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze a contract commitment. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze a contract commitment; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-C02-03 — Prepare a bid pricing recommendation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Bid, contract, and commercial governance; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a bid pricing recommendation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a bid pricing recommendation; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-C02-04 — Prepare a customer scope-change proposal

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Bid, contract, and commercial governance; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a customer scope-change proposal. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a customer scope-change proposal; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## C03 — Account and customer success

Domain scope: Onboarding, adoption, service review, satisfaction, renewal, escalation and value realization.

### SK-C03-01 — Prepare customer onboarding criteria

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Account and customer success; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare customer onboarding criteria. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare customer onboarding criteria; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-C03-02 — Analyze customer value realization

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Account and customer success; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze customer value realization. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze customer value realization; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-C03-03 — Prepare a renewal recommendation

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Account and customer success; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a renewal recommendation. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a renewal recommendation; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-C03-04 — Prepare a customer offboarding pack

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Account and customer success; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a customer offboarding pack. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a customer offboarding pack; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## C04 — Managed and professional services

Domain scope: Service design, SOW, authorization, delivery, evidence, acceptance, SLA, margin and independence.

### SK-C04-01 — Design an assurance service offering

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Managed and professional services; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design an assurance service offering. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design an assurance service offering; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-C04-02 — Prepare a service acceptance pack

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Managed and professional services; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Prepare a service acceptance pack. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for prepare a service acceptance pack; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-C04-03 — Analyze engagement delivery margin

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Managed and professional services; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze engagement delivery margin. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze engagement delivery margin; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-C04-04 — Assess service independence conflicts

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Managed and professional services; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess service independence conflicts. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess service independence conflicts; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## C05 — Marketing, partnerships, and ecosystem

Domain scope: Positioning, content, campaigns, partner due diligence, marketplace, brand and regulated claims.

### SK-C05-01 — Draft evidence-supported positioning

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Marketing, partnerships, and ecosystem; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Draft evidence-supported positioning. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for draft evidence-supported positioning; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-C05-02 — Assess a prospective partnership

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Marketing, partnerships, and ecosystem; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess a prospective partnership. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess a prospective partnership; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-C05-03 — Review a marketing assurance claim

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Marketing, partnerships, and ecosystem; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Review a marketing assurance claim. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for review a marketing assurance claim; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-C05-04 — Draft a qualified outbound lead message

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Marketing, partnerships, and ecosystem; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Draft a qualified outbound lead message. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for draft a qualified outbound lead message; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## T01 — Tenancy, identity, and entitlement platform

Domain scope: Tenant lifecycle, federation, RBAC/ABAC, isolation, entitlements, keys and support access.

### SK-T01-01 — Specify tenant lifecycle transitions

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Tenancy, identity, and entitlement platform; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Specify tenant lifecycle transitions. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for specify tenant lifecycle transitions; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-T01-02 — Design an entitlement decision table

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Tenancy, identity, and entitlement platform; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design an entitlement decision table. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design an entitlement decision table; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-T01-03 — Review a support-access request

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Tenancy, identity, and entitlement platform; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Review a support-access request. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for review a support-access request; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-T01-04 — Design a tenant offboarding workflow

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Tenancy, identity, and entitlement platform; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a tenant offboarding workflow. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a tenant offboarding workflow; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## T02 — Capability registry and projections

Domain scope: Canonical schemas, catalog, dependencies, overlays, packaging, Codex/Claude/Gemini/Paperclip projection.

### SK-T02-01 — Decompose a capability package

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Capability registry and projections; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Decompose a capability package. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for decompose a capability package; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-T02-02 — Assess registry dependency impact

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Capability registry and projections; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess registry dependency impact. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess registry dependency impact; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-T02-03 — Design a runtime instruction projection

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Capability registry and projections; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a runtime instruction projection. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a runtime instruction projection; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-T02-04 — Assess skill dependency conflicts

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Capability registry and projections; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess skill dependency conflicts. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess skill dependency conflicts; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## T03 — MCP, tools, plugins, webhooks, and adapters

Domain scope: Contracts, discovery, auth, policy, schemas, sandbox, lifecycle, compatibility and observability.

### SK-T03-01 — Design an MCP adapter contract

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning MCP, tools, plugins, webhooks, and adapters; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design an MCP adapter contract. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design an mcp adapter contract; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-T03-02 — Assess a webhook retry design

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning MCP, tools, plugins, webhooks, and adapters; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess a webhook retry design. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess a webhook retry design; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-T03-03 — Review plugin permission scope

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning MCP, tools, plugins, webhooks, and adapters; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Review plugin permission scope. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for review plugin permission scope; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-T03-04 — Design webhook signature verification tests

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning MCP, tools, plugins, webhooks, and adapters; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design webhook signature verification tests. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design webhook signature verification tests; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## T04 — Policy and workflow platform

Domain scope: Policy decisions/enforcement, durable states, approvals, retries, timers, compensation and escalation.

### SK-T04-01 — Draft a policy decision table

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Policy and workflow platform; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Draft a policy decision table. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for draft a policy decision table; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-T04-02 — Design a durable workflow transition

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Policy and workflow platform; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a durable workflow transition. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a durable workflow transition; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-T04-03 — Analyze compensation safety

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Policy and workflow platform; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze compensation safety. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze compensation safety; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-T04-04 — Design human-approval expiry behavior

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Policy and workflow platform; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design human-approval expiry behavior. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design human-approval expiry behavior; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## T05 — Evidence, evaluation, and release integrity

Domain scope: Lineage, hashes, graders, baselines, findings, independent review, release manifests and verification.

### SK-T05-01 — Design an artifact evidence graph

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Evidence, evaluation, and release integrity; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design an artifact evidence graph. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design an artifact evidence graph; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-T05-02 — Review an evaluation oracle

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Evidence, evaluation, and release integrity; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Review an evaluation oracle. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for review an evaluation oracle; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-T05-03 — Assess release provenance completeness

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Evidence, evaluation, and release integrity; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess release provenance completeness. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess release provenance completeness; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-T05-04 — Assess audit chain continuity

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Evidence, evaluation, and release integrity; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess audit chain continuity. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess audit chain continuity; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

## T06 — Model gateway and routing

Domain scope: Provider/model registry, routing, privacy, data residency, fallback, usage, cost and conformance.

### SK-T06-01 — Design a qualified model route

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Model gateway and routing; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design a qualified model route. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design a qualified model route; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-T06-02 — Analyze provider fallback eligibility

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Model gateway and routing; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Analyze provider fallback eligibility. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for analyze provider fallback eligibility; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-T06-03 — Assess model usage anomalies

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Model gateway and routing; applicable policy/standard/profile versions.
- Output: finding or assessment with evidence and disposition.
- Acceptance: The output directly resolves the requested outcome: Assess model usage anomalies. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for assess model usage anomalies; enumerate missing information. Apply the selected domain and technology profile to produce the finding or assessment with evidence and disposition. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.

### SK-T06-04 — Design provider quota admission rules

- Input: task and acceptance criterion IDs; tenant and data classification; authorized resource scope; source artifacts concerning Model gateway and routing; applicable policy/standard/profile versions.
- Output: versioned specification or decision proposal.
- Acceptance: The output directly resolves the requested outcome: Design provider quota admission rules. Every material factual claim or change maps to an input requirement or source and a verification receipt. Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass. Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.
- Procedure: Inspect the authorized inputs for design provider quota admission rules; enumerate missing information. Apply the selected domain and technology profile to produce the versioned specification or decision proposal. Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions. Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.
- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.
- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.
