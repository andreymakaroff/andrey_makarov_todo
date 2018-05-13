export const GET_USER_ASYNC = 'Get user';
export const SET_USER = 'Set new user';
export const UPDATE_USER = 'Update exiting user';
export const REMOVE_USER = 'Remove user';

// actionCreator
export const getUser = data => ({ type: GET_USER_ASYNC, data });
export const setUser = data => ({ type: SET_USER, data });
export const updateUser = data => ({ type: UPDATE_USER, data });
export const removeUser = () => ({ type: REMOVE_USER });

export const UPDATE_TASK_LIST = 'Update exiting task list';
export const updateTaskList = data => ({ type: UPDATE_TASK_LIST, data });

export const SET_INFO = 'Set new info about tasks';
export const setInfo = data => ({ type: SET_INFO, data });

export const SET_ERROR = 'Set app error';
export const setError = data => ({ type: SET_ERROR, data });

export const LOGIN_USER_ASYNC = 'Login user';
export const loginUser = data => ({ type: LOGIN_USER_ASYNC, data });

export const LOGOUT_USER_ASYNC = 'Logout user';
export const logoutUser = () => ({ type: LOGOUT_USER_ASYNC });

