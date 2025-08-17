import React from 'react';
import LineChart from './charts/LineChart';
import BarChart from './charts/TrafficByDevice';
import PieChart from './charts/PieChart';
import TrafficList from './charts/TrafficList';

const ChartsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

      <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium text-gray-800 border-b-2 border-gray-800 pb-1">Total Users</button>
            <button className="text-sm text-gray-500 hover:text-gray-700">Total Projects</button>
            <button className="text-sm text-gray-500 hover:text-gray-700">Operating Status</button>
            <div className="ftext-sm text-gray-500 hover:text-gray-700">|</div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
              <span className="text-sm text-black -600">This year</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-gray-400"></div>
              <span className="text-sm text-black-600">Last year</span>
            </div>
          </div>
        </div>
        <LineChart />
      </div>


      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Traffic by Website</h3>
        <TrafficList />
      </div>


      <div className="lg:col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Traffic by Device</h3>
          <BarChart />
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Traffic by Location</h3>
          <PieChart />
        </div>
      </div>


      <div className="lg:col-span-3 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Marketing & SEO</h3>
        <div className="text-center py-8">
          <p className="text-3xl font-bold text-gray-300">30M</p>
          <p className="text-gray-500 text-sm mt-2">Total impressions this month</p>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;
