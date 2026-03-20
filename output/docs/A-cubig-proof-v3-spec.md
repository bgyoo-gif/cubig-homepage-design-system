# Design Specification: A-cubig-proof-v3.html -> B-type

> Generated: 2026-03-16 (v2 -- revised)
> Source: input/A-cubig-proof-v3.html
> Output: output/A-cubig-proof-v3-b-type.html
> Design System: .claude/skills/design-system.md v5.0

---

## Document Analysis

### Page Purpose
Proof 페이지 -- CUBIG의 AI 실행 재현성(Reproducible AI Execution)에 대한 운영 증거를 보여주는 페이지. 산업별 케이스 레코드(Before/After/What Changed/Reproduce), 기술 아티팩트 예시, 비즈니스 임팩트 요약, FAQ를 포함.

### Tone & Manner
증거 기반 설득형. 데이터와 사례로 신뢰를 구축하는 톤. 기술적이면서도 비즈니스 의사결정자에게 어필.

### Content Types Identified
- Hero: 텍스트 + 정의 박스 + 산업 태그 + KPI 수치
- 아코디언 리스트: 6개 케이스 레코드 (Before/After/What Changed/Reproduce 구조)
- 기술 아티팩트: 4개 코드 블록 카드 (2x2 그리드)
- 비즈니스 임팩트: 6개 KPI 카드 (3x2 그리드)
- FAQ: 5개 질문/답변
- CTA: 아키텍처 워크스루 + 최종 CTA

### Key Rules Applied
- Hero Text-only: 배경 이미지 사용 금지
- Brand 폰트(Oxanium): SynTitan, DTS, LLM Capsule 등 제품명 키워드에만 ds-text--product
- Card Grid: ds-card-grid + ds-card-grid--Ncol 조합
- KPI Band: 어두운 배경 기본, 흰색 폰트
- Table: 헤더/본문 텍스트 검정색
- eyebrow 텍스트에 "//" 접두사 사용 금지

---

## Section Background Sequence

| # | Section | Background | Class |
|---|---------|-----------|-------|
| 1 | Hero | white (이미지 금지) | `ds-section ds-section--hero` |
| 2 | Evidence Records | white | `ds-section` |
| 3 | Technical Artifacts | surface-light | `ds-section ds-section--light` |
| 4 | SaaS Diff Banner | dark | `ds-banner--full` (인라인 배너) |
| 5 | Architecture CTA | bg-image: bg-paint-blue-iridescent.png | `ds-section ds-section--bg-img` |
| 6 | Business Impact | white | `ds-section` |
| 7 | FAQ | surface-light | `ds-section ds-section--light` |
| 8 | Final CTA | bg-image: bg-wave-teal-blue.png | `ds-cta-band ds-bg--wave-teal` |

검증: 동일 배경 3개 이상 연속 없음. Section 1-2 white 연속이나 Hero와 본문은 성격이 달라 허용, KPI Band가 시각적 구분 역할.

---

## Section-by-Section Design

---

### Section 1: Hero

- **Pattern**: [A] Hero -- ds-hero--text-only
- **Background**: white (배경 이미지 사용 금지)
- **Section class**: `ds-section ds-section--hero`
- **ID**: `section-hero`

#### Hero Content
- eyebrow: `Operational Evidence`
- title: `Proof`
- title 강조 키워드: 없음 (단일 단어)
- description: `PoC runs in controlled conditions. Production data changes. Pipelines update. Environments shift. Here's the evidence that AI execution doesn't have to break.`
- 정렬: left

#### Definition Banner (Hero 내부)
- **Pattern**: [Q] ds-banner--brand
- label: `Definition`
- body: `True AI-ready data means it is <span class="ds-text--brand">usable</span>, <span class="ds-text--brand">privacy-safe</span>, and <span class="ds-text--brand">stable for production execution</span>.`

#### Industry Tags (Hero 내부)
- 레이블 텍스트: `Deployed across regulated industries -- 15+ enterprise clients`
- ds-badge ds-badge--neutral 5개:
  1. `Finance (Woori Bank, KYOBO, Hana Bank, Samsung Securities)`
  2. `Telecom (SK telecom)`
  3. `Healthcare (EUMC)`
  4. `Defense & Public`
  5. `Global (CLAROTY, Aramco)`

