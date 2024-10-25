import React, { useState } from 'react';
import { Trophy, Medal, Star, Crown, Zap, TrendingUp, TrendingDown, Users, Target } from 'lucide-react';
import LeaderboardCard from './LeaderboardCard';
import LeaderboardStats from './LeaderboardStats';

const timeFrames = ['Weekly', 'Monthly', 'All Time'];
const categories = ['Overall', 'Participation', 'Events Won', 'Team Spirit'];

const leaderboardData = [
  {
    id: 1,
    rank: 1,
    previousRank: 2,
    name: "Innovation Squad",
    avatar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    score: 1250,
    members: 8,
    winRate: 85,
    participation: 92,
    recentAchievements: ['Perfect Month', 'Innovation Award'],
    stats: {
      eventsWon: 12,
      teamSpirit: 95,
      improvement: 15,
    }
  },
  {
    id: 2,
    rank: 2,
    previousRank: 1,
    name: "Growth Tigers",
    avatar: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    score: 1180,
    members: 6,
    winRate: 82,
    participation: 88,
    recentAchievements: ['Team Spirit', 'Quick Learners'],
    stats: {
      eventsWon: 10,
      teamSpirit: 92,
      improvement: 8,
    }
  },
  {
    id: 3,
    rank: 3,
    previousRank: 3,
    name: "Customer Champions",
    avatar: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    score: 980,
    members: 10,
    winRate: 75,
    participation: 85,
    recentAchievements: ['Most Improved', 'Collaboration Kings'],
    stats: {
      eventsWon: 8,
      teamSpirit: 88,
      improvement: 20,
    }
  },
  {
    id: 4,
    rank: 4,
    previousRank: 5,
    name: "Tech Wizards",
    avatar: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    score: 920,
    members: 7,
    winRate: 70,
    participation: 82,
    recentAchievements: ['Tech Masters', 'Problem Solvers'],
    stats: {
      eventsWon: 7,
      teamSpirit: 85,
      improvement: 12,
    }
  },
  {
    id: 5,
    rank: 5,
    previousRank: 4,
    name: "Creative Minds",
    avatar: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    score: 850,
    members: 9,
    winRate: 68,
    participation: 80,
    recentAchievements: ['Creative Excellence', 'Team Players'],
    stats: {
      eventsWon: 6,
      teamSpirit: 90,
      improvement: 5,
    }
  }
];

export default function LeaderboardPage() {
  const [timeFrame, setTimeFrame] = useState('Weekly');
  const [category, setCategory] = useState('Overall');
  const [selectedTeam, setSelectedTeam] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center">
          <Trophy className="w-10 h-10 text-yellow-500 mr-3 animate-bounce" />
          Team Leaderboard
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Celebrate excellence and track your team's progress. Compete, collaborate, and climb the ranks!
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
        <div className="flex justify-center space-x-2">
          {timeFrames.map((frame) => (
            <button
              key={frame}
              onClick={() => setTimeFrame(frame)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                timeFrame === frame
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {frame}
            </button>
          ))}
        </div>
        <div className="flex justify-center space-x-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all transform hover:scale-105 ${
                category === cat
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Leaderboard List */}
        <div className="lg:w-2/3 space-y-4">
          {/* Top 3 Podium */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {/* Second Place */}
            <div className="col-start-1 pt-8">
              <div className="bg-gradient-to-b from-gray-100 to-gray-200 rounded-t-lg p-4 text-center transform hover:scale-105 transition-all">
                <Medal className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-600">2nd</div>
                <img
                  src={leaderboardData[1].avatar}
                  alt={leaderboardData[1].name}
                  className="w-16 h-16 mx-auto rounded-full border-4 border-gray-300 -mt-2"
                />
                <div className="mt-2 text-sm font-medium text-gray-600 truncate">
                  {leaderboardData[1].name}
                </div>
                <div className="text-gray-500 text-sm">{leaderboardData[1].score} pts</div>
              </div>
              <div className="h-20 bg-gray-300 rounded-b-lg"></div>
            </div>

            {/* First Place */}
            <div className="col-start-2">
              <div className="bg-gradient-to-b from-yellow-100 to-yellow-200 rounded-t-lg p-4 text-center transform hover:scale-105 transition-all">
                <Crown className="w-10 h-10 text-yellow-500 mx-auto mb-2 animate-bounce" />
                <div className="text-3xl font-bold text-yellow-600">1st</div>
                <img
                  src={leaderboardData[0].avatar}
                  alt={leaderboardData[0].name}
                  className="w-20 h-20 mx-auto rounded-full border-4 border-yellow-300 -mt-2"
                />
                <div className="mt-2 text-sm font-medium text-yellow-600 truncate">
                  {leaderboardData[0].name}
                </div>
                <div className="text-yellow-500 text-sm">{leaderboardData[0].score} pts</div>
              </div>
              <div className="h-24 bg-yellow-300 rounded-b-lg"></div>
            </div>

            {/* Third Place */}
            <div className="col-start-3 pt-12">
              <div className="bg-gradient-to-b from-orange-100 to-orange-200 rounded-t-lg p-4 text-center transform hover:scale-105 transition-all">
                <Medal className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-orange-600">3rd</div>
                <img
                  src={leaderboardData[2].avatar}
                  alt={leaderboardData[2].name}
                  className="w-16 h-16 mx-auto rounded-full border-4 border-orange-300 -mt-2"
                />
                <div className="mt-2 text-sm font-medium text-orange-600 truncate">
                  {leaderboardData[2].name}
                </div>
                <div className="text-orange-500 text-sm">{leaderboardData[2].score} pts</div>
              </div>
              <div className="h-16 bg-orange-300 rounded-b-lg"></div>
            </div>
          </div>

          {/* Rest of the Leaderboard */}
          <div className="space-y-4">
            {leaderboardData.map((team) => (
              <LeaderboardCard
                key={team.id}
                team={team}
                isSelected={selectedTeam === team.id}
                onClick={() => setSelectedTeam(team.id)}
              />
            ))}
          </div>
        </div>

        {/* Stats Panel */}
        <div className="lg:w-1/3">
          <div className="sticky top-24">
            {selectedTeam ? (
              <LeaderboardStats
                team={leaderboardData.find((t) => t.id === selectedTeam)!}
                timeFrame={timeFrame}
              />
            ) : (
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6 text-center">
                <Trophy className="h-12 w-12 mx-auto text-indigo-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Select a Team
                </h3>
                <p className="text-gray-600">
                  Click on a team to view detailed statistics and achievements
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}