import React, { useEffect } from 'react';
import { useSearchParam } from 'react-use';

import { useAuth } from '../auth';

export const Landing = () => {
  const token = useSearchParam('token');
  const { login } = useAuth();

  useEffect(() => {
    if (!token) return;
    login({ token });
  }, [token, login]);
  return <div>Landing</div>;
};
