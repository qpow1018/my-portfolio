## 개인 포트폴리오

React, TypeScript, SCSS Modules

## 실행

```bash
npm install
npm start
npm run build
```

## 페이지

- `/`: 인트로와 웨딩북 상세
- `/etc`: 기타 프로젝트
- `/career`: 경력기술서 (독립 화면)

React Router의 BrowserRouter로 일반 경로를 사용합니다.

## 배포

Vercel 배포를 기준으로 `vercel.json`에 빌드 명령과 출력 디렉터리를 설정했습니다.

- Build Command: `npm run build`
- Output Directory: `build`
- SPA rewrite: `/etc`, `/career` 등에 직접 접속하거나 새로고침해도 `index.html`을 제공하고, React Router가 해당 화면을 표시합니다.

GitHub 저장소를 Vercel 프로젝트에 연결해 배포할 수 있습니다. 실제 배포와 운영 URL 확인은 별도로 진행해야 합니다.

기존 GitHub Pages 배포 명령과 `homepage`의 `/my-portfolio/` 경로 설정은 제거했습니다. 현재 빌드를 기존 Pages 방식으로 배포하면 일반 경로 직접 접속을 지원하지 않습니다. 기존 해시 주소(`#/etc`, `#/career`)는 새 경로로 자동 변환하지 않습니다.
