import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  bgColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  isPositive,
  bgColor,
}) => {
  return (
    <div className={`${bgColor} rounded-xl p-6 flex items-center justify-between`}>
      {/* Left side: title + value */}
      <div>
        <p className="text-gray-600 text-sm mb-1">{title}</p>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>

      {/* Right side: change + arrow (always black) */}
      <div className="flex items-center space-x-1">
        <span className="text-sm font-medium text-black">{change}</span>
        {isPositive ? (
          <TrendingUp className="w-4 h-4 text-black" />
        ) : (
          <TrendingDown className="w-4 h-4 text-black" />
        )}
      </div>
    </div>
  );
};

const StatsCards: React.FC = () => {
  const stats = [
    {
      title: "Views",
      value: "721K",
      change: "+11.02%",
      isPositive: true,
      bgColor: "bg-[#E0F2FE]",
    },
    {
      title: "Visits",
      value: "367K",
      change: "-0.03%",
      isPositive: false,
      bgColor: "bg-[#E2E8F0]",
    },
    {
      title: "New Users",
      value: "1,156",
      change: "+15.03%",
      isPositive: true,
      bgColor: "bg-[#E0F2FE]",
    },
    {
      title: "Active Users",
      value: "239K",
      change: "+6.08%",
      isPositive: true,
      bgColor: "bg-[#E2E8F0]",
    },
  ];

  return (
    <div className="mb-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-gray-800 font-semibold">Today</h1>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          <svg
            className="w-4 h-4 inline ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
};

export default StatsCards;
