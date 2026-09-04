# AI Engineering COE - Codex Clean-Start Task

**Document type:** Bootstrap task for a new Codex project  
**Version:** 2.0 discussion-first bootstrap  
**Date:** 3 September 2026  
**Requested by:** Paresh Patil  
**Initial status:** `REQUIREMENTS_AND_DESIGN_DISCUSSION_REQUIRED`

## 1. How to use this file

Create a new local Git repository named `AI-Engineering-COE`. Copy this file to the repository root and rename it `TASK.md`.

Before starting the Codex conversation, place these authoritative inputs under `project_sources/`:

```text
AI-Engineering-COE/
├── AGENTS.md
├── TASK.md
└── project_sources/
    ├── AI_Engineering_CoE_578_Item_Disposition_Register_v0.2.md
    ├── rebit-cs-global-standards.pdf
    └── rebit-ea-global-standards.pdf
```

Do not copy any previously generated skills, policies, standards, reviews, packages, ZIP files, manifests, evaluation results, or status claims into this clean repository.

Paste the prompt in Section 2 into the first Codex chat. Codex must read this entire `TASK.md` and the three authoritative inputs before proposing the design.

---

## 2. First prompt to paste into Codex

```text
We are starting the AI Engineering COE Artifact Factory from a clean repository.

Read AGENTS.md, TASK.md, and every file under project_sources/ before proposing work. Treat all previously generated artifact content, validation evidence, review evidence, installation claims, and release packages as nonexistent. Do not search for, copy, recover, or reuse prior generated artifacts.

The source register contains exactly 578 mandatory capability IDs. Preserve every ID and capability name. The realization type is not yet final: before authoring, determine whether each ID should be implemented as an installable skill, policy, standard, workflow, agent definition, quality gate, schema, evaluation suite, tool/adapter, knowledge asset, service, template, or accountable human control. Never force a policy, organizational approval, or consequential human decision into a skill merely to increase the skill count. Do not silently change, remove, merge, split, or renumber an ID; use a formal change proposal for any recommended change.

This is an architectural task. Begin with requirements reconciliation and design discussion. Do not scaffold the factory or create any of the 578 artifacts until I explicitly approve the written architecture and execution plan.

First provide:
1. Your exact understanding of my objective and definition of success.
2. The authoritative-source hierarchy and conflict-resolution rules.
3. Gaps, ambiguities, contradictions, and decisions still required.
4. Two or three factory architecture approaches with trade-offs and your recommendation.
5. A proposed clean repository structure.
6. The artifact lifecycle, security-clearance lifecycle, evaluation lifecycle, independent-review model, multi-agent model, evidence model, and release gates.
7. A realistic statement of available concurrency and environmental limitations.

Ask consequential questions one at a time. The first question must ask me to confirm this recommended baseline decision: preserve all 578 IDs and capability names, but validate and approve the correct realization type for every ID before authoring.

Use multiple author agents and separate independent reviewer agents after the design and implementation plan are approved. Use the maximum safe concurrency actually available; never claim 100 agents if the environment provides fewer. Assign disjoint write scopes, record work leases, bind reviews to exact file hashes, and prohibit authors from approving or closing findings on their own artifacts.

Do not stop at an intermediate milestone such as file creation, structural validation, a failed review, a usage-limit interruption, or ZIP creation. Persist status and the exact next action, then resume when the environment permits. Stop only for a genuinely consequential user decision, unavailable authority/credential, platform-enforced restriction, or irreversible action requiring approval. Never hide a blocker or represent incomplete work as completed.

After we approve the architecture, write a formal design specification for my review. Only after I approve that specification, write a detailed implementation plan. Only after I approve the implementation plan may artifact-factory construction and artifact authoring begin.
```

---

## 3. Governing objective

Build, validate, secure, independently review, evaluate, package, and hand over the complete realization of all 578 mandatory capability IDs for an AI Engineering Centre of Excellence.

