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

export default all([takeLatest('@auth/SIGN_IN_REQUEST', login)]);
