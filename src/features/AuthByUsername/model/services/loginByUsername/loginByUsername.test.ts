import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { loginByUsername } from './loginByUsername';

describe('loginByUsernameTest', () => {
  test('login request fulfilled ', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    const userData = { username: 'alex', id: '1' };
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userData }));

    const res = await thunk.callThunk({ username: 'admin', password: 'password' });
    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toBeCalledTimes(3);
    expect(res.meta.requestStatus).toBe('fulfilled');
    expect(res.payload).toEqual(userData);
  });
  test('login request rejected', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const res = await thunk.callThunk({ username: 'admin', password: 'password' });
    expect(thunk.api.post).toHaveBeenCalled();
    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(res.meta.requestStatus).toBe('rejected');
    expect(res.payload).toBe('error');
  });
});
