---
name: sc4sap:setup
description: Plugin setup + MCP connection + SPRO config auto-generation from S/4HANA
level: 2
---

# SC4SAP Setup

Use `/sc4sap:setup` as the unified setup and configuration entrypoint for SuperClaude for SAP.

## Usage

```bash
/sc4sap:setup                  # full setup wizard
/sc4sap:setup doctor           # diagnose installation and SAP connection
/sc4sap:setup mcp              # configure mcp-abap-adt MCP server
/sc4sap:setup spro             # auto-generate SPRO config from S/4HANA system
```

## Routing

Process the request by the **first argument only**:

- No argument, `wizard`, or `--force` -> run the full setup wizard (install plugin, configure MCP, test SAP connection)
- `doctor` -> route to `/sc4sap:doctor` with remaining args
- `mcp` -> route to `/sc4sap:mcp-setup` with remaining args
- `spro` -> run SPRO config auto-generation workflow (see below)

## Setup Wizard Steps

1. Verify Claude Code version compatibility
2. Check if `mcp-abap-adt` MCP server is configured (guide to `/sc4sap:mcp-setup` if not)
3. Test SAP system connection via `GetSession`
4. Confirm connected system info (system ID, client, user)
5. Run `GetInactiveObjects` to confirm ADT access rights
6. Write plugin config to `.sc4sap/config.json`

## SPRO Config Auto-Generation (`/sc4sap:setup spro`)

Reads S/4HANA configuration tables to generate a local SPRO reference config:

1. Query enterprise structure via `GetTableContents` on tables: `T001` (company codes), `T001W` (plants), `T001L` (storage locations)
2. Query controlling area via `GetSqlQuery`: `SELECT * FROM TKA01`
3. Query sales organization via `GetTableContents` on `TVKO`
4. Write results to `.sc4sap/spro-config.json` with timestamp
5. Report: entities found, tables read, config file location

## Notes

- `/sc4sap:doctor`, `/sc4sap:mcp-setup` remain valid direct entrypoints
- Prefer `/sc4sap:setup` in documentation and user guidance
- Config is stored in `.sc4sap/` in the project root

Task: {{ARGUMENTS}}
