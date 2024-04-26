import { Box } from '@mui/material';
import theme from '@/style/theme';

import ProjectDataContainer from './shared/ProjectDataContainer';
import ProjectText from './shared/ProjectText';

import Img1 from '@/images/eldenWiki/img1.jpg';
import Img2 from '@/images/eldenWiki/img2.jpg';
import Img3 from '@/images/eldenWiki/img3.jpg';
import Img4 from '@/images/eldenWiki/img4.jpg';
import Img5 from '@/images/eldenWiki/img5.jpg';

export default function EldenWiki() {
  return (
    <ProjectDataContainer
      title='엘든링 위키 (진행중)'
      description={[
        '- 게임 엘든링의 아이템 DB, 지도 정보, 진행 체크리스트 등 게임 플레이 시 유용한 기능 제공',
        '- 개인 프로젝트',
      ]}
      images={[
        Img1,
        Img2,
        Img3,
        Img4,
        Img5,
      ]}
      skills={'Next.js, TypeScript, MUI'}
    >
      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          체크리스트 개발 - 게임 진행 시 중요한 아이템 획득 여부, 보스 진행 여부를 저장
        </ProjectText>
        <ProjectText type='indent'>
          - 백엔드 개발 전, LocalStorage를 이용하여 임시 DB 역할 수행
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          깃허브
          <Box
            component={'a'}
            target='blank'
            href='https://github.com/qpow1018/elden-wiki-client'
            sx={{
              color: theme.color.primary,
              marginLeft: '4px'
            }}
          >
            https://github.com/qpow1018/elden-wiki-client
          </Box>
        </ProjectText>
      </Box>

      <Box>
        <ProjectText type='dot'>
          임시 호스팅
          <Box
            component={'a'}
            target='blank'
            href='https://qpow1018.github.io/elden-wiki-client/'
            sx={{
              color: theme.color.primary,
              marginLeft: '4px'
            }}
          >
            https://qpow1018.github.io/elden-wiki-client/
          </Box>
        </ProjectText>
      </Box>
    </ProjectDataContainer>
  );
}
