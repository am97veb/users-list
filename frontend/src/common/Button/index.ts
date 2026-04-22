import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { type StyledComponentsProps } from "../../features/users/UsersListPage/types";

export const baseButtonStyle = css`
  width: 75px;
  border: none;
  border-radius: 10px;
  background-color: gray;
  color: whitesmoke;
  font-size: small;
  padding: 2px;
  text-decoration: none;
  display: inline-block;
  text-align: center;

  &::first-letter {
    text-transform: uppercase;
  }
`;

export const Button = styled.button<StyledComponentsProps>`
  ${baseButtonStyle};

  ${({ addUserToListButton }) =>
    addUserToListButton &&
    css`
      min-width: 130px;
      padding: 2px 15px;
      align-self: flex-end;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      filter: brightness(0.5);
      cursor: not-allowed;
    `}
`;

export const AddUserPageLink = styled(Link)`
  ${baseButtonStyle}
`;
