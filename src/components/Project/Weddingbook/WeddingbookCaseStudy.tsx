import { useState } from "react";

import WeddingbookHomeImage from '@/images/weddingbook/weddingbook_home.png';
import WeddingbookHonsuImage from '@/images/weddingbook/weddingbook_honsu.png';
import WeddingbookInvitationImage from '@/images/weddingbook/weddingbook_invitation.png';
import WeddingbookWeddinghallImage from '@/images/weddingbook/weddingbook_weddinghall.png';

import useWindowSize from '@/hooks/useWindowSize';

import ProjectImagesModal from '../ProjectImagesModal';
import styles from './WeddingbookCaseStudy.module.scss';

export default function WeddingbookCaseStudy() {
  return (
    <section className={styles['weddingbook-case-study']}>
      <WeddingbookHeader />

      <div className={styles['case-study']}>
        <section className={styles['web-expansion']}>
          <header className={`${styles['case-header']} ${styles['web-expansion-header']}`}>
            <div>
              <h5 className={styles['case-title']}>앱 중심 서비스의 웹 확장</h5>
              <p className={styles['case-description']}>
                앱 외부의 유입 경로를 넓히기 위해, React 기반 WebView 중심으로 제공하던 서비스를 Next.js 기반 웹까지 단계적으로 확장했습니다.
              </p>
            </div>
          </header>

          <ol className={styles['case-list']}>
            <li className={styles['case-item']}>
              <div className={styles['case-content']}>
                <div className={styles['case-heading']}>
                  <p className={styles['case-number']}>01</p>
                  <h6>앱에서 사용하던 주소 형식을 웹에서 그대로 사용할 수 없었던 문제</h6>
                </div>
                <div className={styles['case-copy']}>
                  <p className={styles['copy-label']}>문제 상황</p>
                  <p>
                    기존 앱에서는 화면 이동에 앱 Scheme과 URL을 함께 사용하고 있었고, WebView로 이동하는 URL은 기존 React 프로젝트의 도메인을 기준으로 하고 있었습니다.
                  </p>
                  <p>
                    서비스를 Next.js 웹으로 확장하면서 이러한 주소 형식을 그대로 사용할 수 없었습니다. 앱 Scheme은 일반 웹에서 같은 방식으로 처리할 수 없었고, 기존 도메인이 포함된 URL은 새로운 웹이 아닌 이전 React 프로젝트로 이동하는 문제가 있었습니다.
                  </p>
                </div>
                <div className={styles['case-copy']}>
                  <p className={styles['copy-label']}>판단 + 해결</p>
                  <p>
                    기존 주소가 서비스 전반에 광범위하게 사용되고 있었고, 사용처가 한곳에서 관리되는 구조가 아니어서 모든 주소를 파악하고 각각 수정하기 어려웠습니다. 따라서 기존 주소를 하나씩 변경하기보다, 주소 형식에 따라 변환해 웹에서도 사용할 수 있도록 처리하는 방식을 선택했습니다.
                  </p>
                  <p>
                    앱 Scheme은 대응하는 웹 경로로 변환하고, 기존 React 프로젝트를 가리키는 URL은 현재 웹에서 사용할 수 있는 경로로 변환했습니다.
                  </p>
                </div>
                <NavigationDiagram />
              </div>
            </li>

            <li className={styles['case-item']}>
              <div className={styles['case-content']}>
                <div className={styles['case-heading']}>
                  <p className={styles['case-number']}>02</p>
                  <h6>웹에서 이전 화면으로 돌아왔을 때 기존 데이터와 상태가 이어지지 않는 문제</h6>
                </div>
                <div className={styles['case-copy']}>
                  <p className={styles['copy-label']}>문제 상황</p>
                  <p>
                    기존 앱에서는 새로운 WebView 화면을 열어도 이전 화면이 네이티브 화면 스택에 남아 있어, 다시 돌아왔을 때 기존 화면의 데이터와 상태가 유지되었습니다.
                  </p>
                  <p>
                    이러한 구조에서는 이전 화면의 데이터와 상태를 별도로 유지할 필요가 없었지만, 웹에서는 화면을 이동한 뒤에도 필요한 데이터와 상태가 이어지도록 관리해야 했습니다.
                  </p>
                </div>
                <div className={styles['case-copy']}>
                  <p className={styles['copy-label']}>판단 + 해결</p>
                  <p>
                    웹에서는 이전 화면으로 돌아왔을 때 데이터가 다시 조회되거나 상태가 초기화되지 않도록, 스크롤 위치는 브라우저의 기본 복원 동작을 활용하고 서버 데이터는 TanStack Query의 캐시를 활용했으며, 필요한 상태는 URL에 유지했습니다.
                  </p>
                </div>
                <NavigationStateDiagram />
              </div>
            </li>

            <li className={styles['case-item']}>
              <div className={styles['case-content']}>
                <div className={styles['case-heading']}>
                  <p className={styles['case-number']}>03</p>
                  <h6>앱의 페이지 접근 제어를 웹에 그대로 적용할 수 없었던 문제</h6>
                </div>
                <div className={styles['case-copy']}>
                  <p className={styles['copy-label']}>문제 상황</p>
                  <p>
                    기존 앱은 로그인 후 서비스를 이용하는 구조였기 때문에, 개별 페이지에 로그인 확인이 없더라도 실제 사용 과정에서 문제가 잘 드러나지 않았습니다.
                  </p>
                  <p>
                    웹에서는 비회원도 서비스를 탐색할 수 있어, 단순히 정보를 조회하는 페이지는 로그인 없이 접근할 수 있도록 변경하는 한편, 로그인이 필요한 페이지에는 비회원의 접근을 제한해야 했습니다.
                  </p>
                  <p>
                    기존에는 필요한 페이지에서 각각 로그인 여부를 확인하고 있어 같은 처리가 반복되었고, 일부 페이지에서는 이 처리가 누락되는 경우도 있었습니다.
                  </p>
                </div>
                <div className={styles['case-copy']}>
                  <p className={styles['copy-label']}>판단 + 해결</p>
                  <p>
                    페이지마다 로그인 여부를 개별적으로 처리하기보다, 접근 제어를 경로 단위의 공통 정책으로 관리하는 것이 적합하다고 판단했습니다.
                  </p>
                  <p>
                    기존 Next.js Middleware에서 로그인이 필요한 경로의 접근을 제어하고, 하위·동적 경로에도 같은 정책을 적용할 수 있도록 경로 패턴 매칭을 추가했습니다.
                  </p>
                </div>
                <AuthPatternDiagram />
              </div>
            </li>
          </ol>
        </section>

        <IntegratedSearchCase />
        <InvitationCase />
        <HonsuCase />
        <SharedImprovements />

      </div>
    </section>
  );
}

