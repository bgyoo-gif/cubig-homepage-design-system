---
name: design-system
description: >
  B타입 HTML 변환 작업 시 반드시 참조하는 디자인 시스템.
  HTML 변환, 컴포넌트 생성, QA 검증 등 모든 작업에서 이 규칙을 따른다.
---

# Design System v5.0
> reference/B-example.html (CUBIG 홈페이지)에서 실측 추출
> 최종 업데이트: 2026-03-16

---

## Color System

```css
:root {
  /* Primary / Brand */
  --ds-color-brand-primary:   #3061f2;
  --ds-color-brand-purple:    #725bea;
  --ds-color-brand-purple-lt: #c6c5fa;
  --ds-color-brand-purple-md: #ab2eff;

  /* Neutral */
  --ds-color-neutral-900: #0f0f0f;
  --ds-color-neutral-850: #141414;
  --ds-color-neutral-800: #171719;
  --ds-color-neutral-700: #303135;
  --ds-color-neutral-500: #636363;
  --ds-color-neutral-400: #9c9c9c;
  --ds-color-neutral-350: #adadad;
  --ds-color-neutral-300: #bababa;
  --ds-color-neutral-250: #c4c4c4;
  --ds-color-neutral-200: #e0e0e0;
  --ds-color-neutral-150: #e6e7e9;
  --ds-color-neutral-100: #ececec;
  --ds-color-neutral-050: #f2f2f2;
  --ds-color-neutral-025: #f7f7f7;
  --ds-color-white:       #ffffff;
  --ds-color-black:       #000000;

  /* Text */
  --ds-color-text-primary:   #0f0f0f;
  --ds-color-text-secondary: #636363;
  --ds-color-text-tertiary:  #9c9c9c;
  --ds-color-text-inverse:   #ffffff;
  --ds-color-text-muted:     #cacccf;

  /* Functional */
  --ds-color-success: #0e824c;
  --ds-color-error:   #ff3030;
  --ds-color-info:    #155ea0;
  --ds-color-warn:    #f59e0b;

  /* Functional — Dark bg variants (코드 블록 등 다크 배경 위 가독성용) */
  --ds-color-success-light: #34d399;
  --ds-color-error-light:   #ff6b6b;
  --ds-color-info-light:    #60a5fa;
  --ds-color-warn-light:    #fbbf24;

  /* Border */
  --ds-color-border-default: #e6e7e9;
  --ds-color-border-strong:  #171719;
  --ds-color-border-brand:   #725bea;

  /* Surface */
  --ds-color-surface-dark:  #171719;
  --ds-color-surface-mid:   #f2f2f2;
  --ds-color-surface-light: #f7f7f7;
  --ds-color-surface-white: #ffffff;

  /* Gradient */
  --ds-gradient-brand: linear-gradient(130deg, #673AFF 0%, #D932FF 50%, #FF266A 100%);
  --ds-gradient-dark:  linear-gradient(180deg, #0f0f0f 0%, #171719 100%);

  /* Gradient Card Border — 109deg shimmer (Framer 실측) */
  --ds-gradient-card-purple: linear-gradient(109deg, #FCD6FF 0%, #fff 17%, #FFEDFA 38%, #D48AFF 51%, #fff 73%, #FCD6FF 100%);
  --ds-gradient-card-blue:   linear-gradient(109deg, #BFE1FB 0%, #fff 17%, #FFEDFA 38%, #81B8FB 51%, #E2E3F0 73%, #BFE1FB 100%);
  --ds-gradient-card-green:  linear-gradient(109deg, #01CA51 0%, #FFEFF5 17%, #9AE6AD 43%, #C9FFE1 65%, #01CA51 84%, #01CA51 100%);
  --ds-gradient-card-silver: linear-gradient(109deg, #898989 0%, #fff 17%, #D5D5D5 63%, #F6F5F6 84%, #898989 100%);

  /* Gradient Card Inner Background — 99deg tint-to-white */
  --ds-gradient-inner-purple: linear-gradient(99deg, #F8EDFF 0%, #FCFCFE 58%, #fff 100%);
  --ds-gradient-inner-blue:   linear-gradient(99deg, #E9EEFB 0%, #FCFCFE 58%, #fff 100%);
  --ds-gradient-inner-green:  linear-gradient(99deg, #F0FDF5 0%, #FCFCFE 58%, #fff 100%);

  /* Diagram Architecture Section — gradient background */
  --ds-gradient-arch-header: linear-gradient(115deg, #94A6FF 0%, #60CFC7 50%, #B2E0C5 100%);
}
```

---

## Typography

```css
:root {
  --ds-font-base:    "DM Sans", "DM Sans Placeholder", sans-serif;
  --ds-font-kr:      "Pretendard Regular", sans-serif;
  --ds-font-kr-md:   "Pretendard Medium", sans-serif;
  --ds-font-kr-semi: "Pretendard SemiBold", sans-serif;
  --ds-font-brand:   "Oxanium", sans-serif;
  --ds-font-system:  "Geist", system-ui, Arial, sans-serif;
  --ds-font-code:    "Fragment Mono", "Geist Mono", monospace;
  --ds-font-inter:   "Inter", "Inter Placeholder", sans-serif;

  --ds-text-xs:   12px;
  --ds-text-sm:   14px;
  --ds-text-md:   16px;
  --ds-text-lg:   18px;
  --ds-text-xl:   20px;
  --ds-text-2xl:  24px;
  --ds-text-3xl:  30px;
  --ds-text-4xl:  36px;
  --ds-text-5xl:  40px;
  --ds-text-6xl:  50px;
  --ds-text-7xl:  64px;
  --ds-text-8xl:  90px;
  --ds-text-9xl: 120px;

  --ds-weight-light:    300;
  --ds-weight-regular:  400;
  --ds-weight-medium:   500;
  --ds-weight-semibold: 600;
  --ds-weight-bold:     700;

  --ds-leading-tight:   1.2;
  --ds-leading-normal:  1.5;
  --ds-leading-relaxed: 1.7;

  --ds-tracking-tight:  -0.5px;
  --ds-tracking-normal: 0px;
  --ds-tracking-wide:   0.08em;
}

h1, .ds-h1 { font-family: var(--ds-font-base);  font-size: var(--ds-text-7xl); font-weight: var(--ds-weight-bold);     line-height: var(--ds-leading-tight); letter-spacing: var(--ds-tracking-tight); text-wrap: balance; }
h2, .ds-h2 { font-family: var(--ds-font-base);  font-size: var(--ds-text-5xl); font-weight: var(--ds-weight-bold);     line-height: var(--ds-leading-tight); letter-spacing: var(--ds-tracking-tight); text-wrap: balance; }
h3, .ds-h3 { font-family: var(--ds-font-base);  font-size: var(--ds-text-3xl); font-weight: var(--ds-weight-semibold); line-height: var(--ds-leading-tight); text-wrap: balance; }
h4, .ds-h4 { font-family: var(--ds-font-base);  font-size: var(--ds-text-2xl); font-weight: var(--ds-weight-medium);   line-height: var(--ds-leading-tight); }
.ds-body-l  { font-family: var(--ds-font-base);  font-size: var(--ds-text-xl);  font-weight: var(--ds-weight-regular);  line-height: var(--ds-leading-normal); word-break: keep-all; overflow-wrap: break-word; }
.ds-body-m  { font-family: var(--ds-font-base);  font-size: var(--ds-text-md);  font-weight: var(--ds-weight-medium);   line-height: var(--ds-leading-normal); word-break: keep-all; overflow-wrap: break-word; }
.ds-body-s  { font-family: var(--ds-font-base);  font-size: var(--ds-text-sm);  font-weight: var(--ds-weight-medium);   line-height: var(--ds-leading-normal); word-break: keep-all; overflow-wrap: break-word; }
.ds-caption { font-family: var(--ds-font-base);  font-size: var(--ds-text-xs);  font-weight: var(--ds-weight-medium);   line-height: var(--ds-leading-normal); }
.ds-data    { font-family: var(--ds-font-base);  font-size: var(--ds-text-7xl); font-weight: var(--ds-weight-bold);     line-height: var(--ds-leading-tight); color: var(--ds-color-text-primary); }
.ds-code    { font-family: var(--ds-font-code);  font-size: var(--ds-text-sm);  font-weight: var(--ds-weight-regular);  line-height: var(--ds-leading-normal); }

/* 인라인 텍스트 강조 */
.ds-text--brand       { color: var(--ds-color-brand-purple); }
.ds-text--brand-light { color: var(--ds-color-brand-purple-lt); }
.ds-text--linethrough { text-decoration: line-through; color: var(--ds-color-text-tertiary); } /* 비교표에서 "불가능" 항목 표시 */

/* 제품명 전용 — Oxanium(brand) 폰트 적용
   사용 대상: 단독 키워드로 표기되는 제품명에 한정
   - SynTitan, DTS, LLM Capsule, SynData, SynConnect
   일반 h1·h2·데이터 숫자 등에는 사용 금지 → var(--ds-font-base) 사용 */
.ds-text--product { font-family: var(--ds-font-brand); font-weight: var(--ds-weight-bold); }

/* 인라인 코드 — 문장 안에 삽입되는 코드 조각 (변수명, 함수명, 명령어 등)
   사용: <code>push()</code> 또는 <code class="ds-code-inline">push()</code> */
code, .ds-code-inline {
  font-family: var(--ds-font-code);
  font-size: 0.875em; /* 부모 대비 상대 크기 */
  font-weight: var(--ds-weight-regular);
  background-color: var(--ds-color-neutral-100);
  border-radius: 3px;
  padding: 0 4px;
  color: inherit;
}
```

### Typography 반응형

```css
h1, .ds-h1 { font-size: 24px; }
h2, .ds-h2 { font-size: 20px; }
h3, .ds-h3 { font-size: 18px; }
.ds-data    { font-size: 20px; }

@media (min-width: 768px)  { h1, .ds-h1 { font-size: 28px; } h2, .ds-h2 { font-size: 22px; } .ds-data { font-size: 22px; } }
@media (min-width: 1024px) { h1, .ds-h1 { font-size: 32px; } h2, .ds-h2 { font-size: 24px; } h3, .ds-h3 { font-size: 20px; } .ds-data { font-size: 24px; } }
@media (min-width: 1440px) { h1, .ds-h1 { font-size: 36px; } h2, .ds-h2 { font-size: 28px; } h3, .ds-h3 { font-size: 22px; } .ds-data { font-size: 28px; } }
```

---

## Spacing & Shape

```css
:root {
  --ds-space-2xs:  4px;
  --ds-space-xs:   8px;
  --ds-space-sm:   12px;
  --ds-space-md:   16px;
  --ds-space-lg:   24px;
  --ds-space-xl:   32px;
  --ds-space-2xl:  48px;
  --ds-space-3xl:  64px;
  --ds-space-4xl:  80px;
  --ds-space-5xl: 100px;
  --ds-space-6xl: 150px;

  --ds-radius-none: 0px;
  --ds-radius-xs:   5px;
  --ds-radius-sm:   8px;
  --ds-radius-md:   18px;
  --ds-radius-lg:   24px;
  --ds-radius-xl:   40px;
  --ds-radius-2xl:  56px;
  --ds-radius-pill: 9999px;

  --ds-border-width:      1px;
  --ds-border-width-bold: 2px;
  --ds-border-default:    1px solid var(--ds-color-border-default);
  --ds-border-brand:      1px solid var(--ds-color-brand-purple);

  --ds-shadow-card:  0px 24px 40px rgba(0, 0, 0, 0.04);
  --ds-shadow-modal: 0px 24px 40px rgba(0, 0, 0, 0.10);
}
```

---

## Iconography

