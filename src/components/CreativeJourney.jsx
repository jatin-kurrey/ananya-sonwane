import React, { useState } from 'react';
import { Palette, Feather, Music, Sparkles, BookOpen } from 'lucide-react';

export default function CreativeJourney() {
  const [activeTab, setActiveTab] = useState('all');

  const items = [
    {
      id: 'art',
      category: 'art',
      icon: <Palette size={24} />,
      title: 'Art & Medium Exploration',
      scriptTitle: 'Art',
      period: '8+ Years Experience',
      desc: 'I have been doing art since 8 years. Art is my way of expressing ideas, thoughts and emotions. I enjoy creating with different mediums and love participating in art based events and competitions.',
      highlights: ['Multiple Mediums (Watercolor, Sketching, Canvas)', 'Inter-School Competitions', '8 Years Practice'],
    },
    {
      id: 'poetry',
      category: 'poetry',
      icon: <Feather size={24} />,
      title: 'Poetry Writing & Performance',
      scriptTitle: 'Poetry',
      period: 'Expression & Performance',
      desc: 'I enjoy writing and performing poetry. Words help me express my feelings, thoughts and perspectives. I believe poetry is a beautiful form of communication that connects hearts.',
      highlights: ['Spoken Word & Writing', 'Heart-to-Heart Communication', 'Emotional Resonance'],
    },
    {
      id: 'music',
      category: 'music',
      icon: <Music size={24} />,
      title: 'Music & Cultural Activities',
      scriptTitle: 'Music & Cultural Activities',
      period: 'Cultural Involvement',
      desc: 'I have a keen interest in music and always enjoy being a part of cultural activities. Participating in events has helped me learn, grow and explore my creative side.',
      highlights: ['Cultural Stage Events', 'Musical Appreciation', 'Creative Collaboration'],
    },
  ];

  const filteredItems = activeTab === 'all' ? items : items.filter((item) => item.category === activeTab);

  return (
    <section id="creative" style={{ padding: '60px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="section-pill">
            <Sparkles size={15} /> CREATIVE JOURNEY
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.6rem',
              fontWeight: 700,
              color: 'var(--text-main)',
            }}
          >
            Artistic Expressions & Mediums
          </h2>
        </div>

        {/* Tab Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px',
            flexWrap: 'wrap',
          }}
        >
          <button
            onClick={() => setActiveTab('all')}
            style={tabButtonStyle(activeTab === 'all')}
          >
            All Creative Fields
          </button>
          <button
            onClick={() => setActiveTab('art')}
            style={tabButtonStyle(activeTab === 'art')}
          >
            🎨 Art
          </button>
          <button
            onClick={() => setActiveTab('poetry')}
            style={tabButtonStyle(activeTab === 'poetry')}
          >
            🪶 Poetry
          </button>
          <button
            onClick={() => setActiveTab('music')}
            style={tabButtonStyle(activeTab === 'music')}
          >
            🎵 Music & Culture
          </button>
        </div>

        {/* Items Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="glass-card"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      background: 'var(--accent-pink-soft)',
                      color: 'var(--accent-plum)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.76rem',
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      color: 'var(--accent-pink-dark)',
                      background: 'rgba(229, 188, 198, 0.2)',
                      padding: '4px 12px',
                      borderRadius: '15px',
                    }}
                  >
                    {item.period}
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-script)',
                    fontSize: '2.1rem',
                    color: 'var(--accent-plum)',
                    lineHeight: 1.1,
                    marginBottom: '8px',
                    fontWeight: 700,
                  }}
                >
                  {item.scriptTitle}
                </div>

                <p
                  style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.65,
                    marginBottom: '20px',
                  }}
                >
                  {item.desc}
                </p>
              </div>

              <div>
                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '16px' }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {item.highlights.map((hl, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.76rem',
                          color: 'var(--text-main)',
                          background: 'var(--bg-page)',
                          border: '1px solid var(--border-color)',
                          padding: '3px 10px',
                          borderRadius: '12px',
                        }}
                      >
                        {hl}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function tabButtonStyle(isActive) {
  return {
    background: isActive ? 'var(--accent-plum)' : 'var(--bg-card)',
    color: isActive ? '#FFF' : 'var(--text-muted)',
    border: '1px solid var(--border-color)',
    padding: '8px 20px',
    borderRadius: '20px',
    fontFamily: 'var(--font-heading)',
    fontSize: '0.82rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    boxShadow: isActive ? '0 4px 15px rgba(78, 42, 63, 0.2)' : 'none',
  };
}
