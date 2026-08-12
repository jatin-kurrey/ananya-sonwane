import React from 'react';
import { Trophy, Star, Medal, Award, Calendar, CheckCircle2 } from 'lucide-react';

export default function Achievements() {
  const list = [
    {
      title: 'Cascade – Winner (7th Grade)',
      desc: 'Won the Cascade competition in 7th grade.',
      tag: '7th Grade',
      icon: <Trophy size={20} color="#D4AF37" />,
      badgeColor: 'rgba(212, 175, 55, 0.15)',
    },
    {
      title: 'Cascade – 4 Consecutive Years',
      desc: 'Going to Cascade consecutively since 4 years.',
      tag: '4 Years Active',
      icon: <Star size={20} color="#C28295" />,
      badgeColor: 'rgba(194, 130, 149, 0.15)',
    },
    {
      title: 'Decathlon Art Competition – Winner (9th Grade)',
      desc: 'Won a Decathlon art competition in 9th grade.',
      tag: '9th Grade',
      icon: <Medal size={20} color="#D4AF37" />,
      badgeColor: 'rgba(212, 175, 55, 0.15)',
    },
    {
      title: 'Inter School Art Competition – Winner (10th Grade)',
      desc: 'Won an inter school art competition in 10th grade.',
      tag: '10th Grade',
      icon: <Award size={20} color="#D4AF37" />,
      badgeColor: 'rgba(212, 175, 55, 0.15)',
    },
    {
      title: 'Event Participation',
      desc: 'Participated in various events and activities.',
      tag: 'Ongoing',
      icon: <CheckCircle2 size={20} color="#4A2B3D" />,
      badgeColor: 'rgba(74, 43, 61, 0.15)',
    },
  ];

  return (
    <section id="achievements" style={{ padding: '60px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="section-pill">
            <Trophy size={15} /> ACHIEVEMENTS
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.6rem',
              fontWeight: 700,
              color: 'var(--text-main)',
            }}
          >
            Competitions & Recognition
          </h2>
        </div>

        {/* Timeline / Card Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {list.map((item, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '24px 28px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: item.badgeColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>

              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '8px',
                    marginBottom: '4px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
