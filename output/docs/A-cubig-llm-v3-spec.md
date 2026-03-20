# Design Spec: A-cubig-llm-v3
생성일: 2026-03-17
분석한 원본: input/A-cubig-llm-v3.html

## 전체 구조 요약
- 섹션 수: 17개 (Hero + 15 본문 섹션 + CTA)
- 문서 성격: 제품 소개 (설득 + 기능 설명)
- 특이사항: LLM Capsule 제품 페이지. Prompt flow demo, comparison table, enterprise deployment 사례 등 포함. 원문에 중복 비교 섹션(5열 테이블 + 3열 비교) 있음 -- 후반부 3열은 테이블에 이미 포함되므로 배너 한줄 요약으로 축약.

---

## 섹션별 설계

### 섹션 1: Hero (Hero Screenshot)
- 패턴: [A-2] Hero Screenshot
- 헤더 eyebrow: "LLM Capsule"
- 헤더 타이틀: "LLM Capsule" (ds-text--product 적용 -- 제품명이므로 Oxanium)
- 타이틀 강조 키워드: 없음 (제품명 자체가 타이틀)
- 헤더 description: "Your team wants to use AI on enterprise data. Legal and compliance say the data is off-limits. LLM Capsule removes that blocker -- detecting and anonymizing PII in LLM prompts, preventing prompt data leakage, and making enterprise LLM usage safe without leaving your perimeter."
- 헤더 정렬: center
- 배경: white (텍스트 영역), ds-bg--paint-blue (스크린샷 프레임)
- 배경 bg-image 적용 위치: ds-hero__screenshot-frame
- 스크린샷 이미지: reference/images/screenshot-llmcapsule.avif
- 사용 컴포넌트: ds-hero--screenshot, ds-hero__screenshot-frame
- CTA 버튼 (ds-hero__actions-below):
  - "See it remove a PII blocker live" (ds-btn--primary ds-btn--md)
  - "llmcapsule.ai" (ds-btn--secondary ds-btn--md, target=_blank)
  - "See SynTitan Platform" (ds-btn--secondary ds-btn--md)
- 반응형 설계:
  - mobile (375px): 1col, 타이틀 24px, 버튼 세로 스택
  - tablet (768px): 타이틀 28px
  - sm-desktop (1024px): 타이틀 32px
  - desktop (1440px): 타이틀 36px, max-width 860px
  - wide (1920px): 타이틀 40px
- 비고: word-break: keep-all 적용, 임의 br 금지. 원문 hero-oneliner 키워드들은 eyebrow에 통합 불요 -- description에 충분히 포함됨.

---

### 섹션 2: KPI Band (Performance Metrics)
- 패턴: [F] KPI Band
- 헤더: 없음 (Hero 직하단 연결)
- 배경: white (섹션), ds-bg--lavender (ds-kpi-band 컴포넌트)
- 배경 bg-image 적용 위치: ds-kpi-band 컴포넌트
- 사용 컴포넌트: ds-kpi-band
- 그리드: 4열 (기본)
- 데이터:
  1. 98.1% / PII Detection Accuracy
  2. 99.14% / Workflow Accuracy
  3. 100% / Structured PII Coverage
  4. 98% / Response Similarity
- 반응형 설계:
  - mobile (375px): 1col
  - tablet (768px): 2col
  - sm-desktop (1024px): 4col
  - desktop (1440px): 4col
  - wide (1920px): 4col
- 비고: 수치/라벨 색상 모두 white (배경 이미지 + 오버레이).

---

### 섹션 3: Certifications (인증/수상)
- 패턴: [I-2] Cert Grid
- 헤더 eyebrow: "Certifications"
- 헤더 타이틀: "Certified and Compliance-Ready"
- 타이틀 강조 키워드: "Compliance-Ready" -> ds-text--brand
- 헤더 description: 없음
- 헤더 정렬: center
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-section-header--underline, ds-cert-grid, ds-cert-card
- 인증 목록 (원문 hero 배지에서 추출):
  1. label: "Software Quality" / wreath-text: "GS Certified" / logo: reference/graphics/cert-gs.png
  2. label: "Information Security" / wreath-text: "ISO/IEC 27001" / logo: 없음
  3. label: "AI Management" / wreath-text: "ISO/IEC 42001" / logo: 없음
  4. label: "Awards" / wreath-text: "NextRise Global Innovator" / logo: reference/graphics/awards-startup-wroldcup.png
