import { useState } from "react";
import { useAppSelector } from "../../core/hooks";
import { selectUsers } from "../../core/usersSlice";

export const useSortUsers = () => {
  const usersList = useAppSelector(selectUsers);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortedUsers = [...usersList].sort((a, b) => {
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
