import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

import { getLiveOccupancy } from "../api/analytics.api";

const OccupancyChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchOccupancyChart = async () => {
      try {
        const res = await getLiveOccupancy();

        
        const buckets = res?.data?.buckets || [];

        const formattedData = buckets.map((item) => ({
          time: new Date(item.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          count: item.count,
        }));

        setData(formattedData);
      } catch (error) {
        console.error("Error fetching occupancy chart", error);
        setData([]); 
      }
    };

    fetchOccupancyChart();
  }, []);

  return (
    <ResponsiveContainer width="97%" height={280}>
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 20,
          left: 10,
          bottom: 40,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          dataKey="time"
          height={60}
          tickMargin={16}
          label={{
            value: "Time",
            position: "insideBottom",
            offset: -10,
          }}
        />

        <YAxis
          width={80}
          tickMargin={12}
          padding={{ bottom: 10 }}
          domain={["dataMin - 10", "dataMax + 10"]}
          label={{
            value: "Count",
            angle: -90,
            position: "insideLeft",
          }}
        />

        <Tooltip />
        <Legend verticalAlign="top" align="right" />

        <Line
          name="Occupancy"
          type="monotone"
          dataKey="count"
          stroke="#00897b"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OccupancyChart;
