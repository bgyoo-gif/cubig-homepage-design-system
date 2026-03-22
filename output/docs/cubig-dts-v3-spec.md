# Design Spec: cubig-dts-v3
생성일: 2026-03-22
분석한 원본: input/cubig-dts-v3.html

## 전체 구조 요약
- 섹션 수: 11개
- 문서 성격: 제품 소개 + 설득 (DTS = Enterprise Synthetic Data Engine)
- 특이사항:
  - DTS 단독 제품 페이지 -- SynTitan과 독립/통합 양면 포지셔닝
  - Hero에 KPI 4개 + 인증 배지 다수 포함
  - DP(Differential Privacy) 기술 설명 + 4단계 프로세스 존재
  - 비교표(DTS vs 다른 접근) 포함
  - 배포 모드(Standalone / Integrated) 이중 구조
  - FAQ 6개 항목

## 필수 적용 규칙 (사용자 지정)
- eyebrow 전면 금지 (모든 섹션)
- 외부 서비스 링크(AWS Marketplace, syntitan.ai 등)는 ds-btn--secondary 버튼형
- Step 프로세스는 [U] ds-step-tabs (스크린샷 placeholder)
- 인증/수상은 [I-2] ds-cert-grid 마키 + 공식 이미지
- Partner는 [I] ds-partner-grid 마키
- FAQ는 [P] ds-ac-card 아코디언
- 섹션 헤더 기본 center 정렬
- description max-width 반응형 (mobile 100% / 1024px 720px / 1440px 860px)
- text-wrap: balance(제목) / pretty(본문)
- text-muted 텍스트 사용 금지 (최소 text-tertiary)
- 코드블록 다크 테마 (ds-code-block)
- brand-purple: #725bea (var(--ds-color-brand-purple))

---

## 섹션별 설계

---

### 섹션 1: Hero (DTS)
- 원본 위치: .hero-wrap
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀(h1): `DTS`
  - `DTS`는 제품명이므로 `<span class="ds-text--product">DTS</span>` 적용 (Oxanium 폰트)
- 타이틀 강조 키워드: 없음 (제품명 자체가 타이틀)
- description: "Your AI is only as good as the data it trains on -- and most enterprise data is not AI-ready. DTS solves unusable data for AI: whether it's restricted by privacy rules, imbalanced, or missing the coverage your model needs. The result is an AI-ready dataset you can actually use."
- 부가 텍스트 (description 아래 별도 줄): "Restricted data -> privacy-safe replacement / Imbalanced datasets -> augmentation & balance fix / Coverage gaps -> AI-ready dataset generation"
  - 이 텍스트는 ds-bullet--dot 리스트로 분리 (3개 독립 문장이므로)
- 배경: white (배경 이미지 금지 -- Hero Text-only)
- 사용 컴포넌트: [A] ds-hero--text-only
- 그리드: 없음
- CTA 버튼:
  - "Run technical demo" -> ds-btn--primary ds-btn--md (href="/contact")
  - "AWS Marketplace" -> ds-btn--secondary ds-btn--md (href="https://aws.amazon.com/marketplace", target="_blank")
  - "See SynTitan Platform" -> ds-btn--secondary ds-btn--md (href="/syntitan")
- 반응형 설계:
  - mobile (375px): 1col, 버튼 세로 스택, h1 font-size 24px
  - tablet (768px): 1col, 버튼 가로, h1 28px
  - sm-desktop (1024px): h1 32px, description max-width 720px
  - desktop (1440px): h1 36px, description max-width 860px
- 비고: Hero에는 eyebrow 사용 금지. tag/dot 장식 제거. Hero 아래 별도 정의 인용문("True AI-ready data means...")은 섹션 2에 배치

---

### 섹션 2: KPI Band + AI-Ready Definition
- 원본 위치: Hero 내부 KPI 그리드 + geo-def 인용문
- 헤더: 없음 (Hero 직후 연속 배치)
- 배경: white (섹션 배경 없음, KPI Band 컴포넌트 자체에 배경 적용)
- 사용 컴포넌트: [F] ds-kpi-band + [Q] ds-banner--full
- 그리드: 4열 KPI

