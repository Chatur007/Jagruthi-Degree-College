import { o as __toESM } from "../_runtime.mjs";
import { n as GALLERY, r as GALLERY_CATEGORIES } from "./site-data-BjM9oklS.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as motion, o as AnimatePresence } from "../_libs/framer-motion.mjs";
import { D as ChevronRight, O as ChevronLeft, n as X } from "../_libs/lucide-react.mjs";
import { n as PageHeader, r as SiteShell } from "./SiteShell-CFEJpPYK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-MTNsP7Fe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Lightbox({ images, index, onClose, onChange }) {
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (index === null) return;
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowRight") onChange((index + 1) % images.length);
			if (e.key === "ArrowLeft") onChange((index - 1 + images.length) % images.length);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [
		index,
		images.length,
		onClose,
		onChange
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: index !== null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-[100] grid place-items-center bg-black/90 p-4",
		onClick: onClose,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20",
				onClick: onClose,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "absolute left-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20",
				onClick: (e) => {
					e.stopPropagation();
					onChange((index - 1 + images.length) % images.length);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "absolute right-4 top-1/2 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20",
				onClick: (e) => {
					e.stopPropagation();
					onChange((index + 1) % images.length);
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				initial: {
					scale: .95,
					opacity: 0
				},
				animate: {
					scale: 1,
					opacity: 1
				},
				src: images[index].src,
				alt: images[index].title ?? "",
				className: "max-h-[85vh] max-w-[90vw] rounded-lg object-contain",
				onClick: (e) => e.stopPropagation()
			}, images[index].src)
		]
	}) });
}
function GalleryPage() {
	const [cat, setCat] = (0, import_react.useState)("All");
	const [lbIndex, setLbIndex] = (0, import_react.useState)(null);
	const filtered = (0, import_react.useMemo)(() => cat === "All" ? GALLERY : GALLERY.filter((g) => g.category === cat), [cat]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Gallery",
			subtitle: "Moments from campus, events, sports, cultural fests and the laboratories."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap justify-center gap-2",
					children: GALLERY_CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setCat(c),
						className: `rounded-full px-4 py-1.5 text-sm font-medium transition ${cat === c ? "bg-[var(--gold)] text-[var(--navy)]" : "border bg-card text-muted-foreground hover:border-[var(--gold)] hover:text-foreground"}`,
						children: c
					}, c))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "popLayout",
						children: filtered.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
							layout: true,
							initial: {
								opacity: 0,
								scale: .9
							},
							animate: {
								opacity: 1,
								scale: 1
							},
							exit: {
								opacity: 0,
								scale: .9
							},
							transition: { duration: .3 },
							onClick: () => setLbIndex(i),
							className: "group block w-full overflow-hidden rounded-2xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: g.src,
								alt: g.title,
								loading: "lazy",
								className: "w-full transition duration-500 group-hover:scale-110"
							})
						}, g.src))
					})
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
			images: filtered,
			index: lbIndex,
			onClose: () => setLbIndex(null),
			onChange: setLbIndex
		})
	] });
}
//#endregion
export { GalleryPage as component };
