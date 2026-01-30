import type { FilterUsersProps } from "../types";

export const useFilterUsers = ({
  sortedUsers,
  searchUser,
}: FilterUsersProps) => {
  return sortedUsers.filter((user) =>
    `${user.address.street} ${user.address.city}`
      .toLowerCase()
      .includes(searchUser.toLowerCase()),
  );
};
