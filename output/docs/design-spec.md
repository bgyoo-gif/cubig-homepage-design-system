# Design Spec: A-cubig-learn-prompt-data-leakage.html
생성일: 2026-03-13
분석한 원본: /Users/yubogeum/cubig-homepage/input/A-cubig-learn-prompt-data-leakage.html

---

## 전체 구조 요약
- 섹션 수: 9개 (Hero 포함)
- 문서 성격: 교육/설득 (기술 개념 설명 후 제품 연결)
- 톤앤매너: 전문적 정보 전달, 엔터프라이즈 의사결정자 대상
- 특이사항: FAQ 섹션에 schema.org FAQPage 마크업 포함, 원문 유지 필요. CTA 섹션이 2개(Bridge Links + Bottom CTA) 존재.

---

## 섹션별 설계

### 섹션 1: Hero (페이지 상단)
- **원문 내용 요약:** "Prompt Data Leakage in Enterprise LLM Usage: PII, Compliance, and the Inline Protection Gap" 제목과 서브 설명, 정의 박스 포함.
- **콘텐츠 유형:** 텍스트 설명형 + 인용/강조형
- **구성 요소:**
  - Breadcrumb: `Learn > Secure LLM Usage - P2`
  - Tag/Badge: `Secure LLM Usage - P2` (ds-badge--primary)
  - H1: 메인 제목 (ds-h1, --ds-font-base, weight 700)
  - 서브 텍스트: Body-L
  - 정의 박스: ds-banner (border-left 강조, --ds-banner-color: var(--ds-color-brand-500))
    - 내용: "True AI-ready data means it is usable, privacy-safe, and stable for production execution."
    - `usable`, `privacy-safe`, `stable for production execution` 을 --ds-color-brand-500 색상으로 강조
- **그리드:** ds-grid--1 (단일 컬럼)
- **반응형 설계:**
  - mobile: padding 16px, H1 24px
  - tablet: padding 32px, H1 28px
  - desktop: padding 120px, H1 36px, max-width 860px 유지
- **비고:** hero-wrap 배경은 var(--ds-color-white), 하단 border 1px solid var(--ds-color-gray-200)

---

### 섹션 2: 도입부 (Introduction)
- **원문 내용 요약:** 엔터프라이즈 AI 워크플로에서 내부 데이터가 외부 API로 전송되는 문제를 소개. "What prompt data leakage means" 정의 callout 포함.
- **콘텐츠 유형:** 텍스트 설명형 + 인용/강조형
- **구성 요소:**
  - 리드 텍스트 2개: Body-L (font-weight 500, --ds-color-gray-900)
    - "You built an enterprise AI workflow. Then you discovered it was sending internal data to an external API."
    - "Your team built an enterprise AI workflow. Then someone noticed internal customer records were reaching an external API."
  - 본문 텍스트 2개: Body-M (--ds-color-gray-600)
  - Callout 박스: ds-banner
    - label: "// What prompt data leakage means" (Caption, --ds-font-code, uppercase, --ds-color-brand-500)
    - 내용 전문 그대로 유지
    - --ds-banner-color: var(--ds-color-brand-500)
    - --ds-banner-bg: var(--ds-color-banner-info-bg)
- **그리드:** ds-grid--1
- **반응형 설계:**
  - 전 breakpoint 단일 컬럼
  - mobile: ds-banner padding sm/md
  - tablet+: ds-banner padding md/lg
- **비고:** 없음

---

### 섹션 3: Where sensitive data enters LLM workflows
- **원문 내용 요약:** 민감 데이터가 LLM 프롬프트에 유입되는 5가지 경로를 체크리스트로 나열.
- **콘텐츠 유형:** 리스트/목록형
- **사용 컴포넌트:**
  - H2: 섹션 제목 (ds-h2)
  - Body-M: 도입 설명 1줄
  - ds-bullet--check x 5개 (각 항목의 bold 제목 + 설명 텍스트)
    - Document embedding
    - RAG pipelines
    - User-provided context
    - Automated workflows
    - Log and audit data
