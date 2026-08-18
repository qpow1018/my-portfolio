import CurrentProjectDetail from "./CurrentProjectDetail";

import WeddingbookHomeImage from "@/images/weddingbook/weddingbook_home.png";
import WeddingbookHonsuImage from "@/images/weddingbook/weddingbook_honsu.png";
import WeddingbookInvitationImage from "@/images/weddingbook/weddingbook_invitation.png";
import WeddingbookWeddinghallImage from "@/images/weddingbook/weddingbook_weddinghall.png";

export default function WeddingbookService() {
  return (
    <CurrentProjectDetail
      label="CURRENT PROJECT"
      title="웨딩북 앱·웹 서비스"
      description={`결혼 준비 플랫폼 웨딩북의 React 기반 앱 WebView\n및 Next.js 웹 프론트엔드 개발·운영`}
      skills="Next.js, React, TypeScript, TanStack Query, Zustand, SCSS, CSS Modules, Axios"
      images={[
        WeddingbookInvitationImage,
        WeddingbookWeddinghallImage,
        WeddingbookHomeImage,
        WeddingbookHonsuImage,
      ]}
      highlights={[
        {
          title: "React WebView에서 Next.js로 웹 프론트엔드 마이그레이션",
          details: [
            "주요 기능을 점진적으로 이전해, 이중으로 개발·운영되던 앱 WebView와 웹 프론트엔드 구조를 단일 프로젝트로 통합",
          ],
        },
        {
          title: "TanStack Query 기반 웹 목록 탐색 경험 구현",
          details: [
            "WebView 스택 전환에서는 별도 관리가 필요 없던 목록 데이터·스크롤 위치를, 웹 전환 후 Query Cache로 직접 유지",
            "업체 목록·리뷰 등 무한 스크롤이 필요한 화면에 무한 쿼리를 적용해 누적 목록과 다음 페이지 요청 상태 관리",
          ],
        },
        {
          title: "웹 전환에 맞춘 인증·접근 제어 구조 개선",
          details: [
            "로그인 전제 WebView를 비로그인 사용자도 진입하는 웹 환경으로 확장하면서, 청첩장 관리·예약·마이페이지 등 개인화 기능의 개별 로그인 확인을 미들웨어 인증 경로 정책으로 통합",
          ],
        },
        {
          title: "공용 UI 컴포넌트와 디자인 시스템 기반 정비",
          details: [
            "전역 Toast 컴포넌트를 구현하고, 호출 유틸과 대기열 관리로 화면 전반에서 일관된 알림 노출 방식 제공",
            "크기별 폴더와 아이콘별 컴포넌트로 나뉘어, 사용 시마다 아이콘 위치와 규격을 확인해야 했던 구조를 이름·크기·색상을 지정하는 단일 Icon 컴포넌트로 통합",
            "목록·검색·리뷰 화면에서 반복되는 화면 끝 감지·추가 요청·로딩 표시를 IntersectionObserver 기반 공용 무한 스크롤 컴포넌트로 구현",
          ],
        },
      ]}
      url="https://www.weddingbook.com"
    />
  );
}
