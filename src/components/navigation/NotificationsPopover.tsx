import React, { useState } from 'react';
import { Bell, X } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: 'New Team Event',
    message: 'Virtual Escape Room Challenge starts in 1 hour',
    time: '1 hour ago',
    unread: true,
  },
  {
    id: 2,
    title: 'Achievement Unlocked',
    message: 'Your team completed all weekly challenges',
    time: '2 hours ago',
    unread: true,
  },
  {
    id: 3,
    title: 'Team Update',
    message: 'New member joined Innovation Squad',
    time: '1 day ago',
    unread: false,
  },
];

export default function NotificationsPopover() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2);

  const markAsRead = (id: number) => {
    setUnreadCount((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="relative">
      <button
        aria-label={`Notifications ${unreadCount > 0 ? `(${unreadCount} unread)` : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg relative"
      >
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-50">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium">Notifications</h3>
              {unreadCount > 0 && (
                <button
                  onClick={() => setUnreadCount(0)}
                  className="text-xs text-indigo-600 hover:text-indigo-500"
                >
                  Mark all as read
                </button>
              )}
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 hover:bg-gray-50 transition-colors ${
                  notification.unread ? 'bg-indigo-50/50' : ''
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-gray-900">{notification.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                  </div>
                  {notification.unread && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="text-gray-400 hover:text-gray-500"
                      aria-label="Mark as read"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t">
            <button className="w-full text-center text-sm text-indigo-600 hover:text-indigo-500">
              View all notifications
            </button>
          </div>
        </div>
      )}
    </div>
  );
}