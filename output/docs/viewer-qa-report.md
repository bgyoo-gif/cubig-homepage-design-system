# Viewer QA Report
- 검증일: 2026-03-23
- 대상: reference/design-system-viewer.html

## 검증 결과 요약

### VQA-1: JS 함수 누락 확인
onclick 속성에서 호출되는 사용자 정의 함수:
`clearFile`, `closeDetail`, `downloadFile`, `openDetail`, `refreshDetail`, `startConversion`, `toggleAcCard`

정의된 함수 목록에 모두 포함됨. **결함 없음.**

### VQA-2: getElementById 참조 확인
참조되는 ID 20개 모두 HTML에 정의되어 있음. **결함 없음.**

### VQA-3: Output 링크 event.preventDefault 확인
모든 `v-ot-link` 클래스의 `<a>` 태그가 `href="javascript:void(0)"` + `event.preventDefault()` 를 모두 포함함.
VQA-3 grep 결과에 나온 2건(130행, 131행)은 CSS 스타일 정의(.v-output-table .v-ot-link)이므로 false positive. **결함 없음.**

### VQA-4: GNB data-page와 page div 매핑
data-page 값 6개: `components`, `diagram-builder`, `foundation`, `layout`, `output`, `style-converter`
page- div ID 6개: 동일한 6개 전부 매핑됨. **결함 없음.**

### VQA-5: 이미지 경로 존재 확인
`src="images/..."` 또는 `src="graphics/..."` 패턴의 이미지 참조 없음 (외부 이미지 미사용). **결함 없음.**

### VQA-6: API 엔드포인트 매칭

| Server endpoint (app.py) | Viewer에서 사용 여부 |
|---------------------------|---------------------|
| POST /api/upload | O (3115행) |
| GET /api/jobs | X (미사용) |
| GET /api/job/{job_id} | O (3136행, /api/job/ + jobId) |
| GET /api/files | O (3214행) |
| GET /api/tree | O (2869행) |
| GET /api/file-content | O (2700행, 2747행) |
| WS /ws | O (2999행) |

Viewer에서 **`/api/jobs` 엔드포인트를 사용하지 않음**. 서버에 정의되어 있으나 클라이언트에서 호출하지 않는 orphan endpoint.

추가 확인: Viewer는 `manifest.json`을 직접 fetch하는 경로(2540행: `fetch('../output/manifest.json')`)도 사용 중 -- 이는 정적 파일 접근으로 서버 API와 무관하므로 결함 아님.

## 결함 목록
| ID | 카테고리 | 심각도 | 내용 |
|----|----------|--------|------|
| VQA-6-1 | API 매칭 | LOW | 서버의 `GET /api/jobs` 엔드포인트가 Viewer에서 사용되지 않음 (orphan endpoint). 기능 누락 또는 불필요 엔드포인트 잔재 가능성. |

## 판정
PASS

> 기능적 결함(CRITICAL/HIGH) 없음. LOW 1건은 서버 측 미사용 엔드포인트로, Viewer 자체의 동작에는 영향 없음.
