import styles from "./Intro.module.scss";

const SKILLS = [
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
] as const;

export default function Intro() {
  return (
    <section className={styles["intro"]} aria-labelledby="intro-heading">
      <div className={styles["content"]}>
        <h1 id="intro-heading" className={styles["heading"]}>
          프론트엔드 개발자 최원진
        </h1>

        <address className={styles["contact"]}>
          <a href="mailto:qpow1018@gmail.com">
            <MailIcon />
            qpow1018@gmail.com
          </a>
          <a
            href="https://github.com/qpow1018"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
            https://github.com/qpow1018
          </a>
        </address>

        <div className={styles["skills"]} aria-label="기술 스택">
          <ul>
            {SKILLS.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 5h16v14H4z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m4 7 8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.8a9.3 9.3 0 0 0-2.94 18.12c.47.09.64-.2.64-.45v-1.76c-2.6.56-3.15-1.11-3.15-1.11-.42-1.08-1.04-1.36-1.04-1.36-.86-.58.07-.57.07-.57.95.07 1.45.97 1.45.97.84 1.45 2.22 1.03 2.76.79.09-.61.33-1.03.6-1.27-2.08-.24-4.27-1.04-4.27-4.63 0-1.02.36-1.85.96-2.5-.1-.24-.42-1.19.09-2.47 0 0 .78-.25 2.56.96A8.9 8.9 0 0 1 12 7.67a8.9 8.9 0 0 1 2.33.31c1.78-1.2 2.56-.96 2.56-.96.51 1.28.19 2.23.09 2.47.6.65.96 1.48.96 2.5 0 3.6-2.2 4.38-4.28 4.62.34.29.63.85.63 1.72v2.14c0 .25.17.55.64.45A9.3 9.3 0 0 0 12 2.8Z"
        fill="currentColor"
      />
    </svg>
  );
}
