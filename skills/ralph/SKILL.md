---
name: sc4sap:ralph
description: Persistent SAP development loop until ABAP syntax clean, activation success, and unit tests pass
level: 4
---

# SC4SAP Ralph

Follows OMC `ralph` pattern adapted for SAP. A persistence loop that keeps working on a SAP development task until ALL verification gates pass: ABAP syntax clean, object activation successful, and (when applicable) unit tests green.

<Purpose>
sc4sap:ralph is a PRD-driven persistence loop for SAP development. It wraps parallel execution with session persistence, automatic retry on ABAP activation failure, structured story tracking, and mandatory SAP-specific verification before completion. It does not stop until the code compiles, activates, and passes tests.
</Purpose>

<Use_When>
- ABAP development task requires guaranteed completion (not "do your best")
- User says "ralph", "don't stop", "must activate", "keep going until it works", or "finish this"
- Task involves multiple interdependent ABAP objects that must all activate cleanly
- Work may span multiple iterations due to syntax errors or missing dependencies
</Use_When>

<Do_Not_Use_When>
- User wants a full autonomous pipeline from scratch -- use `autopilot` instead
- User wants to explore design options -- use `ralplan` first
- Task is a single quick fix -- delegate directly to executor
- User wants manual control over completion -- execute directly without ralph
</Do_Not_Use_When>

<SAP_Verification_Gates>
Ralph uses these SAP-specific gates in order. Each must pass before moving to the next:

**Gate 1 - Syntax Check**: After writing ABAP code, verify zero syntax errors
- Use `GetAbapAST` to confirm parse tree is valid
- Use `GetAbapSemanticAnalysis` for semantic/type errors

**Gate 2 - Activation**: All objects must activate without errors
- Check `GetInactiveObjects` -- list must be empty for all task objects
- If inactive objects remain: read error messages, fix code, retry

**Gate 3 - Unit Tests (conditional)**: Run only if unit tests exist or were created
- Use `RunUnitTest` and `GetUnitTestResult`
- All test methods must show status PASS
- If failures: fix implementation (not tests), retry from Gate 1
</SAP_Verification_Gates>

<PRD_Mode>
By default, ralph operates in PRD mode. A scaffold `prd.json` is auto-generated at `.sc4sap/ralph/prd.json` when ralph starts if none exists.

**Opt-out:** If `{{ARGUMENTS}}` contains `--no-prd`, skip PRD generation and work in legacy mode.
**No-test:** If `{{ARGUMENTS}}` contains `--no-test`, skip Gate 3 (unit tests). Use when test infrastructure is out of scope.
**Reviewer selection:** Pass `--critic=architect` or `--critic=reviewer` to choose the completion reviewer.
</PRD_Mode>

<Execution_Policy>
- Fire independent ABAP object operations simultaneously -- never wait sequentially for independent objects
- Always read existing code before overwriting (GetClass, GetProgram, etc.)
- Assign transport number at start; reuse it across all iterations
- After 3 failed activation attempts on the same object: surface the full error log and stop
- Progress tracked in `.sc4sap/ralph/progress.txt`
</Execution_Policy>

<Steps>
1. Generate `prd.json` with user stories mapped to ABAP objects (unless --no-prd)
2. For each story: write ABAP code via MCP tools
3. Run Gate 1 (syntax) -> Gate 2 (activation) -> Gate 3 (unit tests, if applicable)
4. If any gate fails: read error, fix code, re-run failed gate
5. Mark story `passes: true` only after all gates pass
6. Final reviewer verifies all stories pass before ralph declares completion
</Steps>

Task: {{ARGUMENTS}}
