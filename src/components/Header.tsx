import React from 'react';
import { Search, Menu, Sun, Bell, Grid3x3, ChevronDown, Star, RotateCcw } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Menu className="w-5 h-5 text-gray-400" />
            <button className="p-2 rounded-lg hover:bg-gray-100">
              <Star size={18} className="text-gray-600" />
            </button>
            <span className="text-gray-400 text-sm">Dashboards &nbsp; /</span>
            <span className="text-gray-800 text-sm font-medium">Default</span>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
                  {/* Search */}
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-12 py-2 w-80 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
            <kbd className="text-xs text-gray-400">⌘/</kbd>
          </div>
        </div>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Sun className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <RotateCcw size={18} className="text-gray-600" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
            <Grid3x3 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;