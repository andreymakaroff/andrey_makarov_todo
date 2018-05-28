import { takeEvery, put } from 'redux-saga/effects';

import {
  GET_USER_ASYNC,
  LOGIN_USER_ASYNC,
  LOGOUT_USER_ASYNC,
  UPDATE_USER_ASYNC,
  setUser,
  removeUser,
} from '../actions';


import { checkUserFetch, loginFetch, logoutFetch, updateUserFetch } from '../../services';

export function* getUser() {
  try {
    const user = yield checkUserFetch();
    yield put(setUser(user));
  } catch (err) {
    yield put(setUser(null));
  }
}

export function* watchUser() {
  yield takeEvery(GET_USER_ASYNC, getUser);
}


export function* updateUser({ data }) {
  try {
    const user = yield updateUserFetch(data);
    yield put(setUser(user));
  } catch (err) {}
}

export function* watchUpdateUser() {
  yield takeEvery(UPDATE_USER_ASYNC, updateUser);
}


export function* loginUser({ data }) {
  try {
    const user = yield loginFetch(data);
    yield put(setUser(user));
  } catch (err) {}
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER_ASYNC, loginUser);
}


export function* logoutUser() {
  try {
    yield logoutFetch();
    yield put(removeUser()); // => store.dispatch(type: REMOVE_USER)
  } catch (err) {}
}

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER_ASYNC, logoutUser);
}

