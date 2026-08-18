import CurrentProjectDetail from './CurrentProjectDetail';

export default function LoamService() {
  return (
    <CurrentProjectDetail
      isSubsequent={true}
      label='PERSONAL PROJECT'
      title='LoaM - 로스트아크·메이플스토리 관리 서비스'
      description='로스트아크·메이플스토리 캐릭터 정보와 반복적인 플레이 의사결정을 관리하기 위해 개발·운영한 개인용 웹 서비스'
      skills='Next.js, React, TypeScript, TanStack Query, Supabase, Sass, Vitest'
      highlights={[
        {
          title: '재련 조건·보유 재료·시세를 반영해 기대 비용과 시도별 권장 전략을 계산하는 재련 최적화 기능 개발',
          details: [
            '고정 게임 규칙과 변동 입력값을 분리하고, 계산 엔진을 Web Worker에서 실행',
          ],
        },
        {
          title: '입장 레벨, 레이드 선호 조건, 일반·귀속 골드를 기준으로 주간 클리어 골드 전략을 계산·제공',
          details: [
            '보상 횟수 내에서 일반 골드와 총 골드 기준의 추천 레이드 조합을 각각 산출',
          ],
        },
        {
          title: '외부 로스트아크 API와 캐릭터 데이터를 연결해 원정대 캐릭터 조회·등록, 메인 캐릭터 정렬, 스펙 요약·상세 기능 구현',
          details: [
            'API 키는 Supabase Edge Function에서 관리해 클라이언트 노출 방지',
          ],
        },
      ]}
      url='https://loam-client.vercel.app/'
    />
  );
}
