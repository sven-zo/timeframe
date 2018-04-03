import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './state/store';
import './App.css';
import DevTools from './containers/DevTools';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <div>
      <DevTools />
    </div>
  </Provider>
);

export default App;
