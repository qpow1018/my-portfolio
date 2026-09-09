import type { ReactNode } from "react";

import styles from "./WebExpansion.module.scss";

export default function WebExpansion() {
  return (
    <section
      className={styles["web-expansion"]}
      aria-labelledby="web-expansion-heading"
    >
      <header className={styles["group-header"]}>
        <h3 id="web-expansion-heading" className={styles["group-title"]}>
          앱 중심 서비스의 웹 확장
        </h3>
        <p className={styles["group-description"]}>
          앱 외부의 유입 경로를 넓히기 위해, React 기반 WebView 중심으로
          제공하던 서비스를 Next.js 기반 웹까지 단계적으로 확장했습니다.
        </p>
      </header>

      <div className={styles["case-list"]}>
        <Case1 />
        <Case2 />
        <Case3 />
      </div>
    </section>
  );
}

function Case1() {
  return (
    <CaseBox
      label="01"
      title="앱에서 사용하던 주소 형식을 웹에서 그대로 사용할 수 없었던 문제"
    >
      <p>
        기존 앱에서는 화면 이동에 앱 Scheme과 URL을 함께 사용하고 있었고,
        WebView로 이동하는 URL은 기존 React 프로젝트의 도메인을 기준으로 하고
        있었습니다. Next.js 웹에서는 앱 Scheme을 같은 방식으로 처리할 수 없었고,
        기존 도메인이 포함된 URL은 이전 React 프로젝트로 이동하는 문제가
        있었습니다.
      </p>
      <div className={styles["divider"]} />
      <p>
        이러한 주소는 여러 API 응답과 프론트엔드 곳곳에서 사용되고 있어, 모든
        사용처를 파악해 각각 수정하기 어려웠습니다. 또한 Scheme별 경로와 query,
        WebView로 감싼 URL 등 사용되는 형식도 다양했습니다. 따라서 기존 주소를
        하나씩 변경하기보다, 기존 공통 라우터의 정규화를 확장해 주소 형식에 따라
        현재 웹에서 사용할 수 있는 경로로 변환했습니다.
      </p>

      <figure className={styles["route-flow"]} aria-label="주소 정규화 흐름">
        <div className={styles["route-input-list"]}>
          <div className={styles["route-input"]}>
            <span className={styles["route-label"]}>App Scheme</span>
            <code>{`<app-scheme>://partner?categoryType=<id>`}</code>
          </div>
          <div className={styles["route-input"]}>
            <span className={styles["route-label"]}>WebView Wrapper</span>
            <code>
              {`<app-scheme>://webview?url=https://<previous-web-domain>/<path>`}
            </code>
          </div>
          <div className={styles["route-input"]}>
            <span className={styles["route-label"]}>기존 Web URL</span>
            <code>{`https://<previous-web-domain>/<path>`}</code>
          </div>
        </div>

        <div className={styles["route-divider"]} aria-hidden="true" />

        <div className={styles["flow-arrow"]} aria-hidden="true" />

        <div className={styles["normalization-point"]}>
          <span className={styles["normalization-label"]}>
            기존 공통 라우터
          </span>
          <strong>URL 정규화</strong>
        </div>

        <div className={styles["result-connection"]} aria-hidden="true" />

        <div className={styles["route-result"]}>
          <span className={styles["result-label"]}>변환된 웹 경로 예시</span>
          <div className={styles["result-paths"]}>
            <code>{`/category/<id>`}</code>
            <code>{`/<path>`}</code>
          </div>
        </div>
      </figure>
    </CaseBox>
  );
}

function Case2() {
  return (
    <CaseBox
      label="02"
      title="웹에서 이전 화면으로 돌아왔을 때 기존 데이터와 상태가 이어지지 않는 문제"
    >
      <p>
        기존 앱에서는 새로운 WebView 화면을 열어도 이전 화면이 네이티브 화면
        스택에 남아 있어, 다시 돌아왔을 때 기존 데이터와 상태가 유지되었습니다.
        반면 웹에서는 화면을 이동한 뒤 이전 화면으로 돌아왔을 때 필요한 데이터와
        상태가 이어지도록 별도로 관리해야 했습니다.
      </p>
      <div className={styles["divider"]} />
      <p>
        웹에서는 데이터가 다시 조회되거나 상태가 초기화되지 않도록, 스크롤
        위치는 브라우저의 기본 복원 동작을 활용하고 서버 데이터는 TanStack
        Query의 캐시를 활용했으며, 필요한 상태는 URL에 유지했습니다.
      </p>
    </CaseBox>
  );
}

function Case3() {
  return (
    <CaseBox
      label="03"
      title="앱의 페이지 접근 제어를 웹에 그대로 적용할 수 없었던 문제"
    >
      <p>
        기존 앱은 로그인 후 서비스를 이용하는 구조였지만, 웹에서는 비회원도
        서비스를 탐색할 수 있어 조회 페이지는 로그인 없이 제공하면서 로그인이
        필요한 페이지의 접근은 제한해야 했습니다. 기존에는 필요한 페이지에서
        각각 로그인 여부를 확인하고 있어 같은 처리가 반복되었고, 일부
        페이지에서는 이 처리가 누락되는 경우도 있었습니다.
      </p>
      <div className={styles["divider"]} />
      <p>
        페이지마다 로그인 여부를 개별적으로 처리하기보다 접근 제어를 경로 단위의
        공통 정책으로 관리하고, 기존 Next.js Middleware에서 로그인이 필요한
        경로의 접근을 제어했습니다. 하위·동적 경로에도 같은 정책을 적용할 수
        있도록 경로 패턴 매칭을 추가했습니다.
      </p>
    </CaseBox>
  );
}

function CaseBox(props: { label: string; title: string; children: ReactNode }) {
  const { label, title, children } = props;

  return (
    <article className={styles["case-box"]}>
      <span className={styles["case-number"]} aria-hidden="true">
        {label}
      </span>
      <div className={styles["case-wrap"]}>
        <h4 className={styles["case-title"]}>{title}</h4>

        <div className={styles["case-content"]}>{children}</div>
      </div>
    </article>
  );
}
