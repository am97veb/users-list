import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { toUsers } from "./routes";
import { Navigation } from "./Navigation";
import { UsersListPage } from "../features/UsersListPage";

export const App = () => (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path={toUsers()} element={<UsersListPage />} />
        <Route path="/" element={<Navigate to={toUsers()} />} />
      </Routes>
    </HashRouter>
  );

