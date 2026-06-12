import { t as DEPARTMENTS } from "./site-data-BjM9oklS.mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { T as CircleCheck, w as ClipboardCheck, x as FileText, y as GraduationCap } from "../_libs/lucide-react.mjs";
import { n as PageHeader, r as SiteShell, t as Button } from "./SiteShell-CFEJpPYK.mjs";
import { t as hero_campus_default } from "./hero-campus-DATNL_Eu.mjs";
import { t as AdmissionDialog } from "./AdmissionDialog-Cb6gubI4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admissions-D2qW4vUS.js
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
function AdmissionsPage() {
	const steps = [
		{
			icon: FileText,
			t: "Apply Online",
			d: "Fill the application form with personal, academic and contact details."
		},
		{
			icon: ClipboardCheck,
			t: "Verification",
			d: "Submit required documents for verification by the admissions office."
		},
		{
			icon: CircleCheck,
			t: "Confirmation",
			d: "Pay the fees and confirm admission to receive your enrollment ID."
		}
	];
	const fees = [
		{
			course: "B.A. / B.Com (UG)",
			fee: "₹12,000 / year"
		},
		{
			course: "B.Sc. (UG)",
			fee: "₹18,000 / year"
		},
		{
			course: "B.C.A.",
			fee: "₹25,000 / year"
		},
		{
			course: "M.A. / M.Com",
			fee: "₹16,000 / year"
		},
		{
			course: "M.Sc.",
			fee: "₹24,000 / year"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Admissions 2026-27",
		subtitle: "Take the first step into a future of opportunity. Apply online today.",
		image: hero_campus_default
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
					...fade,
					className: "text-center font-display text-3xl font-bold",
					children: "Admission Process"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-3",
					children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fade,
						transition: {
							duration: .5,
							delay: i * .1
						},
						className: "relative rounded-2xl border bg-card p-7 text-center shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[var(--gold)] px-3 py-1 text-xs font-bold text-[var(--navy)]",
								children: ["STEP ", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "mx-auto mt-3 h-10 w-10 text-[var(--gold)]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-display text-xl font-semibold",
								children: s.t
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: s.d
							})
						]
					}, s.t))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-10 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						...fade,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold",
							children: "Courses Offered"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2",
							children: DEPARTMENTS.flatMap((d) => d.courses).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-2 rounded-lg border bg-card p-3 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" }),
									" ",
									c
								]
							}, c))
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							...fade,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold",
								children: "Eligibility Criteria"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-4 space-y-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"• ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "UG programs:" }),
										" Pass in 10+2 (PUC) from a recognized board."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"• ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "B.Sc. / B.C.A.:" }),
										" Minimum 50% in Science / Mathematics in 10+2."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"• ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "PG programs:" }),
										" Bachelor's degree in relevant discipline with min. 45%."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Reservations per Karnataka State government norms." })
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							...fade,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl font-bold",
								children: "Required Documents"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 grid grid-cols-2 gap-2 text-sm",
								children: [
									"10th Marks Card",
									"12th Marks Card",
									"Transfer Certificate",
									"Conduct Certificate",
									"Aadhaar Card",
									"Passport-size Photos",
									"Caste Certificate (if applicable)",
									"Income Certificate"
								].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "h-4 w-4 text-[var(--gold)]" }), d]
								}, d))
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fade,
					className: "mt-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-bold",
							children: "Fee Structure"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-4 overflow-hidden rounded-2xl border",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								className: "w-full text-left text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
									className: "bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-4 font-display",
										children: "Programme"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "p-4 font-display",
										children: "Annual Fee"
									})] })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: fees.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: i % 2 ? "bg-muted/30" : "",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4",
										children: f.course
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "p-4 font-semibold",
										children: f.fee
									})]
								}, f.course)) })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-xs text-muted-foreground",
							children: "Fees indicative. Final fees as per institutional notification."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					...fade,
					className: "mt-16 rounded-3xl bg-navy-gradient p-10 text-center text-white",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl font-bold",
							children: "Ready to join us?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-2 max-w-xl text-white/80",
							children: "Apply online in minutes. Our admissions team will reach out within 2 working days."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdmissionDialog, { trigger: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "lg",
							className: "mt-6 bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]",
							children: "Apply Now"
						}) })
					]
				})
			]
		})
	})] });
}
//#endregion
export { AdmissionsPage as component };
