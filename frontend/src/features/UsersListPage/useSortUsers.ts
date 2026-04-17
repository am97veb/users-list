import { useState } from "react";
import type { User } from "../../types";

export const useSortUsers = (users: User[]) => {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortedUsers = [...users].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const toggleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return { sortedUsers, toggleSort };
};
