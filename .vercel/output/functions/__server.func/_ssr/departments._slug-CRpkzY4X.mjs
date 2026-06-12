import { t as DEPARTMENTS } from "./site-data-BjM9oklS.mjs";
import { j as notFound, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/departments._slug-CRpkzY4X.js
var $$splitComponentImporter = () => import("./departments._slug--cdjILca.mjs");
var $$splitErrorComponentImporter = () => import("./departments._slug-C_B6fHbI.mjs");
var $$splitNotFoundComponentImporter = () => import("./departments._slug-DnXy3FPY.mjs");
var Route = createFileRoute("/departments/$slug")({
	loader: ({ params }) => {
		const dept = DEPARTMENTS.find((d) => d.slug === params.slug);
		if (!dept) throw notFound();
		return { dept };
	},
	head: ({ loaderData }) => ({ meta: loaderData ? [
		{ title: `${loaderData.dept.name} — Vidya Bharati College` },
		{
			name: "description",
			content: loaderData.dept.description
		},
		{
			property: "og:title",
			content: loaderData.dept.name
		},
		{
			property: "og:description",
			content: loaderData.dept.description
		},
		{
			property: "og:image",
			content: loaderData.dept.image
		}
	] : [] }),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
