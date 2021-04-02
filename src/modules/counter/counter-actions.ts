import { InferActionsTypes } from './../../utils/types';
import { COUNT_INCREMENT, COUNT_DECREMENT } from './counter-constants';

export const countIncrement = () => ({ type: COUNT_INCREMENT } as const);
export const countDecrement = () => ({ type: COUNT_DECREMENT } as const);

const actions = {
  countIncrement,
  countDecrement
}

export type ActionTypes = ReturnType<InferActionsTypes<typeof actions>>;
