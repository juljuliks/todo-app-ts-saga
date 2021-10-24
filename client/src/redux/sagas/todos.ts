import {
  takeEvery, call, put, StrictEffect,
} from 'redux-saga/effects';
import { actions } from '../slices';
import {
  deleteData, getData, postData, editData,
} from '../tools';
import { ITodo } from '../../types';

interface IDeleteTodoAction {
  type: string;
  payload: { todoId: number }
}

interface ICreateTodoAction {
  type: string;
  payload: ITodo
}

interface IEditTodoAction {
  type: string;
  payload: ITodo
}

function* getAllTodos(): Generator<StrictEffect> {
  try {
    const allTodos: any = yield call(getData, '/api/todos');
    yield put(actions.getAllTodosFullfilled(allTodos));
  } catch (e) {
    yield put(actions.getAllTodosRejected(e));
  }
}

function* createTodo({ payload }: ICreateTodoAction): Generator<StrictEffect> {
  try {
    const newTodo: any = yield call(postData, '/api/todos', payload);
    yield put(actions.createTodoFullfilled(newTodo));
  } catch (e) {
    yield put(actions.createTodoRejected(e));
  }
}

function* deleteTodo({ payload }: IDeleteTodoAction): Generator<StrictEffect> {
  try {
    yield call(deleteData, '/api/todos/', payload.todoId);
    yield put(actions.deleteTodoFullfilled(payload));
  } catch (e) {
    yield put(actions.deleteTodoRejected(e));
  }
}

function* editTodo({ payload }: IEditTodoAction): Generator<StrictEffect> {
  try {
    yield call(editData, '/api/todos/', payload);
    yield put(actions.editTodoFullfilled(payload));
  } catch (e) {
    yield put(actions.editTodoRejected(e));
  }
}

export default function* todosSaga() {
  yield takeEvery(`${actions.getAllTodosPending}`, getAllTodos);
  yield takeEvery(`${actions.createTodoPending}`, createTodo);
  yield takeEvery(`${actions.deleteTodoPending}`, deleteTodo);
  yield takeEvery(`${actions.editTodoPending}`, editTodo);
}
