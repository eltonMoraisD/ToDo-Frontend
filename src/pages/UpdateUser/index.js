import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';

import { updateProfileRequest } from '../../store/modules/user/actions';

import { Container, Button } from './styles';

function UpdateUser() {
  const profile = useSelector((state) => state.user.profile);
  const dispatch = useDispatch();
  function handleSubmit(data) {
    console.tron.log('index ' + data);
    dispatch(updateProfileRequest(data));
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <h1>Perfil</h1>
        <Input name="name" type="text" placeholder="Name" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="oldPassword" type="password" placeholder="Old Password" />
        <Input name="password" type="password" placeholder="New Password" />
        <Button type="submit" primary>
          Atualizar Perfil
        </Button>
      </Form>
    </Container>
  );
}

export default UpdateUser;
