export interface User {
  id: number;
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
  geo: AddressGeo;
}

export interface AddressGeo {
  lat: string;
  lng: string;
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
