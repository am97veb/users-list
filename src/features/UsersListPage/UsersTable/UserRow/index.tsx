import { AddUser, Button } from "../../../../common/Button";
import { useAppDispatch } from "../../../../core/hooks";
import { toSelectUser } from "../../../../core/routes";
import type { User } from "../../types";
import { deleteUser } from "../../usersSlice";
import { StyledUserData, UserButtonsWrapper } from "./styled";

export const UserRow = ({ user }: { user: User }) => {
  const dispatch = useAppDispatch();

  const userFields = [
    user.name,
    user.email,
    user.address.city,
    user.address.zipcode,
    user.address.street,
  ];

  return (
    <tr>
      {userFields.map((field, index) => (
        <StyledUserData key={index}>{field}</StyledUserData>
      ))}
      <UserButtonsWrapper>
        <AddUser to={toSelectUser({ id: String(user.id) })}>preview</AddUser>
        <Button onClick={() => dispatch(deleteUser(user.id))}>delete</Button>
      </UserButtonsWrapper>
    </tr>
  );
};
