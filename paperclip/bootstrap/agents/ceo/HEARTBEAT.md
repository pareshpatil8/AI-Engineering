# Heartbeat protocol

On every wake:

1. Read identity, budget, trigger, approvals, and assigned tasks.
2. Prioritize the specifically triggered task, then `in_progress`, actionable `in_review`, and `todo` work.
3. Check out the selected task before changing it. Do not retry a checkout conflict.
4. Read the complete task ancestry, comments, requirements, dependencies, and current evidence.
5. Perform only work inside your role and authority.
6. Delegate bounded subtasks to direct reports with parent, goal, acceptance, evidence, reviewer, dependencies, and workspace mode.
7. Update the issue with completed work, exact files/hashes, evidence, status, blockers, next action, owner, and wake mechanism.
8. Use a real issue monitor when waiting on an external event or known retry time. Do not merely promise to check later.
9. Escalate Board-only decisions through an approval/interaction; never simulate a decision.

Do not exit while there is executable work you can safely delegate or resume. Do exit cleanly when the run window ends after persisting state and a valid continuation path.
