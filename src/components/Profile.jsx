import React from 'react';
import { UserCheck, Heart, Sparkles, Compass } from 'lucide-react';

export default function Profile() {
  return (
    <section id="profile" style={{ padding: '60px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div className="section-pill">
            <UserCheck size={15} /> PROFILE
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.6rem',
              fontWeight: 700,
              color: 'var(--text-main)',
            }}
          >
            About Me & Passion
          </h2>
        </div>

        {/* Profile Glass Card */}
        <div className="glass-card" style={{ padding: '40px 48px', position: 'relative' }}>
          <p
            style={{
              fontSize: '1.08rem',
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              textAlign: 'center',
              maxWidth: '820px',
              margin: '0 auto',
            }}
          >
            Creative, passionate and expressive individual with a strong interest in art, music and poetry. I love participating in events, exploring new ideas and expressing myself through creativity. I am a confident communicator, a good team player and a natural leader who enjoys taking initiative and inspiring others.
          </p>

          {/* 3 Pillars Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
              marginTop: '36px',
            }}
          >
            <div
              style={{
                background: 'var(--accent-pink-soft)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-plum)',
                  marginBottom: '12px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <Sparkles size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--accent-plum)', marginBottom: '6px' }}>
                Expressive Creator
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                8+ years of art, poetry performance, and multi-medium exploration.
              </p>
            </div>

            <div
              style={{
                background: 'var(--accent-pink-soft)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-plum)',
                  marginBottom: '12px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <Compass size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--accent-plum)', marginBottom: '6px' }}>
                Natural Leader
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                Inspiring teams, bringing people together, and taking proactive initiative.
              </p>
            </div>

            <div
              style={{
                background: 'var(--accent-pink-soft)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-plum)',
                  marginBottom: '12px',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <Heart size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, color: 'var(--accent-plum)', marginBottom: '6px' }}>
                Community & Culture
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                Active participation in inter-school competitions and cultural festivals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
