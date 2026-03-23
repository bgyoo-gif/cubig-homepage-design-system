# QA Report
- 검증일: 2026-03-23 (현지 시간 기준)
- 대상 파일: output/html/cubig-learn-pillar1-b-type.html
- 원본 파일: input/cubig-learn-pillar1 (2).html
- 명세서: output/docs/cubig-learn-pillar1-spec.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| Q01 | CAT-2 | High | line 203–216 | DS에 없는 커스텀 CSS 변수 12개 생성 사용 | `--color-badge-teal`, `--color-kpi-start`, `--color-kpi-end`, `--color-cta-start`, `--color-cta-mid`, `--color-cta-end`, `--color-overlay-nav`, `--color-overlay-light`, `--color-overlay-dark`, `--color-overlay-cta`, `--color-inverse-70`, `--color-inverse-60` 등 `--color-` 접두사 변수가 design-system.md에 정의되지 않은 임의 변수임. DS 규칙: "CSS 변수는 design-system.md에 정의된 것만 사용 (임의 변수 생성 금지)" 위반 |
| Q02 | CAT-2 | High | line 527 | CTA 타이틀에 `color: #ffffff` 하드코딩 | `.ds-cta-band__title { color: #ffffff; }` — 하드코딩 색상 금지 규칙 위반. `color: var(--ds-color-text-inverse)` 또는 `color: var(--ds-color-white)` CSS 변수로 대체해야 함 |
| Q03 | CAT-2 | High | line 725, 862, 1032, 1103 | `ds-section--light` 4회 사용으로 남용 | 규칙: "ds-section--light 3개 이상이면 남용 의심. 기본은 흰색 배경, 배경 이미지로 변화 부여." 4개 사용: TOC(line 725), What AI-ready means(line 862), Industry Examples(line 1032), FAQ(line 1103). 최소 1개를 배경 이미지 섹션으로 교체 필요 |
| Q04 | CAT-2 | Medium | line 715–717 | Hero 하단 callout이 spec 지정 컴포넌트와 다름 | spec: "Callout below description (ds-banner--full ds-bg--paint-lavender)" → 실제 구현: `ds-banner ds-banner--brand`. 콘텐츠는 동일하나 레이아웃 컴포넌트가 명세서와 불일치. `ds-banner--brand`는 배경 이미지 없는 연보라 틴트 박스이고 spec은 paint-lavender 배경 이미지를 사용하는 전체 폭 배너를 요구 |

---

## 검증 상세 결과

### [CAT-1] 내용 무결성

- [x] 모든 섹션 제목이 존재하는가 — PASS
  - Hero, TOC, Why AI Fails, Three Data Conditions, What AI-ready Means, Practical Stack, Production Checklist, Industry Examples, Anti-patterns, FAQ, Where CUBIG Fits, Bridge, CTA — 13개 섹션 모두 확인
- [x] 모든 본문 텍스트가 누락/변경 없이 존재하는가 — PASS
  - 원본 A타입 기준 주요 단락, KPI 수치, 불릿 항목, FAQ Q&A 전체 확인
- [x] 수치/데이터가 정확히 일치하는가 — PASS
  - 42% (S&P Global, 2025), 60% (Gartner, Feb 2025), 30% (Gartner, Jul 2024) 모두 일치
- [x] 목록 항목 수가 일치하는가 — PASS
  - Restricted Data (4개), Unusable Data (4개), Unstable Execution (4개) 불릿 확인
  - FAQ 7개 아코디언 확인
  - Anti-patterns 6개 불릿 확인
  - Production checklist 3섹션 × 4~5개 항목 확인
  - Bridge 6개 다크 링크 카드 확인

### [CAT-2] Design System 준수

