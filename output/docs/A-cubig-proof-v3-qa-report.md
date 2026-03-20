# QA Report (2차 검증)

- 검증일: 2026-03-16 (2차)
- 대상 파일: output/A-cubig-proof-v3-b-type.html
- 원본 파일: input/A-cubig-proof-v3.html
- 명세서: output/A-cubig-proof-v3-spec.md
- 디자인 시스템: .claude/skills/design-system.md
- QA 엔지니어: qa-agent
- 이전 검증: 1차 QA (22건 결함 발견 → 수정 요청 후 2차 검증)

---

## 1차 결함 수정 검증 결과

| 1차 결함 | 내용 | 2차 상태 |
|----------|------|----------|
| Q01~Q11 | rgba 하드코딩 → `:root` 토큰화 | FIXED — 모든 rgba가 `:root` 내 CSS 변수로 선언됨 |
| Q12 | h1/h2/h3 font-size px 하드코딩 | FIXED — `var(--ds-h1-base)`, `var(--ds-h2-base)`, `var(--ds-h3-base)` 사용 확인 |
| Q13, Q14 | letter-spacing -2px 하드코딩 | FIXED — `var(--ds-hero-title-tracking)` 토큰 추가 및 사용 확인 |
| Q15 | max-width 미디어쿼리 다수 사용 | FIXED — `max-width.*px.*{` grep 결과 0건 확인 |
| Q16 | KPI band padding 하드코딩 | FIXED — `var(--ds-space-xl) var(--ds-space-md)` 사용 확인 |
| Q17 | Business Impact 인라인 style (타이포그래피 목적) | FIXED — 해당 인라인 style 제거됨 |
| Q18 | SVG fill `#6C54A0` 하드코딩 | FIXED — `--ds-color-brand-deep: #6C54A0` 토큰 추가, `.ds-svg--brand-deep` 클래스 사용 확인 |
| Q19 | Footer SVG fill/stroke `#141414` 하드코딩 | FIXED — CSS 클래스로 처리 확인 |
| Q20 | gap 수치 하드코딩 | PARTIALLY FIXED — 일부 잔존 (하단 신규 결함 Q2-03~06 참조) |
| Q21 | nav logo 수치 하드코딩 | FIXED — `--ds-nav-logo-tracking`, `--ds-nav-sub-size`, `--ds-nav-sub-tracking` 토큰 추가 확인 |
| Q22 | sm-desktop CTA padding 누락 | FIXED — `@media (min-width: 1024px)` CTA padding 추가 확인 |

---

## 결함 목록 (2차 신규 발견)

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| Q2-01 | CAT-4 | Medium | line 587, 592 | `.ds-cta-band` 수직 padding `100px` 하드코딩 | `--ds-space-5xl: 100px` 토큰이 `:root`에 정의되어 있음에도 `padding: 100px var(...)` 형태로 직접 사용. `var(--ds-space-5xl) var(--ds-container-padding-tablet)` 으로 교체 필요 |
| Q2-02 | CAT-4 | Medium | line 593, 594 | `.ds-cta-band` desktop/wide 수직 padding `120px` 하드코딩 | `120px`에 해당하는 spacing 토큰 없음. `:root`에 `--ds-cta-band-padding-v-desktop: 120px` 전용 토큰 추가 후 `var()` 참조 필요. 대상: line 593 `padding: 120px var(--ds-container-padding-desktop)`, line 594 `padding: 120px var(--ds-container-padding-wide)` |
| Q2-03 | CAT-2 | Low | line 274 | `.ds-nav__logo` `gap: 10px` 하드코딩 | `10px`에 해당하는 정확한 spacing 토큰 없음. `:root`에 `--ds-nav-logo-gap: 10px` 추가 또는 `var(--ds-space-xs)` = 8px 근사값 사용 권고 |
| Q2-04 | CAT-2 | Low | line 478 | `.ds-ac-list` `gap: 2px` 하드코딩 | `2px`에 해당하는 spacing 토큰 없음. 리스트 구분선 역할의 의도적 수치이나 `:root`에 `--ds-ac-list-gap: 2px` 토큰 추가 권고 |
| Q2-05 | CAT-2 | Low | line 482 | `.ds-ac-card__title-wrap` `gap: 4px` 하드코딩 | `var(--ds-space-2xs)` = 4px 대응 토큰 존재. `var(--ds-space-2xs)` 로 교체 필요 |
| Q2-06 | CAT-2 | Low | line 542 | `.ds-faq-list` `gap: 2px` 하드코딩 | Q2-04와 동일 패턴. `:root` 토큰 추가 또는 `var(--ds-space-2xs)` 근사값 사용 권고 |

