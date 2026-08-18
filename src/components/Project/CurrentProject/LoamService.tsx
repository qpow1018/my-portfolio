import CurrentProjectDetail from './CurrentProjectDetail';

export default function LoamService() {
  return (
    <CurrentProjectDetail
      label='PERSONAL PROJECT'
      title='LoaM - 로스트아크 개인 유틸리티'
      description={`로스트아크 투두리스트를 중심으로 캐릭터 정보 조회와
재련·주간 골드 계산 기능을 제공하는 개인 유틸리티`}
      skills='Next.js, React, TypeScript, TanStack Query, SCSS, CSS Modules, Vitest'
      highlights={[
        {
          title: '일일·주간 초기화를 지원하는 로스트아크 투두리스트 구현',
          details: [
            '캐릭터와 반복 콘텐츠를 직접 구성하고, 오전 6시 기준 일일·주간 초기화와 체크박스·텍스트·요일 선택 등 할 일 성격에 맞는 입력 방식 제공',
          ],
        },
        {
          title: 'AI 도구를 활용한 재련 비용·전략 계산 기능 구현',
          details: [
            '강화 조건·보유 재료·시세에 따라 기대 비용과 시도별 권장 전략을 계산하고, 연산은 Web Worker에서 분리해 실행',
          ],
        },
        {
          title: '외부 로스트아크 API 기반 캐릭터 정보 관리 기능 구현',
          details: [
            '원정대 캐릭터 데이터를 조회하고, 메인 캐릭터 등록·정렬과 스펙 요약·상세 탐색 기능 제공',
          ],
        },
      ]}
    />
  );
}
