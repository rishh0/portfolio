import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function Section({
  id,
  index,
  label,
  title,
  children,
  className = "",
}: {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`border-t border-line/70 pt-24 pb-24 sm:pt-28 sm:pb-32 ${className}`}>
      <Container>
        <p className="font-mono text-xs tracking-wider text-subtle uppercase">
          <span className="text-accent">{index}</span>
          <span className="mx-2 text-line-strong">/</span>
          {label}
        </p>
        <h2
          id={`${id}-title`}
          className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-balance text-fg sm:text-4xl"
        >
          {title}
        </h2>
        <div className="mt-12 sm:mt-16">{children}</div>
      </Container>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[12px] leading-none text-muted">
      {children}
    </span>
  );
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors duration-200 whitespace-nowrap";

export const buttonStyles = {
  primary: `${base} h-11 px-5 bg-fg text-bg hover:bg-white`,
  secondary: `${base} h-11 px-5 border border-line-strong text-fg hover:border-subtle hover:bg-card`,
  ghost: `${base} h-9 px-3 text-muted hover:text-fg hover:bg-card`,
  small: `${base} h-9 px-4 border border-line-strong text-fg hover:border-subtle hover:bg-card`,
};

export const externalLinkProps = { target: "_blank", rel: "noopener noreferrer" } as const;
