import { useFilterUsersByAddress } from "../useFilterUsersByAddress";
import { StyledTable, TableWrapper } from "./styled";
import type { UsersTableProps } from "./types";
import { UserRow } from "./UserRow";

export const UsersTable = ({ searchAddress, sortedUsers }: UsersTableProps) => {
  const filteredUsers = useFilterUsersByAddress({ sortedUsers, searchAddress });

  return (
    <TableWrapper>
      <StyledTable>
        {filteredUsers &&
          filteredUsers.map((user) => <UserRow key={user.id} user={user} />)}
      </StyledTable>
    </TableWrapper>
  );
};
