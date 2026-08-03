import { Box } from '@mui/material';
import theme from '@/style/theme';

import ProjectDataContainer from './shared/ProjectDataContainer';
import ProjectText from './shared/ProjectText';

export default function WeddingbookService() {
  return (
    <ProjectDataContainer
      title='웨딩북 앱·웹 서비스'
      description={[
        '- 결혼 준비 플랫폼 웨딩북의 앱 WebView 및 웹 프론트엔드 개발·운영',
        '- React 기반 웹뷰 서비스의 주요 기능을 Next.js 기반 웹으로 점진 이전하고, 웹·앱 공통 서비스 운영',
      ]}
      images={[]}
      skills={'Next.js, React, TypeScript, TanStack Query, Zustand, SCSS, CSS Modules, Axios'}
    >
      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          React·SCSS 기반 웹뷰 서비스를 Next.js·SCSS·CSS Modules 기반 웹으로 점진 마이그레이션
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          TanStack Query 도입 및 API 조회·서버 상태 관리 구조 개선
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          사용자 정보 통합 및 미들웨어 기반 인증 처리 구조 개선
        </ProjectText>
        <ProjectText type='indent'>
          - 공개·인증 경로 분리 및 로그인 상태에 따른 리다이렉트 처리
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          Toast, Modal, Header, Icon 등 공용 UI 컴포넌트 개편 및 서비스 전반 적용
        </ProjectText>
        <ProjectText type='indent'>
          - Toast 노출 대기열 관리, SVG 동적 로딩 Icon, DefaultModal 추가
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          무한 스크롤·슬라이드 컴포넌트 개선 및 공통 UI 기능 고도화
        </ProjectText>
        <ProjectText type='indent'>
          - IntersectionObserver 기반 무한 스크롤 공통 컴포넌트 적용
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          앱 스킴·딥링크·뒤로가기 처리를 공통 라우팅 훅으로 통합해 WebView와 브라우저 전환 경험 개선
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          청첩장 작성·실시간 미리보기·RSVP·방명록·QR 다운로드 등 청첩장 라이프사이클 기능 개발
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          방문예약·즉시예약·즉시계약·결제 흐름과 예약·계약 내역 및 상세 기능 개발
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          리뷰 작성·상세·전체보기, 하객 리뷰, 이미지 업로드 및 문의 채팅 기능 개발
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          플래너 탐색·포트폴리오·상담 기능 개발
        </ProjectText>
      </Box>

      <Box>
        <ProjectText type='dot'>
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
        </ProjectText>
      </Box>
    </ProjectDataContainer>
  );
}
