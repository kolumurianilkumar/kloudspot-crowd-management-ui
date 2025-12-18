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

const getPayload = () => {
  const { fromUtc, toUtc } = getTimeRange();

  return {
    siteId: "Avenue Mall", 
    fromUtc,
    toUtc,
  };
};

export const getLiveOccupancy = () =>
  axios.post("/analytics/occupancy", getPayload());

export const getTodayFootfall = () =>
  axios.post("/analytics/footfall", getPayload());

export const getAvgDwellTime = () =>
  axios.post("/analytics/dwell", getPayload());
