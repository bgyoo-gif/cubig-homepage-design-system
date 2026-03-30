# Design Spec: execution-state-layer
생성일: 2026-03-30
분석한 원본: input/execution-state-layer.html

## 전체 구조 요약
- 섹션 수: 12개
- 문서 성격: 개념 정의 아티클 (Definition Article) — 교육/설명형
- 톤앤매너: 기술 교육, 개념 설명, 제품 연결
- 아티클 모드: `<main class="ds-article">` 적용 — 본문 860px 통일
- eyebrow: 전면 금지 (원본의 "Definition" eyebrow 삭제)
- 특이사항:
  - SynTitan은 제품명 → `.ds-text--product` (Oxanium) 적용
  - 아티클형이므로 섹션 헤더 `--left` 적용
  - 원본에 스크린샷/이미지 없음 → Hero text-only 사용

## 배경 이미지 사용 계획
- 전체적으로 텍스트 중심 아티클이므로 배경 이미지 최소 사용
- 사용처: CTA band (하단), banner--full (1회)
- 배경 이미지 목록 (중복 없이):
  - ds-bg--wave-teal: banner--full (Conceptual model 섹션)
  - ds-bg--grad-deep: CTA band

## 섹션별 설계

---

### 섹션 1: Hero
- 패턴: [A] Hero text-only — ds-hero--text-only
- 헤더 eyebrow: 없음 (전면 금지 — 원본 "Definition" 삭제)
- 헤더 타이틀: "Execution State Layer"
- 타이틀 강조 키워드: 없음 (고유 개념명이므로 brand 색상 미적용)
- 헤더 description: "A data infrastructure layer that binds every AI execution to a versioned, frozen, and verifiable data state — enabling reproducibility, traceability, and consistent outcomes across production environments."
- 헤더 정렬: left (아티클형)
- 배경: white (배경 이미지 금지 — text-only hero)
- 사용 컴포넌트: ds-hero--text-only
- 반응형 설계:
  - mobile (375px): h1 24px, description 100%
  - tablet (768px): h1 28px
  - sm-desktop (1024px): h1 32px, description max-width 720px
  - desktop (1440px): h1 36px, description max-width 860px
- 비고: padding-top 100px 고정 (ds-section--hero)

---

### 섹션 2: Definition
- 패턴: [Q] Banner/callout — ds-banner
- 헤더 eyebrow: 없음
- 헤더 타이틀: "Definition"
- 타이틀 강조 키워드: "Definition" → `ds-text--brand`
- 헤더 description: 없음
- 헤더 정렬: left (아티클형)
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-section-header--underline--left + ds-banner
- 그리드: 없음 (단일 배너)
- 배너 내용: "**Execution State Layer (ESL)** is a data infrastructure layer that binds every AI execution to a versioned, frozen, and verifiable data state, enabling reproducibility, traceability, and consistent outcomes across production environments."
- 반응형 설계:
  - mobile (375px): padding 16px
  - tablet (768px): padding 24px
  - sm-desktop (1024px): 동일
  - desktop (1440px): 동일
- 비고: ds-banner 사용 (상하 얇은 border, 좌측 border 없음). 텍스트 가운데 정렬.

---

### 섹션 3: What it means
- 패턴: ds-grid--1 (텍스트 설명형)
- 헤더 eyebrow: 없음
- 헤더 타이틀: "What it means"
- 타이틀 강조 키워드: 없음
- 헤더 description: 없음
- 헤더 정렬: left (아티클형)
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-section-header--underline--left + ds-body-l 본문 2단락
- 그리드: ds-grid--1
- 본문 내용:
  - 단락 1: "In traditional AI systems, results often change without a clear explanation due to data updates, schema changes, pipeline modifications, or environment differences."
  - 단락 2: "The Execution State Layer resolves this by ensuring that every AI run is tied to a specific, immutable data state. This transforms AI execution from non-deterministic and opaque into reproducible and explainable."
- 반응형 설계:
  - 모든 breakpoint: 단일 컬럼, 860px max-width (ds-article)
- 비고: 순수 텍스트 섹션

---

