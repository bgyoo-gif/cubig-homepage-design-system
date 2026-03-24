# QA Report (3차 검증)

- 검증일: 2026-03-24 (3차)
- 대상 파일: output/html/A-cubig-proof-v3-b-type.html
- 원본 파일: input/A-cubig-proof-v3.html
- 명세서: output/docs/A-cubig-proof-v3-spec.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| Q01 | CAT-2 | High | line 167 | `--ds-color-teal: #0e9f8e` 커스텀 변수 선언 (line 494, 643에서 사용) | design-system.md에 `--ds-color-teal`이 정의되어 있지 않음. DS 규칙 21조 위반: "임의로 새 변수를 만들지 않는다." |
| Q02 | CAT-2 | High | line 176–178 | `--ds-overlay-light`, `--ds-overlay-dark`, `--ds-overlay-cta-btn` 커스텀 변수 선언 및 사용 | design-system.md에 이 오버레이 변수들이 정의되지 않음. 임의 변수 생성 금지 규칙 위반 |
| Q03 | CAT-2 | High | line 297 | `.ds-nav` `background: rgba(255,255,255,0.92)` 하드코딩 | `:root` 변수로 추출하지 않고 rgba 값 직접 사용 |
| Q04 | CAT-2 | High | line 440 | `.ds-kpi-band::before` `background: rgba(0,0,0,0.35)` 하드코딩 | KPI band 오버레이 rgba 직접 하드코딩. DS 변수 없음 |
| Q05 | CAT-2 | High | line 449 | `.ds-kpi-band__label` `color: rgba(255,255,255,0.85)` 하드코딩 | 배경 이미지 위 텍스트 색상을 rgba로 직접 지정 |
| Q06 | CAT-2 | High | line 643 | `.ds-badge--teal` `background-color: rgba(14,159,142,0.12)` 하드코딩 | 정의되지 않은 teal 파생 색상 rgba 직접 사용 |
| Q07 | CAT-2 | High | line 645–646 | `.ds-badge--success` `rgba(14,130,76,0.12)`, `.ds-badge--warn` `rgba(245,158,11,0.12)` 하드코딩 | 배지 배경색 rgba 직접 지정. DS 변수 없음 |
| Q08 | CAT-2 | High | line 782 | `.ds-cta-band__description` `color: rgba(255,255,255,0.85)` 하드코딩 | CTA band 설명 텍스트 색상 하드코딩 |
| Q09 | CAT-2 | High | line 787 | `.ds-cta-band__actions .ds-btn` `background: rgba(255,255,255,0.92)`, `border: 1px solid rgba(255,255,255,0.6)` 하드코딩 | CTA 버튼 배경·테두리 색상 하드코딩 |
| Q10 | CAT-2 | High | line 789 | `.ds-cta-band__footnote` `color: rgba(255,255,255,0.6)` 하드코딩 | CTA footnote 색상 하드코딩 |
| Q11 | CAT-2 | High | line 432 | `.ds-kpi-band` `padding: 48px 40px` 수치 하드코딩 | `48px`, `40px` 모두 DS spacing 변수(`--ds-space-*`)에 없는 임의 값 |
| Q12 | CAT-2 | High | line 451 | `.ds-kpi-band` mobile `padding: 32px 20px` 수치 하드코딩 | `20px`은 DS spacing 변수에 없는 임의 값 |
| Q13 | CAT-2 | Medium | line 835 | `<div class="ds-banner" style="margin-top: var(...); margin-bottom: var(...);">` 인라인 style | margin 제어를 인라인 style로 처리. CSS 클래스로 분리 필요 |
| Q14 | CAT-2 | Medium | line 849 | `<section id="section-2" style="padding-top: 0; padding-bottom: var(...);">` 인라인 style | section 요소에 패딩 조정 인라인 처리. CSS 클래스로 분리 필요 |
| Q15 | CAT-2 | Medium | line 1317 | `<div class="ds-banner" style="margin-top: var(...);">` 인라인 style | margin 조정 인라인 처리 |
| Q16 | CAT-2 | Medium | line 1460 | `<div class="ds-banner" style="margin-top: var(...);">` 인라인 style | margin 조정 인라인 처리 |
| Q17 | CAT-2 | Medium | line 1373, 1401, 1427, 1453 | 스크린샷 placeholder `<div style="background: ...">` 인라인 style (4개) | Step Tabs placeholder에 복잡한 인라인 style. CSS 클래스 `.ds-step-tabs__placeholder`로 분리 필요 |
| Q18 | CAT-4 | Medium | line 366–368 | Hero 타이틀 폰트 크기 하드코딩: `48px`, `56px`, `68px` | DS 변수(`--ds-text-5xl`=40px, `--ds-text-6xl`=50px, `--ds-text-7xl`=64px) 대신 임의 pixel값 사용. 48px, 56px, 68px은 DS에 없는 값 |
| Q19 | CAT-3 | Low | line 258 | `--ds-content-max-width: 1200px` 선언 후 미사용 | `.ds-container`에 max-width 1440px이 직접 사용됨(line 283). 불필요 변수 |
| Q20 | CAT-3 | Low | line 791 | `.ds-cta-band` desktop `padding: 120px var(--ds-container-padding-desktop)` 수치 하드코딩 | `120px`을 DS spacing 변수로 표현해야 하나 정확한 대응 변수 없음(--ds-space-6xl=150px). 허용 여지 있으나 주석 처리 권고 |

