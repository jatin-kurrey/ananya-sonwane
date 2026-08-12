import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profile from './components/Profile';
import InteractiveTimeline from './components/InteractiveTimeline';
import CreativeJourney from './components/CreativeJourney';
import Leadership from './components/Leadership';
import Achievements from './components/Achievements';
import PersonalQualities from './components/PersonalQualities';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isDark, setIsDark] = useState(false);
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
      {/* Header Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeModalOpen(true)}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Main Portfolio Content */}
      <main>
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <Profile />
        <InteractiveTimeline />
        <CreativeJourney />
        <Leadership />
        <Achievements />
        <PersonalQualities />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
