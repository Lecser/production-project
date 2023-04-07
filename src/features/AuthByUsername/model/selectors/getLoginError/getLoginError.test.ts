import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'redux';

import { getLoginError } from './getLoginError';

describe('getLoginErrorTest', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = { loginForm: { error: 'error' } };
    expect(getLoginError(state as StateSchema)).toEqual('error');
  });
  test('should work with empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual(undefined);
  });
});
