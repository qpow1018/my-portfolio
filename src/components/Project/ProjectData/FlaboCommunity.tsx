import { Box } from '@mui/material';

import ProjectDataContainer from './shared/ProjectDataContainer';
import ProjectText from './shared/ProjectText';

import FlaboCommunityImage1 from '@/images/flaboCommunity/flaboCommunity_1.webp';
import FlaboCommunityImage2 from '@/images/flaboCommunity/flaboCommunity_2.webp';
import FlaboCommunityImage3 from '@/images/flaboCommunity/flaboCommunity_3.webp';
import FlaboCommunityImage4 from '@/images/flaboCommunity/flaboCommunity_4.webp';
import FlaboCommunityImage5 from '@/images/flaboCommunity/flaboCommunity_5.webp';
import FlaboCommunityImage6 from '@/images/flaboCommunity/flaboCommunity_6.webp';
import FlaboCommunityImage7 from '@/images/flaboCommunity/flaboCommunity_7.webp';
import FlaboCommunityImage8 from '@/images/flaboCommunity/flaboCommunity_8.webp';
import FlaboCommunityImage9 from '@/images/flaboCommunity/flaboCommunity_9.webp';
import FlaboCommunityImage10 from '@/images/flaboCommunity/flaboCommunity_10.webp';

export default function FlaboCommunity() {
  return (
    <ProjectDataContainer
      title='자사 커뮤니티 서비스'
      description={[
        '- 유머, 영화, 게임 등 다양한 주제를 다루는 커뮤니티 서비스 개발',
        '- 디아블로2 거래소 서비스 개발: 상점 생성, 아이템 등록·검색, 채팅',
      ]}
      images={[
        FlaboCommunityImage1,
        FlaboCommunityImage2,
        FlaboCommunityImage3,
        FlaboCommunityImage4,
        FlaboCommunityImage5,
        FlaboCommunityImage6,
        FlaboCommunityImage7,
        FlaboCommunityImage8,
        FlaboCommunityImage9,
        FlaboCommunityImage10,
      ]}
      skills={'React, TypeScript, Redux, Axios, SCSS'}
    >
      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          게시판 기능 개발
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
          디아블로2 거래소 기능 개발
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
          고차 컴포넌트를 활용한 공통 사용자 권한 확인 기능 구현
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          Redux를 사용하여 로그인 유저 정보, 새 알림 여부, 스낵바 메시지 등 공통 상태관리
        </ProjectText>
      </Box>
    </ProjectDataContainer>
  );
}