**KPI Band 내용:**
| 수치 | 라벨 | 보조 |
|------|------|------|
| +30pp | F1-Score Lift | 58.55% -> 88.55% |
| -90% | Time to Deploy | 4 weeks -> 1 day |
| 97.6% | AI Detection Rate | IBK Industrial Bank |
| 277K+ | Synthetic Records | Kyobo Life Insurance |

- KPI 배경 이미지: ds-bg--lavender (컴포넌트 자체에 적용)
- KPI 텍스트: white (어두운 배경)

**AI-Ready Definition (KPI 아래 배너):**
- 컴포넌트: ds-banner--full ds-bg--green-wave
- 텍스트: "True AI-ready data means it is usable, privacy-safe, and stable for production execution."
- "usable", "privacy-safe", "stable for production execution"은 `<em>` 이탤릭 유지
- 텍스트 색상: text-primary (밝은 배경 이미지 + 흰색 오버레이)

- 반응형:
  - mobile: KPI 1col, banner padding 축소
  - tablet: KPI 2col
  - sm-desktop+: KPI 4col

---

### 섹션 3: Privacy-Safe Synthetic Data (DTS Positioning)
- 원본 위치: #dts-synthetic-data-definition
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀: "Privacy-Safe <span class='ds-text--brand'>Synthetic Data</span>"
- 타이틀 강조 키워드: "Synthetic Data"
- 헤더 description: "DTS includes privacy-safe synthetic data generation to expand coverage and repair imbalance when real data is restricted or incomplete."
- 헤더 정렬: center
- 배경: white
- 사용 컴포넌트: ds-section-header--underline + ds-grid--1 내부 ds-body 텍스트
- 본문 구조:
  1. 첫 단락 (ds-body-m): "Synthetic data generation is one capability inside DTS -- not the company identity. DTS uses differential privacy as its mathematical foundation, providing formal guarantees that synthetic outputs cannot be reverse-engineered to individual records. This makes DTS suitable for regulated industries that need AI-ready datasets without exposing raw training data."
  2. 둘째 단락 (ds-body-m): "DTS is a capability within Cubig's AI-Ready Data Infrastructure -- the infrastructure layer that makes enterprise data usable, privacy-safe, and stable for production AI execution. DTS specifically addresses the Restricted Data and Unusable Data blockers."
  3. 배너 (ds-banner ds-banner--info): "Synthetic data is a DTS capability. It is not Cubig's top-level identity."
- 반응형:
  - mobile: 본문 100%, padding 16px
  - 1024px+: 본문 max-width 860px, margin 0 auto
  - 1440px: container max-width 1440px

---

### 섹션 4: DTS vs Other Approaches (Comparison)
- 원본 위치: SAAS-DIFF-DTS 블록 + compare-wrap 테이블
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀: "<span class='ds-text--product'>DTS</span> vs. Other Approaches to <span class='ds-text--brand'>Restricted Data</span>"
- 타이틀 강조 키워드: "Restricted Data"
- 헤더 description: "Databricks stores your data. Masking removes it. DTS makes it AI-ready -- without removing or exposing it."
- 헤더 정렬: center
- 배경: ds-section--light (surface-light)
- 사용 컴포넌트: ds-section-header--underline + [O] ds-table

**비교표 (ds-table, 5열):**
| Capability | DTS | Data Masking / Anonymization | Data Sampling | Manual Labeling |
|---|---|---|---|---|
| Privacy guarantee | (check) Mathematical DP bound | (partial) Re-identification risk remains | (cross) No privacy guarantee | (cross) |
| Coverage expansion | (check) Generate at any scale | (cross) Can't create new data | (partial) Bounded by real data volume | (partial) Expensive & slow |
| Rare class augmentation | (check) Targeted generation | (cross) | (cross) Can't create rare events | (partial) Very high cost |
| Distribution fidelity | (check) Validated against real stats | (partial) Distorted by masking | (partial) Sampling bias risk | (partial) Annotator variance |
| Cross-border / external use | (check) No real data transferred | (cross) Residual risk | (cross) | (cross) |
| SynTitan integration | (check) Native versioning & binding | (cross) | (cross) | (cross) |

