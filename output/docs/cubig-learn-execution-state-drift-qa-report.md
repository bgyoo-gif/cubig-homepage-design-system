# QA Report
- 검증일: 2026-03-31
- 대상 파일: output/html/cubig-learn-execution-state-drift-b-type.html
- 원본 파일: input/cubig-learn-execution-state-drift.html
- 명세서: output/docs/cubig-learn-execution-state-drift-spec.md
- QA 엔지니어: qa-agent
- 사유: 사용자 신고 결함(섹션 헤더 정렬, CTA 폰트 크기) 포함 전체 4개 카테고리 재검증

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| Q01 | CAT-2 | High | line 957, 1004, 1041, 1090 | `ds-section-header--left` 4개 섹션에 적용 — 사용자가 center 정렬 요청 | spec.md에 `--left (article type)` 명시되어 있으나 사용자가 명시적으로 center를 원함. CLAUDE.md 규칙상 `--left`는 "spec에 명시된 경우만 사용"이나 사용자 요청이 spec을 override함. section-3(957), section-4(1004), section-5(1041), section-6(1090) 4개 섹션에서 `ds-section-header--left` 클래스 제거 필요 |
| Q02 | CAT-2 | High | line 392 | `@media (max-width: 767px) { .ds-section-header { text-align: left; } }` — 모바일에서 전체 section-header 강제 left 정렬 | Q01과 연동. 이 미디어쿼리가 남아있으면 Q01 수정 후에도 모바일에서 left로 렌더링됨. 해당 규칙 제거 또는 mobile도 center로 유지하는 방향으로 수정 필요 |
| Q03 | CAT-2 | High | line 792–800 | CTA band title font-size 기본값이 `var(--ds-text-7xl)` = 64px — 아티클형 페이지에 과도하게 큼 | 비교 기준: `execution-state-layer-b-type.html` 동일 아티클형 페이지는 기본 `ds-text-5xl`(40px), 1440px+에서 `ds-text-7xl`(64px) 패턴 사용. `A-cubig-llm-v3-b-type.html`도 동일 패턴. drift 파일은 기본값이 64px로 모든 breakpoint에서 과도함. `ds-text-5xl` 기본, 1440px+에서 `ds-text-7xl`로 수정 필요 |
| Q04 | CAT-2 | High | line 804 | `ds-cta-band__description` color에 `rgba(255, 255, 255, 0.85)` 하드코딩 | DS 규칙: 색상 하드코딩 금지. `var(--ds-color-text-inverse)`로 교체 필요 |
| Q05 | CAT-2 | High | line 532 | `ds-banner--full::before` overlay가 `rgba(255, 255, 255, 0.72)` (밝은 흰색) | 배경 이미지(`ds-bg--grad-sage`) 위에 밝은 흰색 오버레이를 적용하면 배경 이미지 시각 효과가 거의 사라짐. DS 규칙상 배경 이미지 overlay는 어두운 방향 또는 이미지를 살려주는 방향이어야 함. 단, 텍스트가 black(`text-primary`)이어서 가독성 자체는 문제없음. 오버레이 투명도 조정 또는 dark overlay + white text로 변경 권고 |
| Q06 | CAT-2 | Medium | line 813, 815 | `ds-cta-band__actions .ds-btn` 배경/border에 `rgba(255,255,255,0.92)`, `rgba(255,255,255,0.6)` 하드코딩 | DS 규칙: 색상 하드코딩 금지. CSS 변수로 추출 또는 `var(--ds-color-surface-white)` 계열로 대체 권고 |
| Q07 | CAT-2 | Medium | — | `ds-prose-lead`, `ds-prose-body`, `ds-prose-closing`, `ds-dark-links`, `ds-card--dark-link`, `ds-cubig-fits-wrapper` 등 커스텀 클래스 다수 사용 | design-system.md에 정의되지 않은 클래스들. 아티클형 전용 컴포넌트로 DS에 공식 등록 필요. 현재 파일 내 CSS로 정의되어 있어 동작은 하지만 DS 규칙(커스텀 클래스 금지) 위반. Medium 결함으로 기록 (기능적으로 동작하므로 Critical 아님) |

---

## 패스 항목 (변경 없음 — 기존 PASS 항목 유지)

### [CAT-1] 내용 무결성
- 원본 A타입 10개 섹션 구조 전부 보존
- 히어로 타이틀, description 일치
- Section 2 도입부 3문장 + callout 내용 일치
- Section 3 테이블 4행 × 2열 완전 일치
- Section 4 정의 배너 + 체크리스트 4항목 일치
- Section 5 테이블 3행 + "21 days → 4 hours" 수치 일치
- Section 6 Release State 정의 + 체크리스트 4항목 + 텔레콤 예시 일치
- Section 7 FAQ 6문항 전부 일치
- Section 8 다크 링크 4개 일치
- Section 9 CUBIG fits 문장 일치
- Section 10 CTA 타이틀/description/버튼 3개 일치
- **CAT-1 결함 없음**

