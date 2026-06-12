import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ title, subtitle, image }: { title: string; subtitle?: string; image?: string }) {
  return (
    <section
      className="relative isolate overflow-hidden bg-navy-gradient text-white"
      style={
        image
          ? {
              backgroundImage: `linear-gradient(135deg, color-mix(in oklab, var(--navy) 85%, transparent), color-mix(in oklab, var(--navy-light) 75%, transparent)), url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <h1 className="font-display text-4xl font-bold sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-white/80">{subtitle}</p>}
      </div>
    </section>
  );
}
