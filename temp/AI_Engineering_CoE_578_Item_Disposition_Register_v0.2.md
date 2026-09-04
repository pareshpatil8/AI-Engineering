# AI Engineering COE — 578-Item Capability Disposition Register

**Version:** 0.2 review draft  
**Date:** 20 August 2026  
**Status:** Proposed classification; every row requires owner/reviewer approval before realization  
**Control total:** 578 unique candidate IDs

## Classification rule

A capability is an installable skill only when it is a reusable, atomic agent job. Mandatory rules become policies; technical baselines become standards/profiles; stateful organizational processes become workflows; deterministic integrations become tools/adapters; decision criteria become gates; and legally accountable decisions remain human. The canonical-location column answers where the artifact belongs in the project. The provisional risk floor controls the minimum eval and review intensity and may be raised by a project profile. The companion column identifies what must exist even when the primary realization is a skill.

## Disposition summary

### Primary realization

| Type | Count |
| --- | ---: |
| Agent definition | 2 |
| Atomic skill | 510 |
| Durable workflow | 19 |
| Eval suite | 10 |
| Human accountability | 4 |
| Knowledge asset | 1 |
| Operating service | 1 |
| Policy | 15 |
| Quality gate | 4 |
| Schema / contract | 1 |
| Standard / profile | 4 |
| Template | 1 |
| Tool / adapter | 6 |

### Proposed realization decision

| Decision | Count |
| --- | ---: |
| Convert/non-skill | 64 |
| Human-only | 4 |
| Merge | 2 |
| Retain skill | 477 |
| Split | 31 |

### Development lane

| Lane | Count |
| --- | ---: |
| A3 Independent assurance | 117 |
| D5 Banking and advanced AI | 50 |
| F0 Operating kernel | 89 |
| O4 Release and operations | 59 |
| V1 Golden/pilot lifecycle | 74 |
| V2 Pilot technology | 189 |

### Provisional risk floor

| Floor | Count |
| --- | ---: |
| R0 | 2 |
| R1 | 72 |
| R2 | 290 |
| R3 | 214 |

**Control total: 578 candidate capabilities.**

Counts are planning numbers, not approval or staffing commitments. Items marked split will create more than one final skill; converted and merged items reduce the number of installable skills.

## Detailed item-by-item register

The following disposition is proposed for review. A row does not become approved merely because it is classified.
Each candidate receives exactly one primary realization; companion artifacts remain mandatory.

### 11.2 Agent coordination and Paperclip operations

| ID | Candidate capability | Primary realization | Canonical project location | Risk floor | Proposed disposition | Mandatory companion | Accountable COE | Development lane |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AGT-001 | `define-agent-role-contract` | Agent definition | `agents/<role>/AGENTS.md` | R2 | Convert to agent definition | AGENTS.md + authority/SoD/tool profile + role eval | Agent Platform & Governance | F0 Operating kernel |
| AGT-002 | `define-agent-authority-boundary` | Policy | `coe/07-policies-hardening/agt/define-agent-authority-boundary.md` | R3 | Convert to policy | Control mapping + enforcement + exception workflow | Agent Platform & Governance | F0 Operating kernel |
| AGT-003 | `configure-agent-heartbeat` | Tool / adapter | `coe/06-tools-adapters/configure-agent-heartbeat/` | R2 | Convert to tool / adapter | API/MCP contract + permissions + failure tests | Agent Platform & Governance | F0 Operating kernel |
| AGT-004 | `configure-agent-runtime-adapter` | Tool / adapter | `coe/06-tools-adapters/configure-agent-runtime-adapter/` | R2 | Convert to tool / adapter | API/MCP contract + permissions + failure tests | Agent Platform & Governance | F0 Operating kernel |
| AGT-005 | `assign-role-scoped-skills` | Agent definition | `agents/<role>/AGENTS.md` | R2 | Convert to agent definition | AGENTS.md + authority/SoD/tool profile + role eval | Agent Platform & Governance | F0 Operating kernel |
| AGT-006 | `enforce-agent-tool-allowlist` | Policy | `coe/07-policies-hardening/agt/enforce-agent-tool-allowlist.md` | R3 | Convert to policy | Control mapping + enforcement + exception workflow | Agent Platform & Governance | F0 Operating kernel |
| AGT-007 | `plan-goal-linked-work` | Atomic skill | `skills/plan-goal-linked-work/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Agent Platform & Governance | F0 Operating kernel |
| AGT-008 | `decompose-and-assign-work` | Durable workflow | `coe/03-lifecycle-workflows/agt/decompose-and-assign-work/` | R2 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | Agent Platform & Governance | F0 Operating kernel |
| AGT-009 | `delegate-work-with-context` | Atomic skill | `skills/delegate-work-with-context/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Agent Platform & Governance | F0 Operating kernel |
| AGT-010 | `handoff-work-product` | Atomic skill | `skills/handoff-work-product/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Agent Platform & Governance | F0 Operating kernel |
| AGT-011 | `resolve-agent-conflict` | Durable workflow | `coe/03-lifecycle-workflows/agt/resolve-agent-conflict/` | R3 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | Agent Platform & Governance | F0 Operating kernel |
| AGT-012 | `run-independent-agent-review` | Atomic skill | `skills/run-independent-agent-review/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Agent Platform & Governance | F0 Operating kernel |
| AGT-013 | `build-consensus-with-dissent` | Atomic skill | `skills/build-consensus-with-dissent/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Agent Platform & Governance | F0 Operating kernel |
| AGT-014 | `escalate-blocked-work` | Durable workflow | `coe/03-lifecycle-workflows/agt/escalate-blocked-work/` | R2 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | Agent Platform & Governance | F0 Operating kernel |
| AGT-015 | `request-human-approval` | Durable workflow | `coe/03-lifecycle-workflows/agt/request-human-approval/` | R3 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | Agent Platform & Governance | F0 Operating kernel |
| AGT-016 | `record-agent-decision` | Atomic skill | `skills/record-agent-decision/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Agent Platform & Governance | F0 Operating kernel |
| AGT-017 | `manage-agent-memory` | Policy | `coe/07-policies-hardening/agt/manage-agent-memory.md` | R3 | Convert to policy | Control mapping + enforcement + exception workflow | Agent Platform & Governance | F0 Operating kernel |
| AGT-018 | `redact-agent-context` | Atomic skill | `skills/redact-agent-context/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Agent Platform & Governance | F0 Operating kernel |
| AGT-019 | `budget-agent-runtime` | Policy | `coe/07-policies-hardening/agt/budget-agent-runtime.md` | R2 | Convert to policy | Control mapping + enforcement + exception workflow | Agent Platform & Governance | F0 Operating kernel |
| AGT-020 | `handle-agent-uncertainty` | Atomic skill | `skills/handle-agent-uncertainty/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Agent Platform & Governance | F0 Operating kernel |
| AGT-021 | `abstain-and-fail-closed` | Policy | `coe/07-policies-hardening/agt/abstain-and-fail-closed.md` | R3 | Convert to policy | Control mapping + enforcement + exception workflow | Agent Platform & Governance | F0 Operating kernel |
| AGT-022 | `detect-agent-loop-or-stall` | Tool / adapter | `coe/06-tools-adapters/detect-agent-loop-or-stall/` | R3 | Convert to tool / adapter | API/MCP contract + permissions + failure tests | Agent Platform & Governance | F0 Operating kernel |
| AGT-023 | `pause-or-terminate-agent` | Tool / adapter | `coe/06-tools-adapters/pause-or-terminate-agent/` | R3 | Convert to tool / adapter | API/MCP contract + permissions + failure tests | Agent Platform & Governance | F0 Operating kernel |
| AGT-024 | `recover-failed-agent-run` | Durable workflow | `coe/03-lifecycle-workflows/agt/recover-failed-agent-run/` | R3 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | Agent Platform & Governance | F0 Operating kernel |
| AGT-025 | `review-agent-performance` | Eval suite | `coe/09-evals/review-agent-performance/` | R2 | Convert to eval suite | Fixtures + hidden invariants + grader + baselines | Agent Platform & Governance | F0 Operating kernel |
| AGT-026 | `import-paperclip-company-package` | Tool / adapter | `coe/06-tools-adapters/import-paperclip-company-package/` | R2 | Convert to tool / adapter | API/MCP contract + permissions + failure tests | Agent Platform & Governance | F0 Operating kernel |
| AGT-027 | `export-paperclip-company-package` | Tool / adapter | `coe/06-tools-adapters/export-paperclip-company-package/` | R2 | Convert to tool / adapter | API/MCP contract + permissions + failure tests | Agent Platform & Governance | F0 Operating kernel |
| AGT-028 | `validate-paperclip-package-integrity` | Eval suite | `coe/09-evals/validate-paperclip-package-integrity/` | R3 | Convert to eval suite | Fixtures + hidden invariants + grader + baselines | Agent Platform & Governance | F0 Operating kernel |

### 11.3 Governance, risk, compliance and audit

