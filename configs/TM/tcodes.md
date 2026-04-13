# TM - Transportation Management Transaction Codes
# TM - 운송 관리 트랜잭션 코드

## Master Data
| TCode | Description |
|-------|-------------|
| /SCMTMS/MD_LOC | Maintain Locations / 위치 유지 |
| /SCMTMS/MD_RES | Maintain Resources / 자원 유지 |
| /SCMTMS/MD_CAR | Maintain Carrier / 운송 업체 유지 |
| /SCMTMS/MD_LANE | Maintain Transportation Lane / 운송 레인 유지 |
| /SCMTMS/MD_ZONE | Maintain Transportation Zone / 운송 구역 유지 |
| VT01N | Create Shipment (LE-TRA) / 출하 생성 (LE-TRA) |
| VT02N | Change Shipment / 출하 변경 |
| VT03N | Display Shipment / 출하 조회 |

## Freight Order Processing
| TCode | Description |
|-------|-------------|
| /SCMTMS/FO_MAINT | Maintain Freight Order / 화물 오더 유지 |
| /SCMTMS/FO_DISP | Display Freight Order / 화물 오더 조회 |
| /SCMTMS/FU_MAINT | Maintain Freight Unit / 화물 단위 유지 |
| /SCMTMS/FB_MAINT | Maintain Freight Booking / 화물 예약 유지 |
| /SCMTMS/PLN_WKBK | Transportation Planning Workbench / 운송 계획 워크벤치 |

## Tendering
| TCode | Description |
|-------|-------------|
| /SCMTMS/TEND | Carrier Selection / Tendering / 운송 업체 선택/입찰 |
| /SCMTMS/TEND_MON | Tendering Monitor / 입찰 모니터 |

## Charge Calculation
| TCode | Description |
|-------|-------------|
| /SCMTMS/FRG_AGR | Maintain Freight Agreement / 운임 합의 유지 |
| /SCMTMS/FRG_CALC | Freight Cost Calculation / 운임 계산 |
| /SCMTMS/FRG_SETL | Freight Settlement / 운임 정산 |

## Configuration
| TCode | Description |
|-------|-------------|
| SPRO | TM Customizing / TM 커스터마이징 |
| /SCMTMS/CUST | TM Customizing Cockpit / TM 커스터마이징 조종석 |
| OVR1 | Define Routes (LE) / 경로 정의 (LE) |
| OVR2 | Assign Routes / 경로 배정 |
| OVST | Define Shipping Types / 출하 유형 정의 |

## Reporting
| TCode | Description |
|-------|-------------|
| VT11 | Shipment List / 출하 목록 |
| /SCMTMS/FO_LIST | Freight Order List / 화물 오더 목록 |
| /SCMTMS/COCKPIT | TM Cockpit / TM 조종석 |
| VT70 | Output from Shipments / 출하 출력 |

## Monitoring
| TCode | Description |
|-------|-------------|
| /SCMTMS/MON_FO | Freight Order Monitor / 화물 오더 모니터 |
| /SCMTMS/MON_TTE | Tracking and Tracing Monitor / 추적 모니터 |
| /SCMTMS/MON_EVT | Event Monitor / 이벤트 모니터 |
| VT22 | Shipment Stages / 출하 단계 |
