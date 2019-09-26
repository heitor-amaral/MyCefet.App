import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';

import Store from './store'
import Navigation from './routes'

function App() {
  return (
    <Provider store={Store}>
      <Navigation />
    </Provider>
  );
}

export default App;
