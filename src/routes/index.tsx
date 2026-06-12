import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Users, Building2, Award, Bell, ExternalLink } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/site/Counter";
import { AdmissionDialog } from "@/components/site/AdmissionDialog";
import { DEPARTMENTS, NOTICES, QUICK_LINKS, SITE } from "@/lib/site-data";
import hero from "@/assets/hero-campus.jpg";
import principal from "@/assets/principal.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — ${SITE.tagline}` },
      { name: "description", content: "A premier college offering UG and PG programs across Arts, Commerce, and Sciences. Apply for admission 2026-27." },
      { property: "og:title", content: SITE.name },
      { property: "og:description", content: SITE.tagline },
    ],
  }),
  component: HomePage,
});

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

function HomePage() {
  return (
    <SiteShell>
      {/* Hero */}
      <section
        className="relative isolate -mt-16 flex min-h-[100svh] items-center text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, color-mix(in oklab, var(--navy) 80%, transparent), color-mix(in oklab, var(--navy) 55%, transparent)), url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" /> Admissions 2026-27 Now Open
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-7xl"
          >
            Shaping <span className="text-gradient-gold">brilliant minds</span> for a changing world.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 max-w-2xl text-base text-white/85 sm:text-lg"
          >
            {SITE.name} blends academic rigor, holistic development and modern infrastructure to prepare students for meaningful careers and lives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <AdmissionDialog
              trigger={
                <Button size="lg" className="bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]">
                  Apply for Admission <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              }
            />
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <motion.div {...fadeUp}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">About the College</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Five decades of academic excellence and character building.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Established in 1978, {SITE.name} has grown into one of the region's most respected institutions. With a sprawling green campus, modern laboratories, and a passionate faculty, we offer over 25 programs across science, arts and commerce.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              {["NAAC Accredited", "UGC Recognized", "Smart Classrooms", "Modern Library"].map((t) => (
                <li key={t} className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />{t}</li>
              ))}
            </ul>
            <Link to="/about" className="mt-7 inline-block">
              <Button variant="outline">Read More <ArrowRight className="ml-1 h-4 w-4" /></Button>
            </Link>
          </motion.div>
          <motion.div {...fadeUp} className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-navy-gradient/10 blur-2xl" />
            <img src={hero} alt="campus" className="rounded-3xl shadow-2xl" loading="lazy" />
          </motion.div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="bg-muted/50 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[300px_1fr] md:items-center lg:px-8">
          <motion.div {...fadeUp} className="mx-auto md:mx-0">
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-[var(--gold)]/20 blur-xl" />
              <img src={principal} alt="Principal" className="relative h-72 w-60 rounded-2xl object-cover shadow-xl" loading="lazy" />
            </div>
          </motion.div>
          <motion.div {...fadeUp}>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Principal's Message</span>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">A warm welcome to our students.</h2>
            <p className="mt-4 text-muted-foreground">
              "Education at {SITE.name} is not merely an exchange of information — it is the joint pursuit of wisdom, character and purpose. We invite you to be part of a learning community that believes in every student's potential and equips them to make a difference in the world."
            </p>
            <p className="mt-4 font-semibold">Dr. Mahesh Rao</p>
            <p className="text-sm text-muted-foreground">Principal</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative isolate overflow-hidden bg-navy-gradient py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            { icon: GraduationCap, n: 4500, label: "Students" },
            { icon: Users, n: 180, label: "Faculty Members" },
            { icon: Building2, n: 8, label: "Departments", suffix: "" },
            { icon: Award, n: 12000, label: "Alumni" },
          ].map((s, i) => (
            <motion.div key={i} {...fadeUp} className="text-center">
              <s.icon className="mx-auto h-10 w-10 text-[var(--gold)]" />
              <div className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                <Counter to={s.n} suffix={s.suffix ?? "+"} />
              </div>
              <div className="mt-1 text-sm uppercase tracking-widest text-white/70">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Notice Board */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Stay Updated</span>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Notice Board</h2>
          </motion.div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {NOTICES.map((n, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-2xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-lg"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-[var(--gold)]/15 px-3 py-1 font-semibold text-[var(--navy)] dark:text-[var(--gold)]">{n.category}</span>
                  <time className="text-muted-foreground">{new Date(n.date).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</time>
                </div>
                <h3 className="mt-3 flex items-start gap-2 font-display text-lg font-semibold leading-snug">
                  <Bell className="mt-1 h-4 w-4 shrink-0 text-[var(--gold)]" />
                  {n.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Student Services</span>
            <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Quick Links</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Essential portals and learning resources for our students.</p>
          </motion.div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {QUICK_LINKS.map((l, i) => (
              <motion.a
                key={l.name}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="group flex items-center justify-between gap-3 rounded-2xl border bg-card p-5 transition hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-lg"
              >
                <div className="min-w-0">
                  <div className="truncate font-display text-base font-semibold">{l.name}</div>
                  <div className="truncate text-xs text-muted-foreground">{l.desc}</div>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-[var(--gold)] transition group-hover:scale-110" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Departments preview */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Academics</span>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Our Departments</h2>
            </div>
            <Link to="/departments"><Button variant="outline">View All <ArrowRight className="ml-1 h-4 w-4" /></Button></Link>
          </motion.div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {DEPARTMENTS.map((d, i) => (
              <motion.div
                key={d.slug}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={d.image} alt={d.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold">{d.short}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{d.description}</p>
                  <Link
                    to="/departments/$slug"
                    params={{ slug: d.slug }}
                    className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--navy)] hover:text-[var(--gold)] dark:text-[var(--gold)]"
                  >
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Life at VBC</span>
              <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Gallery</h2>
            </div>
            <Link to="/gallery"><Button variant="outline">Open Gallery <ArrowRight className="ml-1 h-4 w-4" /></Button></Link>
          </motion.div>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {[
              "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
              "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
              "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80",
              "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80",
            ].map((src, i) => (
              <motion.div
                key={src}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group aspect-square overflow-hidden rounded-2xl"
              >
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
