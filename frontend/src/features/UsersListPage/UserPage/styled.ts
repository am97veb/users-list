import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
`;

export const ListItem = styled.li`
  padding: 20px 0 10px;
  border-bottom: 1px solid gray;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
`;

export const Key = styled.span`
  text-align: left;
  align-self: end;
`;

export const Value = styled.span`
  text-align: right;
  display: flex;
  flex-direction: column;
  white-space: pre-line;
`;