- 월계관: reference/graphics/cert-left.png, cert-right.png (160x120px, 좌우 벌림)
- cert logo: 80x80px
- 반응형 설계:
  - mobile (375px): 2col
  - tablet (768px): 2col
  - sm-desktop (1024px): 4col
  - desktop (1440px): 4col
  - wide (1920px): 4col
- 비고: KISA/GDPR/HIPAA는 규제 준수이므로 Integration 섹션 compliance 카드에서 다룸.

---

### 섹션 4: Prompt Data Leakage Definition (배너)
- 패턴: [Q] Banner -- ds-banner--full
- 헤더: 없음 (배너 독립 블록)
- 배경: ds-bg--wave-teal (배너 자체에 적용)
- 배경 bg-image 적용 위치: ds-banner--full 컴포넌트
- 사용 컴포넌트: ds-banner--full ds-bg--wave-teal
- 콘텐츠:
  - 텍스트: "Prompt data leakage occurs when enterprise data containing PII, regulated fields, or confidential information is included in LLM prompts -- exposing sensitive records to external AI systems."
  - 링크 (줄바꿈 display:block): "Read: Prompt Data Leakage" -> /learn/prompt-data-leakage
- 텍스트 색상: text-primary (밝은 오버레이이므로 검정)
- 반응형 설계:
  - 전 breakpoint: 중앙 정렬, border-radius xl, padding 조정
- 비고: 원문 2~3단락 상세 설명은 생략하지 않되, 핵심 정의만 배너로 발췌. 나머지 상세 설명은 섹션 12 Key Concepts에서 자연스럽게 포함됨.

---

### 섹션 5: How LLM Capsule Works (Prompt Flow)
- 패턴: [N] Number Steps 변형 -- 3단계 카드 세로 배치
- 헤더 eyebrow: "How It Works"
- 헤더 타이틀: "Sensitive data never reaches the LLM"
- 타이틀 강조 키워드: "never" -> ds-text--brand
- 헤더 description: "LLM Capsule sits between your application and the LLM API. Every prompt is intercepted, inspected, and cleaned before transmission."
- 헤더 정렬: center
- 배경: surface-light
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-grid--1, ds-card
- 구조: 3개의 ds-card를 세로 배치, 사이에 화살표 텍스트
  - Card 1: ds-card__badge--red "RAW PROMPT" + ds-code 코드 블록
    - 원문 prompt 텍스트 (PII 부분은 span.ds-code-pii로 빨간 배경 하이라이트)
  - 구분: p 텍스트 "LLM Capsule removes blockers, anonymizes, enables AI" (ds-body-s, text-align center, text-tertiary)
  - Card 2: ds-card__badge--brand "ANONYMIZED PROMPT" + ds-code 코드 블록
    - 원문 anonymized prompt (토큰은 span.ds-code-masked로 보라 배경 하이라이트)
  - 구분: p 텍스트 "LLM processes anonymized prompt, returns response"
  - Card 3: ds-card__badge--teal "RE-MAPPED OUTPUT" + ds-code 코드 블록
    - 원문 re-mapped output
- 반응형 설계:
  - mobile (375px): 1col, 코드 블록 font-size 11px, overflow-x auto
  - 전 breakpoint: ds-grid--1 세로 스택
- 비고: 코드 블록 스타일은 ds-code 클래스 + 배경 surface-light. PII/masked 하이라이트는 인라인 CSS 변수 대신 컴포넌트 내부 클래스로 처리. frontend-dev가 style 태그 내에 .ds-code-pii { background: rgba(255,48,48,0.12); color: var(--ds-color-error); padding: 1px 4px; border-radius: 2px; } 및 .ds-code-masked { background: rgba(166,23,255,0.10); color: var(--ds-color-brand-purple); padding: 1px 4px; border-radius: 2px; } 정의.

---

