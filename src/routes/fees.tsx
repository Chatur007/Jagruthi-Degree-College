import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Button } from "@/components/ui/button";
import { FEE_STRUCTURE } from "@/lib/site-data";
import hero from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/fees")({
  head: () => ({
    meta: [
      { title: "Fee Structure — Jagruthi Degree College" },
      { name: "description", content: "Transparent and affordable fee structure for undergraduate programs." },
      { property: "og:title", content: "Fee Structure" },
      { property: "og:description", content: "UG Fee Structure at Jagruthi Degree College." },
    ],
  }),
  component: FeeStructurePage,
});

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

function FeeStructurePage() {
  return (
    <SiteShell>
      <PageHeader title="Fee Structure" subtitle="Transparent and affordable fees for quality education." image={hero} />

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-12 text-center">
            <h2 className="font-display text-3xl font-bold">Undergraduate Fees (Annual)</h2>
            <p className="mt-3 text-muted-foreground">
              Listed below are the annual tuition fees for undergraduate programs. Additional charges for books, lab materials and activities may apply.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="overflow-hidden rounded-2xl border shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-[var(--gold)]/10">
                    <th className="px-6 py-4 text-left font-semibold text-[var(--navy)] dark:text-[var(--gold)]">Course</th>
                    <th className="px-6 py-4 text-right font-semibold text-[var(--navy)] dark:text-[var(--gold)]">Annual Fee</th>
                  </tr>
                </thead>
                <tbody>
                  {FEE_STRUCTURE.map((item, idx) => (
                    <tr key={item.course} className={idx % 2 === 0 ? "bg-card" : "bg-muted/30"}>
                      <td className="px-6 py-4 font-medium">{item.course}</td>
                      <td className="px-6 py-4 text-right font-semibold text-[var(--gold)]">₹{item.fee.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mt-12 rounded-2xl border bg-muted/30 p-6 md:p-8">
            <h3 className="font-display text-2xl font-bold">Important Information</h3>
            <ul className="mt-6 space-y-3 text-muted-foreground">
              <li className="flex gap-3">
                <span className="text-[var(--gold)] font-bold">•</span>
                <span>Fees listed are annual tuition charges for the academic year.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--gold)] font-bold">•</span>
                <span>Additional charges for examination, library membership, lab materials and sports facilities as per college guidelines.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--gold)] font-bold">•</span>
                <span>Scholarships available based on merit and socio-economic criteria.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--gold)] font-bold">•</span>
                <span>Payment can be made in installments. Contact the administration office for details.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--gold)] font-bold">•</span>
                <span>Fee structure is subject to change as per university regulations.</span>
              </li>
            </ul>

            <div className="mt-8 rounded-xl border-l-4 border-[var(--gold)] bg-[var(--gold)]/5 p-4">
              <p className="text-sm text-muted-foreground">
                For detailed fee breakdowns, scholarship information and financial assistance, please contact our admissions office.
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="mt-12 text-center">
            <h3 className="font-display text-2xl font-bold mb-4">Have Questions About Fees?</h3>
            <Link to="/contact">
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
