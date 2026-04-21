import { AddUserPageLink } from "../../../../common/Button";
import { Message } from "../../../../common/Message";
import { toAddUsers } from "../../../../core/routes";
import { Wrapper } from "./styled";

export const EmptyList = () => (
  <Wrapper>
    <Message>
      There are no users in the database yet. Start adding users via the form
    </Message>
    <AddUserPageLink to={toAddUsers()}>add user</AddUserPageLink>
  </Wrapper>
);
