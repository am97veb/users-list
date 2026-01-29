import { useAppSelector } from "../../core/hooks";
import { selectUsers } from "../../core/usersSlice";

export const UsersListPage = () => {
  const usersList = useAppSelector(selectUsers);

  return (
    <>
      {usersList.map((user) => (
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
