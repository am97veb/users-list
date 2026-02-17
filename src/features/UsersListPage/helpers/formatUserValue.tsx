import type { User } from "../types";

export const formatUserValue = (value: User) => {
  if (typeof value !== "object") {
    return String(value);
  }

  return (
    <ul>
      {Object.entries(value).map(([subKey, sabValue]) => (
        <li key={subKey}>
          <span>{subKey}</span>: {formatUserValue(sabValue)}
        </li>
      ))}
    </ul>
  );
};
