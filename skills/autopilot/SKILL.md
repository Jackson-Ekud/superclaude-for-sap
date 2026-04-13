---
name: sc4sap:autopilot
description: Full autonomous SAP development pipeline from idea to activated, tested ABAP objects
level: 4
---

# SC4SAP Autopilot

Follows OMC `autopilot` pattern adapted for SAP. Takes a brief SAP development requirement and autonomously handles the full lifecycle: requirements analysis, ABAP design, planning, parallel implementation, activation verification, and multi-perspective validation.

<Purpose>
sc4sap:autopilot takes a 2-3 sentence SAP requirement and produces activated, transport-ready ABAP objects. It coordinates sap-architect, sap-developer, sap-tester, and sap-code-reviewer agents across structured phases, with automatic retry on activation failure.
</Purpose>

<Use_When>
- User wants end-to-end autonomous SAP development from a brief requirement
- User says "autopilot", "autonomous", "build me", "create me", "full auto", or "handle it"
- Task requires multiple phases: design, coding, activation, testing, and review
- User wants hands-off execution and is willing to let the system run to completion
</Use_When>

<Do_Not_Use_When>
- User wants to explore design options first -- use `ralplan` instead
- User says "just explain" or "what would you suggest" -- respond conversationally
- Task is a single ABAP object with clear spec -- use `ralph` or direct executor
- User wants to review the plan before code is written -- use `ralplan` first
</Do_Not_Use_When>

<Execution_Policy>
- Each phase must complete before the next begins
- Parallel execution within Phase 3 (implementation) where objects are independent
- Activation retry up to 3 times; if same error persists, stop and report root cause
- Validation requires sign-off from sap-code-reviewer before completion
- Cancel with `/sc4sap:cancel` at any time; progress preserved in `.sc4sap/autopilot/`
</Execution_Policy>

<Steps>
1. **Phase 0 - Expansion**: Turn the requirement into a detailed SAP spec
   - If ralplan consensus plan exists (`.omc/plans/ralplan-sap-*.md`): skip to Phase 2
   - If deep-interview spec exists (`.omc/specs/deep-interview-*.md`): skip to Phase 1
   - If vague (no object names, package, or system): offer redirect to `/sc4sap:deep-interview`
   - Otherwise: sap-architect extracts requirements, selects ABAP technology pattern
   - Output: `.sc4sap/autopilot/spec.md`

2. **Phase 1 - Planning**: Create implementation plan from the spec
   - sap-architect: define object list, package, transport, activation order
   - sap-critic: validate naming conventions, dependency graph, transport strategy
   - Output: `.sc4sap/autopilot/plan.md`

3. **Phase 2 - Transport Setup**: Create or select CTS transport
   - `ListTransports` to find existing suitable transport
   - If none: `CreateTransport` with appropriate category and description
   - Record transport number in `.sc4sap/autopilot/state.json`

4. **Phase 3 - Implementation**: Create and activate ABAP objects (parallel where independent)
   - For each object: Create -> Write code -> Activate -> verify `GetInactiveObjects` is empty
   - sap-developer agents work in parallel on independent objects
   - Syntax errors trigger immediate fix-and-retry loop (max 3 attempts per object)

5. **Phase 4 - Testing**: Run unit tests if created or requested
   - `RunUnitTest` -> `GetUnitTestResult` -> all methods must pass
   - Failures: fix implementation (not tests), re-activate, re-test

6. **Phase 5 - Validation**: Multi-perspective review
   - sap-code-reviewer: naming, error handling, SAP best practices
   - sap-architect: design integrity, no unnecessary complexity
   - Fix all reviewer findings, re-activate if code changed

7. **Phase 6 - Completion Report**
   - List all created objects with activation status
   - Transport number and current status
   - Unit test results summary
   - Output: `.sc4sap/autopilot/report.md`
</Steps>

Task: {{ARGUMENTS}}
