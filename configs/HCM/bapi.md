# HCM - Human Capital Management BAPIs & Function Modules
# HCM - 인적 자본 관리 BAPI 및 기능 모듈

## Core BAPIs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| BAPI_EMPLOYEE_GETDATA | Get Employee Data / 직원 데이터 조회 | Read employee infotype data for given personnel number and infotype |
| BAPI_EMPLOYEE_ENQUEUE | Lock Employee Record / 직원 레코드 잠금 | Enqueue employee before making changes |
| BAPI_EMPLOYEE_DEQUEUE | Unlock Employee Record / 직원 레코드 잠금 해제 | Dequeue employee after changes |
| BAPI_PERSDATA_CREATE | Create Personnel Data / 인사 데이터 생성 | Create new infotype record for employee |
| BAPI_PERSDATA_CHANGE | Change Personnel Data / 인사 데이터 변경 | Modify existing infotype record |
| BAPI_PERSDATA_DELETE | Delete Personnel Data / 인사 데이터 삭제 | Delimit or delete infotype record |
| BAPI_PERSDATA_GETDETAIL | Get Personnel Data Detail / 인사 데이터 상세 조회 | Read specific infotype record (IT0001, IT0002, IT0007...) |
| BAPI_EMPLOYMENT_GETLIST | Get Employment List / 재직 목록 조회 | Retrieve list of employees by various criteria |
| BAPI_HRORGUNIT_GETLIST | Get Org Unit List / 조직 단위 목록 조회 | List organizational units from OM |
| BAPI_HRORGUNIT_GETDETAIL | Get Org Unit Detail / 조직 단위 상세 조회 | Read org unit attributes (HRP1000, HRP1001) |
| BAPI_ORGUNITREL_GETLIST | Get Org Unit Relationships / 조직 단위 관계 목록 조회 | Read org unit relationship data |

## Organizational Management BAPIs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| BAPI_POSITION_GETDETAIL | Get Position Detail / 직위 상세 조회 | Read position data from OM (HRP1000, HRP1001) |
| BAPI_POSITION_GETLIST | Get Position List / 직위 목록 조회 | List positions in organizational structure |
| BAPI_ORGOBJECT_CREATE | Create OM Object / OM 개체 생성 | Create org unit, position, job in OM |
| BAPI_ORGOBJECT_CHANGE | Change OM Object / OM 개체 변경 | Modify OM object attributes |

## Time Management BAPIs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| BAPI_ABSENCE_CREATE | Create Absence Record / 결근 레코드 생성 | Create absence infotype IT2001 record |
| BAPI_ABSENCE_GETLIST | Get Absence List / 결근 목록 조회 | Read absence records for employee |
| BAPI_TIMESHEETADM_APPROVE | Approve Time Sheet / 시간 기록 승인 | Approve CATS time sheet entries |
| BAPI_TIMESHEETADM_REJECT | Reject Time Sheet / 시간 기록 거부 | Reject CATS time sheet entries |
| RPTQTA00 | Quota Generation / 할당량 생성 | Generate leave quotas for employees (program, not FM) |

## Payroll FMs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| PYXX_READ_PAYROLL_RESULT | Read Payroll Result / 급여 결과 조회 | Read payroll cluster data (RT, CRT, BT tables) from PCL2 |
| HR_DISPLAY_PAYRESULT | Display Payroll Result / 급여 결과 표시 | Display formatted payroll result cluster |
| CU_READ_RGDIR | Read Payroll Directory / 급여 디렉토리 조회 | Read payroll run directory (RGDIR) for employee |
| BAPI_PAYROLL_SIMULATION | Simulate Payroll / 급여 시뮬레이션 | Run payroll simulation for employee |

## Utility FMs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| HR_READ_INFOTYPE | Read HR Infotype / HR 인포 유형 조회 | Generic internal FM to read any infotype for personnel number |
| RP_READ_ALL_TIME_ITY | Read All Time Infotypes / 모든 시간 인포 유형 조회 | Read all time-relevant infotypes for employee |
| BAPI_HRPAYROLL_GETLIST | Get Payroll Area List / 급여 영역 목록 조회 | List payroll areas from T549A |
| RH_READ_OBJECT | Read OM Object / OM 개체 조회 | Read any OM object by object type and ID |
