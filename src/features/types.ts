export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
}

export interface UserAddress {
  city: string;
  street: string;
  zipcode: string;
}

export interface FilterUsersProps {
  sortedUsers: User[];
  searchUser: string;
}