### 섹션 6: Availability (AWS Marketplace / llmcapsule.ai)
- 패턴: [G] Card Grid 2col
- 헤더 eyebrow: "Availability"
- 헤더 타이틀: "Ready to deploy, available now"
- 타이틀 강조 키워드: "now" -> ds-text--brand
- 헤더 description: 없음
- 헤더 정렬: center
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-card-grid--2col, ds-card
- 카드 내용:
  1. ds-card__badge--teal "AVAILABLE NOW" / ds-card__title: "AWS Marketplace" / ds-card__description: "LLM Capsule is available on the AWS Marketplace for enterprise procurement, consolidated billing, and streamlined deployment into existing AWS infrastructure." / 링크 버튼: "View on AWS Marketplace" (ds-btn--ghost)
  2. ds-card__badge--brand "PRODUCT SITE" / ds-card__title: "llmcapsule.ai" / ds-card__description: "LLM Capsule also operates its own dedicated domain. Visit llmcapsule.ai to learn more about removing AI data blockers, deployment options, and enterprise coverage." / 링크 버튼: "Visit llmcapsule.ai" (ds-btn--ghost)
- 반응형 설계:
  - mobile (375px): 1col
  - tablet (768px): 2col
  - 전 breakpoint: 동일
- 비고: 심플 2열 카드.

---

### 섹션 7: Four Capabilities
- 패턴: [G] Card Grid 4col
- 헤더 eyebrow: "Capabilities"
- 헤더 타이틀: "Four steps to AI-ready data"
- 타이틀 강조 키워드: "AI-ready" -> ds-text--brand
- 헤더 description: 없음
- 헤더 정렬: center
- 배경: surface-light
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-card-grid--4col, ds-card
- 4개 카드:
  1. ds-card__subtitle: "01 / 04" / ds-card__badge--brand "DETECT" / ds-card__title--sm: "PII Detection" / ds-card__description: 원문
  2. ds-card__subtitle: "02 / 04" / ds-card__badge--brand "ANONYMIZE" / ds-card__title--sm: "Prompt Anonymization" / ds-card__description: 원문
  3. ds-card__subtitle: "03 / 04" / ds-card__badge--brand "RE-MAP" / ds-card__title--sm: "Output Re-mapping" / ds-card__description: 원문
  4. ds-card__subtitle: "04 / 04" / ds-card__badge--brand "AUDIT" / ds-card__title--sm: "Audit & Traceability" / ds-card__description: 원문
- 반응형 설계:
  - mobile (375px): 1col
  - tablet (768px): 2col
  - sm-desktop (1024px): 4col
  - desktop (1440px): 4col
  - wide (1920px): 4col
- 비고: subtitle로 번호 표현, badge로 단계명 표현.

---

### 섹션 8: Detection Coverage
- 패턴: [J] Feature Grid (2col 6개 피처)
- 헤더 eyebrow: "Detection Coverage"
- 헤더 타이틀: "What was blocking your AI. Now removed."
- 타이틀 강조 키워드: "removed" -> ds-text--brand
- 헤더 description: 없음
- 헤더 정렬: center
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-feature-grid
- 6개 피처:
  1. icon: "shield" emoji / title: "Personal Identifiers" / description: "Full Name, Date of Birth, National ID, Passport No., Email Address, Phone Number, Home Address"
  2. icon: "dollar" emoji / title: "Financial Data" / description: "Account Number, Credit Card, Routing Number, Tax ID, Transaction ID, Policy Number"
  3. icon: "medical" emoji / title: "Health & Clinical" / description: "Patient ID, ICD Codes, Diagnosis Terms, Provider Name, Clinical Dates, Prescription Data"
  4. icon: "building" emoji / title: "Enterprise Data" / description: "Employee ID, Internal Codes, Customer ID, Contract Number, Project Code"
  5. icon: "map-pin" emoji / title: "Geographic Data" / description: "Street Address, Postcode / ZIP, GPS Coordinates, Region / State"
  6. icon: "gear" emoji / title: "Enterprise-Defined Fields" / description: "Custom Patterns, Domain-Specific IDs, Regex Rules, Industry Codes"
- 반응형 설계:
  - mobile (375px): 1col
  - tablet (768px): 2col
  - 전 breakpoint: 2col
- 비고: 원문의 detect-pill 태그를 description 텍스트로 나열 (쉼표 구분).

---

### 섹션 9: Integration (SynTitan + Compliance)
- 패턴: [C] Product Split + [G] Card Grid 3col
- 헤더 eyebrow: "Integration"
- 헤더 타이틀: "Works with SynTitan. Works standalone too."
- 타이틀 강조 키워드: "SynTitan" -> ds-text--product (Oxanium 제품명)
- 헤더 description: 없음
- 헤더 정렬: center
- 서브 타이틀: 없음
- 배경: surface-light
- 배경 bg-image 적용 위치: ds-product-split__visual에 ds-bg--peach
- 사용 컴포넌트: ds-section-header--underline, ds-product-split, ds-card-grid--3col, ds-card

