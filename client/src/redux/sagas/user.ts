import {
  takeEvery, call, put, StrictEffect,
} from 'redux-saga/effects';
import { actions } from '../slices';
import { getData, postData } from '../tools';
import { IProfile } from '../../types';

interface ILoginUserAction {
  type: string;
  payload: IProfile
}

function* loginUser({ payload }: ILoginUserAction): Generator<StrictEffect> {
  try {
    const loggedUser = yield call(postData, '/api/login', payload);
    yield put(actions.loginUserFullfilled(loggedUser as IProfile));
  } catch (e) {
    console.log(e);
    yield put(actions.loginUserRejected(e));
  }
}

function* logoutUser(): Generator<StrictEffect> {
  try {
    yield call(getData, '/api/logout');
    yield put(actions.logoutUserFullfilled());
  } catch (e) {
    console.log(e);
    yield put(actions.logoutUserRejected(e));
  }
}

function* registerUser({ payload }: ILoginUserAction): Generator<StrictEffect> {
  try {
    const loggedUser = yield call(postData, '/api/register', payload);
    yield put(actions.loginUserFullfilled(loggedUser as IProfile));
  } catch (e) {
    console.log(e);
    yield put(actions.loginUserRejected(e));
  }
}

function* loginInitialUser(): Generator<StrictEffect> {
  try {
    const loggedUser = yield call(getData, '/api/me');
    yield put(actions.loginUserFullfilled(loggedUser as IProfile));
  } catch (e) {
    console.log(e);
    yield put(actions.loginUserRejected(e));
  }
}

export default function* userSaga() {
  yield takeEvery(`${actions.loginUserPending}`, loginUser);
  yield takeEvery(`${actions.logoutUserPending}`, logoutUser);
  yield takeEvery(`${actions.registerUserPending}`, registerUser);
  yield takeEvery(`${actions.getInitialUserPending}`, loginInitialUser);
}
