import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <h1>Login</h1>
      <form action="">
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <Link to="/register">criar conta gratuita</Link>
      </form>
    </>
  );
}

export default Login;
