import { Route, Routes } from 'react-router-dom';

import { Brands } from '../components/Brands';

export const BrandsRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Brands />} />
    </Routes>
  );
};
