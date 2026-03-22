# QA Report
- 검증일: 2026-03-22 (오늘)
- 대상 파일: output/html/cubig-dts-v3-b-type.html
- 원본 파일: input/cubig-dts-v3.html
- 명세서: output/docs/cubig-dts-v3-spec.md
- QA 엔지니어: qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 | 원인 분석 |
|----|----------|--------|------|------|-----------|
| Q01 | CAT-2 | High | line 478 | `ds-card__badge--teal` 색상 하드코딩 | `.ds-card__badge--teal { color: #0e9f8e; border-color: #0e9f8e; }` — 헥스 컬러 직접 사용. `:root`에 CSS 변수로 정의 후 `var()` 참조해야 함 |
| Q02 | CAT-2 | High | line 534 | KPI Band fallback 배경 그라디언트 하드코딩 | `.ds-kpi-band:not([class*="ds-bg--"]) { background: linear-gradient(135deg, #1a6fe8, #0ea5a0); }` — 두 헥스 컬러 하드코딩. `:root` 변수화 필요 |
| Q03 | CAT-2 | High | line 527 | KPI Band padding 수치 하드코딩 | `padding: 48px 40px` — DS spacing 변수 없는 수치. `var(--ds-space-2xl) var(--ds-space-xl)` (48px/32px에 근사) 또는 `:root` 토큰으로 분리해야 함 |
| Q04 | CAT-2 | High | line 4 | `ds-section--light` 4개 사용 — 남용 기준(3개 이상) 초과 | sections: line 1145(섹션4), line 1355(섹션7), line 1650(섹션10), line 1795(섹션12). 4개 연속 활용. 규칙상 3개 이상이면 남용 의심. 섹션4 또는 섹션7 중 하나는 배경 이미지 섹션으로 대체 권고 |
| Q05 | CAT-3 | Medium | line 1617 | 인라인 style 속성 사용 (레이아웃 목적) | `<div class="ds-card-grid ds-card-grid--3col" style="margin-top: var(--ds-space-2xl)">` — CSS 변수 전달 목적이 아닌 레이아웃 간격 지정. 전용 modifier 클래스(`ds-card-grid--mt`) 또는 CSS rule로 분리해야 함 |
| Q06 | CAT-3 | Medium | line 1659 | 인라인 style 속성 사용 (색상 목적) | `<span class="ds-caption" style="color: var(--ds-color-text-tertiary)">` — CSS 변수 전달이지만 전용 유틸리티 클래스(`ds-text--tertiary` 등)로 대체 권고 |
| Q07 | CAT-2 | Medium | lines 600, 605 | Table 헤더/셀 padding 수치 하드코딩 | `padding: 12px 16px`, `padding: 14px 16px` — DS spacing 변수(`var(--ds-space-sm) var(--ds-space-md)`)로 대체해야 함 |
| Q08 | CAT-3 | Medium | line 550 | KPI Band mobile padding 수치 하드코딩 | `padding: 32px 20px` — 20px은 DS spacing 변수에 없는 값. `var(--ds-space-xl) var(--ds-space-md)` (32px/16px)로 근사 대체해야 함 |
| Q09 | CAT-3 | Low | line 236 | `--ds-content-max-width: 1200px` 정의됐으나 실제로 사용되지 않음 | `:root`에 1200px로 정의됐지만, `ds-container`는 max-width: 1440px를 직접 사용. 변수가 dead code. 1440px로 정정하거나 변수 제거 |
| Q10 | CAT-2 | Low | line 395 | Hero actions gap 수치 하드코딩 | `.ds-hero__actions { gap: 12px; }` — DS spacing 변수(`var(--ds-space-sm)` = 12px)로 대체해야 함 |
| Q11 | CAT-2 | Low | line 334 | nav inner gap 수치 하드코딩 | `.ds-nav__inner { gap: 24px; }` — DS spacing 변수(`var(--ds-space-lg)` = 24px)로 대체 권고 |
| Q12 | CAT-2 | Low | line 336 | nav links gap 수치 하드코딩 | `.ds-nav__links { gap: 32px; }` — DS spacing 변수(`var(--ds-space-xl)` = 32px)로 대체 권고 |
| Q13 | CAT-3 | Low | line 494 | card grid gap 수치 하드코딩 | `.ds-card-grid { gap: 24px; }` — `var(--ds-space-lg)` (24px)로 대체 권고 |

---

## 결함 상세 근거

### Q01 — 하드코딩 색상 (#0e9f8e)
```
line 478: .ds-card__badge--teal  { color: #0e9f8e; border-color: #0e9f8e; }
```
DS 규칙: 모든 색상은 `var(--ds-*)` 사용. `#0e9f8e`는 teal 계열이며 DS에 정의되지 않은 색상. `:root`에 `--ds-color-teal: #0e9f8e` 추가 후 참조해야 함.