| ID | Candidate capability | Primary realization | Canonical project location | Risk floor | Proposed disposition | Mandatory companion | Accountable COE | Development lane |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| GOV-001 | `establish-company-charter` | Template | `coe/08-schemas-contracts-templates/templates/establish-company-charter.md` | R0 | Convert to template | Template + completion schema + review checklist | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-002 | `define-product-operating-model` | Policy | `coe/07-policies-hardening/gov/define-product-operating-model.md` | R2 | Convert to policy | Control mapping + enforcement + exception workflow | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-003 | `map-decision-rights-and-raci` | Human accountability | `coe/01-strategy-operating-model/decisions/map-decision-rights-and-raci.md` | R3 | Human-only decision; agent prepares evidence | RACI + signed decision record + evidence | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-004 | `classify-system-criticality` | Atomic skill | `skills/classify-system-criticality/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-005 | `classify-information-assets` | Atomic skill | `skills/classify-information-assets/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-006 | `assess-delivery-risk` | Atomic skill | `skills/assess-delivery-risk/` | R2 | Retain as atomic skill | Review schema + evidence + evals | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-007 | `maintain-enterprise-control-library` | Knowledge asset | `coe/04-knowledge/maintain-enterprise-control-library/` | R0 | Convert to knowledge asset | Sources + licence + currency metadata | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-008 | `map-controls-to-lifecycle` | Atomic skill | `skills/map-controls-to-lifecycle/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-009 | `map-controls-to-evidence` | Atomic skill | `skills/map-controls-to-evidence/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-010 | `manage-policy-lifecycle` | Durable workflow | `coe/03-lifecycle-workflows/gov/manage-policy-lifecycle/` | R2 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-011 | `manage-control-exception` | Durable workflow | `coe/03-lifecycle-workflows/gov/manage-control-exception/` | R3 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-012 | `accept-residual-risk` | Human accountability | `coe/01-strategy-operating-model/decisions/accept-residual-risk.md` | R3 | Human-only decision; agent prepares evidence | RACI + signed decision record + evidence | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-013 | `enforce-segregation-of-duties` | Policy | `coe/07-policies-hardening/gov/enforce-segregation-of-duties.md` | R3 | Convert to policy | Control mapping + enforcement + exception workflow | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-014 | `conduct-governance-review` | Durable workflow | `coe/03-lifecycle-workflows/gov/conduct-governance-review/` | R2 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-015 | `conduct-ai-risk-review` | Atomic skill | `skills/conduct-ai-risk-review/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-016 | `conduct-privacy-impact-assessment` | Atomic skill | `skills/conduct-privacy-impact-assessment/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-017 | `conduct-third-party-risk-review` | Atomic skill | `skills/conduct-third-party-risk-review/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-018 | `assess-outsourcing-materiality` | Atomic skill | `skills/assess-outsourcing-materiality/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-019 | `govern-open-source-use` | Policy | `coe/07-policies-hardening/gov/govern-open-source-use.md` | R2 | Convert to policy | Control mapping + enforcement + exception workflow | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-020 | `review-ip-and-license-obligations` | Atomic skill | `skills/review-ip-and-license-obligations/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-021 | `govern-data-residency` | Policy | `coe/07-policies-hardening/gov/govern-data-residency.md` | R3 | Convert to policy | Control mapping + enforcement + exception workflow | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-022 | `manage-record-retention` | Policy | `coe/07-policies-hardening/gov/manage-record-retention.md` | R3 | Convert to policy | Control mapping + enforcement + exception workflow | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-023 | `govern-model-prompt-and-dataset-registry` | Policy | `coe/07-policies-hardening/gov/govern-model-prompt-and-dataset-registry.md` | R2 | Convert to policy | Control mapping + enforcement + exception workflow | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-024 | `approve-tool-and-model-use` | Human accountability | `coe/01-strategy-operating-model/decisions/approve-tool-and-model-use.md` | R3 | Human-only decision; agent prepares evidence | RACI + signed decision record + evidence | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-025 | `prepare-regulatory-evidence` | Atomic skill | `skills/prepare-regulatory-evidence/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-026 | `conduct-control-effectiveness-review` | Eval suite | `coe/09-evals/conduct-control-effectiveness-review/` | R3 | Convert to eval suite | Fixtures + hidden invariants + grader + baselines | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-027 | `prepare-internal-audit-pack` | Atomic skill | `skills/prepare-internal-audit-pack/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Governance, Risk & Compliance | F0 Operating kernel |
| GOV-028 | `track-corrective-and-preventive-action` | Durable workflow | `coe/03-lifecycle-workflows/gov/track-corrective-and-preventive-action/` | R2 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | Governance, Risk & Compliance | F0 Operating kernel |

### 11.4 Product, requirements, UX and accessibility

| ID | Candidate capability | Primary realization | Canonical project location | Risk floor | Proposed disposition | Mandatory companion | Accountable COE | Development lane |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PRD-001 | `frame-product-problem` | Atomic skill | `skills/frame-product-problem/` | R1 | Retain as atomic skill | Output schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-002 | `run-product-discovery` | Atomic skill | `skills/run-product-discovery/` | R1 | Split into atomic skills before authoring | Tool profile + output schema + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-003 | `research-users-and-stakeholders` | Atomic skill | `skills/research-users-and-stakeholders/` | R1 | Retain as atomic skill | Output schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-004 | `define-product-vision` | Atomic skill | `skills/define-product-vision/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-005 | `define-product-strategy` | Atomic skill | `skills/define-product-strategy/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-006 | `build-value-and-business-case` | Atomic skill | `skills/build-value-and-business-case/` | R1 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-007 | `define-outcome-metrics` | Atomic skill | `skills/define-outcome-metrics/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-008 | `create-outcome-based-roadmap` | Atomic skill | `skills/create-outcome-based-roadmap/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-009 | `prioritize-product-opportunities` | Atomic skill | `skills/prioritize-product-opportunities/` | R1 | Retain as atomic skill | Output schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-010 | `map-customer-journey` | Atomic skill | `skills/map-customer-journey/` | R1 | Retain as atomic skill | Output schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-011 | `create-service-blueprint` | Atomic skill | `skills/create-service-blueprint/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-012 | `define-product-scope` | Atomic skill | `skills/define-product-scope/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-013 | `elicit-business-requirements` | Atomic skill | `skills/elicit-business-requirements/` | R1 | Retain as atomic skill | Output schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-014 | `model-business-process` | Atomic skill | `skills/model-business-process/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-015 | `write-user-story` | Atomic skill | `skills/write-user-story/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-016 | `write-use-case` | Atomic skill | `skills/write-use-case/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-017 | `define-business-rule` | Atomic skill | `skills/define-business-rule/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-018 | `define-non-functional-requirements` | Atomic skill | `skills/define-non-functional-requirements/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-019 | `define-acceptance-criteria` | Atomic skill | `skills/define-acceptance-criteria/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-020 | `review-requirement-quality` | Atomic skill | `skills/review-requirement-quality/` | R1 | Retain as atomic skill | Review schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-021 | `build-requirement-traceability` | Atomic skill | `skills/build-requirement-traceability/` | R1 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-022 | `analyze-requirement-impact` | Atomic skill | `skills/analyze-requirement-impact/` | R1 | Retain as atomic skill | Review schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-023 | `control-requirement-change` | Durable workflow | `coe/03-lifecycle-workflows/prd/control-requirement-change/` | R2 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-024 | `refine-product-backlog` | Atomic skill | `skills/refine-product-backlog/` | R1 | Retain as atomic skill | Output schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-025 | `plan-minimum-viable-product` | Atomic skill | `skills/plan-minimum-viable-product/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-026 | `conduct-ux-research` | Atomic skill | `skills/conduct-ux-research/` | R1 | Retain as atomic skill | Output schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-027 | `define-information-architecture` | Atomic skill | `skills/define-information-architecture/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-028 | `create-wireframe-and-prototype` | Atomic skill | `skills/create-wireframe-and-prototype/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-029 | `design-responsive-interface` | Atomic skill | `skills/design-responsive-interface/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-030 | `design-reusable-component` | Atomic skill | `skills/design-reusable-component/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-031 | `govern-design-system` | Standard / profile | `coe/04-knowledge/organization-standards/govern-design-system.md` | R2 | Convert to standard / profile | Applicability matrix + conformance checks | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-032 | `write-accessible-ux-content` | Atomic skill | `skills/write-accessible-ux-content/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-033 | `design-error-and-empty-states` | Atomic skill | `skills/design-error-and-empty-states/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-034 | `design-localized-experience` | Atomic skill | `skills/design-localized-experience/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-035 | `review-web-accessibility` | Atomic skill | `skills/review-web-accessibility/` | R1 | Retain as atomic skill | Review schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-036 | `review-mobile-accessibility` | Atomic skill | `skills/review-mobile-accessibility/` | R1 | Retain as atomic skill | Review schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-037 | `review-document-accessibility` | Atomic skill | `skills/review-document-accessibility/` | R1 | Retain as atomic skill | Review schema + evidence + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |
| PRD-038 | `test-with-assistive-technology` | Atomic skill | `skills/test-with-assistive-technology/` | R1 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Product, UX & Accessibility | V1 Golden/pilot lifecycle |

### 11.5 Architecture and technical design

| ID | Candidate capability | Primary realization | Canonical project location | Risk floor | Proposed disposition | Mandatory companion | Accountable COE | Development lane |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ARC-001 | `identify-architecture-drivers` | Atomic skill | `skills/identify-architecture-drivers/` | R1 | Retain as atomic skill | Output schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-002 | `define-system-context` | Atomic skill | `skills/define-system-context/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-003 | `create-enterprise-architecture` | Atomic skill | `skills/create-enterprise-architecture/` | R1 | Split into atomic skills before authoring | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-004 | `create-solution-architecture` | Atomic skill | `skills/create-solution-architecture/` | R1 | Split into atomic skills before authoring | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-005 | `create-high-level-design` | Atomic skill | `skills/create-high-level-design/` | R1 | Split into atomic skills before authoring | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-006 | `create-low-level-design` | Atomic skill | `skills/create-low-level-design/` | R1 | Split into atomic skills before authoring | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-007 | `record-architecture-decision` | Atomic skill | `skills/record-architecture-decision/` | R1 | Retain as atomic skill | Output schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-008 | `review-architecture-conformance` | Atomic skill | `skills/review-architecture-conformance/` | R1 | Retain as atomic skill | Review schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-009 | `design-domain-model` | Atomic skill | `skills/design-domain-model/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-010 | `design-modular-monolith` | Atomic skill | `skills/design-modular-monolith/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-011 | `design-microservices` | Atomic skill | `skills/design-microservices/` | R1 | Split into atomic skills before authoring | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-012 | `define-service-boundaries` | Atomic skill | `skills/define-service-boundaries/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-013 | `design-event-driven-architecture` | Atomic skill | `skills/design-event-driven-architecture/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-014 | `design-api-led-architecture` | Atomic skill | `skills/design-api-led-architecture/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-015 | `design-data-architecture` | Atomic skill | `skills/design-data-architecture/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-016 | `design-security-architecture` | Atomic skill | `skills/design-security-architecture/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-017 | `design-platform-architecture` | Atomic skill | `skills/design-platform-architecture/` | R1 | Split into atomic skills before authoring | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-018 | `design-ai-solution-architecture` | Atomic skill | `skills/design-ai-solution-architecture/` | R1 | Split into atomic skills before authoring | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-019 | `design-active-active-deployment` | Atomic skill | `skills/design-active-active-deployment/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-020 | `design-high-availability` | Atomic skill | `skills/design-high-availability/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-021 | `design-disaster-recovery` | Atomic skill | `skills/design-disaster-recovery/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-022 | `design-resilience-patterns` | Atomic skill | `skills/design-resilience-patterns/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-023 | `design-idempotent-processing` | Atomic skill | `skills/design-idempotent-processing/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-024 | `design-saga-and-compensation` | Atomic skill | `skills/design-saga-and-compensation/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-025 | `design-outbox-and-inbox` | Atomic skill | `skills/design-outbox-and-inbox/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-026 | `design-capacity-and-scalability` | Atomic skill | `skills/design-capacity-and-scalability/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-027 | `design-multi-tenancy` | Atomic skill | `skills/design-multi-tenancy/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-028 | `design-configuration-management` | Atomic skill | `skills/design-configuration-management/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-029 | `design-data-retention-and-archival` | Atomic skill | `skills/design-data-retention-and-archival/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-030 | `design-legacy-modernization` | Atomic skill | `skills/design-legacy-modernization/` | R1 | Split into atomic skills before authoring | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-031 | `design-migration-and-cutover` | Atomic skill | `skills/design-migration-and-cutover/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-032 | `assess-technology-option` | Atomic skill | `skills/assess-technology-option/` | R1 | Retain as atomic skill | Review schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-033 | `create-technology-radar-entry` | Atomic skill | `skills/create-technology-radar-entry/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-034 | `design-reusable-platform-capability` | Atomic skill | `skills/design-reusable-platform-capability/` | R1 | Split into atomic skills before authoring | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-035 | `design-public-website-platform` | Atomic skill | `skills/design-public-website-platform/` | R1 | Split into atomic skills before authoring | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |
| ARC-036 | `design-cdn-and-edge-architecture` | Atomic skill | `skills/design-cdn-and-edge-architecture/` | R1 | Retain as atomic skill | Template/schema + evidence + evals | Architecture | V1 Golden/pilot lifecycle |

