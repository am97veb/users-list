import { AddUser, Button } from "../../../../common/Button";
import { useAppDispatch } from "../../../../core/hooks";
import { toSelectUser } from "../../../../core/routes";
import type { User } from "../../types";
import { deleteUser } from "../../usersSlice";
import { TableCell, TableRow } from "./styled";

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
    <TableRow>
      {userFields.map((field, index) => (
        <TableCell key={index}>{field}</TableCell>
      ))}
      <TableCell isActionCell>
        <AddUser to={toSelectUser({ id: String(user.id) })}>preview</AddUser>
        <Button onClick={() => dispatch(deleteUser(user.id))}>delete</Button>
      </TableCell>
    </TableRow>
  );
};
