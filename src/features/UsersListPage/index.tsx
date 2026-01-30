import { useState } from "react";
import { useAppSelector } from "../../core/hooks";
import { selectUsers } from "../../core/usersSlice";

export const UsersListPage = () => {
  const usersList = useAppSelector(selectUsers);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortedUsers = [...usersList].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const toggleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <>
      <button onClick={toggleSort}>sort</button>
      {sortedUsers.map((user) => (
        <ul>
          <li key={user.id}>
            {user.name} {" "}
            {user.email}{" "}
            {user.address.city}{" "}
            {user.address.zipcode}{" "}
            {user.address.street}{" "}
          </li>
        </ul>
      ))}
    </>
  );
};
