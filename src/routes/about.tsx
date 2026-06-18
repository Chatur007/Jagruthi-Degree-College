import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BookOpen, Library, Trophy, Users, Wifi, Home, ShieldCheck, Monitor } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import principal from "@/assets/principal.jpg";
import hero from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Jagruthi Degree College" },
      { name: "description", content: "Vision, mission, history, leadership and facilities of Jagruthi Degree College." },
      { property: "og:title", content: "About Jagruthi Degree College" },
      { property: "og:description", content: "Two decades of educational excellence and holistic development." },
    ],
  }),
  component: AboutPage,
});

const fade = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

function AboutPage() {
  return (
    <SiteShell>
      <PageHeader title="About Jagruthi Degree College" subtitle="Two decades of educational excellence, holistic development, and community service." image={hero} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-5xl space-y-12 px-4 sm:px-6 lg:px-8">
          {/* Vision & Mission */}
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div {...fade} className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="font-display text-2xl font-bold text-[var(--navy)] dark:text-[var(--gold)]">Vision</h3>
              <p className="mt-3 text-muted-foreground">
                To be a centre of academic excellence and holistic development, providing a platform for quality basic and higher education that empowers students to succeed in their chosen fields and become responsible, compassionate citizens.
              </p>
            </motion.div>
            <motion.div {...fade} className="rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="font-display text-2xl font-bold text-[var(--navy)] dark:text-[var(--gold)]">Mission</h3>
              <p className="mt-3 text-muted-foreground">
                To challenge and inspire every student to realize their full potential – intellectually and personally. We strive to nurture talent by maintaining the highest standards of academic excellence, while fostering critical thinking, self-discovery, and moral values.
              </p>
            </motion.div>
          </div>

          {/* Founder's Message */}
          <motion.div {...fade} className="rounded-3xl border bg-gradient-to-br from-[var(--gold)]/10 to-transparent p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-start">
              <div>
                <img src={principal} alt="Shri. L. G. Gupta" className="rounded-2xl object-cover shadow-lg" loading="lazy" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">Message from the Founder</h3>
                <p className="mt-1 text-sm text-[var(--gold)] font-semibold">Shri. L. G. Gupta</p>
                <p className="mt-1 text-xs text-muted-foreground">Founder President & Chairman, Panchsheel Group of Institutions</p>
                
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  I am delighted to welcome you to the Panchsheel Group of Institutions, Bhalki (PGI Bhalki) family. It is my vision to provide our nation with motivated, responsible, and disciplined youth who will shape a better future. <span className="font-semibold">Education is the most powerful weapon you can use to change the world</span>, and at PGI Bhalki we wield this tool to unlock each student's potential.
                </p>

                <p className="mt-3 text-muted-foreground leading-relaxed">
                  Our dedicated faculty and staff work tirelessly to ignite young minds through strong academics, as well as co-curricular and extra-curricular activities. We believe in instilling confidence, curiosity, and a sense of social responsibility. <span className="italic">We march along with you for your victory</span>, meaning we stand beside each student, guiding them toward achievement.
                </p>

                <p className="mt-3 text-muted-foreground leading-relaxed">
                  In this era of global transformation, our youth are the key to India's bright future. With this conviction, we focus on creating progressive, positive-minded citizens ready to lead and serve society. Your aspirations are our mission.
                </p>
              </div>
            </div>
          </motion.div>

          {/* History & Philosophy */}
          <motion.div {...fade}>
            <h2 className="font-display text-3xl font-bold">Our History & Philosophy</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Established in 1998, the <span className="font-semibold">Panchsheel Education Trust</span> has built a rich legacy spanning over two decades in the field of education. What began as a single school in Bhalki with a vision to make education accessible to all has grown into a group of institutions encompassing multiple schools and colleges. Over the years, we have expanded from primary education to professional courses, including nursing, teacher education (B.Ed.), industrial training (ITI), and paramedical programmes. We take pride in extending quality education to rural and underserved areas in the Bidar district, staying true to our mission of educational outreach.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our educational philosophy centers on <span className="font-semibold">holistic development</span>. We believe that true education goes beyond academic excellence; it involves shaping well-rounded individuals. At PGI Bhalki, students excel in academics and engage in sports, cultural pursuits, leadership activities, and community service. Our graduates leave with strong knowledge, skills, integrity, confidence, and a sense of responsibility. We uphold the values of <span className="font-semibold">Excellence, Service, and Integrity</span> in every aspect of our teaching-learning process.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div {...fade}>
            <h2 className="font-display text-3xl font-bold">Highlights</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "UGC Recognized",
                  desc: "Government-recognized institution with approved academic programs and standards.",
                },
                {
                  icon: Monitor,
                  title: "Smart Classrooms",
                  desc: "Technology-enabled classrooms with modern audio-visual learning tools.",
                },
                {
                  icon: Library,
                  title: "Modern Library",
                  desc: "Extensive print and digital resources with dedicated study and reading spaces.",
                },
              ].map((item) => (
                <motion.div key={item.title} {...fade} className="rounded-2xl border bg-gradient-to-br from-[var(--gold)]/10 to-transparent p-6 shadow-sm hover:shadow-md transition">
                  <item.icon className="h-8 w-8 text-[var(--gold)]" />
                  <h4 className="mt-4 font-display text-lg font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Campus & Facilities */}
          {/* <motion.div {...fade}>
            <h2 className="font-display text-3xl font-bold">Our Campus & Facilities</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed mb-6">
              Spread across three campuses – at Bhalki (head office), Ambesangvi, and Kesar Jawalga – covering a total of 10 acres, PGI Bhalki provides a green, welcoming atmosphere conducive to learning and personal growth.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: BookOpen,
                  title: "Classrooms & Laboratories",
                  desc: "Spacious, well-ventilated classrooms with modern teaching aids and state-of-the-art laboratories for sciences, healthcare, and computing.",
                },
                {
                  icon: Library,
                  title: "Library & Learning Hub",
                  desc: "Well-stocked library with vast collections of books, journals, and digital resources. Quiet study areas foster a habit of lifelong learning.",
                },
                {
                  icon: Home,
                  title: "Hostel Facilities",
                  desc: "Separate hostels for boys and girls with furnished rooms, healthy mess facilities, round-the-clock security, and recreational spaces.",
                },
                {
                  icon: Trophy,
                  title: "Sports & Recreation",
                  desc: "Excellent sports infrastructure with playfields and courts for cricket, football, volleyball, badminton. NCC, scouting, and cultural events.",
                },
                {
                  icon: Users,
                  title: "Cafeteria & Health",
                  desc: "Self-contained campuses with cafeteria offering hygienic food, transportation facilities, and basic medical care.",
                },
                {
                  icon: Wifi,
                  title: "Technology & Security",
                  desc: "Entire campus is Wi-Fi enabled and monitored for safety, creating a technologically advanced and secure learning space.",
                },
              ].map((facility) => (
                <motion.div key={facility.title} {...fade} className="rounded-2xl border bg-card p-6 shadow-sm hover:shadow-md transition">
                  <facility.icon className="h-8 w-8 text-[var(--gold)]" />
                  <h4 className="mt-3 font-display text-lg font-semibold">{facility.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{facility.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div> */}

          {/* Core Values */}
          <motion.div {...fade} className="rounded-3xl border bg-muted/30 p-6 md:p-10">
            <h2 className="font-display text-3xl font-bold mb-6">Our Core Values</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                { title: "Excellence", desc: "Maintaining the highest standards in academics and character development" },
                { title: "Service", desc: "Committed to serving society and uplifting underserved communities" },
                { title: "Integrity", desc: "Fostering honesty, responsibility, and ethical conduct in all endeavors" },
              ].map((value) => (
                <div key={value.title} className="text-center">
                  <h3 className="font-display text-xl font-bold text-[var(--navy)] dark:text-[var(--gold)]">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
