'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, TrendingUp } from 'lucide-react';

const experiences = [
  {
    id: 1,
    company: 'Barclays',
    logo: '🏦',
    role: 'Senior AI/ML Engineer',
    period: 'Jan 2024 – Present',
    type: 'Contract',
    color: '#4f8eff',
    challenge:
      'Barclays US Consumer Bank identified manual After-Call Work (ACW) as a key bottleneck in contact center operations, where agents spent significant time summarizing every customer interaction post-call, relying entirely on manual review of call transcripts.',
    solution:
      'Developed an enterprise-grade GenAI knowledge assistant using LangChain, LangGraph, and AWS Bedrock (Claude) to automatically capture call intent, agent actions, compliance flags, and next steps from raw transcripts. Implemented a RAG pipeline with semantic search over Amazon OpenSearch and FAISS, with advanced chunking strategies and agentic multi-step reasoning workflows.',
    tech: [
      'LangGraph',
      'LangChain',
      'AWS Bedrock',
      'Amazon OpenSearch',
      'FAISS',
      'FastAPI',
      'Python',
      'Amazon S3',
      'Redis',
      'Docker',
      'Kubernetes',
    ],
    impact: [
      { metric: '30–35%', label: 'Improvement in retrieval relevance' },
      { metric: '25%', label: 'Improvement in first-response correctness' },
      { metric: '<500ms', label: 'Vector retrieval latency achieved' },
      { metric: 'Sub-second', label: 'Real-time query handling via API Gateway' },
    ],
  },
  {
    id: 2,
    company: 'Target',
    logo: '🎯',
    role: 'ML Engineer',
    period: 'Aug 2022 – Jul 2023',
    type: 'Contract',
    color: '#ec4899',
    challenge:
      "Target's retail operations depend on moving billions of units of inventory across 2,000+ stores with precision. Legacy statistical forecasting models lacked the ability to incorporate real-time signals like local weather, social trends, and live clickstream activity, leading to demand prediction gaps.",
    solution:
      'Designed a centralized ML platform for demand forecasting and personalization using PyTorch, TensorFlow, and XGBoost on GCP (Vertex AI, BigQuery, GKE). Built deep learning recommendation models, engineered real-time and batch feature pipelines with Redis and BigQuery, and deployed scalable serving APIs with FastAPI and Kubernetes.',
    tech: [
      'Python',
      'PyTorch',
      'TensorFlow',
      'XGBoost',
      'GCP Vertex AI',
      'BigQuery',
      'GKE',
      'Kubeflow',
      'MLflow',
      'PySpark',
      'Redis',
      'FastAPI',
      'Docker',
      'Terraform',
    ],
    impact: [
      { metric: '15%', label: 'Improvement in CTR via recommendation models' },
      { metric: '40%', label: 'Reduction in feature engineering time' },
      { metric: '25%', label: 'Reduction in infrastructure costs' },
      { metric: '30%', label: 'Faster model training with GPU acceleration' },
    ],
  },
  {
    id: 3,
    company: 'Uber',
    logo: '🚗',
    role: 'Senior Data Engineer',
    period: 'May 2019 – Nov 2021',
    type: 'Full Time',
    color: '#8b5cf6',
    challenge:
      'Uber needed to process high-volume ride demand, driver availability, and geo-location signals for dynamic pricing and dispatch optimization — transitioning from legacy batch processing to a low-latency streaming architecture at massive scale.',
    solution:
      'Engineered a real-time data pipeline using Apache Kafka and Apache Spark Streaming to process millions of ride events with sub-minute latency. Built batch and streaming feature pipelines via PySpark and Airflow, and integrated with Uber Michelangelo ML platform to enable reliable feature generation for surge pricing models.',
    tech: [
      'Apache Kafka',
      'Apache Spark',
      'PySpark',
      'Spark Streaming',
      'Amazon S3',
      'Apache Hive',
      'Presto',
      'Apache Airflow',
      'Michelangelo',
      'SQL',
      'Python',
      'Hadoop',
    ],
    impact: [
      { metric: 'Millions', label: 'Ride events processed in real time' },
      { metric: 'Sub-minute', label: 'Streaming ingestion latency' },
      { metric: 'Multi-TB', label: 'Daily data scale managed efficiently' },
      { metric: 'Real-time', label: 'Pricing accuracy across high-demand zones' },
    ],
  },
  {
    id: 4,
    company: 'Flipkart',
    logo: '🛍️',
    role: 'Python Developer',
    period: 'Mar 2017 – Apr 2019',
    type: 'Full Time',
    color: '#10b981',
    challenge:
      'Flipkart marketplace growth depended on onboarding thousands of new sellers rapidly without compromising catalog quality. The manual moderation process created bottlenecks for product listings, image validation, and metadata checks at scale.',
    solution:
      'Designed a scalable self-serve seller onboarding platform using Python (Django), with asynchronous processing pipelines via Celery, Redis, and RabbitMQ. Built a rule-based validation engine for pricing guardrails, automated image quality checks with Pillow, and optimized MySQL queries with Memcached caching.',
    tech: [
      'Python',
      'Django',
      'Flask',
      'Celery',
      'Redis',
      'RabbitMQ',
      'MySQL',
      'Memcached',
      'Pillow',
      'PyTest',
      'Docker',
      'Git',
    ],
    impact: [
      { metric: '60%', label: 'Reduction in manual onboarding effort' },
      { metric: '50k+', label: 'Daily image uploads automated via Pillow' },
      { metric: '30%', label: 'Reduction in seller dashboard latency' },
      { metric: '90%+', label: 'Unit test coverage with PyTest' },
    ],
  },
];

