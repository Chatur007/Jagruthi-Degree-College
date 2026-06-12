import { o as __toESM } from "../_runtime.mjs";
import { s as SITE } from "./site-data-BjM9oklS.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { h as Mail, l as Send, m as MapPin, u as Phone } from "../_libs/lucide-react.mjs";
import { i as cn, n as PageHeader, r as SiteShell, t as Button } from "./SiteShell-CFEJpPYK.mjs";
import { n as Label, t as Input } from "./label-hm_8wnRK.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CEoyLXyN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var schema = objectType({
	name: stringType().trim().min(2, "Enter your name").max(100),
	mobile: stringType().regex(/^[0-9]{10}$/, "Enter a 10-digit mobile"),
	email: stringType().trim().email("Invalid email").max(255),
	subject: stringType().trim().min(2, "Enter subject").max(150),
	message: stringType().trim().min(5, "Message too short").max(1e3)
});
function ContactPage() {
	const [loading, setLoading] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const data = Object.fromEntries(fd.entries());
		const result = schema.safeParse(data);
		if (!result.success) {
			toast.error(result.error.issues[0]?.message ?? "Please fix the errors");
			return;
		}
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			toast.success("Message sent! We'll get back to you soon.");
			e.target.reset();
		}, 600);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Contact Us",
		subtitle: "We'd love to hear from you. Reach out for admissions, events, or any inquiry."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: { duration: .5 },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold",
						children: "Reach Us"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-4",
						children: [
							{
								icon: MapPin,
								t: "Address",
								v: SITE.address
							},
							{
								icon: Phone,
								t: "Phone",
								v: SITE.phone
							},
							{
								icon: Mail,
								t: "Email",
								v: SITE.email
							}
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-4 rounded-2xl border bg-card p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--gold)]/15 text-[var(--gold)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-widest text-muted-foreground",
									children: c.t
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-0.5 break-words font-semibold",
									children: c.v
								})]
							})]
						}, c.t))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-6 overflow-hidden rounded-2xl border",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							src: SITE.mapEmbed,
							width: "100%",
							height: "280",
							style: { border: 0 },
							allowFullScreen: true,
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade",
							title: "College location map"
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
				onSubmit,
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: { once: true },
				transition: {
					duration: .5,
					delay: .1
				},
				className: "space-y-4 rounded-3xl border bg-card p-6 shadow-sm sm:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl font-bold",
						children: "Send a Message"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "name",
								required: true
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Mobile Number" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								name: "mobile",
								inputMode: "numeric",
								maxLength: 10,
								required: true
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Email" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "email",
							type: "email",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Subject" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							name: "subject",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: "Message" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							name: "message",
							rows: 5,
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						disabled: loading,
						type: "submit",
						className: "w-full bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]",
						children: loading ? "Sending..." : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Send Message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "ml-1 h-4 w-4" })] })
					})
				]
			})]
		})
	})] });
}
//#endregion
export { ContactPage as component };
