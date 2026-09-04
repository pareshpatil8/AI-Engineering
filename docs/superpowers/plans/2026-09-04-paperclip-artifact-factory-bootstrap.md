# Paperclip Artifact Factory Bootstrap Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Install Paperclip on the designated Mac, authenticate its Codex and Claude adapters with existing subscriptions, create the governed AI Engineering CoE company, and start the resumable 578-ID delivery programme.

**Architecture:** The Git repository is the canonical artifact store and Paperclip is the orchestration/audit control plane. Paperclip tasks run in isolated Git worktrees, pass through author-disjoint review gates, and generate Codex, Claude, Gemini, and Paperclip projections from canonical sources.

**Tech Stack:** Paperclip, Node.js 24.11+, pnpm 9.15+, embedded PostgreSQL, Git worktrees, Codex CLI, Claude Code CLI, Markdown/YAML/JSON artifacts.

**Spec:** `docs/paperclip/AI_Engineering_COE_Paperclip_Company_Requirements_v1.0.md`

## Global Constraints

- Preserve all 578 source IDs and all stable requirement IDs.
- Keep `/Users/apple/Documents/Paresh/AI-Engineering-COE` as the authoritative repository.
- Use Claude and Codex subscription logins; do not add provider API keys unless the human Board separately chooses API billing.
- Require author-disjoint review and human-only approval for accountable decisions.
- Do not begin bulk artifact generation before the factory kernel and one golden vertical slice pass.
- Never treat a generated file, model assertion, stopped run, or exhausted subscription allowance as completion.
- Every incomplete run records durable state and a valid next wake path.

---

### Task 1: Install the required runtime and Paperclip service

**Files:**
- Read: `docs/paperclip/AI_Engineering_COE_Paperclip_Runbook_v1.0.md`
- Verify: `~/.paperclip/instances/default/config.json` exists after onboarding (do not commit it)

**Interfaces:**
- Consumes: macOS arm64 host and a normal non-root user session
- Produces: a managed Paperclip service at `http://localhost:3100`

- [ ] **Step 1: Install Node.js 24 LTS from the signed macOS Apple Silicon installer at nodejs.org**

- [ ] **Step 2: Verify the Node and npm executables**

Run:

```bash
node --version
npm --version
```

Expected: Node prints `v24.11.0` or newer and npm prints a version.

- [ ] **Step 3: Install and verify pnpm**

Run:

```bash
npm install -g corepack
corepack enable
corepack prepare pnpm@latest --activate
pnpm --version
```

Expected: pnpm prints `9.15.0` or newer.

- [ ] **Step 4: Download, checksum, inspect, and run the Paperclip installer**

Run exactly the commands in Runbook Section 3. Expected: checksum reports `OK`, onboarding completes, and the UI opens at `http://localhost:3100`.

- [ ] **Step 5: Install and verify the background service**

Run:

```bash
paperclipai service install
paperclipai service status
```

Expected: service status reports running.

### Task 2: Authenticate both subscription adapters

**Files:**
- Read: `docs/paperclip/AI_Engineering_COE_Paperclip_Runbook_v1.0.md`

**Interfaces:**
- Consumes: eligible ChatGPT/Codex and Claude Pro/Max subscriptions
- Produces: working host logins usable by `codex_local` and `claude_local`

- [ ] **Step 1: Verify Codex subscription authentication**

Run:

```bash
codex login status
```

Expected: `Logged in using ChatGPT`.

- [ ] **Step 2: Log Claude Code into the Claude subscription**

Run:

```bash
claude auth login --claudeai
```

Complete the browser flow. Never paste the resulting credential into the repository or a Paperclip issue.

- [ ] **Step 3: Verify Claude authentication and installation health**

Run:

```bash
claude auth status --text
claude doctor
```

Expected: subscription authentication is active and no blocking installation/authentication error remains.

### Task 3: Create and verify the company CEO

