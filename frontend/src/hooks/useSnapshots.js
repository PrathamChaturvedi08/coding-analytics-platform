import { useQuery } from "@tanstack/react-query";
import { getSnapshots } from "../api/compareApi";

const useSnapshots = () =>
  useQuery({
    queryKey: ["snapshots"],
    queryFn: getSnapshots,
  });

export default useSnapshots;
