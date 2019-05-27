import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import actionsLogger from './logger/actionsLogger';
import index from './reducers/index';

export default function configureStore() {
  const middlewares = [
    thunk,
    actionsLogger,
    createLogger(),
  ];
  const storeEnhancer = applyMiddleware(...middlewares);
  const store = createStore(index, storeEnhancer);
  return store;
}