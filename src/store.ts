import { combineReducers, createStore } from 'redux';

import { counterReducer } from './modules/counter/counter-reducer';

export const rootReducer = combineReducers({
  counter: counterReducer
});

export const store = createStore(rootReducer);