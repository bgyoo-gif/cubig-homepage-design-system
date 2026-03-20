# QA Report

- 검증일: 2026-03-13 (재검증 — 2차)
- 대상 파일: output/b-type.html
- 원본 파일: /Users/yubogeum/cubig-homepage/input/A-cubig-learn-prompt-data-leakage.html
- 명세서: /Users/yubogeum/cubig-homepage/output/design-spec.md
- Design System: /Users/yubogeum/cubig-homepage/.claude/skills/design-system.md
- QA 엔지니어: qa-agent

---

## 검증 방법

- 원본 A타입과 B타입 HTML을 직접 라인 단위로 비교
- design-system.md 규칙과 grep 명령어로 소스코드 직접 검사
- 인라인 style 속성 전수 검토 (grep -n 'style="' 결과 4건 분석)
- 색상 하드코딩 전수 검토 (grep -n '#[0-9a-fA-F]{3,6}|rgb(|rgba(|hsl(' 결과 분석)
- !important 전수 검토 (grep 결과 0건)

---

## [CAT-1] 내용 무결성 검증 결과

### 섹션 구성 (원본 9개 섹션 모두 확인)

| 섹션 | 원본 내용 | B타입 존재 여부 |
|------|-----------|-----------------|
| Hero | H1 제목 + 서브 + 정의 박스 | 확인 (line 1085~1106) |
| Section 2 | 도입부 리드텍스트 2개 + callout | 확인 (line 1114~1125) |
| Section 3 | 5개 bullet 항목 (Where sensitive data enters) | 확인 (line 1128~1153) |
| Section 4 | 5행 규정 테이블 (GDPR/HIPAA/CCPA/PIPA/Financial) | 확인 (line 1156~1197) |
| Section 5 | 5개 bullet 항목 (Effective PII protection) | 확인 (line 1200~1225) |
| Section 6 | FAQ 5개 Q&A | 확인 (line 1232~1262) |
| Section 7 | Bridge Links 4개 | 확인 (line 1267~1289) |
| Section 8 | Where CUBIG fits callout | 확인 (line 1294~1303) |
| Section 9 | Bottom CTA (2개 버튼) | 확인 (line 1308~1322) |

### 항목별 체크

- [x] 모든 섹션 제목 존재
- [x] 모든 본문 텍스트 누락/변경 없음
- [x] 수치/데이터 정확히 일치 (테이블 5행: GDPR Article 25, HIPAA, CCPA, PIPA Korea, Financial regulations)
- [x] 목록 항목 수 일치 (Section 3 bullet 5개, Section 5 bullet 5개, FAQ 5개, Bridge Links 4개)

**CAT-1 판정: PASS**

---

## [CAT-2] Design System 준수 검증 결과

### CSS 변수 :root 선언

- [x] :root에 CSS 변수 선언 확인 (line 89~159)
  - 폰트: --ds-font-base, --ds-font-brand, --ds-font-code
  - 색상: --ds-color-brand-400/500/600, gray 계열, white, success, badge, banner 변수
  - 간격: --ds-space-xs ~ 3xl (8px grid 체계)
  - 반경: --ds-radius-sm/md/lg/full
  - 그림자: --ds-shadow-s/m
  - 컨테이너 패딩: 5단계 breakpoint 전부 선언
  - 특수 변수: --ds-gradient-brand, --ds-nav-bg, --ds-bridge-label-color, --ds-bridge-border, --ds-bridge-border-hover, --ds-bridge-bg-hover

### 색상 하드코딩 검사 (grep 실제 결과 기반)

grep 명령어로 발견된 모든 # 및 rgba() 값을 전수 분석하였다.

| 라인 범위 | 내용 | 판정 |
|-----------|------|------|
| 96~117 | :root 변수 선언부: #8A72C8, #6C54A0, #5B4490, #111827, #374151, #4B5563, #9CA3AF, #E5E7EB, #F3F4F6, #FFFFFF, #10B981, #EDE9F7, #5B4490, #F5F3FA | 허용 (CSS 변수 정의) |
| 135~136 | --ds-shadow-s/m: rgba(0,0,0,...) | 허용 (CSS 변수 정의) |
| 149 | --ds-gradient-brand: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a) | 허용 (CSS 변수 정의, design-spec.md 브랜드 그라디언트 예외 명시) |
| 152 | --ds-nav-bg: rgba(255,255,255,0.92) | 허용 (CSS 변수 정의) |
| 155~158 | --ds-bridge-label-color: rgba(255,255,255,0.4) 외 3건 | 허용 (CSS 변수 정의) |

**컴포넌트/레이아웃 스타일 영역에서 하드코딩 색상 없음.** 이전 1차 QA에서 지적된 Q01~Q06 6건은 모두 수정되어 :root 변수로 선언된 후 var()로 참조하고 있음.

