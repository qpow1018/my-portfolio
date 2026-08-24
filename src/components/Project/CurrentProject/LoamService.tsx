import CurrentProjectDetail from './CurrentProjectDetail';

import LoamTaskTableImage from '@/images/loam/loam-task-table.png';
import LoamClearGoldImage from '@/images/loam/loam-clear-gold.png';
import LoamMainCharactersImage from '@/images/loam/loam-main-characters.png';
import LoamRefiningImage from '@/images/loam/loam-refining.png';

export default function LoamService() {
  return (
    <CurrentProjectDetail
      label='PERSONAL PROJECT'
      title='LoaM - 로스트아크 개인 유틸리티'
      description={`로스트아크 투두리스트를 중심으로 캐릭터 정보 조회와
재련·주간 골드 계산 기능을 제공하는 개인 유틸리티`}
      skills='Next.js, React, TypeScript, TanStack Query, SCSS, CSS Modules, Vitest'
      images={[
        LoamTaskTableImage,
        LoamClearGoldImage,
        LoamMainCharactersImage,
        LoamRefiningImage,
      ]}
      imageAlt='LoaM 서비스 화면'
      highlights={[
        {
          title: '다중 캐릭터 반복 콘텐츠를 위한 테이블형 투두리스트',
          details: [
            '여러 캐릭터로 일일·주간 콘텐츠를 반복하는 플레이 방식을 반영해, 캐릭터와 콘텐츠를 행·열로 구성한 테이블 형태의 관리 화면 구현',
            '오전 6시 기준 일일·주간 초기화와 체크박스·텍스트·요일 선택 등 할 일 성격에 맞는 입력 방식 제공',
          ],
        },
        {
          title: '아이템 레벨별 주간 레이드 골드 추천',
          details: [
            '아이템 레벨별 입장 가능 레이드 중 보상 획득이 가능한 상위 3개를 골라, 일반 골드 위주와 총 골드 위주의 주간 수익을 각각 추천',
            '관문별 클리어 골드를 일반·귀속 골드로 구분해 제공하고, 난이도별 합산 금액을 확인할 수 있는 화면 구성',
          ],
        },
        {
          title: '외부 API 기반 캐릭터 정보 조회 UI 구현',
          details: [
            '외부 API로 원정대 캐릭터 데이터를 불러와, 메인 캐릭터를 등록·정렬하고 스펙 요약·상세 정보를 확인할 수 있는 UI 구성',
          ],
        },
      ]}
    />
  );
}
