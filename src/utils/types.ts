import { rootReducer } from '../store';

export type InferActionsTypes<T> = T extends { [keys: string]: infer U } ? U : never;

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;