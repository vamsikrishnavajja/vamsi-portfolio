'use client';

const timeline = [
  { year: '2017', label: 'E-Commerce Engineering', text: 'Began journey at eBay, developing scalable backend architectures and seller self-serve portals.' },
  { year: '2019', label: 'Big Data & Mobility', text: 'Moved to Uber as a Senior Data Engineer, building real-time streaming pipelines with Kafka and Spark for market intelligence.' },
  { year: '2022', label: 'Enterprise ML & Forecasting', text: 'Joined Target, architecting production-grade demand forecasting and deep learning recommendation engines at retail scale.' },
  { year: '2023', label: 'Advanced AI Foundations', text: 'Completed Master\'s degree, deepening expertise in advanced ML architectures and predictive modeling.' },
  { year: '2024', label: 'Enterprise GenAI & Agents', text: 'Joined Barclays to architect cutting-edge multi-agent RAG systems and LangGraph orchestration platforms.' },
  { year: '2026', label: 'Today', text: 'Continuing enterprise GenAI leadership at Barclays while available for C2C consulting opportunities.' }
];

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0', borderTop: '1px solid var(--border)' }}>
      <div className="section-container">
        {/* Section Header */}
        <div style={{ marginBottom: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--gradient-1)' }} />
            <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '2px' }}>
              About Me
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '800', letterSpacing: '-1.5px', lineHeight: '1.15', marginBottom: '20px' }}>
            Engineering the{' '}
            <span className="text-gradient">Intelligence Layer</span>
            <br />
            of Modern Enterprise
          </h2>
          <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: '1.7', maxWidth: '640px' }}>
            I spend my time at the intersection of cutting edge AI research and real world engineering 
            turning the latest advances in large language models, agents and retrieval systems 
            into software that enterprises can actually ship and trust.
          </p>
        </div>

        {/* Main Content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '80px' }} className="about-grid">
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '20px', letterSpacing: '-0.5px' }}>
              My Story
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.75', fontSize: '15px' }}>
                Eight years ago, I started by building scalable backend architectures at major e-commerce platforms. Today, I architect multi agent Generative AI systems that handle millions of customer interactions and process billions of data points in production for global financial enterprises.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.75', fontSize: '15px' }}>
                At <strong style={{ color: 'var(--text-primary)' }}>Barclays US Consumer Bank</strong>, I architected a production-grade multi-agent GenAI system that automated over 8 million customer call summaries using LangGraph and AWS Bedrock. At <strong style={{ color: 'var(--text-primary)' }}>Target</strong>, I built ML systems at retail scale: demand forecasting, recommendation engines, and high throughput data platforms.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.75', fontSize: '15px' }}>
                What drives me is the moment a complex AI system clicks into place i.e. when a 
multi agent workflow leverages deep context engineering to autonomously resolve business rules 
that previously took an analyst hours. That&apos;s the resilient, production grade AI adoption I live for.
              </p>
            </div>

            {/* Industries */}
            <div style={{ marginTop: '32px' }}>
              <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>
                Industries
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Banking & Financial Services', 'Retail', 'Mobility', 'E-Commerce'].map((ind) => (
                  <span key={ind} style={{
                    padding: '6px 14px',
                    borderRadius: '6px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border)',
                    fontSize: '13px',
                    color: 'var(--text-secondary)',
                  }}>
                    {ind}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px', letterSpacing: '-0.5px' }}>
              8-Year Journey
            </h3>
            <div style={{ position: 'relative' }}>
              <div style={{
                position: 'absolute',
                left: '14px',
                top: 0,
                bottom: 0,
                width: '1px',
                background: 'linear-gradient(to bottom, var(--accent-blue), var(--accent-violet), transparent)',
              }} />
              {timeline.map((item, i) => (
                <div key={item.year} style={{ display: 'flex', gap: '20px', marginBottom: i < timeline.length - 1 ? '28px' : 0 }}>
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: i === timeline.length - 1 ? 'var(--gradient-1)' : 'var(--bg-card)',
                    border: `2px solid ${i === timeline.length - 1 ? 'var(--accent-blue)' : 'var(--border-bright)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    zIndex: 1,
                    boxShadow: i === timeline.length - 1 ? '0 0 12px rgba(79, 142, 255, 0.4)' : 'none',
                  }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === timeline.length - 1 ? 'white' : 'var(--accent-blue)' }} />
                  </div>
                  <div style={{ paddingTop: '2px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--accent-blue)', fontFamily: "'JetBrains Mono', monospace" }}>{item.year}</span>
                      <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>{item.label}</span>
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          .pillars-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .pillars-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
