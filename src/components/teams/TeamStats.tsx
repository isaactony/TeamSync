import React, { useState } from 'react';
import { Users, Trophy, Target, Calendar, Zap, BarChart3, Award, TrendingUp, Clock, Star } from 'lucide-react';

interface TeamStatsProps {
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
}

const performanceData = {
  weekly: [65, 75, 82, 78, 88, 92, 95],
  engagement: [
    { category: 'Teamwork', score: 85 },
    { category: 'Communication', score: 92 },
    { category: 'Problem Solving', score: 78 },
    { category: 'Leadership', score: 88 },
  ],
  achievements: [
    { title: 'Perfect Attendance', icon: Star, date: '2024-03-10' },
    { title: 'Team Spirit Award', icon: Award, date: '2024-03-05' },
    { title: 'Innovation Champion', icon: TrendingUp, date: '2024-02-28' },
  ]
};

export default function TeamStats({ team }: TeamStatsProps) {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'performance', label: 'Performance' },
    { id: 'achievements', label: 'Achievements' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Hero Header */}
      <div className="relative h-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50">
          <div className="flex items-center space-x-4">
            <img
              src={team.avatar}
              alt={team.name}
              className="w-20 h-20 rounded-lg border-4 border-white object-cover shadow-lg transform -translate-y-2 hover:scale-105 transition-transform"
            />
            <div className="text-white">
              <h2 className="text-2xl font-bold">{team.name}</h2>
              <div className="flex items-center mt-1">
                <Users className="w-4 h-4 mr-1" />
                <span>{team.members} members</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b">
        <div className="flex space-x-1 p-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-lg p-4 transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-between">
                  <Trophy className="w-8 h-8 text-indigo-600" />
                  <span className="text-2xl font-bold text-indigo-600">#{team.stats.rank}</span>
                </div>
                <div className="mt-2 text-sm font-medium text-indigo-600">Current Rank</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 transform hover:scale-105 transition-transform">
                <div className="flex items-center justify-between">
                  <Zap className="w-8 h-8 text-purple-600" />
                  <span className="text-2xl font-bold text-purple-600">{team.stats.points}</span>
                </div>
                <div className="mt-2 text-sm font-medium text-purple-600">Total Points</div>
              </div>
            </div>

            {/* Participation Rate */}
            <div className="bg-white rounded-lg p-4 border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Participation Rate</span>
                <span className="text-sm font-bold text-gray-900">{team.stats.participation}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full h-3 transition-all duration-500"
                  style={{ width: `${team.stats.participation}%` }}
                >
                  <div className="w-full h-full bg-shimmer"></div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-3">Recent Events</h3>
              <div className="space-y-2">
                {team.recentEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-indigo-400 mr-2" />
                      <span className="text-sm text-gray-700">{event}</span>
                    </div>
                    <BarChart3 className="w-4 h-4 text-indigo-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Performance Tab */}
        {activeTab === 'performance' && (
          <div className="space-y-6">
            {/* Weekly Progress */}
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-4">Weekly Performance</h3>
              <div className="h-40 flex items-end space-x-2">
                {performanceData.weekly.map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div
                      className="w-full bg-gradient-to-t from-indigo-500 to-purple-500 rounded-t-lg transition-all duration-500 hover:from-indigo-600 hover:to-purple-600"
                      style={{ height: `${value}%` }}
                    ></div>
                    <span className="text-xs text-gray-500 mt-1">W{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement Metrics */}
            <div>
              <h3 className="text-sm font-medium text-gray-600 mb-4">Team Engagement</h3>
              <div className="space-y-3">
                {performanceData.engagement.map((metric) => (
                  <div key={metric.category}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-600">{metric.category}</span>
                      <span className="text-sm font-medium text-gray-900">{metric.score}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full h-2 transition-all duration-500"
                        style={{ width: `${metric.score}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Achievements Tab */}
        {activeTab === 'achievements' && (
          <div className="space-y-4">
            {performanceData.achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg transform hover:scale-[1.02] transition-all"
              >
                <div className="flex-shrink-0 p-2 bg-white rounded-lg shadow-sm">
                  <achievement.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-gray-900">{achievement.title}</h4>
                  <p className="text-xs text-gray-500">{new Date(achievement.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}