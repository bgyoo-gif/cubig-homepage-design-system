# Design Spec: cubig-learn-prompt-data-leakage
생성일: 2026-03-20
분석한 원본: input/cubig-learn-prompt-data-leakage.html

## 전체 구조 요약
- 섹션 수: 8개
- 문서 성격: 교육/설명 (Learn 아티클 — Secure LLM Usage 시리즈)
- 톤앤매너: 기술 전문가 대상, 정보 전달 중심, 설득적 CTA로 마무리
- 특이사항: 아티클/교육 콘텐츠이므로 section-header는 --left 정렬 기본. 레이아웃 단조로움 방지를 위해 테이블, 체크리스트, 배너, 카드 등 다양한 컴포넌트 교차 배치.

## 사용자 특별 규칙
- eyebrow: 전면 금지 (모든 섹션에서 삭제)
- description max-width: 반응형 (mobile 100% / tablet+ 720px / desktop 860px)
- 코드블록: 다크 테마 (border: none) -- DS 기본값 준수
- 카드 내 코드블록 앞 divider: 금지

---

## 섹션별 설계

### 섹션 1: Hero (Text-only)
- 패턴: [A] Hero text-only — ds-hero--text-only
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀 (h1): "Prompt Data Leakage in Enterprise LLM Usage: PII, Compliance, and the Inline Protection Gap"
- 타이틀 강조 키워드: "Prompt Data Leakage" -- `ds-text--brand` 적용
- 헤더 description: "Enterprise documents contain PII and regulated data. When they enter LLM prompts without protection, sensitive information reaches external APIs the organization doesn't control. Learn what prompt data leakage is and what effective protection requires."
- 헤더 정렬: left
- 배경: white (배경 이미지 금지 -- Hero text-only 규칙)
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-hero--text-only, ds-hero__title, ds-hero__description
- 그리드: 없음
- breadcrumb: Learn > Secure LLM Usage -- 원문 breadcrumb 유지, ds-caption 스타일 적용
- 반응형 설계:
  - mobile (375px): title 24px, description 100% width, padding 100px 16px 48px
  - tablet (768px): title 28px, description max-width 720px
  - sm-desktop (1024px): title 32px, description max-width 720px
  - desktop (1440px): title 36px, description max-width 860px
- 비고: Hero에는 eyebrow 사용 금지. padding-top 100px 고정. 원문의 geo-def(정의 박스)는 섹션 2의 배너로 이동.

---

### 섹션 2: 도입부 — "The Fundamental Tension"
- 패턴: [Q] Banner/callout — ds-banner
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀: 없음 (도입 단락이므로 별도 섹션 헤더 없이 본문으로 직행)
- 타이틀 강조 키워드: 없음
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트:
  1. ds-body-l (리드 텍스트, 2문장): "Your team built an enterprise AI workflow. Then someone noticed internal customer records were reaching an external API."
  2. ds-body-m (본문 단락 2개):
     - "Enterprise LLM usage has a fundamental tension: the documents and data that make LLM responses useful are often the same data that should never leave the organization. Customer records, financial data, clinical notes, legal contracts -- all contain PII and sensitive fields that compliance teams prohibit from reaching external APIs."
     - "Without an inline protection layer, every LLM interaction involving enterprise documents is a potential data exposure event."
  3. ds-banner--full + ds-bg--wave-teal (정의 배너):
     - 텍스트: "Prompt data leakage occurs when **sensitive fields -- PII, financial identifiers, health information, or regulated data** -- enter LLM prompts without detection or anonymization, reaching external model APIs that the organization does not control. The exposure may be invisible from the inside."
     - 텍스트 색상: text-primary (검정 -- 밝은 오버레이이므로)
- 그리드: ds-grid--1
- 반응형 설계:
  - mobile (375px): 1col, padding 16px
  - tablet (768px): 1col, padding 32px
  - sm-desktop (1024px): 1col
  - desktop (1440px): max-width 1200px
- 비고: 원문의 두 리드 문장은 의미가 중복됨. 두 번째 문장("Your team built...")만 채택. 첫 번째("You built...")는 중복이므로 제거하되, 원본 충실성을 위해 둘 다 유지 -- frontend-dev가 판단. 정의 callout은 ds-banner--full로 승격하여 시각적 변화 부여.

