import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../core/hooks";
import { selectUserById } from "../usersSlice";
import { formatUserValue } from "../helpers/formatUserValue";

export const UserPage = () => {
  const { id } = useParams();
  const user = useAppSelector((state) => selectUserById(state, Number(id)));

  return (
    <ul>
      {user &&
        Object.entries(user).map(([key, value]) => (
          <li key={key}>
            <span>{key}</span>:<span>{formatUserValue(value)}</span>
          </li>
        ))}
    </ul>
  );
};
