# QA Report (6차 — output/html/A-cubig-llm-v3-b-type.html 신규 검증)

- 검증일: 2026-03-20
- 대상 파일: output/html/A-cubig-llm-v3-b-type.html
- 원본 파일: input/A-cubig-llm-v3.html
- 명세서: output/docs/A-cubig-llm-v3-spec.md
- QA 엔지니어: qa-agent

---

## 검증 방법

아래 bash 명령으로 실제 파일을 직접 검사하였다:

```bash
grep -n '#[0-9a-fA-F]{3,6}|rgb(|rgba(|hsl(' output/html/A-cubig-llm-v3-b-type.html
grep -n '!important' output/html/A-cubig-llm-v3-b-type.html
grep -n 'style="[^-]' output/html/A-cubig-llm-v3-b-type.html
grep -n 'ds-text--brand' output/html/A-cubig-llm-v3-b-type.html
grep -n 'border-left' output/html/A-cubig-llm-v3-b-type.html
grep -n 'middot|&middot;|·' output/html/A-cubig-llm-v3-b-type.html
grep -n 'ds-section--light' output/html/A-cubig-llm-v3-b-type.html
grep -oE '--ds-[a-zA-Z0-9-]+' output/html/A-cubig-llm-v3-b-type.html | sort -u
```

---

## [CAT-1] 내용 무결성 검증

원본 `input/A-cubig-llm-v3.html`과 B타입 직접 대조.

| 항목 | 결과 |
|------|------|
| Hero 타이틀 "LLM Capsule" | PASS (line 1163) |
| Hero description 전문 | PASS (line 1164) |
| Hero oneliner 4개 항목 | PASS (line 1165) — 내용은 존재, 형식 결함은 CAT-2에서 다룸 |
| KPI 수치 4개 (98.1% / 99.14% / 100% / 98%) | PASS (lines 1291-1303) |
| AI-Ready Data definition 원문 | PASS (line 1189) |
| Prompt Data Leakage definition 원문 | PASS (lines 1200-1201) |
| Step Tabs 3단계 코드블록 전문 | PASS |
| 비교표 S6 (3열 5행) | PASS (lines 1316-1368) |
| 4 Capabilities 카드 4개 | PASS (lines 1374-1402) |
| Detection Coverage 6개 카테고리 + pills | PASS (lines 1408-1505) |
| SynTitan 통합 + Compliance 3개 카드 | PASS (lines 1511-1565) |
| Enterprise Deployments 3개 사례 | PASS (lines 1567-1633) |
| Key Concepts 3개 카드 | PASS (lines 1635-1663) |
| 4 Blockers 2col + CTA | PASS (lines 1665-1704) |
| Certifications 11개 마키 | PASS (lines 1706-1787) |
| Partners 11개 마키 | PASS (lines 1789-1837) |
| Full Comparison Table 5열 5행 | PASS (lines 1839-1899) |
| FAQ 6개 Q&A | PASS (lines 1901-1985) |
| Operational Example (Enterprise RAG) | PASS (lines 1989-1994) |
| CTA Band 타이틀 + 설명 + 버튼 3개 + footnote | PASS (lines 2005-2012) |

**CAT-1 결과: 전항목 PASS**

---

## [CAT-2] Design System 준수 검증

### 하드코딩 색상 검사

```bash
grep 결과 (라인 325, 434, 480, 496, 521, 534, 728, 752, 761, 763, 765)
```

`:root` 선언부 외부에서 rgba 직접 사용 확인:

