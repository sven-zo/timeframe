import React from 'react';
import { Router, Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import configureStore from './state/store';
import './App.css';
import Home from './components/Home';
import DevTools from './containers/DevTools';

const store = configureStore();
const history = createHistory();

const App = () => (
  <Provider store={store}>
    <div>
      <DevTools />
      <Router history={history}>
        <Route path="/" component={Home} />
      </Router>
    </div>
  </Provider>
);


export default App;
