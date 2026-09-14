import type { ReactNode } from 'react';

import styles from './Career.module.scss';

type TExperienceEntryProps = {
  company: string;
  period: string;
  isPageBreakBefore?: boolean;
  children: ReactNode;
};

type TProjectProps = {
  title: string;
  description?: string;
  skills?: string;
  responsibilities: string[];
};

export default function Career() {
  return (
    <main className={styles['career']}>
      <header className={styles['document-header']}>
        <div className={styles['container']}>
          <p className={styles['document-type']}>경력기술서</p>
          <h1>최원진</h1>
          <p className={styles['role']}>프론트엔드 개발자 · 경력 6년</p>
          <address className={styles['contact']}>
            <a href='mailto:qpow1018@gmail.com'>qpow1018@gmail.com</a>
            <a href='https://github.com/qpow1018' target='_blank' rel='noreferrer'>
              github.com/qpow1018
            </a>
          </address>
        </div>
      </header>

      <section className={styles['experience']} aria-labelledby='experience-title'>
        <div className={styles['container']}>
          <h2 id='experience-title'>경력 사항</h2>

          <ExperienceEntry company='(주)웨딩북' period='2024.05 - 2026.05'>
            <Project
              title='웨딩북 프론트엔드 개발·운영'
              description='결혼 준비 서비스를 제공하는 플랫폼'
              skills='Next.js, React, TypeScript, TanStack Query, Zustand, SCSS, CSS Modules'
              responsibilities={[
                'React 기반 WebView 중심 서비스를 Next.js 기반 웹으로 단계적으로 확장',
                '앱 Scheme, WebView wrapper, 기존 웹 URL을 공통 라우터에서 정규화해 현재 웹 경로로 변환',
                '로그인 필요 경로를 Middleware 기반 정책으로 관리하고, 동적·하위 경로까지 적용할 수 있도록 패턴 매칭 구성',
                'TanStack Query 캐시와 URL 상태를 활용해 목록 재진입 시 기존 조회 데이터와 상태가 이어지도록 처리',
                '웨딩홀·업체·스토어 검색 API를 조합한 통합검색 구현; 일부 요청 실패 시에도 정상 응답 영역의 결과를 유지하도록 처리',
                '모바일 청첩장 작성·수정 화면에서 이미지 미리보기와 변경사항 이탈 확인 기능 구현',
                '어드민 설정에 따라 홈 영역을 타입별 컴포넌트로 조합하는 구조 구현',
                'Toast와 Icon의 공통 UI 구조 및 호출 방식 개선',
              ]}
            />
          </ExperienceEntry>

          <ExperienceEntry company='시스기어' period='2023.10 - 2024.01' isPageBreakBefore>
            <Project
              title='디스커버리 공식 온라인몰 리뉴얼'
              skills='Next.js, TypeScript, MUI, Axios'
              responsibilities={[
                '고객센터 영역 개발: 공지사항, FAQ, 매장 안내, 매장 교환',
                '프로모션 이벤트 페이지 개발',
                '디자인 시안과 구현 화면 간 UI 차이를 수정·보완',
              ]}
            />
          </ExperienceEntry>

          <ExperienceEntry company='주식회사 라우들리' period='2019.07 - 2023.05'>
            <Project
              title='자사 커뮤니티 및 아이템 거래 서비스'
              skills='React, TypeScript, Redux, Axios, SCSS'
              responsibilities={[
                '커뮤니티 게시판과 디아블로2 아이템 거래 서비스 화면 개발',
                '회원 전용 페이지의 반복 로그인 확인 로직을 HOC로 공통화',
                'WebSocket 기반 사용자 간 아이템 거래 채팅 기능 개발',
              ]}
            />
            <Project
              title='2022 1인 미디어 대전'
              skills='HTML, CSS, JavaScript, jQuery'
              responsibilities={[
                '행사 소개, 참가 신청, 게시판을 제공하는 이벤트 사이트 개발',
                '다양한 화면 크기에 대응하는 반응형 웹 페이지 구현',
              ]}
            />
            <Project
              title='인플루언서 광고 플랫폼'
              skills='React, TypeScript, MUI, Redux, Axios'
              responsibilities={[
                '광고 제안·진행, 계약·일정·정산 관리 화면 구현',
                '반복 UI를 공통 컴포넌트로 구성',
                'MUI Theme 기반 공통 디자인 값 관리',
              ]}
            />
          </ExperienceEntry>

          <ExperienceEntry company='NOFTBON → 주식회사 클로랩' period='2016.05 - 2019.03'>
            <Project
              title='바이비엘 수제화 카페24 쇼핑몰'
              responsibilities={['카페24 기반 쇼핑몰 퍼블리싱 및 유지보수']}
            />
            <p className={styles['company-note']}>NOFTBON에서 주식회사 클로랩으로 사명 변경</p>
          </ExperienceEntry>
        </div>
      </section>

      <section className={styles['education']} aria-labelledby='education-title'>
        <div className={styles['container']}>
          <h2 id='education-title'>학력 및 기타</h2>
          <ul>
            <li>단국대학교 건축공학과 중퇴</li>
            <li>엘리스 프론트엔드·백엔드 웹 개발자 트랙 수료, 2023.05 - 2023.08</li>
            <li>Material Design UX와 Client MVC 기반 Single Page WebApp 자바 개발자 과정 수료, 2015.11 - 2016.04</li>
          </ul>
        </div>
      </section>
    </main>
  );
}

function ExperienceEntry({ company, period, isPageBreakBefore = false, children }: TExperienceEntryProps) {
  return (
    <article
      className={`${styles['experience-entry']} ${isPageBreakBefore ? styles['page-break-before'] : ''}`}
    >
      <header className={styles['company-header']}>
        <h3>{company}</h3>
        <p>{period}</p>
      </header>
      <div className={styles['project-list']}>{children}</div>
    </article>
  );
}

function Project({ title, description, skills, responsibilities }: TProjectProps) {
  return (
    <section className={styles['project']}>
      <h4>{title}</h4>
      {description !== undefined && <p className={styles['project-description']}>{description}</p>}
      <ul className={styles['responsibilities']}>
        {responsibilities.map((responsibility) => (
          <li key={responsibility}>{responsibility}</li>
        ))}
      </ul>
      {skills !== undefined && <p className={styles['project-skills']}>기술: {skills}</p>}
    </section>
  );
}
