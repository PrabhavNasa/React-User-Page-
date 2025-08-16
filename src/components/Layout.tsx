import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import StatsCards from './StatsCards';
import ChartsSection from './ChartsSection';
import RightSidebar from './RightSidebar';

const Layout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <StatsCards />
          <ChartsSection />
        </main>
      </div>
      
      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
};

export default Layout;