### 섹션 4: Core characteristics
- 패턴: [G] Card grid — ds-card-grid--3col (5개 카드)
- 헤더 eyebrow: 없음
- 헤더 타이틀: "Core characteristics"
- 타이틀 강조 키워드: "characteristics" → `ds-text--brand`
- 헤더 description: 없음
- 헤더 정렬: left (아티클형)
- 배경: surface-light (ds-section--light)
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-section-header--underline--left + ds-card-grid--3col + ds-card
- 그리드: ds-card-grid--3col (5개 → 3+2 배치)
- 카드 구성 (5개):
  1. badge: "01", title: "Versioned Data States", body: "Every dataset used in AI execution is versioned and explicitly identified.", bullet-check: Explicit version identifiers / Comparable across runs / Rollback possible
  2. badge: "02", title: "Frozen Execution Conditions", body: "Each run is bound to a frozen snapshot of data.", bullet-check: No drift during execution / Consistent input across environments / Stable production behavior
  3. badge: "03", title: "Verifiable State Integrity", body: "Data states can be validated before and after execution.", bullet-check: Checksum or validation logic / Schema consistency checks / Integrity guarantees
  4. badge: "04", title: "Full Execution Traceability", body: "Every AI output can be traced back to the exact state and context used.", bullet-check: Exact data state / Transformation steps / Execution context
  5. badge: "05", title: "Reproducibility by Design", body: "Past executions can be re-run under identical conditions.", bullet-check: Debugging without guesswork / Reliable comparisons / Audit-ready AI systems
- 카드 badge: ds-card__badge--gray (번호 표시)
- 반응형 설계:
  - mobile (375px): 1col
  - tablet (768px): 2col
  - sm-desktop (1024px): 3col
  - desktop (1440px): 3col
- 비고: 5개이므로 마지막 행 2개. 카드 내부에 ds-bullet--check 리스트 사용.

---

### 섹션 5: Why it matters
- 패턴: [G] Card grid — ds-card-grid--3col (3개 카드)
- 헤더 eyebrow: 없음
- 헤더 타이틀: "Why it matters"
- 타이틀 강조 키워드: "matters" → `ds-text--brand`
- 헤더 description: 없음
- 헤더 정렬: left (아티클형)
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-section-header--underline--left + ds-card-grid--3col + ds-card
- 그리드: ds-card-grid--3col
- 카드 구성 (3개):
  1. icon: Lucide `search` (아이콘), title: "Eliminates 'why did the result change?'", body: "Without an Execution State Layer, teams often debug models when the real issue is hidden in the data or pipeline. With ESL, execution conditions are explicit and comparable."
  2. icon: Lucide `rocket` (아이콘), title: "Enables production-ready AI", body: "AI systems often fail in production not because the model is wrong, but because data shifts, pipeline inconsistencies, and hidden dependencies change the execution conditions. ESL makes deployments more stable and predictable."
  3. icon: Lucide `shield-check` (아이콘), title: "Supports audit and compliance", body: "In regulated environments, organizations need to answer what data was used and under what conditions AI was executed. ESL provides reproducible audit trails and verifiable execution records."
- 반응형 설계:
  - mobile (375px): 1col
  - tablet (768px): 2col
  - sm-desktop (1024px): 3col
  - desktop (1440px): 3col
- 비고: 각 카드에 ds-card__icon + ds-card__title--sm + ds-card__description

---

### 섹션 6: Comparison
- 패턴: [O] Table — ds-table (2열 비교표)
- 헤더 eyebrow: 없음
- 헤더 타이틀: "Comparison"
- 타이틀 강조 키워드: "Comparison" → `ds-text--brand`
- 헤더 description: 없음
- 헤더 정렬: left (아티클형)
- 배경: surface-light (ds-section--light) — 레이아웃 변화
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-section-header--underline--left + 2열 비교 테이블
- 테이블 구조:
  | Aspect | Traditional Data Pipeline | With Execution State Layer |
  |--------|--------------------------|---------------------------|
  | Data Mutability | Data is mutable | Data is versioned and frozen |
  | Execution Conditions | Execution conditions are implicit | Execution conditions are explicit |
  | Reproducibility | Results are difficult to reproduce | Results are reproducible |
  | Debugging | Debugging relies on assumptions | Debugging is deterministic |
- 반응형 설계:
  - mobile (375px): 가로 스크롤 또는 스택
  - tablet (768px): 3col 테이블
  - sm-desktop (1024px): 동일
  - desktop (1440px): 동일
- 비고: 원본의 2카드 비교를 테이블로 변환하여 시각적 차별화. "Traditional" 열은 ds-text--linethrough 적용 검토.

---

