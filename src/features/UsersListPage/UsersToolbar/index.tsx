import { toAddUsers } from "../../../core/routes";
import { AddUser, Button, Input, Wrapper } from "./styed";
import type { UsersToolbarProps } from "./types";

export const UsersToolbar = ({
  searchAddress,
  onSearchChange,
  onToggleSort,
}: UsersToolbarProps) => (
  <Wrapper>
    <Input
      type="text"
      placeholder="Search by address (street, city)..."
      value={searchAddress}
      onChange={(event) => onSearchChange(event.target.value)}
    />
    <Button onClick={onToggleSort}>sort</Button>
    <AddUser to={toAddUsers()}>add user</AddUser>
  </Wrapper>
);
