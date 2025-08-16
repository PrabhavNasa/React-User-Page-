import React from 'react';

interface NotificationProps {
  title: string;
  time: string;
  type: 'bug' | 'user' | 'version' | 'subscription';
}

interface ActivityProps {
  user: string;
  action: string;
  time: string;
  avatar: string;
}

interface ContactProps {
  name: string;
  avatar: string;
}

const NotificationItem: React.FC<NotificationProps> = ({ title, time, type }) => {
  const getIcon = () => {
    switch (type) {
      case 'bug':
        return <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">🐛</div>;
      case 'user':
        return <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">👤</div>;
      case 'version':
        return <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">🚀</div>;
      case 'subscription':
        return <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">📡</div>;
      default:
        return <div className="w-8 h-8 bg-gray-100 rounded-full"></div>;
    }
  };

  return (
    <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg">
      {getIcon()}
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-800">{title}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
};

const ActivityItem: React.FC<ActivityProps> = ({ action, time, avatar }) => {
  return (
    <div className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
        <span className="text-white text-xs font-medium">{avatar}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-800">{action}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
};

const ContactItem: React.FC<ContactProps> = ({ name, avatar }) => {
  return (
    <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
        <span className="text-white text-sm font-medium">{avatar}</span>
      </div>
      <span className="text-sm text-gray-800">{name}</span>
    </div>
  );
};

const RightSidebar: React.FC = () => {
  const notifications = [
    { title: 'You fixed a bug.', time: 'Just now', type: 'bug' as const },
    { title: 'New user registered.', time: '59 minutes ago', type: 'user' as const },
    { title: 'You fixed a bug.', time: '12 hours ago', type: 'bug' as const },
    { title: 'Andi Lane subscribed to you.', time: 'Today, 11:59 AM', type: 'subscription' as const }
  ];

  const activities = [
    { user: 'User', action: 'Changed the style.', time: 'Just now', avatar: 'U' },
    { user: 'User', action: 'Released a new version.', time: '59 minutes ago', avatar: 'U' },
    { user: 'User', action: 'Submitted a bug.', time: '12 hours ago', avatar: 'U' },
    { user: 'User', action: 'Modified a data in Page X.', time: 'Today, 11:59 AM', avatar: 'U' },
    { user: 'User', action: 'Deleted a page in Project X.', time: 'Feb 2, 2023', avatar: 'U' }
  ];

  const contacts = [
    { name: 'Natali Craig', avatar: 'NC' },
    { name: 'Drew Cano', avatar: 'DC' },
    { name: 'Andi Lane', avatar: 'AL' },
    { name: 'Koray Okumus', avatar: 'KO' },
    { name: 'Kate Morrison', avatar: 'KM' },
    { name: 'Melody Macy', avatar: 'MM' }
  ];

  return (
    <div className="w-80 bg-white border-l border-gray-200 h-screen flex flex-col">
      {/* Scrollable content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Notifications */}
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Notifications</h2>
        <div className="space-y-1">
          {notifications.map((notification, index) => (
            <NotificationItem key={index} {...notification} />
          ))}
        </div>
        
        {/* Activities */}
        <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">Activities</h2>
        <div className="space-y-1">
          {activities.map((activity, index) => (
            <ActivityItem key={index} {...activity} />
          ))}
        </div>
        
        {/* Contacts */}
        <h2 className="text-lg font-semibold text-gray-800 mt-8 mb-4">Contacts</h2>
        <div className="space-y-1">
          {contacts.map((contact, index) => (
            <ContactItem key={index} {...contact} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
