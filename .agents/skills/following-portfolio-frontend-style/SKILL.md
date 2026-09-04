---
name: following-portfolio-frontend-style
description: Use when writing, modifying, reviewing, or refactoring frontend TypeScript, React, UI, or SCSS code in the my-portfolio repository. Applies the project's component placement, naming, import, and SCSS Module conventions while preserving the staged MUI-to-HTML/SCSS migration.
---

# 포트폴리오 프론트엔드 스타일

포트폴리오 프론트엔드 코드를 작성하거나 수정할 때 다음 규칙을 적용한다.

## 파일 배치

- 페이지 조립은 `src/page/`에 둔다.
- 페이지·섹션 전용 컴포넌트는 해당 `src/components/<domain>/` 하위에 둔다.
- 둘 이상의 독립 섹션에서 실제로 재사용되는 도메인 컴포넌트는 `src/components/<domain>/`에 둔다.
- 도메인과 무관하게 재사용되는 UI 컴포넌트는 `src/components/common/`에 둔다.
- React 생명주기에 의존하는 재사용 로직은 `src/hooks/`에 둔다.
- 여러 기능에서 재사용되는 범용 유틸은 `src/utils/`에 둔다.
- 컴포넌트 폴더명은 lowercase 또는 lower camel case로 작성한다.
- 컴포넌트 파일명은 PascalCase를 사용한다.

## Import

- `@/*` 별칭을 사용한 직접 경로 import를 우선한다. `@/*`는 `src/*`를 가리킨다.
- 같은 컴포넌트 폴더 안의 파일에만 상대 경로 import를 사용한다.
- 타입 전용 import에는 `import type`을 사용한다.

## TypeScript와 React

- 객체, union, 함수 등 새로운 타입은 기본적으로 `type`으로 선언한다.
- 새 타입 이름에는 `T` 접두사를 붙인다.
- 상수 데이터에는 필요한 경우 `as const`를 사용한다.
- 모듈 상수는 `UPPER_SNAKE_CASE`로 작성한다.
- `any` 대신 `unknown`과 명시적인 타입 검사를 사용한다.
- 컴포넌트와 이름 있는 헬퍼 함수는 함수 선언식으로 작성한다.
- boolean 값은 `is...`, 이벤트 props는 `on...`, 이벤트 처리 함수는 `handle...`로 이름을 짓는다.
- 조건이 충족되지 않으면 조기 반환하여 중첩을 줄인다.
- 새 공용 UI를 만들기 전에 기존 `src/components/common/`과 인접 컴포넌트를 확인한다.

## UI 마이그레이션 경계

- 새 UI는 semantic HTML과 SCSS Module을 우선한다.
- 기존 MUI 컴포넌트는 현재 화면과 내용을 보존해야 하는 참고 구현이다. 명시적 요청 없이 일괄 삭제하거나 전환하지 않는다.
- MUI를 전환할 때는 한 화면 또는 한 컴포넌트 단위로만 바꾸고, 기존 콘텐츠·인터랙션·반응형 동작을 유지한다.
- 페이지가 적다는 이유로 단일 페이지의 표현용 요소를 성급히 공용화하지 않는다.

## SCSS Modules

- 컴포넌트 스타일은 컴포넌트와 같은 폴더의 `*.module.scss`로 작성한다.
- SCSS Module은 `styles`라는 이름으로 import한다.
- 클래스명은 kebab-case로 작성한다.
- 클래스는 `styles['class-name']` 형식으로 접근한다.
- 하위 요소는 대표 root class 아래에 HTML 구조가 드러나도록 nesting한다.
- 상태와 modifier는 대상 요소 아래에 nesting한다.
- nesting 깊이는 HTML 구조와 가독성에 맞추며, 선택자 반복을 피하기 위한 과도한 nesting은 만들지 않는다.
- 독립적으로 재사용되는 클래스, `@keyframes`, `@mixin`, 전역 스타일만 top-level에 둔다.
- 새로운 공용 색상, 크기, 믹스인을 만들기 전에 `src/style/_variables.scss`를 확인한다.
- 공통 reset, 폰트, body 기본값은 `src/style/`의 전역 스타일에서만 관리한다.
- desktop-first 기본값을 작성하고 `$breakpoint-md`에서 모바일 오버라이드를 둔다. 모바일 전용 화면으로 분기하지 않는다.
