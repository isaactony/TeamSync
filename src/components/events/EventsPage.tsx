import React, { useState } from 'react';
import { Search, Filter, Calendar, Users, Clock, X } from 'lucide-react';

const categories = ['All', 'Team Challenge', 'Workshop', 'Networking', 'Game'];

const events = [
  {
    id: '1',
    title: "Virtual Escape Room Challenge",
    description: "Work together to solve puzzles and escape the virtual room within 60 minutes.",
    date: "March 15, 2024",
    time: "2:00 PM EST",
    duration: 60,
    participants: 12,
    maxParticipants: 15,
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Team Challenge"
  },
  {
    id: '2',
    title: "Creative Workshop: Digital Art",
    description: "Learn digital art techniques and create a collaborative masterpiece.",
    date: "March 18, 2024",
    time: "1:00 PM EST",
    duration: 90,
    participants: 8,
    maxParticipants: 20,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Workshop"
  },
  {
    id: '3',
    title: "Virtual Coffee & Connect",
    description: "Casual networking session to meet team members and share experiences.",
    date: "March 20, 2024",
    time: "11:00 AM EST",
    duration: 45,
    participants: 15,
    maxParticipants: 25,
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Networking"
  },
  {
    id: '4',
    title: "Team Trivia Challenge",
    description: "Test your knowledge in this fun team-based trivia competition.",
    date: "March 22, 2024",
    time: "3:00 PM EST",
    duration: 60,
    participants: 20,
    maxParticipants: 30,
    image: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    category: "Game"
  }
];

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
          Upcoming Events
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search events..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            <Filter className="h-5 w-5 text-gray-500" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      {showFilters && (
        <div className="mb-8 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">Filters</h3>
            <button
              onClick={() => setShowFilters(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
            <div className="relative h-48">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
              <span className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                {event.category}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{event.description}</p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.time} ({event.duration} min)</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.participants}/{event.maxParticipants} participants</span>
                </div>
              </div>
              <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
                Join Event
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}