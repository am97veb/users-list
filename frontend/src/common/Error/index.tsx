import { Message } from "../Message";
import type { ErrorProps } from "./types";

export const Error = ({ message, error }: ErrorProps) => (
  <>
    <Message>
      {message} {error}
    </Message>
  </>
);
