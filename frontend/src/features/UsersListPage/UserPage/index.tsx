import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../core/hooks";
import { selectUserById } from "../usersSlice";
import { mapUserData } from "../helpers/mapUserData";
import { List, ListItem, Key, Value } from "./styled";
import { Error } from "../../../common/Error";

export const UserPage = () => {
  const { id } = useParams();
  const user = useAppSelector((state) => selectUserById(state, id ? id : ""));

  if (!user) {
    return <Error message="Sorry, the user cannot be found." />;
  }

  return (
    <List>
      {user &&
        Object.entries(mapUserData(user)).map(([key, value]) => (
          <ListItem key={key}>
            <Key>{key}</Key>
            <Value>{value === "" ? "No data available" : value}</Value>
          </ListItem>
        ))}
    </List>
  );
};
