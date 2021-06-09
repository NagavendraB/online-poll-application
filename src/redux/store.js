import { applyMiddleware, createStore, compose } from 'redux';

import { api } from './middleware/api';
import { reducer } from './reducers';
import { pollCustomMiddleware } from './middleware';

// dev tool
// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(api, pollCustomMiddleware)),
);
