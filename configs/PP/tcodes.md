# PP - Production Planning Transaction Codes
# PP - 생산 계획 트랜잭션 코드

## Master Data
| TCode | Description |
|-------|-------------|
| CR01 | Create Work Center / 작업장 생성 |
| CR02 | Change Work Center / 작업장 변경 |
| CR03 | Display Work Center / 작업장 조회 |
| CA01 | Create Routing / 라우팅 생성 |
| CA02 | Change Routing / 라우팅 변경 |
| CA03 | Display Routing / 라우팅 조회 |
| CS01 | Create Bill of Materials / BOM 생성 |
| CS02 | Change Bill of Materials / BOM 변경 |
| CS03 | Display Bill of Materials / BOM 조회 |
| CS11 | Display BOM Level by Level / BOM 레벨별 조회 |
| CS15 | Where-Used List for Material / 자재 사용처 목록 |

## Production Planning
| TCode | Description |
|-------|-------------|
| MD01 | Run MRP (Total Planning) / MRP 실행 (전체 계획) |
| MD02 | Run MRP (Single Item, Multi-Level) / MRP 실행 (단일 품목, 다중 레벨) |
| MD03 | Run MRP (Single Item, Single Level) / MRP 실행 (단일 레벨) |
| MD04 | Stock/Requirements List / 재고/소요량 목록 |
| MD05 | MRP List / MRP 목록 |
| MD06 | MRP List (Collective) / MRP 목록 (집합) |
| MD07 | Current Stock/Requirements List / 현재 재고/소요량 목록 |
| MD61 | Create Planned Independent Requirements / 독립 소요 계획 생성 |

## Production Orders
| TCode | Description |
|-------|-------------|
| CO01 | Create Production Order / 제조 오더 생성 |
| CO02 | Change Production Order / 제조 오더 변경 |
| CO03 | Display Production Order / 제조 오더 조회 |
| CO11N | Production Order Confirmation (Single) / 제조 오더 확인 (단일) |
| CO15 | Production Order Confirmation (Collective) / 제조 오더 확인 (집합) |
| COHV | Mass Processing Production Orders / 제조 오더 대량 처리 |
| COOIS | Production Order Information System / 제조 오더 정보 시스템 |
| CO41 | Collective Conversion of Planned Orders / 계획 오더 집합 전환 |

## Capacity Planning
| TCode | Description |
|-------|-------------|
| CM01 | Work Center Load / 작업장 부하 |
| CM21 | Capacity Leveling (Individual) / 용량 평준화 (개별) |
| CM25 | Capacity Planning Table / 용량 계획 테이블 |

## Configuration
| TCode | Description |
|-------|-------------|
| OP43 | Define MRP Controller / MRP 담당자 정의 |
| OPJN | Define Order Types (PP) / 주문 유형 정의 |
| OPJ8 | Define Confirmation Parameters / 확인 매개변수 정의 |
| OPL8 | Plant Parameters for Orders / 주문에 대한 플랜트 매개변수 |
| OPUZ | Control Key for Routing Operations / 라우팅 공정 관리 키 |

## Reporting
| TCode | Description |
|-------|-------------|
| COOIS | Production Order Info System / 제조 오더 정보 시스템 |
| MB52 | Warehouse Stocks / 창고 재고 |
| CS12 | Multilevel BOM Explosion / 다중 레벨 BOM 전개 |
| MD45 | Planning Result Overview / 계획 결과 개요 |

## Monitoring
| TCode | Description |
|-------|-------------|
| CO24 | Missing Parts Information System / 누락 부품 정보 시스템 |
| MDVP | Pegged Requirements / 종속 소요량 |
| CO27 | Picking List / 피킹 목록 |
| COGI | Automatic Goods Movements Error Log / 자동 재고 이동 오류 로그 |
