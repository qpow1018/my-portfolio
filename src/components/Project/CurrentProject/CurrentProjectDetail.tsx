import styles from "./CurrentProjectDetail.module.scss";

type Highlight = {
  title: string;
  details: string[];
};

export default function CurrentProjectDetail(props: {
  label: string;
  title: string;
  description: string;
  skills: string;
  highlights: Highlight[];
  url: string;
  images?: string[];
}) {
  const hasImages = props.images !== undefined && props.images.length > 0;

  return (
    <section className={styles["current-project-detail"]}>
      <header className={styles["project-header"]}>
        <div>
          <p className={styles["label"]}>{props.label}</p>
          <h4 className={styles["title"]}>{props.title}</h4>
        </div>
        <p className={styles["description"]}>{props.description}</p>
      </header>

      <p
        className={`${styles["skills"]} ${hasImages === true ? styles["skills-with-images"] : ""}`}
      >
        {props.skills}
      </p>

      {hasImages === true && (
        <ProjectImages images={props.images as string[]} />
      )}

      <div className={styles["contributions"]}>
        <h5 className={styles["contributions-title"]}>KEY CONTRIBUTIONS</h5>
        <div>
          {props.highlights.map((highlight) => (
            <HighlightItem key={highlight.title} {...highlight} />
          ))}
        </div>
      </div>

      <a
        className={styles["project-link"]}
        href={props.url}
        target="_blank"
        rel="noreferrer"
      >
        {props.url}
      </a>
    </section>
  );
}

function ProjectImages(props: { images: string[] }) {
  return (
    <div className={styles["images"]}>
      {props.images.map((image) => (
        <img
          className={styles["image"]}
          key={image}
          src={image}
          alt="웨딩북 서비스 화면"
        />
      ))}
    </div>
  );
}

function HighlightItem(props: Highlight) {
  return (
    <article className={styles["highlight"]}>
      <h6 className={styles["highlight-title"]}>{props.title}</h6>
      {props.details.length > 0 && (
        <ul className={styles["highlight-details"]}>
          {props.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
