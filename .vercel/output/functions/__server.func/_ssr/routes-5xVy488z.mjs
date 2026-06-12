import { o as __toESM } from "../_runtime.mjs";
import { a as NOTICES, i as GALLERY_PREVIEW, o as QUICK_LINKS, s as SITE, t as DEPARTMENTS } from "./site-data-BjM9oklS.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as motion, i as useMotionValue, n as animate, r as useTransform, t as useInView } from "../_libs/framer-motion.mjs";
import { C as ExternalLink, F as Award, I as ArrowRight, M as Building2, P as Bell, r as Users, y as GraduationCap } from "../_libs/lucide-react.mjs";
import { r as SiteShell, t as Button } from "./SiteShell-CFEJpPYK.mjs";
import { t as principal_default } from "./principal-PyZiMyOB.mjs";
import { t as hero_campus_default } from "./hero-campus-DATNL_Eu.mjs";
import { t as AdmissionDialog } from "./AdmissionDialog-Cb6gubI4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-5xVy488z.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Counter({ to, suffix = "+" }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-50px"
	});
	const mv = useMotionValue(0);
	const rounded = useTransform(mv, (v) => Math.floor(v).toLocaleString());
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		return animate(mv, to, {
			duration: 2,
			ease: "easeOut"
		}).stop;
	}, [
		inView,
		to,
		mv
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, { children: rounded }), suffix]
	});
}
var fadeUp = {
	initial: {
		opacity: 0,
		y: 30
	},
	whileInView: {
		opacity: 1,
		y: 0
	},
	viewport: {
		once: true,
		margin: "-80px"
	},
	transition: { duration: .6 }
};
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative isolate -mt-16 flex min-h-[100svh] items-center text-white",
			style: {
				backgroundImage: `linear-gradient(135deg, color-mix(in oklab, var(--navy) 80%, transparent), color-mix(in oklab, var(--navy) 55%, transparent)), url(${hero_campus_default})`,
				backgroundSize: "cover",
				backgroundPosition: "center"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 30
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .1
						},
						className: "mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-7xl",
						children: [
							"Shaping ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient-gold",
								children: "brilliant minds"
							}),
							" for a changing world."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .2
						},
						className: "mt-5 max-w-2xl text-base text-white/85 sm:text-lg",
						children: [SITE.name, " blends academic rigor, holistic development and modern infrastructure to prepare students for meaningful careers and lives."]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 20
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .3
						},
						className: "mt-8 flex flex-wrap gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdmissionDialog, { trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "lg",
							className: "bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]",
							children: ["Apply for Admission ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								size: "lg",
								variant: "outline",
								className: "border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20",
								children: "Contact Us"
							})
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 sm:py-28",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]",
							children: "About the College"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 font-display text-3xl font-bold sm:text-4xl",
							children: "Five decades of academic excellence and character building."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-muted-foreground",
							children: [
								"Established in 1978, ",
								SITE.name,
								" has grown into one of the region's most respected institutions. With a sprawling green campus, modern laboratories, and a passionate faculty, we offer over 25 programs across science, arts and commerce."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 grid grid-cols-2 gap-3 text-sm",
							children: [
								"NAAC Accredited",
								"UGC Recognized",
								"Smart Classrooms",
								"Modern Library"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--gold)]" }), t]
							}, t))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "mt-7 inline-block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "outline",
								children: ["Read More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-4 -z-10 rounded-3xl bg-navy-gradient/10 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_campus_default,
						alt: "campus",
						className: "rounded-3xl shadow-2xl",
						loading: "lazy"
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/50 py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[300px_1fr] md:items-center lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					...fadeUp,
					className: "mx-auto md:mx-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -inset-3 rounded-2xl bg-[var(--gold)]/20 blur-xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: principal_default,
							alt: "Principal",
							className: "relative h-72 w-60 rounded-2xl object-cover shadow-xl",
							loading: "lazy"
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]",
							children: "Principal's Message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
							children: "A warm welcome to our students."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 text-muted-foreground",
							children: [
								"\"Education at ",
								SITE.name,
								" is not merely an exchange of information — it is the joint pursuit of wisdom, character and purpose. We invite you to be part of a learning community that believes in every student's potential and equips them to make a difference in the world.\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 font-semibold",
							children: "Dr. Mahesh Rao"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: "Principal"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "relative isolate overflow-hidden bg-navy-gradient py-20 text-white",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl gap-8 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8",
				children: [
					{
						icon: GraduationCap,
						n: 4500,
						label: "Students"
					},
					{
						icon: Users,
						n: 180,
						label: "Faculty Members"
					},
					{
						icon: Building2,
						n: 8,
						label: "Departments",
						suffix: ""
					},
					{
						icon: Award,
						n: 12e3,
						label: "Alumni"
					}
				].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "mx-auto h-10 w-10 text-[var(--gold)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 font-display text-4xl font-bold sm:text-5xl",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
								to: s.n,
								suffix: s.suffix ?? "+"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 text-sm uppercase tracking-widest text-white/70",
							children: s.label
						})
					]
				}, i))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					className: "text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]",
						children: "Stay Updated"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
						children: "Notice Board"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
					children: NOTICES.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fadeUp,
						transition: {
							duration: .5,
							delay: i * .05
						},
						className: "group rounded-2xl border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-[var(--gold)]/15 px-3 py-1 font-semibold text-[var(--navy)] dark:text-[var(--gold)]",
								children: n.category
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
								className: "text-muted-foreground",
								children: new Date(n.date).toLocaleDateString("en-IN", {
									day: "2-digit",
									month: "short",
									year: "numeric"
								})
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "mt-3 flex items-start gap-2 font-display text-lg font-semibold leading-snug",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "mt-1 h-4 w-4 shrink-0 text-[var(--gold)]" }), n.title]
						})]
					}, i))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/50 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]",
							children: "Student Services"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
							children: "Quick Links"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-2xl text-muted-foreground",
							children: "Essential portals and learning resources for our students."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3",
					children: QUICK_LINKS.map((l, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
						href: l.url,
						target: "_blank",
						rel: "noopener noreferrer",
						...fadeUp,
						transition: {
							duration: .4,
							delay: i * .03
						},
						className: "group flex items-center justify-between gap-3 rounded-2xl border bg-card p-5 transition hover:-translate-y-1 hover:border-[var(--gold)] hover:shadow-lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate font-display text-base font-semibold",
								children: l.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "truncate text-xs text-muted-foreground",
								children: l.desc
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "h-4 w-4 shrink-0 text-[var(--gold)] transition group-hover:scale-110" })]
					}, l.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-20 sm:py-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]",
						children: "Academics"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
						children: "Our Departments"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/departments",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							children: ["View All ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4",
					children: DEPARTMENTS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fadeUp,
						transition: {
							duration: .5,
							delay: i * .04
						},
						className: "group overflow-hidden rounded-2xl border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "aspect-[4/3] overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: d.image,
								alt: d.name,
								loading: "lazy",
								className: "h-full w-full object-cover transition duration-500 group-hover:scale-110"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-lg font-semibold",
									children: d.short
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 line-clamp-2 text-sm text-muted-foreground",
									children: d.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/departments/$slug",
									params: { slug: d.slug },
									className: "mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--navy)] hover:text-[var(--gold)] dark:text-[var(--gold)]",
									children: ["Learn more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
								})
							]
						})]
					}, d.slug))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-muted/50 py-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fadeUp,
					className: "flex flex-wrap items-end justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--gold)]",
						children: "Life at VBC"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl font-bold sm:text-4xl",
						children: "Gallery"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/gallery",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							children: ["Open Gallery ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4",
					children: GALLERY_PREVIEW.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						...fadeUp,
						transition: {
							duration: .5,
							delay: i * .05
						},
						className: "group aspect-square overflow-hidden rounded-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.src,
							alt: item.title,
							loading: "lazy",
							className: "h-full w-full object-cover transition duration-500 group-hover:scale-110"
						})
					}, item.src))
				})]
			})
		})
	] });
}
//#endregion
export { HomePage as component };
