import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/create-workout")({
  component: () => <div>Hello /create-workout!</div>,
});
