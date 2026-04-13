---
name: sc4sap:hud
description: Configure the SC4SAP HUD display showing SAP system status, active transports, and agent activity
level: 1
---

# SC4SAP HUD

Follows OMC `hud` pattern adapted for SAP. Configures the heads-up display that shows real-time SAP system context during agent execution: connected system, active transport, inactive objects count, and current agent activity.

<Purpose>
The SC4SAP HUD provides ambient SAP context so you always know which system you're connected to, what transport is active, and whether there are inactive objects requiring attention — without interrupting your workflow.
</Purpose>

<Use_When>
- User says "hud", "show status", "show system info", or "configure display"
- User wants to see current SAP connection status at a glance
- During long ralph/autopilot runs, user wants progress visibility
- User wants to customize what SAP info is displayed
</Use_When>

<HUD_Elements>
The HUD displays these elements (configurable):

**System Bar** (always shown):
- Connected SAP system ID and client (from `GetSession`)
- Connection status: CONNECTED / DISCONNECTED / ERROR
- Current user and logon language

**Transport Bar** (shown when active):
- Active transport number and description
- Transport status (modifiable / released)
- Object count in transport

**Object Status Bar** (shown during execution):
- Inactive objects count (from `GetInactiveObjects`)
- Last activation timestamp
- Syntax error count (0 = green, >0 = red)

**Agent Activity Bar** (shown during ralph/autopilot):
- Current phase / iteration number
- Active agent roles
- Last completed action
</HUD_Elements>

<Configuration>
```bash
/sc4sap:hud show              # display current HUD snapshot
/sc4sap:hud on                # enable persistent HUD during runs
/sc4sap:hud off               # disable HUD
/sc4sap:hud minimal           # system bar only
/sc4sap:hud full              # all bars
/sc4sap:hud transport <KXXXX> # pin a specific transport to the HUD
```

Config saved to `.sc4sap/hud-config.json`.
</Configuration>

<Presets>
- `minimal`: system bar only -- for focused coding sessions
- `standard` (default): system bar + transport bar
- `full`: all bars -- for ralph/autopilot monitoring
- `transport-only`: transport bar + object status bar -- for release workflows
</Presets>

Task: {{ARGUMENTS}}
