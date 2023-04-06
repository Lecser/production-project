import { ReduxStoreWithReducerManager } from 'app/providers/StoreProvider';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { object } from 'prop-types';
import { useEffect } from 'react';
import { useStore } from 'react-redux';
import { Reducer } from 'redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
  [key in StateSchemaKey]?: Reducer;
};
type ReducersListEntry = [StateSchemaKey, Reducer];
export const useDynamicModuleLoader = (reducers: ReducersList, removeAfterUnmount?: boolean) => {
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithReducerManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]: ReducersListEntry) => {
      store.reducerManager.add(key, reducer);
      dispatch({ type: `@INIT ${key} reducer` });
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([key, _]: ReducersListEntry) => {
          store.reducerManager.remove(key);
          dispatch({ type: `@DESTROY ${key} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);
};
