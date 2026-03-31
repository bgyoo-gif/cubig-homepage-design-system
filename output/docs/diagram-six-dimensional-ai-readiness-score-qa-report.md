# Diagram QA Report
- 검증일: 2026-03-31 (오늘)
- 대상 파일: output/html/diagram-six-dimensional-ai-readiness-score.html
- 원본 스크린샷: reference/diagram/diagram-six-demensional-ai-readiness-score.png
- QA 엔지니어: diagram-qa-agent

---

## 결함 목록

| ID | 카테고리 | 심각도 | 위치 | 내용 |
|----|----------|--------|------|------|
| DQ01 | DIAG-1 | Critical | line 293 — p.sd-diag__desc | 원본 스크린샷의 description 텍스트는 한국어이나 구현은 영어로 의역됨. 원본 충실도 기준에서 텍스트 내용이 원본과 불일치. 단, DIAG-4(영어 전용 규칙) 기준으로는 영어가 올바름 — 우선순위 판단 필요 |
| DQ02 | DIAG-1 | Critical | line 393–405 (Contextuality), line 433–445 (Conciseness) | 원본 스크린샷에서 warn 카드의 배지 텍스트가 명확히 식별되지 않음. 구현에서는 "NO"로 표기됨. 원본 한국어 배지("아니오" 등) 또는 별도 아이콘+텍스트 패턴인지 확인 필요 |
| DQ03 | DIAG-6 | Medium | line 1–6 (DOCTYPE, html, head, body 전체) | snippet 형태 규칙 위반: `<head>`, `<body>` 포함된 완전한 HTML 문서로 구현됨. diagram-qa 규칙 DIAG-6 기준 "snippet 형태(`<head>/<body>` 없이 `<style>` + `<div>`)"를 충족하지 않음 |
| DQ04 | DIAG-6 | Low | line 10 — `:root { ... }` | CSS 변수가 `.sd-diag` 컴포넌트 스코프가 아닌 `:root` 전역에 선언됨. B타입 페이지에 삽입 시 전역 `:root` 토큰 충돌 위험 있음. `--sd-*` 다이어그램 전용 토큰은 `.sd-diag { }` 하위로 스코프 이동 권고 |
| DQ05 | DIAG-6 | Low | line 291, 335, 379, 418, 457, 501 | 진행바 width를 인라인 `style="width:N%"`로 지정. CSS 변수 전달 목적 외의 인라인 스타일로, `--sd-bar-width` 변수를 통해 전달하는 패턴으로 개선 권고 (기능 동작에는 문제 없음) |

---

## 세부 검증 결과

### [DIAG-1] 원본 충실도

| 항목 | 상태 | 비고 |
|------|------|------|
| 6개 dimension 존재 여부 | PASS | Privacy / Integrity / Contextuality / Conciseness / Operational Reliability / Traceability 모두 존재 |
| 수치 값 일치 (100%, 80%, 89%) | PASS | Privacy·Integrity·Operational Reliability·Traceability=100%, Contextuality=80%, Conciseness=89% |
| 2×3 카드 그리드 레이아웃 | PASS | grid-template-columns: repeat(2, 1fr) |
| 테이블 헤더 (Check / Score / Result) | PASS | 전 카드 동일 구조 |
| description 텍스트 언어 | FAIL (DQ01) | 원본 한국어 → 구현 영어 (의미는 동일하나 원문과 불일치) |
| warn 배지 텍스트 | 주의 (DQ02) | 구현 "NO" — 원본 확인 필요 |
| 원본에 없는 요소 추가 여부 | PASS | 차트, 레이더, 바 차트 등 추가 요소 없음 |

### [DIAG-2] 컬러 일치