---

### 섹션 3: Where Sensitive Data Enters LLM Workflows
- 패턴: [D] Section Header + [L] Checklist -- ds-bullet--check
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀: "Where Sensitive Data Enters LLM Workflows"
- 타이틀 강조 키워드: "Sensitive Data" -- `ds-text--brand` 적용
- 헤더 description: "Sensitive data enters LLM prompts through multiple paths -- most of them unintentional:"
- 헤더 정렬: left
- 헤더 스타일: ds-section-header--underline ds-section-header--left
- 배경: surface-light (ds-section--light)
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-bullet ds-bullet--check (5개 항목)
- 체크리스트 항목:
  1. **Document embedding:** Full document content sent as context includes embedded PII
  2. **RAG pipelines:** Retrieval-augmented generation pulls relevant chunks that may contain sensitive fields
  3. **User-provided context:** End users paste content from enterprise systems directly into prompts
  4. **Automated workflows:** LLM-powered automation processes documents without field-level filtering
  5. **Log and audit data:** System logs containing user identifiers passed as context for analysis
- 그리드: ds-grid--1 (5개 항목이므로 1열 체크리스트)
- 반응형 설계:
  - mobile (375px): 1col, padding 16px
  - tablet (768px): 1col, description max-width 720px
  - sm-desktop (1024px): 1col, description max-width 720px
  - desktop (1440px): description max-width 860px
- 비고: 항목 5개이므로 1열 체크리스트가 적절. 각 항목에서 bold 부분은 `<strong>` 처리.

---

### 섹션 4: Compliance Exposure by Regulation
- 패턴: [D] Section Header + [O] Table -- ds-table--3col
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀: "Compliance Exposure by Regulation"
- 타이틀 강조 키워드: "Compliance Exposure" -- `ds-text--brand` 적용
- 헤더 description: 없음 (테이블이 바로 따라옴)
- 헤더 정렬: left
- 헤더 스타일: ds-section-header--underline ds-section-header--left
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트:
  1. ds-table-wrap + ds-table ds-table--3col
  2. ds-body-m (테이블 아래 설명 단락)
- 테이블 구조:
  - 헤더: Regulation | Protected Data Category | LLM Risk
  - 행 5개:
    1. GDPR (Article 25) | EU personal data -- names, identifiers, location | Transmission to non-EU processor without consent
    2. HIPAA | Protected Health Information (PHI) | PHI in prompts to commercial LLM APIs
    3. CCPA | California consumer personal information | Unauthorized sharing with third-party processors
    4. PIPA (Korea) | Personal information including behavioral data | Cross-border transmission without data subject consent
    5. Financial regulations | Account numbers, transaction data, credit information | Financial data in external LLM API calls
  - 테이블 아래 본문: "In each case, the organization sending data to a commercial LLM API is the data controller. They remain liable for how that data is processed -- even if the LLM provider has privacy policies in place."
- 그리드: 없음 (테이블은 자체 레이아웃)
- 반응형 설계:
  - mobile (375px): ds-table-wrap overflow-x auto, 수평 스크롤
  - tablet (768px): 테이블 풀 width
  - sm-desktop (1024px): 테이블 풀 width
  - desktop (1440px): 테이블 풀 width
- 비고: 테이블은 ds-table-wrap으로 감싸서 모바일 수평 스크롤 지원

---

### 섹션 5: What Effective PII Protection Requires
- 패턴: [D] Section Header + [G] Card Grid 1col -- ds-card (5개 카드)
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀: "What Effective PII Protection for LLM Workflows Requires"
- 타이틀 강조 키워드: "PII Protection" -- `ds-text--brand` 적용
- 헤더 description: "Effective protection requires more than an API policy or end-user training. It requires an inline detection and anonymization layer that operates at the point of LLM interaction."
- 헤더 정렬: left
- 헤더 스타일: ds-section-header--underline ds-section-header--left
- 배경: surface-light (ds-section--light)
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-card-grid ds-card-grid--2col + ds-card (5개 카드)
  - 각 카드 구조: ds-card__icon (Lucide 아이콘) + ds-card__title--sm + ds-card__description
  - 카드 1: icon=scan, title="Detection Before Transmission", desc="Sensitive fields identified and flagged before the prompt reaches the external API"
  - 카드 2: icon=eye-off, title="Anonymization That Preserves Usability", desc="Fields replaced with tokens or pseudonyms -- not simply redacted -- so LLM output remains actionable"
  - 카드 3: icon=shuffle, title="Output Re-mapping", desc="Anonymized tokens in LLM outputs mapped back to real identifiers for downstream use -- within the organization's secure perimeter"
  - 카드 4: icon=clipboard-list, title="Audit Trail", desc="Every anonymization operation logged for compliance and incident response"
  - 카드 5: icon=brain, title="Context Preservation", desc="The semantic meaning of anonymized content preserved so LLM performance is not degraded"
