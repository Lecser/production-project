import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

import { createAsyncThunk } from '@reduxjs/toolkit';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>('login/loginByUsername', async (authData, thunkAPI) => {
  try {
    const res = await axios.post<User>('http://localhost:8000/login', authData);
    if (!res.data) {
      throw new Error();
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(res.data));
    thunkAPI.dispatch(userActions.setAuthData(res.data));

    return res.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('error');
  }
});