function WeddingbookHeader() {
  const { isDesktop } = useWindowSize();
  const [isProjectImagesModalOpen, setIsProjectImagesModalOpen] = useState(false);
  const images = [
    WeddingbookInvitationImage,
    WeddingbookWeddinghallImage,
    WeddingbookHomeImage,
    WeddingbookHonsuImage,
  ];

  return (
    <header className={styles['project-header']}>
      <div className={styles['info-box']}>
        <h4 className={styles['title']}>웨딩북</h4>
        <p className={styles['description']}>결혼 준비 서비스를 제공하는 플랫폼</p>
        <p className={styles['skills']}>
          Next.js, React, TypeScript, TanStack Query, Zustand, SCSS, CSS Modules
        </p>
        <a className={styles['project-link']} href="https://www.weddingbook.com" target="_blank" rel="noreferrer">
          https://www.weddingbook.com
        </a>
      </div>

      <div className={styles['project-images']}>
        <button
          className={styles['image-button']}
          type="button"
          onClick={() => setIsProjectImagesModalOpen(true)}
        >
          <img className={styles['image']} src={images[0]} alt="프로젝트 서비스 화면" />
        </button>

        {isProjectImagesModalOpen === true && (
          <ProjectImagesModal
            isDesktop={isDesktop}
            isOpen={isProjectImagesModalOpen}
            images={images}
            onClose={() => setIsProjectImagesModalOpen(false)}
          />
        )}
      </div>
    </header>
  );
}

