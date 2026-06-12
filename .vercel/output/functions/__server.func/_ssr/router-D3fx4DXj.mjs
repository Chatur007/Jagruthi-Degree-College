import { o as __toESM } from "../_runtime.mjs";
import { c as logo_default, s as SITE } from "./site-data-BjM9oklS.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { _ as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as Route$8 } from "./departments._slug-CRpkzY4X.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D3fx4DXj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-BoWXKqia.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Vidya Bharati College — Excellence in Education" },
			{
				name: "description",
				content: "A premier institution offering UG and PG programs in Arts, Commerce and Sciences."
			},
			{
				property: "og:title",
				content: "Vidya Bharati College"
			},
			{
				property: "og:description",
				content: "Excellence in education since 1978."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "icon",
				href: logo_default
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			richColors: true,
			position: "top-center"
		})]
	});
}
var $$splitComponentImporter$6 = () => import("./gallery-MTNsP7Fe.mjs");
var Route$6 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery — Vidya Bharati College" },
		{
			name: "description",
			content: "Campus, events, cultural activities, sports, workshops and laboratories at VBC."
		},
		{
			property: "og:title",
			content: "Gallery"
		},
		{
			property: "og:description",
			content: "Glimpses of life at Vidya Bharati College."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./departments-oRGjyv9V.mjs");
var Route$5 = createFileRoute("/departments")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./contact-CEoyLXyN.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Vidya Bharati College" },
		{
			name: "description",
			content: "Get in touch with Vidya Bharati College. Address, phone, email and map."
		},
		{
			property: "og:title",
			content: "Contact"
		},
		{
			property: "og:description",
			content: "Reach the admissions and administration offices."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./admissions-D2qW4vUS.mjs");
var Route$3 = createFileRoute("/admissions")({
	head: () => ({ meta: [
		{ title: "Admissions 2026-27 — Vidya Bharati College" },
		{
			name: "description",
			content: "Admission process, courses offered, eligibility, fee structure and online application."
		},
		{
			property: "og:title",
			content: "Admissions — Vidya Bharati College"
		},
		{
			property: "og:description",
			content: "Apply online for UG and PG programs."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./about-Cxve_Woz.mjs");
var Route$2 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Vidya Bharati College" },
		{
			name: "description",
			content: "History, vision, mission, infrastructure and achievements of Vidya Bharati College."
		},
		{
			property: "og:title",
			content: "About Vidya Bharati College"
		},
		{
			property: "og:description",
			content: "Five decades of academic excellence."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./routes-5xVy488z.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: `${SITE.name} — ${SITE.tagline}` },
		{
			name: "description",
			content: "A premier college offering UG and PG programs across Arts, Commerce, and Sciences. Apply for admission 2026-27."
		},
		{
			property: "og:title",
			content: SITE.name
		},
		{
			property: "og:description",
			content: SITE.tagline
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./departments.index-CRsPJw9y.mjs");
var Route = createFileRoute("/departments/")({
	head: () => ({ meta: [
		{ title: "Departments — Vidya Bharati College" },
		{
			name: "description",
			content: "Explore our eight academic departments across Arts, Commerce and Sciences."
		},
		{
			property: "og:title",
			content: "Departments"
		},
		{
			property: "og:description",
			content: "Academic departments at Vidya Bharati College."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var GalleryRoute = Route$6.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$7
});
var DepartmentsRoute = Route$5.update({
	id: "/departments",
	path: "/departments",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$4.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var AdmissionsRoute = Route$3.update({
	id: "/admissions",
	path: "/admissions",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var DepartmentsIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => DepartmentsRoute
});
var DepartmentsRouteChildren = {
	DepartmentsSlugRoute: Route$8.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => DepartmentsRoute
	}),
	DepartmentsIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdmissionsRoute,
	ContactRoute,
	DepartmentsRoute: DepartmentsRoute._addFileChildren(DepartmentsRouteChildren),
	GalleryRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
