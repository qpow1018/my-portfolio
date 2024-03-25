import { Box } from '@mui/material';
import theme from '@/style/theme';

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
        '- 광고주가 광고를 등록하면 MCN이 소속 인플루언서를 제안하고, 소통 및 진행 상황 공유',
        '- MCN은 소속 인플루언서의 계약정보 관리, 일정 관리, 정산 관리 등 기존에 수기로 하던 작업을 자동화',
      ]}
      images={[
        FlaboAdPlatformImage1,
        FlaboAdPlatformImage2,
        FlaboAdPlatformImage3,
        FlaboAdPlatformImage4,
      ]}
      skills={'React, Typescript, MUI, Axios, Redux'}
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
          자주 사용되는 색상, 크기 등을 MUI Theme를 이용한 Style 변수 관리
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          자주 사용되는 Form Validation을 위한 유효성 검사 모듈 제작
        </ProjectText>
      </Box>

      <Box>
        <ProjectText
          type='dot'
          sx={{
            color: theme.color.secondary
          }}
        >
          중단된 프로젝트
        </ProjectText>
      </Box>
    </ProjectDataContainer>
  );
}