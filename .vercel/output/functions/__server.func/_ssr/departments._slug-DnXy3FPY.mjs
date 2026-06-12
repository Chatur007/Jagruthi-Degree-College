import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as SiteShell } from "./SiteShell-CFEJpPYK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/departments._slug-DnXy3FPY.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "mx-auto max-w-3xl px-4 py-32 text-center",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "font-display text-3xl font-bold",
		children: "Department not found"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/departments",
		className: "mt-4 inline-block text-[var(--gold)]",
		children: "Back to all departments"
	})]
}) });
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
