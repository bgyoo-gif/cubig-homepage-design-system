# QA Report
- 검증일: 2026-03-20 (2차 검증)
- 대상 파일: output/cubig-learn-prompt-data-leakage-b-type.html
- 원본 파일: input/cubig-learn-prompt-data-leakage.html
- 명세서: output/cubig-learn-prompt-data-leakage-spec.md
- QA 엔지니어: qa-agent

---

## 이전 결함 재검증 (1차 FAIL 항목)

| 이전 ID | 내용 | 수정 여부 | 비고 |
|---------|------|-----------|------|
| Q01 | DS 미정의 커스텀 클래스 8종 | 부분 수정 | 구 클래스 제거됨. 그러나 새 커스텀 클래스(ds-card--link, ds-card--dark-list, ds-card--link__arrow) 및 미정의 변수(--ds-overlay-*, --ds-color-logo-purple) 잔존 → 신규 결함으로 재등록 |
| Q02~Q08 | rgba 하드코딩 색상 | 조건부 수정 | :root 토큰화로 직접 하드코딩 제거됨. 그러나 토큰 자체가 DS 미정의 변수 → 규칙 위반 잔존 |

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| Q01 | CAT-2 | High | line 566~585, 984~999 | DS에 정의되지 않은 커스텀 클래스 사용: `ds-card--link`, `ds-card--dark-list`, `ds-card--link__arrow` | design-system.md에 `.ds-card--link`, `.ds-card--dark-list`, `.ds-card--link__arrow`가 존재하지 않음. DS에는 `.ds-card--dark`만 정의됨. 이전 Q01의 `ds-dark-card-link` 계열을 다른 커스텀 명칭으로 대체했을 뿐 근본 문제 미해결 |
| Q02 | CAT-2 | High | line 224~228 | DS 미정의 변수 사용: `--ds-overlay-white-92`, `--ds-overlay-white-85`, `--ds-overlay-white-72`, `--ds-overlay-white-60`, `--ds-overlay-dark-sm` | design-system.md :root에 위 변수들이 정의되지 않음. 이전 Q02~Q08의 rgba 하드코딩을 :root 토큰으로 래핑했으나, 토큰 자체가 DS 외부에서 임의 생성된 커스텀 변수 — "CSS 변수는 design-system.md에 정의된 것만 사용" 규칙 위반 |
| Q03 | CAT-2 | High | line 221 | DS 미정의 변수 사용: `--ds-color-logo-purple` (#6C54A0) | design-system.md에 `--ds-color-logo-purple`이 정의되지 않음. DS에는 `--ds-gradient-brand`(linear-gradient(130deg, #6C54A0, ...))만 존재. 임의 토큰 추가 |
| Q04 | CAT-2 | High | line 528 | `ds-cta-band__description`의 color에 `var(--ds-overlay-white-85)` 사용 | overlay 변수는 색상(color) 값이 아닌 배경(background) 전용 토큰. CTA 텍스트 색상에는 `var(--ds-color-text-inverse)` (#ffffff) 사용해야 함 |

---

### 상세 검증 근거

#### CAT-1 내용 무결성 — PASS

- 섹션 8개 모두 존재: Hero(section-1), 도입부+배너(section-2), Sensitive Data Entry(section-3), Compliance Table(section-4), PII Protection(section-5), FAQ(section-6), Dark Links(section-7), CTA(section-8)
- 리드 텍스트 존재 (line 743): "Your team built an enterprise AI workflow..."
- 본문 단락 2개 존재 (line 744~745)
- 배너 정의문 존재 (line 748): "Prompt data leakage occurs when..."
- 체크리스트 5개 항목 모두 존재 (line 764~785)
- 테이블 5행 모두 존재: GDPR/HIPAA/CCPA/PIPA/Financial (line 813~838)
- 테이블 하단 설명 존재 (line 841)
- PII Protection 카드 5개 모두 존재 (line 857~928)
- FAQ 5개 모두 존재 (line 944~971)
- Dark link 4개 모두 존재 (line 985~999)
- CTA 텍스트 존재 (line 1012~1018)
- 수치 무결성: 해당 없는 콘텐츠 (KPI 수치 없음)

#### CAT-2 Design System 준수 — 부분 FAIL

**하드코딩 색상 (직접 사용) — PASS:**
`:root` 변수 정의 내 hex/rgba 사용은 허용. CSS 코드 내 직접 하드코딩 없음.

**!important — PASS:** 없음

**인라인 style 속성 — PASS:** 없음

**ds-text--brand 적용 — PASS:**
스펙 4개 강조 키워드 모두 적용됨:
- "Prompt Data Leakage" (line 729)
- "Sensitive Data" (line 760)
- "Compliance Exposure" (line 795)
- "PII Protection" (line 851)

**배너 좌측 border — PASS:** border-left 없음 확인

**KPI/지표 수치 파란색 — PASS (해당 없음):** KPI 수치 없는 콘텐츠

**ds-card 기본 배경 — PASS:** `background-color: var(--ds-color-surface-white)` (line 438)

**CTA 배치 — PASS:** section-8 CTA band가 `</main>` 밖 전폭 배치 (line 1010). ds-container 미중첩.

**word-break — PASS:** body에 `word-break: keep-all` 적용 (line 87)

**긴 문장 불릿 분리 — PASS:** 마침표 나열 패턴 없음, 인라인 middot 사용 없음

**폰트 색상 명도 — PASS:** neutral-150/050/025가 텍스트 color에 사용된 사례 없음

**배경 명도 vs 텍스트 색상 — PASS:**
- ds-banner--full (wave-teal, 밝은 이미지 + 72% 흰색 오버레이): `color: var(--ds-color-text-primary)` (검정) — 적절
- ds-cta-band (lavender, 어두운 오버레이): 흰색 텍스트 — 적절

**배경 이미지 위 텍스트 색상 — PASS (조건부):**
- ds-banner--full 내 secondary/tertiary/muted 직접 사용 없음
- ds-cta-band__description이 `var(--ds-overlay-white-85)` 사용 → Q04로 별도 등록

**ds-section--light 남용 — PASS:**
- HTML 적용: section-3(line 757), section-5(line 848) — 2개. 3개 미만.
- CSS 정의(line 310) 포함하면 3건이나 실제 HTML 사용은 2건이므로 PASS.

**Hero eyebrow — PASS:** Hero 섹션에 eyebrow 없음 (line 718~734)

**Brand 폰트(Oxanium) 사용 — PASS:** ds-text--product가 LLM Capsule, SynTitan, DTS 제품명 단독에 적용됨. 문장 속 제품명은 정상 패턴.

**DS 미정의 커스텀 CSS 변수 — FAIL:**
- `--ds-overlay-white-92` (line 224): DS 미정의
- `--ds-overlay-white-85` (line 225): DS 미정의
- `--ds-overlay-white-72` (line 226): DS 미정의
- `--ds-overlay-white-60` (line 227): DS 미정의
- `--ds-overlay-dark-sm` (line 228): DS 미정의
- `--ds-color-logo-purple` (line 221): DS 미정의

**DS 미정의 커스텀 CSS 클래스 — FAIL:**
- `ds-card--link` (line 566): DS 미정의
- `ds-card--link__arrow` (line 579): DS 미정의
- `ds-card--dark-list` (line 585): DS 미정의

#### CAT-3 코드 품질 — PASS

- 시맨틱 태그: section, article, nav, main, footer, header 적절 사용
- 모든 section에 id 존재: section-1~section-8 확인
- HTML 유효성: 태그 닫힘/중첩 오류 없음
- 이미지/아이콘 alt: SVG에 `aria-hidden="true"` 처리됨
- Google Fonts: DM Sans, Oxanium 로드 확인 (line 75)
- 아코디언: 해당 없음
- eyebrow "//": 없음
- CTA 밴드 타이틀 크기: mobile `var(--ds-text-5xl)` (40px), desktop `var(--ds-text-7xl)` (64px, line 540) — PASS
- CTA 밴드 텍스트: 흰색 — PASS

#### CAT-4 반응형 검증 — PASS

**Breakpoint 존재:**
- 768px: 다수 존재 (line 296, 303, 346, 380, 462, 537 등)
- 1024px: 다수 존재 (line 297, 347, 381, 515, 656 등)
- 1440px: 다수 존재 (line 285, 298, 348, 382, 455, 538 등)

**container 여백:**
- mobile 16px: `--ds-container-padding-mobile: 16px` (line 211)
- tablet 32px: `--ds-container-padding-tablet: 32px` (line 212)
- sm-desktop 32px: `--ds-container-padding-sm-desktop: 32px` (line 213)
- desktop 120px: `--ds-container-padding-desktop: 120px` (line 214)

**ds-container max-width 1440px:** line 298 — PASS

**body padding-top: 58px:** line 86 — PASS

**ds-section--hero padding-top 100px:** line 309 — PASS

**ds-grid mobile 1열:** `.ds-card-grid { grid-template-columns: 1fr; }` (line 460) — PASS

**Typography 4단계:** section-header, hero title 모두 768/1024/1440 단계 정의됨 — PASS

---

## 통계
- 전체 결함 수: 4개
- Critical: 0개
- High: 4개
- Medium: 0개
- Low: 0개

---

## 최종 판정
**FAIL**

---

## 판정 근거

1. **Q01 (High):** 이전 Q01에서 지적된 커스텀 클래스 8종은 제거됐으나, `ds-card--link`, `ds-card--dark-list`, `ds-card--link__arrow` 3종의 새 커스텀 클래스가 잔존함. design-system.md에 존재하지 않는 임의 클래스 생성 — DS 규칙 위반.

2. **Q02 (High):** 이전 Q02~Q08의 rgba 직접 하드코딩은 `:root` 토큰으로 추상화됐으나, 생성된 `--ds-overlay-white-*` 및 `--ds-overlay-dark-sm` 변수들이 design-system.md에 정의되지 않음. "CSS 변수는 design-system.md에 정의된 것만 사용" 규칙 위반.

3. **Q03 (High):** `--ds-color-logo-purple: #6C54A0`이 DS에 없는 임의 토큰. DS에는 `--ds-gradient-brand`로만 해당 색상이 사용됨.

4. **Q04 (High):** `ds-cta-band__description`의 color 값으로 overlay 배경 전용 토큰(`--ds-overlay-white-85`)을 사용 중. 텍스트 color에는 `var(--ds-color-text-inverse)`가 적절.

---

## 다음 액션
**FAIL:** frontend-dev 에이전트에 qa-report.md 전달 및 수정 요청.

### 수정 지시 요약

**Q01 수정 방법:**
- `ds-card--link` → `ds-card--dark` 위에 직접 스타일 추가 또는 DS에 `ds-card--link` 컴포넌트 추가 요청
- `ds-card--dark-list` → DS에 없으므로 `ds-grid ds-grid--1` 패턴으로 대체 가능 (또는 DS에 추가)
- `ds-card--link__arrow` → 인라인 span 대신 `ds-card--dark` 내 구조를 DS 기반으로 단순화

권고: DS에 `[R] Dark link cards` 패턴의 공식 클래스가 없으므로, 해당 클래스들을 design-system.md에 추가 정의하거나 기존 DS 클래스만으로 구현하는 방식 선택 필요.

**Q02 수정 방법:**
- `--ds-overlay-white-92`, `--ds-overlay-white-85`, `--ds-overlay-white-72`, `--ds-overlay-white-60`, `--ds-overlay-dark-sm` → design-system.md에 :root 토큰으로 공식 추가하거나
- DS에 정의된 값으로 대체:
  - `--ds-overlay-white-72` 사용 위치 → DS `.ds-section--bg-img::before`의 `rgba(255,255,255,0.72)` 직접 참조하거나
  - nav 배경 → DS 정의 그대로 `rgba(255,255,255,0.92)` 하드코딩 유지 (DS 자체가 하드코딩이므로 동일)
  - CTA 버튼/footnote → DS 정의 그대로 `rgba(255,255,255,0.92)`, `rgba(255,255,255,0.6)` 하드코딩 유지

**Q03 수정 방법:**
- `--ds-color-logo-purple` 제거 후 `--ds-gradient-brand`에서 같은 색을 추출하거나, DS에 해당 토큰을 공식 추가

**Q04 수정 방법:**
- `.ds-cta-band__description { color: var(--ds-overlay-white-85); }` → `color: var(--ds-color-text-inverse);` 또는 DS CTA 정의 기준값 `rgba(255,255,255,0.85)` 직접 사용