| 라인 | 위치 | 내용 | 판정 |
|------|------|------|------|
| 325 | .ds-nav | `background: rgba(255,255,255,0.92)` | **결함** — DS 변수 없음 |
| 434 | .ds-hero__screenshot-frame | `box-shadow: 0 -8px 40px rgba(0,0,0,0.12)` | **결함** — DS 변수 없음 |
| 480 | .ds-banner--brand | `background-color: rgba(166,23,255,0.06)` | **결함** — DS 변수 없음 |
| 496 | .ds-banner--full::before | `background: rgba(255,255,255,0.72)` | **결함** — DS 변수 없음 |
| 521 | .ds-kpi-band[class*="ds-bg--"]::before | `background: rgba(255,255,255,0.15)` | **결함** — DS 변수 없음 |
| 534 | .ds-kpi-band__label | `color: rgba(255,255,255,0.85)` | **결함** — DS 변수 없음 |
| 728 | .ds-hero__screenshot | `box-shadow: 0 -4px 24px rgba(0,0,0,0.08)` | **결함** — DS 변수 없음 |
| 752 | .ds-kpi-band[class*="ds-bg--"]::before (kpi inner) | `background: rgba(0,0,0,0.15)` | **결함** — DS 변수 없음 |
| 761 | .ds-cta-band__description | `color: rgba(255,255,255,0.85)` | **결함** — DS 변수 없음 |
| 763 | .ds-cta-band__actions .ds-btn | `background: rgba(255,255,255,0.92)` 외 | **결함** — DS 변수 없음 |
| 765 | .ds-cta-band__footnote | `color: rgba(255,255,255,0.6)` | **결함** — DS 변수 없음 |

### !important 검사

없음 — PASS

### 인라인 스타일 검사

| 라인 | 내용 | 판정 |
|------|------|------|
| 1187 | `style="padding-top:0;padding-bottom:0;"` (section) | **결함** — CSS 클래스로 분리 필요 |
| 1201 | `style="margin-top:var(--ds-space-md);font-size:var(--ds-text-sm);color:var(--ds-color-text-secondary);"` | **결함** — CSS 클래스 분리 필요 |
| 1243 | `style="background:var(--ds-color-neutral-050);border-radius:12px;..."` (placeholder) | **결함** — CSS 클래스 분리 필요 |
| 1260 | (동일 패턴) | **결함** |
| 1277 | (동일 패턴) | **결함** |
| 1517 | `style="background-image:url('https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images/bg-gradient-cream-jade.jpg');"` | **결함** — ds-bg-- 클래스로 분리 필요 |

### ds-text--brand 적용 여부

명세서 기준 강조 키워드 전수 확인:

| 섹션 | 강조 키워드 | 적용 | 라인 |
|------|-----------|------|------|
| S2 배너 | usable / privacy-safe / stable for production execution | PASS | 1189 |
| S4 | LLM. | PASS | 1213 |
| S6 | the alternatives | PASS | 1316 |
| S7 | AI-ready data. | PASS | 1373 |
| S8 | AI. Now removed. | PASS | 1407 |
| S10 | global regulated industries. | PASS | 1569 |
| S11 | LLM data security | PASS | 1637 |
| S12 | blocks AI adoption. | PASS | 1667 |
| S13 | recognized | PASS | 1708 |
| S14 | industry leaders | PASS | 1791 |
| S15 | doing nothing. | PASS | 1841 |
| S16 | questions | PASS | 1903 |

**ds-text--brand 전항목 PASS**

### 배너 좌측 border 확인

`border-left` 없음 (ds-banner에 상하 1px border만) — PASS

### KPI 수치 파란색 확인

`.ds-kpi-band__number { color: var(--ds-color-white); }` (line 530) — PASS (흰색, 파란색 아님)

### 카드 배경색 확인

`.ds-card { background-color: var(--ds-color-surface-white); }` (line 542) — PASS

### CTA 배치 확인

`<section class="ds-cta-band ...">` (line 2003) — `</main>` 이후 배치, ds-container 밖 — PASS

### word-break 전역 확인

`body { word-break: keep-all; }` (line 115) — PASS

### 인라인 middot 확인

line 1165: `Secure LLM usage &nbsp;·&nbsp; Prompt data leakage prevention &nbsp;·&nbsp; Enterprise LLM privacy &nbsp;·&nbsp; PII anonymization at runtime`

인라인 middot(`·`) 4개 사용 — **결함** (ds-bullet--dot 불릿 리스트로 분리 필요)

