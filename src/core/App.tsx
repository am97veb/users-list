import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { toUsers } from "./routes";
import { Navigation } from "./Navigation";

export const App = () => (
  <HashRouter>
    <Navigation />
    <Routes>
      <Route path={toUsers()} />
      <Route path="/" element={<Navigate to={toUsers()} />} />
    </Routes>
  </HashRouter>
);
