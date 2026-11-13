import {
  Activity,
  Brain,
  ClipboardCheck,
  Cpu,
  Database,
  FileSearch,
  Gauge,
  Globe,
  MessageSquareText,
  MonitorSmartphone,
  Network,
  ScanSearch,
  type LucideIcon,
} from "lucide-react";
import {
  siAxios,
  siCss,
  siFastapi,
  siFigma,
  siGit,
  siGithub,
  siHtml5,
  siHuggingface,
  siJavascript,
  siLangchain,
  siLanggraph,
  siMui,
  siNextdotjs,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siPytest,
  siPython,
  siRazorpay,
  siReact,
  siReacthookform,
  siRedux,
  siRender,
  siSqlite,
  siTailwindcss,
  siTypescript,
  siVercel,
  siZod,
  type SimpleIcon,
} from "simple-icons";

// Brand logos from Simple Icons; concepts without a logo get a neutral Lucide icon.
const brand: Record<string, SimpleIcon> = {
  "JavaScript (ES6+)": siJavascript,
  TypeScript: siTypescript,
  Python: siPython,
  HTML5: siHtml5,
  CSS3: siCss,
  "React.js": siReact,
  React: siReact,
  "Next.js": siNextdotjs,
  Redux: siRedux,
  "React Hook Form": siReacthookform,
  "Tailwind CSS": siTailwindcss,
  "Material UI": siMui,
  "Node.js": siNodedotjs,
  FastAPI: siFastapi,
  Prisma: siPrisma,
  PostgreSQL: siPostgresql,
  Axios: siAxios,
  Zod: siZod,
  LangChain: siLangchain,
  LangGraph: siLanggraph,
  "Hugging Face": siHuggingface,
  "Hugging Face Embeddings": siHuggingface,
  Git: siGit,
  GitHub: siGithub,
  pytest: siPytest,
  Render: siRender,
  Vercel: siVercel,
  "Figma-to-Code": siFigma,
  "Razorpay Integration": siRazorpay,
  SQLite: siSqlite,
};

const generic: Record<string, LucideIcon> = {
  SQL: Database,
  "Responsive & Accessible UI": MonitorSmartphone,
  "REST APIs": Network,
  LLMs: Brain,
  "Prompt Engineering": MessageSquareText,
  RAG: FileSearch,
  FAISS: ScanSearch,
  Groq: Cpu,
  Tavily: Globe,
  "Streaming Responses": Activity,
  "LLM Evaluation": ClipboardCheck,
  "Performance Optimization": Gauge,
};

/** Brand colours that would vanish on the dark background are swapped for light grey. */
function readableColor(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => {
    const c = parseInt(hex.slice(i, i + 2), 16) / 255;
    return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.06 ? "#d4d4d8" : `#${hex}`;
}

function TechIcon({ name }: { name: string }) {
  const key = name.replace(/\s+\d+(\.\d+)*$/, ""); // "Next.js 15" -> "Next.js"
  const logo = brand[key];
  if (logo) {
    return (
      <svg viewBox="0 0 24 24" width={13} height={13} aria-hidden="true" fill={readableColor(logo.hex)} className="shrink-0">
        <path d={logo.path} />
      </svg>
    );
  }
  const Icon = generic[key];
  return Icon ? <Icon size={13} aria-hidden="true" className="shrink-0 text-subtle" /> : null;
}

export function TechTag({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-2.5 py-1.5 font-mono text-[12px] leading-none text-muted transition-colors hover:border-line-strong hover:text-fg">
      <TechIcon name={name} />
      {name}
    </span>
  );
}
