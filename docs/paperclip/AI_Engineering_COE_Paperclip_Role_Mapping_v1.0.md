# AI Engineering CoE Artifact Factory — Paperclip Role Mapping

**Document ID:** AICOE-PC-ROLE

**Version:** 1.0

**Date:** 4 September 2026

**Status:** FINAL FOR INITIAL COMPANY HIRING

## 1. Mapping principles

The 267-role enterprise matrix is a reference catalogue, not the initial Paperclip headcount. Start with the 13 execution identities below, prove the factory and golden slice, then add temporary domain specialists only when the task queue requires them.

One model provider is not inherently independent from another. Independence requires separate execution identity, no authorship of the candidate, separate instructions, access only to the frozen candidate and required evidence, and no ability to rewrite evidence or self-approve.

The human Board is outside the agent hierarchy and retains accountable approvals.

## 2. Initial organization

| # | Paperclip position | Matrix alignment | Adapter / subscription lane | Reports to | Primary accountability | Prohibited authority |
| ---: | --- | --- | --- | --- | --- | --- |
| 0 | Human Board / Owner | R-GOV-001 | Human | — | Mission, scope, budgets, hiring, policy, risk, production and release approvals | Shall not be impersonated by an agent |
| 1 | CEO / Programme Orchestrator | R-EXE-001 | Claude Code subscription; high-capability model | Human Board | Strategy, programme graph, hiring proposals, cross-team delegation, progress and escalation | No self-approval, release approval, residual-risk acceptance or artifact authorship at scale |
| 2 | Product & Requirements Director | R-PRD-001 + R-BA-001 | Claude Code subscription | CEO | Requirements reconciliation, scope, acceptance criteria, change impact, 545-requirement coverage | Cannot approve own reconciliation or silently alter IDs |
| 3 | Chief Architecture & Standards Lead | R-EXE-011 + R-ARC-002 | Claude Code subscription | CEO | Canonical architecture, realization taxonomy, standards applicability, ADRs | Cannot final-review own designs or approve controlled standards |
| 4 | Artifact Factory Engineering Lead | R-PLT-002 + R-ENG-001 | Codex via ChatGPT subscription | CEO | Factory kernel, schemas, generators, validators, packaging, developer workflow | Cannot independently approve factory security or release integrity |
| 5 | Canonical Content & Skill Author Lead | R-PLT-006 | Claude Code subscription | Product & Requirements Director | Author role contracts, skills, workflows, templates, knowledge and service artifacts | Cannot independently review authored artifacts |
| 6 | Tooling & Projection Engineer | R-PLT-009 + R-PLT-012 | Codex via ChatGPT subscription | Artifact Factory Engineering Lead | Deterministic tooling and Codex/Claude/Gemini/Paperclip projections | Cannot change canonical meaning inside a projection |
| 7 | Application Golden-Slice Engineer | R-ENG-004 + R-ENG-006 | Codex via ChatGPT subscription | Artifact Factory Engineering Lead | Java/Spring, Angular, APIs, testable reference implementation | Cannot approve release or security findings on own code |
| 8 | Quality & Evaluation Lead | R-QA-014 + R-PLT-011 | Codex via ChatGPT subscription | CEO | Test design, deterministic graders, runtime evaluation, evidence completeness | Must not author the candidate being independently evaluated |
| 9 | Independent Content Reviewer | Area reviewer + R-QA-014 | Claude Code subscription | Human Board for verdicts; operationally CEO | Author-disjoint review of frozen artifacts against requirements and sources | Read/review only on candidate; no candidate edits; no human approval |
| 10 | Independent Security Reviewer | R-SEC-002 + R-SEC-005 | Claude Code subscription with isolated session | Human Board for verdicts; operationally CEO | Threat model challenge, injection/authority/supply-chain/security testing, clearance recommendation | No remediation in reviewer identity; no CISO/risk acceptance claim |
| 11 | Release Integrity & Evidence Custodian | R-PLT-011 + R-OPS release role | Codex via ChatGPT subscription | Human Board for release evidence; operationally CEO | Hashes, manifests, provenance, package rebuild/reopen/revalidate, status counts | Cannot approve content authored by this identity or grant release approval |
| 12 | Liveness & Recovery Watchdog | R-PLT-012 + O01/O02 | Codex via ChatGPT subscription; economical model | Human Board | Verify stopped task trees, restore valid work paths, create structured blockers, escalate | Cannot author normal deliverables, alter watchdog policy, or approve Board gates |

## 3. Provider division

Use Claude primarily for requirements, architecture, long-form artifact authoring, and independent qualitative/security challenge. Use Codex primarily for repository changes, schemas, validators, generators, test automation, projections, packaging, and integrity checks.