#### KPI Band (Hero 직후 또는 내부 하단)
- **Pattern**: [F] ds-kpi-band
- 배경: ds-bg--lavender (컴포넌트 자체에 적용, 섹션 아님)
- grid: repeat(3, 1fr)
- 숫자 색상: white (어두운 배경 기본)
- 3개 항목:
  1. `95%` / `reduction in root cause identification time (21 days -> under 4 hours)`
  2. `+30pp` / `F1-score improvement (58.55% -> 88.55%) via DTS synthetic data augmentation`
  3. `-90%` / `time-to-deploy: 4 weeks -> 1 day on AI model production cycle`

---

### Section 2: Evidence Records (Accordion)

- **Pattern**: [S] Accordion List -- ds-ac-card
- **Background**: white
- **Section class**: `ds-section`
- **ID**: `section-evidence`

#### Header
- **Pattern**: [D] ds-section-header--underline
- eyebrow: `Evidence`
- title: `Operational <span class="ds-text--brand">case records</span>`
- title 강조 키워드: `case records`
- description: `Each record follows the same format: Before -> After -> What Changed -> Reproduce.`
- 정렬: center

#### Filter Bar
- 섹션 헤더 아래에 ds-filter-bar 배치
- 필터 버튼 4개 (ds-filter-btn):
  1. `All Evidence` (dot: brand-primary)
  2. `Execution Stability` (dot: amber)
  3. `Data Usability` (dot: success green)
  4. `Secure LLM Usage` (dot: purple)
- "All Evidence" 기본 활성 (ds-filter--active)
- JavaScript: data-tag 기반 필터링 + 카운트 업데이트

#### Accordion Cards (ds-ac-list > ds-ac-card x6)
- 첫 번째 카드만 ds-ac--open 상태

**Card 1: Financial Services -- Execution Stability**
- data-tag: `stable`
- industry dot color: amber 계열 (`style="background-color: var(--ds-ev-stable-color)"`)
- industry: `Financial Services`
- title: `Model retraining pipeline -- schema drift detection`
- meta badge: `ds-badge ds-badge--neutral` -> `Execution Stability`
- sub badge: `ds-badge ds-badge--purple` -> `Fraud Detection`
- Expanded metrics (ds-ac-metrics > ds-ac-metric):
  - `3 wk` / `Root cause time (before)` -- ds-ac-metric__val (default)
  - `< 1 run` / `Detection time (after)` -- ds-ac-metric__val--success
  - `2` / `Feature columns removed`
  - `1` / `Schema type coercion`
- Body (Before/After/What Changed/Reproduce): 원문 텍스트 그대로 유지
- Artifacts (ds-card__tags > ds-card__tag): `State Card`, `Change Log`, `Re-run Record`, `Schema Diff`

**Card 2: Telco -- Execution Stability**
- data-tag: `stable`
- industry: `Telco` (dot: amber)
- title: `Real-time inference service -- pipeline version rollback`
- meta badge: `Execution Stability`
- sub badge: `Customer Churn Prediction`
- Metrics: `Unknown` / `< 2 hr` (success) / `100%`
- Artifacts: `State Card`, `Change Log`, `Re-run Record`

**Card 3: Manufacturing -- Data Usability**
- data-tag: `data`
- industry: `Manufacturing` (dot: success green)
- title: `Quality inspection model -- rare defect class coverage`
- meta badge: `ds-badge ds-badge--success` -> `Data Usability`
- sub badges: `Imbalanced Dataset`, `AI-Ready Data`
- Metrics: `3` / `Closed` (success) / `Recall` (up arrow)
- Artifacts: `State Card`, `Dataset Version`, `Re-run Record`, `Class Dist. Log`

**Card 4: Healthcare -- Data Usability**
- data-tag: `data`
- industry: `Healthcare` (dot: success green)
- title: `Clinical AI validation -- restricted patient data replacement`
- meta badge: `Data Usability`
- Metrics: `Blocked` / `Unblocked` (success) / `DP`
- Artifacts: `State Card`, `DP Audit Log`, `Dataset Version`

