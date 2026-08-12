import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import CreativeJourney from './components/CreativeJourney';
import Leadership from './components/Leadership';
import Achievements from './components/Achievements';
import PersonalQualities from './components/PersonalQualities';
import Footer from './components/Footer';
import ClubJoinModal from './components/ClubJoinModal';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isClubModalOpen, setIsClubModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.body.setAttribute('data-theme', 'dark');
      } else {
        document.body.removeAttribute('data-theme');
      }
      return next;
    });
  };

  return (
    <div className="app">
      {/* Interactive Website Header Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenClubModal={() => setIsClubModalOpen(true)}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Main Interactive Portfolio Sections */}
      <main>
        <Hero
          onOpenClubModal={() => setIsClubModalOpen(true)}
          onOpenResume={() => setIsResumeModalOpen(true)}
        />
        <Profile />
        <CreativeJourney />
        <Leadership />
        <Achievements />
        <PersonalQualities />
      </main>

      {/* Interactive Footer */}
      <Footer />

      {/* Modals */}
      <ClubJoinModal
        isOpen={isClubModalOpen}
        onClose={() => setIsClubModalOpen(false)}
      />
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
