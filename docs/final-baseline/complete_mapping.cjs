// Generate review projections through apply_patch, including explicit readiness gaps.
const fs=require('fs');const dir='docs/final-baseline/';
const read=n=>JSON.parse(fs.readFileSync(dir+n,'utf8'));
const skills=read('Atomic_Skills_v1.0.json'),roles=read('Role_Skill_Mapping_v1.0.json'),pkgs=read('Capability_Packages_v1.0.json'),policies=read('Policies_Catalogue_v1.0.json'),standards=read('Standards_Register_v1.0.json');
for(const s of skills.skills){
 s.package_reference_check=s.domain_acceptance;
 delete s.domain_acceptance;
 s.package_reference_check_scope='Candidate domain check only; apply if relevant to this outcome. Never inherit blindly.';
 s.output_schema={base:'SkillResult-v1',outcome_id:s.id+'-OUT',required:['requested_outcome','source_manifest','artifact','criterion_evidence','limitations','review_disposition'],outcome_description:s.title};
 s.task_oracle_requirements={positive:'Freeze an independent expected result for '+s.title.toLowerCase()+' before execution.',boundary:'Specify domain-specific boundary inputs and expected outputs for this exact skill.',negative:'Include incorrect output and missing-source fixtures; expect rejection or explicit unresolved finding.',evidence:'Fixture versions, independent oracle, qualification tuple, exact artifact hash and reviewer decision',status:'engagement_instantiation_required'};
 s.lifecycle='authored-outcome-contract; semantic-finalization-pending; implementation-not-created; runtime-unqualified';
 s.dependencies_status='not_yet_individually_validated';
}
const override=skills.skills.find(s=>s.id==='SK-G06-02');override.package_reference_check='Assess supplier identity, ownership, security, financial viability, subprocessors, concentration, contractual controls and exit evidence; identify unknowns and required human procurement decision.';
const invoice=skills.skills.find(s=>s.id==='SK-G06-03');invoice.package_reference_check='Match invoice, purchase order, receipt and tax/currency values; identify duplicate, missing or inconsistent entries and propose correction for authorized finance review.';
const joins=roles.roles.map(r=>{
 const p=new Set([...r.core_packages,...r.conditional_packages]);
 const st=standards.standards.filter(s=>s.applicable_packages.some(x=>p.has(x)));
 return {...r,status:'reference-role-eligibility-complete; assignment-and-semantic-qualification-pending',outcome_contracts:r.core_eligible_skills,universal_policy_ids:policies.policies.map(x=>x.id),standard_candidates:st.map(s=>({id:s.id,trigger:s.applicability_trigger,policy_ids:s.policy_ids,decision:'required_before_activation'})),policy_application_rule:'All organization policies are screened for task applicability at admission; enforce applicable clauses using policy scope, action, tenant and risk. Do not load all policies into the model context.',reviewer_assignment:'Resolve competent independent reviewer according to Role_Model_v1.0; an eligible title is not an occupied office.',qualification_status:'not_executed'};
});
const mapping={schema_version:'1.0',status:'complete_structural_mapping; applicability_and_semantic_review_pending',roles:joins};
const out={
 'Atomic_Skills_v1.0.json':JSON.stringify(skills,null,2)+'\n',
 'Role_Skill_Policy_Standard_Mapping_v1.0.json':JSON.stringify(mapping,null,2)+'\n',
 'Role_Skill_Policy_Standard_Mapping_v1.0.md':'# Role–skill–policy–standard mapping v1.0\n\nEach of the 267 role rows expands core and conditional packages into atomic skill IDs in the companion JSON. All 40 organization policies enter applicability screening. Standards below are candidate obligations selected from package scope; actual law, contract, jurisdiction and data triggers must be resolved before activation. A blank candidate list does not exempt a role from tenant or organization-wide obligations.\n\n| Role | Core skill count | Conditional skill count | Candidate standards |\n|---|---:|---:|---|\n'+joins.map(r=>`| ${r.id} ${r.title} | ${r.core_eligible_skills.length} | ${r.conditional_eligible_skills.length} | ${r.standard_candidates.map(s=>s.id).join(', ')||'Resolve from engagement applicability'} |`).join('\n')+'\n'
};
let patch='*** Begin Patch\n';for(const[n,c]of Object.entries(out)){if(fs.existsSync(dir+n)){patch+='*** Update File: '+dir+n+'\n@@\n'+fs.readFileSync(dir+n,'utf8').trimEnd().split('\n').map(x=>'-'+x).join('\n')+'\n'+c.trimEnd().split('\n').map(x=>'+'+x).join('\n')+'\n';}else patch+='*** Add File: '+dir+n+'\n'+c.trimEnd().split('\n').map(x=>'+'+x).join('\n')+'\n';}process.stdout.write(patch+'*** End Patch');
