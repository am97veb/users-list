export interface User {
  id: number | string;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website?: string;
  company?: Company;
}

export interface UserAddress {
  city: string;
  street: string;
  zipcode: string;
  suite: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface FilterUsersByAddressProps {
  sortedUsers: User[];
  searchAddress: string;
}

export interface StyledComponentsProps {
  isActionCell?: boolean;
  addUserToListButton: boolean
}