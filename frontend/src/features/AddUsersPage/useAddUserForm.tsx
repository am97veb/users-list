import { useState } from "react";
import { useAppDispatch } from "../../core/hooks";
import type { User } from "../UsersListPage/types";
import { toast } from "react-toastify";
import { addUserThunk } from "../UsersListPage/usersThunk";

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
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState(initialUserData);

  const onFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addUserThunk(userData));
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
