import { useState } from 'react';

import ProjectImagesModal from '../ProjectImagesModal';
import styles from './EarlierProjectCard.module.scss';

type TEarlierProjectCardProps = {
  title: string;
  summary: string;
  skills: string[];
  highlights: string[];
  serviceUrl?: string;
  images: string[];
};

export default function EarlierProjectCard({
  title,
  summary,
  skills,
  highlights,
  serviceUrl,
  images,
}: TEarlierProjectCardProps) {
  const hasImages = images.length > 0;
  const [isProjectImagesModalOpen, setIsProjectImagesModalOpen] = useState(false);

  return (
    <article className={styles['project-card']}>
      {hasImages && (
        <button
          className={styles['thumbnail-button']}
          type='button'
          onClick={() => setIsProjectImagesModalOpen(true)}
          aria-label='프로젝트 화면 확대'
        >
          <img src={images[0]} alt='' />
        </button>
      )}

      <div className={styles['project-content']}>
        <h4 className={styles['project-title']}>{title}</h4>
        <p className={styles['summary']}>{summary}</p>
        {serviceUrl && (
          <a
            className={styles['service-link']}
            href={serviceUrl}
            target='_blank'
            rel='noreferrer'
          >
            {serviceUrl}
          </a>
        )}
        <p className={styles['skills']}>{skills.join(', ')}</p>
        <div className={styles['highlights']}>
          {highlights.map((highlight) => (
            <p key={highlight}>{highlight}</p>
          ))}
        </div>
      </div>
      {isProjectImagesModalOpen && (
        <ProjectImagesModal
          isOpen={isProjectImagesModalOpen}
          images={images.map((src, index) => ({
            src,
            alt: `프로젝트 서비스 화면 ${index + 1}`,
          }))}
          onClose={() => setIsProjectImagesModalOpen(false)}
        />
      )}
    </article>
  );
}
