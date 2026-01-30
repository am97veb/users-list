import { useState } from "react";
import { useSortUsers } from "./useSortUsers";
import { useFilterUsersByAddress } from "./useFilterUsersByAddress";
import { useDispatch } from "react-redux";
import { deleteUser } from "./usersSlice";
import { Link } from "react-router-dom";
import { toSelectUser } from "../../core/routes";

export const UsersListPage = () => {
  const [searchAddress, setSearchAddress] = useState("");
  const { sortedUsers, toggleSort, loading, error } = useSortUsers();
  const filteredUsers = useFilterUsersByAddress({ sortedUsers, searchAddress });
  const dispatch = useDispatch();

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
      {filteredUsers &&
        filteredUsers.map((user) => (
          <ul>
            <li key={user.id}>
              <Link to={toSelectUser({ id: String(user.id) })}>preview</Link>
              <button onClick={() => dispatch(deleteUser(user.id))}>delete</button>
              {user.name}
              {user.email}
              {user.address.city}
              {user.address.zipcode}
              {user.address.street}
            </li>
          </ul>
        ))}
    </>
  );
};
