import React from 'react';
import { Form, Input } from '@rocketseat/unform';

import logoTodo from '../../assets/LogoPageTodo.svg';
import addButton from '../../assets/addButton.svg';
import updateTodo from '../../assets/updateTodoIcon.svg';
import removeTodo from '../../assets/removeTodoIcon.svg';

import { Container, CardContainer, Card } from './styles';

function Todo() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <Container>
        <img src={logoTodo} alt="Todo Logo" />

        <Form onSubmit={handleSubmit}>
          <Input name="text" type="textarea"></Input>
          <button type="submit">
            <img src={addButton} alt="adicionar todo" />
          </button>
        </Form>

        <CardContainer>
          <Card>
            <p>Dar manutenção no portatil ir ao cinema</p>
            <span>
              <button>
                <img src={updateTodo} alt="update todo" />
              </button>
              <button>
                <img src={removeTodo} alt="remove todo" />
              </button>
            </span>
          </Card>
          <Card>
            <p>Atualizar a versão do linux para 20.6</p>
            <span>
              <button>
                <img src={updateTodo} alt="update todo" />
              </button>
              <button>
                <img src={removeTodo} alt="remove todo" />
              </button>
            </span>
          </Card>
          <Card>
            <p>Estudar NodeJs e ReactJs , React Native </p>
            <span>
              <button>
                <img src={updateTodo} alt="update todo" />
              </button>
              <button>
                <img src={removeTodo} alt="remove todo" />
              </button>
            </span>
          </Card>
          <Card>
            <p>Comprar mouse e teclado sem fio</p>
            <span>
              <button>
                <img src={updateTodo} alt="update todo" />
              </button>
              <button>
                <img src={removeTodo} alt="remove todo" />
              </button>
            </span>
          </Card>
          <Card>
            <p>Corrigir erro no app Todo</p>
            <span>
              <button>
                <img src={updateTodo} alt="update todo" />
              </button>
              <button>
                <img src={removeTodo} alt="remove todo" />
              </button>
            </span>
          </Card>
          <Card>
            <p>Adicionar modo noite ao app ToDo</p>
            <span>
              <button>
                <img src={updateTodo} alt="update todo" />
              </button>
              <button>
                <img src={removeTodo} alt="remove todo" />
              </button>
            </span>
          </Card>
        </CardContainer>
      </Container>
    </>
  );
}

export default Todo;