- 아이콘: check = ds-color-success 색상 "check mark", partial = ds-color-warn 색상 "triangle", cross = ds-color-error 색상 "x"
- DTS 열 강조: 배경 rgba(114, 91, 234, 0.04) -- ds-color-brand-purple 계열 연한 틴트
- 반응형:
  - mobile: ds-table-wrap overflow-x auto (가로 스크롤)
  - tablet+: 전체 표시
- 비고: DTS 열은 시각적으로 하이라이트 (배경 틴트). check/partial/cross 아이콘은 색상으로 구분.

---

### 섹션 5: What DTS Solves (Three Use Cases)
- 원본 위치: use-wrap
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀: "Three Data Problems. <span class='ds-text--brand'>One Engine.</span>"
- 타이틀 강조 키워드: "One Engine."
- 헤더 description: "Data that can't be used, can't be shared, or doesn't exist in sufficient volume -- DTS resolves all three."
- 헤더 정렬: center
- 배경: white
- 사용 컴포넌트: ds-section-header--underline + [G] ds-card-grid--3col + ds-card

**카드 3개:**

**카드 1: Restricted Data**
- badge: ds-card__badge--red "RESTRICTED DATA"
- 번호: "01 / 03" (ds-caption, text-tertiary)
- title: "Privacy-Safe Replacement"
- description: "Sensitive or regulated data blocked by compliance rules. DTS generates a statistically equivalent synthetic dataset -- with no real personal information."
- 체크리스트 (ds-bullet--check):
  - Replace GDPR, PIPA, HIPAA, or CCPA-restricted data with DP-safe synthetic equivalents
  - Differential privacy guarantee on all synthetic output
  - Safe for cross-team, cross-border, and external use
  - Full distribution fidelity preserved

**카드 2: Unusable Data**
- badge: ds-card__badge--teal "UNUSABLE DATA"
- 번호: "02 / 03"
- title: "Coverage & Balance Expansion"
- description: "Data exists but is unfit for AI -- missing rare classes, biased distributions, or insufficient volume for reliable training."
- 체크리스트 (ds-bullet--check):
  - Augment underrepresented classes at scale
  - Fix class imbalance without overfitting
  - Generate edge case and rare event samples
  - Expand small datasets to production-grade volumes

**카드 3: Non-Accessible Data**
- badge: ds-card__badge--red "NON-ACCESSIBLE DATA"
- 번호: "03 / 03"
- title: "Safe Dataset Generation"
- description: "Data exists in a silo -- restricted by access controls, third-party agreements, or geographic regulations -- and can't reach training pipelines."
- 체크리스트 (ds-bullet--check):
  - Generate safe replacement datasets from inaccessible sources
  - Unblock stalled validation and testing workflows
  - Remove data access bottlenecks in regulated environments
  - Maintain statistical characteristics without data transfer

- 반응형:
  - mobile: 1col
  - tablet: 2col (3번째 카드 전폭)
  - sm-desktop+: 3col

---

### 섹션 6: Differential Privacy (How DTS Works)
- 원본 위치: dp-wrap
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀: "Mathematically Guaranteed <span class='ds-text--brand'>Privacy Protection</span>"
- 타이틀 강조 키워드: "Privacy Protection"
- 헤더 description: "Differential privacy (DP) is a mathematical framework that guarantees any single individual's data cannot be identified from the synthetic output -- regardless of what an attacker already knows."
- 헤더 정렬: center
- 배경: white
- 사용 컴포넌트: ds-section-header--underline + [U] ds-step-tabs (4 steps)

**DP 보장 문구 (헤더와 Step Tabs 사이에 배너):**
- ds-banner ds-banner--brand
- "The probability of any inference about an individual from the synthetic dataset is bounded by a mathematically defined epsilon -- regardless of external knowledge."

**Step Tabs (4단계):**

