import { Braces, Code2, Database, Sparkles, Wrench, type LucideIcon } from "lucide-react";
import { skills } from "@/lib/data";
import { Section } from "./ui";
import { TechTag } from "./TechTag";

const icons: Record<string, LucideIcon> = {
  Languages: Braces,
  Frontend: Code2,
  "Backend & Database": Database,
  "Generative & Agentic AI": Sparkles,
  "Tools & Practices": Wrench,
};

export function Skills() {
  return (
    <Section id="skills" index="02" label="Skills" title="The toolkit I reach for.">
      <div className="overflow-hidden rounded-2xl border border-line">
        {skills.map((group, i) => {
          const Icon = icons[group.category];
          return (
            <div
              key={group.category}
              className={`grid gap-4 bg-surface p-6 sm:grid-cols-[220px_1fr] sm:gap-8 sm:p-7 ${
                i > 0 ? "border-t border-line" : ""
              } ${group.category === "Generative & Agentic AI" ? "bg-card" : ""}`}
            >
              <h3 className="flex items-center gap-3 text-sm font-medium text-fg">
                <Icon size={16} aria-hidden="true" className="text-accent" />
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2" aria-label={group.category}>
                {group.items.map((item) => (
                  <li key={item}>
                    <TechTag name={item} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
