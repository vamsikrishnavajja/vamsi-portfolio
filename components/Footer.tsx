'use client';

import { Link, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '48px 0 32px', background: 'var(--bg-secondary)' }}>
      <div className="section-container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '32px', marginBottom: '40px' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #4f8eff 0%, #8b5cf6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: '800',
                color: 'white',
              }}>VV</div>
              <span style={{ fontWeight: '700', fontSize: '16px' }}>Vamsi Vajja</span>
            </div>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', maxWidth: '300px', lineHeight: '1.6' }}>
              Senior AI/ML Engineer specializing in Generative AI, Agentic AI, and enterprise AI architecture.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px' }}>Navigation</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['About', 'Skills', 'Experience', 'Projects', 'Architecture', 'Contact'].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} style={{ fontSize: '14px', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--accent-blue)')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--text-secondary)')}>
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px' }}>Expertise</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Generative AI', 'Agentic AI', 'RAG Systems', 'MLOps', 'LLM Engineering'].map((item) => (
                  <span key={item} style={{ fontSize: '14px', color: 'var(--text-muted)' }}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <div style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '16px' }}>Connect</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="https://www.linkedin.com/in/vajjavamsik/" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#0077b5')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}>
                <Link size={16} />
                LinkedIn
              </a>
              <a href="mailto:vajjavamsik@gmail.com"
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--accent-blue)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}>
                <Mail size={16} />
                Email
              </a>
              <a href="/resume.pdf" download
                style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#8b5cf6')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--text-secondary)')}>
                📄 Resume
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24px', borderTop: '1px solid var(--border)', flexWrap: 'wrap', gap: '16px' }}>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
            © 2025 Vamsi Vajja. Built for enterprise AI excellence.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Senior AI/ML Engineer · Generative AI · Agentic AI · MLOps
            </span>
            <button
              onClick={scrollTop}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              aria-label="Back to top"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--accent-blue)';
                (e.currentTarget as HTMLElement).style.color = 'var(--accent-blue)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)';
                (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
              }}
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
