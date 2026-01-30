import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../core/hooks";
import { selectUserById } from "../usersSlice";


export const UserPage = () => {
  const { id } = useParams();
  const user = useAppSelector((state) => selectUserById(state, Number(id)));

  return (
    <ul>
      {user &&
        Object.entries(user).map(([key, value]) => (
          <li key={key}>
            {key}: {String(value)}
          </li>
        ))}
    </ul>
  );
};
