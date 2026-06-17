'use client';

import { useState } from 'react';

const skillCategories = [
  {
    id: 'genai',
    label: 'Generative AI',
    icon: '🤖',
    color: '#4f8eff',
    skills: [
      { name: 'LLM Architecture & Fine-tuning', level: 95 },
      { name: 'Prompt Engineering', level: 97 },
      { name: 'RAG Systems', level: 96 },
      { name: 'Anthropic Claude (AWS Bedrock)', level: 95 },
      { name: 'Hugging Face Transformers', level: 88 },
      { name: 'vLLM / LlamaIndex', level: 85 },
    ],
  },
  {
    id: 'agentic',
    label: 'Agentic AI',
    icon: '🕸️',
    color: '#8b5cf6',
    skills: [
      { name: 'Multi-Agent Systems', level: 94 },
      { name: 'LangGraph (Agentic AI)', level: 96 },
      { name: 'LangChain', level: 95 },
      { name: 'MCP / FastMCP', level: 88 },
      { name: 'Tool Use & Function Calling', level: 95 },
      { name: 'Human-in-the-Loop Workflows', level: 88 },
    ],
  },
  {
    id: 'ml',
    label: 'Machine Learning',
    icon: '📈',
    color: '#22d3ee',
    skills: [
      { name: 'Deep Learning (PyTorch / TF)', level: 90 },
      { name: 'NLP & Text Analytics', level: 93 },
      { name: 'Time Series Forecasting', level: 88 },
      { name: 'Recommendation Systems', level: 85 },
      { name: 'XGBoost / LightGBM', level: 90 },
      { name: 'Statistical Modeling', level: 87 },
    ],
  },
  {
    id: 'mlops',
    label: 'Cloud & MLOps',
    icon: '☁️',
    color: '#10b981',
    skills: [
      { name: 'AWS (SageMaker, Bedrock, Lambda)', level: 92 },
      { name: 'GCP (Vertex AI, BigQuery)', level: 85 },
      { name: 'Azure (Cognitive Services, ADF)', level: 83 },
      { name: 'Docker & Kubernetes', level: 88 },
      { name: 'CI/CD for ML Pipelines', level: 90 },
      { name: 'MLflow / Weights & Biases', level: 87 },
    ],
  },
  {
    id: 'data',
    label: 'Data & Vector',
    icon: '🗄️',
    color: '#f59e0b',
    skills: [
      { name: 'Vector DBs (Pinecone, FAISS, ChromaDB)', level: 93 },
      { name: 'Python / SQL', level: 97 },
      { name: 'Apache Spark / PySpark', level: 85 },
      { name: 'Embeddings & Semantic Search', level: 94 },
      { name: 'Kafka / Redis Streams', level: 88 },
      { name: 'FastAPI / REST APIs', level: 90 },
    ],
  },
];

const techBadges = [
  'Python', 'PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost', 'LightGBM',
  'LangChain', 'LangGraph', 'LlamaIndex', 'vLLM',
  'AWS Bedrock', 'AWS SageMaker', 'AWS Lambda', 'GCP Vertex AI', 'BigQuery',
  'Azure Cognitive Services', 'Databricks',
  'Pinecone', 'FAISS', 'ChromaDB', 'Amazon OpenSearch',
  'MySQL', 'MongoDB Atlas', 'DynamoDB', 'Redis',
  'Apache Kafka', 'Apache Spark', 'Apache Airflow', 'Apache Flink',
  'FastAPI', 'Flask', 'Docker', 'Kubernetes',
  'MLflow', 'DVC', 'Weights & Biases', 'Arize AI',
  'Prometheus', 'Grafana', 'LangSmith', 'TruLens',
  'GitHub Actions', 'Azure DevOps', 'Terraform',
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('genai');
  const active = skillCategories.find((c) => c.id === activeCategory)!;

  return (
    <section id="skills" style={{ padding: '120px 0', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="section-container">
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--gradient-1)' }} />
            <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Skills & Expertise
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '800', letterSpacing: '-1.5px', lineHeight: '1.15', marginBottom: '16px' }}>
            Deep Expertise Across the{' '}
            <span className="text-gradient-cyan">Full AI Stack</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', maxWidth: '560px', lineHeight: '1.7' }}>
            From research to production, proficiency built through years of enterprise delivery.
          </p>
        </div>

        {/* Category Tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '48px' }}>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                border: `1px solid ${activeCategory === cat.id ? cat.color + '60' : 'var(--border)'}`,
                background: activeCategory === cat.id ? `${cat.color}15` : 'transparent',
                color: activeCategory === cat.id ? cat.color : 'var(--text-secondary)',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '72px' }} className="skills-grid">
          {/* Skill Bars */}
          <div className="card-glass" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '10px', letterSpacing: '-0.5px' }}>
              <span style={{ fontSize: '24px' }}>{active.icon}</span>
              {active.label}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {active.skills.map((skill) => (
                <div key={skill.name}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-primary)' }}>{skill.name}</span>
                    <span style={{ fontSize: '13px', fontWeight: '700', color: active.color }}>{skill.level}%</span>
                  </div>
                  <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div
                      className="skill-bar-fill"
                      style={{
                        width: `${skill.level}%`,
                        background: `linear-gradient(90deg, ${active.color}, ${active.color}bb)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Proficiency Overview */}
          <div className="card-glass" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '28px', letterSpacing: '-0.5px' }}>
              Proficiency Overview
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', flex: 1 }}>
              {active.skills.map((skill) => (
                <div key={skill.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                  <div style={{ position: 'relative', width: '64px', height: '64px' }}>
                    <svg width="64" height="64" viewBox="0 0 64 64">
                      <circle cx="32" cy="32" r="28" fill="none" stroke="var(--border)" strokeWidth="4" />
                      <circle
                        cx="32" cy="32" r="28"
                        fill="none"
                        stroke={active.color}
                        strokeWidth="4"
                        strokeDasharray={`${(skill.level / 100) * 175.9} 175.9`}
                        strokeLinecap="round"
                        transform="rotate(-90 32 32)"
                        style={{ transition: 'stroke-dasharray 1s ease' }}
                      />
                    </svg>
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: active.color,
                    }}>
                      {skill.level}
                    </div>
                  </div>
                  <span style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', lineHeight: '1.4' }}>
                    {skill.name.split('(')[0].trim()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Badges */}
        <div>
          <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '20px', color: 'var(--text-secondary)', letterSpacing: '-0.3px' }}>
            Technologies & Tools
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {techBadges.map((tech, i) => (
              <div
                key={tech}
                style={{
                  padding: '8px 16px',
                  borderRadius: '8px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  fontSize: '13px',
                  fontWeight: '500',
                  color: 'var(--text-secondary)',
                  transition: 'all 0.2s',
                  cursor: 'default',
                  animationDelay: `${i * 0.05}s`,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.borderColor = 'var(--accent-blue)';
                  (e.target as HTMLElement).style.color = 'var(--accent-blue)';
                  (e.target as HTMLElement).style.background = 'rgba(79, 142, 255, 0.08)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.borderColor = 'var(--border)';
                  (e.target as HTMLElement).style.color = 'var(--text-secondary)';
                  (e.target as HTMLElement).style.background = 'var(--bg-card)';
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}