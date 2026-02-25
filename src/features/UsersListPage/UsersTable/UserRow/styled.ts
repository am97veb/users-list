import styled from "styled-components";

export const UserButtonsWrapper = styled.td`
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const StyledUserData = styled.td`
  width: 200px;
  padding: 0 20px;
  border-right: 1px solid gray;

  &:first-of-type {
    padding: 0 20px 0 0;
  }
`;

export const TableRow = styled.tr`
  &:first-of-type ${UserButtonsWrapper} {
    margin: 0 10px 10px;
  }

  &:last-of-type ${UserButtonsWrapper} {
    margin: 10px 10px 0;
  }
`;