- **그리드:** ds-grid--1 (목록이므로 단일 컬럼)
- **강조 처리:** 각 bullet의 제목(strong) 부분을 font-weight 600, --ds-color-gray-900으로 처리
- **반응형 설계:**
  - 전 breakpoint 단일 컬럼 유지
  - bullet 항목 간 border-bottom 1px solid var(--ds-color-gray-200)
- **비고:** 없음

---

### 섹션 4: Compliance exposure by regulation
- **원문 내용 요약:** GDPR, HIPAA, CCPA, PIPA, Financial regulations 별 보호 데이터 카테고리와 LLM 리스크를 표로 정리.
- **콘텐츠 유형:** 비교/대조형 (테이블)
- **사용 컴포넌트:**
  - H2: 섹션 제목 (ds-h2)
  - 테이블 컴포넌트 (ds-table 필요 -- 디자인 시스템에 없음, 아래 추가 정의)
    - 3열: Regulation / Protected data category / LLM risk
    - 5행: GDPR, HIPAA, CCPA, PIPA, Financial regulations
  - Body-M: 후속 설명 1단락 (data controller 책임 강조)
- **그리드:** ds-grid--1
- **테이블 스타일 정의 (누락 컴포넌트):**
  ```
  .ds-table: 디자인 시스템에 테이블 컴포넌트 미정의
  대안: 카드 기반 레이아웃 대신, 원문의 테이블 구조를 유지하되 DS 변수 적용
  - thead: font-family --ds-font-code, font-size 11px, letter-spacing 0.08em, uppercase, --ds-color-gray-400, border-bottom 2px solid --ds-color-gray-200
  - td: Body-S (14px), --ds-color-gray-600, padding --ds-space-md, border-bottom 1px solid --ds-color-gray-200
  - td:first-child: font-weight 600, --ds-color-gray-900
  ```
- **반응형 설계:**
  - desktop: 3열 테이블 그대로 표시
  - tablet: 3열 유지하되 font-size 축소
  - mobile (375px): 가로 스크롤 wrapper (overflow-x: auto) 또는 카드 스택 변환
    - 권장: overflow-x: auto wrapper로 테이블 가로 스크롤 허용 (min-width: 560px)
- **추가 필요 컴포넌트:** ds-table (design-system에 미정의 -- 본 명세서 내 인라인 정의로 대체)
- **비고:** 테이블은 DS에 없으나, 정보 비교형 데이터 특성상 테이블이 최적. DS 변수만 사용하여 스타일 정의.

---

### 섹션 5: What effective PII protection for LLM workflows requires
- **원문 내용 요약:** 효과적인 PII 보호를 위한 5가지 요구사항을 체크리스트로 나열. 인라인 탐지/익명화 레이어 필요성 강조.
- **콘텐츠 유형:** 리스트/목록형
- **사용 컴포넌트:**
  - H2: 섹션 제목 (ds-h2)
  - Body-M: 도입 설명 1단락 ("inline detection and anonymization layer" 부분 strong 처리)
  - ds-bullet--check x 5개
    - Detection before transmission
    - Anonymization that preserves usability
    - Output re-mapping
    - Audit trail
    - Context preservation
- **그리드:** ds-grid--1
- **강조 처리:** 각 bullet 제목(strong)을 font-weight 600, --ds-color-gray-900
- **반응형 설계:** 섹션 3과 동일
- **비고:** 없음

---

### 섹션 6: FAQ (Frequently Asked Questions)
- **원문 내용 요약:** 5개의 Q&A. prompt data leakage 정의, API 정책 한계, 관련 규정, 익명화 차이, LLM Capsule vs 전통 익명화 비교.
- **콘텐츠 유형:** 리스트/목록형 (Q&A)
- **사용 컴포넌트:**
  - Eyebrow 라벨: "Frequently Asked Questions" (Caption, --ds-font-code, uppercase, --ds-color-brand-500)
  - FAQ 항목 x 5: 각각 ds-card 내부에 Q(H4) + A(Body-S) 구성
    - Q: font-weight 600, --ds-color-gray-900
    - A: --ds-color-gray-600, line-height 1.7
    - 항목 간 border-bottom 1px solid --ds-color-gray-200
