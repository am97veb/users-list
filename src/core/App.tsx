import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { toSelectUser, toUsers } from "./routes";
import { Navigation } from "./Navigation";
import { UsersListPage } from "../features/UsersListPage";
import { useAppDispatch } from "./hooks";
import { useEffect } from "react";
import { fetchUsers } from "../features/UsersListPage/usersThunk";
import { UserPage } from "../features/UsersListPage/UserPage";

export const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path={toUsers()} element={<UsersListPage />} />
        <Route path={toSelectUser()} element={<UserPage />} />
        <Route path="/" element={<Navigate to={toUsers()} />} />
      </Routes>
    </HashRouter>
  );
};