---

## 심각도 기준

- Critical: 내용 누락/변경 (반드시 수정)
- High: Design System 규칙 위반 (반드시 수정)
- Medium: 코드 품질/반응형 누락 (수정 권고)
- Low: 개선 권고사항

---

## 카테고리별 검증 결과

### CAT-1 내용 무결성 (PASS)

원본 A타입과 B타입 2차 직접 대조 결과 모든 항목 무결 확인.

| 항목 | 결과 |
|------|------|
| Hero title `Proof` / eyebrow / description 원문 | PASS |
| Evidence Cards 6개 제목 일치 | PASS |
| Evidence Cards Before/After/What Changed/Reproduce 전 항목 | PASS |
| KPI 수치 3개: `95%`, `+30pp`, `-90%` | PASS |
| Business Impact 수치: `21 days → <4h`, `+30pp F1`, `98.1%` | PASS |
| Technical Artifacts 4개 (Release State, Schema Fingerprint, Preprocessing, Runtime Dependency) | PASS |
| FAQ 5개 Q&A 원문 일치 | PASS |
| SaaS Differentiator 배너 (Databricks/MLflow 원문) | PASS |
| Architecture CTA 텍스트 + 버튼 2개 (Request Walkthrough, Try SynTitan) | PASS |
| Final CTA 텍스트 + 버튼 3개 + footnote `30-min architecture review...` | PASS |
| Footer 주소 (Korea: NAVER 1784 / UK: Belfast) | PASS |
| Copyright `2026 CUBIG Corp.` | PASS |
| email-protected href 보존 | PASS |
| Schema.org JSON-LD FAQPage 3개 Q&A | PASS |

### CAT-2 DS 준수 (CONDITIONAL PASS)