### 11.6 Java, Spring Boot, Angular, mobile and reusable components

| ID | Candidate capability | Primary realization | Canonical project location | Risk floor | Proposed disposition | Mandatory companion | Accountable COE | Development lane |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DEV-001 | `establish-java-coding-standard` | Standard / profile | `coe/04-knowledge/organization-standards/establish-java-coding-standard.md` | R2 | Convert to standard / profile | Applicability matrix + conformance checks | Application Engineering | V2 Pilot technology |
| DEV-002 | `design-java-module` | Atomic skill | `skills/design-java-module/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Application Engineering | V2 Pilot technology |
| DEV-003 | `implement-java-domain-logic` | Atomic skill | `skills/implement-java-domain-logic/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-004 | `implement-java-concurrency` | Atomic skill | `skills/implement-java-concurrency/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-005 | `implement-reactive-java-flow` | Atomic skill | `skills/implement-reactive-java-flow/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-006 | `configure-jvm-runtime` | Atomic skill | `skills/configure-jvm-runtime/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-007 | `tune-jvm-memory-and-gc` | Atomic skill | `skills/tune-jvm-memory-and-gc/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-008 | `build-spring-boot-service` | Atomic skill | `skills/build-spring-boot-service/` | R2 | Split into atomic skills before authoring | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-009 | `configure-spring-dependency-injection` | Atomic skill | `skills/configure-spring-dependency-injection/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-010 | `implement-spring-validation` | Atomic skill | `skills/implement-spring-validation/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-011 | `implement-spring-security` | Atomic skill | `skills/implement-spring-security/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-012 | `implement-spring-data-access` | Atomic skill | `skills/implement-spring-data-access/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-013 | `manage-spring-transaction` | Atomic skill | `skills/manage-spring-transaction/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Application Engineering | V2 Pilot technology |
| DEV-014 | `implement-resilient-http-client` | Atomic skill | `skills/implement-resilient-http-client/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-015 | `implement-application-error-handling` | Atomic skill | `skills/implement-application-error-handling/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-016 | `implement-structured-application-logging` | Atomic skill | `skills/implement-structured-application-logging/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-017 | `manage-application-configuration` | Atomic skill | `skills/manage-application-configuration/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Application Engineering | V2 Pilot technology |
| DEV-018 | `review-java-code` | Atomic skill | `skills/review-java-code/` | R2 | Retain as atomic skill | Review schema + evidence + evals | Application Engineering | V2 Pilot technology |
| DEV-019 | `optimize-java-code` | Atomic skill | `skills/optimize-java-code/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Application Engineering | V2 Pilot technology |
| DEV-020 | `upgrade-java-or-spring-version` | Atomic skill | `skills/upgrade-java-or-spring-version/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Application Engineering | V2 Pilot technology |
| DEV-021 | `build-angular-application` | Atomic skill | `skills/build-angular-application/` | R2 | Split into atomic skills before authoring | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-022 | `design-angular-feature` | Atomic skill | `skills/design-angular-feature/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Application Engineering | V2 Pilot technology |
| DEV-023 | `build-angular-standalone-component` | Atomic skill | `skills/build-angular-standalone-component/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-024 | `manage-angular-state` | Atomic skill | `skills/manage-angular-state/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Application Engineering | V2 Pilot technology |
| DEV-025 | `implement-angular-reactive-form` | Atomic skill | `skills/implement-angular-reactive-form/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-026 | `implement-angular-http-client` | Atomic skill | `skills/implement-angular-http-client/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-027 | `secure-angular-application` | Atomic skill | `skills/secure-angular-application/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Application Engineering | V2 Pilot technology |
| DEV-028 | `optimize-angular-performance` | Atomic skill | `skills/optimize-angular-performance/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Application Engineering | V2 Pilot technology |
| DEV-029 | `test-angular-component` | Atomic skill | `skills/test-angular-component/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-030 | `build-web-component` | Atomic skill | `skills/build-web-component/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-031 | `design-microfrontend` | Atomic skill | `skills/design-microfrontend/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Application Engineering | V2 Pilot technology |
| DEV-032 | `integrate-microfrontends` | Atomic skill | `skills/integrate-microfrontends/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-033 | `version-reusable-ui-component` | Atomic skill | `skills/version-reusable-ui-component/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Application Engineering | V2 Pilot technology |
| DEV-034 | `build-progressive-web-app` | Atomic skill | `skills/build-progressive-web-app/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-035 | `implement-web-internationalization` | Atomic skill | `skills/implement-web-internationalization/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-036 | `build-mobile-application-shell` | Atomic skill | `skills/build-mobile-application-shell/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-037 | `design-mobile-offline-sync` | Atomic skill | `skills/design-mobile-offline-sync/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Application Engineering | V2 Pilot technology |
| DEV-038 | `secure-mobile-local-storage` | Atomic skill | `skills/secure-mobile-local-storage/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Application Engineering | V2 Pilot technology |
| DEV-039 | `implement-mobile-deep-link` | Atomic skill | `skills/implement-mobile-deep-link/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Application Engineering | V2 Pilot technology |
| DEV-040 | `prepare-mobile-store-release` | Atomic skill | `skills/prepare-mobile-store-release/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Application Engineering | V2 Pilot technology |

### 11.7 APIs, integration, messaging and file exchange

| ID | Candidate capability | Primary realization | Canonical project location | Risk floor | Proposed disposition | Mandatory companion | Accountable COE | Development lane |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| INT-001 | `design-rest-api` | Atomic skill | `skills/design-rest-api/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-002 | `author-openapi-contract` | Atomic skill | `skills/author-openapi-contract/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-003 | `review-api-contract` | Atomic skill | `skills/review-api-contract/` | R2 | Retain as atomic skill | Review schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-004 | `version-api-compatibly` | Atomic skill | `skills/version-api-compatibly/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-005 | `secure-api-endpoint` | Atomic skill | `skills/secure-api-endpoint/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-006 | `implement-api-idempotency` | Atomic skill | `skills/implement-api-idempotency/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-007 | `implement-api-pagination-filtering` | Atomic skill | `skills/implement-api-pagination-filtering/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-008 | `implement-api-rate-limit` | Atomic skill | `skills/implement-api-rate-limit/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-009 | `design-graphql-api` | Atomic skill | `skills/design-graphql-api/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-010 | `design-grpc-interface` | Atomic skill | `skills/design-grpc-interface/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-011 | `design-event-contract` | Atomic skill | `skills/design-event-contract/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-012 | `author-asyncapi-contract` | Atomic skill | `skills/author-asyncapi-contract/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-013 | `govern-schema-evolution` | Policy | `coe/07-policies-hardening/int/govern-schema-evolution.md` | R2 | Convert to policy | Control mapping + enforcement + exception workflow | Integration Engineering | V2 Pilot technology |
| INT-014 | `build-consumer-driven-contract` | Atomic skill | `skills/build-consumer-driven-contract/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-015 | `implement-kafka-producer` | Atomic skill | `skills/implement-kafka-producer/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-016 | `implement-kafka-consumer` | Atomic skill | `skills/implement-kafka-consumer/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-017 | `design-kafka-topic-and-partitions` | Atomic skill | `skills/design-kafka-topic-and-partitions/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-018 | `configure-kafka-schema-registry` | Atomic skill | `skills/configure-kafka-schema-registry/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-019 | `implement-kafka-delivery-semantics` | Atomic skill | `skills/implement-kafka-delivery-semantics/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-020 | `handle-kafka-retry-and-dlq` | Atomic skill | `skills/handle-kafka-retry-and-dlq/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-021 | `tune-kafka-consumer-scaling` | Atomic skill | `skills/tune-kafka-consumer-scaling/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-022 | `diagnose-kafka-lag-and-rebalance` | Atomic skill | `skills/diagnose-kafka-lag-and-rebalance/` | R2 | Retain as atomic skill | Review schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-023 | `secure-kafka-cluster-and-client` | Atomic skill | `skills/secure-kafka-cluster-and-client/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-024 | `plan-kafka-disaster-recovery` | Atomic skill | `skills/plan-kafka-disaster-recovery/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-025 | `integrate-ibm-mq` | Atomic skill | `skills/integrate-ibm-mq/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-026 | `configure-ibm-mq-queue-manager` | Atomic skill | `skills/configure-ibm-mq-queue-manager/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-027 | `secure-ibm-mq` | Atomic skill | `skills/secure-ibm-mq/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-028 | `diagnose-ibm-mq-message-flow` | Atomic skill | `skills/diagnose-ibm-mq-message-flow/` | R2 | Retain as atomic skill | Review schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-029 | `integrate-activemq-artemis` | Atomic skill | `skills/integrate-activemq-artemis/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-030 | `configure-activemq-artemis` | Atomic skill | `skills/configure-activemq-artemis/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-031 | `secure-activemq-artemis` | Atomic skill | `skills/secure-activemq-artemis/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-032 | `build-apache-camel-route` | Atomic skill | `skills/build-apache-camel-route/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-033 | `implement-camel-error-handling` | Atomic skill | `skills/implement-camel-error-handling/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-034 | `test-apache-camel-route` | Atomic skill | `skills/test-apache-camel-route/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-035 | `integrate-rest-and-soap` | Atomic skill | `skills/integrate-rest-and-soap/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-036 | `integrate-secure-sftp` | Atomic skill | `skills/integrate-secure-sftp/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-037 | `validate-and-reconcile-file-transfer` | Atomic skill | `skills/validate-and-reconcile-file-transfer/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-038 | `design-message-replay` | Atomic skill | `skills/design-message-replay/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Integration Engineering | V2 Pilot technology |
| INT-039 | `implement-correlation-and-tracing` | Atomic skill | `skills/implement-correlation-and-tracing/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |
| INT-040 | `test-messaging-failure-modes` | Atomic skill | `skills/test-messaging-failure-modes/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Integration Engineering | V2 Pilot technology |

