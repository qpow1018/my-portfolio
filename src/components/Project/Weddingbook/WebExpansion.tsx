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
        기존 앱에서는 화면 이동용 Scheme, 웹 URL을 포함한 WebView Scheme, 기존
        React 웹 도메인을 포함한 URL 등 여러 형태의 링크가 함께 사용되고
        있었습니다.
      </p>
      <div className={styles["divider"]} />
      <p>
        이 링크들은 어드민에서 설정되는 데이터 등 여러 곳에 누적되어 있어 전체를
        파악해 일괄 수정하기 어려웠습니다. 그래서 기존 데이터를 변경하기보다,
        프론트엔드에서 기존 링크와 새 웹 환경을 호환시키는 방향을 선택했습니다.
      </p>
      <div className={styles["divider"]} />
      <p>
        기존 공통 라우터의 URL 정규화 로직을 확장해 웹에서 대응 가능한 Scheme과
        WebView 링크는 현재 웹 경로로 변환했습니다. 웹에서 지원하지 않는 App
        Scheme은 앱에서는 기존 동작을 유지하고, 웹에서는 앱 설치로 유도하도록
        분기했습니다.
      </p>
      <p>
        그 결과 기존 링크 데이터를 일괄 수정하지 않고도, 기존 링크 형식을 웹
        환경에 맞게 처리할 수 있도록 했습니다.
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
      title="웹에서 이전 화면으로 돌아왔을 때 탐색 흐름이 끊기는 문제"
    >
      <p>
        기존 앱에서는 뒤로 가면 이전 WebView 화면이 그대로 남아 있어 사용자가
        보던 상태로 자연스럽게 돌아갈 수 있었습니다. 이 때문에 별도의 상태 복원
        처리를 크게 신경 쓰지 않아도 됐습니다.
      </p>
      <div className={styles["divider"]} />
      <p>
        하지만 Next.js 웹에서는 이전 화면이 같은 방식으로 유지되지 않았습니다.
        별도 처리가 없으면 사용자가 뒤로 돌아왔을 때 이전에 보던 목록이나 검색
        상태를 다시 맞춰야 해 자연스럽게 이어지던 탐색 경험이 끊길 수
        있었습니다.
      </p>
      <div className={styles["divider"]} />
      <p>
        목록 데이터는 검색어나 필터 같은 요청 조건을 query key에 포함해 TanStack
        Query 캐시를 활용하고, 검색어·탭 등 화면을 다시 구성하는 데 필요한
        상태는 URL에 반영했습니다.
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
