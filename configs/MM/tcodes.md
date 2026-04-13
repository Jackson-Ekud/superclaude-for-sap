# MM - Materials Management Transaction Codes
# MM - 자재 관리 트랜잭션 코드

## Master Data
| TCode | Description |
|-------|-------------|
| MM01 | Create Material / 자재 생성 |
| MM02 | Change Material / 자재 변경 |
| MM03 | Display Material / 자재 조회 |
| MM60 | Material Master List / 자재 마스터 목록 |
| XK01 | Create Vendor (Centrally) / 공급업체 생성 (중앙) |
| XK02 | Change Vendor (Centrally) / 공급업체 변경 (중앙) |
| XK03 | Display Vendor (Centrally) / 공급업체 조회 (중앙) |
| ME11 | Create Purchasing Info Record / 구매 정보 레코드 생성 |
| ME12 | Change Purchasing Info Record / 구매 정보 레코드 변경 |
| ME01 | Maintain Source List / 소스 목록 유지 |

## Purchasing
| TCode | Description |
|-------|-------------|
| ME21N | Create Purchase Order / 구매 오더 생성 |
| ME22N | Change Purchase Order / 구매 오더 변경 |
| ME23N | Display Purchase Order / 구매 오더 조회 |
| ME51N | Create Purchase Requisition / 구매 요청 생성 |
| ME52N | Change Purchase Requisition / 구매 요청 변경 |
| ME41 | Create Request for Quotation / 견적 요청 생성 |
| ME47 | Maintain Quotation / 견적 유지 |
| ME31K | Create Contract / 계약 생성 |
| ME31L | Create Scheduling Agreement / 일정 합의 생성 |
| MIGO | Goods Movement / 재고 이동 (GR, GI, Transfer) |
| MB01 | Post Goods Receipt for PO / 구매 오더 입고 전기 |
| MB1A | Goods Withdrawal / 출고 |
| MB1B | Transfer Posting / 이전 전기 |

## Invoice Verification
| TCode | Description |
|-------|-------------|
| MIRO | Enter Incoming Invoice / 수신 송장 입력 |
| MIR7 | Park Incoming Invoice / 수신 송장 파킹 |
| MIRA | Fast Invoice Entry / 빠른 송장 입력 |
| MR8M | Cancel Invoice Document / 송장 문서 취소 |
| MRBR | Release Blocked Invoices / 블록된 송장 해제 |

## Configuration
| TCode | Description |
|-------|-------------|
| OMSY | Maintain Company Code/Plant Data / 회사코드/플랜트 데이터 유지 |
| OMS2 | Maintain Material Types / 자재 유형 유지 |
| OMR6 | Invoice Tolerance Limits / 송장 허용 오차 한도 |
| OMWB | Automatic Account Assignment / 자동 계정 배정 |
| OMJJ | Customize Movement Types / 이동 유형 커스터마이징 |

## Reporting
| TCode | Description |
|-------|-------------|
| MB52 | Warehouse Stocks of Material / 창고 자재 재고 |
| MB51 | Material Document List / 자재 문서 목록 |
| ME2M | Purchase Orders by Material / 자재별 구매 오더 |
| ME2L | Purchase Orders by Vendor / 공급업체별 구매 오더 |
| ME2N | Purchase Orders by PO Number / PO 번호별 구매 오더 |
| MMBE | Stock Overview / 재고 개요 |

## Monitoring
| TCode | Description |
|-------|-------------|
| ME2O | SC Stock Monitoring / 협력업체 재고 모니터링 |
| MB24 | Reservation Overview / 예약 개요 |
| ME57 | Assign and Process Requisitions / 요청 배정 및 처리 |
| MBGR | Display Material Document by Mvt Reason / 이동 이유별 자재 문서 조회 |
