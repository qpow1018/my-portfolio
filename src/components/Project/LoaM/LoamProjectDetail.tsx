import { useState } from "react";
import styles from "./LoamProjectDetail.module.scss";

import ProjectImagesModal from "../ProjectImagesModal";

type THighlight = {
  title: string;
  details: string[];
};

type TProjectHeaderProps = {
  label: string;
  title: string;
  description: string;
  skills: string;
  images?: string[];
  imageAlt?: string;
};

type TLoamProjectDetailProps = TProjectHeaderProps & {
  highlights: THighlight[];
  url?: string;
};

export default function LoamProjectDetail(props: TLoamProjectDetailProps) {
  return (
    <section className={styles['loam-project-detail']}>
      <ProjectHeader {...props} />

      <div className={styles['main-contents']}>
        <h5 className={styles['main-contents-title']}>주요 내용</h5>
        <div className={styles['highlight-box']}>
          {props.highlights.map((highlight) => (
            <HighlightItem key={highlight.title} {...highlight} />
          ))}
          {props.url !== undefined && (
            <a
              className={styles['project-link']}
              href={props.url}
              target="_blank"
              rel="noreferrer"
            >
              {props.url}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectHeader(props: TProjectHeaderProps) {
  const hasImages = props.images !== undefined && props.images.length > 0;

  return (
    <header className={styles['project-header']}>
      <div className={styles['info-box']}>
        <p className={styles['label']}>{props.label}</p>
        <h4 className={styles['title']}>{props.title}</h4>
        <p className={styles['description']}>{props.description}</p>
        <p className={styles['skills']}>{props.skills}</p>
      </div>

      {hasImages === true && (
        <div className={styles['project-images']}>
          <ProjectImages
            images={props.images as string[]}
            imageAlt={props.imageAlt ?? '프로젝트 서비스 화면'}
          />
        </div>
      )}
    </header>
  );
}

function ProjectImages(props: { images: string[]; imageAlt: string }) {
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
          alt={props.imageAlt}
        />
      </button>

      {isProjectImagesModalOpen === true && (
        <ProjectImagesModal
          isOpen={isProjectImagesModalOpen}
          images={props.images.map((src, index) => ({
            src,
            alt: `${props.imageAlt} ${index + 1}`,
          }))}
          onClose={() => setIsProjectImagesModalOpen(false)}
        />
      )}
    </>
  );
}

function HighlightItem(props: THighlight) {
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
