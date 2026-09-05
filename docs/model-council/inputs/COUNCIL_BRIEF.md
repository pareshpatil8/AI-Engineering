# Council Brief — MC-2026-09-05-001

## Frozen questions

1. Is the proposed AI-led company technically, operationally, legally, and commercially practical?
2. Can it develop and release a production-deployable ISO 20022 payment microservice in two calendar weeks when the platform prerequisites are ready?
3. What control-plane, model-council, role, skill, policy, standards, multitenancy, evidence, and immutable-audit design is required?
4. Can it reach USD 10–50 million in revenue, ARR, bookings, or valuation within 24 months from no customers, and what target is defensible?
5. Which governance decisions should be frozen before implementation planning?

## Founder constraints and intent

- All previously stated company capabilities remain in the single MVP release scope. Development may be sequenced internally, but scope is not silently deferred or deleted.
- India is the first jurisdiction. ISO 20022, SWIFT, OWASP, and NIST are equally important baselines; applicable Indian banking/payment obligations must also be mapped.
- Multi-tenant management is required from day one.
- Deployment must support a designed path for self-hosted, private, public/cloud, and hybrid environments. A mode is not called verified until its qualification evidence passes.
- Roles are provider-neutral contracts performable by AI, human, or hybrid teams, subject to authority and independence restrictions.
- The system should be LLM- and harness-agnostic through qualified adapters, including MCP where appropriate.
- The company must preserve immutable evidence for material events and enable human intervention at defined decision gates.
- Skills, policies, and standards may improve from experience and feedback only through controlled, reviewable, reversible lifecycle changes.
- CMMI maturity practices are a process-design reference; no maturity-level claim is permitted without the corresponding evidence and appraisal.

## Clarified two-week outcome

The target is an immutable software release that is deployable to a named production-grade topology and has completed the defined development, QA, security, performance, accessibility, operational-readiness, and independent-approval gates. It does not imply customer deployment, regulator approval, bank/scheme certification, SWIFT/NPCI onboarding, or live production traffic.

## Source baseline

- `docs/requirements/AI_Engineering_COE_MVP_Requirements_Baseline_v0.1.md` — 545 requirements
- `docs/requirements/AI_Engineering_COE_Role_Skill_Matrix_v0.1.md` — 267 role contracts and 95 broad capability packages
- `temp/AI_Engineering_CoE_578_Item_Disposition_Register_v0.2.md` — historical candidate register, not a mandated skill count
- `docs/reviews/AI_Agent_Company_Review_v0.1.md`
- `docs/reviews/AI_Agent_Company_Requirements_Amendments_v0.1.md`
- `docs/reviews/AI_Agent_Company_Claude_Review_v0.1.md`

## Council protocol for this session

- Opinions are produced independently before synthesis.
- Each opinion must distinguish fact, inference, assumption, recommendation, uncertainty, and dissent.
- Models share conclusions and cited evidence, never hidden chain-of-thought.
- Majority vote has no authority. Deterministic checks, authoritative sources, qualified domain reviewers, and designated humans resolve disputes.
- Model brands are not permanently assigned to governance roles. Eligibility is versioned and established by task-specific qualification.
