export interface User {
  id: number;
  name: string;
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
}