import { useParams } from "react-router-dom";
import { mapUserData } from "../helpers/mapUserData";
import { List, ListItem, Key, Value } from "./styled";
import { Error } from "../../../../common/Error";
import { Loading } from "../../../../common/Loading";
import { useUser } from "../../hooks/useUser";

export const UserPage = () => {
  const { id } = useParams();
  const { data: user, isLoading, error } = useUser(id || "");

  if (isLoading) return <Loading />;

  if (error) {
    return (
      <Error
        message="Sorry, an error occurred while fetching the user."
        error={error.message}
      />
    );
  }

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
