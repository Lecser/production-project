import { createReducerManager } from 'app/providers/StoreProvider/config/reducerManager';
import { userReducer } from 'entities/User';
import { CombinedState, Reducer } from 'redux';
import { $api } from 'shared/api/api';

import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema } from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer
  };

  const reducerManager = createReducerManager(rootReducers);

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: IS_DEV,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: { extraArgument: { api: $api } } })
  });

  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}
export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