---

## 결함 상세

### Q01: `--ds-color-teal` 커스텀 변수

design-system.md 21조: *"임의로 새 변수(`--ds-color-teal`, `--ds-bg-gradient-*` 등)를 만들지 않는다."* 라고 명시적으로 `--ds-color-teal`을 예시로 들어 금지함.

- line 167: `:root` 선언
- line 494: `.ds-card__badge--teal { color: var(--ds-color-teal); border-color: var(--ds-color-teal); }`
- line 643: `.ds-badge--teal { ... color: var(--ds-color-teal); }`

수정: `var(--ds-color-teal)` 대신 `#0e9f8e` 하드코딩으로 처리하거나, design-system-agent를 통해 DS에 추가.

### Q02: `--ds-overlay-*` 커스텀 변수

design-system.md 전체를 검색한 결과, `--ds-overlay-light`, `--ds-overlay-dark`, `--ds-overlay-cta-btn` 변수 정의 없음.

- line 176: `--ds-overlay-light: rgba(255,255,255,0.72);`
- line 177: `--ds-overlay-dark: rgba(0,0,0,0.15);`
- line 178: `--ds-overlay-cta-btn: rgba(255,255,255,0.6);`

수정: DS에 추가하거나, 사용처에 직접 rgba 값 기입 (단, 그렇게 하면 Q03~Q10 결함으로 남음). 근본적으로 design-system-agent를 통해 DS 오버레이 변수를 추가해야 함.

### Q03~Q10: 하드코딩 rgba 색상

| 위치 | 값 | 컴포넌트 |
|------|----|---------|
| line 297 | `rgba(255,255,255,0.92)` | nav 배경 |
| line 440 | `rgba(0,0,0,0.35)` | KPI band 오버레이 |
| line 449 | `rgba(255,255,255,0.85)` | KPI label 색상 |
| line 643 | `rgba(14,159,142,0.12)` | badge-teal 배경 |
| line 645 | `rgba(14,130,76,0.12)` | badge-success 배경 |
| line 646 | `rgba(245,158,11,0.12)` | badge-warn 배경 |
| line 782 | `rgba(255,255,255,0.85)` | CTA description |
| line 787 | `rgba(255,255,255,0.92)`, `rgba(255,255,255,0.6)` | CTA 버튼 |
| line 789 | `rgba(255,255,255,0.6)` | CTA footnote |

수정: `:root`에 컴포넌트 토큰으로 추가 후 `var()` 참조.

### Q11~Q12: KPI Band 수치 하드코딩

```css
/* line 432 */
.ds-kpi-band { padding: 48px 40px; }
/* line 451 */
@media (max-width: 767px) { .ds-kpi-band { padding: 32px 20px; } }
```

DS spacing: `--ds-space-xl: 32px`, `--ds-space-md: 16px`, `--ds-space-2xl: 48px`, `--ds-space-lg: 24px`
`40px`, `20px`, `48px`(상하는 2xl이나 40px은 없음)을 근사 DS 변수로 대체 필요.

### Q18: Hero 타이틀 폰트 크기 하드코딩

```css
/* line 366-368 */
@media (min-width: 768px)  { font-size: 48px; }
@media (min-width: 1024px) { font-size: 56px; }
@media (min-width: 1440px) { font-size: 68px; }
```

DS 정의: `--ds-text-5xl: 40px`, `--ds-text-6xl: 50px`, `--ds-text-7xl: 64px`
`48px`, `56px`, `68px`은 DS에 없음. 근사값 사용 또는 DS 확장 필요.

---

## 통과 항목