**Card 5: Insurance -- Secure LLM Usage**
- data-tag: `secure`
- industry: `Insurance` (dot: purple)
- title: `LLM-assisted claims processing -- PII leakage prevention`
- meta badge: `ds-badge ds-badge--purple` -> `Secure LLM Usage`
- sub badges: `Enterprise LLM Search`, `PII Protection`
- Metrics: `Exposed` / `0` (success) / `Preserved`
- Artifacts: `State Card`, `PII Detect Log`, `Anonymization Map`, `Re-run Record`

**Card 6: Retail / E-commerce -- Execution Stability**
- data-tag: `stable`
- industry: `Retail / E-commerce` (dot: amber)
- title: `Recommendation engine -- runtime environment drift`
- meta badge: `Execution Stability`
- sub badge: `Personalization Systems`
- Metrics: `Days` / `< 3 hr` (success) / `Exact`
- Artifacts: `State Card`, `Runtime Snapshot`, `Change Log`, `Re-run Record`

#### Overlap Note (아코디언 리스트 하단)
- **Pattern**: [Q] ds-banner
- body line 1: `<span class="ds-text--product">SynTitan</span> performs data quality refinement as part of execution stability.`
- body line 2: `<span class="ds-text--product">SynTitan</span> can use a subset of <span class="ds-text--product">DTS</span> capabilities when privacy-safe synthetic data is needed, while <span class="ds-text--product">DTS</span> is a full standalone enterprise synthetic data engine.`

---

### Section 3: Technical Artifacts

- **Pattern**: [D] Section Header + [G] ds-card-grid ds-card-grid--2col
- **Background**: surface-light
- **Section class**: `ds-section ds-section--light`
- **ID**: `section-artifacts`

#### Header
- **Pattern**: [D] ds-section-header--underline
- eyebrow: `Technical Artifacts`
- title: `What <span class="ds-text--brand">traceability</span> looks like in practice.`
- title 강조 키워드: `traceability`
- description: `Every <span class="ds-text--product">SynTitan</span> run produces structured artifacts that make execution conditions inspectable, comparable, and reproducible. These are the operational records teams use for incident response and regression verification.`
- 정렬: center

#### Cards (ds-card-grid ds-card-grid--2col)

각 카드 내부 구조:
1. ds-card__badge ds-card__badge--brand (타입 라벨)
2. ds-card__title ds-card__title--sm (타이틀)
3. ds-card__description (설명)
4. ds-code-block (코드 블록 -- 커스텀 컴포넌트)
5. 텍스트: Root cause + Resolution

**Card 1: Release State Comparison**
- badge: `Release State Diff`
- title: `Release State Comparison`
- description: `When output behavior changes between runs, SynTitan diffs the two Release States to surface exactly which execution condition changed.`
- Code block content:
  ```
  // Release State diff: RS-0041 -> RS-0042
  - schema.feature_col_7: dtype=int64          [red/remove]
  + schema.feature_col_7: dtype=object          [green/add]
  // 1 schema fingerprint change detected       [muted]
  // preprocessing.normalization_v: 1.2.1 -> 1.3.0  [muted]
  ! Run Binding: RS-0042 flagged before production   [warn]
  ```
- Root cause: Feature column type coerced from integer to string upstream. Preprocessing normalization version updated in the same window.
- Resolution: Restored prior schema type constraint. Pinned preprocessing version in Release State.

**Card 2: Schema Fingerprint Change**
- badge: `Schema Fingerprint Log`
- title: `Schema Fingerprint Change`
- description: `SynTitan captures a schema fingerprint at each ingestion. When the fingerprint changes, it is logged in the Release State and surfaced in the Change Log before the run proceeds.`
- Code block: 원문 그대로 (run_id, release_state, CHANGED, columns_removed 등)
- Root cause: Upstream data feed removed two feature columns without downstream notification.
- Resolution: Run halted before training. Schema contract enforced. Upstream notified within the same hour.

**Card 3: Preprocessing Logic Change**
- badge: `Preprocessing Diff`
- title: `Preprocessing Logic Change`
- description: 원문 그대로
- Code block: min-max -> z-score 변경 diff
- Root cause + Resolution: 원문 그대로

**Card 4: Runtime Dependency Change**
- badge: `Runtime Dependency Log`
- title: `Runtime Dependency Change`
- description: 원문 그대로
- Code block: sklearn/pandas 버전 변경
- Root cause + Resolution: 원문 그대로

