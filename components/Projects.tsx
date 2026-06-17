'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'rag',
    title: 'Enterprise RAG Platform',
    subtitle: 'Production-grade retrieval-augmented generation at scale',
    color: '#4f8eff',
    gradient: 'linear-gradient(135deg, rgba(79,142,255,0.1) 0%, rgba(139,92,246,0.05) 100%)',
    tags: ['LangChain', 'Pinecone', 'AWS Bedrock', 'FastAPI', 'Redis'],
    description: 'An enterprise search and Q&A platform that connects 10M+ documents across internal wikis, regulatory filings, and operational databases. Users ask in natural language; the system retrieves, cites, and reasons across multiple sources with <500ms end-to-end latency.',
    features: [
      'Hybrid retrieval: dense + sparse with re-ranking',
      'Multi-source federation across 12 data connectors',
      'Hallucination reduction via citation verification',
      'Role-based access control per document collection',
      'Streaming responses with chunk-level citations',
    ],
    architecture: ['Data Sources', '→', 'Embedding Model', '→', 'Vector DB', '→', 'Retriever', '→', 'LLM', '→', 'Response'],
    metrics: [
      { value: '8M+', label: 'Documents indexed' },
      { value: '40%', label: 'Better accuracy' },
      { value: '<500ms', label: 'Response latency' },
      { value: '95%', label: 'Citation accuracy' },
    ],
  },
  {
    id: 'agents',
    title: 'Agentic AI Workflow System',
    subtitle: 'Multi-agent orchestration for autonomous enterprise workflows',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(236,72,153,0.05) 100%)',
    tags: ['LangGraph', 'CrewAI', 'OpenAI', 'Python', 'Celery'],
    description: 'A supervisor-worker multi-agent system that autonomously handles end-to-end business workflows: from data ingestion and analysis to report generation and action execution. Supports human-in-the-loop checkpoints for high-stakes decisions.',
    features: [
      'Supervisor + specialist agent architecture via LangGraph',
      'Tool use: web search, code execution, API calls, DB queries',
      'Persistent memory with episodic and semantic layers',
      'Human-in-the-loop interrupt system for decision gates',
      'Full observability with trace logging and replay',
    ],
    architecture: ['Supervisor Agent', '→', 'Task Decomposition', '→', 'Specialist Agents', '→', 'Tool Execution', '→', 'Synthesis'],
    metrics: [
      { value: '75%', label: 'Task automation rate' },
      { value: '8+', label: 'Agent types deployed' },
      { value: '3hr → 8min', label: 'Analyst workflow time' },
      { value: '99%', label: 'Reliability in production' },
    ],
  },
  {
    id: 'quality',
    title: 'AI Quality Monitoring Platform',
    subtitle: 'Real-time evaluation and risk detection for GenAI outputs',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(34,211,238,0.05) 100%)',
    tags: ['Python', 'Prometheus', 'Grafana', 'FastAPI', 'PostgreSQL'],
    description: 'A continuous evaluation framework that acts as an automated QA layer on top of production LLM systems. Uses LLM-as-judge patterns to assess faithfulness, relevance, toxicity, and PII leakage — in real time, at scale.',
    features: [
      'Multi-dimensional scoring: faithfulness, relevance, coherence',
      'Real-time PII detection and masking pipeline',
      'Automated human review queue for flagged responses',
      'Drift detection with alerting and auto-rollback',
      'Feedback loop integration for RLHF data collection',
    ],
    architecture: ['LLM Response', '→', 'Eval Judges', '→', 'Risk Scoring', '→', 'Alert Engine', '→', 'Dashboard'],
    metrics: [
      { value: '94%', label: 'Hallucination detection' },
      { value: '10K+', label: 'Evaluations / day' },
      { value: '80%', label: 'QA time saved' },
      { value: '<200ms', label: 'Eval latency p99' },
    ],
  },
  {
    id: 'mlops',
    title: 'Enterprise MLOps Platform',
    subtitle: 'End-to-end ML lifecycle automation and model governance',
    color: '#f59e0b',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.1) 0%, rgba(239,68,68,0.05) 100%)',
    tags: ['AWS SageMaker', 'MLflow', 'Airflow', 'Docker', 'Terraform'],
    description: 'A self-service MLOps platform enabling data scientists to train, evaluate, deploy, and monitor models without infrastructure expertise. Enforces governance, reproducibility, and compliance across the full ML lifecycle.',
    features: [
      'One-click model deployment with canary and blue/green strategies',
      'Automated data drift detection with retraining triggers',
      'Model registry with lineage, versioning, and approval gates',
      'Cost-aware compute optimization across spot and on-demand',
      'Full audit trail for regulatory compliance (SOX, GDPR)',
    ],
    architecture: ['Experiment Tracking', '→', 'Model Registry', '→', 'CI/CD Pipeline', '→', 'Serving Layer', '→', 'Monitoring'],
    metrics: [
      { value: '4x', label: 'Faster model deployment' },
      { value: '60%', label: 'Infra cost reduction' },
      { value: '100%', label: 'Deployment reproducibility' },
      { value: '20+', label: 'Models in production' },
    ],
  },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState(projects[0].id);
  const project = projects.find((p) => p.id === activeProject)!;

  return (
    <section id="projects" style={{ padding: '120px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="section-container">
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--gradient-1)' }} />
            <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Featured Projects
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '800', letterSpacing: '-1.5px', lineHeight: '1.15', marginBottom: '16px' }}>
            Production Systems{' '}
            <span className="text-gradient">Built to Scale</span>
          </h2>
        </div>

        {/* Project Selector */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '40px' }}>
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveProject(p.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                border: `1px solid ${activeProject === p.id ? p.color + '60' : 'var(--border)'}`,
                background: activeProject === p.id ? `${p.color}15` : 'var(--bg-card)',
                color: activeProject === p.id ? p.color : 'var(--text-secondary)',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              
              <span style={{ display: 'none' }} className="proj-label">{p.title}</span>
              <span className="proj-label-short">{p.title.split(' ').slice(0, 2).join(' ')}</span>
            </button>
          ))}
        </div>

        {/* Project Detail */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="project-detail-grid">
          {/* Left */}
          <div className="card-glass" style={{ padding: '36px', background: project.gradient }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', letterSpacing: '-0.5px' }}>{project.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '2px' }}>{project.subtitle}</p>
              </div>
            </div>

            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.75', marginBottom: '24px' }}>
              {project.description}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
              {project.tags.map((t) => (
                <span key={t} style={{
                  padding: '4px 12px',
                  borderRadius: '6px',
                  background: `${project.color}10`,
                  border: `1px solid ${project.color}25`,
                  fontSize: '12px',
                  color: project.color,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: '500',
                }}>{t}</span>
              ))}
            </div>

            {/* Features */}
            <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>
              Key Features
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {project.features.map((f) => (
                <li key={f} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '14px', color: 'var(--text-secondary)' }}>
                  <ArrowRight size={14} style={{ color: project.color, marginTop: '3px', flexShrink: 0 }} />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Metrics */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {project.metrics.map((m) => (
                <div key={m.label} className="card-glass" style={{ padding: '20px', textAlign: 'center' }}>
                  <div style={{ fontSize: '28px', fontWeight: '800', color: project.color, letterSpacing: '-1px', marginBottom: '4px' }}>{m.value}</div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: '1.4' }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* Architecture */}
            <div className="card-glass" style={{ padding: '24px', flex: 1 }}>
              <h4 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-secondary)', marginBottom: '20px', letterSpacing: '-0.3px' }}>
                System Architecture
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', justifyContent: 'center' }}>
                {project.architecture.map((step, i) => (
                  <span key={i} style={{
                    padding: step === '→' ? '0 4px' : '8px 14px',
                    borderRadius: step === '→' ? '0' : '8px',
                    background: step === '→' ? 'transparent' : `${project.color}10`,
                    border: step === '→' ? 'none' : `1px solid ${project.color}25`,
                    fontSize: step === '→' ? '16px' : '12px',
                    color: step === '→' ? 'var(--text-muted)' : project.color,
                    fontWeight: step === '→' ? '400' : '600',
                    fontFamily: step !== '→' ? "'JetBrains Mono', monospace" : 'inherit',
                    whiteSpace: 'nowrap',
                  }}>
                    {step}
                  </span>
                ))}
              </div>

              {/* Diagram visual */}
              <div style={{
                marginTop: '24px',
                padding: '20px',
                borderRadius: '12px',
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid var(--border)',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '12px',
                color: 'var(--text-muted)',
                lineHeight: '1.8',
              }}>
                <div style={{ color: project.color, marginBottom: '8px' }}>{'// System Overview'}</div>
                <div>{'┌─ Input Layer ──────────────┐'}</div>
                <div>{'│  Documents / Queries / Data  │'}</div>
                <div>{'└───────────┬────────────────┘'}</div>
                <div>{'           ▼'}</div>
                <div>{'┌─ Processing Engine ─────────┐'}</div>
                <div style={{ color: project.color }}>{'│  [AI Core] ← Retrieved Ctx  │'}</div>
                <div>{'└───────────┬────────────────┘'}</div>
                <div>{'           ▼'}</div>
                <div style={{ color: '#10b981' }}>{'✓ Structured Output → Action'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .project-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