**Files:**
- Read: `paperclip/bootstrap/agents/ceo/AGENTS.md`
- Read: `paperclip/bootstrap/agents/ceo/SOUL.md`
- Read: `paperclip/bootstrap/agents/ceo/HEARTBEAT.md`
- Read: `paperclip/bootstrap/agents/ceo/TOOLS.md`

**Interfaces:**
- Consumes: running Paperclip UI and working Claude host login
- Produces: one CEO agent with an external instruction bundle

- [ ] **Step 1: Create the company using the exact name, description, and mission in Runbook Section 7**

- [ ] **Step 2: Hire only `CEO Programme Orchestrator` with adapter `claude_local` and instruction root `/Users/apple/Documents/Paresh/AI-Engineering-COE/paperclip/bootstrap/agents/ceo`**

- [ ] **Step 3: Leave `ANTHROPIC_API_KEY` unset, leave engine `auto`, and run Test Environment**

Expected: binary, cwd, auth, and hello probe all pass.

- [ ] **Step 4: Trigger one manual heartbeat and review the CEO strategy**

Expected: the CEO submits a strategy/approval request and does not begin bulk authoring.

### Task 4: Configure the canonical project and isolated execution

**Files:**
- Read: `docs/paperclip/AI_Engineering_COE_Paperclip_Company_Requirements_v1.0.md`
- Verify: `.git/` and configured base branch

**Interfaces:**
- Consumes: existing repository and approved CEO strategy
- Produces: project `578-ID Artifact Factory and MVP` with isolated task worktrees

- [ ] **Step 1: Inspect the repository before selecting a base ref**

Run:

```bash
cd /Users/apple/Documents/Paresh/AI-Engineering-COE
git branch --show-current
git remote -v
git status --short
```

Expected: the operator identifies the real protected base branch and any pre-existing changes.

- [ ] **Step 2: Create the Paperclip project with cwd `/Users/apple/Documents/Paresh/AI-Engineering-COE`**

- [ ] **Step 3: Enable instance-level Isolated Workspaces and project-level Git-worktree execution**

Expected: new implementation issues default to isolated worktrees and shared checkout concurrency is serialized.

- [ ] **Step 4: Create a no-op verification issue and inspect its run workspace**

Expected: the run uses a `.paperclip/worktrees/` path rather than editing the primary checkout.

### Task 5: Hire the factory-kernel and control group

**Files:**
- Read: `docs/paperclip/AI_Engineering_COE_Paperclip_Role_Mapping_v1.0.md`

**Interfaces:**
- Consumes: approved CEO strategy and working adapters
- Produces: positions 2, 3, 4, 9, 10, and 12 with correct reporting lines and boundaries

- [ ] **Step 1: Submit Board hiring approvals for the six stage-one positions**

- [ ] **Step 2: Configure Claude positions with `claude_local` and Codex positions with `codex_local`, leaving provider API keys unset**

- [ ] **Step 3: Test every agent environment independently**

Expected: each adapter completes its hello probe from the project workspace.

- [ ] **Step 4: Check segregation of duties**

Expected: reviewer and security-reviewer identities cannot be assigned as authors of candidates they review; Watchdog cannot grant Board approvals.

### Task 6: Start the governed root programme

**Files:**
- Read: `paperclip/bootstrap/BOARD_KICKOFF_TASK.md`
- Produces later: `status/`, `registers/`, `factory/`, `artifacts/`, `projections/`, `evidence/`, and `release/`

**Interfaces:**
- Consumes: configured project and initial company team
- Produces: root task tree with valid dependencies, review paths, and recovery

- [ ] **Step 1: Create root task `Deliver the governed 578-ID AI Engineering CoE MVP` and paste the complete Board kickoff task body**

- [ ] **Step 2: Link the root task to the company goal and canonical project, then assign it to the CEO**

- [ ] **Step 3: Enable Task Watchdogs and attach `Liveness & Recovery Watchdog` to the root task**

- [ ] **Step 4: Configure typed review and human approval stages**

Expected: candidate tasks cannot close without their assigned content/security/release stages, and Board-only approvals remain human.

- [ ] **Step 5: Wake the CEO through the task assignment**

