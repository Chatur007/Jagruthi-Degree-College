import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { SITE, QUICK_LINKS } from "@/lib/site-data";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-navy-gradient text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="" className="h-10 w-10 shrink-0 object-contain" />
              <div className="min-w-0">
                <div className="font-display text-lg font-bold">{SITE.name}</div>
                <div className="text-[10px] uppercase tracking-widest text-white/60">{SITE.tagline}</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70">
              A premier institution committed to academic excellence, character formation and holistic development.
            </p>
            <div className="mt-5 flex gap-2">
              {[Facebook, Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[var(--gold)] hover:text-[var(--navy)]"
                  aria-label="social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-[var(--gold)]">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />{SITE.address}</li>
              <li className="flex gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />{SITE.phone}</li>
              <li className="flex gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />{SITE.email}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-[var(--gold)]">Quick Links</h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/80">
              {[
                ["/about", "About"],
                ["/admissions", "Admissions"],
                ["/departments", "Departments"],
                ["/gallery", "Gallery"],
                ["/contact", "Contact"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="hover:text-[var(--gold)]">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-[var(--gold)]">Student Resources</h4>
            <ul className="mt-4 grid grid-cols-1 gap-1.5 text-sm text-white/80">
              {QUICK_LINKS.slice(0, 6).map((l) => (
                <li key={l.name}>
                  <a href={l.url} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--gold)]">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/60">
          <p className="leading-relaxed">
            <strong className="text-white/80">Disclaimer:</strong> Domain registration charges, hosting charges, SSL certificates, email hosting services, and any third-party subscriptions are not included in the website development cost and shall be borne by the client.
          </p>
          <p className="mt-4 text-center">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
