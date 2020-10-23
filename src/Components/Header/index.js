import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './styles';

import TodoLogo from '../../assets/TodoLogo.svg';
import userImg from '../../assets/usuarioTodo.svg';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="todo-list">
            <img src={TodoLogo} alt="Todo Logo" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Elton</strong>
              <Link to="/update-user">Meu Perfil</Link>
            </div>
            <Link to="/update-user">
              <img src={userImg} alt="nome do usuario" />
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
