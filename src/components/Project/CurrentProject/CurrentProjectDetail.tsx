import useWindowSize from '@/hooks/useWindowSize';

import styles from './CurrentProjectDetail.module.scss';

type Highlight = {
  title: string;
  details: string[];
};

export default function CurrentProjectDetail(
  props: {
    label: string;
    title: string;
    description: string;
    skills: string;
    highlights: Highlight[];
    url: string;
    images?: string[];
    isSubsequent?: boolean;
  }
) {
  const { isDesktop } = useWindowSize();
  const hasImages = props.images !== undefined && props.images.length > 0;
  const rootClassName = [
    styles.root,
    props.isSubsequent === true ? styles.subsequent : '',
    isDesktop === true ? styles.desktop : '',
  ].filter(Boolean).join(' ');

  return (
    <section className={rootClassName}>
      <header className={styles.projectHeader}>
        <div>
          <p className={styles.label}>{ props.label }</p>
          <h4 className={styles.title}>{ props.title }</h4>
        </div>
        <p className={styles.description}>{ props.description }</p>
      </header>

      <p
        className={`${styles.skills} ${hasImages === true ? styles.skillsWithImages : ''}`}
      >
        { props.skills }
      </p>

      { hasImages === true &&
        <ProjectImages images={props.images as string[]} />
      }

      <div className={styles.contributions}>
        <h5 className={styles.contributionsTitle}>KEY CONTRIBUTIONS</h5>
        <div>
          { props.highlights.map((highlight) =>
            <HighlightItem key={highlight.title} {...highlight} />
          )}
        </div>
      </div>

      <a
        className={styles.projectLink}
        href={props.url}
        target='_blank'
        rel='noreferrer'
      >
        { props.url }
      </a>
    </section>
  );
}

function ProjectImages(props: { images: string[] }) {
  return (
    <div className={styles.images}>
      { props.images.map((image) =>
        <img
          className={styles.image}
          key={image}
          src={image}
          alt='웨딩북 서비스 화면'
        />
      )}
    </div>
  );
}

function HighlightItem(props: Highlight) {
  return (
    <article className={styles.highlight}>
      <h6 className={styles.highlightTitle}>{ props.title }</h6>
      { props.details.length > 0 &&
        <ul className={styles.highlightDetails}>
          { props.details.map((detail) => <li key={detail}>{ detail }</li>) }
        </ul>
      }
    </article>
  );
}