- **그리드:** ds-grid--1
- **반응형 설계:**
  - 전 breakpoint 단일 컬럼
  - 배경: --ds-color-gray-100
  - padding: mobile 48px 16px / tablet 72px 32px / desktop 72px, max-width 860px
- **비고:** schema.org FAQPage 구조화 데이터는 head의 ld+json에서 유지. HTML 구조에 itemscope/itemprop 추가 불필요 (JSON-LD 방식).

---

### 섹션 7: Bridge Links (Where to go next)
- **원문 내용 요약:** 4개의 다음 단계 링크 (LLM Capsule, SynTitan, DTS, Why AI Fails After Deployment).
- **콘텐츠 유형:** 리스트/목록형 (네비게이션)
- **사용 컴포넌트:**
  - 섹션 배경: --ds-color-gray-900 (다크 배경)
  - Eyebrow 라벨: "// Where to go next" (Caption, --ds-font-code, uppercase, rgba(255,255,255,0.4))
  - 링크 카드 x 4: ds-card 변형 (다크 테마)
    - 배경: transparent
    - border: 1px solid rgba(255,255,255, 0.12)
    - 텍스트: --ds-color-white, Body-M, font-weight 500
    - 화살표: --ds-font-code, --ds-color-brand-500
    - hover: border-color rgba(255,255,255, 0.3), background rgba(255,255,255, 0.04)
- **그리드:** ds-grid--1 (세로 스택)
- **반응형 설계:**
  - 전 breakpoint 단일 컬럼
  - mobile: padding 48px 16px
  - tablet+: padding 56px 32px
  - max-width 860px
- **비고:** 다크 배경 섹션이므로 모든 텍스트/보더 색상을 white 계열로 오버라이드. DS 변수 중 --ds-color-gray-900을 배경으로 사용.

---

### 섹션 8: Where CUBIG fits (제품 포지셔닝)
- **원문 내용 요약:** CUBIG이 Databricks/Snowflake와 AI 사이의 인프라 레이어임을 설명하는 간결한 callout.
- **콘텐츠 유형:** 인용/강조형
- **사용 컴포넌트:**
  - ds-banner
    - --ds-banner-color: var(--ds-color-brand-500)
    - --ds-banner-bg: var(--ds-color-gray-100)
    - label: "// Where CUBIG fits" (Caption, --ds-font-code, uppercase, --ds-color-gray-400)
    - 본문: Body-S, --ds-color-gray-600
    - strong 부분: --ds-color-gray-900
    - 링크 "See how": --ds-color-brand-500
- **그리드:** ds-grid--1
- **반응형 설계:**
  - 전 breakpoint 단일 컬럼
  - ds-container 내부 배치
- **비고:** 없음

---

### 섹션 9: Bottom CTA (Remove this blocker from your stack)
- **원문 내용 요약:** "Enterprise AI doesn't have to break here." 메시지와 LLM Capsule 탐색 + 엔지니어 상담 2개 CTA 버튼.
- **콘텐츠 유형:** 텍스트 설명형 + CTA
- **사용 컴포넌트:**
  - Eyebrow 라벨: "// Remove this blocker from your stack" (Caption, --ds-font-code, uppercase, --ds-color-brand-500)
  - H2: "Enterprise AI doesn't have to break here." (ds-h2, font-weight 700)
  - Body-M: 설명 1단락, --ds-color-gray-600, max-width 560px
  - 버튼 그룹 (flex-wrap):
    - ds-btn--primary: "Explore LLM Capsule" (gradient 배경: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a), border-radius: --ds-radius-full)
    - ds-btn--secondary: "Talk to our engineers" (border 1px solid --ds-color-gray-200, border-radius: --ds-radius-full)
