import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';

import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: IS_DEV,
    preloadedState: initialState
  });
}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
