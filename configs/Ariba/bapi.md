# Ariba - SAP Ariba Integration BAPIs & Function Modules
# Ariba - SAP Ariba 통합 BAPI 및 기능 모듈

## Core Integration BAPIs / FMs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| BAPI_PO_CREATE1 | Create PO from Ariba Approved Requisition / Ariba 승인 요청에서 PO 생성 | Standard PO creation triggered by Ariba approved shopping cart via IDoc ORDERS05 |
| BAPI_PO_CHANGE | Change PO (sync back to Ariba) / PO 변경 (Ariba에 동기화) | Update PO fields; changes sent to Ariba via IDoc ORDCHG |
| BAPI_INCOMINGINVOICE_CREATE | Create Invoice from Ariba e-Invoice / Ariba 전자 송장에서 송장 생성 | Post vendor invoice received from Ariba Network (cXML invoice → IDoc → MIRO) |
| BAPI_GOODSMVT_CREATE | Post GR from Ariba-triggered Confirmation / Ariba 확인 기반 입고 전기 | Post goods receipt movement 101 after Ariba order confirmation |
| BAPI_VENDOR_CREATE | Create Vendor from Ariba SLP / Ariba SLP에서 공급업체 생성 | Create SAP vendor master for new Ariba-onboarded supplier |
| BAPI_VENDOR_CHANGE | Change Vendor Master from Ariba / Ariba에서 공급업체 마스터 변경 | Sync vendor data changes from Ariba Supplier Lifecycle and Performance |
| BAPI_CONTRACT_CREATEFROMDATA | Create Contract from Ariba Sourcing Award / Ariba 소싱 계약에서 계약 생성 | Create SAP outline agreement from Ariba sourcing award |

## IDoc-Based Integration FMs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| IDOC_INPUT_ORDERS | Process Inbound Order IDoc / 수신 주문 IDoc 처리 | Handle ORDERS05 IDoc from Ariba for PO creation |
| IDOC_OUTPUT_ORDCHG | Generate Outbound Order Change IDoc / 발신 주문 변경 IDoc 생성 | Send PO changes from SAP to Ariba Network |
| IDOC_INPUT_INVOIC | Process Inbound Invoice IDoc / 수신 송장 IDoc 처리 | Handle INVOIC02 IDoc from Ariba for invoice posting |
| IDOC_OUTPUT_DESADV | Generate Despatch Advice IDoc / 발송 통지 IDoc 생성 | Send ASN/delivery confirmation to Ariba Network |
| IDOC_INPUT_SHPMNT | Process Inbound Shipment IDoc / 수신 출하 IDoc 처리 | Handle shipment/tracking data from Ariba logistics |

## Catalog / Punch-Out FMs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| BBP_PD_PO_CREATE | Create SRM/Ariba Purchase Order / SRM/Ariba PO 생성 | Create PO in SRM/SAP from punch-out catalog order |
| BBP_CATALOG_TRANSFER | Transfer Catalog Items / 카탈로그 항목 전송 | Transfer punch-out catalog items to shopping cart |

## Utility FMs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| EDI_DOCUMENT_OPEN_FOR_PROCESS | Open IDoc for Processing / IDoc 처리 열기 | Used in Ariba IDoc reprocessing scenarios |
| IDOC_STATUS_WRITE_TO_DATABASE | Write IDoc Status / IDoc 상태 기록 | Update IDoc status during Ariba message processing |
| ARIBA_PO_OUTBOUND_SEND | Send PO to Ariba Network / Ariba Network에 PO 전송 | Custom FM (Z or SAP standard) to trigger cXML PO dispatch |
| BAPI_EXCHANGERATE_GETDETAIL | Get Exchange Rate for Ariba Invoice / Ariba 송장 환율 조회 | Get exchange rate for currency conversion in cross-currency invoices |
| BAPI_TRANSACTION_COMMIT | Commit Ariba Integration Transaction / Ariba 통합 트랜잭션 커밋 | Required after all BAPI-based Ariba integration processing |
