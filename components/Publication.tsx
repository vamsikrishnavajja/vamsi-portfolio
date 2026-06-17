'use client';

import { ArrowRight, ExternalLink } from 'lucide-react';

const contributions = [
  'Proposed a novel DLCNN framework for real-time, scalable malware detection — outperforming traditional ML algorithms including SVM, Random Forest, KNN, and Decision Trees across all benchmark datasets.',
  'Designed an image-processing-based hybrid approach integrating L2 normalization and SoftMax classification, achieving 85.4% detection accuracy on MALIMG and CICDoS2019 datasets.',
  'Built and evaluated the framework against 7 baseline models (KNN, NB, DT, SVM, RF, CNN, LSTM); DLCNN achieved superior accuracy with a 27% reduction in processing time.',
  'Demonstrated zero-day malware detection capability by combining static, dynamic, and image-processing-based analysis in a single unified scalable pipeline.',
  'Personally labeled 1,500 malware images to improve classification accuracy by 9.1% on Ember and MalConv datasets, reducing false positives to below 5%.',
];

const metrics = [
  { value: '85.4%', label: 'Detection Accuracy', sub: 'MALIMG & CICDoS2019' },
  { value: '27%', label: 'Processing Time Reduction', sub: 'vs. baseline models' },
  { value: '7', label: 'Models Benchmarked', sub: 'KNN, SVM, RF, CNN, LSTM...' },
  { value: '<5%', label: 'False Positive Rate', sub: 'on Ember & MalConv datasets' },
];

export default function Publication() {
  return (
    <section
      id="publication"
      style={{ padding: '120px 0', borderTop: '1px solid var(--border)' }}
    >
      <div className="section-container">
        {/* Section header */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--gradient-1)' }} />
            <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Published Research
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '800', letterSpacing: '-1.5px', lineHeight: '1.15', marginBottom: '16px' }}>
            Peer-Reviewed{' '}
            <span className="text-gradient">Springer Publication</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', maxWidth: '560px', lineHeight: '1.7' }}>
            Research bridging deep learning theory and real-world cybersecurity applications, published in Springer Nature.
          </p>
        </div>

        {/* Main publication card */}
        <div className="card-glass" style={{
          padding: '0',
          overflow: 'hidden',
          borderTop: '3px solid var(--accent-violet)',
          marginBottom: '32px',
        }}>
          {/* Top bar */}
          <div style={{
            padding: '28px 36px',
            background: 'linear-gradient(135deg, rgba(139,92,246,0.08) 0%, rgba(79,142,255,0.05) 100%)',
            borderBottom: '1px solid var(--border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '16px',
          }}>
            <div style={{ flex: 1 }}>
              {/* Publisher badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '6px',
                  background: 'rgba(139,92,246,0.15)',
                  border: '1px solid rgba(139,92,246,0.3)',
                  fontSize: '11px',
                  fontWeight: '700',
                  color: 'var(--accent-violet)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}>
                  Springer Nature · 2024
                </span>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '6px',
                  background: 'rgba(16,185,129,0.12)',
                  border: '1px solid rgba(16,185,129,0.25)',
                  fontSize: '11px',
                  fontWeight: '700',
                  color: '#10b981',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}>
                  Chapter 44 · pp. 583–599
                </span>
                <span style={{
                  padding: '4px 12px',
                  borderRadius: '6px',
                  background: 'rgba(79,142,255,0.1)',
                  border: '1px solid rgba(79,142,255,0.2)',
                  fontSize: '11px',
                  fontWeight: '700',
                  color: 'var(--accent-blue)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}>
                  Deep Learning · Cybersecurity
                </span>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                fontWeight: '800',
                letterSpacing: '-0.5px',
                lineHeight: '1.25',
                marginBottom: '10px',
                color: 'var(--text-primary)',
              }}>
                An Artificial Intelligence Approach for Malware Detection Using Deep Learning
              </h3>

              {/* Authors */}
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                <strong style={{ color: 'var(--accent-blue)' }}>V. Vamsi Krishna</strong>
                {', Pedada Saraswathi, D. Venkata Yashwanth, K. Aidhitha, M. Bindu'}
              </p>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Dept. of Computer Science & Engineering, GITAM School of Technology, GITAM, Visakhapatnam, India
              </p>
            </div>

            {/* DOI link */}
            <a
              href="https://doi.org/10.1007/978-981-99-9179-2_44"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 20px',
                borderRadius: '10px',
                background: 'var(--gradient-1)',
                color: 'white',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: '600',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'opacity 0.2s, transform 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = '0.85';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.opacity = '1';
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
              }}
            >
              <ExternalLink size={14} />
              View on Springer
            </a>
          </div>

          {/* Body */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0',
          }} className="pub-body-grid">
            {/* Left: Abstract + Contributions */}
            <div style={{ padding: '32px 36px', borderRight: '1px solid var(--border)' }}>
              {/* Abstract */}
              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>
                  Abstract
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.75' }}>
                  This research investigates both conventional machine learning algorithms and deep learning architectures
                  for the detection, classification, and categorization of malware using public and private datasets.
                  A novel DLCNN-based framework is proposed for effective visual malware detection using a scalable,
                  hybrid real-time deployment pipeline — outperforming existing models on zero-day malware identification.
                </p>
              </div>

              {/* Key Contributions */}
              <div>
                <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '14px' }}>
                  Key Contributions
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {contributions.map((c, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <ArrowRight size={13} style={{ color: 'var(--accent-violet)', marginTop: '3px', flexShrink: 0 }} />
                      <span style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.65' }}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Metrics + Tech + Venue */}
            <div style={{ padding: '32px 36px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {/* Result metrics */}
              <div>
                <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '14px' }}>
                  Results
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {metrics.map((m) => (
                    <div key={m.label} style={{
                      padding: '16px',
                      borderRadius: '12px',
                      background: 'rgba(139,92,246,0.06)',
                      border: '1px solid rgba(139,92,246,0.15)',
                      textAlign: 'center',
                    }}>
                      <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--accent-violet)', letterSpacing: '-1px', marginBottom: '4px' }}>{m.value}</div>
                      <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '2px' }}>{m.label}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{m.sub}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech used */}
              <div>
                <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>
                  Technologies & Datasets
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Python', 'TensorFlow', 'Keras', 'CNN', 'LSTM', 'DLCNN', 'L2 Normalization', 'SoftMax', 'MALIMG', 'CICDoS2019', 'Ember', 'MalConv', 'LightGBM'].map((t) => (
                    <span key={t} style={{
                      padding: '5px 11px',
                      borderRadius: '6px',
                      background: 'rgba(79,142,255,0.08)',
                      border: '1px solid rgba(79,142,255,0.18)',
                      fontSize: '12px',
                      color: 'var(--accent-blue)',
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: '500',
                    }}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Venue */}
              <div style={{
                padding: '16px 20px',
                borderRadius: '12px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border)',
              }}>
                <h4 style={{ fontSize: '12px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '10px' }}>
                  Publication Venue
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Data Science and Big Data Analytics</strong>
                  <br />
                  Data-Intensive Research Series · Springer Nature Singapore Pte Ltd.
                  <br />
                  D. Mishra et al. (eds.) · DOI: 10.1007/978-981-99-9179-2_44
                </p>
                <div style={{ marginTop: '10px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>
                    ISBN: 978-981-99-9179-2
                  </span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>·</span>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>
                    © Springer Nature 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
