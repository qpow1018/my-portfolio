import { useState, type ReactNode } from 'react';

import ProjectImagesModal from '../ProjectImagesModal';
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
        <div className={styles['description']}>
          {description.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <p className={styles['skills']}>{skills}</p>
        {children}
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
