# Install and Run Paperclip for the AI Engineering CoE Artifact Factory

**Version:** 1.0

**Date:** 4 September 2026

**Target host:** macOS 26.6.1, Apple Silicon

**Repository:** `/Users/apple/Documents/Paresh/AI-Engineering-COE`

## 1. What is already present on this Mac

The preflight performed on 4 September 2026 found:

- Codex CLI: installed at `/Applications/ChatGPT.app/Contents/Resources/codex`, version `0.153.0-alpha.5`, logged in using ChatGPT.
- Claude Code: installed at `/Users/apple/.local/bin/claude`, version `2.1.233`, but not logged in.
- Node.js: not available on the current shell `PATH`.
- Paperclip CLI: not installed on the current shell `PATH`.

Re-run this check before installation:

```bash
node --version
pnpm --version
codex --version
codex login status
claude --version
claude auth status --text
paperclipai --version
```

## 2. Install Node.js and pnpm

Paperclip currently requires Node.js 24.11.0 or newer and pnpm 9.15 or newer.

1. Download the macOS Apple Silicon Node.js 24 LTS installer from `https://nodejs.org/`.
2. Verify the downloaded package signature using the macOS installer/security information supplied by Node.js.
3. Run the installer as your normal macOS user.
4. Close Terminal, open a new Terminal window, and run:

```bash
node --version
npm --version
```

5. Enable pnpm through Corepack:

```bash
npm install -g corepack
corepack enable
corepack prepare pnpm@latest --activate
pnpm --version
```

Expected result: Node is at least `v24.11.0`; pnpm is at least `9.15`.

## 3. Install Paperclip safely

Use the managed installer and verify its published checksum before executing it:

```bash
mkdir -p /tmp/paperclip-install
cd /tmp/paperclip-install
curl -fsSLO https://paperclip.ing/install.sh
curl -fsSLO https://paperclip.ing/install.sh.sha256
shasum -a 256 -c install.sh.sha256
less install.sh
bash install.sh
```

Do not run Paperclip onboarding as root or with `sudo`. Accept the default local/trusted loopback mode for this first deployment. If the installer does not start onboarding, run:

```bash
paperclipai onboard
```

For a temporary trial instead of a managed install:

```bash
npx --registry https://registry.npmjs.org paperclipai onboard
```

The default local URL is `http://localhost:3100`. Do not expose port 3100 directly to the internet.

## 4. Keep Paperclip running after login/restart

After onboarding succeeds:

```bash
paperclipai service install
paperclipai service status
```

If the service command is unavailable because only the temporary `npx` path was used, install the managed CLI first:

```bash
npx --registry https://registry.npmjs.org paperclipai install
paperclipai service install
```

Useful commands:

```bash
paperclipai run
paperclipai service status
paperclipai service restart
paperclipai --version
```

`paperclipai run` starts the Paperclip server in the foreground. The service form starts at macOS login and restarts after a crash. The Mac must remain powered on, logged in, connected to the network, and prevented from sleeping during unattended work.

## 5. Authenticate the ChatGPT/Codex subscription

The host is currently signed in. Confirm:

```bash
codex login status
```

Expected result: `Logged in using ChatGPT`.

If it is not signed in:

```bash
codex login
```

Complete the browser/device flow with the ChatGPT account whose subscription includes Codex. Do not set `OPENAI_API_KEY` in the Paperclip agent when the intent is to use the subscription login.

For each Codex agent in Paperclip:

1. Choose adapter `codex_local`.
2. Set working directory to `/Users/apple/Documents/Paresh/AI-Engineering-COE` or let the project execution workspace override it.
3. Leave `OPENAI_API_KEY` unset.
4. Leave the model blank initially so the installed Codex CLI selects its supported default, or select a model actually listed by the adapter.
5. Leave engine as `auto`.
6. Keep the sandbox/approval policy enabled; do not enable a dangerous bypass until isolated-workspace and permission tests pass.
7. Click **Test Environment**. It must verify the binary, working directory, inherited login, and hello probe.

Paperclip creates a managed Codex home per agent and seeds it from the host login. This separates agent session state and skills but does not create separate subscription quotas.

## 6. Authenticate the Claude subscription

Claude Code is installed but currently reports `Not logged in`.

1. Start subscription login:

```bash
claude auth login --claudeai
```

2. Complete the browser flow using the Claude Pro or Max subscription.
3. Verify:

```bash
claude auth status --text
claude doctor
```

4. If macOS Keychain cannot save the credential, unlock the login keychain and retry:

```bash
security unlock-keychain /Users/apple/Library/Keychains/login.keychain-db
claude auth login --claudeai
```

Do not paste your macOS password, Claude token, or setup token into a task, document, transcript, or repository.

For each Claude agent in Paperclip:

