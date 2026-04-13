# FI - Financial Accounting Transaction Codes
# FI - 재무 회계 트랜잭션 코드

## Master Data
| TCode | Description |
|-------|-------------|
| FS00 | G/L Account Master (Chart of Accounts) / G/L 계정 마스터 |
| FK01 | Create Vendor (Accounting) / 공급업체 생성 (회계) |
| FK02 | Change Vendor (Accounting) / 공급업체 변경 (회계) |
| FD01 | Create Customer (Accounting) / 고객 생성 (회계) |
| FD02 | Change Customer (Accounting) / 고객 변경 (회계) |
| AS01 | Create Asset Master / 자산 마스터 생성 |
| AS02 | Change Asset Master / 자산 마스터 변경 |
| AS03 | Display Asset Master / 자산 마스터 조회 |

## Document Entry (General Ledger)
| TCode | Description |
|-------|-------------|
| FB50 | Enter G/L Account Document / G/L 계정 문서 입력 |
| F-02 | Enter G/L Account Posting / G/L 계정 전기 |
| F-03 | Clear G/L Account / G/L 계정 정리 |
| FBCJ | Cash Journal / 현금 분개 |
| F-65 | Park G/L Account Document / G/L 계정 문서 파킹 |

## Accounts Payable
| TCode | Description |
|-------|-------------|
| FB60 | Enter Vendor Invoice / 공급업체 송장 입력 |
| FB65 | Enter Vendor Credit Memo / 공급업체 대변 메모 입력 |
| F-53 | Post Vendor Payment / 공급업체 지급 전기 |
| F-44 | Clear Vendor / 공급업체 정리 |
| F110 | Automatic Payment Run / 자동 지급 실행 |
| MRBR | Release Blocked Invoices / 블록된 송장 해제 |

## Accounts Receivable
| TCode | Description |
|-------|-------------|
| FB70 | Enter Customer Invoice / 고객 송장 입력 |
| FB75 | Enter Customer Credit Memo / 고객 대변 메모 입력 |
| F-28 | Post Incoming Payment / 수신 지급 전기 |
| F-32 | Clear Customer / 고객 정리 |
| F150 | Dunning Run / 독촉 실행 |

## Period Closing
| TCode | Description |
|-------|-------------|
| F.16 | G/L: Balance Carried Forward / G/L 잔액 이월 |
| F.05 | Foreign Currency Valuation / 외화 평가 |
| F101 | Recurring Entries / 반복 전기 |
| AJRW | Asset Fiscal Year Change / 자산 회계 연도 변경 |
| AJAB | Year-End Closing for Assets / 자산 연말 결산 |

## Configuration
| TCode | Description |
|-------|-------------|
| OB41 | Define Posting Keys / 전기 키 정의 |
| OB53 | Define Retained Earnings Account / 이익 잉여금 계정 정의 |
| OBB8 | Define Terms of Payment / 지급 조건 정의 |
| FBKP | Maintain Accounting Config / 회계 설정 유지 |
| OB52 | Open and Close Periods / 기간 개설/마감 |

## Reporting
| TCode | Description |
|-------|-------------|
| FS10N | G/L Account Balance / G/L 계정 잔액 |
| FBL1N | Vendor Line Items / 공급업체 항목 |
| FBL3N | G/L Account Line Items / G/L 계정 항목 |
| FBL5N | Customer Line Items / 고객 항목 |
| S_ALR_87012284 | G/L Account Balances / G/L 계정 잔액 목록 |
| F.01 | Financial Statements / 재무제표 |
| S_ALR_87012178 | Vendor Balance List / 공급업체 잔액 목록 |

## Monitoring
| TCode | Description |
|-------|-------------|
| SM35 | Batch Input Monitor / 배치 입력 모니터 |
| F.19 | G/L: Advance Tax Return / G/L 사전 세금 신고 |
| FBV0 | Post Parked Documents / 파킹 문서 전기 |
| FBRA | Reset Cleared Items / 정리 항목 재설정 |