| Tab | 타이틀 | 설명 | 체크리스트 |
|-----|--------|------|-----------|
| 1. Statistical Profiling | Statistical Profiling | DTS analyzes the real dataset's statistical properties -- distributions, correlations, marginals -- without storing raw records. | - |
| 2. DP Noise Injection | DP Noise Injection | Calibrated noise is injected into the statistical model according to DP bounds. Individual data points become mathematically unidentifiable. | - |
| 3. Synthetic Generation | Synthetic Generation | New records are sampled from the DP-protected model. Output is statistically representative but contains no real personal information. | - |
| 4. Fidelity Validation | Fidelity Validation | Generated data is validated against the original distribution. Quality and utility metrics confirm suitability for training and validation use. | - |

- 각 탭 우측: 스크린샷 placeholder `<img src="https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images/screenshot-placeholder.svg" alt="Step N: [Tab Name] screenshot">`
- 추가 텍스트 (DTS applies DP during the generation process itself...): ds-step-tabs 패널 내 description에 포함
- JS: data-step-tabs / data-tab / data-panel 탭 전환 필수

- 반응형:
  - mobile: 탭 가로 스크롤, 패널 1col (텍스트 위 + 스크린샷 아래)
  - sm-desktop+: 탭 중앙 정렬, 패널 5:7 그리드

---

### 섹션 7: Deployment (Standalone or Integrated)
- 원본 위치: int-wrap
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀: "Standalone or Integrated with <span class='ds-text--product'>SynTitan</span>"
- 타이틀 강조 키워드: 없음 (제품명은 ds-text--product)
- 헤더 description: 없음
- 헤더 정렬: center
- 배경: ds-section--light
- 사용 컴포넌트: ds-section-header--underline + [G] ds-card-grid--2col + ds-card

**카드 2개:**

**카드 A: DTS Standalone (Independent)**
- badge: ds-card__badge--brand "MODE A - INDEPENDENT"
- title: "DTS Standalone"
- description: "Use DTS without SynTitan -- directly against your data sources. Available on AWS Marketplace for enterprise procurement."
- 체크리스트 (ds-bullet--check):
  - Fix class imbalance -- oversample minority classes with distribution fidelity
  - Augment sparse datasets to production-grade volume
  - Generate edge cases and rare event samples
  - Replace missing values with statistically valid equivalents
  - Expand narrow training sets without data collection overhead
- 버튼: "AWS Marketplace" -> ds-btn--secondary (외부 링크, target="_blank")
- Gradient card: ds-card--gradient ds-card--gradient-green (DTS = green)

**카드 B: DTS + SynTitan (Integrated)**
- badge: ds-card__badge--brand "MODE B - INTEGRATED"
- title: "DTS + SynTitan"
- description: "When privacy or compliance is the blocker -- regulated data that can't reach models -- DTS runs inside SynTitan to generate privacy-safe replacements. The synthetic dataset is automatically versioned, bound to a Release State, and tracked in the Change Log."
- 체크리스트 (ds-bullet--check):
  - Replace GDPR, PIPA, HIPAA-restricted data -- no original data leaves the perimeter
  - Synthetic datasets versioned and bound to execution states
  - Change log tracks every data generation event
- 버튼: "See SynTitan Platform" -> ds-btn--secondary (href="/syntitan")
- Gradient card: ds-card--gradient ds-card--gradient-purple

**오버랩 노트 (카드 그리드 아래 배너):**
- ds-banner ds-banner--info
- "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine."

- 반응형:
  - mobile: 1col
  - tablet+: 2col

---

### 섹션 8: Enterprise Use Cases (Deployment Scenarios)
- 원본 위치: int-usecases (4개 사례 카드)
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀: "Production <span class='ds-text--brand'>Case Records</span>"
- 타이틀 강조 키워드: "Case Records"
- 헤더 description: "Enterprise AI projects stall when data conditions prevent training, validation, or safe deployment. DTS was built for exactly these situations."
- 헤더 정렬: center
- 배경: white
- 사용 컴포넌트: ds-section-header--underline + [S] ds-ac-card (아코디언)

**아코디언 4개:**