**서브 A: Product Split (SynTitan)**
- Visual:
  - logo: reference/images/logo-syntitan.png
  - screenshot: reference/images/screenshot-syntitan.webp
  - 배경: ds-bg--peach
  - 스크린샷: flex:1, object-fit:cover, object-position:top (최하단 클리핑)
- Content:
  - ds-product-split__title: "Full execution traceability for LLM workflows"
  - ds-product-split__lead: "When LLM Capsule runs within SynTitan, every anonymization run is bound to a Release State. LLM workflows become reproducible, auditable, and compliant."
  - ds-product-split__body: "the same guarantees SynTitan provides for all production AI runs."
  - ds-bullet--dot (4항목):
    - "Anonymization config versioned in Release State"
    - "Each run linked via Run Binding"
    - "Change Log records what was detected and replaced"
    - "Re-run any prior LLM workflow under identical conditions"
  - ds-product-split__actions: "See SynTitan Platform" (ds-btn--secondary ds-btn--md)

**서브 B: Compliance Blockers Removed (동일 섹션 내 하단)**
- ds-section-title-icon: "Blockers Removed by Industry" (icon: shield emoji)
- ds-card-grid--3col + ds-card:
  1. ds-card__badge--red "GDPR / CCPA" / title: "Customer data no longer blocks LLM usage" / description: 원문
  2. ds-card__badge--red "HIPAA" / title: "Clinical data no longer off-limits for AI" / description: 원문
  3. ds-card__badge--red "SOC 2 / ENTERPRISE SECURITY" / title: "Audit-ready LLM data handling" / description: 원문
- 반응형 설계:
  - mobile (375px): product-split 1col, card-grid 1col
  - tablet (768px): product-split 1col, card-grid 2col
  - sm-desktop (1024px): product-split 4:6, card-grid 3col
  - desktop (1440px): 동일
  - wide (1920px): 동일
- 비고: ds-banner 추가 -- 원문 overlap-note 텍스트를 배너로.
  - ds-banner: "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine."

---

### 섹션 10: Comparison Table
- 패턴: [O] Table
- 헤더 eyebrow: "Comparison"
- 헤더 타이틀: "LLM Capsule vs. doing nothing. Or avoiding AI."
- 타이틀 강조 키워드: "LLM Capsule" -> ds-text--product (Oxanium 제품명)
- 헤더 description: 없음
- 헤더 정렬: center
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-table-wrap, ds-table
- 테이블: 5열 (Capability / LLM Capsule / Manual Prompt Review / Static Data Masking / No Protection)
- 5행 원문 그대로:
  1. Real-time PII detection
  2. Output usability preserved
  3. Blocks external PII transmission
  4. Audit trail
  5. Custom enterprise field detection
- 원문 check/cross/partial 유지 (check = green, cross = red, partial = amber -> text-tertiary로 대체)
- 하단 배너 (원문 후반부 3열 비교 요약):
  - ds-banner: "You don't need to choose between frontier models and data safety. LLM Capsule gives you both."
- 반응형 설계:
  - mobile (375px): overflow-x auto (가로 스크롤)
  - 전 breakpoint: 전체 표시
- 비고: 원문 후반부 3열 비교 섹션은 이 테이블에 통합. 별도 섹션 불요.

---

### 섹션 11: Enterprise Deployments
- 패턴: [H-3] Case Study 3col
- 헤더 eyebrow: "Enterprise Deployments"
- 헤더 타이틀: "Deployed across global regulated industries"
- 타이틀 강조 키워드: "regulated" -> ds-text--brand
- 헤더 description: "LLM Capsule is in production across global telco, financial services, and healthcare -- industries where AI adoption was previously blocked by sensitive internal data. Now it isn't."
- 헤더 정렬: center
- 배경: surface-light
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-card-grid--3col, ds-card--case-study
- 이미지 세트: illustration (세트 통일)
- 3개 케이스:
  1. image: reference/graphics/illustration-security.png / category: "Global Telco" (text-secondary) / title: "Deutsche Telekom" / ds-card__badge--teal "T CHALLENGE 2026 TOP 12" / description: "Top 12 finalist in T Challenge 2026 for enterprise LLM data protection. Evaluated across telco-scale sensitive data workflows -- customer care, network ops, billing AI -- where PII protection at the interaction layer was required." / tags: #LLMCapsule
  2. image: reference/graphics/illustration-public-sector.png / category: "Global OT Security" (text-secondary) / title: "Claroty" / ds-card__badge--brand "OT INFRASTRUCTURE AI" / description: "OT infrastructure AI without exposing critical operational technology data. LLM Capsule anonymizes sensitive OT network identifiers at the interaction layer -- the LLM processes the task without ever seeing the raw operational data." / tags: #LLMCapsule
  3. image: reference/graphics/illustration-insurance.png / category: "Finance, Health, Legal" (text-secondary) / title: "DB Insurance, EUMC, Shin&Kim" / ds-card__badge--teal "MULTI-INDUSTRY" / description: "LLM Capsule deployed across Korean financial services (DB Insurance), medical research (EUMC), and legal practice (Shin&Kim). Sensitive claim, clinical, and contract data protected during LLM-assisted document workflows." / tags: #LLMCapsule
