import styled, { css } from "styled-components";
import type { StyledComponentsProps } from "../../types";

export const TableCell = styled.td<StyledComponentsProps>`
  width: 200px;
  padding: 0 20px;
  border-right: 1px solid gray;
  margin: 10px 0;

  &:first-of-type {
    padding: 0 20px 0 0;
  }

  &:last-of-type {
    border-right: none;
  }

  ${({ isActionCell }) =>
    isActionCell &&
    css`
      display: flex;
      flex-direction: column;
      gap: 2px;
    `}
`;

export const TableRow = styled.tr`
  &:first-of-type ${TableCell} {
    margin: 0 0 10px;
  }

  &:last-of-type ${TableCell} {
    margin: 10px 0 0;
  }
`;