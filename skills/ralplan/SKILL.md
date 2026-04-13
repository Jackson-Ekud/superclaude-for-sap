---
name: sc4sap:ralplan
description: Consensus planning entrypoint that gates vague SAP development requests before execution
level: 3
---

# SC4SAP Ralplan

Follows OMC `ralplan` pattern adapted for SAP. A consensus planning entrypoint that auto-gates vague ralph/autopilot/team requests before committing to execution. Produces a validated implementation plan before any ABAP code is written.

<Purpose>
sc4sap:ralplan runs a 3-stage planning pipeline (Planner -> Architect -> Critic) to produce a consensus implementation plan for SAP development tasks. It prevents wasted cycles on poorly-specified work by crystallizing requirements before execution begins.
</Purpose>

<Use_When>
- Request is vague (no specific ABAP object names, package, or transport mentioned)
- User says "plan", "ralplan", "think it through first", or "what's the approach"
- Task involves multiple SAP objects and the dependency order is unclear
- Architecture decision is needed (which ABAP technology: class vs function module, BAdI vs enhancement spot)
- User wants to review the plan before any code is written
</Use_When>

<Do_Not_Use_When>
- Task is concrete and well-specified -- delegate directly to ralph or executor
- User wants immediate execution -- use autopilot
- Task is a single-object fix with clear scope -- skip planning, go direct
</Do_Not_Use_When>

<Planning_Pipeline>
Stage 1 - **SAP Planner** (analyst role):
- Extract SAP-specific requirements: which objects, which package, which transport, which system
- Identify dependencies between ABAP objects (class uses interface, program calls function module)
- List MCP tools needed for each object type
- Output: `.omc/plans/ralplan-sap-{timestamp}.md` (requirements section)

Stage 2 - **SAP Architect** (architecture role):
- Design object structure and package hierarchy
- Select ABAP technology pattern (OO class, procedural, RAP, BAdI, etc.)
- Define activation order respecting dependencies
- Identify transport strategy (one transport or split by package)
- Output: append architecture section to plan file

Stage 3 - **SAP Critic** (review role):
- Validate plan against SAP naming conventions (Z/Y prefix, max 30 chars)
- Check for missing dependencies or circular references
- Verify transport strategy is sound
- Approve or request revision
- Output: append critic verdict to plan file
</Planning_Pipeline>

<Output>
Consensus plan written to `.omc/plans/ralplan-sap-{timestamp}.md` containing:
- Object list with types and package assignments
- Dependency graph and activation order
- MCP tool sequence for each object
- Transport assignment strategy
- Critic sign-off

After plan is approved: offer to proceed with `/sc4sap:ralph` or `/sc4sap:autopilot` using the plan.
</Output>

Task: {{ARGUMENTS}}
