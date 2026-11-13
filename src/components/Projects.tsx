import Image from "next/image";
import { ArrowUpRight, Check, MonitorOff } from "lucide-react";
import { evalStats, featuredProject, projects, type Project } from "@/lib/data";
import { GithubIcon } from "./icons";
import { Section, Tag, buttonStyles, externalLinkProps } from "./ui";

const hostOf = (url: string) => new URL(url).host;

function BrowserFrame({
  project,
  priority = false,
  sizes,
  className = "",
}: {
  project: Project;
  priority?: boolean;
  sizes: string;
  className?: string;
}) {
  return (
    <a
      href={project.live}
      {...externalLinkProps}
      aria-label={`Open ${project.name} live site in a new tab`}
      className={`${className} group block overflow-hidden rounded-xl border border-line bg-bg shadow-[0_20px_60px_-30px_rgb(0_0_0/0.9)] transition-colors hover:border-line-strong`}
    >
      <div className="flex items-center gap-3 border-b border-line bg-surface px-3.5 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-md bg-bg px-3 py-1 text-center font-mono text-[11px] text-subtle">
          {hostOf(project.live)}
        </div>
        <ArrowUpRight
          size={14}
          aria-hidden="true"
          className="shrink-0 text-subtle transition-colors group-hover:text-fg"
        />
      </div>

      <div className="relative aspect-[16/10] overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.imageAlt ?? `${project.name} screenshot`}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]"
          />
        ) : (
          <div className="grid size-full place-items-center bg-[radial-gradient(circle_at_50%_40%,#1c1e22,#111214_70%)]">
            <div className="text-center">
              <MonitorOff size={28} aria-hidden="true" className="mx-auto text-subtle" />
              <p className="mt-3 font-mono text-xs text-subtle">{project.note ?? "Preview unavailable"}</p>
            </div>
          </div>
        )}
      </div>
    </a>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      <a href={project.live} {...externalLinkProps} className={buttonStyles.small}>
        Live Demo
        <ArrowUpRight size={15} aria-hidden="true" />
      </a>
      {project.github && (
        <a href={project.github} {...externalLinkProps} className={buttonStyles.ghost}>
          <GithubIcon size={15} />
          Source
        </a>
      )}
    </div>
  );
}

function Highlights({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((h) => (
        <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
          <Check size={15} aria-hidden="true" className="mt-[3px] shrink-0 text-accent" />
          {h}
        </li>
      ))}
    </ul>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Technology stack">
      {items.map((s) => (
        <li key={s}>
          <Tag>{s}</Tag>
        </li>
      ))}
    </ul>
  );
}

export function Projects() {
  const p = featuredProject;
  return (
    <Section id="projects" index="03" label="Projects" title="Selected work, all live.">
      {/* Featured */}
      <article className="rounded-2xl border border-line bg-surface p-4 sm:p-6 lg:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
          <BrowserFrame project={p} priority className="self-center" sizes="(min-width: 1024px) 620px, 100vw" />

          <div className="flex flex-col">
            <p className="font-mono text-xs tracking-wider text-accent uppercase">Featured · End-to-end AI</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-fg">{p.name}</h3>
            <p className="mt-3 leading-relaxed text-muted">{p.description}</p>

            <dl className="mt-6 grid grid-cols-3 overflow-hidden rounded-xl border border-line">
              {evalStats.map((s, i) => (
                <div key={s.label} className={`bg-bg px-3 py-3.5 ${i > 0 ? "border-l border-line" : ""}`}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-xl font-semibold tracking-tight text-fg">{s.value}</dd>
                  <dd className="mt-0.5 text-[11px] leading-tight text-subtle">{s.label}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-2 text-xs text-subtle">Results on a 20-question evaluation set.</p>

            <div className="mt-6 flex-1">
              <Highlights items={p.highlights} />
            </div>

            <div className="mt-6 space-y-5">
              <Stack items={p.stack} />
              <ProjectLinks project={p} />
            </div>
          </div>
        </div>
      </article>

      {/* Others */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col rounded-2xl border border-line bg-surface p-4 sm:p-6"
          >
            <BrowserFrame project={project} sizes="(min-width: 768px) 520px, 100vw" />
            <div className="mt-6 flex flex-1 flex-col">
              <p className="font-mono text-xs tracking-wider text-subtle uppercase">{project.tagline}</p>
              <h3 className="mt-2 text-xl font-semibold tracking-tight text-fg">{project.name}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">{project.description}</p>
              <div className="mt-5 flex-1">
                <Highlights items={project.highlights} />
              </div>
              <div className="mt-6 space-y-5">
                <Stack items={project.stack} />
                <ProjectLinks project={project} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
