# WM - Warehouse Management BAPIs & Function Modules
# WM - 창고 관리 BAPI 및 기능 모듈

## Core BAPIs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| BAPI_WHSE_TO_CREATE_STOCK | Create Transfer Order for Stock / 재고 TO 생성 | Create TO for ad-hoc warehouse movement |
| BAPI_WHSE_TO_CREATE_TOREQ | Create TO from Transfer Requirement / TR로부터 TO 생성 | Convert TR to TO for outbound or inbound processing |
| BAPI_WHSE_TO_CONFIRM | Confirm Transfer Order / TO 확인 | Confirm picked/putaway TO to update stock in warehouse |
| BAPI_WHSE_TO_CANCEL | Cancel Transfer Order / TO 취소 | Cancel an open/unconfirmed transfer order |
| BAPI_WHSE_TO_GETDETAIL | Get Transfer Order Detail / TO 상세 조회 | Read TO header and items from LTBK/LTBP |
| BAPI_WHSE_TO_GETLIST | Get Transfer Order List / TO 목록 조회 | List transfer orders by warehouse, date, status |
| BAPI_WHSE_TR_CREATE | Create Transfer Requirement / TR 생성 | Create transfer requirement LTAK/LTAP |
| BAPI_WHSE_TR_GETDETAIL | Get Transfer Requirement Detail / TR 상세 조회 | Read TR from LTAK/LTAP |
| BAPI_WHSE_STORAGEBIN_GETLIST | Get Storage Bin List / 저장 빈 목록 조회 | List storage bins by warehouse/storage type |
| BAPI_WHSE_STORAGEBIN_GETDETAIL | Get Storage Bin Detail / 저장 빈 상세 조회 | Read bin data from LGPLA |

## Inventory BAPIs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| BAPI_WMINVDOC_CREATE | Create WM Inventory Document / WM 재고 실사 문서 생성 | Create inventory document for physical count |
| BAPI_WMINVDOC_POSTCOUNT | Post Inventory Count / 재고 실사 전기 | Post counted quantities against inventory document |
| BAPI_WMINVDOC_POSTDIFFERENCES | Post Inventory Differences / 재고 차이 전기 | Post inventory differences after count |

## Quant / Stock BAPIs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| BAPI_WHSE_QUANT_GETLIST | Get Quant List / 재고 목록 조회 | Read warehouse stock quants from LGPLA/LQUA |
| BAPI_WHSE_QUANT_GETDETAIL | Get Quant Detail / 재고 상세 조회 | Read detailed quant information (LQUA) |

## Utility FMs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| L_TO_CREATE_TR | Create TO from TR (Internal) / TR로부터 TO 생성 (내부) | Internal FM for TR-to-TO conversion |
| L_TO_CONFIRM_ONE_TE | Confirm Single TO Item / 단일 TO 항목 확인 | Confirm individual TO item (LT12 equivalent) |
| WAREHOUSE_NUMBER_GET | Get Warehouse Number / 창고 번호 조회 | Determine warehouse number for plant/storage location |
| L_STOCK_OVERVIEW_READ | Read WM Stock Overview / WM 재고 개요 조회 | Read WM-level stock by material/warehouse |
| L_BIN_LOCATE | Locate Storage Bin / 저장 빈 위치 확인 | Find optimal bin based on putaway strategy |
| WM_MOVE_STOCK | Move WM Stock / WM 재고 이동 | Low-level internal stock movement in warehouse |
