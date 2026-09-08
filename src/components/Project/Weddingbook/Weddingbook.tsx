import type { ReactNode } from "react";

import WebExpansion from "./WebExpansion";
import WeddingbookHeader from "./WeddingbookHeader";
import styles from "./Weddingbook.module.scss";

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

export default function Weddingbook() {
  return (
    <article className={styles["weddingbook-project"]}>
      <WeddingbookHeader />

      <div className={styles["case-study"]}>
        <WebExpansion />
        <FeatureDevelopment />
      </div>
    </article>
  );
}

function FeatureDevelopment() {
  return (
    <section
      className={styles["feature-group"]}
      aria-labelledby="feature-development-heading"
    >
      <header className={styles["feature-header"]}>
        <h3
          id="feature-development-heading"
          className={styles["feature-group-title"]}
        >
          주요 기능 개발 및 개선
        </h3>
      </header>
      <div className={styles["feature-list"]}>
        <IntegratedSearchCase />
        <InvitationCase />
        <HomeCase />
        <SharedImprovements />
      </div>
    </section>
  );
}

function IntegratedSearchCase() {
  return (
    <article className={styles["feature-case"]}>
      <header className={styles["feature-header"]}>
        <h4 className={styles["feature-title"]}>
          분리되어 있던 검색 결과를 하나의 화면에서 제공
        </h4>
      </header>
      <div className={styles["search-copy"]}>
        <CaseCopy
          problem={[
            "기존 검색은 웨딩홀·업체·스토어가 각각 분리되어 있었지만, 새로운 통합검색에서는 세 영역의 검색 결과를 한 화면에서 함께 보여줘야 했습니다.",
            "통합 API 추가를 백엔드 개발자와 논의했지만 다른 작업이 우선되어 바로 개발하기 어려웠고, 기존에는 각 영역별 검색 API만 제공되고 있었습니다.",
          ]}
          solution={[
            "전체 검색 결과가 없는 경우와 특정 영역의 검색 결과만 없는 경우에 보여주는 화면이 달랐기 때문에, 세 영역의 결과를 함께 확인할 수 있는 구조가 필요했습니다.",
            <>
              Next.js Route Handler에서 웨딩홀·업체·스토어 검색 API를 병렬로
              호출하고 하나의 응답으로 조합했습니다. 또한 일부 요청이
              실패하더라도 정상적으로 응답한 영역의 검색 결과는 보여줄 수 있도록{" "}
              <code>Promise.allSettled</code>를 사용해 각 요청의 성공과 실패를
              개별적으로 처리했습니다.
            </>,
          ]}
          isLabelVisible={false}
        />
      </div>
    </article>
  );
}

function InvitationCase() {
  return (
    <article className={styles["feature-case"]}>
      <header className={styles["feature-header"]}>
        <h4 className={styles["feature-title"]}>
          여러 영역의 정보를 입력하고 결과를 확인하며 청첩장을 완성하는 제작
          기능 개발
        </h4>
        <p className={styles["feature-description"]}>
          여러 영역으로 구성된 모바일 청첩장의 작성·수정 화면을 개발했습니다.
          서버에서 받은 데이터는 작성 화면에서 사용할 수 있는 형태로 변환하고,
          사용자가 입력한 값은 검증과 정규화를 거쳐 저장할 수 있도록
          구성했습니다.
        </p>
      </header>
      <div className={styles["invitation-content"]}>
        <div className={styles["subcase-list"]}>
          <article className={styles["subcase"]}>
            <h5>업로드한 이미지를 바로 확인할 수 있도록 처리</h5>
            <p>
              이미지 업로드 후 서버에서 URL을 반환받더라도 실제 이미지 처리가
              완료되기까지 시간차가 있어, 반환받은 URL을 바로 사용하면 이미지가
              표시되지 않는 경우가 있었습니다.
            </p>
            <p>
              사용자가 선택한 이미지로 <code>URL.createObjectURL()</code>을
              이용해 화면 표시용 URL을 별도로 생성했습니다. 작성 화면과 실시간
              미리보기에서는 화면 표시용 URL을 사용하고, 서버에서 받은 이미지
              URL은 저장에 사용하도록 두 값을 분리했습니다. 저장할 때는
              화면에서만 필요한 값을 제외했습니다.
            </p>
          </article>
          <article className={styles["subcase"]}>
            <h5>작성 중 변경사항 보호</h5>
            <p>
              작성 중인 내용을 실수로 잃지 않도록 최초 데이터와 현재 데이터를
              실제 저장 형태로 정규화해 변경 여부를 판단했습니다. 변경사항이
              있는 상태에서 뒤로 가기가 발생하면 저장 여부를 확인할 수 있도록
              이탈 확인 모달을 연결했습니다.
            </p>
          </article>
        </div>
      </div>
    </article>
  );
}

