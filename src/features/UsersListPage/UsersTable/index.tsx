import { useAppDispatch } from "../../../core/hooks";
import { toSelectUser } from "../../../core/routes";
import { useFilterUsersByAddress } from "../useFilterUsersByAddress";
import { deleteUser } from "../usersSlice";
import { AddUser, Button } from "../UsersToolbar/styed";
import {
  StyledTable,
  StyledUserData,
  TableWrapper,
  UserButtonsWrapper,
} from "./styled";
import type { UsersTableProps } from "./types";

export const UsersTable = ({ searchAddress, sortedUsers }: UsersTableProps) => {
  const dispatch = useAppDispatch();
  const filteredUsers = useFilterUsersByAddress({ sortedUsers, searchAddress });

  return (
    <TableWrapper>
      <StyledTable>
        {filteredUsers &&
          filteredUsers.map((user) => (
            <tr key={user.id}>
              <StyledUserData>{user.name}</StyledUserData>
              <StyledUserData>{user.email}</StyledUserData>
              <StyledUserData>{user.address.city}</StyledUserData>
              <StyledUserData>{user.address.zipcode}</StyledUserData>
              <StyledUserData>{user.address.street}</StyledUserData>
              <UserButtonsWrapper>
                <AddUser to={toSelectUser({ id: String(user.id) })}>
                  preview
                </AddUser>
                <Button onClick={() => dispatch(deleteUser(user.id))}>
                  delete
                </Button>
              </UserButtonsWrapper>
            </tr>
          ))}
      </StyledTable>
    </TableWrapper>
  );
};
