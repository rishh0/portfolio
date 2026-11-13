import { ArrowUpRight, Mail } from "lucide-react";
import type { ComponentType } from "react";
import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";
import { Section, buttonStyles, externalLinkProps } from "./ui";

type Channel = {
  label: string;
  value: string;
  href: string;
  Icon: ComponentType<{ size?: number; className?: string }>;
  external?: boolean;
};

const channels: Channel[] = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "LinkedIn", value: "in/rishabhyadavv01", href: profile.linkedin, Icon: LinkedinIcon, external: true },
  { label: "GitHub", value: "rishh0", href: profile.github, Icon: GithubIcon, external: true },
  { label: "X", value: "@rishxbh_yadav", href: profile.x, Icon: XIcon, external: true },
];

export function Contact() {
  return (
    <Section id="contact" index="05" label="Contact" title="Have an interesting project or opportunity? Let's connect.">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <p className="max-w-md text-lg leading-relaxed text-muted">
            I&apos;m open to full-stack and AI engineering roles, and happy to talk through product ideas. Email is
            the fastest way to reach me.
          </p>
          <a href={`mailto:${profile.email}`} className={`${buttonStyles.primary} mt-8`}>
            <Mail size={16} aria-hidden="true" />
            Send an email
          </a>
        </div>

        <ul className="overflow-hidden rounded-2xl border border-line">
          {channels.map(({ label, value, href, Icon, external }, i) => (
            <li key={label} className={i > 0 ? "border-t border-line" : ""}>
              <a
                href={href}
                {...(external ? externalLinkProps : {})}
                className="group flex items-center gap-4 bg-surface px-5 py-4 transition-colors hover:bg-card sm:px-6"
              >
                <Icon size={17} className="shrink-0 text-subtle transition-colors group-hover:text-accent" />
                <span className="w-20 shrink-0 font-mono text-xs text-subtle uppercase">{label}</span>
                <span className="min-w-0 flex-1 truncate text-sm text-fg">{value}</span>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="shrink-0 text-line-strong transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
