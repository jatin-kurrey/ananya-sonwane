import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Sparkles, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenResume, onOpenClubModal, isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '64px',
          background: scrolled
            ? isDark ? 'rgba(25, 18, 23, 0.95)' : 'rgba(51, 32, 44, 0.95)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          borderBottom: scrolled ? '1px solid rgba(229, 188, 198, 0.15)' : 'none',
        }}
      >
        {/* Brand */}
        <a
          href="#hero"
          style={{
            textDecoration: 'none',
            color: scrolled ? '#FAF5F7' : isDark ? '#FAF5F7' : 'var(--text-main)',
            fontFamily: 'var(--font-serif)',
            fontSize: '1.25rem',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            letterSpacing: '0.5px',
          }}
        >
          <span>Ananya Sonwane</span>
          <span style={{ fontFamily: 'var(--font-script)', fontSize: '1.5rem', color: '#E5BCC6' }}>
            ♡
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
          }}
          className="nav-links-desktop"
        >
          <a href="#profile" style={navLinkStyle(scrolled, isDark)}>Profile</a>
          <a href="#creative" style={navLinkStyle(scrolled, isDark)}>Creative Journey</a>
          <a href="#leadership" style={navLinkStyle(scrolled, isDark)}>Leadership</a>
          <a href="#achievements" style={navLinkStyle(scrolled, isDark)}>Achievements</a>
          <a href="#qualities" style={navLinkStyle(scrolled, isDark)}>Personal Qualities</a>
        </nav>

        {/* Right Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={toggleTheme}
            title="Toggle Theme"
            style={{
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: scrolled ? '#FFF' : isDark ? '#FFF' : 'var(--text-main)',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isDark ? <Sun size={16} color="#FFD166" /> : <Moon size={16} />}
          </button>

          <button
            onClick={onOpenResume}
            className="btn-primary"
            style={{
              fontSize: '0.78rem',
              padding: '6px 14px',
              borderRadius: '18px',
            }}
          >
            <Download size={14} /> Resume PDF
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: scrolled ? '#FFF' : isDark ? '#FFF' : 'var(--text-main)',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            background: isDark ? '#241921' : '#33202C',
            padding: '20px',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
          }}
        >
          <a
            href="#profile"
            onClick={() => setMobileMenuOpen(false)}
            style={mobileNavLinkStyle}
          >
            Profile
          </a>
          <a
            href="#creative"
            onClick={() => setMobileMenuOpen(false)}
            style={mobileNavLinkStyle}
          >
            Creative Journey
          </a>
          <a
            href="#leadership"
            onClick={() => setMobileMenuOpen(false)}
            style={mobileNavLinkStyle}
          >
            Leadership
          </a>
          <a
            href="#achievements"
            onClick={() => setMobileMenuOpen(false)}
            style={mobileNavLinkStyle}
          >
            Achievements
          </a>
          <a
            href="#qualities"
            onClick={() => setMobileMenuOpen(false)}
            style={mobileNavLinkStyle}
          >
            Personal Qualities
          </a>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenClubModal();
            }}
            className="btn-secondary"
            style={{ width: '100%', justifyContent: 'center', marginTop: '6px' }}
          >
            <Sparkles size={16} /> Join Club
          </button>
        </div>
      )}
    </>
  );
}

function navLinkStyle(scrolled, isDark) {
  return {
    textDecoration: 'none',
    color: scrolled ? 'rgba(255, 255, 255, 0.85)' : isDark ? 'rgba(255, 255, 255, 0.85)' : 'var(--text-muted)',
    fontFamily: 'var(--font-heading)',
    fontSize: '0.8rem',
    fontWeight: 600,
    letterSpacing: '0.5px',
    transition: 'color 0.2s ease',
  };
}

const mobileNavLinkStyle = {
  textDecoration: 'none',
  color: '#FAF5F7',
  fontFamily: 'var(--font-heading)',
  fontSize: '0.92rem',
  fontWeight: 600,
  padding: '6px 0',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
};
