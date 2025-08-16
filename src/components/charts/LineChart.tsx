import React from "react";
import {
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", thisYear: 15000, lastYear: 12000 },
  { name: "Feb", thisYear: 12000, lastYear: 14000 },
  { name: "Mar", thisYear: 8000, lastYear: 15000 },
  { name: "Apr", thisYear: 10000, lastYear: 16000 },
  { name: "May", thisYear: 18000, lastYear: 17000 },
  { name: "Jun", thisYear: 20000, lastYear: 18000 },
  { name: "Jul", thisYear: 22000, lastYear: 19000 },
];

const LineChart: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 relative">

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <ReLineChart data={data}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
              tickFormatter={(value) => `${value / 1000}M`}
              domain={[0, 30000]}
              ticks={[0, 10000, 20000, 30000]}
            />
            <Tooltip
              formatter={(value: number) => [`${value.toLocaleString()}`, ""]}
              labelStyle={{ color: "#374151" }}
              contentStyle={{
                backgroundColor: "#fff",
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="thisYear"
              stroke="#000000"
              strokeWidth={3}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="lastYear"
              stroke="#9CA3AF"
              strokeWidth={3}
              strokeDasharray="8 8"
              dot={false}
            />
          </ReLineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChart;
