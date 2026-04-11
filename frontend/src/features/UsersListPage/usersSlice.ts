import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../core/store";
import { deleteUserThunk, addUserThunk, fetchUsers } from "./usersThunk";
import type { UsersState } from "../../core/types";

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: ({ users }, { payload: userId }) => {
      const index = users.findIndex((user) => user.id === userId);
      users.splice(index, 1);
    },
    addUser: ({ users }, { payload: userData }) => {
      users.push(userData);
    },
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
        state.error = action.error.message || "Błąd";
      })
      .addCase(addUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(addUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Błąd";
      })
      .addCase(deleteUserThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.users.findIndex(
          (user) => user.id === action.payload,
        );
        state.users.splice(index, 1);
      })
      .addCase(deleteUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Błąd";
      });
  },
});

export const { deleteUser, addUser } = usersSlice.actions;
export const selectUsers = (state: RootState) => state.users.users;
export const selectUsersLoading = (state: RootState) => state.users.loading;
export const selectUsersError = (state: RootState) => state.users.error;
export const selectUserById = (state: RootState, userId: string) =>
  selectUsers(state).find(({ id }) => String(id) === userId);
export default usersSlice.reducer;