- [x] 색상 하드코딩 없음 — :root 변수 선언부 외 모두 var() 참조

### 수치 하드코딩 현황 (개선 권고)

spacing 관련 하드코딩 여부 확인:

| 라인 | 값 | 비고 |
|------|-----|------|
| line 566 | padding: var(--ds-space-sm) 18px | ds-space 변수 미정의 수치 |
| line 736 | padding: 22px 0 | ds-space 변수 미정의 수치 |
| line 789 | padding: var(--ds-space-md) 20px | ds-space 변수 미정의 수치 |
| line 641 | padding: 60px ... | 원본 A타입 유지 값 |
| line 652, 655 | padding: 72px ... | 원본 A타입 유지 값 |

위 수치들은 ds-space 변수 체계(xs=4, sm=8, md=16, lg=24, xl=32, 2xl=48, 3xl=64)로 완전 대체 불가한 값으로, 기능적 규칙 위반이 아닌 Low 개선 권고로 분류한다.

### .ds- 접두사 검사

- [x] 모든 커스텀 클래스에 .ds- 접두사 확인
  - ds-nav, ds-hero, ds-article, ds-banner, ds-card, ds-btn, ds-table, ds-badge, ds-bullet, ds-faq, ds-bridge, ds-cta, ds-footer, ds-container, ds-grid 등 전부 준수

### !important 검사

- [x] !important 없음 — grep 결과 0건, 전체 파일에 미사용

### 인라인 style 속성 검사

발견된 인라인 style 4건 전수 분석:

| 라인 | 내용 | 판정 |
|------|------|------|
| 1041 | style="color: var(--ds-color-brand-500)" | 허용 (CSS 변수 전달 방식) |
| 1102 | style="--ds-banner-color: var(--ds-color-brand-500);" | 허용 (CSS 변수 전달, DS 명시 허용) |
| 1119 | style="--ds-banner-color: var(--ds-color-brand-500); --ds-banner-bg: var(--ds-color-banner-info-bg);" | 허용 (CSS 변수 전달) |
| 1296 | style="--ds-banner-color: var(--ds-color-brand-500); --ds-banner-bg: var(--ds-color-gray-100);" | 허용 (CSS 변수 전달) |

"인라인 스타일 사용 금지 (CSS 변수 인라인 전달 제외)" 규칙에 의거, 4건 모두 CSS 변수 값만 전달하는 적법한 사용이다.

- [x] 인라인 style 속성 위반 없음

**CAT-2 판정: PASS** (Low 등급 수치 하드코딩 5건은 개선 권고사항)

---

## [CAT-3] 코드 품질 검증 결과

### 시맨틱 태그 사용

- [x] `<header role="banner">` (line 1038)
- [x] `<nav class="ds-nav" aria-label="Main navigation">` (line 1039)
- [x] `<main id="main-content">` (line 1080)
- [x] `<section>` 9개 (line 1085, 1114, 1128, 1156, 1200, 1232, 1267, 1294, 1308)
- [x] `<article class="ds-article">` (line 1111) — 본문 래퍼
- [x] `<article class="ds-faq__item">` 5개 — FAQ 각 항목
- [x] `<footer class="ds-footer" role="contentinfo">` (line 1329)
- [x] div 남용 없음 — 구조적 래퍼 용도로만 사용

### 모든 section에 id 존재

- [x] id="section-1" ~ id="section-9" 전부 확인 (line 1085, 1114, 1128, 1156, 1200, 1232, 1267, 1294, 1308)
- [x] id="main-content" (line 1080)
- [x] aria-labelledby 연결 확인 (section에서 h1/h2 id 참조)

### HTML 유효성

- [x] 태그 열림/닫힘 쌍 정상 (총 1374 라인, 구조적 결함 없음)
- [x] 중첩 오류 없음

### 이미지/아이콘 접근성

- [x] SVG 로고: aria-hidden="true" + 부모 링크 aria-label="CUBIG 홈으로 이동" (line 1040~1041)
- [x] 체크 아이콘: aria-hidden="true" (line 1133 등)
- [x] nav/bridge 화살표: aria-hidden="true" 처리

**CAT-3 판정: PASS**

---

## [CAT-4] 반응형 검증 결과

### Mobile 기본 스타일

- [x] Mobile-first 원칙 준수 (기본 스타일 375px 기준)
- .ds-container: padding: 0 var(--ds-container-padding-mobile) = 16px (line 186)
- .ds-nav__links: display: none (line 515) — 모바일 네비 숨김
- .ds-cta__buttons: flex-direction: column (line 877) — 버튼 세로 스택

### @media (min-width: 768px) Tablet 분기

