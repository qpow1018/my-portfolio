import type { ReactNode } from 'react';

import styles from './Career.module.scss';

type TExperienceEntryProps = {
  company: string;
  period: string;
  role?: string;
  children: ReactNode;
};

type TResponsibility =
  | string
  | {
      title: string;
      descriptions: string[];
    };

type TProjectProps = {
  title: string;
  description?: string;
  introduction?: string;
  skills?: string;
  responsibilities: TResponsibility[];
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

          <ExperienceEntry company='(주)웨딩북' period='2024.05 - 2026.05' role='프론트엔드 개발자'>
            <Project
              title='웨딩북 프론트엔드 개발·운영'
              description='결혼 준비 서비스를 제공하는 플랫폼'
              introduction='React 기반 WebView 중심으로 제공되던 서비스를 Next.js 기반 웹까지 단계적으로 확장하며 신규 기능 개발과 기존 구조 개선을 담당했습니다.'
              skills='Next.js, React, TypeScript, TanStack Query, Zustand, SCSS, CSS Modules'
              responsibilities={[
                {
                  title: '웹 링크 호환 구조 개선',
                  descriptions: [
                    '앱 WebView에서 사용하던 Scheme·기존 도메인·상대 경로 등 서로 다른 링크 형식을 공통 이동 로직에서 정규화했습니다.',
                    '기존 링크 데이터를 일괄 수정하지 않고도 기존 링크를 웹 환경에 맞게 처리할 수 있도록 했습니다.',
                  ],
                },
                {
                  title: '회원 전용 경로 접근 정책 개선',
                  descriptions: [
                    '비회원 탐색이 가능한 웹에서 회원 전용 경로를 Next.js Middleware에서 공통으로 관리했습니다.',
                    '동적 파라미터와 하위 경로에도 같은 정책을 적용할 수 있도록 경로 패턴 매칭을 구성했습니다.',
                  ],
                },
                {
                  title: '목록 재진입 시 조회·화면 상태 유지',
                  descriptions: [
                    '웹에서 이전 목록으로 돌아왔을 때 기존 조회 데이터와 화면 상태가 이어지도록 처리했습니다.',
                    '조회 데이터는 TanStack Query 캐시를 활용하고, 검색어·탭 등 화면을 다시 구성하는 데 필요한 상태는 URL에 반영했습니다.',
                  ],
                },
                {
                  title: '통합검색 개발',
                  descriptions: [
                    '웨딩홀·업체·스토어로 분리된 검색 API를 Next.js Route Handler에서 병렬 호출해 하나의 응답으로 조합했습니다.',
                    'Promise.allSettled로 요청별 실패를 분리해 일부 API 오류가 발생해도 정상 응답한 영역의 검색 결과는 유지되도록 처리했습니다.',
                  ],
                },
                {
                  title: '모바일 청첩장 작성 기능 개발',
                  descriptions: [
                    '서버 데이터와 화면 상태, 저장 요청 데이터의 형태를 구분해 변환 로직을 구성했습니다.',
                    '업로드 이미지 미리보기와 작성 중 변경사항 이탈 확인 기능을 구현했습니다.',
                  ],
                },
                {
                  title: '메인 페이지 동적 구성 기능 개발',
                  descriptions: [
                    '프론트엔드 코드에 고정되어 있던 홈 영역을 서버에서 전달한 타입과 설정에 따라 컴포넌트를 조합해 렌더링하도록 변경했습니다.',
                    '전달된 순서대로 화면을 구성해 배너·메뉴·상품 목록의 구성과 노출 순서를 어드민 설정으로 변경할 수 있도록 했습니다.',
                  ],
                },
                {
                  title: '공용 UI API 및 사용 방식 개선',
                  descriptions: [
                    'Toast와 Snackbar의 호출 API와 옵션을 분리해, 호출 코드만으로 알림 형태와 사용 의도가 드러나도록 개선했습니다.',
                    'Icon은 asset 선택과 표시 크기의 역할을 분리해, 호출부가 내부 디렉터리 구조에 의존하지 않고 name, size, color 중심으로 사용할 수 있도록 정리했습니다.',
                  ],
                },
              ]}
            />
          </ExperienceEntry>

          <ExperienceEntry company='시스기어' period='2023.10 - 2024.01' role='프리랜서'>
            <Project
              title='디스커버리 공식 온라인몰 리뉴얼'
              description='의류 브랜드 디스커버리의 공식 온라인 쇼핑몰 리뉴얼 프로젝트'
              skills='Next.js, TypeScript, MUI, Axios'
              responsibilities={[
                '공지사항·FAQ·매장 안내·매장 교환 등 고객센터 화면을 개발했습니다.',
                '프로모션 이벤트 페이지를 개발했습니다.',
                '프로젝트 후반 디자인 시안과 구현 화면 간 UI 차이를 수정·보완했습니다.',
              ]}
            />
          </ExperienceEntry>

          <ExperienceEntry company='주식회사 라우들리' period='2019.07 - 2023.05' role='프론트엔드 개발자'>
            <Project
              title='자사 커뮤니티 및 아이템 거래 서비스'
              description='커뮤니티 게시판과 디아블로2 아이템 거래 기능을 제공하는 서비스'
              skills='React, TypeScript, Redux, Axios, SCSS'
              responsibilities={[
                '게시판 및 아이템 거래 관련 화면을 개발했습니다.',
                '회원 전용 페이지에서 반복되던 로그인 확인 로직을 HOC로 공통화했습니다.',
                'WebSocket 기반 사용자 간 아이템 거래 채팅 기능을 개발했습니다.',
              ]}
            />
            <Project
              title='2022 1인 미디어 대전'
              description='행사 소개·참가 신청·게시판을 제공하는 이벤트 사이트'
              skills='HTML, CSS, JavaScript, jQuery'
              responsibilities={[
                '다양한 화면 크기에 대응하는 반응형 웹 페이지를 구현했습니다.',
                '행사 소개·참가 신청·게시판 화면을 개발했습니다.',
              ]}
            />
            <Project
              title='인플루언서 광고 플랫폼'
              description='광고주·MCN·인플루언서의 광고 진행과 관리 업무를 지원하는 플랫폼'
              skills='React, TypeScript, MUI, Redux, Axios'
              responsibilities={[
                '광고 제안·진행 현황·계약·일정·정산 관련 화면을 개발했습니다.',
                '반복되는 UI를 공통 컴포넌트로 구성했습니다.',
                'MUI Theme을 활용해 색상·크기 등 공통 디자인 값을 관리했습니다.',
              ]}
            />
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

function ExperienceEntry({ company, period, role, children }: TExperienceEntryProps) {
  return (
    <article className={styles['experience-entry']}>
      <header className={styles['company-header']}>
        <h3>{company}</h3>
        <p>
          {period}
          {role !== undefined && <span>{role}</span>}
        </p>
      </header>
      <div className={styles['project-list']}>{children}</div>
    </article>
  );
}

function Project({ title, description, introduction, skills, responsibilities }: TProjectProps) {
  return (
    <section className={styles['project']}>
      <header className={styles['project-header']}>
        <h4>{title}</h4>
        {description !== undefined && <p className={styles['project-description']}>{description}</p>}
        {introduction !== undefined && <p className={styles['project-introduction']}>{introduction}</p>}
      </header>
      <ul className={styles['responsibilities']}>
        {responsibilities.map((responsibility) => {
          if (typeof responsibility === 'string') {
            return <li key={responsibility}>{responsibility}</li>;
          }

          return (
            <li key={responsibility.title} className={styles['responsibility-item']}>
              <strong className={styles['responsibility-title']}>{responsibility.title}</strong>
              {responsibility.descriptions.map((description) => (
                <p key={description} className={styles['responsibility-description']}>
                  {description}
                </p>
              ))}
            </li>
          );
        })}
      </ul>
      {skills !== undefined && <p className={styles['project-skills']}>기술: {skills}</p>}
    </section>
  );
}
