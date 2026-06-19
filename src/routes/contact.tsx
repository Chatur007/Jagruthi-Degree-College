import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site-data";
import hero from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vidya Bharati College" },
      { name: "description", content: "Get in touch with Vidya Bharati College. Address, phone, email and map." },
      { property: "og:title", content: "Contact" },
      { property: "og:description", content: "Reach the admissions and administration offices." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(100),
  mobile: z.string().regex(/^[0-9]{10}$/, "Enter a 10-digit mobile"),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(2, "Enter subject").max(150),
  message: z.string().trim().min(5, "Message too short").max(1000),
});

function ContactPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0]?.message ?? "Please fix the errors");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent! We'll get back to you soon.");
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <SiteShell>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you. Reach out for admissions, events, or any inquiry." image={hero}  />

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="font-display text-2xl font-bold">Reach Us</h2>
            <ul className="mt-6 space-y-4">
              {[
                { icon: MapPin, t: "Address", v: SITE.address },
                { icon: Phone, t: "Phone ", v: SITE.phone },
                { icon: Phone, t: "WhatsApp", v: SITE.whatsapp },
                { icon: Mail, t: "Email", v: SITE.email },
              ].map((c) => (
                <li key={c.t} className="flex gap-4 rounded-2xl border bg-card p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)]"><c.icon className="h-5 w-5" /></span>
                  <div className="min-w-0">
                    <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                    <div className="mt-0.5 break-words font-semibold">{c.v}</div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 overflow-hidden rounded-2xl border">
              <iframe
                src={SITE.mapEmbed}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="College location map"
              />
            </div>
          </motion.div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 rounded-3xl border bg-card p-6 shadow-sm sm:p-8"
          >
            <h2 className="font-display text-2xl font-bold">Send a Message</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label>Name</Label>
                <Input name="name" required />
              </div>
              <div className="space-y-1.5">
                <Label>Mobile Number</Label>
                <Input name="mobile" inputMode="numeric" maxLength={10} required />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label>Email</Label>
              <Input name="email" type="email" required />
            </div>
            <div className="space-y-1.5">
              <Label>Subject</Label>
              <Input name="subject" required />
            </div>
            <div className="space-y-1.5">
              <Label>Message</Label>
              <Textarea name="message" rows={5} required />
            </div>
            <Button disabled={loading} type="submit" className="w-full bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]">
              {loading ? "Sending..." : <>Send Message <Send className="ml-1 h-4 w-4" /></>}
            </Button>
          </motion.form>
        </div>
      </section>
    </SiteShell>
  );
}
