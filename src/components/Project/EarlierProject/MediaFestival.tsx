import EarlierProjectCard from './EarlierProjectCard';
import EarlierProjectText from './EarlierProjectText';
import styles from './EarlierProjects.module.scss';

import MediaFestivalImage1 from '@/images/mediaFestival/mediaFestival_1.jpg';
import MediaFestivalImage2 from '@/images/mediaFestival/mediaFestival_2.jpg';

export default function MediaFestival() {
  return (
    <EarlierProjectCard
      title='2022 1인 미디어 대전'
      description={[
        '- 행사 소개 및 참가 신청 웹사이트 개발',
      ]}
      images={[
        MediaFestivalImage1,
        MediaFestivalImage2,
      ]}
      skills={'HTML, CSS, JavaScript, jQuery'}
    >
      <div className={styles['project-detail']}>
        <EarlierProjectText type='dot'>
          CSS 미디어 쿼리를 활용한 반응형 웹 구현
        </EarlierProjectText>
      </div>

      <div className={styles['project-detail']}>
        <EarlierProjectText type='dot'>
          Quill 에디터 기반 게시판 구현
        </EarlierProjectText>
      </div>

      <div className={styles['project-detail']}>
        <EarlierProjectText type='dot'>
          jQuery Ajax를 통한 서버 통신
        </EarlierProjectText>
      </div>

      <div className={styles['project-detail']}>
        <EarlierProjectText type='dot'>
          jQuery load를 활용한 공통 Header·Footer 처리
        </EarlierProjectText>
      </div>

      <div className={styles['project-detail']}>
        <EarlierProjectText type='dot'>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://creatorfesta.co.kr'
          >
            https://creatorfesta.co.kr
          </a>
        </EarlierProjectText>
      </div>
    </EarlierProjectCard>
  );
}
