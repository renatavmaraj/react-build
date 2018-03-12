// @flow
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducer';
import type { Store } from './types/Store';

export const history = createHistory();

const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
  const { logger } = require(`redux-logger`);

  middleware.push(logger);
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

// create the store.
export const store: Store = createStore(rootReducer, composedEnhancers);

// redux persist state for certain parts of the store.
export const persistor = persistStore(store);
