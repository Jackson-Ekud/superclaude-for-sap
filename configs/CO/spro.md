# CO - Controlling SPRO Configuration
# CO - 관리 회계 SPRO 설정

## Enterprise Structure
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Controlling Area | V_TKA01 | 관리 영역 정의 |
| Assign Company Code to Controlling Area | V_TKA02 | 회사코드를 관리 영역에 배정 |
| Define Number Ranges for Controlling Documents | KANK | 관리 문서 번호 범위 정의 |
| Maintain Versions | V_TKA09 | 버전 유지 (Plan/Actual) |
| Define Fiscal Year Variant for CO | V_TKA01_GJ | CO 회계 연도 변형 정의 |

## Cost Element Accounting
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Primary Cost Element Categories | V_CSKA | 1차 원가 요소 범주 정의 |
| Define Secondary Cost Element Categories | V_CSKA2 | 2차 원가 요소 범주 정의 |
| Create Cost Elements Automatically | V_CSKB_AUTO | 원가 요소 자동 생성 |
| Define Cost Element Groups | V_KANK_GRP | 원가 요소 그룹 정의 |
| Define Default Account Assignments | V_TKA3A | 기본 계정 배정 정의 |

## Cost Center Accounting (CCA)
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Cost Center Types | V_CSKT | 원가 센터 유형 정의 |
| Define Cost Center Standard Hierarchy | V_TKA07 | 원가 센터 표준 계층 정의 |
| Create Cost Centers | CSKS | 원가 센터 생성 |
| Define Activity Types | V_CSLT | 활동 유형 정의 |
| Define Statistical Key Figures | V_TKEV | 통계 주요 수치 정의 |
| Configure Plan/Actual Settlement | V_OKEV | 계획/실적 정산 설정 |
| Define Assessment Cycles | V_RKAB | 배분 사이클 정의 |
| Define Distribution Cycles | V_RKDV | 분배 사이클 정의 |

## Internal Orders
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Order Types | V_T003O | 주문 유형 정의 |
| Define Number Ranges for Orders | KONK | 주문 번호 범위 정의 |
| Define Status Profile for Orders | V_TJ30 | 주문 상태 프로파일 정의 |
| Define Settlement Profiles | V_OKOA | 정산 프로파일 정의 |
| Define Planning Profiles | V_TKA0A | 계획 프로파일 정의 |
| Configure Budget Management | V_IMAVB | 예산 관리 설정 |
| Define Order Groups | V_KANK_ORD | 주문 그룹 정의 |

## Product Costing (CO-PC)
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Costing Types | V_T8300 | 원가 계산 유형 정의 |
| Define Valuation Variants | V_T8301 | 평가 변형 정의 |
| Define Costing Variants | V_T8305 | 원가 계산 변형 정의 |
| Define Overhead Groups | V_TKA07_OH | 간접비 그룹 정의 |
| Define Overhead Keys | V_TKKOA | 간접비 키 정의 |
| Configure Costing Sheet | V_T8307 | 원가 계산 시트 설정 |
| Define Results Analysis Keys | V_TKKA | 결과 분석 키 정의 |

## Profitability Analysis (CO-PA)
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Operating Concern | V_TKE1 | 손익 분석 영역 정의 |
| Assign Operating Concern to Controlling Area | V_TKA01_PA | 손익 분석 영역을 관리 영역에 배정 |
| Define Characteristics | V_TKEG | 특성 정의 |
| Define Value Fields | V_TKEV_PA | 금액 필드 정의 |
| Define PA Transfer Structure | V_TKEVS | PA 전송 구조 정의 |
| Configure Profitability Report | V_KEA0 | 수익성 보고서 설정 |
