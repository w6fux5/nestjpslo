import { ContentLayout } from '@/components';

import { Brand } from './Brand';
import styles from './Brands.module.scss';
import { BrandsHeader } from './BrandsHeader';

const DUMMY_DATA = { sammy: 2, daito: 3 };

export const Brands = () => {
  const brandList = Object.keys(DUMMY_DATA);
  return (
    <ContentLayout header={BrandsHeader}>
      <div className={styles['brand-list']}>
        {brandList.map((brand) => (
          <Brand key={brand} brand={brand} />
        ))}
      </div>
    </ContentLayout>
  );
};
