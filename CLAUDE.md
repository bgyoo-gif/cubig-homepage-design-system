# CLAUDE.md — CUBIG Homepage Project

## 프로젝트 개요
CUBIG 홈페이지용 콘텐츠 HTML을 A타입(LLM 생성, 내용 중심) → B타입(Design System 적용, 시각 구조화)으로 변환하는 워크플로우.

---

## 에이전트 파이프라인

```
product-designer → frontend-dev → qa (FAIL 시 재호출) → feedback-sync → deploy (gh-pages push)
```

| 에이전트 | 역할 | 모델 |
|----------|------|------|
| product-designer | A타입 분석 + 레이아웃 설계 명세서 작성 | opus |
| frontend-dev | 명세서 기반 B타입 HTML 생성 | sonnet |
| qa | 4개 카테고리 검증 (CAT-1~4) | sonnet |
| design-system-agent | 새 컴포넌트 추가/개량 | sonnet |
| design-system-viewer | design-system-viewer.html 업데이트 + GitHub Pages 배포 | sonnet |
| diagram-builder | 프롬프트 기반 다이어그램 HTML 생성 | sonnet |
| feedback-sync | 사용자 피드백을 모든 관련 파일에 일괄 전파 | sonnet |
| viewer-qa | 뷰어/서버 기능 품질 검증 — deploy 전 필수 | sonnet |
| orchestrator | 전체 변환 파이프라인 자동 실행 (PD→FE→QA→Framer) | opus |

### 자동 연동 체인 (모든 작업 완료 후 자동 실행)
```
작업 완료
  ↓
feedback-sync (규칙 변경 판단 → 전파 + 이력 기록)
  ↓
design-system.md 변경 시 → design-system-viewer (뷰어 업데이트)
  ↓
deploy (gh-pages push → GitHub Pages 자동 배포)
  → 뷰어 + output 파일 모두 포함
  → 사용자가 요청하지 않아도 항상 실행
```
배포 URL: https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/design-system-viewer.html
로컬 서버: http://localhost:3333/reference/design-system-viewer.html (실시간 Output)

### feedback-sync 자동 호출 규칙
아래 상황이 발생하면 **명시적 요청 없이도** feedback-sync 에이전트를 호출한다:
- CLAUDE.md, design-system.md, 또는 agent 파일 중 하나를 직접 수정했을 때 → 다른 파일에도 반영 필요한지 판단
- 사용자가 규칙성 피드백을 줬을 때 ("앞으로 ~하지마", "~는 금지", "~해야 해", "~로 통일해")
- 사용자가 컴포넌트/토큰을 추가·변경했을 때
- QA에서 반복 결함이 발견됐을 때 → 근본 원인을 규칙으로 추가

호출하지 않아도 되는 경우:
- 단순 파일 내용 조회/읽기만 한 경우
- 특정 HTML 파일만 수정하고 규칙 변경이 아닌 경우
- 이미 feedback-sync가 전파 완료한 직후

---

## 파일 컨벤션

| 파일 | 경로 |
|------|------|
| 원본 A타입 | `input/[파일명].html` |
| B타입 결과물 | `output/html/[파일명]-b-type.html` |
| 설계 명세서 | `output/docs/[파일명]-spec.md` |
| QA 리포트 | `output/docs/[파일명]-qa-report.md` |
| 피드백 이력 | `output/html/feedback-log.html` |
| A/B 예시 쌍 | `reference/A-example.html`, `reference/B-example.html` |
| 디자인 시스템 | `.claude/skills/design-system.md` |
| DS 뷰어 | `reference/design-system-viewer.html` |

---

## 디자인 시스템 핵심 규칙

