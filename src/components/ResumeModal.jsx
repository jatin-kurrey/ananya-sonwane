import React, { useRef } from 'react';
import { X, Printer, Download } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const sheetRef = useRef(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    const content = sheetRef.current ? sheetRef.current.outerHTML : '';
    
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Ananya Sonwane — Resume</title>
        <link href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Caveat:wght@600;700&family=Cormorant+Garamond:wght@600;700&family=Montserrat:wght@500;600;700&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { background: white; padding: 0; margin: 0; width: 210mm; height: 297mm; overflow: hidden; font-family: 'Nunito', sans-serif; }
          .a4-sheet { width: 210mm !important; height: 297mm !important; padding: 12mm 15mm !important; box-shadow: none !important; border-radius: 0 !important; background-color: #FAF6F5 !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          @page { size: A4 portrait; margin: 0; }
        </style>
      </head>
      <body>
        ${content}
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(25, 18, 23, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        padding: '15px',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          maxWidth: '920px',
          width: '100%',
          maxHeight: '94vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          background: 'var(--bg-card)',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Toolbar */}
        <div
          style={{
            padding: '14px 24px',
            borderBottom: '1px solid var(--border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--bg-card)',
          }}
        >
          <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-main)' }}>
            📄 Single-Page A4 Resume Sheet (Exact Design)
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handlePrint}
              className="btn-primary"
              style={{ fontSize: '0.82rem', padding: '8px 20px' }}
            >
              <Printer size={16} /> Save as PDF / Print
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                padding: '6px',
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body: Scrollable Sheet Preview */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '20px', background: '#2D1C26', display: 'flex', justifyContent: 'center' }}>
          
          {/* Exact Single Page A4 Resume Sheet */}
          <div
            ref={sheetRef}
            className="a4-sheet"
            style={{
              width: '210mm',
              height: '297mm',
              backgroundColor: '#FAF6F5',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              borderRadius: '4px',
              overflow: 'hidden',
              padding: '12mm 15mm',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              color: '#3D2633',
              fontFamily: "'Nunito', sans-serif",
            }}
          >
            {/* Background Watercolors */}
            <div style={wcStyle('-40px', '-40px', '280px', '260px', 'rgba(224, 190, 200, 0.45)', '-15deg')} />
            <div style={wcStyle('-30px', 'auto', '260px', '240px', 'rgba(230, 200, 208, 0.4)', '0deg', '-30px')} />
            <div style={wcStyle('auto', 'auto', '300px', '280px', 'rgba(224, 190, 200, 0.45)', '0deg', '-40px', '-50px')} />
            <div style={wcStyle('auto', '-30px', '260px', '220px', 'rgba(228, 195, 205, 0.35)', '0deg', 'auto', '-40px')} />

            {/* Botanical SVGs */}
            <svg style={{ position: 'absolute', top: '20px', left: '15px', width: '95px', height: '140px', pointerEvents: 'none', stroke: '#523444', strokeWidth: 1.2, fill: 'none', opacity: 0.85, zIndex: 2 }} viewBox="0 0 100 150">
              <path d="M 10,140 Q 30,80 70,10" />
              <path d="M 25,100 Q 10,85 20,75 Q 35,90 25,100 Z" fill="rgba(82, 52, 68, 0.08)" />
              <path d="M 38,72 Q 55,60 48,50 Q 32,60 38,72 Z" fill="rgba(82, 52, 68, 0.08)" />
            </svg>

            {/* Sheet Content */}
            <div style={{ position: 'relative', zIndex: 5, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

              {/* Header */}
              <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                  <h1 style={{ fontFamily: "'Alex Brush', 'Caveat', cursive", fontSize: '3.8rem', color: '#3D2633', fontWeight: 400, lineHeight: 0.95 }}>
                    Ananya Sonwane
                  </h1>
                  <span style={{ fontFamily: "'Caveat', cursive", fontSize: '1.8rem', color: '#B57F90', transform: 'translateY(4px)' }}>♡</span>
                </div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontWeight: 600, color: '#5B4452', letterSpacing: '3.5px', textTransform: 'uppercase', marginTop: '6px' }}>
                  ART ENTHUSIAST &nbsp;•&nbsp; POET &nbsp;•&nbsp; COMMUNICATOR &nbsp;•&nbsp; LEADER
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginTop: '10px' }}>
                  <div style={{ height: '1px', width: '220px', background: 'linear-gradient(90deg, transparent, #E2D2DC, transparent)' }} />
                  <span style={{ color: '#4A2B3D', fontSize: '0.9rem', opacity: 0.75 }}>☘</span>
                  <div style={{ height: '1px', width: '220px', background: 'linear-gradient(90deg, transparent, #E2D2DC, transparent)' }} />
                </div>
              </div>

              {/* 2-Column Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: '28px', position: 'relative', flex: 1 }}>
                
                <div style={{ position: 'absolute', top: 0, bottom: '20px', left: '51.5%', width: '1px', backgroundColor: '#E2D2DC' }} />

                {/* LEFT COLUMN */}
                <div style={{ paddingRight: '8px' }}>
                  <div style={{ marginBottom: '14px' }}>
                    <SectionBadge title="PROFILE" />
                    <p style={bodyTextStyle}>
                      Creative, passionate and expressive individual with a strong interest in art, music and poetry. I love participating in events, exploring new ideas and expressing myself through creativity. I am a confident communicator, a good team player and a natural leader who enjoys taking initiative and inspiring others.
                    </p>
                  </div>

                  <div style={{ marginBottom: '14px' }}>
                    <SectionBadge title="CREATIVE JOURNEY" />

                    <div style={{ marginBottom: '10px' }}>
                      <div style={scriptTitleStyle}>Art</div>
                      <p style={bodyTextStyle}>
                        I have been doing art since 8 years. Art is my way of expressing ideas, thoughts and emotions. I enjoy creating with different mediums and love participating in art based events and competitions.
                      </p>
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                      <div style={scriptTitleStyle}>Poetry</div>
                      <p style={bodyTextStyle}>
                        I enjoy writing and performing poetry. Words help me express my feelings, thoughts and perspectives. I believe poetry is a beautiful form of communication that connects hearts.
                      </p>
                    </div>

                    <div>
                      <div style={scriptTitleStyle}>Music & Cultural Activities</div>
                      <p style={bodyTextStyle}>
                        I have a keen interest in music and always enjoy being a part of cultural activities. Participating in events has helped me learn, grow and explore my creative side.
                      </p>
                    </div>
                  </div>

                  <div>
                    <SectionBadge title="LEADERSHIP & COMMUNICATION" />
                    <div style={bodyTextStyle}>
                      <p>
                        I am confident in communicating and expressing my ideas. I can easily interact with different people and work well in a team. I take initiative, lead with responsibility and motivate others to do their best.
                      </p>
                      <p style={{ marginTop: '4px' }}>
                        I believe a good leader listens, understands and brings people together to achieve a common goal.
                      </p>
                    </div>
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div style={{ paddingLeft: '8px' }}>
                  <div style={{ borderLeft: '2px solid #D4A8B3', paddingLeft: '14px', marginBottom: '20px', marginTop: '4px' }}>
                    <p style={{ fontFamily: "'Caveat', cursive", fontSize: '1.7rem', color: '#3D2633', lineHeight: 1.2, fontWeight: 600 }}>
                      Creativity is not just<br />what I do,<br />it's who I am. ♡
                    </p>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <SectionBadge title="ACHIEVEMENTS" />
                    <AchievementItem title="Cascade – Winner (7th Grade)" desc="Won the Cascade competition in 7th grade." />
                    <AchievementItem title="Cascade – 4 Consecutive Years" desc="Going to Cascade consecutively since 4 years." />
                    <AchievementItem title="Decathlon Art Competition – Winner (9th Grade)" desc="Won a Decathlon art competition in 9th grade." />
                    <AchievementItem title="Inter School Art Competition – Winner (10th Grade)" desc="Won an inter school art competition in 10th grade." />
                    <AchievementItem title="Event Participation" desc="Participated in various events and activities." isLast />
                  </div>

                  <div>
                    <SectionBadge title="PERSONAL QUALITIES" />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.78rem', color: '#5B4452', alignItems: 'center', textAlign: 'center', marginTop: '4px', fontWeight: 600 }}>
                      <div>Creative &nbsp;|&nbsp; Confident &nbsp;|&nbsp; Expressive</div>
                      <div>Dedicated &nbsp;|&nbsp; Responsible &nbsp;|&nbsp; Positive</div>
                      <div>Team Player &nbsp;|&nbsp; Leadership-Oriented</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Section */}
              <div style={{ marginTop: '14px', paddingTop: '10px', textAlign: 'center' }}>
                <SectionBadge title="WHY I WANT TO JOIN THE CLUB" />
                <p style={{ fontSize: '0.8rem', color: '#5B4452', lineHeight: 1.48, maxWidth: '660px', margin: '0 auto' }}>
                  I want to join the club because it will give me the opportunity to express my creativity, learn from others and contribute my skills to a creative community. I am excited to participate in events, use my talents and grow as a better individual and leader.
                </p>
              </div>

              {/* Footer */}
              <div style={{ textAlign: 'center', marginTop: '12px', fontFamily: "'Caveat', cursive", fontSize: '1.6rem', color: '#4A2B3D' }}>
                Passion. Creativity. Expression. Leadership. ♡
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function SectionBadge({ title }) {
  return (
    <div style={{ display: 'inline-block', marginBottom: '10px', position: 'relative' }}>
      <div style={{ position: 'absolute', inset: '-1px -8px', backgroundColor: 'rgba(230, 200, 208, 0.65)', borderRadius: '10px 14px 12px 14px', zIndex: 1, transform: 'rotate(-0.5deg)' }} />
      <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.76rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#4A2B3D', padding: '2px 14px', position: 'relative', zIndex: 2 }}>
        {title}
      </h2>
    </div>
  );
}

function AchievementItem({ title, desc, isLast = false }) {
  return (
    <div style={{ paddingBottom: '6px', marginBottom: '6px', borderBottom: isLast ? 'none' : '1px solid rgba(214, 194, 204, 0.55)' }}>
      <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', fontWeight: 700, color: '#4A2B3D', marginBottom: '1px' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.77rem', color: '#5B4452' }}>{desc}</p>
    </div>
  );
}

const bodyTextStyle = {
  fontSize: '0.81rem',
  color: '#5B4452',
  lineHeight: 1.48,
  textAlign: 'justify',
};

const scriptTitleStyle = {
  fontFamily: "'Caveat', cursive",
  fontSize: '1.55rem',
  color: '#4A2B3D',
  lineHeight: 1.1,
  marginBottom: '1px',
  fontWeight: 700,
};

function wcStyle(top, left, width, height, bg, rot = '0deg', right = 'auto', bottom = 'auto') {
  return {
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 1,
    top,
    left,
    right,
    bottom,
    width,
    height,
    background: `radial-gradient(circle, ${bg} 0%, transparent 75%)`,
    filter: 'blur(25px)',
    transform: `rotate(${rot})`,
  };
}
