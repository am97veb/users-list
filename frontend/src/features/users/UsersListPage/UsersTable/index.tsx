import { useFilterUsersByAddress } from "../useFilterUsersByAddress";
import { StyledTable, TableHeader, TableWrapper } from "./styled";
import type { UsersTableProps } from "./types";
import { UserRow } from "./UserRow";

export const UsersTable = ({ searchAddress, sortedUsers }: UsersTableProps) => {
  const filteredUsers = useFilterUsersByAddress({ sortedUsers, searchAddress });

  const tableHeaderFields = ["name", "email", "city", "zipcode", "street"];

  return (
    <TableWrapper>
      <StyledTable>
        {tableHeaderFields.map((field, index) => (
          <TableHeader key={index}>{field}</TableHeader>
        ))}
        {filteredUsers &&
          filteredUsers.map((user) => <UserRow key={user.id} user={user} />)}
      </StyledTable>
    </TableWrapper>
  );
};
