import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../api/usersApi";
import { toast } from "react-toastify";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      toast.success("User deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: () => {
      toast.error("Failed to delete user");
    },
  });
};
