import { useRef, useEffect } from 'react';
import { useWindowSize } from 'react-use';

import { useContentSizeStore } from '@/stores/contentSizeStore';

import styles from './ContentLayout.module.scss';

type ContentLayoutProps = {
  children: React.ReactNode;
  header: () => JSX.Element;
};

export const ContentLayout = ({ children, header }: ContentLayoutProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { height, width } = useWindowSize();

  const { setWidth } = useContentSizeStore();

  useEffect(() => {
    if (!ref?.current) return;

    const currentWidth = ref.current.clientWidth;
    setWidth(currentWidth);
  }, [width, setWidth]);

  return (
    <section style={{ height }} className={styles.container}>
      <div className={styles.header}>{header()}</div>
      <div ref={ref} className={styles.body}>
        {children}
      </div>
    </section>
  );
};
