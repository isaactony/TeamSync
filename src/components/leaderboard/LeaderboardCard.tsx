import React from 'react';
import { Trophy, TrendingUp, TrendingDown, Star } from 'lucide-react';

interface LeaderboardCardProps {
  team: {
    id: number;
    rank: number;
    previousRank: number;
    name: string;
    avatar: string;
    score: number;
    members: number;
    winRate: number;
    participation: number;
    recentAchievements: string[];
  };
  isSelected: boolean;
  onClick: () => void;
}

export default function LeaderboardCard({ team, isSelected, onClick }: LeaderboardCardProps) {
  const rankChange = team.previousRank - team.rank;

  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-sm border-2 transition-all cursor-pointer
        ${
          isSelected
            ? 'border-indigo-500 shadow-lg transform scale-[1.02]'
            : 'border-transparent hover:border-indigo-200 hover:shadow-md'
        }`}
    >
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50">
            <span className="text-xl font-bold text-indigo-600">#{team.rank}</span>
          </div>
          <img
            src={team.avatar}
            alt={team.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{team.name}</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">{team.score} points</span>
              <div className={`flex items-center ${
                rankChange > 0 ? 'text-green-500' : rankChange < 0 ? 'text-red-500' : 'text-gray-400'
              }`}>
                {rankChange > 0 ? (
                  <TrendingUp className="w-4 h-4" />
                ) : rankChange < 0 ? (
                  <TrendingDown className="w-4 h-4" />
                ) : null}
                {rankChange !== 0 && (
                  <span className="text-sm ml-1">{Math.abs(rankChange)}</span>
                )}
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-gray-600">{team.winRate}%</span>
            </div>
            <div className="text-sm text-gray-500">Win Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
}