1. Choose adapter `claude_local`.
2. Set the project working directory.
3. Leave `ANTHROPIC_API_KEY` unset when the intent is subscription use.
4. Use the Claude subscription/setup-token login control in the Paperclip adapter or inherit the working Claude Code login from the host.
5. Leave engine as `auto`.
6. Select a model that the adapter offers under the subscription.
7. Click **Test Environment** and require the hello probe to pass.

If Paperclip presents a setup-token login flow, complete its one-time browser prompt through localhost or HTTPS. Never move that flow over plain remote HTTP.

## 7. Create the Paperclip company

Open `http://localhost:3100` and create:

- **Company name:** `AI Engineering CoE Artifact Factory`
- **Description:** `Governed factory for the 578-ID provider-neutral AI Engineering CoE artifact library for regulated banking and payments.`
- **Goal:** Copy the mission from Section 3 of `AI_Engineering_COE_Paperclip_Company_Requirements_v1.0.md`.
- **Hiring policy:** Board approval required for every long-lived agent until the golden slice passes.

Create only the CEO initially:

- Name: `CEO Programme Orchestrator`
- Adapter: `claude_local`
- Reports to: Board
- Working directory: `/Users/apple/Documents/Paresh/AI-Engineering-COE`
- Instruction bundle: external, rooted at `/Users/apple/Documents/Paresh/AI-Engineering-COE/paperclip/bootstrap/agents/ceo`
- Timer heartbeat: off during configuration
- Budget: a conservative monthly operational cap; subscription quota remains an external limit

Click **Test Environment**, save the agent, then use **Run Heartbeat** once. Review and approve or revise the strategy before permitting hiring or development.

## 8. Create the project and workspace

After approving the CEO strategy, create one project:

- **Project:** `578-ID Artifact Factory and MVP`
- **Local cwd:** `/Users/apple/Documents/Paresh/AI-Engineering-COE`
- **Repository URL:** use the existing Git remote if one is configured
- **Base ref:** the protected default branch actually used by the repository
- **Primary workspace:** this local checkout

Turn on **Settings -> Instance settings -> Experimental -> Enable Isolated Workspaces**, then configure the project:

- Execution workspaces enabled: yes
- Default workspace mode: isolated/new worktree
- Strategy: Git worktree
- Per-task override: allowed only for the CEO and factory lead
- Shared workspace concurrency: serialize
- Worktree parent: `.paperclip/worktrees`

Do not guess the base branch. Check it first:

```bash
cd /Users/apple/Documents/Paresh/AI-Engineering-COE
git branch --show-current
git remote -v
git status --short
```

If the repository has no commit/default branch yet, create the initial commit under the owner's normal Git workflow before turning on isolated worktrees.

## 9. Load the requirements and start the programme

1. Give the CEO read access to the documents listed in the requirements precedence section.
2. Create a root task named `Deliver the governed 578-ID AI Engineering CoE MVP`.
3. Paste the complete contents of `paperclip/bootstrap/BOARD_KICKOFF_TASK.md` into the task description.
4. Link the task to the company goal and project.
5. Assign it to the CEO.
6. Set typed review stages: Independent Content Reviewer, Independent Security Reviewer when applicable, Release Integrity Custodian, and Human Board approval for programme/release gates.
7. Turn on **Task Watchdogs** in Experimental settings and attach the `Liveness & Recovery Watchdog` after that agent is hired.
8. Wake the CEO by assignment; do not use a short repeating timer.

## 10. Hire and configure the execution team

Use the order in `AI_Engineering_COE_Paperclip_Role_Mapping_v1.0.md`.

For every agent:

- use a unique Paperclip identity and role title;
- set the correct manager;
- use the mapped `claude_local` or `codex_local` adapter;
- point work at the project, not a private desktop folder;
- attach only required skills;
- grant only required tools and secrets;
- test the environment before enabling work;
- keep timer heartbeat off unless the role genuinely polls an external system;
- prevent the identity from serving as reviewer/approver for its own candidate;
- set a budget and a clear escalation path.

## 11. Make progress durable and resumable

Paperclip agents execute in heartbeats; they do not remain as one endless process. Configure continuity as follows:

1. Assignment, comment, review, approval resolution, and monitor events wake the next responsible agent.
2. Before each run exits, the agent posts a comment with completed work, exact files/hashes, tests/evidence, current state, blocker, and exact next action.
3. Work waiting on CI, quota reset, or an external system remains `in_progress` or `in_review` with a real issue monitor and bounded retry/timeout settings. A comment that merely promises to check later is invalid.
4. Use structured blockers with a named unblock owner; do not leave only free-text blockers.
5. Let Paperclip recovery actions restore stranded assigned issues.
6. Attach the task watchdog to the root task to challenge false completion and dead ends.
7. Add a daily routine for the CEO: reconcile active work, blockers, review queues, remaining 578 IDs, provider capacity, and the next executable work wave. Use `coalesce if active` and `skip missed`.
8. Add a nightly company export routine or operator job after the company is stable.

