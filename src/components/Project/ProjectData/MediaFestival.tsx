import { Box } from '@mui/material';
import theme from '@/style/theme';

import ProjectDataContainer from './shared/ProjectDataContainer';
import ProjectText from './shared/ProjectText';

export default function MediaFestival() {
  return (
    <ProjectDataContainer
      title='2022 1인 미디어 대전'
      description={[
        '- 행사 소개 및 참가 신청 웹사이트',
      ]}
      skills={'Html, Css, JavaScript'}
    >
      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          CSS 미디어쿼리를 이용하여 반응형 웹 구현
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          Quill 라이브러리를 이용한 게시판 구현
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          Jquery - ajax를 이용하여 서버 통신
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          Jquery - load 메소드를 이용하여 공통된 Header, Footer 처리
        </ProjectText>
      </Box>

      <Box>
        <ProjectText type='dot'>
          <Box
            component={'a'}
            target='blank'
            href='https://www.koreacreatorfesta.co.kr'
            sx={{
              color: theme.color.primary
            }}
          >
            https://www.koreacreatorfesta.co.kr
          </Box>
        </ProjectText>
        <ProjectText type='indent'>
          현재 2023 버전이지만 페이지 구성 및 기능은 동일한걸로 보임
        </ProjectText>
      </Box>
    </ProjectDataContainer>
  );
}