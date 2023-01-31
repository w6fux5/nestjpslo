import { axios } from '@/lib/axios';

import { UserResponse } from '../types';

export type LoginDTO = {
  email: string;
  password: string;
};

export const login = (data: LoginDTO): Promise<UserResponse> => {
  return axios.post('/auth/login', data);
};
