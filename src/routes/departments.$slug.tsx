import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, BookOpen, FlaskConical, Users, Calendar, GraduationCap, Briefcase } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { DEPARTMENTS, GALLERY } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/departments/$slug")({
  loader: ({ params }) => {
    const dept = DEPARTMENTS.find((d) => d.slug === params.slug);
    if (!dept) throw notFound();
    return { dept };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
        { title: `${loaderData.dept.name} — Vidya Bharati College` },
        { name: "description", content: loaderData.dept.description },
        { property: "og:title", content: loaderData.dept.name },
        { property: "og:description", content: loaderData.dept.description },
        { property: "og:image", content: loaderData.dept.image },
      ]
      : [],
  }),
  notFoundComponent: () => (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="font-display text-3xl font-bold">Department not found</h1>
        <Link to="/departments" className="mt-4 inline-block text-[var(--gold)]">Back to all departments</Link>
      </div>
    </SiteShell>
  ),
  errorComponent: () => (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="font-display text-3xl font-bold">Something went wrong</h1>
      </div>
    </SiteShell>
  ),
  component: DepartmentDetail,
});

const fade = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

function DepartmentDetail() {
  const { dept } = Route.useLoaderData();
  const gallery = GALLERY.slice(0, 6);

  return (
    <SiteShell>
      {/* Banner */}
      <section
        className="relative isolate flex min-h-[50vh] items-end text-white"
        style={{
          backgroundImage: `linear-gradient(135deg, color-mix(in oklab, var(--navy) 75%, transparent), color-mix(in oklab, var(--navy) 40%, transparent)), url(${dept.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <Link to="/departments" className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-[var(--gold)]">
            <ArrowLeft className="h-4 w-4" /> All departments
          </Link>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">{dept.name}</h1>
          <p className="mt-2 max-w-2xl text-white/80">{dept.description}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8">
          <motion.div {...fade}>
            <h2 className="font-display text-2xl font-bold">Department Overview</h2>
            <p className="mt-3 max-w-3xl text-muted-foreground">{dept.overview}</p>
          </motion.div>

          <motion.div {...fade} className="rounded-3xl border bg-muted/30 p-8">
            <h2 className="font-display text-2xl font-bold">HOD Message</h2>
            <p className="mt-3 italic text-muted-foreground">"{dept.hod.message}"</p>
            <p className="mt-3 font-semibold">{dept.hod.name}</p>
            <p className="text-sm text-muted-foreground">Head of Department</p>
          </motion.div>

          {dept.faculty && dept.faculty.length > 0 && (
            <motion.div {...fade} className="space-y-6">
              <h2 className="font-display text-2xl font-bold flex items-center gap-2">
                <Users className="h-6 w-6 text-[var(--gold)]" /> Meet Our Faculty
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {dept.faculty.map((f) => (
                  <div key={f.name} className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-[var(--navy)] dark:text-[var(--gold)]">{f.name}</h3>
                      {f.designation && (
                        <span className="inline-flex items-center gap-1.5 mt-1.5 rounded-full bg-[var(--gold)]/10 px-3 py-1 text-xs font-semibold text-[var(--gold)]">
                          {f.designation}
                        </span>
                      )}
                      
                      <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                        {f.qualification && (
                          <div className="flex items-center gap-2">
                            <GraduationCap className="h-4 w-4 shrink-0 text-muted-foreground" />
                            <span><strong>Qualification:</strong> {f.qualification}</span>
                          </div>
                        )}
                        {f.subject && (
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 shrink-0 text-muted-foreground" />
                            <span><strong>Subject:</strong> {f.subject}</span>
                          </div>
                        )}
                        {f.experience && (
                          <div className="flex items-center gap-2">
                            <Briefcase className="h-4 w-4 shrink-0 text-muted-foreground" />
                            <span><strong>Experience:</strong> {f.experience}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          <div className="grid gap-10 md:grid-cols-2">
            <motion.div {...fade} className="md:col-span-2">
              <h2 className="font-display text-2xl font-bold flex items-center gap-2"><FlaskConical className="h-5 w-5 text-[var(--gold)]" /> Facilities</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                {dept.facilities.map((f: string) => (
                  <li key={f} className="rounded-lg border bg-card px-4 py-3 text-sm">{f}</li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            <motion.div {...fade}>
              <h2 className="font-display text-2xl font-bold flex items-center gap-2"><BookOpen className="h-5 w-5 text-[var(--gold)]" /> Courses Offered</h2>
              <ul className="mt-4 space-y-2">
                {dept.courses.map((c: string) => (
                  <li key={c} className="rounded-lg border bg-card px-4 py-3 text-sm">{c}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fade}>
              <h2 className="font-display text-2xl font-bold flex items-center gap-2"><Calendar className="h-5 w-5 text-[var(--gold)]" /> Activities</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>• Annual department seminar and guest lecture series</li>
                <li>• Industry visits and field trips</li>
                <li>• Inter-college competitions and workshops</li>
                <li>• Student research projects and publications</li>
                <li>• Community outreach programs</li>
              </ul>
            </motion.div>
          </div>

          <motion.div {...fade}>
            <h2 className="font-display text-2xl font-bold">Department Gallery</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {gallery.map((g) => (
                <div key={g.src} className="group aspect-square overflow-hidden rounded-xl">
                  <img src={g.src} alt={g.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fade} className="rounded-3xl bg-navy-gradient p-8 text-center text-white">
            <h3 className="font-display text-2xl font-bold">Interested in joining {dept.short}?</h3>
            <Link to="/admissions"><Button className="mt-4 bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]">Apply Now</Button></Link>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
