import React from 'react';
import ReactLoading from 'react-loading';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatorio'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function Login() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <h1>Login</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="E-mail"></Input>

        <Input name="password" type="password" placeholder="Password" />

        <button type="submit">
          {loading ? (
            <ReactLoading type={'spokes'} height={20} width={20} />
          ) : (
            'Login'
          )}
        </button>
        <Link to="/register">criar conta gratuita</Link>
      </Form>
    </>
  );
}
