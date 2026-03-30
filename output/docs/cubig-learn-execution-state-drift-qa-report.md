# QA Report
- 검증일: 2026-03-30 (Asia/Seoul)
- 대상 파일: output/html/cubig-learn-execution-state-drift-b-type.html
- 원본 파일: input/cubig-learn-execution-state-drift.html
- 명세서: output/docs/cubig-learn-execution-state-drift-spec.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 상태 |
|----|----------|--------|------|------|------|
| Q01 | CAT-2 | High | line 239–241 | 배경 이미지 경로가 .png — WebP 파일이 존재하는데 미사용 (`--ds-bg-img-grad-sage` 외 2개) | 수정 완료 (.webp로 교체) |
| Q02 | CAT-3 | Medium | line 1279–1281 | CTA band 버튼에 variant 미분리 — 3개 버튼 모두 `ds-btn--md`만 적용 | 수정 완료 (primary/secondary 클래스 추가) |

---

## 체크리스트 검증 결과

### [CAT-1] 내용 무결성

- [x] 모든 섹션 제목 존재 (10개 섹션 전부 확인)
- [x] 히어로 타이틀 및 description 일치
- [x] Section 2 도입부 3문장 + callout 내용 일치
- [x] Section 3 테이블 4행 완전 일치
- [x] Section 4 정의 배너 + 체크리스트 4항목 일치
- [x] Section 5 테이블 3행 + "21 days to 4 hours" 수치 일치
- [x] Section 6 Release State 정의 + 체크리스트 4항목 + 텔레콤 예시 일치
- [x] Section 7 FAQ 6문항 모두 원문 그대로 존재
- [x] Section 8 다크 링크 4개 일치
- [x] Section 9 CUBIG fits 문장 일치
- [x] Section 10 CTA 타이틀/description/버튼 3개 일치

결론: CAT-1 결함 없음

---

### [CAT-2] Design System 준수

- [x] CSS 변수가 :root에 선언됨
- [x] 색상 하드코딩 없음 — :root 변수 선언부 및 rgba 오버레이(shadow, overlay 목적)만 존재
- [x] !important 없음
- [x] 인라인 style 속성 없음 (CSS 변수 전달 아닌 순수 인라인 style 없음)
- [x] ds-text--brand가 spec 지정 강조 키워드 6곳 전부 적용됨 (Hero h1, 섹션 3–7 제목, CTA)
- [x] ds-banner에 border-left 없음 (상하 border-default만)
- [x] KPI 수치 파란색 없음 (이 페이지는 KPI band 없음)
- [x] ds-card 기본 배경 흰색 (surface-white)
- [x] CTA band가 `</main>` 밖에 배치됨 (line 1274, main 닫힘 line 1269)
- [x] body에 word-break: keep-all 적용됨 (line 92)
- [x] 긴 문장 불릿 분리 적절히 적용됨 (ds-bullet--check 사용)
- [x] 텍스트 color에 neutral-150/050/025 미사용 — 배경색으로만 사용됨
- [x] text-muted가 텍스트 color로 미사용 — 아이콘 배경(background)에만 사용됨 (line 699, 그래픽 요소)
- [x] 배경 이미지 위 텍스트: grad-sage(밝은 배경) → text-primary(black) 적용, paint-lavender(밝은 배경) → text-primary 적용 (line 518, 540, 547)
- [x] ds-section--light 3개 — spec이 3개 섹션(3/5/7번)에 surface-light 명시, 규칙 범위 내
- [x] eyebrow 완전 제거됨 — grep 결과 0건
- [x] 배경 이미지 .webp 사용 — line 239–241 수정 완료
- [x] description max-width 반응형 적용: 100% → 720px → 860px (line 383–384, 431–435, 555–559)
- [x] 아코디언 header grid 1fr auto auto (line 663)
- [x] DS에 없는 커스텀 CSS 변수 없음 — 모든 변수가 DS 정의 범위 내
- [x] text-wrap: balance (제목), text-wrap: pretty (본문) 적용됨
- [x] "See how" 외부 링크가 ds-btn ds-btn--secondary 버튼으로 구현됨 (line 1263)
- [x] 이미지 경로 절대경로 사용 (/cubig-homepage-design-system/reference/images/)
- [x] banner-full padding: space-xl (line 512)
- [x] `<main class="ds-article">` 적용됨 (line 918)

---

### [CAT-3] 코드 품질

- [x] 시맨틱 태그 사용 (main, section, article, h1–h3, p, ul, table)
- [x] 모든 section에 id 존재 (section-1 ~ section-10)
- [x] 아코디언 toggle이 ds-ac-card__toggle 버튼으로 구현됨 (텍스트 "+" 아닌 CSS pseudo-element 아이콘)
- [x] FAQ가 ds-ac-card 아코디언으로 구현됨 (6개 accordion card)
- [x] Google Fonts 링크 존재 (line 80 — DM Sans + Oxanium)
- [x] eyebrow 없음
- [x] CTA 타이틀 64px (ds-text-7xl) 적용됨 (line 793)
- [x] CTA 텍스트 흰색 (line 795, ds-color-white)
- [x] CTA 버튼 variant 분리 완료 — line 1279 ds-btn--primary, line 1280–1281 ds-btn--secondary

---

### [CAT-4] 반응형 검증

- [x] 4단계 breakpoint 모두 존재 (768px line 282/324/352, 1024px line 286/325/353, 1440px line 291/326/354)
- [x] mobile 기본 padding 16px (--ds-container-padding-mobile: 16px)
- [x] tablet 32px (--ds-container-padding-tablet: 32px)
- [x] sm-desktop 32px (--ds-container-padding-sm-desktop: 32px)
- [x] desktop 120px, max-width 1440px (line 326)
- [x] body padding-top: 58px (line 91)
- [x] ds-section--hero padding-top: 100px (line 329)
- [x] ds-article__body max-width 860px with responsive padding (line 347–354)
- [x] Typography 4단계 단계적 변화 적용됨 (h1 24→28→32→36px, h2 20→22→24→28px)
- [x] description max-width 반응형 적용 (100% → 720px → 860px)

---

## 통계
- 전체 결함 수: 2개 (모두 수정 완료)
- Critical: 0개 / High: 1개(수정) / Medium: 1개(수정) / Low: 0개

---

## 최종 판정

**PASS** (CONDITIONAL PASS 상태에서 QA 에이전트가 직접 수정 완료)

---

## 판정 근거

초기 발견 결함 2건(Q01 WebP 경로 미사용, Q02 CTA 버튼 variant 미분리)을 QA 검증 과정에서 직접 수정하여 완전히 해소. 수정 후 재검증 결과 모든 CAT-1~4 항목 통과.

- CAT-1 내용 무결성: 10개 섹션 원본 텍스트/수치 100% 일치
- CAT-2 DS 준수: eyebrow 0건, !important 0건, 하드코딩 색상 0건, ds-text--brand 전체 적용
- CAT-3 코드 품질: 시맨틱 태그, FAQ 아코디언, ds-article 적용 완료
- CAT-4 반응형: 4단계 breakpoint 완전 적용

---

## 다음 액션

**PASS**: QA 완료. `output/html/cubig-learn-execution-state-drift-b-type.html`이 최종 B타입 파일입니다.
