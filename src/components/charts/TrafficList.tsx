import React from 'react';

const trafficData = [
  { name: 'Google', percentage: 95, color: 'bg-gray-200' },
  { name: 'YouTube', percentage: 80, color: 'bg-gray-200' },
  { name: 'Instagram', percentage: 85, color: 'bg-gray-900' },
  { name: 'Pinterest', percentage: 60, color: 'bg-gray-200' },
  { name: 'Facebook', percentage: 70, color: 'bg-gray-200' },
  { name: 'Twitter', percentage: 45, color: 'bg-gray-200' },
  { name: 'Tumblr', percentage: 35, color: 'bg-gray-200' },
];

const TrafficList: React.FC = () => {
  return (
    <div className="space-y-7">
      {trafficData.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          <span className="text-sm text-gray-600 w-20">{item.name}</span>
          <div className="flex-1 bg-gray-100 rounded-full h-2">
            <div
              className={`${item.color} h-2 rounded-full transition-all duration-500`}
              style={{ width: `${item.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrafficList;