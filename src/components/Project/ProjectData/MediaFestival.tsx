import { Box } from '@mui/material';
import theme from '@/style/theme';

import ProjectDataContainer from './shared/ProjectDataContainer';
import ProjectText from './shared/ProjectText';

import MediaFestivalImage1 from '@/images/mediaFestival/mediaFestival_1.jpg';
import MediaFestivalImage2 from '@/images/mediaFestival/mediaFestival_2.jpg';

export default function MediaFestival() {
  return (
    <ProjectDataContainer
      title='2022 1인 미디어 대전'
      description={[
        '- 행사 소개 및 참가 신청 웹사이트 개발',
      ]}
      images={[
        MediaFestivalImage1,
        MediaFestivalImage2,
      ]}
      skills={'HTML, CSS, JavaScript, jQuery'}
    >
      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          CSS 미디어 쿼리를 활용한 반응형 웹 구현
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          Quill 에디터 기반 게시판 구현
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          jQuery Ajax를 통한 서버 통신
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          jQuery load를 활용한 공통 Header·Footer 처리
        </ProjectText>
      </Box>

      <Box>
        <ProjectText type='dot'>
          <Box
            component={'a'}
            target='blank'
            href='https://creatorfesta.co.kr'
            sx={{
              color: theme.color.primary
            }}
          >
            https://creatorfesta.co.kr
          </Box>
        </ProjectText>
      </Box>
    </ProjectDataContainer>
  );
}
