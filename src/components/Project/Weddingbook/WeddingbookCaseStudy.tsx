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
        <header className={styles['case-header']}>
          <p className={styles['case-label']}>주요 내용</p>
          <div>
            <h5 className={styles['case-title']}>앱 중심 서비스의 웹 확장</h5>
            <p className={styles['case-description']}>
              앱 외부의 유입 경로를 넓히기 위해, React 기반 WebView 중심으로 제공하던 서비스를 Next.js 기반 웹까지 단계적으로 확장했습니다.
            </p>
          </div>
        </header>

        <ol className={styles['case-list']}>
          <li className={styles['case-item']}>
            <p className={styles['case-number']}>01</p>
            <div className={styles['case-content']}>
              <h6>앱에서 사용하던 주소 형식을 웹에서 그대로 사용할 수 없었던 문제</h6>
              <p>
                기존 앱에서는 화면 이동에 앱 Scheme과 URL을 함께 사용하고 있었고, WebView로 이동하는 URL은 기존 React 프로젝트의 도메인을 기준으로 하고 있었습니다.
              </p>
              <p>
                서비스를 Next.js 웹으로 확장하면서 이러한 주소 형식을 그대로 사용할 수 없었습니다. 앱 Scheme은 일반 웹에서 같은 방식으로 처리할 수 없었고, 기존 도메인이 포함된 URL은 새로운 웹이 아닌 이전 React 프로젝트로 이동하는 문제가 있었습니다.
              </p>
              <p>
                기존 주소가 서비스 전반에 광범위하게 사용되고 있었고, 사용처가 한곳에서 관리되는 구조가 아니어서 모든 주소를 파악하고 각각 수정하기 어려웠습니다. 따라서 기존 주소를 하나씩 변경하기보다, 주소 형식에 따라 변환해 웹에서도 사용할 수 있도록 처리하는 방식을 선택했습니다.
              </p>
              <p>
                앱 Scheme은 대응하는 웹 경로로 변환하고, 기존 React 프로젝트를 가리키는 URL은 현재 웹에서 사용할 수 있는 경로로 변환했습니다.
              </p>
              <NavigationDiagram />
            </div>
          </li>

          <li className={styles['case-item']}>
            <p className={styles['case-number']}>02</p>
            <div className={styles['case-content']}>
              <h6>웹에서 이전 화면으로 돌아왔을 때 기존 데이터와 상태가 이어지지 않는 문제</h6>
              <p>
                기존 앱에서는 새로운 WebView 화면을 열어도 이전 화면이 네이티브 화면 스택에 남아 있어, 다시 돌아왔을 때 기존 화면의 데이터와 상태가 유지되었습니다.
              </p>
              <p>
                이러한 구조에서는 이전 화면의 데이터와 상태를 별도로 유지할 필요가 없었지만, 웹에서는 화면을 이동한 뒤에도 필요한 데이터와 상태가 이어지도록 관리해야 했습니다.
              </p>
              <p>
                웹에서는 이전 화면으로 돌아왔을 때 데이터가 다시 조회되거나 상태가 초기화되지 않도록, 스크롤 위치는 브라우저의 기본 복원 동작을 활용하고 서버 데이터는 TanStack Query의 캐시를 활용했으며, 필요한 상태는 URL에 유지했습니다.
              </p>
              <NavigationStateDiagram />
            </div>
          </li>

          <li className={styles['case-item']}>
            <p className={styles['case-number']}>03</p>
            <div className={styles['case-content']}>
              <h6>Web 확장으로 로그인이 필요한 경로가 다양해진 문제</h6>
              <p>
                Middleware는 기존에 존재했다. 동적 경로와 하위 경로까지 판단할 필요가 있어,
                인증 대상 경로 판단을 path-to-regexp 패턴 매칭으로 확장했다.
              </p>
              <AuthPatternDiagram />
            </div>
          </li>
        </ol>

        <IntegratedSearchCase />
        <InvitationCase />
        <HonsuCase />
        <SharedImprovements />

        <a className={styles['project-link']} href="https://www.weddingbook.com" target="_blank" rel="noreferrer">
          https://www.weddingbook.com
        </a>
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
        <p className={styles['label']}>CURRENT PROJECT</p>
        <h4 className={styles['title']}>웨딩북 앱·웹 서비스</h4>
        <p className={styles['description']}>
          {`결혼 준비 플랫폼 웨딩북의 React 기반 앱 WebView\n및 Next.js 웹 프론트엔드 개발·운영`}
        </p>
        <p className={styles['skills']}>
          Next.js, React, TypeScript, TanStack Query, Zustand, SCSS, CSS Modules, Axios
        </p>
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
        <p className={styles['case-label']}>통합검색</p>
        <div>
          <h5 className={styles['case-title']}>분리된 검색 결과를 하나의 화면에서 다루기</h5>
          <p className={styles['case-description']}>
            통합 backend API가 없는 상태에서 세 검색 domain의 결과와 상태를 하나의 검색 UI에 연결했다.
          </p>
        </div>
      </header>

      <div className={styles['large-case-content']}>
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
        <p className={styles['case-label']}>청첩장 편집</p>
        <div>
          <h5 className={styles['case-title']}>편집 데이터가 저장되기까지의 흐름</h5>
          <p className={styles['case-description']}>
            서버 응답을 편집 가능한 데이터로 변환하고, 사용자의 편집 내용을 검증·정리해 Preview와 Save 요청으로 연결했다.
          </p>
        </div>
      </header>

      <div className={styles['large-case-content']}>
        <InvitationLifecycleDiagram />
        <div className={styles['invitation-image-layout']}>
          <img src={WeddingbookInvitationImage} alt="청첩장 기본 정보 편집 화면" />
          <p>기본 정보 편집 화면</p>
        </div>

        <div className={styles['subcase-list']}>
          <article className={styles['subcase']}>
            <div>
              <p className={styles['subcase-label']}>이미지 편집</p>
              <h6>이미지 선택부터 저장 가능한 데이터까지</h6>
            </div>
            <ImageEditingDiagram />
            <p className={styles['media-note']}>Crop modal 화면은 추후 실제 screenshot을 추가할 수 있음</p>
          </article>
          <article className={styles['subcase']}>
            <div>
              <p className={styles['subcase-label']}>저장하지 않고 나가기</p>
              <h6>이전 데이터와 현재 편집 데이터를 비교해 변경 여부를 판단</h6>
            </div>
            <ExitGuardDiagram />
            <p className={styles['media-note']}>Exit modal 화면은 추후 실제 screenshot을 추가할 수 있음</p>
          </article>
        </div>

        <aside className={styles['supporting-note']}>
          <p>Supporting implementation</p>
          <strong>useOverlayScrollLock</strong>
          <span>nested overlay가 겹칠 때 lockCount를 기준으로 scroll lock 상태를 관리</span>
        </aside>
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
        <p className={styles['case-label']}>공통 프론트엔드 개선</p>
        <div>
          <h5 className={styles['case-title']}>화면 전반에서 사용되는 표현과 구조 정리</h5>
        </div>
      </header>
      <div className={styles['compact-list']}>
        <article>
          <h6>Toast</h6>
          <p>공통 구조를 팀 사용 방식에 맞춰 container, UI, utility 역할로 다시 나누어 조정.</p>
        </article>
        <article>
          <h6>Header</h6>
          <p>기존 AppHeader와 CustomHeader의 확장 한계를 확인하고, 조합 가능한 구조를 검토·적용.</p>
        </article>
        <article>
          <h6>Icon</h6>
          <p>새 Icon interface를 도입하고 여러 사용처의 사용 방식을 옮기는 작업을 진행.</p>
        </article>
      </div>
    </section>
  );
}

