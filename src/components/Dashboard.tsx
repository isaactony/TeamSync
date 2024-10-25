import { Search, Filter } from 'lucide-react';
import EventCard from './EventCard';

const upcomingEvents = [
  {
    title: "Virtual Escape Room Challenge",
    date: "March 15, 2024",
    time: "2:00 PM EST",
    participants: 12,
    maxParticipants: 15,
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Team Challenge"
  },
  {
    title: "Creative Workshop: Digital Art",
    date: "March 18, 2024",
    time: "1:00 PM EST",
    participants: 8,
    maxParticipants: 20,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Workshop"
  },
  {
    title: "Virtual Coffee & Connect",
    date: "March 20, 2024",
    time: "11:00 AM EST",
    participants: 15,
    maxParticipants: 25,
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Networking"
  }
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
          Upcoming Team Events
        </h1>
        <div className="flex space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search events..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter className="h-5 w-5 text-gray-500" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingEvents.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
}