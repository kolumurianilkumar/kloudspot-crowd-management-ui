import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Male", value: 55 },
  { name: "Female", value: 45 },
];

const COLORS = ["#00897b", "#80cbc4"];

const DemographicsPie = () => {
  return (
    <div style={{ width: "100%" }}>
      
      <div style={{ position: "relative", height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={70}
              outerRadius={95}
              startAngle={90}
              endAngle={-270}
              stroke="none"
            >
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            pointerEvents: "none",
          }}
        >
          <div style={{ fontSize: 14, color: "#666" }}>
            Total Crowd
          </div>
          <div style={{ fontSize: 22, fontWeight: "bold" }}>
            100%
          </div>
        </div>
      </div>

      {/* LEGEND */}
      <div style={{ marginTop: 16 }}>
        <div>👨 55% Males</div>
        <div>👩 45% Females</div>
      </div>
    </div>
  );
};

export default DemographicsPie;