#### Artifact Note (카드 그리드 하단)
- **Pattern**: [Q] ds-banner
- body: `These artifact types are produced by <span class="ds-text--product">SynTitan</span> during every AI run. State Cards, Change Logs, Schema Diffs, Preprocessing Diffs, and Re-run Records are all standard outputs -- not manual reports.`
- CTA link: `See execution state comparison ->` (href="/syntitan")

---

### Section 4: SaaS Differentiator Banner

- **Pattern**: [Q] ds-banner--full (dark)
- **Background**: dark (ds-color-surface-dark)
- 별도 섹션이 아닌 인라인 배너 (ds-container 안)
- **ID**: `section-saas-diff`

- body: `Databricks versioned the data. MLflow tracked the model. The AI still broke in production. <strong>Because neither tool versions the data state the model was bound to at run time.</strong> <span class="ds-text--product">SynTitan</span> does. That's the difference these cases reflect.`

---

### Section 5: Architecture CTA

- **Pattern**: [D] Section Header + actions (중앙 정렬)
- **Background**: bg-image -- `bg-paint-blue-iridescent.png`
- **Section class**: `ds-section ds-section--bg-img`
- bg class: `ds-bg--paint-blue`
- **ID**: `section-arch-cta`

#### Content (중앙 정렬)
- eyebrow: 없음
- title: `Want to see <span class="ds-text--brand">how it works</span> inside your stack?`
- title 강조 키워드: `how it works`
- description: `Schedule an architecture walkthrough. We'll map your current AI execution conditions against the Release State and Run Binding model -- and show you exactly where reproducibility breaks down.`
- 정렬: center

#### Actions
- `Request Walkthrough ->` -- ds-btn ds-btn--primary ds-btn--md
- `Try SynTitan ->` -- ds-btn ds-btn--secondary ds-btn--md ("SynTitan"에 ds-text--product)

---

### Section 6: Business Impact Summary

- **Pattern**: [D] Header + [G] ds-card-grid ds-card-grid--3col + ds-card--highlight
- **Background**: white
- **Section class**: `ds-section`
- **ID**: `section-business-impact`

#### Header
- **Pattern**: [D] ds-section-header--underline
- eyebrow: `Business Impact Summary`
- title: `What changes when AI execution is <span class="ds-text--brand">reproducible.</span>`
- title 강조 키워드: `reproducible.`
- description: `These are the business outcomes the operational evidence demonstrates -- not theoretical capabilities, but changes documented in production deployments.`
- 정렬: center

#### Cards (ds-card-grid ds-card-grid--3col, 6개)

각 카드: ds-card ds-card--highlight
- subtitle: 카테고리 라벨 (ds-card__subtitle 또는 ds-card__badge--teal)
- value: ds-card__value (ds-text-7xl, bold, text-primary -- 파란색 아닌 검정)
- description: ds-card__description

**Card 1**
- subtitle: `Incident Recovery`
- value: `21 days -> <4h`
- description: `Root cause identification time. Schema change detected at ingestion via Release State. Incident resolved before next training run.`

**Card 2**
- subtitle: `Data Usability Improvement`
- value: `+30pp F1`
- description: `Model accuracy improvement after <span class="ds-text--product">DTS</span> fixed class imbalance. Rare defect class augmented with privacy-safe synthetic data. Deploy time cut from 4 weeks to 1 day.`

**Card 3**
- subtitle: `LLM Adoption Unblocked`
- value: `98.1%`
- description: `PII detection accuracy in enterprise prompts. Compliance-blocked LLM projects unblocked without sacrificing data usability or audit requirements.`

**Card 4**
- subtitle: `Rollback Speed`
- value: `<2h rollback`
- description: `Run Binding enabled stable-state re-execution after preprocessing drift caused inference inconsistency. Prior Release State re-run confirmed. Score distribution matched baseline.`

**Card 5**
- subtitle: `Compliance-safe AI Data`
- value: `277K records`
- description: `DP-safe synthetic records generated to replace retention-deleted data. F1 churn model reached 0.92. Zero real customer data accessed or exported. Full regulatory compliance.`

**Card 6 (Common Thread -- brand tinted)**
- ds-card with brand-tinted background (`background: rgba(166, 23, 255, 0.04)`)
- eyebrow-style label: `Common Thread`
- body: `Each case reduced <strong>deployment risk</strong>, <strong>incident investigation time</strong>, or <strong>AI adoption blockers</strong> -- without replacing existing data infrastructure.`
- CTA: `Talk to our engineers ->` (ds-btn ds-btn--ghost)

