import React, { useEffect, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import logoTodo from '../../assets/LogoPageTodo.svg';
import addButton from '../../assets/addButton.svg';
import updateTodo from '../../assets/updateTodoIcon.svg';
import removeTodo from '../../assets/removeTodoIcon.svg';

import { todoRequest } from '../../store/modules/todo/actions';

import api from '../../services/api';

import { Container, CardContainer, Card } from './styles';

import { store } from '../../store';

import Modal from '../Modal';

function Todo(props) {
  const dispatch = useDispatch();
  const [stateTodo, setTodo] = useState([]);

  function handleSubmit(data) {
    dispatch(todoRequest(data.text));
  }

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
      try {
        await api.delete(`/user/delete-todos/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
        toast.success('Todo Deletado');
      } catch (error) {
        toast.error('Falha ao deletar todo');
      }
    }

    deleteTodo();
  };

  const [state, setState] = useState({ show: false });

  const showModal = (id) => {
    setState({
      show: {
        [id]: true,
      },
    });
  };

  const hideModal = () => {
    setState({ show: false });
  };

  return (
    <>
      <Container>
        <img src={logoTodo} alt="Todo Logo" />

        <Form onSubmit={handleSubmit}>
          <Input
            value={stateTodo.description}
            name="text"
            type="text"
            placeholder="Criar to-do"
          ></Input>
          <button type="submit">
            <img src={addButton} alt="botão adicionar todo" />
          </button>
        </Form>

        <CardContainer>
          {stateTodo.map((todo) => (
            <Card key={todo._id}>
              <p>{todo.description}</p>
              <span>
                <button
                  variant="primary"
                  onClick={showModal.bind(this, todo._id)}
                >
                  <img src={updateTodo} alt="update todo" />
                </button>

                <Modal
                  todo={todo.description}
                  show={state.show[todo._id]}
                  handleClose={hideModal}
                />
                <button type="button" onClick={() => handleDelete(todo._id)}>
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
