import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { AnyAction, CombinedState, Reducer } from 'redux';

import { EnhancedStore, ReducersMapObject } from '@reduxjs/toolkit';

export interface StateSchema {
  user: UserSchema;
  // Асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
}
export type StateSchemaKey = keyof StateSchema;
export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithReducerManager extends EnhancedStore {
  reducerManager: ReducerManager;
}
