import { ActionTypes } from './counter-actions';
import { COUNT_INCREMENT, COUNT_DECREMENT } from './counter-constants';

// type InitialState = {
//   count: number,
// }

const INITIAL_STATE = {
  count: 0
}

type InitialStateType = typeof INITIAL_STATE;

const countIncrement = (state: InitialStateType): InitialStateType => ({
  ...state,
  count: state.count + 1
});

const countDecrement = (state: InitialStateType): InitialStateType => ({
  ...state,
  count: state.count - 1
});



export const counterReducer = (state = INITIAL_STATE, action: ActionTypes): InitialStateType => {
  switch (action.type) {
    case COUNT_INCREMENT:
      return countIncrement(state);
    case COUNT_DECREMENT:
      return countDecrement(state);
      default: 
        return state;
  }
};