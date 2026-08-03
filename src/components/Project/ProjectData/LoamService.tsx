import { Box } from '@mui/material';
import theme from '@/style/theme';

import ProjectDataContainer from './shared/ProjectDataContainer';
import ProjectText from './shared/ProjectText';

export default function LoamService() {
  return (
    <ProjectDataContainer
      title='LoaM - 로스트아크·메이플스토리 관리 서비스'
      description={[
        '- 로스트아크·메이플스토리 캐릭터 정보, 할 일, 골드 보상, 재련 의사결정을 관리하는 개인용 웹 서비스 개발·운영',
        '- 실제 플레이 흐름에서 필요한 기능을 배포 후 지속적으로 개선',
      ]}
      images={[]}
      skills={'Next.js, React, TypeScript, TanStack Query, Supabase, Sass, Vitest'}
    >
      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          Supabase Auth 기반 사용자별 캐릭터·설정 데이터 관리와 클라우드 백업 기능 구현
        </ProjectText>
        <ProjectText type='indent'>
          - 캐릭터 등록·정렬·메인 캐릭터 관리 및 사용자별 백업 데이터 upsert 처리
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          Supabase Edge Function을 통해 로스트아크 API 키를 분리하고 캐릭터 정보 조회 기능 구현
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          입장 레벨·비선호 레이드·일반/귀속 골드를 고려해 클리어 골드 전략을 계산·표시하는 기능 개발
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          재련 조건·보유 재료·시세를 반영해 기대 비용과 권장 재련 전략을 계산하는 최적화 기능 개발
        </ProjectText>
        <ProjectText type='indent'>
          - Web Worker 기반 계산 처리와 입력 검증·결과 표시 책임 분리
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          로스트아크 캐릭터 스펙 요약과 메이플스토리 캐릭터·유니온·할 일 관리 기능 개발
        </ProjectText>
      </Box>

      <Box sx={{ marginBottom: '8px' }}>
        <ProjectText type='dot'>
          공용 폼·탭·드롭다운·모달·버튼을 정비하고, 게임 도메인별 화면 구조를 지속 개선
        </ProjectText>
      </Box>

      <Box>
        <ProjectText type='dot'>
          <Box
            component={'a'}
            target='blank'
            href='https://loam-client.vercel.app/'
            sx={{
              color: theme.color.primary,
            }}
          >
            https://loam-client.vercel.app/
          </Box>
        </ProjectText>
      </Box>
    </ProjectDataContainer>
  );
}
