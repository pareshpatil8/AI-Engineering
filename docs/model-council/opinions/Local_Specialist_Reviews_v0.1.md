# Local Specialist Reviews v0.1

Three independent local agents reviewed bounded questions in parallel. These reviews are advisory inputs.

## CEO/CFO growth review

The commercial reviewer found USD 10M annual revenue by month 24 a low-probability stretch and USD 50M annual revenue not credible from the current zero-customer position. It considered a USD 10M enterprise value possible if the company reaches roughly USD 1–2M exit ARR, demonstrates repeatability and reusable IP, and reduces founder dependency.

Recommended planning target at month 24:

- USD 2–4M annual recognized revenue;
- USD 1–2M exit ARR;
- USD 3–5M cumulative bookings;
- 10–15 customers;
- positive contribution margin and delivery that operates beyond the founder.

It proposed a regulated delivery-assurance wedge: diagnostic sprint, implementation plus assurance, recurring evidence/delivery service, then platform licensing. Its downside/base/upside numbers are internal planning assumptions, not externally validated forecasts.

Suggested evidence gates included buyer interviews and design partners by month 3, two paid engagements by month 6, referenceable delivery by month 9, reduced concentration and positive delivery margin by month 12, and measurable non-founder delivery plus recurring revenue by months 18–24.

## Governance and architecture review

The architect compared three approaches:

1. harness-led federation — fastest, but harness-specific and weak as a durable authority layer;
2. independent governance/control plane with qualified adapters — recommended;
3. fully custom company operating system — maximum control but highest bootstrap cost and risk.

The recommended logical design places identity, policy decision/enforcement, authority, workflow, registry, qualification, evidence, audit, risk, approvals, tenancy, cost, and admission control in an independent control plane. It exchanges canonical task/result/event envelopes with harness, model, tool, and MCP adapters. Customer products and deterministic services remain separate data-plane modules.

It proposed requirement families for council protocol (`MC-*`), policy (`POL-*`), registries (`REG-*`), qualification (`QUAL-*`), tenancy (`TEN-ARCH-*`), adapters (`INT-*`), audit (`AUD-*`), and recovery (`REC-*`). It recommended fail-closed qualification, independent reviewer restrictions, hash-bound approvals, versioned policies/skills/models/adapters/evaluation sets, append-only events, and exactly-once handling for material side effects.

It advised using CMMI practices as a staged maturity roadmap, not claiming CMMI Level 5 from a document set or single delivery.

## CTO/QA/security delivery review

The delivery reviewer found a two-week release conditionally feasible for a tightly bounded product/profile, not for the full 545-requirement company platform and not as bank certification. It offered planning priors, explicitly not forecasts:

- 60–75% if the exact ISO profile, environment, reusable components, CI/CD, deterministic oracles, independent reviewers, and release authority are ready at day 0;
- 25–45% if substantially greenfield;
- below 20% if semantics, state, SLOs, production access, domain review, or human authority remain unresolved after day 1.

It estimated 55–90 effective person-days of overlapping work across roughly 6–9 useful lanes. Continuous agent availability does not eliminate merge coordination, authoritative domain decisions, test elapsed time, security review, performance endurance, remediation, or human accountability.

It proposed a 48-hour production-intent vertical-slice experiment as the readiness gate. The slice should measure throughput, rework, conflicting reviews, cost, human interventions, deterministic gate results, and remaining calendar reserve. Failure would not remove the founder's scope; it would invalidate the two-week forecast.

Its proposed production-deployable definition requires a named topology and ISO profile; deterministic message/state/idempotency/reconciliation behavior; reproducible signed artifact and SBOM; declarative deployment, KMS, least privilege, observability and rollback; zero unresolved blockers; independent QA/security/domain/release evidence; and human authorization. It explicitly excludes customer go-live, scheme/network onboarding, regulator attestation, and universal compatibility.
