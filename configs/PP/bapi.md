# PP - Production Planning BAPIs & Function Modules
# PP - 생산 계획 BAPI 및 기능 모듈

## Core BAPIs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| BAPI_PRODORD_CREATE | Create Production Order / 제조 오더 생성 | Create production order from material and routing |
| BAPI_PRODORD_CHANGE | Change Production Order / 제조 오더 변경 | Modify production order dates, quantities, status |
| BAPI_PRODORD_GET_DETAIL | Get Production Order Detail / 제조 오더 상세 조회 | Read order header, operations, components (AUFK, AFKO, AFPO) |
| BAPI_PRODORD_GETLIST | Get Production Order List / 제조 오더 목록 조회 | List production orders by plant, material, date range |
| BAPI_PRODORDCONF_CREATE_HDR | Create Confirmation (Header) / 확인 생성 (헤더) | Confirm production order at header level with quantities |
| BAPI_PRODORDCONF_CREATE_TT | Create Confirmation (Time Ticket) / 확인 생성 (작업 시간표) | Confirm individual operations with time and quantities |
| BAPI_PRODORDCONF_CANCEL | Cancel Confirmation / 확인 취소 | Cancel a posted production order confirmation |
| BAPI_GOODSMVT_CREATE | Post Goods for Production / 생산 재고 이동 | Goods issue to production order (mvt 261), GR from production (mvt 101) |
| BAPI_MATERIAL_AVAILABILITY | Check Material Availability / 자재 가용성 검사 | Check ATP for components before releasing order |

## BOM & Routing BAPIs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| BAPI_BOM_GETDETAIL | Get BOM Detail / BOM 상세 조회 | Read BOM header and items (MAST, STKO, STPO) |
| BAPI_ROUTING_GET_DETAIL | Get Routing Detail / 라우팅 상세 조회 | Read routing operations and sequences (PLKO, PLPO) |
| BAPI_WORKCENTER_GET_DETAIL | Get Work Center Detail / 작업장 상세 조회 | Read work center capacity and scheduling data (CRHD, CRCA) |

## MRP BAPIs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| BAPI_REQUIREMENTS_CREATE | Create Planned Independent Requirements / 독립 소요 계획 생성 | Create PIR for demand planning (PBHI/PBIM) |
| BAPI_REQUIREMENTS_CHANGE | Change Planned Independent Requirements / 독립 소요 계획 변경 | Modify existing PIR |
| BAPI_PLANNEDORDER_CREATE | Create Planned Order / 계획 오더 생성 | Create planned order manually |
| BAPI_PLANNEDORDER_CHANGE | Change Planned Order / 계획 오더 변경 | Modify planned order quantities/dates |
| BAPI_PLANNEDORDER_GET_DETAIL | Get Planned Order Detail / 계획 오더 상세 조회 | Read planned order from PLAF |

## Utility FMs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| CO_BO_PRODUCTION_ORDER_READ | Read Production Order / 제조 오더 조회 | Internal FM: comprehensive production order read |
| CS_BOM_EXPL_MAT_V2 | BOM Explosion / BOM 전개 | Explode BOM multi-level for given material/plant/usage |
| MD_MRP_PARAMETERS_MATERIAL | Read MRP Parameters / MRP 매개변수 조회 | Read MRP-relevant material fields from MARC |
| BAPI_CAPACITY_REQUIREMENTS | Get Capacity Requirements / 용량 소요량 조회 | Read capacity requirements for work centers |
| CF_MATERIAL_PROPERTIES_GET | Get Material Properties for PP / PP용 자재 속성 조회 | Read PP-relevant material master fields |
