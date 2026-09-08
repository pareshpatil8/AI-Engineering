// Rebuild specification projections. Emits an apply_patch document; never writes source files.
const fs = require('fs');
const base = 'docs/final-baseline/';
const source = fs.readFileSync('docs/requirements/AI_Engineering_COE_Role_Skill_Matrix_v0.1.md','utf8');
const definitions = `
G01|Frame strategic options;Model a business case;Draft measurable company objectives
G02|Prepare a board decision pack;Assess a conflict of interest;Draft a delegation schedule
G03|Assess enterprise risk;Map an obligation to controls;Assess a residual-risk exception
G04|Analyze legal applicability;Review contract exposure;Assess a regulatory change
G05|Design an evidence sampling plan;Assess control effectiveness;Assemble an assurance finding
G06|Prepare a cash-flow forecast;Assess supplier due diligence;Reconcile an invoice discrepancy
G07|Define workforce competency needs;Assess a competence portfolio;Investigate a conduct concern
A01|Draft a role authority contract;Analyze a segregation conflict;Prepare a delegation request
A02|Decompose an outcome into tasks;Estimate a dependency critical path;Prioritize a constrained backlog
A03|Prepare a context handoff;Resolve competing implementation proposals;Plan an integration sequence
A04|Prepare a human decision request;Classify an escalation;Prepare an appeal evidence pack
A05|Select task-relevant context;Produce a provenance-preserving summary;Assess a memory promotion proposal
A06|Design a role evaluation scenario;Analyze agent execution telemetry;Compare qualified runtime outcomes
A07|Analyze recurring failure causes;Design an improvement experiment;Assess an improvement promotion
A08|Assess an injection attempt;Analyze a tool-action hazard;Prepare an agent containment recommendation
P01|Frame a customer research question;Synthesize customer interviews;Assess a market opportunity
P02|Draft a product outcome strategy;Prioritize roadmap tradeoffs;Design a pricing experiment
P03|Elicit acceptance requirements;Model a business rule;Analyze requirement change impact
P04|Prepare a dependency-aware release forecast;Analyze delivery variance;Prepare a stakeholder status report
P05|Design a user journey;Specify an interaction prototype;Review design-system conformance
P06|Draft task-oriented technical content;Review a regulated disclosure draft;Prepare a localization glossary
P07|Specify accessible interaction behavior;Design an accessibility remediation;Assess design accessibility evidence
R01|Map enterprise capability dependencies;Assess application portfolio alignment;Draft an architecture transition roadmap
R02|Draft a service boundary design;Analyze an architecture tradeoff;Review implementation conformance
R03|Model a system threat;Design a trust-boundary control;Assess privacy architecture tradeoffs
R04|Design a logical data model;Specify a data contract;Design a migration reconciliation strategy
R05|Design an integration contract;Select a message reliability pattern;Assess schema evolution compatibility
R06|Design a deployment topology;Design tenant execution isolation;Assess infrastructure resilience tradeoffs
R07|Design an AI use-case architecture;Design retrieval grounding;Specify a human oversight boundary
R08|Model workload capacity;Design a failure-recovery strategy;Allocate latency and availability budgets
E01|Implement a Java domain behavior;Implement a Spring service adapter;Diagnose a Java concurrency defect
E02|Implement an Angular interaction;Implement Angular state transitions;Diagnose Angular rendering overhead
E03|Implement a PL/SQL operation;Design a SQL execution optimization;Prepare a database migration change
E04|Implement an API contract;Design an API version transition;Diagnose an API authorization defect
E05|Implement a reliable event handler;Design a replay and dead-letter repair;Diagnose message ordering failures
E06|Design a reproducible build pipeline;Prepare an artifact promotion configuration;Diagnose a pipeline failure
E07|Implement a declarative infrastructure change;Design an autoscaling configuration;Diagnose a network-policy failure
E08|Design a database recovery procedure;Diagnose database saturation;Prepare a database patch change
E09|Implement a mobile channel interaction;Design an offline synchronization behavior;Review mobile storage security
E10|Implement a partner message transformation;Design a file-exchange workflow;Diagnose an enterprise integration failure
D01|Assess dataset classification;Define a data-quality rule;Analyze data lineage impact
D02|Implement a data transformation;Design a streaming aggregation;Diagnose a data reconciliation break
D03|Formulate a model evaluation hypothesis;Develop a reproducible model experiment;Analyze model explanation evidence
D04|Design a model delivery pipeline;Analyze model drift;Prepare a model rollback package
D05|Challenge model conceptual soundness;Assess independent model performance;Assess model robustness and fairness
D06|Design a grounded conversational response;Design a retrieval improvement;Evaluate a speech handoff interaction
D07|Assess an AI use-case impact;Prepare a model-risk control mapping;Review an AI transparency statement
Q01|Design functional acceptance scenarios;Analyze a functional defect;Assess regression scope
Q02|Implement a browser automation scenario;Diagnose a flaky UI test;Design parallel browser fixtures
Q03|Design API negative tests;Implement consumer contract tests;Analyze API concurrency evidence
Q04|Design a workload arrival model;Implement a performance test script;Analyze endurance test results
Q05|Diagnose a resource bottleneck;Design a performance remediation;Assess before-and-after tuning evidence
Q06|Design a keyboard accessibility test;Assess assistive-technology evidence;Report an accessibility failure
Q07|Triage a static security finding;Design a dynamic security test;Assess a security remediation retest
Q08|Prepare business acceptance scenarios;Analyze a UAT discrepancy;Assemble a business acceptance recommendation
Q09|Assess release quality evidence;Analyze escaped-defect causes;Review test-oracle independence
S01|Assess a cybersecurity risk;Draft a security control exception;Prepare an ISMS review pack
S02|Derive secure implementation requirements;Review a code trust-boundary change;Assess SSDLC gate completeness
S03|Prepare an authorized penetration-test plan;Validate an in-scope vulnerability;Draft an exploitation evidence report
S04|Assess cloud configuration exposure;Review container isolation;Design infrastructure hardening
S05|Design an authorization model;Prepare a key-rotation procedure;Assess privileged access evidence
S06|Triage a detection alert;Analyze an incident timeline;Prepare a containment and recovery plan
S07|Assess an advisory asset impact;Prioritize vulnerability remediation;Assess patch exception exposure
S08|Prepare a privacy impact assessment;Design data minimization;Assess a privacy-rights request
S09|Design an agent adversarial scenario;Analyze retrieval poisoning exposure;Assess model extraction evidence
S10|Assess dependency provenance;Review a software supply-chain change;Investigate an SBOM discrepancy
B01|Specify a ledger posting invariant;Design interest and fee test cases;Analyze an accounting imbalance
B02|Model a payment state transition;Specify duplicate and timeout handling;Analyze a payment dispute
B03|Select an ISO 20022 usage profile;Specify a semantic message mapping;Analyze an ISO validation failure
B04|Specify a SWIFT message workflow;Assess SWIFT control applicability;Analyze a transmission reconciliation break
B05|Design a fraud detection hypothesis;Analyze a suspected mule pattern;Assess fraud loss and friction tradeoffs
B06|Analyze an AML alert evidence pack;Assess a sanctions-match ambiguity;Prepare confidential reporting evidence
B07|Design a KYC vault-token flow;Assess identity verification evidence;Analyze KYC refresh obligations
B08|Assess cheque extraction uncertainty;Analyze a duplicate cheque indicator;Prepare a clearing exception recommendation
B09|Assess asset-token lifecycle requirements;Specify custody and transfer invariants;Review smart-contract upgrade risk
B10|Analyze a settlement reconciliation break;Specify a clearing control total;Prepare a dispute adjustment recommendation
O01|Define a service-level objective;Diagnose an observability gap;Analyze an error-budget breach
O02|Classify a service request;Analyze a recurring service problem;Prepare a service-change recommendation
O03|Triage a production support case;Prepare a bounded repair proposal;Prepare an L1-to-L2 escalation handoff
O04|Draft a grounded customer response;Analyze a customer complaint;Prepare an adoption intervention
O05|Design a consent-aware voice script;Assess a caller identity challenge;Review a voice interaction quality sample
O06|Analyze business continuity impact;Design a disaster-recovery exercise;Assess post-recovery reconciliation
O07|Analyze unit delivery cost;Forecast model and infrastructure demand;Recommend a capacity cost optimization
O08|Assemble a release evidence manifest;Assess configuration drift;Prepare rollback and revocation instructions
C01|Assess a qualified lead;Prepare a solution-fit demonstration;Prepare a sales-to-delivery handoff
C02|Draft a scoped service proposal;Analyze a contract commitment;Prepare a bid pricing recommendation
C03|Prepare customer onboarding criteria;Analyze customer value realization;Prepare a renewal recommendation
C04|Design an assurance service offering;Prepare a service acceptance pack;Analyze engagement delivery margin
C05|Draft evidence-supported positioning;Assess a prospective partnership;Review a marketing assurance claim
T01|Specify tenant lifecycle transitions;Design an entitlement decision table;Review a support-access request
T02|Decompose a capability package;Assess registry dependency impact;Design a runtime instruction projection
T03|Design an MCP adapter contract;Assess a webhook retry design;Review plugin permission scope
T04|Draft a policy decision table;Design a durable workflow transition;Analyze compensation safety
T05|Design an artifact evidence graph;Review an evaluation oracle;Assess release provenance completeness
T06|Design a qualified model route;Analyze provider fallback eligibility;Assess model usage anomalies
`.trim();
const pkgRows = source.split('\n').filter(l=>/^\| [A-Z]\d{2} \|/.test(l)).map(l=>l.split('|').slice(1,-1).map(s=>s.trim()));
const roleRows = source.split('\n').filter(l=>/^\| R-[A-Z]+-\d{3} \|/.test(l)).map(l=>l.split('|').slice(1,-1).map(s=>s.trim()));
const additions={
 G01:['Analyze portfolio investment allocation'],G02:['Prepare corporate governance calendar'],G04:['Assess intellectual-property licensing','Prepare a data-processing contract schedule'],G06:['Prepare a tax reporting evidence pack','Assess procurement bid comparisons'],G07:['Prepare job-specific learning material'],
 A03:['Analyze conflicting work leases'],A05:['Assess memory expiry and deletion'],A06:['Design a skill activation discrimination test'],A07:['Prepare a capability rollback proposal'],
 P01:['Prepare a competitor evidence comparison'],P03:['Specify nonfunctional acceptance limits','Build a requirements traceability graph'],P05:['Design an information architecture'],P06:['Draft an incident runbook','Prepare a customer knowledge article'],
 R02:['Specify a service data-consistency boundary'],R03:['Design cryptographic key boundaries'],R04:['Design a retention and archival model'],R07:['Design agent memory isolation'],R08:['Design a disaster-recovery failure model'],
 E01:['Implement a Java transaction boundary','Implement a Java resilience policy'],E02:['Implement accessible Angular forms'],E03:['Implement a PL/SQL bulk-processing behavior','Diagnose database locking contention'],E04:['Implement an API idempotency boundary'],E05:['Implement an event outbox transition'],E06:['Prepare a signed SBOM generation step'],E07:['Implement a secret-reference configuration'],E08:['Prepare a database failover exercise'],
 D01:['Assess data retention exceptions'],D03:['Analyze model calibration','Assess model training data quality'],D04:['Prepare a model observability specification'],D05:['Assess model explainability limitations'],D06:['Evaluate retrieval grounding failures','Design a voice-to-human escalation'],D07:['Prepare an AI inventory record'],
 Q01:['Design financial invariant property tests'],Q02:['Implement a Selenium interaction test','Implement a Playwright trace fixture'],Q03:['Design API fuzzing cases'],Q04:['Design a failover-under-load experiment'],Q06:['Assess zoom reflow and contrast evidence'],Q07:['Assess secrets and IaC scan results'],Q09:['Assess test mutation effectiveness'],
 S03:['Assess penetration-test stop conditions'],S05:['Review certificate lifecycle risk'],S06:['Design a detection rule','Prepare a forensic evidence preservation plan'],S07:['Analyze vulnerability reachability','Assess vendor advisory corroboration'],S08:['Design privacy-preserving tokenization'],S09:['Assess agent memory contamination','Design tool-invocation misuse tests'],S10:['Assess license compatibility'],
 B01:['Specify end-of-day reconciliation','Specify account interest accrual boundaries'],B02:['Specify a payment reversal behavior','Assess UPI integration acceptance evidence'],B03:['Specify ISO external code-set migration','Design an ISO semantic golden-message corpus'],B04:['Assess SWIFT acknowledgement ambiguity'],B05:['Assess fraud model drift'],B06:['Prepare beneficial-owner risk evidence','Review financial-crime detection rule changes'],B07:['Assess KYC token revocation'],B08:['Assess cheque clearing return evidence'],B09:['Design smart-contract invariant tests','Assess token-to-asset reconciliation'],B10:['Assess delayed settlement recovery'],
 O01:['Design a service alert rule'],O03:['Prepare an L2-to-L3 diagnostic handoff'],O04:['Prepare a customer grievance escalation'],O05:['Assess multilingual speech uncertainty'],O06:['Prepare a crisis communication draft'],O07:['Assess quota exhaustion impact'],O08:['Assess database migration release risk'],C01:['Research authorized prospect sources'],C02:['Prepare a customer scope-change proposal'],C03:['Prepare a customer offboarding pack'],C04:['Assess service independence conflicts'],C05:['Draft a qualified outbound lead message'],
 T01:['Design a tenant offboarding workflow'],T02:['Assess skill dependency conflicts'],T03:['Design webhook signature verification tests'],T04:['Design human-approval expiry behavior'],T05:['Assess audit chain continuity'],T06:['Design provider quota admission rules']
};
const skills=[];
const packages=definitions.split('\n').map(line=>{
 const [id,list]=line.split('|'); const meta=pkgRows.find(p=>p[0]===id); if(!meta) throw Error(id);
 const items=[...list.split(';'),...(additions[id]||[])].map((title,i)=>{
  const sid=`SK-${id}-${String(i+1).padStart(2,'0')}`;
  const implementation=/^(Implement|Develop)/.test(title);
  const artifact=implementation?'candidate change plus verification evidence':/^(Analyze|Assess|Review|Diagnose|Challenge|Triage|Investigate)/.test(title)?'finding or assessment with evidence and disposition':'versioned specification or decision proposal';
  const rec={id:sid,version:'1.0.0',package_id:id,title,trigger:`Task explicitly requests: ${title.toLowerCase()}.`,non_trigger:'Unrelated package tasks, approval authority, or deterministic validation alone.',input_schema:'SkillInput-v1',output_schema:'SkillResult-v1',required_inputs:['task and acceptance criterion IDs','tenant and data classification','authorized resource scope',`source artifacts concerning ${meta[1]}`,'applicable policy/standard/profile versions'],output:artifact,steps:[`Inspect the authorized inputs for ${title.toLowerCase()}; enumerate missing information.`,`Apply the selected domain and technology profile to produce the ${artifact}.`,'Check the result against each input acceptance criterion using independent evidence; record uncertainty and unresolved contradictions.','Return artifact hashes, source references, verification receipts, residual findings and the next authorized decision.'],acceptance:[`The output directly resolves the requested outcome: ${title}.`,'Every material factual claim or change maps to an input requirement or source and a verification receipt.','Independent domain oracle assesses semantic correctness; schema validity alone cannot establish a pass.',implementation?'Build, contract and risk-selected negative tests pass for the exact candidate bytes; independent reviewer is distinct from author.':'Alternatives, missing evidence, limits and recommendation are explicit; no unsupported approval or compliance claim.'],tools:implementation?['read scoped repository','authorized isolated editor','sandboxed build/test runner']:['read scoped evidence','authorized deterministic analyzer'],prohibited:['grant or change own authority','weaken acceptance criteria','publish/send/deploy/pay without separate authorization','read outside tenant scope','claim independent human approval'],stop_conditions:['missing required input','unqualified execution tuple','authority conflict','tool failure affecting conclusion','unresolved high-risk finding'],evaluations:['normal','boundary','insufficient-input','unsafe-input','prompt-injection','tool-failure','non-trigger','exact-artifact regression'],lifecycle:'specification-final; implementation-not-created; runtime-unqualified',owner_roles:roleRows.filter(r=>r[3].split(/[, ]+/).includes(id)).map(r=>r[0]),reviewer_rule:'Distinct qualified reviewer selected using task domain and segregation constraints; required natural-person authority remains human.',compatibility:'Only explicitly qualified model/harness/profile/tool tuples; no implicit any-LLM guarantee',license:'Organization-authored specification; third-party references retain their own licenses',review_due:'2026-12-05',risk_rule:'Inherit maximum risk of task, data, environment and applicable policy; never downgrade by package',dependencies:[],source_refs:['CAP-001..025',`matrix package ${id}`]};skills.push(rec);return sid;
 });
 return {id,version:'1.0.0',name:meta[1],domain_reference:meta[2],skill_ids:items,scope_note:'Outcome contracts cover recurring domain jobs. Further decomposition is mandatory when evaluation reveals multiple independent outcomes; this count is not a completeness target.'};
});
function expand(s){const result=[];for(const token of s.split(/[,;]\s*/)){let t=token.trim();const m=t.match(/^([A-Z])(\d{2})[-–]([A-Z])?(\d{2})$/);if(m){for(let n=+m[2];n<=+m[4];n++)result.push(m[1]+String(n).padStart(2,'0'));}else if(/^[A-Z]\d{2}$/.test(t))result.push(t);else if(t && t!=='—' && t!=='None')throw Error('Cannot parse package '+t);}return [...new Set(result)];}
const roles=roleRows.map(r=>({id:r[0],band:r[1],title:r[2],core_packages:expand(r[3]),conditional_packages:expand(r[4]),boundary:r[5],universal_profile:'U0-v1',authority:'Assignment-specific; eligibility grants no permissions',status:'specification-final; assignment-unfilled',core_eligible_skills:expand(r[3]).flatMap(p=>packages.find(q=>q.id===p).skill_ids),conditional_eligible_skills:expand(r[4]).flatMap(p=>packages.find(q=>q.id===p).skill_ids)}));
let md='# Atomic Skill Catalogue v1.0\n\nStatus: final requirements specification supplied for owner adoption. These are bounded skill contracts; executable SKILL.md implementations and empirical qualification are future development deliverables. Existing LLM reviews informed the design, but did not review these new records individually.\n\n';
md+='## Shared schemas and mandatory behavior\n\nSkillInput-v1 requires task_id, requirement_ids, acceptance_criteria, tenant_id, purpose, actor_id, role_assignment, resource_allowlist, data_class, risk, source_manifest, policy_versions, standard_profile_versions, technology_profile, qualified_tuple and budget. SkillResult-v1 requires skill_id/version, status (complete/partial/blocked/abstain), artifact URI/hash, source references, criterion-to-evidence links, tool receipts, limitations, unresolved findings, next_action and usage. No hidden chain-of-thought is requested.\n\nAll records inherit U0, input schema, output schema, tool restrictions, stop conditions, reviewer separation and test classes recorded in Atomic_Skills_v1.0.json. Dependency lists in that file identify skill dependencies, not mandatory policy/profile inputs. Candidate outputs cannot grant authority. Each domain oracle must be instantiated from the engagement acceptance criteria before implementation; semantic evaluation is currently unexecuted.\n\n';
for(const p of packages){md+=`## ${p.id} — ${p.name}\n\nDomain scope: ${p.domain_reference}\n\n`;for(const s of skills.filter(s=>s.package_id===p.id)){md+=`### ${s.id} — ${s.title}\n\n- Input: ${s.required_inputs.join('; ')}.\n- Output: ${s.output}.\n- Acceptance: ${s.acceptance.join(' ')}\n- Procedure: ${s.steps.join(' ')}\n- Evidence: source manifest; output hash; criterion/test receipts; findings; named reviewer disposition.\n- Negative cases: missing input, malicious source, out-of-scope tool, unavailable oracle, provider failure, wrong artifact hash. Expected result: blocked or abstain, with no unauthorized side effect.\n\n`;}}
const pm='# Capability Packages v1.0\n\nThe 95 package IDs remain stable as navigation and role eligibility groups. Atomic outcomes are defined separately. Deterministic tools, mandatory policies, standards and human authority remain distinct. Each package inherits the task-specific policies and applicable standards described in the mapping contract.\n\n| Package | Scope | Atomic skill IDs |\n|---|---|---|\n'+packages.map(p=>`| ${p.id} | ${p.name} | ${p.skill_ids.join(', ')} |`).join('\n')+'\n';
let rm='# Corrected Role Matrix v1.0\n\nAll 267 source role IDs are retained. Core and conditional fields grant eligibility; task resolution selects atomic skills and enforces independent authority. The canonical mapping JSON expands every package into skill IDs. The previous owner-coverage table is superseded by the role rows here.\n\nAccessibility boundary: R-DSN-008 supplies formative design/prototype accessibility checks; R-QA-010 supplies independent release accessibility testing. They share skills but cannot supply both author and independent reviewer on the same artifact.\n\n| Role ID | Band | Role | Core packages | Conditional packages | Boundary |\n|---|---|---|---|---|---|\n'+roles.map(r=>`| ${r.id} | ${r.band} | ${r.title} | ${r.core_packages.join(', ')} | ${r.conditional_packages.join(', ')} | ${r.boundary} |`).join('\n')+'\n';
const outputs={'Atomic_Skills_v1.0.json':JSON.stringify({schema_version:'1.0',skills},null,2)+'\n','Atomic_Skill_Catalogue_v1.0.md':md,'Capability_Packages_v1.0.json':JSON.stringify({packages},null,2)+'\n','Capability_Packages_v1.0.md':pm,'Role_Skill_Mapping_v1.0.json':JSON.stringify({roles},null,2)+'\n','Role_Matrix_v1.0.md':rm};
if(packages.length!==95||roles.length!==267||new Set(skills.map(s=>s.id)).size!==skills.length)throw Error('Inventory mismatch');
for(const r of roles)for(const p of [...r.core_packages,...r.conditional_packages])if(!packages.some(q=>q.id===p))throw Error('Dangling '+p);
let patch='*** Begin Patch\n';for(const [name,content]of Object.entries(outputs)){if(fs.existsSync(base+name)){const old=fs.readFileSync(base+name,'utf8');patch+='*** Update File: '+base+name+'\n@@\n'+old.trimEnd().split('\n').map(l=>'-'+l).join('\n')+'\n'+content.trimEnd().split('\n').map(l=>'+'+l).join('\n')+'\n';}else patch+='*** Add File: '+base+name+'\n'+content.split('\n').map(l=>'+'+l).join('\n')+'\n';}patch+='*** End Patch';process.stdout.write(patch);
