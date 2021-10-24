import { all } from 'redux-saga/effects';
import todosSaga from './todos';
import userSaga from './user';

export default function* rootSaga() {
  yield all([
    todosSaga(),
    userSaga(),
  ]);
}