### 11.8 Databases, cache, data engineering and reporting

| ID | Candidate capability | Primary realization | Canonical project location | Risk floor | Proposed disposition | Mandatory companion | Accountable COE | Development lane |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| DAT-001 | `design-relational-data-model` | Atomic skill | `skills/design-relational-data-model/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-002 | `review-database-schema` | Atomic skill | `skills/review-database-schema/` | R2 | Retain as atomic skill | Review schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-003 | `write-secure-sql` | Atomic skill | `skills/write-secure-sql/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-004 | `optimize-sql-query` | Atomic skill | `skills/optimize-sql-query/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-005 | `design-database-indexes` | Atomic skill | `skills/design-database-indexes/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-006 | `design-database-partitioning` | Atomic skill | `skills/design-database-partitioning/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-007 | `manage-database-transaction` | Atomic skill | `skills/manage-database-transaction/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-008 | `manage-schema-migration` | Atomic skill | `skills/manage-schema-migration/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-009 | `validate-data-migration` | Atomic skill | `skills/validate-data-migration/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-010 | `configure-database-connection-pool` | Atomic skill | `skills/configure-database-connection-pool/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-011 | `harden-oracle-database-client` | Atomic skill | `skills/harden-oracle-database-client/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-012 | `develop-oracle-plsql` | Atomic skill | `skills/develop-oracle-plsql/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-013 | `tune-oracle-workload` | Atomic skill | `skills/tune-oracle-workload/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-014 | `design-oracle-rac-and-dataguard` | Atomic skill | `skills/design-oracle-rac-and-dataguard/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-015 | `develop-postgresql-solution` | Atomic skill | `skills/develop-postgresql-solution/` | R2 | Split into atomic skills before authoring | Output schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-016 | `tune-postgresql-workload` | Atomic skill | `skills/tune-postgresql-workload/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-017 | `develop-mysql-solution` | Atomic skill | `skills/develop-mysql-solution/` | R2 | Split into atomic skills before authoring | Output schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-018 | `tune-mysql-workload` | Atomic skill | `skills/tune-mysql-workload/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-019 | `use-h2-for-approved-test-scope` | Standard / profile | `coe/04-knowledge/organization-standards/use-h2-for-approved-test-scope.md` | R2 | Convert to standard / profile | Applicability matrix + conformance checks | Data, Cache & Reporting | V2 Pilot technology |
| DAT-020 | `design-database-backup-and-restore` | Atomic skill | `skills/design-database-backup-and-restore/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-021 | `mask-and-tokenize-test-data` | Atomic skill | `skills/mask-and-tokenize-test-data/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-022 | `implement-change-data-capture` | Atomic skill | `skills/implement-change-data-capture/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-023 | `assess-data-quality` | Atomic skill | `skills/assess-data-quality/` | R2 | Retain as atomic skill | Review schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-024 | `define-data-contract` | Atomic skill | `skills/define-data-contract/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-025 | `capture-data-lineage` | Atomic skill | `skills/capture-data-lineage/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-026 | `design-data-retention-and-purge` | Atomic skill | `skills/design-data-retention-and-purge/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-027 | `design-distributed-cache` | Atomic skill | `skills/design-distributed-cache/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-028 | `implement-red-hat-data-grid-cache` | Atomic skill | `skills/implement-red-hat-data-grid-cache/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-029 | `implement-hazelcast-cache` | Atomic skill | `skills/implement-hazelcast-cache/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-030 | `implement-redis-cache` | Atomic skill | `skills/implement-redis-cache/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-031 | `implement-local-jvm-cache` | Atomic skill | `skills/implement-local-jvm-cache/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-032 | `design-cache-key-and-ttl` | Atomic skill | `skills/design-cache-key-and-ttl/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-033 | `prevent-cache-stampede` | Atomic skill | `skills/prevent-cache-stampede/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-034 | `design-cache-invalidation` | Atomic skill | `skills/design-cache-invalidation/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-035 | `test-cache-consistency-and-failover` | Atomic skill | `skills/test-cache-consistency-and-failover/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-036 | `tune-cache-performance` | Atomic skill | `skills/tune-cache-performance/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-037 | `harden-cache-platform` | Atomic skill | `skills/harden-cache-platform/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-038 | `design-reporting-architecture` | Atomic skill | `skills/design-reporting-architecture/` | R2 | Split into atomic skills before authoring | Template/schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-039 | `build-cognos-model-or-package` | Atomic skill | `skills/build-cognos-model-or-package/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-040 | `build-cognos-report` | Atomic skill | `skills/build-cognos-report/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-041 | `build-dynamic-reporting-engine` | Atomic skill | `skills/build-dynamic-reporting-engine/` | R2 | Split into atomic skills before authoring | Tool profile + output schema + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-042 | `enforce-report-row-level-security` | Atomic skill | `skills/enforce-report-row-level-security/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-043 | `tune-reporting-performance` | Atomic skill | `skills/tune-reporting-performance/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-044 | `validate-report-accuracy` | Atomic skill | `skills/validate-report-accuracy/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |
| DAT-045 | `make-report-output-accessible` | Atomic skill | `skills/make-report-output-accessible/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Data, Cache & Reporting | V2 Pilot technology |

### 11.9 BAMOE, workflow, rules and optimization

| ID | Candidate capability | Primary realization | Canonical project location | Risk floor | Proposed disposition | Mandatory companion | Accountable COE | Development lane |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| WFL-001 | `model-bpmn-workflow` | Atomic skill | `skills/model-bpmn-workflow/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-002 | `implement-bamoe-process` | Atomic skill | `skills/implement-bamoe-process/` | R2 | Split into atomic skills before authoring | Tool profile + output schema + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-003 | `implement-bamoe-human-task` | Atomic skill | `skills/implement-bamoe-human-task/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-004 | `design-role-based-task-assignment` | Atomic skill | `skills/design-role-based-task-assignment/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-005 | `design-dynamic-task-assignment` | Atomic skill | `skills/design-dynamic-task-assignment/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-006 | `implement-maker-checker-workflow` | Atomic skill | `skills/implement-maker-checker-workflow/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-007 | `implement-task-delegation-and-escalation` | Atomic skill | `skills/implement-task-delegation-and-escalation/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-008 | `implement-workflow-timers` | Atomic skill | `skills/implement-workflow-timers/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-009 | `implement-workflow-subprocess` | Atomic skill | `skills/implement-workflow-subprocess/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-010 | `manage-workflow-correlation` | Atomic skill | `skills/manage-workflow-correlation/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-011 | `persist-workflow-state` | Atomic skill | `skills/persist-workflow-state/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-012 | `deploy-bamoe-for-multiple-pods` | Atomic skill | `skills/deploy-bamoe-for-multiple-pods/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-013 | `migrate-workflow-version` | Atomic skill | `skills/migrate-workflow-version/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-014 | `test-workflow-paths-and-recovery` | Atomic skill | `skills/test-workflow-paths-and-recovery/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-015 | `model-dmn-decision` | Atomic skill | `skills/model-dmn-decision/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-016 | `implement-drools-rule` | Atomic skill | `skills/implement-drools-rule/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-017 | `govern-rule-version-and-activation` | Policy | `coe/07-policies-hardening/wfl/govern-rule-version-and-activation.md` | R3 | Convert to policy | Control mapping + enforcement + exception workflow | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-018 | `test-rules-and-decisions` | Atomic skill | `skills/test-rules-and-decisions/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-019 | `model-optimization-problem` | Atomic skill | `skills/model-optimization-problem/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-020 | `implement-optaplanner-solver` | Atomic skill | `skills/implement-optaplanner-solver/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-021 | `tune-optimization-solver` | Atomic skill | `skills/tune-optimization-solver/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Workflow, Rules & Optimization | V2 Pilot technology |
| WFL-022 | `validate-optimization-result` | Atomic skill | `skills/validate-optimization-result/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Workflow, Rules & Optimization | V2 Pilot technology |

### 11.10 AI engineering and AI features in software

