import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Linux", value: 18, color: "#818CF8" },   // purple
  { name: "Mac", value: 22, color: "#86EFAC" },     // green
  { name: "iOS", value: 18, color: "#111827" },     // black
  { name: "Windows", value: 25, color: "#60A5FA" }, // blue
  { name: "Android", value: 10, color: "#93C5FD" }, // light blue
  { name: "Other", value: 22, color: "#86EFAC" },   // green
];

const TrafficByDevice = () => {
  return (
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6B7280", fontSize: 12 }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#6B7280", fontSize: 12 }}
            ticks={[0, 10, 20, 30]}
            domain={[0, 30]}
          />
          <Tooltip cursor={{ fill: "transparent" }} />
          <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={32}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
  );
};

export default TrafficByDevice;