import { createSlice } from '@reduxjs/toolkit';

import { ProfileSchema } from '../types/profile';

const initialState: ProfileSchema = {
  profileData: undefined,
  isLoading: false,
  readonly: false,
  error: undefined
};
export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {}
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
