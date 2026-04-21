import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { toAddUsers, toSelectUser, toUsers } from "./routes";
import { Navigation } from "./Navigation";
import { UsersListPage } from "../features/users/UsersListPage";
import { UserPage } from "../features/users/UsersListPage/UserPage";
import { AddUsersPage } from "../features/users/AddUsersPage";

export const App = () => (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path={toUsers()} element={<UsersListPage />} />
        <Route path={toSelectUser()} element={<UserPage />} />
        <Route path={toAddUsers()} element={<AddUsersPage />} />
        <Route path="/" element={<Navigate to={toUsers()} />} />
      </Routes>
    </HashRouter>
  );
