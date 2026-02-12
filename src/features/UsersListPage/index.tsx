import { useEffect, useState } from "react";
import { useSortUsers } from "./useSortUsers";
import { useFilterUsersByAddress } from "./useFilterUsersByAddress";
import { deleteUser, selectUsersError, selectUsersLoading } from "./usersSlice";
import { toAddUsers, toSelectUser } from "../../core/routes";
import { useAppDispatch, useAppSelector } from "../../core/hooks";
import { fetchUsers } from "./usersThunk";
import { AddUser, Button, Input, StyledTable, StyledUserData, UserButtonsWrapper, Wrapper } from "./styled";

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
      <Wrapper>
        <Input
          type="text"
          placeholder="Szukaj po adresie (ulica, miasto)..."
          value={searchAddress}
          onChange={(event) => setSearchAddress(event.target.value)}
        />
        <Button onClick={toggleSort}>sort</Button>
        <AddUser to={toAddUsers()}>add user</AddUser>
      </Wrapper>
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
    </>
  );
};
