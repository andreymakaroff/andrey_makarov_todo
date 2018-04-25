import { rest } from "./rest";

export const login = (data = {}) => rest.post(
  'public/login',
  data,
);

export const checkUser = () => rest.get('public/checkUser');

export const logout = () => rest.get('logout');

