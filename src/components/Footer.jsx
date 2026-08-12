import React from 'react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        padding: '50px 0 30px 0',
        borderTop: '1px solid var(--border-color)',
        textAlign: 'center',
        background: 'var(--bg-card)',
        marginTop: '60px',
      }}
    >
      <div className="container">
        <p
          style={{
            fontFamily: 'var(--font-script)',
            fontSize: '2.4rem',
            color: 'var(--accent-plum)',
            marginBottom: '16px',
            lineHeight: 1.2,
          }}
        >
          Passion. Creativity. Expression. Leadership. ♡
        </p>

        <p
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '0.8rem',
            color: 'var(--text-light)',
            letterSpacing: '1px',
          }}
        >
          © {new Date().getFullYear()} Ananya Sonwane • Crafted with passion & creativity
        </p>
      </div>
    </footer>
  );
}
