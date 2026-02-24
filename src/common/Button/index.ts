import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

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
`;

export const Button = styled.button`
  ${baseButtonStyle}
`;

export const AddUser = styled(Link)`
  ${baseButtonStyle}
`;
