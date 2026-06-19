import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, ClipboardCheck, GraduationCap } from "lucide-react";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { AdmissionDialog } from "@/components/site/AdmissionDialog";
import { DEPARTMENTS } from "@/lib/site-data";
import hero from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2026-27 — Vidya Bharati College" },
      { name: "description", content: "Admission process, courses offered, eligibility, fee structure and online application." },
      { property: "og:title", content: "Admissions - Vidya Bharati College" },
      { property: "og:description", content: "Apply online for UG and PG programs." },
    ],
  }),
  component: AdmissionsPage,
});

const fade = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

function AdmissionsPage() {
  const steps = [
    { icon: FileText, t: "Apply Online", d: "Fill the application form with personal, academic and contact details." },
    { icon: ClipboardCheck, t: "Verification", d: "Submit required documents for verification by the admissions office." },
    { icon: CheckCircle2, t: "Confirmation", d: "Pay the fees and confirm admission to receive your enrollment ID." },
  ];

  const fees = [
    { course: "B.A", fee: 12000 },
  { course: "B.Com (General)", fee: 12000 },
  { course: "B.Sc (CBZ)", fee: 12000 },
  { course: "B.Sc (PCM)", fee: 14000 },
  { course: "B.Sc (PMCs)", fee: 16000 },
  ];

  return (
    <SiteShell>
      <PageHeader title="Admissions 2026-27" subtitle="Take the first step into a future of opportunity. Apply online today." image={hero} />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 {...fade} className="text-center font-display text-3xl font-bold">Admission Process</motion.h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <motion.div key={s.t} {...fade} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative rounded-2xl border bg-card p-7 text-center shadow-sm">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[var(--gold)] px-3 py-1 text-xs font-bold text-[var(--navy)]">STEP {i + 1}</div>
                <s.icon className="mx-auto mt-3 h-10 w-10 text-[var(--gold)]" />
                <h3 className="mt-3 font-display text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <motion.div {...fade}>
              <h3 className="font-display text-2xl font-bold">Courses Offered</h3>
              <ul className="mt-4 space-y-2">
                {DEPARTMENTS.flatMap((d) => d.courses).map((c) => (
                  <li key={c} className="flex items-start gap-2 rounded-lg border bg-card p-3 text-sm">
                    <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" /> {c}
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="space-y-10">
              <motion.div {...fade}>
                <h3 className="font-display text-2xl font-bold">Eligibility Criteria</h3>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>• <strong>UG programs:</strong> Pass in 10+2 (PUC) from a recognized board.</li>
                  <li>• <strong>B.Sc. / B.C.A.:</strong> Minimum 50% in Science / Mathematics in 10+2.</li>
                  <li>• <strong>PG programs:</strong> Bachelor's degree in relevant discipline with min. 45%.</li>
                  <li>• Reservations per Karnataka State government norms.</li>
                </ul>
              </motion.div>

              <motion.div {...fade}>
                <h3 className="font-display text-2xl font-bold">Required Documents</h3>
                <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  {["10th Marks Card", "12th Marks Card", "Transfer Certificate", "Conduct Certificate", "Aadhaar Card", "Passport-size Photos", "Caste Certificate (if applicable)", "Income Certificate"].map((d) => (
                    <li key={d} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[var(--gold)]" />{d}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          <motion.div {...fade} className="mt-16">
            <h3 className="font-display text-2xl font-bold">Fee Structure</h3>
            <div className="mt-4 overflow-hidden rounded-2xl border">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted">
                  <tr><th className="p-4 font-display">Programme</th><th className="p-4 font-display">Annual Fee</th></tr>
                </thead>
                <tbody>
                  {fees.map((f, i) => (
                    <tr key={f.course} className={i % 2 ? "bg-muted/30" : ""}>
                      <td className="p-4">{f.course}</td>
                      <td className="p-4 font-semibold">{f.fee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">Fees indicative. Final fees as per institutional notification.</p>
          </motion.div>

          <motion.div {...fade} className="mt-16 rounded-3xl bg-navy-gradient p-10 text-center text-white">
            <h3 className="font-display text-3xl font-bold">Ready to join us?</h3>
            <p className="mx-auto mt-2 max-w-xl text-white/80">Apply online in minutes. Our admissions team will reach out within 2 working days.</p>
            <AdmissionDialog
              trigger={
                <Button size="lg" className="mt-6 bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]">Apply Now</Button>
              }
            />
          </motion.div>
        </div>
      </section>
    </SiteShell>
  );
}