function NavigationDiagram() {
  return (
    <ul className={styles['navigation-structure']} aria-label="주소 형식 변환 구조">
      <li>앱 Scheme → 대응하는 웹 경로</li>
      <li>WebView Scheme 안에 포함된 기존 URL → 현재 웹 경로</li>
      <li>기존 React 프로젝트 URL → 현재 웹 경로</li>
    </ul>
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
      aria-label="기존의 단순 경로 판단이 Web 확장에 필요한 동적 경로와 하위 경로 판단을 거쳐 pattern 기반 판단으로 확장되는 흐름"
    >
      <div className={styles['auth-step']}>
        <span>기존</span>
        <strong>단순 경로 판단</strong>
      </div>
      <span className={styles['auth-arrow']} aria-hidden="true" />
      <div className={styles['auth-condition']}>
        <span>Web 확장</span>
        <strong>동적 경로와 하위 경로까지 판단 필요</strong>
      </div>
      <span className={styles['auth-arrow']} aria-hidden="true" />
      <div className={styles['auth-step']}>
        <span>변경</span>
        <strong>pattern 기반 경로 판단</strong>
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

function InvitationLifecycleDiagram() {
  return (
    <div className={styles['invitation-flow']} aria-label="청첩장 편집 데이터 흐름">
      <div><span>Server Response</span><strong>초기 데이터</strong></div>
      <span className={styles['diagram-arrow']} aria-hidden="true" />
      <div><span>UI Data</span><strong>편집 가능한 데이터</strong></div>
      <span className={styles['diagram-arrow']} aria-hidden="true" />
      <div><span>User Edit</span><strong>현재 편집 데이터</strong></div>
      <span className={styles['diagram-arrow']} aria-hidden="true" />
      <div><span>Request Data</span><strong>validation · normalization</strong></div>
      <span className={styles['diagram-arrow']} aria-hidden="true" />
      <div><span>Preview / Save</span><strong>요청으로 연결</strong></div>
    </div>
  );
}

function ImageEditingDiagram() {
  return (
    <ol className={styles['inline-flow']} aria-label="청첩장 이미지 편집 흐름">
      <li>이미지 선택</li>
      <li>validation</li>
      <li>preview / crop</li>
      <li>순서 변경 / 삭제</li>
      <li>request data</li>
    </ol>
  );
}

function ExitGuardDiagram() {
  return (
    <div className={styles['exit-flow']} aria-label="청첩장 저장하지 않고 나가기 흐름">
      <div><span>이전 데이터</span><strong>현재 편집 데이터</strong></div>
      <span className={styles['diagram-arrow']} aria-hidden="true" />
      <div><span>변경 여부 판단</span><strong>나가기 확인</strong></div>
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
