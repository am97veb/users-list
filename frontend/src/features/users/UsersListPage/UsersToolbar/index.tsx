import { AddUserPageLink, Button } from "../../../../common/Button";
import { Input } from "../../../../common/Input";
import { toAddUsers } from "../../../../core/routes";
import { Wrapper } from "./styed";
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
    <AddUserPageLink to={toAddUsers()}>add user</AddUserPageLink>
  </Wrapper>
);