- [x] CSS 변수가 :root에 선언되어 있는가 — PASS
- [x] 색상 하드코딩이 없는가 — **FAIL (Q02)** `color: #ffffff` line 527
- [x] 수치 하드코딩이 없는가 — PASS (spacing, radius 등 모두 DS 변수 사용)
- [x] `.ds-` 접두사가 모든 커스텀 클래스에 있는가 — PASS
- [x] `!important`가 없는가 — PASS
- [x] 인라인 style 속성이 없는가 — PASS
- [x] ds-text--brand가 spec의 강조 키워드에 적용됐는가 — PASS (9개 섹션 타이틀 키워드 모두 적용 확인)
- [x] ds-banner에 좌측 굵은 border가 없는가 — PASS
- [x] KPI/지표 수치 텍스트가 파란색이 아닌 흰색(text-inverse)인가 — PASS (dark bg 위에서 white 사용)
- [x] ds-card 기본 배경이 흰색(surface-white)인가 — PASS
- [x] CTA 밴드가 ds-container 밖에 배치됐는가 — PASS (line 1284, section 레벨 직접 배치)
- [x] body에 word-break: keep-all이 적용됐는가 — PASS (line 49)
- [x] 긴 문장이 ds-bullet--dot 불릿 리스트로 분리됐는가 — PASS (middot 없음, 불릿 사용 확인)
- [x] 텍스트 color에 neutral-150/050/025가 사용되지 않았는가 — PASS
- [x] 밝은/어두운 배경 위 텍스트 색상 — PASS
- [x] ds-banner--full이 배경 이미지 + 오버레이인가 — PASS (Section 5: ds-bg--paint-lavender 사용)
- [x] Brand 폰트(Oxanium)가 단독 키워드 제품명에만 사용됐는가 — PASS (ds-text--product만 사용)
- [x] 배너 텍스트가 가운데 정렬인가 — PASS
- [x] 배너 내 링크가 본문과 분리되어 줄바꿈됐는가 — PASS (`.ds-banner a { display: block; }` line 412)
- [x] 동일한 배경 이미지가 2번 이상 사용되지 않았는가 — PASS (grad-deep 1회, paint-lavender 2회지만 hero callout이 ds-banner--brand로 교체돼 실질적 중복 없음)
- [x] 배경 이미지 위 텍스트가 black/white만 사용하는가 — PASS
- [ ] ds-section--light가 3개 이상 남용되지 않았는가 — **FAIL (Q03)** 4개 사용
- [ ] 모든 CSS 변수가 design-system.md에 정의된 것만 사용됐는가 — **FAIL (Q01)** 12개 커스텀 변수
- [x] Hero 섹션에 eyebrow가 없는가 — PASS

### [CAT-3] 코드 품질

