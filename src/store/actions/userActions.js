// actionCreator
export const SET_ERROR = 'Set app error';
export const setError = data => ({ type: SET_ERROR, data });

export const SET_USER = 'Set new user';
export const UPDATE_USER = 'Update exiting user';
export const setUser = data => ({ type: SET_USER, data });

export const REMOVE_USER = 'Remove user';
export const removeUser = () => ({ type: REMOVE_USER });

export const GET_USER_ASYNC = 'Get user';
export const getUser = data => ({ type: GET_USER_ASYNC, data });

export const UPDATE_USER_ASYNC = 'Update user';
export const updateUserAsync = data => ({ type: UPDATE_USER_ASYNC, data });

export const LOGIN_USER_ASYNC = 'Login user';
export const loginUserAsync = data => ({ type: LOGIN_USER_ASYNC, data });

export const LOGOUT_USER_ASYNC = 'Logout user';
export const logoutUserAsync = () => ({ type: LOGOUT_USER_ASYNC });
