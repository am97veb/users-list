import { useQuery } from "@tanstack/react-query";
import { fetchUserById } from "../api/usersApi";
import type { User } from "../types";

export const useUser = (userId: string) => {
  return useQuery<User>({
    queryKey: ["user", userId],
    queryFn: () => fetchUserById(userId),
  });
};
