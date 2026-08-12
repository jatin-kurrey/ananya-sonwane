import React, { useState } from 'react';
import { X, Sparkles, Send, Heart, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ClubJoinModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#E5BCC6', '#4E2A3F', '#C28295', '#FFD166'],
    });
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(25, 18, 23, 0.75)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        padding: '20px',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '650px',
          width: '100%',
          padding: '40px',
          position: 'relative',
          background: 'var(--bg-card)',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            color: 'var(--text-muted)',
            cursor: 'pointer',
            padding: '8px',
          }}
        >
          <X size={20} />
        </button>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div className="section-pill">
            <Sparkles size={15} /> WHY I WANT TO JOIN THE CLUB
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.2rem',
              fontWeight: 700,
              color: 'var(--text-main)',
            }}
          >
            Creative Community Vision
          </h2>
        </div>

        {/* Vision Statement */}
        <div
          style={{
            background: 'var(--accent-pink-soft)',
            borderLeft: '4px solid var(--accent-pink-dark)',
            borderRadius: '0 16px 16px 0',
            padding: '20px 24px',
            marginBottom: '28px',
          }}
        >
          <p
            style={{
              fontSize: '0.98rem',
              color: 'var(--text-main)',
              lineHeight: 1.7,
            }}
          >
            "I want to join the club because it will give me the opportunity to express my creativity, learn from others and contribute my skills to a creative community. I am excited to participate in events, use my talents and grow as a better individual and leader."
          </p>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <CheckCircle2 size={48} color="#C28295" style={{ marginBottom: '12px' }} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--text-main)' }}>
              Thank You!
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginTop: '6px' }}>
              Your message has been received with passion and creativity. ♡
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '16px' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--text-muted)',
                  marginBottom: '6px',
                }}
              >
                Send a message to Ananya
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your thoughts, club event details, or message..."
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-page)',
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9rem',
                  outline: 'none',
                }}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              <Send size={16} /> Send Message & Connect
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
