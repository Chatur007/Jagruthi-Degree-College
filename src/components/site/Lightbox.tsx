import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export function Lightbox({
  images,
  index,
  onClose,
  onChange,
}: {
  images: { src: string; title?: string }[];
  index: number | null;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % images.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, images.length, onClose, onChange]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-black/90 p-4"
          onClick={onClose}
        >
          <button className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" onClick={onClose}>
            <X />
          </button>
          <button
            className="absolute left-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); onChange((index - 1 + images.length) % images.length); }}
          >
            <ChevronLeft />
          </button>
          <button
            className="absolute right-4 top-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
            onClick={(e) => { e.stopPropagation(); onChange((index + 1) % images.length); }}
          >
            <ChevronRight />
          </button>
          <motion.img
            key={images[index].src}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={images[index].src}
            alt={images[index].title ?? ""}
            className="max-h-[85vh] max-w-[90vw] rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
