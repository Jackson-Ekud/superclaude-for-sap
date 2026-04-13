---
name: sc4sap:teams
description: CLI team runtime for SAP developer workers in tmux panes for process-based parallel execution
level: 3
---

# SC4SAP Teams

Follows OMC `omc-teams` pattern adapted for SAP. CLI-team runtime that spins up parallel SAP developer workers in tmux panes when you need process-based parallel execution across multiple SAP objects or packages.

<Purpose>
sc4sap:teams provides a tmux-based parallel execution environment where each pane runs an independent Claude Code worker scoped to a specific SAP task. Unlike the native team mode, each worker is a separate process with its own context — ideal for large-scale SAP development across multiple packages or independent object groups.
</Purpose>

<Use_When>
- Task spans multiple independent SAP packages that should not share context
- You need process isolation between workers (each operates on its own ABAP namespace)
- Long-running parallel SAP operations where you want to watch individual progress in separate panes
- User says "teams", "tmux", "parallel panes", or "split workers"
- CI-style execution where each worker writes its own log
</Use_When>

<Do_Not_Use_When>
- Workers need to share state or coordinate on the same transport -- use `/sc4sap:team` (native mode) instead
- Single system, single package work -- overhead of tmux is unnecessary
- tmux is not available in the current environment
</Do_Not_Use_When>

<Prerequisites>
- tmux installed and available in PATH
- Claude Code CLI (`claude`) available in PATH
- Each worker needs MCP server access to the same SAP system
</Prerequisites>

<Worker_Types>
```bash
/sc4sap:teams sap-developer <task>      # ABAP developer worker
/sc4sap:teams sap-tester <task>         # Unit test worker
/sc4sap:teams sap-reviewer <task>       # Code review worker
/sc4sap:teams sap-transport <task>      # Transport management worker
```

Default worker count: match to number of independent task slices. Max recommended: 6 panes.

<Runtime_Behavior>
1. Create tmux session `sc4sap-teams-{timestamp}`
2. Split into N panes, one per worker
3. Each pane launches: `claude --role={role} --task="{task-slice}"`
4. Orchestrator pane monitors worker output and collects results
5. On completion: each worker writes status to `.sc4sap/teams/{worker-id}/result.json`
6. Orchestrator aggregates results and reports final status
7. Session remains open for inspection; close with `/sc4sap:teams stop`
</Runtime_Behavior>

<Commands>
```bash
/sc4sap:teams stop              # terminate all workers and close tmux session
/sc4sap:teams status            # show current worker status across all panes
/sc4sap:teams logs <worker-id>  # tail logs for a specific worker
/sc4sap:teams attach            # attach to the tmux session
```
</Commands>

Task: {{ARGUMENTS}}
