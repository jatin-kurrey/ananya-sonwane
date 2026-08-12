import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, FileText, Sparkles, Heart } from 'lucide-react';

export default function Navbar({ onOpenResume, onOpenClubModal, isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '68px',
        background: scrolled
          ? isDark ? 'rgba(25, 18, 23, 0.94)' : 'rgba(51, 32, 44, 0.94)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 32px',
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
          fontSize: '1.4rem',
          fontWeight: 700,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          letterSpacing: '0.5px',
        }}
      >
        <span>Ananya Sonwane</span>
        <span style={{ fontFamily: 'var(--font-script)', fontSize: '1.7rem', color: '#E5BCC6' }}>
          ♡
        </span>
      </a>

      {/* Nav Links */}
      <nav
        style={{
          display: 'flex',
          gap: '24px',
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
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <button
          onClick={toggleTheme}
          title="Toggle Theme"
          style={{
            background: 'rgba(255, 255, 255, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: scrolled ? '#FFF' : isDark ? '#FFF' : 'var(--text-main)',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
        >
          {isDark ? <Sun size={18} color="#FFD166" /> : <Moon size={18} />}
        </button>

        <button
          onClick={onOpenResume}
          className="btn-primary"
          style={{
            fontSize: '0.8rem',
            padding: '8px 18px',
            borderRadius: '20px',
          }}
        >
          <Download size={15} /> Download Resume PDF
        </button>

        <button
          onClick={onOpenClubModal}
          className="btn-secondary"
          style={{
            fontSize: '0.8rem',
            padding: '8px 16px',
            borderRadius: '20px',
          }}
        >
          <Sparkles size={15} /> Join Club
        </button>
      </div>
    </header>
  );
}

function navLinkStyle(scrolled, isDark) {
  return {
    textDecoration: 'none',
    color: scrolled ? 'rgba(255, 255, 255, 0.85)' : isDark ? 'rgba(255, 255, 255, 0.85)' : 'var(--text-muted)',
    fontFamily: 'var(--font-heading)',
    fontSize: '0.82rem',
    fontWeight: 600,
    letterSpacing: '0.5px',
    transition: 'color 0.2s ease',
  };
}
