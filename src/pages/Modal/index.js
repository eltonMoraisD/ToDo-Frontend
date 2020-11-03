import React, { useState } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

import api from '../../services/api';

import { store } from '../../store';

import './style.css';
const Modal = ({ handleClose, show, children, todo }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  const [state, setState] = useState({ todo: todo });
  const inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
    setState({ todo: updatedKeyword });
  };
  const handleUpdate = (id) => {
    const token = store.getState().auth.token;
    async function updateTodo() {
      try {
        api.put(`/user/update-todos/${id}`, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
          },
        });
      } catch (error) {}
    }
    updateTodo();
  };
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="container-input">
          <input
            value={state.todo}
            name="update ToDo"
            onChange={(e) => inputChangedHandler(e)}
          ></input>
        </div>

        <div className="container-btn">
          <button onClick={() => handleUpdate(todo._id)} className="btn-update">
            <FaCheck />
          </button>
          <button className="sair" onClick={handleClose}>
            <FaTimes />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Modal;
