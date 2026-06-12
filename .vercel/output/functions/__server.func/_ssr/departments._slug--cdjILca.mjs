import { n as GALLERY } from "./site-data-BjM9oklS.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { L as ArrowLeft, N as BookOpen, b as FlaskConical, j as Calendar, r as Users } from "../_libs/lucide-react.mjs";
import { r as SiteShell, t as Button } from "./SiteShell-CFEJpPYK.mjs";
import { t as Route } from "./departments._slug-CRpkzY4X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/departments._slug--cdjILca.js
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
function DepartmentDetail() {
	const { dept } = Route.useLoaderData();
	const gallery = GALLERY.slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative isolate flex min-h-[50vh] items-end text-white",
		style: {
			backgroundImage: `linear-gradient(135deg, color-mix(in oklab, var(--navy) 75%, transparent), color-mix(in oklab, var(--navy) 40%, transparent)), url(${dept.image})`,
			backgroundSize: "cover",
			backgroundPosition: "center"
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/departments",
					className: "inline-flex items-center gap-1 text-sm text-white/80 hover:text-[var(--gold)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " All departments"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-display text-4xl font-bold sm:text-5xl",
					children: dept.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-2xl text-white/80",
					children: dept.description
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl space-y-14 px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fade,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold",
						children: "Department Overview"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-3xl text-muted-foreground",
						children: dept.overview
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fade,
					className: "rounded-3xl border bg-muted/30 p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl font-bold",
							children: "HOD Message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 italic text-muted-foreground",
							children: [
								"\"",
								dept.hod.message,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-semibold",
							children: dept.hod.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Head of Department"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fade,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl font-bold flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "h-5 w-5 text-[var(--gold)]" }), " Faculty"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 grid gap-3 sm:grid-cols-2",
							children: [
								{
									n: dept.hod.name,
									r: "HOD & Professor"
								},
								{
									n: "Prof. Anil Kumar",
									r: "Associate Professor"
								},
								{
									n: "Dr. Meena Sharma",
									r: "Assistant Professor"
								},
								{
									n: "Prof. Rajesh Nair",
									r: "Assistant Professor"
								}
							].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-xl border bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold",
									children: f.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground",
									children: f.r
								})]
							}, f.n))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fade,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl font-bold flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlaskConical, { className: "h-5 w-5 text-[var(--gold)]" }), " Facilities"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 grid gap-2 sm:grid-cols-2",
							children: dept.facilities.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-lg border bg-card px-4 py-3 text-sm",
								children: f
							}, f))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-10 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fade,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl font-bold flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-5 w-5 text-[var(--gold)]" }), " Courses Offered"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2",
							children: dept.courses.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-lg border bg-card px-4 py-3 text-sm",
								children: c
							}, c))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fade,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-2xl font-bold flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-5 w-5 text-[var(--gold)]" }), " Activities"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-4 space-y-2 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Annual department seminar and guest lecture series" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Industry visits and field trips" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Inter-college competitions and workshops" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Student research projects and publications" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Community outreach programs" })
							]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fade,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold",
						children: "Department Gallery"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3",
						children: gallery.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "group aspect-square overflow-hidden rounded-xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: g.src,
								alt: g.title,
								loading: "lazy",
								className: "h-full w-full object-cover transition duration-500 group-hover:scale-110"
							})
						}, g.src))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fade,
					className: "rounded-3xl bg-navy-gradient p-8 text-center text-white",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-display text-2xl font-bold",
						children: [
							"Interested in joining ",
							dept.short,
							"?"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/admissions",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-4 bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]",
							children: "Apply Now"
						})
					})]
				})
			]
		})
	})] });
}
//#endregion
export { DepartmentDetail as component };
