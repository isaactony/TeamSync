import React from 'react';
import { Video, Users, Trophy, Target, Calendar, MessageSquare } from 'lucide-react';

const features = [
  {
    name: 'Virtual Team Events',
    description: 'Engage in real-time interactive events designed to bring your team closer together.',
    icon: Video,
  },
  {
    name: 'Team Building Games',
    description: 'Fun and challenging games that promote collaboration and team spirit.',
    icon: Users,
  },
  {
    name: 'Achievement System',
    description: 'Track progress and earn rewards for team participation and success.',
    icon: Trophy,
  },
  {
    name: 'Goal Setting',
    description: 'Set and achieve team goals through collaborative challenges.',
    icon: Target,
  },
  {
    name: 'Event Scheduling',
    description: 'Easy scheduling and calendar integration for team events.',
    icon: Calendar,
  },
  {
    name: 'Team Chat',
    description: 'Built-in communication tools for seamless team interaction.',
    icon: MessageSquare,
  },
];

export default function FeatureSection() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need for virtual team building
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Build stronger connections with your remote team through our comprehensive suite of tools and activities.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                <p className="mt-2 ml-16 text-base text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}