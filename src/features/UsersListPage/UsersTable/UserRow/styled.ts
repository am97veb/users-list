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
