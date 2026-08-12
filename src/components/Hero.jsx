import React from 'react';
import { Palette, Download, Mail } from 'lucide-react';

export default function Hero({ onOpenResume }) {
  return (
    <section
      id="hero"
      style={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '100px',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Decorative Blurs */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '380px',
          height: '380px',
          background: 'radial-gradient(circle, var(--accent-pink-soft) 0%, transparent 70%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '420px',
          height: '420px',
          background: 'radial-gradient(circle, rgba(229, 188, 198, 0.25) 0%, transparent 70%)',
          filter: 'blur(50px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '920px',
          width: '100%',
          margin: '0 auto',
          textAlign: 'center',
          padding: '0 20px',
          position: 'relative',
          zIndex: 2,
        }}
        className="animate-fade-in-up"
      >
        {/* Intro Script Badge */}
        <div
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: '2.2rem',
            color: 'var(--accent-plum)',
            marginBottom: '4px',
          }}
        >
          Welcome to my creative space ♡
        </div>

        {/* Main Name Heading */}
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(3.2rem, 6.5vw, 5.2rem)',
            fontWeight: 700,
            color: 'var(--text-main)',
            lineHeight: 1.05,
            letterSpacing: '-1px',
            marginBottom: '16px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '14px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <span>Ananya Sonwane</span>
        </h1>

        {/* Subtitle Tagline */}
        <div
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(0.75rem, 1.3vw, 0.95rem)',
            fontWeight: 700,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <span>ART ENTHUSIAST</span>
          <span style={{ color: 'var(--accent-pink-dark)' }}>•</span>
          <span>POET</span>
          <span style={{ color: 'var(--accent-pink-dark)' }}>•</span>
          <span>COMMUNICATOR</span>
          <span style={{ color: 'var(--accent-pink-dark)' }}>•</span>
          <span>LEADER</span>
        </div>

        {/* Featured Glass Quote Card */}
        <div
          className="glass-card animate-float"
          style={{
            maxWidth: '650px',
            margin: '0 auto 36px auto',
            padding: '28px 36px',
            borderLeft: '4px solid var(--accent-pink-dark)',
            position: 'relative',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-script)',
              fontSize: '2.3rem',
              color: 'var(--text-main)',
              lineHeight: 1.25,
              fontWeight: 600,
            }}
          >
            "Creativity is not just what I do, it's who I am." ♡
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
          }}
        >
          <button onClick={onOpenResume} className="btn-primary" style={{ padding: '12px 28px', fontSize: '0.9rem' }}>
            <Download size={18} /> Download Resume PDF
          </button>

          <a href="#creative" className="btn-secondary" style={{ padding: '12px 28px', fontSize: '0.9rem' }}>
            <Palette size={18} /> Explore Creative Journey
          </a>

          <a href="#contact" className="btn-secondary" style={{ padding: '12px 28px', fontSize: '0.9rem' }}>
            <Mail size={18} /> Contact & Collaborate
          </a>
        </div>
      </div>
    </section>
  );
}
