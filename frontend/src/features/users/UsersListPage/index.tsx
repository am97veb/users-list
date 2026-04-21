import { useState } from "react";
import { useSortUsers } from "./useSortUsers";
import { UsersToolbar } from "./UsersToolbar";
import { UsersTable } from "./UsersTable";
import { Loading } from "../../../common/Loading";
import { Error } from "../../../common/Error";
import { useUsers } from "../hooks/useUsers";
import { EmptyList } from "./EmptyList";

export const UsersListPage = () => {
  const [searchAddress, setSearchAddress] = useState("");
  const { data, isLoading, error } = useUsers();
  const { sortedUsers, toggleSort } = useSortUsers(data || []);

  if (isLoading) return <Loading />;
  if (error)
    return (
      <Error
        message="Sorry, We can't show users list now."
        error={error.message}
      />
    );
  if (sortedUsers.length === 0) return <EmptyList />;

  return (
    <>
      <UsersToolbar
        searchAddress={searchAddress}
        onSearchChange={setSearchAddress}
        onToggleSort={toggleSort}
      />
      <UsersTable searchAddress={searchAddress} sortedUsers={sortedUsers} />
    </>
  );
};
