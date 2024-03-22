import { Box } from '@mui/material';
import theme from '@/style/theme';

import ProjectDataContainer from './shared/ProjectDataContainer';
import ProjectText from './shared/ProjectText';

export default function FlaboCommunity() {
  return (
    <ProjectDataContainer
      title='플라보 - 커뮤니티 서비스'
      description={[
        '- 여러가지 주제를 다루는 커뮤니티 서비스 (유머, 영화, 게임 등)',
        '- 게임 \'디아블로2\' 거래소 서비스 (상점 생성, 아이템 등록, 아이템 검색, 채팅방)',
      ]}
      skills={'React, TypeScript, Scss, Axios, Redux'}
    >
      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText>
          인플루언서 광고 플랫폼 '플라보' 프로젝트가 중단된 후 해당 네이밍을 사용한 커뮤니티 서비스 개발
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          게시판 개발
        </ProjectText>
        <ProjectText type='indent'>
          - IntersectionObserver API를 사용하여 무한 스크롤 게시글 목록 개발
        </ProjectText>
        <ProjectText type='indent'>
          - 게시글 작성 시 텍스트, 이미지, 동영상, 유튜브 링크를 추가 할 수 있는 에디터 개발
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          '디아블로2' 거래소 개발
        </ProjectText>
        <ProjectText type='indent'>
          - 원하는 아이템 검색을 위한 검색 필터 개발
        </ProjectText>
        <ProjectText type='indent'>
          - WebSocket API를 이용한 거래 채팅방 개발
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          고차 컴포넌트를 사용하여 공통 유저 권한 확인 컴포넌트 개발
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          Redux를 사용하여 로그인 유저 정보, 새 알림 여부, 스낵바 메시지 등 공통 상태관리
        </ProjectText>
      </Box>

      <Box>
        <ProjectText
          type='dot'
          sx={{
            color: theme.color.secondary
          }}
        >
          중단된 서비스
        </ProjectText>
      </Box>
    </ProjectDataContainer>
  );
}