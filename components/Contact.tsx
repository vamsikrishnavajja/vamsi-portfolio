'use client';

import { useState } from 'react';
import { Mail, Link, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', type: 'opportunity' });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const response = await fetch('https://formspree.io/f/mojzbzkz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please email me directly at vajjavamsik@gmail.com');
      }
    } catch {
      alert('Something went wrong. Please email me directly at vajjavamsik@gmail.com');
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" style={{ padding: '120px 0', borderTop: '1px solid var(--border)' }}>
      <div className="section-container">
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--gradient-1)' }} />
            <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Get In Touch
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '800', letterSpacing: '-1.5px', lineHeight: '1.15', marginBottom: '16px' }}>
            Let&apos;s Build Something{' '}
            <span className="text-gradient">Remarkable</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', maxWidth: '560px', lineHeight: '1.7' }}>
            Open to C2C consulting, enterprise AI architecture, and senior engineering roles. 
            I typically respond within 24 hours.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '48px' }} className="contact-grid">
          {/* Left: Info */}
          <div>

            {/* Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
              {[
                {
                  icon: <Mail size={18} />,
                  label: 'Email',
                  value: 'vajjavamsik@gmail.com',
                  href: 'mailto:vajjavamsik@gmail.com',
                  color: '#4f8eff',
                },
                {
                  icon: <Link size={18} />,
                  label: 'LinkedIn',
                  value: 'linkedin.com/in/vajjavamsik',
                  href: 'https://www.linkedin.com/in/vajjavamsik/',
                  color: '#0077b5',
                },
                {
                  icon: <MapPin size={18} />,
                  label: 'Location',
                  value: 'Austin,TX',
                  href: null,
                  color: '#8b5cf6',
                },
                {
                  icon: <Clock size={18} />,
                  label: 'Response Time',
                  value: 'Within 24 hours',
                  href: null,
                  color: '#10b981',
                },
              ].map((item) => (
                <div key={item.label} className="card-glass" style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.color,
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '2px' }}>{item.label}</div>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        style={{ fontSize: '14px', fontWeight: '500', color: item.color, textDecoration: 'none' }}>
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="card-glass" style={{ padding: '40px' }}>
            {submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px', gap: '16px', textAlign: 'center' }}>
                <CheckCircle size={56} style={{ color: '#10b981' }} />
                <h3 style={{ fontSize: '24px', fontWeight: '700', letterSpacing: '-0.5px' }}>Message Sent!</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', maxWidth: '360px', lineHeight: '1.6' }}>
                  Thanks for reaching out. I&apos;ll review your message and get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '28px', letterSpacing: '-0.5px' }}>
                  Send a Message
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder=""
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--accent-blue)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '6px' }}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder=""
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '10px',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                        fontSize: '14px',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={(e) => { e.target.style.borderColor = 'var(--accent-blue)'; }}
                      onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder=""
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--accent-blue)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}
                  />
                </div>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about the opportunity, the AI challenges you're facing, or what you're looking to build..."
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={(e) => { e.target.style.borderColor = 'var(--accent-blue)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'var(--border)'; }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', opacity: sending ? 0.7 : 1 }}
                >
                  <Send size={16} />
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
        input::placeholder, textarea::placeholder { color: var(--text-muted); }
        option { background: var(--bg-card); }
      `}</style>
    </section>
  );
}
