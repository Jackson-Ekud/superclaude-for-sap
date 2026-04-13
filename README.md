# SuperClaude for SAP (sc4sap)

> SAP 개발 환경에 최적화된 Claude Code 플러그인 | Claude Code plugin optimized for SAP development environments

## Overview / 개요

SuperClaude for SAP는 On-Premise S/4HANA 환경에서 ABAP 개발을 지원하는 Claude Code 플러그인입니다. MCP ABAP ADT 서버(150+ 도구)를 활용하여 ABAP 오브젝트 생성/수정, 코드 분석, SPRO 컨피그 참조를 제공합니다.

SuperClaude for SAP is a Claude Code plugin for ABAP development on On-Premise S/4HANA systems. It leverages the MCP ABAP ADT server (150+ tools) to provide ABAP object CRUD, code analysis, and SPRO configuration reference.

## Features / 기능

### 24 SAP-Specialized Agents / SAP 전문 에이전트
- **10 Core Agents**: Analyst, Architect, Code Reviewer, Critic, Debugger, Doc Specialist, Executor, Planner, QA Tester, Writer — all adapted for SAP/ABAP context
- **1 BC Consultant**: SAP Basis administration, transport management, system diagnostics
- **13 Module Consultants**: SD, MM, FI, CO, PP, PM, QM, TR, HCM, WM, TM, Ariba, BW

### 14 Skills / 스킬
| Skill | Description |
|-------|-------------|
| `sc4sap:setup` | Plugin setup + SPRO config auto-generation |
| `sc4sap:autopilot` | Full autonomous execution pipeline |
| `sc4sap:ralph` | Persistent loop with SAP verification |
| `sc4sap:ralplan` | Consensus-based planning |
| `sc4sap:team` | Coordinated parallel agent execution |
| `sc4sap:teams` | CLI team runtime (tmux-based) |
| `sc4sap:ask` | Question routing to appropriate agent |
| `sc4sap:deep-interview` | Socratic requirements gathering |
| `sc4sap:hud` | HUD display with SAP system status |
| `sc4sap:mcp-setup` | MCP ABAP ADT server setup guide |
| `sc4sap:doctor` | Plugin + MCP + SAP connection diagnostics |
| `sc4sap:release` | CTS transport release workflow |
| `sc4sap:create-object` | ABAP object creation (hybrid mode) |
| `sc4sap:analyze-code` | ABAP code analysis & improvement |

### SPRO Configuration Reference / SPRO 컨피그 참조
All 13 SAP modules with comprehensive config data:
- `configs/{MODULE}/spro.md` — SPRO configuration tables/views
- `configs/{MODULE}/tcodes.md` — Transaction codes
- `configs/{MODULE}/bapi.md` — BAPI/FM reference
- `configs/{MODULE}/workflows.md` — Development workflows

### SAP-Specific Hooks / SAP 특화 훅
- **SPRO Auto-Injection**: Haiku LLM classifies user input → injects relevant module SPRO config
- **Transport Validation**: Checks transport exists before MCP ABAP Create/Update operations
- **Auto-Activation**: Triggers ABAP object activation after creation/modification
- **Syntax Checker**: Auto-runs semantic analysis on ABAP errors

## Installation / 설치

### Prerequisites / 사전 요구사항
- Claude Code CLI installed
- Node.js >= 20.0.0
- MCP ABAP ADT server configured ([abap-mcp-adt-powerup](https://github.com/babamba2/abap-mcp-adt-powerup.git))
- Access to an On-Premise S/4HANA system

### Install / 설치 방법
```bash
# Install from marketplace
claude plugin install sc4sap

# Or install from source
cd supclaude4sap
npm install
npm run build
```

### Setup / 설정
```bash
# Run the setup skill to configure MCP connection and generate SPRO configs
/sc4sap:setup
```

This will:
1. Verify MCP ABAP ADT server connection
2. Auto-generate SPRO config files from your S/4HANA system
3. Configure hooks and agents

## Usage / 사용법

### Quick Start / 빠른 시작
```
# Create an ABAP class
/sc4sap:create-object

# Analyze existing code
/sc4sap:analyze-code

# Release a transport
/sc4sap:release

# Full autonomous development
/sc4sap:autopilot
```

### SAP Verification (Ralph) / SAP 검증
The `sc4sap:ralph` skill uses SAP-native verification:
1. ABAP syntax check (no errors)
2. Object activation (successful)
3. Unit test execution (only if test class exists)

## Development / 개발

```bash
# Install dependencies
npm install

# Build
npm run build

# Run tests
npm test

# Run tests once
npm run test:run
```

## Configuration / 설정

### CLAUDE.md
The plugin includes a `CLAUDE.md` file with SAP development rules:
- Z/Y prefix naming conventions
- Transport policies
- ABAP Clean Code guidelines

### Module Consultants
Each module consultant agent references its `configs/{MODULE}/` directory for domain-specific knowledge including SPRO tables, transaction codes, BAPIs, and workflows.

## Tech Stack / 기술 스택
- TypeScript + Node.js (ESM)
- esbuild (bundling)
- Vitest (testing)
- MCP SDK (@modelcontextprotocol/sdk)
- Anthropic SDK (@anthropic-ai/sdk)

## Version / 버전
- **Current**: v0.1.0
- **Target System**: On-Premise S/4HANA
- **Planned (v0.2.0)**: RAP support, multi-system (Dev/QA/Prod)

## Author / 저자
paek seunghyun

## License / 라이선스
MIT
