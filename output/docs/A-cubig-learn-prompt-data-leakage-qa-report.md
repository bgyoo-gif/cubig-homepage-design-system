# QA Report
- 검증일: 2026-03-15 (재검증 — Q01/Q02 수정 확인)
- 대상 파일: output/A-cubig-learn-prompt-data-leakage-b-type.html
- 원본 파일: input/A-cubig-learn-prompt-data-leakage.html
- 명세서: output/A-cubig-learn-prompt-data-leakage-spec.md
- QA 엔지니어: qa-agent

---

## 재검증 범위

이전 판정(FAIL)에서 지적된 Q01/Q02 수정 사항을 소스코드 직접 검사로 확인.

- Q01: `.ds-banner--info` 내 `rgba(21, 94, 160, 0.08)` 하드코딩 → `:root` 변수 `--ds-banner-info-bg` + `var()` 참조로 교체
- Q02: `.ds-banner--brand` 내 `rgba(166, 23, 255, 0.08)` 하드코딩 → `:root` 변수 `--ds-banner-brand-bg` + `var()` 참조로 교체

---

## grep 검증 결과 (실행 근거)

**하드코딩 색상 검색** (`grep -n '#[0-9a-fA-F]\{3,6\}\|rgb(\|rgba(\|hsl('`):

컴포넌트/레이아웃 CSS 및 HTML 마크업 내에서 색상 리터럴 직접 사용 없음.
출력된 모든 매칭은 `:root` 변수 정의 블록(line 86-214) 내부에 한정됨. 이는 Design System 규칙상 허용된 영역이다.

확인된 핵심 수정 결과:
- line 206: `--ds-banner-info-bg: rgba(21, 94, 160, 0.08);` — `:root` 내 변수 정의 (허용)
- line 207: `--ds-banner-brand-bg: rgba(166, 23, 255, 0.08);` — `:root` 내 변수 정의 (허용)
- line 386: `.ds-banner--info { --ds-banner-accent: var(--ds-color-info); --ds-banner-bg: var(--ds-banner-info-bg); }` — var() 참조 정상
- line 387: `.ds-banner--brand { --ds-banner-accent: var(--ds-color-brand-purple); --ds-banner-bg: var(--ds-banner-brand-bg); }` — var() 참조 정상

**!important 검색**: 결과 0건 — 통과

**인라인 style 속성 검색** (`grep -n 'style="[^-]'`): 결과 0건 — 통과

---

## 체크리스트 검증 결과

### [CAT-1] 내용 무결성 (Critical)

| 항목 | 결과 | 비고 |
|------|------|------|
| 모든 섹션 제목 존재 | PASS | h1(line 1062) / h2 × 3: Section 3(line 1098), Section 4(line 1129), Section 5(line 1176) / FAQ eyebrow(line 1216) 전부 존재 |
| 모든 본문 텍스트 누락/변경 없음 | PASS | 두 lead-in 문장(line 1082-1083) 모두 보존. 전체 paragraph 원문과 1:1 일치 |
| 수치/데이터 정확히 일치 | PASS | 규정 테이블 5행 × 3열 (GDPR Article 25 / HIPAA / CCPA / PIPA / Financial regulations) 원본과 완전 일치 |
| 목록 항목 수 일치 | PASS | 체크리스트 5항목(line 1101-1122), FAQ 5항목(line 1219-1238), feature-item 5항목(line 1180-1205), bridge 링크 4항목(line 1250-1265) 원본과 동일 |

### [CAT-2] Design System 준수 (High)

| 항목 | 결과 | 비고 |
|------|------|------|
| CSS 변수가 :root에 선언 | PASS | line 86-215에 DS 전체 변수 선언. --ds-banner-info-bg, --ds-banner-brand-bg 포함 |
| 색상 하드코딩 없음 | PASS | 컴포넌트 CSS 및 HTML 마크업에서 색상 리터럴 0건. :root 정의값은 허용 범위 |
| 수치 하드코딩 없음 | PASS | spacing, radius 모두 var(--ds-*) 참조 확인 |
| .ds- 접두사 모든 커스텀 클래스에 있음 | PASS | 전체 마크업에서 커스텀 클래스 .ds- 접두사 준수 확인 |
| !important 없음 | PASS | grep 결과 0건 |
| 인라인 style 속성 없음 | PASS | grep 결과 0건 |
| Q01 수정 확인 — banner info | PASS | --ds-banner-info-bg :root 선언(line 206) + .ds-banner--info에서 var(--ds-banner-info-bg) 참조(line 386) |
| Q02 수정 확인 — banner brand | PASS | --ds-banner-brand-bg :root 선언(line 207) + .ds-banner--brand에서 var(--ds-banner-brand-bg) 참조(line 387) |

