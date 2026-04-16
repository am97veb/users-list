import type { User } from "../../types";

export interface FilterUsersByAddressProps {
  sortedUsers: User[];
  searchAddress: string;
}

export interface StyledComponentsProps {
  $isActionCell?: boolean;
  addUserToListButton?: boolean
}