- 그리드: ds-card-grid--2col (5개 카드 -> 2x2 + 1)
- 반응형 설계:
  - mobile (375px): 1col
  - tablet (768px): 2col
  - sm-desktop (1024px): 2col
  - desktop (1440px): 2col
- 비고: 원문은 체크리스트지만 섹션 3과 동일 패턴(체크리스트) 반복을 피하기 위해 카드 그리드로 변환. 레이아웃 다양성 확보. description에서 "inline detection and anonymization layer"는 `<strong>` 처리.

---

### 섹션 6: FAQ
- 패턴: [P] FAQ -- ds-grid--1 + ds-card
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀: "Frequently Asked Questions"
- 타이틀 강조 키워드: 없음
- 헤더 description: 없음
- 헤더 정렬: left
- 헤더 스타일: ds-section-header--underline ds-section-header--left
- 배경: white
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-grid--1, ds-card (5개 FAQ 카드)
- FAQ 항목 (5개):
  1. Q: "What is prompt data leakage in enterprise LLM usage?"
     A: "Prompt data leakage occurs when sensitive fields -- PII, PHI, financial identifiers, or regulated data -- enter LLM prompts without detection or anonymization, reaching external model APIs that the organization does not control. It is often invisible from the inside and creates compliance exposure regardless of LLM provider policies."
  2. Q: "Why do LLM API privacy policies not protect organizations from data leakage risk?"
     A: "Privacy policies describe how a vendor handles data they receive. They do not prevent the organization from transmitting data it shouldn't transmit, and they do not eliminate the organization's liability as the data controller. The exposure occurs at the point of transmission -- before any vendor policy applies."
  3. Q: "What regulations are most relevant to LLM data leakage risk?"
     A: "GDPR Article 25 (data minimization and privacy by design), HIPAA (PHI in prompts to commercial APIs), CCPA, PIPA, and financial data regulations. In each case, the organization sending data to an external LLM API retains liability as the data controller."
  4. Q: "How does anonymization for LLM usage differ from standard data masking?"
     A: "Standard data masking removes or replaces sensitive fields permanently, often destroying downstream usability. LLM anonymization must preserve semantic meaning -- replacing a patient name with a consistent token that the LLM can refer to coherently -- and must re-map those tokens in LLM outputs for downstream use within the secure perimeter."
  5. Q: "What is the difference between LLM Capsule and traditional data anonymization?"
     A: "LLM Capsule operates inline at the point of LLM interaction -- detecting sensitive fields in prompts, anonymizing before transmission, and re-mapping tokens in outputs. Traditional anonymization is a batch process applied before data storage. LLM Capsule is designed for real-time, workflow-integrated protection that preserves LLM output usability."
- 그리드: ds-grid--1
- 반응형 설계:
  - mobile (375px): 1col, padding 16px
  - tablet (768px): 1col
  - sm-desktop (1024px): 1col
  - desktop (1440px): max-width 1200px
- 비고: Q는 ds-card__title--sm (h3), A는 ds-card__description. 제품명 "LLM Capsule"에 ds-text--product 적용.

---

### 섹션 7: Where to Go Next (Dark Link Cards)
- 패턴: [R] Dark link cards -- ds-card--dark
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀: 없음 (섹션 내부 라벨로 대체: "Where to go next")
- 타이틀 강조 키워드: 없음
- 배경: dark (ds-section--dark)
- 배경 bg-image 적용 위치: 없음
- 사용 컴포넌트: ds-section--dark 내부에 ds-grid--1, ds-card--dark (4개)
- 링크 카드:
  1. "Explore LLM Capsule -- inline PII protection for enterprise LLM usage" -> /llm-capsule
  2. "Explore SynTitan -- secure LLM workflows within execution stability" -> /llm-capsule
  3. "Explore DTS -- for dataset-level restricted data replacement" -> /dts
  4. "Read: Why AI Fails After Deployment" -> /learn/why-ai-fails-after-deployment
