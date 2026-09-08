const fs=require('fs'),assert=require('assert');const path='docs/final-baseline/';
const get=(n,k)=>JSON.parse(fs.readFileSync(path+n,'utf8'))[k];
const skills=get('Atomic_Skills_v1.0.json','skills'),packages=get('Capability_Packages_v1.0.json','packages'),roles=get('Role_Skill_Mapping_v1.0.json','roles'),policies=get('Policies_Catalogue_v1.0.json','policies'),standards=get('Standards_Register_v1.0.json','standards'),mapping=get('Role_Skill_Policy_Standard_Mapping_v1.0.json','roles');
const ids=a=>new Set(a.map(x=>x.id));const si=ids(skills),pi=ids(packages),ri=ids(roles),po=ids(policies),st=ids(standards);
for(const a of[skills,packages,roles,policies,standards,mapping])assert.equal(ids(a).size,a.length,'duplicate IDs');
for(const p of packages){assert(p.skill_ids.length>0);for(const id of p.skill_ids)assert(si.has(id));}
for(const s of skills){assert(pi.has(s.package_id));assert(s.output_schema.outcome_id===s.id+'-OUT');assert(s.task_oracle_requirements.status==='engagement_instantiation_required');assert(!s.domain_acceptance,'blind package inheritance');}
for(const r of mapping){assert(ri.has(r.id));for(const id of[...r.core_eligible_skills,...r.conditional_eligible_skills])assert(si.has(id));for(const id of r.universal_policy_ids)assert(po.has(id));for(const x of r.standard_candidates)assert(st.has(x.id));}
for(const s of standards){for(const id of s.applicable_packages)assert(pi.has(id),s.id+' '+id);for(const id of s.policy_ids)assert(po.has(id),s.id+' '+id);}
assert.equal(mapping.length,roles.length);assert.equal(roles.length,267);assert.equal(packages.length,95);
for(const[id,fragment]of[['R-ENG-005','Java'],['R-ENG-007','Angular'],['R-ENG-016','DevOps']])assert(roles.find(r=>r.id===id).title.includes(fragment));
console.log(JSON.stringify({result:'PASS',checks:['unique typed IDs','package-skill references','role-skill-policy-standard references','all 267 roles mapped','corrected developer role identities','outcome-specific schema identifiers','no blind package oracle inheritance'],counts:{roles:roles.length,packages:packages.length,skills:skills.length,policies:policies.length,standards:standards.length},limits:['Structural checks only','No skill semantic completeness proof','No executed runtime composition tests','No compliance certification','No new external-model item-by-item review']},null,2));