**1. IBK Industrial Bank**
- industry: Finance (dot: ds-color-brand-purple)
- title: "97.6% AI detection rate -- 79 patterns expanded to 1,000 records"
- meta badges: ds-badge--success "Privacy-Safe", ds-badge--purple "DTS Standalone"
- body metrics:
  - 97.6% (AI Detection Rate)
  - 79 -> 1,000 (Records Expanded)
- body text: "IBK expanded 79 fraud/transaction patterns into 1,000+ DP-safe synthetic records using DTS. AI detection rate reached 97.6%. Full PIPA compliance -- zero real customer data accessed or exported. Passed internal audit with no data sovereignty issues."

**2. Kyobo Life Insurance**
- industry: Finance (dot: ds-color-brand-purple)
- title: "F1 0.92 churn model -- 277,249 synthetic records, 6-month deletion policy bypassed"
- meta badges: ds-badge--success "Privacy-Safe", ds-badge--purple "Compliance"
- body metrics:
  - F1 0.92 (Churn Prediction)
  - 277,249 (Synthetic Records)
  - +30pp (F1 Improvement)
- body text: "Kyobo's churn AI was blocked by a 6-month data retention policy. DTS generated 277,249 DP-safe synthetic records from historical data -- legally usable after deletion. Churn F1 reached 0.92. Separately, a top-3 life insurer's VoC AI improved from F1 58.55% to 88.55% (+30pp); deploy time cut from 4 weeks to 1 day."

**3. Marketing / Sales**
- industry: Marketing (dot: ds-color-success)
- title: "90% time reduction -- 70% cost saving on trend research"
- meta badges: ds-badge--success "Cost Reduction"
- body metrics:
  - 90% (Time Reduction)
  - 70% (Cost Saving)
- body text: "Annual consumer trend surveys replaced with AI persona agents trained on synthetic behavioral data. Key insights delivered in 1-2 days (vs. 1+ month), with 70% cost savings by eliminating field collection, incentives, and anonymization steps."

**4. Ministry of National Defense (Korea)**
- industry: Defense (dot: ds-color-error)
- title: "Zero data exports -- Classified imagery converted to AI-ready synthetic datasets"
- meta badges: ds-badge--error "Classified", ds-badge--purple "Zero-Access"
- body metrics:
  - 0 (Data Exports)
- body text: "DTS deployed on-premise in an air-gapped classified environment. Zero-Access Architecture: no original imagery left the secure perimeter. Classified defense data converted to AI-ready synthetic datasets for model training within security clearance requirements."

- 첫 번째 아코디언은 ds-ac--open (기본 열림)
- 반응형:
  - mobile: meta badges 숨김, 1col
  - 1024px+: header grid-template-columns: 160px 1fr auto auto

---

### 섹션 9: Five Signals + Key Concepts + Outcome
- 원본 위치: faq-wrap(두 번째) + key concepts 그리드
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀: "Five Signals Your Data Is <span class='ds-text--brand'>Blocking AI</span>"
- 타이틀 강조 키워드: "Blocking AI"
- 헤더 description: "Enterprise AI projects stall when data conditions prevent training, validation, or safe deployment. DTS was built for exactly these situations."
- 헤더 정렬: center
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-section-header--underline + [J] ds-feature-grid (2col, 6개 항목)

**Feature Grid 항목 (5 signals + 1 outcome):**

| 아이콘 | 타이틀 | 설명 |
|--------|--------|------|
| shield-alert | Data exists but compliance blocks AI access | GDPR, PIPA, HIPAA, or internal retention policies prevent the data from reaching models. DTS generates privacy-safe synthetic replacements -- statistically accurate, legally usable, zero real records exposed. |
| trending-down | Imbalanced datasets or coverage gaps distort model behavior | Rare classes are underrepresented. Fraud patterns are too sparse to learn from. Edge cases never appear in training data. DTS fixes class distribution and generates targeted rare-class coverage. |
| clock | Data retention policies delete what AI needs | Historical data was deleted per retention policy. DTS generates synthetic equivalents from surviving statistical patterns -- without requiring the original data to still be present. |
| lock | Sensitive records can't leave the security perimeter | Classified, patient, or customer data cannot be exported for AI training. DTS's Zero-Access Architecture learns statistical properties in-situ. Only the DP-protected synthetic output crosses the boundary. |
| database | Training data volume is too low for reliable AI | The original dataset is too small to train a robust model. DTS augments existing datasets to production-grade volume -- preserving statistical fidelity while adding the volume AI training requires. |