For high-risk artifacts, use this minimum chain:

```text
requirements (Claude) -> implementation/authoring (Codex or Claude)
-> independent content review (different identity)
-> independent security review (different identity)
-> deterministic evaluation (Codex)
-> release integrity (Codex, author-disjoint)
-> human Board approval
```

Cross-provider review is preferred when capacity permits, but different providers do not remove the need for author-disjoint identities and independent evidence.

## 4. Hiring sequence

Do not hire all agents before the first strategy is approved.

1. Hire the CEO only. Give it the CEO bootstrap instruction bundle in `paperclip/bootstrap/agents/ceo/`.
2. Run the CEO once and require it to submit a strategy for Board approval.
3. After approval, hire positions 2, 3, 4, 9, 10, and 12. This is the factory-kernel group plus independent challenge and recovery.
4. After the factory design is approved, hire positions 5, 6, 8, and 11.
5. Hire position 7 only when the golden software-delivery slice begins.
6. Add domain specialists from the 267-role matrix as bounded, task-specific hires. Give each a manager, limited skills, limited workspace, explicit budget, and expiry/review date.

## 5. Suggested model/cadence profile

Use the model IDs currently offered by each adapter rather than hard-coding a stale ID. Start with:

| Role group | Capability | Reasoning/effort | Wake pattern |
| --- | --- | --- | --- |
| CEO, architecture, security review | Highest available subscription model | High | Event-driven; optional 60-minute recovery/status heartbeat |
| Requirements and content authoring | Balanced/high-capability model | Medium/high by risk | Assignment and review events |
| Factory, tooling, app engineering | Current Codex default or reliable coding model | Medium/high | Assignment and CI/review events |
| QA, evidence, release integrity | Reliable coding model | Medium | Assignment, monitor and review events |
| Liveness watchdog | Economical reliable model | Medium | Task-watchdog event only |

Subscription usage limits are shared by all agents using the same host login. Set Paperclip budgets for operational control, but do not assume those budgets exactly reflect subscription quotas or provider-side reset windows.

## 6. Skills and access by position

| Position | Initial skills/capabilities | Repository access | Review-stage eligibility |
| --- | --- | --- | --- |
| CEO | Paperclip task planning, delegation, status, decision and escalation | Read all; write planning/status paths only | Approval requester, never final approver |
| Requirements Director | Requirements quality, traceability, change control | Requirements/registers | Requirements author/reconciler |
| Architecture Lead | Architecture, ADR, realization classification, standards mapping | Designs/decisions/standards | Design author; reviewer only when author-disjoint |
| Factory Engineering Lead | Schema/TDD, validation, packaging, CI | Factory, schemas, tests | Technical executor |
| Skill Author Lead | Skill authoring, progressive disclosure, safe procedure design | Canonical artifact paths allocated by lease | Candidate author |
| Projection Engineer | Target runtime adapters and manifest generation | Projection and generator paths | Projection executor |
| Golden-Slice Engineer | Java/Spring, Angular, API, secure development | Reference implementation worktree | Code author |
| QA & Evaluation Lead | Test design, baseline comparison, grading | Evals/evidence; read candidates | Evaluator only when author-disjoint |
| Content Reviewer | Requirements/source comparison | Read-only frozen candidate/review path | Independent reviewer |
| Security Reviewer | Threat modeling, injection and tool safety, SSDLC | Read-only candidate; write findings/evidence | Security reviewer |
| Release Custodian | Hashing, reproducible packaging, manifest verification | Release/evidence; read approved artifacts | Release-integrity participant |
| Watchdog | Paperclip issue tree inspection and recovery | Paperclip task metadata; minimum repo read | Watchdog only |

## 7. Mandatory segregation rules

- Candidate author != independent content reviewer.
- Candidate author != independent security reviewer.
- Developer != production/release approver.
- Policy author != final policy approver.
- Model/agent developer != independent model/agent validator.
- Vulnerability finder/remediator != finding-closure authority.
- Runtime administrator != sole protected-audit-log administrator.
- Release packager != sole release approver.
- CEO != Human Board.

When subscription capacity is insufficient for concurrent identities, serialize the roles. Do not collapse prohibited identities into one session merely to go faster.

## 8. Agent instruction bundle convention

Each long-lived role shall use:

```text
AGENTS.md      # entry point, role, authority and required references
SOUL.md        # role posture and decision principles
HEARTBEAT.md   # exact wake/check-out/work/update/delegate protocol
TOOLS.md       # permitted tools, paths, network and secret boundaries
```

Attach only the minimum evaluated skills needed for the assigned task. Keep policies enforceable in Paperclip/tool configuration where possible; a mandatory control shall not depend only on the model remembering prose.
