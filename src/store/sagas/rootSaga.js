import { all } from 'redux-saga/effects';

import { watchUser, watchLoginUser, watchLogoutUser, watchUpdateUser } from './userSagas';
import { watchTasks, watchCreateTask, watchDeleteTask, watchUpdateTask } from './tasksSagas';
import { watchInfo } from './infoSagas';

export function* rootSaga() {
  yield all([
    watchUser(),
    watchLoginUser(),
    watchLogoutUser(),
    watchUpdateUser(),

    watchTasks(),
    watchCreateTask(),
    watchUpdateTask(),
    watchDeleteTask(),

    watchInfo(),
  ]);
}
