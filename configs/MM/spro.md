# MM - Materials Management SPRO Configuration
# MM - 자재 관리 SPRO 설정

## Enterprise Structure
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Plant | V_T001W | 플랜트 정의 |
| Define Storage Location | V_T001L | 저장 위치 정의 |
| Define Purchasing Organization | V_T024E | 구매 조직 정의 |
| Assign Purchasing Organization to Company Code | V_T024E_KO | 구매 조직을 회사코드에 배정 |
| Assign Purchasing Organization to Plant | V_T024E_WE | 구매 조직을 플랜트에 배정 |
| Define Purchasing Group | V_T024 | 구매 그룹 정의 |
| Assign Plant to Company Code | V_T001K | 플랜트를 회사코드에 배정 |

## Master Data
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Material Types | V_T134 | 자재 유형 정의 (ROH, HALB, FERT, HAWA...) |
| Define Number Ranges for Material Types | T134 | 자재 유형별 번호 범위 |
| Define Industry Sectors | V_T137 | 산업 분야 정의 |
| Define Material Groups | V_T023 | 자재 그룹 정의 |
| Define Units of Measure | T006 | 측정 단위 정의 |
| Define Vendor Account Groups | V_T077K | 공급업체 계정 그룹 정의 |
| Define Number Ranges for Vendors | T077K | 공급업체 번호 범위 |
| Define Info Record Types | V_EINE | 정보 레코드 유형 정의 |
| Define Source List | V_EORD | 소스 목록 정의 |

## Basic Functions / Valuation
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Valuation Areas | V_T001K | 평가 영역 정의 |
| Define Valuation Classes | V_T025 | 평가 클래스 정의 |
| Define Account Category Reference | V_T025B | 계정 범주 참조 정의 |
| Configure Account Determination | V_OBYC | 자동 계정 결정 설정 (GBB, BSX...) |
| Define Price Control | V_T001W_PC | 가격 통제 정의 (S=Standard, V=Moving Average) |
| Split Valuation Configuration | V_T149D | 분할 평가 설정 |

## Purchasing Configuration
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Document Types for PO | V_T161 | 구매 오더 문서 유형 정의 (NB, FO, UB...) |
| Define Number Ranges for PO | T161 | 구매 오더 번호 범위 |
| Define Item Categories for PO | V_T163 | 구매 오더 항목 범주 정의 (K, L, D, B...) |
| Define Account Assignment Categories | V_T163K | 계정 배정 범주 정의 (K=Cost Center, P=Project...) |
| Set Tolerance Limits for PO | V_T169G | 구매 오더 허용 오차 한도 설정 |
| Define Release Procedures (PO) | V_T16FK | 구매 오더 릴리즈 절차 정의 |
| Configure Conditions for Purchasing | V_T685_MM | 구매 조건 설정 |
| Define Price Determination Schema | V_T683_MM | 가격 결정 스키마 정의 |

## Inventory Management
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Movement Types | V_156 | 이동 유형 정의 (101, 201, 261, 301...) |
| Define Special Stock Types | V_T148 | 특수 재고 유형 정의 |
| Configure Goods Receipt Tolerances | V_WEPOS | 입고 허용 오차 설정 |
| Define Reasons for Goods Movements | V_T157H | 재고 이동 이유 정의 |
| Set Missing Parts Checking | V_MDMT | 누락 부품 검사 설정 |

## Invoice Verification (LIV)
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Configure Tolerance Limits (LIV) | V_T169G | 송장 검증 허용 오차 한도 |
| Define Blocking Reasons (LIV) | V_T169L | 송장 블록 이유 정의 |
| Configure Automatic Settlement | V_RBKP | 자동 정산 설정 |
| Define Tax Codes for Purchasing | V_T059Z | 구매용 세금 코드 정의 |
