import WeddingbookService from "./Weddingbook/WeddingbookService";
import styles from "./Project.module.scss";

export default function Project() {
  return (
    <section aria-labelledby="projects-title" className={styles["project"]}>
      <div className={styles["container"]}>
        <h2 className={styles["section-title"]} id="projects-title">
          My Project
        </h2>

        <div className={styles["project-content"]}>
          <WeddingbookService />
        </div>
      </div>
    </section>
  );
}