| ID | Candidate capability | Primary realization | Canonical project location | Risk floor | Proposed disposition | Mandatory companion | Accountable COE | Development lane |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AIE-001 | `assess-ai-use-case` | Atomic skill | `skills/assess-ai-use-case/` | R2 | Retain as atomic skill | Review schema + evidence + evals | AI Engineering & Model Risk | F0 Operating kernel |
| AIE-002 | `classify-ai-system-risk` | Atomic skill | `skills/classify-ai-system-risk/` | R3 | Retain as atomic skill | Output schema + evidence + evals | AI Engineering & Model Risk | F0 Operating kernel |
| AIE-003 | `select-model-and-provider` | Atomic skill | `skills/select-model-and-provider/` | R3 | Retain as atomic skill | Output schema + evidence + evals | AI Engineering & Model Risk | F0 Operating kernel |
| AIE-004 | `design-model-gateway` | Atomic skill | `skills/design-model-gateway/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | AI Engineering & Model Risk | F0 Operating kernel |
| AIE-005 | `design-prompt-contract` | Atomic skill | `skills/design-prompt-contract/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | AI Engineering & Model Risk | F0 Operating kernel |
| AIE-006 | `version-and-test-prompt` | Atomic skill | `skills/version-and-test-prompt/` | R2 | Retain as atomic skill | Output schema + evidence + evals | AI Engineering & Model Risk | F0 Operating kernel |
| AIE-007 | `design-rag-solution` | Atomic skill | `skills/design-rag-solution/` | R2 | Split into atomic skills before authoring | Template/schema + evidence + evals | AI Engineering & Model Risk | D5 Banking and advanced AI |
| AIE-008 | `prepare-rag-knowledge-source` | Atomic skill | `skills/prepare-rag-knowledge-source/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | AI Engineering & Model Risk | D5 Banking and advanced AI |
| AIE-009 | `build-document-ingestion-pipeline` | Atomic skill | `skills/build-document-ingestion-pipeline/` | R2 | Split into atomic skills before authoring | Tool profile + output schema + evals | AI Engineering & Model Risk | D5 Banking and advanced AI |
| AIE-010 | `select-embedding-and-vector-store` | Atomic skill | `skills/select-embedding-and-vector-store/` | R2 | Retain as atomic skill | Output schema + evidence + evals | AI Engineering & Model Risk | D5 Banking and advanced AI |
| AIE-011 | `evaluate-retrieval-quality` | Eval suite | `coe/09-evals/evaluate-retrieval-quality/` | R2 | Convert to eval suite | Fixtures + hidden invariants + grader + baselines | AI Engineering & Model Risk | D5 Banking and advanced AI |
| AIE-012 | `ground-and-cite-ai-output` | Atomic skill | `skills/ground-and-cite-ai-output/` | R2 | Retain as atomic skill | Output schema + evidence + evals | AI Engineering & Model Risk | D5 Banking and advanced AI |
| AIE-013 | `validate-model-output` | Eval suite | `coe/09-evals/validate-model-output/` | R3 | Convert to eval suite | Fixtures + hidden invariants + grader + baselines | AI Engineering & Model Risk | D5 Banking and advanced AI |
| AIE-014 | `implement-ai-guardrail` | Atomic skill | `skills/implement-ai-guardrail/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | AI Engineering & Model Risk | F0 Operating kernel |
| AIE-015 | `defend-against-prompt-injection` | Atomic skill | `skills/defend-against-prompt-injection/` | R3 | Retain as atomic skill | Output schema + evidence + evals | AI Engineering & Model Risk | F0 Operating kernel |
| AIE-016 | `constrain-agent-tool-use` | Policy | `coe/07-policies-hardening/aie/constrain-agent-tool-use.md` | R3 | Convert to policy | Control mapping + enforcement + exception workflow | AI Engineering & Model Risk | F0 Operating kernel |
| AIE-017 | `design-agent-memory` | Atomic skill | `skills/design-agent-memory/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | AI Engineering & Model Risk | F0 Operating kernel |
| AIE-018 | `secure-mcp-integration` | Atomic skill | `skills/secure-mcp-integration/` | R3 | Retain as atomic skill | Output schema + evidence + evals | AI Engineering & Model Risk | F0 Operating kernel |
| AIE-019 | `design-human-in-the-loop` | Atomic skill | `skills/design-human-in-the-loop/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | AI Engineering & Model Risk | F0 Operating kernel |
| AIE-020 | `evaluate-ai-feature` | Eval suite | `coe/09-evals/evaluate-ai-feature/` | R3 | Convert to eval suite | Fixtures + hidden invariants + grader + baselines | AI Engineering & Model Risk | D5 Banking and advanced AI |
| AIE-021 | `red-team-ai-feature` | Eval suite | `coe/09-evals/red-team-ai-feature/` | R3 | Convert to eval suite | Fixtures + hidden invariants + grader + baselines | AI Engineering & Model Risk | D5 Banking and advanced AI |
| AIE-022 | `monitor-model-quality-and-drift` | Atomic skill | `skills/monitor-model-quality-and-drift/` | R3 | Retain as atomic skill | Output schema + evidence + evals | AI Engineering & Model Risk | D5 Banking and advanced AI |
| AIE-023 | `monitor-ai-cost-and-latency` | Atomic skill | `skills/monitor-ai-cost-and-latency/` | R2 | Retain as atomic skill | Output schema + evidence + evals | AI Engineering & Model Risk | F0 Operating kernel |
| AIE-024 | `implement-model-fallback` | Atomic skill | `skills/implement-model-fallback/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | AI Engineering & Model Risk | F0 Operating kernel |
| AIE-025 | `assess-ai-explainability` | Atomic skill | `skills/assess-ai-explainability/` | R3 | Retain as atomic skill | Review schema + evidence + evals | AI Engineering & Model Risk | F0 Operating kernel |
| AIE-026 | `protect-personal-data-in-ai` | Atomic skill | `skills/protect-personal-data-in-ai/` | R3 | Retain as atomic skill | Output schema + evidence + evals | AI Engineering & Model Risk | F0 Operating kernel |
| AIE-027 | `assess-training-data-and-content-rights` | Atomic skill | `skills/assess-training-data-and-content-rights/` | R3 | Retain as atomic skill | Review schema + evidence + evals | AI Engineering & Model Risk | F0 Operating kernel |
| AIE-028 | `generate-code-with-ai-safely` | Atomic skill | `skills/generate-code-with-ai-safely/` | R2 | Retain as atomic skill | Output schema + evidence + evals | AI Engineering & Model Risk | D5 Banking and advanced AI |
| AIE-029 | `review-ai-generated-code` | Atomic skill | `skills/review-ai-generated-code/` | R2 | Retain as atomic skill | Review schema + evidence + evals | AI Engineering & Model Risk | D5 Banking and advanced AI |
| AIE-030 | `generate-test-cases-with-ai` | Atomic skill | `skills/generate-test-cases-with-ai/` | R2 | Retain as atomic skill | Output schema + evidence + evals | AI Engineering & Model Risk | D5 Banking and advanced AI |
| AIE-031 | `generate-documentation-with-ai` | Atomic skill | `skills/generate-documentation-with-ai/` | R2 | Retain as atomic skill | Output schema + evidence + evals | AI Engineering & Model Risk | D5 Banking and advanced AI |
| AIE-032 | `register-model-prompt-dataset-and-eval` | Operating service | `runtime/services/register-model-prompt-dataset-and-eval/` | R3 | Convert to operating service | API + SLO + threat model + runbook | AI Engineering & Model Risk | F0 Operating kernel |

### 11.11 Quality engineering and test automation

| ID | Candidate capability | Primary realization | Canonical project location | Risk floor | Proposed disposition | Mandatory companion | Accountable COE | Development lane |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| QUA-001 | `create-test-strategy` | Atomic skill | `skills/create-test-strategy/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Quality Engineering | A3 Independent assurance |
| QUA-002 | `derive-risk-based-test-scope` | Atomic skill | `skills/derive-risk-based-test-scope/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Quality Engineering | A3 Independent assurance |
| QUA-003 | `create-test-plan` | Atomic skill | `skills/create-test-plan/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Quality Engineering | A3 Independent assurance |
| QUA-004 | `design-test-case` | Atomic skill | `skills/design-test-case/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Quality Engineering | A3 Independent assurance |
| QUA-005 | `build-test-traceability` | Atomic skill | `skills/build-test-traceability/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-006 | `prepare-test-data` | Atomic skill | `skills/prepare-test-data/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Quality Engineering | A3 Independent assurance |
| QUA-007 | `provision-test-environment` | Atomic skill | `skills/provision-test-environment/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-008 | `implement-unit-test` | Atomic skill | `skills/implement-unit-test/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-009 | `implement-component-test` | Atomic skill | `skills/implement-component-test/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-010 | `implement-api-test` | Atomic skill | `skills/implement-api-test/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-011 | `implement-contract-test` | Atomic skill | `skills/implement-contract-test/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-012 | `implement-integration-test` | Atomic skill | `skills/implement-integration-test/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-013 | `implement-end-to-end-test` | Atomic skill | `skills/implement-end-to-end-test/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-014 | `implement-ui-automation` | Atomic skill | `skills/implement-ui-automation/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-015 | `implement-mobile-automation` | Atomic skill | `skills/implement-mobile-automation/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-016 | `test-database-behavior` | Atomic skill | `skills/test-database-behavior/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-017 | `test-kafka-message-flow` | Atomic skill | `skills/test-kafka-message-flow/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-018 | `test-mq-message-flow` | Atomic skill | `skills/test-mq-message-flow/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-019 | `test-batch-and-scheduler` | Atomic skill | `skills/test-batch-and-scheduler/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-020 | `test-workflow-and-rules` | Atomic skill | `skills/test-workflow-and-rules/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-021 | `test-data-migration` | Atomic skill | `skills/test-data-migration/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-022 | `test-backward-compatibility` | Atomic skill | `skills/test-backward-compatibility/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-023 | `build-regression-suite` | Atomic skill | `skills/build-regression-suite/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-024 | `run-exploratory-testing` | Atomic skill | `skills/run-exploratory-testing/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-025 | `test-negative-and-boundary-cases` | Atomic skill | `skills/test-negative-and-boundary-cases/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-026 | `implement-property-based-test` | Atomic skill | `skills/implement-property-based-test/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-027 | `implement-fuzz-test` | Atomic skill | `skills/implement-fuzz-test/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-028 | `implement-mutation-testing` | Atomic skill | `skills/implement-mutation-testing/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-029 | `build-service-virtualization` | Atomic skill | `skills/build-service-virtualization/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-030 | `stabilize-flaky-test` | Atomic skill | `skills/stabilize-flaky-test/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Quality Engineering | A3 Independent assurance |
| QUA-031 | `review-automation-framework` | Atomic skill | `skills/review-automation-framework/` | R2 | Retain as atomic skill | Review schema + evidence + evals | Quality Engineering | A3 Independent assurance |
| QUA-032 | `triage-defect` | Atomic skill | `skills/triage-defect/` | R2 | Retain as atomic skill | Review schema + evidence + evals | Quality Engineering | A3 Independent assurance |
| QUA-033 | `verify-defect-fix` | Atomic skill | `skills/verify-defect-fix/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-034 | `produce-test-summary-report` | Atomic skill | `skills/produce-test-summary-report/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Quality Engineering | A3 Independent assurance |
| QUA-035 | `conduct-user-acceptance-readiness` | Quality gate | `coe/10-quality-gates-evidence/gates/conduct-user-acceptance-readiness/` | R3 | Convert to quality gate | Criteria + evidence schema + waiver/reopen rules | Quality Engineering | A3 Independent assurance |
| QUA-036 | `execute-production-smoke-test` | Atomic skill | `skills/execute-production-smoke-test/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Quality Engineering | A3 Independent assurance |
| QUA-037 | `reconcile-post-release-business-results` | Atomic skill | `skills/reconcile-post-release-business-results/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Quality Engineering | A3 Independent assurance |
| QUA-038 | `review-test-evidence-independently` | Eval suite | `coe/09-evals/review-test-evidence-independently/` | R3 | Convert to eval suite | Fixtures + hidden invariants + grader + baselines | Quality Engineering | A3 Independent assurance |

### 11.12 Performance, capacity, resilience and chaos

| ID | Candidate capability | Primary realization | Canonical project location | Risk floor | Proposed disposition | Mandatory companion | Accountable COE | Development lane |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PRF-001 | `define-performance-nfr` | Atomic skill | `skills/define-performance-nfr/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Performance & Resilience | A3 Independent assurance |
| PRF-002 | `model-production-workload` | Atomic skill | `skills/model-production-workload/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Performance & Resilience | A3 Independent assurance |
| PRF-003 | `create-performance-test-plan` | Atomic skill | `skills/create-performance-test-plan/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Performance & Resilience | A3 Independent assurance |
| PRF-004 | `build-performance-test-script` | Atomic skill | `skills/build-performance-test-script/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Performance & Resilience | A3 Independent assurance |
| PRF-005 | `prepare-performance-test-data` | Atomic skill | `skills/prepare-performance-test-data/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Performance & Resilience | A3 Independent assurance |
| PRF-006 | `run-load-test` | Atomic skill | `skills/run-load-test/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Performance & Resilience | A3 Independent assurance |
| PRF-007 | `run-stress-test` | Atomic skill | `skills/run-stress-test/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Performance & Resilience | A3 Independent assurance |
| PRF-008 | `run-spike-test` | Atomic skill | `skills/run-spike-test/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Performance & Resilience | A3 Independent assurance |
| PRF-009 | `run-endurance-test` | Atomic skill | `skills/run-endurance-test/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Performance & Resilience | A3 Independent assurance |
| PRF-010 | `run-volume-test` | Atomic skill | `skills/run-volume-test/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Performance & Resilience | A3 Independent assurance |
| PRF-011 | `run-scalability-test` | Atomic skill | `skills/run-scalability-test/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Performance & Resilience | A3 Independent assurance |
| PRF-012 | `run-concurrency-test` | Atomic skill | `skills/run-concurrency-test/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Performance & Resilience | A3 Independent assurance |
| PRF-013 | `run-failover-performance-test` | Atomic skill | `skills/run-failover-performance-test/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Performance & Resilience | A3 Independent assurance |
| PRF-014 | `profile-application-runtime` | Atomic skill | `skills/profile-application-runtime/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Performance & Resilience | A3 Independent assurance |
| PRF-015 | `analyze-jvm-performance` | Atomic skill | `skills/analyze-jvm-performance/` | R2 | Retain as atomic skill | Review schema + evidence + evals | Performance & Resilience | A3 Independent assurance |
| PRF-016 | `analyze-database-performance` | Atomic skill | `skills/analyze-database-performance/` | R2 | Retain as atomic skill | Review schema + evidence + evals | Performance & Resilience | A3 Independent assurance |
| PRF-017 | `analyze-kafka-performance` | Atomic skill | `skills/analyze-kafka-performance/` | R2 | Retain as atomic skill | Review schema + evidence + evals | Performance & Resilience | A3 Independent assurance |
| PRF-018 | `analyze-openshift-performance` | Atomic skill | `skills/analyze-openshift-performance/` | R2 | Retain as atomic skill | Review schema + evidence + evals | Performance & Resilience | A3 Independent assurance |
| PRF-019 | `diagnose-end-to-end-bottleneck` | Atomic skill | `skills/diagnose-end-to-end-bottleneck/` | R2 | Retain as atomic skill | Review schema + evidence + evals | Performance & Resilience | A3 Independent assurance |
| PRF-020 | `create-capacity-model` | Atomic skill | `skills/create-capacity-model/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Performance & Resilience | A3 Independent assurance |
| PRF-021 | `forecast-capacity-demand` | Atomic skill | `skills/forecast-capacity-demand/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Performance & Resilience | A3 Independent assurance |
| PRF-022 | `design-resilience-experiment` | Atomic skill | `skills/design-resilience-experiment/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Performance & Resilience | A3 Independent assurance |
| PRF-023 | `run-controlled-chaos-test` | Atomic skill | `skills/run-controlled-chaos-test/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Performance & Resilience | A3 Independent assurance |
| PRF-024 | `validate-recovery-objectives` | Atomic skill | `skills/validate-recovery-objectives/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Performance & Resilience | A3 Independent assurance |
| PRF-025 | `report-performance-gate-result` | Quality gate | `coe/10-quality-gates-evidence/gates/report-performance-gate-result/` | R3 | Convert to quality gate | Criteria + evidence schema + waiver/reopen rules | Performance & Resilience | A3 Independent assurance |

