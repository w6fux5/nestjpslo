import { axios } from '@/lib/axios';

import { UserResponse } from '../types';

export type LoginDTO = {
  token: string;
};

export const login = (data: LoginDTO): Promise<UserResponse> => {
  return axios.post('/access/login', data);
};
