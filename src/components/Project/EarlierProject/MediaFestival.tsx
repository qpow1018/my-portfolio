import EarlierProjectCard from './EarlierProjectCard';
import styles from './EarlierProjects.module.scss';

import MediaFestivalImage1 from '@/images/mediaFestival/mediaFestival_1.jpg';
import MediaFestivalImage2 from '@/images/mediaFestival/mediaFestival_2.jpg';

export default function MediaFestival() {
  return (
    <EarlierProjectCard
      title='2022 1인 미디어 대전'
      description={[
        '행사 소개·참가 신청·게시판을 제공하는 이벤트 사이트',
      ]}
      images={[
        MediaFestivalImage1,
        MediaFestivalImage2,
      ]}
      skills={'HTML, CSS, JavaScript, jQuery'}
    >
      <div className={styles['project-detail']}>
        <p className={styles['project-text-dot']}>
          다양한 화면 크기에 대응하는 반응형 웹 구현
        </p>
      </div>

      <div className={styles['project-detail']}>
        <p className={styles['project-text-dot']}>
          행사 소개·참가 신청·게시판 화면 구성
        </p>
      </div>

      <div className={styles['project-detail']}>
        <p className={styles['project-text-dot']}>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://creatorfesta.co.kr'
          >
            https://creatorfesta.co.kr
          </a>
        </p>
      </div>
    </EarlierProjectCard>
  );
}
