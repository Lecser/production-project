import { createSlice } from '@reduxjs/toolkit';

import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
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
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.error = undefined;
        state.profileData = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
