# TR - Treasury BAPIs & Function Modules
# TR - 재무부(자금) BAPI 및 기능 모듈

## Core BAPIs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| BAPI_BANKACCOUNT_GETLIST | Get Bank Account List / 은행 계좌 목록 조회 | List bank accounts for company code from T012K |
| BAPI_BANKDETAIL_GETLIST | Get Bank Detail List / 은행 상세 목록 조회 | Read bank master data from BNKA |
| BAPI_PAYMENT_GETLIST | Get Payment List / 지급 목록 조회 | Retrieve payment items from PAYR |
| BAPI_ACC_GL_POSTING_POST | Post Bank Statement G/L Entries / 은행 명세서 G/L 전기 | Post manual bank statement entries |
| BAPI_FINTRANS_CREATE | Create Financial Transaction / 금융 거래 생성 | Create TRM financial transaction (money market, FX, derivatives) |
| BAPI_FINTRANS_CHANGE | Change Financial Transaction / 금융 거래 변경 | Modify existing TRM transaction |
| BAPI_FINTRANS_GETDETAIL | Get Financial Transaction Detail / 금융 거래 상세 조회 | Read TRM transaction from VDBI/VDBJHD |

## Cash Management FMs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| CASHMANAGEMENT_UPDATE | Update Cash Management / 현금 관리 갱신 | Update cash management position after FI postings |
| TR_CM_PLANNING_LEVEL_GET | Get Planning Level / 계획 수준 조회 | Read cash planning level assignments |
| FIEB_CHANGE_BSTATEMENT | Change Bank Statement / 은행 명세서 변경 | Process/change electronic bank statement items |
| BAPI_CAMT_STATEMENT_CREATE | Create Bank Statement (CAMT) / 은행 명세서 생성 (CAMT) | Import CAMT.053 format bank statements |

## Electronic Bank Statement FMs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| FEBC_IMPORT_BANK_STATEMENT | Import Bank Statement / 은행 명세서 가져오기 | Import external bank statement file |
| OFX_IMPORT_STATEMENT | Import OFX Statement / OFX 명세서 가져오기 | Import OFX format bank statement |
| FEBC_POST_BANK_STATEMENT | Post Bank Statement / 은행 명세서 전기 | Process and post imported bank statement |

## Utility FMs
| BAPI/FM | Description | Usage |
|---------|-------------|-------|
| BAPI_EXCHANGERATE_GETDETAIL | Get Exchange Rate / 환율 조회 | Read exchange rate from TCURR for TR calculations |
| BAPI_EXCHANGERATE_SAVEREPLICA | Save Exchange Rate / 환율 저장 | Update exchange rate table TCURR |
| FTR_POSITION_GET | Get TR Position / TR 포지션 조회 | Read open position for treasury instrument |
| BAPI_LOAN_GETDETAIL | Get Loan Detail / 대출 상세 조회 | Read loan master and conditions from VDARL |
| TR_COUNTERPARTY_LIMIT_CHECK | Check Counterparty Limit / 거래 상대방 한도 검사 | Validate transaction against counterparty credit limit |