This design continues automatically when a valid path exists. It intentionally stops at human approval, unavailable credentials, authorization failures, genuine external blockers, and exhausted subscription limits until those conditions change.

## 12. Ensure all generated outputs are available to you

Require every task to save deliverables in the repository and link the path in the Paperclip task comment.

The canonical-to-runtime flow is:

```text
artifacts/canonical
      -> factory validators and generators
      -> projections/codex
      -> projections/claude
      -> projections/gemini
      -> projections/paperclip
      -> release/<version>
```

For Paperclip skills:

1. Open the company **Skills** page.
2. Choose **Import skills from project**.
3. Select `578-ID Artifact Factory and MVP`.
4. Scan the project workspaces for `SKILL.md` files.
5. Import only released/pinned skills; resolve slug collisions explicitly.
6. Attach each imported skill only to mapped agents.

For Codex, Claude, and Gemini, use the released projections. Paperclip automatically stages assigned skills into the respective managed skill locations for `codex_local`, `claude_local`, and `gemini_local`. For manual CLI use outside Paperclip, copy or link the released skill directories into the runtime's documented skill directory and retain the release manifest.

## 13. Back up and export the Paperclip company

Find the company ID in the Paperclip URL or CLI listing, then run:

```bash
cd /Users/apple/Documents/Paresh/AI-Engineering-COE
paperclipai company export <company-id> \
  --out ./paperclip/exports/latest \
  --include company,agents,projects,tasks,skills \
  --expand-referenced-skills \
  --force
```

Paperclip exports company configuration and work records but never secret values, approvals, cost history, or activity-log history. Keep the repository and Paperclip database backups as separate recovery layers.

Commit exports only after checking that they contain no sensitive material and after applying the repository's review policy.

## 14. Daily operator checks

Check:

- Paperclip service is healthy.
- Codex and Claude logins remain valid.
- No agent is paused by budget or out of subscription capacity.
- Every active task has an assignee and a live next action.
- Every `in_review` task has a real reviewer/approval/monitor path.
- No task claims completion without linked repository evidence.
- No reviewer authored the candidate.
- The 578-ID and 545-requirement counts reconcile.
- Projection hashes match their canonical sources.
- Latest export and repository backup completed.

## 15. Troubleshooting

### Paperclip does not start

```bash
paperclipai service status
paperclipai run
```

Read the first actual error. On Apple Silicon, if embedded PostgreSQL reports missing `libzstd.1.dylib` or `liblz4.1.dylib`, follow the version-matched symlink procedure in Paperclip's current installation guide; do not create blind wildcard links outside the embedded Postgres package directory.

### Codex test fails

```bash
codex --version
codex login status
```

Re-run `codex login` if needed. Confirm Paperclip runs as the same macOS user and that no agent-level `OPENAI_API_KEY` overrides the host subscription login.

### Claude test fails

```bash
claude --version
claude auth status --text
claude doctor
```

Re-run `claude auth login --claudeai`. Resolve any Keychain warning. Confirm the Paperclip service runs as the same user and does not inject an invalid `ANTHROPIC_API_KEY`.

### Work stops after a successful run

- Inspect the issue status and comments.
- Ensure it has not been incorrectly moved to `done`.
- Add a structured blocker or a real monitor.
- Inspect active recovery actions.
- Confirm the root task watchdog is attached and eligible.
- Check provider usage limits and agent budget status.

### Two agents collide in the same files

Stop the affected runs, preserve evidence, and confirm isolated workspaces are enabled both at instance and project level. Set shared checkout concurrency to serialize. Resume each issue in its own worktree and merge only after review.

## 16. Official references verified for this runbook

- Paperclip installation: https://docs.paperclip.ing/guides/getting-started/installation/
- Paperclip Codex adapter: https://docs.paperclip.ing/reference/adapters/codex/
- Paperclip Claude Code adapter: https://docs.paperclip.ing/reference/adapters/claude-code/
- Paperclip skills: https://docs.paperclip.ing/guides/org/skills/
- Paperclip export/import: https://docs.paperclip.ing/guides/power/export-import/
- Paperclip execution policy: https://docs.paperclip.ing/guides/power/execution-policy/
- Paperclip routines: https://docs.paperclip.ing/guides/projects-workflow/routines/
- Paperclip task watchdogs: https://docs.paperclip.ing/guides/projects-workflow/task-watchdogs/
- Paperclip execution workspaces: https://docs.paperclip.ing/guides/projects-workflow/workspaces/
- OpenAI Codex with ChatGPT plan: https://help.openai.com/en/articles/11369540-codex-in-chatgpt
- Anthropic Claude Code setup: https://docs.anthropic.com/en/docs/claude-code/getting-started
