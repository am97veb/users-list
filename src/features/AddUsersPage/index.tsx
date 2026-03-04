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

  return (
    <Form onSubmit={onFormSubmit}>
      <Fieldset>
        <Legend>basic info</Legend>

        <Label>
          <FieldSignature>name*:</FieldSignature>
          <Input name="name" type="text" required />
        </Label>

        <Label>
          <FieldSignature>email*:</FieldSignature>
          <Input name="email" type="email" required />
        </Label>

        <Label>
          <FieldSignature>phone*:</FieldSignature>
          <Input name="phone" type="number" required />
        </Label>

        <Label>
          <FieldSignature>website:</FieldSignature>
          <Input name="website" />
        </Label>
      </Fieldset>

      <Fieldset>
        <Legend>address</Legend>

        <Label>
          <FieldSignature>street*:</FieldSignature>
          <Input name="address.street" required />
        </Label>

        <Label>
          <FieldSignature>zip code*:</FieldSignature>
          <Input name="address.zipcode" type="number" required />
        </Label>

        <Label>
          <FieldSignature>city*:</FieldSignature>
          <Input name="address.city" type="text" required />
        </Label>

        <Label>
          <FieldSignature>suite*:</FieldSignature>
          <Input name="address.suite" type="text" required />
        </Label>
      </Fieldset>

      <Fieldset>
        <Legend>company</Legend>

        <Label>
          <FieldSignature>name:</FieldSignature>
          <Input name="company.name" />
        </Label>

        <Label>
          <FieldSignature>catch phrase:</FieldSignature>
          <Input name="company.catchPhrase" />
        </Label>

        <Label>
          <FieldSignature>bs:</FieldSignature>
          <Input name="company.bs" />
        </Label>
      </Fieldset>
      <p> * required fields </p>
      <Button addUserToListButton>add to users list</Button>
    </Form>
  );
};
