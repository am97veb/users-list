import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BarWrapper = styled.div`
  max-width: 1500px;
  background-color: grey;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: 20px;
  padding: 15px;
  margin: 0;
`;

export const NavigationItem = styled.li`
  list-style: none;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
`;