### 폰트 색상 최소 명도 확인

`color.*neutral-150|color.*neutral-050|color.*neutral-025` — `:root` 변수 정의 및 placeholder `color:var(--ds-color-text-tertiary)` 외에 직접 텍스트 color 미사용 — PASS

### 배경 이미지 위 텍스트 색상 확인

`.ds-banner-full__footnote { color: var(--ds-color-text-secondary); }` (line 2053)
해당 footnote는 `ds-banner--full ds-bg--gradient-sage-rose` (배경 이미지) 위에 있음 — **결함** (black/white만 허용)

### ds-section--light 남용 확인

HTML 섹션에서 `ds-section--light` 사용 현황:
- S3 (line 1196), S6 (line 1313), S8 (line 1404), S10 (line 1566), S12 (line 1664), S14 (line 1788), S16 (line 1900)

총 **7개** 사용 — **결함** (3개 이상 남용 기준 초과)

### DS에 없는 커스텀 CSS 변수 확인

```
--ds-kpi-band-bg-default: linear-gradient(135deg, #1a6fe8, #0ea5a0); (line 193)
--ds-badge-teal-color: #0e9f8e; (line 194)
--ds-cta-band-bg-default: linear-gradient(135deg, #b2f0e8 0%, #7ecfea 40%, #4a9fd4 100%); (line 195)
```

design-system.md에 정의되지 않은 임의 변수 3개 — **결함**

### Hero eyebrow 확인

Hero 섹션 내 eyebrow 없음 — PASS

### --ds-content-max-width 값 확인

`--ds-content-max-width: 1200px;` (line 261) — **결함** (1440px이어야 함)
단, 실제 `.ds-container` 미디어쿼리에서 `max-width: 1440px` 적용(line 1086)으로 화면 렌더링은 정상이나, 변수 값 자체가 DS 스펙과 불일치.

---

## [CAT-3] 코드 품질 검증

| 항목 | 결과 |
|------|------|
| 시맨틱 태그 사용 | PASS |
| 모든 section에 id | PASS — section-1~18 전수 확인 |
| HTML 유효성 | PASS |
| 이미지 alt 또는 aria-label | PASS |
| 폰트 로드 (Google Fonts) | PASS — DM Sans / Oxanium / Fragment Mono (line 103) |
| 아코디언 토글 button 태그 | **결함 Medium** — line 1911: `<div class="ds-ac-card__toggle">` — `<button>` 태그여야 함 |
| eyebrow "//" 없음 | PASS |
| CTA 밴드 타이틀 64px 이상 | PASS — `font-size: var(--ds-text-7xl)` (line 1103, 데스크톱) |
| CTA 밴드 텍스트 흰색 | PASS — `color: var(--ds-color-white)` (line 758) |

---

## [CAT-4] 반응형 검증

| 항목 | 결과 |
|------|------|
| min-width: 768px 존재 | PASS (line 1033) |
| min-width: 1024px 존재 | PASS (line 1057) |
| min-width: 1440px 존재 | PASS (line 1085) |
| mobile(375) padding 16px | PASS (line 257: `--ds-container-padding-mobile: 16px`) |
| tablet(768) padding 32px | PASS (line 258: `--ds-container-padding-tablet: 32px`) |
| sm-desktop(1024) padding 32px | PASS (line 259) |
| desktop(1440) padding 120px | PASS (line 260) |
| 컨테이너 max-width 1440px | PASS (line 1086, 미디어쿼리 적용 확인) |
| 여백 하드코딩 (ds-container 외부) | PASS — 해당 없음 |
| mobile 1열 grid | PASS |
| Typography 4단계 단계적 변화 | PASS |
| body padding-top: 58px | PASS (line 114) |
| ds-hero-screenshot-section padding-top 100px | PASS (line 397) |