- **그리드:** ds-grid--1
- **반응형 설계:**
  - mobile: 버튼 flex-direction column, width 100%
  - tablet+: 버튼 flex-direction row, auto width
  - 상단 border-top 1px solid --ds-color-gray-200
  - max-width 760px
- **비고:** Primary 버튼에 브랜드 그라디언트 사용 (DS 표준 --ds-color-brand-500 단색이 아님). 원문 그대로 유지.

---

## 공통 레이아웃 규칙

### Container
- 모든 섹션은 `.ds-container` 래퍼 사용
- article 콘텐츠 영역 max-width: 860px (원문 유지)
- CTA 섹션 max-width: 760px

### Navigation (Nav)
- 원문의 nav 구조 그대로 유지
- position: fixed, top: 0, z-index: 100
- 배경: rgba(255,255,255,0.92) + backdrop-filter blur(20px)
- 높이: 58px
- DS 변수 적용: border-bottom 1px solid var(--ds-color-gray-200)
- 반응형: mobile에서 햄버거 메뉴 전환 필요 (원문에는 미구현, 최소한 nav-links를 display:none 처리)

### Footer
- 원문의 footer 구조 그대로 유지
- DS 변수로 색상/간격만 치환
- 반응형: mobile에서 flex-direction: column

### SEO/메타
- 원문의 모든 meta 태그, canonical, og, twitter, schema.org JSON-LD 그대로 유지
- title, description 변경 없음

---

## 누락 컴포넌트 목록

| 컴포넌트 | 상태 | 대응 방안 |
|----------|------|----------|
| ds-table (테이블) | DS 미정의 | 섹션 4에서 DS 변수 기반 인라인 정의로 대체. .ds-table 클래스로 구현. |
| ds-faq (FAQ 아코디언) | DS 미정의 | 아코디언 불필요 (원문도 펼침 상태). ds-card + border-bottom 조합으로 구현. |
| dark section variant | DS 미정의 | 섹션 7에서 --ds-color-gray-900 배경 + white 텍스트로 인라인 오버라이드. |

> 위 누락 컴포넌트들은 모두 기존 DS 변수를 조합하여 구현 가능하므로, design-system-agent 호출 없이 진행합니다.

---

## 반응형 breakpoint 체크리스트

| Breakpoint | 주요 변경 사항 |
|------------|--------------|
| mobile (375px) | 1열 레이아웃, H1 24px, padding 16px, 테이블 가로 스크롤, CTA 버튼 세로 스택, nav 링크 숨김 |
| tablet (768px) | 1열 유지, H1 28px, padding 32px, 테이블 표시 개선 |
| sm-desktop (1024px) | 1열 유지, H1 32px, H2 24px |
| desktop (1440px) | 1열 유지 (max-width 860px), H1 36px, H2 28px, padding 120px, 카드 padding 32px |
| wide (1920px) | desktop과 동일, H1 40px, 콘텐츠 중앙 정렬 |

---

## Frontend Dev 전달 지시사항

1. 본 명세서(`output/design-spec.md`)를 기반으로 `output/b-type.html`을 생성할 것.
2. 원문의 모든 텍스트 콘텐츠를 1글자도 수정/축약하지 않고 그대로 사용할 것.
3. 원문의 모든 SEO 메타 태그, JSON-LD 구조화 데이터를 head에 그대로 포함할 것.
4. 모든 스타일은 CSS 변수 기반으로 작성하고, 하드코딩 색상/크기 금지 (브랜드 그라디언트 예외).
5. Mobile-first로 작성하고, 5단계 breakpoint를 모두 반영할 것.
6. `.ds-` 접두사 클래스 네이밍을 사용할 것.
7. 인라인 스타일 사용 금지 (CSS 변수 인라인 전달 제외).
8. 폰트는 design-system.md의 Font System을 따를 것 (DM Sans, Pretendard, Fragment Mono 등).
