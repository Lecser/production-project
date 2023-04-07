import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'redux';

import { getLoginPassword } from './getLoginPassword';

describe('getLoginPasswordTest', () => {
  test('should return tru', () => {
    const state: DeepPartial<StateSchema> = { loginForm: { password: '123' } };
    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });
  test('should work with empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