**CAT-4 결과: 전항목 PASS**

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| Q01 | CAT-2 | High | line 1165 | 인라인 middot(`·`) 사용 | Hero oneliner 4개 항목을 `&nbsp;·&nbsp;`로 나열. ds-bullet--dot 불릿 리스트로 분리 필요 (인라인 middot 금지) |
| Q02 | CAT-2 | High | lines 325, 434, 480, 496, 521, 534, 728, 752, 761, 763, 765 | 하드코딩 rgba 색상 11개소 | nav 배경, box-shadow, 오버레이, kpi label, cta 텍스트/버튼 등에서 rgba() 직접 사용. `:root`에 컴포넌트 토큰 등록 후 var() 참조 필요 |
| Q03 | CAT-2 | High | lines 193, 194, 195 | design-system.md에 없는 커스텀 CSS 변수 3개 | `--ds-kpi-band-bg-default`, `--ds-badge-teal-color`, `--ds-cta-band-bg-default` — DS에 공식 등록되지 않은 임의 변수명 |
| Q04 | CAT-2 | High | lines 1187, 1201, 1243, 1260, 1277, 1517 | 인라인 style 속성 6개소 | section padding 직접 지정(1187), 배너 내 p 태그 스타일(1201), placeholder div 스타일(1243·1260·1277), product-split visual background-image(1517) |
| Q05 | CAT-2 | High | line 2053 | 배경 이미지 위 텍스트에 `text-secondary` 사용 | `ds-banner-full__footnote`에 `color: var(--ds-color-text-secondary)`. 해당 배너는 ds-bg--gradient-sage-rose 배경 이미지 위 — black(text-primary) 또는 white만 허용 |
| Q06 | CAT-2 | High | lines 1196, 1313, 1404, 1566, 1664, 1788, 1900 | `ds-section--light` 7개 남용 | S3·S6·S8·S10·S12·S14·S16 모두 ds-section--light 적용. 총 7개로 3개 이상 남용 기준 초과. 일부 섹션은 배경 이미지로 교체하여 시각 다양성 확보 필요 |
| Q07 | CAT-2 | High | line 261 | `--ds-content-max-width: 1200px` (1440px이어야 함) | DS 기준 컨테이너 max-width는 1440px. 변수값이 1200px로 잘못 설정됨 (실제 미디어쿼리에서는 1440px 적용되어 있어 화면 영향은 제한적이나 변수 불일치) |
| Q08 | CAT-3 | Medium | lines 1909, 1911, 1921, 1923, 1933, 1935 등 | 아코디언 토글 `<div>` 태그 사용 | `<div class="ds-ac-card__toggle">` — 접근성 요건 및 DS 스펙상 `<button>` 태그 사용 필수 |

---

## 통계

- 전체 결함 수: 8개
- Critical: 0개
- High: 7개
- Medium: 1개
- Low: 0개

---

## 최종 판정

**FAIL**

---

## 판정 근거

High 심각도 결함 7개가 존재한다. FAIL 처리 기준 항목들이 다수 포함되어 있다:

- **Q01**: 인라인 middot 사용 (긴 문장 불릿 미분리 또는 인라인 middot 사용 → FAIL 필수)
- **Q02**: 하드코딩 rgba 색상 11개소 (하드코딩 색상 → FAIL 필수)
- **Q03**: DS에 없는 커스텀 CSS 변수 3개 (DS에 없는 커스텀 CSS 변수 사용 → FAIL 필수)
- **Q04**: 인라인 style 6개소 (하드코딩/인라인 규칙 위반)
- **Q05**: 배경 이미지 위 text-secondary 사용 (배경 이미지 위 secondary/muted 색상 → FAIL 필수)
- **Q06**: ds-section--light 7개 남용 (ds-section--light 남용 → FAIL 필수)
- **Q07**: --ds-content-max-width 1200px 오류

CAT-1 내용 무결성: 전항목 PASS (텍스트, 수치, 목록 항목 수 원본 일치)
CAT-4 반응형 breakpoint: 전항목 PASS

---

## 다음 액션