### [CAT-2] Design System — 패스 항목
- CSS 변수 `:root`에 선언됨
- 하드코딩 hex 색상 없음 (`:root` 선언부 외 실제 스타일에 hex 직접 사용 없음)
- `!important` 없음 (grep 결과 0건)
- 인라인 `style` 속성 없음 (grep 결과 0건)
- `eyebrow` 전면 제거됨 (grep 결과 0건)
- `body { word-break: keep-all }` 적용됨 (line 92)
- `body { padding-top: 58px }` 적용됨 (line 91)
- `ds-text--brand` 강조 키워드 전 섹션 적용됨 (Hero h1, section-3/4/5/6, FAQ 헤더, CTA)
- `ds-banner`에 `border-left` 없음 (top/bottom border-default만)
- KPI 수치 파란색 없음 (KPI band 섹션 없음)
- `ds-card` 배경 `surface-white`
- `ds-cta-band`가 `</main>` 밖에 위치 (line 1270, 1275)
- `ds-section--light` 실제 사용 2개 (line 954, 1038) — 3개 미만, 남용 아님
- `ds-article` + `<main>` 적용됨 (line 919)
- 아코디언 header grid `1fr auto auto` (line 664)
- description max-width 반응형: 100% → 720px → 860px (line 383–384)
- `ds-banner--full` padding `var(--ds-space-xl)` (line 513)
- `ds-section--hero` padding-top 100px (line 329)
- `text-wrap: balance` 제목, `text-wrap: pretty` 본문 적용됨
- "See how" 외부 링크 `ds-btn ds-btn--secondary` 버튼으로 구현됨 (line 1264)
- 이미지 경로 절대경로 + WebP 사용 (`/cubig-homepage-design-system/reference/images/`)

### [CAT-3] 코드 품질
- 시맨틱 태그 (`<main>`, `<section>`, `<article>`, `<h1>`–`<h3>`) 사용됨
- 모든 section에 `id` 있음 (section-1 ~ section-10)
- Google Fonts 링크 존재 (DM Sans + Oxanium, line 80)
- 아코디언 toggle `ds-ac-card__toggle` 패턴 사용 (텍스트 "+" 없음, CSS pseudo-element)
- FAQ `ds-ac-card` 아코디언으로 구현됨 (6개)
- `aria-label`, `role` 속성 적용됨

### [CAT-4] 반응형
- 3단계 breakpoint 존재: 768px, 1024px, 1440px
- mobile 기본 padding 16px, tablet 32px, sm-desktop 32px, desktop 120px
- `ds-container` max-width 1440px (line 326)
- body padding-top 58px (line 91)
- `ds-section--hero` padding-top 100px (line 329)
- Typography 4단계 반응형 적용됨 (h1 24→28→32→36px, h2 20→22→24→28px)

---

## 통계
- 전체 결함 수: 7개
- Critical: 0개
- High: 5개 (Q01, Q02, Q03, Q04, Q05)
- Medium: 2개 (Q06, Q07)
- Low: 0개

---

## 최종 판정
**FAIL**

---

## 판정 근거

1. **Q01 (High)** — 섹션 헤더 좌측 정렬. 사용자가 명시적으로 center 정렬을 요청. line 957, 1004, 1041, 1090 4개 섹션에서 `ds-section-header--left` 제거 필요.

2. **Q02 (High)** — 모바일 전체 section-header left 강제 정렬 규칙(line 392). Q01 수정과 연동하여 제거 필요.

3. **Q03 (High)** — CTA band title 기본 font-size가 64px으로 과도하게 큼. 동일 아티클형 파일(`execution-state-layer-b-type.html`, `A-cubig-llm-v3-b-type.html`) 대비 기본값이 40px이어야 함.

4. **Q04 (High)** — CTA description 색상 `rgba(255, 255, 255, 0.85)` 하드코딩. DS 색상 변수 규칙 위반.

5. **Q05 (High)** — `ds-banner--full::before` 흰색 오버레이가 배경 이미지를 덮어 시각 효과 감소.

---

## 수정 요청 상세

### [Q01 + Q02] section-header 정렬 수정
- line 957: `class="ds-section-header ds-section-header--underline ds-section-header--left"` → `--left` 제거
- line 1004: 동일
- line 1041: 동일
- line 1090: 동일
- line 392: `@media (max-width: 767px) { .ds-section-header { text-align: left; } }` 삭제

### [Q03] CTA band title font-size 수정
- line 794: `font-size: var(--ds-text-7xl)` → `font-size: var(--ds-text-5xl)` 변경
- line 820 이후 1440px 미디어쿼리에 `.ds-cta-band__title { font-size: var(--ds-text-7xl); }` 추가

### [Q04] CTA description color 변수 교체
- line 804: `color: rgba(255, 255, 255, 0.85)` → `color: var(--ds-color-text-inverse)`

### [Q05] ds-banner--full overlay 수정
- line 532: `background: rgba(255, 255, 255, 0.72)` → `background: rgba(0, 0, 0, 0.4)` (또는 적절한 어두운 값)
- overlay가 어두워지면 `ds-banner__full-body` 텍스트 색상도 line 548에서 `var(--ds-color-text-primary)` → `var(--ds-color-text-inverse)` 변경 필요

---

## 다음 액션
**FAIL**: frontend-dev 에이전트에 `output/docs/cubig-learn-execution-state-drift-qa-report.md`의 결함 목록 전달 및 `output/html/cubig-learn-execution-state-drift-b-type.html` 수정 요청. 수정 완료 후 qa 에이전트 재호출.
