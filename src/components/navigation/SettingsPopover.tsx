import React, { useState } from 'react';
import { Settings, Moon, Sun, Bell, Globe, User, LogOut } from 'lucide-react';
import { useSettings } from '../../context/SettingsContext';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
];

export default function SettingsPopover() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const { darkMode, toggleDarkMode, notifications, toggleNotifications, language, setLanguage, signOut } = useSettings();

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode);
    setShowLanguages(false);
  };

  return (
    <div className="relative">
      <button
        aria-label="Settings"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
      >
        <Settings className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden z-50">
          <div className="p-4 border-b">
            <h3 className="text-sm font-medium">Settings</h3>
          </div>

          <div className="p-4 space-y-4">
            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {darkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                <span className="text-sm">Dark Mode</span>
              </div>
              <button
                role="switch"
                aria-checked={darkMode}
                onClick={toggleDarkMode}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                  darkMode ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            {/* Notifications Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="h-5 w-5" />
                <span className="text-sm">Notifications</span>
              </div>
              <button
                role="switch"
                aria-checked={notifications}
                onClick={toggleNotifications}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                  notifications ? 'bg-indigo-600' : 'bg-gray-200'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <hr />

            {/* Profile Settings */}
            <button className="w-full flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg">
              <User className="h-5 w-5" />
              <span className="text-sm">Profile Settings</span>
            </button>

            {/* Language & Region */}
            <div className="relative">
              <button
                onClick={() => setShowLanguages(!showLanguages)}
                className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
              >
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5" />
                  <span className="text-sm">Language & Region</span>
                </div>
                <span className="text-sm text-gray-500">
                  {languages.find(lang => lang.code === language)?.name}
                </span>
              </button>

              {showLanguages && (
                <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageSelect(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                        language === lang.code ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700'
                      }`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <hr />

            {/* Sign Out */}
            <button
              onClick={signOut}
              className="w-full flex items-center space-x-3 p-2 text-red-600 hover:bg-red-50 rounded-lg"
            >
              <LogOut className="h-5 w-5" />
              <span className="text-sm">Sign Out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}