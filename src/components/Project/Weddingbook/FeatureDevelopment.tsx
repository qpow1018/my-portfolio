import type { ReactNode } from "react";

import styles from "./FeatureDevelopment.module.scss";

export default function FeatureDevelopment() {
  return (
    <section
      className={styles["feature-development"]}
      aria-labelledby="feature-development-heading"
    >
      <header className={styles["group-header"]}>
        <h3 id="feature-development-heading" className={styles["group-title"]}>
          주요 기능 개발 및 개선
        </h3>
      </header>
      <div className={styles["case-list"]}>
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
    <CaseBox
      label="01"
      title="통합검색"
      summary="분리되어 있던 검색 결과를 하나의 화면에서 제공"
    >
      <p>
        기존 검색은 웨딩홀·업체·스토어가 각각 분리되어 있었지만, 새로운
        통합검색에서는 세 영역의 검색 결과를 한 화면에서 함께 보여줘야 했습니다.
        통합 API 추가를 백엔드 개발자와 논의했지만 다른 작업이 우선되어 바로
        개발하기 어려웠고, 기존에는 영역별 검색 API만 제공되고 있었습니다.
      </p>
      <div className={styles["divider"]} />
      <p>
        전체 검색 결과가 없는 경우와 특정 영역의 결과만 없는 경우의 화면이
        달랐기 때문에, Next.js Route Handler에서 세 검색 API를 병렬 호출해
        하나의 응답으로 조합했습니다. 일부 요청이 실패하더라도 정상 응답한
        영역의 결과는 보여줄 수 있도록 Promise.allSettled로 각 요청의 성공과
        실패를 개별 처리했습니다.
      </p>
      <figure
        className={styles["integrated-search-flow"]}
        aria-label="일부 검색 요청이 실패해도 성공한 영역의 결과를 유지하는 통합검색 처리 예시"
      >
        <div className={styles["search-request-list"]}>
          <div className={styles["search-request"]}>
            <span>웨딩홀 검색 API</span>
            <span className={styles["request-status"]}>성공</span>
          </div>
          <div className={styles["search-request"]}>
            <span>업체 검색 API</span>
            <span
              className={`${styles["request-status"]} ${styles["is-failed"]}`}
            >
              실패
            </span>
          </div>
          <div className={styles["search-request"]}>
            <span>스토어 검색 API</span>
            <span className={styles["request-status"]}>성공</span>
          </div>
        </div>

        <div className={styles["search-flow-divider"]} aria-hidden="true" />

        <div className={styles["search-flow-arrow"]} aria-hidden="true" />

        <div className={styles["search-handler"]}>
          <span>Next.js Route Handler</span>
          <strong>Promise.allSettled</strong>
        </div>

        <div
          className={styles["search-result-connection"]}
          aria-hidden="true"
        />

        <div className={styles["search-response"]}>
          <span>통합검색 응답</span>
          <strong>성공한 영역의 결과 유지</strong>
          <small>웨딩홀 · 스토어</small>
        </div>
      </figure>
    </CaseBox>
  );
}

function InvitationCase() {
  return (
    <CaseBox
      label="02"
      title="모바일 청첩장"
      summary="여러 영역의 정보를 입력하고 결과를 확인하며 청첩장을 완성하는 제작 기능 개발"
    >
      <p>
        여러 영역으로 구성된 모바일 청첩장의 작성·수정 화면을 개발했습니다.
        서버에서 받은 데이터는 작성 화면에서 사용할 수 있는 형태로 변환하고,
        사용자가 입력한 값은 검증과 정규화를 거쳐 저장할 수 있도록 구성했습니다.
      </p>

      <div className={styles["case-detail-list"]}>
        <CaseDetailItem title="업로드한 이미지를 바로 확인할 수 있도록 처리">
          <p>
            미지 업로드 후 서버에서 URL을 반환받더라도 실제 이미지 처리가
            완료되기까지 시간차가 있어, 반환받은 URL을 바로 사용하면 이미지가
            표시되지 않는 경우가 있었습니다.
          </p>
          <p>
            사용자가 선택한 이미지로 URL.createObjectURL()을 이용해 화면 표시용
            URL을 생성하고, 작성 화면과 실시간 미리보기에서는 이 값을
            사용했습니다. 서버에서 받은 이미지 URL은 저장용으로 분리하고, 저장
            시 화면에서만 필요한 값들은 제외했습니다.
          </p>
        </CaseDetailItem>
        <CaseDetailItem title="작성 중 변경사항 보호">
          <p>
            작성 중인 내용을 실수로 잃지 않도록 최초 데이터와 현재 데이터를 실제
            저장 형태로 정규화해 변경 여부를 판단했습니다. 변경사항이 있는
            상태에서 뒤로 가기가 발생하면 저장 여부를 확인할 수 있도록 이탈 확인
            모달을 연결했습니다.
          </p>
        </CaseDetailItem>
      </div>
    </CaseBox>
  );
}