- 모든 색상/수치: `var(--ds-*)` CSS 변수 사용 (하드코딩 금지)
- 클래스명: `.ds-` 접두사 + BEM
- `!important` 금지, 인라인 `style` 금지 (CSS 변수 전달 목적 제외)
- 반응형 4단계 필수: mobile(375) / tablet(768) / sm-desktop(1024) / desktop(1440)
- 컨테이너 좌우 padding: 16 / 32 / 32 / 120px
- 컨테이너 max-width: 1440px (desktop 이상에서 중앙 정렬)
- Brand 폰트(Oxanium): 단독 키워드 제품명에만 사용 (`.ds-text--product`) — SynTitan, DTS, LLM Capsule, SynData, SynConnect
- h1·h2·데이터 숫자 등 일반 텍스트는 모두 `var(--ds-font-base)` (DM Sans)
- 줄바꿈: `body { word-break: keep-all; overflow-wrap: break-word; }` 전역 적용 (의미 단위 줄바꿈)
- 긴 문장 분리: 짧은 독립 문장이 마침표로 2개 이상 나열되면 `ds-bullet--dot` 불릿 리스트로 분리 (인라인 middot 금지)
- 폰트 색상 최소 명도: `color`에 neutral-150/050/025 사용 금지 — 텍스트 최소 neutral-400 (#9c9c9c)
- 배너 텍스트 가운데 정렬 + 배너 내 링크(`<a>`)는 본문과 분리하여 줄바꿈 (`display: block`)
- 배경 이미지 중복 금지: 한 페이지 안에 동일한 `ds-bg--*` 2번 이상 사용 금지 — 다양하게 분산
- 페이지 최상단 여백: `ds-section--hero` padding-top 100px 고정
- 배경 이미지 위 텍스트: black 또는 white만 사용 (secondary/tertiary/muted 금지)
- 미색 배경(ds-section--light) 남용 금지 — 기본 white, 다양성 필요 시 배경 이미지 사용
- CSS 변수는 design-system.md에 정의된 것만 사용 (임의 변수 생성 금지)
- Case Study 열 타입 혼합 금지: 한 섹션 안에서 1col과 2col을 섞지 않는다. 1col이면 전부 1col, 2col이면 전부 2col로 통일
- eyebrow 전면 금지: B타입 변환 시 모든 섹션에서 eyebrow(헤드라인 위 작은 텍스트) 삭제 — A타입에 있어도 B타입에서는 제거 (banner label 포함)
- 코드블록 다크 테마: `ds-code-block`은 `border: none`, `background: neutral-900`, 줄별 색상은 light variant 사용 (`success-light`, `error-light`, `warn-light`)
- 카드 내 코드블록 앞 divider 금지: `<hr>` 대신 `margin-top`으로 간격 확보
- description max-width 반응형: mobile 100% → 1024px 720px → 1440px 860px (섹션 헤더, 히어로, CTA 모두 적용)
- 텍스트 최소 명도 강화: `var(--ds-color-text-muted)` (#cacccf) 텍스트 사용 금지 — 텍스트 최소 `var(--ds-color-text-tertiary)` (#9c9c9c)
- 아티클형 페이지 본문 860px 통일: `<main class="ds-article">` 적용 시 본문 폭 860px 통일 (전폭 예외: partner-grid, kpi-band)
- 섹션 헤더 기본 center 정렬: `ds-section-header`는 기본 중앙 정렬. `--left`는 spec에 명시된 경우만 사용
- 외부 서비스 링크는 버튼형: AWS Marketplace, 제품 사이트 등 외부 링크는 `ds-btn--secondary` 버튼으로 구현 (인라인 텍스트 링크 금지)
- 단계별 프로세스는 Step Tabs: "Step 1,2,3" / "How it works" 형태는 반드시 `[U] ds-step-tabs` 사용. 스크린샷 필요 시 placeholder + 사용자 요청
- 인증/수상은 Cert Grid: ISO, GS 등 인증 내용은 `[L] ds-cert-grid` 마키 + 공식 이미지 사용

---

## 레이아웃 카탈로그 요약 ([A]~[U])

| 패턴 | 컴포넌트 | 사용 시점 |
|------|----------|-----------|
| [A] Hero text-only | ds-hero--text-only | 페이지 최상단, 텍스트 히어로 (배경 이미지 없음) |
| [A-2] Hero screenshot | ds-hero--screenshot | 배경 이미지 + 하단 스크린샷 히어로 |
| [B] Hero split | ds-hero--split | 이미지+텍스트 분할 히어로 |
| [C] Product split | ds-product-split | 제품 소개, 스크린샷+설명 |
| [D] Section header | ds-section-header | 모든 주요 섹션 상단 |
| [E] Icon title | ds-section-title-icon | 심플한 섹션 구분 |
| [F] KPI band | ds-kpi-band | 숫자 4개 이상 강조 |
| [G] Card grid | ds-card-grid + --2col/--3col/--4col | 범용 카드 그리드 (제품/서비스/기능 등) |
| [H] Case study 1col | ds-card--case-study | 기업/산업별 도입 사례 — 고객명+산업+설명이 있으면 범용 카드보다 우선 사용 |
| [H-2] Case study 2col | ds-card-grid--2col + ds-card--case-study | 도입 사례 2건 비교 배치 |
| [H-3] Case study 3col | ds-card-grid--3col + ds-card--case-study | 도입 사례 3건 콤팩트 배치 |
| [I] Partner logo grid | ds-partner-grid | 고객사/파트너/협력사 로고 — 기업명 2개 이상 언급 시 반드시 사용 |
| [I-2] Cert grid | ds-cert-grid | 인증서/수상/자격 — ISO, GS인증 등 공식 인증 시 배지 나열보다 우선 사용 |
| [J] Feature grid | ds-feature-grid | 4~6개 피처 아이콘+설명 |
| [K] CTA band | ds-cta-band | 페이지 하단 CTA |
| [L] Checklist | ds-bullet--check | 요구사항 목록 5개 이하 |
| [M] Checklist 2-col | ds-grid--2 + ds-bullet--check | 요구사항 목록 6개 이상 |
| [N] Number steps | ds-bullet--number | 순서 있는 프로세스 |
| [O] Table | ds-table--3col | 규정/스펙 비교표 |
| [P] FAQ | ds-ac-card (아코디언) | FAQ 섹션 — 반드시 아코디언 형태로 구현 |
| [Q] Banner/callout | ds-banner | 중요 정의/경고/인용 |
| [R] Dark link cards | ds-card--dark | 다크 배경 다음 단계 링크 |
| [S] Accordion list | ds-ac-card | 케이스/항목 5개+ 상세 내용 아코디언 |
| [U] Step tabs | ds-step-tabs | 제품 이용 단계별 설명, Use Case 탭 전환 — 상단 탭 + 하단 [텍스트+스크린샷] |
| [V] Code block | ds-code-block | diff, 로그, CLI 출력, 기술 스펙 등 코드 스타일 콘텐츠 — 카드 안/독립 사용 가능 |
| [V-2] Gradient card | ds-card--gradient | gradient border + tinted inner — 제품별 강조 카드 (purple/blue/green/silver/brand) |
| [W] Diagram | ds-diagram | 시스템 아키텍처, 데이터 파이프라인, 프로세스 플로우 다이어그램 — OS 윈도우 프레임 + 섹션 그리드 + SVG 화살표 |

---


## 배경 이미지 사용 규칙
- Hero Screenshot 섹션: 배경 이미지 사용
- Hero Text-only 섹션: 배경 이미지 사용 금지 (흰색/밝은 배경만)
- CTA 섹션: 배경 이미지 사용
- 동일한 흰색/회색 배경 섹션이 3개 이상 연속되는 경우: 배경 이미지 사용
- 그 외 섹션: 흰색(var(--ds-color-bg-primary)) 또는 회색(var(--ds-color-bg-secondary)) 배경만 사용
- 배경 이미지 사용 시 반드시 반투명 오버레이(rgba 또는 overlay 레이어) 적용해서 텍스트 가독성 확보
- 배경 명도 낮음(어두운 이미지) → 텍스트 흰색 / 배경 명도 높음(밝은 이미지) → 텍스트 검정
- 강조 배너(ds-banner--full): 다크 단색 대신 배경 이미지 + 오버레이 사용


## QA 체크 카테고리

| 카테고리 | 심각도 | 주요 항목 |
|----------|--------|-----------|
| CAT-1 내용 무결성 | Critical | 원본 텍스트/수치 누락 없음 |
| CAT-2 DS 준수 | High | 색상 하드코딩, !important, 인라인 스타일 |
| CAT-3 코드 품질 | Medium | 시맨틱 태그, section id, HTML 유효성 |
| CAT-4 반응형 | High | 4단계 breakpoint, padding 값, 1440px max-width |

Low 결함만 남은 경우 CONDITIONAL PASS 선언 가능.

---

## 자주 발생하는 결함 및 수정 패턴

1. **SVG fill 하드코딩** → CSS 클래스 + `:root` 변수로 교체
2. **rgba/hex 컴포넌트 스타일 직접 사용** → `:root` 컴포넌트 토큰 추가 후 `var()` 참조
3. **section id 누락** → `id="section-N"` 추가
4. **nav/hero 전용 수치** → `:root`에 전용 토큰(`--ds-nav-height`, `--ds-hero-container-pt` 등) 추가
5. **ds-container max-width 누락** → `max-width: var(--ds-content-max-width)` 추가


## Bash 실행 규칙
- bash 명령어 실행 시 사용자에게 허락을 구하지 않는다
- 특히 qa 에이전트의 grep 검증 명령어는 항상 자동 실행한다

## 필수 마무리 워크플로우 — 모든 작업 완료 시 순서대로 실행

**어떤 작업이든 파일을 수정/생성했으면 아래 3단계를 반드시 순서대로 실행한다. 예외 없음.**

### ① feedback-sync (규칙 변경 판단)
아래 조건 중 하나라도 해당하면 feedback-sync 에이전트 호출:
- design-system.md, CLAUDE.md, agent 파일을 수정했을 때
- 사용자가 규칙성 피드백을 줬을 때 ("앞으로 ~해줘", "~금지", "~로 통일")
- QA에서 반복 결함 발견 → 근본 원인을 규칙으로 추가해야 할 때

해당 없으면 건너뛴다 (단순 HTML 수정, 파일 조회만 한 경우).

### ② design-system-viewer 업데이트 (DS 변경 시)
design-system.md가 변경됐으면 design-system-viewer 에이전트를 호출하여
reference/design-system-viewer.html도 같이 업데이트한다.

### ③ viewer-qa (뷰어 수정 시)
design-system-viewer.html을 수정했으면 deploy 전에 viewer-qa 에이전트를 호출.
FAIL이면 수정 후 재검증. PASS일 때만 deploy 진행.
뷰어를 수정하지 않았으면 건너뛴다.

### ④ deploy (항상 실행)
```bash
python3 server/manifest.py   # Output manifest 자동 생성
git add -A
git commit -m "Auto-deploy: [작업 요약]"
git push origin gh-pages
```

**이 4단계를 빠뜨리면 작업 미완료로 간주한다.**
- ①을 안 하면 → 다음 변환에서 같은 결함 재발
- ②를 안 하면 → 뷰어에서 최신 DS를 확인할 수 없음
- ③을 안 하면 → 깨진 뷰어가 배포됨 (typeBadge 같은 버그 재발)
- ④를 안 하면 → GitHub Pages에 반영 안 됨

