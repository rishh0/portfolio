import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";
import { Container, buttonStyles, externalLinkProps } from "./ui";

const socials = [
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: profile.github, label: "GitHub", Icon: GithubIcon },
  { href: profile.x, label: "X (Twitter)", Icon: XIcon },
];

const snapshot = [
  { k: "Focus", v: "Full-stack products · GenAI · AI agents" },
  { k: "Frontend", v: "React, Next.js, TypeScript, Tailwind" },
  { k: "Backend", v: "Node.js, FastAPI, Prisma, PostgreSQL" },
  { k: "AI", v: "RAG, LangChain, LangGraph, LLM evals" },
];

export function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]"
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/80 py-1 pr-3 pl-2.5 text-xs text-muted">
            <span className="relative flex size-2">
              <span className="animate-pulse-dot absolute inline-flex size-full rounded-full bg-ok/60" />
              <span className="relative inline-flex size-2 rounded-full bg-ok" />
            </span>
            Open to new opportunities
          </p>

          <h1 className="mt-7 text-5xl font-semibold tracking-[-0.035em] text-fg sm:text-6xl lg:text-7xl">
            Rishabh Yadav
          </h1>
          <p className="mt-4 font-mono text-sm tracking-wide text-accent-soft sm:text-base">
            Full-Stack &amp; AI Engineer
          </p>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-pretty text-muted">
            I build software people actually use, from polished web interfaces to AI features that cite their
            sources and know when not to answer.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projects" className={buttonStyles.primary}>
              Explore My Work
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a href="#contact" className={buttonStyles.secondary}>
              <Mail size={16} aria-hidden="true" />
              Get In Touch
            </a>
          </div>

          <ul className="mt-10 flex items-center gap-1" aria-label="Social profiles">
            {socials.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  {...externalLinkProps}
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-lg text-subtle transition-colors hover:bg-card hover:text-fg"
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Snapshot card: a compact, factual summary instead of an illustration */}
        <aside
          aria-label="At a glance"
          className="relative rounded-2xl border border-line bg-surface/90 shadow-[0_24px_80px_-32px_rgb(0_0_0/0.8)] backdrop-blur-sm"
        >
          <div className="flex items-center justify-between border-b border-line px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-lg border border-line-strong bg-card font-mono text-sm font-semibold">
                RY
              </span>
              <div>
                <p className="text-sm font-medium text-fg">At a glance</p>
                <p className="text-xs text-subtle">What I work on</p>
              </div>
            </div>
          </div>

          <dl className="divide-y divide-line/70 px-6">
            {snapshot.map((row) => (
              <div key={row.k} className="grid grid-cols-[88px_1fr] gap-4 py-3.5 text-sm">
                <dt className="font-mono text-xs leading-5 text-subtle uppercase">{row.k}</dt>
                <dd className="text-muted">{row.v}</dd>
              </div>
            ))}
          </dl>

          <a
            href="#projects"
            className="group m-3 mt-1 flex items-center justify-between rounded-xl border border-line bg-card px-4 py-3.5 transition-colors hover:border-line-strong hover:bg-card-hover"
          >
            <div>
              <p className="font-mono text-[11px] tracking-wider text-subtle uppercase">Latest build</p>
              <p className="mt-1 text-sm font-medium text-fg">Recall · AI agent</p>
              <p className="mt-0.5 text-xs text-muted">Memory across chats · 38/38 eval checks</p>
            </div>
            <ArrowUpRight
              size={18}
              aria-hidden="true"
              className="text-subtle transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
            />
          </a>
        </aside>
      </Container>
    </section>
  );
}
