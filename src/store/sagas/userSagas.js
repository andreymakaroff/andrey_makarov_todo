import { takeEvery, put } from 'redux-saga/effects';

import { GET_USER_ASYNC,
  LOGIN_USER_ASYNC,
  LOGOUT_USER_ASYNC,
  setUser,
  removeUser,
} from '../actions/actions';


import { checkUser, login, logout } from '../../services';

export function* getUser() {
  try {
    const user = yield checkUser();
    yield put(setUser(user));
  } catch (err) {
    yield put(setUser(null));
  }
}

export function* watchUser() {
  yield takeEvery(GET_USER_ASYNC, getUser);
}


export function* loginUser({ data }) {
  try {
    const user = yield login(data);
    yield put(setUser(user));
  } catch (err) {}
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER_ASYNC, loginUser);
}

export function* logoutUser() {
  try {
    yield logout();
    yield put(removeUser());    // => store.dispatch(type: REMOVE_USER)
  } catch (err) {}
}

export function* watchLogoutUserUser() {
  yield takeEvery(LOGOUT_USER_ASYNC, logoutUser);
}

// update logout login