- 3col 콤팩트: 좌측 100px, 이미지 72x60px, 카테고리 color text-secondary (10px)
- 반응형 설계:
  - mobile (375px): 1col (카드 세로 풀폭)
  - tablet (768px): 2col
  - sm-desktop (1024px): 3col
  - desktop (1440px): 3col
  - wide (1920px): 3col
- 비고: illustration 세트만 사용 (세트 혼합 금지).

---

### 섹션 12: Key Concepts
- 패턴: [G] Card Grid 3col
- 헤더 eyebrow: "Key Concepts"
- 헤더 타이틀: "LLM data security fundamentals"
- 타이틀 강조 키워드: "security" -> ds-text--brand
- 헤더 description: 없음
- 헤더 정렬: center
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-card-grid--3col, ds-card
- 3개 카드:
  1. ds-card__badge--brand "CONCEPT" / ds-card__title--sm: "Prompt Anonymization" / ds-card__description: 원문
  2. ds-card__badge--brand "CONCEPT" / ds-card__title--sm: "Interaction-Layer Security" / ds-card__description: 원문
  3. ds-card__badge--brand "CONCEPT" / ds-card__title--sm: "LLM Capsule vs. DTS" / ds-card__description: 원문 / 링크: "Explore DTS" (ds-btn--ghost)
- 반응형 설계:
  - mobile (375px): 1col
  - tablet (768px): 2col
  - sm-desktop (1024px): 3col
  - 전 breakpoint: 동일
- 비고: 원문의 상세 정의 텍스트를 그대로 포함.

---

### 섹션 13: When Teams Need LLM Capsule (4 Blockers)
- 패턴: [G] Card Grid 2col
- 헤더 eyebrow: "Use Cases"
- 헤더 타이틀: "Four situations where sensitive data blocks AI adoption"
- 타이틀 강조 키워드: "blocks" -> ds-text--brand
- 헤더 description: "Enterprise LLM adoption stalls when data contains fields that can't leave the perimeter. LLM Capsule was built for exactly these blockers."
- 헤더 정렬: center
- 배경: surface-light
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-card-grid--2col, ds-card
- 4개 카드:
  1. ds-card__badge--red "BLOCKER: PII IN PROMPTS" / ds-card__title--sm: "Employees want to use LLMs on enterprise data, but prompts contain PII." / ds-card__description: 원문
  2. ds-card__badge--red "BLOCKER: COMPLIANCE" / ds-card__title--sm: "Compliance blocks LLM usage entirely, even for internal tools." / ds-card__description: 원문
  3. ds-card__badge--red "BLOCKER: OUTPUT EXPOSURE" / ds-card__title--sm: "LLM outputs may contain or infer sensitive information from prompts." / ds-card__description: 원문
  4. ds-card__badge--red "BLOCKER: USABILITY" / ds-card__title--sm: "Existing masking tools destroy data usability, making LLM output meaningless." / ds-card__description: 원문
- CTA 하단:
  - "Run technical walkthrough" (ds-btn--primary ds-btn--md)
  - "Explore LLM Capsule" (ds-btn--secondary ds-btn--md, target=_blank)
  - "Explore concept: Prompt data leakage" (ds-btn--secondary ds-btn--md)
- 반응형 설계:
  - mobile (375px): 1col, 버튼 세로 스택
  - tablet (768px): 2col
  - 전 breakpoint: 2col
- 비고: 원문의 amber 배지는 DS에 없으므로 badge--red 통일.

---

