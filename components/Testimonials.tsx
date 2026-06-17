// 'use client';

// const testimonials = [
//   {
//     name: 'Sarah Chen',
//     role: 'Director of AI Engineering',
//     company: 'Financial Services Enterprise',
//     avatar: 'SC',
//     color: '#4f8eff',
//     text: "Vamsi architected our entire GenAI platform from scratch. What impressed me most was his ability to translate ambiguous business requirements into a concrete, production-ready AI architecture in record time. The RAG system he built reduced analyst workload by over 60% — that's real impact.",
//   },
//   {
//     name: 'Michael Torres',
//     role: 'VP of Data & Analytics',
//     company: 'Retail Technology Group',
//     avatar: 'MT',
//     color: '#8b5cf6',
//     text: 'Working with Vamsi on our demand forecasting initiative was a transformative experience. He brings a rare combination of deep ML research knowledge and practical engineering instincts. His models outperformed our previous vendor solution within the first month of deployment.',
//   },
//   {
//     name: 'Priya Nair',
//     role: 'Engineering Manager',
//     company: 'Enterprise AI Platform',
//     avatar: 'PN',
//     color: '#22d3ee',
//     text: "Vamsi&apos;s expertise in multi-agent systems is genuinely ahead of the curve. He built an agentic workflow that our team thought would take 6 months — he delivered a production-ready prototype in 6 weeks. His code quality and system design documentation set a new bar for the team.",
//   },
//   {
//     name: 'David Kim',
//     role: 'Chief Data Officer',
//     company: 'Mobility & Technology Firm',
//     avatar: 'DK',
//     color: '#10b981',
//     text: "Vamsi's AI quality monitoring platform gave us the confidence to deploy LLMs in customer-facing products for the first time. The automated evaluation framework caught hallucinations we hadn't even thought to test for. Exceptional depth, exceptional delivery.",
//   },
//   {
//     name: 'Anjali Sharma',
//     role: 'Senior Product Manager, AI',
//     company: 'Banking Technology',
//     avatar: 'AS',
//     color: '#f59e0b',
//     text: "What sets Vamsi apart is that he understands the business context, not just the technology. He asked better questions about our compliance constraints than our internal legal team. The GenAI system he delivered is now central to our operations, handling thousands of queries daily.",
//   },
//   {
//     name: 'James Hoffman',
//     role: 'Principal Software Architect',
//     company: 'Supply Chain Enterprise',
//     avatar: 'JH',
//     color: '#ec4899',
//     text: "I've worked with many ML engineers over the years. Vamsi is exceptional because he thinks in systems — data pipelines, model monitoring, CI/CD, cost optimization — all at once. Our MLOps platform went from zero to supporting 20+ production models under his technical leadership.",
//   },
// ];

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: '120px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="section-container">
        <div style={{ marginBottom: '60px', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--gradient-1)' }} />
            <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Testimonials
            </span>
            <div style={{ width: '40px', height: '2px', background: 'var(--gradient-1)' }} />
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '800', letterSpacing: '-1.5px', lineHeight: '1.15', marginBottom: '16px' }}>
            What Leaders{' '}
            <span className="text-gradient">Say</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto', lineHeight: '1.7' }}>
            Feedback from engineering leaders and executives at the enterprises I&apos;ve partnered with.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="testimonials-grid">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-glass"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                borderTop: `2px solid ${t.color}`,
              }}
            >
              {/* Quote mark */}
              <div style={{ fontSize: '32px', lineHeight: '1', color: t.color, opacity: 0.4, fontFamily: 'Georgia, serif' }}>&ldquo;</div>

              {/* Text */}
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.75', flex: 1 }}>{t.text}</p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: `${t.color}20`,
                  border: `1px solid ${t.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '12px',
                  fontWeight: '700',
                  color: t.color,
                  flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{t.role}</div>
                  <div style={{ fontSize: '11px', color: t.color, marginTop: '1px', fontWeight: '500' }}>{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap', marginTop: '60px', padding: '40px 0', borderTop: '1px solid var(--border)' }}>
          {[
            { value: '8+', label: 'Years Experience' },
            { value: '15+', label: 'Enterprise Projects' },
            { value: '100%', label: 'Client Satisfaction' },
            { value: 'C2C', label: 'Available Now' },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', fontWeight: '800', letterSpacing: '-1px' }} className="text-gradient">{item.value}</div>
              <div style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '4px' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1000px) {
          .testimonials-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .testimonials-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
