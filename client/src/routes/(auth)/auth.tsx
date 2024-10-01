import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/auth")({
  component: () => <div>Hello /(auth)/auth!</div>,
});