| 항목 | 결과 |
|------|------|
| CSS 변수 `:root` 선언 존재 | PASS |
| 색상 하드코딩 (`:root` 외부 #hex) | PASS — `:root` 외부 hex 0건 확인 |
| rgba 하드코딩 (`:root` 외부) | PASS — `:root` 외부 rgba 0건 확인 |
| `!important` 없음 | PASS — 0건 확인 |
| `.ds-` 접두사 모든 커스텀 클래스 | PASS |
| 인라인 `style` (CSS 변수 전달 목적 제외) | PASS — 6개 인라인 style 전부 `background-color: var(--ds-ev-*-color)` CSS 변수 전달 목적 확인 (lines 735, 785, 833, 883, 930, 980) |
| h1 font-family: DM Sans (`var(--ds-font-base)`) | PASS — line 223: `h1 { font-family: var(--ds-font-base); ... }` |
| h1 Oxanium 폰트 미사용 | PASS — h1/hero__title 모두 `var(--ds-font-base)` 사용 확인 |
| gap 수치 하드코딩 잔존 | Low FAIL — Q2-03, Q2-04, Q2-05, Q2-06 |

### CAT-3 코드 품질 (PASS)

| 항목 | 결과 |
|------|------|
| 시맨틱 태그 사용 (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) | PASS — 전 시맨틱 태그 확인 |
| 모든 section에 id 존재 | PASS — 8개 section 전부 id 확인 (section-hero, section-evidence, section-artifacts, section-saas-diff, section-arch-cta, section-business-impact, section-faq, section-final-cta) |
| HTML 유효성 (태그 열고 닫힘 균형) | PASS — section 8/8, div 241/241, article 6/6 일치 |
| img alt 속성 | PASS — img 태그 없음 (SVG 인라인 사용) |
| SVG aria-label | PASS — 주요 interactive SVG에 aria-label 적용 확인 |
| div 남용 없음 | PASS — section/article/nav/main/footer 시맨틱 태그 우선 사용 |

### CAT-4 반응형 (CONDITIONAL PASS)

| 항목 | 결과 |
|------|------|
| `min-width: 768px` breakpoint 존재 | PASS — 12건 확인 |
| `min-width: 1024px` breakpoint 존재 | PASS — 6건 확인 |
| `min-width: 1440px` breakpoint 존재 | PASS — 6건 확인 |
| `min-width: 1920px` breakpoint 존재 | PASS — 3건 확인 |
| max-width 미디어쿼리 없음 (0건) | PASS — 0건 확인 |
| mobile(375) 기본 padding `var(--ds-container-padding-mobile)` | PASS — lines 239, 270, 569 확인 |
| tablet(768) padding `var(--ds-container-padding-tablet)` | PASS — lines 242, 587 확인 |
| sm-desktop(1024) padding `var(--ds-container-padding-sm-desktop)` | PASS — lines 243, 592 확인 |
| desktop(1440) padding `var(--ds-container-padding-desktop)` | PASS — lines 244, 593 확인 |
| wide(1920) padding `var(--ds-container-padding-wide)` | PASS — lines 245~250, 594 확인 |
| ds-container max-width `var(--ds-content-max-width)` | PASS — line 237 확인 |
| wide(1920) 콘텐츠 너비 calc 계산 | PASS — line 247 `calc(var(--ds-content-max-width) + var(--ds-container-padding-wide) * 2)` |
| mobile ds-grid 1열 | PASS |
| Typography 5단계 단계적 변화 | PASS — lines 229~232 확인 |
| CTA band 5단계 breakpoint 완전성 | PASS — mobile/768/1024/1440/1920 모두 정의됨 |
| CTA band 수직 padding 수치 하드코딩 | Medium FAIL — Q2-01, Q2-02 |

---

## 통계

- 전체 결함 수: 6개
- Critical: 0개
- High: 0개
- Medium: 2개 (Q2-01, Q2-02)
- Low: 4개 (Q2-03, Q2-04, Q2-05, Q2-06)

---

## 최종 판정

**CONDITIONAL PASS**

---

## 판정 근거

1차 QA에서 발견된 22건 결함 중 High 결함 1건(Q15), Medium 결함 16건, Low 결함 5건이 모두 수정 완료되었음을 grep 직접 검증으로 확인.

2차 검증에서 신규 발견된 결함 6건은 모두 Medium/Low 등급:
- **Medium 2건(Q2-01, Q2-02)**: CTA band 수직 padding `100px`/`120px` 하드코딩. `100px`은 `--ds-space-5xl` 토큰으로 대응 가능하나 직접 사용 중. `120px`은 별도 토큰 미선언. 기능 동작에는 영향 없으나 Design System 수치 일관성 위반.
- **Low 4건(Q2-03~06)**: gap 수치 `2px`/`4px`/`10px` 하드코딩. `4px`은 `--ds-space-2xs` 대응 토큰 존재, 나머지는 미세 layout 수치로 토큰 추가 필요.

Critical 결함 없음, High 결함 없음, CAT-1 내용 무결성 전 항목 PASS, CAT-3 코드 품질 전 항목 PASS. Medium/Low만 잔존하므로 CONDITIONAL PASS 선언.

---

## 다음 액션

**CONDITIONAL PASS**: output/A-cubig-proof-v3-b-type.html은 배포 가능 수준의 최종 B타입 파일입니다.

잔존 결함은 다음 개선 사이클에서 권고:

1. **Q2-01 (Medium)**: `line 587` → `padding: var(--ds-space-5xl) var(--ds-container-padding-mobile);` / `line 592` → `padding: var(--ds-space-5xl) var(--ds-container-padding-sm-desktop);`
2. **Q2-02 (Medium)**: `:root`에 `--ds-cta-band-padding-v-desktop: 120px` 추가 후 lines 593~594 교체
3. **Q2-05 (Low)**: `line 482` `gap: 4px` → `gap: var(--ds-space-2xs)`
4. **Q2-03, Q2-04, Q2-06 (Low)**: `:root`에 `--ds-nav-logo-gap: 10px`, `--ds-list-gap-hairline: 2px` 등 추가
