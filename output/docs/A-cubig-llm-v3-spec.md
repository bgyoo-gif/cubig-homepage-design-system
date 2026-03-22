# Design Spec: A-cubig-llm-v3
생성일: 2026-03-20
분석한 원본: input/A-cubig-llm-v3.html

---

## 전체 구조 요약
- 섹션 수: 17개
- 문서 성격: 제품 소개 + 설득 (LLM Capsule 제품 페이지)
- 톤앤매너: 기술적 권위 + 직접적 문제 해결 제안
- 특이사항:
  - 제품명 "LLM Capsule"은 `ds-text--product` (Oxanium) 적용
  - 외부 링크(AWS Marketplace, llmcapsule.ai)는 `ds-btn--secondary` 버튼형
  - Prompt flow 데모는 코드블록 다크 테마 활용
  - eyebrow 전면 금지 (사용자 규칙)
  - 텍스트 최소 명도: text-tertiary (#9c9c9c) -- text-muted 금지

---

## 배경 이미지 사용 계획

| 섹션 | 배경 이미지 | 적용 위치 | 클래스 |
|------|------------|-----------|--------|
| S1 Hero | 없음 (text-only) | -- | -- |
| S1 Screenshot Frame | ds-bg--paint-blue-iridescent | ds-hero__screenshot-frame | ds-bg--paint-blue-iridescent |
| S6 KPI | ds-bg--gradient-violet-teal | ds-kpi-band 컴포넌트 | ds-bg--gradient-violet-teal |
| S15 Operational Example | ds-bg--gradient-sage-rose | ds-banner--full 컴포넌트 | ds-bg--gradient-sage-rose |
| S16 CTA | ds-bg--wave-teal-blue | ds-cta-band 섹션 | ds-bg--wave-teal-blue |
| 나머지 | white / surface-light 교대 | section | -- |

중복 없음 확인 완료.

---

## 섹션별 설계

---

### 섹션 1 (S1): Hero (Text-Only + Screenshot)
- **패턴**: [A] ds-hero--text-only 상단 + [A-2] ds-hero--screenshot 하단 (한 section 안에 결합)
- **헤더 eyebrow**: 없음 (Hero eyebrow 금지 + 전면 금지 규칙)
- **헤더 타이틀**: `<span class="ds-text--product">LLM Capsule</span>`
- **타이틀 강조 키워드**: 없음 (제품명 자체가 타이틀이므로 ds-text--product만 적용)
- **헤더 description**: "Your team wants to use AI on enterprise data. Legal and compliance say the data is off-limits. LLM Capsule removes that blocker -- detecting and anonymizing PII in LLM prompts, preventing prompt data leakage, and making enterprise LLM usage safe without leaving your perimeter."
- **헤더 정렬**: center (Hero Screenshot 구조)
- **서브 타이틀**: 없음
- **배경**: white (섹션), 스크린샷 프레임에 배경 이미지
- **배경 bg-image 적용 위치**: ds-hero__screenshot-frame (ds-bg--paint-blue-iridescent)
- **사용 컴포넌트**: ds-hero-screenshot-section, ds-hero--screenshot, ds-hero__screenshot-frame, ds-hero__screenshot, ds-btn--primary, ds-btn--secondary
- **그리드**: 없음
- **구조 순서**:
  1. h1 타이틀 (중앙 정렬)
  2. description (중앙 정렬, max-width 반응형)
  3. 보조 텍스트: "Secure LLM usage / Prompt data leakage prevention / Enterprise LLM privacy / PII anonymization at runtime" -- ds-body-s, color text-tertiary
  4. 스크린샷 프레임 (ds-bg--paint-blue-iridescent) > 스크린샷 이미지 (https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images/screenshot-llmcapsule.avif)
  5. CTA 버튼 (ds-hero__actions-below, 중앙 정렬):
     - "See it remove a PII blocker live" -- ds-btn--primary ds-btn--md (mailto 링크)
     - "llmcapsule.ai" -- ds-btn--secondary ds-btn--md (외부 링크, target="_blank")
     - "See SynTitan Platform" -- ds-btn--secondary ds-btn--md
- **반응형 설계**:
  - mobile (375px): 풀폭, 버튼 세로 스택, 프레임 padding 축소, screenshot min-height 180px
  - tablet (768px): description max-width 100%, 버튼 가로
  - sm-desktop (1024px): description max-width 720px
  - desktop (1440px): description max-width 860px, 프레임 padding 48px
- **비고**: Hero 섹션 padding-top 100px 고정. text-wrap: balance(제목) / pretty(본문). 원문의 hero-tag는 eyebrow 금지로 제거.

---

### 섹션 2 (S2): AI-Ready Data Definition (Banner)
- **패턴**: [Q] ds-banner
- **헤더 eyebrow**: 없음
- **헤더 타이틀**: 없음 (배너이므로)
- **타이틀 강조 키워드**: 없음
- **배경**: surface-light (ds-banner 기본)
- **배경 bg-image 적용 위치**: 없음
- **사용 컴포넌트**: ds-banner
- **콘텐츠**: "True AI-ready data means it is <span class='ds-text--brand'>usable</span>, <span class='ds-text--brand'>privacy-safe</span>, and <span class='ds-text--brand'>stable for production execution</span>."
- **반응형 설계**: 전 breakpoint에서 동일 (텍스트 중앙 정렬)
- **비고**: 원문의 geo-def 박스 내용. 간결한 한 줄 정의.

---

### 섹션 3 (S3): Prompt Data Leakage Definition (Banner Full)
- **패턴**: [Q] ds-banner--full
- **헤더 eyebrow**: 없음
- **헤더 타이틀**: 없음
- **타이틀 강조 키워드**: 없음
- **배경**: 없음 (ds-banner--full에 bg 이미지 적용 안 함 -- 배경 이미지 예산 초과 방지를 위해 ds-banner--brand variant 사용)
- **배경 bg-image 적용 위치**: 없음
- **사용 컴포넌트**: ds-banner--brand
- **콘텐츠**:
  - 라벨: "Definition" (ds-banner__label)
  - 본문: "Prompt data leakage occurs when enterprise data containing PII, regulated fields, or confidential information is included in LLM prompts -- exposing sensitive records to external AI systems. This is the primary blocker preventing enterprise LLM adoption."
  - 보조: "LLM Capsule is a capability within Cubig's AI-Ready Data Infrastructure -- the infrastructure layer that makes enterprise data usable, privacy-safe, and stable for production AI execution."
  - 링크: "Read: Prompt Data Leakage" -- ds-btn--ghost (별도 줄바꿈, display block)
- **반응형 설계**: 전 breakpoint에서 중앙 정렬
- **비고**: 원문의 2 패러그래프 정의 섹션을 배너로 압축.

---

### 섹션 4 (S4): How LLM Capsule Works (Step Tabs)
- **패턴**: [U] ds-step-tabs
- **헤더 eyebrow**: 없음
- **헤더 타이틀**: "Sensitive data never reaches the <span class='ds-text--brand'>LLM.</span>"
- **타이틀 강조 키워드**: "LLM."
- **헤더 description**: "LLM Capsule sits between your application and the LLM API. Every prompt is intercepted, inspected, and cleaned before transmission."
- **헤더 정렬**: center
- **배경**: white
- **배경 bg-image 적용 위치**: 없음
- **사용 컴포넌트**: ds-section-header--underline, ds-step-tabs
- **그리드**: 없음 (탭 구조)
- **탭 구성** (3개 탭):
  1. **Step 1: Intercept**
     - 좌측 콘텐츠:
       - 타이틀: "Raw Prompt Intercepted"
       - 설명: "Employee submits a prompt containing PII -- names, IDs, dates, addresses, medical codes. LLM Capsule intercepts the prompt before it reaches the LLM."
       - 코드블록 (ds-code-block):
         ```
         // Input -- before LLM Capsule
         Summarize the claim filed by [PII: John Martinez] (ID: [PII: P-8847211])
         on [PII: March 3, 2025]. The patient's address is [PII: 42 Elm Street,
         Chicago, IL 60601]. Diagnosis code: [PII: ICD-10: J45.20].
         ```
         PII 부분은 ds-code--remove 클래스
     - 우측: 스크린샷 placeholder
     - **[USER ACTION REQUIRED]**: Step 1 스크린샷 필요 -- Raw prompt with PII highlighted
  2. **Step 2: Anonymize**
     - 좌측 콘텐츠:
       - 타이틀: "Sensitive Tokens Replaced"
       - 설명: "Detected sensitive tokens are replaced with structured placeholders before the prompt is transmitted to the LLM API. No real PII leaves the enterprise perimeter."
       - 코드블록 (ds-code-block):
         ```
         // Sent to LLM -- PII replaced with tokens
         Summarize the claim filed by [PERSON_01] (ID: [ID_01])
         on [DATE_01]. The patient's address is [ADDRESS_01].
         Diagnosis code: [MED_CODE_01].
         ```
         토큰 부분은 ds-code--add 클래스
     - 우측: 스크린샷 placeholder
     - **[USER ACTION REQUIRED]**: Step 2 스크린샷 필요 -- Anonymized prompt
  3. **Step 3: Re-map**
     - 좌측 콘텐츠:
       - 타이틀: "Output Re-mapped for Downstream"
       - 설명: "LLM outputs referencing anonymized tokens are re-mapped for downstream use -- preserving semantic structure and output usability without exposing any real data."
       - 코드블록 (ds-code-block):
         ```
         // Output -- tokens re-mapped for downstream use
         The claim filed by [PERSON_01] on [DATE_01] relates to a respiratory
         condition. The case is pending review. All PII tokens are preserved
         in the anonymization map for authorized downstream access.
         ```
         토큰 부분은 ds-code--add 클래스, 주석은 ds-code--muted
     - 우측: 스크린샷 placeholder
     - **[USER ACTION REQUIRED]**: Step 3 스크린샷 필요 -- Re-mapped output
- **반응형 설계**:
  - mobile (375px): 탭 가로 스크롤, 패널 1col
  - tablet (768px): 탭 wrap, 패널 1col
  - sm-desktop (1024px): 패널 5fr:7fr 2col
  - desktop (1440px): 동일 + gap 확대
- **비고**: JS 필수 (탭 전환). 코드블록 다크 테마(border: none).

---

### 섹션 5 (S5): Performance KPI
- **패턴**: [F] ds-kpi-band
- **헤더 eyebrow**: 없음
- **헤더 타이틀**: 없음 (KPI band는 헤더 없이 독립 배치)
- **타이틀 강조 키워드**: 없음
- **배경**: white (섹션), 배경 이미지는 ds-kpi-band 컴포넌트에 적용
- **배경 bg-image 적용 위치**: ds-kpi-band 컴포넌트 (ds-bg--gradient-violet-teal)
- **사용 컴포넌트**: ds-kpi-band
- **KPI 항목** (4개):
  1. 98.1% -- PII Detection Accuracy
  2. 99.14% -- Workflow Accuracy
  3. 100% -- Structured PII Coverage
  4. 98% -- Response Similarity
- **반응형 설계**:
  - mobile (375px): 1col, padding 32px 20px
  - tablet (768px): 2col
  - sm-desktop (1024px): 4col
  - desktop (1440px): 4col
- **비고**: 숫자 색상 ds-color-white, 라벨 rgba(255,255,255,0.85). 어두운 배경 위 텍스트.

---

### 섹션 6 (S6): LLM Capsule vs Alternatives (Comparison Table)
- **패턴**: [O] ds-table
- **헤더 eyebrow**: 없음
- **헤더 타이틀**: "LLM Capsule vs <span class='ds-text--brand'>the alternatives</span>"
- **타이틀 강조 키워드**: "the alternatives"
- **헤더 description**: "You don't need to give up frontier models to keep your data safe. LLM Capsule lets you have both."
- **헤더 정렬**: center
- **배경**: surface-light
- **배경 bg-image 적용 위치**: 없음
- **사용 컴포넌트**: ds-section-header--underline, ds-table-wrap, ds-table
- **테이블** (3열): Private / on-prem LLM | Manual data sanitization | LLM Capsule
- **테이블 행**:
  | Feature | Private / on-prem LLM | Manual sanitization | LLM Capsule |
  |---|---|---|---|
  | Data inside firewall | Yes | Yes | Yes (PII never leaves) |
  | Access to frontier models | ds-text--linethrough | ds-text--linethrough | Yes -- any LLM |
  | Real-time PII detection | ds-text--linethrough | ds-text--linethrough | Yes -- automated |
  | Output re-mapping | ds-text--linethrough | ds-text--linethrough | Yes -- automatic |
  | Infra overhead | High cost | Slow, error-prone | Deploys as a layer |
- **LLM Capsule 열 강조**: 헤더에 ds-text--brand
- **반응형 설계**:
  - mobile (375px): 가로 스크롤 (ds-table-wrap overflow-x auto)
  - 나머지: 표준
- **비고**: 원문에 두 곳 비교 콘텐츠를 통합. ds-text--linethrough로 불가능 항목 표시.

---

### 섹션 7 (S7): Four Capabilities
- **패턴**: [G] ds-card-grid--2col + ds-card
- **헤더 eyebrow**: 없음
- **헤더 타이틀**: "Four steps to <span class='ds-text--brand'>AI-ready data.</span>"
- **타이틀 강조 키워드**: "AI-ready data."
- **헤더 description**: 없음
- **헤더 정렬**: center
- **배경**: white
- **배경 bg-image 적용 위치**: 없음
- **사용 컴포넌트**: ds-section-header--underline, ds-card-grid--2col, ds-card
- **카드 4개**:
  1. badge: "01 DETECT" (ds-card__badge--brand) -- title: "PII Detection" -- description 원문 그대로
  2. badge: "02 ANONYMIZE" (ds-card__badge--brand) -- title: "Prompt Anonymization" -- description 원문 그대로
  3. badge: "03 RE-MAP" (ds-card__badge--brand) -- title: "Output Re-mapping" -- description 원문 그대로
  4. badge: "04 AUDIT" (ds-card__badge--brand) -- title: "Audit & Traceability" -- description 원문 그대로
- **카드 구조**: badge -> title (ds-card__title--sm) -> description (ds-card__description)
- **반응형 설계**:
  - mobile (375px): 1col
  - tablet (768px): 2col
  - sm-desktop (1024px): 2col
  - desktop (1440px): 2col

---

### 섹션 8 (S8): Detection Coverage
- **패턴**: [J] ds-feature-grid (2col)
- **헤더 eyebrow**: 없음
- **헤더 타이틀**: "What was blocking your <span class='ds-text--brand'>AI. Now removed.</span>"
- **타이틀 강조 키워드**: "AI. Now removed."
- **헤더 description**: 없음
- **헤더 정렬**: center
- **배경**: surface-light
- **배경 bg-image 적용 위치**: 없음
- **사용 컴포넌트**: ds-section-header--underline, ds-feature-grid
- **피처 6개**:
  1. **Personal Identifiers** (Identity) -- icon: fingerprint -- pills(ds-badge--neutral ds-badge--sm): Full Name, Date of Birth, National ID, Passport No., Email Address, Phone Number, Home Address
  2. **Financial Data** (Financial) -- icon: chart-bar -- pills: Account Number, Credit Card, Routing Number, Tax ID, Transaction ID, Policy Number
  3. **Health & Clinical** (Medical) -- icon: scan -- pills: Patient ID, ICD Codes, Diagnosis Terms, Provider Name, Clinical Dates, Prescription Data
  4. **Enterprise Data** (Organizational) -- icon: users -- pills: Employee ID, Internal Codes, Customer ID, Contract Number, Project Code
  5. **Geographic Data** (Location) -- icon: globe -- pills: Street Address, Postcode/ZIP, GPS Coordinates, Region/State
  6. **Enterprise-Defined Fields** (Custom) -- icon: cog -- pills: Custom Patterns, Domain-Specific IDs, Regex Rules, Industry Codes
- **각 피처 항목 하단에 pill 태그 나열**: ds-badge--neutral ds-badge--sm flex-wrap
- **반응형 설계**:
  - mobile (375px): 1col
  - tablet (768px): 2col (feature-grid 기본)
  - 나머지: 2col

---

### 섹션 9 (S9): Integration (SynTitan + Compliance)
- **패턴**: [C] ds-product-split + 하단 [G] ds-card-grid--3col
- **헤더 eyebrow**: 없음
- **헤더 타이틀**: "Works with <span class='ds-text--product'>SynTitan</span>. Works standalone too."
- **타이틀 강조 키워드**: 없음 (제품명 강조는 ds-text--product로 대체)
- **헤더 description**: 없음
- **헤더 정렬**: center
- **배경**: white
- **배경 bg-image 적용 위치**: 없음

**9-A: Product Split (SynTitan 연동)**
- **사용 컴포넌트**: ds-product-split
- **좌측 visual**:
  - 로고: https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images/logo-syntitan.png
  - 스크린샷: https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images/screenshot-syntitan.webp
  - 배경: ds-bg--gradient-cream-jade (visual 영역에 적용)
- **우측 content**:
  - 타이틀: "Full execution traceability for LLM workflows"
  - lead: "When LLM Capsule runs within SynTitan, every anonymization run is bound to a Release State."
  - body: "LLM workflows become reproducible, auditable, and compliant -- the same guarantees SynTitan provides for all production AI runs."
  - 불릿 리스트 (ds-bullet--check):
    - Anonymization config versioned in Release State
    - Each run linked via Run Binding
    - Change Log records what was detected and replaced
    - Re-run any prior LLM workflow under identical conditions
  - CTA: "See SynTitan Platform" -- ds-btn--secondary ds-btn--md

**9-B: Compliance Cards (3col)**
- **사용 컴포넌트**: ds-card-grid--3col + ds-card
- **카드 3개**:
  1. badge: "GDPR / CCPA" (ds-card__badge--teal) -- title: "Customer data no longer blocks LLM usage" (ds-card__title--sm) -- description 원문 그대로
  2. badge: "HIPAA" (ds-card__badge--teal) -- title: "Clinical data no longer off-limits for AI" -- description 원문 그대로
  3. badge: "SOC 2 / ENTERPRISE SECURITY" (ds-card__badge--teal) -- title: "Audit-ready LLM data handling" -- description 원문 그대로

- **반응형 설계**:
  - mobile (375px): product-split 1col 세로, cards 1col
  - tablet (768px): product-split 1col, cards 2col
  - sm-desktop (1024px): product-split 4:6 가로, cards 3col
  - desktop (1440px): 동일

---

### 섹션 10 (S10): Enterprise Deployments
- **패턴**: [H-3] ds-card-grid--3col + ds-card--case-study (3열 콤팩트)
- **헤더 eyebrow**: 없음
- **헤더 타이틀**: "Deployed across <span class='ds-text--brand'>global regulated industries.</span>"
- **타이틀 강조 키워드**: "global regulated industries."
- **헤더 description**: "LLM Capsule is in production across global telco, financial services, and healthcare -- industries where AI adoption was previously blocked by sensitive internal data. Now it isn't."
- **헤더 정렬**: center
- **배경**: surface-light
- **배경 bg-image 적용 위치**: 없음
- **사용 컴포넌트**: ds-section-header--underline, ds-card-grid--3col, ds-card--case-study
- **케이스 3개** (graphic 세트 통일):
  1. **Deutsche Telekom** (Global Telco)
     - 이미지: https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/graphics/graphic-telecom.png
     - 카테고리: Global Telco
     - 타이틀: Deutsche Telekom
     - badge: "T Challenge 2026 -- Top 12" (ds-card__badge--teal)
     - 설명 불릿(ds-bullet--dot): "Top 12 finalist in T Challenge 2026 for enterprise LLM data protection. Evaluated across telco-scale sensitive data workflows -- customer care, network ops, billing AI."
     - tags: #LLM Capsule
  2. **Claroty** (Global OT Security)
     - 이미지: https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/graphics/graphic-ai-intelligence.png
     - 카테고리: Global OT Security
     - 타이틀: Claroty
     - badge: "OT Infrastructure AI" (ds-card__badge--brand)
     - 설명 불릿: "OT infrastructure AI without exposing critical operational technology data. LLM Capsule anonymizes sensitive OT network identifiers at the interaction layer."
     - tags: #LLM Capsule
  3. **DB Insurance / EUMC / Shin&Kim** (Finance / Health / Legal)
     - 이미지: https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/graphics/graphic-shopping.png
     - 카테고리: Finance / Health / Legal
     - 타이틀: DB Insurance / EUMC / Shin&Kim
     - badge: "Finance / Health / Legal" (ds-card__badge--teal)
     - 설명 불릿: "Sensitive claim, clinical, and contract data protected during LLM-assisted document workflows across Korean financial services, medical research, and legal practice."
     - tags: #LLM Capsule
- **반응형 설계**:
  - mobile (375px): 1col, 카드 세로 스택
  - tablet (768px): 2col
  - sm-desktop (1024px): 3col
  - desktop (1440px): 3col

---

### 섹션 11 (S11): Key Concepts (LLM Data Security)
- **패턴**: [G] ds-card-grid--3col + ds-card
- **헤더 eyebrow**: 없음
- **헤더 타이틀**: "Key concepts in <span class='ds-text--brand'>LLM data security</span>"
- **타이틀 강조 키워드**: "LLM data security"
- **헤더 description**: 없음
- **헤더 정렬**: center
- **배경**: white
- **배경 bg-image 적용 위치**: 없음
- **사용 컴포넌트**: ds-section-header--underline, ds-card-grid--3col, ds-card
- **카드 3개**:
  1. badge: "CONCEPT" (ds-card__badge--brand) -- title: "Prompt Anonymization" (ds-card__title--sm) -- description 원문 그대로
  2. badge: "CONCEPT" (ds-card__badge--brand) -- title: "Interaction-Layer Security" -- description 원문 그대로
  3. badge: "CONCEPT" (ds-card__badge--brand) -- title: "LLM Capsule vs. DTS" -- description 원문 그대로 + "Explore DTS" ds-btn--ghost 링크
- **반응형 설계**:
  - mobile (375px): 1col
  - tablet (768px): 2col
  - sm-desktop (1024px): 3col
  - desktop (1440px): 3col

---

### 섹션 12 (S12): When Teams Need LLM Capsule (4 Blockers)
- **패턴**: [G] ds-card-grid--2col + ds-card
- **헤더 eyebrow**: 없음
- **헤더 타이틀**: "Four situations where sensitive data <span class='ds-text--brand'>blocks AI adoption.</span>"
- **타이틀 강조 키워드**: "blocks AI adoption."
- **헤더 description**: "Enterprise LLM adoption stalls when data contains fields that can't leave the perimeter. LLM Capsule was built for exactly these blockers."
- **헤더 정렬**: center
- **배경**: surface-light
- **배경 bg-image 적용 위치**: 없음
- **사용 컴포넌트**: ds-section-header--underline, ds-card-grid--2col, ds-card
- **카드 4개**:
  1. badge: "BLOCKER: PII IN PROMPTS" (ds-card__badge--red) -- title: "Employees want to use LLMs on enterprise data, but prompts contain PII." (ds-card__title--sm) -- description 원문 그대로
  2. badge: "BLOCKER: COMPLIANCE" (ds-card__badge--red) -- title: "Compliance blocks LLM usage entirely, even for internal tools." -- description 원문 그대로
  3. badge: "BLOCKER: OUTPUT EXPOSURE" (ds-card__badge--red) -- title: "LLM outputs may contain or infer sensitive information from prompts." -- description 원문 그대로
  4. badge: "BLOCKER: USABILITY" (ds-card__badge--red) -- title: "Existing masking tools destroy data usability, making LLM output meaningless." -- description 원문 그대로
- **하단 CTA 버튼**:
  1. "Run technical walkthrough" -- ds-btn--primary ds-btn--md
  2. "Explore LLM Capsule" -- ds-btn--secondary ds-btn--md (외부 링크 llmcapsule.ai, target="_blank")
  3. "Explore concept: Prompt data leakage" -- ds-btn--secondary ds-btn--md
- **반응형 설계**:
  - mobile (375px): 1col, 버튼 세로 스택
  - tablet (768px): 2col
  - sm-desktop (1024px): 2col
  - desktop (1440px): 2col

---

### 섹션 13 (S13): Certifications & Awards (Marquee)
- **패턴**: [I-2] ds-cert-grid (마키)
- **헤더 eyebrow**: 없음
- **헤더 타이틀**: "Certified and <span class='ds-text--brand'>recognized</span>"
- **타이틀 강조 키워드**: "recognized"
- **헤더 description**: 없음
- **헤더 정렬**: center
- **배경**: white
- **배경 bg-image 적용 위치**: 없음
- **사용 컴포넌트**: ds-section-header--underline, ds-cert-grid (마키)
- **인증/수상 목록**: design-system.md 공식 목록 전체 사용 (11개)
  1. Information Security Fast Track -- KISA -- 2024 -- cert-kisa.png
  2. GS Certification -- TTA -- 2025 -- cert-gs.png
  3. ISO/IEC 27001 (ISMS) -- ISO -- 2026 -- cert-iso.png
  4. ISO/IEC 42001 (AIMS) -- ISO -- 2026 -- cert-iso.png
  5. Information Security Innovation Award -- Ministry of Science & ICT -- 2024 -- awards-ministry-of-science-and-ict.jpg
  6. Startup World Cup -- Finalist -- Startup World Cup -- 2025 -- cert-startupworldcup.png
  7. Next Rise -- Global Innovator -- Next Rise -- 2025 -- (로고 없음)
  8. T Challenge 2026 -- Finalist -- Deutsche Telekom -- 2026 -- partner-deutsche-telekom.avif
  9. AI EXPO KOREA -- AI Medical Innovation Award -- AI EXPO KOREA -- 2025 -- awards-koreaia.png
  10. Emerging AI+X Top 100 -- 2026 -- (로고 없음)
  11. Representative Vendor, Hyper-Synthetic Data -- Gartner -- 2025 -- cert-gartner.svg.png
- **마키**: 우->좌 무한 스크롤, 호버 시 일시정지, JS로 2벌 복제
- **반응형 설계**:
  - mobile (375px): 카드 170px, gap 축소, 속도 25s
  - tablet+: 카드 200px, gap 24px, 속도 40s
- **비고**: 원문의 인증 뱃지를 공식 cert-grid 마키로 대체.

---

### 섹션 14 (S14): Partner Logos (Marquee)
- **패턴**: [I] ds-partner-grid (마키)
- **헤더 eyebrow**: 없음
- **헤더 타이틀**: "Trusted by <span class='ds-text--brand'>industry leaders</span>"
- **타이틀 강조 키워드**: "industry leaders"
- **헤더 description**: 없음
- **헤더 정렬**: center
- **배경**: surface-light
- **배경 bg-image 적용 위치**: 없음
- **사용 컴포넌트**: ds-section-header--underline, ds-partner-grid (마키)
- **파트너 목록**: design-system.md 공식 목록 전체 (11개)
  1. Gartner -- partner-gartner.png
  2. Naver Cloud -- partner-navercloud.avif
  3. SK Telecom -- partner-sktelecom.avif
  4. Kyobo -- partner-kyobo.avif
  5. ROK Army -- partner-korea army.avif
  6. ROK Air Force -- partner-korea-airforce.avif
  7. EUMC -- partner-eumc.avif
  8. Deutsche Telekom -- partner-deutsche-telekom.avif
  9. Claroty -- partner-claroty.png
  10. Korea Heritage Service -- partner-korea-heritage-service.jpg
  11. Ministry of Data and Statistics -- partner-ministry-of-data-and-statistics.png
- **마키**: 우->좌 무한 스크롤, 호버 시 일시정지, JS로 2벌 복제
- **반응형 설계**: partner-grid 기본 반응형 (로고 100px mobile, 120px desktop)

---

### 섹션 15 (S15): Full Comparison Table
- **패턴**: [O] ds-table (5열)
- **헤더 eyebrow**: 없음
- **헤더 타이틀**: "LLM Capsule vs. <span class='ds-text--brand'>doing nothing.</span>"
- **타이틀 강조 키워드**: "doing nothing."
- **헤더 description**: 없음
- **헤더 정렬**: center
- **배경**: white
- **배경 bg-image 적용 위치**: 없음
- **사용 컴포넌트**: ds-section-header--underline, ds-table-wrap, ds-table
- **테이블 열**: Capability | LLM Capsule | Manual Prompt Review | Static Data Masking | No Protection
- **테이블 행** (원문 그대로):
  1. Real-time PII detection: check "Automated, in-line" | partial "Slow, error-prone" | cross "Pre-processing only" | cross
  2. Output usability preserved: check "Token re-mapping" | partial "Context dependent" | cross "Masked data lost" | check "But exposed"
  3. Blocks external PII transmission: check "Before API call" | partial "Human dependent" | partial "Partial" | cross
  4. Audit trail: check "Full log + Release State" | cross | partial "Limited" | cross
  5. Custom enterprise field detection: check "Configurable rules" | partial "Manual only" | partial "Schema-bound" | cross
- **기호 스타일**: check = ds-color-success (green checkmark), partial = ds-color-warn (triangle), cross = ds-color-error (X mark)
- **LLM Capsule 열 강조**: 헤더 ds-text--brand
- **반응형 설계**:
  - mobile (375px): 가로 스크롤 (ds-table-wrap)
  - 나머지: 표준

---

### 섹션 16 (S16): FAQ (Accordion)
- **패턴**: [P] ds-ac-card (아코디언)
- **헤더 eyebrow**: 없음
- **헤더 타이틀**: "Common <span class='ds-text--brand'>questions</span>"
- **타이틀 강조 키워드**: "questions"
- **헤더 description**: 없음
- **헤더 정렬**: center
- **배경**: surface-light
- **배경 bg-image 적용 위치**: 없음
- **사용 컴포넌트**: ds-section-header--underline, ds-ac-list, ds-ac-card
- **FAQ 항목** (6개, 원문 그대로):
  1. "What is LLM Capsule?" (기본 open -- ds-ac--open)
     - 답변: "LLM Capsule is a security capability that protects sensitive data including PII during LLM usage. It detects sensitive fields in prompts and outputs, anonymizes or shields them before LLM interaction, and preserves output usability for downstream workflows -- all within SynTitan execution workflows."
  2. "What types of sensitive data does LLM Capsule detect?"
     - 답변: 원문 그대로
  3. "Does LLM Capsule affect LLM output quality?"
     - 답변: 원문 그대로
  4. "Does LLM Capsule work with external LLM APIs?"
     - 답변: 원문 그대로
  5. "Does LLM Capsule support on-premise deployment?"
     - 답변: 원문 그대로
  6. "How does LLM Capsule relate to SynTitan?"
     - 답변: 원문 그대로
- **아코디언 구조**: industry-dot 없음 (FAQ이므로), title만 사용, meta에 badge 없음, toggle 28x28px
- **반응형 설계**: 전 breakpoint에서 동일 (1col 풀폭)
- **비고**: JS toggleAcCard 필수.

---

### 섹션 17 (S17): Operational Example (Banner Full)
- **패턴**: [Q] ds-banner--full
- **헤더 eyebrow**: 없음
- **헤더 타이틀**: 없음 (배너)
- **타이틀 강조 키워드**: 없음
- **배경**: ds-bg--gradient-sage-rose (배너 컴포넌트 내부)
- **배경 bg-image 적용 위치**: ds-banner--full 컴포넌트
- **사용 컴포넌트**: ds-banner--full
- **콘텐츠**:
  - h3: "Enterprise RAG with Sensitive Documents"
  - 본문: "An enterprise team building an internal LLM search system over contracts, policy documents, and HR records found that every document contained PII, internal identifiers, and regulated fields that could not leave the enterprise boundary. LLM Capsule anonymized all sensitive fields at the prompt layer before each LLM interaction and remapped outputs back to the original context. The RAG system went live using frontier LLM capabilities -- without any sensitive data crossing the enterprise perimeter."
  - 태그라인: "Blocker removed: restricted data (PII and regulated fields blocking enterprise LLM adoption)" -- ds-body-s, text-secondary
  - 링크: "See enterprise use cases" -- ds-btn--ghost (별도 줄바꿈)
- **반응형 설계**: 전 breakpoint에서 중앙 정렬, border-radius xl
- **비고**: 텍스트 색상 text-primary (배경 이미지 + rgba(255,255,255,0.72) 오버레이).

---

### 섹션 18 (S18): CTA Band
- **패턴**: [K] ds-cta-band (전폭)
- **헤더 eyebrow**: 없음
- **타이틀**: "Your LLMs are ready. Is your data protected?" (ds-cta-band__title, 64px, 흰색)
- **타이틀 강조 키워드**: 없음 (CTA band 텍스트는 흰색 단색)
- **배경**: ds-bg--wave-teal-blue
- **배경 bg-image 적용 위치**: ds-cta-band 섹션 (전폭, container 밖)
- **사용 컴포넌트**: ds-cta-band
- **콘텐츠**:
  - 설명: "Stop letting sensitive data block AI adoption. LLM Capsule intercepts PII in prompts before it reaches any LLM -- 98.1% detection accuracy, full audit trail, on-premise or AWS Marketplace." (ds-cta-band__description, rgba(255,255,255,0.85))
  - 버튼 (ds-cta-band__actions -- 반투명 흰색 배경):
    1. "Run technical demo" -- ds-btn--md
    2. "Explore LLM Capsule" -- ds-btn--md (외부 링크 llmcapsule.ai)
    3. "See production cases" -- ds-btn--md
  - footnote: "30-min review / no sales pitch" (ds-cta-band__footnote)
- **반응형 설계**:
  - mobile (375px): 타이틀 40px, 버튼 세로 스택
  - tablet (768px): padding 100px
  - sm-desktop (1024px): inner max-width 720px
  - desktop (1440px): inner max-width 860px, padding 120px
- **비고**: 전폭 배치 (ds-container 밖). 텍스트 전부 흰색.

---

## 섹션 배치 순서 (최종)

| # | 섹션 | 배경 | 패턴 |
|---|------|------|------|
| S1 | Hero Screenshot (Text + Screenshot) | white + frame bg-image | [A-2] |
| S2 | AI-Ready Data Definition | banner (surface-light) | [Q] |
| S3 | Prompt Data Leakage Definition | banner--brand | [Q] |
| S4 | How LLM Capsule Works | white | [U] Step Tabs |
| S5 | Performance KPI | white (KPI에 bg-image) | [F] |
| S6 | LLM Capsule vs Alternatives | surface-light | [O] Table |
| S7 | Four Capabilities | white | [G] 2col |
| S8 | Detection Coverage | surface-light | [J] Feature Grid |
| S9 | Integration (SynTitan + Compliance) | white | [C] + [G] 3col |
| S10 | Enterprise Deployments | surface-light | [H-3] 3col |
| S11 | Key Concepts | white | [G] 3col |
| S12 | When Teams Need LLM Capsule | surface-light | [G] 2col |
| S13 | Certifications & Awards | white | [I-2] Marquee |
| S14 | Partner Logos | surface-light | [I] Marquee |
| S15 | Full Comparison Table | white | [O] Table |
| S16 | FAQ | surface-light | [P] Accordion |
| S17 | Operational Example | white (banner에 bg-image) | [Q] Banner Full |
| S18 | CTA Band | bg-image (전폭) | [K] |

**연속 배경 검증**: white/surface-light 교대 확인. 3개 이상 같은 배경 연속 없음.

---

## 추가 규칙 메모

1. **eyebrow 전면 금지**: 모든 섹션에서 ds-section-header__eyebrow 제거 (CTA band 포함)
2. **외부 링크 버튼**: AWS Marketplace, llmcapsule.ai 등 외부 서비스는 ds-btn--secondary + target="_blank"
3. **제품명 폰트**: "LLM Capsule", "SynTitan", "DTS" 단독 키워드에만 ds-text--product (Oxanium)
4. **description max-width 반응형**: 100% -> 720px (1024px) -> 860px (1440px)
5. **text-wrap**: balance(제목), pretty(본문)
6. **텍스트 최소 명도**: text-tertiary (#9c9c9c) -- text-muted 사용 금지
7. **코드블록**: 다크 테마 (background: neutral-900), border: none
8. **Prompt flow 코드블록**: ds-code-block 다크 테마. PII는 ds-code--remove, 토큰은 ds-code--add, 주석은 ds-code--muted
9. **Step Tabs 스크린샷**: placeholder + 사용자에게 스크린샷 요청 메모 (3장 필요)
10. **Availability(AWS/llmcapsule.ai)**: Hero 하단 CTA 버튼으로 통합 (별도 섹션 제거)
11. **원문 footer**: B타입에서는 DS nav + footer 컴포넌트로 교체
12. **ds-bg-- 중복 금지**: 한 페이지 내 동일 bg 클래스 2회 이상 사용 안 함
13. **CSS 변수**: design-system.md에 정의된 것만 사용 (임의 변수 생성 금지)

---

## [USER ACTION REQUIRED] 스크린샷 목록

Step Tabs(S4) 구현을 위해 아래 스크린샷이 필요합니다:

1. **Step 1 -- Intercept**: Raw prompt with PII fields highlighted in red
2. **Step 2 -- Anonymize**: Same prompt with PII replaced by structured tokens (purple)
3. **Step 3 -- Re-map**: LLM output with tokens re-mapped back

스크린샷이 없으면 placeholder(ds-color-surface-light 배경 + "Screenshot placeholder" 텍스트)로 대체합니다.

---

## 구현 위임

이 명세서를 기반으로 frontend-dev 에이전트에게 위임:
> "output/docs/A-cubig-llm-v3-spec.md를 기반으로 output/A-cubig-llm-v3-b-type.html을 생성해줘"
