import { ArrowUpRight, Check, Code, FileSearch, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { Section, buttonStyles } from "./ui";

const offers = [
  {
    Icon: FileSearch,
    title: "An AI assistant over your documents",
    description:
      "A web app that answers questions from your own documents with cited sources, and says so when the documents don't cover the question.",
    points: [
      "Built with retrieval-augmented generation (LangChain, FastAPI)",
      "Tested on a set of real questions from you, so you can see how often it is right",
      "Deployed and handed over with notes you can follow",
    ],
  },
  {
    Icon: Code,
    title: "A fast, clean web app",
    description:
      "Product sites, landing pages and dashboards in Next.js, TypeScript and Tailwind that are responsive, accessible and quick to load.",
    points: [
      "Mobile-first and built with accessibility in mind",
      "Checked with Lighthouse (this site scores 100)",
      "Clean, documented code you can keep building on",
    ],
  },
];

const steps = [
  { title: "A short call", text: "We agree on the problem and on what “done” looks like." },
  { title: "A fixed scope", text: "A written scope, timeline and price before I start." },
  { title: "Build and hand over", text: "Regular demos while I build, then deployed code and notes." },
];

export function WorkWithMe() {
  return (
    <Section id="work-with-me" index="05" label="Work with me" title="Need an AI assistant or a fast web app?">
      <p className="-mt-6 max-w-xl text-lg leading-relaxed text-muted sm:-mt-10">
        Alongside my studies I take on a small number of projects, so each one gets proper attention.
      </p>

      <ul className="mt-10 grid gap-6 md:grid-cols-2">
        {offers.map(({ Icon, title, description, points }) => (
          <li key={title} className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <span className="grid size-10 place-items-center rounded-lg border border-line-strong bg-card text-accent-soft">
              <Icon size={18} aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-xl font-semibold tracking-tight text-fg">{title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{description}</p>
            <ul className="mt-6 space-y-2.5">
              {points.map((p) => (
                <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <Check size={15} aria-hidden="true" className="mt-[3px] shrink-0 text-accent" />
                  {p}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <ol className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
        {steps.map((s, i) => (
          <li key={s.title} className="bg-surface p-6">
            <p className="font-mono text-xs text-accent">0{i + 1}</p>
            <h3 className="mt-3 text-base font-semibold text-fg">{s.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{s.text}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        <a
          href={`mailto:${profile.email}?subject=${encodeURIComponent("Project enquiry")}`}
          className={buttonStyles.primary}
        >
          <Mail size={16} aria-hidden="true" />
          Tell me about your project
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <p className="text-sm text-subtle">
          My own document assistant: 0 hallucinated answers on a 20-question test.
        </p>
      </div>
    </Section>
  );
}
