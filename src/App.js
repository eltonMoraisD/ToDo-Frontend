import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Router, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './config/ReactotronConfig';

import history from './services/history';
import Routes from './routes';

//o store precisa vir obrigatorio depois da configuraçao do reactotron
import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Switch>
          <Routes />
        </Switch>
        <GlobalStyle />
        <ToastContainer autoClose={4000} />
      </PersistGate>
    </Provider>
  );
}

export default App;
