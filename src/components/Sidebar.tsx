import React, { useState } from 'react';
import { ChevronRight, BarChart3, Folder, Users, ShoppingBag, BookOpen, User, FileText, MessageCircle, Settings, Building, PenTool, Share2 } from 'lucide-react';
import icon from "./icon.jpg";
import { PieChart } from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  hasSubmenu?: boolean;
  isExpanded?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, hasSubmenu, isExpanded, onClick }) => {
  return (
    <div
  className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
    isActive 
      ? 'bg-gray-100 text-black-600' 
      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
  }`}
      onClick={onClick}
    >
      <div className="flex items-center space-x-3">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
      {hasSubmenu && (
        <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
      )}
    </div>
  );
};

const Sidebar: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    dashboards: true,
    pages: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <img src={icon} alt="icon" className="w-8 h-8" />
          <span className="text-xl font-bold text-gray-800">ByeWind</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Favorites Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Favorites</span>
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Recently</span>
          </div>
          <NavItem icon={<BarChart3 className="w-5 h-5" />} label="Overview" />
          <div className="mt-2">
            <NavItem icon={<Folder className="w-5 h-5" />} label="Projects" />
          </div>
        </div>

        {/* Dashboards Section */}
        <div className="mb-6">
          <div className="mb-3">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Dashboards</span>
          </div>
          <NavItem
            icon={<PieChart className="w-5 h-5 text-black" />}
            label="Default" isActive/>
          <div className="mt-1">
            <NavItem icon={<ShoppingBag className="w-5 h-5" />} label="eCommerce" />
          </div>
          <div className="mt-1">
            <NavItem icon={<Folder className="w-5 h-5" />} label="Projects" />
          </div>
          <div className="mt-1">
            <NavItem icon={<BookOpen className="w-5 h-5" />} label="Online Courses" />
          </div>
        </div>

        {/* Pages Section */}
        <div className="mb-6">
          <div className="mb-3">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Pages</span>
          </div>
          <NavItem icon={<User className="w-5 h-5" />} label="User Profile" />
          <div className="ml-6 mt-1 space-y-1">
            <NavItem icon={<div className="w-1 h-1 bg-gray-400 rounded-full"></div>} label="Overview" />
            <NavItem icon={<div className="w-1 h-1 bg-gray-400 rounded-full"></div>} label="Projects" />
            <NavItem icon={<div className="w-1 h-1 bg-gray-400 rounded-full"></div>} label="Campaigns" />
            <NavItem icon={<div className="w-1 h-1 bg-gray-400 rounded-full"></div>} label="Documents" />
            <NavItem icon={<div className="w-1 h-1 bg-gray-400 rounded-full"></div>} label="Followers" />
          </div>
          <div className="mt-2">
            <NavItem icon={<Settings className="w-5 h-5" />} label="Account" />
          </div>
          <div className="mt-1">
            <NavItem icon={<Building className="w-5 h-5" />} label="Corporate" />
          </div>
          <div className="mt-1">
            <NavItem icon={<FileText className="w-5 h-5" />} label="Blog" />
          </div>
          <div className="mt-1">
            <NavItem icon={<Share2 className="w-5 h-5" />} label="Social" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;