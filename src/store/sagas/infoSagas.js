import { takeEvery, put } from 'redux-saga/effects';
import {
  GET_INFO_ASYNC,
  setInfo,
} from '../actions';
import { getInfoFetch } from '../../services';

export function* getUser() {
  try {
    const data = yield getInfoFetch();
    yield put(setInfo(data));
  } catch (err) {
  }
}

export function* watchInfo() {
  yield takeEvery(GET_INFO_ASYNC, getUser);
}
