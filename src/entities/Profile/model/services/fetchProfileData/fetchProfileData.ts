import { ThunkConfig } from 'app/providers/StoreProvider';

import { createAsyncThunk } from '@reduxjs/toolkit';

import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const { data } = await extra.api.get<Profile>('profile');
      if (!data) {
        throw new Error();
      }

      return data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