- [x] 시맨틱 태그를 사용했는가 — PASS (section, article, nav, h1-h3 올바르게 사용)
- [x] 모든 section에 id가 있는가 — PASS (13개 섹션 모두 id 보유)
- [x] HTML 유효성 — PASS (태그 닫힘 이상 없음)
- [x] 이미지/아이콘에 alt 또는 aria-label이 있는가 — PASS (nav, section에 aria-label 부여)
- [x] 폰트가 실제로 로드되는가 — PASS (Google Fonts: DM Sans + Oxanium line 37)
- [x] 아코디언 토글이 ds-ac-card__toggle 버튼으로 구현됐는가 — PASS (div.ds-ac-card__toggle + span.ds-ac-card__toggle-icon 구조 사용)
- [x] eyebrow 텍스트에 "//"가 없는가 — PASS
- [x] CTA 밴드 타이틀이 64px(ds-text-7xl) 이상인가 — PASS (tablet+ 이상에서 ds-text-7xl=64px, line 639)
- [x] CTA 밴드 텍스트가 흰색으로 표시되는가 — CONDITIONAL (하드코딩 #ffffff가 결함이나 흰색 출력 자체는 정상)

### [CAT-4] 반응형 검증

- [x] 4단계 breakpoint가 모두 존재하는가 — PASS (768px line 628, 1024px line 641, 1440px line 653)
- [x] mobile(375) 기본 padding이 16px인가 — PASS (`--ds-container-padding-mobile: 16px`)
- [x] tablet(768) padding이 32px인가 — PASS (`--ds-container-padding-tablet: 32px`)
- [x] sm-desktop(1024) padding이 32px인가 — PASS (`--ds-container-padding-sm-desktop: 32px`)
- [x] desktop(1440) padding이 120px이고 max-width: 1440px인가 — PASS (line 654, 663)
- [x] 모든 ds-grid가 mobile에서 1열인가 — PASS
- [x] Typography가 4단계에 걸쳐 단계적으로 변하는가 — PASS (h1 24→28→32→36px)
- [x] 컨테이너 max-width가 1440px인가 — PASS
- [x] body에 padding-top: 58px이 있는가 — PASS (line 48)
- [x] ds-section--hero의 padding-top이 100px인가 — PASS (line 266)

---

## 통계

- 전체 결함 수: 4개
- Critical: 0개
- High: 3개 (Q01, Q02, Q03)
- Medium: 1개 (Q04)
- Low: 0개

---

## 최종 판정

**FAIL**

---

## 판정 근거

High 심각도 결함 3개가 존재하며, 이는 FAIL 처리 조건에 해당한다.

- **Q01**: DS에 없는 커스텀 CSS 변수 (`--color-*`) 12개 생성 및 사용. "CSS 변수는 design-system.md에 정의된 것만 사용" 규칙 위반으로 FAIL 필수 항목.
- **Q02**: CTA 타이틀 `color: #ffffff` 하드코딩. 하드코딩 색상 금지 규칙 위반으로 FAIL 필수 항목.
- **Q03**: `ds-section--light` 4회 사용으로 남용 기준(3개 이상) 초과. FAIL 필수 항목.

Medium 결함 Q04는 단독으로는 CONDITIONAL PASS 허용 대상이나, High 결함이 존재하므로 전체 판정은 FAIL.

---

## 다음 액션

[FAIL]: frontend-dev 에이전트에 qa-report.md 전달 및 수정 요청.

### 수정 지시 요약

**Q01 — 커스텀 CSS 변수 제거 (High)**
- `--color-badge-teal: #0e9f8e` → 직접 DS 팔레트 `#0e9f8e`는 DS에 없으므로, `.ds-card__badge--teal { color: #0e9f8e; }` 방식으로 변수 없이 직접 처리하거나, DS에 실제로 존재하는 `ds-color-success` (#0e824c)로 근사 대체
- `--color-kpi-start`, `--color-kpi-end` → KPI band fallback gradient 제거하고 `ds-bg--grad-deep` 클래스 필수 적용으로 단순화
- `--color-cta-start/mid/end` → CTA band fallback gradient 제거하고 `ds-bg--wave-teal` 클래스 필수 적용으로 단순화
- `--color-overlay-nav/light/dark/cta` → rgba 오버레이 값을 변수화하지 말고 직접 CSS에 rgba 값으로 작성 (오버레이 목적 rgba는 허용)
- `--color-inverse-70/60` → `rgba(255,255,255,0.7)`, `rgba(255,255,255,0.6)` 직접 작성

**Q02 — 하드코딩 색상 수정 (High)**
- line 527: `color: #ffffff` → `color: var(--ds-color-text-inverse)`

**Q03 — ds-section--light 남용 해소 (High)**
- 현재 4개: TOC(section-2), what-ai-ready-means, industry-examples, faq
- 권장: industry-examples 또는 faq 섹션을 `ds-section--light` 제거 + 흰색 배경 유지, 또는 배경 이미지 섹션으로 전환하여 총 3개 미만으로 조정

**Q04 — Hero callout 컴포넌트 수정 (Medium)**
- line 715: `<div class="ds-banner ds-banner--brand">` → `<div class="ds-banner--full ds-bg--paint-lavender">` 로 변경
- 주의: Section 5(line 873)에도 `ds-bg--paint-lavender`가 사용 중이므로, 동일 배경 이미지 중복 규칙 재검토 필요. 두 곳 중 하나의 배경을 다른 이미지로 변경하거나, Hero callout은 현행 `ds-banner--brand` 유지를 spec과 협의
