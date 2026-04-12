import { AddUserPageLink, Button } from "../../../../common/Button";
import { useAppDispatch } from "../../../../core/hooks";
import { toSelectUser } from "../../../../core/routes";
import type { User } from "../../types";
import { deleteUserThunk } from "../../usersThunk";
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
      <TableCell $isActionCell>
        <AddUserPageLink to={toSelectUser({ id: String(user.id) })}>
          preview
        </AddUserPageLink>
        <Button onClick={() => dispatch(deleteUserThunk(user.id))}>
          delete
        </Button>
      </TableCell>
    </TableRow>
  );
};
