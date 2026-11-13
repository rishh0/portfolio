import { profile } from "@/lib/data";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";
import { Container, externalLinkProps } from "./ui";
import { Year } from "./Year";

const links = [
  { href: profile.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: profile.github, label: "GitHub", Icon: GithubIcon },
  { href: profile.x, label: "X (Twitter)", Icon: XIcon },
];

export function Footer() {
  return (
    <footer className="border-t border-line/70 py-10">
      <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-fg">Rishabh Yadav</p>
          <p className="mt-1 text-xs text-subtle">
            © <Year /> · Designed and built with Next.js. Thanks for scrolling.
          </p>
        </div>
        <ul className="flex items-center gap-1" aria-label="Social profiles">
          {links.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                {...externalLinkProps}
                aria-label={label}
                className="grid size-9 place-items-center rounded-lg text-subtle transition-colors hover:bg-card hover:text-fg"
              >
                <Icon size={16} />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
