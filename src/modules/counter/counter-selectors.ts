import { createSelector } from 'reselect';
//import { get } from 'lodash';


import { AppStateType } from './../../utils/types';

const getCounter = (state: AppStateType) => state.counter;

export const getCount = createSelector(
  getCounter, 
  //(counter) => get(counter, 'count') 
  (counter) => counter.count 
);

