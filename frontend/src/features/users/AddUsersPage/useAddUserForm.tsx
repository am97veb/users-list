import { useState } from "react";
import { toast } from "react-toastify";
import type { User } from "../types";
import { useAddUser } from "../hooks/useAddUsers";

const initialUserData: Omit<User, "id"> = {
  name: "",
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
  const addUser = useAddUser();
  const [userData, setUserData] = useState(initialUserData);

  const onFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    addUser.mutate(userData);
    setUserData(initialUserData);
    toast.success("User added successfully!")
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
