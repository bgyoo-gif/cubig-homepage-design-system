# Design Spec: A-cubig-proof-v3
생성일: 2026-03-24
분석한 원본: input/A-cubig-proof-v3.html

---

## 전체 구조 요약
- 섹션 수: 9개 (Hero, KPI Band, Partner Grid, Evidence Accordion, Technical Artifacts Step Tabs, SaaS Diff Banner, Business Impact, FAQ, CTA Band)
- 문서 성격: 설득 (Operational Evidence 중심 -- 사례/증거 기반 신뢰 구축)
- 특이사항:
  - Evidence 카드 6개가 아코디언 구조 (Before/After/Diff/Reproduce 4컬럼)
  - Technical Artifacts 4개가 코드블록 포함 -- Step Tabs로 변환
  - Business Impact 6칸 그리드 (3x2) -- KPI + 요약 텍스트
  - Hero에 파트너/산업 태그와 KPI 3개가 인라인으로 포함됨 -- 별도 섹션으로 분리

---

## 필수 규칙 체크리스트
- [x] eyebrow 전면 금지
- [x] 외부 서비스 링크 ds-btn--secondary 버튼형
- [x] Step 프로세스 [U] ds-step-tabs (스크린샷 placeholder)
- [x] Partner [I] ds-partner-grid 마키 + 공식 11개 로고
- [x] FAQ [P] ds-ac-card 아코디언
- [x] 섹션 헤더 기본 center 정렬
- [x] description max-width 반응형 (100% -> 720px -> 860px) + margin: 0 auto
- [x] text-wrap: balance(제목) / pretty(본문)
- [x] 텍스트 최소 명도: text-tertiary (#9c9c9c) -- text-muted 금지
- [x] 코드블록 다크 테마 (border: none, bg: neutral-900)
- [x] 카드 내 코드블록 앞 divider 금지
- [x] KPI band 오버레이: rgba(0,0,0,0.35)
- [x] banner-full padding: space-xl
- [x] 아코디언 header grid: 1fr auto auto (160px 금지)
- [x] 이미지 경로: https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/
- [x] brand-purple: #725bea
- [x] brand gradient: linear-gradient(130deg, #673AFF 0%, #D932FF 50%, #FF266A 100%)
- [x] cert/partner는 DS 공식 컴포넌트만 (커스텀 마키 금지)
- [x] ds-section--light 3개 이하

---

## 배경 흐름 계획

| 순서 | 섹션 | 배경 |
|------|------|------|
| 1 | Hero (text-only) | white |
| 2 | KPI Band | ds-bg--grad-deep (컴포넌트 자체 적용) |
| 3 | Partner Grid | white (섹션은 white, 마키 내부 로고만) |
| 4 | Evidence Accordion | surface-light |
| 5 | Technical Artifacts (Step Tabs) | white |
| 6 | SaaS Diff Note (Banner) | ds-bg--wave-teal (banner-full 컴포넌트) |
| 7 | Business Impact | surface-light |
| 8 | FAQ | white |
| 9 | CTA Band | ds-bg--grad-navy (전폭, container 밖) |

ds-section--light 사용: 2개 (Evidence, Business Impact) -- 규칙 준수
배경 이미지 중복 없음: grad-deep, wave-teal, grad-navy 각각 1회

---

## 섹션별 설계

---

### 섹션 1: Hero
- 패턴: [A] ds-hero--text-only
- 헤더 eyebrow: 없음 (eyebrow 금지 규칙)
- 헤더 타이틀 (h1): "Proof"
- 타이틀 강조 키워드: 없음 (단일 단어 Hero 타이틀이므로 강조 불필요)
- 헤더 description: "PoC runs in controlled conditions. Production data changes. Pipelines update. Environments shift. Here's the evidence that AI execution doesn't have to break."
- 헤더 정렬: center
- 배경: white (Hero text-only는 배경 이미지 금지)
- 배경 bg-image 적용 위치: 없음
- GEO definition box: ds-banner 컴포넌트로 변환
  - 텍스트: "True AI-ready data means it is usable, privacy-safe, and stable for production execution."
  - 키워드 usable, privacy-safe, stable for production execution에 ds-text--brand 적용
  - 상하 border만 (좌측 굵은 border 없음)
  - 중앙 정렬
- 버튼:
  - Primary: "Request Walkthrough" (href: contact@cubig.ai mailto)
  - Secondary: "Try SynTitan" (href: https://syntitan.ai, ds-btn--secondary 버튼형 -- 외부 서비스 링크)
- 사용 컴포넌트: ds-hero--text-only, ds-banner
- 반응형 설계:
  - mobile (375px): padding-top 100px, h1 40px, description 100%, 버튼 세로 스택
  - tablet (768px): h1 48px, description max-width 720px, margin 0 auto
  - sm-desktop (1024px): h1 56px, description max-width 720px
  - desktop (1440px): h1 68px, description max-width 860px
- 비고: Hero 원문의 industry 태그 목록은 섹션 3(Partner Grid)로 이동. KPI 3개는 섹션 2(KPI Band)로 분리. text-wrap: balance(제목), pretty(본문).

---

### 섹션 2: KPI Band
- 패턴: [F] ds-kpi-band
- 헤더: 없음 (KPI Band는 독립 컴포넌트, 섹션 헤더 없이 Hero 바로 아래 배치)
- 배경: ds-bg--grad-deep (컴포넌트 자체에 적용)
- 배경 bg-image 적용 위치: ds-kpi-band 컴포넌트 자체
- KPI 오버레이: rgba(0,0,0,0.35)
- 텍스트 색상: white (어두운 배경)
- 항목 (3개):
  1. 숫자: "95%" / 라벨: "reduction in root cause identification time (21 days to under 4 hours)"
  2. 숫자: "+30pp" / 라벨: "F1-score improvement (58.55% to 88.55%) via DTS synthetic data augmentation"
  3. 숫자: "-90%" / 라벨: "time-to-deploy: 4 weeks to 1 day on AI model production cycle"
- 사용 컴포넌트: ds-kpi-band
- 그리드: 3열 (KPI band 내부 기본 그리드)
- 반응형 설계:
  - mobile (375px): 1열 스택
  - tablet (768px): 2열
  - sm-desktop (1024px): 3열
  - desktop (1440px): 3열
- 비고: KPI band는 섹션 내부가 아닌 독립 배치. container 내부에 위치하되 전폭 느낌. KPI 숫자는 DM Sans (Oxanium 금지).

---

### 섹션 3: Partner Grid (Deployed Across Industries)
- 패턴: [I] ds-partner-grid
- 섹션 헤더:
  - ds-section-header--underline
  - eyebrow: 없음 (eyebrow 금지)
  - title: "Deployed Across Regulated Industries"
  - 타이틀 강조 키워드: "Regulated Industries" -- ds-text--brand 적용
  - description: "15+ enterprise clients across finance, telecom, healthcare, defense, and global sectors."
  - 정렬: center
  - description max-width: 100% -> 720px -> 860px (반응형), margin: 0 auto
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 파트너 목록: DS 공식 11개 로고 (A타입 목록 무시)
  1. partner-gartner.png / Gartner
  2. partner-navercloud.avif / Naver Cloud
  3. partner-sktelecom.avif / SK Telecom
  4. partner-kyobo.avif / Kyobo
  5. partner-korea army.avif / ROK Army
  6. partner-korea-airforce.avif / ROK Air Force
  7. partner-eumc.avif / EUMC
  8. partner-deutsche-telekom.avif / Deutsche Telekom
  9. partner-claroty.png / Claroty
  10. partner-korea-heritage-service.jpg / Korea Heritage Service
  11. partner-ministry-of-data-and-statistics.png / Ministry of Data and Statistics
- 이미지 경로 접두사: https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images/
- 사용 컴포넌트: ds-partner-grid (마키 애니메이션, DS 공식 컴포넌트만)
- 반응형 설계:
  - mobile (375px): 로고 100px, gap 줄임, 빠른 애니메이션 (20s)
  - tablet (768px): 로고 120px
  - desktop (1440px): 로고 120px, gap space-3xl, 30s 애니메이션
- 비고: JS로 track 내부 복제(cloneNode)하여 seamless loop 구현. 커스텀 마키 금지.

---

### 섹션 4: Evidence (Operational Case Records)
- 패턴: [S] ds-ac-card 아코디언 리스트
- 섹션 헤더:
  - ds-section-header--underline
  - eyebrow: 없음 (eyebrow 금지)
  - title: "Operational Case Records"
  - 타이틀 강조 키워드: "Case Records" -- ds-text--brand 적용
  - description: "Each record follows the same format: Before, After, What Changed, Reproduce."
  - 정렬: center
  - description max-width: 100% -> 720px -> 860px (반응형), margin: 0 auto
- 배경: surface-light (ds-section--light)
- 배경 bg-image 적용 위치: 없음
- 아코디언 header grid: 1fr auto auto (160px 금지)
- 아코디언 카드 6개:

#### Card 1: Financial Services -- Schema Drift Detection
- industry-dot 색상: var(--ds-color-warn)
- industry: "FINANCIAL SERVICES"
- title: "Model retraining pipeline -- schema drift detection"
- meta tags: ds-card__badge--brand "Execution Stability", ds-card__badge--gray "Fraud Detection"
- body (펼침 시):
  - KPI 4개 (flex row):
    - "3 wk" / Root cause time (before) -- warn 색상
    - "< 1 run" / Detection time (after) -- success 색상
    - "2" / Feature columns removed -- brand-purple 색상
    - "1" / Schema type coercion -- brand-purple 색상
  - 4칸 그리드 (Before / After / What Changed / Reproduce):
    - Before: "Schema change in upstream data caused silent model degradation. Root cause took 21 days to identify -- by which time downstream decisions had been affected."
    - After: "SynTitan Release State detected the schema diff at ingestion. Issue flagged before the next training run triggered. No degraded model reached production."
    - What Changed: "2 feature columns removed from upstream feed. 1 schema type coercion introduced silently. Release State diff surfaced both in the change log."
    - Reproduce: "Prior run re-executed under locked Release State conditions. Model behavior verified against known-good baseline. Root cause identification time: 21 days to under 4 hours (95% reduction). Incident response completed before next production run."
  - Artifacts: State Card, Change Log, Re-run Record, Schema Diff

#### Card 2: Telco -- Pipeline Version Rollback
- industry-dot 색상: var(--ds-color-warn)
- industry: "TELCO"
- title: "Real-time inference service -- pipeline version rollback"
- meta tags: ds-card__badge--brand "Execution Stability", ds-card__badge--gray "Customer Churn Prediction"
- body:
  - KPI 3개: "Unknown" (warn), "< 2 hr" (success), "100%" (brand-purple)
  - Labels: "Drift source (before)", "Rollback time (after)", "Score distribution match"
  - 4칸: Before/After/What Changed/Reproduce (원문 그대로)
    - Before: "Preprocessing pipeline update produced inconsistent scores in production. No way to trace which version caused the score drift. Engineers spent days reconstructing execution history manually."
    - After: "Run Binding linked every score to its exact Release State. Rollback to stable state completed in under 2 hours. No manual reconstruction required."
    - What Changed: "Normalization logic updated across the preprocessing step. Feature scaling range shifted by 12%. Release State diff identified both changes with exact pipeline version reference."
    - Reproduce: "Stable release re-run confirmed. Score distribution matched baseline output. Run Binding record archived for future regression checks."
  - Artifacts: State Card, Change Log, Re-run Record

#### Card 3: Manufacturing -- Rare Defect Class Coverage
- industry-dot 색상: var(--ds-color-success)
- industry: "MANUFACTURING"
- title: "Quality inspection model -- rare defect class coverage"
- meta tags: ds-card__badge--teal "Data Usability", ds-card__badge--gray "Imbalanced Dataset", ds-card__badge--gray "AI-Ready Data"
- body:
  - KPI 3개: "3" (warn) "Underrepresented classes", "Closed" (success) "Coverage gap (after DTS)", "Recall +" (brand-purple) "Defect detection"
  - 4칸: Before/After/What Changed/Reproduce (원문 그대로)
    - Before: "Rare defect class underrepresented in training data. Model missed edge cases in production -- the gap was invisible until incidents occurred on the line."
    - After: "DTS generated privacy-safe synthetic samples for the 3 underrepresented classes using differential privacy. Coverage gap closed before next training cycle."
    - What Changed: "3 underrepresented defect classes augmented with DP-safe synthetic data. Class distribution rebalanced. Augmented dataset versioned within SynTitan Release State."
    - Reproduce: "Augmented dataset versioned and bound to Release State. Same training run reproducible on demand. Defect detection recall improved and verified against holdout."
  - Artifacts: State Card, Dataset Version, Re-run Record, Class Dist. Log

#### Card 4: Healthcare -- Restricted Patient Data Replacement
- industry-dot 색상: var(--ds-color-success)
- industry: "HEALTHCARE"
- title: "Clinical AI validation -- restricted patient data replacement"
- meta tags: ds-card__badge--teal "Data Usability"
- body:
  - KPI 3개: "Blocked" (warn) "Validation status (before)", "Unblocked" (success) "Validation status (after)", "DP" (brand-purple) "Differential privacy applied"
  - 4칸: Before/After/What Changed/Reproduce (원문 그대로)
    - Before: "Real patient records required for model validation could not be accessed due to HIPAA compliance constraints. Validation pipeline stalled. No way to test model behavior on realistic distributions."
    - After: "DTS generated differential-privacy synthetic patient records that matched real distribution characteristics without containing any real identifiable information. Validation unblocked."
    - What Changed: "Non-accessible real records replaced with DP-safe synthetic equivalents. Data distribution preserved. Compliance review passed. Validation pipeline resumed without modification."
    - Reproduce: "Synthetic dataset versioned in SynTitan. Validation run reproducible with same synthetic distribution on demand. Audit trail maintained throughout."
  - Artifacts: State Card, DP Audit Log, Dataset Version

#### Card 5: Insurance -- PII Leakage Prevention
- industry-dot 색상: var(--ds-color-brand-purple)
- industry: "INSURANCE"
- title: "LLM-assisted claims processing -- PII leakage prevention"
- meta tags: ds-card__badge--brand "Secure LLM Usage", ds-card__badge--gray "Enterprise LLM Search", ds-card__badge--gray "PII Protection"
- body:
  - KPI 3개: "Exposed" (warn) "PII in LLM prompts (before)", "0" (success) "PII fields in prompts (after)", "Preserved" (brand-purple) "Output usability"
  - 4칸: Before/After/What Changed/Reproduce (원문 그대로)
    - Before: "Claims documents containing policyholder names, ID numbers, and medical details were passed directly to an external LLM API. Compliance team blocked the workflow pending a PII solution."
    - After: "LLM Capsule intercepted prompts, detected and anonymized all PII fields before submission to the LLM. Outputs returned with anonymized tokens re-mapped for downstream use."
    - What Changed: "LLM Capsule layer inserted into the workflow. PII detection covered names, IDs, dates, and medical field patterns. Zero identified PII fields reached the external API."
    - Reproduce: "Each anonymization run logged and bound to SynTitan Release State. Workflow reproducible with same anonymization logic for audit and regression verification."
  - Artifacts: State Card, PII Detect Log, Anonymization Map, Re-run Record

#### Card 6: Retail / E-commerce -- Runtime Environment Drift
- industry-dot 색상: var(--ds-color-warn)
- industry: "RETAIL / E-COMMERCE"
- title: "Recommendation engine -- runtime environment drift"
- meta tags: ds-card__badge--brand "Execution Stability", ds-card__badge--gray "Personalization Systems"
- body:
  - KPI 3개: "Days" (warn) "Debugging time (before)", "< 3 hr" (success) "Root cause identified (after)", "Exact" (brand-purple) "Environment reproduced"
  - 4칸: Before/After/What Changed/Reproduce (원문 그대로)
    - Before: "Recommendation scores degraded after a routine infrastructure upgrade. Engineers could not reproduce the pre-upgrade behavior -- all runtime parameters had changed and were not recorded."
    - After: "SynTitan's Run Binding captured every runtime parameter at execution time. Pre-upgrade Release State re-run in under 3 hours. Exact recommendation distribution confirmed and compared."
    - What Changed: "Library version bump changed default float precision handling. Embedding normalization behavior altered. Release State diff identified the exact library version delta."
    - Reproduce: "Pre-upgrade run reproduced exactly. Score distribution delta measured and confirmed. Infrastructure team patched and validated against reproduced baseline."
  - Artifacts: State Card, Runtime Snapshot, Change Log, Re-run Record

- 아코디언 body 내부 구조 (모든 카드 공통):
  - KPI 메트릭 행: flex-wrap, gap 8px
  - 4칸 그리드: 4열 (desktop), 2열 (tablet), 1열 (mobile)
  - 각 칸 라벨 색상: Before=error, After=success, What Changed=brand-purple, Reproduce=warn
  - Artifacts: flex-wrap 태그 pill (ds-card__badge--gray)

- Overlap prevention note (카드 아래):
  - ds-banner 컴포넌트로 변환
  - 텍스트: "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine."
  - 제품명 SynTitan, DTS에 ds-text--product 적용
  - 중앙 정렬, 상하 border

- 사용 컴포넌트: ds-ac-card, ds-card__badge--*, ds-banner
- 그리드: ds-grid--1 (카드 리스트는 세로 스택, gap space-sm)
- 반응형 설계:
  - mobile (375px): 아코디언 header grid 1fr auto (meta 숨김), body grid 1열
  - tablet (768px): header 1fr auto auto, body grid 2열
  - sm-desktop (1024px): header 1fr auto auto, body grid 4열
  - desktop (1440px): 동일
- 비고: 첫 번째 카드만 기본 펼침 (ds-ac--open). 아코디언 toggle 28x28px, 6px radius. SynTitan, DTS, LLM Capsule 제품명에 ds-text--product 적용.

---

### 섹션 5: Technical Artifacts (What Traceability Looks Like)
- 패턴: [U] ds-step-tabs
- 섹션 헤더:
  - ds-section-header--underline
  - eyebrow: 없음 (eyebrow 금지)
  - title: "What Traceability Looks Like in Practice"
  - 타이틀 강조 키워드: "Traceability" -- ds-text--brand 적용
  - description: "Every SynTitan run produces structured artifacts that make execution conditions inspectable, comparable, and reproducible. These are the operational records teams use for incident response and regression verification."
  - 정렬: center
  - description max-width: 100% -> 720px -> 860px (반응형), margin: 0 auto
- 배경: white
- 배경 bg-image 적용 위치: 없음
- Step Tabs 구조 (4 탭):
  - Tab 1: "Release State Diff"
    - 좌측 content:
      - title: "Release State Comparison"
      - description: "When output behavior changes between runs, SynTitan diffs the two Release States to surface exactly which execution condition changed."
      - 코드블록 (다크 테마, bg: neutral-900, border: none):
        ```
        // Release State diff: RS-0041 -> RS-0042
        - schema.feature_col_7: dtype=int64
        + schema.feature_col_7: dtype=object
        // 1 schema fingerprint change detected
        // preprocessing.normalization_v: 1.2.1 -> 1.3.0
        ! Run Binding: RS-0042 flagged before production
        ```
      - Root cause: "Feature column type coerced from integer to string upstream. Preprocessing normalization version updated in the same window."
      - Resolution: "Restored prior schema type constraint. Pinned preprocessing version in Release State."
    - 우측: 스크린샷 placeholder (800x500 회색 박스, "Release State Diff View" 텍스트)
  - Tab 2: "Schema Fingerprint"
    - 좌측:
      - title: "Schema Fingerprint Change"
      - description: "SynTitan captures a schema fingerprint at each ingestion. When the fingerprint changes, it is logged in the Release State and surfaced in the Change Log before the run proceeds."
      - 코드블록:
        ```
        // Schema fingerprint audit log
        run_id: r-20240318-084501
        release_state: RS-0041
        schema_fingerprint: CHANGED
        prev: sha256:a4f2b...3c91
        curr: sha256:d9e7a...11fa
        // columns_added: 0
        // columns_removed: 2 [user_segment_v2, tenure_bucket]
        // type_changes: 1
        ```
      - Root cause: "Upstream data feed removed two feature columns without downstream notification."
      - Resolution: "Run halted before training. Schema contract enforced. Upstream notified within the same hour."
    - 우측: 스크린샷 placeholder
  - Tab 3: "Preprocessing Diff"
    - 좌측:
      - title: "Preprocessing Logic Change"
      - description: "Preprocessing steps are versioned inside each Release State. When logic changes -- normalization, imputation, encoding -- the diff shows exactly which step changed and what the expected effect is."
      - 코드블록:
        ```
        // Preprocessing diff: RS-0042 -> RS-0043
        - step: normalize_amount
          method: min-max  range: [0, 1000]
        + step: normalize_amount
          method: z-score  params: mu=0, sigma=1
        ! normalization method changed
        // all downstream feature scores affected
        ```
      - Root cause: "Normalization method switched from min-max to z-score -- changing the scale of all downstream feature inputs."
      - Resolution: "Reverted to prior Release State for immediate rollback. New method evaluated in staging before reintroduction."
    - 우측: 스크린샷 placeholder
  - Tab 4: "Runtime Dependency"
    - 좌측:
      - title: "Runtime Dependency Change"
      - description: "Runtime environment versions -- libraries, Python runtime, inference server -- are captured in each Release State. Unexpected version changes are surfaced as execution state drift events."
      - 코드블록:
        ```
        // Runtime dependency audit: RS-0043
        - sklearn: 1.2.2
        + sklearn: 1.4.0
        - pandas: 1.5.3
        + pandas: 2.1.0
        ! 2 runtime dependencies changed
        ! imputation behavior may differ
        ```
      - Root cause: "Container image updated in CI/CD pipeline without version-pinning the AI dependencies."
      - Resolution: "Dependency versions pinned in Release State manifest. Container image rebuild triggered with verified versions."
    - 우측: 스크린샷 placeholder

- 코드블록 스타일 규칙:
  - 배경: var(--ds-color-neutral-900) (#0f0f0f)
  - border: none
  - border-radius: var(--ds-radius-sm)
  - padding: var(--ds-space-lg)
  - font-family: var(--ds-font-code)
  - font-size: var(--ds-text-sm)
  - line-height: 1.9
  - 텍스트 기본 색상: var(--ds-color-text-inverse) (white)
  - 줄 색상: "-" 라인 = var(--ds-color-error-light), "+" 라인 = var(--ds-color-success-light), "!" 라인 = var(--ds-color-warn-light), "//" 라인 = var(--ds-color-text-tertiary)
  - 카드 내 코드블록 앞 divider 금지
- Artifact note (탭 아래):
  - ds-banner 컴포넌트
  - "These artifact types are produced by SynTitan during every AI run. State Cards, Change Logs, Schema Diffs, Preprocessing Diffs, and Re-run Records are all standard outputs -- not manual reports."
  - 링크: "See execution state comparison" -> /syntitan (ds-btn--secondary 스타일의 인라인 링크가 아닌, banner 내 줄바꿈 a 태그 -- display: block, margin-top: space-sm)
- 사용 컴포넌트: ds-step-tabs, ds-banner
- 반응형 설계:
  - mobile (375px): 탭 nav 가로 스크롤, 패널 1열 (텍스트 위 + 스크린샷 아래), 액션 버튼 세로 스택
  - tablet (768px): 탭 nav 가로 정렬, 패널 1열
  - sm-desktop (1024px): 패널 2열 (5:7 비율)
  - desktop (1440px): 패널 2열 (5:7), gap space-4xl
- 비고: JS 필수 -- data-step-tabs, data-tab, data-panel 속성으로 탭 전환. 첫 번째 탭 기본 활성. 탭 pill 형태, active=gradient 배경.

---

### 섹션 6: SaaS Diff Note (Banner)
- 패턴: [Q] ds-banner--full
- 섹션 헤더: 없음 (배너 단독)
- 배경: ds-bg--wave-teal (banner-full 컴포넌트에 적용)
- 배경 bg-image 적용 위치: ds-banner--full 컴포넌트
- padding: var(--ds-space-xl)
- 오버레이: rgba(255,255,255,0.72) (밝은 배경 + 검정 텍스트)
- 텍스트 색상: var(--ds-color-text-primary) (검정)
- 원문: "Databricks versioned the data. MLflow tracked the model. The AI still broke in production. Because neither tool versions the data state the model was bound to at run time. SynTitan does. That's the difference these cases reflect."
- 강조: "Because neither tool versions the data state the model was bound to at run time." -- strong 태그
- 제품명 SynTitan에 ds-text--product 적용
- 중앙 정렬, text-align: center
- 사용 컴포넌트: ds-banner--full
- 반응형 설계:
  - mobile (375px): padding space-lg, font-size var(--ds-text-base)
  - tablet~desktop: padding space-xl, font-size var(--ds-text-lg)
- 비고: banner-full padding space-xl 규칙 적용.

---

### 섹션 7: Business Impact Summary
- 패턴: [G] ds-card-grid--3col
- 섹션 헤더:
  - ds-section-header--underline
  - eyebrow: 없음 (eyebrow 금지)
  - title: "What Changes When AI Execution Is Reproducible"
  - 타이틀 강조 키워드: "Reproducible" -- ds-text--brand 적용
  - description: "These are the business outcomes the operational evidence demonstrates -- not theoretical capabilities, but changes documented in production deployments."
  - 정렬: center
  - description max-width: 100% -> 720px -> 860px (반응형), margin: 0 auto
- 배경: surface-light (ds-section--light)
- 배경 bg-image 적용 위치: 없음
- 카드 6개 (3col x 2row):
  1. badge: ds-card__badge--teal "Incident Recovery"
     - KPI: "21 days to <4h"
     - 설명: "Root cause identification time. Schema change detected at ingestion via Release State. Incident resolved before next training run."
  2. badge: ds-card__badge--teal "Data Usability"
     - KPI: "+30pp F1"
     - 설명: "Model accuracy improvement after DTS fixed class imbalance. Rare defect class augmented with privacy-safe synthetic data. Deploy time cut from 4 weeks to 1 day."
  3. badge: ds-card__badge--teal "LLM Adoption"
     - KPI: "98.1%"
     - 설명: "PII detection accuracy in enterprise prompts. Compliance-blocked LLM projects unblocked without sacrificing data usability or audit requirements."
  4. badge: ds-card__badge--teal "Rollback Speed"
     - KPI: "<2h rollback"
     - 설명: "Run Binding enabled stable-state re-execution after preprocessing drift caused inference inconsistency. Prior Release State re-run confirmed. Score distribution matched baseline."
  5. badge: ds-card__badge--teal "Compliance-Safe AI Data"
     - KPI: "277K records"
     - 설명: "DP-safe synthetic records generated to replace retention-deleted data. F1 churn model reached 0.92. Zero real customer data accessed or exported. Full regulatory compliance."
  6. 특수 카드 (Common Thread):
     - 배경: var(--ds-gradient-inner-purple) (구분용)
     - badge: ds-card__badge--brand "Common Thread"
     - 텍스트: "Each case reduced deployment risk, incident investigation time, or AI adoption blockers -- without replacing existing data infrastructure."
     - 강조: "deployment risk", "incident investigation time", "AI adoption blockers" -- strong
     - 링크 버튼: "Talk to our engineers" -> contact@cubig.ai (ds-btn--secondary)

- 카드 내부 구조:
  - badge (상단, 텍스트만큼 감싸기)
  - KPI 숫자: font-size var(--ds-text-3xl), font-weight var(--ds-weight-bold), color var(--ds-color-brand-purple) (#725bea)
  - 설명 텍스트: color var(--ds-color-text-secondary), font-size var(--ds-text-sm), line-height var(--ds-leading-relaxed)
- 사용 컴포넌트: ds-card-grid--3col, ds-card
- 반응형 설계:
  - mobile (375px): 1열
  - tablet (768px): 2열
  - sm-desktop (1024px): 3열
  - desktop (1440px): 3열
- 비고: 카드 KPI 숫자에 brand-purple 색상. DM Sans 사용 (Oxanium 금지). 제품명(DTS, SynTitan)에 ds-text--product.

---

### 섹션 8: FAQ
- 패턴: [P] ds-ac-card 아코디언
- 섹션 헤더:
  - ds-section-header--underline
  - eyebrow: 없음 (eyebrow 금지)
  - title: "Common Questions"
  - 타이틀 강조 키워드: "Questions" -- ds-text--brand 적용
  - description: 없음
  - 정렬: center
- 배경: white
- 배경 bg-image 적용 위치: 없음
- FAQ 항목 5개 (ds-ac-card 아코디언):
  1. Q: "What does 'reproducible AI execution' mean in production?"
     A: "Reproducible AI execution means that any past AI run can be re-executed under the exact same data, environment, and pipeline conditions -- returning the same result. SynTitan achieves this through Release State and Run Binding, which lock execution conditions at every run. When something breaks in production, you don't debug blind -- you diff the states and reproduce the last known-good run."
  2. Q: "What is a Release State in SynTitan?"
     A: "A Release State is a versioned snapshot of all execution conditions at the time of an AI run -- including data schema, pipeline configuration, feature set, and runtime parameters. It enables diff between states to trace what changed and re-run the same conditions for incident response and regression verification."
  3. Q: "How does DTS solve the unusable data problem?"
     A: "DTS generates privacy-safe synthetic data using differential privacy to fill coverage gaps, fix class imbalance, and replace non-accessible data. It operates as a standalone engine or integrates with SynTitan for end-to-end execution stability."
  4. Q: "How does LLM Capsule protect sensitive data during LLM usage?"
     A: "LLM Capsule detects sensitive fields including PII in prompts and outputs, anonymizes or shields them before LLM interaction, and preserves output usability for downstream workflows -- all within SynTitan execution workflows."
  5. Q: "What is the difference between SynTitan and DTS?"
     A: "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine."

- FAQ 아코디언 구조:
  - ds-ac-card 사용 (toggle 28x28px, 6px radius)
  - header grid: 1fr auto (질문 텍스트 + 토글, FAQ에서는 meta 영역 없음)
  - 첫 번째 항목 기본 펼침 (ds-ac--open)
  - 제품명(SynTitan, DTS, LLM Capsule)에 ds-text--product 적용
- 사용 컴포넌트: ds-ac-card
- 그리드: ds-grid--1, gap var(--ds-space-xs)
- 반응형 설계:
  - mobile (375px): Q 텍스트 font-size var(--ds-text-base)
  - tablet (768px): Q 텍스트 font-size var(--ds-text-lg)
  - desktop (1440px): Q 텍스트 font-size var(--ds-text-lg)
- 비고: FAQ에서는 industry-dot와 meta badge 영역 제거, 순수 Q/A 형태. text-wrap: pretty 본문에 적용.

---

### 섹션 9: CTA Band
- 패턴: [K] ds-cta-band
- eyebrow: 없음 (eyebrow 금지)
- 타이틀: "Make Your AI Runs Reproducible."
- 타이틀 강조 키워드: "Reproducible" -- 흰색 텍스트 위에서는 brand 강조 대신 기본 white 유지 (어두운 배경에서 가독성 우선)
- description: "Every production AI failure has a root cause. These cases show how to find it fast, fix it correctly, and prevent recurrence. The same infrastructure is available now."
- 배경: ds-bg--grad-navy (전폭, container 밖)
- 배경 bg-image 적용 위치: ds-cta-band 섹션 전체
- 텍스트 색상: white (어두운 배경)
- 버튼:
  - Primary: "Start Evaluation" (href: https://syntitan.ai)
  - Secondary (흰 테두리): "Run a Technical Demo" (href: contact@cubig.ai mailto)
  - Secondary (흰 테두리): "Explore: Why AI Fails" (href: /learn/why-ai-fails-after-deployment)
- 서브 텍스트: "30-min architecture review. Engineers-first. No sales pitch." -- color: rgba(255,255,255,0.7)
- 사용 컴포넌트: ds-cta-band
- 반응형 설계:
  - mobile (375px): 타이틀 32px, 버튼 세로 스택, 전폭
  - tablet (768px): 타이틀 48px
  - sm-desktop (1024px): 타이틀 56px
  - desktop (1440px): 타이틀 64px, 버튼 가로 정렬
- 비고: 전폭 배치 (container 밖). 외부 서비스 링크(syntitan.ai)는 CTA 메인 액션이므로 Primary 버튼 유지.

---

## 전역 규칙 요약

### ds-section--light 사용 현황 (3개 이하 확인)
1. 섹션 4: Evidence Accordion -- surface-light
2. 섹션 7: Business Impact Summary -- surface-light
- 합계: 2개 (규칙 준수)

### 배경 이미지 중복 확인
- ds-bg--grad-deep: 섹션 2 (KPI Band) -- 1회
- ds-bg--wave-teal: 섹션 6 (Banner) -- 1회
- ds-bg--grad-navy: 섹션 9 (CTA Band) -- 1회
- 중복 없음 (규칙 준수)

### 텍스트 명도 규칙
- 최소 명도: text-tertiary (#9c9c9c)
- text-muted 사용 금지
- 배경 이미지 위 텍스트: black 또는 white만 사용

### 코드블록 규칙
- 다크 테마: bg var(--ds-color-neutral-900), border none
- 코드 내 색상: 삭제(-)=var(--ds-color-error-light), 추가(+)=var(--ds-color-success-light), 경고(!)=var(--ds-color-warn-light), 주석(//)=var(--ds-color-text-tertiary)
- 카드 내 코드블록 앞 divider 금지

### 아코디언 규칙
- header grid: 1fr auto auto (160px 고정폭 금지)
- toggle: 28x28px, 6px radius
- 닫힘: + (십자), 열림: - (가로선)

### 이미지 경로 규칙
- 모든 이미지 접두사: https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/

### Brand 규칙
- brand-purple: #725bea
- brand gradient: linear-gradient(130deg, #673AFF 0%, #D932FF 50%, #FF266A 100%)
- Oxanium: 제품명 전용 (SynTitan, DTS, LLM Capsule) -- ds-text--product
- 일반 텍스트/숫자: DM Sans -- var(--ds-font-base)

### Description 반응형
- mobile: max-width 100%
- tablet (768px): max-width 720px, margin: 0 auto
- desktop (1440px): max-width 860px, margin: 0 auto

### text-wrap 규칙
- 제목 (h1, h2, section-header title): text-wrap: balance
- 본문 (p, description, FAQ answer): text-wrap: pretty
