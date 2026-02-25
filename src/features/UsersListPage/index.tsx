import { useEffect, useState } from "react";
import { useSortUsers } from "./useSortUsers";
import { selectUsersError, selectUsersLoading } from "./usersSlice";
import { useAppDispatch, useAppSelector } from "../../core/hooks";
import { fetchUsers } from "./usersThunk";
import { UsersToolbar } from "./UsersToolbar";
import { UsersTable } from "./UsersTable";
import { Loading } from "../../common/Loading";

export const UsersListPage = () => {
  const [searchAddress, setSearchAddress] = useState("");
  const { sortedUsers, toggleSort } = useSortUsers();
  const loading = useAppSelector(selectUsersLoading);
  const error = useAppSelector(selectUsersError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <Loading/>;
  if (error) return <p>error: {error}</p>;

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