---

### Section 7: FAQ

- **Pattern**: [P] FAQ -- ds-grid--1 + accordion cards
- **Background**: surface-light
- **Section class**: `ds-section ds-section--light`
- **ID**: `section-faq`

#### Header
- **Pattern**: [D] ds-section-header--underline
- eyebrow: `FAQ`
- title: `Common <span class="ds-text--brand">questions</span>`
- title 강조 키워드: `questions`
- description: 없음
- 정렬: center

#### FAQ Items (5개)
- ds-faq-list > ds-faq-item 아코디언 구조
- 첫 번째 항목만 ds-faq--open

1. **Q**: What does "reproducible AI execution" mean in production?
   **A**: Reproducible AI execution means that any past AI run can be re-executed under the exact same data, environment, and pipeline conditions -- returning the same result. <span class="ds-text--product">SynTitan</span> achieves this through Release State and Run Binding, which lock execution conditions at every run. When something breaks in production, you don't debug blind -- you diff the states and reproduce the last known-good run.

2. **Q**: What is a Release State in <span class="ds-text--product">SynTitan</span>?
   **A**: A Release State is a versioned snapshot of all execution conditions at the time of an AI run -- including data schema, pipeline configuration, feature set, and runtime parameters. It enables diff between states to trace what changed and re-run the same conditions for incident response and regression verification.

3. **Q**: How does <span class="ds-text--product">DTS</span> solve the unusable data problem?
   **A**: <span class="ds-text--product">DTS</span> generates privacy-safe synthetic data using differential privacy to fill coverage gaps, fix class imbalance, and replace non-accessible data. It operates as a standalone engine or integrates with <span class="ds-text--product">SynTitan</span> for end-to-end execution stability.

4. **Q**: How does <span class="ds-text--product">LLM Capsule</span> protect sensitive data during LLM usage?
   **A**: <span class="ds-text--product">LLM Capsule</span> detects sensitive fields including PII in prompts and outputs, anonymizes or shields them before LLM interaction, and preserves output usability for downstream workflows -- all within <span class="ds-text--product">SynTitan</span> execution workflows.

5. **Q**: What is the difference between <span class="ds-text--product">SynTitan</span> and <span class="ds-text--product">DTS</span>?
   **A**: <span class="ds-text--product">SynTitan</span> performs data quality refinement as part of execution stability. <span class="ds-text--product">SynTitan</span> can use a subset of <span class="ds-text--product">DTS</span> capabilities when privacy-safe synthetic data is needed, while <span class="ds-text--product">DTS</span> is a full standalone enterprise synthetic data engine.

---

### Section 8: Final CTA

- **Pattern**: [K] CTA Band -- ds-cta-band
- **Background**: bg-image -- `bg-wave-teal-blue.png`
- ds-container 밖에 전폭 배치
- **Class**: `ds-cta-band ds-bg--wave-teal`
- **ID**: `section-final-cta`

#### Content
- eyebrow: `From Evidence to Execution`
- title: `Make your AI runs <span class="ds-text--brand">reproducible.</span>`
- title 강조 키워드: `reproducible.`
- description: `Every production AI failure has a root cause. These cases show how to find it fast, fix it correctly, and prevent recurrence. The same infrastructure is available now.`
- Actions (3 buttons, ds-cta-band__actions):
  1. `Start evaluation ->` (href="https://syntitan.ai")
  2. `Run a technical demo ->`
  3. `Explore concept: Why AI fails ->` (href="/learn/why-ai-fails-after-deployment")
- footnote: `30-min architecture review -- engineers-first -- no sales pitch`

---

## Layout Pattern Summary

