import { Form, Fieldset, FieldSignature, Label, Legend } from "./styled";
import { Input } from "../../common/Input";
import { Button } from "../../common/Button";
import { useAddUserForm } from "./useAddUserForm";

export const AddUsersPage = () => {
  const { userData, onFormSubmit, onInputChange } = useAddUserForm();

  const formFields = {
    "basic info": [
      {
        signature: "name",
        name: "name",
        type: "text",
        required: true,
        value: userData.name,
      },
      {
        signature: "email",
        name: "email",
        type: "email",
        required: true,
        value: userData.email,
      },
      {
        signature: "phone",
        name: "phone",
        type: "number",
        required: true,
        value: userData.phone,
      },
      {
        signature: "website",
        name: "website",
        type: "text",
        required: false,
        value: userData.website,
      },
    ],
    address: [
      {
        signature: "street",
        name: "address.street",
        type: "text",
        required: true,
        value: userData.address.street,
      },
      {
        signature: "suite",
        name: "address.suite",
        type: "text",
        required: false,
        value: userData.address.suite,
      },
      {
        signature: "zip code",
        name: "address.zipcode",
        type: "text",
        required: true,
        value: userData.address.zipcode,
      },
      {
        signature: "city",
        name: "address.city",
        type: "text",
        required: true,
        value: userData.address.city,
      },
    ],
    company: [
      {
        signature: "name",
        name: "company.name",
        type: "text",
        required: false,
        value: userData.company?.name,
      },
      {
        signature: "catch phrase",
        name: "company.catchPhrase",
        required: false,
        type: "text",
        value: userData.company?.catchPhrase,
      },
    ],
  };

  return (
    <Form onSubmit={onFormSubmit}>
      {Object.entries(formFields).map(([group, fields]) => (
        <Fieldset key={group}>
          <Legend>{group}</Legend>

          {fields.map(({ signature, name, type, required, value }) => (
            <Label key={name}>
              <FieldSignature>{signature}</FieldSignature>
              <Input
                name={name}
                type={type}
                required={required}
                value={value}
                onChange={onInputChange}
              />
            </Label>
          ))}
        </Fieldset>
      ))}

      <p> * required fields </p>
      <Button addUserToListButton>add to users list</Button>
    </Form>
  );
};