The goal is not 578 shallow files. The goal is a traceable, production-candidate library that can guide AI agents through product research, requirements, architecture, secure software development, testing, cybersecurity, platform engineering, release, operations, governance, evidence collection, and accountable human decisions.

The factory must support, where the documented runtime contracts permit:

- Codex and ChatGPT skills;
- Claude-compatible Agent Skills;
- documented Gemini-compatible projections;
- Paperclip agent orchestration packages;
- portable canonical artifacts plus restricted organization overlays.

Structural compatibility is not runtime verification. No runtime support claim may be made unless that runtime was actually exercised and the evidence is retained.

## 4. Clean-room rules

1. Begin at zero: `0 PREPARED`, `0 REVIEWED`, `0 SECURITY_CLEARED`, `0 FINAL`, and `0 RELEASED`.
2. The 578-item source register supplies the mandatory IDs and capability names. Its proposed classifications are inputs for adjudication, not automatic approvals.
3. The two ReBIT PDFs are controlled organizational sources. They must remain under `project_sources/controlled/rebit/` or another access-restricted source location after the design is approved.
4. Do not copy confidential ReBIT text into portable public skills. Create private organization overlays with traceable document, section, page, applicability, rationale, enforcement, evidence, owner, exception, and approval fields.
5. All new artifacts, generators, validators, reviews, evaluations, manifests, and packages must be produced inside this repository after the approved plan begins.
6. Record source hashes and versions before deriving requirements.
7. Never inherit evidence from different bytes. Any modified artifact loses its prior review and clearance until revalidated and re-reviewed.

## 5. Required security foundations

### 5.1 Application and secure-development baseline

At the beginning of the approved implementation phase, verify the latest authoritative versions and pin them in the source register. At minimum, evaluate and map the applicable controls from:

- ReBIT Cybersecurity Global Standards;
- ReBIT Enterprise Architecture Global Standards;
- OWASP Application Security Verification Standard (ASVS), using version-qualified requirement identifiers;
- OWASP Top 10 for web application risk awareness;
- OWASP Cheat Sheet Series for implementation guidance;
- OWASP Software Assurance Maturity Model where applicable to lifecycle governance;
- OWASP API Security Top 10 for APIs;
- OWASP GenAI Security guidance and AI Agent Security guidance;
- applicable language, framework, database, messaging, container, Kubernetes/OpenShift, CI/CD, supply-chain, accessibility, privacy, and regulatory standards.

OWASP Top 10 is an awareness baseline, not the sole verification standard. Use ASVS and technology-specific verification requirements for measurable secure-development controls.

### 5.2 Development-agent obligations

Every development-related skill and agent definition must require the authoring agent to:

1. Identify data classification, trust boundaries, actors, assets, entry points, abuse cases, and applicable controls before coding.
2. Produce or update a threat model proportionate to risk.
3. Resolve the applicable ReBIT, ASVS, OWASP, architecture, and technology-profile requirements.
4. Convert applicable requirements into acceptance criteria and negative security tests.
5. Use secure-by-default framework features and least privilege.
6. Validate all untrusted input and safely encode output in the correct context.
7. Enforce authentication, authorization, object-level access control, segregation of duties, and tenant/user boundaries where applicable.
8. Use approved cryptography, secret handling, dependency controls, logging, error handling, resource limits, and safe configuration.
9. Avoid malware, backdoors, deceptive behavior, unauthorized access, credential exposure, data exfiltration, destructive defaults, and prohibited dual-use functionality.
10. Run relevant unit, integration, abuse, negative, SAST, SCA, secret, IaC, container, and other available security checks.
11. Produce control-to-code-to-test evidence.
12. Abstain and escalate when authority, requirements, data classification, or safe implementation is unclear.

### 5.3 Independent security-review obligations

The development author must not review or approve its own work. An author-disjoint reviewer must independently:

1. Resolve applicable controls without trusting the author's checklist.
2. Challenge threat models, assumptions, trust boundaries, and not-applicable decisions.
3. Review source, configuration, dependencies, tests, evidence, and generated outputs.
4. Verify ASVS requirements using pinned, version-qualified IDs.
5. Run or reproduce applicable SAST, SCA, secret, IaC, container, API, DAST, fuzzing, abuse, and manual secure-code checks.
6. Review Java/Spring Boot, Angular, Oracle, Kafka, API, container and OpenShift concerns when applicable.
7. Reject evidence consisting only of screenshots when machine-readable logs, reports, source references, or reproducible commands are available.
8. Record findings with severity, affected IDs/files, evidence, exploit or failure scenario, required remediation, retest method, owner, and status.
9. Re-test the exact remediated bytes.
10. Recommend clearance only when all required machine gates pass and no release-blocking finding remains.

The reviewer may recommend technical security clearance. Only an authorized organizational role may grant ReBIT/CISO acceptance, approve exceptions, accept residual risk, or authorize production use.

## 6. Prompt-injection and agent-security clearance

Do not claim that prompt injection can be completely removed. Define an explicit, versioned agent threat model and demonstrate risk reduction through layered controls and adversarial evidence.

Every skill, agent, tool, workflow, reference set, and runtime projection must be evaluated as applicable for:

- direct prompt injection and jailbreak attempts;
- indirect injection in PDFs, webpages, repositories, source comments, issue text, emails, tool output, API responses, logs, images, and retrieved knowledge;
- instruction/data boundary confusion;
- priority inversion and attempts to override system, developer, project, policy, or user authority;
- malicious or poisoned references, dependencies, skills, plugins, MCP servers, and bundled resources;
- excessive agency and unauthorized consequential actions;
- tool abuse, argument manipulation, command injection, path traversal, unsafe deserialization, and destructive operations;
- secret, personal, regulated, confidential, and proprietary data disclosure;
- cross-user, cross-project, cross-agent, and cross-session memory contamination;
- insecure output handling and downstream execution of model output;
- data exfiltration through network, files, logs, tool calls, or covert channels;
- approval bypass, forged evidence, reviewer impersonation, and self-approval;
- denial-of-service, resource exhaustion, unbounded loops, and uncontrolled cost;
- misleading, surprising, malicious, unethical, or unauthorized behavior.

Required defenses must include as applicable:

- treating all external content as untrusted data;
- separating trusted instructions from untrusted content;
- provenance and integrity validation;
- least-privilege and allowlisted tools;
- schema-constrained inputs and outputs;
- authorization at the tool/action layer, not only in prompts;
- sandboxing and constrained execution;
- read/write/network boundaries;
- human approval for consequential actions;
- memory isolation, validation, expiry, and audit;
- output sanitization and validation before downstream use;
- monitoring, alerting, incident response, rollback, revocation, and kill switches;
- direct and remote prompt-injection red-team tests.

An artifact may receive `TECHNICAL_SECURITY_CLEARANCE_PASSED` only when its exact bytes pass the applicable deterministic checks, malicious-content scan, provenance/licensing review, adversarial prompt-injection suite, authority-boundary tests, evidence-integrity tests, and independent security review with no unresolved BLOCKER or CRITICAL finding.

Technical clearance is not CISO approval and is not permission for production use.

## 7. Ethical and secure behavior

Every development and cybersecurity artifact must preserve the principle of least harm and refuse or safely redirect work involving unauthorized access, malware, credential theft, persistence, evasion, destructive exploitation, data theft, or bypass of security controls.

Defensive security testing must require:

- explicit authorization and scope;
- approved targets and time window;
- data-handling limits;
- safe test intensity;
- evidence protection;
- stop conditions;
- incident escalation;
- cleanup and rollback.

Skills must not contain hidden instructions, unexplained executables, embedded credentials, auto-running destructive operations, or behavior inconsistent with their name and description.

## 8. Required artifact model

### 8.1 Installable skill

Each approved skill must be a visible directory:

```text
<skill-name>/
├── SKILL.md
├── artifact.manifest.yaml
├── evals/
│   └── evals.json
├── agents/
│   └── openai.yaml              # only when applicable
├── references/                  # only when required
├── scripts/                     # only when deterministic automation is justified
├── schemas/                     # only when machine contracts are required
└── assets/                      # only when reusable output assets are required
```