### [CAT-3] 코드 품질 (Medium)

| 항목 | 결과 | 비고 |
|------|------|------|
| 시맨틱 태그 사용 | PASS | nav, main, section(×8), article(×5), footer, h1~h3 적절히 사용. div 남용 없음 |
| 모든 section에 id 있음 | PASS | section-1~section-8(line 1054~1272) 전부 id 보유. 내부 heading에도 id 부여 |
| HTML 유효성 | PASS | 태그 미닫힘, 중첩 오류 없음. 총 1336라인 정상 구조 |
| 이미지/아이콘에 alt 또는 aria-label | PASS | SVG aria-hidden="true"(line 1013), logo aria-label="CUBIG Home"(line 1012), nav aria-label(line 1011), feature icon aria-hidden="true"(line 1181~1201) |

### [CAT-4] 반응형 (Medium)

| 항목 | 결과 | 비고 |
|------|------|------|
| Mobile 기본 스타일 있음 | PASS | .ds-container padding: var(--ds-container-padding-mobile) = 16px(line 288). h1 24px 기본값(line 234) |
| @media (min-width: 768px) Tablet 분기 있음 | PASS | line 940, 957, 986 |
| @media (min-width: 1024px) Desktop 분기 있음 | PASS | line 943, 962 |
| .ds-container max-width + margin: auto | PASS | line 286-287: max-width: var(--ds-content-max-width); margin: 0 auto; |
| 5단계 반응형 완비 | PASS | Mobile base / 768 / 1024 / 1440(line 946, 969) / 1920(line 949, 978) 분기 모두 존재 |

---

## 결함 목록

결함 없음.

| ID | 카테고리 | 심각도 | 위치 | 내용 | 판정 |
|----|----------|--------|------|------|------|
| — | — | — | — | 발견된 결함 없음 | — |

심각도 기준:
- Critical: 내용 누락/변경 (반드시 수정)
- High: Design System 규칙 위반 (반드시 수정)
- Medium: 코드 품질/반응형 누락 (수정 권고)
- Low: 개선 권고사항

---

## 통계
- 전체 결함 수: 0개
- Critical: 0개 / High: 0개 / Medium: 0개 / Low: 0개

---

## 최종 판정

**[PASS]**

---

## 판정 근거

1. **Q01/Q02 수정 완료 확인**: 이전 FAIL 판정의 원인이었던 `.ds-banner--info`와 `.ds-banner--brand` 컴포넌트 CSS 내 `rgba()` 하드코딩이 완전히 해소되었다. `:root` 블록에 `--ds-banner-info-bg`(line 206)와 `--ds-banner-brand-bg`(line 207) 변수가 선언되었고, 컴포넌트 CSS(line 386-387)에서 `var()` 참조로 교체가 정상 적용되었음을 소스코드 직접 확인.

2. **CAT-1 내용 무결성**: 원본 A타입의 모든 텍스트 — h1/h2 제목, 두 lead-in 문장, 본문 단락, 5행 규정 테이블, 5개 FAQ Q&A, 4개 Bridge 링크, CTA 문구, footer 정보 — 누락 및 변경 없이 완전 보존.

3. **CAT-2 Design System**: 색상·수치 하드코딩 0건(`:root` 외부), `!important` 0건, 인라인 `style` 0건, 모든 커스텀 클래스 `.ds-` 접두사 준수.

4. **CAT-3 코드 품질**: 시맨틱 태그 구조 정상, 전체 section에 고유 id 부여, 접근성 속성 적절히 적용.

5. **CAT-4 반응형**: Mobile 기본 스타일 + 768/1024/1440/1920 미디어 쿼리 5단계 완비, `.ds-container` max-width + margin: auto 확인.

---

## 다음 액션

[PASS]: 변환 완료. output/A-cubig-learn-prompt-data-leakage-b-type.html이 최종 B타입 파일입니다.
