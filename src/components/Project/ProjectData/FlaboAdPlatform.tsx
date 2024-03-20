import { Box } from '@mui/material';

import ProjectDataContainer from './ProjectDataContainer';

export default function FlaboAdPlatform() {
  return (
    <ProjectDataContainer
      title='인플루언서 광고 플랫폼'
      description={[
        '- 광고주가 광고를 등록하면 MCN이 소속 인플루언서를 제안하고, 소통 및 진행 상황 공유',
        '- MCN은 소속 인플루언서의 계약정보 관리, 일정 관리, 정산 관리 등 기존에 수기로 하던 작업을 자동화',
      ]}
      skills={'React, Typescript, MUI, Axios, Redux'}
      website='비오픈'
    >

    </ProjectDataContainer>
  );
}