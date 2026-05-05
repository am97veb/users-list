import { AddUserPageLink, Button } from "../../../../../common/Button";
import { toSelectUser } from "../../../../../core/routes";
import { useDeleteUser } from "../../../hooks/useDeleteUser";
import type { User } from "../../../types";
import { StyledEyeIcon, StyledTrashIcon, TableCell, TableRow } from "./styled";

export const UserRow = ({ user }: { user: User }) => {
  const deleteUser = useDeleteUser();

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
        <AddUserPageLink
          $tableButton
          to={toSelectUser({ id: String(user.id) })}
        >
          <StyledEyeIcon />
        </AddUserPageLink>
        <Button
          $tableButton
          onClick={() => deleteUser.mutate(user.id)}
          disabled={deleteUser.isPending}
        >
          <StyledTrashIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
};