### 섹션 14: Partners
- 패턴: [I] Partner Logo Grid (마키 애니메이션 필수)
- 헤더 eyebrow: "Partners"
- 헤더 타이틀: "Trusted by Industry Leaders"
- 타이틀 강조 키워드: "Industry Leaders" -> ds-text--brand
- 헤더 description: 없음
- 헤더 정렬: center
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-partner-grid, ds-partner-grid__track
- 공식 파트너 11개 (DS 목록, A타입 무관):
  1. Gartner / reference/images/partner-gartner.png
  2. Naver Cloud / reference/images/partner-navercloud.avif
  3. SK Telecom / reference/images/partner-sktelecom.avif
  4. Kyobo / reference/images/partner-kyobo.avif
  5. ROK Army / reference/images/partner-korea army.avif
  6. ROK Air Force / reference/images/partner-korea-airforce.avif
  7. EUMC / reference/images/partner-eumc.avif
  8. Deutsche Telekom / reference/images/partner-deutsche-telekom.avif
  9. Claroty / reference/images/partner-claroty.png
  10. Korea Heritage Service / reference/images/partner-korea-heritage-service.jpg
  11. Ministry of Data and Statistics / reference/images/partner-ministry-of-data-and-statistics.png
- HTML: 11개 x 2벌 = 22개 (seamless loop) + JS cloneNode 스크립트
- 마키: @keyframes ds-marquee, translateX(0) -> translateX(-50%), 30s linear infinite
- 호버 시 animation-play-state: paused
- 반응형 설계:
  - mobile (375px): 로고 80x48px, gap 줄임, duration 20s
  - tablet (768px): 로고 120x64px, gap 64px, duration 30s
  - 전 breakpoint: width 100vw, margin-left calc(-50vw + 50%), overflow hidden
- 비고: A타입에 파트너 목록 없어도 DS 공식 목록 삽입 필수.

---

### 섹션 15: FAQ
- 패턴: [P] FAQ (ds-grid--1 + ds-card)
- 헤더 eyebrow: "FAQ"
- 헤더 타이틀: "Common questions"
- 타이틀 강조 키워드: "questions" -> ds-text--brand
- 헤더 description: 없음
- 헤더 정렬: center
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-grid--1, ds-card
- FAQ 6개 (원문 그대로):
  1. Q: "What is LLM Capsule?" / A: 원문
  2. Q: "What types of sensitive data does LLM Capsule detect?" / A: 원문
  3. Q: "Does LLM Capsule affect LLM output quality?" / A: 원문
  4. Q: "Does LLM Capsule work with external LLM APIs?" / A: 원문
  5. Q: "Does LLM Capsule support on-premise deployment?" / A: 원문
  6. Q: "How does LLM Capsule relate to SynTitan?" / A: 원문
- 아코디언: 클릭 시 토글 (ds-ac-card 패턴 또는 간단 JS). 첫 항목 기본 open.
- 반응형 설계:
  - 전 breakpoint: 1col 세로 스택
- 비고: ds-card 내에 Q/A 구조. Q는 bold, A는 일반 텍스트.

---

### 섹션 16: Operational Example (배너)
- 패턴: [Q] Banner -- ds-banner--full
- 헤더: 없음
- 배경: ds-bg--green-wave (배너 자체에 적용)
- 배경 bg-image 적용 위치: ds-banner--full 컴포넌트
- 사용 컴포넌트: ds-banner--full ds-bg--green-wave
- 콘텐츠:
  - 텍스트: "An enterprise team building an internal LLM search system over contracts, policy documents, and HR records found that every document contained PII, internal identifiers, and regulated fields that could not leave the enterprise boundary. LLM Capsule anonymized all sensitive fields at the prompt layer before each LLM interaction and remapped outputs back to the original context."
  - 링크 (display: block, 줄바꿈): "See enterprise use cases" -> /#enterprise-use-cases
- 텍스트 색상: text-primary (밝은 오버레이)
- 반응형 설계:
  - 전 breakpoint: 중앙 정렬
- 비고: 원문 operational example 핵심 내용만 배너로.

---