function ExperienceCard({ exp }: { exp: typeof experiences[0] }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="card-glass"
      style={{
        overflow: 'hidden',
        borderLeft: `3px solid ${exp.color}`,
        marginBottom: '20px',
      }}
    >
      {/* Header */}
      <div
        style={{ padding: '28px 32px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
        onClick={() => setExpanded(!expanded)}
      >
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            background: `${exp.color}15`,
            border: `1px solid ${exp.color}30`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
            flexShrink: 0,
          }}>
            {exp.logo}
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '4px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-0.5px' }}>{exp.company}</h3>
              <span style={{
                padding: '2px 10px',
                borderRadius: '20px',
                background: `${exp.color}15`,
                border: `1px solid ${exp.color}40`,
                fontSize: '11px',
                fontWeight: '600',
                color: exp.color,
              }}>{exp.type}</span>
            </div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '15px', color: 'var(--text-secondary)', fontWeight: '500' }}>{exp.role}</span>
              <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontFamily: "'JetBrains Mono', monospace" }}>{exp.period}</span>
            </div>
          </div>
        </div>
        <button style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-muted)',
          cursor: 'pointer',
          padding: '4px',
          flexShrink: 0,
        }}>
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {/* Impact Pills (always visible) */}
      <div style={{ padding: '0 32px 20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {exp.impact.map((imp) => (
          <div key={imp.label} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            borderRadius: '8px',
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid var(--border)',
          }}>
            <TrendingUp size={12} style={{ color: exp.color }} />
            <span style={{ fontSize: '13px', fontWeight: '700', color: exp.color }}>{imp.metric}</span>
            <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{imp.label}</span>
          </div>
        ))}
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div style={{ padding: '0 32px 32px', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px', marginTop: '28px' }} className="exp-detail-grid">
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>
                Business Challenge
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{exp.challenge}</p>
            </div>
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>
                My Solution
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{exp.solution}</p>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}>
            <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>
              Technologies Used
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {exp.tech.map((t) => (
                <span key={t} style={{
                  padding: '5px 12px',
                  borderRadius: '6px',
                  background: `${exp.color}10`,
                  border: `1px solid ${exp.color}25`,
                  fontSize: '13px',
                  color: exp.color,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: '500',
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '120px 0', borderTop: '1px solid var(--border)' }}>
      <div className="section-container">
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--gradient-1)' }} />
            <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Experience
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '800', letterSpacing: '-1.5px', lineHeight: '1.15', marginBottom: '16px' }}>
            Enterprise Impact{' '}
            <span className="text-gradient">That Speaks for Itself</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', maxWidth: '560px', lineHeight: '1.7' }}>
            Click any card to expand the full story — the challenges faced, solutions built, and measured outcomes delivered.
          </p>
        </div>

        <div>
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} exp={exp} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .exp-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}