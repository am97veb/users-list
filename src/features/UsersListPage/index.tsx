import { useSortUsers } from "./useSortUsers";

export const UsersListPage = () => {
  const { sortedUsers, toggleSort, loading, error } = useSortUsers();

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>error: {error}</p>;

  return (
    <>
      <button onClick={toggleSort}>sort</button>
      {sortedUsers.map((user) => (
        <ul>
          <li key={user.id}>
            {user.name} {user.email} {user.address.city} {user.address.zipcode}{" "}
            {user.address.street}{" "}
          </li>
        </ul>
      ))}
    </>
  );
};
