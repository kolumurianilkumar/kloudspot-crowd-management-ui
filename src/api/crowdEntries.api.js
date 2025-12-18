import axios from "../services/axios";

const getTimeRange = () => {
  const now = Date.now();
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);

  return {
    fromUtc: startOfDay.getTime(),
    toUtc: now,
  };
};

export const getCrowdEntries = ({ page = 1, limit = 10 }) => {
  const { fromUtc, toUtc } = getTimeRange();

  return axios.post("/entries/list", {
    siteId: "SITE-AE-DXB-001",
    fromUtc,
    toUtc,
    page,
    limit,
  });
};