function HomeCase() {
  return (
    <article className={styles["feature-case"]}>
      <header className={styles["feature-header"]}>
        <h4 className={styles["feature-title"]}>
          프론트엔드에 고정되어 있던 홈 화면을 어드민에서 관리할 수 있는 구조로
          전환
        </h4>
      </header>
      <div className={styles["home-copy"]}>
        <CaseCopy
          problem={[
            "기존 홈 화면은 영역의 구성과 노출 순서뿐 아니라 배너, 문구, 이미지, 링크, 일부 업체 정보 등 화면을 구성하는 많은 내용이 프론트엔드 코드에 직접 작성되어 있었습니다.",
            "이 때문에 홈 화면의 구성이나 내용을 변경하려면 프론트엔드 코드를 직접 수정해야 했습니다.",
          ]}
          solution={[
            "홈 화면을 어드민에서 구성하고 관리할 수 있도록, 서버에서 전달받은 타입과 설정에 따라 필요한 컴포넌트를 렌더링하는 구조로 변경했습니다.",
            "배너, 메뉴, 상품 목록 등 홈을 구성하는 각 영역을 타입별 컴포넌트로 분리하고, 서버에서 전달받은 순서와 설정에 따라 조합해 화면을 렌더링했습니다.",
          ]}
          solutionLabel="해결"
        />
      </div>
    </article>
  );
}

function SharedImprovements() {
  return (
    <section
      className={`${styles["feature-case"]} ${styles["shared-improvements"]}`}
      aria-labelledby="shared-improvements-heading"
    >
      <header className={styles["feature-header"]}>
        <h4
          id="shared-improvements-heading"
          className={styles["feature-title"]}
        >
          서비스에서 반복해서 사용하는 공통 요소의 구조와 사용 방식 개선
        </h4>
      </header>
      <div className={styles["shared-list"]}>
        <SharedItem title="Toast / Snackbar">
          <p>
            다양한 사용 방식이 추가되며 복잡해진 알림 구조를 역할에 맞게 분리
          </p>
          <p>
            기존 Toast는 서비스 운영 과정에서 다양한 기능이 추가되면서, 짧게
            보여주는 알림과 지속적으로 보여주는 알림, 사용자의 동작이 필요한
            알림 등을 하나의 구조에서 여러 옵션으로 처리하고 있었습니다.
          </p>
          <p>
            서로 다른 성격의 알림을 하나의 구조에서 계속 확장하기보다 Toast와
            Snackbar로 역할을 나누고, 각각의 UI와 호출 방식을 분리했습니다. 기존
            사용처를 새로운 구조로 전환했으며, 이후 Next.js 웹에서도 기존 상태
            관리 방식은 유지하면서 같은 Toast/Snackbar 구조를 적용했습니다.
          </p>
        </SharedItem>
        <SharedItem title="Header">
          <p>여러 방식으로 사용되던 공통 Header의 역할과 사용 방식 정리</p>
          <p>
            기존에는 AppHeader와 CustomHeader가 함께 사용되고 있었고, 화면마다
            필요한 기능이 추가되면서 제목과 뒤로가기뿐 아니라 페이지별 액션과
            서비스 상태를 처리하기 위한 여러 설정이 Header에 함께 존재했습니다.
          </p>
          <p>
            공통 컴포넌트는 사용하는 개발자가 필요한 기능과 사용 방법을 쉽게
            파악할 수 있어야 한다고 생각했습니다. 여러 요구사항을 하나의
            Header에서 계속 처리하기보다, 대부분의 화면에서 공통으로 사용하는
            역할을 단순하게 만드는 방향으로 구조를 정리했습니다.
          </p>
          <p>
            기본 레이아웃을 담당하는 HeaderBase와 제목·뒤로가기 등 기본 동작을
            담당하는 Header로 역할을 나누고, 기존 사용처를 새로운 구조로
            단계적으로 전환했습니다. 페이지별 액션을 조합할 수 있도록 확장하는
            작업도 진행했지만, 전체 Header 전환을 완료하기 전에 작업이
            종료되었습니다.
          </p>
        </SharedItem>
        <SharedItem title="Icon">
          <p>아이콘의 종류와 표시 크기가 결합되어 있던 구조를 분리</p>
          <p>
            기존 Icon은 <code>size</code> 값에 따라 서로 다른 디렉터리의 SVG를
            불러오는 구조였습니다. 같은 종류의 아이콘도 크기별 SVG가 따로
            존재했고, 필요한 경우에는 호출하는 쪽에서 사용할 SVG가 위치한
            디렉터리까지 지정해야 했습니다.
          </p>
          <p>
            아이콘의 종류와 화면에 표시할 크기는 서로 다른 정보라고 판단해 두
            역할을 분리했습니다. SVG는 하나의 경로에서 <code>name</code>으로
            선택하고, <code>size</code>는 표시 크기만 담당하도록 변경했으며
            색상도 별도로 지정할 수 있도록 정리했습니다.
          </p>
          <p>
            기존 사용처를 새로운 Icon으로 전환한 뒤 크기별 SVG 디렉터리와 기존
            Icon 구현을 제거했습니다. 이후 추가된 화면과 아이콘에서도 같은
            구조가 사용되었습니다.
          </p>
        </SharedItem>
      </div>
    </section>
  );
}

