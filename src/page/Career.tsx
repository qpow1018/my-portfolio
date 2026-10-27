import type { ReactNode } from "react";

import styles from "./Career.module.scss";

type TExperienceEntryProps = {
  company: string;
  period: string;
  role: string;
  children: ReactNode;
};

type TProjectProps = {
  title: string;
  children: ReactNode;
};

export default function Career() {
  return (
    <main className={styles["career"]}>
      <header className={styles["document-header"]}>
        <div className={styles["container"]}>
          <p className={styles["document-type"]}>경력기술서</p>
          <h1>최원진</h1>
          <p className={styles["role"]}>4년 차 프론트엔드 개발자</p>
          <address className={styles["contact"]}>
            <a href="mailto:qpow1018@gmail.com">qpow1018@gmail.com</a>
            <span aria-hidden="true">·</span>
            <a
              href="https://github.com/qpow1018"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/qpow1018
            </a>
          </address>
        </div>
      </header>
      <section
        className={styles["experience"]}
        aria-labelledby="experience-title"
      >
        <div className={styles["container"]}>
          <h2 id="experience-title">경력 사항</h2>
          <ExperienceEntry
            company="(주)웨딩북"
            period="2024.05–2026.05"
            role="프론트엔드 개발자"
          >
            <Project title="웨딩북 서비스 개발 및 운영">
              <p>
                결혼 준비를 위한 웨딩홀·업체 정보, 모바일 청첩장, 혼수 등 다양한
                기능을 제공하는 플랫폼입니다. React 기반 WebView 중심 서비스를
                Next.js 웹으로 단계적으로 확장하는 과정에서 신규 기능 개발, 기존
                서비스 개선, 공통 컴포넌트 및 코드 구조 정리 업무를
                수행했습니다.
              </p>
              <p className={styles["project-skills"]}>
                <strong>기술:</strong> Next.js, React, TypeScript, TanStack
                Query, Zustand, SCSS, CSS Modules
              </p>
              <p className={styles["project-skills"]}>
                <strong>서비스:</strong>{" "}
                <a
                  href="https://www.weddingbook.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://www.weddingbook.com
                </a>
              </p>
              <h5>1. 앱 중심 서비스의 웹 확장</h5>
              <ul className={styles["responsibilities"]}>
                <li>
                  <strong>기존 링크 호환:</strong> 앱 화면 이동용 Scheme,
                  WebView 링크, 이전 웹 도메인의 URL 등이 어드민 설정 등 여러
                  곳에 누적되어 있어 웹 확장 과정에서 일괄 수정하기
                  어려웠습니다. 기존 데이터를 변경하는 대신 공통 라우터의 URL
                  정규화 로직을 확장해, 웹에서 지원하는 링크를 현재 웹 경로로
                  변환하도록 개선했습니다.
                </li>
                <li>
                  <strong>목록 재진입 상태 관리:</strong> 앱에서는 이전 WebView
                  화면이 유지됐지만 웹에서는 상세 페이지에서 목록으로 돌아왔을
                  때 조회 데이터와 탐색 상태를 다시 구성해야 했습니다. TanStack
                  Query 캐시로 검색 조건별 목록 데이터를 관리하고, 검색어·탭 등
                  화면 상태를 URL에 반영해 이전 목록으로 돌아왔을 때 탐색을
                  이어갈 수 있도록 개선했습니다.
                </li>
                <li>
                  <strong>회원 전용 경로 접근 정책:</strong> 비회원에게 공개하는
                  페이지와 로그인이 필요한 페이지를 구분하고, 회원 전용 경로의
                  접근 제어를 Next.js Middleware에서 공통으로 처리했습니다. 경로
                  패턴 매칭으로 동적 파라미터와 하위 경로까지 같은 정책이
                  적용되도록 구성했습니다.
                </li>
              </ul>
              <h5>2. 통합검색 개발</h5>
              <p>
                웨딩홀·업체·스토어로 분리된 검색 기능을 하나의 화면에서 제공하기
                위해 통합검색의 프론트엔드 구현을 담당했습니다. 당시 기존
                도메인별 API를 사용해야 했으므로 Next.js Route Handler에서 세
                API를 병렬 호출하고, 결과를 하나의 응답으로 조합했습니다.{" "}
                <code>Promise.allSettled</code>로 요청별 실패를 분리해 일부
                영역에 오류가 발생해도 정상 응답한 영역의 결과를 표시하도록
                했으며, 전체 결과 없음·일부 영역 결과 없음·영역별 오류를
                구분했습니다.
              </p>
              <h5>3. 모바일 청첩장 작성·편집 기능 개발</h5>
              <ul className={styles["responsibilities"]}>
                <li>
                  서버 응답 데이터, 편집 화면에서 사용하는 상태, 실제 저장 요청
                  데이터를 구분해 변환 로직을 구성했습니다.
                </li>
                <li>
                  업로드 직후 서버 이미지 처리가 완료되지 않아 이미지가 표시되지
                  않는 경우에 대응해, 선택한 파일의{" "}
                  <code>URL.createObjectURL()</code>을 화면 표시용으로 사용하고
                  서버에서 반환한 URL은 저장용으로 유지했습니다.
                </li>
                <li>
                  화면 표시용 상태가 아닌 실제 저장될 데이터를 기준으로 변경
                  여부를 판단했습니다. 최초 데이터와 편집 데이터를 저장 요청
                  형태로 변환해 비교하고, 저장되지 않은 변경사항이 있을 때 뒤로
                  가면 이탈 확인 모달을 표시하도록 구현했습니다.
                </li>
              </ul>
              <h5>4. 업체 상세 화면 개발 및 개선</h5>
              <p>
                기존 업체 상세 화면을 새로운 구성으로 개편하면서 업체별 정보
                표시와 관련 기능 연계를 개발했습니다.
              </p>
              <ul className={styles["responsibilities"]}>
                <li>
                  서버에서 전달한 업체별 탭 정보를 기준으로 화면을 구성하고,
                  URL에 지정된 탭의 유효성을 확인하도록 처리했습니다.
                </li>
                <li>
                  업체와 연관된 플래너·포트폴리오 목록 및 상세 기능을 개발하고
                  실제 API와 연동했습니다.
                </li>
                <li>
                  이후 WebView 상세 화면에서 이미지 조회와 추가 로딩을 상위 정보
                  영역이 담당하도록 변경하고, 이미지 슬라이더는 전달받은
                  데이터와 이벤트를 처리하도록 역할을 분리했습니다.
                </li>
              </ul>
              <h5>5. 서버 설정 기반 홈 화면 구성</h5>
              <p>
                기존 홈 화면은 주요 콘텐츠와 노출 순서 등이 프론트엔드 코드에
                고정되어 있어, 구성을 변경할 때 코드 수정이 필요했습니다.
                서버에서 전달한 타입과 설정에 따라 컴포넌트를 조합하고 전달된
                순서대로 렌더링하도록 변경했습니다. 이를 통해 어드민 설정으로
                기존 홈 화면의 구성과 노출 순서를 변경할 수 있도록 했습니다.
              </p>
              <h5>6. 공용 UI 컴포넌트 개선</h5>
              <p>
                여러 화면에서 반복 사용하는 공용 UI의 호출 방식과 옵션을 정리해,
                사용처에서 내부 구현에 대한 의존성을 줄이도록 개선했습니다.
              </p>
              <ul className={styles["responsibilities"]}>
                <li>
                  <strong>Icon:</strong> 크기 값으로 아이콘 파일의 경로까지
                  선택하던 구조를 개선했습니다. 아이콘 이름으로 자산을 선택하고
                  크기·색상을 별도로 지정하도록 정리해, 호출부가 내부 디렉터리
                  구조에 의존하지 않도록 했습니다.
                </li>
                <li>
                  <strong>Toast·Snackbar:</strong> 알림 형태를 하나의 API에서
                  옵션으로 구분하던 방식을 각각의 호출 API로 분리했습니다. 알림
                  형태별 옵션을 구분해 호출 코드에서 용도와 동작을 파악하기 쉽게
                  정리했습니다.
                </li>
              </ul>
              <h5>7. 컴포넌트 및 스타일 구조 개선</h5>
              <ul className={styles["responsibilities"]}>
                <li>
                  페이지 전용 코드와 특정 도메인에서 사용하는 코드가 공통
                  디렉터리에 혼재해 실제 사용 범위와 역할을 파악하기
                  어려웠습니다. 각 컴포넌트와 유틸리티의 사용처를 확인하고
                  페이지 전용·도메인 공유·앱 전역 코드로 관리 위치를
                  구분했습니다.
                </li>
                <li>
                  전역 SCSS 클래스 이름 충돌로 다른 화면에 영향을 주는 문제를
                  개선하기 위해 SCSS Modules 적용을 도입하고, 기존 스타일을
                  컴포넌트 단위로 전환했습니다.
                </li>
              </ul>
            </Project>
          </ExperienceEntry>
          <ExperienceEntry
            company="시스기어"
            period="2023.10–2024.01"
            role="프리랜서 프론트엔드 개발"
          >
            <Project title="디스커버리 공식 온라인몰 리뉴얼">
              <p>
                의류 브랜드 디스커버리의 공식 온라인 쇼핑몰 리뉴얼 프로젝트에서
                고객센터와 프로모션 화면을 개발하고 UI를 수정·보완했습니다.
              </p>
              <ul className={styles["responsibilities"]}>
                <li>
                  공지사항, FAQ, 매장 안내, 매장 교환 등 고객센터 화면 개발
                </li>
                <li>프로모션 이벤트 페이지 개발 및 수정</li>
                <li>디자인 시안과 구현 화면의 차이를 확인하고 UI 수정·보완</li>
              </ul>
              <p className={styles["project-skills"]}>
                <strong>기술:</strong> Next.js, TypeScript, MUI, Axios
              </p>
            </Project>
          </ExperienceEntry>
          <ExperienceEntry
            company="주식회사 라우들리"
            period="2019.07–2023.05"
            role="웹 퍼블리셔 → 프론트엔드 개발자"
          >
            <p>
              웹 퍼블리싱 업무를 수행한 뒤 프론트엔드 개발로 전향했습니다. React
              기반 커뮤니티·광고 서비스와 jQuery 기반 이벤트 사이트 등 다양한
              프로젝트의 화면과 기능을 개발했습니다.
            </p>
            <Project title="자사 커뮤니티 및 아이템 거래 서비스">
              <p>
                유머·영화·게임 등 주제의 커뮤니티와 디아블로2 아이템 거래 기능을
                제공하는 서비스입니다.
              </p>
              <ul className={styles["responsibilities"]}>
                <li>게시판 및 아이템 거래 관련 화면 개발</li>
                <li>
                  회원 전용 페이지에서 반복되는 로그인 확인 로직을 React HOC로
                  공통화
                </li>
                <li>WebSocket을 활용한 사용자 간 아이템 거래 채팅 기능 개발</li>
              </ul>
              <p className={styles["project-skills"]}>
                <strong>기술:</strong> React, TypeScript, Redux, Axios, SCSS
              </p>
            </Project>
            <Project title="인플루언서 광고 플랫폼">
              <p>
                광고주·MCN·인플루언서의 광고 진행과 계약·일정·정산 등을 관리하는
                플랫폼입니다.
              </p>
              <ul className={styles["responsibilities"]}>
                <li>광고 제안·진행 현황·계약·일정·정산 관련 화면 개발</li>
                <li>반복되는 UI를 공통 컴포넌트로 구현</li>
                <li>MUI Theme으로 공통 색상과 크기 등 디자인 값 관리</li>
              </ul>
              <p className={styles["project-skills"]}>
                <strong>기술:</strong> React, TypeScript, MUI, Redux, Axios
              </p>
            </Project>
            <Project title="2022 1인 미디어 대전">
              <p>행사 소개·참가 신청·게시판을 제공하는 이벤트 사이트입니다.</p>
              <ul className={styles["responsibilities"]}>
                <li>CSS 미디어쿼리를 이용한 반응형 웹 페이지 구현</li>
                <li>
                  jQuery·Ajax 기반 참가 신청·전화번호 인증·신청 내역 조회 API
                  연동
                </li>
                <li>입력값 검증과 API 요청 상태에 따른 로딩·성공·오류 처리</li>
              </ul>
              <p className={styles["project-skills"]}>
                <strong>기술:</strong> HTML, CSS, JavaScript, jQuery
              </p>
            </Project>
            <Project title="웹사이트 퍼블리싱">
              <p>
                마미손 홈페이지, NFT 마켓, 라우들리 회사 홈페이지, ISDT 코인
                소개 홈페이지 등 웹사이트의 퍼블리싱을 담당했습니다.
              </p>
              <p className={styles["project-skills"]}>
                <strong>기술:</strong> HTML, CSS, jQuery
              </p>
            </Project>
          </ExperienceEntry>
          <ExperienceEntry
            company="주식회사 클로랩"
            period="2016.11–2019.03"
            role="웹 퍼블리셔"
          >
            <Project title="바이비엘 — 수제화 쇼핑몰">
              <p>
                카페24 기반 수제화 쇼핑몰의 HTML·CSS 스킨을 수정하고
                운영했습니다.
              </p>
              <p className={styles["project-skills"]}>
                <strong>기술:</strong> HTML, CSS
              </p>
            </Project>
          </ExperienceEntry>
          <ExperienceEntry
            company="NOFTBON"
            period="2016.05–2016.11"
            role="웹 퍼블리셔"
          >
            <Project title="세컨드미닝 — 의류 쇼핑몰">
              <p>
                남성 의류 쇼핑몰 SecondMeaning의 웹 퍼블리싱 및 운영을
                담당했습니다.
              </p>
              <p className={styles["project-skills"]}>
                <strong>기술:</strong> HTML, CSS
              </p>
            </Project>
          </ExperienceEntry>
        </div>
      </section>
    </main>
  );
}

function ExperienceEntry({
  company,
  period,
  role,
  children,
}: TExperienceEntryProps) {
  return (
    <article className={styles["experience-entry"]}>
      <header className={styles["company-header"]}>
        <h3>{company}</h3>
        <p>
          {period} | {role}
        </p>
      </header>
      <div className={styles["project-list"]}>{children}</div>
    </article>
  );
}

function Project({ title, children }: TProjectProps) {
  return (
    <section className={styles["project"]}>
      <h4>{title}</h4>
      {children}
    </section>
  );
}
