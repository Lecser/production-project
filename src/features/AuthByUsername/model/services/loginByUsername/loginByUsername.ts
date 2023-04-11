import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

import { createAsyncThunk } from '@reduxjs/toolkit';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;
    try {
      const { data } = await extra.api.post<User>('login', authData);
      if (!data) {
        throw new Error();
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
      dispatch(userActions.setAuthData(data));

      return data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
