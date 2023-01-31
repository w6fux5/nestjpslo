import { useLocation } from 'react-use';

export const useUrlQuery = () => {
  const location = useLocation();
  const queryStr = location?.search?.split('?')?.[1] || '';
  return { queryStr };
};
