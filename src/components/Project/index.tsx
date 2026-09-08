import Weddingbook from "./Weddingbook/Weddingbook";
import styles from "./Project.module.scss";

export default function Project() {
  return (
    <section aria-label="대표 프로젝트" className={styles["project"]}>
      <div className={styles["container"]}>
        <h2 className={styles["section-heading"]}>대표 프로젝트</h2>
        <div className={styles["project-content"]}>
          <Weddingbook />
        </div>
      </div>
    </section>
  );
}
