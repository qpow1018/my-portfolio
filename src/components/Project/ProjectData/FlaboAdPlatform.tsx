import { Box } from '@mui/material';

import ProjectDataContainer from './shared/ProjectDataContainer';
import ProjectText from './shared/ProjectText';

import FlaboAdPlatformImage1 from '@/images/flaboAdPlatform/flaboAdPlatform_1.jpg';
import FlaboAdPlatformImage2 from '@/images/flaboAdPlatform/flaboAdPlatform_2.jpg';
import FlaboAdPlatformImage3 from '@/images/flaboAdPlatform/flaboAdPlatform_3.jpg';
import FlaboAdPlatformImage4 from '@/images/flaboAdPlatform/flaboAdPlatform_4.jpg';

export default function FlaboAdPlatform() {
  return (
    <ProjectDataContainer
      title='인플루언서 광고 플랫폼'
      description={[
        '- 광고주·MCN·인플루언서 간 광고 제안 및 진행 현황 공유 플랫폼 개발',
        '- MCN의 인플루언서 계약, 일정, 정산 관리 업무 자동화',
      ]}
      images={[
        FlaboAdPlatformImage1,
        FlaboAdPlatformImage2,
        FlaboAdPlatformImage3,
        FlaboAdPlatformImage4,
      ]}
      skills={'React, TypeScript, MUI, Axios, Redux'}
    >
      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          공통 UI 컴포넌트 개발
        </ProjectText>
        <ProjectText type='indent'>
          - 버튼, 텍스트인풋, 모달, 로딩박스 등
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          MUI Theme를 활용하여 색상, 크기 등 디자인 토큰 관리
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          자주 사용되는 Form Validation을 위한 유효성 검사 모듈 제작
        </ProjectText>
      </Box>
    </ProjectDataContainer>
  );
}
