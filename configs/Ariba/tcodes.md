# Ariba - SAP Ariba Integration Transaction Codes
# Ariba - SAP Ariba 통합 트랜잭션 코드

## Master Data / Integration Setup
| TCode | Description |
|-------|-------------|
| SM59 | RFC Destinations / RFC 대상 |
| SOAMANAGER | SOA Manager (Web Service Config) / SOA 관리자 |
| WE20 | Partner Profiles (IDoc) / 파트너 프로파일 (IDoc) |
| WE21 | Ports in IDoc Processing / IDoc 처리 포트 |
| BD54 | Maintain Logical Systems / 논리적 시스템 유지 |
| XK01 | Create Vendor (for Ariba Supplier) / 공급업체 생성 (Ariba) |
| XK02 | Change Vendor Master / 공급업체 마스터 변경 |

## Procurement (SAP MM side of Ariba integration)
| TCode | Description |
|-------|-------------|
| ME21N | Create Purchase Order (from Ariba approved req) / PO 생성 |
| ME22N | Change Purchase Order / PO 변경 |
| ME51N | Create Purchase Requisition / 구매 요청 생성 |
| MIGO | Post Goods Receipt (transfers to Ariba) / 입고 전기 |
| MIRO | Enter Incoming Invoice (from Ariba e-invoice) / 수신 송장 입력 |
| ME2M | Purchase Orders by Material / 자재별 PO |

## Contract Management
| TCode | Description |
|-------|-------------|
| ME31K | Create Contract (imported from Ariba) / 계약 생성 |
| ME32K | Change Contract / 계약 변경 |
| ME33K | Display Contract / 계약 조회 |
| ME38 | Maintain Scheduling Agreement / 일정 합의 유지 |

## IDoc Monitoring
| TCode | Description |
|-------|-------------|
| WE02 | IDoc List / IDoc 목록 |
| WE05 | IDoc Overview / IDoc 개요 |
| WE09 | Search for IDoc / IDoc 검색 |
| BD87 | Status Monitor for ALE Messages / ALE 메시지 상태 모니터 |
| MONI | ALE/IDoc Monitor / ALE/IDoc 모니터 |

## Configuration
| TCode | Description |
|-------|-------------|
| SPRO | Ariba Integration Customizing / Ariba 통합 커스터마이징 |
| SALE | ALE Customizing / ALE 커스터마이징 |
| BD64 | Maintain Distribution Model / 배포 모델 유지 |
| SWI5 | Workitem Selection / 작업 항목 선택 |

## Reporting
| TCode | Description |
|-------|-------------|
| ME2L | POs by Vendor / 공급업체별 PO |
| ME2N | POs by PO Number / PO 번호별 PO |
| FBL1N | Vendor Line Items (for Ariba invoices) / 공급업체 항목 |
| MIR5 | Display List of Invoice Documents / 송장 문서 목록 조회 |

## Monitoring
| TCode | Description |
|-------|-------------|
| SLG1 | Application Log / 애플리케이션 로그 |
| SM58 | Transactional RFC Monitor / 트랜잭션 RFC 모니터 |
| SXMB_MONI | PI/PO Message Monitor / PI/PO 메시지 모니터 |
| AL11 | SAP Directories (for Ariba file exchange) / SAP 디렉토리 |
| SM21 | System Log / 시스템 로그 |
