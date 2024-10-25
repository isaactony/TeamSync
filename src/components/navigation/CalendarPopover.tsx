import React, { useState } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CalendarPopover() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  return (
    <div className="relative">
      <button
        aria-label="Open calendar"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-lg"
      >
        <CalendarIcon className="h-5 w-5" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-50">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrevMonth}
              className="p-1 hover:bg-gray-100 rounded-full"
              aria-label="Previous month"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h3 className="text-sm font-medium">
              {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </h3>
            <button
              onClick={handleNextMonth}
              className="p-1 hover:bg-gray-100 rounded-full"
              aria-label="Next month"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
              <div key={day} className="text-center text-xs font-medium text-gray-500 p-1">
                {day}
              </div>
            ))}
            {[...Array(getFirstDayOfMonth(currentDate))].map((_, i) => (
              <div key={`empty-${i}`} className="p-1" />
            ))}
            {[...Array(getDaysInMonth(currentDate))].map((_, i) => (
              <button
                key={i + 1}
                className="p-1 text-sm hover:bg-indigo-50 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
                onClick={() => {
                  // Handle date selection
                  setIsOpen(false);
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}