import { useNavigate } from 'react-router-dom';

import styles from './Brand.module.scss';

export const Brand = ({ brand }: { brand: string }) => {
  const navigate = useNavigate();
  return (
    <div
      role="presentation"
      className={`${styles.brand} ${styles?.[brand]}`}
      onClick={() => {
        navigate(`lobby?${brand}`);
      }}
    />
  );
};
