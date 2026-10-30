"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container, Section } from "@/components/ui";
import { hero } from "@/lib/content";
import { fadeUp, motionTransition } from "@/lib/landing-motion";
import { HeroDashboardSkeleton } from "@/components/landing/mocks/hero-dashboard-skeleton";

export function Hero() {
  return (
    <Section spacing="hero" className="overflow-hidden pt-16 md:pt-24 lg:pt-28">
      <Container className="relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ ...motionTransition, delay: 0.08 }}
        >
          <h1 className="max-w-[920px] text-[40px] font-semibold leading-[1.1] tracking-[-0.035em] text-brand-text md:text-[56px] md:leading-[1.05] lg:text-[72px] lg:leading-[1.02]">
            {hero.headline}
          </h1>

          <div className="mt-6 flex w-full flex-col gap-4 sm:mt-8 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <p className="max-w-xl text-base text-brand-muted md:text-[17px] md:leading-relaxed">
              {hero.subheadline}
            </p>

            <Link
              href="#"
              className="inline-flex shrink-0 items-center gap-2 self-end text-sm transition hover:opacity-90 sm:ml-auto"
            >
              <span className="rounded-full border border-brand-border bg-brand-surface px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide text-brand-text">
                {hero.badge.label}
              </span>
              <span className="text-brand-muted">
                {hero.badge.text} →
              </span>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="relative mt-10 w-full md:mt-14"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ ...motionTransition, delay: 0.2 }}
        >
          <div className="rounded-xl bg-brand-surface p-1 shadow-[0_24px_80px_rgba(0,0,0,0.5)] ring-1 ring-brand-border/80">
            <HeroDashboardSkeleton />
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}
