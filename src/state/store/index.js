import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import rootReducer from '../reducers';
import DevTools from '../../containers/DevTools';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  DevTools.instrument(),
);

export default function configureStore(initialState) {
  const reducers = combineReducers({
    rootReducer,
  });
  const store = createStore(reducers, initialState, enhancer);
  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(require('../reducers')));
  }

  sagaMiddleware.run(rootSaga);
  return store;
}
