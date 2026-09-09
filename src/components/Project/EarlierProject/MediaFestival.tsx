import EarlierProjectCard from './EarlierProjectCard';

import MediaFestivalImage1 from '@/images/mediaFestival/mediaFestival_1.jpg';
import MediaFestivalImage2 from '@/images/mediaFestival/mediaFestival_2.jpg';

export default function MediaFestival() {
  return (
    <EarlierProjectCard
      title='2022 1인 미디어 대전'
      summary='행사 소개·참가 신청·게시판을 제공하는 이벤트 사이트'
      images={[
        MediaFestivalImage1,
        MediaFestivalImage2,
      ]}
      skills={['HTML', 'CSS', 'JavaScript', 'jQuery']}
      highlights={[
        '다양한 화면 크기에 대응하는 반응형 웹 구현',
        '행사 소개·참가 신청·게시판 화면 구성',
      ]}
      serviceUrl='https://creatorfesta.co.kr'
    />
  );
}
