import React, { useState } from 'react';
import { Users, Trophy, Target, Zap, Search, ArrowUpRight, BarChart3 } from 'lucide-react';
import TeamCard from './TeamCard';
import TeamStats from './TeamStats';

const teams = [
  {
    id: 1,
    name: "Innovation Squad",
    members: 8,
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    stats: {
      participation: 92,
      events: 24,
      points: 1250,
      rank: 1
    },
    tags: ["Product", "Design", "Engineering"],
    recentEvents: ["Virtual Escape Room", "Team Trivia"]
  },
  {
    id: 2,
    name: "Growth Tigers",
    members: 6,
    avatar: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    stats: {
      participation: 88,
      events: 20,
      points: 980,
      rank: 2
    },
    tags: ["Marketing", "Sales"],
    recentEvents: ["Strategy Workshop", "Virtual Coffee"]
  },
  {
    id: 3,
    name: "Customer Champions",
    members: 10,
    avatar: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    stats: {
      participation: 85,
      events: 18,
      points: 850,
      rank: 3
    },
    tags: ["Support", "Success"],
    recentEvents: ["Team Building", "Knowledge Share"]
  }
];

export default function TeamsPage() {
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    team.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Teams List */}
        <div className="lg:w-2/3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">
              Our Teams
            </h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search teams..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="grid gap-6">
            {filteredTeams.map((team) => (
              <TeamCard
                key={team.id}
                team={team}
                isSelected={selectedTeam === team.id}
                onClick={() => setSelectedTeam(team.id)}
              />
            ))}
          </div>
        </div>

        {/* Right Column - Team Stats */}
        <div className="lg:w-1/3">
          <div className="sticky top-24">
            {selectedTeam ? (
              <TeamStats team={teams.find(t => t.id === selectedTeam)!} />
            ) : (
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 text-center">
                <Users className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Select a Team
                </h3>
                <p className="text-gray-600">
                  Click on a team card to view detailed statistics and information
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}