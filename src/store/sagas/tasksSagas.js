import { takeEvery, put } from 'redux-saga/effects';

import {
  CREATE_TASK_ASYNC,
  DELETE_TASK_ASYNC,
  UPDATE_TASK_ASYNC,
  UPDATE_TASK_LIST_ASYNC,
  createTask,
  deleteTask,
  updateTask,
  updateTaskList
} from '../actions';


import { getTasksFetch, deleteTaskFetch, updateTaskFetch, createTaskFetch } from '../../services';

export function* getTasks() {
  try {
    const tasks = yield getTasksFetch();
    yield put(updateTaskList(tasks));
  } catch (err) {
  }
}

export function* watchTasks() {
  yield takeEvery(UPDATE_TASK_LIST_ASYNC, getTasks);
}


export function* updateTaskFunc(data) {
  try {
    const task = yield updateTaskFetch(data.data);
    yield put(updateTask(task));
  } catch (err) {}
}

export function* watchUpdateTask() {
  yield takeEvery(UPDATE_TASK_ASYNC, updateTaskFunc);
}


export function* createTaskFunc(data) {
  try {
    const task = yield createTaskFetch(data.data);
    yield put(createTask(task));
  } catch (err) {}
}

export function* watchCreateTask() {
  yield takeEvery(CREATE_TASK_ASYNC, createTaskFunc);
}


export function* deleteTaskFunc({ id }) {
  try {
    const task = yield deleteTaskFetch(id);
    yield put(deleteTask(task));
  } catch (err) {}
}

export function* watchDeleteTask() {
  yield takeEvery(DELETE_TASK_ASYNC, deleteTaskFunc);
}
