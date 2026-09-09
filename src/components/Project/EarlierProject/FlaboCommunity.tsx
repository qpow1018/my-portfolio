import EarlierProjectCard from './EarlierProjectCard';

import FlaboCommunityImage1 from '@/images/flaboCommunity/flaboCommunity_1.webp';
import FlaboCommunityImage2 from '@/images/flaboCommunity/flaboCommunity_2.webp';
import FlaboCommunityImage3 from '@/images/flaboCommunity/flaboCommunity_3.webp';
import FlaboCommunityImage4 from '@/images/flaboCommunity/flaboCommunity_4.webp';
import FlaboCommunityImage5 from '@/images/flaboCommunity/flaboCommunity_5.webp';
import FlaboCommunityImage6 from '@/images/flaboCommunity/flaboCommunity_6.webp';
import FlaboCommunityImage7 from '@/images/flaboCommunity/flaboCommunity_7.webp';
import FlaboCommunityImage8 from '@/images/flaboCommunity/flaboCommunity_8.webp';
import FlaboCommunityImage9 from '@/images/flaboCommunity/flaboCommunity_9.webp';
import FlaboCommunityImage10 from '@/images/flaboCommunity/flaboCommunity_10.webp';

export default function FlaboCommunity() {
  return (
    <EarlierProjectCard
      title='자사 커뮤니티 서비스'
      summary='커뮤니티 및 디아블로2 아이템 거래 서비스'
      images={[
        FlaboCommunityImage1,
        FlaboCommunityImage2,
        FlaboCommunityImage3,
        FlaboCommunityImage4,
        FlaboCommunityImage5,
        FlaboCommunityImage6,
        FlaboCommunityImage7,
        FlaboCommunityImage8,
        FlaboCommunityImage9,
        FlaboCommunityImage10,
      ]}
      skills={['React', 'TypeScript', 'Redux', 'Axios', 'SCSS']}
      highlights={[
        '회원 전용 페이지의 반복 로그인 확인 로직을 HOC로 공통화',
        'WebSocket 기반 아이템 거래 사용자 간 채팅 기능',
        '커뮤니티 게시판 및 거래 서비스 화면 구현',
      ]}
    />
  );
}
