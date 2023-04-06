import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from 'redux';

import { ReducersMapObject } from '@reduxjs/toolkit';

import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: PropsWithChildren<StoreProviderProps>) => {
  const { initialState, children, asyncReducers } = props;

  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>
  );

  return <Provider store={store}>{children}</Provider>;
};
