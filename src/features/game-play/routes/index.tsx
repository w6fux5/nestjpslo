import { Route, Routes } from 'react-router-dom';

import { GamePlay } from '../components/GamePlay';

export const GamePlayRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<GamePlay />} />
    </Routes>
  );
};
