"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui";
import { assets } from "@/lib/assets";
import { navLinks } from "@/lib/content";

function SignUpButton() {
  return (
    <Link
      href="#"
      className="rounded-full bg-brand-text px-4 py-1.5 text-sm font-medium text-brand-bg transition hover:bg-white"
    >
      Sign up
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-bg">
      <Container>
        <div className="flex h-14 items-center justify-between gap-6">
          <Link href="#" className="flex shrink-0 items-center gap-2.5">
            <Image
              src={assets.brand.logo}
              alt=""
              width={20}
              height={20}
            />
            <span className="text-sm font-semibold text-brand-text">Momentum</span>
          </Link>

          <div className="hidden items-center gap-6 lg:flex">
            <nav className="flex items-center gap-5">
              {navLinks.primary.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[13px] text-brand-muted transition-colors hover:text-brand-text"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-5">
              {navLinks.actions.map((action) =>
                action.variant === "primary" ? (
                  <SignUpButton key={action.label} />
                ) : (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="text-[13px] text-brand-text-secondary transition-colors hover:text-brand-text"
                  >
                    {action.label}
                  </Link>
                )
              )}
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-text-secondary lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="border-t border-brand-border py-4 lg:hidden">
            <nav className="flex flex-col gap-1">
              {navLinks.primary.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-md px-2 py-2 text-sm text-brand-text-secondary hover:text-brand-text"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {navLinks.actions.map((action) =>
                action.variant === "primary" ? (
                  <SignUpButton key={action.label} />
                ) : (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="text-sm text-brand-text-secondary hover:text-brand-text"
                  >
                    {action.label}
                  </Link>
                )
              )}
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
