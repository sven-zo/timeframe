/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { Provider } from 'react-redux';
import configureStore from './state/store';
import './App.css';
import DevTools from './containers/DevTools';
import HomeContainer from './containers/HomeContainer';
import TrackingCodeForm from './components/TrackingCodeForm';
import Help from './components/Help';

const store = configureStore();
const history = createHistory();

const App = () => (
  <Provider store={store}>
    <div className="app">
      <DevTools />
      <Router history={history}>
        <Switch>
          <Route path="/information" component={() => <HomeContainer store={store} />} />
          <Route path="/help" component={Help} />
          <Route path="/" component={() => <TrackingCodeForm history={history} store={store} />} />
        </Switch>
      </Router>
    </div>
  </Provider>
);

export default App;
