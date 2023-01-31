import classnames from 'classnames';
import { useNavigate } from 'react-router-dom';

import { useUrlQuery } from '../hooks';

import styles from './LobbyHeader.module.scss';

const DUMMY_DATA = { sammy: 2, daito: 3 };
const brandList = Object.keys(DUMMY_DATA);

export const LobbyHeader = () => {
  const { queryStr } = useUrlQuery();

  const navigate = useNavigate();

  const onSelect = (key: string) => {
    navigate({
      pathname: '.',
      search: `?${key}`,
    });
  };

  const onBack = () => {
    navigate('/app');
  };

  return (
    <div className={styles['lobby-header']}>
      <div role="presentation" onClick={onBack} className={styles['back-btn']} />

      <div className={styles.box}>
        {brandList.map((brand) => (
          <div
            key={brand}
            role="presentation"
            onClick={() => onSelect(brand)}
            className={classnames(styles['brand-btn'], {
              [styles['brand-select']]: brand === queryStr,
            })}
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
};
