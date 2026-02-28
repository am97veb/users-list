import { useState } from "react";
import { type User } from "../UsersListPage/types";

export const AddUsersPage = () => {
  const [userData, setUserData] = useState<Omit<User, "id">>({
    name: "",
    username: "",
    email: "",
    phone: "",
    address: {
      city: "",
      street: "",
      zipcode: "",
      suite: "",
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
    website: "",
  });
};
