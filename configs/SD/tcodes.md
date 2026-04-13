# SD - Sales and Distribution Transaction Codes
# SD - 영업 및 유통 트랜잭션 코드

## Master Data
| TCode | Description |
|-------|-------------|
| XD01 | Create Customer (Centrally) / 고객 생성 (중앙) |
| XD02 | Change Customer (Centrally) / 고객 변경 (중앙) |
| XD03 | Display Customer (Centrally) / 고객 조회 (중앙) |
| VD01 | Create Customer (Sales Area) / 고객 생성 (판매 영역) |
| VD02 | Change Customer (Sales Area) / 고객 변경 (판매 영역) |
| VD03 | Display Customer (Sales Area) / 고객 조회 (판매 영역) |
| VD51 | Create Customer-Material Info Record / 고객-자재 정보 레코드 생성 |
| VD52 | Change Customer-Material Info Record / 고객-자재 정보 레코드 변경 |
| VK11 | Create Condition Record / 조건 레코드 생성 |
| VK12 | Change Condition Record / 조건 레코드 변경 |
| VK13 | Display Condition Record / 조건 레코드 조회 |

## Sales Order Processing
| TCode | Description |
|-------|-------------|
| VA01 | Create Sales Order / 판매 주문 생성 |
| VA02 | Change Sales Order / 판매 주문 변경 |
| VA03 | Display Sales Order / 판매 주문 조회 |
| VA11 | Create Inquiry / 문의 생성 |
| VA21 | Create Quotation / 견적 생성 |
| VA41 | Create Contract / 계약 생성 |
| VA51 | Create Item Proposal / 항목 제안 생성 |
| VOV8 | Define Sales Document Types / 판매 문서 유형 정의 |
| VOV4 | Assign Item Categories / 항목 범주 배정 |
| VOV6 | Define Schedule Line Categories / 납품 일정 행 범주 정의 |

## Delivery
| TCode | Description |
|-------|-------------|
| VL01N | Create Outbound Delivery / 출고 납품 생성 |
| VL02N | Change Outbound Delivery / 출고 납품 변경 |
| VL03N | Display Outbound Delivery / 출고 납품 조회 |
| VL10A | Create Delivery (Due List) / 납품 생성 (기한 목록) |
| VL10B | Create Delivery for Purchase Order / 구매 주문에 대한 납품 생성 |
| VL06O | Outbound Delivery Monitor / 출고 납품 모니터 |
| VL60 | Delivery Reconciliation / 납품 조정 |

## Billing
| TCode | Description |
|-------|-------------|
| VF01 | Create Billing Document / 청구 문서 생성 |
| VF02 | Change Billing Document / 청구 문서 변경 |
| VF03 | Display Billing Document / 청구 문서 조회 |
| VF04 | Maintain Billing Due List / 청구 기한 목록 유지 |
| VF11 | Cancel Billing Document / 청구 문서 취소 |
| VFX3 | Release Billing Docs for Accounting / 회계에 청구 문서 전기 |

## Configuration
| TCode | Description |
|-------|-------------|
| SPRO | SAP Project Reference Object / SAP 프로젝트 기준 개체 |
| OVX5 | Define Sales Organization / 판매 조직 정의 |
| OVXG | Set up Sales Areas / 판매 영역 설정 |
| OVA8 | Automatic Credit Control / 자동 신용 통제 |
| OVZ2 | Availability Check with ATP / ATP 가용성 검사 |
| V/06 | Maintain Pricing Procedure / 가격 결정 절차 유지 |
| V/08 | Assign Pricing Procedure / 가격 결정 절차 배정 |

## Reporting
| TCode | Description |
|-------|-------------|
| VA05 | List of Sales Orders / 판매 주문 목록 |
| VF05 | List of Billing Documents / 청구 문서 목록 |
| VL06 | Delivery Monitor / 납품 모니터 |
| V.02 | Incomplete Orders List / 불완전 주문 목록 |
| VKM1 | Blocked Sales Documents (Credit) / 신용 블록된 판매 문서 |
| SD70 | SD Statistics Report / SD 통계 보고서 |
| MCTA | SIS: Customer Analysis / SIS: 고객 분석 |
| MCTC | SIS: Product Analysis / SIS: 제품 분석 |

## Monitoring
| TCode | Description |
|-------|-------------|
| VKM3 | Released Sales Orders / 해제된 판매 주문 |
| VKM5 | Blocked Deliveries (Credit) / 신용 블록된 납품 |
| V23 | Sales Documents Blocked for Billing / 청구 블록된 판매 문서 |
| VF31 | Output from Billing / 청구 출력 |
| VL71 | Output from Deliveries / 납품 출력 |
