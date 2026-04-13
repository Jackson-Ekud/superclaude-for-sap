# CO - Controlling Transaction Codes
# CO - 관리 회계 트랜잭션 코드

## Master Data
| TCode | Description |
|-------|-------------|
| KS01 | Create Cost Center / 원가 센터 생성 |
| KS02 | Change Cost Center / 원가 센터 변경 |
| KS03 | Display Cost Center / 원가 센터 조회 |
| KA01 | Create Cost Element / 원가 요소 생성 |
| KA02 | Change Cost Element / 원가 요소 변경 |
| KL01 | Create Activity Type / 활동 유형 생성 |
| KL02 | Change Activity Type / 활동 유형 변경 |
| KO01 | Create Internal Order / 내부 주문 생성 |
| KO02 | Change Internal Order / 내부 주문 변경 |
| KO03 | Display Internal Order / 내부 주문 조회 |
| KCH1 | Create Cost Center Group / 원가 센터 그룹 생성 |

## Planning
| TCode | Description |
|-------|-------------|
| KP06 | Enter Cost Center Planning / 원가 센터 계획 입력 |
| KP26 | Enter Activity Type Planning / 활동 유형 계획 입력 |
| KP46 | Enter Statistical Key Figure Planning / 통계 수치 계획 입력 |
| KPF6 | Copy Planning / 계획 복사 |
| KO12 | Enter Internal Order Planning / 내부 주문 계획 입력 |

## Actual Postings
| TCode | Description |
|-------|-------------|
| KB11N | Enter Manual Reposting of Costs / 원가 수동 재전기 |
| KB21N | Enter Activity Allocation / 활동 배분 입력 |
| KB31N | Enter Statistical Key Figures / 통계 수치 입력 |
| KSU5 | Execute Assessment Cycle / 배분 사이클 실행 |
| KSV5 | Execute Distribution Cycle / 분배 사이클 실행 |

## Product Costing
| TCode | Description |
|-------|-------------|
| CK11N | Create Product Cost Estimate / 제품 원가 견적 생성 |
| CK24 | Price Update (Mark/Release) / 가격 갱신 (표시/해제) |
| CKMLCP | Cockpit for Material Ledger Closing / 자재 원장 마감 조종석 |
| KKF6N | Create Product Cost Collector / 제품 원가 수집기 생성 |
| CO88 | Actual Settlement: Production Orders / 제조 오더 실적 정산 |

## Profitability Analysis
| TCode | Description |
|-------|-------------|
| KE21N | Enter CO-PA Line Items / CO-PA 항목 입력 |
| KE30 | Execute Profitability Report / 수익성 보고서 실행 |
| KE24 | Display Line Items (CO-PA) / CO-PA 항목 조회 |
| KEU5 | Execute CO-PA Assessment / CO-PA 배분 실행 |

## Configuration
| TCode | Description |
|-------|-------------|
| OKKP | Maintain Controlling Area / 관리 영역 유지 |
| OKKS | Set Controlling Area / 관리 영역 설정 |
| OKB9 | Define Default Account Assignment / 기본 계정 배정 정의 |
| OKC9 | Define Order Types / 주문 유형 정의 |
| OKEON | Define Cost Center Standard Hierarchy / 표준 계층 정의 |

## Reporting
| TCode | Description |
|-------|-------------|
| S_ALR_87013611 | Cost Centers: Actual/Plan/Variance / 원가 센터: 실적/계획/편차 |
| S_ALR_87012993 | Internal Orders: Actual/Plan/Variance / 내부 주문: 실적/계획/편차 |
| KSB1 | Cost Center Actual Line Items / 원가 센터 실적 항목 |
| KOB1 | Internal Order Actual Line Items / 내부 주문 실적 항목 |
| S_ALR_87013336 | Cost Element Report / 원가 요소 보고서 |

## Monitoring
| TCode | Description |
|-------|-------------|
| CJIA | Project: Actual/Plan/Commitment / 프로젝트: 실적/계획/약정 |
| KO8G | Collective Settlement: Internal Orders / 내부 주문 집합 정산 |
| KSCG | Template Allocation / 템플릿 배분 |
