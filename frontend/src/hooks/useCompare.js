import { useQuery } from "@tanstack/react-query";
import { compareSnapshots } from "../api/compareApi";

const useCompare = (from, to = "current") =>
  useQuery({
    queryKey: ["compare", from, to],
    enabled: !!from,
    queryFn: () => compareSnapshots({ from, to }),
  });

export default useCompare;
