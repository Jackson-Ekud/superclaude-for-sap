#!/usr/bin/env node
/**
 * sc4sap MCP Server Bridge
 *
 * Thin launcher that delegates to the vendor-installed abap-mcp-adt server.
 * Points MCP_ENV_PATH to .sc4sap/sap.env so the server reads SAP credentials
 * through its own dotenv-based config system.
 *
 * The external server is installed via `/sc4sap:setup` or `npm run build`.
 */

'use strict';

const path = require('path');
const fs = require('fs');

const PLUGIN_ROOT = path.resolve(__dirname, '..');
const VENDOR_DIR = path.join(PLUGIN_ROOT, 'vendor', 'abap-mcp-adt');
const LAUNCHER = path.join(VENDOR_DIR, 'dist', 'server', 'launcher.js');
const ENV_FILE = path.join(PLUGIN_ROOT, '.sc4sap', 'sap.env');

// Point abap-mcp-adt's config system to the user's sap.env
if (fs.existsSync(ENV_FILE)) {
  process.env.MCP_ENV_PATH = ENV_FILE;
} else {
  console.error(`[sc4sap] Config not found: ${ENV_FILE}`);
  console.error('[sc4sap] Run "/sc4sap:setup" to configure SAP connection.');
  process.exit(1);
}

// Check if abap-mcp-adt is installed
if (!fs.existsSync(LAUNCHER)) {
  console.error('[sc4sap] abap-mcp-adt server not installed.');
  console.error(`[sc4sap] Expected at: ${LAUNCHER}`);
  console.error('[sc4sap] Run "/sc4sap:setup mcp" or "npm run build" to install it.');
  process.exit(1);
}

// Launch the abap-mcp-adt server in the same process
require(LAUNCHER);
