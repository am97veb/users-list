import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { toUsers } from "./routes";

export const App = () => (
  <HashRouter>
    <Routes>
      <Route path={toUsers()} />
      <Route path="/" element={<Navigate to={toUsers()} />} />
    </Routes>
  </HashRouter>
);