function IntegratedSearchCase() {
  return (
    <section className={`${styles['case-section']} ${styles['large-case']}`}>
      <header className={styles['case-header']}>
        <p className={styles['case-label']}>01 통합검색</p>
        <div>
          <h5 className={styles['case-title']}>분리된 검색 결과를 하나의 화면에서 제공</h5>
        </div>
      </header>

      <div className={styles['large-case-content']}>
        <div className={styles['case-copy']}>
          <p className={styles['copy-label']}>문제 상황</p>
          <p>
            기존 검색은 웨딩홀·업체·스토어가 분리되어 있었지만, 새로운 통합검색 화면에서는 세 영역의 검색 결과를 한 번에 보여줘야 했습니다.
          </p>
          <p>
            백엔드 개발자와 통합 API 추가를 논의했지만, 다른 작업이 우선되어 당장 개발하기 어려운 상황이었고 기존에는 각 영역별 검색 API만 제공되고 있었습니다.
          </p>
        </div>
        <div className={styles['case-copy']}>
          <p className={styles['copy-label']}>판단 + 해결</p>
          <p>
            전체 검색 결과가 없을 때와 특정 영역의 검색 결과만 없을 때 보여주는 UI가 달랐기 때문에, 세 영역의 결과를 함께 판단할 수 있어야 했습니다.
          </p>
          <p>
            이를 위해 Next.js Route Handler에서 웨딩홀·업체·스토어 검색 API를 병렬로 호출하고, 각 영역의 결과를 하나의 응답으로 조합했습니다.
          </p>
          <p>
            또한 일부 API 요청이 실패하더라도 정상적으로 응답한 영역의 검색 결과는 보여줄 수 있어야 했습니다.
          </p>
          <p>
            따라서 <code>Promise.allSettled</code>를 사용해 각 요청의 성공과 실패를 개별적으로 처리했습니다.
          </p>
        </div>
        <SearchDiagram />
        <div className={styles['media-placeholder']} aria-label="추후 실제 통합검색 결과 화면이 들어갈 자리">
          <span>SCREENSHOT PLACEHOLDER</span>
          <strong>실제 통합 검색 결과 화면</strong>
          <p>Wedding Hall · Partner · Store 결과가 함께 보이는 화면을 추후 추가</p>
        </div>
      </div>
    </section>
  );
}

