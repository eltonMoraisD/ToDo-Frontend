import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Register() {
  return (
    <>
      <h1>Criar conta</h1>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Registrar</button>
        <Link to="/">já tenho conta</Link>
      </form>
    </>
  );
}

export default Register;
