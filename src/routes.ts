import { lazy } from "solid-js";
import type { RouteDefinition } from "@solidjs/router";

import Home from "./pages/Home";
import AboutData from "./pages/about.data";

export const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/about",
    component: lazy(() => import("./pages/About")),
    data: AboutData,
  },
  {
    path: "/signup",
    component: lazy(() => import("./pages/SignUp")),
  },
  {
    path: "**",
    component: lazy(() => import("./errors/404")),
  },
];
