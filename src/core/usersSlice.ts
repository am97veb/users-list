import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import { fetchUsers } from './usersThunk';

const initialState = {
  users: [],
  loading: false,
  error: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Błąd';
      });
  },
});

export const selectUsers = (state: RootState) => state.users.users;
export default usersSlice.reducer;