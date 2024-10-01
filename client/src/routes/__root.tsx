import Nav from "@/components/ui/nav/Nav";
import { Outlet, createRootRoute } from "@tanstack/react-router";

// const isAuthenticated = true;

export const Route = createRootRoute({
  // beforeLoad: async ({ location }) => {
  //   if (!isAuthenticated && location.pathname !== "/auth") {
  //     throw redirect({
  //       to: "/auth",
  //     });
  //   }
  //   if (isAuthenticated && location.pathname === "/auth") {
  //     throw redirect({
  //       to: "/",
  //     });
  //   }
  // },
  component: () => (
    <>
      <Nav />
      <Outlet />
    </>
  ),
});
