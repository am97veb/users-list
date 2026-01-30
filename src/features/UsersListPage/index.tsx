import { useSortUsers } from "./useSortUsers";

export const UsersListPage = () => {
  const { sortedUsers, toggleSort } = useSortUsers();

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
