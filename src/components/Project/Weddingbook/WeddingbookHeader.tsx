import { useState } from "react";

import WeddingbookHomeImage from "@/images/weddingbook/weddingbook_home.png";
import WeddingbookHonsuImage from "@/images/weddingbook/weddingbook_honsu.png";
import WeddingbookInvitationImage from "@/images/weddingbook/weddingbook_invitation.png";
import WeddingbookWeddinghallImage from "@/images/weddingbook/weddingbook_weddinghall.png";
import useWindowSize from "@/hooks/useWindowSize";

import ProjectImagesModal from "../ProjectImagesModal";
import styles from "./Weddingbook.module.scss";

const PROJECT_IMAGES = [
  WeddingbookInvitationImage,
  WeddingbookWeddinghallImage,
  WeddingbookHomeImage,
  WeddingbookHonsuImage,
];

export default function WeddingbookHeader() {
  const { isDesktop } = useWindowSize();
  const [isProjectImagesModalOpen, setIsProjectImagesModalOpen] =
    useState(false);

  return (
    <header className={styles["project-header"]}>
      <div className={styles["info-box"]}>
        <h2 className={styles["title"]}>웨딩북</h2>
        <p className={styles["description"]}>
          결혼 준비 서비스를 제공하는 플랫폼
        </p>
        <p className={styles["skills"]}>
          Next.js, React, TypeScript, TanStack Query, Zustand, SCSS, CSS Modules
        </p>
        <a
          className={styles["project-link"]}
          href="https://www.weddingbook.com"
          target="_blank"
          rel="noreferrer"
        >
          https://www.weddingbook.com
        </a>
      </div>

      <div className={styles["project-images"]}>
        <button
          className={styles["image-button"]}
          type="button"
          onClick={() => setIsProjectImagesModalOpen(true)}
        >
          <img
            className={styles["image"]}
            src={PROJECT_IMAGES[0]}
            alt="프로젝트 서비스 화면"
          />
        </button>
        {isProjectImagesModalOpen === true && (
          <ProjectImagesModal
            isDesktop={isDesktop}
            isOpen={isProjectImagesModalOpen}
            images={PROJECT_IMAGES}
            onClose={() => setIsProjectImagesModalOpen(false)}
          />
        )}
      </div>
    </header>
  );
}
