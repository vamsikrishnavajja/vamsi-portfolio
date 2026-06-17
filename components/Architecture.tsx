'use client';

import { useState } from 'react';

const layers = [
  {
    id: 'llm',
    label: 'LLM Layer',
    icon: '🧠',
    color: '#4f8eff',
    y: 0,
    description: 'The intelligence core — frontier and open-source language models serving different latency, cost, and capability needs.',
    components: ['GPT-4o', 'Claude 3.5 Sonnet', 'Llama 3.1 70B', 'Mistral Large', 'Gemini Pro'],
    details: 'Model selection, fine-tuning strategy, context management, token optimization, and multi-model routing based on task complexity and cost.',
  },
  {
    id: 'agent',
    label: 'Agent Layer',
    icon: '🤖',
    color: '#8b5cf6',
    y: 1,
    description: 'Orchestration and reasoning — autonomous agents that plan, use tools, and collaborate to complete complex tasks.',
    components: ['LangGraph Supervisors', 'CrewAI Specialists', 'Tool Executors', 'Memory Managers', 'HITL Controllers'],
    details: 'Agent graph design, role specialization, inter-agent communication, persistent memory (episodic, semantic, procedural), and human-in-the-loop interrupts.',
  },
  {
    id: 'rag',
    label: 'RAG Layer',
    icon: '📚',
    color: '#22d3ee',
    y: 2,
    description: 'Knowledge grounding — retrieval pipelines that pull real-time context to reduce hallucinations and improve factual accuracy.',
    components: ['Hybrid Retriever', 'Re-ranker (Cohere)', 'Query Rewriter', 'Chunk Optimizer', 'Citation Verifier'],
    details: 'Dense retrieval (bi-encoder), sparse retrieval (BM25), late fusion, re-ranking, contextual compression, and answer faithfulness verification.',
  },
  {
    id: 'vector',
    label: 'Vector Database',
    icon: '🗄️',
    color: '#10b981',
    y: 3,
    description: 'Semantic storage — high-dimensional embedding indices that enable similarity search across millions of documents at millisecond latency.',
    components: ['Pinecone', 'Weaviate', 'pgvector', 'Redis Vector', 'Chroma'],
    details: 'Index design, namespace architecture, metadata filtering, HNSW vs. flat index trade-offs, sharding, and real-time update pipelines.',
  },
  {
    id: 'mlops',
    label: 'MLOps Layer',
    icon: '⚙️',
    color: '#f59e0b',
    y: 4,
    description: 'Lifecycle automation — pipelines, registries, and monitoring systems that keep models healthy in production.',
    components: ['MLflow', 'Weights & Biases', 'Airflow', 'Evidently AI', 'Prometheus / Grafana'],
    details: 'Experiment tracking, model versioning, drift detection, automated retraining triggers, A/B testing, canary deployments, and SLA monitoring.',
  },
  {
    id: 'cloud',
    label: 'Cloud Infrastructure',
    icon: '☁️',
    color: '#ec4899',
    y: 5,
    description: 'The foundation — managed cloud services providing compute, storage, and networking for AI workloads at scale.',
    components: ['AWS SageMaker', 'AWS Bedrock', 'GCP Vertex AI', 'Kubernetes (EKS)', 'Terraform IaC'],
    details: 'Multi-cloud strategy, spot instance optimization, auto-scaling, VPC design, IAM for AI services, cost governance, and disaster recovery.',
  },
];

export default function Architecture() {
  const [activeLayer, setActiveLayer] = useState(layers[0].id);
  const active = layers.find((l) => l.id === activeLayer)!;

  return (
    <section id="architecture" style={{ padding: '120px 0', borderTop: '1px solid var(--border)' }}>
      <div className="section-container">
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{ width: '40px', height: '2px', background: 'var(--gradient-1)' }} />
            <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--accent-blue)', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Technical Expertise
            </span>
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: '800', letterSpacing: '-1.5px', lineHeight: '1.15', marginBottom: '16px' }}>
            Enterprise AI Architecture{' '}
            <span className="text-gradient">Layer by Layer</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', maxWidth: '560px', lineHeight: '1.7' }}>
            Click any layer to explore the technologies and engineering decisions inside each tier.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 3fr', gap: '40px', alignItems: 'start' }} className="arch-grid">
          {/* Left: Stack Visualization */}
          <div>
            <div style={{ position: 'relative' }}>
              {/* Connection lines */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '30px',
                bottom: '30px',
                width: '2px',
                background: 'linear-gradient(to bottom, rgba(79,142,255,0.4), rgba(236,72,153,0.4))',
                transform: 'translateX(-50%)',
                zIndex: 0,
              }} />

              {layers.map((layer, i) => (
                <div
                  key={layer.id}
                  onClick={() => setActiveLayer(layer.id)}
                  style={{
                    position: 'relative',
                    zIndex: 1,
                    marginBottom: i < layers.length - 1 ? '12px' : 0,
                    padding: '16px 20px',
                    borderRadius: '14px',
                    border: `1px solid ${activeLayer === layer.id ? layer.color + '60' : 'var(--border)'}`,
                    background: activeLayer === layer.id ? `${layer.color}12` : 'var(--bg-card)',
                    cursor: 'pointer',
                    transition: 'all 0.25s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    boxShadow: activeLayer === layer.id ? `0 4px 20px ${layer.color}15` : 'none',
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: `${layer.color}15`,
                    border: `1px solid ${layer.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '20px',
                    flexShrink: 0,
                  }}>
                    {layer.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: '700', color: activeLayer === layer.id ? 'var(--text-primary)' : 'var(--text-secondary)', letterSpacing: '-0.3px' }}>
                      {layer.label}
                    </div>
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {layer.components.slice(0, 2).join(' · ')} +{layer.components.length - 2}
                    </div>
                  </div>
                  {activeLayer === layer.id && (
                    <div style={{
                      marginLeft: 'auto',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: layer.color,
                      boxShadow: `0 0 8px ${layer.color}`,
                    }} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Detail Panel */}
          <div className="card-glass" style={{ padding: '36px', borderLeft: `3px solid ${active.color}` }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: `${active.color}15`,
                border: `1px solid ${active.color}30`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
              }}>
                {active.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '22px', fontWeight: '800', letterSpacing: '-0.5px' }}>{active.label}</h3>
                <p style={{ fontSize: '13px', color: active.color, marginTop: '2px', fontWeight: '500' }}>
                  {active.components.length} technologies mastered
                </p>
              </div>
            </div>

            <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.75', marginBottom: '24px' }}>
              {active.description}
            </p>

            {/* Technologies */}
            <div style={{ marginBottom: '28px' }}>
              <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>
                Technologies
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {active.components.map((comp) => (
                  <span key={comp} style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: `${active.color}10`,
                    border: `1px solid ${active.color}25`,
                    fontSize: '13px',
                    color: active.color,
                    fontWeight: '600',
                  }}>
                    {comp}
                  </span>
                ))}
              </div>
            </div>

            {/* Engineering Depth */}
            <div>
              <h4 style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '12px' }}>
                Engineering Depth
              </h4>
              <div style={{
                padding: '16px',
                borderRadius: '10px',
                background: 'rgba(0,0,0,0.3)',
                border: '1px solid var(--border)',
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: '1.7',
              }}>
                {active.details}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .arch-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
