import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import EventsPage from './components/events/EventsPage';
import TeamsPage from './components/teams/TeamsPage';
import LeaderboardPage from './components/leaderboard/LeaderboardPage';
import { SettingsProvider } from './context/SettingsContext';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <SettingsProvider>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
        <main className="flex-grow">
          <div className="pt-16">
            {currentPage === 'home' && (
              <>
                <HeroSection />
                <FeatureSection />
                <PricingSection />
              </>
            )}
            {currentPage === 'events' && <EventsPage />}
            {currentPage === 'teams' && <TeamsPage />}
            {currentPage === 'leaderboard' && <LeaderboardPage />}
          </div>
        </main>
        <Footer />
      </div>
    </SettingsProvider>
  );
}

export default App;