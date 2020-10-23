import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('O nome é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),

  password: Yup.string()
    .min(6, 'No minimo 6 caracteres')
    .required('A senha é obrigatoria'),
});

function Register() {
  function handleSubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <h1>Criar conta</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" type="text" placeholder="Name" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Password" />
        <button type="submit">Registrar</button>
        <Link to="/">já tenho conta</Link>
      </Form>
    </>
  );
}

export default Register;