- Feature Grid: ds-feature-grid (2열, 5개 + 빈 칸 또는 6번째 summary)

**6번째 feature (Outcome summary):**
| sparkles | DTS turns restricted or unusable data into AI-ready datasets | In each case, DTS turns data that is restricted or unusable into an AI-ready dataset -- without exposing real records. |

**CTA 버튼 (Feature Grid 아래):**
- "Start evaluation" -> ds-btn--primary ds-btn--md (href="/contact")
- "See production case records" -> ds-btn--secondary ds-btn--md (href="/proof")
- "Learn: AI-Ready Data Infrastructure" -> ds-btn--secondary ds-btn--md (href="/learn/ai-ready-data-infrastructure")

**Key Concepts (Feature Grid 아래, 카드 3열):**
- ds-card-grid--3col + ds-card
- 카드 1: "Differential Privacy" -- 설명 텍스트 + "Learn more" -> ds-btn--secondary ds-btn--sm (href="/learn/glossary#differential-privacy")
- 카드 2: "Zero-Access Architecture" -- 설명 텍스트 + "Learn more" -> ds-btn--secondary ds-btn--sm (href="/learn/glossary#zero-access")
- 카드 3: "Enterprise Synthetic Data" -- 설명 텍스트 + "Read: AI-Ready Data" -> ds-btn--secondary ds-btn--sm (href="/learn/ai-ready-data-infrastructure")

- 반응형:
  - mobile: feature-grid 1col, card-grid 1col
  - tablet: feature-grid 2col, card-grid 2col
  - sm-desktop+: feature-grid 2col, card-grid 3col

---

### 섹션 10: Certifications & Trust + Partners
- 원본 위치: Hero 하단 trust badges + footer references
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀: "Certified and <span class='ds-text--brand'>Trusted</span>"
- 타이틀 강조 키워드: "Trusted"
- 헤더 description: 없음
- 헤더 정렬: center
- 배경: ds-section--light

**[I-2] Cert Grid (마키):**
DS 공식 인증 목록 전체 사용:
1. Information Security Fast Track / KISA / 2024 / cert-kisa.png
2. GS Certification / TTA / 2025 / cert-gs.png
3. ISO/IEC 27001 (ISMS) / ISO / 2026 / cert-iso.png
4. ISO/IEC 42001 (AIMS) / ISO / 2026 / cert-iso.png
5. Information Security Innovation Award / Ministry of Science & ICT / 2024 / awards-ministry-of-science-and-ict.jpg
6. Startup World Cup -- Finalist / Startup World Cup / 2025 / cert-startupworldcup.png
7. Next Rise -- Global Innovator / Next Rise / 2025 / (no logo)
8. T Challenge 2026 -- Finalist / Deutsche Telekom / 2026 / partner-deutsche-telekom.avif
9. AI EXPO KOREA -- AI Medical Innovation Award / AI EXPO KOREA / 2025 / awards-koreaia.png
10. Emerging AI+X Top 100 / -- / 2026 / (no logo)
11. Representative Vendor, Hyper-Synthetic Data / Gartner / 2025 / cert-gartner.svg.png

- 마키: 우->좌 무한 스크롤, 2벌 복제, hover 시 일시정지
- 이미지: https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/graphics/cert-left.png, cert-right.png (월계관)

**[I] Partner Grid (마키, Cert Grid 아래):**
DS 공식 파트너 11개 전체 사용 (A타입 목록 무시):
- Gartner, Naver Cloud, SK Telecom, Kyobo, ROK Army, ROK Air Force, EUMC, Deutsche Telekom, Claroty, Korea Heritage Service, Ministry of Data and Statistics
- 이미지: https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images/partner-*.avif|png|jpg
- 마키: 우->좌 무한 스크롤, 2벌 복제

