import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApiData } from "../../fetchApiData";
import type { User } from "./types";
import axios from "axios";

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const users = await fetchApiData();
  return users;
});

export const addUserThunk = createAsyncThunk(
  'users/addUserThunk',
  async (userData: Omit<User, "id">) => {
    const response = await axios.post('http://localhost:3000/users', userData);
    return response.data;
  },
);

export const deleteUserThunk = createAsyncThunk(
  "users/deleteUserThunk",
  async (userId: number) => {
    await axios.delete(`http://localhost:3000/users/${userId}`);
    return userId;
  },
);
