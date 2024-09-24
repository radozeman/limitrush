import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/edit-workout")({
  component: () => <div>Hello /edit-workout!</div>,
});