### 섹션 7: Relationship to AI-Ready Data
- 패턴: [Q] Banner/callout (ds-banner--full) + ds-body-l 본문
- 헤더 eyebrow: 없음
- 헤더 타이틀: "Relationship to AI-Ready Data"
- 타이틀 강조 키워드: "AI-Ready Data" → `ds-text--brand`
- 헤더 description: 없음
- 헤더 정렬: left (아티클형)
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-section-header--underline--left + ds-body-l 본문 텍스트
- 본문: "AI-ready data ensures that data is usable, reliable, and privacy-safe. The Execution State Layer extends this by ensuring that AI-ready data is also reproducible in execution. Data readiness is assessed across six dimensions — **Privacy, Integrity, Traceability, Contextuality, Operational Reliability, and Conciseness** — and each dimension must be verifiably maintained at every execution."
- 6개 차원 강조: ds-bullet--dot 리스트로 분리하여 시각적 구분
  - Privacy
  - Integrity
  - Traceability
  - Contextuality
  - Operational Reliability
  - Conciseness
- 반응형 설계:
  - 모든 breakpoint: 단일 컬럼, 860px max-width
- 비고: 6개 차원 목록을 ds-grid--3 + ds-bullet--dot 또는 인라인 bold 처리

---

### 섹션 8: Conceptual model
- 패턴: [Q] Banner/callout — ds-banner--full
- 헤더 eyebrow: 없음
- 헤더 타이틀: "Conceptual model"
- 타이틀 강조 키워드: "model" → `ds-text--brand`
- 헤더 description: 없음
- 헤더 정렬: left (아티클형)
- 배경: white (섹션 배경)
- 배경 bg-image 적용 위치: ds-banner--full 컴포넌트 (ds-bg--wave-teal)
- 사용 컴포넌트: ds-section-header--underline--left + ds-banner--full
- 배너 내용:
  - 강조 텍스트: "AI Execution = Model + Code + Execution State Layer"
  - 부연: "Where the Execution State Layer provides versioned data state, verified integrity, and full traceability."
- 반응형 설계:
  - mobile (375px): padding space-xl
  - tablet (768px): 동일
  - sm-desktop (1024px): 동일
  - desktop (1440px): 동일
- 비고: 공식 강조를 ds-banner--full + 배경 이미지로 표현. 텍스트 색상 text-primary (밝은 배경 + 흰 오버레이).

---

### 섹션 9: Example
- 패턴: ds-grid--1 (텍스트 설명형)
- 헤더 eyebrow: 없음
- 헤더 타이틀: "Example"
- 타이틀 강조 키워드: 없음
- 헤더 description: 없음
- 헤더 정렬: left (아티클형)
- 배경: surface-light (ds-section--light) — 레이아웃 변화
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-section-header--underline--left + ds-body-l 본문
- 본문:
  - "A customer analytics model produces different results week to week."
  - "Without ESL, it is unclear whether the change came from the model, the data, or the pipeline. With ESL, each run is linked to a specific data version, previous results can be exactly reproduced, and differences can be precisely explained."
- ESL 효과를 ds-bullet--check 리스트로 분리:
  - Each run is linked to a specific data version
  - Previous results can be exactly reproduced
  - Differences can be precisely explained
- 반응형 설계:
  - 모든 breakpoint: 단일 컬럼, 860px max-width
- 비고: "Without ESL" 부분은 일반 본문, "With ESL" 효과는 체크리스트로 시각 분리

---

