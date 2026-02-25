import styled from "styled-components";

export const TableWrapper = styled.div`
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  text-transform: capitalize;
  text-align: left;
  padding-bottom: 15px;

  &:not(:first-of-type) {
    padding-left: 20px;
  }
`;
