# QA Report
- 검증일: 2026-03-31
- 대상 파일: output/html/cubig-learn-execution-state-drift-b-type.html
- 원본 파일: input/cubig-learn-execution-state-drift.html
- 명세서: output/docs/cubig-learn-execution-state-drift-spec.md
- QA 엔지니어: qa-agent
- 검증 범위: 사용자 지정 8개 중점 항목 + CAT-1~4 전체

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| Q01 | CAT-2 | High | line 407–435 | `ds-hero__title` font-size가 DS 기준(desktop 64px / mobile 40px)이 아닌 h1 스케일(mobile 24px → desktop 36px)로 구현됨 | spec이 아티클형 이유로 h1 반응형 스케일을 적용했으나 DS 공식 규칙은 `ds-hero__title`에 base `var(--ds-text-7xl)`(64px), mobile max-width 767px `var(--ds-text-5xl)`(40px) 명시. 아티클형이더라도 hero title 전용 스케일이 우선함 |
| Q02 | CAT-2 | High | line 822 | CTA band mobile 미디어쿼리 `letter-spacing: -1px` 하드코딩 | 규칙: letter-spacing은 `var(--ds-tracking-tight)`(-0.5px) 또는 `var(--ds-tracking-wide)`(0.08em) 토큰만 허용. 숫자 직접 입력 금지 |

---

## 세부 검증 결과

### [CAT-1] 내용 무결성
- [x] 10개 섹션 구조 전부 보존
- [x] Hero title, description 일치
- [x] Section 2 도입부 3문단 + callout 배너 일치
- [x] Section 3 비교 테이블 4행 × 2열 완전 일치
- [x] Section 4 정의 배너 + 체크리스트 4항목 일치
- [x] Section 5 테이블 3행 + "21 days → 4 hours" 수치 일치
- [x] Section 6 Release State 정의 배너 + 체크리스트 4항목 + 텔레콤 예시 일치
- [x] Section 7 FAQ 6문항 전부 일치
- [x] Section 8 다크 링크 4개 일치
- [x] Section 9 CUBIG fits 문장 일치
- [x] Section 10 CTA 타이틀 / description / 버튼 3개 일치
- CAT-1 결함 없음

### [CAT-2] Design System 준수

**하드코딩 색상 검사:** `:root` 선언부 외 실제 스타일에 hex 직접 사용 없음. 오버레이 rgba는 허용 범위. 통과.

**!important 검사:** 0건. 통과.

**인라인 style 검사:** 0건. 통과.

**ds-text--brand 적용:** Hero h1 "Execution State Drift"(line 928), 섹션별 키워드(model drift / execution state drift / incident response / Release State / Questions)(lines 958–1134), CTA "break"(line 1277). Spec 명세 키워드와 일치. 통과.

**배너 좌측 border:** `ds-banner`에 `border-left` 없음. 상하 border만. 통과.

**KPI 수치 색상:** KPI band 없음. 파란색 수치 사용 없음. 통과.

**ds-card 배경색:** ds-card 사용 없음. 통과.

**CTA 배치:** `<section class="ds-cta-band">` (line 1275)가 `</main>` (line 1270) 밖에 배치. 통과.

**word-break:** `body { word-break: keep-all; }` (line 92). 통과.

**긴 문장 불릿 분리:** 긴 문장들이 `ds-bullet--check` 리스트로 분리됨. 인라인 middot 없음. 통과.

**텍스트 최소 명도:**
- neutral-150/050/025가 텍스트 color에 사용 없음. 통과.
- `ds-color-text-muted`가 `ds-ac-card__toggle-icon` background에 사용(line 700) — 텍스트 color가 아닌 아이콘 장식용 배경이므로 허용.

**배경 명도 vs 텍스트 색상:**
- `ds-banner--full`에 `ds-bg--grad-sage` / `ds-bg--paint-lavender` (밝은 이미지) 사용, 오버레이 `rgba(255,255,255,0.82)` + 텍스트 `text-primary`(검정). 밝은 배경 위 검정 텍스트. 통과.
- `ds-cta-band`에 `ds-bg--grad-deep` (어두운 이미지) 사용, 오버레이 `rgba(0,0,0,0.15)` + 텍스트 white. 통과.

**ds-section--light 남용:** 2개 사용(section-3, section-5). 3개 미만. 통과.

**eyebrow 전면 금지:** 0건. 통과.

**DS 미정의 CSS 변수:** 전체 변수 목록 검토 결과 모두 DS 공식 변수 범위 내. `--ds-bg-img-*` 변수도 DS에 정의됨. 통과.

**letter-spacing 하드코딩:**
- line 822: `letter-spacing: -1px` — **결함 Q02**
- 나머지는 모두 `var(--ds-tracking-tight)` 또는 `var(--ds-tracking-wide)` 사용.

**ds-section-header--left 사용:**
- CSS 정의는 있으나(line 390–391) 실제 HTML 요소에 class 적용 없음. 5개 section-header 모두 `ds-section-header ds-section-header--underline`만 사용. 통과.

**Hero title font-size:**
- line 407–435: DS 공식 기준 `ds-hero__title` base 64px, mobile 40px 대비 24px→28px→32px→36px로 구현 — **결함 Q01**

