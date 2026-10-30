import Link from "next/link";
import { Container } from "@/components/ui";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-brand-border/60 pb-10 pt-16">
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {footer.columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-medium text-brand-text">{column.title}</h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-brand-muted transition hover:text-brand-text"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-brand-border pt-6">
          <div className="flex items-center gap-2 text-sm font-medium">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded bg-brand-text text-[10px] font-bold text-brand-bg">
              L
            </span>
            Momentum
          </div>
          <div className="flex flex-wrap gap-4">
            {footer.legal.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-xs text-brand-muted transition hover:text-brand-text"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
