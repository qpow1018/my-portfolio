import WeddingbookService from "./Weddingbook/WeddingbookService";
import styles from "./Project.module.scss";

export default function Project() {
  return (
    <section aria-label="대표 프로젝트" className={styles["project"]}>
      <div className={styles["container"]}>
        <div className={styles["project-content"]}>
          <WeddingbookService />
        </div>
      </div>
    </section>
  );
}
