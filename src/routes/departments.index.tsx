import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { DEPARTMENTS } from "@/lib/site-data";

export const Route = createFileRoute("/departments/")({
  head: () => ({
    meta: [
      { title: "Departments — Vidya Bharati College" },
      { name: "description", content: "Explore our eight academic departments across Arts, Commerce and Sciences." },
      { property: "og:title", content: "Departments" },
      { property: "og:description", content: "Academic departments at Vidya Bharati College." },
    ],
  }),
  component: DepartmentsPage,
});

function DepartmentsPage() {
  return (
    <SiteShell>
      <PageHeader title="Academic Departments" subtitle="Eight thriving departments offering UG, PG and certificate programs." />
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DEPARTMENTS.map((d, i) => (
              <motion.div
                key={d.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{d.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d.description}</p>
                  <Link
                    to="/departments/$slug"
                    params={{ slug: d.slug }}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--navy)] hover:text-[var(--gold)] dark:text-[var(--gold)]"
                  >
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
