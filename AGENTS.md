# AGENTS.md

## 프로젝트 참고사항

- 패키지 매니저는 npm입니다. 의존성을 변경하면 `package-lock.json`도 함께 관리하세요.
- 이 프로젝트는 CRA + CRACO 기반 React 애플리케이션입니다. Next.js App Router 규칙을 적용하지 마세요.
- 경로 별칭 `@/*`는 `src/*`를 가리킵니다.
- 기존 MUI 기반 구현과 기존 화면은 마이그레이션이 끝날 때까지 참고 대상으로 보존합니다.

## UI와 스타일 방향

- 신규 portfolio UI와 component에는 MUI component, MUI `sx`, MUI/Emotion `styled`, MUI theme 의존 구현을 새로 도입하지 않습니다.
- 새 portfolio component는 semantic HTML과 SCSS Module로 작성합니다.
- 기존 MUI component를 확장하기보다, 필요한 content·data·asset을 확인한 뒤 새 non-MUI component로 구현합니다.
- 기존 MUI component의 HTML/SCSS Module 전환은 명시적으로 요청된 화면 단위에서만 수행하세요.
- 포트폴리오 사이트는 모바일과 데스크톱 모두 확인합니다. LoaM의 데스크톱 전용 규칙을 가져오지 마세요.
- 페이지 수가 적으므로, 실제로 둘 이상의 독립 섹션에서 재사용되는 경우에만 공용 컴포넌트로 분리하세요.

## 기존 구현 보존과 수정 전 조사

- 기존 source code, component, copy, project data, image/asset, styling, legacy implementation은 포트폴리오 사실 관계와 이전 콘텐츠를 확인하는 reference 자료입니다.
- 명시적인 삭제·정리 요청 없이 기존 구현을 삭제, 대체, 대규모 이동하거나 "새 화면에서 사용하지 않는다"는 이유만으로 불필요하다고 판단하지 마세요.
- 파일을 수정하기 전에 관련 기존 구현, 호출부, import/export 관계, 사용 중인 data와 asset을 먼저 확인하세요.
- 기존 내용을 확인하지 않고 새 구조에서 임의로 누락하거나 다시 작성하지 마세요.
- 기존 코드가 현재 convention과 다르더라도 요청 범위 밖에서 일괄 rename, reformat, refactor하지 마세요.

## 포트폴리오 내용의 근거

- 성과, 수치, ownership, 기여도, 기술 선택·문제·결과·협업 역할은 코드, Git history, 기존 문서, 사용자 확인 등의 근거로만 작성하세요.
- 근거가 불확실하면 사실처럼 작성하지 말고, 확인이 필요하다고 명시하세요.

## MUI 정리 단계와 대규모 변경

- MUI dependency와 legacy implementation 제거는 새 portfolio 전환이 충분히 끝난 뒤의 별도 cleanup task에서만 수행합니다.
- cleanup 전에는 남아 있는 MUI import, legacy component 사용 여부, Emotion dependency, theme 코드, package dependency, 사용되지 않는 legacy source를 확인하세요.
- MUI를 제거할 수 있다고 판단하더라도 사용자 승인 없이 package dependency를 삭제하지 마세요.
- framework migration, routing 도입, dependency 대규모 upgrade, 기존 directory 전체 재구성, legacy source 일괄 삭제, MUI dependency 제거, 전체 styling system cleanup은 명시적인 요청 없이 수행하지 마세요.

## 명령어

저장소 루트에서 실행하세요.

```bash
npm start
npm run build
npm test
```

참고:

- 일반적인 TypeScript, React, SCSS 변경 후에는 최소 `npm run build`를 실행하세요.
- 시각적 섹션을 바꾼 경우 가능하면 모바일과 데스크톱 폭에서 해당 화면을 확인하세요.
- `npm run format`처럼 광범위한 포맷팅은 사용자가 요청했거나 수정한 파일에 꼭 필요할 때만 사용하세요.

## 수정 제외 경로

명시적인 요청이 없다면 다음 파일과 디렉터리를 수정하지 마세요.

- `node_modules/`
- `build/`
- `tsconfig.tsbuildinfo`

## 작업 스킬

- 프론트엔드 TypeScript, React, UI, SCSS 작성·수정·리뷰·리팩터링에는 프로젝트 스킬 `$following-portfolio-frontend-style`을 적용하세요.

## 검증 체크리스트

작업을 마치기 전에 변경 범위에 맞는 가장 작은 검증을 선택하세요.

- TypeScript, React, SCSS 관련 소스 변경: `npm run build`.
- 시각적 섹션 변경: 가능하면 해당 화면의 모바일·데스크톱 레이아웃 확인.
- 모든 변경: `git diff --check`.

검증 명령을 실행하지 못했다면 이유를 명확히 보고하세요.
