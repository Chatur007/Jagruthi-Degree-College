import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Lightbulb } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { COURSES, FEE_STRUCTURE } from "@/lib/site-data";
import hero from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics & Departments — Jagruthi Degree College" },
      { name: "description", content: "Explore our undergraduate programs in Arts, Commerce and Sciences with experienced faculty and modern facilities." },
      { property: "og:title", content: "Academics" },
      { property: "og:description", content: "UG Programs at Jagruthi Degree College." },
    ],
  }),
  component: AcademicsPage,
});

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

function AcademicsPage() {
  return (
    <SiteShell>
      <PageHeader title="Academics & Departments" subtitle="Quality education across Arts, Commerce and Sciences with world-class faculty." image={hero} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Our Programs</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Offering comprehensive undergraduate programs designed to develop critical thinking, leadership and practical skills for real-world impact.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course, i) => {
              const fee = FEE_STRUCTURE.find(f => f.course === course)?.fee;
              return (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group rounded-2xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="inline-flex items-center justify-center rounded-xl bg-[var(--gold)]/15 p-3 mb-4">
                    <BookOpen className="h-6 w-6 text-[var(--gold)]" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">{course}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    Comprehensive curriculum with experienced faculty, modern facilities and industry exposure.
                  </p>
                  {fee && (
                    <div className="mt-4 flex items-baseline gap-2">
                      <span className="text-lg font-semibold">₹{fee.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground">per year</span>
                    </div>
                  )}
                  <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[var(--navy)] hover:text-[var(--gold)] dark:text-[var(--gold)]">
                    Inquire Now <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Users, title: "Expert Faculty", desc: "Dedicated educators with advanced degrees and industry experience" },
              { icon: Lightbulb, title: "Modern Facilities", desc: "Well-equipped laboratories, libraries and smart classrooms" },
              { icon: BookOpen, title: "Holistic Development", desc: "Academics, sports, arts and character building in equal measure" },
            ].map((feature) => (
              <motion.div key={feature.title} {...fadeUp} className="rounded-2xl bg-card p-6 shadow-sm">
                <feature.icon className="h-8 w-8 text-[var(--gold)]" />
                <h3 className="mt-4 font-display text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center">
            <h2 className="font-display text-3xl font-bold">Ready to Begin Your Journey?</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of students who have shaped their futures through quality education and mentorship.
            </p>
            <Link to="/contact" className="mt-8 inline-block">
              <Button size="lg" className="bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]">
                Contact Admissions
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
