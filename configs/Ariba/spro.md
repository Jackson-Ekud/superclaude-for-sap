# Ariba - SAP Ariba Integration SPRO Configuration
# Ariba - SAP Ariba 통합 SPRO 설정

## Enterprise Structure / Integration Setup
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define Integration Scenarios for Ariba | V_ARIBA_SCEN | Ariba 통합 시나리오 정의 |
| Configure Ariba Network Connection | V_ARIBA_NET | Ariba 네트워크 연결 설정 |
| Define Ariba System ID | V_ARIBA_SYS | Ariba 시스템 ID 정의 |
| Configure RFC Destinations for Ariba | SM59 config | Ariba용 RFC 대상 설정 |
| Define Logical Ports for Ariba Web Services | SOAMANAGER | Ariba 웹 서비스 논리적 포트 정의 |
| Map SAP Company Code to Ariba Realm | V_ARIBA_CO | SAP 회사코드를 Ariba 영역에 매핑 |

## Procurement Integration (Ariba Buying)
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Configure Punch-Out Catalog Integration | V_ARIBA_CAT | Punch-Out 카탈로그 통합 설정 |
| Define Requisition Transfer to Ariba | V_ARIBA_REQ | Ariba로의 구매 요청 전송 정의 |
| Configure PO Transfer from SAP to Ariba | V_ARIBA_PO | SAP에서 Ariba로의 PO 전송 설정 |
| Define Confirmation/Invoice Transfer | V_ARIBA_INV | 확인/송장 전송 정의 |
| Configure Goods Receipt Transfer | V_ARIBA_GR | 입고 전송 설정 |
| Define Approval Workflow Integration | V_ARIBA_APR | 승인 워크플로우 통합 정의 |

## Sourcing Integration (Ariba Sourcing)
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Configure RFx Transfer to Ariba | V_ARIBA_RFX | Ariba로의 RFx 전송 설정 |
| Define Contract Transfer (Ariba→SAP) | V_ARIBA_CTR | 계약 전송 정의 (Ariba→SAP) |
| Configure Supplier Qualification Data | V_ARIBA_SUP | 공급업체 자격 데이터 설정 |
| Define Commodity Code Mapping | V_ARIBA_COMM | 상품 코드 매핑 정의 |

## Supplier Management (Ariba SLP)
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Configure Supplier Master Data Sync | V_ARIBA_VEN | 공급업체 마스터 데이터 동기화 설정 |
| Define Vendor Account Group for Ariba Suppliers | V_T077K_ARB | Ariba 공급업체용 계정 그룹 정의 |
| Configure Ariba Network Vendor ID Mapping | V_ARIBA_ANID | Ariba Network ID 매핑 설정 |
| Define Supplier Evaluation Transfer | V_ARIBA_SEV | 공급업체 평가 전송 정의 |

## Invoice Management (Ariba Invoice)
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Configure Invoice Transfer from Ariba | V_ARIBA_EINV | Ariba에서의 전자 송장 전송 설정 |
| Define Three-Way Match Settings | V_ARIBA_3WM | 3방향 매칭 설정 정의 |
| Configure Invoice Approval Routing | V_ARIBA_IAP | 송장 승인 라우팅 설정 |
| Define Tolerance Settings for e-Invoicing | V_ARIBA_TOL | 전자 송장 허용 오차 설정 정의 |
| Configure Payment Terms Mapping | V_ARIBA_PTM | 지급 조건 매핑 설정 |

## IDoc / Middleware Configuration
| Config Name | Table/View | Description |
|------------|-----------|-------------|
| Define IDoc Message Types for Ariba | V_ARIBA_IDT | Ariba용 IDoc 메시지 유형 정의 |
| Configure Partner Profiles for Ariba | WE20 | Ariba용 파트너 프로파일 설정 |
| Define Port for Ariba IDoc Exchange | WE21 | Ariba IDoc 교환 포트 정의 |
| Configure cXML Mapping Rules | V_ARIBA_XML | cXML 매핑 규칙 설정 |
