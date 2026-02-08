import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { toSelectUser, toUsers } from "./routes";
import { Navigation } from "./Navigation";
import { UsersListPage } from "../features/UsersListPage";
import { UserPage } from "../features/UsersListPage/UserPage";

export const App = () => (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path={toUsers()} element={<UsersListPage />} />
        <Route path={toSelectUser()} element={<UserPage />} />
        <Route path="/" element={<Navigate to={toUsers()} />} />
      </Routes>
    </HashRouter>
  );
