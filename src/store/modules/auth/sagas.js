import { takeLatest, call, put, all } from 'redux-saga/effects';
import api from '../../../services/api';

import { signInSuccess } from './actions';

import history from '../../../services/history';

export function* login({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, '/auth/authenticate', {
    email,
    password,
  });

  const { token, user } = response.data;

  if (!token) {
    console.tron.log('Usuario não identificado');
    return;
  }

  yield put(signInSuccess(token, user));
  history.push('/todo-list');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', login)]);
