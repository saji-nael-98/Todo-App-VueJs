export const validateApiResponse = (res, neededStatus) => {
  return res.status === neededStatus;
};
