import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';

import logoTodo from '../../assets/LogoPageTodo.svg';
import addButton from '../../assets/addButton.svg';
import updateTodo from '../../assets/updateTodoIcon.svg';
import removeTodo from '../../assets/removeTodoIcon.svg';

import { todoRequest } from '../../store/modules/todo/actions';

import api from '../../services/api';

import { Container, CardContainer, Card } from './styles';

import { store } from '../../store';

function Todo() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(todoRequest(data.text));
  }

  const [stateTodo, setTodo] = useState([]);
  useEffect(() => {
    async function loadTodos() {
      const token = store.getState().auth.token;
      const response = await api.get('/user/todos', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
      setTodo(response.data);
    }

    loadTodos();
  }, [stateTodo]);

  const handleDelete = (id) => {
    const token = store.getState().auth.token;

    async function deleteTodo() {
      await api.delete(`/user/delete-todos/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
    }

    deleteTodo();
  };

  return (
    <>
      <Container>
        <img src={logoTodo} alt="Todo Logo" />

        <Form onSubmit={handleSubmit}>
          <Input name="text" type="text" placeholder="Criar to-do"></Input>
          <button type="submit">
            <img src={addButton} alt="botão adicionar todo" />
          </button>
        </Form>

        <CardContainer>
          {stateTodo.map((todo) => (
            <Card key={todo._id}>
              <p>{todo.description}</p>
              <span>
                <button>
                  <img src={updateTodo} alt="update todo" />
                </button>
                <button onClick={() => handleDelete(todo._id)}>
                  <img src={removeTodo} alt="remove todo" />
                </button>
              </span>
            </Card>
          ))}
        </CardContainer>
      </Container>
    </>
  );
}

export default Todo;
