import React from "react";

const PieChart: React.FC = () => {
  const data = [
    { label: "United States", percentage: 38.6, color: "#000000" },
    { label: "Canada", percentage: 22.5, color: "#9AE6B4" },
    { label: "Mexico", percentage: 30.8, color: "#7F9CF5" },
    { label: "Other", percentage: 8.1, color: "#90CDF4" },
  ];

  let cumulative = 0;
  const gap = 2; // small gap between arcs

  const segments = data.map((item) => {
    const startOffset = cumulative;
    const value = (item.percentage / 100) * (100 - data.length * gap);
    cumulative -= value + gap;
    return { ...item, value, offset: startOffset };
  });

  return (
    <div className="flex items-center space-x-8">
      {/* Donut Chart */}
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 42 42">
          <circle
            cx="21"
            cy="21"
            r="15.915"
            fill="transparent"
            stroke="#f3f4f6"
            strokeWidth="6"
          />
          {segments.map((item, i) => (
            <circle
              key={i}
              cx="21"
              cy="21"
              r="15.915"
              fill="transparent"
              stroke={item.color}
              strokeWidth="6"
              strokeDasharray={`${item.value} ${100 - item.value}`}
              strokeDashoffset={item.offset}
              strokeLinecap="round"
            />
          ))}
        </svg>
      </div>

      {/* Legend */}
      <div className="space-y-3">
        {data.map((item, i) => (
          <div key={i} className="flex items-center justify-between w-40">
            <div className="flex items-center space-x-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-sm text-gray-800">{item.label}</span>
            </div>
            <span className="text-sm font-medium text-gray-800">
              {item.percentage}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
