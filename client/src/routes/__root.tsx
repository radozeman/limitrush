import Nav from "@/components/nav/nav";
import { Outlet, Link, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <>
      <Nav />
      <Outlet />
    </>
  ),
});
