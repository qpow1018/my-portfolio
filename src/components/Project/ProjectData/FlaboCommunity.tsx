import { Box } from '@mui/material';

import ProjectDataContainer from './ProjectDataContainer';

export default function FlaboCommunity() {
  return (
    <ProjectDataContainer
      title='커뮤니티 서비스'
      description={[
        '- 여러가지 주제를 다루는 커뮤니티 서비스 (유머, 영화, 게임 등)',
        '- 게임 \'디아블로2\' 거래소 서비스 (상점 생성, 아이템 등록, 아이템 검색, 채팅방)',
      ]}
      skills={'React, TypeScript, Scss, Axios, Redux'}
      website='비오픈'
    >

    </ProjectDataContainer>
  );
}