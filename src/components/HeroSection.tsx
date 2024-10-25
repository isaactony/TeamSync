import React from 'react';
import { Play, Users, Trophy, Target, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Virtual Team Building</span>{' '}
                <span className="block text-indigo-600 xl:inline">Made Fun</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Build stronger remote teams through engaging virtual experiences. Connect, collaborate, and celebrate together, no matter where you are.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 group">
                    <Play className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Get Started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10 group">
                    View Demo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-indigo-900 sm:h-72 md:h-96 lg:w-full lg:h-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600">
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-8 opacity-90">
                <Users className="w-16 h-16 text-white animate-float" />
                <Trophy className="w-16 h-16 text-white animate-float-delayed" />
                <Target className="w-16 h-16 text-white animate-float-more-delayed" />
                <Users className="w-16 h-16 text-white animate-float" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}