import { experience } from "@/lib/data";
import { Section } from "./ui";

export function Experience() {
  return (
    <Section id="experience" index="04" label="Experience" title="Where I've shipped.">
      <ol className="space-y-6">
        {experience.map((job) => (
          <li key={job.company} className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:gap-16">
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-xl font-semibold tracking-tight text-fg">
                    {job.role} <span className="text-subtle">·</span>{" "}
                    <span className="text-accent-soft">{job.company}</span>
                  </h3>
                  <p className="font-mono text-xs text-subtle lg:hidden">{job.period}</p>
                </div>
                <p className="mt-2 text-muted">{job.summary}</p>
                <ul className="mt-6 space-y-2.5">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span aria-hidden="true" className="mt-[9px] h-px w-3 shrink-0 bg-line-strong" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col justify-between gap-6 lg:w-64 lg:items-end">
                <p className="hidden font-mono text-xs text-subtle lg:block">{job.period}</p>
                <div className="w-full">
                  <p className="mb-2 text-xs text-subtle lg:text-right">Product work I contributed to</p>
                  <dl className="grid grid-cols-2 overflow-hidden rounded-xl border border-line">
                    {job.metrics.map((m, i) => (
                      <div key={m.label} className={`bg-bg px-4 py-4 ${i > 0 ? "border-l border-line" : ""}`}>
                        <dt className="sr-only">{m.label}</dt>
                        <dd className="text-2xl font-semibold tracking-tight text-fg">{m.value}</dd>
                        <dd className="mt-0.5 text-xs text-subtle">{m.label}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
