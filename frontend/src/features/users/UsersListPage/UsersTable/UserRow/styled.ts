import styled, { css } from "styled-components";
import type { StyledComponentsProps } from "../../types";
import TrashIcon from "@/assets/icons/trash.svg?react";
import EyeIcon from "@/assets/icons/eye.svg?react";

export const TableCell = styled.td<StyledComponentsProps>`
  width: 200px;
  padding: 0 20px;
  border-right: 1px solid gray;
  margin: 0;
  height: 45px;

  &:first-of-type {
    padding: 0 20px 0 0;
  }

  &:last-of-type {
    border-right: none;
  }

  ${({ $isActionCell }) =>
    $isActionCell &&
    css`
      display: flex;
      align-items: center;
      gap: 10px;
    `}
`;

export const TableRow = styled.tr``;

export const StyledEyeIcon = styled(EyeIcon)`
  color: white;
  width: 15px;
  height: 20px;
`;

export const StyledTrashIcon = styled(TrashIcon)`
  color: white;
  width: 14px;
  height: 18px;
`;