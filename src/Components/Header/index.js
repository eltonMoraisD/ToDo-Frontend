import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signOut } from '../../store/modules/auth/actions';

import { Container, Content, Profile } from './styles';

import TodoLogo from '../../assets/TodoLogo.svg';
import logOutButton from '../../assets/logOut.svg';

function Header() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOut());
  }

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
              <strong>{profile.name}</strong>
              <Link to="/update-user">Meu Perfil</Link>
            </div>
            <Link to="/" onClick={handleSignOut}>
              <img src={logOutButton} alt="Botão sair" />
            </Link>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
