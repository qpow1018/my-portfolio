import EarlierProjects from '@/components/Project/EarlierProject/EarlierProjects';
import Weddingbook from '@/components/Project/Weddingbook/Weddingbook';

import styles from './Career.module.scss';

const PRIMARY_SKILLS = [
  'React',
  'Next.js',
  'TypeScript',
  'SCSS',
  'CSS Modules',
] as const;

export default function Career() {
  return (
    <main className={styles['career']}>
      <header className={styles['document-header']}>
        <div className={styles['container']}>
          <p className={styles['document-type']}>경력기술서</p>
          <h1>최원진</h1>
          <p className={styles['role']}>프론트엔드 개발자</p>
          <address className={styles['contact']}>
            <a href='mailto:qpow1018@gmail.com'>qpow1018@gmail.com</a>
            <a
              href='https://github.com/qpow1018'
              target='_blank'
              rel='noreferrer'
            >
              github.com/qpow1018
            </a>
          </address>
        </div>
      </header>

      <section className={styles['career-summary']} aria-labelledby='career-summary-title'>
        <div className={styles['container']}>
          <h2 id='career-summary-title'>경력 요약</h2>
          <dl className={styles['summary-list']}>
            <div>
              <dt>총 경력</dt>
              <dd>9년 3개월</dd>
            </div>
            <div>
              <dt>프론트엔드 개발</dt>
              <dd>6년</dd>
            </div>
            <div>
              <dt>주요 기술</dt>
              <dd>
                <ul>
                  {PRIMARY_SKILLS.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={styles['featured-experience']} aria-labelledby='featured-experience-title'>
        <div className={styles['container']}>
          <header className={styles['experience-header']}>
            <div>
              <p className={styles['section-label']}>대표 경력</p>
              <h2 id='featured-experience-title'>웨딩북</h2>
              <p>결혼 준비 서비스를 제공하는 플랫폼</p>
            </div>
            <dl>
              <div>
                <dt>기간</dt>
                <dd>2024.05 – 2026.05</dd>
              </div>
              <div>
                <dt>역할</dt>
                <dd>프론트엔드 개발</dd>
              </div>
            </dl>
          </header>

          <ul className={styles['responsibilities']} aria-label='담당 내용'>
            <li>React 기반 WebView 중심 서비스를 Next.js 웹으로 단계적 확장</li>
            <li>통합검색, 모바일 청첩장, 홈 화면의 기능 개발 및 개선</li>
            <li>Toast와 Icon 등 공통 UI의 구조와 사용 방식 개선</li>
          </ul>

          <Weddingbook />
        </div>
      </section>

      <EarlierProjects />
    </main>
  );
}