### Q02 — 하드코딩 색상 (#1a6fe8, #0ea5a0)
```
line 534: background: linear-gradient(135deg, #1a6fe8, #0ea5a0);
```
KPI Band에 `ds-bg--*` 클래스가 없을 때 적용되는 fallback 그라디언트. 두 색상 모두 DS에 없는 값. 변수로 추출해야 함.

### Q03 — padding 수치 하드코딩 (48px, 40px)
```
line 527: border-radius: var(--ds-radius-xl); padding: 48px 40px;
```
DS spacing 토큰에서 48px = `--ds-space-2xl`, 40px은 대응 토큰 없음. 근사 변수 사용 또는 `:root`에 `--ds-kpi-band-padding: 48px 40px` 전용 토큰으로 분리.

### Q04 — ds-section--light 4개 남용
실제 사용 위치:
- line 1145: 섹션 4 (DTS vs Other Approaches) — 비교표
- line 1355: 섹션 7 (Deployment Standalone/Integrated)
- line 1650: 섹션 10 (Certifications & Trust)
- line 1795: 섹션 12 (FAQ)

규칙: 3개 이상이면 남용. 섹션 배경 이미지 활용으로 다양성 부여 필요.

### Q05/Q06 — 인라인 style 속성
- line 1617: `style="margin-top: var(--ds-space-2xl)"` — CSS 변수 전달이나 레이아웃 제어 목적
- line 1659: `style="color: var(--ds-color-text-tertiary)"` — 색상 제어 목적

CSS 변수 전달 예외에 해당하지만, 레이아웃 간격과 텍스트 색상은 클래스로 분리가 원칙.

---

## 통과 항목 확인

### CAT-1 내용 무결성
- 섹션 제목 13개 전체 존재: 확인
- Hero 설명 텍스트 일치: 확인 (line 1066)
- KPI 수치(+30pp, -90%, 97.6%, 277K+) 일치: 확인 (lines 1091-1108)
- 비교표 6행 5열 완전 일치: 확인 (lines 1164-1205)
- FAQ 6개 항목 전체 존재: 확인 (lines 1807-1889)
- 아코디언 4개 사례 (IBK, Kyobo, Marketing, Defense) 전체 존재: 확인
- Hero bullet 3개 항목 존재: 확인 (lines 1069-1071)
- CTA Band 텍스트 일치: 확인 (line 1902-1909)

### CAT-2 Design System
- CSS 변수 :root 선언: 확인 (lines 95-246)
- !important 사용: 없음 (확인)
- ds-text--brand 강조 적용 (9개 섹션): 확인
  - 섹션 3: "Synthetic Data" (line 1127)
  - 섹션 4: "Restricted Data" (line 1148)
  - 섹션 5: "One Engine." (line 1218)
  - 섹션 6: "Privacy Protection" (line 1276)
  - 섹션 8: "Case Records" (line 1417)
  - 섹션 9: "Blocking AI" (line 1564)
  - 섹션 10: "Trusted" (line 1653)
  - 섹션 11: "Fraud Detection" (line 1772)
  - 섹션 12: "Questions" (line 1798)
- KPI 수치 색상: 흰색 (`var(--ds-color-white)`, line 545) — 파란색 미사용: 확인
- ds-card 기본 배경 흰색: 확인 (line 462, `surface-white`)
- ds-banner border-left 없음: 확인
- CTA Band (ds-cta-band) ds-container 밖 배치: 확인 (line 1900, `</main>` 이전 독립 section)
- word-break: keep-all body 전역 적용: 확인 (line 72)
- 긴 문장 bullet 분리: 확인 (lines 1068-1072, ds-bullet--dot 사용)
- 텍스트 color에 neutral-150/050/025 미사용: 확인 (badge-neutral background에만 사용, color에는 미사용)
- Hero eyebrow 없음: 확인
- 배경 이미지 중복 없음: lavender/green-wave/peach/wave-teal 각 1회: 확인
- 배경 이미지 위 텍스트 (green-wave, peach): color: text-primary(어두운 텍스트, 밝은 배경) 적용: 확인
- Brand 폰트(Oxanium) 제품명 단독 사용: 확인 (DTS, SynTitan에만 ds-text--product 적용)
- 배너 텍스트 가운데 정렬: 확인 (line 564, text-align: center)
- DS 정의 CSS 변수만 사용: 확인 (--ds-banner-bg는 DS 변수)

