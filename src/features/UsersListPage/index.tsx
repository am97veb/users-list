import { useEffect, useState } from "react";
import { useSortUsers } from "./useSortUsers";
import { useFilterUsersByAddress } from "./useFilterUsersByAddress";
import { deleteUser, selectUsersError, selectUsersLoading } from "./usersSlice";
import { Link } from "react-router-dom";
import { toSelectUser } from "../../core/routes";
import { useAppDispatch, useAppSelector } from "../../core/hooks";
import { fetchUsers } from "./usersThunk";

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
      <button onClick={toggleSort}>sort</button>
      <input
        type="text"
        placeholder="Szukaj po adresie (ulica, miasto)..."
        value={searchAddress}
        onChange={(event) => setSearchAddress(event.target.value)}
      />
      <ul>
        {filteredUsers &&
          filteredUsers.map((user) => (
            <li key={user.id}>
              <Link to={toSelectUser({ id: String(user.id) })}>preview</Link>
              <button onClick={() => dispatch(deleteUser(user.id))}>
                delete
              </button>
              {user.name}
              {user.email}
              {user.address.city}
              {user.address.zipcode}
              {user.address.street}
            </li>
          ))}
      </ul>
    </>
  );
};
