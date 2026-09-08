import FeatureDevelopment from "./FeatureDevelopment";
import WebExpansion from "./WebExpansion";
import WeddingbookHeader from "./WeddingbookHeader";
import styles from "./Weddingbook.module.scss";

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

export function NavigationDiagram() {
  return (
    <div className={styles["legacy-diagram"]} aria-label="기존 주소 형식을 웹 경로로 변환하는 흐름">
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
    <div className={styles["legacy-diagram"]} aria-label="앱과 웹의 이전 화면 데이터와 상태 유지 방식">
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
    <div className={styles["legacy-diagram"]} aria-label="페이지별 로그인 확인이 경로 단위의 공통 접근 제어로 변경된 구조">
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
    <div className={styles["legacy-diagram"]} aria-label="세 검색 domain API를 병렬 호출해 검색 UI에 결과를 표시하는 흐름">
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
    <div className={styles["legacy-diagram"]} aria-label="홈 화면 구성과 콘텐츠 관리 방식의 변경">
      <div>
        <span>Before</span>
        <strong>화면 구성과 많은 콘텐츠가 프론트엔드 코드에 직접 정의</strong>
      </div>
      <div>
        <span>After</span>
        <strong>서버에서 전달받은 구성에 따라 타입별 컴포넌트를 조합해 화면 렌더링</strong>
      </div>
    </div>
  );
}
