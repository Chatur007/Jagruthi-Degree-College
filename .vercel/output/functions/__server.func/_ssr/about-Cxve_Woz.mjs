import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { F as Award, N as BookOpen, _ as Library, a as Trophy, b as FlaskConical, c as ShieldCheck, f as Monitor, o as Theater } from "../_libs/lucide-react.mjs";
import { n as PageHeader, r as SiteShell } from "./SiteShell-CFEJpPYK.mjs";
import { t as principal_default } from "./principal-PyZiMyOB.mjs";
import { t as hero_campus_default } from "./hero-campus-DATNL_Eu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Cxve_Woz.js
var import_jsx_runtime = require_jsx_runtime();
var fade = {
	initial: {
		opacity: 0,
		y: 30
	},
	whileInView: {
		opacity: 1,
		y: 0
	},
	viewport: { once: true },
	transition: { duration: .6 }
};
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "About the Institution",
		subtitle: "A legacy of academic excellence, character formation and community service.",
		image: hero_campus_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16 sm:py-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl space-y-12 px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fade,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-bold",
						children: "Our History"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-muted-foreground",
						children: "Founded in 1978, Vidya Bharati College began as a small community college serving the educational needs of Bhalki and surrounding districts. Today it has grown into a multi-faculty institution with thousands of alumni serving in academia, industry, public service and the arts across India and abroad."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-6 md:grid-cols-2",
					children: [{
						title: "Vision",
						body: "To be a center of academic excellence that nurtures responsible, creative and globally aware citizens."
					}, {
						title: "Mission",
						body: "To deliver quality education through innovative teaching, research, and meaningful engagement with society."
					}].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fade,
						className: "rounded-2xl border bg-card p-6 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl font-bold text-[var(--navy)] dark:text-[var(--gold)]",
							children: c.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted-foreground",
							children: c.body
						})]
					}, c.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fade,
					className: "grid gap-8 rounded-3xl border bg-muted/30 p-6 md:grid-cols-[220px_1fr] md:items-center md:p-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: principal_default,
						alt: "Principal",
						className: "mx-auto h-56 w-44 rounded-2xl object-cover shadow-lg",
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold",
							children: "Principal's Message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-muted-foreground",
							children: "\"At Vidya Bharati College, we are committed to creating a vibrant learning environment where each student can flourish — intellectually, socially and ethically. Our faculty and infrastructure are dedicated to preparing students not just for careers, but for life.\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-semibold",
							children: "Dr. Mahesh Rao — Principal"
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fade,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-bold",
						children: "Infrastructure"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
						children: [
							{
								icon: Library,
								t: "Modern Library",
								d: "Over 50,000 books and digital access to NDLI and e-PG Pathshala."
							},
							{
								icon: FlaskConical,
								t: "Laboratories",
								d: "Well-equipped Physics, Chemistry, Botany, Zoology and Computing labs."
							},
							{
								icon: Monitor,
								t: "Smart Classrooms",
								d: "Interactive boards and multimedia teaching aids across departments."
							},
							{
								icon: Theater,
								t: "Auditorium",
								d: "500-seater auditorium for events, seminars and cultural programs."
							},
							{
								icon: Trophy,
								t: "Sports Facilities",
								d: "Cricket ground, basketball, volleyball, indoor games and gym."
							},
							{
								icon: BookOpen,
								t: "Reading Rooms",
								d: "Quiet study spaces with 24×7 reading hall during exam season."
							}
						].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-2xl border bg-card p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-7 w-7 text-[var(--gold)]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "mt-3 font-display text-lg font-semibold",
									children: f.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted-foreground",
									children: f.d
								})
							]
						}, f.t))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fade,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl font-bold",
						children: "Achievements & Accreditations"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 grid gap-4 sm:grid-cols-2",
						children: [
							{
								icon: Award,
								t: "NAAC Accredited — Grade A",
								d: "Recognized for academic and institutional excellence."
							},
							{
								icon: ShieldCheck,
								t: "UGC Recognized 2(f) & 12(B)",
								d: "Affiliated to Gulbarga University."
							},
							{
								icon: Trophy,
								t: "Best College Award 2023",
								d: "Awarded by the District Education Council."
							},
							{
								icon: Award,
								t: "Research Publications",
								d: "Active research output across science and humanities."
							}
						].map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3 rounded-2xl border bg-card p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.icon, { className: "h-6 w-6 shrink-0 text-[var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-display text-base font-semibold",
								children: a.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-sm text-muted-foreground",
								children: a.d
							})] })]
						}, a.t))
					})]
				})
			]
		})
	})] });
}
//#endregion
export { AboutPage as component };
