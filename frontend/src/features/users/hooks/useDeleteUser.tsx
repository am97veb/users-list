import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../api/usersApi";
import { toast } from "react-toastify";
import type { User } from "../types";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,

    onMutate: async (userId) => {
      await queryClient.cancelQueries({ queryKey: ["users"] });

      const previousUsers = queryClient.getQueryData(["users"]);

      queryClient.setQueryData(["users"], (old: User[]) =>
        old ? old.filter((user) => user.id !== userId) : [],
      );
      return { previousUsers };
    },

    onSuccess: () => {
      toast.success("User deleted successfully");
    },

    onError: (_err, _variables, context) => {
      queryClient.setQueryData(["users"], context?.previousUsers);
      toast.error("Failed to delete user");
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