| Section | Pattern | Catalog | ds-grid--1 연속 여부 |
|---------|---------|---------|---------------------|
| Hero | ds-hero--text-only | [A] | N/A |
| Hero KPI | ds-kpi-band (3col) | [F] | - |
| Hero Banner | ds-banner--brand | [Q] | - |
| Evidence Header | ds-section-header--underline | [D] | - |
| Evidence Filter | ds-filter-bar (custom) | custom | - |
| Evidence Cards | ds-ac-list + ds-ac-card x6 | [S] | - |
| Overlap Note | ds-banner | [Q] | - |
| Artifacts Header | ds-section-header--underline | [D] | - |
| Artifacts Grid | ds-card-grid ds-card-grid--2col | [G] 2col | - |
| Artifact Note | ds-banner | [Q] | - |
| SaaS Diff | ds-banner--full | [Q] dark | - |
| Arch CTA | ds-section--bg-img + centered header | [D] | - |
| Impact Header | ds-section-header--underline | [D] | - |
| Impact Grid | ds-card-grid ds-card-grid--3col | [G] 3col | - |
| FAQ Header | ds-section-header--underline | [D] | - |
| FAQ List | ds-grid--1 + faq accordion | [P] | 1회만 |
| Final CTA | ds-cta-band | [K] | - |

검증: ds-grid--1이 3개 이상 연속되는 구간 없음.

---

## Custom Components Required

### 1. ds-filter-bar (필터 바)
```css
.ds-filter-bar {
  display: flex; align-items: center; gap: var(--ds-space-xs);
  flex-wrap: wrap; margin-bottom: var(--ds-space-xl); justify-content: center;
}
.ds-filter-btn {
  display: inline-flex; align-items: center; gap: var(--ds-space-2xs);
  padding: var(--ds-space-xs) var(--ds-space-md);
  border-radius: var(--ds-radius-pill); border: var(--ds-border-default);
  background: var(--ds-color-surface-white);
  font-family: var(--ds-font-code); font-size: var(--ds-text-xs);
  letter-spacing: var(--ds-tracking-wide); text-transform: uppercase;
  color: var(--ds-color-text-secondary); cursor: pointer; transition: all 0.15s;
}
.ds-filter-btn:hover { border-color: var(--ds-color-border-strong); }
.ds-filter-btn.ds-filter--active {
  background: var(--ds-color-neutral-900); color: var(--ds-color-text-inverse);
  border-color: var(--ds-color-neutral-900);
}
.ds-filter-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
```

### 2. ds-code-block (코드 블록)
```css
.ds-code-block {
  background: var(--ds-color-neutral-050); border: 1px solid var(--ds-color-border-default);
  border-radius: var(--ds-radius-sm); padding: var(--ds-space-md);
  font-family: var(--ds-font-code); font-size: var(--ds-text-sm);
  line-height: 1.9; color: var(--ds-color-text-secondary); overflow-x: auto;
}
.ds-code--remove { color: var(--ds-color-error); }
.ds-code--add    { color: var(--ds-color-success); }
.ds-code--warn   { color: #f59e0b; }
.ds-code--muted  { color: var(--ds-color-text-tertiary); }
```

### 3. ds-faq-item (FAQ 아코디언)
```css
.ds-faq-list { display: flex; flex-direction: column; gap: 2px; }
.ds-faq-item { background: var(--ds-color-surface-white); border: var(--ds-border-default); border-radius: var(--ds-radius-sm); overflow: hidden; }
.ds-faq-q {
  display: flex; justify-content: space-between; align-items: center;
  padding: var(--ds-space-lg); cursor: pointer; user-select: none;
  font-family: var(--ds-font-base); font-size: var(--ds-text-lg);
  font-weight: var(--ds-weight-medium); gap: var(--ds-space-md); transition: background 0.15s;
}
.ds-faq-q:hover { background: var(--ds-color-neutral-025); }
.ds-faq-toggle { /* 28x28 toggle -- 동일 spec as ds-ac-card__toggle */ }
.ds-faq-a {
  display: none; padding: 0 var(--ds-space-lg) var(--ds-space-lg);
  font-size: var(--ds-text-md); color: var(--ds-color-text-secondary);
  line-height: var(--ds-leading-relaxed); border-top: var(--ds-border-default);
  padding-top: var(--ds-space-md);
}
.ds-faq-item.ds-faq--open .ds-faq-a { display: block; }
```

---

## :root CSS Variable Declarations

