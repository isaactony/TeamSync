import React from 'react';
import { Users, Trophy, ArrowUpRight } from 'lucide-react';

interface TeamCardProps {
  team: {
    id: number;
    name: string;
    members: number;
    avatar: string;
    stats: {
      participation: number;
      events: number;
      points: number;
      rank: number;
    };
    tags: string[];
    recentEvents: string[];
  };
  isSelected: boolean;
  onClick: () => void;
}

export default function TeamCard({ team, isSelected, onClick }: TeamCardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-sm border-2 transition-all cursor-pointer
        ${isSelected 
          ? 'border-indigo-500 shadow-lg transform scale-[1.02]' 
          : 'border-transparent hover:border-indigo-200 hover:shadow-md'
        }`}
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <img
                src={team.avatar}
                alt={team.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div className="absolute -bottom-2 -right-2 bg-indigo-600 rounded-full p-1">
                <Trophy className="w-4 h-4 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                {team.name}
                <ArrowUpRight className="w-4 h-4 ml-2 text-indigo-500" />
              </h3>
              <div className="flex items-center text-gray-600 mt-1">
                <Users className="w-4 h-4 mr-1" />
                <span className="text-sm">{team.members} members</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-indigo-600">#{team.stats.rank}</div>
            <div className="text-sm text-gray-500">Rank</div>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap gap-2">
            {team.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-sm font-medium text-gray-500">Participation</div>
              <div className="mt-1 text-lg font-semibold text-gray-900">{team.stats.participation}%</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Events</div>
              <div className="mt-1 text-lg font-semibold text-gray-900">{team.stats.events}</div>
            </div>
            <div>
              <div className="text-sm font-medium text-gray-500">Points</div>
              <div className="mt-1 text-lg font-semibold text-gray-900">{team.stats.points}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}