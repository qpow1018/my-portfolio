import type { ReactNode } from 'react';

import EarlierProjectThumbnail from './EarlierProjectThumbnail';
import styles from './EarlierProjects.module.scss';

type TEarlierProjectCardProps = {
  title: string;
  description: string[];
  skills: string;
  images: string[];
  children?: ReactNode;
};

export default function EarlierProjectCard({
  title,
  description,
  skills,
  images,
  children,
}: TEarlierProjectCardProps) {
  const hasImages = images.length > 0;

  return (
    <article className={styles['project-card']}>
      {hasImages && (
        <EarlierProjectThumbnail
          images={images}
        />
      )}

      <div className={styles['project-content']}>
        <h4 className={styles['project-title']}>{title}</h4>
        <div className={styles['description']}>
          {description.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <p className={styles['skills']}>{skills}</p>
        {children}
      </div>
    </article>
  );
}
