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
          title: '캐릭터 성장에 따른 보상 비교',
          introduction:
            '캐릭터를 성장시켰을 때 얻을 수 있는 보상 차이를 비교하고, 추가 성장 여부나 목표 레벨을 판단할 수 있도록 개발했습니다.',
          details: [
            '콘텐츠별 입장 조건과 난이도를 고려해 캐릭터 레벨에 따른 예상 보상 계산',
            '캐릭터의 육성 목적에 따라 거래 가능한 골드와 전체 골드를 기준으로 보상이 높은 콘텐츠 3개를 각각 선정',
            '개별 콘텐츠의 보상 정보와 레벨별 예상 보상을 구분해 제공',
          ],
        },
        {
          title: '캐릭터 정보 관리',
          introduction:
            '게임에서 마지막으로 사용한 세팅에 따라 조회되는 캐릭터 정보가 달라져, 확인하고 싶은 레이드 세팅 정보를 별도로 저장할 수 있도록 개발했습니다.',
          details: [
            '외부 API로 조회한 캐릭터 정보를 확인한 뒤 저장하고, 여러 캐릭터의 요약·상세 화면에서 확인할 수 있도록 구성',
            'Supabase Edge Functions를 활용해 외부 API 호출 및 응답 데이터 가공 기능 구현',
            '장시간 실행하며 화면을 반복해서 이동하는 사용 방식을 고려해 TanStack Query 캐시 적용 및 데이터 수정 시 관련 캐시 갱신',
          ],
        },
      ]}
    />
  );
}
