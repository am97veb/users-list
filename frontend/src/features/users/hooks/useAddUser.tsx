import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addUser } from "../api/usersApi";
import { toast } from "react-toastify";

export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      toast.success("User added successfully!");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: () => {
      toast.error("Failed to add user. Please try again.");
    }
  });
};
