import { Form, Fieldset, FieldSignature, Label, Legend } from "./styled";
import { Input } from "../../common/Input";
import { Button } from "../../common/Button";
import { useAddUserForm } from "./useAddUserForm";

export const AddUsersPage = () => {
  const { userData, onFormSubmit, onInputChange } = useAddUserForm();
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
          <FieldSignature>suite:</FieldSignature>
          <Input
            name="address.suite"
            type="text"
            required
            value={userData.address.suite}
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
      </Fieldset>
      <p> * required fields </p>
      <Button addUserToListButton>add to users list</Button>
    </Form>
  );
};
