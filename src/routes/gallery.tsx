import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState } from "react";
import { SiteShell, PageHeader } from "@/components/site/SiteShell";
import { GALLERY, GALLERY_CATEGORIES } from "@/lib/site-data";
import { Lightbox } from "@/components/site/Lightbox";
import hero from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Vidya Bharati College" },
      { name: "description", content: "Campus, events, cultural activities, sports, workshops and laboratories at VBC." },
      { property: "og:title", content: "Gallery" },
      { property: "og:description", content: "Glimpses of life at Vidya Bharati College." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [cat, setCat] = useState<(typeof GALLERY_CATEGORIES)[number]>("All");
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  const filtered = useMemo(() => (cat === "All" ? GALLERY : GALLERY.filter((g) => g.category === cat)), [cat]);

  return (
    <SiteShell>
      <PageHeader title="Gallery" subtitle="Moments from campus, events, sports, cultural fests and the laboratories."image= {hero} />
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* <div className="flex flex-wrap justify-center gap-2">
            {GALLERY_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  cat === c
                    ? "bg-[var(--gold)] text-[var(--navy)]"
                    : "border bg-card text-muted-foreground hover:border-[var(--gold)] hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div> */}

          <div className="mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((g, i) => (
                <motion.button
                  key={g.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLbIndex(i)}
                  className="group block w-full overflow-hidden rounded-2xl"
                >
                  <img
                    src={g.src}
                    alt={g.title}
                    loading="lazy"
                    className="w-full transition duration-500 group-hover:scale-110"
                  />
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Lightbox images={filtered} index={lbIndex} onClose={() => setLbIndex(null)} onChange={setLbIndex} />
    </SiteShell>
  );
}
