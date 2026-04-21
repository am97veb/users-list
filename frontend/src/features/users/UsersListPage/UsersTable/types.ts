import type { User } from "../../types";

export interface UsersTableProps {
    sortedUsers: User[];
    searchAddress: string;
}