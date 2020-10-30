import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Todo from '../pages/Todo';
import UpdateUser from '../pages/UpdateUser';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}></Route>
      <Route path="/register" component={Register}></Route>
      <Route path="/todo-list" component={Todo} isPrivate></Route>
      <Route path="/update-user" component={UpdateUser} isPrivate></Route>

      {/* Se a rota não existir retornar um 404 */}
      {/* <Route path="/" component={() => <h1>404</h1>}></Route> */}
    </BrowserRouter>
  );
}
