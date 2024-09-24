import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: () => <div className="p-8 bg-red-400"> Hello /about!</div>,
});
