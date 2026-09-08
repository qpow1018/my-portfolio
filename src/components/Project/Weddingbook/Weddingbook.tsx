import FeatureDevelopment from "./FeatureDevelopment";
import WebExpansion from "./WebExpansion";
import WeddingbookHeader from "./WeddingbookHeader";
import styles from "./Weddingbook.module.scss";

export default function Weddingbook() {
  return (
    <article className={styles["weddingbook-project"]}>
      <WeddingbookHeader />

      <div className={styles["case-study"]}>
        <WebExpansion />
        <FeatureDevelopment />
      </div>
    </article>
  );
}
