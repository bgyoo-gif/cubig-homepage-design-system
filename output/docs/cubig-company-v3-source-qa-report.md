# QA Report
- 검증일: 2026-03-24 (오늘)
- 대상 파일: output/html/cubig-company-v3-source-b-type.html
- 원본 파일: input/cubig-company-v3-source.html
- 명세서: output/docs/cubig-company-v3-source-spec.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| Q01 | CAT-2 | High | line 627-629 | `ds-founding-year` 텍스트 색상에 `var(--ds-color-neutral-150)` 사용 | neutral-150(#e6e7e9)은 배경/border 전용 색. 텍스트 최소 명도 기준(neutral-400 이상)을 위반. 장식적 데코레이션 텍스트라도 color에 neutral-150 사용은 FAIL 기준 항목 |
| Q02 | CAT-2 | High | line 810, 811, 814, 817, 820, 839, 925, 928, 931, 1033, 1036, 1250, 1255, 1260, 1267, 1320, 1322, 1401 | 인라인 `style` 속성 다수 사용 (CSS 변수 전달 목적 제외) | `style="max-width: 860px; margin: 0 auto;"`, `style="font-weight: var(--ds-weight-medium); margin-bottom: var(--ds-space-lg); color: var(--ds-color-text-primary);"`, `style="color: var(--ds-color-text-secondary); margin-bottom: var(--ds-space-md);"` 등 색상·여백·레이아웃을 인라인으로 직접 지정. 별도 유틸리티 클래스 또는 컴포넌트 클래스로 분리해야 함 |
| Q03 | CAT-3 | Medium | line 1044 (`id="section-9"`) | Section 9 (Partners) 배경이 명세서 `ds-section--light`인데 실제 `ds-section`(white)으로 구현됨 | 명세서 Section 9 Background: surface-light. 실제 클래스: `<section class="ds-section" id="section-9">`. Section 8(white) → Section 9(white) → Section 10(white) 3개 연속 흰색 배경 발생 |
| Q04 | CAT-3 | Medium | line 1239 (`id="section-11"`) | Section 11 (Values+Contact) 배경이 명세서 `ds-section--light`인데 실제 `ds-section`(white)으로 구현됨 | 명세서 Section 11 Background: surface-light. 실제 클래스: `<section class="ds-section" id="section-11">`. 배경 교대 패턴 명세 불이행 |
| Q05 | CAT-3 | Medium | line 306 | `--ds-content-max-width: 1200px`으로 DS 기준(1440px)과 다르게 선언됨 | DS design-system.md에서 `--ds-content-max-width: 1200px`이 정의되어 있으나 실제 @media 1440px에서는 `max-width: 1440px`을 직접 지정하므로 렌더링 영향은 없음. 다만 변수 값이 DS 명세와 불일치하여 혼란을 줄 수 있음 |

---

## 상세 근거

### Q01 — neutral-150 텍스트 색상 (High)

```css
/* line 627-629 */
.ds-founding-year {
  font-family: var(--ds-font-base); font-size: 80px; font-weight: var(--ds-weight-bold);
  color: var(--ds-color-neutral-150); /* 결함: #e6e7e9는 텍스트 최소 명도 위반 */
  ...
}
```

규칙: 텍스트 color에 neutral-150/050/025 사용 금지 (최소 neutral-400). `ds-founding-year`는 장식적 대형 연도 표시용이지만 color 규칙은 예외 없이 적용됨. neutral-200(#e0e0e0) 또는 neutral-250(#c4c4c4) 이상으로 변경해야 함. (장식적 목적이면 neutral-200~250 범위에서 선택)

### Q02 — 인라인 스타일 다수 (High)

CSS 변수를 값으로 전달하는 경우(e.g. `style="--custom-var: value"`)만 예외. 그러나 다음은 직접 스타일 제어로 규칙 위반:

- `line 810`: `style="max-width: 860px; margin: 0 auto;"` — 레이아웃 제어용 인라인
- `line 811`: `style="font-weight: var(--ds-weight-medium); margin-bottom: var(--ds-space-lg); color: var(--ds-color-text-primary);"` — 컬러/폰트 제어
- `line 814, 817`: `style="color: var(--ds-color-text-secondary); margin-bottom: ..."` — 컬러/여백 제어
- `line 820`: `style="display: flex; gap: var(--ds-space-lg); flex-wrap: wrap;"` — 레이아웃 제어
- `line 839`: `style="font-weight: var(--ds-weight-medium); color: var(--ds-color-text-primary);"` — 폰트/컬러 제어
- `line 925, 928, 931`: `style="color: var(--ds-color-text-secondary);"` — 컬러 제어
- `line 1033`: `style="margin-top: var(--ds-space-sm);"` — 여백 제어
- `line 1036`: `style="display: flex; gap: var(--ds-space-md); flex-wrap: wrap; margin-top: var(--ds-space-xl);"` — 레이아웃 제어
- `line 1250, 1255, 1260`: `style="margin-bottom: var(--ds-space-md);"` — 여백 제어
- `line 1267`: `style="margin-top: var(--ds-space-3xl);"` — 여백 제어
- `line 1320`: `style="color: var(--ds-color-white);"` — 컬러 제어 (카드 내 직접 색상 지정)
- `line 1322`: `style="font-size: var(--ds-text-sm); line-height: var(--ds-leading-relaxed); color: var(--ds-color-white);"` — 폰트/컬러 제어
- `line 1401`: `style="color: var(--ds-color-text-tertiary);"` — 컬러 제어

모두 유틸리티 클래스 또는 컴포넌트 수정 클래스로 이동해야 함.

### Q03, Q04 — Section 9, 11 배경 불일치 (Medium)

명세서 Background Image Allocation Plan 및 Layout Flow Summary:
- Section 9 (Partners): surface-light
- Section 11 (Values+Contact): surface-light

실제 구현:
- Section 9: `<section class="ds-section" id="section-9">` (흰색 배경)
- Section 11: `<section class="ds-section" id="section-11">` (흰색 배경)

결과: Section 8(white) → 9(white) → 10(white) 3개 연속 흰색 배경 패턴 발생. 명세서에서 의도한 교대 배경 패턴이 깨짐.

### Q05 — ds-content-max-width 1200px (Medium/Low)

`line 306`: `--ds-content-max-width: 1200px;`

DS 기준에서는 max-width가 1440px이나, `--ds-content-max-width` 변수는 실제 `var(--ds-content-max-width)`로 사용되지 않고 @media 1440px에서 직접 `max-width: 1440px`으로 선언되어 있어 렌더링 영향은 없음. 변수 선언만 수정 권고.

---

## 통과 항목 (PASS)

- [PASS] !important 미사용
- [PASS] 하드코딩 색상 없음 (CSS 변수 선언 내 #hex는 :root 정의용, SVG fill #725bea는 DS 팔레트 내 값)
- [PASS] ds-text--brand 12개 섹션 모두 적용 (spec 기준 키워드 일치)
- [PASS] ds-banner에 border-left 없음 (상하 얇은 border만)
- [PASS] KPI 수치(2021, 3x, AWS, 2+)가 파란색 아닌 white(어두운 배경용 ds-kpi-band__number)
- [PASS] ds-card 기본 배경 흰색(surface-white)
- [PASS] KPI 배경 이미지가 섹션이 아닌 ds-kpi-band 컴포넌트에 적용
- [PASS] CTA 밴드가 `</main>` 외부 (ds-container 밖)에 배치됨 (line 1329-1344)
- [PASS] body에 word-break: keep-all 적용 (line 160)
- [PASS] 긴 문장이 ds-bullet--dot 불릿보다는 p 태그로 나뉘어 있음 (인라인 middot은 hero sub-line에서 &nbsp;·&nbsp; 형태로 사용되나 제품명 구분자로 적절한 용도)
- [PASS] 배경 이미지 위 텍스트 secondary/tertiary/muted 사용 없음 (ds-banner--full, ds-kpi-band 내부는 white/DS 기본 색상)
- [PASS] ds-section--light 3개만 사용 (section-3, 5, 7) — 남용 아님
- [PASS] 모든 CSS 변수가 DS에 정의된 것만 사용 (커스텀 변수 없음)
- [PASS] Hero 섹션에 eyebrow 없음
- [PASS] 4단계 breakpoint 모두 존재 (768/1024/1440)
- [PASS] body padding-top: 58px 적용 (line 159)
- [PASS] ds-section--hero padding-top 100px 적용 (line 342)
- [PASS] 컨테이너 max-width 1440px (@media 1440px에서)
- [PASS] 배경 이미지 중복 없음 (각 ds-bg--* 사용 1회씩, CSS 정의 제외)
- [PASS] 11개 파트너 마퀴 구현 완료
- [PASS] 11개 인증/수상 마퀴 구현 완료, cloneNode JS 포함
- [PASS] 구글 폰트 DM Sans + Oxanium + Fragment Mono 로드됨 (line 150)
- [PASS] 모든 12개 섹션에 id="section-N" 부여됨
- [PASS] ds-text--product가 SynTitan, DTS, LLM Capsule에 적용됨
- [PASS] CTA 밴드 텍스트 흰색 (ds-cta-band__title color white, line 613)
- [PASS] CTA 밴드 타이틀 1440px 기준 64px (ds-text-7xl, line 722)
- [PASS] 원본 A타입의 모든 주요 섹션 내용 보존됨 (CAT-1 무결성)

---

## 통계
- 전체 결함 수: 5개
- Critical: 0개
- High: 2개
- Medium: 3개
- Low: 0개

---

## 최종 판정

**FAIL**

---

## 판정 근거

High 심각도 결함 2개가 존재하여 CONDITIONAL PASS 기준을 충족하지 못함:

1. **Q01 (High)**: `ds-founding-year`의 텍스트 color에 `var(--ds-color-neutral-150)` (#e6e7e9) 사용 — 텍스트 최소 명도 규칙(neutral-400 이상) 위반. FAIL 처리 기준 항목에 해당.
2. **Q02 (High)**: 다수의 인라인 `style` 속성 사용 — CSS 변수 전달 목적이 아닌 색상, 여백, 레이아웃 직접 제어. 18개 위치에서 발생. FAIL 처리 기준 항목에 해당.

CAT-1 내용 무결성은 완전히 통과. 반응형 4단계 breakpoint 완비. ds-text--brand 모든 섹션 적용. 구조적으로는 우수한 구현이나 High 결함 2개로 인해 FAIL 처리.

---

## 다음 액션

**FAIL**: frontend-dev 에이전트에 `output/docs/cubig-company-v3-source-qa-report.md`의 결함 목록을 확인하고 `output/html/cubig-company-v3-source-b-type.html`을 수정해줘. 수정 완료 후 다시 qa 에이전트를 호출해줘.

### 수정 우선순위

**[필수 수정 — High]**

1. **Q01**: `line 629`에서 `.ds-founding-year { color: var(--ds-color-neutral-150); }` 를 `color: var(--ds-color-neutral-200);` 또는 `color: var(--ds-color-neutral-250);`으로 변경 (장식적 텍스트이므로 neutral-200/250 범위에서 연하게 표현 가능, 단 neutral-150 미만이어야 함)

2. **Q02**: 모든 인라인 `style` 속성을 제거하고 전용 유틸리티 클래스 또는 BEM 수정 클래스로 대체:
   - `line 810`: `<div style="max-width: 860px; margin: 0 auto;">` → `.ds-text-block--centered` 클래스 생성 후 적용
   - `line 811, 814, 817`: `style="color: ..."`  → DS 컴포넌트 클래스(`.ds-body-l`, `.ds-body-m`)에 이미 색상이 없으므로 `:root` 클래스에서 정의하거나, `ds-story-paragraphs` 하위 선택자로 CSS 처리
   - `line 820, 1036`: `style="display: flex; gap: ..."` → `.ds-btn-group` 또는 `.ds-link-row` 클래스 생성
   - `line 839`: `style="font-weight: ...; color: ..."` → `.ds-mission-text` 등 컴포넌트 클래스 추가
   - `line 925, 928, 931`: `style="color: var(--ds-color-text-secondary);"` → `.ds-story-paragraphs .ds-body-m` CSS 선택자로 이동
   - `line 1033`: `style="margin-top: ..."` → `.ds-banner--full p + p` 등 인접 선택자로 처리
   - `line 1250, 1255, 1260`: `style="margin-bottom: var(--ds-space-md);"` → `.ds-card .ds-badge` margin을 CSS에서 처리
   - `line 1267`: `style="margin-top: var(--ds-space-3xl);"` → `.ds-section-header--subsection` 등 추가 클래스
   - `line 1320, 1322`: `style="color: var(--ds-color-white);"` → `.ds-card--gradient-brand .ds-card--gradient__inner` 하위 p 선택자로 CSS에서 white 적용
   - `line 1401`: `style="color: var(--ds-color-text-tertiary);"` → `.ds-footer__copy a` CSS 선택자로 처리

**[권고 수정 — Medium]**

3. **Q03**: `line 1044` — `<section class="ds-section" id="section-9">` → `<section class="ds-section ds-section--light" id="section-9">`

4. **Q04**: `line 1239` — `<section class="ds-section" id="section-11">` → `<section class="ds-section ds-section--light" id="section-11">`

5. **Q05**: `line 306` — `--ds-content-max-width: 1200px;` → `--ds-content-max-width: 1440px;` (또는 변수 자체를 삭제 — 실제 사용되지 않으므로)
