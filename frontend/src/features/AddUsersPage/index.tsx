import { Form, Fieldset, FieldSignature, Label, Legend } from "./styled";
import { Input } from "../../common/Input";
import { Button } from "../../common/Button";
import { useAddUserForm } from "./useAddUserForm";
import { getFormFields } from "./getFormFields";

export const AddUsersPage = () => {
  const { userData, onFormSubmit, onInputChange } = useAddUserForm();
  const formFields = getFormFields(userData);

  return (
    <Form onSubmit={onFormSubmit}>
      {Object.entries(formFields).map(([group, fields]) => (
        <Fieldset key={group}>
          <Legend>{group}</Legend>

          {fields.map(({ signature, name, type, required, value }) => (
            <Label key={name}>
              <FieldSignature>
                {required === true ? `${signature}*` : signature}
              </FieldSignature>
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
