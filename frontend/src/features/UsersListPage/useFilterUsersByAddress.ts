import type { FilterUsersByAddressProps } from "./types";

export const useFilterUsersByAddress = ({
  sortedUsers,
  searchAddress,
}: FilterUsersByAddressProps) => {
  return sortedUsers.filter((user) =>
    `${user.address.street} ${user.address.city}`
      .toLowerCase()
      .includes(searchAddress.toLowerCase()),
  );
};