### Evidence category colors
```css
--ds-ev-stable-color:  #C47A00;
--ds-ev-stable-bg:     rgba(232, 160, 32, 0.07);
--ds-ev-stable-border: rgba(232, 160, 32, 0.3);
--ds-ev-data-color:    var(--ds-color-success);
--ds-ev-data-bg:       rgba(14, 130, 76, 0.08);
--ds-ev-data-border:   rgba(13, 190, 124, 0.25);
--ds-ev-secure-color:  #7B5CF5;
--ds-ev-secure-bg:     rgba(123, 92, 245, 0.07);
--ds-ev-secure-border: rgba(123, 92, 245, 0.3);
```

---

## JavaScript Requirements

### 1. Accordion toggle (Evidence Cards)
```javascript
function toggleAcCard(header) {
  const card = header.closest('.ds-ac-card');
  card.classList.toggle('ds-ac--open');
}
```

### 2. FAQ toggle
```javascript
function toggleFaq(q) {
  const item = q.closest('.ds-faq-item');
  item.classList.toggle('ds-faq--open');
}
```

### 3. Filter bar
```javascript
function setFilter(tag, btn) {
  document.querySelectorAll('.ds-filter-btn').forEach(b => b.classList.remove('ds-filter--active'));
  btn.classList.add('ds-filter--active');
  const cards = document.querySelectorAll('.ds-ac-card[data-tag]');
  let count = 0;
  cards.forEach(card => {
    if (tag === 'all' || card.dataset.tag === tag) {
      card.style.display = '';
      count++;
    } else {
      card.style.display = 'none';
    }
  });
  const el = document.getElementById('ev-count');
  if (el) el.textContent = count + ' records -- filtered: ' + tag;
}
```

---

## Product Name Usage (ds-text--product)

Oxanium 폰트 적용 대상 -- 단독 키워드로 표기될 때만:
- SynTitan
- DTS
- LLM Capsule

적용 위치: 본문/설명/답변 내에서 단독 언급 시. 타이틀/헤더 일반 텍스트에는 적용하지 않음.

---

## Navigation & Footer

### Navigation
- ds-nav 고정 헤더
- Logo: CUBIG SVG + 텍스트 (원문 SVG 보존)
- Links: Platform (sub: SynTitan), Capabilities (sub: DTS, LLM Capsule), Proof (active), Learn (sub: 4개), Company
- CTA: `Try SynTitan` (ds-btn ds-btn--sm ds-btn--primary)

### Footer
- 5-column: Brand+Address, Platform, Capabilities, Learn, Company
- 원문 주소 (Korea: NAVER 1784 / UK: Belfast) 보존
- Copyright: 2026 CUBIG Corp.
- 모든 링크 href 보존 (email-protected 포함)

---

## Content Integrity Checklist

- [ ] Hero: eyebrow, title, description, definition box 원문 유지
- [ ] 산업 태그 5개 모두 포함 (정확한 회사명)
- [ ] KPI 3개 수치 정확 (95%, +30pp, -90%)
- [ ] Evidence card 6개 모두 포함 (industry, title, all metrics, before/after/changed/reproduce text, artifacts)
- [ ] Technical Artifacts 4개 모두 포함 (코드 블록 내용 line-by-line 정확)
- [ ] Overlap note 2줄 원문 유지
- [ ] Artifact banner 텍스트 + 링크 유지
- [ ] SaaS differentiator 텍스트 원문 유지
- [ ] Architecture CTA 텍스트 + 버튼 2개
- [ ] Business Impact 6개 카드 (수치 + 설명) 정확
- [ ] FAQ 5개 Q&A 원문 유지
- [ ] Final CTA 텍스트 + 버튼 3개 + footnote
- [ ] SEO meta tags + Schema.org JSON-LD FAQPage 보존
- [ ] 모든 href 링크 보존 (email-protected 포함)

---

## Implementation Notes for Frontend Dev

1. **Single self-contained HTML** at `output/A-cubig-proof-v3-b-type.html`
2. All CSS inline in `<style>` -- no external stylesheets except Google Fonts
3. DS color tokens, typography classes, spacing variables 전수 사용
4. **No !important**, no hardcoded colors outside `:root`, no inline styles (CSS variable pass-through 제외)
5. All background image overlay rgba values as `:root` variables
6. Mobile-first CSS with 5 breakpoints (375/768/1024/1440/1920)
7. SEO: meta tags, canonical, OG tags, Schema.org JSON-LD FAQPage 보존
8. SVG logo inline 보존
9. 모든 텍스트 콘텐츠 원문 그대로 -- zero modification
