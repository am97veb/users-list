import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  color: whitesmoke;
  background-color: grey;
  margin-bottom: 20px;
  border-radius: 0 0 5px 5px;
`;

export const NavigationList = styled.ul`
  display: flex;
  gap: 20px;
  padding: 15px;
  margin: 0;
`;

export const NavigationItem = styled.li`
  list-style: none;
  text-transform: capitalize;
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: whitesmoke;
`;
