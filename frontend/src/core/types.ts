import type { User } from "../features/UsersListPage/types";

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}