import type { ReactNode } from 'react';

import styles from './EarlierProjects.module.scss';

type TEarlierProjectTextProps = {
  type?: 'default' | 'dot' | 'indent';
  children?: ReactNode;
};

export default function EarlierProjectText({
  type = 'default',
  children,
}: TEarlierProjectTextProps) {
  return (
    <p className={`${styles['project-text']} ${styles[`is-${type}`]}`}>
      {type === 'dot' && <span className={styles['dot']} aria-hidden='true' />}
      {children}
    </p>
  );
}
