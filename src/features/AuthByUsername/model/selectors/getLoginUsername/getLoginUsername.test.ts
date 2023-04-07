import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from 'redux';

import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsernameTest', () => {
  test('should return tru', () => {
    const state: DeepPartial<StateSchema> = { loginForm: { username: 'username' } };
    expect(getLoginUsername(state as StateSchema)).toEqual('username');
  });
  test('should work with empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
