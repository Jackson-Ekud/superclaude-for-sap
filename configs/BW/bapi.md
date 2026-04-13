# BW - Business Warehouse BAPIs & Function Modules
# BW - 비즈니스 웨어하우스 BAPI 및 기능 모듈

## Core BAPIs / APIs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| BAPI_IOBJ_GETLIST | Get InfoObject List / InfoObject 목록 조회 | List all InfoObjects of specified type (characteristic, key figure) |
| BAPI_IOBJ_GETDETAIL | Get InfoObject Detail / InfoObject 상세 조회 | Read InfoObject properties and attributes |
| BAPI_CUBE_GETLIST | Get InfoCube List / InfoCube 목록 조회 | List InfoCubes in BW system |
| BAPI_CUBE_GETDETAIL | Get InfoCube Detail / InfoCube 상세 조회 | Read InfoCube structure: dimensions, key figures |
| BAPI_ODSO_GETLIST | Get DSO List / DSO 목록 조회 | List DataStore Objects |
| BAPI_ODSO_GETDETAIL | Get DSO Detail / DSO 상세 조회 | Read DSO field structure |
| BAPI_QUERY_GETLIST | Get Query List / 쿼리 목록 조회 | List BEx queries for InfoProvider |
| BAPI_QUERY_GETDETAIL | Get Query Detail / 쿼리 상세 조회 | Read query definition, characteristics, key figures |

## Data Loading FMs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| RSDMD_MASTERDATA_WRITE | Write Master Data / 마스터 데이터 쓰기 | Load characteristic master data (attributes, texts, hierarchies) into BW |
| RSDMD_MASTERDATA_READ | Read Master Data / 마스터 데이터 읽기 | Read BW master data for a characteristic |
| RSIODS_WRITE_TO_ODSO | Write to DSO / DSO에 쓰기 | Write records to DataStore Object |
| RSIODS_READ_FROM_ODSO | Read from DSO / DSO에서 읽기 | Read data records from DSO active table |
| RSB_API_IPAK_GET_LIST | Get InfoPackage List / InfoPackage 목록 조회 | List InfoPackages for DataSource |
| RSB_API_IPAK_EXECUTE | Execute InfoPackage / InfoPackage 실행 | Trigger data load for InfoPackage (full or delta) |
| RSPC_API_CHAIN_START | Start Process Chain / 프로세스 체인 시작 | Programmatically start BW process chain |
| RSPC_API_CHAIN_GET_STATE | Get Process Chain State / 프로세스 체인 상태 조회 | Read current execution status of process chain |

## Query / Reporting FMs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| BICS_PROV_OPEN | Open BW Provider (BICS) / BW 공급자 열기 (BICS) | Open InfoProvider for data reading via BICS interface |
| BICS_PROV_GET_RESULT_SET | Get Query Result Set / 쿼리 결과 집합 조회 | Execute query and retrieve result data from BICS |
| BICS_PROV_CLOSE | Close BW Provider / BW 공급자 닫기 | Close BICS provider after reading |
| RSBOLAP_READ_DATA | Read OLAP Data / OLAP 데이터 읽기 | Read BW query result data (older API) |

## Extractor / Delta FMs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| RSA3_DATASOURCE_TEST | Test DataSource Extraction / DataSource 추출 테스트 | Simulate data extraction from source system (RSA3 equivalent) |
| RODPS_REPL_ODATA_SRV_CALL | Call ODP OData Service / ODP OData 서비스 호출 | Trigger ODP (Operational Data Provisioning) delta extraction |
| BAPI_MASTERDATA_SEND | Send Master Data to BW / BW에 마스터 데이터 전송 | Push master data from ERP to BW via ALE/IDoc |

## Utility FMs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| RSDRI_INFOPROV_READ | Read InfoProvider Data / InfoProvider 데이터 읽기 | Direct data read from any BW InfoProvider (cube, DSO, CompositeProvider) |
| RSSEM_BPS_WRITE_DATA | Write BPS Planning Data / BPS 계획 데이터 쓰기 | Write data to BW-BPS planning area |
| RSZR_GET_OBJECTS | Get Query Objects / 쿼리 개체 조회 | Read query metadata objects from RSZCOMPDIR |