- [x] 768px 미디어 쿼리 다수 확인 (line 189, 257, 317, 350, 386, 576, 634, 651, 672, 714, 763, 810, 852, 884, 899, 913)
- ds-container tablet padding 적용 (line 190)
- ds-nav__links: display: flex (line 577) — 태블릿부터 네비 표시
- ds-cta__buttons: flex-direction: row (line 886)
- ds-footer__inner: flex-direction: row (line 915)

### @media (min-width: 1024px) sm-desktop 분기

- [x] 1024px 미디어 쿼리 확인 (line 192, 264, 389, 675, 688, 697, 750, 987)
- ds-container sm-desktop padding 적용 (line 193)
- Typography 반응형: H1 32px, H2 24px, body 크기 확대

### @media (min-width: 1440px) Desktop 분기

- [x] 1440px 미디어 쿼리 확인 (line 195, 272, 353, 639, 654, 717, 766, 813, 855, 902)
- ds-container desktop padding 120px 적용 (line 196)

### @media (min-width: 1920px) Wide 분기

- [x] 1920px 미디어 쿼리 확인 (line 198, 277, 1009)
- ds-container max-width calc() 적용 (line 200)

### .ds-container max-width 및 margin: auto

- [x] .ds-container { width: 100%; margin: 0 auto; } (line 183~185) 확인
- [x] 1920px에서 max-width: calc(var(--ds-content-max-width) + var(--ds-container-padding-wide) * 2) 적용

**CAT-4 판정: PASS**

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| Q01 | CAT-2 | Low | line 566 | spacing 하드코딩 18px | `.ds-nav__cta { padding: var(--ds-space-sm) 18px }` — 우측 padding이 ds-space 변수가 아닌 18px 고정값. var(--ds-space-md)=16px 또는 var(--ds-space-lg)=24px으로 교체 권고. 기능 정상 동작하므로 PASS 판정에 영향 없음. |
| Q02 | CAT-2 | Low | line 736 | spacing 하드코딩 22px | `.ds-faq__item { padding: 22px 0 }` — ds-space 시스템에 없는 22px 사용. var(--ds-space-xl)=32px 또는 var(--ds-space-lg)=24px으로 교체 권고. |
| Q03 | CAT-2 | Low | line 789 | spacing 하드코딩 20px | `.ds-bridge__link { padding: var(--ds-space-md) 20px }` — 우측 padding 20px이 변수 아닌 고정값. var(--ds-space-lg)=24px으로 교체 권고. |
| Q04 | CAT-2 | Low | line 641 | spacing 하드코딩 60px | `.ds-hero__inner` 상단 60px — ds-space 변수로 표현 불가. 원본 A타입 레이아웃 유지 값. |
| Q05 | CAT-2 | Low | line 652, 655 | spacing 하드코딩 72px | `.ds-article padding: 72px` — ds-space 변수로 표현 불가. 원본 A타입 레이아웃 유지 값. |

심각도 기준:
- Critical: 내용 누락/변경 (반드시 수정)
- High: Design System 규칙 위반 (반드시 수정)
- Medium: 코드 품질/반응형 누락 (수정 권고)
- Low: 개선 권고사항

---

## 통계

- 전체 결함 수: 5개
- Critical: 0개
- High: 0개
- Medium: 0개
- Low: 5개 (px 하드코딩 개선 권고)

---

## 최종 판정

**[PASS]**

---

## 판정 근거

4가지 검증 기준 모두 통과하였다.

**[CAT-1] 내용 무결성:** 원본 9개 섹션 전부 존재. 모든 텍스트, 수치, 목록 항목 수가 원본과 정확히 일치함.

**[CAT-2] Design System 준수:** 1차 QA에서 지적된 High 6건(Q01~Q06: 색상 하드코딩)이 전부 수정되어 :root CSS 변수로 이관 후 var() 참조 방식으로 교체 완료. !important 미사용. 인라인 style 4건 모두 CSS 변수 전달 방식으로 규칙 허용 범위 내. 모든 커스텀 클래스 .ds- 접두사 준수. 잔존 Low 5건은 ds-space 체계 미정의 px 값으로, 기능적 규칙 위반이 아닌 개선 권고.

**[CAT-3] 코드 품질:** header, nav, main, section, article, footer 등 시맨틱 태그 적절히 사용. 모든 section에 id 부여. 이미지/아이콘에 aria-hidden 또는 aria-label 적용.

**[CAT-4] 반응형:** Mobile-first 원칙 준수. 5단계 breakpoint (375/768/1024/1440/1920px) 모두 구현. .ds-container에 max-width 및 margin: auto 적용.

---

## 다음 액션

[PASS]: 변환 완료. /Users/yubogeum/cubig-homepage/output/b-type.html이 최종 산출물입니다.

Low 등급 5건(px 하드코딩)은 필수 수정 사항이 아닌 개선 권고이며, 추후 ds-space 변수 체계를 확장(예: --ds-space-18: 18px)하거나 인접한 표준 값으로 교체할 것을 권장한다.
