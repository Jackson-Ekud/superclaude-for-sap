# WM - Warehouse Management Transaction Codes
# WM - 창고 관리 트랜잭션 코드

## Master Data
| TCode | Description |
|-------|-------------|
| LS01N | Create Storage Bin / 저장 빈 생성 |
| LS02N | Change Storage Bin / 저장 빈 변경 |
| LS03N | Display Storage Bin / 저장 빈 조회 |
| LS04 | Set Storage Bin Lock / 저장 빈 잠금 설정 |
| LS05 | Block/Unblock Storage Type / 저장 유형 블록/해제 |
| LN01 | Create Warehouse Number / 창고 번호 생성 |
| LX02 | Storage Bin List / 저장 빈 목록 |

## Transfer Orders
| TCode | Description |
|-------|-------------|
| LT01 | Create Transfer Order for Inventory Diff / 재고 차이에 대한 TO 생성 |
| LT0A | Create Transfer Order from TR / TR로부터 TO 생성 |
| LT1A | Confirm Transfer Order Item / TO 항목 확인 |
| LT12 | Confirm Transfer Order / TO 확인 |
| LT21 | Display Transfer Order / TO 조회 |
| LT22 | Change Transfer Order / TO 변경 |
| LT4A | Cancel Transfer Order / TO 취소 |
| LT25 | Print Transfer Order / TO 인쇄 |
| MIGO | Goods Movement (triggers auto-TO) / 재고 이동 (자동 TO 트리거) |

## Transfer Requirements
| TCode | Description |
|-------|-------------|
| LB01 | Create Transfer Requirement / 이전 요청 생성 |
| LB02 | Change Transfer Requirement / 이전 요청 변경 |
| LB03 | Display Transfer Requirement / 이전 요청 조회 |
| LB10 | TR for Storage Type / 저장 유형별 이전 요청 |
| LB11 | TR Items / 이전 요청 항목 |

## Inventory
| TCode | Description |
|-------|-------------|
| MI01 | Create Physical Inventory Document / 실사 문서 생성 |
| MI04 | Enter Inventory Count / 재고 실사 입력 |
| MI07 | Post Inventory Differences / 재고 차이 전기 |
| LI01 | Create WM Inventory Document / WM 재고 실사 문서 생성 |
| LI02 | Change WM Inventory Document / WM 재고 실사 문서 변경 |
| LI04 | Enter WM Inventory Count / WM 재고 실사 입력 |
| LI20 | Post WM Inventory Differences / WM 재고 차이 전기 |
| LX26 | Start Annual Inventory / 연간 재고 실사 시작 |

## Configuration
| TCode | Description |
|-------|-------------|
| SPRO | WM Customizing / WM 커스터마이징 |
| LM00 | Lean WM Configuration / 린 WM 설정 |
| OMLT | Define Storage Type / 저장 유형 정의 |
| OMBO | Define Movement Types for WM / WM 이동 유형 정의 |

## Reporting
| TCode | Description |
|-------|-------------|
| LS26 | Stock Overview per Storage Bin / 저장 빈별 재고 개요 |
| LX03 | Bin Status Report / 빈 상태 보고서 |
| LX04 | Capacity Load Utilization / 용량 부하 활용도 |
| MB52 | Warehouse Stocks of Material / 창고 자재 재고 |
| LQ010 | Quants in Storage Type / 저장 유형별 재고 |

## Monitoring
| TCode | Description |
|-------|-------------|
| LT41 | Confirm TO in Foreground / 포그라운드에서 TO 확인 |
| LX05 | Log of TO without Confirmation / 확인 없는 TO 로그 |
| LX08 | Negative Stocks / 마이너스 재고 |
| LL01 | Warehouse Activity Monitor / 창고 활동 모니터 |
