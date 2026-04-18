import { useParams } from "react-router-dom";
import { mapUserData } from "../helpers/mapUserData";
import { List, ListItem, Key, Value } from "./styled";
import { Error } from "../../../common/Error";
import { useUsers } from "../../../hooks/useUsers";
import { Loading } from "../../../common/Loading";

export const UserPage = () => {
  const { id } = useParams();
  const { data: users, isLoading, error } = useUsers();

  if (isLoading) return <Loading />;

  if (error) {
    return (
      <Error
        message="Sorry, an error occurred while fetching the user."
        error={error.message}
      />
    );
  }

  const user = users?.find((user) => user.id === Number(id));

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
