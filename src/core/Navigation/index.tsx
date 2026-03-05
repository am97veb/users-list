import { toAddUsers, toUsers } from "../routes";
import { AppTitle } from "./AppTitle";
import {
  BarWrapper,
  NavigationItem,
  NavigationList,
  NavigationLink,
} from "./styled";

export const Navigation = () => (
  <BarWrapper>
    <AppTitle />
    <NavigationList>
      <NavigationItem>
        <NavigationLink to={toUsers()}>users list</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink to={toAddUsers()}>add users</NavigationLink>
      </NavigationItem>
    </NavigationList>
  </BarWrapper>
);