- 그리드: ds-grid--1 (세로 스택)
- 반응형 설계:
  - mobile (375px): 1col, full width
  - tablet (768px): 1col
  - sm-desktop (1024px): 1col
  - desktop (1440px): max-width 1200px
- 비고: 라벨 텍스트 "Where to go next"는 ds-caption 스타일, 흰색 40% 불투명도. 제품명 LLM Capsule, SynTitan, DTS에 ds-text--product 적용.

---

### 섹션 8: CTA Band
- 패턴: [K] CTA Band -- ds-cta-band
- 헤더 eyebrow: 없음 (금지)
- 헤더 타이틀 (CTA 타이틀): "Enterprise AI doesn't have to break here."
- 타이틀 강조 키워드: 없음
- 배경: 배경 이미지 (ds-bg--lavender)
- 배경 bg-image 적용 위치: ds-cta-band 자체
- 사용 컴포넌트: ds-cta-band + ds-cta-band__inner
  - ds-cta-band__title: "Enterprise AI doesn't have to break here."
  - ds-cta-band__description: "CUBIG builds the infrastructure layer that removes these exact problems -- restricted data, unusable data, unstable execution -- from production AI."
  - ds-cta-band__actions:
    - Primary: "Explore LLM Capsule" -> /llm-capsule (ds-btn ds-btn--md)
    - Secondary: "Talk to our engineers" -> mailto:contact@cubig.ai (ds-btn ds-btn--md)
  - ds-cta-band__footnote: "30-min review . no sales pitch"
- 그리드: 없음 (CTA band는 자체 레이아웃)
- 반응형 설계:
  - mobile (375px): title 40px, 버튼 세로 스택, padding 80px 16px
  - tablet (768px): title 50px, padding 100px 32px
  - sm-desktop (1024px): inner max-width 720px
  - desktop (1440px): title 64px, inner max-width 860px, padding 120px 120px
- 비고: 전폭 배치 (ds-container 밖). 원문의 "Where CUBIG fits" callout과 CTA 섹션을 합쳐서 하나의 CTA band로 통합. 텍스트 흰색. LLM Capsule에 ds-text--product 적용 (버튼 텍스트 내에서는 적용하지 않음 -- 버튼은 일반 폰트 유지).

---

## 배경 흐름 요약

| 섹션 | 배경 | bg-image 위치 |
|------|------|---------------|
| 1. Hero | white | 없음 |
| 2. 도입부 | white | ds-banner--full에 ds-bg--wave-teal |
| 3. Sensitive Data Entry | surface-light | 없음 |
| 4. Compliance Table | white | 없음 |
| 5. PII Protection | surface-light | 없음 |
| 6. FAQ | white | 없음 |
| 7. Dark Links | dark | 없음 |
| 8. CTA Band | bg-image | ds-cta-band에 ds-bg--lavender |

배경 이미지 사용: ds-bg--wave-teal (배너), ds-bg--lavender (CTA) -- 중복 없음, 2개만 사용.

## 레이아웃 단조로움 방지 검증
- ds-grid--1 연속: 섹션 2(grid-1) -> 섹션 3(grid-1 체크리스트) -> 섹션 4(테이블) -> 섹션 5(grid-2col 카드) -- OK, 3연속 회피됨
- 컴포넌트 다양성: 본문+배너, 체크리스트, 테이블, 카드그리드, FAQ, 다크카드, CTA -- 7종 사용

## 추가 구현 노트
- 원문 nav/footer는 B타입 DS nav/footer로 교체
- structured data (JSON-LD)는 원본 그대로 유지
- meta 태그는 원본 그대로 유지
- "LLM Capsule" 제품명에는 ds-text--product 적용 (Oxanium 폰트)
- "SynTitan", "DTS" 제품명에도 ds-text--product 적용
- description max-width 반응형: mobile 100% -> 1024px 720px -> 1440px 860px (DS 기본값 일치 확인 완료)
- 코드블록은 이 아티클에 해당 없음 (코드 예시 없는 콘텐츠)
