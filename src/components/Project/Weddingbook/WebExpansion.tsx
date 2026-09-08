import type { ReactNode } from "react";

import styles from "./WebExpansion.module.scss";

type TCopyGroupProps = {
  label: string;
  content: ReactNode[];
  isLabelVisible: boolean;
};
type TCaseCopyProps = {
  problem: ReactNode[];
  solution: ReactNode[];
  solutionLabel?: string;
  isLabelVisible?: boolean;
};

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

      <div className={styles["web-case-list"]}>
        <article className={styles["web-case"]}>
          <h4 className={styles["case-title"]}>
            앱에서 사용하던 주소 형식을 웹에서 그대로 사용할 수 없었던 문제
          </h4>
          <CaseCopy
            problem={[
              "기존 앱에서는 화면 이동에 앱 Scheme과 URL을 함께 사용하고 있었고, WebView로 이동하는 URL은 기존 React 프로젝트의 도메인을 기준으로 하고 있었습니다.",
              "서비스를 Next.js 웹으로 확장하면서 이러한 주소 형식을 그대로 사용할 수 없었습니다. 앱 Scheme은 일반 웹에서 같은 방식으로 처리할 수 없었고, 기존 도메인이 포함된 URL은 새로운 웹이 아닌 이전 React 프로젝트로 이동하는 문제가 있었습니다.",
            ]}
            solution={[
              "기존 주소가 서비스 전반에 광범위하게 사용되고 있었고, 사용처가 한곳에서 관리되는 구조가 아니어서 모든 주소를 파악하고 각각 수정하기 어려웠습니다. 따라서 기존 주소를 하나씩 변경하기보다, 주소 형식에 따라 변환해 웹에서도 사용할 수 있도록 처리하는 방식을 선택했습니다.",
              "앱 Scheme은 대응하는 웹 경로로 변환하고, 기존 React 프로젝트를 가리키는 URL은 현재 웹에서 사용할 수 있는 경로로 변환했습니다.",
            ]}
            isLabelVisible={false}
          />
        </article>

        <article className={styles["web-case"]}>
          <h4 className={styles["case-title"]}>
            웹에서 이전 화면으로 돌아왔을 때 기존 데이터와 상태가 이어지지 않는
            문제
          </h4>
          <CaseCopy
            problem={[
              "기존 앱에서는 새로운 WebView 화면을 열어도 이전 화면이 네이티브 화면 스택에 남아 있어, 다시 돌아왔을 때 기존 화면의 데이터와 상태가 유지되었습니다.",
              "이러한 구조에서는 이전 화면의 데이터와 상태를 별도로 유지할 필요가 없었지만, 웹에서는 화면을 이동한 뒤에도 필요한 데이터와 상태가 이어지도록 관리해야 했습니다.",
            ]}
            solution={[
              "웹에서는 이전 화면으로 돌아왔을 때 데이터가 다시 조회되거나 상태가 초기화되지 않도록, 스크롤 위치는 브라우저의 기본 복원 동작을 활용하고 서버 데이터는 TanStack Query의 캐시를 활용했으며, 필요한 상태는 URL에 유지했습니다.",
            ]}
            isLabelVisible={false}
          />
        </article>

        <article className={styles["web-case"]}>
          <h4 className={styles["case-title"]}>
            앱의 페이지 접근 제어를 웹에 그대로 적용할 수 없었던 문제
          </h4>
          <CaseCopy
            problem={[
              "기존 앱은 로그인 후 서비스를 이용하는 구조였기 때문에, 개별 페이지에 로그인 확인이 없더라도 실제 사용 과정에서 문제가 잘 드러나지 않았습니다.",
              "웹에서는 비회원도 서비스를 탐색할 수 있어, 단순히 정보를 조회하는 페이지는 로그인 없이 접근할 수 있도록 변경하는 한편, 로그인이 필요한 페이지에는 비회원의 접근을 제한해야 했습니다.",
              "기존에는 필요한 페이지에서 각각 로그인 여부를 확인하고 있어 같은 처리가 반복되었고, 일부 페이지에서는 이 처리가 누락되는 경우도 있었습니다.",
            ]}
            solution={[
              "페이지마다 로그인 여부를 개별적으로 처리하기보다, 접근 제어를 경로 단위의 공통 정책으로 관리하는 것이 적합하다고 판단했습니다.",
              "기존 Next.js Middleware에서 로그인이 필요한 경로의 접근을 제어하고, 하위·동적 경로에도 같은 정책을 적용할 수 있도록 경로 패턴 매칭을 추가했습니다.",
            ]}
            isLabelVisible={false}
          />
        </article>
      </div>
    </section>
  );
}

function CaseCopy({
  problem,
  solution,
  solutionLabel = "판단 + 해결",
  isLabelVisible = true,
}: TCaseCopyProps) {
  return (
    <>
      <CopyGroup
        label="문제 상황"
        content={problem}
        isLabelVisible={isLabelVisible}
      />
      <CopyGroup
        label={solutionLabel}
        content={solution}
        isLabelVisible={isLabelVisible}
      />
    </>
  );
}

function CopyGroup({ label, content, isLabelVisible }: TCopyGroupProps) {
  return (
    <div className={styles["copy-group"]}>
      {isLabelVisible === true && (
        <p className={styles["copy-label"]}>{label}</p>
      )}
      <div className={styles["copy-content"]}>
        {content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}

