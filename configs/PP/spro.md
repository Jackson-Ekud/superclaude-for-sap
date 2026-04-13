# PP - Production Planning SPRO Configuration
# PP - 생산 계획 SPRO 설정

## Enterprise Structure
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Plant | V_T001W | 플랜트 정의 (MM과 공유) |
| Define MRP Controller | V_T024D | MRP 담당자 정의 |
| Define Production Scheduler | V_T024F | 생산 일정 담당자 정의 |
| Assign MRP Controller to Plant | V_T024D_W | MRP 담당자를 플랜트에 배정 |

## Master Data
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Work Center Categories | V_TC24 | 작업장 범주 정의 |
| Define Work Center Formulas | V_TC26 | 작업장 수식 정의 (용량 계산) |
| Define Routing Types | V_TC22 | 라우팅 유형 정의 |
| Define Control Keys for Operations | V_TC25 | 공정 관리 키 정의 |
| Define Standard Values | V_TC29 | 표준값 정의 |
| Define BOM Item Categories | V_TC46 | BOM 항목 범주 정의 |
| Define BOM Usage | V_TC44 | BOM 사용 유형 정의 (Production, Engineering...) |
| Configure BOM Status | V_TC49 | BOM 상태 설정 |
| Define BOM Alternative Determination | V_TC44_ALT | BOM 대안 결정 설정 |

## MRP Configuration
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define MRP Types | V_T438A | MRP 유형 정의 (PD, VB, VM...) |
| Define Lot Sizing Procedures | V_T439 | 로트 크기 결정 절차 정의 |
| Define Special Procurement Types | V_T460A | 특수 조달 유형 정의 |
| Configure MRP Parameters per Plant | V_T438M | 플랜트별 MRP 매개변수 설정 |
| Define Safety Stock / Reorder Point | V_MARC_MRP | 안전 재고/재주문점 설정 |
| Configure Planning Time Fence | V_MARC_PTF | 계획 시간 제한 설정 |
| Define Scheduling Parameters | V_T460S | 일정 계획 매개변수 정의 |
| Configure Availability Check for PP | V_MTVFP_PP | PP용 가용성 검사 설정 |

## Production Orders
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Order Types (PP) | V_T003O_PP | PP 주문 유형 정의 (PP01, PP02...) |
| Define Order Type Parameters | V_TCO1 | 주문 유형 매개변수 정의 |
| Define Confirmation Parameters | V_TCO9 | 확인 매개변수 정의 |
| Define Goods Movement Defaults | V_TCO15 | 기본 재고 이동 정의 |
| Configure Backflushing | V_TCO10 | 역방향 소비 설정 |
| Define Production Scheduling Profile | V_TC62 | 생산 일정 프로파일 정의 |
| Configure Shop Floor Information System | V_TC50 | 현장 정보 시스템 설정 |

## Capacity Planning
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Capacity Categories | V_TC23 | 용량 범주 정의 |
| Define Shift Sequences | V_TC27 | 교대 순서 정의 |
| Define Factory Calendar | V_TFACD | 공장 달력 정의 |
| Configure Capacity Leveling | V_TC28 | 용량 평준화 설정 |

## Repetitive Manufacturing
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Repetitive Manufacturing Profile | V_TCF1 | 반복 생산 프로파일 정의 |
| Configure Backflush Control | V_TCF2 | 역방향 소비 제어 설정 |
| Define Line Hierarchy | V_TCF3 | 라인 계층 정의 |
