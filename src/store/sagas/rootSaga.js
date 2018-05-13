import { all } from 'redux-saga/effects';

import {watchUser, watchLoginUser, watchLogoutUserUser} from './userSagas';

export function* rootSaga() {
  yield all([
    watchUser(),
    watchLoginUser(),
    watchLogoutUserUser()
  ]);
}