### 섹션 10: How SynTitan implements the Execution State Layer
- 패턴: [G] Card grid — ds-card-grid--2col (4개 카드)
- 헤더 eyebrow: 없음
- 헤더 타이틀: "How <span class='ds-text--product'>SynTitan</span> implements the Execution State Layer"
- 타이틀 강조 키워드: "SynTitan" → `ds-text--product` (Oxanium)
- 헤더 description: "SynTitan operationalizes the Execution State Layer through four integrated capabilities: AI Readiness profiling, multi-dimensional data quality scoring, full dataset versioning, and immutable execution metadata — ensuring every AI run is traceable to its exact data state."
- 헤더 정렬: left (아티클형)
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-section-header--underline--left + ds-card-grid--2col + ds-card
- 그리드: ds-card-grid--2col (4개 → 2x2)
- 카드 구성 (4개):
  1. badge: ds-card__badge--brand "FEATURE", title: "Data Profiling & AI Readiness Analysis"
     - body: "Before any AI execution begins, SynTitan runs automated profiling across all input datasets. Each file is evaluated against the AI-Ready standard, and the platform surfaces pass/warn/fail status per file in real time."
     - body2: "This ensures that only datasets meeting a verified readiness threshold enter the execution pipeline — preventing silent data quality failures from propagating into model outputs."
     - bullet-dot: Per-file profiling with pass / warn / fail status / AI readiness score (0-100%) per dataset / Profiling results stored as part of the execution state record
  2. badge: ds-card__badge--brand "FEATURE", title: "Six-Dimensional AI Readiness Score"
     - body: "AI readiness is broken down into six independently scored dimensions. Each dimension maps directly to a property the Execution State Layer must guarantee."
     - 6개 차원 리스트 (ds-bullet--dot):
       - Privacy — PII detection & safe handling
       - Integrity — Null, duplicate, type & distribution checks
       - Traceability — Snapshot, version label & change log
       - Contextuality — Column semantics & purpose alignment
       - Operational Reliability — Processing result verification
       - Conciseness — Low-value & redundant column removal
  3. badge: ds-card__badge--brand "FEATURE", title: "Immutable Dataset Versioning"
     - body: "Every change to a dataset is recorded as an immutable version entry with a commit hash, timestamp, author, and change summary."
     - body2: "Any AI execution can be re-run against a past version to reproduce the exact result, without guesswork."
     - 타임라인 시각화: ds-bullet--number로 표현
       - v2 Released — Released as v2 (Mar 25, 10:04 AM, hamilton)
       - commit a3f8c2d — Feature Null Module (FNM) -- 410 corrections (Mar 25, 10:04 AM, Alia)
       - v1 Initial — Initial upload (Mar 25, 10:04 AM, hamilton, c4f8c2c)
  4. badge: ds-card__badge--brand "FEATURE", title: "Execution Metadata & Column Lineage"
     - body: "Each dataset version captures full structural metadata — storage size, column count, row count, column types, owner, and format — alongside per-column distribution statistics."
     - body2: "This metadata is frozen at the time of execution, forming the verifiable state record that auditors and engineers can inspect after the fact."
     - bullet-dot: Column schema: String, Numeric, ID, DateTime, Others / Row-level distribution histograms per column / Owner & version tag (e.g., v1, v2) / Immutable at release — prevents post-hoc modification
- 반응형 설계:
  - mobile (375px): 1col
  - tablet (768px): 2col
  - sm-desktop (1024px): 2col
  - desktop (1440px): 2col
- 비고: SynTitan을 ds-text--product로 표기. 카드 내부에 badge + title + body + bullet 조합. 원본의 version-timeline은 ds-bullet--number로 단순화.

---

### 섹션 11: Frequently Asked Questions
- 패턴: [P] FAQ — ds-ac-card (아코디언)
- 헤더 eyebrow: 없음
- 헤더 타이틀: "Frequently Asked Questions"
- 타이틀 강조 키워드: "Questions" → `ds-text--brand`
- 헤더 description: 없음
- 헤더 정렬: left (아티클형)
- 배경: surface-light (ds-section--light)
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-section-header--underline--left + ds-ac-card (아코디언) x 7
- FAQ 항목 (7개):
  1. Q: "What is an Execution State Layer in AI?" / A: "An Execution State Layer (ESL) is a data infrastructure layer that binds every AI model execution to a versioned, frozen, and verifiable data state. It ensures that the exact data used in any given run can be identified, reproduced, and audited — making AI systems deterministic and production-grade."
  2. Q: "How is Execution State Layer different from a traditional data pipeline?" / A: "A traditional pipeline moves data from source to destination but does not preserve the state of that data at the moment of AI execution. The Execution State Layer adds versioning, snapshot freezing, integrity verification, and full lineage on top of the pipeline — so every AI run has an explicit, immutable data record attached to it."
  3. Q: "Why do AI systems need an Execution State Layer?" / A: "Without an ESL, AI outputs can silently change due to data drift, schema updates, or pipeline modifications — making debugging and compliance nearly impossible. An Execution State Layer provides the infrastructure to ask and answer: *what data did this model see, and can we prove it?*"
  4. Q: "What is AI-Ready data, and how does it relate to the Execution State Layer?" / A: "AI-Ready data meets quality thresholds across six dimensions: Privacy, Integrity, Traceability, Contextuality, Operational Reliability, and Conciseness. The Execution State Layer ensures that this AI-Ready status is preserved and verifiable at every point of execution — not just at the time of ingestion."
  5. Q: "How does data versioning support reproducibility in AI?" / A: "Data versioning assigns a unique, immutable identifier to each state of a dataset. When an AI execution is tied to a specific version, that run can be exactly reproduced at any future point — critical for debugging, model comparison, regulatory audits, and MLOps workflows."
  6. Q: "How does Execution State Layer compare to MLflow or DVC?" / A: "MLflow and DVC are experiment tracking and data versioning tools focused on the model development lifecycle. The Execution State Layer is a broader infrastructure concept: it defines the contract between AI execution and data state, encompassing versioning, integrity verification, and traceability as first-class requirements. Tools like MLflow or DVC can serve as partial implementations of an Execution State Layer, but ESL describes the architectural requirement, not a specific product."
  7. Q: "Is Execution State Layer related to data provenance?" / A: "Yes. Data provenance tracks the origin, transformations, and movement of data over time. The Execution State Layer builds on provenance by binding that lineage record directly to each AI execution — so it is not just known where data came from, but exactly which provenance state the model saw at inference or training time. ESL can be thought of as *execution-scoped data provenance*: provenance that is frozen, versioned, and verifiable at the moment of every AI run."
