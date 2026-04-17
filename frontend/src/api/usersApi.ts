import axios from "axios";
import type { User } from "../types";

const BASE_URL = "http://localhost:3000/users";

export const fetchUsers = async () => {
  const response = await axios.get(BASE_URL);
    return response.data;
};

export const addUser = async (userData: Omit<User, "id">) => {
    await axios.post(BASE_URL, userData);
};

export const deleteUser = async (userId: number) => {
    await axios.delete(`${BASE_URL}/${userId}`);
    return userId;
}