import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
	index("routes/home.tsx"),
	route("blog/:slug", "routes/blog.$slug.tsx"),
	route("experience/:slug", "routes/experience.$slug.tsx"),
] satisfies RouteConfig;
