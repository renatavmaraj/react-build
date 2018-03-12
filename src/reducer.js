// @flow
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './reducers/app';

const reducers = {
  routing: routerReducer,
  app
};

export type Reducers = typeof reducers;

export default combineReducers(reducers);
