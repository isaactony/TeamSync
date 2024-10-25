import React from 'react';
import { Trophy, Target, Users, Star, Award, TrendingUp, Zap } from 'lucide-react';

interface LeaderboardStatsProps {
  team: {
    name: string;
    avatar: string;
    score: number;
    rank: number;
    winRate: number;
    participation: number;
    recentAchievements: string[];
    stats: {
      eventsWon: number;
      teamSpirit: number;
      improvement: number;
    };
  };
  timeFrame: string;
}

export default function LeaderboardStats({ team, timeFrame }: LeaderboardStatsProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="relative h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2">
              <Trophy className="w-6 h-6 text-yellow-300" />
              <h2 className="text-2xl font-bold text-white">{team.name}</h2>
            </div>
            <p className="text-white/80 mt-2">Rank #{team.rank} • {timeFrame}</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <Star className="w-6 h-6 text-indigo-600" />
              <span className="text-2xl font-bold text-indigo-600">{team.score}</span>
            </div>
            <div className="mt-2 text-sm font-medium text-indigo-600">Total Points</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <Target className="w-6 h-6 text-purple-600" />
              <span className="text-2xl font-bold text-purple-600">{team.winRate}%</span>
            </div>
            <div className="mt-2 text-sm font-medium text-purple-600">Win Rate</div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Events Won</span>
              <span className="text-sm font-bold text-gray-900">{team.stats.eventsWon}</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full h-2 transition-all duration-500"
                style={{ width: `${(team.stats.eventsWon / 15) * 100}%` }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Team Spirit</span>
              <span className="text-sm font-bold text-gray-900">{team.stats.teamSpirit}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full h-2 transition-all duration-500"
                style={{ width: `${team.stats.teamSpirit}%` }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Improvement</span>
              <span className="text-sm font-bold text-gray-900">+{team.stats.improvement}%</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full h-2 transition-all duration-500"
                style={{ width: `${(team.stats.improvement / 20) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-600 mb-3">Recent Achievements</h3>
          <div className="space-y-2">
            {team.recentAchievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center p-3 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg transform hover:scale-[1.02] transition-all"
              >
                <Award className="w-5 h-5 text-indigo-600 mr-3" />
                <span className="text-sm text-gray-700">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}