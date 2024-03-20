import { Box } from '@mui/material';

import ProjectDataContainer from './ProjectDataContainer';

export default function MediaFestival() {
  return (
    <ProjectDataContainer
      title='2022 1인 미디어 대전'
      description={[
        '- 행사 소개 및 참가 신청 웹',
      ]}
      skills={'Html, Css, JavaScript'}
      website='https://www.koreacreatorfesta.co.kr'
    >
- 현재 링크는 2023버전이지만 페이지 구성 및 기능은 동일한걸로 보임
    </ProjectDataContainer>
  );
}