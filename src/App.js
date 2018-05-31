/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import configureStore from './state/store';
import './App.css';
import DevTools from './containers/DevTools';
import HomeContainer from './containers/HomeContainer';

const store = configureStore();
const history = createHistory();

const App = () => (
  <Provider store={store}>
    <div className="app">
      <DevTools />
      <Router history={history}>
        <Route path="/" component={HomeContainer} />
      </Router>
    </div>
  </Provider>
);

export default App;
