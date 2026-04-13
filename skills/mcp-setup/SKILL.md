---
name: sc4sap:mcp-setup
description: Guide to install and configure the mcp-abap-adt MCP server for SAP ADT connectivity
level: 2
---

# SC4SAP MCP Setup

Guides you through installing and configuring the `mcp-abap-adt` MCP server, which provides Claude Code with direct connectivity to your SAP system via ABAP Development Tools (ADT) REST APIs.

<Purpose>
The `mcp-abap-adt` MCP server is the bridge between Claude Code and your SAP system. Without it, no SC4SAP skills can read or write ABAP objects. This skill walks you through cloning, configuring, and registering the server so all MCP tools become available.
</Purpose>

<Source>
MCP server repository: https://github.com/babamba2/abap-mcp-adt-powerup.git
</Source>

<Prerequisites>
- Node.js 18+ installed
- Access to a SAP system with ADT service enabled (transaction SICF, service `/sap/bc/adt` active)
- SAP user with developer authorizations (S_DEVELOP, S_TRANSPRT)
- Claude Code with MCP support
</Prerequisites>

<Installation_Steps>
1. **Clone the repository**
   ```bash
   git clone https://github.com/babamba2/abap-mcp-adt-powerup.git
   cd abap-mcp-adt-powerup
   npm install
   npm run build
   ```

2. **Create the configuration file**
   Create `config.json` in the cloned directory:
   ```json
   {
     "host": "https://your-sap-host:44300",
     "client": "100",
     "username": "your-user",
     "password": "your-password",
     "language": "EN"
   }
   ```
   - `host`: SAP system URL with HTTPS and ICM port (typically 44300 for HTTPS)
   - `client`: SAP client number (3 digits, e.g., "100")
   - `username` / `password`: SAP credentials with developer access
   - `language`: Logon language (EN, DE, etc.)

3. **Register with Claude Code**
   Add to your `~/.claude/claude_desktop_config.json` (or project `.mcp.json`):
   ```json
   {
     "mcpServers": {
       "mcp-abap-adt": {
         "command": "node",
         "args": ["/path/to/abap-mcp-adt-powerup/dist/index.js"],
         "env": {
           "CONFIG_PATH": "/path/to/abap-mcp-adt-powerup/config.json"
         }
       }
     }
   }
   ```

4. **Verify the connection**
   After restarting Claude Code, run:
   ```
   /sc4sap:doctor
   ```
   Or manually test by calling `GetSession` — it should return your SAP system ID, client, and username.
</Installation_Steps>

<Troubleshooting>
- **401 Unauthorized**: Check username/password and ensure the user is not locked
- **Connection refused**: Verify the SAP host URL and ICM HTTPS port; check VPN if required
- **ADT service not found**: Activate `/sap/bc/adt` in transaction SICF and ensure ICF is running
- **SSL certificate errors**: Add SAP system certificate to Node.js trust store, or set `"rejectUnauthorized": false` in config (dev only)
- **No tools visible in Claude Code**: Restart Claude Code after editing config; check MCP server logs
</Troubleshooting>

<Security_Notes>
- Never commit `config.json` with credentials to version control
- Use environment variables for credentials in CI/CD environments
- Prefer read-only SAP user for analysis-only workflows
- The MCP server communicates only with your configured SAP host
</Security_Notes>

Task: {{ARGUMENTS}}
