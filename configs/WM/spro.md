# WM - Warehouse Management SPRO Configuration
# WM - 창고 관리 SPRO 설정

## Enterprise Structure
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Warehouse Number | V_T300 | 창고 번호 정의 |
| Define Storage Types | V_T301 | 저장 유형 정의 |
| Define Storage Sections | V_T302 | 저장 구역 정의 |
| Define Storage Bin Types | V_T303 | 저장 빈 유형 정의 |
| Assign Warehouse Number to Plant/Storage Location | V_T320 | 창고 번호를 플랜트/저장 위치에 배정 |
| Define Picking Areas | V_T304 | 피킹 영역 정의 |
| Define Door Numbers | V_T305 | 도어 번호 정의 |
| Define Staging Areas | V_T306 | 스테이징 영역 정의 |

## Master Data
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Storage Bin Structure | V_T307 | 저장 빈 구조 정의 |
| Configure Bin Status | V_T308 | 빈 상태 설정 |
| Define Quant Restrictions | V_T309 | 재고 제한 정의 |
| Define Storage Type Search | V_T310 | 저장 유형 검색 정의 |
| Configure Bin Search Strategy | V_T311 | 빈 검색 전략 설정 |
| Define Storage Unit Types | V_T315 | 저장 단위 유형 정의 |
| Define Hazardous Material Indicators | V_T312 | 위험 자재 표시자 정의 |

## Transfer Order Management
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Movement Types for WM | V_T333 | WM 이동 유형 정의 (101, 201, 311...) |
| Define Control Parameters for TO Creation | V_T333C | TO 생성 통제 매개변수 정의 |
| Configure Transfer Order Item Control | V_T333I | 이전 지시 항목 통제 설정 |
| Define Number Ranges for Transfer Orders | NUMKR_WM | 이전 지시 번호 범위 정의 |
| Configure Confirmation Requirements | V_T333K | 확인 요구사항 설정 |
| Define Printer Determination for TO | V_T333D | TO 프린터 결정 정의 |

## Putaway/Picking Strategies
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Putaway Strategies | V_T334 | 입고 전략 정의 (Open storage, Fixed bin, Next empty bin...) |
| Define Picking Strategies | V_T335 | 피킹 전략 정의 (FIFO, FEFO, Fixed bin...) |
| Configure Stock Removal Strategy | V_T336 | 재고 제거 전략 설정 |
| Define Bulk Storage Indicators | V_T337 | 벌크 저장 표시자 정의 |
| Configure Addition to Existing Stock | V_T338 | 기존 재고 추가 설정 |

## Interfaces
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Configure WM-IM Interface | V_T340 | WM-IM 인터페이스 설정 |
| Define Posting Change Notices | V_T341 | 전기 변경 통지 정의 |
| Configure Integration with PP (KANBAN) | V_T342 | PP 통합 설정 (KANBAN) |
| Define Interface to QM | V_T343 | QM 인터페이스 정의 |

## Lean Warehouse Management
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Activate Lean WM | V_T320L | 린 WM 활성화 |
| Define Lean WM Movement Types | V_T333L | 린 WM 이동 유형 정의 |
| Configure Automatic TO Creation | V_T344 | 자동 TO 생성 설정 |
