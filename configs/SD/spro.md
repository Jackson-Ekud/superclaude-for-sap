# SD - Sales and Distribution SPRO Configuration
# SD - 영업 및 유통 SPRO 설정

## Enterprise Structure
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Sales Organization | V_TVKO | 판매 조직 정의 (Sales Org → Company Code mapping) |
| Define Distribution Channel | V_TVTW | 유통 채널 정의 |
| Define Division | V_TSPA | 제품군(사업부) 정의 |
| Assign Sales Organization to Company Code | V_BUKRS_ASSIGN | 판매 조직을 회사코드에 배정 |
| Assign Distribution Channel to Sales Organization | V_TVKOV | 유통 채널을 판매 조직에 배정 |
| Assign Division to Sales Organization | V_TVKOS | 사업부를 판매 조직에 배정 |
| Set up Sales Area | V_TVTA | 판매 영역 설정 (Sales Org + Dist. Channel + Division) |
| Assign Sales Office to Sales Area | V_TVBUR_KO | 판매 사무소를 판매 영역에 배정 |
| Define Sales Group | V_TVKGR | 판매 그룹 정의 |

## Master Data
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Account Groups for Customers | V_T077D | 고객 계정 그룹 정의 |
| Define Number Ranges for Customers | T077D / TONR | 고객 번호 범위 설정 |
| Assign Number Ranges to Customer Account Groups | V_T077D | 번호 범위를 고객 그룹에 배정 |
| Define Customer-Material Info Record | V_KNMT | 고객-자재 정보 레코드 정의 |
| Define Partner Functions | V_TPAR | 파트너 기능 정의 (SP, SH, BP, PY) |
| Define Partner Determination Procedures | V_TPAER | 파트너 결정 절차 정의 |
| Set Material Types for Sales | V_TMVST | 판매용 자재 유형 설정 |
| Define Item Categories for Sales Documents | V_TVAPt | 판매 문서 항목 범주 정의 |

## Basic Functions
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Blocking Reasons | V_TVV1 | 판매 블록 이유 정의 |
| Define Incompletion Procedures | V_TVUVK | 불완전 절차 정의 |
| Assign Incompletion Procedures to Sales Document Types | V_TVUVK_A | 불완전 절차를 판매 문서 유형에 배정 |
| Define Text Types for Sales Documents | V_TTXID | 판매 문서 텍스트 유형 정의 |
| Configure Output Determination | V_TNAPR | 출력 결정 설정 (Output Condition Tables) |
| Define Credit Management Control | V_T691F | 신용 관리 통제 설정 |
| Define Risk Categories | V_T691C | 신용 위험 범주 정의 |
| Configure Availability Check | V_MTVFP | 가용성 검사 설정 |
| Define Checking Groups | V_TMVFU | 검사 그룹 정의 |

## Transaction/Document Config
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Sales Document Types | V_TVAK | 판매 문서 유형 정의 (OR, QT, CR, DR...) |
| Define Number Ranges for Sales Documents | VN01 / T180 | 판매 문서 번호 범위 |
| Define Item Categories for Sales Documents | V_TVAPT | 판매 문서 항목 범주 (TAN, TAD, TANN...) |
| Assign Item Categories | V_TVAPZ | 항목 범주 배정 규칙 |
| Define Schedule Line Categories | V_TVEP | 납품 일정 행 범주 정의 (CP, CN...) |
| Assign Schedule Line Categories | V_TVEPZ | 납품 일정 행 범주 배정 |
| Define Delivery Document Types | V_TVSB | 납품 문서 유형 정의 (LF, LR...) |
| Define Billing Document Types | V_TVFK | 청구 문서 유형 정의 (F2, G2, L2...) |
| Define Order Reasons | V_TVGR2 | 주문 이유 정의 |
| Define Rejection Reasons | V_TVAG | 거부 이유 정의 |

## Pricing/Conditions
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Condition Types | V_T685 | 조건 유형 정의 (PR00, K004, K005...) |
| Define Pricing Procedures | V_T683 | 가격 결정 절차 정의 |
| Assign Pricing Procedures | V_T683V | 가격 결정 절차 배정 |
| Define Condition Tables | V_T685A | 조건 테이블 정의 |
| Maintain Access Sequences | V_T682 | 액세스 순서 유지 |
| Define Customer Pricing Procedure | V_KALKU | 고객 가격 결정 절차 정의 |
| Define Document Pricing Procedure | V_TVAK_P | 문서 가격 결정 절차 정의 |
| Define Statistical Condition Types | V_T685S | 통계 조건 유형 정의 |

## Shipping Configuration
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Shipping Points | V_TVST | 출하 지점 정의 |
| Assign Shipping Points | V_TVSTZ | 출하 지점 배정 |
| Define Routes | V_TROSD | 경로 정의 |
| Define Route Determination | V_TROUTE | 경로 결정 설정 |
| Define Loading Groups | V_TVLA | 적재 그룹 정의 |
| Define Delivery Priorities | V_TVLP | 납품 우선순위 정의 |
| Configure Packing | V_TVPT | 포장 설정 |
| Define Goods Issue (GI) Tolerances | V_TMVFP | 출고 허용 오차 정의 |

## Output/Printing
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Maintain Output Types for Sales | V_TNAPR_V | 판매용 출력 유형 유지 |
| Define Condition Tables for Output | V_TNACS | 출력용 조건 테이블 정의 |
| Assign Output Types to Partners | V_TNAPN | 출력 유형을 파트너에 배정 |
| Configure Billing Output | V_TNAPR_F | 청구 출력 설정 |
| Maintain Print Parameters | V_TNAPT | 인쇄 매개변수 유지 |
