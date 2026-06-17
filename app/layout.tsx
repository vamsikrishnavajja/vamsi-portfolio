import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vamsi Vajja | Senior AI/ML Engineer | Generative AI & Agentic AI Expert",
  description: "8+ years building enterprise AI systems. Expert in Generative AI, Agentic AI, LLMs, RAG, Multi-Agent Systems, MLOps. Available for C2C opportunities.",
  keywords: [
    "Senior AI Engineer", "Generative AI Engineer", "AI Architect",
    "Machine Learning Engineer", "Agentic AI Engineer", "RAG Engineer",
    "LLM Engineer", "MLOps Engineer", "LangChain", "LangGraph",
    "OpenAI", "Anthropic Claude", "Enterprise AI", "Vamsi Vajja"
  ],
  authors: [{ name: "Vamsi Vajja" }],
  creator: "Vamsi Vajja",
  openGraph: {
    type: "website",
    title: "Vamsi Vajja | Senior AI/ML Engineer",
    description: "8+ years building enterprise AI systems. Generative AI, Agentic AI, LLMs, RAG, MLOps.",
    siteName: "Vamsi Vajja Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vamsi Vajja | Senior AI/ML Engineer",
    description: "8+ years building enterprise AI systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#050508" />
      </head>
      <body>{children}</body>
    </html>
  );
}
