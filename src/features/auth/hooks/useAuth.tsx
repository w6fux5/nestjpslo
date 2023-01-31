import { initReactQueryAuth } from 'react-query-auth';

import { storage } from '@/utils/storage';

import { RegisterDTO, register, getUser, login, LoginDTO } from '../api';
import { AuthUser, UserResponse } from '../types';

const handleUserResponse = async (data: UserResponse) => {
  const { jwt, user } = data;
  storage.setToken(jwt);
  return user;
};

const loadUser = async () => {
  if (storage.getToken()) {
    const data = await getUser();
    return data;
  }
  return null;
};

const loginFn = async (data: LoginDTO) => {
  const response = await login(data);
  const user = await handleUserResponse(response);
  return user;
};

const registerFn = async (data: RegisterDTO) => {
  const response = await register(data);
  const user = await handleUserResponse(response);
  return user;
};

const logoutFn = async () => {
  storage.clearToken();
  window.location.assign(window.location.origin as unknown as string);
};

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  LoaderComponent() {
    return <div className="w-screen h-screen flex justify-center items-center">spinner</div>;
  },
};

export const { AuthProvider, useAuth } = initReactQueryAuth<
  AuthUser | null,
  unknown,
  LoginDTO,
  RegisterDTO
>(authConfig);
