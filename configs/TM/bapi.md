# TM - Transportation Management BAPIs & Function Modules
# TM - 운송 관리 BAPI 및 기능 모듈

## Core BAPIs / APIs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| /SCMTMS/CL_FO_BAPI=>CREATE | Create Freight Order / 화물 오더 생성 | OO-style BAPI: create freight order with header, items, stages |
| /SCMTMS/CL_FO_BAPI=>CHANGE | Change Freight Order / 화물 오더 변경 | Modify freight order fields, assign carrier, update dates |
| /SCMTMS/CL_FO_BAPI=>GET_LIST | Get Freight Order List / 화물 오더 목록 조회 | Retrieve list of freight orders by selection criteria |
| /SCMTMS/CL_FO_BAPI=>GET_DETAIL | Get Freight Order Detail / 화물 오더 상세 조회 | Read complete freight order data |
| /SCMTMS/CL_FU_BAPI=>CREATE | Create Freight Unit / 화물 단위 생성 | Create freight unit from delivery or manually |
| /SCMTMS/CL_FU_BAPI=>GET_LIST | Get Freight Unit List / 화물 단위 목록 조회 | List freight units by various criteria |
| BAPI_SHIPMENT_CREATE | Create Shipment (LE-TRA) / 출하 생성 (LE-TRA) | Create LE-Transportation shipment document (VTTK) |
| BAPI_SHIPMENT_CHANGE | Change Shipment / 출하 변경 | Modify shipment header, stages, legs |
| BAPI_SHIPMENT_GETDETAIL | Get Shipment Detail / 출하 상세 조회 | Read shipment data from VTTK, VTTS, VTSP |

## Location / Route BAPIs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| /SCMTMS/CL_LOC_BAPI=>CREATE | Create Location / 위치 생성 | Create TM location master record |
| /SCMTMS/CL_LOC_BAPI=>GET_DETAIL | Get Location Detail / 위치 상세 조회 | Read TM location attributes |
| /SCMTMS/CL_LANE_BAPI=>GET_LIST | Get Lane List / 레인 목록 조회 | List transportation lanes between locations |

## Charge Calculation FMs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| /SCMTMS/CL_FCC_BAPI=>CALCULATE | Calculate Freight Charges / 운임 계산 | Calculate freight charges for freight order or booking |
| /SCMTMS/CL_FCC_BAPI=>GET_RESULT | Get Calculation Result / 계산 결과 조회 | Read calculated freight charge amounts |

## Event / Tracking FMs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| /SCMTMS/CL_TTE_BAPI=>POST_EVENT | Post Tracking Event / 추적 이벤트 전기 | Post location/status event for freight order (GPS update) |
| /SCMTMS/CL_TTE_BAPI=>GET_EVENTS | Get Tracking Events / 추적 이벤트 조회 | Read event history for shipment/freight order |

## Utility FMs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| /SCMTMS/CL_TEND_BAPI=>EXECUTE | Execute Tendering / 입찰 실행 | Start carrier tendering process for freight order |
| /SCMTMS/CL_TEND_BAPI=>ACCEPT | Accept Tender / 입찰 수락 | Accept carrier tender response |
| BAPI_TRANSACTION_COMMIT | Commit TM Transaction / TM 트랜잭션 커밋 | Commit all TM BAPI changes |
