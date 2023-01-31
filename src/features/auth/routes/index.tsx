import { Route, Routes } from 'react-router-dom';

export const AuthRoutes = () => {
  console.log('auth route');

  return (
    <Routes>
      <Route path="login" element={<div>login</div>} />
    </Routes>
  );
};