**FAIL**: frontend-dev 에이전트에 `output/docs/A-cubig-llm-v3-qa-report.md`의 결함 목록을 전달하고 `output/html/A-cubig-llm-v3-b-type.html` 수정 요청. 수정 완료 후 qa 에이전트 재호출 필요.

### 수정 우선순위

**[High — 필수 수정]**

**Q01**: line 1165 — 인라인 middot 제거, ds-bullet--dot 리스트 변환
```html
<!-- 현재 (결함) -->
<p class="ds-hero__oneliner">Secure LLM usage &nbsp;·&nbsp; Prompt data leakage prevention &nbsp;·&nbsp; Enterprise LLM privacy &nbsp;·&nbsp; PII anonymization at runtime</p>

<!-- 수정 -->
<ul class="ds-bullet ds-bullet--dot ds-hero__oneliner-list">
  <li>Secure LLM usage</li>
  <li>Prompt data leakage prevention</li>
  <li>Enterprise LLM privacy</li>
  <li>PII anonymization at runtime</li>
</ul>
```

**Q02**: :root에 컴포넌트 토큰 추가 후 var() 참조
```css
/* :root에 추가 */
--ds-nav-bg: rgba(255,255,255,0.92);
--ds-overlay-white-72: rgba(255,255,255,0.72);
--ds-overlay-white-15: rgba(255,255,255,0.15);
--ds-overlay-black-15: rgba(0,0,0,0.15);
--ds-kpi-label-color: rgba(255,255,255,0.85);
--ds-cta-description-color: rgba(255,255,255,0.85);
--ds-cta-footnote-color: rgba(255,255,255,0.6);
--ds-cta-btn-bg: rgba(255,255,255,0.92);
--ds-shadow-screenshot: 0 -8px 40px rgba(0,0,0,0.12);
--ds-banner-brand-bg: rgba(166,23,255,0.06);
```

**Q03**: DS에 없는 변수 처리
- `--ds-badge-teal-color`: DS design-system.md에 `#0e9f8e` 하드코딩으로 사용. 변수명을 제거하고 직접 `#0e9f8e` 사용하거나 design-system-agent에 변수 추가 요청
- `--ds-kpi-band-bg-default`, `--ds-cta-band-bg-default`: :root 변수 유지하되 design-system-agent를 통해 DS에 공식 등록

**Q04**: 인라인 스타일 CSS 클래스로 분리
- line 1187: `.ds-section--banner-wrapper { padding: 0; }` 클래스 생성
- line 1201: `.ds-banner__secondary-text { margin-top: var(--ds-space-md); font-size: var(--ds-text-sm); color: var(--ds-color-text-secondary); }` 클래스 생성
- lines 1243·1260·1277: `.ds-screenshot-placeholder { ... }` 클래스 생성
- line 1517: `.ds-bg--gradient-cream-jade { background-image: url('https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images/bg-gradient-cream-jade.jpg'); }` CSS 클래스로 이동

**Q05**: line 2053 수정
```css
/* 현재 (결함) */
.ds-banner-full__footnote { color: var(--ds-color-text-secondary); }

/* 수정 */
.ds-banner-full__footnote { color: var(--ds-color-text-primary); }
```

**Q06**: ds-section--light 남용 해소 — 7개 중 4개를 배경 이미지 섹션으로 교체 권장
- S8 (Detection Coverage), S12 (Blockers), S14 (Partners) 등을 배경 이미지 변형 섹션으로 변경 검토

**Q07**: line 261 수정
```css
/* 현재 (결함) */
--ds-content-max-width: 1200px;

/* 수정 */
--ds-content-max-width: 1440px;
```

**[Medium — 수정 권고]**

**Q08**: 아코디언 토글 `<div>` → `<button>` 교체 (lines 1911, 1923 등)
```html
<!-- 현재 (결함) -->
<div class="ds-ac-card__toggle" aria-label="Toggle answer">

<!-- 수정 -->
<button class="ds-ac-card__toggle" type="button" aria-label="Toggle answer">
```
