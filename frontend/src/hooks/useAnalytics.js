import { useQuery } from "@tanstack/react-query";
import { getSummary } from "../api/analyticsApi";

const useAnalytics = () =>
  useQuery({
    queryKey: ["summary"],
    queryFn: getSummary,
  });

export default useAnalytics;
