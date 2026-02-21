import { useEffect, useState } from "react";
import { useSortUsers } from "./useSortUsers";
import { useFilterUsersByAddress } from "./useFilterUsersByAddress";
import { deleteUser, selectUsersError, selectUsersLoading } from "./usersSlice";
import { toSelectUser } from "../../core/routes";
import { useAppDispatch, useAppSelector } from "../../core/hooks";
import { fetchUsers } from "./usersThunk";
import {
  TableWrapper,
  StyledTable,
  StyledUserData,
  UserButtonsWrapper,
} from "./styled";
import { UsersToolbar } from "./UsersToolbar";
import { AddUser, Button } from "./UsersToolbar/styed";

export const UsersListPage = () => {
  const [searchAddress, setSearchAddress] = useState("");
  const { sortedUsers, toggleSort } = useSortUsers();
  const filteredUsers = useFilterUsersByAddress({ sortedUsers, searchAddress });
  const loading = useAppSelector(selectUsersLoading);
  const error = useAppSelector(selectUsersError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>error: {error}</p>;

  return (
    <>
      <UsersToolbar
        searchAddress={searchAddress}
        onSearchChange={setSearchAddress}
        onToggleSort={toggleSort}
      />
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
    </>
  );
};
