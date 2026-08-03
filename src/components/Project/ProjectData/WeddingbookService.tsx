import { Box } from '@mui/material';
import theme from '@/style/theme';

import ProjectDataContainer from './shared/ProjectDataContainer';
import ProjectText from './shared/ProjectText';

export default function WeddingbookService() {
  return (
    <ProjectDataContainer
      title='웨딩북 앱·웹 서비스'
      description={[
        '- 결혼 준비 플랫폼 웨딩북의 React 기반 앱 WebView 및 Next.js 웹 프론트엔드 개발·운영',
      ]}
      images={[]}
      skills={'Next.js, React, TypeScript, TanStack Query, Zustand, SCSS, CSS Modules, Axios'}
    >
      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          React 기반 앱 WebView의 주요 기능을 Next.js 기반 웹으로 점진 마이그레이션하고, 웹 서비스를 앱 WebView에도 이식
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          TanStack Query 기반 API 조회·서버 상태 관리 구조 개선
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          사용자 정보 상태 관리와 미들웨어 기반 인증·접근 제어 구조 개선
        </ProjectText>
        <ProjectText type='indent'>
          - 공개·인증 경로 분리 및 로그인 상태에 따른 리다이렉트 처리
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>공용 UI 컴포넌트 및 무한 스크롤 기능 개선</ProjectText>
        <ProjectText type='indent'>
          - Toast 노출 대기열 관리와 재사용 가능한 공통 모달 컴포넌트 추가
        </ProjectText>
        <ProjectText type='indent'>- SVG 동적 로딩 방식의 Icon 컴포넌트 개편</ProjectText>
        <ProjectText type='indent'>
          - React 기반 앱 WebView에 IntersectionObserver 기반 무한 스크롤 공통 컴포넌트 개발
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>앱·웹 실행 환경을 고려한 공통 라우팅 처리 개선</ProjectText>
        <ProjectText type='indent'>
          - 기존 앱 스킴·WebView URL을 Next.js 내부 경로로 정규화하고 외부 링크 분기 처리
        </ProjectText>
        <ProjectText type='indent'>
          - 퍼널 경계와 WebView 이동 깊이를 관리해 뒤로가기·종료 동작 일원화
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>청첩장·예약·리뷰·플래너 기능 개발</ProjectText>
        <ProjectText type='indent'>
          - 청첩장 작성·실시간 미리보기·RSVP·방명록·QR 다운로드 기능 개발
        </ProjectText>
        <ProjectText type='indent'>
          - 방문예약·즉시예약·즉시계약·결제와 예약·계약 내역·상세 기능 개발
        </ProjectText>
        <ProjectText type='indent'>
          - 리뷰 작성·상세·전체보기, 이미지 업로드 및 문의 채팅 기능 개발
        </ProjectText>
        <ProjectText type='indent'>
          - 플래너 탐색·포트폴리오 확인 및 상담 신청 기능 개발
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