### 11.13 Security, privacy and software-supply-chain assurance

| ID | Candidate capability | Primary realization | Canonical project location | Risk floor | Proposed disposition | Mandatory companion | Accountable COE | Development lane |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| SEC-001 | `define-security-requirements` | Atomic skill | `skills/define-security-requirements/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-002 | `create-data-flow-diagram` | Atomic skill | `skills/create-data-flow-diagram/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-003 | `perform-threat-model` | Atomic skill | `skills/perform-threat-model/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-004 | `write-abuse-and-misuse-case` | Atomic skill | `skills/write-abuse-and-misuse-case/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-005 | `review-secure-architecture` | Atomic skill | `skills/review-secure-architecture/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-006 | `design-authentication-control` | Atomic skill | `skills/design-authentication-control/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-007 | `design-authorization-control` | Atomic skill | `skills/design-authorization-control/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-008 | `design-privileged-access-control` | Atomic skill | `skills/design-privileged-access-control/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-009 | `design-cryptographic-control` | Atomic skill | `skills/design-cryptographic-control/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-010 | `manage-key-and-certificate-lifecycle` | Atomic skill | `skills/manage-key-and-certificate-lifecycle/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-011 | `manage-application-secrets` | Atomic skill | `skills/manage-application-secrets/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-012 | `validate-input-and-output` | Atomic skill | `skills/validate-input-and-output/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-013 | `prevent-injection` | Atomic skill | `skills/prevent-injection/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-014 | `prevent-ssrf` | Atomic skill | `skills/prevent-ssrf/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-015 | `secure-session-and-cookie` | Atomic skill | `skills/secure-session-and-cookie/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-016 | `secure-file-upload-and-download` | Atomic skill | `skills/secure-file-upload-and-download/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-017 | `secure-rest-api` | Atomic skill | `skills/secure-rest-api/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-018 | `secure-event-and-message-flow` | Atomic skill | `skills/secure-event-and-message-flow/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-019 | `review-secure-code` | Atomic skill | `skills/review-secure-code/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-020 | `run-sast-and-normalize-results` | Atomic skill | `skills/run-sast-and-normalize-results/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-021 | `run-sca-and-normalize-results` | Atomic skill | `skills/run-sca-and-normalize-results/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-022 | `run-secret-scan` | Atomic skill | `skills/run-secret-scan/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-023 | `run-iac-scan` | Atomic skill | `skills/run-iac-scan/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-024 | `run-container-image-scan` | Atomic skill | `skills/run-container-image-scan/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-025 | `run-kubernetes-and-openshift-scan` | Atomic skill | `skills/run-kubernetes-and-openshift-scan/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-026 | `run-dast-and-normalize-results` | Atomic skill | `skills/run-dast-and-normalize-results/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-027 | `run-api-security-test` | Atomic skill | `skills/run-api-security-test/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-028 | `run-mobile-security-test` | Atomic skill | `skills/run-mobile-security-test/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-029 | `coordinate-vapt` | Atomic skill | `skills/coordinate-vapt/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-030 | `validate-vulnerability-remediation` | Atomic skill | `skills/validate-vulnerability-remediation/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-031 | `triage-vulnerability-risk` | Atomic skill | `skills/triage-vulnerability-risk/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-032 | `calculate-vulnerability-sla` | Atomic skill | `skills/calculate-vulnerability-sla/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-033 | `create-and-review-sbom` | Atomic skill | `skills/create-and-review-sbom/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-034 | `create-and-review-vex` | Atomic skill | `skills/create-and-review-vex/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-035 | `review-component-license` | Atomic skill | `skills/review-component-license/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-036 | `verify-build-provenance` | Atomic skill | `skills/verify-build-provenance/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-037 | `sign-and-verify-artifact` | Atomic skill | `skills/sign-and-verify-artifact/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-038 | `assess-software-supply-chain` | Atomic skill | `skills/assess-software-supply-chain/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-039 | `approve-dependency-exception` | Human accountability | `coe/01-strategy-operating-model/decisions/approve-dependency-exception.md` | R3 | Human-only decision; agent prepares evidence | RACI + signed decision record + evidence | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-040 | `harden-application-runtime` | Atomic skill | `skills/harden-application-runtime/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-041 | `harden-web-server` | Atomic skill | `skills/harden-web-server/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-042 | `harden-api-gateway-and-waf` | Atomic skill | `skills/harden-api-gateway-and-waf/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-043 | `harden-database` | Atomic skill | `skills/harden-database/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-044 | `harden-message-broker` | Atomic skill | `skills/harden-message-broker/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-045 | `harden-container-workload` | Atomic skill | `skills/harden-container-workload/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-046 | `harden-openshift-namespace` | Atomic skill | `skills/harden-openshift-namespace/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-047 | `review-security-logging` | Atomic skill | `skills/review-security-logging/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-048 | `mask-sensitive-log-data` | Atomic skill | `skills/mask-sensitive-log-data/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-049 | `conduct-privacy-design-review` | Atomic skill | `skills/conduct-privacy-design-review/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-050 | `minimize-personal-data` | Atomic skill | `skills/minimize-personal-data/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-051 | `implement-data-retention-and-deletion` | Atomic skill | `skills/implement-data-retention-and-deletion/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-052 | `prepare-security-test-report` | Atomic skill | `skills/prepare-security-test-report/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-053 | `prepare-security-risk-acceptance` | Atomic skill | `skills/prepare-security-risk-acceptance/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-054 | `validate-security-incident-readiness` | Atomic skill | `skills/validate-security-incident-readiness/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Security, Privacy & Supply Chain | A3 Independent assurance |
| SEC-055 | `assess-agentic-ai-security` | Eval suite | `coe/09-evals/assess-agentic-ai-security/` | R3 | Convert to eval suite | Fixtures + hidden invariants + grader + baselines | Security, Privacy & Supply Chain | F0 Operating kernel |
| SEC-056 | `assess-agentic-skill-security` | Eval suite | `coe/09-evals/assess-agentic-skill-security/` | R3 | Convert to eval suite | Fixtures + hidden invariants + grader + baselines | Security, Privacy & Supply Chain | F0 Operating kernel |

### 11.14 GitLab, pipelines, containers, OpenShift, Vault, web and CDN

| ID | Candidate capability | Primary realization | Canonical project location | Risk floor | Proposed disposition | Mandatory companion | Accountable COE | Development lane |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PLT-001 | `choose-monorepo-or-multirepo` | Atomic skill | `skills/choose-monorepo-or-multirepo/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-002 | `structure-monolith-repository` | Atomic skill | `skills/structure-monolith-repository/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-003 | `structure-microservices-repositories` | Atomic skill | `skills/structure-microservices-repositories/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-004 | `define-git-branching-strategy` | Standard / profile | `coe/04-knowledge/organization-standards/define-git-branching-strategy.md` | R2 | Convert to standard / profile | Applicability matrix + conformance checks | Platform & DevSecOps | V2 Pilot technology |
| PLT-005 | `configure-gitlab-protected-branches` | Atomic skill | `skills/configure-gitlab-protected-branches/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | F0 Operating kernel |
| PLT-006 | `configure-gitlab-codeowners` | Atomic skill | `skills/configure-gitlab-codeowners/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | F0 Operating kernel |
| PLT-007 | `configure-gitlab-merge-checks` | Atomic skill | `skills/configure-gitlab-merge-checks/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | F0 Operating kernel |
| PLT-008 | `configure-gitlab-access` | Atomic skill | `skills/configure-gitlab-access/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | F0 Operating kernel |
| PLT-009 | `review-gitlab-audit-events` | Atomic skill | `skills/review-gitlab-audit-events/` | R2 | Retain as atomic skill | Review schema + evidence + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-010 | `build-gitlab-ci-pipeline` | Atomic skill | `skills/build-gitlab-ci-pipeline/` | R2 | Split into atomic skills before authoring | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-011 | `build-reusable-pipeline-template` | Atomic skill | `skills/build-reusable-pipeline-template/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-012 | `secure-gitlab-runner` | Atomic skill | `skills/secure-gitlab-runner/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Platform & DevSecOps | F0 Operating kernel |
| PLT-013 | `optimize-pipeline-cache-and-artifacts` | Atomic skill | `skills/optimize-pipeline-cache-and-artifacts/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-014 | `integrate-quality-gates-in-pipeline` | Atomic skill | `skills/integrate-quality-gates-in-pipeline/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | F0 Operating kernel |
| PLT-015 | `manage-pipeline-secrets` | Atomic skill | `skills/manage-pipeline-secrets/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Platform & DevSecOps | F0 Operating kernel |
| PLT-016 | `publish-versioned-build-artifact` | Atomic skill | `skills/publish-versioned-build-artifact/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-017 | `build-oci-container-image` | Atomic skill | `skills/build-oci-container-image/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-018 | `select-minimal-base-image` | Atomic skill | `skills/select-minimal-base-image/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-019 | `create-non-root-immutable-image` | Atomic skill | `skills/create-non-root-immutable-image/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-020 | `create-multi-architecture-image` | Atomic skill | `skills/create-multi-architecture-image/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-021 | `scan-and-approve-base-image` | Atomic skill | `skills/scan-and-approve-base-image/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-022 | `publish-and-retain-container-image` | Atomic skill | `skills/publish-and-retain-container-image/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-023 | `promote-artifact-between-environments` | Atomic skill | `skills/promote-artifact-between-environments/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-024 | `deploy-workload-to-openshift` | Atomic skill | `skills/deploy-workload-to-openshift/` | R3 | Split into atomic skills before authoring | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-025 | `configure-openshift-project-and-quota` | Atomic skill | `skills/configure-openshift-project-and-quota/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-026 | `configure-openshift-rbac-and-scc` | Atomic skill | `skills/configure-openshift-rbac-and-scc/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-027 | `configure-openshift-network-policy` | Atomic skill | `skills/configure-openshift-network-policy/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-028 | `configure-openshift-route-and-tls` | Atomic skill | `skills/configure-openshift-route-and-tls/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-029 | `configure-openshift-storage` | Atomic skill | `skills/configure-openshift-storage/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-030 | `configure-openshift-resources-and-limits` | Atomic skill | `skills/configure-openshift-resources-and-limits/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-031 | `configure-health-startup-readiness-probes` | Atomic skill | `skills/configure-health-startup-readiness-probes/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-032 | `configure-hpa-and-scaling` | Atomic skill | `skills/configure-hpa-and-scaling/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-033 | `configure-pdb-and-topology-spread` | Atomic skill | `skills/configure-pdb-and-topology-spread/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-034 | `package-with-helm` | Atomic skill | `skills/package-with-helm/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-035 | `manage-overlays-with-kustomize` | Atomic skill | `skills/manage-overlays-with-kustomize/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-036 | `build-or-review-operator` | Atomic skill | `skills/build-or-review-operator/` | R2 | Split into atomic skills before authoring | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-037 | `implement-gitops-deployment` | Atomic skill | `skills/implement-gitops-deployment/` | R3 | Split into atomic skills before authoring | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-038 | `detect-and-correct-configuration-drift` | Atomic skill | `skills/detect-and-correct-configuration-drift/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-039 | `implement-policy-as-code` | Atomic skill | `skills/implement-policy-as-code/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | F0 Operating kernel |
| PLT-040 | `configure-openshift-compliance-operator` | Atomic skill | `skills/configure-openshift-compliance-operator/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-041 | `configure-service-mesh` | Atomic skill | `skills/configure-service-mesh/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-042 | `plan-openshift-upgrade` | Atomic skill | `skills/plan-openshift-upgrade/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-043 | `design-openshift-backup-and-restore` | Atomic skill | `skills/design-openshift-backup-and-restore/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-044 | `validate-openshift-disaster-recovery` | Atomic skill | `skills/validate-openshift-disaster-recovery/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-045 | `integrate-hashicorp-vault` | Atomic skill | `skills/integrate-hashicorp-vault/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | F0 Operating kernel |
| PLT-046 | `define-vault-policy-and-auth-method` | Atomic skill | `skills/define-vault-policy-and-auth-method/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Platform & DevSecOps | F0 Operating kernel |
| PLT-047 | `rotate-secret-without-downtime` | Atomic skill | `skills/rotate-secret-without-downtime/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | F0 Operating kernel |
| PLT-048 | `implement-break-glass-access` | Atomic skill | `skills/implement-break-glass-access/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | F0 Operating kernel |
| PLT-049 | `configure-reverse-proxy` | Atomic skill | `skills/configure-reverse-proxy/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-050 | `configure-web-security-headers` | Atomic skill | `skills/configure-web-security-headers/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-051 | `configure-cdn-caching` | Atomic skill | `skills/configure-cdn-caching/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-052 | `configure-cdn-origin-security` | Atomic skill | `skills/configure-cdn-origin-security/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-053 | `manage-cdn-cache-invalidation` | Atomic skill | `skills/manage-cdn-cache-invalidation/` | R2 | Retain as atomic skill | Output schema + evidence + evals | Platform & DevSecOps | V2 Pilot technology |
| PLT-054 | `configure-dns-tls-and-certificate` | Atomic skill | `skills/configure-dns-tls-and-certificate/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Platform & DevSecOps | V2 Pilot technology |

