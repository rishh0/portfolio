import Image from "next/image";
import { ArrowUpRight, Check, MonitorOff, Terminal } from "lucide-react";
import { featuredProjects, projects, type FeaturedProject, type Project } from "@/lib/data";
import { GithubIcon } from "./icons";
import { TechTag } from "./TechTag";
import { Section, buttonStyles, externalLinkProps } from "./ui";

const hostOf = (url: string) => new URL(url).host;

/** Where a preview click goes: the live site, or the repo for local-only projects. */
const primaryHref = (p: Project) => p.live ?? p.github ?? "#projects";

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
  const address = project.live ? hostOf(project.live) : "localhost:3000";
  return (
    <a
      href={primaryHref(project)}
      {...externalLinkProps}
      aria-label={
        project.live
          ? `${address}: open ${project.name} live site in a new tab`
          : `${address}: open ${project.name} source code on GitHub`
      }
      className={`${className} group block overflow-hidden rounded-xl border border-line bg-bg shadow-[0_20px_60px_-30px_rgb(0_0_0/0.9)] transition-colors hover:border-line-strong`}
    >
      <div className="flex items-center gap-3 border-b border-line bg-surface px-3.5 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
        </div>
        <div className="min-w-0 flex-1 truncate rounded-md bg-bg px-3 py-1 text-center font-mono text-[11px] text-subtle">
          {address}
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
    <div className="flex flex-wrap items-center gap-2">
      {project.live ? (
        <>
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
        </>
      ) : (
        project.github && (
          <>
            <a href={project.github} {...externalLinkProps} className={buttonStyles.small}>
              <GithubIcon size={15} />
              View Code
            </a>
            {project.note && (
              <span className="inline-flex items-center gap-1.5 px-2 text-xs text-subtle">
                <Terminal size={13} aria-hidden="true" />
                {project.note}
              </span>
            )}
          </>
        )
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
          <TechTag name={s} />
        </li>
      ))}
    </ul>
  );
}

function FeaturedCard({ project, index }: { project: FeaturedProject; index: number }) {
  const flip = index % 2 === 1;
  return (
    <article className="rounded-2xl border border-line bg-surface p-4 sm:p-6 lg:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
        <BrowserFrame
          project={project}
          priority={index === 0}
          className={`self-center ${flip ? "lg:order-2" : ""}`}
          sizes="(min-width: 1024px) 620px, 100vw"
        />

        <div className={`flex flex-col ${flip ? "lg:order-1" : ""}`}>
          <p className="font-mono text-xs tracking-wider text-accent uppercase">{project.label}</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-fg">{project.name}</h3>
          <p className="mt-3 leading-relaxed text-muted">{project.description}</p>

          <dl className="mt-6 grid grid-cols-3 overflow-hidden rounded-xl border border-line">
            {project.stats.map((s, i) => (
              <div key={s.label} className={`bg-bg px-3 py-3.5 ${i > 0 ? "border-l border-line" : ""}`}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-xl font-semibold tracking-tight whitespace-nowrap text-fg">{s.value}</dd>
                <dd className="mt-0.5 text-[11px] leading-tight text-subtle">{s.label}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-2 text-xs text-subtle">{project.statsNote}</p>

          <div className="mt-6 flex-1">
            <Highlights items={project.highlights} />
          </div>

          <div className="mt-6 space-y-5">
            <Stack items={project.stack} />
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" index="03" label="Projects" title="Selected work, shipped and running.">
      <div className="space-y-6">
        {featuredProjects.map((p, i) => (
          <FeaturedCard key={p.name} project={p} index={i} />
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className="flex flex-col rounded-2xl border border-line bg-surface p-4 sm:p-6">
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