아이콘 라이브러리: **[Lucide Icons](https://lucide.dev)** (MIT, 1500+ icons)
CDN: `https://unpkg.com/lucide-static@latest/icons/[icon-name].svg`

### 사용 규칙

```css
/* 아이콘 기본 스타일 */
.ds-icon {
  width: 24px; height: 24px;
  stroke: currentColor; fill: none;
  stroke-width: 1.5; /* 기본 2px → 1.5px (얇지만 가독성 유지) */
  stroke-linecap: round;
  stroke-linejoin: round;
}
.ds-icon--sm { width: 16px; height: 16px; }
.ds-icon--md { width: 24px; height: 24px; }
.ds-icon--lg { width: 32px; height: 32px; }
.ds-icon--xl { width: 48px; height: 48px; }
```

### 인라인 SVG 사용법

아이콘은 반드시 **인라인 SVG**로 삽입한다 (img 태그 금지 — stroke color 제어 불가).
Lucide SVG의 기본 `stroke-width="2"`를 `stroke-width="1.5"`로 변경한다.

```html
<!-- 올바른 예 -->
<svg class="ds-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
     viewBox="0 0 24 24" fill="none" stroke="currentColor"
     stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="..." />
</svg>

<!-- 잘못된 예 ❌ -->
<img src="brain.svg" alt="AI">
```

### 카테고리별 아이콘 목록

아래 목록은 B타입 HTML에서 사용 가능한 공식 아이콘이다. Lucide 아이콘명 기준.

**Network / Connectivity**
| 아이콘명 | 용도 |
|----------|------|
| globe | 글로벌, 웹, 인터넷 |
| network | 네트워크 토폴로지, 연결 |
| wifi | 무선 연결, 통신 |
| cloud | 클라우드 서비스 |
| cloud-upload | 클라우드 업로드 |
| cloud-download | 클라우드 다운로드 |
| router | 라우터, 네트워크 장비 |
| antenna | 통신, 신호, 전파 |
| cable | 유선 연결, 케이블 |
| link | 연결, 링크 |
| unplug | 연결 해제 |

**Infrastructure / System**
| 아이콘명 | 용도 |
|----------|------|
| server | 서버, 호스팅 |
| database | 데이터베이스, 저장소 |
| cpu | 프로세서, 연산, 컴퓨팅 |
| hard-drive | 스토리지, 디스크 |
| monitor | 모니터, 대시보드 |
| laptop | 노트북, 클라이언트 |
| container | 컨테이너, Docker |
| blocks | 모듈, 블록 구조 |
| circuit-board | 회로, 하드웨어 |
| pc-case | 온프레미스, 물리 서버 |

**AI / Machine Learning**
| 아이콘명 | 용도 |
|----------|------|
| brain | AI, 인공지능, 지능 |
| brain-circuit | AI 회로, 딥러닝 |
| brain-cog | AI 설정, 머신러닝 튜닝 |
| bot | 챗봇, 자동화 에이전트 |
| sparkles | AI 생성, 매직, 스마트 기능 |
| zap | 자동화, 빠른 처리, 트리거 |
| wand-sparkles | AI 마법, 자동 변환 |
| atom | 과학, 연구, 핵심 기술 |
| scan-eye | 컴퓨터 비전, 인식 |
| message-square-code | LLM, 프롬프트, 코드 생성 |

**Report / Analytics**
| 아이콘명 | 용도 |
|----------|------|
| chart-bar | 막대 차트, 통계 |
| chart-line | 라인 차트, 추세 |
| chart-pie | 파이 차트, 비율 |
| chart-area | 영역 차트 |
| trending-up | 상승, 성장, 개선 |
| trending-down | 하락, 감소 |
| file-text | 문서, 리포트 |
| file-chart-line | 분석 리포트 |
| clipboard-list | 체크리스트, 감사 |
| table | 테이블, 데이터 뷰 |

**Processing / Workflow**
| 아이콘명 | 용도 |
|----------|------|
| workflow | 워크플로우, 파이프라인 |
| cog | 설정, 엔진, 처리 |
| settings | 환경 설정 |
| refresh-cw | 새로고침, 동기화 |
| repeat | 반복, 루프 |
| layers | 레이어, 스택, 계층 |
| git-branch | 분기, 버전 |
| merge | 병합, 통합 |
| loader | 로딩, 프로세싱 중 |
| arrow-right-left | 데이터 변환, 교환 |
| shuffle | 셔플, 매핑, 변환 |

**Security / Privacy**
| 아이콘명 | 용도 |
|----------|------|
| shield | 보안, 보호 |
| shield-check | 보안 인증, 검증 완료 |
| shield-alert | 보안 경고 |
| lock | 잠금, 암호화 |
| lock-open | 잠금 해제 |
| key | 키, 인증, API 키 |
| fingerprint | 생체인증, 고유 식별 |
| eye-off | 비식별화, 마스킹 |
| scan | 스캔, 탐지 |
| badge-check | 인증 완료, 신뢰 |

**Data / Storage**
| 아이콘명 | 용도 |
|----------|------|
| database | DB, 데이터 저장 |
| folder | 폴더, 파일 관리 |
| file | 파일 |
| archive | 아카이브, 보관 |
| package | 패키지, 배포 단위 |
| box | 박스, 컨테이너 |
| download | 다운로드 |
| upload | 업로드 |
| share-2 | 공유, 배포 |

**General UI**
| 아이콘명 | 용도 |
|----------|------|
| check | 확인, 완료 |
| x | 닫기, 취소 |
| plus | 추가 |
| minus | 제거 |
| search | 검색 |
| arrow-right | 다음, 이동 |
| arrow-left | 이전, 뒤로 |
| external-link | 외부 링크 |
| menu | 메뉴, 햄버거 |
| user | 사용자 |
| users | 팀, 그룹 |
| mail | 이메일, 연락 |
| phone | 전화 |
| calendar | 일정, 날짜 |
| clock | 시간, 타이머 |
| info | 정보 |
| alert-triangle | 경고 |
| circle-help | 도움말 |

---

## Responsive System

```css
:root {
  --ds-container-padding-mobile:     16px;
  --ds-container-padding-tablet:     32px;
  --ds-container-padding-sm-desktop: 32px;
  --ds-container-padding-desktop:    120px;
  --ds-content-max-width:            1200px;
}

.ds-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--ds-container-padding-mobile);
  box-sizing: border-box;
}
@media (min-width: 768px)  { .ds-container { padding: 0 var(--ds-container-padding-tablet); } }
@media (min-width: 1024px) { .ds-container { padding: 0 var(--ds-container-padding-sm-desktop); } }
@media (min-width: 1440px) { .ds-container { padding: 0 var(--ds-container-padding-desktop); max-width: 1440px; } }

/* Grid */
.ds-grid { display: grid; gap: var(--ds-space-lg); width: 100%; }
.ds-grid--1, .ds-grid--2, .ds-grid--3, .ds-grid--4, .ds-grid--auto { grid-template-columns: 1fr; }

@media (min-width: 768px) {
  .ds-grid--2    { grid-template-columns: repeat(2, 1fr); }
  .ds-grid--3    { grid-template-columns: repeat(2, 1fr); }
  .ds-grid--4    { grid-template-columns: repeat(2, 1fr); }
  .ds-grid--auto { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .ds-grid--3    { grid-template-columns: repeat(3, 1fr); }
  .ds-grid--auto { grid-template-columns: repeat(3, 1fr); }
}
@media (min-width: 1440px) {
  .ds-grid--4    { grid-template-columns: repeat(4, 1fr); }
  .ds-grid--auto { grid-template-columns: repeat(4, 1fr); }
}
```

---

## Base Styles

```css
/* 전역 기본값 — 모든 HTML 파일에 반드시 포함 */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: var(--ds-font-base);
  color: var(--ds-color-text-primary);
  background-color: var(--ds-color-surface-white);
  padding-top: 58px; /* fixed nav 높이 */
  word-break: keep-all;
  overflow-wrap: break-word;
  word-wrap: break-word;
  -webkit-font-smoothing: antialiased;
}
img, video { max-width: 100%; display: block; }
a { text-decoration: none; color: inherit; }

/* 줄바꿈 의미 단위 보장 + 균형 잡힌 줄바꿈 */
p, li, dt, dd, blockquote,
.ds-section-header__description,
.ds-hero__description,
.ds-cta-band__description,
.ds-body-l, .ds-body-m, .ds-body-s,
.ds-ac-card__title,
.ds-card__description {
  word-break: keep-all;
  overflow-wrap: break-word;
  text-wrap: pretty;  /* 마지막 줄 고아 단어 방지, 줄 길이 균등화 */
}
```

---

## Components

### Section

```css
.ds-section { width: 100%; padding: var(--ds-space-4xl) 0; }
.ds-section--hero { padding: 100px 0 var(--ds-space-5xl); } /* 최상단 여백 100px 고정 */
.ds-section--dark {
  background-color: var(--ds-color-surface-dark);
  color: var(--ds-color-text-inverse);
}
.ds-section--light { background-color: var(--ds-color-surface-light); }
```

### Navigation

```css
.ds-nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  height: 58px;
  display: flex; align-items: center;
  background: rgba(255,255,255,0.92);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--ds-color-border-default);
  padding: 0 var(--ds-container-padding-mobile);
}
@media (min-width: 1440px) { .ds-nav { padding: 0 var(--ds-container-padding-desktop); } }
.ds-nav__inner { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 24px; }
.ds-nav__logo { font-family: var(--ds-font-base); font-weight: var(--ds-weight-bold); font-size: var(--ds-text-lg); color: var(--ds-color-text-primary); }
.ds-nav__links { display: flex; align-items: center; gap: 32px; list-style: none; padding: 0; margin: 0; }
@media (max-width: 767px) { .ds-nav__links { display: none; } }
.ds-nav__link { font-size: var(--ds-text-sm); color: var(--ds-color-text-secondary); transition: color 0.15s; }
.ds-nav__link:hover { color: var(--ds-color-text-primary); }
```

### Card

```css
/* 기본 배경은 반드시 white */
.ds-card {
  background-color: var(--ds-color-surface-white);
  border-radius: var(--ds-radius-md);
  border: var(--ds-border-default);
  padding: var(--ds-space-lg);
  box-shadow: var(--ds-shadow-card);
  box-sizing: border-box;
}
.ds-card--dark {
  background-color: var(--ds-color-neutral-850);
  border-color: var(--ds-color-neutral-700);
  color: var(--ds-color-text-inverse);
}
.ds-card--highlight {
  background-color: var(--ds-color-surface-white); /* 흰색 유지 */
  border: var(--ds-border-default);
  border-radius: var(--ds-radius-lg);
  padding: var(--ds-space-xl);
}
.ds-card--highlight .ds-card__value {
  font-family: var(--ds-font-base);
  font-size: var(--ds-text-6xl);
  font-weight: var(--ds-weight-bold);
  color: var(--ds-color-text-primary); /* 파란색 아닌 검정 */
}
.ds-card--flat { background: transparent; border: none; padding: 0; box-shadow: none; }

@media (min-width: 768px)  { .ds-card { padding: var(--ds-space-lg); } }
@media (min-width: 1440px) { .ds-card { padding: var(--ds-space-xl); } }
```

### Card Sub-components

```css
.ds-card__badge {
  display: inline-flex; align-items: center; width: fit-content;
  padding: 4px 12px; border-radius: var(--ds-radius-pill);
  font-size: var(--ds-text-xs); font-weight: var(--ds-weight-medium);
  font-family: var(--ds-font-code); text-transform: uppercase;
  letter-spacing: var(--ds-tracking-wide);
  border: 1px solid currentColor; margin-bottom: var(--ds-space-md);
}
.ds-card__badge--brand { color: var(--ds-color-brand-purple);  border-color: var(--ds-color-brand-purple); }
.ds-card__badge--teal  { color: #0e9f8e;                        border-color: #0e9f8e; }
.ds-card__badge--red   { color: var(--ds-color-error);          border-color: var(--ds-color-error); }
.ds-card__badge--gray  { color: var(--ds-color-text-tertiary);     border-color: var(--ds-color-border-default); }

.ds-card__title { font-family: var(--ds-font-base); font-size: var(--ds-text-2xl); font-weight: var(--ds-weight-bold); color: var(--ds-color-text-primary); line-height: var(--ds-leading-tight); margin-bottom: var(--ds-space-sm); }
.ds-card__title--lg { font-size: var(--ds-text-4xl); }
.ds-card__title--sm { font-size: var(--ds-text-lg); font-weight: var(--ds-weight-semibold); }
.ds-card__subtitle { font-size: var(--ds-text-sm); color: var(--ds-color-text-tertiary); margin-bottom: var(--ds-space-md); }

.ds-card__image { width: 100%; border-radius: var(--ds-radius-md); overflow: hidden; margin-bottom: var(--ds-space-md); }
.ds-card__image img { width: 100%; height: 100%; object-fit: cover; display: block; }
.ds-card__image--square { aspect-ratio: 1/1; }
.ds-card__image--wide   { aspect-ratio: 16/9; }
.ds-card__image--thumb  { width: 200px; flex-shrink: 0; }

.ds-card__divider { border: none; border-top: 1px solid var(--ds-color-border-default); margin: var(--ds-space-md) 0; }
.ds-card__description { font-size: var(--ds-text-sm); color: var(--ds-color-text-secondary); line-height: var(--ds-leading-relaxed); flex: 1; word-break: keep-all; overflow-wrap: break-word; }
.ds-card__tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: var(--ds-space-md); }
.ds-card__tag { font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary); background: var(--ds-color-surface-mid); padding: 2px 10px; border-radius: var(--ds-radius-pill); }
.ds-card__icon { font-size: 24px; margin-bottom: var(--ds-space-sm); display: block; }
.ds-card__button { margin-top: auto; padding-top: var(--ds-space-lg); }
```

### Banner

좌측 굵은 border 없음. 상하 얇은 border만 사용.

```css
.ds-banner {
  padding: var(--ds-space-md) var(--ds-space-lg);
  border-radius: 0;
  border: none;
  border-top: 1px solid var(--ds-color-border-default);
  border-bottom: 1px solid var(--ds-color-border-default);
  background-color: var(--ds-banner-bg, var(--ds-color-surface-light));
  font-size: var(--ds-text-sm);
  line-height: var(--ds-leading-relaxed);
  text-align: center;
  word-break: keep-all;
  overflow-wrap: break-word;
}
/* 배너 내 링크는 반드시 줄바꿈 (본문과 분리) */
.ds-banner a, .ds-banner--full a { display: block; margin-top: var(--ds-space-sm); }
.ds-banner__label {
  font-family: var(--ds-font-code);
  font-size: var(--ds-text-xs);
  text-transform: uppercase;
  letter-spacing: var(--ds-tracking-wide);
  color: var(--ds-color-text-tertiary);
  margin-bottom: var(--ds-space-xs);
  display: block;
}
/* variant — 배경만 구분, accent border 없음 */
.ds-banner--info    { --ds-banner-bg: rgba(21, 94, 160, 0.06); }
.ds-banner--success { --ds-banner-bg: rgba(14, 130, 76, 0.06); }
.ds-banner--error   { --ds-banner-bg: rgba(255, 48, 48, 0.06); }
.ds-banner--brand   { --ds-banner-bg: rgba(166, 23, 255, 0.06); }

/* 강조 배너 — 배경 이미지 + 오버레이
   사용법: <div class="ds-banner--full ds-bg--wave-teal"> */
.ds-banner--full {
  width: 100%; text-align: center;
  padding: var(--ds-space-3xl) var(--ds-space-2xl);
  border-radius: var(--ds-radius-xl);
  background-size: cover; background-position: center;
  position: relative; overflow: hidden;
  color: var(--ds-color-text-primary);
  font-size: var(--ds-text-lg); font-weight: var(--ds-weight-medium);
  line-height: var(--ds-leading-relaxed);
  border: none;
  word-break: keep-all; overflow-wrap: break-word;
}
.ds-banner--full::before {
  content: ''; position: absolute; inset: 0;
  background: rgba(255,255,255,0.72); z-index: 0;
}
.ds-banner--full > * { position: relative; z-index: 1; }
/* 인라인 텍스트도 z-index 확보 (자식 요소 없이 직접 텍스트일 때) */
.ds-banner--full { isolation: isolate; }
```

### Button

```css
.ds-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: var(--ds-space-xs);
  border-radius: var(--ds-radius-pill);
  font-family: var(--ds-font-base); font-weight: var(--ds-weight-medium); font-size: var(--ds-text-md);
  cursor: pointer; border: none; transition: opacity 0.2s, background-color 0.2s;
  white-space: nowrap; text-decoration: none;
}
.ds-btn:disabled { opacity: 0.4; pointer-events: none; }
.ds-btn--sm { padding: var(--ds-space-xs) var(--ds-space-md);  font-size: var(--ds-text-sm); }
.ds-btn--md { padding: var(--ds-space-sm) var(--ds-space-xl);  font-size: var(--ds-text-md); }
.ds-btn--lg { padding: var(--ds-space-md) var(--ds-space-2xl); font-size: var(--ds-text-lg); }
.ds-btn--primary   { background: var(--ds-gradient-brand); color: var(--ds-color-white); }
.ds-btn--primary:hover { opacity: 0.88; }
.ds-btn--secondary { background-color: transparent; color: var(--ds-color-text-primary); border: var(--ds-border-default); }
.ds-btn--secondary:hover { background-color: var(--ds-color-surface-light); }
.ds-btn--ghost     { background-color: transparent; color: var(--ds-color-brand-primary); border: none; padding-left: 0; padding-right: 0; }
.ds-btn--dark      { background-color: var(--ds-color-neutral-800); color: var(--ds-color-text-inverse); border: 1px solid var(--ds-color-neutral-700); }
```

### Bullet List

```css
.ds-bullet { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: var(--ds-space-sm); }
.ds-bullet__item { display: flex; align-items: flex-start; gap: var(--ds-space-xs); font-size: var(--ds-text-md); line-height: var(--ds-leading-normal); }
.ds-bullet__icon { width: 20px; height: 20px; flex-shrink: 0; margin-top: 2px; }
.ds-bullet--check .ds-bullet__icon::before { content: "✓"; color: var(--ds-color-success); font-weight: var(--ds-weight-bold); }
.ds-bullet--number { counter-reset: bullet-counter; }
.ds-bullet--number .ds-bullet__item { counter-increment: bullet-counter; }
.ds-bullet--number .ds-bullet__icon::before {
  content: counter(bullet-counter);
  display: inline-flex; align-items: center; justify-content: center;
  width: 20px; height: 20px; border-radius: 50%;
  background-color: var(--ds-color-brand-primary); color: var(--ds-color-white);
  font-size: var(--ds-text-xs); font-weight: var(--ds-weight-bold);
}
.ds-bullet--dot .ds-bullet__icon::before { content: "•"; color: var(--ds-color-brand-purple); font-size: var(--ds-text-xl); line-height: 1; }
```

### Badge

```css
.ds-badge {
  display: inline-flex; align-items: center; gap: var(--ds-space-2xs);
  padding: var(--ds-space-2xs) var(--ds-space-xs);
  border-radius: var(--ds-radius-pill);
  font-size: var(--ds-text-xs); font-weight: var(--ds-weight-medium);
  line-height: 1; white-space: nowrap;
}
.ds-badge--primary { background-color: var(--ds-color-brand-primary);  color: var(--ds-color-white); }
.ds-badge--purple  { background-color: var(--ds-color-brand-purple-lt); color: var(--ds-color-brand-purple); }
.ds-badge--neutral { background-color: var(--ds-color-neutral-150);     color: var(--ds-color-text-secondary); }
.ds-badge--success { background-color: rgba(14, 130, 76, 0.12);         color: var(--ds-color-success); }
.ds-badge--error   { background-color: rgba(255, 48, 48, 0.12);         color: var(--ds-color-error); }
.ds-badge--dark    { background-color: var(--ds-color-neutral-700);     color: var(--ds-color-text-inverse); }
.ds-badge--sm { font-size: 10px; padding: 2px 6px; }
.ds-badge--lg { font-size: var(--ds-text-sm); padding: var(--ds-space-xs) var(--ds-space-md); }
```

---

## Layout Patterns

### 1. Section Header (.ds-section-header)

기본 중앙 정렬. 아티클/문서형만 --left 사용.

```css
.ds-section-header { margin-bottom: var(--ds-space-2xl); text-align: center; }
.ds-section-header__eyebrow {
  font-family: var(--ds-font-code); font-size: var(--ds-text-xs); font-weight: var(--ds-weight-medium);
  text-transform: uppercase; letter-spacing: var(--ds-tracking-wide);
  color: var(--ds-color-brand-purple); margin-bottom: var(--ds-space-sm); display: block;
}
.ds-section-header__title {
  font-family: var(--ds-font-base); font-size: var(--ds-text-5xl); font-weight: var(--ds-weight-bold);
  color: var(--ds-color-text-primary); line-height: var(--ds-leading-tight);
  letter-spacing: var(--ds-tracking-tight); margin-bottom: var(--ds-space-md);
}
.ds-section-header__description {
  font-size: var(--ds-text-lg); color: var(--ds-color-text-secondary);
  line-height: var(--ds-leading-relaxed); max-width: 100%; margin: 0 auto;
  word-break: keep-all; overflow-wrap: break-word;
}
@media (min-width: 1024px) { .ds-section-header__description { max-width: 720px; } }
@media (min-width: 1440px) { .ds-section-header__description { max-width: 860px; } }
.ds-section-header--underline {
  padding-bottom: var(--ds-space-lg);
  border-bottom: 1px solid var(--ds-color-border-default);
  margin-bottom: var(--ds-space-xl);
}
.ds-section-header--left { text-align: left; }
.ds-section-header--left .ds-section-header__description { margin: 0; }
@media (max-width: 767px) { .ds-section-header { text-align: left; } }
```

HTML:
```html
<div class="ds-section-header ds-section-header--underline">
  <span class="ds-section-header__eyebrow">Section Label</span>
  <h2 class="ds-section-header__title">
    타이틀 핵심 키워드는 <span class="ds-text--brand">이렇게 강조</span>
  </h2>
  <p class="ds-section-header__description">부가 설명</p>
</div>
```

### 2. Icon Section Title (.ds-section-title-icon)

```css
.ds-section-title-icon { display: flex; align-items: center; gap: 12px; margin-bottom: var(--ds-space-xl); }
.ds-section-title-icon__icon { font-size: 28px; line-height: 1; flex-shrink: 0; }
.ds-section-title-icon__text { font-family: var(--ds-font-base); font-size: var(--ds-text-3xl); font-weight: var(--ds-weight-semibold); color: var(--ds-color-text-primary); line-height: var(--ds-leading-tight); }
```

### 3. Hero (.ds-hero)

```css
.ds-hero { padding: 0; display: grid; grid-template-columns: 1fr; gap: var(--ds-space-lg); align-items: center; }
.ds-hero--text-only { max-width: 860px; }
.ds-hero--screenshot { text-align: center; max-width: 860px; margin: 0 auto; }
.ds-hero--split { grid-template-columns: 1fr 1fr; gap: 64px; }
@media (max-width: 1023px) { .ds-hero--split { grid-template-columns: 1fr; } }
.ds-hero__title { font-family: var(--ds-font-base); font-size: var(--ds-text-7xl); font-weight: var(--ds-weight-bold); color: var(--ds-color-text-primary); line-height: var(--ds-leading-tight); letter-spacing: -2px; margin-bottom: var(--ds-space-sm); }
.ds-hero__description { font-size: var(--ds-text-lg); color: var(--ds-color-text-secondary); line-height: var(--ds-leading-relaxed); max-width: 100%; margin-bottom: var(--ds-space-xl); word-break: keep-all; overflow-wrap: break-word; }
@media (min-width: 1024px) { .ds-hero__description { max-width: 720px; } }
@media (min-width: 1440px) { .ds-hero__description { max-width: 860px; } }
.ds-hero__actions { display: flex; flex-wrap: wrap; gap: 12px; }
.ds-hero__image { border-radius: var(--ds-radius-xl); overflow: hidden; }
.ds-hero__image img { width: 100%; display: block; }
@media (max-width: 767px) {
  .ds-hero { padding: 0; }
  .ds-hero__title { font-size: var(--ds-text-5xl); letter-spacing: -1px; }
  .ds-hero__actions { flex-direction: column; }
}

/* Hero Screenshot — 텍스트 위 + 배경 이미지 프레임 안에 스크린샷
   배경 이미지는 섹션이 아닌 스크린샷 프레임(.ds-hero__screenshot-frame)에 적용
   사용법: 아래 HTML 구조 참조 */
.ds-hero-screenshot-section {
  padding: 100px 0 0; overflow: visible;
}
.ds-hero-screenshot-section .ds-hero--screenshot .ds-hero__description { margin-left: auto; margin-right: auto; }
/* 스크린샷 아래 CTA 버튼 영역 */
.ds-hero__actions-below { display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-top: 20px; padding-bottom: var(--ds-space-3xl); }

/* 스크린샷 프레임 — 반드시 배경 이미지(ds-bg--*) 사용 (gradient 금지) */
.ds-hero__screenshot-frame {
  margin-top: var(--ds-space-xl);
  border-radius: var(--ds-radius-xl);
  padding: var(--ds-space-2xl) var(--ds-space-2xl) 0;
  background-size: cover; background-position: center;
  overflow: hidden;
}

/* 프레임 안의 스크린샷 */
.ds-hero__screenshot {
  border-radius: var(--ds-radius-lg) var(--ds-radius-lg) 0 0;
  overflow: hidden; box-shadow: 0 -8px 40px rgba(0,0,0,0.12);
  background: var(--ds-color-surface-white);
  min-height: 320px;
}
.ds-hero__screenshot img { width: 100%; display: block; }

@media (max-width: 767px) {
  .ds-hero-screenshot-section { padding: 100px 0 0; }
  .ds-hero__screenshot-frame { padding: var(--ds-space-xl) var(--ds-space-xl) 0; border-radius: var(--ds-radius-lg); }
  .ds-hero__screenshot { min-height: 180px; border-radius: var(--ds-radius-md) var(--ds-radius-md) 0 0; }
}
```

HTML (Hero Screenshot 구조 — 순서: 타이틀 → 설명 → 스크린샷 → CTA):
```html
<section class="ds-section ds-hero-screenshot-section">
  <div class="ds-container">
    <div class="ds-hero ds-hero--screenshot">
      <h1 class="ds-hero__title">메인 타이틀</h1>
      <p class="ds-hero__description">설명 텍스트</p>
    </div>
    <!-- 배경 이미지 프레임 + 스크린샷 -->
    <div class="ds-hero__screenshot-frame ds-bg--paint-blue">
      <div class="ds-hero__screenshot">
        <img src="screenshot.png" alt="Product Screenshot">
      </div>
    </div>
    <div class="ds-hero__actions-below">
      <a href="/contact" class="ds-btn ds-btn--primary ds-btn--md">CTA 버튼</a>
    </div>
  </div>
</section>
```

**줄바꿈 규칙 (Hero 전체 적용):**
- `word-break: keep-all` 전역 규칙에 따라 한국어는 의미 단위로만 줄바꿈된다
- 임의 `<br>` 삽입으로 문장 중간에서 줄바꿈하지 않는다
- 설명 텍스트 max-width는 반응형으로 조절한다 (mobile 100% → 1024px 720px → 1440px 860px)
- 한 문장이 줄바꿈 없이 한 줄에 들어갈 수 있으면 반드시 한 줄로 유지한다

### 4. Card Grid

범용 카드 그리드. 제품뿐 아니라 서비스, 기능 소개 등 어디든 사용 가능.

```css
/* 공통 베이스 */
.ds-card-grid { display: grid; grid-template-columns: 1fr; gap: 24px; }
.ds-card-grid .ds-card { display: flex; flex-direction: column; }

/* 2col */
.ds-card-grid--2col { }
@media (min-width: 768px) { .ds-card-grid--2col { grid-template-columns: repeat(2, 1fr); } }

/* 3col (기본) */
.ds-card-grid--3col { }
@media (min-width: 768px)  { .ds-card-grid--3col { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .ds-card-grid--3col { grid-template-columns: repeat(3, 1fr); } }

/* 4col */
.ds-card-grid--4col { }
@media (min-width: 768px)  { .ds-card-grid--4col { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .ds-card-grid--4col { grid-template-columns: repeat(4, 1fr); } }
```

사용법: `<div class="ds-card-grid ds-card-grid--3col">` (베이스 + 열 수 조합)

### 5. Case Study Card (.ds-card--case-study)

가로형 카드. 좌측 이미지/카테고리/타이틀 + 우측 콘텐츠(배지, 불릿, 태그).
`ds-card-grid--2col` 또는 `ds-card-grid--3col`과 조합하여 그리드 배치 가능.

**좌측 이미지는 반드시 실제 이미지 파일 사용 (이모지/아이콘 금지):**
- `reference/graphics/graphic-*` : AI, 패션, 쇼핑, 텔레콤 등
- `reference/graphics/illustration-*` : 이커머스, 게이밍, 보험, 보안 등

**세트별 사용 규칙:** 한 섹션 안에서는 같은 접두사 세트만 사용한다.
- graphic 세트: `graphic-ai-intelligence.png`, `graphic-fashion.png`, `graphic-shopping.png`, `graphic-telecom.png`
- illustration 세트: `illustration-ecommerce.png`, `illustration-gaming.png`, `illustration-insurance.png`, `illustration-persona.png`, `illustration-public-sector.png`, `illustration-security.png`

```css
/* 기본 (1col 전폭 또는 2col 그리드 내) */
.ds-card--case-study { display: grid; grid-template-columns: 240px 1fr; gap: 0; padding: 0; overflow: hidden; }
.ds-card--case-study .ds-card__left { background: transparent; border-right: 1px solid var(--ds-color-border-default); padding: var(--ds-space-lg) var(--ds-space-md); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: var(--ds-space-sm); }
.ds-card--case-study .ds-card__left-image { width: 160px; height: 140px; object-fit: contain; border-radius: var(--ds-radius-md); }
.ds-card--case-study .ds-card__left-category { font-size: var(--ds-text-xs); color: var(--ds-color-text-secondary); letter-spacing: var(--ds-tracking-wide); text-transform: uppercase; }
.ds-card--case-study .ds-card__left-title { font-size: var(--ds-text-lg); font-weight: var(--ds-weight-bold); color: var(--ds-color-text-primary); line-height: var(--ds-leading-tight); }
.ds-card--case-study .ds-card__right { padding: var(--ds-space-lg); display: flex; flex-direction: column; gap: var(--ds-space-xs); }
.ds-card--case-study .ds-card__right .ds-bullet { gap: var(--ds-space-2xs); }
.ds-card--case-study .ds-card__right .ds-bullet__item { font-size: var(--ds-text-sm); }
.ds-card--case-study .ds-card__tags { display: flex; flex-wrap: wrap; gap: var(--ds-space-xs); margin-top: auto; justify-content: flex-end; }

/* 2col 그리드 내 콤팩트 변형 — 좌측 영역 대폭 축소 */
.ds-card-grid--2col .ds-card--case-study { grid-template-columns: 100px 1fr; }
.ds-card-grid--2col .ds-card--case-study .ds-card__left { padding: var(--ds-space-sm); }
.ds-card-grid--2col .ds-card--case-study .ds-card__left-image { width: 72px; height: 60px; }
.ds-card-grid--2col .ds-card--case-study .ds-card__left-category { font-size: 10px; }
.ds-card-grid--2col .ds-card--case-study .ds-card__left-title { font-size: var(--ds-text-xs); }
.ds-card-grid--2col .ds-card--case-study .ds-card__right { padding: var(--ds-space-md); }

/* 3col 그리드 내 콤팩트 변형 */
.ds-card-grid--3col .ds-card--case-study { grid-template-columns: 100px 1fr; }
.ds-card-grid--3col .ds-card--case-study .ds-card__left { padding: var(--ds-space-sm); }
.ds-card-grid--3col .ds-card--case-study .ds-card__left-image { width: 72px; height: 60px; }
.ds-card-grid--3col .ds-card--case-study .ds-card__left-category { font-size: 10px; }
.ds-card-grid--3col .ds-card--case-study .ds-card__left-title { font-size: var(--ds-text-xs); }

@media (max-width: 767px) { .ds-card--case-study { grid-template-columns: 1fr; } }
```

사용법 — 2열 배치:
```html
<div class="ds-card-grid ds-card-grid--2col">
  <article class="ds-card ds-card--case-study">
    <div class="ds-card__left">
      <img class="ds-card__left-image" src="reference/graphics/illustration-insurance.png" alt="Finance">
      <span class="ds-card__left-category">Finance</span>
      <h3 class="ds-card__left-title">Fraud Detection<br>& Monitoring</h3>
    </div>
    <div class="ds-card__right">
      <div><span class="ds-card__badge ds-card__badge--red">PROBLEM</span></div>
      <ul class="ds-bullet ds-bullet--dot">
        <li class="ds-bullet__item"><span class="ds-bullet__icon"></span>문제 설명</li>
      </ul>
      <div><span class="ds-card__badge ds-card__badge--brand">CUBIG SOLUTION</span></div>
      <ul class="ds-bullet ds-bullet--dot">
        <li class="ds-bullet__item"><span class="ds-bullet__icon"></span>솔루션 설명</li>
      </ul>
      <div class="ds-card__tags">
        <span class="ds-tag">#DTS</span>
        <span class="ds-tag">#SynTitan</span>
      </div>
    </div>
  </article>
  <!-- 반복 -->
</div>
```

사용법 — 3열 배치:
```html
<div class="ds-card-grid ds-card-grid--3col">
  <article class="ds-card ds-card--case-study"><!-- 콤팩트 자동 적용 --></article>
  <article class="ds-card ds-card--case-study">...</article>
  <article class="ds-card ds-card--case-study">...</article>
</div>
```

### 6. KPI Band (.ds-kpi-band)

배경 이미지는 섹션이 아닌 이 컴포넌트 자체에 적용한다.

```css
.ds-kpi-band {
  border-radius: var(--ds-radius-xl); padding: 48px 40px;
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px;
  justify-items: center;
  background-size: cover; background-position: center;
  position: relative; overflow: hidden;
}
.ds-kpi-band:not([class*="ds-bg--"]) {
  background: linear-gradient(135deg, #1a6fe8, #0ea5a0);
}
.ds-kpi-band[class*="ds-bg--"]::before {
  content: ''; position: absolute; inset: 0;
  background: rgba(255,255,255,0.15); z-index: 0;
}
.ds-kpi-band > * { position: relative; z-index: 1; }
.ds-kpi-band__item { display: flex; flex-direction: column; gap: 12px; text-align: center; }
.ds-kpi-band__number {
  font-family: var(--ds-font-base); font-size: var(--ds-text-6xl);
  font-weight: var(--ds-weight-bold); line-height: 1;
  color: var(--ds-color-white); /* 어두운 배경 기본 */
}
.ds-kpi-band__label { font-size: var(--ds-text-sm); color: rgba(255,255,255,0.85); line-height: var(--ds-leading-normal); }
@media (max-width: 1023px) { .ds-kpi-band { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 767px)  { .ds-kpi-band { grid-template-columns: 1fr; padding: 32px 20px; } }
```

HTML (올바른 배치):
```html
<section class="ds-section"> <!-- 섹션은 배경 없음 -->
  <div class="ds-container">
    <div class="ds-kpi-band ds-bg--lavender"> <!-- 카드에 배경 적용 -->
      <div class="ds-kpi-band__item">
        <span class="ds-kpi-band__number">95%</span>
        <p class="ds-kpi-band__label">reduction in root cause identification time</p>
      </div>
    </div>
  </div>
</section>
```

### 7. Partner Logo Grid (.ds-partner-grid)

파트너/고객사 로고를 가로 나열하는 컴포넌트.
A타입 HTML에 파트너사가 어떻게 언급되어 있든 **반드시 아래 공식 목록만 사용한다** (A타입이 최신화 안 됐을 수 있음).

**공식 파트너 목록 (reference/images/partner-*):**
| 파일명 | 표시명 |
|--------|--------|
| partner-gartner.png | Gartner |
| partner-navercloud.avif | Naver Cloud |
| partner-sktelecom.avif | SK Telecom |
| partner-kyobo.avif | Kyobo |
| partner-korea army.avif | ROK Army |
| partner-korea-airforce.avif | ROK Air Force |
| partner-eumc.avif | EUMC |
| partner-deutsche-telekom.avif | Deutsche Telekom |
| partner-claroty.png | Claroty |
| partner-korea-heritage-service.jpg | Korea Heritage Service |
| partner-ministry-of-data-and-statistics.png | Ministry of Data and Statistics |

**마키 애니메이션 (필수):** 화면 전체 width를 무시하고, 모든 로고를 1행으로 배치한 뒤 **우측→좌측 무한 스크롤**한다.
- ds-container의 max-width를 무시하기 위해 `.ds-partner-grid`는 `width: 100vw; margin-left: calc(-50vw + 50%);`로 뷰포트 전체를 차지
- 내부 `.ds-partner-grid__track`이 로고 목록을 2벌 복제하여 seamless loop 구현
- `@keyframes ds-marquee` — `translateX(0)` → `translateX(-50%)`
- 호버 시 애니메이션 일시정지 (`animation-play-state: paused`)

```css
/* Partner Grid — Marquee */
.ds-partner-grid { width: 100vw; margin-left: calc(-50vw + 50%); overflow: hidden; padding: var(--ds-space-xl) 0; }
.ds-partner-grid__track { display: flex; gap: var(--ds-space-3xl); align-items: center; width: max-content; animation: ds-marquee 30s linear infinite; }
.ds-partner-grid__track:hover { animation-play-state: paused; }
.ds-partner-item { display: flex; flex-direction: column; align-items: center; gap: var(--ds-space-xs); flex-shrink: 0; }
.ds-partner-item__logo { width: 120px; height: 100px; object-fit: contain; }
.ds-partner-item__name { font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary); text-align: center; white-space: nowrap; }
@keyframes ds-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
@media (max-width: 767px) {
  .ds-partner-item__logo { width: 100px; height: 75px; }
  .ds-partner-grid__track { gap: var(--ds-space-2xl); animation-duration: 20s; }
}
```

HTML 구조:
- `.ds-partner-grid__track` 안에 11개 파트너 아이템을 넣고, **JS로 동일 아이템을 복제(cloneNode)하여 track 뒤에 append** — seamless loop용
- JS 없이 구현 시 HTML에서 수동으로 11개 아이템을 2벌(22개) 배치해도 됨

```html
<section class="ds-section" id="section-partners">
  <div class="ds-container">
    <div class="ds-section-header ds-section-header--underline">
      <span class="ds-section-header__eyebrow">Partners</span>
      <h2 class="ds-section-header__title">
        Trusted by <span class="ds-text--brand">Industry Leaders</span>
      </h2>
    </div>
  </div>
  <div class="ds-partner-grid">
    <div class="ds-partner-grid__track">
      <!-- 1벌: 11개 파트너 -->
      <div class="ds-partner-item">
        <img class="ds-partner-item__logo" src="reference/images/partner-gartner.png" alt="Gartner">
        <span class="ds-partner-item__name">Gartner</span>
      </div>
      <div class="ds-partner-item">
        <img class="ds-partner-item__logo" src="reference/images/partner-navercloud.avif" alt="Naver Cloud">
        <span class="ds-partner-item__name">Naver Cloud</span>
      </div>
      <div class="ds-partner-item">
        <img class="ds-partner-item__logo" src="reference/images/partner-sktelecom.avif" alt="SK Telecom">
        <span class="ds-partner-item__name">SK Telecom</span>
      </div>
      <div class="ds-partner-item">
        <img class="ds-partner-item__logo" src="reference/images/partner-kyobo.avif" alt="Kyobo">
        <span class="ds-partner-item__name">Kyobo</span>
      </div>
      <div class="ds-partner-item">
        <img class="ds-partner-item__logo" src="reference/images/partner-korea army.avif" alt="ROK Army">
        <span class="ds-partner-item__name">ROK Army</span>
      </div>
      <div class="ds-partner-item">
        <img class="ds-partner-item__logo" src="reference/images/partner-korea-airforce.avif" alt="ROK Air Force">
        <span class="ds-partner-item__name">ROK Air Force</span>
      </div>
      <div class="ds-partner-item">
        <img class="ds-partner-item__logo" src="reference/images/partner-eumc.avif" alt="EUMC">
        <span class="ds-partner-item__name">EUMC</span>
      </div>
      <div class="ds-partner-item">
        <img class="ds-partner-item__logo" src="reference/images/partner-deutsche-telekom.avif" alt="Deutsche Telekom">
        <span class="ds-partner-item__name">Deutsche Telekom</span>
      </div>
      <div class="ds-partner-item">
        <img class="ds-partner-item__logo" src="reference/images/partner-claroty.png" alt="Claroty">
        <span class="ds-partner-item__name">Claroty</span>
      </div>
      <div class="ds-partner-item">
        <img class="ds-partner-item__logo" src="reference/images/partner-korea-heritage-service.jpg" alt="Korea Heritage Service">
        <span class="ds-partner-item__name">Korea Heritage Service</span>
      </div>
      <div class="ds-partner-item">
        <img class="ds-partner-item__logo" src="reference/images/partner-ministry-of-data-and-statistics.png" alt="Ministry of Data and Statistics">
        <span class="ds-partner-item__name">Ministry of Data and Statistics</span>
      </div>
      <!-- 2벌: 위 11개를 그대로 복제 (seamless loop) -->
      <div class="ds-partner-item">
        <img class="ds-partner-item__logo" src="reference/images/partner-gartner.png" alt="Gartner">
        <span class="ds-partner-item__name">Gartner</span>
      </div>
      <!-- ... (동일 11개 반복) -->
    </div>
  </div>
</section>
```

**Seamless loop JS (선택):**
```html
<script>
document.querySelectorAll('.ds-partner-grid__track').forEach(track => {
  [...track.children].forEach(item => track.appendChild(item.cloneNode(true)));
});
</script>
```

### 8. Cert Grid (.ds-cert-grid)

인증서/수상/인정 카드를 **마키 애니메이션**으로 가로 스크롤하는 컴포넌트.
A타입 HTML에 인증 목록이 어떻게 언급되어 있든 **반드시 아래 공식 목록만 사용한다** (A타입이 최신화 안 됐을 수 있음).

**공식 인증/수상/인정 목록:**

| 그룹 | 인증/수상명 | 기관명 | 연도 | 로고 파일 |
|------|------------|--------|------|-----------|
| Certifications | Information Security Fast Track | KISA | 2024 | cert-kisa.png |
| Certifications | GS Certification | TTA | 2025 | cert-gs.png |
| Certifications | ISO/IEC 27001 (ISMS) | ISO | 2026 | cert-iso.png |
| Certifications | ISO/IEC 42001 (AIMS) | ISO | 2026 | cert-iso.png |
| Awards | Information Security Innovation Award | Ministry of Science & ICT | 2024 | awards-ministry-of-science-and-ict.jpg |
| Awards | Startup World Cup — Finalist | Startup World Cup | 2025 | cert-startupworldcup.png |
| Awards | Next Rise — Global Innovator | Next Rise | 2025 | — |
| Awards | T Challenge 2026 — Finalist | Deutsche Telekom | 2026 | partner-deutsche-telekom.avif |
| Awards | AI EXPO KOREA — AI Medical Innovation Award | AI EXPO KOREA | 2025 | awards-koreaia.png |
| Recognition | Emerging AI+X Top 100 | — | 2026 | — |
| Recognition | Representative Vendor, Hyper-Synthetic Data | Gartner | 2025 | cert-gartner.svg.png |

로고 이미지 경로: `reference/graphics/` (cert-*.png, awards-*.png/jpg, partner-*.avif 등) (월계수: cert-left.png, cert-right.png)

카드 레이아웃 (위→아래):
```
그룹핑명 (Certifications / Awards / Recognition)
월계수 좌 | 인증/수상 명칭 | 월계수 우
기관명
연도
로고 (있는 경우)
```

**마키 애니메이션 (필수):** Partner Grid와 동일 패턴 — 전체 width, 우→좌 무한 스크롤.
- ds-container의 max-width를 무시하기 위해 `.ds-cert-grid`는 `width: 100vw; margin-left: calc(-50vw + 50%);`로 뷰포트 전체를 차지
- 내부 `.ds-cert-grid__track`이 카드 목록을 2벌 복제하여 seamless loop 구현
- `@keyframes ds-marquee` 재사용 — `translateX(0)` → `translateX(-50%)`
- 호버 시 애니메이션 일시정지

```css
/* Cert Grid — Marquee */
.ds-cert-grid { width: 100vw; margin-left: calc(-50vw + 50%); overflow: hidden; padding: var(--ds-space-xl) 0; }
.ds-cert-grid__track { display: flex; gap: var(--ds-space-lg); align-items: stretch; width: max-content; animation: ds-marquee 40s linear infinite; }
.ds-cert-grid__track:hover { animation-play-state: paused; }

/* Cert Card */
.ds-cert-card {
  background: var(--ds-color-surface-white); border: 1px solid var(--ds-color-border-default);
  border-radius: var(--ds-radius-lg); padding: var(--ds-space-lg) var(--ds-space-xl);
  display: flex; flex-direction: column; align-items: center; text-align: center;
  gap: var(--ds-space-xs); flex-shrink: 0; width: 200px;
}
.ds-cert-card__group {
  font-family: var(--ds-font-code); font-size: 10px; font-weight: var(--ds-weight-medium);
  text-transform: uppercase; letter-spacing: var(--ds-tracking-wide);
  color: var(--ds-color-brand-purple); margin-bottom: var(--ds-space-2xs);
}
.ds-cert-card__wreath { position: relative; width: 160px; height: 120px; display: flex; align-items: center; justify-content: center; }
.ds-cert-card__wreath-left,
.ds-cert-card__wreath-right { position: absolute; top: 0; height: 100%; width: 34%; object-fit: contain; }
.ds-cert-card__wreath-left { left: -6px; object-position: right; }
.ds-cert-card__wreath-right { right: -6px; object-position: left; }
.ds-cert-card__wreath-text {
  position: relative; z-index: 1; font-size: var(--ds-text-sm); font-weight: var(--ds-weight-bold);
  color: var(--ds-color-text-primary); text-align: center; line-height: var(--ds-leading-tight); max-width: 90px;
}
.ds-cert-card__org { font-size: var(--ds-text-xs); color: var(--ds-color-text-secondary); }
.ds-cert-card__year { font-size: var(--ds-text-xs); color: var(--ds-color-text-tertiary); font-family: var(--ds-font-code); }
.ds-cert-card__logo { width: 60px; height: 60px; object-fit: contain; margin-top: auto; margin-bottom: -10px; }

@media (max-width: 767px) {
  .ds-cert-card { width: 170px; padding: var(--ds-space-md) var(--ds-space-md); }
  .ds-cert-card__wreath { width: 130px; height: 96px; }
  .ds-cert-card__wreath-text { font-size: var(--ds-text-xs); max-width: 72px; }
  .ds-cert-card__logo { width: 48px; height: 48px; }
  .ds-cert-grid__track { gap: var(--ds-space-md); animation-duration: 25s; }
}
```

HTML 구조:
```html
<div class="ds-cert-grid">
  <div class="ds-cert-grid__track">
    <!-- 11개 카드 1벌 -->
    <article class="ds-cert-card">
      <span class="ds-cert-card__group">Certifications</span>
      <div class="ds-cert-card__wreath">
        <img class="ds-cert-card__wreath-left" src="reference/graphics/cert-left.png" alt="">
        <span class="ds-cert-card__wreath-text">GS Certification</span>
        <img class="ds-cert-card__wreath-right" src="reference/graphics/cert-right.png" alt="">
      </div>
      <span class="ds-cert-card__org">TTA</span>
      <span class="ds-cert-card__year">2025</span>
      <img class="ds-cert-card__logo" src="reference/graphics/cert-gs.png" alt="GS Certification">
    </article>
    <!-- 로고 없는 경우: ds-cert-card__logo 생략 -->
    <article class="ds-cert-card">
      <span class="ds-cert-card__group">Certifications</span>
      <div class="ds-cert-card__wreath">
        <img class="ds-cert-card__wreath-left" src="reference/graphics/cert-left.png" alt="">
        <span class="ds-cert-card__wreath-text">ISO/IEC 27001</span>
        <img class="ds-cert-card__wreath-right" src="reference/graphics/cert-right.png" alt="">
      </div>
      <span class="ds-cert-card__org">ISO</span>
      <span class="ds-cert-card__year">2026</span>
    </article>
    <!-- ... 나머지 카드 -->
    <!-- 2벌: 위 11개를 그대로 복제 (seamless loop) -->
  </div>
</div>
```

**Seamless loop JS (선택):**
```html
<script>
document.querySelectorAll('.ds-cert-grid__track').forEach(track => {
  [...track.children].forEach(item => track.appendChild(item.cloneNode(true)));
});
</script>
```

### 8. Feature Grid

```css
.ds-feature-grid { background: var(--ds-color-surface-white); border: 1px solid var(--ds-color-border-default); border-radius: var(--ds-radius-xl); padding: 40px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 40px 48px; }
.ds-feature-item { display: flex; flex-direction: column; gap: 8px; }
.ds-feature-item__icon { font-size: 28px; margin-bottom: 4px; }
.ds-feature-item__title { font-size: var(--ds-text-lg); font-weight: var(--ds-weight-semibold); color: var(--ds-color-text-primary); }
.ds-feature-item__description { font-size: var(--ds-text-sm); color: var(--ds-color-text-secondary); line-height: var(--ds-leading-relaxed); word-break: keep-all; overflow-wrap: break-word; }
@media (max-width: 767px) { .ds-feature-grid { grid-template-columns: 1fr; padding: 24px; } }
```

### 9. CTA Band (.ds-cta-band)

전폭(full-width) 배치. ds-container 밖에 배치. 텍스트는 흰색.

```css
.ds-cta-band {
  width: 100%; position: relative; overflow: hidden;
  padding: 80px var(--ds-container-padding-mobile);
  text-align: center;
  background-size: cover; background-position: center;
}
.ds-cta-band:not([class*="ds-bg--"]) {
  background: linear-gradient(135deg, #b2f0e8 0%, #7ecfea 40%, #4a9fd4 100%);
}
.ds-cta-band::before {
  content: ''; position: absolute; inset: 0;
  background: rgba(0,0,0,0.15); z-index: 0;
}
.ds-cta-band > * { position: relative; z-index: 1; }
.ds-cta-band__inner { max-width: 100%; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: var(--ds-space-lg); }
@media (min-width: 1024px) { .ds-cta-band__inner { max-width: 720px; } }
@media (min-width: 1440px) { .ds-cta-band__inner { max-width: 860px; } }
.ds-cta-band__title {
  font-family: var(--ds-font-base); font-size: var(--ds-text-7xl); /* 64px */
  font-weight: var(--ds-weight-bold); color: #ffffff;
  line-height: var(--ds-leading-tight); letter-spacing: -2px; margin: 0;
}
.ds-cta-band__description {
  font-size: var(--ds-text-lg); color: rgba(255,255,255,0.85);
  line-height: var(--ds-leading-relaxed); margin: 0;
  word-break: keep-all; overflow-wrap: break-word;
}
/* 버튼: 위 텍스트 / 아래 버튼 배치 */
.ds-cta-band__actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; }
.ds-cta-band__actions .ds-btn { background: rgba(255,255,255,0.92); color: var(--ds-color-text-primary); border: 1px solid rgba(255,255,255,0.6); backdrop-filter: blur(8px); }
.ds-cta-band__actions .ds-btn:hover { background: #fff; }
.ds-cta-band__footnote { font-size: var(--ds-text-xs); color: rgba(255,255,255,0.6); font-family: var(--ds-font-code); letter-spacing: var(--ds-tracking-wide); }
@media (min-width: 768px)  { .ds-cta-band { padding: 100px var(--ds-container-padding-tablet); } }
@media (min-width: 1440px) { .ds-cta-band { padding: 120px var(--ds-container-padding-desktop); max-width: 1440px; margin: 0 auto; } }
@media (max-width: 767px) {
  .ds-cta-band__title { font-size: var(--ds-text-5xl); letter-spacing: -1px; }
  .ds-cta-band__actions { flex-direction: column; align-items: center; }
  .ds-cta-band__actions .ds-btn { width: 100%; max-width: 320px; }
}
```

HTML (올바른 배치):
```html
<!-- ds-container 밖에 전폭으로 배치 -->
<section class="ds-cta-band ds-bg--wave-teal-blue">
  <div class="ds-cta-band__inner">
    <span class="ds-section-header__eyebrow">From Evidence to Execution</span>
    <h2 class="ds-cta-band__title">
      Make your AI runs <span class="ds-text--brand">reproducible.</span>
    </h2>
    <p class="ds-cta-band__description">설명 텍스트</p>
    <div class="ds-cta-band__actions">
      <a href="#" class="ds-btn ds-btn--md">Start evaluation →</a>
      <a href="#" class="ds-btn ds-btn--md">Run a technical demo →</a>
    </div>
    <p class="ds-cta-band__footnote">30-min review · no sales pitch</p>
  </div>
</section>
```

### 10. Product Split

로고 이미지는 `reference/images/logo-*.avif|png` 파일을 사용한다.
- `logo-dts.avif` — DTS 제품
- `logo-llmcapsule.avif` — LLM Capsule 제품
- `logo-syntitan.png` — SynTitan 제품

```css
.ds-product-split { display: grid; grid-template-columns: 4fr 6fr; gap: 64px; align-items: stretch; } /* stretch로 좌우 높이 자동 맞춤 */
.ds-product-split--reverse { direction: rtl; }
.ds-product-split--reverse > * { direction: ltr; }
.ds-product-split__visual { border-radius: var(--ds-radius-xl); overflow: hidden; background-size: cover; background-position: center; padding: var(--ds-space-lg) var(--ds-space-lg) 0; display: flex; flex-direction: column; justify-content: flex-end; gap: var(--ds-space-sm); }
.ds-product-split__visual-logo { height: 24px; object-fit: contain; align-self: center; flex-shrink: 0; }
.ds-product-split__visual-screenshot { border-radius: var(--ds-radius-md) var(--ds-radius-md) 0 0; overflow: hidden; box-shadow: 0 -4px 24px rgba(0,0,0,0.08); flex: 1; min-height: 0; margin-bottom: -1px; }
.ds-product-split__visual-screenshot img { width: 100%; height: 100%; object-fit: cover; object-position: top; display: block; }
/* 스크린샷은 visual 영역 최하단까지 꽉 채움. 하단이 잘려도 OK — object-position: top으로 상단 기준 표시 */
.ds-product-split__content { display: flex; flex-direction: column; gap: 16px; }
.ds-product-split__title { font-family: var(--ds-font-base); font-size: var(--ds-text-2xl); font-weight: var(--ds-weight-bold); color: var(--ds-color-text-primary); line-height: var(--ds-leading-tight); }
.ds-product-split__lead  { font-size: var(--ds-text-md); color: var(--ds-color-text-primary); line-height: var(--ds-leading-relaxed); font-weight: var(--ds-weight-medium); word-break: keep-all; overflow-wrap: break-word; }
.ds-product-split__body  { font-size: var(--ds-text-sm); color: var(--ds-color-text-secondary); line-height: var(--ds-leading-relaxed); word-break: keep-all; overflow-wrap: break-word; }
.ds-product-split__actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: var(--ds-space-sm); }
@media (max-width: 1023px) { .ds-product-split { grid-template-columns: 1fr; gap: 32px; } .ds-product-split--reverse { direction: ltr; } }
```

HTML:
```html
<div class="ds-product-split">
  <div class="ds-product-split__visual">
    <img class="ds-product-split__visual-logo" src="reference/images/logo-dts.avif" alt="DTS">
    <div class="ds-product-split__visual-screenshot">
      <img src="reference/images/screenshot-dts.avif" alt="DTS Screenshot">
    </div>
  </div>
  <div class="ds-product-split__content">
    <h3 class="ds-product-split__title">제품 타이틀</h3>
    <p class="ds-product-split__lead">리드 텍스트 (굵게)</p>
    <p class="ds-product-split__body">본문 텍스트</p>
    <div class="ds-product-split__actions">
      <a href="#" class="ds-btn ds-btn--md">버튼 →</a>
    </div>
  </div>
</div>
```

### 11. Table

```css
.ds-table-wrap { overflow-x: auto; border-radius: var(--ds-radius-lg); border: 1px solid var(--ds-color-border-default); }
.ds-table { width: 100%; border-collapse: collapse; font-size: var(--ds-text-sm); }
.ds-table thead th { font-family: var(--ds-font-code); font-size: 11px; text-transform: uppercase; letter-spacing: var(--ds-tracking-wide); color: var(--ds-color-text-primary); font-weight: var(--ds-weight-semibold); padding: 12px 16px; border-bottom: 2px solid var(--ds-color-border-default); text-align: left; background: var(--ds-color-surface-light); }
.ds-table tbody td { padding: 14px 16px; border-bottom: 1px solid var(--ds-color-border-default); color: var(--ds-color-text-primary); vertical-align: top; line-height: var(--ds-leading-normal); }
.ds-table tbody tr:last-child td { border-bottom: none; }
.ds-table tbody td:first-child { font-weight: var(--ds-weight-semibold); color: var(--ds-color-text-primary); }
.ds-table tbody tr:hover td { background: var(--ds-color-surface-light); }
.ds-table--2col colgroup col { width: 50%; }
.ds-table--3col colgroup col { width: 33.33%; }
.ds-table--4col colgroup col { width: 25%; }
```

### 12. Accordion List Card (.ds-ac-card)

industry 라벨이 타이틀 위에 위치. 토글 버튼은 회색조 박스.

```css
.ds-ac-list { display: flex; flex-direction: column; gap: 2px; }
.ds-ac-card { border: var(--ds-border-default); border-radius: var(--ds-radius-sm); background-color: var(--ds-color-surface-white); overflow: hidden; transition: background-color 0.2s; }
.ds-ac-card:hover { background-color: var(--ds-color-neutral-025); }

.ds-ac-card__header { display: grid; grid-template-columns: 1fr auto auto; align-items: center; gap: var(--ds-space-md); padding: var(--ds-space-lg); cursor: pointer; user-select: none; }
.ds-ac-card__title-wrap { display: flex; flex-direction: column; gap: 4px; min-width: 0; }
.ds-ac-card__industry { font-family: var(--ds-font-code); font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ds-color-text-tertiary); display: flex; align-items: center; gap: var(--ds-space-2xs); }
.ds-ac-card__industry-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
.ds-ac-card__title { font-family: var(--ds-font-base); font-size: var(--ds-text-lg); font-weight: var(--ds-weight-medium); line-height: var(--ds-leading-tight); color: var(--ds-color-text-primary); word-break: keep-all; overflow-wrap: break-word; }
.ds-ac-card__meta { display: flex; align-items: center; gap: var(--ds-space-xs); flex-wrap: wrap; flex-shrink: 0; }

/* 토글 버튼 — 회색조 박스 + 얇은 border */
.ds-ac-card__toggle { width: 28px; height: 28px; border-radius: 6px; border: 0.5px solid var(--ds-color-border-default); background: var(--ds-color-surface-light); display: flex; align-items: center; justify-content: center; flex-shrink: 0; cursor: pointer; transition: border-color 0.15s, background 0.15s; }
.ds-ac-card__toggle:hover { border-color: var(--ds-color-border-strong); background: var(--ds-color-surface-mid); }
.ds-ac-card__toggle-icon { width: 12px; height: 12px; position: relative; flex-shrink: 0; }
.ds-ac-card__toggle-icon::before, .ds-ac-card__toggle-icon::after { content: ''; position: absolute; background: var(--ds-color-text-muted); border-radius: 1px; transition: opacity 0.2s; }
.ds-ac-card__toggle-icon::before { width: 10px; height: 1.5px; top: 50%; left: 50%; transform: translate(-50%, -50%); }
.ds-ac-card__toggle-icon::after  { width: 1.5px; height: 10px; top: 50%; left: 50%; transform: translate(-50%, -50%); opacity: 1; }
.ds-ac-card.ds-ac--open .ds-ac-card__toggle-icon::after { opacity: 0; }
.ds-ac-card.ds-ac--open .ds-ac-card__toggle-icon::before { background: var(--ds-color-text-secondary); }

.ds-ac-card__body { display: none; padding: var(--ds-space-lg); border-top: var(--ds-border-default); background: var(--ds-color-surface-light); }
.ds-ac-card.ds-ac--open .ds-ac-card__body { display: block; }

.ds-ac-metrics { display: flex; gap: var(--ds-space-xs); flex-wrap: wrap; margin-bottom: var(--ds-space-lg); }
.ds-ac-metric { display: flex; flex-direction: column; padding: var(--ds-space-sm) var(--ds-space-md); border: var(--ds-border-default); border-radius: var(--ds-radius-sm); background-color: var(--ds-color-surface-white); min-width: 100px; flex: 1; }
.ds-ac-metric__val { font-family: var(--ds-font-base); font-size: var(--ds-text-xl); font-weight: var(--ds-weight-bold); line-height: 1; color: var(--ds-color-text-primary); /* 검정 */ }
.ds-ac-metric__val--success { color: var(--ds-color-success); }
.ds-ac-metric__val--warning { color: #f59e0b; }
.ds-ac-metric__label { font-family: var(--ds-font-code); font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ds-color-text-tertiary); margin-top: var(--ds-space-2xs); }

@media (max-width: 767px) { .ds-ac-card__header { grid-template-columns: 1fr auto; align-items: start; } .ds-ac-card__meta { display: none; } }
@media (min-width: 1024px) { .ds-ac-card__header { grid-template-columns: 1fr auto auto; } }
```

JavaScript:
```javascript
function toggleAcCard(header) {
  const card = header.closest('.ds-ac-card');
  card.classList.toggle('ds-ac--open');
}
```

HTML:
```html
<div class="ds-ac-list">
  <article class="ds-ac-card ds-ac--open">
    <div class="ds-ac-card__header" onclick="toggleAcCard(this)">
      <div class="ds-ac-card__title-wrap">
        <div class="ds-ac-card__industry">
          <span class="ds-ac-card__industry-dot" style="background-color: var(--ds-color-success)"></span>
          Manufacturing
        </div>
        <div class="ds-ac-card__title">Quality inspection model — rare defect class coverage</div>
      </div>
      <div class="ds-ac-card__meta">
        <span class="ds-badge ds-badge--success">Data Usability</span>
      </div>
      <div class="ds-ac-card__toggle"><span class="ds-ac-card__toggle-icon"></span></div>
    </div>
    <div class="ds-ac-card__body">
      <div class="ds-ac-metrics">
        <div class="ds-ac-metric">
          <span class="ds-ac-metric__val ds-ac-metric__val--success">+34%</span>
          <span class="ds-ac-metric__label">Defect Detection</span>
        </div>
      </div>
      <p class="ds-body-s">상세 설명...</p>
    </div>
  </article>
</div>
```

### 13. Step Tabs (.ds-step-tabs)

상단 탭 내비게이션(Step 번호+명칭) + 하단 패널(Title + Description + Checklist/Bullet + Screenshot).
제품 이용 단계별 설명, Use Case 탭 전환 등에 사용.

```css
/* Tab Navigation */
.ds-step-tabs__nav {
  display: flex; justify-content: center; gap: var(--ds-space-sm);
  flex-wrap: wrap; margin-bottom: var(--ds-space-3xl);
}
.ds-step-tabs__tab {
  display: inline-flex; align-items: center; gap: var(--ds-space-xs);
  padding: var(--ds-space-xs) var(--ds-space-lg);
  border-radius: var(--ds-radius-pill); border: var(--ds-border-default);
  background-color: var(--ds-color-surface-white);
  font-family: var(--ds-font-base); font-size: var(--ds-text-sm); font-weight: var(--ds-weight-medium);
  color: var(--ds-color-text-secondary); cursor: pointer; transition: all 0.2s; white-space: nowrap;
}
.ds-step-tabs__tab-number {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px; border-radius: 50%;
  background-color: var(--ds-color-neutral-100); border: 1px solid var(--ds-color-border-default);
  font-size: var(--ds-text-xs); font-weight: var(--ds-weight-bold);
  color: var(--ds-color-text-secondary); flex-shrink: 0; transition: all 0.2s;
}
/* Hover — black 반전 */
.ds-step-tabs__tab:hover {
  background-color: var(--ds-color-neutral-900); border-color: var(--ds-color-neutral-900);
  color: var(--ds-color-white);
}
.ds-step-tabs__tab:hover .ds-step-tabs__tab-number {
  background-color: var(--ds-color-white); border-color: var(--ds-color-white);
  color: var(--ds-color-neutral-900);
}
/* Active — black 반전 */
.ds-step-tabs__tab--active {
  background-color: var(--ds-color-neutral-900); border-color: var(--ds-color-neutral-900);
  color: var(--ds-color-white); font-weight: var(--ds-weight-semibold);
}
.ds-step-tabs__tab--active .ds-step-tabs__tab-number {
  background-color: var(--ds-color-white); border-color: var(--ds-color-white);
  color: var(--ds-color-neutral-900);
}

/* Panel */
.ds-step-tabs__panel { display: none; }
.ds-step-tabs__panel--active {
  display: grid; grid-template-columns: 1fr; gap: var(--ds-space-2xl); align-items: center;
}
@media (min-width: 1024px) { .ds-step-tabs__panel--active { grid-template-columns: 5fr 7fr; gap: var(--ds-space-3xl); } }
@media (min-width: 1440px) { .ds-step-tabs__panel--active { gap: var(--ds-space-4xl); } }

/* Content */
.ds-step-tabs__content { display: flex; flex-direction: column; gap: var(--ds-space-lg); }
.ds-step-tabs__title {
  font-family: var(--ds-font-base); font-size: var(--ds-text-3xl); font-weight: var(--ds-weight-bold);
  color: var(--ds-color-text-primary); line-height: var(--ds-leading-tight);
}
.ds-step-tabs__description {
  font-size: var(--ds-text-md); color: var(--ds-color-text-secondary);
  line-height: var(--ds-leading-relaxed);
}
.ds-step-tabs__actions { display: flex; flex-wrap: wrap; gap: var(--ds-space-sm); margin-top: var(--ds-space-xs); }

/* Screenshot */
.ds-step-tabs__screenshot {
  border-radius: var(--ds-radius-lg); overflow: hidden;
  border: var(--ds-border-default); box-shadow: var(--ds-shadow-card);
  background-color: var(--ds-color-surface-light);
}
.ds-step-tabs__screenshot img { width: 100%; display: block; }

/* Responsive */
@media (min-width: 768px) { .ds-step-tabs__title { font-size: var(--ds-text-4xl); } }
@media (max-width: 767px) {
  .ds-step-tabs__nav {
    justify-content: flex-start; flex-wrap: nowrap; overflow-x: auto;
    -webkit-overflow-scrolling: touch; scrollbar-width: none; padding-bottom: var(--ds-space-xs);
  }
  .ds-step-tabs__nav::-webkit-scrollbar { display: none; }
  .ds-step-tabs__actions { flex-direction: column; }
}
```

HTML:
```html
<div class="ds-step-tabs" data-step-tabs>
  <div class="ds-step-tabs__nav" role="tablist">
    <button class="ds-step-tabs__tab ds-step-tabs__tab--active" role="tab" aria-selected="true" data-tab="0">
      <span class="ds-step-tabs__tab-number">1</span> Connect Data
    </button>
    <button class="ds-step-tabs__tab" role="tab" aria-selected="false" data-tab="1">
      <span class="ds-step-tabs__tab-number">2</span> Configure
    </button>
    <button class="ds-step-tabs__tab" role="tab" aria-selected="false" data-tab="2">
      <span class="ds-step-tabs__tab-number">3</span> Deploy
    </button>
  </div>

  <div class="ds-step-tabs__panel ds-step-tabs__panel--active" role="tabpanel" data-panel="0">
    <div class="ds-step-tabs__content">
      <h3 class="ds-step-tabs__title">패널 타이틀</h3>
      <p class="ds-step-tabs__description">패널 설명 텍스트</p>
      <ul class="ds-bullet ds-bullet--check">
        <li class="ds-bullet__item"><span class="ds-bullet__icon"></span> 체크 항목</li>
      </ul>
      <div class="ds-step-tabs__actions">
        <a href="#" class="ds-btn ds-btn--primary ds-btn--md">Primary CTA</a>
        <a href="#" class="ds-btn ds-btn--secondary ds-btn--md">Secondary →</a>
      </div>
    </div>
    <div class="ds-step-tabs__screenshot">
      <img src="screenshot.avif" alt="설명" loading="lazy">
    </div>
  </div>
  <!-- 추가 패널... -->
</div>
```

JavaScript (필수):
```javascript
document.querySelectorAll('[data-step-tabs]').forEach(function(root) {
  root.querySelectorAll('.ds-step-tabs__tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
      var idx = this.getAttribute('data-tab');
      root.querySelectorAll('.ds-step-tabs__tab').forEach(function(t) {
        t.classList.remove('ds-step-tabs__tab--active');
        t.setAttribute('aria-selected', 'false');
      });
      root.querySelectorAll('.ds-step-tabs__panel').forEach(function(p) {
        p.classList.remove('ds-step-tabs__panel--active');
      });
      this.classList.add('ds-step-tabs__tab--active');
      this.setAttribute('aria-selected', 'true');
      root.querySelector('[data-panel="' + idx + '"]').classList.add('ds-step-tabs__panel--active');
    });
  });
});
```

---

### 14. Bullet List (.ds-bullet)

체크리스트(ds-bullet--check), 도트 리스트(ds-bullet--dot), 번호 리스트(ds-bullet--number)를 위한 공통 불릿 스타일.

```css
.ds-bullet { list-style: none; display: flex; flex-direction: column; gap: var(--ds-space-sm); }
.ds-bullet__item { display: flex; align-items: flex-start; gap: var(--ds-space-xs); font-size: var(--ds-text-md); line-height: var(--ds-leading-normal); color: var(--ds-color-text-primary); }
.ds-bullet__icon { width: 20px; height: 20px; flex-shrink: 0; margin-top: 2px; display: flex; align-items: center; justify-content: center; }
/* dot: 보라색 불릿 */
.ds-bullet--dot .ds-bullet__icon::before { content: "•"; color: var(--ds-color-brand-purple); font-size: var(--ds-text-xl); line-height: 1; }
/* check: 녹색 체크마크 */
.ds-bullet--check .ds-bullet__icon::before { content: "✓"; color: var(--ds-color-success); font-weight: var(--ds-weight-bold); font-size: var(--ds-text-md); line-height: 1; }
/* number: 파란색 번호 (counter 자동 증가) */
.ds-bullet--number { counter-reset: bullet; }
.ds-bullet--number .ds-bullet__icon::before { counter-increment: bullet; content: counter(bullet); font-size: var(--ds-text-sm); font-weight: var(--ds-weight-bold); color: var(--ds-color-brand-primary); }
```

HTML:
```html
<ul class="ds-bullet ds-bullet--dot">
  <li class="ds-bullet__item"><span class="ds-bullet__icon"></span>항목 텍스트</li>
  <li class="ds-bullet__item"><span class="ds-bullet__icon"></span>항목 텍스트</li>
</ul>
```

### 15. Code Block (.ds-code-block)

코드, diff, 로그 등 기술적 내용을 모노스페이스 블록으로 표시. 카드 안에서도 독립 사용도 가능.
줄별 의미 강조를 위해 색상 클래스(remove/add/warn/muted)를 조합한다.

```css
/* 코드 블록 컨테이너 — 다크 테마 */
.ds-code-block {
  background-color: var(--ds-color-neutral-900);
  border: none;
  border-radius: var(--ds-radius-sm);
  padding: var(--ds-space-md);
  font-family: var(--ds-font-code);
  font-size: var(--ds-text-sm);
  line-height: 1.9;
  color: var(--ds-color-neutral-300);
  overflow-x: auto;
  margin-top: var(--ds-space-lg);  /* 카드 내 description↔코드블록 간격 확보 */
  margin-bottom: var(--ds-space-md);
}
/* 카드 안에 코드블록 삽입 시 divider(hr) 사용 금지 — margin-top으로 간격 확보 */

/* 줄별 의미 색상 (다크 배경 위 — light variant 사용) */
.ds-code--remove { color: var(--ds-color-error-light); }   /* 삭제/변경 전 (−) */
.ds-code--add    { color: var(--ds-color-success-light); }  /* 추가/변경 후 (+) */
.ds-code--warn   { color: var(--ds-color-warn-light); }     /* 경고/플래그 (!) */
.ds-code--muted  { color: var(--ds-color-neutral-500); }    /* 주석/참고 (//) */
```

HTML:
```html
<!-- 독립 코드 블록 -->
<div class="ds-code-block" aria-label="Release State diff">
  <div class="ds-code--muted">// Release State diff: RS-0041 → RS-0042</div>
  <div class="ds-code--remove">− schema.feature_col_7: dtype=int64</div>
  <div class="ds-code--add">+ schema.feature_col_7: dtype=object</div>
  <div class="ds-code--muted">// 1 schema fingerprint change detected</div>
  <div class="ds-code--warn">! Run Binding: RS-0042 flagged before production</div>
</div>

<!-- 카드 안에 코드 블록 삽입 -->
<div class="ds-card">
  <span class="ds-card__badge ds-card__badge--brand">Release State Diff</span>
  <h3 class="ds-card__title ds-card__title--sm">Release State Comparison</h3>
  <p class="ds-card__description">설명 텍스트</p>
  <div class="ds-code-block" aria-label="코드 예시">
    <div class="ds-code--muted">// 주석</div>
    <div class="ds-code--remove">− 삭제된 라인</div>
    <div class="ds-code--add">+ 추가된 라인</div>
    <div class="ds-code--warn">! 경고 라인</div>
  </div>
</div>
```

사용 시점:
- diff/변경사항 표시 (코드, 스키마, 설정)
- 로그/감사 기록
- CLI 출력, 터미널 스타일 내용
- 기술 스펙/설정 값

---

### 16. Gradient Card (.ds-card--gradient)

gradient border + tinted inner background를 가진 카드. 제품/기능 강조 시 사용.
Framer 홈페이지 "Databricks stores your data" 섹션 스타일에서 실측.

```css
/* Gradient Card — border wrapper */
.ds-card--gradient {
  padding: 2px;
  border-radius: var(--ds-radius-md);
  box-shadow: rgba(113, 141, 176, 0.25) 0px 1px 20px 0px;
}
.ds-card--gradient-purple { background: var(--ds-gradient-card-purple); }
.ds-card--gradient-blue   { background: var(--ds-gradient-card-blue); }
.ds-card--gradient-green  { background: var(--ds-gradient-card-green); }
.ds-card--gradient-silver { background: var(--ds-gradient-card-silver); }

/* Gradient Card — inner content */
.ds-card--gradient__inner {
  background: var(--ds-color-surface-white);
  border-radius: calc(var(--ds-radius-md) - 2px);
  padding: var(--ds-space-xl);
}
.ds-card--gradient-purple .ds-card--gradient__inner { background: var(--ds-gradient-inner-purple); }
.ds-card--gradient-blue .ds-card--gradient__inner   { background: var(--ds-gradient-inner-blue); }
.ds-card--gradient-green .ds-card--gradient__inner   { background: var(--ds-gradient-inner-green); }

/* Brand accent glow variant (CTA/결과 카드) */
.ds-card--gradient-brand {
  background: var(--ds-gradient-brand);
  box-shadow: rgba(94, 167, 255, 0.25) 0px 1px 40px 0px, rgba(215, 94, 255, 0.15) 0px 2px 24px 0px;
}
```

HTML:
```html
<div class="ds-card--gradient ds-card--gradient-purple">
  <div class="ds-card--gradient__inner">
    <h3>Card Title</h3>
    <p>Card content</p>
  </div>
</div>

<!-- Brand accent (glow) -->
<div class="ds-card--gradient ds-card--gradient-brand">
  <div class="ds-card--gradient__inner">
    <h3>Highlighted Card</h3>
  </div>
</div>
```

사용 시점:
- 제품별 기능 카드 (purple: LLM Capsule, blue: SynTitan, green: DTS)
- brand: 최종 결과/CTA 강조 카드
- silver: 일반 정보 카드

---

## [W] Diagram (.ds-diagram)

시스템 아키텍처, 데이터 플로우, 프로세스 다이어그램을 위한 레이아웃.
프롬프트 기반 diagram-builder 에이전트가 생성하는 구조화된 다이어그램에 사용.

### Diagram 토큰

```css
:root {
  /* Diagram Silver 계열 */
  --ds-diag-surface:       #f8f8f8;
  --ds-diag-surface-inner: #f2f2f2;
  --ds-diag-border:        #d0d0d0;
  --ds-diag-border-light:  #e0e0e0;
  --ds-diag-text:          #2a2a2a;
  --ds-diag-text-sub:      #666666;
  --ds-diag-arrow-dark:    #444444;
  --ds-diag-arrow-accent:  #4a9de0;

  /* Diagram Shimmer — Normal (흰↔회↔흰 300% animated border) */
  --ds-diag-shimmer-normal: linear-gradient(90deg, #d0d0d0 0%, #ffffff 30%, #c8c8c8 50%, #ffffff 70%, #d0d0d0 100%);
  /* Diagram Gradient — Accent 세트 (glow pulse border용) */
  --ds-diag-grad-accent:  linear-gradient(135deg, #7dd3fc 0%, #a78bfa 30%, #e879f9 65%, #67e8f9 100%);  /* 파랑-보라 */
  --ds-diag-grad-nature:  linear-gradient(135deg, #6ee7b7 0%, #a3e635 35%, #fbbf24 70%, #34d399 100%);  /* 초록-노랑 */
  --ds-diag-grad-warm:    linear-gradient(135deg, #fb923c 0%, #f472b6 35%, #e879f9 70%, #fda4af 100%);  /* 주황-분홍 */
  /* Diagram OS Window content bg */
  --ds-diag-os-content: linear-gradient(135deg, #dff0ea 0%, #eef3ff 40%, #f3eeff 70%, #fdeef8 100%);
  /* Diagram Architecture header gradient (Framer 실측) */
  --ds-diag-arch-header: linear-gradient(115deg, #94A6FF 0%, #60CFC7 50%, #B2E0C5 100%);
}
```

### 구조

```
.ds-diagram                         ← 전체 래퍼
  .ds-diagram__window               ← OS 윈도우 프레임
    .ds-diagram__titlebar           ← macOS 스타일 타이틀바
    .ds-diagram__content            ← 그라디언트 배경 콘텐츠
      .ds-diagram__card             ← 메인 카드 (silver surface)
        .ds-diagram__card-title     ← 다이어그램 제목
        .ds-diagram__headers        ← 섹션 헤더 행 (N-col grid)
        .ds-diagram__body           ← 섹션 바디 (N-col grid + arrow overlay)
          .ds-diagram__col          ← 각 섹션 컬럼

          -- 섹션 타입별 --
          .ds-diagram__transform    ← dashed 컨테이너 + 수직 스택
          .ds-diagram__activation   ← silver 카드 스택
          .ds-diagram__exchange     ← accent gradient 카드
          .ds-diagram__default      ← normal gradient 카드

          .ds-diagram__arrow-layer  ← SVG 화살표 오버레이
```

### CSS

```css
/* OS Window */
.ds-diagram__window {
  background: var(--ds-diag-surface);
  border-radius: var(--ds-radius-md);
  box-shadow: 0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10);
  overflow: hidden;
  font-family: var(--ds-font-base);
}
.ds-diagram__titlebar {
  background: linear-gradient(180deg, #e8e8e8 0%, #d8d8d8 100%);
  height: 36px;
  display: flex;
  align-items: center;
  padding: 0 14px;
  gap: 8px;
  border-bottom: 1px solid #c0c0c0;
}
.ds-diagram__titlebar-dot { width: 12px; height: 12px; border-radius: 50%; }
.ds-diagram__titlebar-dot--close { background: #ff5f57; }
.ds-diagram__titlebar-dot--min   { background: #ffbd2e; }
.ds-diagram__titlebar-dot--max   { background: #28ca41; }
.ds-diagram__content {
  background: var(--ds-diag-os-content);
  padding: var(--ds-space-xl);
}

/* Main Card */
.ds-diagram__card {
  background: linear-gradient(145deg, #ffffff 0%, #f0f0f0 40%, #e8e8e8 70%, #f5f5f5 100%);
  border: 1px solid var(--ds-diag-border);
  border-radius: var(--ds-radius-md);
  overflow: hidden;
}
.ds-diagram__card-title {
  text-align: center;
  padding: var(--ds-space-md) var(--ds-space-lg);
  font-size: var(--ds-text-sm);
  font-weight: 500;
  color: var(--ds-diag-text);
  letter-spacing: 0.04em;
  border-bottom: 1px solid var(--ds-diag-border-light);
  font-family: var(--ds-font-code);
  background: linear-gradient(180deg, #ffffff 0%, #f8f8f8 100%);
}

/* Section Headers */
.ds-diagram__headers {
  display: grid;
  border-bottom: 1px dashed var(--ds-diag-border);
}
.ds-diagram__header {
  padding: 11px 12px;
  font-size: var(--ds-text-sm);
  color: var(--ds-diag-text-sub);
  text-align: center;
  font-weight: 400;
  border-right: 1px dashed var(--ds-diag-border);
  background: #fafafa;
}
.ds-diagram__header:last-child { border-right: none; }

/* Body Grid */
.ds-diagram__body {
  display: grid;
  position: relative;
}
.ds-diagram__col {
  padding: var(--ds-space-lg) var(--ds-space-md);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.ds-diagram__col:not(:last-child) { border-right: 1px dashed var(--ds-diag-border); }

/* ── Section Type: Transform (dashed container + vertical stack) ── */
.ds-diagram__transform {
  border: 1.5px dashed #c0c0c0;
  border-radius: var(--ds-radius-md);
  padding: var(--ds-space-md) var(--ds-space-sm);
  background: var(--ds-diag-surface);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ds-diagram__item-box {
  background: var(--ds-diag-surface-inner);
  border: 1px solid var(--ds-diag-border-light);
  border-radius: var(--ds-radius-sm);
  padding: 10px 14px;
  font-size: var(--ds-text-sm);
  color: var(--ds-diag-text);
  text-align: center;
  width: 100%;
}
/* 수직 화살표 (실선) */
.ds-diagram__arrow-down {
  width: 1.5px; height: 14px;
  background: var(--ds-diag-arrow-dark);
  margin: 6px auto;
  position: relative;
}
.ds-diagram__arrow-down::after {
  content: '';
  position: absolute;
  left: 50%; bottom: -6px;
  transform: translateX(-50%);
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid var(--ds-diag-arrow-dark);
}
/* 수직 점선 커넥터 */
.ds-diagram__dashed-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  margin: 5px 0;
}
.ds-diagram__dashed-seg {
  width: 1.5px; height: 4px;
  background: #bbb;
  border-radius: 1px;
}

/* ── Section Type: Activation (silver card stack) ── */
.ds-diagram__act-card {
  background: var(--ds-diag-surface);
  border: 1px solid var(--ds-diag-border);
  border-radius: var(--ds-radius-md);
  padding: 15px 10px 13px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ds-space-xs);
}
.ds-diagram__act-card + .ds-diagram__act-card { margin-top: 10px; }
.ds-diagram__act-icon {
  width: 52px; height: 52px;
  background: var(--ds-diag-surface-inner);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── Section Type: Exchange (accent gradient glow) ── */
.ds-diagram__exchange-wrap {
  padding: 2px;
  border-radius: var(--ds-radius-md);
  background: var(--ds-diag-grad-accent);
  animation: ds-diag-glow 3s ease-in-out infinite;
  width: 100%;
}
@keyframes ds-diag-glow {
  0%, 100% { box-shadow: 0 0 14px rgba(125,211,252,0.5), 0 0 28px rgba(167,139,250,0.35); }
  50%      { box-shadow: 0 0 22px rgba(125,211,252,0.75), 0 0 42px rgba(167,139,250,0.55); }
}
/* Nature (초록-노랑) */
.ds-diagram__exchange-wrap--nature {
  background: var(--ds-diag-grad-nature);
  animation: ds-diag-glow-nature 3s ease-in-out infinite;
}
@keyframes ds-diag-glow-nature {
  0%, 100% { box-shadow: 0 0 14px rgba(110,231,183,0.5), 0 0 28px rgba(163,230,53,0.35); }
  50%      { box-shadow: 0 0 22px rgba(110,231,183,0.75), 0 0 42px rgba(163,230,53,0.55); }
}
/* Warm (주황-분홍) */
.ds-diagram__exchange-wrap--warm {
  background: var(--ds-diag-grad-warm);
  animation: ds-diag-glow-warm 3s ease-in-out infinite;
}
@keyframes ds-diag-glow-warm {
  0%, 100% { box-shadow: 0 0 14px rgba(251,146,60,0.5), 0 0 28px rgba(244,114,182,0.35); }
  50%      { box-shadow: 0 0 22px rgba(251,146,60,0.75), 0 0 42px rgba(244,114,182,0.55); }
}
.ds-diagram__exchange-inner {
  background: linear-gradient(145deg, rgba(237,246,255,0.95), rgba(243,236,255,0.92), rgba(255,238,255,0.9));
  border-radius: calc(var(--ds-radius-md) - 2px);
  padding: 14px 11px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--ds-space-xs);
}
.ds-diagram__safe-badge {
  background: #ffffff;
  border: 1.5px solid #5badee;
  border-radius: var(--ds-radius-pill);
  padding: 3px 11px;
  font-size: 10.5px;
  font-weight: 700;
  color: #2b8dd6;
  letter-spacing: 0.12em;
}

/* ── Section Type: Default (normal gradient border) ── */
/* Shimmer 애니메이션 — 일반 카드 border */
@keyframes ds-diag-shimmer {
  0%   { background-position: 200% center; }
  100% { background-position: -200% center; }
}
.ds-diagram__default-wrap {
  padding: 2px;
  border-radius: var(--ds-radius-md);
  background: linear-gradient(90deg, #d0d0d0 0%, #ffffff 30%, #c8c8c8 50%, #ffffff 70%, #d0d0d0 100%);
  background-size: 300% 100%;
  animation: ds-diag-shimmer 4s linear infinite;
  box-shadow: 0 0 8px rgba(180,200,230,0.3), 0 0 16px rgba(200,180,230,0.15);
  width: 100%;
}
.ds-diagram__default-inner {
  background: linear-gradient(145deg, #ffffff 0%, #f4f4f4 100%);
  border-radius: calc(var(--ds-radius-md) - 2px);
  padding: 14px 12px;
  text-align: center;
  font-size: var(--ds-text-sm);
  color: var(--ds-diag-text);
}

/* ── Arrow SVG Overlay ── */
.ds-diagram__arrow-layer {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  overflow: visible;
}
```

### 화살표 연결 규칙 (JS)

```
drawArrows() 함수 규칙:
1. 모든 좌표는 getBoundingClientRect()로 런타임 측정 (하드코딩 금지)
2. 출발점: 카드의 right edge + GAP(8px), 세로 중앙
3. 도착점: 카드의 left edge - GAP(8px), 세로 중앙
4. GAP은 카드 border 바깥에서 시작 — 카드 안쪽 침범 금지
5. 높이 차이 > 8px → L자 경로 (M x1,y1 → L mx,y1 → L mx,y2 → L x2,y2)
6. 높이 차이 ≤ 8px → 직선
7. 마지막 화살표: accent 색상 (#4a9de0), 나머지: dark (#444)
8. marker-end: chevron 스타일 (▷ 아닌 > 형태)
9. stroke-width: 1.5px
10. resize 이벤트에 재계산
```

### HTML 예시

```html
<div class="ds-diagram">
  <div class="ds-diagram__window">
    <div class="ds-diagram__titlebar">
      <span class="ds-diagram__titlebar-dot ds-diagram__titlebar-dot--close"></span>
      <span class="ds-diagram__titlebar-dot ds-diagram__titlebar-dot--min"></span>
      <span class="ds-diagram__titlebar-dot ds-diagram__titlebar-dot--max"></span>
    </div>
    <div class="ds-diagram__content">
      <div class="ds-diagram__card">
        <div class="ds-diagram__card-title">Data Pipeline</div>
        <div class="ds-diagram__headers" style="grid-template-columns: 1fr 1fr 1fr;">
          <div class="ds-diagram__header">Ingestion</div>
          <div class="ds-diagram__header">Processing</div>
          <div class="ds-diagram__header">Output</div>
        </div>
        <div class="ds-diagram__body" style="grid-template-columns: 1fr 1fr 1fr;">
          <!-- col 1: transform -->
          <div class="ds-diagram__col">
            <div class="ds-diagram__transform">
              <div class="ds-diagram__item-box" id="diag-item-1">Raw Data</div>
              <div class="ds-diagram__arrow-down"></div>
              <div class="ds-diagram__item-box">Cleaned Data</div>
            </div>
          </div>
          <!-- col 2: activation -->
          <div class="ds-diagram__col">
            <div class="ds-diagram__act-card" id="diag-item-2">
              <div class="ds-diagram__act-icon"><!-- icon svg --></div>
              <span>Validation</span>
            </div>
          </div>
          <!-- col 3: exchange -->
          <div class="ds-diagram__col">
            <div class="ds-diagram__exchange-wrap" id="diag-item-3">
              <div class="ds-diagram__exchange-inner">
                <span class="ds-diagram__safe-badge">SAFE</span>
                <span>Data Sharing</span>
              </div>
            </div>
          </div>
          <!-- arrow overlay -->
          <svg class="ds-diagram__arrow-layer"><!-- JS가 채움 --></svg>
        </div>
      </div>
    </div>
  </div>
</div>
```

사용 시점:
- 시스템 아키텍처 다이어그램
- 데이터 파이프라인 시각화
- 프로세스 플로우 차트
- 제품 구성도

---

## Background Image Assets

경로: `reference/images/`

배경 이미지 사용 규칙:
- Hero Screenshot, CTA, 강조 배너(ds-banner--full): 배경 이미지 사용
- Hero Text-only: 배경 이미지 사용 금지 (흰색/밝은 배경만)
- KPI 수치 카드: ds-kpi-band 컴포넌트 자체에 적용 (섹션에 적용 금지)
- 흰/회색 배경 3개 이상 연속: 중간에 1개 삽입
- 그 외: white / surface-light 교대

배경 이미지 위 텍스트 색상 규칙 (가독성 필수):
- 배경 이미지 명도가 낮은 경우 (어두운 이미지, 짙은 오버레이): 텍스트 흰색 (`color: var(--ds-color-white)`)
- 배경 이미지 명도가 높은 경우 (밝은 이미지, 흰색 오버레이): 텍스트 검정 (`color: var(--ds-color-text-primary)`)
- 오버레이 클래스: `ds-section--bg-img::before` (밝은 오버레이, 검정 텍스트), `ds-section--bg-img-dark::before` (어두운 오버레이, 흰색 텍스트)

```css
:root {
  --ds-bg-img-green-wave: url('../reference/images/bg-green-wave.png');
  --ds-bg-img-lavender:   url('../reference/images/bg-lavender.png');
  --ds-bg-img-pink:       url('../reference/images/bg-pink.png');
  --ds-bg-img-peach:      url('../reference/images/bg-peach.png');
  --ds-bg-img-lime:       url('../reference/images/bg-lime.png');
  --ds-bg-img-paint-blue: url('../reference/images/bg-paint-blue-iridescent.png');
  --ds-bg-img-wave-teal:  url('../reference/images/bg-wave-teal-blue.png');
}

.ds-section--bg-img { position: relative; background-size: cover; background-position: center; overflow: hidden; }
.ds-section--bg-img::before { content: ''; position: absolute; inset: 0; background: rgba(255,255,255,0.72); z-index: 0; }
.ds-section--bg-img > * { position: relative; z-index: 1; }
.ds-section--bg-img-dark::before { background: rgba(0,0,0,0.55); }

.ds-bg--green-wave { background-image: var(--ds-bg-img-green-wave); }
.ds-bg--lavender   { background-image: var(--ds-bg-img-lavender); }
.ds-bg--pink       { background-image: var(--ds-bg-img-pink); }
.ds-bg--peach      { background-image: var(--ds-bg-img-peach); }
.ds-bg--lime       { background-image: var(--ds-bg-img-lime); }
.ds-bg--paint-blue { background-image: var(--ds-bg-img-paint-blue); }
.ds-bg--wave-teal  { background-image: var(--ds-bg-img-wave-teal); }
```

---

## 전역 CSS 규칙
1. 모든 클래스는 `.ds-` 접두사 필수
2. CSS 변수는 `:root`에만 선언
3. `!important` 절대 사용 금지
4. 인라인 `style` 사용 금지 (CSS 변수 전달 목적 제외)
5. 색상/수치 하드코딩 금지 → CSS 변수 사용
6. 클래스 네이밍: BEM 방식 (.ds-card__title--highlighted)
7. eyebrow 전면 금지: B타입 변환 시 모든 섹션에서 eyebrow 삭제 (A타입에 있어도 B타입에서는 제거)
8. ds-card 기본 배경은 반드시 surface-white (회색 금지)
9. KPI/지표 수치 색상은 text-primary (파란색 금지)
10. ds-banner 좌측 굵은 border 금지 (상하 얇은 border만)
11. CTA 밴드는 ds-container 밖에 전폭으로 배치
12. 줄바꿈 전역 규칙: `body { word-break: keep-all; overflow-wrap: break-word; }` — 의미 단위로 줄바꿈. 추가로 `text-wrap: balance`(제목) / `text-wrap: pretty`(본문)으로 줄 길이 균등화 필수
13. 긴 문장 분리: 짧은 독립 문장이 마침표로 2개 이상 나열되면 `ds-bullet ds-bullet--dot` 불릿 리스트로 분리한다
    - 인라인 middot(·)이 아닌 실제 불릿 리스트 컴포넌트 사용
    - Before: `<p>Run halted before training. Schema contract enforced. Upstream notified.</p>`
    - After:
      ```html
      <ul class="ds-bullet ds-bullet--dot">
        <li class="ds-bullet__item"><span class="ds-bullet__icon"></span>Run halted before training</li>
        <li class="ds-bullet__item"><span class="ds-bullet__icon"></span>Schema contract enforced</li>
        <li class="ds-bullet__item"><span class="ds-bullet__icon"></span>Upstream notified</li>
      </ul>
      ```
    - 적용 대상: Root cause/Resolution, description, 배너, 카드 설명 등 모든 텍스트 영역
    - 예외: "조건→결과" 흐름처럼 의미상 연결된 문장은 분리하지 않음
14. 폰트 색상 최소 명도: `color` 속성에 neutral-150, neutral-050, neutral-025 사용 금지 — 텍스트에 쓸 수 있는 가장 연한 색상은 `var(--ds-color-text-tertiary)` (#9c9c9c). **`var(--ds-color-text-muted)` (#cacccf)는 텍스트에 사용 금지** — 비텍스트(아이콘 배경, 장식 요소)에만 허용
15. 배너 텍스트 가운데 정렬: `ds-banner`, `ds-banner--full` 모두 `text-align: center`
16. 배너 내 링크 줄바꿈: 배너 안의 `<a>` 링크 텍스트는 본문과 분리하여 `display: block`으로 줄바꿈
17. 배경 이미지 중복 금지: 한 페이지 안에 동일한 배경 이미지(`ds-bg--*`)를 2번 이상 사용 금지 — 다양하게 분산 사용
18. 페이지 최상단 여백: `ds-section--hero`, `ds-hero-screenshot-section` 모두 padding-top 100px 고정 (nav 아래 ~ 콘텐츠 시작, 모바일 포함)
19. 배경 이미지 위 텍스트 색상 제한: `ds-section--bg-img`, `ds-bg--*`, `ds-kpi-band`, `ds-cta-band`, `ds-banner--full` 등 배경 이미지가 있는 영역의 텍스트는 **black(`--ds-color-text-primary`) 또는 white(`--ds-color-white`)만 사용** — secondary, tertiary, muted 등 중간 톤 금지
20. 미색 배경(ds-section--light) 사용 제한: 섹션 배경으로 ds-section--light 남용 금지. 배경 다양성이 필요하면 배경 이미지(ds-bg--*) 사용. 기본은 white.
21. CSS 변수는 design-system.md에 정의된 것만 사용: 임의로 새 변수(--ds-color-teal, --ds-bg-gradient-* 등)를 만들지 않는다. DS에 없는 색상이 필요하면 design-system-agent를 통해 추가한다.
22. Case Study 열 타입 혼합 금지: 한 섹션 안에서 1col과 2col/3col을 섞지 않는다. 1col이면 전부 1col, 2col이면 전부 2col로 통일한다.
23. FAQ는 반드시 아코디언 형태: "FAQ", "Frequently Asked Questions", "Common Questions" 등의 섹션은 반드시 `ds-ac-card` 아코디언으로 구현한다. `ds-grid--1 + ds-card` 카드 나열 금지.
24. 아티클형 페이지(Learn 등) 본문 폭 통일: `<main class="ds-article">` 적용 시 `.ds-article .ds-container > *`에 `max-width: 860px; margin: 0 auto;`가 걸림. 헤더/본문/카드/테이블 모두 동일 폭. 전폭 예외: partner-grid, kpi-band.
25. 섹션 헤더 기본 center 정렬: `ds-section-header`는 기본 `text-align: center`. `ds-section-header--left`는 spec에 명시된 경우만 사용한다. 명시 없으면 center 유지.
26. 외부 서비스 링크는 버튼형: "View on AWS Marketplace", "llmcapsule.ai" 등 외부 서비스/제품 링크는 인라인 텍스트 링크가 아닌 `ds-btn ds-btn--secondary` 버튼으로 구현한다.
27. 단계별 프로세스(Steps)는 Step Tabs 사용: "Step 1, 2, 3..." 또는 "How it works" 형태의 순차 프로세스 설명은 반드시 `[U] ds-step-tabs`로 구현. 각 탭 하단에 스크린샷이 필요하면 `<img src="[screenshot-placeholder]" alt="Step N screenshot">` placeholder를 넣고 사용자에게 스크린샷을 요청한다.
28. 인증/수상 섹션은 Cert Grid 사용: ISO, GS인증 등 인증/수상 내용은 반드시 `[L] ds-cert-grid` 마키 컴포넌트를 사용하고, DS에 정의된 공식 인증 목록 + 이미지(reference/graphics/cert-*)를 참조한다.
