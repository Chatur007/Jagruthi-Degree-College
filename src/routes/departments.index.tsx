import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Lightbulb } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { DEPARTMENTS, COURSES, FEE_STRUCTURE, SITE } from "@/lib/site-data";
import hero from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/departments/")({
  head: () => ({
    meta: [
      { title: `Academic Departments — ${SITE.name}` },
      { name: "description", content: `Explore academic departments at ${SITE.name} across Arts, Commerce, and Sciences.` },
      { property: "og:title", content: "Academic Departments" },
      { property: "og:description", content: `Academic departments at ${SITE.name}.` },
    ],
  }),
  component: DepartmentsPage,
});

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.6 } };

function DepartmentsPage() {
  return (
    <SiteShell>
      <PageHeader
        title="Academic Departments"
        subtitle="Explore our specialized departments offering quality undergraduate programs with dedicated faculty and modern facilities."
        image={hero}
      />

      {/* Departments Grid Section */}
      <section className="py-16 sm:py-20 border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Our Fields of Study</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl font-sans">Academic Departments</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Discover our individual academic departments, providing focused mentorship, dedicated laboratories, and targeted preparation for each field.
            </p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {DEPARTMENTS.map((dept, i) => (
              <motion.div
                key={dept.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={dept.image}
                      alt={dept.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold group-hover:text-[var(--gold)] transition-colors">
                      {dept.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {dept.description}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0 mt-auto">
                  <Link
                    to="/departments/$slug"
                    params={{ slug: dept.slug }}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--navy)] hover:text-[var(--gold)] dark:text-[var(--gold)]"
                  >
                    Explore Department <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses / Programs Section (merged from academics) */}
      <section className="py-16 sm:py-20 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Undergraduate Education</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Our Programs & Fees</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Offering comprehensive undergraduate programs designed to develop critical thinking, leadership and practical skills for real-world impact.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COURSES.map((course, i) => {
              const fee = FEE_STRUCTURE.find(f => f.course === course)?.fee;
              const slug = DEPARTMENTS.find(d => d.name === course || d.short === course)?.slug;
              return (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group flex flex-col justify-between rounded-2xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div>
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
                  </div>
                  <div className="mt-6 flex items-center justify-between border-t pt-4">
                    {slug && (
                      <Link
                        to="/departments/$slug"
                        params={{ slug: slug }}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--navy)] hover:text-[var(--gold)] dark:text-[var(--gold)]"
                      >
                        Course Details <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                    <Link
                      to="/contact"
                      className="text-xs font-semibold text-muted-foreground hover:text-[var(--gold)]"
                    >
                      Inquire Now
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features highlights (merged from academics) */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Users, title: "Expert Faculty", desc: "Dedicated educators with advanced degrees and industry experience" },
              { icon: Lightbulb, title: "Modern Facilities", desc: "Well-equipped laboratories, libraries and smart classrooms" },
              { icon: BookOpen, title: "Holistic Development", desc: "Academics, sports, arts and character building in equal measure" },
            ].map((feature) => (
              <motion.div key={feature.title} {...fadeUp} className="rounded-2xl bg-card p-6 border shadow-sm">
                <feature.icon className="h-8 w-8 text-[var(--gold)]" />
                <h3 className="mt-4 font-display text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA section (merged from academics) */}
      <section className="bg-muted/50 py-16 sm:py-20">
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
