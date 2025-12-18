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

const DemographicsChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // TEMP MOCK DATA
    setData([
      { time: "08:00", male: 180, female: 140 },
      { time: "09:00", male: 185, female: 145 },
      { time: "10:00", male: 190, female: 148 },
      { time: "11:00", male: 195, female: 150 },
      { time: "12:00", male: 190, female: 148 },
      { time: "13:00", male: 200, female: 150 },
      { time: "14:00", male: 205, female: 155 },
      { time: "15:00", male: 200, female: 152 },
      { time: "16:00", male: 210, female: 158 },
      { time: "17:00", male: 205, female: 155 },
      { time: "18:00", male: 215, female: 160 },
    ]);
  }, []);

  return (
    <ResponsiveContainer width="97%" height={450}>
      <LineChart
        data={data}
        margin={{
          top: 10,
          right: 20,
          left: 10,
          bottom: 50, 
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis
          dataKey="time"
          height={50}
          tickMargin={14}
          label={{
            value: "Time",
            position: "insideBottom",
            offset: -12, 
          }}
        />

        <YAxis
          width={69}
          tickMargin={12}
          padding={{ bottom: 10 }} // 
          label={{
            value: "Count",
            angle: -90,
            position: "insideLeft",
          }}
        />

        <Tooltip />
        <Legend verticalAlign="top" align="right" />

        <Line
          name="Male"
          type="monotone"
          dataKey="male"
          stroke="#00796b"
          strokeWidth={2}
          dot={false}
        />
        <Line
          name="Female"
          type="monotone"
          dataKey="female"
          stroke="#80cbc4"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default DemographicsChart;
