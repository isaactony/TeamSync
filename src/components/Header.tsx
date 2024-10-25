import { Users, Calendar, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Users className="h-8 w-8 text-indigo-600" />
          <span className="font-bold text-xl text-gray-900">TeamSync</span>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Calendar className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700 relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500"></span>
          </button>
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User avatar"
          />
        </div>
      </nav>
    </header>
  );
}