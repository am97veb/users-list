import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 10px;
`;

const baseButtonStyle = css`
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

export const Input = styled.input`
  max-width: 250px;
  border: 1px solid gray;
  border-radius: 10px;
  width: 100%;
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
`;

export const UserButtonsWrapper = styled.div`
  margin: 10px 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const StyledUserData = styled.td`
  width: 150px;
  padding: 0 10px;
  border-right: 1px solid gray;
`;
