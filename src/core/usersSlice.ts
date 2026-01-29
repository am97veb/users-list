import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

  },
});

export const selectUsers = (state: RootState) => state.users.users;
export default usersSlice.reducer;