import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import history from '../../../services/history';
import { store } from '../../../store';

import api from '../../../services/api';

import { updateProfileFailure, updateProfileSuccess } from './actions';

export function* updateProfile({ payload }) {
  const token = store.getState().auth.token;

  try {
    const { name, email, ...rest } = payload.data;

    const profile = Object.assign(
      { name, email },
      rest.oldPassword ? rest : {}
    );

    const response = yield call(api.put, '/auth/user-update', profile, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });

    toast.success('Perfil atualizado com sucesso');
    history.back('/todo-list');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    toast.error('A atualização do Perfil falhou,confira seus dados');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
