# HCM - Human Capital Management SPRO Configuration
# HCM - 인적 자본 관리 SPRO 설정

## Enterprise Structure
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Personnel Area | V_T500P | 인사 영역 정의 |
| Define Personnel Subarea | V_T001P | 인사 하위 영역 정의 |
| Define Employee Group | V_T501 | 직원 그룹 정의 |
| Define Employee Subgroup | V_T503 | 직원 하위 그룹 정의 |
| Assign Employee Subgroup to Employee Group | V_T503K | 직원 하위 그룹을 직원 그룹에 배정 |
| Define Company Code for HCM | V_T500L | HCM용 회사코드 정의 |
| Assign Personnel Area to Company Code | V_T500P_KO | 인사 영역을 회사코드에 배정 |

## Personnel Administration (PA)
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Info Types | V_T777D | 인포 유형 정의 |
| Define Number Ranges for Personnel Numbers | NUMKR | 인사 번호 번호 범위 정의 |
| Define Actions | V_T529A | 인사 조치 정의 (hiring, transfer, termination...) |
| Define Reasons for Actions | V_T530 | 조치 이유 정의 |
| Configure Personnel Action Types | V_T529T | 인사 조치 유형 설정 |
| Define Job / Position Definitions | V_T513 | 직무/직위 정의 |
| Define Pay Scale Structure | V_T510 | 급여 등급 구조 정의 |
| Define Pay Scale Types | V_T510A | 급여 등급 유형 정의 |
| Define Pay Scale Areas | V_T510B | 급여 등급 지역 정의 |

## Organizational Management (OM)
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Object Types | V_T778O | 개체 유형 정의 (O=Org Unit, S=Position, C=Job...) |
| Define Relationship Types | V_T778A | 관계 유형 정의 |
| Define Plan Versions | V_T778G | 계획 버전 정의 |
| Configure Evaluation Paths | V_T778E | 평가 경로 설정 |
| Define Feature for OM Integration | V_TPARK | OM 통합 기능 정의 |

## Time Management
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Work Schedule Rules | V_T508A | 근무 일정 규칙 정의 |
| Define Break Schedules | V_T550P | 휴식 일정 정의 |
| Define Daily Work Schedules | V_T550A | 일별 근무 일정 정의 |
| Define Period Work Schedules | V_T551A | 기간별 근무 일정 정의 |
| Define Public Holiday Classes | V_T513M | 공휴일 클래스 정의 |
| Define Factory Calendar | V_TFACD | 공장 달력 정의 |
| Configure Absence Types | V_T554S | 결근 유형 설정 |
| Configure Attendance Types | V_T554L | 출근 유형 설정 |
| Define Time Evaluation Schema | V_T52C5 | 근무 시간 평가 스키마 정의 |

## Payroll
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Payroll Area | V_T549A | 급여 영역 정의 |
| Define Control Record for Payroll | V_T549S | 급여 통제 레코드 정의 |
| Define Wage Types | V_512W | 급여 유형 정의 |
| Define Processing Classes | V_T512E | 처리 클래스 정의 |
| Define Evaluation Classes | V_T512F | 평가 클래스 정의 |
| Configure Payroll Schema | V_T52C0 | 급여 스키마 설정 |
| Define Payroll Posting to FI | V_T52EK | FI에 급여 전기 설정 |
| Configure Tax Calculation | V_T5D0K | 세금 계산 설정 (country-specific) |
