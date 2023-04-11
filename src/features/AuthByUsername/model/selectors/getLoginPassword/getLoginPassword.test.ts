import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'redux';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginPasswordTest', () => {
  test('should return tru', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { isLoading: true, password: '123', username: '', error: 'error' }
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });
  test('should work with empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