### 섹션 17: CTA Band
- 패턴: [K] CTA Band (전폭, container 밖)
- 배경: 기본 그라디언트 (ds-bg--* 클래스 없음, 기본 fallback 사용)
- 배경 bg-image 적용 위치: 없음 (기본 그라디언트)
- 사용 컴포넌트: ds-cta-band
- eyebrow: "Secure your LLM workflows"
- title: "Your LLMs are ready. Is your data protected?"
- 타이틀 강조 키워드: "protected" -> ds-text--brand-light (어두운 오버레이 위 밝은 보라)
- description: "Stop letting sensitive data block AI adoption. LLM Capsule intercepts PII in prompts before it reaches any LLM -- 98.1% detection accuracy, full audit trail, on-premise or AWS Marketplace."
- 버튼 (ds-cta-band__actions):
  - "Run technical demo" (ds-btn--md)
  - "Explore LLM Capsule" (ds-btn--md, target=_blank)
  - "See production cases" (ds-btn--md)
- footnote: "30-min review, no sales pitch"
- 반응형 설계:
  - mobile (375px): 타이틀 40px, 버튼 세로 스택 max-width 320px
  - tablet (768px): padding 100px
  - desktop (1440px): padding 120px
  - wide (1920px): padding 120px
- 비고: 텍스트 전부 흰색. CTA 밴드 기본 그라디언트 사용으로 배경 이미지 중복 방지.

---

## 배경 이미지 사용 현황 (중복 검증)

| 위치 | 배경 이미지 | 적용 대상 |
|------|------------|-----------|
| 섹션 1 Hero | ds-bg--paint-blue | ds-hero__screenshot-frame |
| 섹션 2 KPI | ds-bg--lavender | ds-kpi-band 컴포넌트 |
| 섹션 4 배너 | ds-bg--wave-teal | ds-banner--full |
| 섹션 9 Product Split | ds-bg--peach | ds-product-split__visual |
| 섹션 16 배너 | ds-bg--green-wave | ds-banner--full |
| 섹션 17 CTA | 없음 (기본 그라디언트) | ds-cta-band |

중복 없음. 5개 배경 이미지 모두 고유.

---

## 배경 교대 패턴

| # | 섹션 | 배경 |
|---|------|------|
| 1 | Hero | white + bg-image frame |
| 2 | KPI Band | white + bg-image component |
| 3 | Certifications | white |
| 4 | Banner | bg-image |
| 5 | How It Works | surface-light |
| 6 | Availability | white |
| 7 | Capabilities | surface-light |
| 8 | Detection Coverage | white |
| 9 | Integration | surface-light + bg-image visual |
| 10 | Comparison | white |
| 11 | Enterprise Deploy | surface-light |
| 12 | Key Concepts | white |
| 13 | When Teams Need | surface-light |
| 14 | Partners | white |
| 15 | FAQ | white |
| 16 | Banner | bg-image |
| 17 | CTA | gradient |

14~15 white 연속 2개: 허용 (3개 미만). 16번 배너가 break 역할.

---

## 누락 컴포넌트

1. **코드 블록 PII/masked 하이라이트**: DS에 없음. frontend-dev가 style 태그 내 .ds-code-pii, .ds-code-masked 클래스 정의. DS 변수만 사용하므로 design-system-agent 호출 불요.

2. **ds-bg--smoke-pink-teal 등 미등록 배경**: 사용하지 않음. CTA는 기본 그라디언트 사용.

-> design-system-agent 호출 불요.

---

## 콘텐츠 무결성 체크리스트

- [x] 원문 Hero 텍스트 전량 포함
- [x] 원문 KPI 4개 수치 전량 포함
- [x] 원문 인증 배지 4개 포함 (KISA/GDPR/HIPAA는 compliance 카드에서)
- [x] 원문 Prompt flow 3단계 전량 포함
- [x] 원문 Availability 2개 카드 포함
- [x] 원문 4 Capabilities 전량 포함
- [x] 원문 Detection types 6개 전량 포함
- [x] 원문 Integration (SynTitan + Compliance 3개) 전량 포함
- [x] 원문 Comparison table 5행 전량 포함
- [x] 원문 Enterprise deployments 3개 사례 전량 포함
- [x] 원문 Key concepts 3개 전량 포함
- [x] 원문 When teams need 4개 blocker 전량 포함
- [x] 원문 FAQ 6개 Q&A 전량 포함
- [x] 원문 Operational example 핵심 포함
- [x] 원문 CTA 전량 포함
- [x] 원문 후반부 비교 3열: 테이블 + 배너 요약으로 통합 (내용 누락 없음)
- [x] 원문 "AI-ready data" 정의: Hero description에 포함
- [x] Partner 로고: DS 공식 11개 목록 사용