Expected: the CEO hashes normative inputs, creates the controlled programme tree, and requests rather than fabricates approvals.

### Task 7: Prove resumability before scaling

**Files:**
- Create later: `status/program-status.json`
- Create later: `registers/master-capability-register.json`
- Create later: `evidence/`

**Interfaces:**
- Consumes: root task tree and configured Watchdog
- Produces: demonstrated recovery from a bounded, intentional test interruption

- [ ] **Step 1: Create a low-risk test task that waits for a known local condition**

- [ ] **Step 2: Require the assignee to keep the task `in_progress`, schedule a real issue monitor, and record the next check time**

- [ ] **Step 3: Verify the monitor wakes the assignee and the task continues**

- [ ] **Step 4: Create a stopped child with incomplete evidence and verify the task watchdog restores a live path**

- [ ] **Step 5: Inspect the activity log, task comments, recovery action, and repository status record**

Expected: each transition is auditable and no agent claims that a comment alone created a watcher.

### Task 8: Export and back up the configured company

**Files:**
- Create later: `paperclip/exports/latest/`

**Interfaces:**
- Consumes: configured company ID and stable company configuration
- Produces: portable Paperclip company export without secret values

- [ ] **Step 1: Export company, agents, projects, tasks, and expanded skills**

Run from the repository, replacing `<company-id>` with the UUID shown in the Paperclip company URL:

```bash
paperclipai company export <company-id> \
  --out ./paperclip/exports/latest \
  --include company,agents,projects,tasks,skills \
  --expand-referenced-skills \
  --force
```

- [ ] **Step 2: Scan the export for accidental credentials before version control**

Run the repository's approved secret scanner when available. Until it exists, inspect the export manually and do not commit it.

- [ ] **Step 3: Verify the repository backup and Paperclip database backup are separate and restorable**

Expected: the company export contains configuration and work products but no secret values; the operator records that approvals, cost history, and activity history require separate instance/database retention.

### Task 9: Author the factory kernel and one golden slice

**Files:**
- Create: focused files under `factory/`, `registers/`, `status/`, `artifacts/canonical/`, `evidence/`, and `projections/`
- Test: deterministic tests beside or under the repository's chosen test layout

**Interfaces:**
- Consumes: the final requirements, role mapping, approved architecture, and source hashes
- Produces: schema-valid factory kernel and one source ID carried through G0-G10 readiness

- [ ] **Step 1: Require the Architecture Lead to produce an ADR-backed file map, interfaces, schemas, and threat model**

- [ ] **Step 2: Obtain author-disjoint architecture and security review plus Board design approval**

- [ ] **Step 3: Have the Factory Lead implement schemas and validators test-first in small reviewable tasks**

- [ ] **Step 4: Select one representative source ID and carry its exact bytes through reconciliation, authoring, validation, security, review, evaluation, projections, and release-integrity checks**

- [ ] **Step 5: Verify the owner can install or copy the released projections into Codex, Claude, Gemini, and Paperclip**

Expected: the golden slice passes its defined gates with hash-bound evidence. Only then may the CEO request approval to scale production waves.

### Task 10: Begin bounded production waves

**Files:**
- Modify/Create: paths allocated by approved work leases only

**Interfaces:**
- Consumes: approved golden slice and proven review/evaluation capacity
- Produces: completed 578-ID catalogue and the single integrated MVP release

- [ ] **Step 1: Size the first wave no larger than the demonstrated reviewer and evaluation capacity**

- [ ] **Step 2: Allocate disjoint paths, unique IDs, authors, reviewers, security reviewers, and evidence owners**

- [ ] **Step 3: Run every artifact through the required gates and remediate findings against the exact candidate hash**

- [ ] **Step 4: Increase wave size only after quality, review latency, provider quota, and rework metrics remain within approved thresholds**

- [ ] **Step 5: Continue through whole-catalogue and release qualification until the complete definition of done is evidenced**

Expected: 578/578 IDs and all applicable requirements reconcile, no release-blocking findings remain, all four runtime projections report truthful verification status, and the Human Board makes the final release decision.