- [PASS] CAT-1 내용 무결성: 9개 섹션 모두 존재. 원문 텍스트 누락 없음
- [PASS] `!important` 없음
- [PASS] `ds-text--brand` 적용: 6개 섹션 spec 강조 키워드 모두 적용
- [PASS] `ds-banner` 좌측 굵은 border 없음 (상하 얇은 border만)
- [PASS] KPI band 수치 색상: white (파란색 아님)
- [PASS] `ds-card` 기본 배경: `var(--ds-color-surface-white)` (흰색)
- [PASS] `ds-section--light` 개수: 2개 (규칙 준수)
- [PASS] CTA band가 `ds-container` 밖 배치 (전폭)
- [PASS] `body`에 `word-break: keep-all` 적용 (line 98)
- [PASS] Hero 섹션 eyebrow 없음
- [PASS] 배너 텍스트 가운데 정렬
- [PASS] `ds-banner--full`에 배경 이미지 + 오버레이 사용
- [PASS] 동일 배경 이미지 중복 없음 (grad-deep/wave-teal/grad-navy 각 1회)
- [PASS] 4단계 breakpoint 모두 존재 (768/1024/1440px)
- [PASS] `body` `padding-top: 58px` (line 97)
- [PASS] `ds-section--hero` `padding-top: 100px` (line 286)
- [PASS] CTA band 타이틀 `font-size: var(--ds-text-7xl)` = 64px
- [PASS] 아코디언 toggle이 CSS pseudo-element 버튼으로 구현 (텍스트 "+" 금지 준수)
- [PASS] eyebrow "//" 없음
- [PASS] 긴 문장 인라인 middot 없음
- [PASS] 배경 이미지 위 텍스트 색상 적절 (KPI=white, banner-full=검정, CTA=white)
- [PASS] 텍스트 color에 neutral-150/050/025 미사용
- [PASS] `ds-text--product`(Oxanium) SynTitan, DTS, LLM Capsule 제품명에만 사용
- [PASS] 모든 section에 id 부여 (section-1 ~ section-9)
- [PASS] 시맨틱 태그 적절히 사용
- [PASS] Google Fonts 로드 (DM Sans, Oxanium, Fragment Mono)
- [PASS] 파트너 마키 cloneNode seamless loop 구현
- [PASS] 아코디언 header grid: `1fr auto auto` (160px 고정폭 금지 준수)
- [PASS] KPI band 배경 이미지가 ds-kpi-band 컴포넌트에 적용

---

## 통계

- 전체 결함 수: 20개
- Critical: 0개
- High: 12개 (Q01~Q12)
- Medium: 6개 (Q13~Q18)
- Low: 2개 (Q19~Q20)

---

## 최종 판정

**FAIL**

---

## 판정 근거

High 심각도 결함 12개 존재:

1. **커스텀 CSS 변수 2종 (Q01, Q02)** — DS에 없는 `--ds-color-teal`, `--ds-overlay-*` 변수 선언. DS 규칙 21조 명시 위반.
2. **하드코딩 rgba 색상 다수 (Q03~Q10)** — nav, KPI band, 배지, CTA band 등 전반에 걸쳐 `rgba(...)` 값이 변수 없이 직접 CSS에 기입. 총 9곳.
3. **수치 하드코딩 (Q11, Q12)** — KPI band padding에 DS에 없는 임의 px 값 사용.

---

## 다음 액션

**FAIL — frontend-dev 에이전트 재호출**

"QA FAIL 판정. `output/docs/A-cubig-proof-v3-qa-report.md`의 결함 목록을 확인하고 `output/html/A-cubig-proof-v3-b-type.html`을 수정해줘. 수정 완료 후 다시 qa 에이전트를 호출해줘."

**우선 수정 목록 (High — 필수):**
1. `--ds-color-teal` 변수 제거 → 사용처에 하드코딩 `#0e9f8e` 직접 기입 (또는 design-system-agent로 DS 추가)
2. `--ds-overlay-light/dark/cta-btn` 변수 제거 → 사용처에 rgba 직접 기입 또는 `:root` 토큰 재명명(DS 추가 후)
3. `rgba(...)` 하드코딩 9곳 → `:root` 컴포넌트 토큰으로 추출, `var()` 참조
4. KPI band `padding: 48px 40px` / `padding: 32px 20px` → DS spacing 변수로 대체
5. Hero 타이틀 `48px`, `56px`, `68px` → DS text 변수 근사값으로 대체

**수정 권고 (Medium):**
6. 인라인 style(margin/padding 제어) → CSS 클래스로 이동 (Q13~Q17)