function SharedItem({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className={styles["shared-item"]}>
      <h5>{title}</h5>
      <div>{children}</div>
    </article>
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

export function NavigationDiagram() {
  return (
    <div
      className={styles["legacy-diagram"]}
      aria-label="기존 주소 형식을 웹 경로로 변환하는 흐름"
    >
      <div>
        <span>입력</span>
        <ul>
          <li>앱 Scheme</li>
          <li>WebView Scheme 안에 포함된 기존 URL</li>
          <li>기존 React 프로젝트 URL</li>
        </ul>
      </div>
      <div>
        <span>변환</span>
        <strong>주소 형식에 따라 웹 경로로 변환</strong>
      </div>
      <div>
        <span>결과</span>
        <strong>현재 웹 경로</strong>
      </div>
    </div>
  );
}

export function NavigationStateDiagram() {
  return (
    <div
      className={styles["legacy-diagram"]}
      aria-label="앱과 웹의 이전 화면 데이터와 상태 유지 방식"
    >
      <div>
        <span>앱</span>
        <ul>
          <li>이전 WebView 화면이 네이티브 화면 스택에 남음</li>
          <li>이전 화면으로 돌아왔을 때 기존 화면이 유지됨</li>
          <li>별도의 데이터/상태 유지 처리가 필요하지 않았음</li>
        </ul>
      </div>
      <div>
        <span>웹</span>
        <ul>
          <li>스크롤 위치 → 브라우저 기본 복원 동작</li>
          <li>서버 데이터 → TanStack Query 캐시</li>
          <li>필요한 상태 → URL에 유지</li>
        </ul>
      </div>
    </div>
  );
}

export function AuthPatternDiagram() {
  return (
    <div
      className={styles["legacy-diagram"]}
      aria-label="페이지별 로그인 확인이 경로 단위의 공통 접근 제어로 변경된 구조"
    >
      <div>
        <span>기존</span>
        <ul>
          <li>페이지 A → 페이지 내부에서 로그인 확인</li>
          <li>페이지 B → 페이지 내부에서 로그인 확인</li>
          <li>페이지 C → 로그인 확인 누락</li>
        </ul>
      </div>
      <div>
        <span>변경</span>
        <ul>
          <li>요청 경로</li>
          <li>기존 Next.js Middleware</li>
          <li>경로 기반 접근 제어</li>
          <li>각 페이지로 연결</li>
        </ul>
      </div>
      <div>
        <span>하위·동적 경로</span>
        <strong>경로 패턴 매칭</strong>
      </div>
    </div>
  );
}

export function SearchDiagram() {
  return (
    <div
      className={styles["legacy-diagram"]}
      aria-label="세 검색 domain API를 병렬 호출해 검색 UI에 결과를 표시하는 흐름"
    >
      <div>
        <span>분리된 검색 영역</span>
        <ul>
          <li>Wedding Hall API</li>
          <li>Partner API</li>
          <li>Store API</li>
        </ul>
      </div>
      <div>
        <span>Next.js Route Handler</span>
        <strong>Promise.allSettled</strong>
        <p>각 domain 요청을 병렬로 처리</p>
      </div>
      <div>
        <span>하나의 Search UI</span>
        <ul>
          <li>result</li>
          <li>empty</li>
          <li>error</li>
        </ul>
      </div>
    </div>
  );
}

export function HonsuDiagram() {
  return (
    <div
      className={styles["legacy-diagram"]}
      aria-label="홈 화면 구성과 콘텐츠 관리 방식의 변경"
    >
      <div>
        <span>Before</span>
        <strong>화면 구성과 많은 콘텐츠가 프론트엔드 코드에 직접 정의</strong>
      </div>
      <div>
        <span>After</span>
        <strong>
          서버에서 전달받은 구성에 따라 타입별 컴포넌트를 조합해 화면 렌더링
        </strong>
      </div>
    </div>
  );
}
