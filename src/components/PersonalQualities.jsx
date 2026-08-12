import React from 'react';
import { Sparkles, Check } from 'lucide-react';

export default function PersonalQualities() {
  const qualities = [
    { name: 'Creative', icon: '🎨' },
    { name: 'Confident', icon: '✨' },
    { name: 'Expressive', icon: '💬' },
    { name: 'Dedicated', icon: '🎯' },
    { name: 'Responsible', icon: '🛡️' },
    { name: 'Positive', icon: '☀️' },
    { name: 'Team Player', icon: '🤝' },
    { name: 'Leadership-Oriented', icon: '👑' },
  ];

  return (
    <section id="qualities" style={{ padding: '60px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="section-pill">
            <Sparkles size={15} /> PERSONAL QUALITIES
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.6rem',
              fontWeight: 700,
              color: 'var(--text-main)',
            }}
          >
            Core Strengths & Character
          </h2>
        </div>

        <div className="glass-card" style={{ padding: '40px 48px', textAlign: 'center' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px',
              justifyContent: 'center',
              maxWidth: '750px',
              margin: '0 auto',
            }}
          >
            {qualities.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-page)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-main)',
                  padding: '10px 22px',
                  borderRadius: '30px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.25s ease',
                  cursor: 'default',
                  boxShadow: 'var(--shadow-card)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-pink-soft)';
                  e.currentTarget.style.borderColor = 'var(--accent-pink-dark)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-page)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
