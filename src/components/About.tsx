import { Section } from "./ui";

const principles = [
  { title: "Ship real things", body: "Deployed, working software beats a polished mockup." },
  { title: "AI you can trust", body: "Grounded answers, cited sources, and honest refusals." },
  { title: "UX is engineering", body: "Responsive, accessible interfaces are part of the job." },
];

export function About() {
  return (
    <Section id="about" index="01" label="About" title="Engineer by training, product builder by habit.">
      <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-pretty text-muted">
          <p>
            I&apos;m a full-stack developer who enjoys the whole path from idea to deployed product. Most of my
            work lives in <span className="text-fg">React, Next.js and TypeScript</span> on the frontend, with{" "}
            <span className="text-fg">Node.js, FastAPI and PostgreSQL</span> behind it.
          </p>
          <p>
            Frontend is where I spend a lot of my attention: clean component structure, fast pages and interfaces
            that feel obvious to use. At Fooddle I built mobile-first browsing flows for a platform with more than
            20,000 monthly users.
          </p>
          <p>
            More recently I&apos;ve been bringing <span className="text-fg">Generative AI</span> into practical
            products, including RAG pipelines, streaming responses, structured LLM output and evaluating whether
            the model is actually right.
          </p>
        </div>

        <ul className="space-y-3">
          {principles.map((p, i) => (
            <li key={p.title} className="rounded-xl border border-line bg-surface p-5">
              <p className="flex items-baseline gap-3">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <span className="font-medium text-fg">{p.title}</span>
              </p>
              <p className="mt-1.5 pl-7 text-sm text-muted">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
