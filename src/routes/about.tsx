import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BookOpen, FlaskConical, Monitor, Trophy, Theater, Library, Award, ShieldCheck } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import principal from "@/assets/principal.jpg";
import hero from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vidya Bharati College" },
      { name: "description", content: "History, vision, mission, infrastructure and achievements of Vidya Bharati College." },
      { property: "og:title", content: "About Vidya Bharati College" },
      { property: "og:description", content: "Five decades of academic excellence." },
    ],
  }),
  component: AboutPage,
});

const fade = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

function AboutPage() {
  return (
    <SiteShell>
      <PageHeader title="About the Institution" subtitle="A legacy of academic excellence, character formation and community service." image={hero} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl space-y-12 px-4 sm:px-6 lg:px-8">
          <motion.div {...fade}>
            <h2 className="font-display text-3xl font-bold">Our History</h2>
            <p className="mt-3 text-muted-foreground">
              Founded in 1978, Vidya Bharati College began as a small community college serving the educational needs of Bhalki and surrounding districts. Today it has grown into a multi-faculty institution with thousands of alumni serving in academia, industry, public service and the arts across India and abroad.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: "Vision", body: "To be a center of academic excellence that nurtures responsible, creative and globally aware citizens." },
              { title: "Mission", body: "To deliver quality education through innovative teaching, research, and meaningful engagement with society." },
            ].map((c) => (
              <motion.div key={c.title} {...fade} className="rounded-2xl border bg-card p-6 shadow-sm">
                <h3 className="font-display text-xl font-bold text-[var(--navy)] dark:text-[var(--gold)]">{c.title}</h3>
                <p className="mt-2 text-muted-foreground">{c.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fade} className="grid gap-8 rounded-3xl border bg-muted/30 p-6 md:grid-cols-[220px_1fr] md:items-center md:p-10">
            <img src={principal} alt="Principal" className="mx-auto h-56 w-44 rounded-2xl object-cover shadow-lg" loading="lazy" />
            <div>
              <h3 className="font-display text-2xl font-bold">Principal's Message</h3>
              <p className="mt-3 text-muted-foreground">
                "At Vidya Bharati College, we are committed to creating a vibrant learning environment where each student can flourish — intellectually, socially and ethically. Our faculty and infrastructure are dedicated to preparing students not just for careers, but for life."
              </p>
              <p className="mt-3 font-semibold">Dr. Mahesh Rao — Principal</p>
            </div>
          </motion.div>

          <motion.div {...fade}>
            <h2 className="font-display text-3xl font-bold">Infrastructure</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: Library, t: "Modern Library", d: "Over 50,000 books and digital access to NDLI and e-PG Pathshala." },
                { icon: FlaskConical, t: "Laboratories", d: "Well-equipped Physics, Chemistry, Botany, Zoology and Computing labs." },
                { icon: Monitor, t: "Smart Classrooms", d: "Interactive boards and multimedia teaching aids across departments." },
                { icon: Theater, t: "Auditorium", d: "500-seater auditorium for events, seminars and cultural programs." },
                { icon: Trophy, t: "Sports Facilities", d: "Cricket ground, basketball, volleyball, indoor games and gym." },
                { icon: BookOpen, t: "Reading Rooms", d: "Quiet study spaces with 24×7 reading hall during exam season." },
              ].map((f) => (
                <div key={f.t} className="rounded-2xl border bg-card p-5">
                  <f.icon className="h-7 w-7 text-[var(--gold)]" />
                  <h4 className="mt-3 font-display text-lg font-semibold">{f.t}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fade}>
            <h2 className="font-display text-3xl font-bold">Achievements & Accreditations</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Award, t: "NAAC Accredited — Grade A", d: "Recognized for academic and institutional excellence." },
                { icon: ShieldCheck, t: "UGC Recognized 2(f) & 12(B)", d: "Affiliated to Gulbarga University." },
                { icon: Trophy, t: "Best College Award 2023", d: "Awarded by the District Education Council." },
                { icon: Award, t: "Research Publications", d: "Active research output across science and humanities." },
              ].map((a) => (
                <div key={a.t} className="flex gap-3 rounded-2xl border bg-card p-5">
                  <a.icon className="h-6 w-6 shrink-0 text-[var(--gold)]" />
                  <div>
                    <h4 className="font-display text-base font-semibold">{a.t}</h4>
                    <p className="mt-0.5 text-sm text-muted-foreground">{a.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
