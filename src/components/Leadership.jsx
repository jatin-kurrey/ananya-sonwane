import React from 'react';
import { Users, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function Leadership() {
  return (
    <section id="leadership" style={{ padding: '60px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="section-pill">
            <Users size={15} /> LEADERSHIP & COMMUNICATION
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.6rem',
              fontWeight: 700,
              color: 'var(--text-main)',
            }}
          >
            Leading with Responsibility & Empathy
          </h2>
        </div>

        <div className="glass-card" style={{ padding: '40px 48px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                lineHeight: 1.8,
                marginBottom: '16px',
              }}
            >
              I am confident in communicating and expressing my ideas. I can easily interact with different people and work well in a team. I take initiative, lead with responsibility and motivate others to do their best.
            </p>

            <div
              style={{
                background: 'var(--accent-pink-soft)',
                borderLeft: '4px solid var(--accent-pink-dark)',
                borderRadius: '0 16px 16px 0',
                padding: '20px 28px',
                margin: '24px 0',
                textAlign: 'left',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-script)',
                  fontSize: '1.9rem',
                  color: 'var(--accent-plum)',
                  lineHeight: 1.3,
                  fontWeight: 600,
                }}
              >
                "I believe a good leader listens, understands and brings people together to achieve a common goal." ♡
              </p>
            </div>

            {/* Values Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '16px',
                marginTop: '30px',
              }}
            >
              <div style={valueBoxStyle}>
                <HeartHandshake size={20} color="var(--accent-plum)" />
                <span style={valueTextStyle}>Empathic Listener</span>
              </div>
              <div style={valueBoxStyle}>
                <ShieldCheck size={20} color="var(--accent-plum)" />
                <span style={valueTextStyle}>Responsible Initiative</span>
              </div>
              <div style={valueBoxStyle}>
                <Users size={20} color="var(--accent-plum)" />
                <span style={valueTextStyle}>Team Motivator</span>
              </div>
              <div style={valueBoxStyle}>
                <Award size={20} color="var(--accent-plum)" />
                <span style={valueTextStyle}>Goal Driven</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const valueBoxStyle = {
  background: 'var(--bg-page)',
  border: '1px solid var(--border-color)',
  borderRadius: '14px',
  padding: '16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
};

const valueTextStyle = {
  fontFamily: 'var(--font-heading)',
  fontSize: '0.82rem',
  fontWeight: 600,
  color: 'var(--text-main)',
};
