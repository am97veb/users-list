export interface User {
  id: number;
  name: string;
  email: string;
  address: UserAddress;
}

export interface UserAddress {
    city: string;
    street: string;
    zipcode: string;
}

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
}