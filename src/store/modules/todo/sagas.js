import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import { todoFailure, todoSuccess } from './actions';
import { store } from '../../../store';

export function* createTodo({ payload }) {
  const token = store.getState().auth.token;

  try {
    const todo = payload.data;

    const response = yield call(
      api.post,
      '/user/create-todos',
      { description: todo },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      }
    );
    toast.success('Todo criado com sucesso');
    yield put(todoSuccess(response.data));
  } catch (error) {
    toast.error('A criação de um TODO falhou');
    yield put(todoFailure());
  }
}

export default all([takeLatest('@todo/TODO_REQUEST', createTodo)]);
