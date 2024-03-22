import { Box } from '@mui/material';
import theme from '@/style/theme';

import ProjectDataContainer from './ProjectDataContainer';
import ProjectText from './ProjectText';

export default function DiscoveryMall() {
  return (
    <ProjectDataContainer
      title='디스커버리 공식 온라인몰'
      description={[
        '- 의류 브랜드 \'디스커버리\'의 공식 온라인 쇼핑몰 리뉴얼 프로젝트',
      ]}
      skills={'Next.js, TypeScript, MUI, Axios'}
    >
      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          고객센터 개발 - 공지사항, 자주묻는 질문, 매장 안내, 매장교환 서비스 등
        </ProjectText>
        <ProjectText type='indent'>
          - URL 파라미터에 따라 필요한 UI 구성 및 유효하지 않은 파라미터일 경우 기본값 설정
        </ProjectText>
        <ProjectText type='indent'>
          - SessionStorage 활용하여 중복되는 게시물 조회수 증가 요청을 최소화
        </ProjectText>
        <ProjectText type='indent'>
          - Geolocation API를 사용하여 유저의 위치정보에 따른 거리순/이름순 목록 요청
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          디자인 명세서와 다르게 개발된 부분 수정
        </ProjectText>
        <ProjectText type='indent'>
          - 마이페이지, 트렌드 페이지, 프로모션 페이지 등
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          html파일을 iframe으로 보여주는 프로모션 이벤트 개발 및 수정
        </ProjectText>
        <ProjectText type='indent'>
          - html, css, javascript 사용
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          기타 버그 수정
        </ProjectText>
      </Box>

      <Box>
        <ProjectText type='dot'>
          <Box
            component={'a'}
            target='blank'
            href='https://www.discovery-expedition.com'
            sx={{
              color: theme.color.primary,
            }}
          >
            https://www.discovery-expedition.com
          </Box>
        </ProjectText>
      </Box>
    </ProjectDataContainer>
  );
}
