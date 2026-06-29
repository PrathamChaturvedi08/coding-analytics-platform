import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { syncProfile } from "../api/syncApi";

const useSync = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: syncProfile,

    onSuccess: () => {
      toast.success("Profile synced successfully!");

      queryClient.invalidateQueries({
        queryKey: ["summary"],
      });

      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Sync failed.");
    },
  });
};

export default useSync;
