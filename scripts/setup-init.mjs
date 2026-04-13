#!/usr/bin/env node

/**
 * sc4sap Setup Init Hook (SessionStart, matcher: "init")
 * Runs initial setup when a new sc4sap project is initialized.
 * Creates .omc directory structure and default configuration.
 */

import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';
import { readStdin } from './lib/stdin.mjs';

async function main() {
  try {
    const input = await readStdin();
    let data = {};
    try { data = JSON.parse(input); } catch {}

    const directory = data.cwd || data.directory || process.cwd();

    // Create .omc directory structure
    const dirs = [
      join(directory, '.omc'),
      join(directory, '.omc', 'state'),
      join(directory, '.omc', 'skills'),
      join(directory, '.omc', 'plans'),
      join(directory, '.omc', 'research'),
      join(directory, '.omc', 'logs'),
    ];

    for (const dir of dirs) {
      if (!existsSync(dir)) {
        try { mkdirSync(dir, { recursive: true }); } catch {}
      }
    }

    // Create default notepad if it doesn't exist
    const notepadPath = join(directory, '.omc', 'notepad.md');
    if (!existsSync(notepadPath)) {
      try {
        writeFileSync(notepadPath, `# SC4SAP Project Notepad

## Priority Context
<!-- High-priority context that survives compaction -->

## Working Memory
<!-- Transient notes from the current work session -->

## SAP Objects
<!-- Track SAP objects being worked on -->

## Transport Requests
<!-- Active transport requests -->
`, { mode: 0o600 });
      } catch {}
    }

    // Create default project memory if it doesn't exist
    const memoryPath = join(directory, '.omc', 'project-memory.json');
    if (!existsSync(memoryPath)) {
      try {
        writeFileSync(memoryPath, JSON.stringify({
          techStack: { languages: ['ABAP'], frameworks: ['SAP'] },
          sapModules: [],
          userDirectives: [],
          customNotes: [],
          scannedAt: new Date().toISOString()
        }, null, 2), { mode: 0o600 });
      } catch {}
    }

    console.log(JSON.stringify({
      continue: true,
      hookSpecificOutput: {
        hookEventName: 'SessionStart',
        additionalContext: '[SC4SAP] Project initialized. .omc directory structure created.'
      }
    }));
  } catch (error) {
    console.log(JSON.stringify({ continue: true, suppressOutput: true }));
  }
}

main();