**Hero text-align:**
- `ds-hero--text-only`에 별도 text-align 없음. 아티클 타입에서 기본 left 정렬. DS에서 text-only는 `max-width: 860px` 외 text-align 명시 없음. 허용 범위.

**Section header 정렬:**
- 모든 section-header가 `text-align: center`(line 361). `--left` 클래스 실제 사용 없음. 통과.

**Description max-width 반응형:**
- `ds-hero__description`: mobile 100% → 1024px 720px → 1440px 860px. 768px에서 별도 지정 없이 100% 유지. 올바른 패턴. 통과.
- `ds-section-header__description`: 동일 패턴(line 383–384). 통과.
- `ds-cta-band__inner`: 동일 패턴(line 790–791). 통과.

**CTA title 반응형:**
- base: `var(--ds-text-5xl)` 40px (line 794). 통과.
- 1440px+: `var(--ds-text-6xl)` 50px (line 820). 통과.
- mobile max-width 767px: `var(--ds-text-4xl)` 36px (line 822). 통과 (font-size 값만, letter-spacing은 Q02 결함).

**이미지 경로:** `/cubig-homepage-design-system/reference/images/` 절대경로 + `.webp` 포맷. 통과.

### [CAT-3] 코드 품질
- [x] 시맨틱 태그(`<main>`, `<section>`, `<article>`, `<h1>`–`<h3>`) 사용
- [x] 모든 섹션에 id 존재 (section-1 ~ section-10)
- [x] `<main class="ds-article">` 적용(line 919). 아티클형 페이지 규칙 충족
- [x] Google Fonts 링크 존재 (DM Sans + Oxanium, line 80)
- [x] 아코디언 toggle `ds-ac-card__toggle` CSS pseudo-element 패턴 사용. 텍스트 "+" 없음
- [x] FAQ `ds-ac-card` 아코디언으로 구현 (6개)
- [x] `aria-label`, `role` 속성 적용
- [x] eyebrow 없음
- [x] CTA band 텍스트 흰색(`color: var(--ds-color-white)`, `var(--ds-color-text-inverse)`)

### [CAT-4] 반응형 검증
- [x] 768px breakpoint 존재 (32개 미디어쿼리 확인)
- [x] 1024px breakpoint 존재
- [x] 1440px breakpoint 존재
- [x] mobile 기본 padding 16px (`var(--ds-container-padding-mobile)`)
- [x] tablet 32px, sm-desktop 32px, desktop 120px
- [x] `ds-container` max-width 1440px (line 326)
- [x] body `padding-top: 58px` (line 91)
- [x] `ds-section--hero` `padding: 100px 0 var(--ds-space-5xl)` (line 329)
- [x] Typography 4단계 반응형 적용

---

## 통계
- 전체 결함 수: 2개
- Critical: 0개 / High: 2개 / Medium: 0개 / Low: 0개

---

## 최종 판정

**FAIL**

---

## 판정 근거

High 심각도 결함 2건이 존재한다.

1. **Q01 (Hero title font-size — High)**: DS 공식 규칙에서 `ds-hero__title`은 base `var(--ds-text-7xl)` (64px), mobile에서 `var(--ds-text-5xl)` (40px)이다. 아티클형 Learn 페이지라도 hero title 전용 스케일이 DS 규칙으로 명시되어 있어 spec의 h1 스케일 적용은 부적합하다. 현재 파일은 24px→28px→32px→36px로 hero title이 지나치게 작게 렌더링된다.

2. **Q02 (letter-spacing 하드코딩 — High)**: CTA mobile 미디어쿼리 `letter-spacing: -1px` 하드코딩은 DS 토큰 규칙 위반이다. `var(--ds-tracking-tight)` (-0.5px)로 교체해야 한다.

---

## 수정 지시 (frontend-dev 전달용)

### [Q01] ds-hero__title font-size 수정 (line 407–435)

```css
/* 수정 전 */
.ds-hero__title {
  font-size: 24px; /* 모바일 기본 */
}
@media (min-width: 768px)  { .ds-hero__title { font-size: 28px; } }
@media (min-width: 1024px) { .ds-hero__title { font-size: 32px; } }
@media (min-width: 1440px) { .ds-hero__title { font-size: 36px; } }

/* 수정 후 — DS ds-hero__title 기준 */
.ds-hero__title {
  font-size: var(--ds-text-5xl); /* 40px — mobile 기본 */
  letter-spacing: var(--ds-tracking-tight);
}
@media (min-width: 1024px) { .ds-hero__title { font-size: var(--ds-text-6xl); } } /* 50px */
@media (min-width: 1440px) { .ds-hero__title { font-size: var(--ds-text-7xl); } } /* 64px */
```

### [Q02] CTA letter-spacing 토큰 교체 (line 822)

```css
/* 수정 전 */
.ds-cta-band__title { font-size: var(--ds-text-4xl); letter-spacing: -1px; }

/* 수정 후 */
.ds-cta-band__title { font-size: var(--ds-text-4xl); letter-spacing: var(--ds-tracking-tight); }
```

---

## 다음 액션

**FAIL**: frontend-dev 에이전트에 `output/docs/cubig-learn-execution-state-drift-qa-report.md` 결함 목록 전달 및 `output/html/cubig-learn-execution-state-drift-b-type.html` 수정 요청. 수정 완료 후 qa 에이전트 재호출.