| 항목 | 상태 | 비고 |
|------|------|------|
| 녹색 계열 pass 색상 (#22c55e) | PASS | `--sd-color-pass: #22c55e` 토큰으로 정의 및 적용 |
| warn 카드 주황색 (#f59e0b) | PASS | `--sd-color-warn: #f59e0b`, `--sd-color-score-warn: #d97706` |
| pass 배지 녹색 배경 | PASS | `--sd-color-pass-bg: #f0fdf4`, `--sd-color-pass-text: #15803d` |
| warn 배지 주황색 배경 | PASS | `--sd-color-warn-bg: #fffbeb`, `--sd-color-warn-text: #92400e` |
| 파란색 오사용 (#4a9de0 등) | PASS | 파란색 사용 없음 |

### [DIAG-3] DS 준수

| 항목 | 상태 | 비고 |
|------|------|------|
| font-size DS 토큰 사용 | PASS | 모든 `font-size`에 `var(--ds-text-*)` 사용, 하드코딩 없음 |
| letter-spacing DS 토큰 사용 | PASS | `--ds-tracking-normal`, `--ds-tracking-wide` 토큰만 사용 |
| 콘텐츠 영역 배경 흰색 | PASS | `.sd-diag`, `.sd-diag__card` 모두 `var(--ds-color-white)` |
| 폰트 패밀리 | PASS | `var(--ds-font-base)` (DM Sans) 단독 사용 |
| 하드코딩 색상 | PASS | 모든 색상이 CSS 변수로 정의 및 참조됨 |

### [DIAG-4] 텍스트 언어

| 항목 | 상태 | 비고 |
|------|------|------|
| 한글 텍스트 존재 여부 | PASS | 본문 내 한글 없음 (영어만 사용) |
| HTML 주석 한글 | PASS | 주석에 한글 없음 |

### [DIAG-5] 반응형

| 항목 | 상태 | 비고 |
|------|------|------|
| @media (max-width: 640px) 존재 | PASS | line 109: 640px에서 1열 전환 구현됨 |
| 2열 → 1열 전환 | PASS | `grid-template-columns: 1fr` 적용 |

### [DIAG-6] 구조 품질

| 항목 | 상태 | 비고 |
|------|------|------|
| OS 윈도우 프레임 | PASS (N/A) | 원본 스크린샷에 OS 프레임 없음 — 카드 그리드 형태이므로 해당 없음 |
| CSS 변수 스코프 | FAIL (DQ04) | `:root` 전역 선언 — `.sd-diag` 스코프 권고 |
| snippet 형태 | FAIL (DQ03) | 완전한 HTML 문서 구조 (`<head>/<body>` 포함) |
| 인라인 스타일 | LOW (DQ05) | bar-fill width 인라인 style 사용 |

---

## 통계
- 전체 결함 수: 5개
- Critical: 2개 / High: 0개 / Medium: 1개 / Low: 2개

---

## 최종 판정

**FAIL**

---

## 판정 근거

**DQ01 (Critical):** 원본 스크린샷의 description 텍스트가 한국어인데 영어로 구현됨. DIAG-4 규칙("다이어그램은 영어만 사용")과 DIAG-1 규칙("원본과 동일해야 함") 사이 충돌이 존재함. 규칙 우선순위 기준으로는 DIAG-4(영어 전용)가 의도적 규칙이므로 영어 구현은 올바르나, 원본의 의미(한국어 설명)와 영어 구현의 내용이 실제로 동일한지 콘텐츠 오너 검토 필요.

**DQ02 (Critical):** Contextuality/Conciseness 카드의 warn 배지 텍스트가 "NO"로 구현됨. 원본 스크린샷의 해당 배지 텍스트가 저해상도로 정확히 식별되지 않아 일치 여부를 100% 확인할 수 없음. 원본 검토 후 "NO" / "WARN" / 아이콘 단독 중 올바른 형태로 수정 필요.

**DQ03 (Medium):** 파일이 snippet이 아닌 완전한 HTML 문서로 작성됨. diagram-qa 규칙 DIAG-6은 `<head>/<body>` 없이 `<style>` + `<div>` snippet 형태를 요구함. B타입 HTML에 삽입 시 중복 태그 오류 발생 가능.

---

## 다음 액션

**FAIL:** diagram-builder 에이전트에 아래 결함 목록을 전달하고 수정 요청.

**수정 요청 항목:**

1. **DQ03 (Medium — snippet 구조):** `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>` 태그 제거. `<style>` + `<div class="sd-diag">` 형태의 snippet으로 재구성.

2. **DQ04 (Low — CSS 변수 스코프):** `--sd-*` 다이어그램 전용 토큰을 `:root`가 아닌 `.sd-diag { }` 블록 내부로 이동하여 전역 충돌 방지.

3. **DQ05 (Low — 인라인 스타일):** `style="width:N%"` 인라인 스타일 대신 `style="--sd-bar-width:N%"` CSS 변수 전달 + `.sd-diag__bar-fill { width: var(--sd-bar-width, 100%) }` 패턴으로 개선 권고.

4. **DQ01 / DQ02 (Critical — 콘텐츠 확인):** 원본 한국어 description이 영어 번역으로 의미가 정확히 일치하는지, warn 배지 텍스트("NO")가 원본과 일치하는지 콘텐츠 오너 검토 후 확정.
