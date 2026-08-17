import { Box } from '@mui/material';
import theme from '@/style/theme';

import CurrentProjectCard from './CurrentProjectCard';
import CurrentProjectText from './CurrentProjectText';

import WeddingbookHomeImage from '@/images/weddingbook/weddingbook_home.png';
import WeddingbookHonsuImage from '@/images/weddingbook/weddingbook_honsu.png';
import WeddingbookInvitationImage from '@/images/weddingbook/weddingbook_invitation.png';
import WeddingbookWeddinghallImage from '@/images/weddingbook/weddingbook_weddinghall.png';

export default function WeddingbookService() {
  return (
    <CurrentProjectCard
      title='웨딩북 앱·웹 서비스'
      description={[
        '- 결혼 준비 플랫폼 웨딩북의 React 기반 앱 WebView 및 Next.js 웹 프론트엔드 개발·운영',
      ]}
      images={[
        WeddingbookInvitationImage,
        WeddingbookWeddinghallImage,
        WeddingbookHomeImage,
        WeddingbookHonsuImage,
      ]}
      skills={'Next.js, React, TypeScript, TanStack Query, Zustand, SCSS, CSS Modules, Axios'}
    >
      <Box sx={{ marginBottom: '8px' }}>
        <CurrentProjectText type='dot'>
          React 기반 앱 WebView의 주요 기능을 Next.js 웹으로 점진 마이그레이션해, 이중으로 개발·운영되던 프론트엔드 구조를 단일 프로젝트로 통합
        </CurrentProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <CurrentProjectText type='dot'>
          TanStack Query 도입으로 목록 조회·탐색 경험 개선
        </CurrentProjectText>
        <CurrentProjectText type='indent'>
          - 기존 WebView 스택이 보존하던 목록 데이터·스크롤 위치를 Query Cache와 Next.js 스크롤 복원으로 웹 환경에서도 유지
        </CurrentProjectText>
        <CurrentProjectText type='indent'>
          - 업체 목록·리뷰 등 무한 스크롤이 필요한 화면에 무한 쿼리를 적용해 누적 목록과 다음 페이지 요청 상태 관리
        </CurrentProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <CurrentProjectText type='dot'>
          게스트 유입 웹 전환에 맞춘 인증·접근 제어 구조 개선
        </CurrentProjectText>
        <CurrentProjectText type='indent'>
          - 로그인 전제 WebView를 게스트 유입 웹으로 확장하면서, 청첩장 관리·예약·마이페이지 등 개인화 기능의 개별 로그인 확인을 미들웨어 인증 경로 정책으로 통합
        </CurrentProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <CurrentProjectText type='dot'>공용 인터랙션·목록 UI 기반 정비</CurrentProjectText>
        <CurrentProjectText type='indent'>
          - 전역 Toast를 상태·호출 유틸·컨테이너로 공통화해 화면별 구현 없이 동일한 방식으로 알림을 노출하고, 동시 노출 수와 대기열 관리
        </CurrentProjectText>
        <CurrentProjectText type='indent'>
          - 정형 안내용 Modal과 별도로 QR·캘린더·폼처럼 화면별 콘텐츠가 다른 경우를 위한 DefaultModal을 추가해 오버레이 닫기 정책과 배경 스크롤 잠금·복원 처리
        </CurrentProjectText>
        <CurrentProjectText type='indent'>
          - 크기·용도별로 분산된 아이콘 자산을 단일 SVG 컴포넌트 체계로 통합하고, 이름·크기·색상 중심의 공통 Icon API로 사용처 전환
        </CurrentProjectText>
        <CurrentProjectText type='indent'>
          - IntersectionObserver 기반 무한 스크롤 컴포넌트로 화면 끝 감지·추가 요청·로딩 표시를 공통화해 목록·검색·리뷰·RSVP에서 재사용
        </CurrentProjectText>
      </Box>

      <Box>
        <CurrentProjectText type='dot'>
          <Box
            component={'a'}
            target='blank'
            href='https://www.weddingbook.com'
            sx={{
              color: theme.color.primary,
            }}
          >
            https://www.weddingbook.com
          </Box>
        </CurrentProjectText>
      </Box>
    </CurrentProjectCard>
  );
}