- 반응형:
  - mobile: 마키 로고 100px, cert 카드 170px
  - desktop: 로고 120px, cert 카드 200px

---

### 섹션 11: Operational Example (Fraud Detection)
- 원본 위치: Operational Example 블록
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀: "Operational Example: <span class='ds-text--brand'>Fraud Detection</span> with Rare Events"
- 타이틀 강조 키워드: "Fraud Detection"
- 헤더 description: 없음
- 헤더 정렬: center
- 배경: white
- 배경 bg-image 적용 위치: ds-banner--full 내부 (섹션 자체 아님)
- 사용 컴포넌트: ds-section-header--underline + ds-banner--full (강조 배너)

**배너 (ds-banner--full ds-bg--peach):**
- "A financial services team building a fraud detection model found that rare anomaly events were severely underrepresented in training data -- real fraud cases were too few to train a reliable classifier."
- 추가 본문 (배너 아래 ds-body-m): "DTS generated synthetic fraud scenarios using differential privacy, expanding the rare-event class to statistically meaningful coverage. The resulting dataset could not be reverse-engineered to individual records -- satisfying both compliance requirements and model training needs."
- 태그라인 (ds-caption): "Blocker removed: unusable data (imbalanced dataset / rare class underrepresentation)"
- 링크: "See enterprise use cases" -> ds-btn--secondary ds-btn--sm (href="/#enterprise-use-cases")

- 반응형:
  - mobile: padding 축소
  - desktop: 배너 max-width 860px, margin 0 auto

---

### 섹션 12: FAQ
- 원본 위치: faq-wrap(첫 번째)
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀: "Common <span class='ds-text--brand'>Questions</span>"
- 타이틀 강조 키워드: "Questions"
- 헤더 description: 없음
- 헤더 정렬: center
- 배경: ds-section--light
- 사용 컴포넌트: ds-section-header--underline + [P] ds-ac-card 아코디언

**아코디언 6개:**

1. **Q: What is DTS?**
   A: DTS is CUBIG's enterprise synthetic data engine. It generates privacy-safe datasets using differential privacy to fix class imbalance, fill coverage gaps, expand training data, and replace restricted or non-accessible data. DTS runs as a standalone engine or integrates with the SynTitan platform.

2. **Q: What is differential privacy in DTS?**
   A: Differential privacy (DP) is a mathematical framework that guarantees any single individual's data cannot be identified from the synthetic output -- regardless of what an attacker already knows. DTS applies DP during generation to produce datasets that are statistically representative but contain no real personal information.

3. **Q: Can DTS run without SynTitan?**
   A: Yes. DTS is a full standalone enterprise synthetic data engine. It can be deployed and used independently of SynTitan. When used alongside SynTitan, DTS-generated datasets are versioned and bound to Release States for full execution traceability.

4. **Q: What data problems does DTS solve?**
   A: DTS addresses three categories: restricted data that cannot be shared due to privacy or compliance rules; data with coverage gaps or class imbalance that make models unreliable; and non-accessible data that exists but cannot reach training pipelines.

5. **Q: What is Zero-Access Architecture?**
   A: Zero-Access Architecture means original data never leaves the client environment. DTS analyzes statistical properties in-situ, generates a DP-protected synthetic model, and only the synthetic output is used downstream. Raw data is never transferred or accessed externally -- suitable for classified, regulated, and air-gapped environments.

6. **Q: How is DTS different from SynTitan?**
   A: SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine.

- 첫 번째 아코디언 ds-ac--open (기본 열림)
- 반응형: 표준 ds-ac-card 반응형

---

### 섹션 13: CTA Band (Final)
- 원본 위치: final-wrap
- 헤더: CTA Band 내부 구조 사용
- 배경: 배경 이미지 (ds-bg--wave-teal) -- CTA는 전폭 배치
- 사용 컴포넌트: [K] ds-cta-band
- 배치: ds-container 밖 전폭

