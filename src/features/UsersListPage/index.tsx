import { useState } from "react";
import { useSortUsers } from "./useSortUsers";
import { useFilterUsersByAddress } from "./useFilterUsersByAddress";

export const UsersListPage = () => {
  const [searchAddress, setSearchAddress] = useState("");
  const { sortedUsers, toggleSort, loading, error } = useSortUsers();
  const filteredUsers = useFilterUsersByAddress({ sortedUsers, searchAddress });

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
