import React, { useState } from 'react';
import { Users, Menu, X } from 'lucide-react';
import CalendarPopover from './navigation/CalendarPopover';
import NotificationsPopover from './navigation/NotificationsPopover';
import SettingsPopover from './navigation/SettingsPopover';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'events', label: 'Events' },
    { id: 'teams', label: 'Teams' },
    { id: 'leaderboard', label: 'Leaderboard' },
  ];

  return (
    <nav className="bg-white fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
              <Users className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TeamSync</span>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`cursor-pointer inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    currentPage === item.id
                      ? 'border-indigo-500 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <CalendarPopover />
            <NotificationsPopover />
            <SettingsPopover />
            <img
              className="h-8 w-8 rounded-full ring-2 ring-indigo-500"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User avatar"
            />
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              onClick={() => {
                onNavigate(item.id);
                setIsOpen(false);
              }}
              className={`cursor-pointer block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                currentPage === item.id
                  ? 'border-indigo-500 text-indigo-700 bg-indigo-50'
                  : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}