export const UPDATE_TASK_LIST = 'Update exiting task list';
export const updateTaskList = data => ({ type: UPDATE_TASK_LIST, data });

export const UPDATE_TASK = 'update task';
export const updateTask = data => ({ type: UPDATE_TASK, data });

export const CREATE_TASK = 'create new task';
export const createTask = data => ({ type: CREATE_TASK, data });

export const DELETE_TASK = 'delete task';
export const deleteTask = data => ({ type: DELETE_TASK, data });

export const UPDATE_TASK_LIST_ASYNC = 'Update exiting task list async';
export const updateTaskListAsync = () => ({ type: UPDATE_TASK_LIST_ASYNC });

export const CREATE_TASK_ASYNC = 'create task async';
export const createTaskAsync = data => ({ type: CREATE_TASK_ASYNC, data });

export const UPDATE_TASK_ASYNC = 'update task async';
export const updateTaskAsync = data => ({ type: UPDATE_TASK_ASYNC, data });

export const DELETE_TASK_ASYNC = 'delete task async';
export const deleteTaskAsync = id => ({ type: DELETE_TASK_ASYNC, id });