### 11.15 Release, operations, SRE, project management and documentation

| ID | Candidate capability | Primary realization | Canonical project location | Risk floor | Proposed disposition | Mandatory companion | Accountable COE | Development lane |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| OPS-001 | `define-service-sli-and-slo` | Atomic skill | `skills/define-service-sli-and-slo/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-002 | `define-error-budget-policy` | Policy | `coe/07-policies-hardening/ops/define-error-budget-policy.md` | R2 | Convert to policy | Control mapping + enforcement + exception workflow | SRE, Release & Delivery Management | F0 Operating kernel |
| OPS-003 | `instrument-application-metrics` | Atomic skill | `skills/instrument-application-metrics/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-004 | `instrument-distributed-tracing` | Atomic skill | `skills/instrument-distributed-tracing/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-005 | `configure-structured-log-pipeline` | Atomic skill | `skills/configure-structured-log-pipeline/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-006 | `build-operational-dashboard` | Atomic skill | `skills/build-operational-dashboard/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-007 | `design-actionable-alert` | Atomic skill | `skills/design-actionable-alert/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-008 | `implement-synthetic-monitor` | Atomic skill | `skills/implement-synthetic-monitor/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-009 | `prepare-service-catalog-entry` | Atomic skill | `skills/prepare-service-catalog-entry/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-010 | `prepare-operational-runbook` | Atomic skill | `skills/prepare-operational-runbook/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-011 | `plan-production-release` | Atomic skill | `skills/plan-production-release/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-012 | `create-release-manifest` | Schema / contract | `coe/08-schemas-contracts-templates/schemas/create-release-manifest/` | R2 | Convert to schema / contract | Versioned JSON Schema + examples + validator | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-013 | `prepare-release-notes` | Atomic skill | `skills/prepare-release-notes/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-014 | `plan-cutover` | Atomic skill | `skills/plan-cutover/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-015 | `plan-rollback` | Atomic skill | `skills/plan-rollback/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-016 | `configure-feature-flag` | Atomic skill | `skills/configure-feature-flag/` | R2 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-017 | `execute-blue-green-deployment` | Atomic skill | `skills/execute-blue-green-deployment/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-018 | `execute-canary-deployment` | Atomic skill | `skills/execute-canary-deployment/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-019 | `execute-rolling-deployment` | Atomic skill | `skills/execute-rolling-deployment/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-020 | `conduct-go-no-go-review` | Quality gate | `coe/10-quality-gates-evidence/gates/conduct-go-no-go-review/` | R3 | Convert to quality gate | Criteria + evidence schema + waiver/reopen rules | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-021 | `validate-operational-readiness` | Quality gate | `coe/10-quality-gates-evidence/gates/validate-operational-readiness/` | R3 | Convert to quality gate | Criteria + evidence schema + waiver/reopen rules | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-022 | `manage-hotfix` | Durable workflow | `coe/03-lifecycle-workflows/ops/manage-hotfix/` | R3 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-023 | `manage-emergency-change` | Durable workflow | `coe/03-lifecycle-workflows/ops/manage-emergency-change/` | R3 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-024 | `verify-post-deployment-health` | Atomic skill | `skills/verify-post-deployment-health/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-025 | `conduct-post-implementation-review` | Atomic skill | `skills/conduct-post-implementation-review/` | R2 | Retain as atomic skill | Output schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-026 | `manage-incident` | Durable workflow | `coe/03-lifecycle-workflows/ops/manage-incident/` | R3 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-027 | `command-major-incident` | Durable workflow | `coe/03-lifecycle-workflows/ops/command-major-incident/` | R3 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-028 | `preserve-incident-evidence` | Atomic skill | `skills/preserve-incident-evidence/` | R3 | Retain as atomic skill | Output schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-029 | `perform-root-cause-analysis` | Atomic skill | `skills/perform-root-cause-analysis/` | R2 | Retain as atomic skill | Output schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-030 | `manage-known-error-and-problem` | Durable workflow | `coe/03-lifecycle-workflows/ops/manage-known-error-and-problem/` | R3 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-031 | `manage-on-call-handoff` | Durable workflow | `coe/03-lifecycle-workflows/ops/manage-on-call-handoff/` | R3 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-032 | `plan-backup-and-restore` | Atomic skill | `skills/plan-backup-and-restore/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-033 | `test-backup-restoration` | Atomic skill | `skills/test-backup-restoration/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-034 | `plan-business-continuity` | Atomic skill | `skills/plan-business-continuity/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-035 | `execute-disaster-recovery-drill` | Atomic skill | `skills/execute-disaster-recovery-drill/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-036 | `manage-patching-and-vulnerability-remediation` | Durable workflow | `coe/03-lifecycle-workflows/ops/manage-patching-and-vulnerability-remediation/` | R3 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-037 | `manage-capacity-and-availability` | Atomic skill | `skills/manage-capacity-and-availability/` | R2 | Retain as atomic skill | Output schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-038 | `manage-application-support` | Durable workflow | `coe/03-lifecycle-workflows/ops/manage-application-support/` | R2 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-039 | `manage-service-knowledge` | Durable workflow | `coe/03-lifecycle-workflows/ops/manage-service-knowledge/` | R2 | Convert to durable workflow | State model/BPMN + SLA/escalation + evidence | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-040 | `optimize-platform-cost` | Atomic skill | `skills/optimize-platform-cost/` | R2 | Retain as atomic skill | Output schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-041 | `plan-portfolio` | Atomic skill | `skills/plan-portfolio/` | R2 | Split into atomic skills before authoring | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-042 | `plan-program` | Atomic skill | `skills/plan-program/` | R2 | Split into atomic skills before authoring | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-043 | `plan-project` | Atomic skill | `skills/plan-project/` | R2 | Split into atomic skills before authoring | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-044 | `estimate-delivery-work` | Atomic skill | `skills/estimate-delivery-work/` | R2 | Retain as atomic skill | Output schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-045 | `manage-schedule-and-dependencies` | Atomic skill | `skills/manage-schedule-and-dependencies/` | R2 | Retain as atomic skill | Output schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-046 | `manage-raid-log` | Atomic skill | `skills/manage-raid-log/` | R2 | Retain as atomic skill | Output schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-047 | `manage-stakeholder-communication` | Atomic skill | `skills/manage-stakeholder-communication/` | R2 | Retain as atomic skill | Output schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-048 | `facilitate-sprint-and-retrospective` | Atomic skill | `skills/facilitate-sprint-and-retrospective/` | R2 | Retain as atomic skill | Output schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-049 | `manage-configuration-baseline` | Atomic skill | `skills/manage-configuration-baseline/` | R2 | Retain as atomic skill | Output schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-050 | `close-project-and-realize-benefits` | Atomic skill | `skills/close-project-and-realize-benefits/` | R2 | Retain as atomic skill | Output schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-051 | `write-technical-document` | Atomic skill | `skills/write-technical-document/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-052 | `write-high-level-design` | Atomic skill | `skills/write-high-level-design/` | R2 | Merge into ARC-005 HLD skill family | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-053 | `write-low-level-design` | Atomic skill | `skills/write-low-level-design/` | R2 | Merge into ARC-006 LLD skill family | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-054 | `write-api-and-event-documentation` | Atomic skill | `skills/write-api-and-event-documentation/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-055 | `write-data-dictionary` | Atomic skill | `skills/write-data-dictionary/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-056 | `write-installation-and-configuration-guide` | Atomic skill | `skills/write-installation-and-configuration-guide/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-057 | `write-deployment-and-rollback-guide` | Atomic skill | `skills/write-deployment-and-rollback-guide/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-058 | `write-user-and-admin-guide` | Atomic skill | `skills/write-user-and-admin-guide/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-059 | `write-standard-operating-procedure` | Atomic skill | `skills/write-standard-operating-procedure/` | R2 | Retain as atomic skill | Template/schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |
| OPS-060 | `review-document-quality-and-traceability` | Atomic skill | `skills/review-document-quality-and-traceability/` | R2 | Retain as atomic skill | Review schema + evidence + evals | SRE, Release & Delivery Management | O4 Release and operations |

### 11.16 Banking, payments, accounting and ISO 20022

| ID | Candidate capability | Primary realization | Canonical project location | Risk floor | Proposed disposition | Mandatory companion | Accountable COE | Development lane |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PAY-001 | `model-payment-lifecycle` | Atomic skill | `skills/model-payment-lifecycle/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-002 | `model-double-entry-accounting` | Atomic skill | `skills/model-double-entry-accounting/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-003 | `design-ledger-posting` | Atomic skill | `skills/design-ledger-posting/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-004 | `design-payment-reconciliation` | Atomic skill | `skills/design-payment-reconciliation/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-005 | `design-clearing-and-settlement` | Atomic skill | `skills/design-clearing-and-settlement/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-006 | `design-payment-cutoff-and-value-date` | Atomic skill | `skills/design-payment-cutoff-and-value-date/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-007 | `design-payment-fee-and-charge` | Atomic skill | `skills/design-payment-fee-and-charge/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-008 | `design-return-reject-and-reversal` | Atomic skill | `skills/design-return-reject-and-reversal/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-009 | `implement-payment-idempotency` | Atomic skill | `skills/implement-payment-idempotency/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-010 | `detect-duplicate-payment` | Atomic skill | `skills/detect-duplicate-payment/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-011 | `reconcile-financial-and-message-state` | Atomic skill | `skills/reconcile-financial-and-message-state/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-012 | `design-end-of-day-processing` | Atomic skill | `skills/design-end-of-day-processing/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-013 | `validate-payment-audit-trail` | Atomic skill | `skills/validate-payment-audit-trail/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-014 | `model-iso20022-business-message` | Atomic skill | `skills/model-iso20022-business-message/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-015 | `select-iso20022-message-version` | Atomic skill | `skills/select-iso20022-message-version/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-016 | `validate-iso20022-xsd` | Atomic skill | `skills/validate-iso20022-xsd/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-017 | `validate-iso20022-business-rules` | Atomic skill | `skills/validate-iso20022-business-rules/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-018 | `map-legacy-message-to-iso20022` | Atomic skill | `skills/map-legacy-message-to-iso20022/` | R3 | Retain as atomic skill | Output schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-019 | `implement-pacs008-credit-transfer` | Atomic skill | `skills/implement-pacs008-credit-transfer/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-020 | `implement-pacs002-status-report` | Atomic skill | `skills/implement-pacs002-status-report/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-021 | `implement-pacs004-payment-return` | Atomic skill | `skills/implement-pacs004-payment-return/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-022 | `implement-camt053-statement` | Atomic skill | `skills/implement-camt053-statement/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-023 | `implement-camt054-notification` | Atomic skill | `skills/implement-camt054-notification/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-024 | `implement-iso20022-supplementary-data` | Atomic skill | `skills/implement-iso20022-supplementary-data/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-025 | `design-neft-integration` | Atomic skill | `skills/design-neft-integration/` | R3 | Split into atomic skills before authoring | Template/schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-026 | `design-rtgs-integration` | Atomic skill | `skills/design-rtgs-integration/` | R3 | Split into atomic skills before authoring | Template/schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-027 | `design-upi-integration` | Atomic skill | `skills/design-upi-integration/` | R3 | Split into atomic skills before authoring | Template/schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-028 | `integrate-sfms-through-ibm-mq` | Atomic skill | `skills/integrate-sfms-through-ibm-mq/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-029 | `implement-payment-message-signing` | Atomic skill | `skills/implement-payment-message-signing/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-030 | `verify-payment-non-repudiation` | Atomic skill | `skills/verify-payment-non-repudiation/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-031 | `integrate-sanctions-aml-and-kyc-controls` | Atomic skill | `skills/integrate-sanctions-aml-and-kyc-controls/` | R3 | Split into atomic skills before authoring | Tool profile + output schema + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-032 | `design-liquidity-and-position-control` | Atomic skill | `skills/design-liquidity-and-position-control/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-033 | `test-payment-message-conformance` | Atomic skill | `skills/test-payment-message-conformance/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-034 | `test-payment-reconciliation` | Atomic skill | `skills/test-payment-reconciliation/` | R3 | Retain as tool-backed atomic skill | Tool profile + output schema + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-035 | `prepare-payment-regulatory-report` | Atomic skill | `skills/prepare-payment-regulatory-report/` | R3 | Retain as atomic skill | Template/schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
| PAY-036 | `assess-payment-operational-risk` | Atomic skill | `skills/assess-payment-operational-risk/` | R3 | Retain as atomic skill | Review schema + evidence + evals | Payments & Accounting | D5 Banking and advanced AI |
