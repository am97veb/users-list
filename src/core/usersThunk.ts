import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchApiData } from "../fetchApiData";

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const users = await fetchApiData();
    return users;
  }
);