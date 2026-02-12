import { useEffect, useState } from "react";
import { useSortUsers } from "./useSortUsers";
import { useFilterUsersByAddress } from "./useFilterUsersByAddress";
import { deleteUser, selectUsersError, selectUsersLoading } from "./usersSlice";
import { Link } from "react-router-dom";
import { toAddUsers, toSelectUser } from "../../core/routes";
import { useAppDispatch, useAppSelector } from "../../core/hooks";
import { fetchUsers } from "./usersThunk";
import { AddUser, Button, Input, Wrapper } from "./styled";

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
      <table>
        {filteredUsers &&
          filteredUsers.map((user) => (
            <tr key={user.id}>
              <Link to={toSelectUser({ id: String(user.id) })}>preview</Link>
              <button onClick={() => dispatch(deleteUser(user.id))}>
                delete
              </button>
             <td> {user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.address.zipcode}</td>
              <td>{user.address.street}</td>
            </tr>
          ))}
      </table>
    </>
  );
};
