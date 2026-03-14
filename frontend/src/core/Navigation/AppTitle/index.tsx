import { toUsers } from "../../routes";
import { StyledAppTitle } from "./styled";

export const AppTitle = () => <StyledAppTitle to={toUsers()}>users list</StyledAppTitle>;
