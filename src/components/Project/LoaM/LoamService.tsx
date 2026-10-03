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
      description={`여러 캐릭터의 반복 콘텐츠와 정보를 한곳에서 관리하기 위해 만든 개인용 게임 관리 도구입니다.

실제 게임 중 계속 켜두고 사용하며 필요한 기능을 추가했고, 사용 방식의 변화에 맞춰 저장 구조와 실행 환경도 함께 변경해 왔습니다.`}
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
          title: '기능 확장에 따라 저장 구조 분리',
          details: [
            '단순한 캐릭터 목록에서 상세 정보까지 관리하게 되면서, 캐릭터 관련 데이터는 localStorage에서 Supabase Database로 옮겼습니다.',
            '체크리스트와 메모처럼 즉시 수정하는 상태는 localStorage에 유지하고, 계정 단위로 관리할 데이터는 DB에 저장하도록 역할을 나눴습니다.',
            '개인용 프로젝트지만 웹에 배포되는 만큼 외부 접근으로 데이터가 섞이지 않도록 인증을 추가했습니다.',
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
