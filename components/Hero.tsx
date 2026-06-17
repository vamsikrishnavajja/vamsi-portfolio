'use client';

import { useEffect, useRef } from 'react';
import { Download, Mail, Cpu, Brain, Zap } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrame: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      time += 0.005;

      const nodes: {x: number; y: number; size: number}[] = [];
      for (let i = 0; i < 30; i++) {
        const x = (Math.sin(time * 0.3 + i * 1.2) * 0.4 + 0.5) * w;
        const y = (Math.cos(time * 0.2 + i * 0.9) * 0.4 + 0.5) * h;
        nodes.push({ x, y, size: 2 + Math.sin(time + i) });
      }

      nodes.forEach((n1, i) => {
        nodes.forEach((n2, j) => {
          if (j <= i) return;
          const dist = Math.sqrt((n1.x - n2.x) ** 2 + (n1.y - n2.y) ** 2);
          if (dist < 150) {
            const alpha = (1 - dist / 150) * 0.08;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(79, 142, 255, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        });
      });

      nodes.forEach((n, i) => {
        const alpha = 0.2 + Math.sin(time * 2 + i) * 0.1;
        ctx.beginPath();
        ctx.fillStyle = `rgba(79, 142, 255, ${alpha})`;
        ctx.arc(n.x, n.y, n.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(animFrame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: '80px',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.6,
        }}
      />
      <div className="grid-bg" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(79, 142, 255, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }} className="hero-grid">
          {/* Left Content */}
          <div>

            <h1 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: '800', lineHeight: '1.1', letterSpacing: '-2px', marginBottom: '20px' }}>
              Building the{' '}
              <span className="text-gradient">AI Systems</span>
              <br />
              That Power Tomorrow
            </h1>

            <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '16px', maxWidth: '520px' }}>
              Senior AI/ML Engineer with <strong style={{ color: 'var(--text-primary)' }}>8+ years</strong> architecting
              enterprise-grade Generative AI, Agentic AI, and MLOps solutions
              for Fortune 500 companies.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '36px' }}>
              {[
                { icon: <Brain size={14} />, text: 'Generative AI' },
                { icon: <Zap size={14} />, text: 'Agentic AI' },
                { icon: <Cpu size={14} />, text: 'MLOps' },
              ].map((item) => (
                <div key={item.text} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid var(--border)',
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                }}>
                  <span style={{ color: 'var(--accent-blue)' }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '48px' }}>
              <a href="/resume.pdf" download className="btn-primary">
                <Download size={16} />
                Download Resume
              </a>
              <a href="#contact" className="btn-secondary">
                <Mail size={16} />
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/vajjavamsik"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                in LinkedIn
              </a>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
              {[
                { number: '8+', label: 'Years Experience' },
                { number: '15+', label: 'Enterprise Projects' },
                { number: '4', label: 'Industries Served' },
              ].map((stat) => (
                <div key={stat.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: '800', letterSpacing: '-1px' }} className="text-gradient">
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Right: Profile Image */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="hero-visual">
            <div style={{
              position: 'relative',
              width: '320px',
              height: '320px',
            }}>
              {/* Glow ring */}
              <div style={{
                position: 'absolute',
                inset: '-4px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #4f8eff, #8b5cf6)',
                opacity: 0.4,
                filter: 'blur(12px)',
              }} />
              {/* Image */}
              <img
                src="/profile.jpg"
                alt="Vamsi Vajja"
                style={{
                  position: 'relative',
                  width: '320px',
                  height: '320px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  border: '3px solid rgba(79, 142, 255, 0.4)',
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '32px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        opacity: 0.4,
      }}>
        <span style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--text-muted), transparent)' }} />
      </div>
    </section>
  );
}
