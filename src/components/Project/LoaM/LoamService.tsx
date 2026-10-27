import LoamProjectDetail from './LoamProjectDetail';

import LoamTaskTableImage from '@/images/loam/loam-task-table.png';
import LoamClearGoldImage from '@/images/loam/loam-clear-gold.png';
import LoamMainCharactersImage from '@/images/loam/loam-main-characters.png';
import LoamRefiningImage from '@/images/loam/loam-refining.png';

export default function LoamService() {
  return (
    <LoamProjectDetail
      label='PERSONAL PROJECT'
      title='LoaM'
      description={`로스트아크의 여러 캐릭터에 대한 콘텐츠와 정보를 한곳에서 관리하기 위해 만든 개인용 게임 관리 도구입니다.

직접 사용하면서 필요한 기능을 추가해 왔으며, 숙제 관리뿐 아니라 캐릭터 정보 확인과 성장 판단을 돕는 기능으로 확장했습니다.`}
      skills='Next.js, TypeScript, TanStack Query, Supabase, PWA, SCSS, CSS Modules'
      images={[
        LoamTaskTableImage,
        LoamClearGoldImage,
        LoamMainCharactersImage,
        LoamRefiningImage,
      ]}
      imageAlt='LoaM 서비스 화면'
      highlights={[
        {
          title: '캐릭터별 콘텐츠 관리',
          introduction:
            '여러 캐릭터의 콘텐츠 수행 여부를 한눈에 확인하고, 원하는 방식으로 관리할 수 있도록 테이블 형태의 화면을 구성했습니다.',
          details: [
            '캐릭터를 열, 콘텐츠를 행으로 배치하고 행·열 추가 및 순서 변경 기능 구현',
            '셀별 일간·주간·월간·무제한 반복 주기 설정으로 하나의 행에서 서로 다른 주기의 콘텐츠 관리',
            '게임의 초기화 시간과 휴식 게이지 규칙을 반영한 콘텐츠 수행 상태 관리',
            '별도 메모장이나 브라우저 북마크에 기록하던 정보를 함께 확인할 수 있도록 메모 영역 추가',
          ],
        },
        {
          title: '사용 방식에 맞춰 Electron → Tauri → PWA로 전환',
          details: [
            '독립된 창으로 사용하고 JSON 파일을 자동 백업하기 위해 Electron으로 시작했으며, 이후 더 가벼운 환경을 위해 Tauri로 전환했습니다.',
            'DB 도입으로 파일 시스템 기반 백업의 필요성이 줄어들면서, 별도의 데스크톱 실행 환경 대신 개발·배포·사용이 단순한 PWA로 변경했습니다.',
          ],
        },
        {
          title: '반복 이동 시 발생하는 로딩 최소화',
          details: [
            '여러 화면을 반복해서 오갈 때 이미 조회한 데이터를 다시 불러오는 로딩을 줄이기 위해 TanStack Query를 도입했습니다.',
            '장시간 켜두는 사용 특성을 고려해 기본 staleTime을 12시간으로 설정하고, 데이터 변경 시 관련 캐시를 갱신하거나 무효화했습니다.',
          ],
        },
      ]}
    />
  );
}
