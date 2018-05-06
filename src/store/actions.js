export const SET_USER = 'Set new user';
export const UPDATE_USER = 'Update exiting user';
export const REMOVE_USER = 'Remove user';

//actionCreator
export const setUserStore = data => ({ type: SET_USER, data });
export const updateUserStore = data => ({ type: UPDATE_USER, data });
export const removeUserStore = () => ({ type: REMOVE_USER });

