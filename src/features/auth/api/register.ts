import { axios } from '@/lib/axios';

import { UserResponse } from '../types';

export type RegisterDTO = {
  email: string;
  password: string;
};

export const register = (data: RegisterDTO): Promise<UserResponse> => {
  return axios.post('/auth/register', data);
};
