export const SET_USER = 'Set new user';
export const UPDATE_USER = 'Update exiting user';
export const REMOVE_USER = 'Remove user';

export const SET_TASK_LIST = 'Set new task list';
export const UPDATE_TASK_LIST = 'Update exiting task list';

// actionCreator
export const setUser = data => ({ type: SET_USER, data });
export const updateUser = data => ({ type: UPDATE_USER, data });
export const removeUser = () => ({ type: REMOVE_USER });


// export const setTaskList = data => ({ type: SET_TASK_LIST, data });
export const updateTaskList = data => ({ type: UPDATE_TASK_LIST, data });
// export const removeTaskList = () => ({ type: REMOVE_USER });

