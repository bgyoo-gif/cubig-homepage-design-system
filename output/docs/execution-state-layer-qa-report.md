# QA Report
- 검증일: 2026-03-30 (재검증)
- 대상 파일: output/html/execution-state-layer-b-type.html
- 원본 파일: input/execution-state-layer.html
- 명세서: output/docs/execution-state-layer-spec.md
- QA 엔지니어: qa-agent
- 검증 이력: 1차 FAIL (Q01, Q02) → 수정 후 2차 재검증

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| Q03 | CAT-2 | High | line 765 | `.ds-cta-band__title` font-size가 `40px` 하드코딩 | DS 토큰 없이 수치 직접 기입. `var(--ds-text-5xl)` 등 DS 토큰으로 변경 필요. `!important` 규칙 아니지만 수치 하드코딩은 DS 준수 위반 |
| Q04 | CAT-2 | High | line 775, 781, 789 | `.ds-cta-band__description`, `__quote`, `__quote-attr` 색상이 `rgba(255,255,255,0.85/0.75/0.55)` 하드코딩 | 어두운 배경(ds-bg--grad-deep) 위 텍스트에 rgba 하드코딩 사용. `var(--ds-color-text-inverse)` (#ffffff) 또는 DS 정의 토큰으로 교체 필요 |
| Q05 | CAT-3 | Medium | line 1402 | 아코디언 토글이 `<div class="ds-ac-card__toggle">` — `<button>` 태그 미사용 | 시맨틱 마크업 위반 + 키보드 접근성 결함. `<button>` 태그로 교체 필요 |

---

## 수정 확인 — 이전 결함

| ID | 이전 판정 | 수정 내용 | 재검증 결과 |
|----|-----------|-----------|-------------|
| Q01 | FAIL (High) | `ds-banner--full .ds-banner__sub` color: text-secondary → text-primary | **RESOLVED** — line 862: `color: var(--ds-color-text-primary)` 확인 |
| Q02 | FAIL (High) | `ds-section--light` 4개 → 3개로 축소 (section-9 제거) | **RESOLVED** — section-4(line 1061), section-6(line 1183), section-11(line 1383) 총 3개 확인 |

---

## PASS 확인 항목 요약

### [CAT-1] 내용 무결성 — PASS

| 항목 | 결과 |
|------|------|
| 모든 섹션 제목 존재 (12개) | PASS — Hero, Definition, What it means, Core characteristics, Why it matters, Comparison, Relationship to AI-Ready Data, Conceptual model, Example, How SynTitan implements..., FAQ, Summary/CTA |
| 본문 텍스트 누락/변경 없음 | PASS — A타입 모든 본문 텍스트 그대로 포함 |
| 수치/데이터 일치 | PASS — 6개 차원, 5개 특성, 7개 FAQ, 4개 Feature 카드 수 일치 |
| 목록 항목 수 일치 | PASS — 각 카드의 bullet 항목 수 A타입 동일 |
| FAQ 7개 항목 | PASS — Q1~Q7 모두 포함 |

### [CAT-2] Design System 준수

| 항목 | 결과 | 비고 |
|------|------|------|
| CSS 변수 :root 선언 | PASS | line 131~251 |
| 하드코딩 색상 | **FAIL Q04** | CTA 밴드 텍스트에 rgba 하드코딩 (line 775, 781, 789) |
| 수치 하드코딩 | **FAIL Q03** | CTA 타이틀 font-size: 40px 하드코딩 (line 765) |
| !important 없음 | PASS | 전혀 없음 |
| 인라인 style 속성 | PASS | `style="background-color: var(--ds-color-brand-purple)"` — CSS 변수 전달 목적으로 허용 |
| ds-text--brand 적용 | PASS | 섹션 2(Definition), 4(characteristics), 5(matters), 6(Comparison), 7(AI-Ready Data), 8(model), 11(Questions) — spec과 일치 |
| ds-text--product SynTitan | PASS | line 1299 |
| ds-banner 좌측 border 없음 | PASS | top/bottom border만 있음 |
| KPI 수치 파란색 아님 | PASS | brand-primary는 ds-bullet--number 아이콘(숫자) 색상에만 사용 (line 564) |
| ds-card 배경 흰색 | PASS | `background-color: var(--ds-color-surface-white)` (line 427) |
| CTA band ds-container 밖 배치 | PASS | `</main>` (line 1509) 이후에 section으로 배치 (line 1514) |
| word-break: keep-all body | PASS | line 108 |
| 긴 문장 불릿 분리 | PASS | 독립 문장들이 ds-bullet--dot, ds-bullet--check로 분리됨 |
| 인라인 middot 없음 | PASS | |
| neutral-150/050/025 텍스트 color 없음 | PASS | :root 정의에만 있고 color 프로퍼티에 미사용 |
| text-muted 텍스트 사용 없음 | PASS | ds-ac-card__toggle-icon의 background(아이콘 선 색상)에만 사용 — 텍스트 color 아님 |
| 배경 이미지 위 텍스트 (banner--full) | PASS | line 862: `color: var(--ds-color-text-primary)` — Q01 수정 완료 |
| eyebrow 전면 없음 | PASS | grep 결과 0개 |
| 배경 이미지 중복 없음 | PASS | wave-teal 1회, grad-deep 1회 |
| ds-section--light 3개 이하 | PASS | 3개 (section-4, 6, 11) — Q02 수정 완료 |
| 커스텀 CSS 변수 없음 | PASS | `--ds-` 접두사 외 변수 0개. --ds-border-brand, --ds-border-default는 design-system.md line 213~214에 정의된 공식 변수 |
| DS에 없는 변수 없음 | PASS | |
| 코드블록 없음 | PASS | 페이지 내 코드블록 없어 해당 없음 |
| description max-width 반응형 | PASS | mobile 100%, 1024px: 720px (line 921~922), 1440px: 860px (line 960~961) |
| text-wrap balance/pretty | PASS | 제목 balance(line 262, 270, 277), 본문 pretty(line 125) |
| Brand 폰트 단독 키워드만 | PASS | SynTitan만 Oxanium 적용 |
| 배너 텍스트 가운데 정렬 | PASS | ds-banner: text-align: center (line 488), ds-banner--full: text-align: center (line 494) |

### [CAT-3] 코드 품질

| 항목 | 결과 | 비고 |
|------|------|------|
| 시맨틱 태그 | PASS | nav, main, section, article, footer, h1~h2, blockquote 모두 적절 사용 |
| 모든 section에 id | PASS | id="section-1" ~ id="section-12" |
| HTML 유효성 | PASS | 태그 중첩 오류 없음 |
| 이미지/아이콘 aria | PASS | SVG 아이콘 aria-hidden="true" 적용, nav aria-label |
| Google Fonts 로드 | PASS | DM Sans + Oxanium (line 94~96) |
| 아코디언 토글 버튼 | **FAIL Q05** | `<div class="ds-ac-card__toggle">` — `<button>` 태그 필요 (line 1402) |
| eyebrow 없음 | PASS | |
| CTA band 타이틀 64px 이상 | PASS (partial) | desktop(@1440px)에서 var(--ds-text-7xl) 적용 (line 964). 단, 기본값 40px 하드코딩은 Q03으로 별도 처리 |
| CTA band 텍스트 흰색 | PASS | 타이틀: `color: var(--ds-color-white)` (line 767). description rgba는 Q04 처리 |
| ds-article 적용 | PASS | `<main class="ds-article">` (line 1011) |
| 아코디언 header grid | PASS | `grid-template-columns: 1fr auto auto` (line 620) |
| FAQ 아코디언 구현 | PASS | ds-ac-card x 7개 |

### [CAT-4] 반응형 검증

| 항목 | 결과 | 비고 |
|------|------|------|
| 4단계 breakpoint 모두 존재 | PASS | 768px(line 906), 1024px(line 933), 1440px(line 951) |
| mobile padding 16px | PASS | `--ds-container-padding-mobile: 16px` |
| tablet padding 32px | PASS | `--ds-container-padding-tablet: 32px` |
| sm-desktop padding 32px | PASS | `--ds-container-padding-sm-desktop: 32px` |
| desktop padding 120px + max-width 1440px | PASS | line 952 |
| 모든 ds-grid mobile 1열 | PASS | `.ds-card-grid { grid-template-columns: 1fr; }` (line 473) |
| Typography 단계적 변화 | PASS | h1: 24→28→32→36px |
| max-width 1440px | PASS | line 952 |
| body padding-top 58px | PASS | line 107 |
| ds-section--hero padding-top 100px | PASS | line 322 |
| description max-width 반응형 | PASS | 768px: 720px, 1440px: 860px |
| 여백 하드코딩 없음 | PASS | ds-container 외 padding 하드코딩 없음 (table 내 12px/14px/16px은 컴포넌트 내부 간격으로 Low) |

---

## 통계
- 전체 결함 수: 3개 (신규 Q03, Q04, Q05)
- Critical: 0개 / High: 2개 / Medium: 1개 / Low: 0개

---

## 최종 판정
**FAIL**

---

## 판정 근거

이전 Q01, Q02는 정상 수정됐으나 재검증 중 신규 결함 3개 발견:

1. **Q03 (High)**: `.ds-cta-band__title` font-size가 `40px` 하드코딩 (line 765). DS 규칙 "수치 하드코딩 금지" 위반. `var(--ds-text-5xl)` (40px 해당 없음 → `var(--ds-text-4xl)` 36px 또는 `var(--ds-text-5xl)` 48px) 으로 교체 필요. desktop(1440px)에서는 이미 `var(--ds-text-7xl)` 사용 — mobile 기본값만 DS 토큰으로 교체하면 됨.

2. **Q04 (High)**: CTA 밴드 텍스트 색상이 `rgba(255,255,255,0.85)`, `rgba(255,255,255,0.75)`, `rgba(255,255,255,0.55)` 하드코딩 (line 775, 781, 789). 하드코딩 색상 금지 규칙 위반. `var(--ds-color-text-inverse)` 또는 DS 정의 투명도 처리 방식으로 교체 필요. description과 quote는 `var(--ds-color-text-inverse)`, quote-attr은 `var(--ds-color-text-tertiary)` 또는 동일한 inverse 사용.

3. **Q05 (Medium)**: 아코디언 토글이 `<div class="ds-ac-card__toggle">` (line 1402). `<button type="button">` 태그로 교체해야 시맨틱/접근성 기준을 충족.

---

## 다음 액션
[FAIL]: frontend-dev 에이전트에 qa-report.md 전달 및 수정 요청.

### 수정 지시사항

**Q03 수정 (line 765):**
```css
/* 변경 전 */
.ds-cta-band__title {
  font-size: 40px;
  ...
}

/* 변경 후 */
.ds-cta-band__title {
  font-size: var(--ds-text-5xl);  /* 48px — mobile/tablet 기본값 */
  ...
}
/* @media (min-width: 1440px) 에 이미 var(--ds-text-7xl) 있으므로 유지 */
```

**Q04 수정 (line 775, 781, 789):**
```css
/* 변경 전 */
.ds-cta-band__description { color: rgba(255,255,255,0.85); }
.ds-cta-band__quote       { color: rgba(255,255,255,0.75); }
.ds-cta-band__quote-attr  { color: rgba(255,255,255,0.55); }

/* 변경 후 */
.ds-cta-band__description { color: var(--ds-color-text-inverse); }
.ds-cta-band__quote       { color: var(--ds-color-text-inverse); }
.ds-cta-band__quote-attr  { color: var(--ds-color-text-tertiary); }
/* 어두운 배경(grad-deep) 위이므로 text-tertiary(#9c9c9c)도 허용 */
```

**Q05 수정 (line 1402):**
```html
<!-- 변경 전 -->
<div class="ds-ac-card__toggle"><span class="ds-ac-card__toggle-icon"></span></div>

<!-- 변경 후 -->
<button type="button" class="ds-ac-card__toggle" aria-label="Toggle"><span class="ds-ac-card__toggle-icon"></span></button>
```
