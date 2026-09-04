# AGENTS.md

## 프로젝트 참고사항

- 패키지 매니저는 npm입니다. 의존성을 변경하면 `package-lock.json`도 함께 관리하세요.
- 이 프로젝트는 CRA + CRACO 기반 React 애플리케이션입니다. Next.js App Router 규칙을 적용하지 마세요.
- 경로 별칭 `@/*`는 `src/*`를 가리킵니다.
- 현재 MUI 기반 구현과 기존 화면은 마이그레이션이 끝날 때까지 참고 대상으로 보존합니다.

## UI와 스타일 방향

- 신규 UI와 수정 범위의 UI는 semantic HTML과 SCSS Module을 우선합니다.
- MUI 제거 또는 기존 컴포넌트의 HTML/SCSS Module 전환은 명시적으로 요청된 화면 단위에서만 수행하세요.
- 포트폴리오 사이트는 모바일과 데스크톱 모두 확인합니다. LoaM의 데스크톱 전용 규칙을 가져오지 마세요.
- 페이지 수가 적으므로, 실제로 둘 이상의 독립 섹션에서 재사용되는 경우에만 공용 컴포넌트로 분리하세요.

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
