import React, { useState } from 'react';
import { Trophy, Star, Sparkles, Medal, Palette, Feather, Music, Users, Award, Calendar } from 'lucide-react';

export default function InteractiveTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const timelineData = [
    {
      year: '8 Years Ago',
      title: 'Beginning of the Artistic Journey',
      category: 'Art & Passion',
      icon: <Palette size={22} color="var(--accent-plum)" />,
      badge: '8+ Years Art',
      desc: 'Discovered a keen interest in art and music. Started exploring different mediums, expressing ideas, thoughts, and deep emotions through creative art.',
      highlights: ['Multiple Mediums', 'Daily Practice', 'Creative Foundation'],
    },
    {
      year: '7th Grade',
      title: 'Cascade Competition Winner & 4-Year Streak Begins',
      category: 'Championship Victory',
      icon: <Trophy size={22} color="#D4AF37" />,
      badge: 'Winner (7th Grade)',
      desc: 'Won the Cascade competition in 7th grade, marking the start of 4 consecutive years participating and excelling in Cascade events.',
      highlights: ['1st Place Winner', 'Cascade Entry', '4-Year Ongoing Streak'],
    },
    {
      year: '8th Grade',
      title: 'Poetry Expression & Music Appreciation',
      category: 'Poetry & Music',
      icon: <Feather size={22} color="var(--accent-plum)" />,
      badge: 'Poetry & Music',
      desc: 'Expanded creative expression into writing and performing poetry. Music and poetry became powerful ways to connect hearts and communicate perspectives.',
      highlights: ['Poetry Writing', 'Musical Interest', 'Spoken Word Expression'],
    },
    {
      year: '9th Grade',
      title: 'Decathlon Art Competition Winner',
      category: 'Art Championship',
      icon: <Medal size={22} color="#D4AF37" />,
      badge: 'Winner (9th Grade)',
      desc: 'Achieved 1st place in the prestigious Decathlon Art Competition, showcasing advanced artistic technique and creative composition.',
      highlights: ['Decathlon Winner', 'Artistic Mastery', 'Competitive Excellence'],
    },
    {
      year: '10th Grade',
      title: 'Inter-School Art Champion & Leadership',
      category: 'Inter-School Victory',
      icon: <Award size={22} color="#D4AF37" />,
      badge: 'Winner (10th Grade)',
      desc: 'Won the Inter-School Art Competition in 10th grade while actively participating in various events and leading teams with responsibility and communication.',
      highlights: ['Inter-School Champion', 'Team Communication', 'Event Participation'],
    },
    {
      year: 'Present & Beyond',
      title: 'Communicator, Leader & Creative Community Member',
      category: 'Leadership & Vision',
      icon: <Users size={22} color="var(--accent-plum)" />,
      badge: 'Leader & Communicator',
      desc: 'A confident communicator, good team player, and natural leader who brings people together, listens, motivates others, and continuously grows.',
      highlights: ['Team Leadership', 'Confident Communicator', 'Positive Motivator'],
    },
  ];

  return (
    <section id="journey-timeline" style={{ padding: '60px 0' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="section-pill">
            <Sparkles size={15} /> TIMELINE & MILESTONES
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.6rem',
              fontWeight: 700,
              color: 'var(--text-main)',
            }}
          >
            My Journey Through Art, Poetry & Achievements
          </h2>
        </div>

        {/* Stats Counter Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            marginBottom: '44px',
          }}
        >
          <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 700, color: 'var(--accent-plum)' }}>8+</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Years Doing Art</div>
          </div>
          <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 700, color: 'var(--accent-plum)' }}>4</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Consecutive Cascade Years</div>
          </div>
          <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 700, color: 'var(--accent-plum)' }}>3+</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Art Championship Titles</div>
          </div>
          <div className="glass-card" style={{ padding: '20px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2.4rem', fontWeight: 700, color: 'var(--accent-plum)' }}>100%</div>
            <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)' }}>Leadership & Passion</div>
          </div>
        </div>

        {/* Interactive Timeline Stepper */}
        <div style={{ position: 'relative' }}>
          
          {/* Vertical Connecting Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '50%',
              width: '3px',
              background: 'linear-gradient(180deg, var(--accent-pink), var(--accent-plum), var(--accent-pink))',
              transform: 'translateX(-50%)',
              borderRadius: '3px',
              zIndex: 1,
            }}
            className="timeline-line-desktop"
          />

          {/* Timeline Nodes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', position: 'relative', zIndex: 2 }}>
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: isEven ? 'flex-start' : 'flex-end',
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                  className="timeline-row"
                >
                  {/* Timeline Card */}
                  <div
                    className="glass-card"
                    style={{
                      width: '46%',
                      padding: '24px 28px',
                      border: isSelected ? '2px solid var(--accent-pink-dark)' : '1px solid var(--border-color)',
                      transform: isSelected ? 'scale(1.02)' : 'scale(1)',
                      boxShadow: isSelected ? 'var(--shadow-hover)' : 'var(--shadow-card)',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          fontFamily: 'var(--font-heading)',
                          fontWeight: 700,
                          color: 'var(--accent-plum)',
                          background: 'var(--accent-pink-soft)',
                          padding: '3px 12px',
                          borderRadius: '12px',
                        }}
                      >
                        {item.year}
                      </span>

                      <div
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '10px',
                          background: 'var(--bg-page)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {item.icon}
                      </div>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        color: 'var(--text-main)',
                        marginBottom: '6px',
                      }}
                    >
                      {item.title}
                    </h3>

                    <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '14px' }}>
                      {item.desc}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {item.highlights.map((hl, hIdx) => (
                        <span
                          key={hIdx}
                          style={{
                            fontSize: '0.74rem',
                            color: 'var(--text-main)',
                            background: 'var(--bg-page)',
                            border: '1px solid var(--border-color)',
                            padding: '2px 10px',
                            borderRadius: '10px',
                          }}
                        >
                          {hl}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Center Node Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: isSelected ? 'var(--accent-plum)' : 'var(--accent-pink)',
                      border: '4px solid var(--bg-page)',
                      boxShadow: '0 0 10px rgba(0,0,0,0.15)',
                      zIndex: 3,
                      transition: 'all 0.3s ease',
                    }}
                    className="timeline-center-node"
                  />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