`SKILL.md` is mandatory and must contain valid YAML frontmatter with `name` and `description`, followed by detailed operational instructions. Keep it concise, preferably under 500 lines, and use progressive disclosure. Clearly tell the runtime when to read each reference and when to run each script. Do not create empty directories.

Every skill must be domain-specific, reusable, safe, bounded, testable, evidence-producing, and substantially better than a generic template with replaced nouns.

### 8.2 Non-skill realization

Policies, standards, workflows, gates, agent definitions, tools, schemas, evaluation suites, knowledge assets, templates, services, and human-accountability controls must use their approved schemas. They must not be disguised as `SKILL.md` merely to satisfy a count.

## 9. Evaluation requirements

Every installable skill must have at least three realistic evaluation cases unless the approved risk model demands more:

1. normal representative use;
2. difficult or boundary use;
3. unsafe, unauthorized, injected, or insufficient-input use.

For security-sensitive skills, add technology-specific and adversarial cases. Save prompts, expected characteristics, measurable assertions, files, risk, and required evidence in `evals/evals.json`.

Run the with-skill and baseline cases in the same evaluation wave. Use no-skill baseline for a new skill. Capture outputs, grades, available timing/token telemetry, logs, and evidence. Never invent unavailable telemetry.

Use deterministic graders for machine-checkable assertions and independent graders for qualitative judgments. Generate the supported static evaluation viewer and benchmark summaries. Iterate until no meaningful machine-remediable defect remains. User review is required for representative outputs before final approval.

## 10. Proposed clean repository structure

This structure is a proposal that Codex must discuss and obtain approval for before creating it:

```text
AI-Engineering-COE/
├── AGENTS.md
├── TASK.md
├── README.md
├── SECURITY.md
├── project_sources/
│   ├── source-register.yaml
│   ├── baseline/
│   ├── controlled/rebit/
│   ├── industry/
│   └── runtime-specifications/
├── docs/
│   ├── requirements/
│   ├── decisions/
│   ├── threat-models/
│   ├── designs/
│   └── plans/
├── registers/
│   ├── master-capability-register.json
│   ├── realization-decisions.json
│   ├── traceability-register.json
│   ├── source-provenance-register.json
│   ├── risk-register.json
│   ├── findings-register.json
│   ├── approvals-register.json
│   └── release-register.json
├── factory/
│   ├── governance/
│   ├── schemas/
│   ├── templates/
│   ├── lifecycle/
│   ├── gates/
│   ├── validators/
│   ├── generators/
│   ├── graders/
│   ├── security-tests/
│   ├── fixtures/
│   └── packaging/
├── agents/
│   ├── orchestrator/
│   ├── authors/
│   ├── reviewers/
│   ├── security-reviewers/
│   ├── evaluators/
│   └── release-integrity/
├── artifacts/
│   ├── canonical/
│   │   ├── skills/
│   │   ├── policies/
│   │   ├── standards/
│   │   ├── workflows/
│   │   ├── gates/
│   │   ├── agent-definitions/
│   │   ├── tools-adapters/
│   │   ├── schemas/
│   │   ├── eval-suites/
│   │   ├── knowledge/
│   │   ├── services/
│   │   ├── templates/
│   │   └── human-controls/
│   └── overlays/
│       ├── organization/rebit/
│       └── projects/
├── evaluation-workspaces/
├── reviews/
├── projections/
│   ├── codex-chatgpt/
│   ├── claude/
│   ├── gemini/
│   └── paperclip/
├── release/
├── status/
└── quarantine/
```

## 11. Lifecycle and gates to design

Codex must propose measurable entry criteria, exit criteria, evidence, responsible role, and fail-closed behavior for at least:

