import { rest } from "./rest";

export const getInfo = () => rest.get('info');

export const getTasks = () => rest.get('tasks');

export const getTask = id => rest.get(`tasks/${id}`);

export const updateTask = task => rest.put(`tasks/${task.id}`, task);

export const createTask = task => rest.post('tasks', task);

export const deleteTask = id => rest.delete(`tasks/${id}`);

