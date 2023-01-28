import React from 'react';
import {Provider} from 'react-redux';
import Router from './src/router';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