### CAT-3 코드 품질
- 시맨틱 태그 사용 (section, article, nav, main): 확인
- 모든 section에 id 존재 (section-1 ~ section-13): 확인 (13개 전체)
- 아코디언 토글 ds-ac-card__toggle 버튼 구현: 확인 (lines 1809-1811)
- CTA Band 텍스트 흰색: 확인 (line 1005, `color: var(--ds-color-white)`)
- CTA Band 타이틀 40px(mobile) ~ 64px(desktop): 확인 (line 1003~1031)
- Google Fonts link 존재: 확인 (line 60, DM Sans + Oxanium + Fragment Mono)
- eyebrow "//" 없음: 확인

### CAT-4 반응형
- min-width: 768px 존재: 확인
- min-width: 1024px 존재: 확인
- min-width: 1440px 존재: 확인
- body padding-top: 58px: 확인 (line 71)
- ds-section--hero padding-top: 100px: 확인 (line 312)
- ds-container max-width: 1440px (1440px breakpoint): 확인 (line 309)
- 컨테이너 좌우 padding 16/32/32/120px: 확인 (lines 232-235, 307-309)
- ds-card-grid mobile 1열: 확인 (line 494)
- Typography 4단계 스케일: 확인 (lines 283-296)

---

## 통계
- 전체 결함 수: 13개
- Critical: 0개
- High: 4개 (Q01, Q02, Q03, Q04)
- Medium: 4개 (Q05, Q06, Q07, Q08)
- Low: 5개 (Q09, Q10, Q11, Q12, Q13)

---

## 최종 판정

**FAIL**

---

## 판정 근거

High 결함 4개가 존재하여 FAIL 판정:

1. **Q01 (High)**: `ds-card__badge--teal`에 `#0e9f8e` 헥스 컬러 직접 하드코딩 — DS 색상 하드코딩 금지 위반
2. **Q02 (High)**: KPI Band fallback 배경에 `#1a6fe8`, `#0ea5a0` 두 헥스 컬러 하드코딩 — DS 색상 하드코딩 금지 위반
3. **Q03 (High)**: KPI Band `padding: 48px 40px` 수치 하드코딩 — DS spacing 변수 미사용
4. **Q04 (High)**: `ds-section--light` 4개 사용 — 3개 이상 남용 기준 초과

CAT-1 내용 무결성과 CAT-4 반응형은 모두 합격 수준. 단, CAT-2 하드코딩 색상 및 spacing 수치 위반, ds-section--light 남용이 확인되어 수정 후 재검증이 필요함.

---

## 다음 액션

[FAIL]: frontend-dev 에이전트에 qa-report.md 전달 및 수정 요청.

**수정 요청 사항 요약:**

1. **Q01 수정** (line 478): `:root`에 `--ds-color-teal: #0e9f8e` 추가 후 `.ds-card__badge--teal { color: var(--ds-color-teal); border-color: var(--ds-color-teal); }` 로 교체
2. **Q02 수정** (line 534): `:root`에 `--ds-kpi-fallback-color-a: #1a6fe8`, `--ds-kpi-fallback-color-b: #0ea5a0` 추가 후 `linear-gradient(135deg, var(--ds-kpi-fallback-color-a), var(--ds-kpi-fallback-color-b))` 로 교체
3. **Q03 수정** (line 527): `:root`에 `--ds-kpi-band-padding: 48px 40px` 추가 후 `padding: var(--ds-kpi-band-padding)` 으로 교체; mobile(line 550)도 동일하게 토큰화
4. **Q04 수정**: `ds-section--light` 사용 섹션 4개 중 1개를 배경 이미지 섹션으로 교체 — 섹션 7(Deployment, line 1355) 또는 섹션 4(비교표, line 1145)를 흰색 배경으로 변경하거나 `ds-bg--*` 배경 이미지 섹션으로 전환하여 3개 이하로 줄일 것
5. **Q05 수정** (line 1617): `style="margin-top: var(--ds-space-2xl)"` 제거 후 CSS rule에 `.ds-key-concepts { margin-top: var(--ds-space-2xl); }` 추가
6. **Q06 수정** (line 1659): `style="color: var(--ds-color-text-tertiary)"` 제거 후 `.ds-caption--tertiary { color: var(--ds-color-text-tertiary); }` 클래스 적용
7. **Q07 수정** (lines 600, 605): `padding: 12px 16px` → `padding: var(--ds-space-sm) var(--ds-space-md)`, `padding: 14px 16px` → `var(--ds-space-sm) var(--ds-space-md)` 로 교체
8. **Q08 수정** (line 550): `padding: 32px 20px` → `padding: var(--ds-space-xl) var(--ds-space-md)` 로 교체
