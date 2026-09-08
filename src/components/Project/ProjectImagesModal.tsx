import { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import styles from './ProjectImagesModal.module.scss';

type TProjectImagesModalProps = {
  isOpen: boolean;
  images: { src: string; alt: string }[];
  onClose: () => void;
};

export default function ProjectImagesModal({
  isOpen,
  images,
  onClose,
}: TProjectImagesModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen || !dialog) return;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [isOpen]);

  return createPortal(
    <dialog
      ref={dialogRef}
      className={styles['project-images-modal']}
      aria-labelledby={titleId}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return;

        const controls = event.currentTarget.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [tabindex="0"]',
        );
        const first = controls[0];
        const last = controls[controls.length - 1];
        const target = event.shiftKey ? first : last;
        if (document.activeElement === target) {
          event.preventDefault();
          (event.shiftKey ? last : first).focus();
        }
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div>
        <header className={styles['header']}>
          <h2 id={titleId} className={styles['title']}>프로젝트 화면</h2>
          <button
            className={styles['close-button']}
            type="button"
            onClick={onClose}
            autoFocus
          >
            닫기
          </button>
        </header>
        <Swiper
          className={styles['gallery']}
          modules={[A11y, Navigation, Pagination]}
          loop={hasMultipleImages}
          slidesPerView={1}
          navigation={hasMultipleImages}
          pagination={hasMultipleImages ? { clickable: true } : false}
          a11y={{
            prevSlideMessage: '이전 이미지',
            nextSlideMessage: '다음 이미지',
            paginationBulletMessage: '{{index}}번째 이미지로 이동',
            slideLabelMessage: '{{slidesLength}}개 중 {{index}}번째 이미지',
          }}
        >
          {images.map((image) => (
            <SwiperSlide key={image.src}>
              <img
                className={styles['image']}
                src={image.src}
                alt={image.alt}
                draggable={false}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </dialog>,
    document.body,
  );
}
