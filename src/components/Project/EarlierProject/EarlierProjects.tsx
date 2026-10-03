import DiscoveryMall from './DiscoveryMall';
import FlaboCommunity from './FlaboCommunity';
import MediaFestival from './MediaFestival';
import FlaboAdPlatform from './FlaboAdPlatform';
import styles from './EarlierProjects.module.scss';

export default function EarlierProjects() {
  return (
    <section
      className={styles['earlier-projects']}
      aria-labelledby='earlier-projects-title'
    >
      <div className={styles['container']}>
        <h1 id='earlier-projects-title' className={styles['title']}>
          기타 프로젝트
        </h1>

        <DiscoveryMall />
        <FlaboCommunity />
        <MediaFestival />
        <FlaboAdPlatform />
      </div>
    </section>
  );
}
