import { ErrorText } from "./styled";
import type { ErrorProps } from "./types";

export const Error = ({ message, error }: ErrorProps) => (
  <>
    <ErrorText>
      {message} {error}
    </ErrorText>
  </>
);
