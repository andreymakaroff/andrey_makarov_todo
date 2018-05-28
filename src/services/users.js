import { rest } from "./rest";

export const loginFetch = (data = {}) => rest.post(
  'public/login',
  data,
);

export const registrationUserFetch = (data = {}) => rest.post(
  'public/user',
  data,
);

export const updateUserFetch = (data = {}) => rest.put(
  'user',
  data,
);

export const checkUserFetch = () => rest.get('public/checkUser');

export const logoutFetch = () => rest.get('logout');

