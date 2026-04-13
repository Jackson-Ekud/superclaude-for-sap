# PM - Plant Maintenance SPRO Configuration
# PM - 설비 관리 SPRO 설정

## Enterprise Structure
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Maintenance Plant | V_T001W | 유지보수 플랜트 정의 |
| Define Maintenance Planning Plant | V_T399A | 유지보수 계획 플랜트 정의 |
| Assign Maintenance Planning Plant to Maintenance Plant | V_T001W_IW | 유지보수 계획 플랜트를 유지보수 플랜트에 배정 |
| Define Business Area for PM | V_TGSB_PM | PM용 사업 영역 정의 |

## Technical Objects (Master Data)
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Functional Location Categories | V_T370C | 기능 위치 범주 정의 |
| Define Structure Indicators for FL | V_T370K | 기능 위치 구조 표시자 정의 |
| Configure Functional Location Hierarchy | V_T370S | 기능 위치 계층 설정 |
| Define Equipment Categories | V_T370E | 설비 범주 정의 |
| Define Object Types | V_T370O | 개체 유형 정의 |
| Define ABC Indicators | V_T370A | ABC 표시자 정의 |
| Configure Measuring Points | V_T352A | 측정점 설정 |
| Define Characteristics for Technical Objects | V_CABN | 기술 개체 특성 정의 |

## Maintenance Processing
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Order Types (PM) | V_T003O_PM | PM 주문 유형 정의 (PM01, PM02, PM03...) |
| Define Maintenance Activity Types | V_T353I | 유지보수 활동 유형 정의 |
| Define Priority Types | V_T356 | 우선순위 유형 정의 |
| Define Notification Types | V_T351 | 알림 유형 정의 (M1, M2, S1...) |
| Define Catalog Profiles | V_T352B | 카탈로그 프로파일 정의 |
| Configure Catalogs and Code Groups | V_T353 | 카탈로그 및 코드 그룹 설정 |
| Define Damage/Cause Codes | V_T357G | 손상/원인 코드 정의 |
| Configure Settlement Profile for PM | V_OKOA_PM | PM용 정산 프로파일 설정 |

## Preventive Maintenance
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Maintenance Strategies | V_T355 | 유지보수 전략 정의 |
| Define Maintenance Packages | V_T356P | 유지보수 패키지 정의 |
| Configure Scheduling Indicators | V_T355I | 일정 계획 표시자 설정 |
| Define Cycle Sets | V_T356C | 사이클 세트 정의 |
| Configure Call Object Parameters | V_T356K | 호출 개체 매개변수 설정 |

## Work Center / Resources
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Work Center Categories for PM | V_TC24_PM | PM용 작업장 범주 정의 |
| Define Qualification Types | V_T628 | 자격 유형 정의 |
| Define Personnel Work Centers | V_TC24_HR | 인사 작업장 정의 |
| Configure Capacities for PM | V_TC23_PM | PM용 용량 설정 |

## Controlling Integration
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Maintenance Cost Centers | V_CSKS_PM | 유지보수 원가 센터 정의 |
| Configure WBS Element Integration | V_PRPS_PM | WBS 요소 통합 설정 |
| Define Activity Types for PM | V_CSLA_PM | PM용 활동 유형 정의 |
