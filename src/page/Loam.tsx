import LoamService from '@/components/Project/LoaM/LoamService';

import styles from './Loam.module.scss';

export default function Loam() {
  return (
    <main className={styles['loam-page']}>
      <LoamService />
    </main>
  );
}
