import axiosInstance from "./axios";

export const getProfile = async () => {
  const { data } = await axiosInstance.get("/users/me");

  return data;
};
