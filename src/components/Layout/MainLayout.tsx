import React from 'react';
import { useWindowSize } from 'react-use';

import styles from './MainLayout.module.scss';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { height, width } = useWindowSize();
  return (
    <main style={{ height, width }} className={styles.container}>
      {children}
    </main>
  );
};
