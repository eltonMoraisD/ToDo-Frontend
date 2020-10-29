import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';

import { signInSuccess, signFailure } from './actions';

import history from '../../../services/history';

export function* login({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, '/auth/authenticate', {
      email,
      password,
    });

    const { token, user } = response.data;

    yield put(signInSuccess(token, user));
    history.push('/todo-list');
  } catch (error) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export function* register({ payload }) {
  try {
    const { name, email, password } = payload;
    yield call(api.post, '/auth/register', {
      name,
      email,
      password,
    });
    history.back('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados');
    yield put(signFailure());
  }
}

export function sair() {
  history.back('/');
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', login),
  takeLatest('@auth/SIGN_UP_REQUEST', register),
  takeLatest('@auth/SIGN_OUT', sair),
]);
