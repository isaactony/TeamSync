import React from 'react';
import { Settings, Bell, Calendar } from 'lucide-react';
import { User, TeamStats } from '../../types';

interface UserProfileProps {
  user: User;
  stats: TeamStats;
}

export default function UserProfile({ user, stats }: UserProfileProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center space-x-6 mb-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="h-20 w-20 rounded-full"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
          <p className="text-gray-500">{user.team}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Participation Rate</span>
            <span className="text-lg font-semibold">{stats.participationRate}%</span>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Events Attended</span>
            <span className="text-lg font-semibold">{stats.eventsAttended}</span>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-gray-500">Team Rank</span>
            <span className="text-lg font-semibold">#{stats.rank}</span>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <h3 className="text-lg font-semibold mb-4">Preferences</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-gray-400" />
              <span>Notifications</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={user.preferences.notifications} />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-gray-400" />
              <span>Calendar Sync</span>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" checked={user.preferences.calendar} />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-indigo-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
            </label>
          </div>
        </div>
      </div>

      <button className="mt-6 w-full flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
        <Settings className="h-5 w-5" />
        <span>Edit Profile Settings</span>
      </button>
    </div>
  );
}