---
name: sc4sap:analyze-code
description: ABAP code analysis — read via MCP, analyze with sap-code-reviewer, suggest improvements
level: 2
---

# SC4SAP Analyze Code

Reads ABAP source code directly from the connected SAP system via MCP tools, performs deep structural and semantic analysis using the sap-code-reviewer agent, and produces an actionable improvement report.

<Purpose>
sc4sap:analyze-code gives you a comprehensive code review of any ABAP object in your SAP system — without leaving Claude Code. It leverages the AST, semantic analysis, and where-used capabilities of mcp-abap-adt to go beyond surface-level review into actual type safety, performance patterns, and SAP best practice compliance.
</Purpose>

<Use_When>
- User says "analyze", "review code", "check this class", "what's wrong with", "analyze code", or "code review"
- Before releasing a transport, to catch issues early
- When taking over existing ABAP code and wanting to understand its quality
- When optimizing performance of an ABAP program or class
- User wants where-used impact analysis before modifying an object
</Use_When>

<Do_Not_Use_When>
- User wants to modify the code immediately -- use `/sc4sap:ralph` (which includes fix-and-verify)
- Object doesn't exist yet -- use `/sc4sap:create-object`
- User just wants to read the source -- use `ReadClass`, `ReadProgram` etc. directly
</Do_Not_Use_When>

<Analysis_Dimensions>
The sap-code-reviewer agent evaluates these dimensions:

**1. Syntax and Semantics**
- Parse tree validity via `GetAbapAST`
- Type errors, unresolved references via `GetAbapSemanticAnalysis`
- Unused variables, unreachable code

**2. SAP Naming Conventions**
- Z/Y prefix compliance
- Method, variable, parameter naming (snake_case vs ABAP convention)
- Constant naming (c_, gc_, lc_ prefixes)

**3. Performance Patterns**
- SELECT * vs. explicit field list
- SELECT inside loops (N+1 pattern)
- Missing WHERE clauses on large tables
- Unoptimized sorts vs. ORDER BY in SQL
- Buffer usage (ABAP table buffer, shared buffer)

**4. Error Handling**
- Missing exception handling (sy-subrc checks after DB operations)
- Uncaught exceptions in OO code
- MESSAGE statements vs. exception class usage
- RAISE EXCEPTION TYPE vs. legacy RAISE

**5. Modern ABAP**
- Opportunities to use inline declarations (DATA(...))
- String templates instead of CONCATENATE
- Meshes/internal table operations (VALUE, REDUCE, FILTER)
- BDEF/RAP patterns vs. legacy BOR

**6. Security**
- SQL injection risks (dynamic WHERE clauses)
- Authorization checks (AUTHORITY-CHECK placement)
- Sensitive data in logs or messages

**7. Where-Used Impact**
- `GetWhereUsed` to identify all callers/users of the object
- Flag high-impact objects (used in >10 places) for extra care
</Analysis_Dimensions>

<Workflow_Steps>

**Step 1 - Identify Object** (auto or confirm)
- If object name provided: use directly
- If not provided: ask "Which ABAP object do you want to analyze? (name and type)"
- Verify object exists via `SearchObject`

**Step 2 - Read Source Code** (auto)
- Read source via appropriate MCP Read* tool:
  - Class: `ReadClass` (reads all includes: definitions, implementations, test classes)
  - Program: `ReadProgram` + `GetProgFullCode`
  - Function Module: `ReadFunctionModule`
  - Interface: `ReadInterface`
  - CDS View: `ReadView`

**Step 3 - Structural Analysis** (auto, parallel)
- `GetAbapAST` — parse tree and structure
- `GetAbapSemanticAnalysis` — type errors and semantic issues
- `GetWhereUsed` — usage scope and impact

**Step 4 - sap-code-reviewer Analysis** (auto)
- Pass source code + AST + semantic analysis results to sap-code-reviewer agent
- Agent evaluates all 7 dimensions above
- Agent produces finding list: severity (Critical / Major / Minor / Info) + location + description + suggested fix

**Step 5 - Report Generation** (auto)
- Group findings by severity
- For each finding: line reference, description, suggested improvement with code example
- Summary metrics: total findings by severity, overall quality score (0-10)
- Highlight top 3 most impactful improvements

**Step 6 - Action Options**
After report, offer:
- "Fix all Critical and Major findings automatically with `/sc4sap:ralph`"
- "Show me the where-used callers"
- "Explain finding #N in more detail"
- "Save report to `.sc4sap/analysis/{object-name}-{timestamp}.md`"

</Workflow_Steps>

<Output_Format>
```
ABAP Code Analysis: ZCL_MY_CLASS
==================================
Lines analyzed: 247 | Methods: 12 | Callers: 8

CRITICAL (1)
  Line 45: SELECT * used on large table VBAP — specify explicit field list
  Fix: SELECT vbeln matnr kwmeng FROM vbap INTO TABLE @lt_items WHERE ...

MAJOR (3)
  Line 67: SELECT inside LOOP — moves DB call outside loop
  Line 112: sy-subrc not checked after MODIFY db_table
  Line 189: CONCATENATE used — replace with string template |...|

MINOR (2)
  Line 23: Variable lv_x has non-descriptive name
  Line 78: RAISE EXCEPTION TYPE cx_sy_... — prefer structured exception message

INFO (1)
  Line 1: Class uses obsolete FINAL addition pattern — consider ABAP 7.54+ syntax

Quality Score: 6.2/10
Top fix: Eliminate SELECT inside LOOP (line 67) — highest performance impact
```
</Output_Format>

<MCP_Tools_Used>
- `SearchObject` — verify object exists
- `ReadClass` / `ReadProgram` / `ReadFunctionModule` / `ReadInterface` / `ReadView` — read source
- `GetProgFullCode` — full program source including includes
- `GetAbapAST` — parse tree and structural analysis
- `GetAbapSemanticAnalysis` — semantic and type analysis
- `GetWhereUsed` — usage scope and caller list
- `GetObjectInfo` — object metadata (package, transport, author)
</MCP_Tools_Used>

Task: {{ARGUMENTS}}
