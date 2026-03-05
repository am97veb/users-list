import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../core/hooks";
import { selectUserById } from "../usersSlice";
import { mapUserData } from "../helpers/mapUserData";
import { List, ListItem, Key, Value } from "./styled";

export const UserPage = () => {
  const { id } = useParams();
  const user = useAppSelector((state) => selectUserById(state, id ? id : ""));

  return (
    <List>
      {user &&
        Object.entries(mapUserData(user)).map(([key, value]) => (
          <ListItem key={key}>
            <Key>{key}</Key>
            <Value>{value}</Value>
          </ListItem>
        ))}
    </List>
  );
};
