import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from 'redux';

import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = (props: PropsWithChildren<StoreProviderProps>) => {
  const { initialState, children } = props;

  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};
