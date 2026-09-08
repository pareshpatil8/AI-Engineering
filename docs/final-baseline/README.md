# Company requirements consolidation — review index

Date: 2026-09-06. This package incorporates the retained Codex, Claude, Gemini and GLM council reviews. Version 1.0 identifies this deliverable set; it does not imply every item is approved or qualified. Use the explicit status table below.

Start with [Company Architecture and Governance](Company_Architecture_and_Governance_v1.0.md). This is the consolidated company governance reference requested by the owner. [Review Disposition](Review_Disposition_v1.0.md) explains how council claims and 35 prior amendments were handled.

| Requested area | Artifact | Current completion status |
|---|---|---|
| Company architecture | [Architecture and Governance](Company_Architecture_and_Governance_v1.0.md) | Consolidated specification completed; operational adoption is separate |
| Governance principles | [Architecture and Governance](Company_Architecture_and_Governance_v1.0.md) | 40 normative requirements with acceptance obligations; control implementation unexecuted |
| Role model | [Role Model](Role_Model_v1.0.md) | Contract schema, authority rules and corrected identities completed; actual assignments remain unfilled |
| 267-role matrix | [Role Matrix](Role_Matrix_v1.0.md) | All 267 IDs preserved with corrected role references and clarified overlap boundaries |
| 95 capability packages | [Capability Packages](Capability_Packages_v1.0.md) | All 95 mapped to outcome contracts; completeness is not established by count |
| Atomic skill catalogue | [376 Skill Outcome Contracts](Atomic_Skill_Catalogue_v1.0.md), [JSON](Atomic_Skills_v1.0.json), [Domain Checks](Domain_Acceptance_Profiles_v1.0.md) | Authored; per-skill semantic finalization and dependency review remain open |
| Policies catalogue | [40 Policies](Policies_Catalogue_v1.0.md), [JSON](Policies_Catalogue_v1.0.json) | Consolidated enforceable-policy specification; implementation and tests unexecuted |
| Standards register | [51 Standards/Profile Records](Standards_Register_v1.0.md), [JSON](Standards_Register_v1.0.json) | Register authored; source acquisition, applicability and clause-level control extraction remain open as marked |
| Role-skill-policy-standard mapping | [Review Table](Role_Skill_Policy_Standard_Mapping_v1.0.md), [Full JSON](Role_Skill_Policy_Standard_Mapping_v1.0.json) | All roles structurally joined; task-specific policy/standard applicability must be resolved |
| Skill composition testing | [Composition Test Specification](Skill_Composition_Test_Specification_v1.0.md) | 30 test contracts specified; runtime execution NOT_EXECUTED |

## Review provenance

The earlier council reviewed architecture, governance and selected role/capability findings. Claude's earlier detailed source review and later cross-review informed the consolidation. Gemini and GLM reviewed summaries, not these newly authored records. Local specialist agents drafted governance, policy/standards, role and composition sections; an additional local review found overgeneralized skill oracles and insufficient individual semantic detail. Those findings remain visible in [Finalization Gaps](FINALIZATION_GAPS.md).

No file claims that Claude, Gemini or GLM reviewed the new 376 records individually. A complete four-provider semantic review is outstanding. Historical review files are preserved under `docs/reviews` and `docs/model-council`.

## Authority and use

This package consolidates prior recommendations and corrects the old owner-role cross-reference table. It does not silently remove requirements from the original 545-requirement baseline or reduce the single external MVP scope. Detailed policies and architecture resolve the council conflicts according to the disposition record. Unresolved baseline conflicts must retain their source IDs and be decided before implementation of the affected capability.

Use role IDs to assign work, package IDs to discover capabilities, skill IDs to request bounded outputs, policy IDs to enforce obligations, and standard IDs to resolve applicability. Eligibility never grants tool or approval authority. Human decision ownership, licensed sources, customer-specific applicability and runtime evidence must be supplied at their respective gates.

## Verification and regeneration

Run `node docs/final-baseline/validate_catalogue.cjs` from the repository root. It checks counts, unique IDs, references, corrected role identities and mapping coverage. It does not execute skill behavior.

The three generator scripts emit apply_patch patches. They are drafting utilities, not production platform components. Their generation order is build_catalogue, enrich_catalogue, complete_mapping. Regeneration overwrites generated drafts and must be reviewed because manual review-status corrections may need reapplication. The delivered JSON and Markdown files are the review artifacts; do not regenerate merely to read them.
