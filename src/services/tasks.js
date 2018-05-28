import { rest } from "./rest";

export const getTasksFetch = () => rest.get('tasks');

export const getTask = id => rest.get(`tasks/${id}`);

export const createTaskFetch = task => rest.post('tasks', task);

export const updateTaskFetch = task => rest.put(`tasks/${task.id}`, task);

export const deleteTaskFetch = id => rest.delete(`tasks/${id}`);

