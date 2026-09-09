import { useState } from 'react';

import ProjectImagesModal from '../ProjectImagesModal';
import styles from './EarlierProjects.module.scss';

type TEarlierProjectThumbnailProps = {
  images: string[];
};

export default function EarlierProjectThumbnail({ images }: TEarlierProjectThumbnailProps) {
  const [isProjectImagesModalOpen, setIsProjectImagesModalOpen] = useState(false);

  return (
    <>
      <button
        className={styles['thumbnail-button']}
        type='button'
        onClick={() => setIsProjectImagesModalOpen(true)}
        aria-label='프로젝트 화면 확대'
      >
        <img src={images[0]} alt='' />
      </button>

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
    </>
  );
}
