import { useState } from "react";
import styles from "./CurrentProjectDetail.module.scss";

import useWindowSize from "@/hooks/useWindowSize";

import ProjectImagesModal from "../ProjectImagesModal";

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
        <div className={styles["info-box"]}>
          <p className={styles["label"]}>{props.label}</p>
          <h4 className={styles["title"]}>{props.title}</h4>
          <p className={styles["description"]}>{props.description}</p>
          <p className={styles["skills"]}>{props.skills}</p>
        </div>

        {hasImages === true && (
          <div className={styles["project-images"]}>
            <ProjectImages images={props.images as string[]} />
          </div>
        )}
      </header>

      <div className={styles["main-contents"]}>
        <h5 className={styles["main-contents-title"]}>주요 내용</h5>
        <div className={styles["highlight-box"]}>
          {props.highlights.map((highlight) => (
            <HighlightItem key={highlight.title} {...highlight} />
          ))}
          <a
            className={styles["project-link"]}
            href={props.url}
            target="_blank"
            rel="noreferrer"
          >
            {props.url}
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectImages(props: { images: string[] }) {
  const { isDesktop } = useWindowSize();
  const [isProjectImagesModalOpen, setIsProjectImagesModalOpen] =
    useState(false);

  return (
    <>
      <button
        className={styles["image-button"]}
        type="button"
        onClick={() => setIsProjectImagesModalOpen(true)}
      >
        <img
          className={styles["image"]}
          src={props.images[0]}
          alt="웨딩북 서비스 화면"
        />
      </button>

      {isProjectImagesModalOpen === true && (
        <ProjectImagesModal
          isDesktop={isDesktop}
          isOpen={isProjectImagesModalOpen}
          images={props.images}
          onClose={() => setIsProjectImagesModalOpen(false)}
        />
      )}
    </>
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
