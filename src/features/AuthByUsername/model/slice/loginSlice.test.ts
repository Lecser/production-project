import { loginActions, LoginSchema } from 'features/AuthByUsername';
import { DeepPartial } from 'redux';

import { loginReducer } from './loginSlice';

describe('loginSliceTest', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: 'name' };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('name21'))).toEqual({
      username: 'name21'
    });
  });
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: 'password' };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('password'))).toEqual({
      password: 'password'
    });
  });
});
