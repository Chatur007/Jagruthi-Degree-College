import { t as DEPARTMENTS } from "./site-data-BjM9oklS.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { I as ArrowRight } from "../_libs/lucide-react.mjs";
import { n as PageHeader, r as SiteShell } from "./SiteShell-CFEJpPYK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/departments.index-CRsPJw9y.js
var import_jsx_runtime = require_jsx_runtime();
function DepartmentsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Academic Departments",
		subtitle: "Eight thriving departments offering UG, PG and certificate programs."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
				children: DEPARTMENTS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: { once: true },
					transition: {
						duration: .5,
						delay: i * .05
					},
					className: "group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-video overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: d.image,
							alt: d.name,
							loading: "lazy",
							className: "h-full w-full object-cover transition duration-500 group-hover:scale-110"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-xl font-semibold",
								children: d.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: d.description
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/departments/$slug",
								params: { slug: d.slug },
								className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[var(--navy)] hover:text-[var(--gold)] dark:text-[var(--gold)]",
								children: ["Learn More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
							})
						]
					})]
				}, d.slug))
			})
		})
	})] });
}
//#endregion
export { DepartmentsPage as component };
