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
      summary="분리되어 있던 검색 흐름을 하나의 화면으로 통합"
    >
      <p>
        기존에는 웨딩홀·업체·스토어의 검색 흐름과 API가 각각 분리되어 있었지만,
        새로운 통합검색에서는 세 영역의 검색 결과를 한 화면에서 함께 보여줘야
        했습니다.
      </p>
      <div className={styles["divider"]} />
      <p>
        전체 결과 없음과 일부 영역의 결과 없음을 구분해야 했기 때문에, 세 영역의
        결과를 한 곳에서 함께 판단하는 구조로 정리했습니다. 다만 당시 백엔드
        통합검색 API를 바로 제공하기 어려워 기존 도메인별 API를 활용해야
        했습니다.
      </p>
      <div className={styles["divider"]} />
      <p>
        그래서 Next.js Route Handler에서 세 영역의 검색 결과를 하나의 응답으로
        조합하고, 한 영역의 요청 실패가 전체 검색 실패로 이어지지 않도록
        Promise.allSettled를 사용했습니다. 실패한 영역만 오류 상태로 분리해 정상
        응답한 영역의 검색 결과는 그대로 보여줄 수 있도록 했습니다.
      </p>
      <figure
        className={styles["integrated-search-flow"]}
        aria-label="도메인별 검색 결과를 Route Handler에서 통합하고, 통합검색 화면에서 전체 및 부분 상태를 판단하는 흐름"
      >
        <div className={styles["search-request-list"]}>
          <div className={styles["search-request"]}>
            <span>웨딩홀</span>
            <strong>검색 API</strong>
          </div>
          <div className={styles["search-request"]}>
            <span>업체</span>
            <strong>검색 API</strong>
          </div>
          <div className={styles["search-request"]}>
            <span>스토어</span>
            <strong>검색 API</strong>
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
          <strong>hall / partner / store</strong>
          <small>결과 + 영역별 오류 상태</small>
        </div>

        <div
          className={styles["search-screen-connection"]}
          aria-hidden="true"
        />

        <div className={styles["search-screen"]}>
          <span>통합검색 화면</span>
          <strong>전체 / 부분 상태 판단</strong>
          <small>전체 결과 없음 · 일부 영역 결과 없음 · 일부 영역 오류</small>
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
      summary="다양한 정보를 입력하고 결과를 확인하며 모바일 청첩장을 작성하는 기능 개발"
    >
      <p>
        모바일 청첩장 작성 화면은 서버에서 받은 데이터와 화면에서 필요한 상태,
        실제 저장할 데이터의 형태가 달랐습니다. 서버 응답은 화면에 맞게
        변환하고, 저장할 때는 화면 전용 값을 제외해 요청 데이터로 정리했습니다.
      </p>

      <div className={styles["case-detail-list"]}>
        <CaseDetailItem title="업로드한 이미지를 바로 확인할 수 있도록 처리">
          <p>
            이미지 업로드 후 서버에서 URL을 반환받아도 실제 이미지 처리가
            완료되기까지 시간차가 있어, 반환된 URL을 사용하면 이미지가 표시되지
            않는 경우가 있었습니다.
          </p>
          <p>
            사용자가 선택한 이미지로 URL.createObjectURL()을 이용해 화면 표시용
            URL을 별도로 만들고, 작성 화면과 미리보기에 사용했습니다. 서버에서
            받은 URL은 저장용으로 유지해 화면 표시용 URL과 저장용 URL을
            분리했습니다.
          </p>
        </CaseDetailItem>
        <CaseDetailItem title="작성 중 변경사항 보호">
          <p>
            작성 중인 내용을 실수로 잃지 않도록, 화면 전용 상태가 아닌 실제
            저장될 데이터를 기준으로 변경 여부를 판단했습니다. 최초 데이터와
            현재 데이터를 저장 요청 형태로 정리해 비교하고, 변경사항이 있는
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
        기존 홈 화면은 주요 영역의 구성과 노출 순서, 배너·문구·이미지·링크 등이
        프론트엔드 코드에 고정되어 있어, 구성을 변경하려면 코드 수정이
        필요했습니다.
      </p>
      <div className={styles["divider"]} />
      <p>
        서버에서 전달한 타입과 설정에 따라 각 영역을 타입별 컴포넌트로 조합하고,
        전달된 순서대로 렌더링하도록 구조를 변경했습니다. 이를 통해 프론트엔드를
        수정·배포하지 않고도 어드민 설정으로 홈 화면의 구성과 노출 순서를 변경할
        수 있도록 했습니다.
      </p>
      <figure
        className={styles["home-composition-comparison"]}
        aria-label="프론트엔드 코드에 고정된 기존 홈 화면 구조와 서버 구성에 따라 조합하는 변경 후 구조 비교"
      >
        <section className={styles["home-structure"]}>
          <h5>기존</h5>
          <div className={styles["home-structure-steps"]}>
            <div className={styles["home-structure-step"]}>
              <strong>프론트엔드 코드</strong>
              <span>구성 · 순서 · 주요 콘텐츠</span>
            </div>
            <span
              className={styles["home-structure-arrow"]}
              aria-hidden="true"
            />
            <strong className={styles["home-result"]}>홈 화면</strong>
          </div>
        </section>

        <section className={styles["home-structure"]}>
          <h5>변경 후</h5>
          <div className={styles["home-structure-steps"]}>
            <strong>어드민에서 구성</strong>
            <span
              className={styles["home-structure-arrow"]}
              aria-hidden="true"
            />
            <div className={styles["home-structure-step"]}>
              <strong>서버에서 전달</strong>
              <span>타입 · 설정 · 순서</span>
            </div>
            <span
              className={styles["home-structure-arrow"]}
              aria-hidden="true"
            />
            <strong>타입별 컴포넌트 조합</strong>
            <span
              className={styles["home-structure-arrow"]}
              aria-hidden="true"
            />
            <strong className={styles["home-result"]}>홈 화면</strong>
          </div>
        </section>
      </figure>
    </CaseBox>
  );
}

function SharedImprovements() {
  return (
    <CaseBox
      label="04"
      title="공용 컴포넌트 사용 방식 개선"
      summary="반복해서 사용하는 공용 컴포넌트의 사용 방식을 단순하고 명확하게 개선"
    >
      <div className={styles["case-detail-list"]}>
        <CaseDetailItem title="Toast / Snackbar">
          <p>
            하나의 공통 알림 API에서 Toast와 Snackbar를 옵션으로 구분하고 있어,
            호출 코드에 사용 의도가 명확하게 드러나지 않았습니다.
          </p>
          <p>
            Toast와 Snackbar의 UI와 호출 API를 분리하고, 각 알림 형태에 필요한
            옵션을 구분해 호출 코드에 사용 의도가 직접 드러나도록 정리했습니다.
          </p>
        </CaseDetailItem>

        <CaseDetailItem title="Icon">
          <p>
            기존 Icon은 size가 화면의 표시 크기뿐 아니라 asset 경로를 선택하는
            역할도 함께 담당했습니다. 다른 디렉터리의 아이콘을 사용하려면
            folderName을 지정하거나 SVG를 직접 불러와 IconComponent로 전달해야
            했습니다.
          </p>
          <p>
            호출하는 쪽에서는 어떤 아이콘인지와 어떻게 보여줄지만 지정할 수
            있도록 name, size, color의 역할을 분리했습니다. asset 선택과 화면
            표현을 분리해, 내부 디렉터리 구조에 의존하지 않고 동일한 아이콘을
            필요한 크기와 색상으로 사용할 수 있도록 했습니다.
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
