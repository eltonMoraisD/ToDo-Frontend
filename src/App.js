import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import history from './services/history';
import Routes from './routes';

//o store precisa vir obrigatorio depois da configuraçao do reactotron
import store from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Switch>
          <Routes />
        </Switch>
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
