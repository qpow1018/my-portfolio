import { useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './Header.module.scss';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!isMenuOpen || !dialog) return;

    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    dialog.showModal();
    document.body.style.overflow = 'hidden';

    function handleResize() {
      if (menuButton && getComputedStyle(menuButton).display === 'none') {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      dialog.close();
      document.body.style.overflow = previousOverflow;
      menuButton?.focus();
    };
  }, [isMenuOpen]);

  function handleMenuClose() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsMenuOpen(false);
      return;
    }
    setIsMenuClosing(true);
  }

  return (
    <header className={styles['header']}>
      <div className={styles['container']}>
        <Link className={styles['name']} to='/'>최원진 포트폴리오</Link>
        <nav className={styles['desktop-menu']} aria-label='프로젝트'>
          <NavLink to='/' end>웨딩북</NavLink>
          <NavLink to='/loam'>LoaM</NavLink>
          <NavLink to='/etc'>ETC</NavLink>
        </nav>
        <button
          ref={menuButtonRef}
          className={styles['menu-button']}
          type='button'
          aria-label='프로젝트 메뉴 열기'
          aria-expanded={isMenuOpen}
          aria-controls={menuId}
          onClick={() => {
            setIsMenuClosing(false);
            setIsMenuOpen(true);
          }}
        >
          <svg viewBox='0 0 24 24' aria-hidden='true'>
            <path d='M4 6h16M4 12h16M4 18h16' fill='none' stroke='currentColor' strokeWidth='1.8' />
          </svg>
        </button>
      </div>
      <dialog
        ref={dialogRef}
        id={menuId}
        className={styles['mobile-menu']}
        data-closing={isMenuClosing}
        aria-labelledby={titleId}
        onCancel={(event) => {
          event.preventDefault();
          handleMenuClose();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) handleMenuClose();
        }}
      >
        <div
          className={styles['menu-panel']}
          onAnimationEnd={(event) => {
            if (event.target === event.currentTarget && isMenuClosing) {
              setIsMenuOpen(false);
            }
          }}
        >
          <div className={styles['menu-heading']}>
            <h2 id={titleId}>프로젝트</h2>
            <button type='button' aria-label='프로젝트 메뉴 닫기' autoFocus onClick={handleMenuClose}>
              <svg viewBox='0 0 24 24' aria-hidden='true'>
                <path d='m6 6 12 12M18 6 6 18' fill='none' stroke='currentColor' strokeWidth='1.8' />
              </svg>
            </button>
          </div>
          <nav aria-label='프로젝트'>
            <NavLink to='/' end onClick={handleMenuClose}>웨딩북</NavLink>
            <NavLink to='/loam' onClick={handleMenuClose}>LoaM</NavLink>
            <NavLink to='/etc' onClick={handleMenuClose}>ETC</NavLink>
          </nav>
        </div>
      </dialog>
    </header>
  );
}