function InvitationCase() {
  return (
    <section className={`${styles['case-section']} ${styles['large-case']}`}>
      <header className={styles['case-header']}>
        <p className={styles['case-label']}>02 모바일 청첩장</p>
        <div>
          <h5 className={styles['case-title']}>여러 영역의 정보를 입력하고 결과를 확인하며 청첩장을 완성하는 제작 기능 개발</h5>
          <p className={styles['case-description']}>
            여러 영역으로 구성된 모바일 청첩장의 작성·수정 화면을 개발했습니다. 서버에서 받은 데이터는 작성 화면에서 사용할 수 있는 형태로 변환하고, 사용자가 입력한 값은 검증과 정규화를 거쳐 저장할 수 있도록 구성했습니다.
          </p>
        </div>
      </header>

      <div className={styles['large-case-content']}>
        <div className={styles['invitation-image-layout']}>
          <img src={WeddingbookInvitationImage} alt="청첩장 기본 정보 편집 화면" />
          <p>기본 정보 편집 화면</p>
        </div>

        <div className={styles['subcase-list']}>
          <article className={styles['subcase']}>
            <div>
              <h6>업로드한 이미지를 바로 확인할 수 있도록 처리</h6>
            </div>
            <p>
              이미지 업로드 후 서버에서 URL을 반환받더라도 실제 이미지 처리가 완료되기까지 시간차가 있어, 반환받은 URL을 바로 사용하면 이미지가 표시되지 않는 경우가 있었습니다.
            </p>
            <p>
              사용자가 선택한 이미지로 <code>URL.createObjectURL()</code>을 이용해 화면 표시용 URL을 별도로 생성하고, 서버 저장에 사용하는 이미지 URL과 분리했습니다. 작성 화면과 실시간 미리보기에서는 화면 표시용 URL을 사용하고, 저장할 때는 화면에서만 필요한 값을 제외했습니다.
            </p>
          </article>
          <article className={styles['subcase']}>
            <div>
              <h6>작성 중 변경사항 보호</h6>
            </div>
            <p>
              작성 중인 내용을 실수로 잃지 않도록 최초 데이터와 현재 데이터를 실제 저장 형태로 정규화해 변경 여부를 판단했습니다. 변경사항이 있는 상태에서 뒤로 가기가 발생하면 저장 여부를 확인할 수 있도록 이탈 확인 모달을 연결했습니다.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function HonsuCase() {
  return (
    <section className={`${styles['case-section']} ${styles['medium-case']}`}>
      <header className={styles['case-header']}>
        <p className={styles['case-label']}>혼수 홈</p>
        <div>
          <h5 className={styles['case-title']}>코드에 고정된 화면 조합에서 block renderer 구조로</h5>
          <p className={styles['case-description']}>
            일부 block 데이터를 조회하던 기존 구조에서, 전달받은 block 목록의 type에 따라 화면을 조합하는 방식으로 전환했다.
          </p>
        </div>
      </header>
      <div className={styles['medium-case-content']}>
        <HonsuDiagram />
      </div>
    </section>
  );
}

function SharedImprovements() {
  return (
    <section className={`${styles['case-section']} ${styles['compact-case']}`}>
      <header className={styles['case-header']}>
        <p className={styles['case-label']}>04 공통 프론트엔드 개선</p>
        <div>
          <h5 className={styles['case-title']}>서비스에서 반복해서 사용하는 공통 요소의 구조와 사용 방식 개선</h5>
        </div>
      </header>
      <div className={styles['compact-list']}>
        <article>
          <h6>Toast / Snackbar</h6>
          <p>다양한 사용 방식이 추가되며 복잡해진 알림 구조를 역할에 맞게 분리</p>
          <p>
            기존 Toast는 서비스 운영 과정에서 다양한 알림 요구가 추가되면서, 짧게 노출되는 알림부터 사용자의 동작이 필요한 알림까지 하나의 구조에서 여러 옵션으로 처리하고 있었습니다.
          </p>
          <p>
            서로 다른 성격의 알림을 하나의 구조에서 계속 확장하기보다, Toast와 Snackbar의 역할에 맞게 UI와 호출 방식을 분리했습니다. 기존 사용처를 새로운 구조로 전환했으며, 이후 Next.js 웹에서도 기존 상태 관리 방식은 유지하면서 같은 Toast/Snackbar의 UI와 호출 구조를 적용했습니다.
          </p>
        </article>
        <article>
          <h6>Header</h6>
          <p>여러 방식으로 사용되던 공통 Header의 역할과 사용 방식 정리</p>
          <p>
            기존에는 AppHeader와 CustomHeader가 함께 사용되고 있었고, 화면마다 필요한 기능을 처리하면서 제목과 뒤로가기, 페이지별 액션, 서비스 상태와 관련된 여러 설정이 Header에 함께 존재했습니다.
          </p>
          <p>
            공통 컴포넌트는 사용하는 개발자가 필요한 기능과 사용 방법을 쉽게 파악할 수 있어야 한다고 생각했습니다. 기본 레이아웃을 담당하는 HeaderBase와 제목·뒤로가기 등 기본 동작을 담당하는 Header로 역할을 나누고, 기존 사용처를 새로운 구조로 단계적으로 전환했습니다.
          </p>
          <p>
            페이지별 액션까지 조합할 수 있도록 확장하는 작업도 진행했지만, 전체 Header 전환을 완료하기 전에 작업이 종료되었습니다.
          </p>
        </article>
        <article>
          <h6>Icon</h6>
          <p>아이콘의 종류와 표시 크기가 결합되어 있던 구조를 분리</p>
          <p>
            기존 Icon은 size 값에 따라 서로 다른 디렉터리의 SVG를 불러오는 구조여서, 호출하는 쪽에서 사용할 SVG의 위치까지 알아야 하는 경우가 있었습니다.
          </p>
          <p>
            아이콘의 종류와 표시 크기를 분리해 SVG는 하나의 경로에서 name으로 선택하고, size는 표시 크기만 담당하도록 변경했습니다. 색상도 별도로 지정할 수 있도록 정리했습니다.
          </p>
          <p>
            기존 사용처를 새로운 구조로 전환한 뒤 크기별 SVG 디렉터리와 기존 Icon 구현을 제거했으며, 이후 추가된 화면과 아이콘에서도 같은 구조가 사용되었습니다.
          </p>
        </article>
      </div>
    </section>
  );
}

function NavigationDiagram() {
  return (
    <div className={styles['navigation-flow']} aria-label="기존 주소 형식을 웹 경로로 변환하는 흐름">
      <div className={styles['navigation-inputs']}>
        <span>입력</span>
        <ul>
          <li>앱 Scheme</li>
          <li>WebView Scheme 안에 포함된 기존 URL</li>
          <li>기존 React 프로젝트 URL</li>
        </ul>
      </div>
      <span className={styles['diagram-arrow']} aria-hidden="true" />
      <div className={styles['navigation-transform']}>
        <span>변환</span>
        <strong>주소 형식에 따라 웹 경로로 변환</strong>
      </div>
      <span className={styles['diagram-arrow']} aria-hidden="true" />
      <div className={styles['navigation-result']}>
        <span>결과</span>
        <strong>현재 웹 경로</strong>
      </div>
    </div>
  );
}

function NavigationStateDiagram() {
  return (
    <div className={styles['state-comparison']} aria-label="앱과 웹의 이전 화면 데이터와 상태 유지 방식">
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

function AuthPatternDiagram() {
  return (
    <div
      className={styles['auth-flow']}
      aria-label="페이지별 로그인 확인이 경로 단위의 공통 접근 제어로 변경된 구조"
    >
      <div className={styles['auth-step']}>
        <span>기존</span>
        <ul>
          <li>페이지 A → 페이지 내부에서 로그인 확인</li>
          <li>페이지 B → 페이지 내부에서 로그인 확인</li>
          <li>페이지 C → 로그인 확인 누락</li>
        </ul>
      </div>
      <span className={styles['auth-arrow']} aria-hidden="true" />
      <div className={styles['auth-condition']}>
        <span>변경</span>
        <ul>
          <li>요청 경로</li>
          <li>기존 Next.js Middleware</li>
          <li>경로 기반 접근 제어</li>
          <li>각 페이지로 연결</li>
        </ul>
      </div>
      <span className={styles['auth-arrow']} aria-hidden="true" />
      <div className={styles['auth-step']}>
        <span>하위·동적 경로</span>
        <strong>경로 패턴 매칭</strong>
      </div>
    </div>
  );
}

function SearchDiagram() {
  return (
    <div className={styles['search-diagram']} aria-label="세 검색 domain API를 병렬 호출해 검색 UI에 결과를 표시하는 흐름">
      <div className={styles['search-domains']}>
        <span>분리된 검색 영역</span>
        <ul>
          <li>Wedding Hall API</li>
          <li>Partner API</li>
          <li>Store API</li>
        </ul>
      </div>
      <span className={styles['diagram-arrow']} aria-hidden="true" />
      <div className={styles['diagram-emphasis']}>
        <span>Next.js Route Handler</span>
        <strong>Promise.allSettled</strong>
        <p>각 domain 요청을 병렬로 처리</p>
      </div>
      <span className={styles['diagram-arrow']} aria-hidden="true" />
      <div className={styles['search-results']}>
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

function HonsuDiagram() {
  return (
    <div className={styles['honsu-flow']} aria-label="혼수 홈의 Before와 After 구조">
      <div className={styles['honsu-before']}>
        <span>Before</span>
        <strong>일부 block 데이터 조회</strong>
        <p>+ HonsuHomeContent JSX에 section 구성과 순서가 직접 고정</p>
      </div>
      <span className={styles['diagram-arrow']} aria-hidden="true" />
      <div className={styles['honsu-after']}>
        <span>After</span>
        <strong>/v4/honsu-home/blocks</strong>
        <p>id · type · config block 목록 → HonsuParser → type별 renderer → 화면 렌더링</p>
      </div>
    </div>
  );
}
