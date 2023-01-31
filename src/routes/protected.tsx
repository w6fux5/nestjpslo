import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { MainLayout } from '@/components/Layout';
import { lazyImport } from '@/utils/lazyImport';

const { BrandsRoutes } = lazyImport(() => import('@/features/brands'), 'BrandsRoutes');
const { GamePlayRoutes } = lazyImport(() => import('@/features/game-play'), 'GamePlayRoutes');
const { Lobby } = lazyImport(() => import('@/features/lobby'), 'Lobby');
const { GameInfo } = lazyImport(() => import('@/features/game-info'), 'GameInfo');

const ProtectRoutes = () => (
  <MainLayout>
    <Suspense
      fallback={<div className="h-full w-full flex items-center justify-center">fallback</div>}
    >
      <Outlet />
    </Suspense>
  </MainLayout>
);

export const protectedRoutes = [
  {
    path: '/app',
    element: <ProtectRoutes />,
    children: [
      { path: '', element: <BrandsRoutes /> },
      { path: 'lobby', element: <Lobby /> },
      { path: 'game-info', element: <GameInfo /> },
      { path: 'game-play', element: <GamePlayRoutes /> },
    ],
  },
];
