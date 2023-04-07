import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'redux';

import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoadingTest', () => {
  test('should return tru', () => {
    const state: DeepPartial<StateSchema> = { loginForm: { isLoading: true } };
    expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
  });
  test('should work with empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
  });
});
