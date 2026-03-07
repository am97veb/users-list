import { useState } from "react";
import { useAppDispatch } from "../../core/hooks";
import type { User } from "../UsersListPage/types";
import { nanoid } from "@reduxjs/toolkit";
import { addUser } from "../UsersListPage/usersSlice";

const initialUserData: Omit<User, "id"> = {
  name: "",
  username: "",
  email: "",
  phone: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
  },
  company: {
    name: "",
    catchPhrase: "",
  },
  website: "",
};

export const useAddUserForm = () => {
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState(initialUserData);

  const onFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addUser({ ...userData, id: nanoid() }));
    setUserData(initialUserData);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const [group, field] = name.split(".");

    if (field) {
      setUserData((previousUserData) => ({
        ...previousUserData,
        [group]: {
          ...(previousUserData[group as keyof Omit<User, "id">] as object),
          [field]: value,
        },
      }));
    } else {
      setUserData((previousUserData) => ({
        ...previousUserData,
        [name]: value,
      }));
    }
  };

  return { userData, onFormSubmit, onInputChange };
};
