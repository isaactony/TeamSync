import React, { createContext, useContext, useState, useEffect } from 'react';

interface SettingsContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  notifications: boolean;
  toggleNotifications: () => void;
  language: string;
  setLanguage: (lang: string) => void;
  signOut: () => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  // Load settings from localStorage on initial render
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  const [notifications, setNotifications] = useState(() => {
    const saved = localStorage.getItem('notifications');
    return saved ? JSON.parse(saved) : true;
  });

  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved || 'en';
  });

  // Update localStorage when settings change
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleNotifications = () => setNotifications(!notifications);

  const signOut = () => {
    // Clear all settings and user data
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <SettingsContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        notifications,
        toggleNotifications,
        language,
        setLanguage,
        signOut,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}