- `G0 SOURCE_ACCEPTED`
- `G1 REQUIREMENTS_RECONCILED`
- `G2 REALIZATION_TYPE_APPROVED`
- `G3 DESIGN_APPROVED`
- `G4 CONTENT_AND_STRUCTURE_VALIDATED`
- `G5 SECURITY_TESTS_PASSED`
- `G6 INDEPENDENT_REVIEW_PASSED`
- `G7 RUNTIME_AND_EVALUATION_PASSED`
- `G8 RELEASE_INTEGRITY_PASSED`
- `G9 HUMAN_ORGANIZATIONAL_APPROVAL_RECORDED`
- `G10 RELEASED`

No gate may convert a recommendation into accountable approval. Every gate must bind to exact artifact bytes and evidence hashes.

## 12. Parallel multi-agent operating model

After plan approval, use multiple agents for bounded independent work. Keep the primary agent focused on requirements, decisions, integration, and final verification.

For each work wave:

1. Create a machine-readable allocation ledger.
2. Assign stable artifact IDs and disjoint write paths.
3. Record allowed sources, forbidden paths, expected outputs, lease time, and source-manifest hash.
4. Assign independent reviewers who did not author the artifacts.
5. Assign a separate security reviewer for R3/high-impact development and agent-security artifacts.
6. Freeze candidate bytes before review.
7. Bind findings and verdicts to exact SHA-256 hashes.
8. Return defects to the original author lane or a controlled remediation lane.
9. Re-freeze, re-test, and re-review changed bytes.
10. Detect conflicting writes and fail closed.

Parallel authoring must begin only after the factory kernel and golden vertical slice pass their gates. Scale progressively; do not generate hundreds of artifacts before proving the workflow works.

## 13. Status semantics

Use distinct states:

- `REGISTERED`
- `REQUIREMENTS_RECONCILED`
- `TYPE_APPROVED`
- `DESIGNED`
- `PREPARED`
- `STRUCTURALLY_VALIDATED`
- `SECURITY_TESTED`
- `INDEPENDENTLY_REVIEWED`
- `TECHNICAL_SECURITY_CLEARANCE_PASSED`
- `EVALUATED`
- `RUNTIME_VERIFIED`
- `AWAITING_HUMAN_APPROVAL`
- `APPROVED`
- `RELEASED`
- `BLOCKED`
- `QUARANTINED`

Never equate `PREPARED`, `DRAFT`, `STRUCTURALLY_VALIDATED`, `NOT_RUN`, or `REVIEWED_WITH_FINDINGS` with final completion.

Maintain resumable status files recording exact counts, open findings, active leases, decisions, blockers, source/current hashes, installation state, and the next executable action.

## 14. Completion definition

The overall task is complete only when:

1. All 578 mandatory IDs are reconciled exactly once.
2. Every realization type is approved or covered by an approved formal change decision.
3. Every required canonical artifact exists and passes its schema.
4. Every skill has detailed `SKILL.md`, required resources, provenance, and evaluations.
5. Every current artifact has exact-byte independent review evidence.
6. Every applicable artifact passes the defined security-clearance process.
7. All machine-remediable BLOCKER and CRITICAL findings are closed and independently re-tested.
8. Development skills demonstrate secure and ethical behavior through OWASP/ReBIT-mapped tests.
9. Runtime projections are generated only for documented contracts and accurately state execution status.
10. Release archives expose visible individual skill directories and `SKILL.md` files.
11. Every archive is hash-manifested, scanned, reopened, safely extracted, and revalidated.
12. Installation is performed only through available authorized mechanisms and verified afterward.
13. ReBIT/CISO/human approvals and residual-risk acceptance are recorded only when actually granted.
14. The final report gives exact counts and distinguishes technical completion, runtime verification, installation, human approval, and release.

## 15. First-conversation stopping point

During the first Codex conversation, stop after presenting the reconciled understanding and asking the first consequential question. Do not create artifacts yet.

The intended first decision is:

> Preserve all 578 IDs and capability names, while validating and formally approving the correct realization type for each ID before authoring.

After that decision, continue the design discussion one question at a time until the architecture is complete and approved.
