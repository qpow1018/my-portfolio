import EarlierProjectCard from './EarlierProjectCard';

import DiscoveryImage1 from '@/images/discovery/discovery_1.jpg';
import DiscoveryImage2 from '@/images/discovery/discovery_2.jpg';
import DiscoveryImage3 from '@/images/discovery/discovery_3.jpg';
import DiscoveryImage4 from '@/images/discovery/discovery_4.jpg';
import DiscoveryImage5 from '@/images/discovery/discovery_5.jpg';
import DiscoveryImage6 from '@/images/discovery/discovery_6.jpg';

export default function DiscoveryMall() {
  return (
    <EarlierProjectCard
      title='디스커버리 공식 온라인몰 리뉴얼'
      summary='의류 브랜드 디스커버리의 공식 온라인 쇼핑몰 리뉴얼'
      images={[
        DiscoveryImage1,
        DiscoveryImage2,
        DiscoveryImage3,
        DiscoveryImage4,
        DiscoveryImage5,
        DiscoveryImage6,
      ]}
      skills={['Next.js', 'TypeScript', 'MUI', 'Axios']}
      highlights={[
        '고객센터 영역 개발: 공지사항, FAQ, 매장 안내, 매장 교환',
        '프로모션 이벤트 페이지 개발',
        '기존 페이지의 디자인 시안과 구현 화면 간 UI 차이 수정 및 보완',
      ]}
      serviceUrl='https://www.discovery-expedition.com'
    />
  );
}
