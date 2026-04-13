# BW - Business Warehouse SPRO Configuration
# BW - 비즈니스 웨어하우스 SPRO 설정

## Enterprise Structure / System Settings
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Source Systems | RSDS | 소스 시스템 정의 (SAP ERP, file, web services) |
| Define BW System Settings | RSADMIN | BW 시스템 설정 정의 |
| Configure RFC Connections for BW | SM59 | BW용 RFC 연결 설정 |
| Define Currency Translation Types | RSCRM | 통화 환산 유형 정의 |
| Define Time-Dependent Hierarchies | RSHIEOBJ | 시간 의존 계층 정의 |

## InfoObjects (Master Data)
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define InfoObject Catalog | RSOBJCAT | InfoObject 카탈로그 정의 |
| Create Characteristic InfoObjects | RSDIOBC | 특성 InfoObject 생성 (0CUSTOMER, 0MATERIAL...) |
| Create Key Figure InfoObjects | RSDIOBJ | 주요 수치 InfoObject 생성 |
| Define Attributes for Characteristics | RSDIOBIATTR | 특성 속성 정의 |
| Configure Hierarchies for InfoObjects | RSHIEOBJ | InfoObject 계층 설정 |
| Define Compounding Characteristics | RSDIOBCOMP | 복합 특성 정의 |
| Maintain Master Data Tables | /BIC/M* or /BI0/M* | 마스터 데이터 테이블 유지 |

## InfoProviders
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Create InfoCube | RSDCUBE | InfoCube 생성 (star schema structure) |
| Create DataStore Object (DSO) | RSODSO | DataStore Object 생성 (ODS layer) |
| Create Advanced DSO | RSDODSO | Advanced DSO 생성 (BW/4HANA) |
| Create Composite Provider | RSPROVIDER | 복합 공급자 생성 |
| Create InfoSet (Joins) | RSINFOSOURCE | InfoSet 생성 (join multiple providers) |
| Create MultiProvider | RSMULTIPROV | 멀티 공급자 생성 |
| Create VirtualProvider | RSVIRTPROV | 가상 공급자 생성 (real-time access) |

## Data Flow / ETL
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Create InfoSource | RSINFOSOURCE | InfoSource 생성 (transformation source) |
| Define DataSources | ROOSOURCE | DataSource 정의 (extractor-based) |
| Create Transformation Rules | RSTRANSF | 변환 규칙 생성 |
| Create Data Transfer Process (DTP) | RSDTP | 데이터 전송 프로세스 생성 |
| Define InfoPackage | RSPCCHAIN | InfoPackage 정의 (delta/full load) |
| Configure Open Hub Destination | RSOHS | Open Hub 대상 설정 |
| Define Process Chains | RSPCCHAIN | 프로세스 체인 정의 |

## Reporting / Analysis
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Create Query (BEx Query Designer) | RSZCOMPDIR | 쿼리 생성 (BEx 쿼리 디자이너) |
| Define Workbooks | RSZWBINDX | 워크북 정의 |
| Configure Web Templates | RSRWBTEMPLA | 웹 템플릿 설정 |
| Define Variables | RSZGLOBV | 변수 정의 (selection variables, formula variables) |
| Create Restricted Key Figures | RSZCEL | 제한된 주요 수치 생성 |
| Create Calculated Key Figures | RSZCEL | 계산된 주요 수치 생성 |
| Configure BW Authorizations | RSECADMIN | BW 권한 설정 |

## Performance / Administration
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Aggregates | RSDDAGGRDIR | 집계 정의 |
| Configure BW Accelerator (BWA) | RSBWACOCKPIT | BW 가속기 설정 |
| Define Partitioning for InfoCubes | RSDCUBEDIM | InfoCube 파티셔닝 정의 |
| Configure Compression Settings | RSADMIN | 압축 설정 구성 |
| Define Data Archiving | SARA | 데이터 아카이빙 정의 |