- 반응형 설계:
  - 모든 breakpoint: 단일 컬럼, 860px max-width
- 비고: 반드시 아코디언 형태 (ds-ac-card). 카드 나열 금지. 토글 버튼 28x28px.

---

### 섹션 12: Summary + CTA
- 패턴: [K] CTA band — ds-cta-band
- 분리: Summary 텍스트 + 인용을 CTA band 안에 통합
- 헤더 eyebrow: 없음
- 헤더 타이틀: "Execution State Layer"
- 타이틀 강조 키워드: 없음
- CTA 본문:
  - 설명: "Execution State Layer transforms AI systems from unstable and opaque into reproducible, traceable, and production-grade systems by binding every execution to a controlled data state."
  - 인용: "Execution State Layer is a data infrastructure layer that binds AI executions to versioned, frozen, and verifiable data states, enabling reproducibility and traceability in production AI." — CUBIG
- CTA 버튼:
  - Primary: "Learn more about SynTitan" (SynTitan 제품 페이지 링크)
  - Secondary: "Contact us" (연락처 링크)
- 배경: ds-bg--grad-deep (배경 이미지)
- 배경 bg-image 적용 위치: ds-cta-band (전폭 배치, container 밖)
- 텍스트 색상: 흰색 (어두운 배경)
- 반응형 설계:
  - mobile (375px): padding 40px 16px, 버튼 세로 스택
  - tablet (768px): padding 60px 32px
  - sm-desktop (1024px): padding 80px 32px
  - desktop (1440px): padding 80px 120px
- 비고: 전폭 배치. 원본 summary 텍스트와 blockquote를 CTA로 통합.

---

## 레이아웃 흐름 검증

| # | 섹션 | 배경 | 레이아웃 패턴 |
|---|------|------|--------------|
| 1 | Hero | white | [A] text-only |
| 2 | Definition | white | [Q] banner |
| 3 | What it means | white | ds-grid--1 텍스트 |
| 4 | Core characteristics | surface-light | [G] 3col 카드 |
| 5 | Why it matters | white | [G] 3col 카드 |
| 6 | Comparison | surface-light | [O] 테이블 |
| 7 | AI-Ready Data | white | 텍스트 + 리스트 |
| 8 | Conceptual model | white + banner-full bg | [Q] banner--full |
| 9 | Example | surface-light | 텍스트 + 체크리스트 |
| 10 | SynTitan ESL | white | [G] 2col 카드 |
| 11 | FAQ | surface-light | [P] 아코디언 |
| 12 | Summary/CTA | bg-image (dark) | [K] CTA band |

- ds-grid--1 연속 3회 방지: 섹션 2~3이 텍스트이지만 2는 banner, 3은 본문으로 구분됨. OK.
- 동일 배경 3연속 방지: white 최대 2연속 (2-3, 7-8). OK. 중간에 surface-light 교대.
- 배경 이미지 중복 없음: wave-teal (1회), grad-deep (1회). OK.

## 누락 컴포넌트
- 없음. 모든 컴포넌트가 design-system.md에 정의되어 있음.

## Frontend Dev 위임 메시지
"output/docs/execution-state-layer-spec.md를 기반으로 output/html/execution-state-layer-b-type.html을 생성해줘. 아티클형 페이지이므로 `<main class="ds-article">` 적용, 본문 860px 통일. SynTitan은 ds-text--product (Oxanium). eyebrow 전면 금지."
