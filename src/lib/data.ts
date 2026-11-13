export const profile = {
  name: "Rishabh Yadav",
  title: "Full-Stack & AI Engineer",
  email: "rishabhyadav1512@gmail.com",
  github: "https://github.com/rishh0",
  linkedin: "https://linkedin.com/in/rishabhyadavv01",
  x: "https://x.com/rishxbh_yadav",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Python", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "Redux",
      "React Hook Form",
      "Tailwind CSS",
      "Material UI",
      "Responsive & Accessible UI",
    ],
  },
  {
    category: "Backend & Database",
    items: ["Node.js", "FastAPI", "Prisma", "PostgreSQL", "REST APIs", "Axios", "Zod"],
  },
  {
    category: "Generative & Agentic AI",
    items: [
      "LLMs",
      "Prompt Engineering",
      "RAG",
      "LangChain",
      "LangGraph",
      "Hugging Face Embeddings",
      "FAISS",
      "Groq",
      "Streaming Responses",
      "LLM Evaluation",
    ],
  },
  {
    category: "Tools & Practices",
    items: [
      "Git",
      "GitHub",
      "pytest",
      "Render",
      "Vercel",
      "Figma-to-Code",
      "Razorpay Integration",
      "Performance Optimization",
    ],
  },
] as const;

export type Project = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  live: string;
  github?: string;
  /** Path in /public, or undefined when no genuine preview is available */
  image?: string;
  imageAlt?: string;
  note?: string;
};

export const featuredProject: Project = {
  name: "SEBI Trading Compliance Assistant",
  tagline: "RAG assistant for Indian traders",
  description:
    "Answers questions about SEBI circulars and F&O taxation with cited sources, and declines anything the documents don't support.",
  highlights: [
    "RAG pipeline built with LangChain, FAISS and sentence-transformer embeddings",
    "Every answer cites its sources; unsupported questions are refused instead of guessed",
    "FastAPI backend with token-streamed responses and session-isolated PDF uploads",
    "Next.js + React frontend on Vercel, API deployed on Render",
  ],
  stack: ["Python", "FastAPI", "LangChain", "FAISS", "Groq", "Hugging Face", "Next.js", "React"],
  live: "https://frontend-omega-six-90.vercel.app/",
  github: "https://github.com/rishh0/sebi-trading-assistant",
  image: "/projects/sebi.jpg",
  imageAlt:
    "SEBI Trading Compliance Assistant answering a question about the peak margin rule, with cited source documents",
};

export const evalStats = [
  { value: "18/20", label: "Fully correct" },
  { value: "2/20", label: "Partially correct" },
  { value: "0", label: "Hallucinated" },
];

export const projects: Project[] = [
  {
    name: "NeuroGauge",
    tagline: "AI psychometric & career-assessment SaaS",
    description:
      "A multi-tenant platform that turns psychometric assessments into AI-generated career reports for students, parents and schools.",
    highlights: [
      "Four role-based dashboards: Student, Parent, School and Admin",
      "AI career reports rendered from schema-enforced, parse-safe output",
      "Batched CSV onboarding and Razorpay billing UI",
      "Report generation kept server-authoritative",
    ],
    stack: ["Next.js 15", "React 19", "TypeScript", "Prisma", "PostgreSQL"],
    live: "https://neurogauge.ritikcrafts.org",
    note: "Live preview temporarily unavailable",
  },
  {
    name: "MentorLabs",
    tagline: "Website for TIET's startup mentorship lab",
    description:
      "The public website for Mentor Labs, a startup mentorship and incubation initiative at TIET, built as part of a team.",
    highlights: [
      "Pages for programs, people, research, events and contact",
      "Landing page with a rotating news carousel and services overview",
      "Member login entry point",
    ],
    stack: ["Next.js", "Tailwind CSS"],
    live: "https://tiet-venturelab.vercel.app/",
    image: "/projects/mentorlabs.jpg",
    imageAlt: "Mentor Labs homepage hero reading 'Where Ideas Meet Opportunity'",
  },
];

export const experience = [
  {
    company: "Fooddle",
    role: "Full Stack Developer",
    period: "Jul 2024 — Nov 2024",
    summary: "Food delivery and discovery platform with 20,000+ monthly active users.",
    points: [
      "Built full-stack product features across the platform",
      "Developed a mobile-first product catalog and restaurant browsing experience",
      "Connected React/Redux interfaces to backend data workflows",
    ],
    metrics: [
      { value: "+25%", label: "engagement time" },
      { value: "+30%", label: "user retention" },
    ],
  },
];