**CTA Band 내용:**
- 타이틀 (ds-cta-band__title): "Restricted Data. <span class='ds-text--brand-light'>Usable AI.</span>"
- description (ds-cta-band__description): "DTS turns restricted, unusable, and inaccessible enterprise data into privacy-safe synthetic datasets -- without ever moving the original data. GS Certified. KISA approved. Available on AWS Marketplace."
- 버튼:
  - "Run technical demo" -> ds-btn ds-btn--md (CTA band 기본 스타일: 흰색 배경)
  - "See production cases" -> ds-btn ds-btn--md (href="/proof")
  - "Explore SynTitan" -> ds-btn ds-btn--md (href="/syntitan")
- footnote: "30-min review / no sales pitch"
- 텍스트 색상: white (어두운 오버레이)

- 반응형:
  - mobile: 타이틀 40px, 버튼 세로 스택 (max-width 320px)
  - tablet: padding 100px
  - desktop: padding 120px, max-width 1440px

---

## 배경 흐름 (연속성 검증)

| # | 섹션 | 배경 | 배경 이미지 적용 위치 |
|---|------|------|----------------------|
| 1 | Hero | white | 없음 |
| 2 | KPI + Definition | white | ds-kpi-band -> ds-bg--lavender, ds-banner--full -> ds-bg--green-wave |
| 3 | Privacy-Safe Synthetic Data | white | 없음 |
| 4 | DTS vs Other Approaches | surface-light | 없음 |
| 5 | What DTS Solves | white | 없음 |
| 6 | Differential Privacy | white | 없음 |
| 7 | Deployment | surface-light | 없음 |
| 8 | Enterprise Use Cases | white | 없음 |
| 9 | Five Signals + Key Concepts | white | 없음 |
| 10 | Certifications + Partners | surface-light | 없음 |
| 11 | Operational Example | white | ds-banner--full -> ds-bg--peach |
| 12 | FAQ | surface-light | 없음 |
| 13 | CTA Band | bg-image | 섹션 전체 -> ds-bg--wave-teal |

- white 3개 연속 (5, 6, 8~9) 확인: 섹션 6과 7 사이에 surface-light 삽입으로 해결. 8~9는 연속이지만 8이 아코디언(시각적 변화 큼) + 9가 feature-grid(시각적 변화 큼)로 충분히 구분됨.
- 배경 이미지 중복 없음: lavender(KPI), green-wave(배너), peach(배너), wave-teal(CTA) 각각 1회씩.

---

## 레이아웃 다양성 검증

| # | 컴포넌트 패턴 |
|---|--------------|
| 1 | [A] Hero text-only |
| 2 | [F] KPI band + [Q] Banner full |
| 3 | Text block + [Q] Banner |
| 4 | [O] Table (5col) |
| 5 | [G] Card grid 3col |
| 6 | [U] Step tabs (4 steps) |
| 7 | [G] Card grid 2col (gradient) |
| 8 | [S] Accordion list |
| 9 | [J] Feature grid + [G] Card grid 3col |
| 10 | [I-2] Cert grid + [I] Partner grid (marquee) |
| 11 | [Q] Banner full |
| 12 | [P] Accordion (FAQ) |
| 13 | [K] CTA band |

- ds-grid--1 연속 없음.
- 레이아웃 다양성 확보됨.

---

## 제품명 폰트 규칙 확인
- DTS -> `<span class="ds-text--product">DTS</span>` (Oxanium)
- SynTitan -> `<span class="ds-text--product">SynTitan</span>` (Oxanium)
- h1/h2/h3/데이터 수치: 모두 DM Sans (var(--ds-font-base))
- KPI 수치: ds-kpi-band__number (DM Sans bold)

---

## 외부 링크 버튼 확인
- AWS Marketplace -> ds-btn--secondary (target="_blank")
- syntitan.ai / SynTitan Platform -> ds-btn--secondary (href="/syntitan")
- Learn more (Glossary) -> ds-btn--secondary ds-btn--sm
- Read: AI-Ready Data -> ds-btn--secondary ds-btn--sm
- See enterprise use cases -> ds-btn--secondary ds-btn--sm

---

## 위임 지시
frontend-dev 에이전트에게 전달:
"output/docs/cubig-dts-v3-spec.md를 기반으로 output/cubig-dts-v3-b-type.html을 생성해줘."
