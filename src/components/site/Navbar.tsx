import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";
import { SITE } from "@/lib/site-data";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/fees", label: "Fee Structure" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const prefersDark = stored ? stored === "dark" : window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    setDark(!!prefersDark);
    document.documentElement.classList.toggle("dark", !!prefersDark);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <img src={logo} alt="" className="h-10 w-10 shrink-0 object-contain" />
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-bold leading-tight sm:text-lg">
              {SITE.name}
            </span>
            <span className="block truncate text-[10px] uppercase tracking-widest text-muted-foreground">
              {SITE.tagline}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => {
            const active = pathname === l.to || (l.to !== "/" && pathname.startsWith(l.to));
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-[var(--gold)] ${
                  active ? "text-[var(--gold)]" : "text-foreground"
                }`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-2 bottom-1 h-0.5 rounded-full bg-[var(--gold)]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Toggle theme"
            className="grid h-9 w-9 place-items-center rounded-md text-foreground hover:bg-muted"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link to="/admissions" className="hidden sm:block">
            <Button className="bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]">
              Apply Now
            </Button>
          </Link>
          <button
            className="grid h-9 w-9 place-items-center rounded-md lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden glass lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/admissions" className="mt-2">
                <Button className="w-full bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]">
                  Apply Now
                </Button>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