function HomeCase() {
  return (
    <CaseBox
      label="03"
      title="홈 화면"
      summary="프론트엔드에 고정되어 있던 홈 화면을 어드민에서 관리할 수 있는 구조로 전환"
    >
      <p>
        기존 홈 화면은 영역의 구성과 노출 순서, 배너·문구·이미지·링크·일부 업체
        정보 등이 프론트엔드 코드에 직접 작성되어 있어, 홈 구성을 변경하려면
        프론트엔드 코드를 수정해야 했습니다.
      </p>
      <div className={styles["divider"]} />
      <p>
        홈 화면을 어드민에서 관리할 수 있도록 서버에서 전달받은 타입과 설정에
        따라 필요한 컴포넌트를 렌더링하는 구조로 변경했습니다. 배너, 메뉴, 상품
        목록 등 각 영역을 타입별 컴포넌트로 분리하고, 전달받은 순서와 설정에
        따라 조합했습니다.
      </p>
    </CaseBox>
  );
}

function SharedImprovements() {
  return (
    <CaseBox
      label="04"
      title="공통 프론트엔드 개선"
      summary="서비스에서 반복해서 사용하는 공통 요소의 구조와 사용 방식 개선"
    >
      <div className={styles["case-detail-list"]}>
        <CaseDetailItem title="Toast / Snackbar">
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
        </CaseDetailItem>
        <CaseDetailItem title="Header">
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
        </CaseDetailItem>
        <CaseDetailItem title="Icon">
          <p>아이콘의 종류와 표시 크기가 결합되어 있던 구조를 분리</p>
          <p>
            기존 Icon은 size 값에 따라 서로 다른 디렉터리의 SVG를 불러오는
            구조였습니다. 같은 종류의 아이콘도 크기별 SVG가 따로 존재했고,
            필요한 경우에는 호출하는 쪽에서 사용할 SVG가 위치한 디렉터리까지
            지정해야 했습니다.
          </p>
          <p>
            아이콘의 종류와 화면에 표시할 크기는 서로 다른 정보라고 판단해 두
            역할을 분리했습니다. SVG는 하나의 경로에서 name으로 선택하고, size는
            표시 크기만 담당하도록 변경했으며 색상도 별도로 지정할 수 있도록
            정리했습니다.
          </p>
          <p>
            기존 사용처를 새로운 Icon으로 전환한 뒤 크기별 SVG 디렉터리와 기존
            Icon 구현을 제거했습니다. 이후 추가된 화면과 아이콘에서도 같은
            구조가 사용되었습니다.
          </p>
        </CaseDetailItem>
      </div>
    </CaseBox>
  );
}

function CaseBox(props: {
  label: string;
  title: string;
  summary: string;
  children: ReactNode;
}) {
  const { label, title, summary, children } = props;

  return (
    <article className={styles["case-box"]}>
      <span className={styles["case-number"]} aria-hidden="true">
        {label}
      </span>
      <div className={styles["case-wrap"]}>
        <h4 className={styles["case-title"]}>{title}</h4>
        <p className={styles["case-summary"]}>{summary}</p>
        <div className={styles["case-content"]}>{children}</div>
      </div>
    </article>
  );
}

function CaseDetailItem({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <article className={styles["case-detail-item"]}>
      <h5>{title}</h5>
      <div>{children}</div>
    </article>
  );
}
