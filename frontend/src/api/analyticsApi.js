import axiosInstance from "./axios";

export const getSummary = async () => {
  const { data } = await axiosInstance.get("/analytics/summary");

  return data;
};
