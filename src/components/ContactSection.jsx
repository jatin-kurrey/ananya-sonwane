import React, { useState } from 'react';
import { Mail, Send, Sparkles, MapPin, Heart, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

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
    <section id="contact" style={{ padding: '60px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div className="section-pill">
            <Mail size={15} /> GET IN TOUCH
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '2.6rem',
              fontWeight: 700,
              color: 'var(--text-main)',
            }}
          >
            Let's Connect & Collaborate
          </h2>
        </div>

        <div className="glass-card" style={{ padding: '40px 48px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '36px',
            }}
          >
            {/* Contact Info Left */}
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--accent-plum)',
                  marginBottom: '12px',
                }}
              >
                Create, Share & Inspire ♡
              </h3>
              <p
                style={{
                  fontSize: '0.94rem',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}
              >
                Whether you want to discuss art collaborations, poetry performances, cultural events, or creative initiatives — feel free to send me a message!
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'var(--accent-pink-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-plum)',
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>EMAIL</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 500 }}>ananya.sonwane@example.com</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '12px',
                      background: 'var(--accent-pink-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-plum)',
                    }}
                  >
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>CREATIVE FOCUS</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 500 }}>Art, Poetry, Music & Leadership</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Form Right */}
            <div>
              {submitted ? (
                <div
                  style={{
                    background: 'var(--accent-pink-soft)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '16px',
                    padding: '30px',
                    textAlign: 'center',
                  }}
                >
                  <CheckCircle2 size={42} color="var(--accent-pink-dark)" style={{ marginBottom: '10px' }} />
                  <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--text-main)' }}>
                    Message Sent!
                  </h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '6px' }}>
                    Thank you for reaching out. Ananya will get back to you soon! ♡
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={labelStyle}>Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>Message</label>
                    <textarea
                      required
                      rows={3}
                      placeholder="Hi Ananya, I loved your portfolio..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                    <Send size={16} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-heading)',
  fontSize: '0.78rem',
  fontWeight: 600,
  color: 'var(--text-muted)',
  marginBottom: '6px',
};

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '12px',
  border: '1px solid var(--border-color)',
  background: 'var(--bg-page)',
  color: 'var(--text-main)',
  fontFamily: 'var(--font-sans)',
  fontSize: '0.88rem',
  outline: 'none',
};
