import EarlierProjectCard from './EarlierProjectCard';

import FlaboAdPlatformImage1 from '@/images/flaboAdPlatform/flaboAdPlatform_1.jpg';
import FlaboAdPlatformImage2 from '@/images/flaboAdPlatform/flaboAdPlatform_2.jpg';
import FlaboAdPlatformImage3 from '@/images/flaboAdPlatform/flaboAdPlatform_3.jpg';
import FlaboAdPlatformImage4 from '@/images/flaboAdPlatform/flaboAdPlatform_4.jpg';

export default function FlaboAdPlatform() {
  return (
    <EarlierProjectCard
      title='인플루언서 광고 플랫폼'
      summary='광고주·MCN·인플루언서 간 광고 진행과 관리 업무를 지원하는 플랫폼'
      images={[
        FlaboAdPlatformImage1,
        FlaboAdPlatformImage2,
        FlaboAdPlatformImage3,
        FlaboAdPlatformImage4,
      ]}
      skills={['React', 'TypeScript', 'MUI', 'Redux', 'Axios']}
      highlights={[
        '반복적으로 사용되는 UI를 공통 컴포넌트로 구성',
        'MUI Theme을 활용한 공통 디자인 값 관리',
        '광고 제안·진행 현황 및 계약·일정·정산 관련 화면 구성',
      ]}
    />
  );
}
