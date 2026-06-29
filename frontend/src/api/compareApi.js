import axiosInstance from "./axios";

export const getSnapshots = async () => {
  const { data } = await axiosInstance.get("/analytics/snapshots");

  return data;
};

export const compareSnapshots = async ({ from, to = "current" }) => {
  const { data } = await axiosInstance.get("/analytics/compare", {
    params: {
      from,
      to,
    },
  });

  return data;
};
