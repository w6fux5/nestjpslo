import { useQuery } from 'react-query';

import { axios } from '@/lib/axios';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

// import { Discussion } from '../types';

type Egms = any;

export const getEgms = (): Promise<Egms[]> => {
  return axios.get('/egmList');
};

type QueryFnType = typeof getEgms;

type UseEgmsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useEgms = ({ config }: UseEgmsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['egms'],
    queryFn: () => getEgms(),
  });
};
