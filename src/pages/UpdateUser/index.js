import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import { Container, Button } from './styles';

function UpdateUser() {
  return (
    <Container>
      <Form>
        <h1>Perfil</h1>
        <Input name="name" type="text" placeholder="Name" />
        <Input name="email" type="email" placeholder="E-mail" />
        <Input name="password" type="password" placeholder="Old Password" />
        <Input name="password" type="password" placeholder="New Password" />
        <Button type="submit" primary>
          Update Perfil
        </Button>
      </Form>
    </Container>
  );
}

export default UpdateUser;
