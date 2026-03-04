import { useState } from "react";
import { type User } from "../UsersListPage/types";
import { Form, Fieldset, FieldSignature, Label, Legend } from "./styled";
import { Input } from "../../common/Input";
import { Button } from "../../common/Button";
import { useAppDispatch } from "../../core/hooks";
import { addUser } from "../UsersListPage/usersSlice";
import { nanoid } from "@reduxjs/toolkit";

export const AddUsersPage = () => {
  const dispatch = useAppDispatch();
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

  const onFormSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addUser({ ...userData, id: nanoid() }));
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

  return (
    <Form onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>basic info</Legend>

        <Label>
          <FieldSignature>name*:</FieldSignature>
          <Input
            name="name"
            type="text"
            required
            value={userData.name}
            onChange={onInputChange}
          />
        </Label>

        <Label>
          <FieldSignature>email*:</FieldSignature>
          <Input
            name="email"
            type="email"
            required
            value={userData.email}
            onChange={onInputChange}
          />
        </Label>

        <Label>
          <FieldSignature>phone*:</FieldSignature>
          <Input
            name="phone"
            type="number"
            required
            value={userData.phone}
            onChange={onInputChange}
          />
        </Label>

        <Label>
          <FieldSignature>website:</FieldSignature>
          <Input
            name="website"
            type="text"
            value={userData.website}
            onChange={onInputChange}
          />
        </Label>
      </Fieldset>

      <Fieldset>
        <Legend>address</Legend>

        <Label>
          <FieldSignature>street*:</FieldSignature>
          <Input
            name="address.street"
            type="text"
            required
            value={userData.address.street}
            onChange={onInputChange}
          />
        </Label>

        <Label>
          <FieldSignature>zip code*:</FieldSignature>
          <Input
            name="address.zipcode"
            type="number"
            required
            value={userData.address.zipcode}
            onChange={onInputChange}
          />
        </Label>

        <Label>
          <FieldSignature>city*:</FieldSignature>
          <Input
            name="address.city"
            type="text"
            required
            value={userData.address.city}
            onChange={onInputChange}
          />
        </Label>

        <Label>
          <FieldSignature>suite*:</FieldSignature>
          <Input
            name="address.suite"
            type="text"
            required
            value={userData.address.suite}
            onChange={onInputChange}
          />
        </Label>
      </Fieldset>

      <Fieldset>
        <Legend>company</Legend>

        <Label>
          <FieldSignature>name:</FieldSignature>
          <Input
            name="company.name"
            type="text"
            value={userData.company?.name}
            onChange={onInputChange}
          />
        </Label>

        <Label>
          <FieldSignature>catch phrase:</FieldSignature>
          <Input
            name="company.catchPhrase"
            type="text"
            value={userData.company?.catchPhrase}
            onChange={onInputChange}
          />
        </Label>

        <Label>
          <FieldSignature>bs:</FieldSignature>
          <Input
            name="company.bs"
            type="text"
            value={userData.company?.bs}
            onChange={onInputChange}
          />
        </Label>
      </Fieldset>
      <p> * required fields </p>
      <Button addUserToListButton>add to users list</Button>
    </Form>
  );
};
